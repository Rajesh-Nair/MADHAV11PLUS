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
  }
];
