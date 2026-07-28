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
- Vocabulary source is strictly `indata/vocab_01.md`. The `vocab-test-generator`
  skill already produces printable tests from this same list (see
  `outdata/batch_20260728_180605/`) — that's the *testing* side. This `/teach`
  workspace is the *learning* side; keep the two complementary, not duplicated.
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

**Progress (2026-07-28):** 178 words live in `jumble-data.js` across 6 batches
— `list1-part2` (8), `list13` (34), `list14` (34), `list11` (34), `list12`
(34), `list7` (34). Plus 3 words from Lesson 1 (CAUTION, ABODE, ENEMY) = 181
words total covered. Vocabulary Lists 7, 11, 12, 13, 14 are fully done.
**Efficiency note (2026-07-28):** for this large push, switched the default
clue pair to Meaning + Letter-position (both fast to write and mechanically
guaranteed correct) rather than always hunting for a chunk-spotting/rhyme
clue — chunk-spotting is still used when one is quickly obvious (kept several
per batch), just no longer forced for every word. This was a deliberate
speed/quality trade-off per explicit user instruction to prioritize covering
all remaining batches efficiently. Glossary entries for these batches also
dropped the "Notes" column (word + meaning only) for the same reason.
Remaining lists still to add, in list-number order (not yet reprioritized by
difficulty within this remainder): List 8 (39), List 9 (39), List 10 (28),
List 4 (33), List 5 (31), List 6 (14), List 2 (23), List 3 (28), List 1
remainder (43 — includes AFFECTIONATE, AMAZEMENT, ASSEMBLE, ASTONISH,
ASUNDER, BLANK, BRIGHT, BROAD and others never covered). That's 278 more
words / 9 more batches to fully exhaust the 14 vocabulary lists.
