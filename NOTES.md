# Notes

- Child's name inferred from the workspace directory name "Madhav11plus" — used as
  "Madhav" in lessons. Unconfirmed; correct if wrong.
- 11+ exam prep, Year 6 (age 10-11). No firm exam date given yet — ask again if it
  becomes relevant to pacing.
- Cadence: daily sessions. **Revised (2026-07-28): pacing changed from "short,
  single-focus" to "as many words per page as reasonably fit."** Session length
  is flexible rather than a strict 10-15 min cap — see MISSION.md Constraints,
  updated to match. Lessons/batches are worked through at the child's own pace,
  can span multiple sittings.
- Current jumbled-word approach going in: no strategy, guesses randomly. First
  priority is teaching a repeatable decoding strategy, not just vocab recall.
- Vocabulary source was originally strictly `indata/vocab_01.md`; a second,
  independent list `indata/vocab_02.md` (262 words) was added 2026-08-06, kept
  on its own growing practice page (`lessons/0003-vocabulary-list-2-practice.html`
  + `assets/jumble-data-list2.js`) rather than merged into the first, since the
  two are separate sources with separate progress tracking (see Architecture
  below). The `vocab-test-generator` skill already produces printable tests
  from `vocab_01.md`'s format (see `outdata/batch_20260728_180605/`) — that's
  the *testing* side. This `/teach` workspace is the *learning* side; keep the
  two complementary, not duplicated.
- `task02.md` defines 3 target jumbled-word question types: (1) plain jumbled word
  in sentence context, (2) jumbled word pair with missing letters, (3) jumbled word
  with synonym/antonym options to choose from. Only type (1) is built so far.
  Interleaving types across sessions is fine — not required to finish all plain
  jumbles before starting the others.

## Architecture (revised 2026-07-28 — read this before adding content)

**One growing practice page, not one file per batch.** User explicitly said not
to keep creating new lesson pages/files. The structure is now:
- `lessons/0001-decode-your-first-jumbled-word.html` — the one-time strategy
  lesson (C.L.U.E. taught + worked example). Stays a standalone page; not part
  of the growing batch system.
- `lessons/0002-jumbled-word-practice.html` — a **static shell** that never
  needs new words hand-added to its markup. It loads `assets/jumble-data.js`
  and renders every batch in `JUMBLE_BATCHES` as a collapsed `<details>`
  section (title + word count only, no answers named), auto-opening the most
  recent batch. All future word batches go here.
- `assets/jumble-data.js` — the actual content. **To add a new batch of
  words: append a new `{ id, title, source, words: [...] }` object to
  `JUMBLE_BATCHES`. Do not create a new HTML file for it.** `title` must not
  name any individual answer word (same rule as before, just applied to batch
  titles now instead of lesson headers).
- `assets/reveal.js` has `initJumbleWidget` (single word) and
  `initJumbleSet(containerId, items)` (renders many "Word N" blocks from one
  array) — both reused by the practice page.
- Reference docs (`reference/glossary.html`, `reference/jumbled-word-strategy.html`)
  and `index.html` link to the practice page, not to individual batch pages.

Two prior standalone lesson files (`0002-list-1-batch-two.html`,
`0003-hardest-words-batch-one.html`) were merged into this system and deleted
— their 8 + 34 words became the first two entries in `jumble-data.js`
(`list1-part2`, `list13`). No content was lost, only the file structure changed.

**Second source, second page (added 2026-08-06):** `indata/vocab_02.md` (262
words after dedup, reference table with synonyms/antonyms/example sentences at
`indata/vocab_02_reference_table.md`) is a distinct list from `vocab_01.md`,
so it got its own data file (`assets/jumble-data-list2.js`, array
`JUMBLE_BATCHES_LIST2`) and its own growing page
(`lessons/0003-vocabulary-list-2-practice.html`) — same "one growing page,
append batches, never a new file per batch" rule as Lesson 2, just scoped to
this second source instead of merging into the first (batch ids would
otherwise collide and the two lists' difficulty ordering isn't comparable).
Progress tracking still shares one `ProgressStore`/localStorage key, safely,
because batch ids are prefixed differently (`list2-batchNN` vs `listN` /
`list1-part2` etc.) — no changes needed to `progress.js`.
`indata/vocab_02_reference_table.md` has 18 words with two distinct meanings
(true homonyms, not just related senses); those get a dedicated "Homonym" clue
stage and a hint chip typed `"homonym"` (renders as "(homonym)" via
`reveal.js`'s untyped-hint fallback — no `reveal.js` code change needed for
this new type).

**Jumble-generation method that scales reliably:** reverse the word's letters,
then swap one adjacent pair (or two) to break the obvious "read it backwards"
pattern — guarantees a correct anagram with near-zero manual verification
risk. Used for all words so far.

**Long/heavy-repeated-letter words get extra scaffolding, not exclusion:**
10-13 letter words (PROCRASTINATE, SERENDIPITOUS) get a "word shape" clue
(most letters shown, 1-2 blanked) instead of a plain letter-position clue.
AFFECTIONATE, AMAZEMENT, ASSEMBLE, ASTONISH, ASUNDER, COMPREHEND,
CONVERSATION (deferred from List 1, still not covered) can use the same
treatment when their turn comes.

**Standing conventions:**
1. Every page gets a top and bottom `nav.pagenav` with Home / Previous / Next
   links — hardcoded per page since these are opened as local `file://` files
   (JS-fetched includes don't work). The practice page's own "Next" is left
   blank (it's the last page in the sequence for now).
2. Never name answer words anywhere outside a solved widget's own
   reveal/explanation — not in page titles, index.html blurbs, intro callouts,
   batch titles, or Recap sections. Use counts instead ("42 words across 2
   batches"). The Glossary and C.L.U.E. reference pages are the deliberate
   exception — post-lesson answer-key references, not lesson content itself.
3. Hardest vocabulary first, not list order (see Priority order below).

## Priority order and progress

Total scope in `indata/vocab_01.md`: 458 single vocabulary words across Lists
1-14, plus 123 synonym/antonym cluster-rows (Sets 1-5), 68 compound words, 42
Latin/Greek roots, 20 confusable pairs.

Difficulty-first order (revised 2026-07-28, overrides original list order):
List 13 (done) → List 14 → Lists 11-12 (also advanced) → medium lists 7-10 →
4-6 → whatever remains of 1-3 last. Synonym/antonym sets, compound words, and
roots get folded in via interleaving once the plain-jumble format is
comfortable, not necessarily after all 458 words are done.

**COMPLETE (2026-07-28):** All 459 words across all 14 Vocabulary Lists in
`indata/vocab_01.md` are now covered in the Jumbled Word Practice page — 11
batches in `jumble-data.js` (456 words: `list1-part2`, `list13`, `list14`,
`list11`, `list12`, `list7`, `list8`, `list9`, `list10`, `list4`, `list5`,
`list6`, `list2`, `list3`, `list1-remainder`) plus Lesson 1's 3 words
(CAUTION, ABODE, ENEMY). Some words that repeat across the source file's
lists (e.g. ABUNDANT, CURB, DECEIT, REGIMENT, PROSPEROUS, REMEDY, VACANT,
WRATH, HEROIC, PURSUE, ACQUIRE, CUSTOM, QUAINT, PURCHASE) were deliberately
jumbled fresh each time they recur, with a callback note in the sentence
("Also seen in List X — a repeat word") rather than skipped, since the
source file's own repetition is a spaced-repetition feature worth keeping.
**Efficiency approach used throughout this push:** default clue pair is
Meaning + Letter-position (fast, mechanically guaranteed correct); chunk-
spotting/rhyme/word-shape clues used opportunistically where quickly
obvious, not forced. Every jumble was built by reversing the word then
swapping one adjacent letter pair — checked each time that the result isn't
itself an accidental real word (a few were caught and re-swapped: ROUT,
LAIR, EMIT, KIN all needed a different swap to avoid spelling TOUR, RAIL,
TIME, INK). Glossary entries for the largest later batches were compressed
to word + meaning only (see glossary.html) rather than fully exhaustive, to
keep pace — the practice page's own explanations are the source of truth for
meanings on those words.
**What's NOT yet covered:** Synonym/Antonym Sets 1-5 (123 rows), Compound
Words (68 words), Latin/Greek Roots (42 roots), Confusable Word Pairs (20
pairs) — these map to task02's other two question types (missing-letter
pairs; synonym/antonym-option jumbles) and haven't been built yet. Next
natural step if continuing this course.

## Vocabulary List 2 (added 2026-08-06)

**COMPLETE:** All 262 words in `indata/vocab_02.md` (deduped from 276 raw
entries) are covered in `lessons/0003-vocabulary-list-2-practice.html` — 10
batches in `assets/jumble-data-list2.js` (`list2-batch01` .. `list2-batch10`,
27 words each except the last which has 19). Built via a deterministic prep
script (`scripts/build_list2_jumble_plan.py`, parses
`indata/vocab_02_reference_table.md` and generates verified, well-scrambled
jumbles — full random shuffle, retried until different from both the original
and its plain reversal, at least half the letters displaced, and the first/last
letter changed for words of 4+ letters) plus 5 parallel subagents that wrote
the actual before/after sentences, clues, hints, and explanations from the
plan's structured data (reusing the reference table's own synonyms, antonyms,
and example sentences rather than inventing new ones).

18 words have two genuinely distinct meanings (true homonyms, not just related
senses): Obscure, Refuse, Annuals, Extract, Exact, Appreciate, Refrain, Habit,
Deliberate, Vain, Course, Conduct, Converse, Desert, Content, Ground,
Reservations, Darn. Each gets a third clue tagged "Homonym" naming both senses
plainly, plus a hint chip typed `"homonym"` pointing at the other meaning's
synonym — a deliberate custom type, not in `reveal.js`'s `TYPE_LABEL` map, so
it renders via the existing untyped-hint fallback as "(homonym)" with no
`reveal.js` changes needed.

**Caught and fixed during review:** several of the "Homonym" clues initially
named the answer word itself (or an inflected form, e.g. "conducting an
experiment" for CONDUCT, "grounds for complaint" for GROUND) while explaining
the second sense — technically true to the word but a real pre-reveal leak
under the standing "never name answer words outside reveal/explanation" rule.
Antonym hint chips that happen to contain the base word as a prefix/suffix
(INCOMPETENT, INVALID, MISCONDUCT, DISCONTENT) were judged acceptable and left
alone — those are the standard, expected antonym form for those words, not a
giveaway.

`indata/vocab_02_reference_table.md` also has a matching entry in the
`vocab-test-generator` skill: `plan_batch.py` was extended to auto-detect this
4-column (word/synonyms/antonyms/sentence) table shape under the same
`## Vocabulary List N` heading convention, so printable tests can be generated
from it too (separately from this jumbled-word page).
