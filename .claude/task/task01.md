- Create one or more local skills (.claude/skills/...) to generate vocabulary tests based on the requirements below.
- The skill should allow Claude to read `indata/vocab_01.md`, which contains vocabulary including Antonyms, Synonyms, Homonyms, Homographs, and Homophones. It also contains some Greek and Latin root definitions.
- The child should be tested exclusively on this vocabulary list.

The child should be tested on the following aspects:

- **Spelling** - either:
    - Show a sentence (or part of a sentence) and ask the child to identify the misspelled word, or state that there is no mistake; or
    - Ask for the spelling of a word directly, giving the first letter, the last letter, the number of letters in between, and a synonym as a clue.
- **Understanding (Synonyms and Antonyms)** - e.g., pick the word from a passage that means the same as, or is the opposite of, a given word.
- **Usage and meaning in different contexts** (Homonyms, Homographs, and Homophones).
- **Jumbled word** - a jumbled word is presented within a sentence that provides context; the child must guess the word.
- **Jumbled word pair with missing letters** - two jumbled words are presented within a sentence that provides context, where each jumbled word is also missing one letter.
- **Jumbled word with synonym/antonym options** - a jumbled word is presented within a sentence that provides context; the child must pick the correct synonym or antonym of the jumbled word from the given options.
- **Rhyming synonym/antonym** - for a given word, the child must find the synonym or antonym of its rhyming word from the given options.
- **Jumbled sentence with an extra word** - a proper sentence using a vocabulary word is jumbled, and an additional word is inserted into it; the child must pick out this unwanted word from the options.
- Questions may offer 4 options, 5 options, or sometimes no options at all (in which case enough clues should be given to make the answer inferable).

Output requirements:

- Generate the tests into `outdata/test_xxx` (as `.md` or `.html`) so they can be printed.
- Each test should have enough questions to fill 2 A4 pages (both sides of each page).
- Each run should generate a batch of tests that together cover all the vocabulary in `indata/vocab_01.md` at least once, with the words shuffled on each run.
- A separate answer key should be provided for each batch of tests generated in `outdata`.
