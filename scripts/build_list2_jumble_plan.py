#!/usr/bin/env python3
"""
Deterministic prep step for turning indata/vocab_02_reference_table.md into
jumble-data-list2.js batches. Owns everything that must be *correct*: parsing
the rich word|synonyms|antonyms|sentence table (incl. homonym '<br>'-split
cells), and generating a well-scrambled, verified-unique jumble for every
word. Writing the actual before/after sentence wording, clue phrasing, and
explanation is left to the LLM (see NOTES.md convention) -- this script only
emits the structured facts needed to do that correctly.

Usage:
    python scripts/build_list2_jumble_plan.py

Output: outdata/list2_jumble_plan/batch_01.json ... batch_NN.json,
        outdata/list2_jumble_plan/summary.json
"""
import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "indata" / "vocab_02_reference_table.md"
OUT_DIR = ROOT / "outdata" / "list2_jumble_plan"
BATCH_SIZE = 27


def split_meaning_cell(cell):
    """Split a table cell on '<br>' into (label, text) parts, stripping any
    leading '**(N) label:**' or '**(N)**' homonym-sense marker."""
    parts = []
    for chunk in cell.split("<br>"):
        chunk = chunk.strip()
        m = re.match(r"^\*\*\((\d+)\)\s*([^*]*)\*\*\s*(.*)$", chunk)
        if m:
            label = m.group(2).strip().rstrip(":").strip()
            text = m.group(3).strip()
        else:
            label, text = "", chunk
        parts.append((label, text))
    return parts


def clean_list(text):
    return [t.strip() for t in text.split(",") if t.strip() and t.strip() != "—"]


def parse_table(path):
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    rows = []
    in_table = False
    for line in lines:
        s = line.strip()
        if not s.startswith("|"):
            continue
        if re.match(r"^\|[\s\-:|]+\|$", s):
            in_table = True
            continue
        cells = [c.replace("\xa0", " ").strip() for c in s.strip("|").split("|")]
        if not in_table:
            continue  # header row, before the separator
        rows.append(cells)
    return rows


def build_entries(rows):
    entries = []
    for cells in rows:
        if len(cells) < 4 or not cells[0]:
            continue
        word = cells[0]
        syn_parts = split_meaning_cell(cells[1])
        ant_parts = split_meaning_cell(cells[2])
        sent_parts = split_meaning_cell(cells[3])
        n_senses = max(len(syn_parts), len(ant_parts), len(sent_parts), 1)
        meanings = []
        for i in range(n_senses):
            label, syn_text = syn_parts[i] if i < len(syn_parts) else ("", "")
            _, ant_text = ant_parts[i] if i < len(ant_parts) else ("", "")
            _, sent_text = sent_parts[i] if i < len(sent_parts) else ("", "")
            meanings.append({
                "label": label,
                "synonyms": clean_list(syn_text),
                "antonyms": clean_list(ant_text),
                "sentences": [s.strip() for s in re.split(r"(?<=[.!?])\s+", sent_text.strip()) if s.strip()],
            })
        entries.append({
            "word": word,
            "dual_meaning": len(meanings) > 1,
            "meanings": meanings,
        })
    return entries


def make_jumble(word, other_words, rng):
    """Full random shuffle, retried until: different from the original,
    different from a plain reversal, at least half the letters displaced
    from their original position, and not accidentally equal to another
    word already in this same 262-word list."""
    core = word.replace(" ", "").upper()
    others = {w.replace(" ", "").upper() for w in other_words if w != word}
    letters = list(core)
    reversed_core = core[::-1]
    n = len(letters)
    min_displacement = max(1, -(-n // 2))  # ceil(n/2)

    best = None
    for _ in range(500):
        shuffled = letters[:]
        rng.shuffle(shuffled)
        candidate = "".join(shuffled)
        if candidate == core or candidate == reversed_core:
            continue
        if candidate in others:
            continue
        # Giveaway check: don't let the first (or last) letter land back in
        # its original spot when the word is long enough to avoid it -- an
        # unchanged first letter makes the jumble feel barely scrambled.
        if n >= 4 and (candidate[0] == core[0] or candidate[-1] == core[-1]):
            if best is None:
                best = candidate
            continue
        displaced = sum(1 for a, b in zip(candidate, core) if a != b)
        if displaced < min_displacement:
            if best is None:
                best = candidate  # keep as fallback in case nothing better turns up
            continue
        best = candidate
        break
    result = best or core
    if " " in word:
        # Reinsert a single separating space at the same relative midpoint
        # so "BUND WALL" style answers keep a two-token shape.
        split_at = len(word.split(" ")[0])
        result = result[:split_at] + " " + result[split_at:]
    return result


def main():
    rows = parse_table(SRC)
    entries = build_entries(rows)
    all_words = [e["word"] for e in entries]

    rng = random.Random(20260806)  # fixed seed: reproducible across reruns
    for e in entries:
        e["jumbled"] = make_jumble(e["word"], all_words, rng)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    n_batches = -(-len(entries) // BATCH_SIZE)
    batches = []
    for i in range(n_batches):
        chunk = entries[i * BATCH_SIZE:(i + 1) * BATCH_SIZE]
        batch_id = f"list2-batch{i + 1:02d}"
        out_path = OUT_DIR / f"batch_{i + 1:02d}.json"
        out_path.write_text(json.dumps({"batch_id": batch_id, "words": chunk}, indent=2), encoding="utf-8")
        batches.append({"batch_id": batch_id, "file": out_path.name, "count": len(chunk)})

    dual_count = sum(1 for e in entries if e["dual_meaning"])
    summary = {
        "total_words": len(entries),
        "n_batches": n_batches,
        "batch_size": BATCH_SIZE,
        "dual_meaning_count": dual_count,
        "dual_meaning_words": [e["word"] for e in entries if e["dual_meaning"]],
        "batches": batches,
    }
    (OUT_DIR / "summary.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")

    # Sanity checks, printed for a human/agent to skim.
    problems = []
    seen_jumbled = {}
    for e in entries:
        core = e["word"].replace(" ", "").upper()
        j = e["jumbled"].replace(" ", "")
        if sorted(j) != sorted(core):
            problems.append(f"LETTER MISMATCH: {e['word']} -> {e['jumbled']}")
        if j == core:
            problems.append(f"NOT SCRAMBLED: {e['word']} -> {e['jumbled']}")
        key = j
        if key in seen_jumbled:
            problems.append(f"DUPLICATE JUMBLE: {e['word']} and {seen_jumbled[key]} both -> {j}")
        seen_jumbled[key] = e["word"]

    print(json.dumps(summary, indent=2))
    if problems:
        print("\nPROBLEMS FOUND:")
        for p in problems:
            print(" -", p)
    else:
        print("\nAll jumbles verified: same letters as source word, actually scrambled, no collisions.")


if __name__ == "__main__":
    main()
