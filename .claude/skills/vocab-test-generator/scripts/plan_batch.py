#!/usr/bin/env python3
"""
Parses a vocab markdown file (see indata/vocab_01.md for the expected shape)
and produces a deterministic-but-shuffled "batch plan": which vocabulary
entries go into which test, and which of the 8 question types each entry
should be turned into.

This script owns everything that must be *correct* (parsing, coverage
bookkeeping, letter-jumbling, distractor sampling) so that the LLM writing
the actual test files only has to do the part it's actually good at:
turning a (word, meaning, question type) triple into a well-written
question.

Usage:
    python plan_batch.py <vocab_md_path> --batch-dir <out_dir> [--scope "Vocabulary List 1,Vocabulary List 2"]
                          [--seed 12345] [--entries-per-test 40] [--agent-group-size 4]

Output (written under <batch-dir>/_plan/):
    plan_summary.json   - counts, test list, coverage stats
    test_01.json ... test_NN.json   - one file per test with its assigned
                                       question slots, ready to hand to a
                                       subagent
    agent_groups.json   - suggested grouping of tests into subagent batches
    manifest.md          - human-readable summary
"""
import argparse
import json
import random
import re
import sys
from pathlib import Path

QUESTION_TYPES = [
    "spelling_misspelled",
    "spelling_clue",
    "understanding_synonym_antonym",
    "usage_context",
    "jumbled_word",
    "jumbled_pair_missing_letter",
    "jumbled_word_synonym_antonym",
    "rhyming_synonym_antonym",
    "jumbled_sentence_extra_word",
]

# Which entry categories are allowed to feed which question types.
ELIGIBLE_TYPES = {
    "word": [
        "spelling_misspelled", "spelling_clue", "understanding_synonym_antonym",
        "jumbled_word", "jumbled_pair_missing_letter", "jumbled_word_synonym_antonym",
        "rhyming_synonym_antonym", "jumbled_sentence_extra_word",
    ],
    "word_dual_meaning": [
        "usage_context", "spelling_misspelled", "understanding_synonym_antonym",
        "jumbled_word", "jumbled_sentence_extra_word",
    ],
    "synant_row": [
        "understanding_synonym_antonym", "jumbled_word_synonym_antonym", "rhyming_synonym_antonym",
    ],
    "confusable_pair": [
        "usage_context", "spelling_misspelled",
    ],
    "compound_pair": [
        "jumbled_word", "spelling_clue",
    ],
    "latin_root": [
        "understanding_synonym_antonym",
    ],
    "greek_root": [
        "understanding_synonym_antonym",
    ],
}


def jumble_letters(word, rng, max_tries=25):
    letters = list(word.lower())
    original = "".join(letters)
    if len(letters) < 3:
        return original
    candidate = original
    for _ in range(max_tries):
        rng.shuffle(letters)
        candidate = "".join(letters)
        if candidate != original:
            break
    return candidate


def primary_word(entry, rng):
    """Pick a single representative word out of any entry category."""
    if "word" in entry:
        return entry["word"]
    if "combined" in entry:
        return entry["combined"]
    if "root" in entry:
        return entry["root"]
    if entry.get("category") == "synant_row":
        pool = entry["synonyms"] + entry["antonyms"]
        return rng.choice(pool)
    if entry.get("category") == "confusable_pair":
        return rng.choice(entry["words"])
    raise ValueError(f"Cannot derive a primary word from entry: {entry}")


def jumble_and_blank(word, rng):
    jumbled = jumble_letters(word, rng)
    pos = rng.randrange(len(jumbled))
    missing_letter = jumbled[pos]
    blanked = jumbled[:pos] + "_" + jumbled[pos + 1:]
    return {"jumbled_with_blank": blanked, "missing_letter": missing_letter, "answer": word}


# ---------------------------------------------------------------------------
# Parsing
# ---------------------------------------------------------------------------

def split_sections(md_text):
    """Split the markdown into (heading, body_lines) chunks on '## ' headings."""
    sections = []
    current_heading = None
    current_lines = []
    for line in md_text.splitlines():
        m = re.match(r"^##\s+(.*)$", line.strip())
        if m:
            if current_heading is not None:
                sections.append((current_heading, current_lines))
            current_heading = m.group(1).strip()
            current_lines = []
        else:
            current_lines.append(line)
    if current_heading is not None:
        sections.append((current_heading, current_lines))
    return sections


def parse_table_rows(lines):
    """Given lines of a markdown table, return list of row cell-lists, skipping the header + separator."""
    rows = []
    for line in lines:
        line = line.strip()
        if not line.startswith("|"):
            continue
        if re.match(r"^\|[\s\-:|]+\|$", line):
            continue  # separator row like |---|---|
        cells = [c.replace("\xa0", " ").strip() for c in line.strip("|").split("|")]
        rows.append(cells)
    if rows:
        rows = rows[1:]  # drop header row
    return rows


def parse_vocab_file(path):
    text = Path(path).read_text(encoding="utf-8")
    sections = split_sections(text)

    entries = []
    counters = {}

    def next_id(prefix):
        counters[prefix] = counters.get(prefix, 0) + 1
        return f"{prefix}-{counters[prefix]}"

    for heading, lines in sections:
        rows = parse_table_rows(lines)
        if not rows:
            continue

        if heading.lower().startswith("vocabulary list"):
            for cells in rows:
                if len(cells) < 2 or not cells[0]:
                    continue
                word, meaning = cells[0], cells[1]
                category = "word_dual_meaning" if re.search(r"\bOR\b", meaning) else "word"
                entries.append({
                    "id": next_id("W"),
                    "category": category,
                    "word": word,
                    "meaning": meaning,
                    "source": heading,
                })

        elif heading.lower().startswith("synonyms & antonyms"):
            for cells in rows:
                if len(cells) < 2 or not cells[0]:
                    continue
                synonyms = [s.strip() for s in cells[0].split(",") if s.strip()]
                antonyms = [s.strip() for s in cells[1].split(",") if s.strip()]
                if not synonyms or not antonyms:
                    continue
                entries.append({
                    "id": next_id("SA"),
                    "category": "synant_row",
                    "synonyms": synonyms,
                    "antonyms": antonyms,
                    "source": heading,
                })

        elif heading.lower().startswith("latin roots"):
            for cells in rows:
                if len(cells) < 2 or not cells[0]:
                    continue
                entries.append({
                    "id": next_id("LR"),
                    "category": "latin_root",
                    "root": cells[0],
                    "meaning": cells[1],
                    "source": heading,
                })

        elif heading.lower().startswith("greek roots"):
            for cells in rows:
                if len(cells) < 2 or not cells[0]:
                    continue
                entries.append({
                    "id": next_id("GR"),
                    "category": "greek_root",
                    "root": cells[0],
                    "meaning": cells[1],
                    "source": heading,
                })

        elif heading.lower().startswith("compound words"):
            for cells in rows:
                # 4 columns = two (left,right) pairs per row
                if len(cells) >= 2 and cells[0] and cells[1]:
                    entries.append({
                        "id": next_id("CW"),
                        "category": "compound_pair",
                        "left": cells[0], "right": cells[1],
                        "combined": cells[0] + cells[1],
                        "source": heading,
                    })
                if len(cells) >= 4 and cells[2] and cells[3]:
                    entries.append({
                        "id": next_id("CW"),
                        "category": "compound_pair",
                        "left": cells[2], "right": cells[3],
                        "combined": cells[2] + cells[3],
                        "source": heading,
                    })

        elif heading.lower().startswith("confusable word pairs"):
            for cells in rows:
                if len(cells) < 3 or not cells[0]:
                    continue
                parts = [p.strip() for p in cells[0].split("/")]
                if len(parts) < 2:
                    continue
                entries.append({
                    "id": next_id("CF"),
                    "category": "confusable_pair",
                    "words": parts,
                    "meanings": cells[1:1 + len(parts)],
                    "source": heading,
                })

        # Any other section headings are ignored (e.g. a stray intro section).

    return entries


# ---------------------------------------------------------------------------
# Planning / distribution
# ---------------------------------------------------------------------------

def build_plan(entries, rng, entries_per_test):
    shuffled = entries[:]
    rng.shuffle(shuffled)

    n_tests = max(1, -(-len(shuffled) // entries_per_test))  # ceil div
    tests = [{"test_number": i + 1, "slots": []} for i in range(n_tests)]

    # Round-robin counters so question types get balanced across each test,
    # and each test gets filled round-robin too, so no test is starved.
    type_cursor = {t: 0 for t in QUESTION_TYPES}
    test_cursor = 0

    for entry in shuffled:
        eligible = ELIGIBLE_TYPES.get(entry["category"], [])
        if not eligible:
            continue
        # pick the eligible type that is least-used so far (balances the mix)
        chosen_type = min(eligible, key=lambda t: type_cursor[t])
        type_cursor[chosen_type] += 1

        test = tests[test_cursor % n_tests]
        test_cursor += 1

        slot = {"question_type": chosen_type, "entry": entry}

        if chosen_type == "jumbled_word":
            base_word = primary_word(entry, rng)
            slot["jumbled"] = jumble_letters(base_word, rng)
        elif chosen_type == "jumbled_word_synonym_antonym":
            target_word = primary_word(entry, rng)
            slot["target_word"] = target_word
            slot["jumbled"] = jumble_letters(target_word, rng)
        elif chosen_type == "spelling_clue":
            base_word = primary_word(entry, rng)
            slot["clue"] = {
                "first_letter": base_word[0],
                "last_letter": base_word[-1],
                "letters_between": max(0, len(base_word) - 2),
                "total_letters": len(base_word),
            }
        elif chosen_type == "rhyming_synonym_antonym":
            slot["anchor_word"] = primary_word(entry, rng)

        test["slots"].append(slot)

    # jumbled_pair_missing_letter needs entries in PAIRS; pull word-category
    # slots two at a time across the whole plan and convert them in place.
    pair_slots = []
    for test in tests:
        for slot in test["slots"]:
            if slot["question_type"] == "jumbled_pair_missing_letter":
                pair_slots.append((test, slot))

    combined = []
    for i in range(0, len(pair_slots) - 1, 2):
        (test_a, slot_a), (test_b, slot_b) = pair_slots[i], pair_slots[i + 1]
        word_a = primary_word(slot_a["entry"], rng)
        word_b = primary_word(slot_b["entry"], rng)
        jb_a = jumble_and_blank(word_a, rng)
        jb_b = jumble_and_blank(word_b, rng)
        # Keep slot_a as the merged pair question; drop slot_b from its test.
        slot_a["paired_entry"] = slot_b["entry"]
        slot_a["word_a"] = {**jb_a, "meaning": slot_a["entry"].get("meaning", "")}
        slot_a["word_b"] = {**jb_b, "meaning": slot_b["entry"].get("meaning", "")}
        test_b["slots"].remove(slot_b)
        combined.append(slot_a)
    # If odd one out remains, demote it to a plain jumbled_word question.
    if len(pair_slots) % 2 == 1:
        test_last, slot_last = pair_slots[-1]
        slot_last["question_type"] = "jumbled_word"
        base_word = primary_word(slot_last["entry"], rng)
        slot_last["jumbled"] = jumble_letters(base_word, rng)

    # Attach distractor pools for MCQ-style types (raw material; the writer
    # picks/adapts plausible ones).
    word_pool = [e for e in entries if e["category"] in ("word", "word_dual_meaning")]
    for test in tests:
        for slot in test["slots"]:
            if slot["question_type"] in ("understanding_synonym_antonym", "jumbled_word_synonym_antonym"):
                others = [e for e in word_pool if e is not slot["entry"]]
                slot["distractor_pool"] = rng.sample(others, min(6, len(others)))

    return tests, n_tests


def group_tests_for_agents(n_tests, group_size):
    groups = []
    for start in range(0, n_tests, group_size):
        groups.append(list(range(start + 1, min(start + group_size, n_tests) + 1)))
    return groups


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("vocab_path")
    ap.add_argument("--batch-dir", required=True)
    ap.add_argument("--scope", default=None,
                     help="Comma-separated substrings; only sections whose heading contains one of these are included. Omit for the whole file.")
    ap.add_argument("--seed", type=int, default=None)
    ap.add_argument("--entries-per-test", type=int, default=40)
    ap.add_argument("--agent-group-size", type=int, default=4)
    args = ap.parse_args()

    seed = args.seed if args.seed is not None else random.randrange(1, 10**9)
    rng = random.Random(seed)

    entries = parse_vocab_file(args.vocab_path)
    if args.scope:
        scopes = [s.strip().lower() for s in args.scope.split(",")]
        entries = [e for e in entries if any(s in e["source"].lower() for s in scopes)]

    if not entries:
        print("No entries parsed -- check the vocab file path/scope.", file=sys.stderr)
        sys.exit(1)

    tests, n_tests = build_plan(entries, rng, args.entries_per_test)
    agent_groups = group_tests_for_agents(n_tests, args.agent_group_size)

    plan_dir = Path(args.batch_dir) / "_plan"
    plan_dir.mkdir(parents=True, exist_ok=True)

    for test in tests:
        out_path = plan_dir / f"test_{test['test_number']:02d}.json"
        out_path.write_text(json.dumps(test, indent=2), encoding="utf-8")

    by_category = {}
    for e in entries:
        by_category[e["category"]] = by_category.get(e["category"], 0) + 1

    by_type = {}
    for test in tests:
        for slot in test["slots"]:
            by_type[slot["question_type"]] = by_type.get(slot["question_type"], 0) + 1

    summary = {
        "seed": seed,
        "vocab_path": str(args.vocab_path),
        "scope": args.scope,
        "total_entries": len(entries),
        "entries_by_category": by_category,
        "n_tests": n_tests,
        "questions_by_type": by_type,
        "agent_groups": agent_groups,
    }
    (plan_dir / "plan_summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")

    manifest_lines = [
        f"# Batch plan", "",
        f"- Seed: {seed}",
        f"- Vocab source: {args.vocab_path}",
        f"- Scope: {args.scope or 'whole file'}",
        f"- Total vocabulary entries covered: {len(entries)}",
        f"- Number of tests: {n_tests}",
        "", "## Entries by category", "",
    ]
    for k, v in sorted(by_category.items()):
        manifest_lines.append(f"- {k}: {v}")
    manifest_lines += ["", "## Questions by type", ""]
    for k, v in sorted(by_type.items()):
        manifest_lines.append(f"- {k}: {v}")
    manifest_lines += ["", "## Suggested subagent groupings (test numbers)", ""]
    for i, g in enumerate(agent_groups, 1):
        manifest_lines.append(f"- Group {i}: tests {g}")
    (plan_dir / "manifest.md").write_text("\n".join(manifest_lines), encoding="utf-8")

    print(json.dumps(summary, indent=2))


if __name__ == "__main__":
    main()
