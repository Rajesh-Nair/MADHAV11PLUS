---
name: vocab-test-generator
description: Generate printable vocabulary tests (and answer keys) for a child from indata/vocab_01.md, a 700+ entry list of 11+-level words, synonym/antonym clusters, Greek/Latin roots, compound words, and confusable word pairs. Use this whenever the user asks to create, generate, or make a vocabulary test, quiz, worksheet, or practice paper for the child, asks to "test the vocab list," wants printable homework/practice material covering the word list, or wants a fresh batch of tests after finishing a previous one — even if they don't spell out the question types, since this skill already encodes the required format (spelling, synonym/antonym understanding, homophone/homograph usage, jumbled words, rhyming clues, jumbled sentences). Also use it if the user asks to test only part of the list (e.g. "just Vocabulary List 3" or "the synonyms and antonyms sections").
---

# Vocabulary test generator

Produces a batch of printable vocabulary tests plus one combined answer key,
built from `indata/vocab_01.md`. Every run reshuffles which words land in
which test and which question type they become, so re-running produces a
genuinely fresh batch rather than the same tests in a different file name.

The heavy lifting is split on purpose:

- **`scripts/plan_batch.py` (deterministic, do not skip)** parses the vocab
  file, guarantees every single entry is scheduled into exactly one question
  slot somewhere in the batch, and precomputes the parts that must be
  *correct* rather than merely plausible — letter jumbles, missing-letter
  blanks, and spelling-clue letter counts.
- **You** write the actual questions — sentences, passages, rhymes,
  misspellings, distractor options — because that needs real language
  judgment the script can't provide. `references/question_types.md` has a
  worked template and example for each of the 8 required question types;
  read it before writing questions, not after.

## Step 1 — Decide scope

Default to covering the **whole file** every run — that's what "the batch
covers all the vocabulary at least once" means. Only narrow the scope if the
user explicitly names a subset (a specific `Vocabulary List N`, `Synonyms &
Antonyms N`, `Latin Roots`, `Compound Words`, etc. — match against the `##`
headings in `indata/vocab_01.md`).

## Step 2 — Build the plan

```bash
python .claude/skills/vocab-test-generator/scripts/plan_batch.py \
  indata/vocab_01.md \
  --batch-dir outdata/batch_<YYYYMMDD_HHMMSS> \
  [--scope "Vocabulary List 3,Synonyms & Antonyms 2"] \
  [--entries-per-test 40]
```

Omit `--seed` — let it pick a fresh random one each run, which is what makes
repeated runs produce different tests. `--entries-per-test` defaults to 40,
which for the full file lands around 18 tests of roughly 35-45 questions
each; that's a reasonable proxy for "2 A4 pages, both sides" printed at a
normal font size, but it's an approximation, not a measured fact — see the
sanity check in Step 5.

This writes `outdata/batch_<...>/_plan/`:
- `plan_summary.json` — counts and the suggested subagent groupings
- `test_01.json` … `test_NN.json` — one file per test, each a list of
  question "slots" (type + source vocab entry + any precomputed fields)
- `manifest.md` — human-readable version of the same

Read `plan_summary.json` now. It tells you `n_tests` and `agent_groups` (test
numbers bundled into reasonably sized batches for parallel work).

## Step 3 — Read the question type reference

Read `references/question_types.md` in full before writing anything — it
defines all 8 required question types (spelling — both the misspelled-word
and spell-from-clue variants, synonym/antonym understanding, homophone/
homograph usage, jumbled word, jumbled word pair with missing letters,
jumbled word with synonym/antonym options, rhyming synonym/antonym, and
jumbled sentence with an extra word) with the exact JSON fields each type
consumes and a worked example. Every slot's `question_type` in the plan maps
to one section of that file.

## Step 4 — Write the tests (fan out with subagents)

For each group in `agent_groups`, spawn one subagent (the `Agent` tool,
`general-purpose` type is fine) to write that group's tests. Running the
groups in parallel is the point — each group is self-contained, so there's
no reason to serialize this. Give each subagent:

- The absolute paths to its assigned `_plan/test_NN.json` files
- The absolute path to `references/question_types.md` and an instruction to
  read it before writing
- The target output paths: `outdata/batch_<...>/test_NN.md` for each test,
  and `outdata/batch_<...>/_plan/answers_NN.md` for that test's answer
  fragment (same numbering, written in lockstep as questions are composed —
  don't try to reconstruct answers afterward from the question text)
- The test file template below
- A reminder that the vocabulary words/meanings/jumbles in each slot's JSON
  are authoritative — never substitute a different word or re-derive a
  jumble by hand

**Test file template** (one file per test):

```markdown
# Vocabulary Test <NN>

Name: _______________________   Date: _______________________

Instructions: Read each question carefully. Circle or write your answer
in the space provided.

## Section 1 — Spelling

1. ...

## Section 2 — Synonyms & Antonyms

...

## Section 3 — Word Meaning in Context

...

## Section 4 — Jumbled Words

...

## Section 5 — Rhyme & Meaning

...

## Section 6 — Jumbled Sentences
```

Group questions into sections by `question_type` (you can combine related
types under one heading, e.g. both spelling variants under "Spelling," both
jumbled-word variants together) rather than listing all 8 raw type names —
it reads more like a real test that way. Number questions continuously
1..N across the whole test, not restarting per section, since the answer
key follows the same numbering.

**Answer fragment template** (`answers_NN.md`):

```markdown
## Test <NN>

1. guard (was misspelled as "gaurd")
2. gyrate
3. ancient
...
```

## Step 5 — Sanity-check length, then assemble

After a group's subagent returns, skim one of its test files: if it's
obviously way short of "2 printed A4 pages, both sides" (a rough guide: 35+
numbered questions with reasonable spacing) or way over, note it — if it's
systematically off across the batch, adjust `--entries-per-test` and regenerate
rather than manually padding individual files.

Once every test is written, assemble the final answer key by concatenating
the `answers_NN.md` fragments in test-number order into a single
`outdata/batch_<...>/answer_key.md`, with a one-line header noting the batch
folder and the date generated. This step is pure concatenation — do it
directly, no subagent needed.

Finally, tell the user where the batch landed (`outdata/batch_<...>/`), how
many tests, and the entry-category breakdown from `plan_summary.json` (so
they can see roots, compound words, confusables, etc. were all included, not
just the numbered word lists).

## Notes

- Tests are Markdown so they open and print cleanly from any editor or
  browser; no HTML/CSS pipeline to maintain.
- Every run creates a **new** batch folder — never overwrite a previous
  batch. If the user wants to regenerate, that's a fresh folder with a fresh
  shuffle, not an edit to the old one.
- If `indata/vocab_01.md` has been edited since the last run (new words
  added), nothing extra is needed — the parser just picks up whatever
  sections/rows are currently in the file.
