/*
 * Growing data bank for the jumbled-word practice page.
 * Append new batches here as they're written — the practice page renders
 * whatever is in this array, so adding words never requires a new HTML file.
 * Each batch: { id, title, source, words: [ ...initJumbleWidget configs... ] }
 * "title" is shown as the collapsible section header — must not name any
 * individual answer word, only describe the batch (see NOTES.md convention).
 */
const JUMBLE_BATCHES = [
  {
    id: "list1-part2",
    title: "Vocabulary List 1 (continued)",
    source: "indata/vocab_01.md — Vocabulary List 1",
    words: [
      {
        before: "The captain gave the order to ", jumbled: "DNAABNO", after: " the sinking ship immediately.",
        answer: "ABANDON",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is B." },
          { tag: "Meaning", text: "It means the same as 'leave' or 'desert.'" }
        ],
        options: ["ABANDON", "ABOLISH", "ABSORB", "ADMIT"],
        explanation: "means to leave or desert something — like leaving a sinking ship."
      },
      {
        before: "After the rains, the valley was ", jumbled: "TNUADANB", after: " with wildflowers of every colour.",
        answer: "ABUNDANT",
        clues: [
          { tag: "Chunk spotting", text: "The letters B, U, N are all in this jumble — in the answer they sit together as 'BUN', right after the first letter." },
          { tag: "Meaning", text: "It means the same as 'plentiful' or 'overflowing.'" }
        ],
        options: ["ABUNDANT", "ADAMANT", "ABERRANT", "ABSTINENT"],
        explanation: "means plentiful — so many wildflowers that the valley overflowed with colour."
      },
      {
        before: "The witness stood up in court and ", jumbled: "CDUCEAS", after: " the man of stealing the jewels.",
        answer: "ACCUSED",
        clues: [
          { tag: "Word shape", text: "The answer looks like: A C _ U _ E D — only two letters are missing." },
          { tag: "Meaning", text: "It means the same as 'blamed' — pointed at as guilty." }
        ],
        options: ["ACCUSED", "ACQUIRED", "ASSURED", "ANCHORED"],
        explanation: "means blamed — the witness pointed at the man and blamed him."
      },
      {
        before: "The doctor said the pain in his side was sudden and ", jumbled: "TAECU", after: ".",
        answer: "ACUTE",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'cute' and 'flute.'" },
          { tag: "Meaning", text: "It means the same as 'sharp' or 'intense.'" }
        ],
        options: ["ACUTE", "ASTUTE", "ACTIVE", "AGILE"],
        explanation: "means sharp or intense — doctors call sudden, sharp pain 'acute pain.'"
      },
      {
        before: "Please ", jumbled: "EDAHRE", after: " to the rules and stay in single file.",
        answer: "ADHERE",
        clues: [
          { tag: "Chunk spotting", text: "The letters H, E, R are all in this jumble — in the answer they sit together as 'HER.'" },
          { tag: "Meaning", text: "It means the same as 'stick to' or 'follow closely.'" }
        ],
        options: ["ADHERE", "ADMIRE", "ADVISE", "ASPIRE"],
        explanation: "means to stick to or follow closely — like sticking to the rules."
      },
      {
        before: "The lifeguard rushed to ", jumbled: "DIA", after: " the swimmer in trouble.",
        answer: "AID",
        clues: [
          { tag: "Letter position", text: "The middle letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'help' or 'assist.'" }
        ],
        options: ["AID", "AIM", "AIL", "AIR"],
        explanation: "means help or assist — the lifeguard rushed to help."
      },
      {
        before: "During the war, the two countries became close ", jumbled: "LYAL", after: " and fought side by side.",
        answer: "ALLY",
        clues: [
          { tag: "Antonym link", text: "Its opposite is 'enemy' — from Lesson 1's bonus round." },
          { tag: "Meaning", text: "It means the same as 'friend' or 'supporter.'" }
        ],
        options: ["ALLY", "APPLY", "ALLOY", "ALLEY"],
        explanation: "means friend or supporter — the opposite of enemy."
      },
      {
        before: "The museum displayed pottery from an ", jumbled: "TNAEICN", after: " civilization thousands of years old.",
        answer: "ANCIENT",
        clues: [
          { tag: "Chunk spotting", text: "The letters C, I, E, N are all in this jumble — in the answer they sit together as 'CIEN', right before the final T." },
          { tag: "Meaning", text: "It means the same as 'old' or 'from long ago.'" }
        ],
        options: ["ANCIENT", "ANXIOUS", "ABSENT", "ANNOUNCE"],
        explanation: "means old or from long ago — like pottery thousands of years old."
      }
    ]
  },
  {
    id: "list13",
    title: "Vocabulary List 13 — hardest list",
    source: "indata/vocab_01.md — Vocabulary List 13",
    words: [
      {
        before: "The ", jumbled: "SOUICIRAVA", after: " landlord raised the rent every year just to line his own pockets.",
        answer: "AVARICIOUS",
        clues: [
          { tag: "Chunk spotting", text: "The letters V, A, R are all in this jumble — in the answer they sit together as 'VAR', near the start." },
          { tag: "Meaning", text: "It means the same as 'greedy' or 'money-hungry.'" }
        ],
        options: ["AVARICIOUS", "VORACIOUS", "AUDACIOUS", "GRACIOUS"],
        explanation: "means greedy, especially for money. Notice AVARICIOUS, VORACIOUS, AUDACIOUS, and GRACIOUS all end the same way — only the meaning tells them apart."
      },
      {
        before: "Snow White's stepmother would ", jumbled: "ETVOC", after: " her beauty and could not bear to be second-best.",
        answer: "COVET",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'desire' or 'envy.'" }
        ],
        options: ["COVET", "COMET", "CORSET", "COVER"],
        explanation: "means to desire or envy something strongly, often something belonging to someone else."
      },
      {
        before: "The crowd grew ", jumbled: "SUROEFICOV", after: ", shouting and booing loudly at the referee's decision.",
        answer: "VOCIFEROUS",
        clues: [
          { tag: "Chunk spotting", text: "The letters V, O, C, I are all in this jumble — in the answer they sit together as 'VOCI', right at the start (like 'vocal')." },
          { tag: "Meaning", text: "It means the same as 'loud' and 'outspoken.'" }
        ],
        options: ["VOCIFEROUS", "VORACIOUS", "VICARIOUS", "VIGOROUS"],
        explanation: "means loud, outspoken, and vehement — the 'voc' chunk relates to 'vocal' and 'voice.'"
      },
      {
        before: "Grandad has a ", jumbled: "LOLRD", after: " sense of humour that always catches us off guard.",
        answer: "DROLL",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'roll' and 'toll.'" },
          { tag: "Meaning", text: "It means the same as 'amusing' or 'quirky funny.'" }
        ],
        options: ["DROLL", "DRILL", "DROOL", "DRAWL"],
        explanation: "means amusing in a quirky, understated way — not laugh-out-loud, more a wry smile."
      },
      {
        before: "The teacher had to ", jumbled: "SEITSAHC", after: " the boys for talking during the exam.",
        answer: "CHASTISE",
        clues: [
          { tag: "Chunk spotting", text: "The letters A, S, T are in this jumble — in the answer they sit together as 'AST.'" },
          { tag: "Meaning", text: "It means the same as 'scold' or 'tell off.'" }
        ],
        options: ["CHASTISE", "CHASTEN", "CHASSIS", "CHARIOT"],
        explanation: "means to scold or reprimand someone firmly."
      },
      {
        before: "Their ", jumbled: "ELBCISARI", after: " neighbour shouted at anyone who dared step on his lawn.",
        answer: "IRASCIBLE",
        clues: [
          { tag: "Word shape", text: "The answer looks like: I R A _ C I _ L E — only two letters are missing." },
          { tag: "Meaning", text: "It means the same as 'easily angered' or 'grouchy.'" }
        ],
        options: ["IRASCIBLE", "IRRITABLE", "IMPOSSIBLE", "INVISIBLE"],
        explanation: "means easily angered, grouchy, or bad-tempered."
      },
      {
        before: "A deep ", jumbled: "MASHC", after: " opened up in the mountainside after the earthquake.",
        answer: "CHASM",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'spasm.'" },
          { tag: "Meaning", text: "It means the same as 'a huge gap or gorge.'" }
        ],
        options: ["CHASM", "CHARM", "CHASE", "CHAOS"],
        explanation: "means a deep, huge gap or gorge in the ground."
      },
      {
        before: "She felt ", jumbled: "TNELVAIBMA", after: " about the move — excited for the adventure, but sad to leave her friends.",
        answer: "AMBIVALENT",
        clues: [
          { tag: "Chunk spotting", text: "The letters A, M, B, I are in this jumble — in the answer they sit together as 'AMBI', a chunk meaning 'both' (as in ambidextrous)." },
          { tag: "Meaning", text: "It means the same as 'torn between two feelings' or 'undecided.'" }
        ],
        options: ["AMBIVALENT", "AMBITIOUS", "AMBIENT", "AMENABLE"],
        explanation: "means having two opposing feelings at once about the same thing."
      },
      {
        before: "He tried to ", jumbled: "ELJOAC", after: " his little sister into swapping sweets with him.",
        answer: "CAJOLE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is J." },
          { tag: "Meaning", text: "It means the same as 'coax' or 'sweet-talk.'" }
        ],
        options: ["CAJOLE", "CACKLE", "CAMEO", "CANCEL"],
        explanation: "means to coax or sweet-talk someone into doing something."
      },
      {
        before: "Smartphones have become ", jumbled: "SUOTUIQIBU", after: " — almost everyone seems to have one.",
        answer: "UBIQUITOUS",
        clues: [
          { tag: "Chunk spotting", text: "The letters Q, U, I, T are in this jumble — in the answer they sit together as 'QUIT.'" },
          { tag: "Meaning", text: "It means the same as 'found everywhere' or 'widespread.'" }
        ],
        options: ["UBIQUITOUS", "UNSCRUPULOUS", "UNANIMOUS", "UNIQUE"],
        explanation: "means found everywhere, widespread — like smartphones today."
      },
      {
        before: "The comedian's joke managed to ", jumbled: "TCIILE", after: " a laugh even from the grumpiest man in the room.",
        answer: "ELICIT",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'draw out' or 'bring about.'" }
        ],
        options: ["ELICIT", "ILLICIT", "EXPLICIT", "IMPLICIT"],
        explanation: "means to draw out a response. Careful: ELICIT (draw out) and ILLICIT (illegal) sound the same but mean very different things — a classic confusable pair."
      },
      {
        before: "The detectives uncovered an ", jumbled: "TCIILLI", after: " trade in stolen paintings.",
        answer: "ILLICIT",
        clues: [
          { tag: "Meaning", text: "It means the same as 'illegal' or 'forbidden.'" },
          { tag: "Antonym link", text: "Its near-opposite is 'legal' or 'legitimate.'" }
        ],
        options: ["ILLICIT", "ELICIT", "EXPLICIT", "IMPLICIT"],
        explanation: "means illegal or forbidden. Don't confuse it with ELICIT (to draw out a response)."
      },
      {
        before: "Could you ", jumbled: "ETDAICULE", after: " your plan a little more? I don't quite follow.",
        answer: "ELUCIDATE",
        clues: [
          { tag: "Chunk spotting", text: "The letters L, U, C, I, D are in this jumble — in the answer they sit together as 'LUCID', meaning clear." },
          { tag: "Meaning", text: "It means the same as 'explain clearly' or 'clarify.'" }
        ],
        options: ["ELUCIDATE", "EDUCATE", "ERADICATE", "EVACUATE"],
        explanation: "means to explain something clearly — notice the hidden word 'LUCID' inside it."
      },
      {
        before: "After hours of rain, the sun finally gave the hikers a brief ", jumbled: "EITPSER", after: ".",
        answer: "RESPITE",
        clues: [
          { tag: "Chunk spotting", text: "The letters S, P, I, T, E are all in this jumble — in the answer, 4 of them sit together as 'SPITE', right at the end." },
          { tag: "Meaning", text: "It means the same as 'a short rest or pause.'" }
        ],
        options: ["RESPITE", "RECITE", "DESPITE", "REQUITE"],
        explanation: "means a short rest or pause from something difficult — a brief break in the rain."
      },
      {
        before: "Madhav knows he shouldn't ", jumbled: "ETANISTARCORP", after: " over his homework, but the television is very tempting.",
        answer: "PROCRASTINATE",
        clues: [
          { tag: "Word shape", text: "The answer looks like: P R O _ R A S T I N A T E — only one letter is missing." },
          { tag: "Meaning", text: "It means the same as 'put off' or 'delay doing something.'" }
        ],
        options: ["PROCRASTINATE", "PRECIPITATE", "PROLIFERATE", "PARTICIPATE"],
        explanation: "means to put off or delay doing something. The longest word in this batch — well done for cracking it."
      },
      {
        before: "The two rival gangs grew ", jumbled: "ESOICLLEB", after: ", itching for a fight.",
        answer: "BELLICOSE",
        clues: [
          { tag: "Chunk spotting", text: "The letters B, E, L, L are in this jumble — in the answer they sit together as 'BELL', right at the start." },
          { tag: "Meaning", text: "It means the same as 'eager for a fight' or 'aggressive.'" }
        ],
        options: ["BELLICOSE", "BELLOWING", "BELITTLE", "BALLISTIC"],
        explanation: "means eager for conflict or aggressive."
      },
      {
        before: "The king's ", jumbled: "HATRW", after: " was terrifying when the messenger brought bad news.",
        answer: "WRATH",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'math' and 'path' if you drop the W." },
          { tag: "Meaning", text: "It means the same as 'fury' or 'rage.'" }
        ],
        options: ["WRATH", "WREATH", "WRAITH", "BROTH"],
        explanation: "means great anger or fury. Don't confuse it with WREATH (a ring of flowers) or WRAITH (a ghost)."
      },
      {
        before: "The witness gave a ", jumbled: "SUOIACDNEM", after: " account, twisting every fact to protect his friend.",
        answer: "MENDACIOUS",
        clues: [
          { tag: "Chunk spotting", text: "The letters M, E, N, D are in this jumble — in the answer they sit together as 'MEND', though the meaning has nothing to do with fixing things." },
          { tag: "Meaning", text: "It means the same as 'lying' or 'dishonest.'" }
        ],
        options: ["MENDACIOUS", "TENACIOUS", "AUDACIOUS", "VORACIOUS"],
        explanation: "means lying or dishonest — the witness twisted the facts."
      },
      {
        before: "The ", jumbled: "SUOIACGAS", after: " old owl in the story always gave the other animals good advice.",
        answer: "SAGACIOUS",
        clues: [
          { tag: "Meaning", text: "It means the same as 'wise' or 'shrewd.'" },
          { tag: "Antonym link", text: "Its opposite would be 'foolish' or 'naive.'" }
        ],
        options: ["SAGACIOUS", "AUDACIOUS", "VORACIOUS", "TENACIOUS"],
        explanation: "means wise and shrewd — like a wise old owl."
      },
      {
        before: "Looking through the old photo album filled her with ", jumbled: "AGILATSON", after: " for her childhood.",
        answer: "NOSTALGIA",
        clues: [
          { tag: "Chunk spotting", text: "The letters A, L, G, I, A are in this jumble — in the answer they sit together as 'ALGIA', an ending shared with other feeling-words." },
          { tag: "Meaning", text: "It means the same as 'a fond, longing memory of the past.'" }
        ],
        options: ["NOSTALGIA", "NEURALGIA", "REGALIA", "NOSTRIL"],
        explanation: "means a fond longing for the past — like happy memories from old photos."
      },
      {
        before: "After the operation, Grandma needs a few weeks to ", jumbled: "ETAERPUCER", after: " at home.",
        answer: "RECUPERATE",
        clues: [
          { tag: "Chunk spotting", text: "The letters C, U, P are in this jumble — in the answer they sit together as 'CUP', though it has nothing to do with drinking." },
          { tag: "Meaning", text: "It means the same as 'recover' or 'get better after illness.'" }
        ],
        options: ["RECUPERATE", "REITERATE", "REFRIGERATE", "RECIPROCATE"],
        explanation: "means to recover and regain strength after being ill."
      },
      {
        before: "It was a ", jumbled: "SASRC", after: " thing to say at a funeral, and everyone was shocked.",
        answer: "CRASS",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'grass' and 'class.'" },
          { tag: "Meaning", text: "It means the same as 'tactless' or 'insensitive.'" }
        ],
        options: ["CRASS", "CROSS", "CRAFT", "GRASS"],
        explanation: "means tactless or insensitive — showing no thought for others' feelings."
      },
      {
        before: "Homework is the ", jumbled: "NEAB", after: " of every schoolchild's evening.",
        answer: "BANE",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'lane' and 'cane.'" },
          { tag: "Meaning", text: "It means the same as 'a constant source of trouble.'" }
        ],
        options: ["BANE", "BONE", "BAND", "BARN"],
        explanation: "means a constant source of trouble or annoyance, as in 'the bane of my life.'"
      },
      {
        before: "She had the ", jumbled: "YITREMET", after: " to ask for a second helping before everyone else had even started.",
        answer: "TEMERITY",
        clues: [
          { tag: "Chunk spotting", text: "The letters M, E, R, I, T are in this jumble — in the answer they sit together as 'MERIT', though the meaning is about boldness, not deserving something." },
          { tag: "Meaning", text: "It means the same as 'boldness' or 'nerve.'" }
        ],
        options: ["TEMERITY", "SEVERITY", "CELERITY", "INTEGRITY"],
        explanation: "means boldness or cheeky nerve."
      },
      {
        before: "His ", jumbled: "SRIBUH", after: " led him to believe he could beat the champion without any training.",
        answer: "HUBRIS",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'excessive pride' or 'arrogance.'" }
        ],
        options: ["HUBRIS", "HYBRID", "HUMBLE", "HABIT"],
        explanation: "means excessive pride or arrogance — believing you can't fail, right before you do."
      },
      {
        before: "The other players began to ", jumbled: "EDRIED", after: " him for missing the easy shot.",
        answer: "DERIDE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'mock' or 'ridicule.'" }
        ],
        options: ["DERIDE", "DECIDE", "DIVIDE", "RESIDE"],
        explanation: "means to mock or ridicule someone."
      },
      {
        before: "The spy used ", jumbled: "EGURFETBUS", after: " to slip past the guards unnoticed.",
        answer: "SUBTERFUGE",
        clues: [
          { tag: "Chunk spotting", text: "The letters S, U, B, T, E, R are in this jumble — in the answer they sit together as 'SUBTER', the same start as 'subterranean.'" },
          { tag: "Meaning", text: "It means the same as 'trickery' or 'a sneaky ruse.'" }
        ],
        options: ["SUBTERFUGE", "SUBTERRANEAN", "SUBTRACT", "SUBSTITUTE"],
        explanation: "means trickery or a sneaky ruse used to deceive."
      },
      {
        before: "The weather this spring has been ", jumbled: "SUOIICRPAC", after: " — sunshine one minute, hail the next.",
        answer: "CAPRICIOUS",
        clues: [
          { tag: "Chunk spotting", text: "The letters C, A, P, R, I are in this jumble — in the answer they sit together as 'CAPRI', like the island — just a memory hook, not the meaning." },
          { tag: "Meaning", text: "It means the same as 'unpredictable' or 'changeable.'" }
        ],
        options: ["CAPRICIOUS", "SUSPICIOUS", "CAPACIOUS", "VIVACIOUS"],
        explanation: "means unpredictable or changeable — like weather that can't make up its mind."
      },
      {
        before: "Their weekend ", jumbled: "EDPAACSE", after: " involved sneaking out to watch the sunrise from the roof.",
        answer: "ESCAPADE",
        clues: [
          { tag: "Chunk spotting", text: "The letters E, S, C, A, P are in this jumble — in the answer they sit together as 'ESCAP', the start of 'escape.'" },
          { tag: "Meaning", text: "It means the same as 'an adventurous, mischievous prank.'" }
        ],
        options: ["ESCAPADE", "ESCALATE", "ESPIONAGE", "ESTIMATE"],
        explanation: "means an adventurous or mischievous exploit — a bit of daring fun."
      },
      {
        before: "The milk had gone ", jumbled: "DCINAR", after: " and smelled awful when she opened the carton.",
        answer: "RANCID",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'candid' if you swap the first letter." },
          { tag: "Meaning", text: "It means the same as 'gone bad' or 'foul-smelling.'" }
        ],
        options: ["RANCID", "RABID", "RAPID", "RANDOM"],
        explanation: "means gone bad and foul-smelling, like spoiled milk."
      },
      {
        before: "She didn't have the faintest ", jumbled: "GINLKNI", after: " that a surprise party was being planned.",
        answer: "INKLING",
        clues: [
          { tag: "Letter position", text: "The answer starts with the letter I." },
          { tag: "Meaning", text: "It means the same as 'a faint idea or hunch.'" }
        ],
        options: ["INKLING", "TINKLING", "INCLINE", "INKPOT"],
        explanation: "means a faint idea or hunch about something."
      },
      {
        before: "Meeting his old friend on a train in another country was a truly ", jumbled: "SUOTIIPDNERES", after: " coincidence.",
        answer: "SERENDIPITOUS",
        clues: [
          { tag: "Word shape", text: "The answer looks like: S E R E N D I P I T _ U S — only one letter is missing." },
          { tag: "Meaning", text: "It means the same as 'a lucky, unplanned coincidence.'" }
        ],
        options: ["SERENDIPITOUS", "SUPERSTITIOUS", "SIMULTANEOUS", "SURREPTITIOUS"],
        explanation: "means a happy accident — finding something good by chance. The longest word in this batch — take it slow."
      },
      {
        before: "The bully tried to ", jumbled: "ERCEOC", after: " the younger kids into giving up their lunch money.",
        answer: "COERCE",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'force' and 'divorce.'" },
          { tag: "Meaning", text: "It means the same as 'force' or 'pressure someone into something.'" }
        ],
        options: ["COERCE", "COARSE", "SOURCE", "COMMERCE"],
        explanation: "means to force or pressure someone into doing something against their will."
      },
      {
        before: "The puppy began to ", jumbled: "RWEOC", after: " in the corner whenever the thunder rumbled.",
        answer: "COWER",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'flower' and 'shower.'" },
          { tag: "Meaning", text: "It means the same as 'cringe in fear' or 'shrink back.'" }
        ],
        options: ["COWER", "COVER", "TOWER", "POWER"],
        explanation: "means to cringe or shrink back in fear, like a scared puppy hiding from thunder."
      }
    ]
  },
  {
    id: "list14",
    title: "Vocabulary List 14 — advanced",
    source: "indata/vocab_01.md — Vocabulary List 14",
    words: [
      {
        before: "When the fire alarm went off unexpectedly, ", jumbled: "MUIONMEDNAP", after: " broke out in the school hall.",
        answer: "PANDEMONIUM",
        clues: [
          { tag: "Chunk spotting", text: "The letters D, E, M, O, N are in this jumble — in the answer they sit together as 'DEMON', right in the middle (though it's not about actual demons)." },
          { tag: "Meaning", text: "It means the same as 'total chaos and uproar.'" }
        ],
        options: ["PANDEMONIUM", "PANORAMA", "PANTOMIME", "PHENOMENON"],
        explanation: "means total chaos and uproar — everyone shouting and running at once."
      },
      {
        before: "Bamboo is remarkably ", jumbled: "TNIELISER", after: " — it bends in the storm but rarely breaks.",
        answer: "RESILIENT",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'tough' or 'quick to recover.'" }
        ],
        options: ["RESILIENT", "RESIDENT", "REVERENT", "RECIPIENT"],
        explanation: "means tough and quick to recover from damage — bamboo bends but springs back."
      },
      {
        before: "The lawyer dismissed the claim as ", jumbled: "SUORIUPS", after: ", with no real evidence behind it.",
        answer: "SPURIOUS",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'curious' and 'furious.'" },
          { tag: "Meaning", text: "It means the same as 'fake' or 'not genuine.'" }
        ],
        options: ["SPURIOUS", "CURIOUS", "FURIOUS", "SERIOUS"],
        explanation: "means fake or not genuine — a claim with no real evidence."
      },
      {
        before: "The injured snake began to ", jumbled: "ETHIRW", after: " in pain on the hot pavement.",
        answer: "WRITHE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'squirm' or 'twist about in pain.'" }
        ],
        options: ["WRITHE", "WRITE", "WRAITH", "WRITER"],
        explanation: "means to squirm or twist about, usually in pain or distress."
      },
      {
        before: "The scar left an ", jumbled: "ELIBLEDNI", after: " mark that never faded, even after years.",
        answer: "INDELIBLE",
        clues: [
          { tag: "Chunk spotting", text: "The letters D, E, L, I are in this jumble — in the answer they sit together as 'DELI', though it has nothing to do with a delicatessen." },
          { tag: "Meaning", text: "It means the same as 'permanent' or 'impossible to forget.'" }
        ],
        options: ["INDELIBLE", "INCREDIBLE", "INAUDIBLE", "INEDIBLE"],
        explanation: "means permanent or unforgettable — a mark that never fades."
      },
      {
        before: "He promised to help but later chose to ", jumbled: "EEGNER", after: " on the deal, leaving them without support.",
        answer: "RENEGE",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'go back on a promise.'" }
        ],
        options: ["RENEGE", "RENEW", "REFUSE", "RETIRE"],
        explanation: "means to go back on a promise or agreement — he broke his word."
      },
      {
        before: "The comedian's ", jumbled: "EANNI", after: " jokes made no sense at all, but the audience laughed anyway.",
        answer: "INANE",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'insane' if you drop the 's.'" },
          { tag: "Meaning", text: "It means the same as 'silly' or 'senseless.'" }
        ],
        options: ["INANE", "INSANE", "ARCANE", "URBANE"],
        explanation: "means silly or senseless — jokes with no real point."
      },
      {
        before: "DNA is famously shaped like a double ", jumbled: "XLIEH", after: ".",
        answer: "HELIX",
        clues: [
          { tag: "Letter position", text: "The answer ends with the letter X." },
          { tag: "Meaning", text: "It means the same as 'a spiral or coil shape.'" }
        ],
        options: ["HELIX", "RELIC", "HELIUM", "HEIST"],
        explanation: "means a spiral or coil shape — DNA's famous double helix."
      },
      {
        before: "In the magic show, the assistant appeared to ", jumbled: "ETTAIVEL", after: " a few inches above the stage.",
        answer: "LEVITATE",
        clues: [
          { tag: "Chunk spotting", text: "The letters L, E, V, I are in this jumble — in the answer they sit together as 'LEVI', right at the start." },
          { tag: "Meaning", text: "It means the same as 'float or hover in the air.'" }
        ],
        options: ["LEVITATE", "ELEVATE", "ACTIVATE", "IMITATE"],
        explanation: "means to float or hover in the air, seemingly without support."
      },
      {
        before: "His ", jumbled: "SUOTUEPMI", after: " decision to quit his job without a plan worried his family.",
        answer: "IMPETUOUS",
        clues: [
          { tag: "Chunk spotting", text: "The letters P, E, T are in this jumble — in the answer they sit together as 'PET', though the meaning has nothing to do with animals." },
          { tag: "Meaning", text: "It means the same as 'rash' or 'acting without thinking.'" }
        ],
        options: ["IMPETUOUS", "IMPETUS", "IMPERIOUS", "IMPETIGO"],
        explanation: "means rash or acting without thinking — a hasty decision."
      },
      {
        before: "The film's ", jumbled: "EITRT", after: " plot felt like something we'd already seen a hundred times.",
        answer: "TRITE",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'kite' and 'bite.'" },
          { tag: "Meaning", text: "It means the same as 'overused' or 'unoriginal.'" }
        ],
        options: ["TRITE", "TRIBE", "TRAIT", "TRICE"],
        explanation: "means overused or unoriginal. Don't confuse it with TRAIT (a characteristic) — next word."
      },
      {
        before: "Curiosity is one ", jumbled: "TAIRT", after: " that all great scientists seem to share.",
        answer: "TRAIT",
        clues: [
          { tag: "Word link", text: "It looks almost identical to TRITE (overused) from the word before — but this one is a noun, not an adjective." },
          { tag: "Meaning", text: "It means the same as 'a characteristic or quality.'" }
        ],
        options: ["TRAIT", "TRITE", "TRAIN", "TREAT"],
        explanation: "means a characteristic or quality — like curiosity being a trait of scientists."
      },
      {
        before: "The wealthy ", jumbled: "TSIPORTHNALIHP", after: " donated millions to build new hospitals and schools.",
        answer: "PHILANTHROPIST",
        clues: [
          { tag: "Word shape", text: "The answer looks like: P H I L _ N T H R _ P _ S T — only three letters are missing." },
          { tag: "Meaning", text: "It means the same as 'someone who gives generously to good causes.'" }
        ],
        options: ["PHILANTHROPIST", "PHILOSOPHER", "PHYSIOTHERAPIST", "PHILATELIST"],
        explanation: "means someone who gives generously to charitable causes — built from Greek 'phil' (loving) and 'anthrop' (human). The longest word in this batch."
      },
      {
        before: "After weeks of siege, the town had no choice but to ", jumbled: "ETALTUIPAC", after: " to the invading army.",
        answer: "CAPITULATE",
        clues: [
          { tag: "Chunk spotting", text: "The letters C, A, P, I, T are in this jumble — in the answer they sit together as 'CAPIT', right at the start." },
          { tag: "Meaning", text: "It means the same as 'surrender' or 'give in.'" }
        ],
        options: ["CAPITULATE", "CAPITALIZE", "CAPTIVATE", "CIRCULATE"],
        explanation: "means to surrender or give in — the town had no choice but to give up."
      },
      {
        before: "The choppy boat ride made everyone feel ", jumbled: "YASEUQ", after: " and green in the face.",
        answer: "QUEASY",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'easy' and 'breezy' if you add a Q sound." },
          { tag: "Meaning", text: "It means the same as 'sick to the stomach' or 'nauseous.'" }
        ],
        options: ["QUEASY", "UNEASY", "GREASY", "QUIRKY"],
        explanation: "means sick to the stomach or nauseous — a rough boat ride can do that."
      },
      {
        before: "Despite failing the test, he seemed completely ", jumbled: "TNAALHCNON", after: " about the result.",
        answer: "NONCHALANT",
        clues: [
          { tag: "Chunk spotting", text: "The letters C, H, A, L are in this jumble — in the answer they sit together as 'CHAL', in the middle of the word." },
          { tag: "Meaning", text: "It means the same as 'unconcerned' or 'casually calm.'" }
        ],
        options: ["NONCHALANT", "NONSENSE", "CONSONANT", "NONCOMPLIANT"],
        explanation: "means unconcerned or casually calm — not bothered by the bad result."
      },
      {
        before: "The whole team deserves ", jumbled: "SDOUK", after: " for pulling off such a difficult win.",
        answer: "KUDOS",
        clues: [
          { tag: "Letter position", text: "The answer starts with the letter K." },
          { tag: "Meaning", text: "It means the same as 'praise' or 'credit for an achievement.'" }
        ],
        options: ["KUDOS", "KIOSK", "KHAKI", "CACTUS"],
        explanation: "means praise or credit for an achievement — well-deserved recognition."
      },
      {
        before: "She found ", jumbled: "EACLOS", after: " in music after her grandfather passed away.",
        answer: "SOLACE",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'palace' — same '-ace' ending as 'palace' and 'menace.'" },
          { tag: "Meaning", text: "It means the same as 'comfort' during a sad time.'" }
        ],
        options: ["SOLACE", "SOLVE", "PALACE", "SOLAR"],
        explanation: "means comfort during a difficult or sad time."
      },
      {
        before: "She studied ", jumbled: "YHPRAGOTRAC", after: " at university and now designs maps for hikers.",
        answer: "CARTOGRAPHY",
        clues: [
          { tag: "Chunk spotting", text: "The letters G, R, A, P, H are in this jumble — in the answer they sit together as 'GRAPH', the same Greek root meaning 'write' from your roots list." },
          { tag: "Meaning", text: "It means the same as 'the study and drawing of maps.'" }
        ],
        options: ["CARTOGRAPHY", "CHOREOGRAPHY", "PHOTOGRAPHY", "CALLIGRAPHY"],
        explanation: "means the study and making of maps — 'writing/drawing maps,' from the Greek root 'graph.'"
      },
      {
        before: "The ", jumbled: "EAVUS", after: " waiter recommended the wine with effortless charm.",
        answer: "SUAVE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'charming and smoothly confident.'" }
        ],
        options: ["SUAVE", "SALVE", "STAVE", "SLAVE"],
        explanation: "means charming and smoothly confident in manner."
      },
      {
        before: "The politician's ", jumbled: "CITASBMOB", after: " speech was full of grand words but said very little.",
        answer: "BOMBASTIC",
        clues: [
          { tag: "Chunk spotting", text: "The letters B, A, S, T are in this jumble — in the answer they sit together as 'BAST', in the middle." },
          { tag: "Meaning", text: "It means the same as 'pompous' or 'high-sounding but empty.'" }
        ],
        options: ["BOMBASTIC", "DRAMATIC", "FANTASTIC", "ELASTIC"],
        explanation: "means pompous or high-sounding but empty — big words, little substance."
      },
      {
        before: "You could recognise your grandfather from far away just by his unusual ", jumbled: "TAIG", after: ".",
        answer: "GAIT",
        clues: [
          { tag: "Letter position", text: "The answer starts with the letter G." },
          { tag: "Meaning", text: "It means the same as 'a way of walking.'" }
        ],
        options: ["GAIT", "GATE", "GIST", "GOAT"],
        explanation: "means a way of walking. Don't confuse it with GATE — they sound identical but mean completely different things."
      },
      {
        before: "The cats living behind the old warehouse had gone completely ", jumbled: "LRAEF", after: ".",
        answer: "FERAL",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'mineral' if you drop the middle syllable." },
          { tag: "Meaning", text: "It means the same as 'wild' or 'untamed.'" }
        ],
        options: ["FERAL", "FUNERAL", "FEDERAL", "FLORAL"],
        explanation: "means wild or untamed, especially an animal that has escaped domestication."
      },
      {
        before: "She sat by the window, looking ", jumbled: "EIVSNEP", after: " as she thought about the exam results.",
        answer: "PENSIVE",
        clues: [
          { tag: "Chunk spotting", text: "The letters E, N, S, I are in this jumble — in the answer they sit together as 'ENSI', right after the first letter." },
          { tag: "Meaning", text: "It means the same as 'thoughtful' or 'deep in thought.'" }
        ],
        options: ["PENSIVE", "PASSIVE", "MASSIVE", "EXPENSIVE"],
        explanation: "means thoughtful, deep in thought — often looking a little sad or distant."
      },
      {
        before: "Dark clouds gathered overhead — an ", jumbled: "SOUNIMO", after: " sign of the storm to come.",
        answer: "OMINOUS",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'threatening' or 'a bad sign.'" }
        ],
        options: ["OMINOUS", "OBVIOUS", "ODOROUS", "ONEROUS"],
        explanation: "means threatening or a bad sign of things to come."
      },
      {
        before: "The chef made the strange vegetable dish surprisingly ", jumbled: "ELBTAALAP", after: ".",
        answer: "PALATABLE",
        clues: [
          { tag: "Chunk spotting", text: "The letters P, A, L, A, T are in this jumble — in the answer they sit together as 'PALAT', related to 'palate' (taste)." },
          { tag: "Meaning", text: "It means the same as 'pleasant to taste' or 'delicious.'" }
        ],
        options: ["PALATABLE", "PALATIAL", "PARABLE", "PORTABLE"],
        explanation: "means pleasant to taste — related to 'palate,' your sense of taste."
      },
      {
        before: "The ", jumbled: "TNSASECNI", after: " noise from the building site gave her a headache all day.",
        answer: "INCESSANT",
        clues: [
          { tag: "Rhyme", text: "It sounds like it rhymes with 'pleasant,' though it means something far less pleasant." },
          { tag: "Meaning", text: "It means the same as 'constant, never stopping.'" }
        ],
        options: ["INCESSANT", "INSTANT", "INNOCENT", "ASSISTANT"],
        explanation: "means constant and never stopping — noise that just won't quit."
      },
      {
        before: "The audience rose to their feet in a standing ", jumbled: "NIOTAVO", after: " after the final performance.",
        answer: "OVATION",
        clues: [
          { tag: "Chunk spotting", text: "The letters T, I, O, N are in this jumble — in the answer they sit together as 'TION', a very common word ending." },
          { tag: "Meaning", text: "It means the same as 'enthusiastic applause.'" }
        ],
        options: ["OVATION", "OCTAVE", "NOTATION", "ROTATION"],
        explanation: "means enthusiastic applause — the audience clapping and cheering."
      },
      {
        before: "The general seized power in a swift military ", jumbled: "POUC", after: " overnight.",
        answer: "COUP",
        clues: [
          { tag: "Letter position", text: "The answer starts with the letter C." },
          { tag: "Meaning", text: "It means the same as 'a sudden takeover of power.'" }
        ],
        options: ["COUP", "SOUP", "CROP", "COOP"],
        explanation: "means a sudden, often violent, takeover of power. Pronounced 'coo' — the P is silent."
      },
      {
        before: "After the long hunt, the villagers shared a hearty ", jumbled: "TASPER", after: " together.",
        answer: "REPAST",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'forecast' — same '-ast' ending as 'forecast' and 'steadfast.'" },
          { tag: "Meaning", text: "It means the same as 'a large meal or feast.'" }
        ],
        options: ["REPAST", "REPEAT", "RELAPSE", "REQUEST"],
        explanation: "means a large meal or feast — a hearty shared dinner."
      },
      {
        before: "She answered every question with complete ", jumbled: "ROUDNAC", after: ", holding nothing back.",
        answer: "CANDOUR",
        clues: [
          { tag: "Chunk spotting", text: "The letters A, N, D are in this jumble — in the answer they sit together as 'AND', though it's not the joining word 'and.'" },
          { tag: "Meaning", text: "It means the same as 'honesty' or 'frankness.'" }
        ],
        options: ["CANDOUR", "CANDID", "CONDOR", "CANDLE"],
        explanation: "means honesty or frankness — related to the word CANDID (honest), just the noun form."
      },
      {
        before: "A good nurse shows real ", jumbled: "YTHAPME", after: " for patients who are frightened or in pain.",
        answer: "EMPATHY",
        clues: [
          { tag: "Chunk spotting", text: "The letters P, A, T, H are in this jumble — in the answer they sit together as 'PATH', the same Greek root meaning 'feeling' from your roots list." },
          { tag: "Meaning", text: "It means the same as 'understanding and sharing someone else's feelings.'" }
        ],
        options: ["EMPATHY", "APATHY", "ANTIPATHY", "TELEPATHY"],
        explanation: "means understanding and sharing someone else's feelings. Compare with APATHY (no feeling), its near-opposite."
      },
      {
        before: "Take your time to ", jumbled: "EUSREP", after: " the contract carefully before you sign anything.",
        answer: "PERUSE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'read carefully' or 'study closely.'" }
        ],
        options: ["PERUSE", "PURSUE", "REFUSE", "PAUSE"],
        explanation: "means to read or study something carefully and closely."
      },
      {
        before: "The doctor caught the illness at an ", jumbled: "TNEPIICNI", after: " stage, before any symptoms had appeared.",
        answer: "INCIPIENT",
        clues: [
          { tag: "Word shape", text: "The answer looks like: I N C _ P _ E N T — only two letters are missing." },
          { tag: "Meaning", text: "It means the same as 'just beginning' or 'in an early stage.'" }
        ],
        options: ["INCIPIENT", "EFFICIENT", "ANCIENT", "INSUFFICIENT"],
        explanation: "means just beginning or in an early stage — caught before symptoms appeared."
      }
    ]
  },
  {
    id: "list11",
    title: "Vocabulary List 11 — advanced",
    source: "indata/vocab_01.md — Vocabulary List 11",
    words: [
      { before: "Her feet were so painful that she finally booked an appointment with a ", jumbled: "TSIODPORIHC", after: ".", answer: "CHIROPODIST",
        clues: [{ tag: "Meaning", text: "It means the same as 'a foot doctor.'" }, { tag: "Letter position", text: "The 2nd letter is H." }],
        options: ["CHIROPODIST", "CHIROPRACTOR", "PODIATRIST", "ANTAGONIST"], explanation: "means a foot doctor (podiatrist)." },
      { before: "The spy was arrested for ", jumbled: "EGAONIPSE", after: " after photographing secret documents.", answer: "ESPIONAGE",
        clues: [{ tag: "Meaning", text: "It means the same as 'spying.'" }, { tag: "Letter position", text: "The 3rd letter is P." }],
        options: ["ESPIONAGE", "ESPLANADE", "ENTOURAGE", "ESCAPADE"], explanation: "means spying, especially to gather secrets for a government." },
      { before: "Cleaning the entire house alone was an ", jumbled: "SUOERNO", after: " task.", answer: "ONEROUS",
        clues: [{ tag: "Meaning", text: "It means the same as 'difficult and tiring.'" }, { tag: "Letter position", text: "The last letter is S." }],
        options: ["ONEROUS", "POROUS", "ODOROUS", "NUMEROUS"], explanation: "means difficult and tiring, a heavy burden of a task." },
      { before: "The judge tried to reach an ", jumbled: "ELBTAIUQE", after: " solution that was fair to both sides.", answer: "EQUITABLE",
        clues: [{ tag: "Chunk spotting", text: "The letters T, A, B, L, E are in this jumble — in the answer they sit together as 'TABLE', right in the middle." }, { tag: "Meaning", text: "It means the same as 'fair and just.'" }],
        options: ["EQUITABLE", "EQUIVOCAL", "ADEQUATE", "EQUATOR"], explanation: "means fair and just to everyone involved." },
      { before: "The vaccine helped ", jumbled: "ETAICDARE", after: " the disease completely from the region.", answer: "ERADICATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'get rid of completely.'" }, { tag: "Letter position", text: "The 2nd letter is R." }],
        options: ["ERADICATE", "IRRADIATE", "EVACUATE", "EDUCATE"], explanation: "means to get rid of something completely, like wiping out a disease." },
      { before: "The board voted to ", jumbled: "TUSO", after: " the manager after months of poor results.", answer: "OUST",
        clues: [{ tag: "Meaning", text: "It means the same as 'force out' or 'remove from power.'" }, { tag: "Letter position", text: "The answer starts with the letter O." }],
        options: ["OUST", "JOUST", "MUST", "GUST"], explanation: "means to force someone out of a position of power." },
      { before: "Every summer, the town holds a colourful ", jumbled: "TAENGAP", after: " with floats and costumes.", answer: "PAGEANT",
        clues: [{ tag: "Meaning", text: "It means the same as 'a colourful parade or display.'" }, { tag: "Letter position", text: "The 4th letter is E." }],
        options: ["PAGEANT", "PHEASANT", "PAGAN", "PATIENT"], explanation: "means a colourful public parade or display." },
      { before: "The general would ", jumbled: "ETACTID", after: " his orders to the soldiers every morning.", answer: "DICTATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'give orders' or 'say aloud for someone to write.'" }, { tag: "Letter position", text: "The 3rd letter is C." }],
        options: ["DICTATE", "DICTION", "DILATE", "DEBATE"], explanation: "means to give orders, or to say something aloud for someone else to write down." },
      { before: "The ", jumbled: "TANRYT", after: " ruled with fear, punishing anyone who disagreed with him.", answer: "TYRANT",
        clues: [{ tag: "Meaning", text: "It means the same as 'a cruel, unjust ruler.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["TYRANT", "TENANT", "TRUANT", "INSTANT"], explanation: "means a cruel, unjust ruler who governs through fear." },
      { before: "The investigation found the driver ", jumbled: "ELBPALUC", after: " for the accident.", answer: "CULPABLE",
        clues: [{ tag: "Chunk spotting", text: "The letters A, B, L, E are in this jumble — in the answer they sit together as 'ABLE', at the very end." }, { tag: "Meaning", text: "It means the same as 'guilty' or 'responsible for wrongdoing.'" }],
        options: ["CULPABLE", "CAPABLE", "PROBABLE", "VALUABLE"], explanation: "means guilty or responsible for something wrong." },
      { before: "There were only ", jumbled: "CIDRAOPS", after: " showers throughout the day, nothing too heavy.", answer: "SPORADIC",
        clues: [{ tag: "Meaning", text: "It means the same as 'occasional' or 'happening now and then.'" }, { tag: "Letter position", text: "The 5th letter is A." }],
        options: ["SPORADIC", "SPASMODIC", "PERIODIC", "SYMPHONIC"], explanation: "means occasional or irregular, happening now and then rather than constantly." },
      { before: "The knight pulled on his ", jumbled: "TELNTUAG", after: " before gripping the sword.", answer: "GAUNTLET",
        clues: [{ tag: "Meaning", text: "It means the same as 'a protective glove.'" }, { tag: "Letter position", text: "The 2nd letter is A." }],
        options: ["GAUNTLET", "GARMENT", "GRANITE", "GUARDIAN"], explanation: "means a protective glove, often part of a suit of armour." },
      { before: "The ", jumbled: "SUOINMUL", after: " dial on the watch glowed brightly in the dark.", answer: "LUMINOUS",
        clues: [{ tag: "Meaning", text: "It means the same as 'glowing' or 'giving off light.'" }, { tag: "Letter position", text: "The 3rd letter is M." }],
        options: ["LUMINOUS", "MOMENTOUS", "NUMEROUS", "ENORMOUS"], explanation: "means glowing or giving off light." },
      { before: "The ", jumbled: "TNEINME", after: " scientist was invited to speak at universities all over the world.", answer: "EMINENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'famous and respected.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["EMINENT", "IMMINENT", "PERTINENT", "PROMINENT"], explanation: "means famous and highly respected in a particular field." },
      { before: "Dark clouds meant the storm was ", jumbled: "TNEINMMI", after: " — it would hit within minutes.", answer: "IMMINENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'about to happen very soon.'" }, { tag: "Letter position", text: "The 2nd letter is M." }],
        options: ["IMMINENT", "EMINENT", "PROMINENT", "IMMANENT"], explanation: "means about to happen very soon. Don't confuse it with EMINENT (famous)." },
      { before: "The diplomat handled the tricky negotiation with great ", jumbled: "ESSNEIF", after: ".", answer: "FINESSE",
        clues: [{ tag: "Meaning", text: "It means the same as 'skill and tact.'" }, { tag: "Letter position", text: "The 3rd letter is S." }],
        options: ["FINESSE", "FITNESS", "FINEST", "FINANCE"], explanation: "means skill and tact, especially in handling people or difficult situations." },
      { before: "The surgeon's ", jumbled: "YTIERTXED", after: " made the delicate operation look easy.", answer: "DEXTERITY",
        clues: [{ tag: "Meaning", text: "It means the same as 'skill, especially with the hands.'" }, { tag: "Letter position", text: "The 3rd letter is I." }],
        options: ["DEXTERITY", "EXTERIOR", "DEXTROSE", "DIRECTORY"], explanation: "means skill, especially manual skill." },
      { before: "Working too hard, without any rest, was to the ", jumbled: "TNEIMRTED", after: " of his health.", answer: "DETRIMENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'harm' or 'damage.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["DETRIMENT", "SEDIMENT", "SENTIMENT", "ENACTMENT"], explanation: "means harm or damage — something that works against your interests." },
      { before: "The fire alarm forced everyone to ", jumbled: "ETACUAVE", after: " the building immediately.", answer: "EVACUATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'leave a dangerous place.'" }, { tag: "Letter position", text: "The 2nd letter is V." }],
        options: ["EVACUATE", "EDUCATE", "ERADICATE", "ELEVATE"], explanation: "means to leave a dangerous place, usually in an emergency." },
      { before: "The ", jumbled: "TANLLAG", after: " knight rescued the villagers before the bridge collapsed.", answer: "GALLANT",
        clues: [{ tag: "Meaning", text: "It means the same as 'brave and noble.'" }, { tag: "Letter position", text: "The 3rd letter is N." }],
        options: ["GALLANT", "GALLON", "BALLOT", "VALIANT"], explanation: "means brave and noble, especially in a chivalrous way." },
      { before: "Despite losing twice, the ", jumbled: "SUOCIANET", after: " team kept fighting until the very end.", answer: "TENACIOUS",
        clues: [{ tag: "Meaning", text: "It means the same as 'stubborn' or 'not giving up.'" }, { tag: "Letter position", text: "The 2nd letter is E." }],
        options: ["TENACIOUS", "VORACIOUS", "AUDACIOUS", "SPACIOUS"], explanation: "means stubbornly persistent, refusing to give up." },
      { before: "He tripped over his own feet again — such a ", jumbled: "YMSULC", after: " boy.", answer: "CLUMSY",
        clues: [{ tag: "Meaning", text: "It means the same as 'awkward' or 'lacking grace.'" }, { tag: "Letter position", text: "The answer ends with the letter Y." }],
        options: ["CLUMSY", "FLIMSY", "CHUMMY", "CRUMBLY"], explanation: "means awkward or lacking grace in movement." },
      { before: "The ship raised its ", jumbled: "NIGSNE", after: " as it sailed into the harbour.", answer: "ENSIGN",
        clues: [{ tag: "Meaning", text: "It means the same as 'a flag or banner.'" }, { tag: "Letter position", text: "The last letter is N." }],
        options: ["ENSIGN", "DESIGN", "ENGINE", "ENSURE"], explanation: "means a flag, especially one flown by a ship." },
      { before: "After the chemical reaction, a strange white ", jumbled: "EUDSIER", after: " was left in the beaker.", answer: "RESIDUE",
        clues: [{ tag: "Meaning", text: "It means the same as 'what remains after something is used.'" }, { tag: "Letter position", text: "The 3rd letter is S." }],
        options: ["RESIDUE", "RESIDE", "RESCUE", "RESIDENT"], explanation: "means what remains after something is used up or removed." },
      { before: "A ", jumbled: "EARLF", after: " from the flame briefly lit up the dark cave.", answer: "FLARE",
        clues: [{ tag: "Meaning", text: "It means the same as 'a sudden burst of light.'" }, { tag: "Letter position", text: "The 2nd letter is L." }],
        options: ["FLARE", "FLAIR", "FLAME", "FLORA"], explanation: "means a sudden bright burst of light. Don't confuse it with FLAIR (natural talent) — next word." },
      { before: "She has a natural ", jumbled: "RAILF", after: " for design that can't be taught.", answer: "FLAIR",
        clues: [{ tag: "Meaning", text: "It means the same as 'a natural talent or ability.'" }, { tag: "Letter position", text: "The answer ends with the letter R." }],
        options: ["FLAIR", "FLARE", "FRAIL", "FRIAR"], explanation: "means a natural talent or ability. Don't confuse it with FLARE (a burst of light) — the word before." },
      { before: "The mystery of the locked room filled the whole house with ", jumbled: "EUGRITNI", after: ".", answer: "INTRIGUE",
        clues: [{ tag: "Meaning", text: "It means the same as 'fascination' or 'a secret plot.'" }, { tag: "Letter position", text: "The 3rd letter is T." }],
        options: ["INTRIGUE", "INTRICATE", "INSTITUTE", "IRRIGATE"], explanation: "means fascination, or a secret scheme — here, the fascinating mystery of the locked room." },
      { before: "The team's ", jumbled: "YTHAPA", after: " towards practice meant they lost every match.", answer: "APATHY",
        clues: [{ tag: "Meaning", text: "It means the same as 'a lack of interest or feeling.'" }, { tag: "Letter position", text: "The 3rd letter is A." }],
        options: ["APATHY", "EMPATHY", "ANTIPATHY", "APIARY"], explanation: "means a lack of interest, enthusiasm, or concern. Compare with EMPATHY (sharing feelings), from an earlier batch." },
      { before: "Nobody could work out how the magician did the trick — it remained a total ", jumbled: "AGMINE", after: ".", answer: "ENIGMA",
        clues: [{ tag: "Meaning", text: "It means the same as 'a mystery or puzzle.'" }, { tag: "Letter position", text: "The answer starts with the letter E." }],
        options: ["ENIGMA", "STIGMA", "DOGMA", "MAGMA"], explanation: "means a mystery or puzzle that's hard to understand." },
      { before: "The old typewriter is now ", jumbled: "ETEOLSBO", after: ", replaced entirely by computers.", answer: "OBSOLETE",
        clues: [{ tag: "Meaning", text: "It means the same as 'out of date' or 'no longer used.'" }, { tag: "Letter position", text: "The 5th letter is L." }],
        options: ["OBSOLETE", "OBSTINATE", "ABSOLUTE", "OBSCENE"], explanation: "means out of date and no longer used, like an old typewriter." },
      { before: "He sat quietly by the window to ", jumbled: "ETAITGOC", after: " over the difficult decision.", answer: "COGITATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'think deeply' or 'ponder.'" }, { tag: "Letter position", text: "The 2nd letter is O." }],
        options: ["COGITATE", "AGITATE", "IMITATE", "ROTATE"], explanation: "means to think deeply or ponder something carefully." },
      { before: "Their ", jumbled: "SUOCIAUQOL", after: " uncle talked non-stop through the entire dinner.", answer: "LOQUACIOUS",
        clues: [{ tag: "Meaning", text: "It means the same as 'very talkative.'" }, { tag: "Letter position", text: "The 3rd letter is Q." }],
        options: ["LOQUACIOUS", "VORACIOUS", "TENACIOUS", "GRACIOUS"], explanation: "means very talkative — someone who just doesn't stop chatting." },
      { before: "A sharp rock began to ", jumbled: "EDUTRORP", after: " from the cliff face just above the path.", answer: "PROTRUDE",
        clues: [{ tag: "Meaning", text: "It means the same as 'stick out' or 'bulge.'" }, { tag: "Letter position", text: "The 3rd letter is O." }],
        options: ["PROTRUDE", "PRODUCE", "PROVIDE", "INTRUDE"], explanation: "means to stick out or bulge from a surface." },
      { before: "Despite the bad weather forecast, she stayed ", jumbled: "ENIGUNAS", after: " about the picnic going ahead.", answer: "SANGUINE",
        clues: [{ tag: "Meaning", text: "It means the same as 'cheerful and optimistic.'" }, { tag: "Letter position", text: "The 4th letter is G." }],
        options: ["SANGUINE", "GENUINE", "ROUTINE", "GASOLINE"], explanation: "means cheerful and optimistic, even when things look difficult." }
    ]
  },
  {
    id: "list12",
    title: "Vocabulary List 12 — advanced",
    source: "indata/vocab_01.md — Vocabulary List 12",
    words: [
      { before: "The old barn burst into a raging ", jumbled: "NOIATRGALFNOC", after: " that lit up the night sky.", answer: "CONFLAGRATION",
        clues: [{ tag: "Meaning", text: "It means the same as 'a huge, destructive fire.'" }, { tag: "Word shape", text: "The answer looks like: C O N _ L A G R A T I O N — only one letter is missing." }],
        options: ["CONFLAGRATION", "CONFIGURATION", "CONGRATULATION", "CONSIDERATION"], explanation: "means a huge, destructive fire. The longest word in this batch." },
      { before: "The abandoned house looked ", jumbled: "ERIEE", after: " in the pale moonlight.", answer: "EERIE",
        clues: [{ tag: "Meaning", text: "It means the same as 'strange and frightening.'" }, { tag: "Letter position", text: "The 3rd letter is R." }],
        options: ["EERIE", "EYRIE", "ENTIRE", "ERASER"], explanation: "means strange and frightening in an unsettling way." },
      { before: "The weather forecast predicted heavy ", jumbled: "NOIATTIPICERP", after: " throughout the weekend.", answer: "PRECIPITATION",
        clues: [{ tag: "Meaning", text: "It means the same as 'rain, hail, or snow.'" }, { tag: "Word shape", text: "The answer looks like: P R E C I P I T A T _ O N — only one letter is missing." }],
        options: ["PRECIPITATION", "PARTICIPATION", "ANTICIPATION", "PRECIPITOUS"], explanation: "means rain, hail, or snow — any water falling from clouds." },
      { before: "The product received a glowing ", jumbled: "TNEEMSRODNE", after: " from a famous athlete.", answer: "ENDORSEMENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'public approval or support.'" }, { tag: "Letter position", text: "The 3rd letter is E." }],
        options: ["ENDORSEMENT", "ENFORCEMENT", "ENTITLEMENT", "ENJOYMENT"], explanation: "means public approval or support, especially for a product or idea." },
      { before: "From the top of the hill, they could see a stunning ", jumbled: "AMAORNAP", after: " of the valley.", answer: "PANORAMA",
        clues: [{ tag: "Meaning", text: "It means the same as 'a wide view of a landscape.'" }, { tag: "Letter position", text: "The 2nd letter is A." }],
        options: ["PANORAMA", "PARANOIA", "PYJAMA", "PANACEA"], explanation: "means a wide, sweeping view of a landscape." },
      { before: "She's a highly ", jumbled: "TNEETPMOC", after: " engineer who solves problems quickly.", answer: "COMPETENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'capable and skilled.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["COMPETENT", "CONTENT", "COMPONENT", "COMPLIANT"], explanation: "means capable and skilled at what you do." },
      { before: "The museum's ", jumbled: "ROTRAUC", after: " arranged the ancient artefacts into a new exhibit.", answer: "CURATOR",
        clues: [{ tag: "Meaning", text: "It means the same as 'someone who looks after a collection.'" }, { tag: "Letter position", text: "The 2nd letter is U." }],
        options: ["CURATOR", "CREATOR", "CURATE", "CORRIDOR"], explanation: "means someone who looks after and organises a museum or gallery's collection." },
      { before: "After the fire, the family was ", jumbled: "TEFREB", after: " of everything they owned.", answer: "BEREFT",
        clues: [{ tag: "Meaning", text: "It means the same as 'deprived' or 'lacking.'" }, { tag: "Letter position", text: "The answer starts with the letter B." }],
        options: ["BEREFT", "BEREAVED", "BENEFIT", "BERET"], explanation: "means deprived of something, left lacking. Related to BEREAVED (having lost someone)." },
      { before: "You should ", jumbled: "ETAICTSAM", after: " your food thoroughly before swallowing.", answer: "MASTICATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'to chew.'" }, { tag: "Letter position", text: "The 2nd letter is T." }],
        options: ["MASTICATE", "MEDICATE", "INDICATE", "VACCINATE"], explanation: "means to chew food thoroughly." },
      { before: "The two knights agreed to settle their argument with a ", jumbled: "LUED", after: " at dawn.", answer: "DUEL",
        clues: [{ tag: "Meaning", text: "It means the same as 'a contest between two people.'" }, { tag: "Letter position", text: "The answer starts with the letter D." }],
        options: ["DUEL", "DUAL", "DUET", "FUEL"], explanation: "means a formal contest between two people. Don't confuse it with DUAL (meaning double) — next word." },
      { before: "The car has ", jumbled: "LUAD", after: " controls so either the driver or instructor can steer.", answer: "DUAL",
        clues: [{ tag: "Meaning", text: "It means the same as 'double' or 'having two parts.'" }, { tag: "Letter position", text: "The 2nd letter is U." }],
        options: ["DUAL", "DUEL", "LOUD", "DEAL"], explanation: "means double or having two parts. Don't confuse it with DUEL (a contest) — the word before." },
      { before: "The palace's ", jumbled: "TNEULPO", after: " furnishings included gold trim on every wall.", answer: "OPULENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'rich and lavish.'" }, { tag: "Letter position", text: "The 3rd letter is U." }],
        options: ["OPULENT", "OPPONENT", "EXPONENT", "INSOLENT"], explanation: "means rich and lavish — luxurious in an obvious way." },
      { before: "The two small companies decided to ", jumbled: "ETAAMGLAMA", after: " into one large firm.", answer: "AMALGAMATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'combine' or 'merge.'" }, { tag: "Word shape", text: "The answer looks like: A M A L G A _ A T E — only one letter is missing." }],
        options: ["AMALGAMATE", "ACCUMULATE", "ANIMATE", "ALTERNATE"], explanation: "means to combine or merge into one." },
      { before: "Her ", jumbled: "SUOCIAVIV", after: " personality lit up every room she walked into.", answer: "VIVACIOUS",
        clues: [{ tag: "Meaning", text: "It means the same as 'lively and full of energy.'" }, { tag: "Letter position", text: "The 2nd letter is U." }],
        options: ["VIVACIOUS", "VORACIOUS", "TENACIOUS", "VICARIOUS"], explanation: "means lively and full of energy." },
      { before: "He gave a ", jumbled: "ETITRNOC", after: " apology, clearly sorry for what he'd done.", answer: "CONTRITE",
        clues: [{ tag: "Meaning", text: "It means the same as 'sorry and apologetic.'" }, { tag: "Letter position", text: "The last letter is E." }],
        options: ["CONTRITE", "CONCRETE", "CONTORT", "CONSENT"], explanation: "means sorry and apologetic, showing genuine regret." },
      { before: "Guests were asked to wear formal ", jumbled: "EIRTTA", after: " to the wedding.", answer: "ATTIRE",
        clues: [{ tag: "Meaning", text: "It means the same as 'clothes' or 'an outfit.'" }, { tag: "Letter position", text: "The 2nd letter is T." }],
        options: ["ATTIRE", "ENTIRE", "RETIRE", "ATTAIN"], explanation: "means clothes or an outfit, especially for a special occasion." },
      { before: "Police believe he helped ", jumbled: "ETAIGTSNI", after: " the protest that turned violent.", answer: "INSTIGATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'start' or 'stir up.'" }, { tag: "Letter position", text: "The 3rd letter is S." }],
        options: ["INSTIGATE", "INVESTIGATE", "IRRIGATE", "INDICATE"], explanation: "means to start or stir up an event, often trouble." },
      { before: "His ", jumbled: "ERSET", after: " reply — just 'no' — made it clear he wasn't interested.", answer: "TERSE",
        clues: [{ tag: "Meaning", text: "It means the same as 'brief and blunt.'" }, { tag: "Letter position", text: "The 3rd letter is R." }],
        options: ["TERSE", "VERSE", "TENSE", "WORSE"], explanation: "means brief and blunt, using few words." },
      { before: "She showed a real ", jumbled: "EDUITTPA", after: " for maths from a very young age.", answer: "APTITUDE",
        clues: [{ tag: "Meaning", text: "It means the same as 'natural skill or ability.'" }, { tag: "Letter position", text: "The 2nd letter is P." }],
        options: ["APTITUDE", "ATTITUDE", "ALTITUDE", "GRATITUDE"], explanation: "means a natural skill or ability for something." },
      { before: "Nothing could ", jumbled: "LPEMOC", after: " him to change his mind once it was made up.", answer: "COMPEL",
        clues: [{ tag: "Meaning", text: "It means the same as 'force' or 'oblige.'" }, { tag: "Letter position", text: "The answer starts with the letter C." }],
        options: ["COMPEL", "COMPILE", "COUPLE", "COMPLY"], explanation: "means to force or oblige someone to do something." },
      { before: "The evidence linking him to the crime was ", jumbled: "SUONUET", after: " at best.", answer: "TENUOUS",
        clues: [{ tag: "Meaning", text: "It means the same as 'weak' or 'flimsy.'" }, { tag: "Letter position", text: "The last letter is S." }],
        options: ["TENUOUS", "TEDIOUS", "GENEROUS", "STRENUOUS"], explanation: "means weak or flimsy, barely holding together." },
      { before: "The army suffered a total ", jumbled: "UTOR", after: " and retreated in disarray.", answer: "ROUT",
        clues: [{ tag: "Meaning", text: "It means the same as 'a decisive defeat.'" }, { tag: "Letter position", text: "The answer starts with the letter R." }],
        options: ["ROUT", "ROOT", "ROTE", "TOUR"], explanation: "means a decisive, disorderly defeat." },
      { before: "She began to ", jumbled: "TAETRNE", after: " her parents to let her go to the concert.", answer: "ENTREAT",
        clues: [{ tag: "Meaning", text: "It means the same as 'beg' or 'plead.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["ENTREAT", "RETREAT", "ENTRANT", "ENTRAP"], explanation: "means to beg or plead earnestly. Don't confuse it with RETREAT (to withdraw)." },
      { before: "It was an ", jumbled: "SUOCIADUA", after: " plan to break into the vault in broad daylight.", answer: "AUDACIOUS",
        clues: [{ tag: "Meaning", text: "It means the same as 'bold and daring.'" }, { tag: "Letter position", text: "The 2nd letter is U." }],
        options: ["AUDACIOUS", "VORACIOUS", "TENACIOUS", "GRACIOUS"], explanation: "means bold and daring, often recklessly so." },
      { before: "The old king had to ", jumbled: "HSIQUNILER", after: " his throne to his eldest son.", answer: "RELINQUISH",
        clues: [{ tag: "Meaning", text: "It means the same as 'give up' or 'surrender.'" }, { tag: "Word shape", text: "The answer looks like: R E L I N Q _ I S H — only one letter is missing." }],
        options: ["RELINQUISH", "REPLENISH", "RELISH", "EXTINGUISH"], explanation: "means to give up or surrender something, like a throne or a claim." },
      { before: "On the hottest days, the cat lay ", jumbled: "DIUNGAL", after: " in the shade all afternoon.", answer: "LANGUID",
        clues: [{ tag: "Meaning", text: "It means the same as 'lazy and slow-moving.'" }, { tag: "Letter position", text: "The answer starts with the letter L." }],
        options: ["LANGUID", "LIQUID", "LINGO", "LAGOON"], explanation: "means lazy and slow-moving, often from heat or tiredness." },
      { before: "The gymnast's ", jumbled: "ETHIL", after: " body bent and twisted with ease.", answer: "LITHE",
        clues: [{ tag: "Meaning", text: "It means the same as 'flexible and graceful.'" }, { tag: "Letter position", text: "The 3rd letter is T." }],
        options: ["LITHE", "LATHE", "TITHE", "WRITHE"], explanation: "means flexible and graceful in movement." },
      { before: "Years of rain had begun to ", jumbled: "EACFFE", after: " the carving on the old gravestone.", answer: "EFFACE",
        clues: [{ tag: "Meaning", text: "It means the same as 'erase' or 'rub out.'" }, { tag: "Letter position", text: "The answer starts with the letter E." }],
        options: ["EFFACE", "DEFACE", "ENFORCE", "EMBRACE"], explanation: "means to erase or rub out, especially a mark or memory. Related to DEFACE (to spoil the surface of something)." },
      { before: "After months abroad, she began to ", jumbled: "NAREY", after: " for home.", answer: "YEARN",
        clues: [{ tag: "Meaning", text: "It means the same as 'long for' or 'wish deeply.'" }, { tag: "Letter position", text: "The answer ends with the letter N." }],
        options: ["YEARN", "LEARN", "EARN", "YEAR"], explanation: "means to long for or wish deeply for something." },
      { before: "The sunset painted the sky a beautiful orange ", jumbled: "UEH", after: ".", answer: "HUE",
        clues: [{ tag: "Meaning", text: "It means the same as 'a shade or tint of colour.'" }, { tag: "Letter position", text: "The answer starts with the letter H." }],
        options: ["HUE", "HUB", "HUG", "HEW"], explanation: "means a particular shade or tint of colour." },
      { before: "His brother kept trying to ", jumbled: "DOAG", after: " him into a fight, but he stayed calm.", answer: "GOAD",
        clues: [{ tag: "Meaning", text: "It means the same as 'provoke' or 'annoy on purpose.'" }, { tag: "Letter position", text: "The answer starts with the letter G." }],
        options: ["GOAD", "GOAT", "ROAD", "LOAD"], explanation: "means to provoke or deliberately annoy someone into reacting." },
      { before: "By evening, the storm had begun to ", jumbled: "EATBA", after: " and the rain grew lighter.", answer: "ABATE",
        clues: [{ tag: "Meaning", text: "It means the same as 'lessen' or 'die down.'" }, { tag: "Letter position", text: "The last letter is E." }],
        options: ["ABATE", "DEBATE", "ORNATE", "ESTATE"], explanation: "means to lessen or die down gradually." },
      { before: "She blushed at the unexpected ", jumbled: "TNEIMLPMOC", after: " about her painting.", answer: "COMPLIMENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'a nice remark of praise.'" }, { tag: "Letter position", text: "The 3rd letter is E." }],
        options: ["COMPLIMENT", "COMPLEMENT", "COMPONENT", "CONTAINMENT"], explanation: "means a nice remark of praise. Don't confuse it with COMPLEMENT (something that completes another) — next word, a classic confusable pair." },
      { before: "The scarf was the perfect ", jumbled: "TNEEMLPMOC", after: " to her new coat.", answer: "COMPLEMENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'something that completes or goes well with another.'" }, { tag: "Letter position", text: "The 3rd letter is E." }],
        options: ["COMPLEMENT", "COMPLIMENT", "COMPONENT", "CONDIMENT"], explanation: "means something that completes or perfectly matches another thing. Don't confuse it with COMPLIMENT (a nice remark) — the word before." }
    ]
  },
  {
    id: "list7",
    title: "Vocabulary List 7",
    source: "indata/vocab_01.md — Vocabulary List 7",
    words: [
      { before: "Farmers ", jumbled: "YPLPUS", after: " fresh vegetables to the market every week.", answer: "SUPPLY",
        clues: [{ tag: "Meaning", text: "It means the same as 'provide.'" }, { tag: "Letter position", text: "The 2nd letter is U." }],
        options: ["SUPPLY", "SIMPLY", "SUPPLE", "SUPPORT"], explanation: "means to provide something needed." },
      { before: "Police moved in to ", jumbled: "TESRRA", after: " the suspect near the train station.", answer: "ARREST",
        clues: [{ tag: "Meaning", text: "It means the same as 'take into custody.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["ARREST", "ADJUST", "ASSIST", "ATTEST"], explanation: "means to take someone into custody, or to stop something." },
      { before: "A tall fence was built to ", jumbled: "EOSLCNE", after: " the garden and keep the deer out.", answer: "ENCLOSE",
        clues: [{ tag: "Meaning", text: "It means the same as 'surround completely.'" }, { tag: "Letter position", text: "The 3rd letter is C." }],
        options: ["ENCLOSE", "ENCODE", "EXPOSE", "ENGROSS"], explanation: "means to completely surround or shut in." },
      { before: "The pilot announced they were cruising at a high ", jumbled: "EDUITTLA", after: ".", answer: "ALTITUDE",
        clues: [{ tag: "Meaning", text: "It means the same as 'height above sea level.'" }, { tag: "Letter position", text: "The 2nd letter is D." }],
        options: ["ALTITUDE", "ATTITUDE", "APTITUDE", "GRATITUDE"], explanation: "means height above sea level." },
      { before: "The shop began to ", jumbled: "EUCDER", after: " prices before the holiday.", answer: "REDUCE",
        clues: [{ tag: "Meaning", text: "It means the same as 'make smaller.'" }, { tag: "Letter position", text: "The last letter is E." }],
        options: ["REDUCE", "PRODUCE", "DEDUCE", "REFUSE"], explanation: "means to make something smaller or less." },
      { before: "It's a family ", jumbled: "MTOSUC", after: " to open one present on Christmas Eve.", answer: "CUSTOM",
        clues: [{ tag: "Meaning", text: "It means the same as 'a regular habit or tradition.'" }, { tag: "Letter position", text: "The answer starts with the letter C." }],
        options: ["CUSTOM", "CUSTARD", "COSTUME", "CUSTODY"], explanation: "means a regular habit or tradition." },
      { before: "Losing the match added to the team's ", jumbled: "YERSIM", after: ".", answer: "MISERY",
        clues: [{ tag: "Meaning", text: "It means the same as 'great unhappiness.'" }, { tag: "Letter position", text: "The answer ends with the letter Y." }],
        options: ["MISERY", "MASTERY", "MINISTRY", "MYSTERY"], explanation: "means great unhappiness or suffering." },
      { before: "Rain in April is very ", jumbled: "NMOMOC", after: " in this part of the country.", answer: "COMMON",
        clues: [{ tag: "Meaning", text: "It means the same as 'occurring often.'" }, { tag: "Letter position", text: "The answer ends with the letter N." }],
        options: ["COMMON", "CANNON", "COLUMN", "CUSTOM"], explanation: "means occurring often, or general/shared." },
      { before: "She bought a ", jumbled: "ELBTAROP", after: " speaker she could take on camping trips.", answer: "PORTABLE",
        clues: [{ tag: "Meaning", text: "It means the same as 'able to be carried.'" }, { tag: "Letter position", text: "The 2nd letter is L." }],
        options: ["PORTABLE", "PROBABLE", "POTABLE", "ADORABLE"], explanation: "means able to be carried around easily." },
      { before: "If you ", jumbled: "TECLGEN", after: " your homework all week, it piles up fast.", answer: "NEGLECT",
        clues: [{ tag: "Meaning", text: "It means the same as 'fail to look after.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["NEGLECT", "ELECT", "REFLECT", "COLLECT"], explanation: "means to fail to look after or take care of something." },
      { before: "Swimmers were warned about the strong ", jumbled: "TENRRUC", after: " near the rocks.", answer: "CURRENT",
        clues: [{ tag: "Meaning", text: "It means the same as 'happening now,' or 'a flow of water.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["CURRENT", "CURRANT", "CURTAIN", "CONCERT"], explanation: "means happening now, or a flow of water/air/electricity. Don't confuse it with CURRANT (a dried fruit)." },
      { before: "As a British ", jumbled: "NZEITIC", after: ", she was entitled to vote in the election.", answer: "CITIZEN",
        clues: [{ tag: "Meaning", text: "It means the same as 'a native of a nation or city.'" }, { tag: "Letter position", text: "The 5th letter is T." }],
        options: ["CITIZEN", "CRITIC", "CITADEL", "KITCHEN"], explanation: "means a recognised member of a particular nation or city." },
      { before: "Detectives began to ", jumbled: "TECPSUS", after: " the butler almost immediately.", answer: "SUSPECT",
        clues: [{ tag: "Meaning", text: "It means the same as 'believe to be the case.'" }, { tag: "Letter position", text: "The last letter is T." }],
        options: ["SUSPECT", "RESPECT", "INSPECT", "EXPECT"], explanation: "means to believe something is likely true, often without proof." },
      { before: "They saved for months to ", jumbled: "ESACHRUP", after: " their first family car.", answer: "PURCHASE",
        clues: [{ tag: "Meaning", text: "It means the same as 'to buy.'" }, { tag: "Letter position", text: "The 2nd letter is U." }],
        options: ["PURCHASE", "PURSUE", "PARACHUTE", "PURPOSE"], explanation: "means to buy something." },
      { before: "He tried to ", jumbled: "EIVECED", after: " the teacher by copying his friend's homework.", answer: "DECEIVE",
        clues: [{ tag: "Meaning", text: "It means the same as 'trick or cheat.'" }, { tag: "Letter position", text: "The last letter is E." }],
        options: ["DECEIVE", "RECEIVE", "PERCEIVE", "CONCEIVE"], explanation: "means to trick or cheat someone." },
      { before: "Every ", jumbled: "TNAITBAHNI", after: " of the small island knew each other by name.", answer: "INHABITANT",
        clues: [{ tag: "Meaning", text: "It means the same as 'someone who lives there.'" }, { tag: "Word shape", text: "The answer looks like: I N H A B I T A N _ — only one letter is missing." }],
        options: ["INHABITANT", "IMMIGRANT", "INSTANT", "ATTENDANT"], explanation: "means someone who lives in a particular place." },
      { before: "Fresh water became ", jumbled: "ERCACS", after: " during the long drought.", answer: "SCARCE",
        clues: [{ tag: "Meaning", text: "It means the same as 'hardly any' or 'rare.'" }, { tag: "Letter position", text: "The answer ends with the letter E." }],
        options: ["SCARCE", "SPARSE", "SCARE", "SEARCH"], explanation: "means hardly any, or rare." },
      { before: "The army prepared to ", jumbled: "EADVNI", after: " the neighbouring country at dawn.", answer: "INVADE",
        clues: [{ tag: "Meaning", text: "It means the same as 'overrun another place.'" }, { tag: "Letter position", text: "The answer starts with the letter I." }],
        options: ["INVADE", "EVADE", "INVITE", "INSIDE"], explanation: "means to overrun or forcefully enter another country or place." },
      { before: "He managed to ", jumbled: "EDGOD", after: " the puddle just in time.", answer: "DODGE",
        clues: [{ tag: "Meaning", text: "It means the same as 'avoid or evade.'" }, { tag: "Letter position", text: "The answer starts with the letter D." }],
        options: ["DODGE", "LODGE", "BADGE", "NUDGE"], explanation: "means to avoid or evade something skilfully." },
      { before: "She had to ", jumbled: "EITCER", after: " the poem from memory in front of the whole class.", answer: "RECITE",
        clues: [{ tag: "Meaning", text: "It means the same as 'say from memory.'" }, { tag: "Letter position", text: "The answer ends with the letter E." }],
        options: ["RECITE", "EXCITE", "IGNITE", "UNITE"], explanation: "means to say something aloud from memory." },
      { before: "The ", jumbled: "EILTREF", after: " soil along the river produced huge crops every year.", answer: "FERTILE",
        clues: [{ tag: "Meaning", text: "It means the same as 'good for growing crops.'" }, { tag: "Letter position", text: "The answer ends with the letter E." }],
        options: ["FERTILE", "FUTILE", "HOSTILE", "TEXTILE"], explanation: "means able to reproduce, or good for growing crops." },
      { before: "The judge showed ", jumbled: "YRCEM", after: " and reduced the sentence.", answer: "MERCY",
        clues: [{ tag: "Meaning", text: "It means the same as 'forgiveness' or 'clemency.'" }, { tag: "Letter position", text: "The answer starts with the letter M." }],
        options: ["MERCY", "MERGER", "MEMORY", "MYSTERY"], explanation: "means forgiveness or clemency shown to someone." },
      { before: "The ancient Greeks believed thunder was a ", jumbled: "EINVID", after: " warning from the gods.", answer: "DIVINE",
        clues: [{ tag: "Meaning", text: "It means the same as 'heavenly.'" }, { tag: "Letter position", text: "The answer ends with the letter E." }],
        options: ["DIVINE", "DEFINE", "DIVIDE", "DECLINE"], explanation: "means heavenly or godlike." },
      { before: "The family decided to ", jumbled: "TOPDA", after: " a rescue dog from the shelter.", answer: "ADOPT",
        clues: [{ tag: "Meaning", text: "It means the same as 'accept as your own.'" }, { tag: "Letter position", text: "The answer starts with the letter A." }],
        options: ["ADOPT", "ADAPT", "ADEPT", "ABORT"], explanation: "means to accept something or someone as your own. Don't confuse it with ADAPT (to adjust)." },
      { before: "Let me ", jumbled: "ECUODRTNI", after: " you to my new colleague, Mr. Patel.", answer: "INTRODUCE",
        clues: [{ tag: "Meaning", text: "It means the same as 'present someone to others.'" }, { tag: "Letter position", text: "The 2nd letter is C." }],
        options: ["INTRODUCE", "PRODUCE", "REDUCE", "SEDUCE"], explanation: "means to present a person or thing to others for the first time." },
      { before: "The company covered every travel ", jumbled: "ENSEPXE", after: " for the business trip.", answer: "EXPENSE",
        clues: [{ tag: "Meaning", text: "It means the same as 'cost' or 'money needed.'" }, { tag: "Letter position", text: "The answer ends with the letter E." }],
        options: ["EXPENSE", "EXPANSE", "EXCUSE", "EXTENT"], explanation: "means the cost or money needed for something." },
      { before: "The old professor was a respected ", jumbled: "RLAOHCS", after: " of ancient history.", answer: "SCHOLAR",
        clues: [{ tag: "Meaning", text: "It means the same as 'a learned person.'" }, { tag: "Letter position", text: "The answer starts with the letter S." }],
        options: ["SCHOLAR", "COLLAR", "DOLLAR", "SCALAR"], explanation: "means a learned person, especially one who studies a subject deeply." },
      { before: "By the end of the marathon, sheer ", jumbled: "SSEINRAEW", after: " had set in.", answer: "WEARINESS",
        clues: [{ tag: "Meaning", text: "It means the same as 'tiredness.'" }, { tag: "Letter position", text: "The answer starts with the letter W." }],
        options: ["WEARINESS", "AWARENESS", "WILDERNESS", "WITNESS"], explanation: "means tiredness or drowsiness." },
      { before: "She tried her ", jumbled: "TOSMTU", after: " to finish the race despite the pain.", answer: "UTMOST",
        clues: [{ tag: "Meaning", text: "It means the same as 'the most you can do.'" }, { tag: "Letter position", text: "The answer starts with the letter U." }],
        options: ["UTMOST", "ALMOST", "OUTPOST", "UPPERMOST"], explanation: "means the greatest amount or degree possible." },
      { before: "The eagle began to ", jumbled: "ROAS", after: " high above the mountain peaks.", answer: "SOAR",
        clues: [{ tag: "Meaning", text: "It means the same as 'fly quickly upwards.'" }, { tag: "Letter position", text: "The answer starts with the letter S." }],
        options: ["SOAR", "ROAR", "SCAR", "STAR"], explanation: "means to fly quickly upwards, or to rise sharply." },
      { before: "The blacksmith kept the ", jumbled: "EACNRUF", after: " burning hot all day.", answer: "FURNACE",
        clues: [{ tag: "Meaning", text: "It means the same as 'a giant oven.'" }, { tag: "Letter position", text: "The answer ends with the letter E." }],
        options: ["FURNACE", "FURNISH", "FURTHER", "FINANCE"], explanation: "means a giant oven used for melting metal or heating." },
      { before: "She ran to ", jumbled: "EACRBME", after: " her brother at the airport after two years apart.", answer: "EMBRACE",
        clues: [{ tag: "Meaning", text: "It means the same as 'to hug' or 'to include.'" }, { tag: "Letter position", text: "The answer starts with the letter E." }],
        options: ["EMBRACE", "EMBASSY", "EMERGE", "ENGAGE"], explanation: "means to hug, or to include or accept something willingly." },
      { before: "The school holds its ", jumbled: "LUANNA", after: " sports day every June.", answer: "ANNUAL",
        clues: [{ tag: "Meaning", text: "It means the same as 'happening every year.'" }, { tag: "Letter position", text: "The answer starts with the letter A." }],
        options: ["ANNUAL", "MANUAL", "ANNUL", "ACTUAL"], explanation: "means happening once every year." },
      { before: "Eventually he had to ", jumbled: "TMIBUS", after: " to his coach's stricter training plan.", answer: "SUBMIT",
        clues: [{ tag: "Meaning", text: "It means the same as 'give in' or 'yield.'" }, { tag: "Letter position", text: "The answer starts with the letter S." }],
        options: ["SUBMIT", "SUMMIT", "PERMIT", "ADMIT"], explanation: "means to give in or yield to someone else's authority." }
    ]
  }
];
