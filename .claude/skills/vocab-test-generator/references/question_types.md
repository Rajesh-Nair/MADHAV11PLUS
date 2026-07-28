# The 8 question types

For each test, `plan_batch.py` hands you a JSON file (`_plan/test_NN.json`) — a
list of "slots," each with a `question_type` and the vocabulary `entry` (plus,
for some types, precomputed helper fields like a jumbled spelling or a spelling
clue). Your job for each slot is to turn that structured data into a
well-written question a real 11+ vocabulary paper might contain, and to record
the answer.

**Never invent a vocabulary word that isn't in the slot's `entry`.** The
letters/meanings the script gives you are already correct — don't re-jumble,
re-derive letter counts, or substitute a different word. The parts that need
your judgment are the sentence, the passage, the distractor options, and (for
rhymes) finding the rhyming word — the script deliberately leaves those to you
because they need real language sense, not because they're unspecified.

Mix option counts across a test: mostly 4 options, sometimes 5, and
occasionally none at all (when the clues given already narrow the answer to
one word). Don't make every question in a test the same shape.

---

## 1. `spelling_misspelled`

**Data given:** `entry.word`, `entry.meaning`

Write a sentence that uses the word in a way that makes its meaning clear
from context. About half the time, deliberately misspell the vocabulary word
using a mistake a child might plausibly make (swapped adjacent letters,
doubled/dropped letter, a phonetic mix-up like "ei"/"ie" or "-able"/"-ible").
The other half of the time, spell it correctly. Ask the child to spot the
mistake (and correct it) or state "No mistake."

Vary this 50/50 split across the whole test — don't make every instance of
this type wrong, or every instance correct.

Markdown has no native underline, so mark the target word in **bold**
instead of describing it as "underlined," and word the instruction to match
("Is the bolded word spelled correctly?").

```
The guard stood watch outside the castle gates. Is the bolded
word spelled correctly? If not, write the correct spelling.

  The **gaurd** stood watch outside the castle gates.

Answer: Incorrect — should be "guard".
```

## 2. `spelling_clue`

**Data given:** `entry.clue.first_letter`, `.last_letter`, `.letters_between`,
`.total_letters`, and `entry.meaning` as the synonym clue.

State the letter-shape clue and the meaning clue plainly, keeping the
phrasing consistent question to question so a child learns the pattern
quickly. Then add a **second, independently useful clue** beyond the
meaning — either a rhyme hint (a real word that rhymes with the answer,
named the way `rhyming_synonym_antonym` does) or a short example sentence
with the word blanked out. Vary which of the two you use from question to
question across a test, the same way the 50/50 split is varied for
`spelling_misspelled` — don't make every instance of this type use the same
second-clue style.

```
I start with G and end with E, with 4 letters in between (6 letters total).
I mean the same as "turn, spin, revolve." It rhymes with "narrate."
What word am I?

Answer: gyrate
```

```
I start with D and end with R, with 5 letters in between (7 letters total).
I mean having no hope. As used in a sentence: "After losing the match, she
felt utterly ______." What word am I?

Answer: despair
```

## 3. `understanding_synonym_antonym`

**Data given** depends on the entry's category:

- `word` / `word_dual_meaning`: just `entry.word` + `entry.meaning`.
- `synant_row`: `entry.synonyms` (a cluster of true synonyms) and
  `entry.antonyms` (a true antonym cluster) — use one member of a cluster in
  your passage, and a *different* member of the same or opposite cluster as
  the clue word in your question, so the child isn't just matching identical
  text.
- `latin_root` / `greek_root`: `entry.root` + `entry.meaning`. Think of a real
  English word that contains the root (e.g. root "aqua" → "aquarium" or
  "aquatic") and use *that* word in your passage.

Write a short passage (2-4 sentences, can be about anything — weather, a
school trip, a story) that naturally includes the target word plus 3-5 other
"filler" words (ideally other vocabulary words, otherwise ordinary words).
Then ask the child to pick out the word from the passage that means the same
as / the opposite of a given clue.

```
Passage: "The ancient castle stood on a hill. Inside, the rooms were vast
and the corridors were narrow. An old caretaker greeted us at the door."

Which word in the passage means the opposite of "modern"?

Answer: ancient
```

For roots:

```
One of the words below contains a root meaning "water." Which word, and
what is the root?

  aquarium   telescope   mountain   bicycle

Answer: aquarium (root: aqua = water)
```

## 4. `usage_context`

**Data given** depends on category:

- `confusable_pair`: `entry.words` (2-3 spellings that sound alike or look
  alike) and `entry.meanings` (one meaning per word, same order).
- `word_dual_meaning`: `entry.word` + `entry.meaning` (the meaning field
  contains both senses separated by "OR" — split it yourself).

Write two short sentences (or one sentence with two blanks) where each blank
needs a *different* one of the confusable spellings, or — for dual-meaning
words — write two sentences that each use a different sense of the same
word. Ask the child to choose the right spelling/sense for each, or to
explain the difference.

```
Choose the correct word for each blank: desert / dessert

  1. The camels crossed the vast, sandy ______.
  2. She ordered chocolate cake for ______.

Answer: 1. desert   2. dessert
```

```
"pedestrian" can mean "a person walking" OR "dull, boring." Which meaning
is used in each sentence below?

  1. The pedestrian crossed at the traffic lights.
  2. The film's plot was pedestrian and forgettable.

Answer: 1. a person walking   2. dull, boring
```

## 5. `jumbled_word`

**Data given:** `entry` (word + meaning) and a precomputed `jumbled` string —
**use this exact string, don't re-scramble it yourself.**

Write a sentence with enough context that the meaning points clearly to the
answer, with the jumbled letters standing in for the word.

```
After the storm, the cinaetn castle looked even more mysterious in the
moonlight.

Answer: ancient
```

## 6. `jumbled_pair_missing_letter`

**Data given:** `word_a` and `word_b`, each with `jumbled_with_blank`
(scrambled letters with one `_` where a letter is missing), `missing_letter`,
`answer` (the real word), and `meaning`.

Write **one sentence** that naturally uses both words in context (their
meanings should make each answer inferable), with each jumbled-and-blanked
form embedded in place of the real word. The child must unscramble each and
supply its missing letter.

```
The romuse_n elephant stood djacen_ to the small hut.

Answer: word 1 = enormous (missing letter: o), word 2 = adjacent
(missing letter: t)
```

## 7. `jumbled_word_synonym_antonym`

**Data given:** `entry`, `target_word`, `jumbled` (use as-is), and
`distractor_pool` (raw candidate words+meanings you can pull wrong options
from).

How to get the correct answer and pick a relation:

- If `entry.category == "synant_row"`: `target_word` came from either
  `entry.synonyms` or `entry.antonyms`. You know the *true* synonyms and
  antonyms already — pick synonym or antonym as the relation, and use another
  member of the relevant cluster as the correct option.
- Otherwise (`entry.category == "word"`): there's only one known relation —
  synonym — and the correct option is `entry.meaning` (trim to a single word
  if the meaning field lists several).

Build 3-4 wrong options from `distractor_pool` (their `word` or `meaning`
fields — pick whichever reads naturally as a same-part-of-speech option).

```
Unscramble: ignlnki

Now choose its synonym from the options below:
  A) idea   B) hamlet   C) burden   D) apathy

Answer: inkling → A) idea
```

## 8. `rhyming_synonym_antonym`

**Data given:** `anchor_word` only — the rest is genuinely up to you.

1. Think of a real, common English word **R** that rhymes with
   `anchor_word` (a near-rhyme on the final stressed syllable is fine,
   especially for longer Latinate words — e.g. "avaricious" near-rhymes with
   "delicious" / "suspicious").
2. Make sure R itself has a well-known synonym or antonym — that's the word
   you're actually testing.
3. Build 4 options that all rhyme with `anchor_word`, so the rhyme alone
   doesn't give away the answer — only the meaning clue should.

```
Given word: MEEK

This word rhymes with a word that means the opposite of "strong."
Which of these rhymes with MEEK and fits that clue?

  A) peak   B) weak   C) leak   D) week

Answer: B) weak (opposite of strong)
```

If `anchor_word` genuinely has no workable rhyme (rare, but possible for
some roots or short function-like words), skip the rhyme constraint and fall
back to a plain synonym/antonym riddle instead — better a clean question
than a forced, confusing one.

## 9. `jumbled_sentence_extra_word`

**Data given:** `entry` (word + meaning).

1. Write a grammatically correct sentence that uses the vocabulary word in a
   way that makes its meaning inferable.
2. Pick one extra word that does not belong (a plausible-looking noun or verb
   works better than an obviously silly one).
3. Shuffle *all* the words (the sentence's words plus the extra one) into a
   random jumbled order.
4. Ask the child to pick out the one word that doesn't belong — they don't
   need to fully reconstruct the sentence, just spot the odd one out.

```
Circle the word below that does NOT belong in the sentence these words
would otherwise form:

  hill  ancient  the  stood  bicycle  castle  on  the

Answer: bicycle (sentence: "The ancient castle stood on the hill")
```
