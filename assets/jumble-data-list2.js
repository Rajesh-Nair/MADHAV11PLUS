/*
 * Growing data bank for the Vocabulary List 2 practice page
 * (lessons/0003-vocabulary-list-2-practice.html). Same shape and conventions
 * as assets/jumble-data.js, kept as a separate array/file since
 * indata/vocab_02.md is a distinct source list from vocab_01.md (see
 * NOTES.md). Append new batches here as they're written.
 * Each batch: { id, title, source, words: [ ...initJumbleWidget configs... ] }
 * Words with two distinct meanings (homonyms) get an extra clue tagged
 * 'Homonym' and a hint chip typed 'homonym' (renders as '(homonym)' via
 * reveal.js's untyped-hint fallback).
 */
const JUMBLE_BATCHES_LIST2 = [
  {
    id: "list2-batch01",
    title: "Vocabulary List 2 — Batch 1",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "The ", jumbled: "LGAEEDL", after: " thief was released because the police had no real evidence against him.",
        answer: "ALLEGED",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'supposed' or 'claimed' — not yet proven true." }
        ],
        hints: [{ word: "SUPPOSED", type: "synonym" }, { word: "PROVEN", type: "antonym" }],
        explanation: "means supposed or claimed — used when something hasn't been proven true, like an alleged thief who hasn't actually been convicted."
      },
      {
        before: "Her story seemed to ", jumbled: "AOTCNCTDRI", after: " what the other witness had said.",
        answer: "CONTRADICT",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'deny' or 'oppose' — to say the opposite of something." }
        ],
        hints: [{ word: "DENY", type: "synonym" }, { word: "CONFIRM", type: "antonym" }],
        explanation: "means to deny or oppose something by saying the opposite — like two witnesses whose stories don't match."
      },
      {
        before: "It took the historian weeks to ", jumbled: "RHEDPEIC", after: " the ancient, faded handwriting.",
        answer: "DECIPHER",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'decode' or 'work out' — to figure out something hard to read or understand." }
        ],
        hints: [{ word: "DECODE", type: "synonym" }, { word: "ENCODE", type: "antonym" }],
        explanation: "means to decode or work out something difficult to read or understand, like faded old handwriting."
      },
      {
        before: "The harsh prison conditions seemed designed to ", jumbled: "MSIEUHNEAD", after: " the inmates.",
        answer: "DEHUMANISE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'degrade' or 'demean' — to treat people as if they weren't human." }
        ],
        hints: [{ word: "DEGRADE", type: "synonym" }, { word: "DIGNIFY", type: "antonym" }],
        explanation: "means to degrade or demean people, treating them as if they were not human — the opposite of showing respect and dignity."
      },
      {
        before: "Losing every match of the season was ", jumbled: "GRDIIEANOLSM", after: " for the young team.",
        answer: "DEMORALISING",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'disheartening' or 'discouraging' — making someone lose hope or confidence." }
        ],
        hints: [{ word: "DISHEARTENING", type: "synonym" }, { word: "ENCOURAGING", type: "antonym" }],
        explanation: "means disheartening or discouraging — something that drains a team's confidence and hope, like losing every match of the season."
      },
      {
        before: "After hours of searching, they ", jumbled: "ALENULVYTE", after: " found the missing dog asleep under the porch.",
        answer: "EVENTUALLY",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'finally' or 'in the end' — after some time has passed." }
        ],
        hints: [{ word: "FINALLY", type: "synonym" }, { word: "IMMEDIATELY", type: "antonym" }],
        explanation: "means finally or in the end — after searching for hours, they found the dog at last."
      },
      {
        before: "The meaning of the old proverb was so ", jumbled: "BORUCES", after: " that nobody in class could explain it.",
        answer: "OBSCURE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is B." },
          { tag: "Meaning", text: "It means the same as 'vague' or 'unclear' — hard to understand." },
          { tag: "Homonym", text: "This word has two different meanings — (1) unclear or hard to understand, and (2) to hide or block something from view. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "VAGUE", type: "synonym" }, { word: "CLEAR", type: "antonym" }, { word: "CONCEAL", type: "homonym" }],
        explanation: "means both unclear or hard to understand and, separately, to hide or block something from view — this sentence uses the first sense, describing a proverb nobody could explain."
      },
      {
        before: "The gymnast's ", jumbled: "MNOPALENHE", after: " performance earned her a perfect score.",
        answer: "PHENOMENAL",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is M." },
          { tag: "Meaning", text: "It means the same as 'remarkable' or 'extraordinary' — amazing, far beyond ordinary." }
        ],
        hints: [{ word: "REMARKABLE", type: "synonym" }, { word: "ORDINARY", type: "antonym" }],
        explanation: "means remarkable or extraordinary — a performance so amazing it earned a perfect score."
      },
      {
        before: "We took the ", jumbled: "CSCEIN", after: " route along the coast instead of the motorway.",
        answer: "SCENIC",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'picturesque' or 'beautiful' — pleasing to look at, especially views of nature." }
        ],
        hints: [{ word: "PICTURESQUE", type: "synonym" }, { word: "UNATTRACTIVE", type: "antonym" }],
        explanation: "means picturesque or beautiful to look at — a scenic route is one with lovely views along the way."
      },
      {
        before: "Copying out the whole textbook by hand was a ", jumbled: "UTSDOEI", after: " task.",
        answer: "TEDIOUS",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'boring' or 'monotonous' — dull and repetitive." }
        ],
        hints: [{ word: "BORING", type: "synonym" }, { word: "EXCITING", type: "antonym" }],
        explanation: "means boring or monotonous — copying a whole textbook out by hand, letter after letter, is about as dull as it gets."
      },
      {
        before: "The strong wind began to ", jumbled: "TAGEATI", after: " the surface of the lake.",
        answer: "AGITATE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'stir' or 'disturb' — to shake something up so it's no longer calm." }
        ],
        hints: [{ word: "STIR", type: "synonym" }, { word: "CALM", type: "antonym" }],
        explanation: "means to stir or disturb something — the wind stirred up the once-calm surface of the lake."
      },
      {
        before: "As headteacher, she held an ", jumbled: "TXDELEA", after: " position within the school.",
        answer: "EXALTED",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is X." },
          { tag: "Meaning", text: "It means the same as 'elevated' or 'honoured' — held in very high regard." }
        ],
        hints: [{ word: "ELEVATED", type: "synonym" }, { word: "HUMBLE", type: "antonym" }],
        explanation: "means elevated or highly honoured — a headteacher holds an exalted, respected position in a school."
      },
      {
        before: "The fans were ", jumbled: "ACIETCST", after: " when their team scored in the final minute.",
        answer: "ECSTATIC",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'overjoyed' or 'elated' — extremely happy and excited." }
        ],
        hints: [{ word: "OVERJOYED", type: "synonym" }, { word: "MISERABLE", type: "antonym" }],
        explanation: "means overjoyed or elated — the kind of extreme happiness fans feel after a last-minute winning goal."
      },
      {
        before: "During the war, the government would ", jumbled: "STICOPNRC", after: " every eighteen-year-old man into the army.",
        answer: "CONSCRIPT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'recruit' or 'call up' — to order someone into military service." }
        ],
        hints: [{ word: "RECRUIT", type: "synonym" }, { word: "VOLUNTEER", type: "antonym" }],
        explanation: "means to recruit or call someone up for military service, often without them having a choice — the opposite of volunteering."
      },
      {
        before: "The waiter would carefully ", jumbled: "ETANDC", after: " the red wine into a glass jug before serving it.",
        answer: "DECANT",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'pour' or 'transfer' — to carefully pour liquid from one container into another." }
        ],
        hints: [{ word: "POUR", type: "synonym" }],
        explanation: "means to pour or transfer liquid carefully from one container to another, like wine poured from a bottle into a jug."
      },
      {
        before: "The ", jumbled: "TLETNPAU", after: " toddler threw his toys across the room when told it was bedtime.",
        answer: "PETULANT",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'sulky' or 'irritable' — cross and childish, especially about small things." }
        ],
        hints: [{ word: "SULKY", type: "synonym" }, { word: "PATIENT", type: "antonym" }],
        explanation: "means sulky or irritable in a childish way — like a toddler's cross reaction to being sent to bed."
      },
      {
        before: "The ", jumbled: "RSOTUAICF", after: " committee meeting ended with members refusing to speak to one another.",
        answer: "FRACTIOUS",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'irritable' or 'quarrelsome' — easily annoyed and prone to arguing." }
        ],
        hints: [{ word: "QUARRELSOME", type: "synonym" }, { word: "CALM", type: "antonym" }],
        explanation: "means irritable and quarrelsome — a fractious meeting is one where people snap at each other and can't agree."
      },
      {
        before: "He was so ", jumbled: "EDESTOTB", after: " with his new puppy that he carried a photograph of it everywhere.",
        answer: "BESOTTED",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'infatuated' or 'smitten' — completely full of affection for someone or something." }
        ],
        hints: [{ word: "SMITTEN", type: "synonym" }, { word: "INDIFFERENT", type: "antonym" }],
        explanation: "means infatuated or smitten — so full of affection that he carried a photo of his puppy everywhere."
      },
      {
        before: "The referee would ", jumbled: "MDEE", after: " the tackle too dangerous and award a penalty.",
        answer: "DEEM",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is M." },
          { tag: "Meaning", text: "It means the same as 'consider' or 'judge' — to form an opinion about something." }
        ],
        hints: [{ word: "CONSIDER", type: "synonym" }],
        explanation: "means to consider or judge something to be a certain way — like a referee judging a tackle too dangerous."
      },
      {
        before: "With ", jumbled: "GDINNIIHSIM", after: " daylight each evening, they knew winter was approaching.",
        answer: "DIMINISHING",
        clues: [
          { tag: "Letter position", text: "The 8th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'decreasing' or 'dwindling' — gradually getting smaller or less." }
        ],
        hints: [{ word: "DWINDLING", type: "synonym" }, { word: "INCREASING", type: "antonym" }],
        explanation: "means decreasing or dwindling — the daylight hours were gradually shrinking as winter approached."
      },
      {
        before: "The climber balanced in a ", jumbled: "RUOSEICPAR", after: " position on the narrow ledge.",
        answer: "PRECARIOUS",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'unstable' or 'risky' — likely to fall or fail at any moment." }
        ],
        hints: [{ word: "UNSTABLE", type: "synonym" }, { word: "SECURE", type: "antonym" }],
        explanation: "means unstable or risky — a precarious position on a ledge could give way at any moment."
      },
      {
        before: "He was ", jumbled: "ACNATIFLA", after: " about football, never missing a single match.",
        answer: "FANATICAL",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'zealous' or 'obsessive' — extremely enthusiastic about something." }
        ],
        hints: [{ word: "ZEALOUS", type: "synonym" }, { word: "INDIFFERENT", type: "antonym" }],
        explanation: "means zealous or obsessive — someone fanatical about football never wants to miss a match."
      },
      {
        before: "The wronged knight swore ", jumbled: "CEVGENAEN", after: " on the men who had destroyed his village.",
        answer: "VENGEANCE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'revenge' or 'retribution' — punishing someone in return for a wrong done to you." }
        ],
        hints: [{ word: "REVENGE", type: "synonym" }, { word: "FORGIVENESS", type: "antonym" }],
        explanation: "means revenge or retribution — the knight wanted to punish those who wronged him and his village."
      },
      {
        before: "The swan seemed to ", jumbled: "EDGIL", after: " effortlessly across the still lake.",
        answer: "GLIDE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'slide' or 'drift' — to move smoothly and effortlessly." }
        ],
        hints: [{ word: "DRIFT", type: "synonym" }, { word: "STUMBLE", type: "antonym" }],
        explanation: "means to slide or drift smoothly — like a swan moving effortlessly across still water."
      },
      {
        before: "Ships unloaded their cargo along the busy ", jumbled: "ERSWHVA", after: " of the old harbour.",
        answer: "WHARVES",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'docks' or 'piers' — platforms where ships load and unload their cargo." }
        ],
        hints: [{ word: "DOCKS", type: "synonym" }],
        explanation: "means docks or piers — the platforms along a harbour where ships tie up to load and unload cargo."
      },
      {
        before: "The children came ", jumbled: "IENKSIGHR", after: " with delight down the water slide.",
        answer: "SHRIEKING",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is K." },
          { tag: "Meaning", text: "It means the same as 'screaming' or 'screeching' — making a high, loud sound, often from excitement or fear." }
        ],
        hints: [{ word: "SCREECHING", type: "synonym" }, { word: "WHISPERING", type: "antonym" }],
        explanation: "means screaming or screeching — a high, loud sound, here made from excitement rather than fear."
      },
      {
        before: "The fox used ", jumbled: "LIEUG", after: " rather than speed to catch the unsuspecting hen.",
        answer: "GUILE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'cunning' or 'trickery' — cleverness used to deceive." }
        ],
        hints: [{ word: "CUNNING", type: "synonym" }, { word: "HONESTY", type: "antonym" }],
        explanation: "means cunning or trickery — cleverness used to deceive, like a fox outwitting its prey instead of outrunning it."
      }
    ]
  },
  {
    id: "list2-batch02",
    title: "Vocabulary List 2 — Batch 2",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "She wore an embroidered ", jumbled: "EILRGD", after: " around her waist to hold her cloak in place.",
        answer: "GIRDLE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'belt' or 'sash' — a band worn around the waist." }
        ],
        hints: [{ word: "BELT", type: "synonym" }],
        explanation: "means a belt or sash worn around the waist — here, one holding a cloak in place."
      },
      {
        before: "The French artist wore a black ", jumbled: "TEEBR", after: " tilted to one side.",
        answer: "BERET",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'cap' or 'hat' — a soft, round, flat-topped hat." }
        ],
        hints: [{ word: "CAP", type: "synonym" }],
        explanation: "means a soft, round, flat-topped hat — the kind an artist might wear tilted to one side."
      },
      {
        before: "The old man wore a red ", jumbled: "EFZ", after: " with a black tassel, as was the local custom.",
        answer: "FEZ",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is Z." },
          { tag: "Meaning", text: "It means the same as 'cap' or 'hat' — a flat-topped, brimless felt hat, often red, with a tassel." }
        ],
        hints: [{ word: "CAP", type: "synonym" }],
        explanation: "means a flat-topped, brimless felt hat, traditionally red with a tassel, worn in parts of North Africa and the Middle East."
      },
      {
        before: "The restaurant's special dish that evening was ", jumbled: "EVLA", after: " served with a creamy sauce.",
        answer: "VEAL",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is A." },
          { tag: "Meaning", text: "It's the word for meat that comes from a young calf." }
        ],
        hints: [{ word: "(MEAT FROM A CALF)", type: "synonym" }],
        explanation: "means meat that comes from a young calf, often served with a creamy sauce in fine dining."
      },
      {
        before: "Thousands of ants worked together in the underground ", jumbled: "LCYONO", after: ".",
        answer: "COLONY",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'settlement' or 'community' — a group living together in one place." }
        ],
        hints: [{ word: "SETTLEMENT", type: "synonym" }],
        explanation: "means a settlement or community living together — like a colony of ants working as one underground."
      },
      {
        before: "A ", jumbled: "CAKP", after: " of wolves howled together in the distance as darkness fell.",
        answer: "PACK",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'group' or 'band' — the word used for a group of wolves." }
        ],
        hints: [{ word: "GROUP", type: "synonym" }],
        explanation: "means a group or band — 'pack' is the special collective noun used for a group of wolves."
      },
      {
        before: "A ", jumbled: "EIDPR", after: " of lions rested lazily in the shade of the acacia tree.",
        answer: "PRIDE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'group' or 'company' — the special word used for a group of lions." }
        ],
        hints: [{ word: "GROUP", type: "synonym" }],
        explanation: "means a group or company — 'pride' is the collective noun used specifically for a group of lions."
      },
      {
        before: "A ", jumbled: "DERH", after: " of elephants made its way slowly towards the waterhole.",
        answer: "HERD",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'group' or 'flock' — a word for a group of large animals moving together." }
        ],
        hints: [{ word: "FLOCK", type: "synonym" }],
        explanation: "means a group of animals moving together — 'herd' is the word used for groups of large animals like elephants."
      },
      {
        before: "The ", jumbled: "IAGNIL", after: " king could no longer attend meetings of his council.",
        answer: "AILING",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'sick' or 'unwell' — in poor health." }
        ],
        hints: [{ word: "UNWELL", type: "synonym" }, { word: "HEALTHY", type: "antonym" }],
        explanation: "means sick or unwell — the king was in poor health and could no longer attend his council meetings."
      },
      {
        before: "After the long journey, she was glad to find a moment of ", jumbled: "EOPESR", after: " in the quiet garden.",
        answer: "REPOSE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'rest' or 'tranquillity' — calm and peaceful relaxation." }
        ],
        hints: [{ word: "REST", type: "synonym" }, { word: "AGITATION", type: "antonym" }],
        explanation: "means rest or tranquillity — a peaceful moment of calm after a long, tiring journey."
      },
      {
        before: "The house's ", jumbled: "IXTOPRMYI", after: " to the school made the morning walk very short.",
        answer: "PROXIMITY",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is X." },
          { tag: "Meaning", text: "It means the same as 'nearness' or 'closeness' — how close something is to another place." }
        ],
        hints: [{ word: "NEARNESS", type: "synonym" }, { word: "DISTANCE", type: "antonym" }],
        explanation: "means nearness or closeness — the house was so close to the school that the walk there was very short."
      },
      {
        before: "It was a ", jumbled: "SAOLUCL", after: " remark to make to someone who had just lost their pet.",
        answer: "CALLOUS",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'heartless' or 'unfeeling' — showing no care for other people's feelings." }
        ],
        hints: [{ word: "HEARTLESS", type: "synonym" }, { word: "COMPASSIONATE", type: "antonym" }],
        explanation: "means heartless or unfeeling — a callous remark shows no care for someone else's pain."
      },
      {
        before: "The soup was so ", jumbled: "NPIDIIS", after: " that she reached for the salt straight away.",
        answer: "INSIPID",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'bland' or 'tasteless' — lacking any real flavour or interest." }
        ],
        hints: [{ word: "BLAND", type: "synonym" }, { word: "TASTY", type: "antonym" }],
        explanation: "means bland or tasteless — food with so little flavour that it needs extra seasoning to be enjoyable."
      },
      {
        before: "The company was fined for its ", jumbled: "ECHRBA", after: " of the safety regulations.",
        answer: "BREACH",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'violation' or 'infringement' — breaking a rule or agreement." }
        ],
        hints: [{ word: "VIOLATION", type: "synonym" }, { word: "COMPLIANCE", type: "antonym" }],
        explanation: "means a violation or infringement — breaking a rule, like the safety regulations the company ignored."
      },
      {
        before: "After much ", jumbled: "IDORNBELAEIT", after: ", the jury finally reached a verdict.",
        answer: "DELIBERATION",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'consideration' or 'discussion' — careful thought before making a decision." }
        ],
        hints: [{ word: "CONSIDERATION", type: "synonym" }, { word: "RASHNESS", type: "antonym" }],
        explanation: "means careful consideration or discussion before deciding something — the jury thought it over thoroughly before reaching their verdict."
      },
      {
        before: "She would ", jumbled: "FEESUR", after: " to apologise even though she knew she was wrong.",
        answer: "REFUSE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'reject' or 'turn down' — to say no to something." },
          { tag: "Homonym", text: "This word has two different meanings — (1) to reject or turn something down, and (2) rubbish or waste that's thrown away. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "REJECT", type: "synonym" }, { word: "ACCEPT", type: "antonym" }, { word: "WASTE", type: "homonym" }],
        explanation: "means both to reject or turn something down and, separately, rubbish or waste that gets thrown away — this sentence uses the first sense, about refusing to apologise."
      },
      {
        before: "It's hard to ", jumbled: "SVEEAGIN", after: " how the empty plot will look once the new library is built.",
        answer: "ENVISAGE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'imagine' or 'picture' — to form a mental picture of something in the future." }
        ],
        hints: [{ word: "IMAGINE", type: "synonym" }],
        explanation: "means to imagine or picture something, usually how it might look or turn out in the future."
      },
      {
        before: "Nobody could ", jumbled: "REESFEO", after: " how quickly the storm would arrive.",
        answer: "FORESEE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'predict' or 'anticipate' — to know something is going to happen before it does." }
        ],
        hints: [{ word: "PREDICT", type: "synonym" }],
        explanation: "means to predict or anticipate something before it happens — nobody expected the storm to arrive so fast."
      },
      {
        before: "A ", jumbled: "OUEPCL", after: " of swans glided side by side across the pond.",
        answer: "COUPLE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'pair' or 'duo' — two of something together." }
        ],
        hints: [{ word: "PAIR", type: "synonym" }],
        explanation: "means a pair or duo — two of something together, like two swans gliding side by side."
      },
      {
        before: "The players suspected the game had been ", jumbled: "GREDGI", after: " when the same person kept winning.",
        answer: "RIGGED",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'fixed' or 'manipulated' — secretly arranged to produce an unfair result." }
        ],
        hints: [{ word: "FIXED", type: "synonym" }, { word: "FAIR", type: "antonym" }],
        explanation: "means fixed or manipulated — secretly arranged so the outcome isn't fair, like a game where the same person always wins."
      },
      {
        before: "The champions became ", jumbled: "TMPEAOCCNL", after: " and lost their final match to a weaker team.",
        answer: "COMPLACENT",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'smug' or 'self-satisfied' — too pleased with yourself to notice a problem coming." }
        ],
        hints: [{ word: "SMUG", type: "synonym" }, { word: "VIGILANT", type: "antonym" }],
        explanation: "means smug or self-satisfied — so pleased with past success that you stop trying and don't see trouble coming, like champions who grow careless and lose."
      },
      {
        before: "He smiled ", jumbled: "LMSYUG", after: " after winning the argument.",
        answer: "SMUGLY",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'self-satisfiedly' or 'conceitedly' — in a way that shows too much pride in yourself." }
        ],
        hints: [{ word: "CONCEITEDLY", type: "synonym" }, { word: "HUMBLY", type: "antonym" }],
        explanation: "means self-satisfiedly or conceitedly — smiling in a way that shows off how pleased you are with yourself."
      },
      {
        before: "The pop star was greeted with ", jumbled: "NULIAOATD", after: " from thousands of screaming fans.",
        answer: "ADULATION",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'admiration' or 'worship' — huge, enthusiastic praise, almost like idol-worship." }
        ],
        hints: [{ word: "ADMIRATION", type: "synonym" }, { word: "CONTEMPT", type: "antonym" }],
        explanation: "means intense admiration or worship — the huge, enthusiastic praise a star gets from adoring fans."
      },
      {
        before: "Rising prices led to growing ", jumbled: "NTSNITOCED", after: " among the villagers.",
        answer: "DISCONTENT",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'dissatisfaction' or 'unhappiness' — a feeling of not being pleased with how things are." }
        ],
        hints: [{ word: "DISSATISFACTION", type: "synonym" }, { word: "CONTENTMENT", type: "antonym" }],
        explanation: "means dissatisfaction or unhappiness — a general feeling of displeasure, like villagers grumbling as prices kept rising."
      },
      {
        before: "The workers ", jumbled: "EDSAIMLDNT", after: " the old fairground ride piece by piece.",
        answer: "DISMANTLED",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'took apart' or 'disassembled' — broke something down into its separate pieces." }
        ],
        hints: [{ word: "DISASSEMBLED", type: "synonym" }, { word: "CONSTRUCTED", type: "antonym" }],
        explanation: "means took apart or disassembled — broke something down piece by piece, like an old fairground ride."
      },
      {
        before: "The storyteller's tale of dragons and knights would ", jumbled: "NETLHRA", after: " every child in the room.",
        answer: "ENTHRAL",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'captivate' or 'fascinate' — to hold someone's attention completely." }
        ],
        hints: [{ word: "CAPTIVATE", type: "synonym" }, { word: "BORE", type: "antonym" }],
        explanation: "means to captivate or fascinate — to hold someone's full attention, like a magical tale holding a room of children spellbound."
      },
      {
        before: "The traffic on the motorway this morning was ", jumbled: "NSEDRRHUOO", after: ".",
        answer: "HORRENDOUS",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'dreadful' or 'appalling' — extremely bad or unpleasant." }
        ],
        hints: [{ word: "DREADFUL", type: "synonym" }, { word: "WONDERFUL", type: "antonym" }],
        explanation: "means dreadful or appalling — extremely bad, like traffic so bad it ruins the whole morning."
      }
    ]
  },
  {
    id: "list2-batch03",
    title: "Vocabulary List 2 — Batch 3",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "A ", jumbled: "NMHYLECLAO", after: " tune drifted from the old piano in the empty hall.",
        answer: "MELANCHOLY",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'sad' or 'sorrowful.'" }
        ],
        hints: [{ word: "SAD", type: "synonym" }, { word: "CHEERFUL", type: "antonym" }],
        explanation: "means sad, gloomy, or wistful — like a mournful tune drifting through an empty hall."
      },
      {
        before: "She smiled at him, but he did not ", jumbled: "ACTECREPOIR", after: " the gesture.",
        answer: "RECIPROCATE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'return' or 'repay.'" }
        ],
        hints: [{ word: "RETURN", type: "synonym" }, { word: "WITHHOLD", type: "antonym" }],
        explanation: "means to return or repay something given to you — she smiled at him, but he didn't give anything back."
      },
      {
        before: "Nobody knew exactly what would ", jumbled: "RISRPATEN", after: " during the meeting behind closed doors.",
        answer: "TRANSPIRE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'happen' or 'occur.'" }
        ],
        hints: [{ word: "HAPPEN", type: "synonym" }],
        explanation: "means to happen or occur — often used for something only revealed afterwards, once it's all over."
      },
      {
        before: "The icy mountain path was ", jumbled: "HEUOEARTSRC", after: " after the overnight snowfall.",
        answer: "TREACHEROUS",
        clues: [
          { tag: "Letter position", text: "The 9th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'dangerous' or 'disloyal.'" }
        ],
        hints: [{ word: "DANGEROUS", type: "synonym" }, { word: "SAFE", type: "antonym" }],
        explanation: "means dangerous or unstable underfoot — or, for a person, sneakily disloyal — like an icy path that isn't safe to walk on."
      },
      {
        before: "The general never forgave the ", jumbled: "ATEYCREHR", after: " of the soldier who had sold his plans to the enemy.",
        answer: "TREACHERY",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is Y." },
          { tag: "Meaning", text: "It means the same as 'betrayal' or 'disloyalty.'" }
        ],
        hints: [{ word: "BETRAYAL", type: "synonym" }, { word: "LOYALTY", type: "antonym" }],
        explanation: "means betrayal or disloyalty — breaking someone's trust, like a soldier secretly helping the enemy."
      },
      {
        before: "Clean water is ", jumbled: "TIALV", after: " for every living creature.",
        answer: "VITAL",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'essential' or 'crucial.'" }
        ],
        hints: [{ word: "ESSENTIAL", type: "synonym" }, { word: "UNIMPORTANT", type: "antonym" }],
        explanation: "means essential or crucial — something you cannot do without, like clean water for every living creature."
      },
      {
        before: "Despite her age, my grandmother is full of ", jumbled: "YTIITVLA", after: " and never stops moving.",
        answer: "VITALITY",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'energy' or 'liveliness.'" }
        ],
        hints: [{ word: "ENERGY", type: "synonym" }, { word: "LETHARGY", type: "antonym" }],
        explanation: "means energy and liveliness — like a grandmother who never stops moving."
      },
      {
        before: "It is ", jumbled: "LVYAILT", after: " important that you wear a helmet when cycling.",
        answer: "VITALLY",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is Y." },
          { tag: "Meaning", text: "It means the same as 'crucially' or 'essentially.'" }
        ],
        hints: [{ word: "CRUCIALLY", type: "synonym" }],
        explanation: "means crucially or essentially — used to stress how important something is, like wearing a helmet when cycling."
      },
      {
        before: "The ", jumbled: "SIUVCVOIA", after: " new student made friends with everyone on her first day.",
        answer: "VIVACIOUS",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'lively' or 'spirited.'" }
        ],
        hints: [{ word: "LIVELY", type: "synonym" }, { word: "DULL", type: "antonym" }],
        explanation: "means lively, animated, and full of spirit — like a new student who instantly makes friends with everyone."
      },
      {
        before: "The sunset painted the sky in ", jumbled: "DVIVI", after: " shades of orange and pink.",
        answer: "VIVID",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'bright' or 'striking.'" }
        ],
        hints: [{ word: "BRIGHT", type: "synonym" }, { word: "DULL", type: "antonym" }],
        explanation: "means bright, brilliant, and striking — like a sunset painted in intense shades of orange and pink."
      },
      {
        before: "The pot was glazed with a smooth, ", jumbled: "SUOETRVI", after: " coating that sparkled in the light.",
        answer: "VITREOUS",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'glassy' or 'transparent.'" }
        ],
        hints: [{ word: "GLASSY", type: "synonym" }, { word: "OPAQUE", type: "antonym" }],
        explanation: "means glassy or glass-like — a smooth, see-through coating that sparkles like glass."
      },
      {
        before: "The dry summer winds turned a small spark into a raging ", jumbled: "TRALNONGFAIOC", after: ".",
        answer: "CONFLAGRATION",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'fire' or 'blaze.'" }
        ],
        hints: [{ word: "BLAZE", type: "synonym" }],
        explanation: "means a huge, destructive fire — dry summer winds can turn one small spark into a raging blaze."
      },
      {
        before: "An ", jumbled: "REEEI", after: " silence fell over the abandoned house as the sun went down.",
        answer: "EERIE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'spooky' or 'ghostly.'" }
        ],
        hints: [{ word: "SPOOKY", type: "synonym" }, { word: "COMFORTING", type: "antonym" }],
        explanation: "means spooky or ghostly — the kind of unsettling quiet that falls over an abandoned house at dusk."
      },
      {
        before: "The weather forecast predicted heavy ", jumbled: "IITPPRTNIACOE", after: " for the whole weekend.",
        answer: "PRECIPITATION",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'rainfall' or 'downpour.'" }
        ],
        hints: [{ word: "RAINFALL", type: "synonym" }, { word: "DROUGHT", type: "antonym" }],
        explanation: "means rainfall, or any moisture that falls from the sky as rain, snow, or hail — forecasters use it for all kinds of wet weather."
      },
      {
        before: "The charity was grateful for the celebrity's public ", jumbled: "OENETDNRSME", after: ".",
        answer: "ENDORSEMENT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'approval' or 'backing.'" }
        ],
        hints: [{ word: "APPROVAL", type: "synonym" }, { word: "REJECTION", type: "antonym" }],
        explanation: "means public approval or support for something — the charity was thankful for the celebrity's backing."
      },
      {
        before: "From the top of the hill, we could see a magnificent ", jumbled: "RNAAOPAM", after: " of the whole valley.",
        answer: "PANORAMA",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'view' or 'vista.'" }
        ],
        hints: [{ word: "VIEW", type: "synonym" }],
        explanation: "means a wide, sweeping view — like a whole valley spread out below a hilltop."
      },
      {
        before: "The ", jumbled: "ECETPMOTN", after: " electrician fixed the fault within minutes.",
        answer: "COMPETENT",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'capable' or 'skilled.'" }
        ],
        hints: [{ word: "CAPABLE", type: "synonym" }, { word: "INCOMPETENT", type: "antonym" }],
        explanation: "means capable and skilled at something — like an electrician who fixes a fault within minutes."
      },
      {
        before: "The museum's ", jumbled: "TCRORAU", after: " carefully arranged the ancient pottery for the new exhibition.",
        answer: "CURATOR",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'custodian' or 'keeper.'" }
        ],
        hints: [{ word: "CUSTODIAN", type: "synonym" }],
        explanation: "means the person in charge of looking after a museum's collection — carefully arranging pottery for a new exhibition."
      },
      {
        before: "After the fire, the family was ", jumbled: "TREBFE", after: " of everything they owned.",
        answer: "BEREFT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'deprived' or 'lacking.'" }
        ],
        hints: [{ word: "DEPRIVED", type: "synonym" }, { word: "FULL", type: "antonym" }],
        explanation: "means deprived or lacking something you once had — the family lost everything they owned in the fire."
      },
      {
        before: "The ", jumbled: "WBLN ULAD", after: " was built along the riverbank to stop the town flooding each monsoon.",
        answer: "BUND WALL",
        clues: [
          { tag: "Word shape", text: "The answer is two words: the first has 4 letters and starts with B, the second has 4 letters and starts with W." },
          { tag: "Meaning", text: "It means the same as 'embankment' or 'flood barrier.'" }
        ],
        hints: [{ word: "EMBANKMENT", type: "synonym" }],
        explanation: "means an embankment or flood barrier built along a riverbank to hold back rising water in a flood."
      },
      {
        before: "The old lighthouse has had to ", jumbled: "DUEREN", after: " a hundred years of fierce Atlantic storms.",
        answer: "ENDURE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'withstand' or 'tolerate.'" }
        ],
        hints: [{ word: "WITHSTAND", type: "synonym" }, { word: "SURRENDER", type: "antonym" }],
        explanation: "means to withstand or put up with something difficult for a long time — like a lighthouse standing firm through a hundred years of storms."
      },
      {
        before: "The police needed to ", jumbled: "NIADTE", after: " the suspect for questioning at the station.",
        answer: "DETAIN",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'hold' or 'arrest.'" }
        ],
        hints: [{ word: "HOLD", type: "synonym" }, { word: "RELEASE", type: "antonym" }],
        explanation: "means to hold someone back or keep them from leaving — like police holding a suspect for questioning."
      },
      {
        before: "The chef managed to ", jumbled: "EPUROCR", after: " fresh lobster for the evening's menu.",
        answer: "PROCURE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'obtain' or 'acquire.'" }
        ],
        hints: [{ word: "OBTAIN", type: "synonym" }, { word: "RELINQUISH", type: "antonym" }],
        explanation: "means to obtain or get hold of something, often with some effort — like a chef managing to get fresh lobster for the evening's menu."
      },
      {
        before: "Despite the renovation, the cottage was able to ", jumbled: "ATIRNE", after: " its original charm.",
        answer: "RETAIN",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'keep' or 'preserve.'" }
        ],
        hints: [{ word: "KEEP", type: "synonym" }, { word: "RELEASE", type: "antonym" }],
        explanation: "means to keep or hold onto something — like a cottage that keeps its original charm even after being renovated."
      },
      {
        before: "The sailors tied the thick ", jumbled: "WSRAEH", after: " around the bollard to secure the ship to the dock.",
        answer: "HAWSER",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is W." },
          { tag: "Meaning", text: "It means the same as 'rope' or 'mooring rope.'" }
        ],
        hints: [{ word: "ROPE", type: "synonym" }],
        explanation: "means a thick rope or cable used to moor a ship — sailors tie it around a bollard to hold the ship at the dock."
      },
      {
        before: "The crew turned the ", jumbled: "TNCAPSA", after: " to haul the heavy anchor up from the seabed.",
        answer: "CAPSTAN",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'winch' or 'windlass.'" }
        ],
        hints: [{ word: "WINCH", type: "synonym" }],
        explanation: "means a rotating winch used on ships to haul in heavy ropes or anchors."
      },
      {
        before: "Daily ", jumbled: "SECIREEX", after: ", such as swimming or running, keeps your heart healthy.",
        answer: "EXERCISE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'workout' or 'training.'" }
        ],
        hints: [{ word: "WORKOUT", type: "synonym" }, { word: "REST", type: "antonym" }],
        explanation: "means physical activity done to keep the body healthy — like daily swimming or running that keeps your heart strong."
      }
    ]
  },
  {
    id: "list2-batch04",
    title: "Vocabulary List 2 — Batch 4",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "A flight ", jumbled: "TAEDNNTTA", after: " showed the passengers to their seats.",
        answer: "ATTENDANT",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'assistant' or 'helper.'" }
        ],
        hints: [{ word: "ASSISTANT", type: "synonym" }],
        explanation: "means a helper who assists people, especially in a public place like a shop, airport, or event — like the flight attendant who shows passengers to their seats."
      },
      {
        before: "The gardener planted bright ", jumbled: "ULSNAAN", after: " along the border every spring, knowing they would need replacing next year.",
        answer: "ANNUALS",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'bedding plants' or 'seasonal flowers' when talking about a garden." },
          { tag: "Homonym", text: "This word has two different meanings — (1) bedding plants that only last for one growing season, and (2) yearbooks or gift books published once a year, full of stories and pictures. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "BEDDING PLANTS", type: "synonym" }, { word: "PERENNIALS", type: "antonym" }, { word: "YEARBOOKS", type: "homonym" }],
        explanation: "means both bedding plants that live for just one growing season, and, separately, yearbooks or gift books published once a year — this sentence uses the plant sense, where the gardener plants new ones each spring since they won't come back next year."
      },
      {
        before: "The dentist had to ", jumbled: "ATXETRC", after: " the wobbly tooth carefully.",
        answer: "EXTRACT",
        clues: [
          { tag: "Word shape", text: "The answer looks like: E X T _ A C T — only one letter is missing." },
          { tag: "Meaning", text: "It means the same as 'remove' or 'draw out' when you take something out." },
          { tag: "Homonym", text: "This word has two different meanings — (1) to remove or pull something out, and (2) a short passage or excerpt taken from a book. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "REMOVE", type: "synonym" }, { word: "INSERT", type: "antonym" }, { word: "EXCERPT", type: "homonym" }],
        explanation: "means both to remove or pull something out, and, separately, a short excerpt or passage taken from a longer piece of writing — this sentence uses the first sense, like a dentist pulling out a wobbly tooth."
      },
      {
        before: "She revised for weeks before her end-of-year ", jumbled: "IMXATIAENNO", after: ".",
        answer: "EXAMINATION",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is M." },
          { tag: "Meaning", text: "It means the same as 'test' or 'assessment.'" }
        ],
        hints: [{ word: "TEST", type: "synonym" }],
        explanation: "means a formal test that checks what you have learned — the kind of thing you revise hard for before your end-of-year assessment."
      },
      {
        before: "I need the ", jumbled: "ATCXE", after: " time the train departs so we aren't late.",
        answer: "EXACT",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is X." },
          { tag: "Meaning", text: "It means the same as 'precise' or 'accurate' when describing a measurement or detail." },
          { tag: "Homonym", text: "This word has two different meanings — (1) precise or accurate, and (2) to demand or force something from someone. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "PRECISE", type: "synonym" }, { word: "APPROXIMATE", type: "antonym" }, { word: "DEMAND", type: "homonym" }],
        explanation: "means both precise or accurate, and, separately, to demand or force something from someone — this sentence uses the first sense, needing the precise departure time so as not to be late."
      },
      {
        before: "Scientists still debate whether life could ", jumbled: "TIEXS", after: " on other planets.",
        answer: "EXIST",
        clues: [
          { tag: "Word shape", text: "The answer looks like: E X _ S T — only one letter is missing." },
          { tag: "Meaning", text: "It means the same as 'be' or 'survive.'" }
        ],
        hints: [{ word: "SURVIVE", type: "synonym" }],
        explanation: "means to be real or to live — scientists still debate whether life could be real on other planets."
      },
      {
        before: "Metal will ", jumbled: "NPADXE", after: " slightly when it is heated.",
        answer: "EXPAND",
        clues: [
          { tag: "Word shape", text: "The answer looks like: E X _ A _ D — only two letters are missing." },
          { tag: "Meaning", text: "It means the same as 'grow' or 'enlarge.'" }
        ],
        hints: [{ word: "ENLARGE", type: "synonym" }, { word: "SHRINK", type: "antonym" }],
        explanation: "means to grow bigger or take up more space — like metal that grows slightly larger when heated."
      },
      {
        before: "We bought fresh olives and cured ham from the ", jumbled: "SCEAINTSLDEE", after: " on the corner.",
        answer: "DELICATESSEN",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'deli' or 'food shop' that sells cured meats, cheeses, and other fine foods." }
        ],
        hints: [{ word: "DELI", type: "synonym" }],
        explanation: "means a shop selling fine or specialty foods like cured meats, cheeses, and olives."
      },
      {
        before: "In the illustrations, Sherlock Holmes always wears a checked ", jumbled: "REEAESRKTLD", after: " hat.",
        answer: "DEERSTALKER",
        clues: [
          { tag: "Letter position", text: "The 9th letter of the answer is K." },
          { tag: "Meaning", text: "It means the same as 'hunting cap' — a type of checked cap with flaps." }
        ],
        hints: [{ word: "HUNTING CAP", type: "synonym" }],
        explanation: "means a checked hunting cap with flaps over the ears — the style of hat always drawn on Sherlock Holmes."
      },
      {
        before: "He turned the key in the ", jumbled: "NITNOIIG", after: ", and the engine roared to life.",
        answer: "IGNITION",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'starting' or 'firing' — the moment an engine bursts into life." }
        ],
        hints: [{ word: "STARTING", type: "synonym" }],
        explanation: "means the starting or firing of an engine — turning the key makes the engine roar to life."
      },
      {
        before: "Fairy lights provided a soft ", jumbled: "NMILAIIONULT", after: " throughout the garden party.",
        answer: "ILLUMINATION",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is M." },
          { tag: "Meaning", text: "It means the same as 'lighting' or 'brightness.'" }
        ],
        hints: [{ word: "LIGHTING", type: "synonym" }, { word: "DARKNESS", type: "antonym" }],
        explanation: "means lighting or brightness — like fairy lights giving a soft glow throughout a garden party."
      },
      {
        before: "The judge was respected by everyone for her ", jumbled: "ERITTNYGI", after: " and fairness.",
        answer: "INTEGRITY",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'honesty' or 'honour.'" }
        ],
        hints: [{ word: "HONESTY", type: "synonym" }, { word: "DISHONESTY", type: "antonym" }],
        explanation: "means honesty and strong moral principles — the judge was respected by everyone for her honesty and fairness."
      },
      {
        before: "The new student was quick to ", jumbled: "TNARIEGET", after: " into her class and make lots of friends.",
        answer: "INTEGRATE",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'combine' or 'merge.'" }
        ],
        hints: [{ word: "MERGE", type: "synonym" }, { word: "SEPARATE", type: "antonym" }],
        explanation: "means to combine or blend into a group so you become part of it — like a new student fitting in and making lots of friends."
      },
      {
        before: "Teamwork is an ", jumbled: "LATRNIGE", after: " part of every successful sports team.",
        answer: "INTEGRAL",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'essential' or 'fundamental.'" }
        ],
        hints: [{ word: "ESSENTIAL", type: "synonym" }, { word: "UNNECESSARY", type: "antonym" }],
        explanation: "means essential or fundamental to something working properly — like teamwork being a core part of every successful sports team."
      },
      {
        before: "Dark clouds gathered on the horizon in an ", jumbled: "SNIOOUM", after: " sign of the storm to come.",
        answer: "OMINOUS",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'threatening' or 'sinister.'" }
        ],
        hints: [{ word: "THREATENING", type: "synonym" }, { word: "REASSURING", type: "antonym" }],
        explanation: "means threatening or menacing, like something bad is about to happen — dark clouds gathering as a warning that a storm is coming."
      },
      {
        before: "The ", jumbled: "GBIGOILN", after: " waiter brought us extra napkins without being asked.",
        answer: "OBLIGING",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'helpful' or 'accommodating.'" }
        ],
        hints: [{ word: "HELPFUL", type: "synonym" }, { word: "UNHELPFUL", type: "antonym" }],
        explanation: "means helpful and eager to please — like a waiter who brings extra napkins without even being asked."
      },
      {
        before: "The soldiers were sent ahead on a ", jumbled: "EINORSECNAACSN", after: " mission to check the enemy's position.",
        answer: "RECONNAISSANCE",
        clues: [
          { tag: "Letter position", text: "The 8th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'scouting' or 'surveillance.'" }
        ],
        hints: [{ word: "SCOUTING", type: "synonym" }],
        explanation: "means scouting ahead to gather information, especially about an enemy's position — soldiers sent ahead to check things out before the main force moves."
      },
      {
        before: "Grandpa can't read the newspaper without his ", jumbled: "CLACSPTESE", after: ".",
        answer: "SPECTACLES",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'glasses' or 'eyeglasses.'" }
        ],
        hints: [{ word: "GLASSES", type: "synonym" }],
        explanation: "means eyeglasses — what Grandpa needs to read the newspaper."
      },
      {
        before: "Charging that much for a single ice cream is ", jumbled: "ARUGUSTOEO", after: "!",
        answer: "OUTRAGEOUS",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'shocking' or 'scandalous.'" }
        ],
        hints: [{ word: "SHOCKING", type: "synonym" }, { word: "ACCEPTABLE", type: "antonym" }],
        explanation: "means shockingly bad or unacceptable — like charging far too much money for a single ice cream."
      },
      {
        before: "I ", jumbled: "PEYAMTHSIS", after: " with anyone who has to sit an exam this early in the morning.",
        answer: "SYMPATHISE",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'empathise' or 'feel for' someone." }
        ],
        hints: [{ word: "EMPATHISE", type: "synonym" }, { word: "DISREGARD", type: "antonym" }],
        explanation: "means to feel for someone and understand their situation — like feeling for anyone who has to sit an exam early in the morning."
      },
      {
        before: "By the end of the marathon, every runner had begun to ", jumbled: "SIERPERP", after: " heavily.",
        answer: "PERSPIRE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'sweat' or 'glisten.'" }
        ],
        hints: [{ word: "SWEAT", type: "synonym" }],
        explanation: "means to sweat — your body's way of cooling down after hard physical effort, like at the end of a marathon."
      },
      {
        before: "The smell of freshly baked bread would ", jumbled: "LSAAEINTT", after: " us every time we waited for the oven timer.",
        answer: "TANTALISE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'tempt' or 'tease' with something desirable just out of reach." }
        ],
        hints: [{ word: "TEMPT", type: "synonym" }, { word: "SATISFY", type: "antonym" }],
        explanation: "means to tempt or tease someone with something they want but can't have yet — like the smell of freshly baked bread while you wait for the timer."
      },
      {
        before: "The workers raised a formal ", jumbled: "EVCEGIRNA", after: " about their unsafe working conditions.",
        answer: "GRIEVANCE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'complaint' or 'grumble.'" }
        ],
        hints: [{ word: "COMPLAINT", type: "synonym" }],
        explanation: "means a formal complaint about something unfair — like workers raising concerns about unsafe conditions."
      },
      {
        before: "As a ", jumbled: "FESWEUOHI", after: ", she managed the household budget and cooked every meal for the family.",
        answer: "HOUSEWIFE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is W." },
          { tag: "Meaning", text: "It means the same as 'homemaker.'" }
        ],
        hints: [{ word: "HOMEMAKER", type: "synonym" }],
        explanation: "means a woman who manages a household — cooking, budgeting, and running the home for her family."
      },
      {
        before: "I really ", jumbled: "CPRIEAETPA", after: " you helping me carry these heavy boxes.",
        answer: "APPRECIATE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'value' or 'be grateful for' something someone does for you." },
          { tag: "Homonym", text: "This word has two different meanings — (1) to value or be grateful for something, and (2) to rise or increase in value over time. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "VALUE", type: "synonym" }, { word: "DISREGARD", type: "antonym" }, { word: "RISE", type: "homonym" }],
        explanation: "means both to value or be grateful for something, and, separately, to increase in value over time — this sentence uses the first sense, being thankful for someone's help carrying heavy boxes."
      },
      {
        before: "The playwright is known for writing sharp, realistic ", jumbled: "AOLEUGDI", after: " between her characters.",
        answer: "DIALOGUE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'conversation' or 'discussion.'" }
        ],
        hints: [{ word: "CONVERSATION", type: "synonym" }, { word: "MONOLOGUE", type: "antonym" }],
        explanation: "means spoken conversation, especially the words characters say to each other in a play or book — this playwright is famous for writing it realistically."
      },
      {
        before: "Our ", jumbled: "NCRIECCTE", after: " neighbour keeps three parrots and a pet tortoise called Napoleon.",
        answer: "ECCENTRIC",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'unconventional' or 'quirky.'" }
        ],
        hints: [{ word: "QUIRKY", type: "synonym" }, { word: "CONVENTIONAL", type: "antonym" }],
        explanation: "means quirky or unconventional in a harmless, often charming way — like a neighbour who keeps three parrots and a pet tortoise called Napoleon."
      }
    ]
  },
  {
    id: "list2-batch05",
    title: "Vocabulary List 2 — Batch 5",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "It was an ", jumbled: "DITEVRNAETN", after: " mistake — she never meant to press send so early.",
        answer: "INADVERTENT",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'accidental' or 'unintentional.'" }
        ],
        hints: [{ word: "ACCIDENTAL", type: "synonym" }, { word: "DELIBERATE", type: "antonym" }],
        explanation: "means accidental or unintentional — something done without meaning to, like an inadvertent mistake."
      },
      {
        before: "The judge decided the case should be heard in the ", jumbled: "LUJVEEIN", after: " court because the offender was only fifteen.",
        answer: "JUVENILE",
        clues: [
          { tag: "Letter position", text: "The 1st letter of the answer is J." },
          { tag: "Meaning", text: "It means the same as 'young' or 'childish.'" }
        ],
        hints: [{ word: "YOUNG", type: "synonym" }, { word: "MATURE", type: "antonym" }],
        explanation: "means young or childish — often used to describe someone not yet grown up, like a juvenile court for offenders under eighteen."
      },
      {
        before: "His report described the standard of work as ", jumbled: "ASARITYFCOST", after: " but said there was room for improvement.",
        answer: "SATISFACTORY",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is Y." },
          { tag: "Meaning", text: "It means the same as 'adequate' or 'acceptable.'" }
        ],
        hints: [{ word: "ADEQUATE", type: "synonym" }, { word: "INADEQUATE", type: "antonym" }],
        explanation: "means adequate or acceptable — good enough to meet the required standard, even if not excellent."
      },
      {
        before: "Instead of a ", jumbled: "TAVNCNLNEOOI", after: " wedding, they chose to marry on a mountaintop.",
        answer: "CONVENTIONAL",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'traditional' or 'standard.'" }
        ],
        hints: [{ word: "TRADITIONAL", type: "synonym" }, { word: "UNUSUAL", type: "antonym" }],
        explanation: "means traditional or standard — the usual way of doing something, rather than anything new or unusual."
      },
      {
        before: "Reading by the fire on a rainy afternoon is one of my greatest ", jumbled: "LAESUPER", after: "s.",
        answer: "PLEASURE",
        clues: [
          { tag: "Letter position", text: "The 1st letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'enjoyment' or 'delight.'" }
        ],
        hints: [{ word: "ENJOYMENT", type: "synonym" }, { word: "MISERY", type: "antonym" }],
        explanation: "means enjoyment or delight — a feeling of happiness, like curling up with a good book on a rainy day."
      },
      {
        before: "There was a ", jumbled: "ADLGURA", after: " improvement in her handwriting over the school year.",
        answer: "GRADUAL",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'slow' and 'steady.'" }
        ],
        hints: [{ word: "STEADY", type: "synonym" }, { word: "SUDDEN", type: "antonym" }],
        explanation: "means slow and steady — happening bit by bit rather than all at once."
      },
      {
        before: "The head teacher decided to ", jumbled: "TSINIUETT", after: " a new rule about mobile phones in class.",
        answer: "INSTITUTE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'establish' or 'set up.'" }
        ],
        hints: [{ word: "ESTABLISH", type: "synonym" }, { word: "ABOLISH", type: "antonym" }],
        explanation: "means to establish or set up something official, like a new school rule."
      },
      {
        before: "For someone so young, he showed a remarkably ", jumbled: "RTAEUM", after: " attitude towards the setback.",
        answer: "MATURE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'adult' or 'sensible.'" }
        ],
        hints: [{ word: "SENSIBLE", type: "synonym" }, { word: "CHILDISH", type: "antonym" }],
        explanation: "means adult or sensible — behaving in a grown-up, thoughtful way, especially for someone's age."
      },
      {
        before: "The film was far too ", jumbled: "OYGR", after: " for younger viewers, with blood in almost every scene.",
        answer: "GORY",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is Y." },
          { tag: "Meaning", text: "It means the same as 'bloody' or 'gruesome.'" }
        ],
        hints: [{ word: "BLOODY", type: "synonym" }],
        explanation: "means bloody and gruesome — full of graphic violence or blood, like a film not suitable for younger viewers."
      },
      {
        before: "Detectives were called to investigate the ", jumbled: "YISLRG", after: " scene at the abandoned warehouse.",
        answer: "GRISLY",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'gruesome' or 'horrific.'" }
        ],
        hints: [{ word: "GRUESOME", type: "synonym" }, { word: "PLEASANT", type: "antonym" }],
        explanation: "means gruesome or horrific — shocking and unpleasant to look at, often because of violence or death."
      },
      {
        before: "The smell of freshly cut grass ", jumbled: "TFWA", after: "ed through the open window.",
        answer: "WAFT",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'drift' or 'float.'" }
        ],
        hints: [{ word: "DRIFT", type: "synonym" }],
        explanation: "means to drift or float gently through the air, like a smell carried on the breeze."
      },
      {
        before: "The comedian's ", jumbled: "EHSPHARACCT", after: " became so popular that people repeated it in the playground.",
        answer: "CATCHPHRASE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'slogan' or 'motto.'" }
        ],
        hints: [{ word: "SLOGAN", type: "synonym" }],
        explanation: "means a slogan or saying that becomes well known, often repeated by fans until everyone recognises it."
      },
      {
        before: "Please ", jumbled: "ARFENRI", after: " from talking during the performance.",
        answer: "REFRAIN",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'abstain' or 'hold back.'" },
          { tag: "Homonym", text: "This word has two different meanings — (1) to abstain or hold back from doing something, and (2) the chorus or repeated line of a song. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "ABSTAIN", type: "synonym" }, { word: "INDULGE", type: "antonym" }, { word: "CHORUS", type: "homonym" }],
        explanation: "means both to hold back from doing something (as in 'refrain from talking') and, separately, the chorus or repeated line of a song — this sentence uses the first sense."
      },
      {
        before: "He ", jumbled: "ITMMCO", after: "ted himself to training every morning before school.",
        answer: "COMMIT",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'pledge' or 'dedicate.'" }
        ],
        hints: [{ word: "PLEDGE", type: "synonym" }, { word: "ABANDON", type: "antonym" }],
        explanation: "means to pledge or dedicate yourself to something — like promising to train every morning."
      },
      {
        before: "One of her little ", jumbled: "UQKIR", after: "s is that she always ties her left shoelace first.",
        answer: "QUIRK",
        clues: [
          { tag: "Letter position", text: "The 1st letter of the answer is Q." },
          { tag: "Meaning", text: "It means the same as 'peculiarity' or 'habit.'" }
        ],
        hints: [{ word: "PECULIARITY", type: "synonym" }],
        explanation: "means a small peculiarity or odd habit that makes someone or something a little unusual."
      },
      {
        before: "The fingerprints on the glass were ", jumbled: "TEUFIRRBAEL", after: " proof that he had been in the room.",
        answer: "IRREFUTABLE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'undeniable' or 'indisputable.'" }
        ],
        hints: [{ word: "UNDENIABLE", type: "synonym" }, { word: "DOUBTFUL", type: "antonym" }],
        explanation: "means undeniable or indisputable — so clearly true that it cannot be argued against."
      },
      {
        before: "She would always ", jumbled: "NEESTUH", after: " about her holiday to the mountains.",
        answer: "ENTHUSE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'rave' or 'be excited.'" }
        ],
        hints: [{ word: "RAVE", type: "synonym" }, { word: "CRITICISE", type: "antonym" }],
        explanation: "means to rave or be excited about something — talking about it enthusiastically because you loved it so much."
      },
      {
        before: "He had a rather ", jumbled: "DBRMIO", after: " fascination with stories about haunted houses.",
        answer: "MORBID",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'gruesome' or 'ghoulish.'" }
        ],
        hints: [{ word: "GHOULISH", type: "synonym" }, { word: "CHEERFUL", type: "antonym" }],
        explanation: "means gruesome or ghoulish — having an unhealthy interest in dark or disturbing things, like ghost stories."
      },
      {
        before: "The castle's weak eastern wall left it ", jumbled: "SLBAAAESLI", after: " to attack from that side.",
        answer: "ASSAILABLE",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'vulnerable' or 'open to attack.'" }
        ],
        hints: [{ word: "VULNERABLE", type: "synonym" }, { word: "SECURE", type: "antonym" }],
        explanation: "means vulnerable or open to attack — having a weak point that leaves something exposed to danger."
      },
      {
        before: "The new ramp made the library ", jumbled: "CAIECSBESL", after: " to wheelchair users for the first time.",
        answer: "ACCESSIBLE",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'reachable' or 'available.'" }
        ],
        hints: [{ word: "REACHABLE", type: "synonym" }, { word: "UNAVAILABLE", type: "antonym" }],
        explanation: "means reachable or available — easy for someone to get to or use, like a ramp that makes a building reachable for wheelchair users."
      },
      {
        before: "The box was labelled to show that it ", jumbled: "TNIOCNA", after: "ed fragile glassware.",
        answer: "CONTAIN",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'hold' or 'include.'" }
        ],
        hints: [{ word: "HOLD", type: "synonym" }, { word: "EXCLUDE", type: "antonym" }],
        explanation: "means to hold or include something inside — like a box that holds fragile glassware."
      },
      {
        before: "The test will ", jumbled: "TONISCS", after: " of three sections: reading, writing and listening.",
        answer: "CONSIST",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'comprise' or 'be made up of.'" }
        ],
        hints: [{ word: "COMPRISE", type: "synonym" }],
        explanation: "means to be made up of or comprise certain parts — like a test made up of three sections."
      },
      {
        before: "Slavery was formally ", jumbled: "OAEHSLBDI", after: " in Britain in 1833.",
        answer: "ABOLISHED",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'ended' or 'banned.'" }
        ],
        hints: [{ word: "BANNED", type: "synonym" }, { word: "ESTABLISHED", type: "antonym" }],
        explanation: "means ended or banned by law — like slavery being formally ended in Britain in 1833."
      },
      {
        before: "The bus service to the village was ", jumbled: "ENTTMRAIDE", after: " after years of low passenger numbers.",
        answer: "TERMINATED",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'ended' or 'stopped.'" }
        ],
        hints: [{ word: "STOPPED", type: "synonym" }, { word: "STARTED", type: "antonym" }],
        explanation: "means ended or stopped — like a bus service that was stopped for good after too few passengers used it."
      },
      {
        before: "There was a huge ", jumbled: "FGLU", after: " in understanding between the two negotiating teams.",
        answer: "GULF",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'divide' or 'gap.'" }
        ],
        hints: [{ word: "GAP", type: "synonym" }],
        explanation: "means a wide gap or divide — here, a big difference in understanding between the two teams."
      },
      {
        before: "After the accident, everyone at the party fell into a ", jumbled: "ESROB", after: " silence.",
        answer: "SOBER",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'serious' or 'level-headed.'" }
        ],
        hints: [{ word: "SERIOUS", type: "synonym" }, { word: "FRIVOLOUS", type: "antonym" }],
        explanation: "means serious and level-headed — here, a quiet, thoughtful mood rather than the literal meaning of not being drunk."
      },
      {
        before: "Brushing your teeth twice a day is a ", jumbled: "BITAH", after: " worth keeping for life.",
        answer: "HABIT",
        clues: [
          { tag: "Letter position", text: "The 1st letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'custom' or 'practice' — something you do regularly." },
          { tag: "Homonym", text: "This word has two different meanings — (1) a routine or custom you do regularly, and (2) a robe or gown, like the one worn by a nun or monk. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "CUSTOM", type: "synonym" }, { word: "ROBE", type: "homonym" }],
        explanation: "means both a regular routine or custom (like brushing your teeth every day) and, separately, a robe or gown such as a nun's habit — this sentence uses the first sense."
      }
    ]
  },
  {
    id: "list2-batch06",
    title: "Vocabulary List 2 — Batch 6",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "Building the pyramids required the ", jumbled: "BULORA", after: " of thousands of workers.",
        answer: "LABOUR",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'work' or 'toil.'" }
        ],
        hints: [{ word: "TOIL", type: "synonym" }, { word: "LEISURE", type: "antonym" }],
        explanation: "means hard work or toil — like the huge effort of thousands of workers building the pyramids."
      },
      {
        before: "The ", jumbled: "EENOLBETNV", after: " old man donated most of his fortune to the local orphanage.",
        answer: "BENEVOLENT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'kind' or 'generous.'" }
        ],
        hints: [{ word: "GENEROUS", type: "synonym" }, { word: "UNKIND", type: "antonym" }],
        explanation: "means kind and generous — someone who does good things for others, like giving away a fortune to help orphans."
      },
      {
        before: "The ", jumbled: "SCCIEETDNNNA", after: " filament inside the old bulb glowed a warm orange.",
        answer: "INCANDESCENT",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'glowing' or 'blazing.'" }
        ],
        hints: [{ word: "GLOWING", type: "synonym" }, { word: "DIM", type: "antonym" }],
        explanation: "means glowing or blazing with light — like the warm orange glow of an old light bulb's filament."
      },
      {
        before: "Investigators were granted permission to ", jumbled: "XEUHEM", after: " the body for further tests.",
        answer: "EXHUME",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is X." },
          { tag: "Meaning", text: "It means the same as 'dig up' or 'unearth.'" }
        ],
        hints: [{ word: "UNEARTH", type: "synonym" }, { word: "BURY", type: "antonym" }],
        explanation: "means to dig up something that was buried, usually a body, in order to examine it."
      },
      {
        before: "After weeks at sea with little food, the sailors looked ", jumbled: "AUTGN", after: " and exhausted.",
        answer: "GAUNT",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'thin' or 'haggard.'" }
        ],
        hints: [{ word: "THIN", type: "synonym" }, { word: "PLUMP", type: "antonym" }],
        explanation: "means thin and haggard, especially from hunger or illness — like sailors who looked worn out after weeks with little food."
      },
      {
        before: "After the sleepless night on watch, the sailor's face looked ", jumbled: "GGDARAH", after: " in the morning light.",
        answer: "HAGGARD",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'worn out' or 'exhausted.'" }
        ],
        hints: [{ word: "EXHAUSTED", type: "synonym" }, { word: "FRESH", type: "antonym" }],
        explanation: "means looking exhausted and worn out, often from tiredness or worry — like a sailor's face after a sleepless night."
      },
      {
        before: "The farmer sold his apples by the ", jumbled: "HULSEB", after: " at the autumn market.",
        answer: "BUSHEL",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is L." },
          { tag: "Meaning", text: "It means a unit used for measuring grain or fruit, like the apples the farmer sold at market." }
        ],
        hints: [{ word: "A UNIT OF MEASURE FOR GRAIN OR FRUIT", type: "synonym" }],
        explanation: "means a unit used to measure grain or fruit, like apples sold by the bushel at a market."
      },
      {
        before: "The ", jumbled: "USOPCEICOR", after: " six-year-old was already reading books meant for teenagers.",
        answer: "PRECOCIOUS",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'advanced' or 'gifted' for one's age." }
        ],
        hints: [{ word: "GIFTED", type: "synonym" }, { word: "BACKWARD", type: "antonym" }],
        explanation: "means advanced or gifted for one's age — like a young child who reads books meant for teenagers."
      },
      {
        before: "Despite being ninety, my great-grandfather still takes a ", jumbled: "YIPHLTSRG", after: " walk every morning.",
        answer: "SPRIGHTLY",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is Y." },
          { tag: "Meaning", text: "It means the same as 'lively' or 'energetic.'" }
        ],
        hints: [{ word: "LIVELY", type: "synonym" }, { word: "SLUGGISH", type: "antonym" }],
        explanation: "means lively and energetic — full of spring in your step, even at ninety years old."
      },
      {
        before: "The whole house seemed to ", jumbled: "ESHAK", after: " as the thunder crashed overhead.",
        answer: "SHAKE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is K." },
          { tag: "Meaning", text: "It means the same as 'tremble' or 'vibrate.'" }
        ],
        hints: [{ word: "TREMBLE", type: "synonym" }, { word: "STEADY", type: "antonym" }],
        explanation: "means to tremble or vibrate — like a house shuddering when thunder crashes overhead."
      },
      {
        before: "The patient remained ", jumbled: "NSSUOOCCI", after: " throughout the entire procedure.",
        answer: "CONSCIOUS",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'aware' or 'awake.'" }
        ],
        hints: [{ word: "AWARE", type: "synonym" }, { word: "OBLIVIOUS", type: "antonym" }],
        explanation: "means aware or awake — fully alert to what is happening around you, like a patient who stays awake during a procedure."
      },
      {
        before: "It was a ", jumbled: "ITDBLEREEA", after: " act of vandalism, not an accident.",
        answer: "DELIBERATE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is B." },
          { tag: "Meaning", text: "It means the same as 'intentional' or 'planned' — done on purpose." },
          { tag: "Homonym", text: "This word has two different meanings — (1) done on purpose, intentional, and (2) as a verb, to think something over carefully, like judges weighing up a decision for an hour before announcing a winner. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "INTENTIONAL", type: "synonym" }, { word: "ACCIDENTAL", type: "antonym" }, { word: "PONDER", type: "homonym" }],
        explanation: "means both done on purpose (intentional) and, as a verb, to think something over carefully — like judges who deliberate before choosing a winner. This sentence uses the first sense."
      },
      {
        before: "Fallen branches ", jumbled: "MPEEID", after: "d the rescue team's progress through the forest.",
        answer: "IMPEDE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'hinder' or 'obstruct.'" }
        ],
        hints: [{ word: "HINDER", type: "synonym" }, { word: "ASSIST", type: "antonym" }],
        explanation: "means to hinder or obstruct something — like fallen branches blocking a rescue team's path."
      },
      {
        before: "The postman left a large ", jumbled: "ALCPRE", after: " on the doorstep.",
        answer: "PARCEL",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'package' or 'bundle.'" }
        ],
        hints: [{ word: "PACKAGE", type: "synonym" }],
        explanation: "means a package or bundle — something wrapped up, like the one the postman left on the doorstep."
      },
      {
        before: "The doctor located a ", jumbled: "EVNI", after: " in his arm to take a blood sample.",
        answer: "VEIN",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'blood vessel' — or, in another sense, a streak or seam running through something." }
        ],
        hints: [{ word: "BLOOD VESSEL", type: "synonym" }],
        explanation: "means a blood vessel that carries blood through the body — the word can also describe a streak or seam running through rock, like a vein of gold."
      },
      {
        before: "He was far too ", jumbled: "IVNA", after: " to be seen without his hair perfectly styled.",
        answer: "VAIN",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'conceited' or 'arrogant' — too pleased with your own appearance." },
          { tag: "Homonym", text: "This word has two different meanings — (1) conceited, too pleased with your own looks, and (2) useless or unsuccessful, describing something that achieves nothing despite the effort. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "CONCEITED", type: "synonym" }, { word: "MODEST", type: "antonym" }, { word: "USELESS", type: "homonym" }],
        explanation: "means both conceited — too pleased with your own looks — and, separately, useless or unsuccessful, as in 'they searched in vain.' This sentence uses the first sense."
      },
      {
        before: "Our ", jumbled: "AINGLE", after: " host greeted every guest with a warm smile.",
        answer: "GENIAL",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'friendly' or 'warm.'" }
        ],
        hints: [{ word: "FRIENDLY", type: "synonym" }, { word: "HOSTILE", type: "antonym" }],
        explanation: "means friendly and warm — welcoming and pleasant, like a host who greets everyone with a smile."
      },
      {
        before: "Scientists studied the strange ", jumbled: "CUSSANEBT", after: " found in the meteorite.",
        answer: "SUBSTANCE",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'material' or 'matter.'" }
        ],
        hints: [{ word: "MATERIAL", type: "synonym" }],
        explanation: "means material or matter — a physical thing, like the strange material scientists found in the meteorite."
      },
      {
        before: "The floods caused ", jumbled: "RETDEDENPUCNE", after: " damage, worse than anything the town had seen before.",
        answer: "UNPRECEDENTED",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'unparalleled' or 'unheard of.'" }
        ],
        hints: [{ word: "UNHEARD OF", type: "synonym" }, { word: "ORDINARY", type: "antonym" }],
        explanation: "means unparalleled or unheard of — something so extreme it has never happened before, like unprecedented flood damage."
      },
      {
        before: "Volunteering at the shelter every weekend was a truly ", jumbled: "CITTIRALSU", after: " thing to do, since she asked for nothing in return.",
        answer: "ALTRUISTIC",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'selfless' or 'generous.'" }
        ],
        hints: [{ word: "SELFLESS", type: "synonym" }, { word: "SELFISH", type: "antonym" }],
        explanation: "means selfless and generous — doing something kind for others without expecting anything back."
      },
      {
        before: "The accountant was ", jumbled: "ISUONTIPCLU", after: " about checking every single figure twice before signing off the accounts.",
        answer: "PUNCTILIOUS",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'meticulous' or 'precise.'" }
        ],
        hints: [{ word: "METICULOUS", type: "synonym" }, { word: "CARELESS", type: "antonym" }],
        explanation: "means meticulous and precise — paying extremely close attention to every small detail, like checking figures twice."
      },
      {
        before: "He felt ", jumbled: "UTNSRFLEE", after: " that his younger sister got all the attention.",
        answer: "RESENTFUL",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'bitter' or 'aggrieved.'" }
        ],
        hints: [{ word: "BITTER", type: "synonym" }, { word: "GRATEFUL", type: "antonym" }],
        explanation: "means bitter or aggrieved — feeling upset because you think something is unfair, like being jealous of the attention someone else gets."
      },
      {
        before: "She pulled on her ", jumbled: "SHAGSOLE", after: " before splashing through the muddy puddles.",
        answer: "GALOSHES",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'wellingtons' or 'rubber boots.'" }
        ],
        hints: [{ word: "WELLINGTONS", type: "synonym" }],
        explanation: "means rubber boots or wellingtons — waterproof footwear worn to splash through puddles and mud."
      },
      {
        before: "The cricketers wore smart straw ", jumbled: "EOTBRA", after: "s as part of their summer uniform.",
        answer: "BOATER",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'straw hat.'" }
        ],
        hints: [{ word: "STRAW HAT", type: "synonym" }],
        explanation: "means a straw hat with a flat top and brim — the kind cricketers traditionally wore as part of their summer kit."
      },
      {
        before: "The ship changed ", jumbled: "SCOEUR", after: " to avoid the storm.",
        answer: "COURSE",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'path' or 'route' — the direction something is heading." },
          { tag: "Homonym", text: "This word has two different meanings — (1) a path, route, or direction something is heading, and (2) a subject of study, like a photography class taken at college. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "ROUTE", type: "synonym" }, { word: "CLASS", type: "homonym" }],
        explanation: "means both a path or direction something is heading, and, separately, a subject of study at school or college — this sentence uses the first sense."
      },
      {
        before: "The school lacked the ", jumbled: "URSSREOCE", after: " to buy new computers for every classroom.",
        answer: "RESOURCES",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'assets' or 'supplies.'" }
        ],
        hints: [{ word: "SUPPLIES", type: "synonym" }],
        explanation: "means assets or supplies — the materials, money, or equipment needed to do something, like a school's budget for computers."
      },
      {
        before: "The ", jumbled: "LIACDP", after: " lake reflected the mountains like a mirror.",
        answer: "PLACID",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'calm' or 'peaceful.'" }
        ],
        hints: [{ word: "CALM", type: "synonym" }, { word: "AGITATED", type: "antonym" }],
        explanation: "means calm and peaceful — still and untroubled, like a lake so smooth it reflects the mountains like a mirror."
      }
    ]
  },
  {
    id: "list2-batch07",
    title: "Vocabulary List 2 — Batch 7",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "The teacher praised the class for their excellent ", jumbled: "UTCCNOD", after: " on the trip.",
        answer: "CONDUCT",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'behaviour' or 'manner.'" },
          { tag: "Homonym", text: "This word has two different meanings — (1) behaviour, the way someone acts, and (2) to lead or manage something, such as running an experiment or leading an orchestra. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "BEHAVIOUR", type: "synonym" }, { word: "MISCONDUCT", type: "antonym" }, { word: "LEAD", type: "homonym" }],
        explanation: "means both behaviour or manner, and separately, to lead or manage something (like conducting an experiment) — this sentence uses the first sense, praising the class's good behaviour."
      },
      {
        before: "The old photograph had great ", jumbled: "TNAIENTLMES", after: " value, even though it was worth nothing.",
        answer: "SENTIMENTAL",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'nostalgic' or 'emotional.'" }
        ],
        hints: [{ word: "NOSTALGIC", type: "synonym" }, { word: "PRACTICAL", type: "antonym" }],
        explanation: "means full of tender, nostalgic feeling — like treasuring an old photograph because of the memories it holds, not because it's worth anything."
      },
      {
        before: "After two weeks on the beach, her skin had turned a deep golden ", jumbled: "NTA", after: ".",
        answer: "TAN",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'brown' or 'bronzed' skin colour." }
        ],
        hints: [{ word: "BRONZED", type: "synonym" }, { word: "PALE", type: "antonym" }],
        explanation: "means a brown, sun-bronzed skin colour — like the golden colour you get after days in the sun."
      },
      {
        before: "In the 1990s, children carried their ", jumbled: "OTTGCAIMAH", after: " everywhere so their virtual pet wouldn't 'die' of neglect.",
        answer: "TAMAGOTCHI",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'a small digital pet toy' — originally a brand name that people still use for any tiny virtual pet game." }
        ],
        hints: [{ word: "A SMALL DIGITAL PET TOY", type: "synonym" }],
        explanation: "means a small digital pet toy, originally a brand name — a handheld gadget from the 1990s where you had to feed and care for a tiny virtual creature."
      },
      {
        before: "The medicine helped ", jumbled: "TALLEIAEV", after: " the pain in her ankle.",
        answer: "ALLEVIATE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'ease' or 'relieve.'" }
        ],
        hints: [{ word: "EASE", type: "synonym" }, { word: "WORSEN", type: "antonym" }],
        explanation: "means to ease or relieve something, usually pain or a problem — like medicine easing an ache."
      },
      {
        before: "The ", jumbled: "IARGLUNL", after: " smell of chocolate cake drew everyone into the kitchen.",
        answer: "ALLURING",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'tempting' or 'attractive.'" }
        ],
        hints: [{ word: "TEMPTING", type: "synonym" }, { word: "REPELLENT", type: "antonym" }],
        explanation: "means tempting or attractive — irresistible enough to draw everyone in, like the smell of a freshly baked cake."
      },
      {
        before: "She refused to lie, as a matter of ", jumbled: "CERPPINLI", after: ".",
        answer: "PRINCIPLE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'rule' or 'belief.'" }
        ],
        hints: [{ word: "RULE", type: "synonym" }],
        explanation: "means a rule or belief that guides how someone behaves — she wouldn't lie because it went against what she believed was right."
      },
      {
        before: "The school introduced a new system to reduce ", jumbled: "AUYTCNR", after: " among older pupils.",
        answer: "TRUANCY",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'absenteeism' — skipping school without permission." }
        ],
        hints: [{ word: "ABSENTEEISM", type: "synonym" }, { word: "ATTENDANCE", type: "antonym" }],
        explanation: "means skipping school without permission — the opposite of turning up and attending every lesson."
      },
      {
        before: "A good pair of walking boots is ", jumbled: "DSPSBNEIELIAN", after: " on a mountain expedition.",
        answer: "INDISPENSABLE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'essential' or 'vital' — impossible to do without." }
        ],
        hints: [{ word: "ESSENTIAL", type: "synonym" }, { word: "DISPENSABLE", type: "antonym" }],
        explanation: "means so essential that you cannot do without it — like good boots on a tough mountain trek."
      },
      {
        before: "The fishermen managed to ", jumbled: "KEE", after: " out a living from the small, shrinking lake.",
        answer: "EKE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is K." },
          { tag: "Meaning", text: "It means the same as 'scrape' or 'stretch' — making a small, limited amount last as long as possible." }
        ],
        hints: [{ word: "SCRAPE", type: "synonym" }],
        explanation: "means to scrape or stretch out a small amount, usually written as 'eke out a living' — making just enough to survive."
      },
      {
        before: "The seaside town sees a huge ", jumbled: "LXNUIF", after: " of tourists every summer.",
        answer: "INFLUX",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'flood' or 'surge' — a large number arriving at once." }
        ],
        hints: [{ word: "FLOOD", type: "synonym" }, { word: "EXODUS", type: "antonym" }],
        explanation: "means a flood or surge of people or things arriving all at once — like tourists pouring into a seaside town every summer."
      },
      {
        before: "The judge dismissed the case as a ", jumbled: "UVRSIOFLO", after: " waste of the court's time.",
        answer: "FRIVOLOUS",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'silly' or 'trivial' — not worth taking seriously." }
        ],
        hints: [{ word: "TRIVIAL", type: "synonym" }, { word: "SERIOUS", type: "antonym" }],
        explanation: "means silly or trivial, not worth being taken seriously — the judge felt the case was a waste of everyone's time."
      },
      {
        before: "She ", jumbled: "ECTLSUYOUMLI", after: " checked every stitch before entering the quilt into the competition.",
        answer: "METICULOUSLY",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'carefully' or 'thoroughly' — paying close attention to every detail." }
        ],
        hints: [{ word: "CAREFULLY", type: "synonym" }, { word: "CARELESSLY", type: "antonym" }],
        explanation: "means very carefully and thoroughly, missing no detail — like checking every single stitch before a competition."
      },
      {
        before: "If honesty is valued, then the ", jumbled: "VSNCREEO", after: " — dishonesty — is clearly discouraged.",
        answer: "CONVERSE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'opposite' or 'reverse.'" },
          { tag: "Homonym", text: "This word has two different meanings — (1) to talk or chat with someone, and (2) the opposite or reverse of something, like the flipped-around version of a statement or rule. In this sentence it's used as sense 2, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "OPPOSITE", type: "synonym" }, { word: "TALK", type: "homonym" }],
        explanation: "means both the opposite or reverse of something, and separately, to talk or chat with someone — this sentence uses the 'opposite' sense, not the 'talk' sense."
      },
      {
        before: "The explorers prepared for months before their ", jumbled: "ITDOEXPNEI", after: " to the South Pole.",
        answer: "EXPEDITION",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'journey' or 'voyage' — usually one made with a clear purpose, like exploring." }
        ],
        hints: [{ word: "JOURNEY", type: "synonym" }],
        explanation: "means a journey made for a particular purpose, especially exploring or discovery — like a long trip to the South Pole."
      },
      {
        before: "She was ", jumbled: "TINNAGIND", after: " when accused of cheating, since she had worked so hard on her own.",
        answer: "INDIGNANT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'outraged' or 'offended' — angry because something feels unfair." }
        ],
        hints: [{ word: "OUTRAGED", type: "synonym" }, { word: "CALM", type: "antonym" }],
        explanation: "means outraged or offended by something that feels unfair — she was furious at being blamed for something she didn't do."
      },
      {
        before: "The cathedral ceiling was covered in ", jumbled: "AOTERN", after: " carvings of angels and saints.",
        answer: "ORNATE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'elaborate' or 'decorative' — covered in fancy detail." }
        ],
        hints: [{ word: "ELABORATE", type: "synonym" }, { word: "PLAIN", type: "antonym" }],
        explanation: "means elaborately decorated with fancy detail — like a ceiling carved all over with angels and saints."
      },
      {
        before: "Her speech captured the ", jumbled: "TNINMTSEE", after: " of everyone who had worked so hard that year.",
        answer: "SENTIMENT",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is M." },
          { tag: "Meaning", text: "It means the same as 'feeling' or 'opinion' shared by a group of people." }
        ],
        hints: [{ word: "FEELING", type: "synonym" }],
        explanation: "means a feeling or opinion, especially one shared by a group — her speech put into words what everyone in the room was feeling."
      },
      {
        before: "The ", jumbled: "MRUHTPNATI", after: " team paraded the trophy through the streets.",
        answer: "TRIUMPHANT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is M." },
          { tag: "Meaning", text: "It means the same as 'victorious' or 'jubilant' — celebrating a big win." }
        ],
        hints: [{ word: "VICTORIOUS", type: "synonym" }, { word: "DEFEATED", type: "antonym" }],
        explanation: "means celebrating a great victory — the team was so pleased with winning that they paraded the trophy through the streets."
      },
      {
        before: "The charity focuses on improving green spaces in ", jumbled: "NARUB", after: " areas.",
        answer: "URBAN",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is B." },
          { tag: "Meaning", text: "It means the same as 'city' or 'built-up' — relating to towns and cities rather than the countryside." }
        ],
        hints: [{ word: "CITY", type: "synonym" }, { word: "RURAL", type: "antonym" }],
        explanation: "means relating to towns and cities, rather than the countryside — the charity wants more green spaces where lots of people live close together."
      },
      {
        before: "He was furious about receiving such a ", jumbled: "ARTLYP", after: " pay rise after years of hard work.",
        answer: "PALTRY",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'meagre' or 'measly' — far too small to be worth much." }
        ],
        hints: [{ word: "MEAGRE", type: "synonym" }, { word: "GENEROUS", type: "antonym" }],
        explanation: "means so small it's barely worth mentioning — he'd worked hard for years and felt insulted by such a measly pay rise."
      },
      {
        before: "The school play was ", jumbled: "IHCBSAMLO", after: ", with actors forgetting their lines and scenery falling over.",
        answer: "SHAMBOLIC",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is B." },
          { tag: "Meaning", text: "It means the same as 'chaotic' or 'disorganised' — a complete mess." }
        ],
        hints: [{ word: "CHAOTIC", type: "synonym" }, { word: "ORGANISED", type: "antonym" }],
        explanation: "means completely chaotic and disorganised — everything that could go wrong with the play did."
      },
      {
        before: "The new safety regulations ", jumbled: "RSEEUDSEP", after: " all the rules published last year.",
        answer: "SUPERSEDE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'replace' or 'overtake' — take the place of something older." }
        ],
        hints: [{ word: "REPLACE", type: "synonym" }],
        explanation: "means to take the place of something older, making it out of date — the new rules replace everything that came before them."
      },
      {
        before: "Stir the mixture until the sugar starts to ", jumbled: "ESVIDLSO", after: ".",
        answer: "DISSOLVE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'melt' or 'disperse' — break down and mix completely into a liquid." }
        ],
        hints: [{ word: "MELT", type: "synonym" }, { word: "SOLIDIFY", type: "antonym" }],
        explanation: "means to melt or break down completely into a liquid — keep stirring until every grain of sugar disappears."
      },
      {
        before: "His ", jumbled: "AWSSHIP", after: " comments about her cooking left her rather hurt.",
        answer: "WASPISH",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'irritable' or 'sharp-tongued' — quick to say something sharp or stinging." }
        ],
        hints: [{ word: "SHARP-TONGUED", type: "synonym" }, { word: "GENTLE", type: "antonym" }],
        explanation: "means sharp-tongued and quick to sting with words — like a wasp's sting, but with comments instead."
      },
      {
        before: "The clown's ", jumbled: "NZYA", after: " antics had the whole audience laughing.",
        answer: "ZANY",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'wacky' or 'madcap' — funny in a strange, over-the-top way." }
        ],
        hints: [{ word: "WACKY", type: "synonym" }, { word: "SERIOUS", type: "antonym" }],
        explanation: "means wacky and over-the-top funny — the kind of silliness that makes a whole audience burst out laughing."
      },
      {
        before: "He suffered from occasional ", jumbled: "UTOSB", after: " of hay fever every summer.",
        answer: "BOUTS",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'spells' or 'episodes' — short periods when something (often an illness) happens." }
        ],
        hints: [{ word: "SPELLS", type: "synonym" }],
        explanation: "means short spells or episodes of something, often an illness — brief periods when the hay fever flared up."
      }
    ]
  },
  {
    id: "list2-batch08",
    title: "Vocabulary List 2 — Batch 8",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "The ", jumbled: "URYFCFS", after: " stray dog wandered the streets looking for scraps.",
        answer: "SCRUFFY",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'untidy' or 'shabby' — messy and uncared for." }
        ],
        hints: [{ word: "UNTIDY", type: "synonym" }, { word: "NEAT", type: "antonym" }],
        explanation: "means untidy and shabby, uncared for in appearance — like a stray dog that's never been groomed."
      },
      {
        before: "The summer holidays were a time of ", jumbled: "ERAECFER", after: " fun before secondary school began.",
        answer: "CAREFREE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'relaxed' or 'untroubled' — free from worry." }
        ],
        hints: [{ word: "UNTROUBLED", type: "synonym" }, { word: "ANXIOUS", type: "antonym" }],
        explanation: "means relaxed and free from worry — those lazy summer weeks with nothing to be anxious about."
      },
      {
        before: "A ", jumbled: "EALESSRC", after: " mistake in his working lost him several marks in the exam.",
        answer: "CARELESS",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'sloppy' or 'thoughtless' — not paying enough attention." }
        ],
        hints: [{ word: "SLOPPY", type: "synonym" }, { word: "CAREFUL", type: "antonym" }],
        explanation: "means sloppy or thoughtless, not paying proper attention — a rushed mistake that cost him marks he could easily have kept."
      },
      {
        before: "She wrapped a warm ", jumbled: "ETABNKL", after: " around her shoulders as she watched the fireworks.",
        answer: "BLANKET",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is K." },
          { tag: "Meaning", text: "It means the same as 'cover' or 'wrap' — a thick piece of cloth used for warmth." }
        ],
        hints: [{ word: "COVER", type: "synonym" }],
        explanation: "means a thick piece of cloth used for warmth — something cosy to wrap around your shoulders on a chilly night."
      },
      {
        before: "The extra police officers were sent in to ", jumbled: "ULLQE", after: " the riot.",
        answer: "QUELL",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'suppress' or 'subdue' — to put a stop to something by force or effort." }
        ],
        hints: [{ word: "SUPPRESS", type: "synonym" }, { word: "PROVOKE", type: "antonym" }],
        explanation: "means to put a stop to something, often by force — the police were brought in to bring the riot under control."
      },
      {
        before: "Grandma still sleeps under a thick feather ", jumbled: "DWEIODNRE", after: " even in summer.",
        answer: "EIDERDOWN",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'quilt' or 'duvet' — a thick, warm bed cover traditionally stuffed with feathers." }
        ],
        hints: [{ word: "QUILT", type: "synonym" }],
        explanation: "means a thick, warm bed cover traditionally stuffed with soft duck feathers — cosy enough for Grandma to use even in summer."
      },
      {
        before: "He cast a ", jumbled: "UOTSVCEO", after: " eye over his neighbour's brand-new bicycle.",
        answer: "COVETOUS",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is V." },
          { tag: "Meaning", text: "It means the same as 'envious' or 'greedy' — wanting something that belongs to someone else." }
        ],
        hints: [{ word: "ENVIOUS", type: "synonym" }, { word: "CONTENT", type: "antonym" }],
        explanation: "means envious and greedy for something someone else has — he couldn't stop wishing that shiny new bike was his."
      },
      {
        before: "A lone ", jumbled: "AERBTH", after: " waded slowly into the cold morning sea.",
        answer: "BATHER",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'swimmer' — someone going for a swim, especially in the sea." }
        ],
        hints: [{ word: "SWIMMER", type: "synonym" }],
        explanation: "means someone swimming or bathing, especially in the sea — brave enough to wade into the cold morning water alone."
      },
      {
        before: "Moss had grown thick over the old ", jumbled: "EOOTBMNTS", after: " at the edge of the churchyard.",
        answer: "TOMBSTONE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is B." },
          { tag: "Meaning", text: "It means the same as 'gravestone' or 'headstone' — a stone marker over a grave." }
        ],
        hints: [{ word: "GRAVESTONE", type: "synonym" }],
        explanation: "means a stone marker placed over a grave, usually carved with a name — this one so old it was covered in moss."
      },
      {
        before: "The quiet final chapter served as a fitting ", jumbled: "DCAO", after: " to the whole trilogy.",
        answer: "CODA",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'ending' or 'finale' — a closing part that rounds something off." }
        ],
        hints: [{ word: "FINALE", type: "synonym" }, { word: "PRELUDE", type: "antonym" }],
        explanation: "means a closing section that rounds something off neatly — a quiet final chapter that wrapped up the whole trilogy."
      },
      {
        before: "The mayor received a lot of ", jumbled: "LAKF", after: " for cancelling the town's fireworks display.",
        answer: "FLAK",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'criticism' or 'backlash' — strong disapproval from lots of people." }
        ],
        hints: [{ word: "CRITICISM", type: "synonym" }, { word: "PRAISE", type: "antonym" }],
        explanation: "means strong criticism or backlash from a lot of people — everyone was annoyed the fireworks got cancelled and let the mayor know it."
      },
      {
        before: "The ashes were kept in a bronze ", jumbled: "RNU", after: " on the mantelpiece.",
        answer: "URN",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'vase' or 'vessel' — a decorative container, often used to hold ashes." }
        ],
        hints: [{ word: "VESSEL", type: "synonym" }],
        explanation: "means a decorative container, often used to hold ashes or to serve tea — this one made of bronze and kept on the mantelpiece."
      },
      {
        before: "He used the back of a spoon to ", jumbled: "MTPA", after: " down the soil around the seedling.",
        answer: "TAMP",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is M." },
          { tag: "Meaning", text: "It means the same as 'press down' or 'compress' — push something firmly to pack it tight." }
        ],
        hints: [{ word: "PRESS", type: "synonym" }, { word: "LOOSEN", type: "antonym" }],
        explanation: "means to press or pack something down firmly — like using a spoon to firm up the soil around a new seedling."
      },
      {
        before: "The trailer was enough to ", jumbled: "TEWH", after: " everyone's appetite for the new film.",
        answer: "WHET",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'sharpen' or 'stimulate' — often used about making someone's appetite or interest sharper, so they want more." }
        ],
        hints: [{ word: "STIMULATE", type: "synonym" }, { word: "DULL", type: "antonym" }],
        explanation: "means to sharpen or stimulate, most often in the phrase 'whet your appetite' — the trailer made everyone even more excited to see the film."
      },
      {
        before: "The camel train crossed miles of empty ", jumbled: "TEERSD", after: " without seeing another soul.",
        answer: "DESERT",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'wasteland' or 'wilderness' — a dry, empty area with almost no water." },
          { tag: "Homonym", text: "This word has two different meanings — (1) a dry, empty wasteland, and (2) to abandon or leave someone behind, especially when they need you, like a soldier running away from duty. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "WASTELAND", type: "synonym" }, { word: "OASIS", type: "antonym" }, { word: "ABANDON", type: "homonym" }],
        explanation: "means both a dry, empty wasteland, and separately, to abandon or leave someone behind — this sentence uses the first sense, describing the empty sand the camels crossed."
      },
      {
        before: "The ", jumbled: "TXELATNU", after: " crowd cheered as the final whistle blew.",
        answer: "EXULTANT",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is X." },
          { tag: "Meaning", text: "It means the same as 'jubilant' or 'elated' — full of triumphant joy." }
        ],
        hints: [{ word: "JUBILANT", type: "synonym" }, { word: "DEJECTED", type: "antonym" }],
        explanation: "means full of triumphant joy — the crowd erupted the moment the final whistle blew."
      },
      {
        before: "They found a ", jumbled: "DLEUEDCS", after: " cove where they could swim without another tourist in sight.",
        answer: "SECLUDED",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'isolated' or 'hidden' — quiet and away from crowds." }
        ],
        hints: [{ word: "ISOLATED", type: "synonym" }, { word: "CROWDED", type: "antonym" }],
        explanation: "means quiet, hidden, and away from crowds — the kind of spot where you might not see another soul all day."
      },
      {
        before: "We ", jumbled: "NTAIEIATCP", after: " a busy weekend, so please book your table in advance.",
        answer: "ANTICIPATE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'expect' or 'foresee' — thinking ahead about what's likely to happen." }
        ],
        hints: [{ word: "EXPECT", type: "synonym" }],
        explanation: "means to expect or foresee something before it happens — the restaurant knows a busy weekend is coming, so they're planning ahead."
      },
      {
        before: "The market was filled with the ", jumbled: "ARTNVBI", after: " colours of spices and fabric.",
        answer: "VIBRANT",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is B." },
          { tag: "Meaning", text: "It means the same as 'vivid' or 'colourful' — bursting with bright colour and energy." }
        ],
        hints: [{ word: "VIVID", type: "synonym" }, { word: "DULL", type: "antonym" }],
        explanation: "means bursting with bright colour and energy — the sort of market stall that catches your eye from across the street."
      },
      {
        before: "Your bus ticket is only ", jumbled: "IADLV", after: " until the end of the month.",
        answer: "VALID",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'legitimate' or 'acceptable' — allowed to be used or accepted as correct." }
        ],
        hints: [{ word: "LEGITIMATE", type: "synonym" }, { word: "INVALID", type: "antonym" }],
        explanation: "means legitimate and acceptable, allowed to be used or trusted as correct — after this date, the ticket won't be accepted anymore."
      },
      {
        before: "It was unkind of him to ", jumbled: "TLTBIEEL", after: " her efforts in front of the whole class.",
        answer: "BELITTLE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'demean' or 'put down' — make something seem smaller or less important than it is." }
        ],
        hints: [{ word: "DEMEAN", type: "synonym" }, { word: "PRAISE", type: "antonym" }],
        explanation: "means to make someone or something seem smaller or less important than it really is — cruel, especially when it's done in front of everyone."
      },
      {
        before: "The grand ", jumbled: "AACDEF", after: " of the old theatre hid a crumbling, neglected interior.",
        answer: "FACADE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'front' or 'exterior' — the outward face of something, which can hide what's really behind it." }
        ],
        hints: [{ word: "EXTERIOR", type: "synonym" }, { word: "REALITY", type: "antonym" }],
        explanation: "means the outward face of something, which can hide what's really behind it — a grand front concealing a crumbling old building."
      },
      {
        before: "Her ", jumbled: "BSRIERLREEIPS", after: " enthusiasm made even the dullest lesson feel exciting.",
        answer: "IRREPRESSIBLE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'unstoppable' or 'exuberant' — impossible to hold back or contain." }
        ],
        hints: [{ word: "UNSTOPPABLE", type: "synonym" }, { word: "SUBDUED", type: "antonym" }],
        explanation: "means impossible to hold back or contain — the kind of enthusiasm that bursts out no matter how boring things get."
      },
      {
        before: "Only ", jumbled: "ESSRAP", after: " patches of grass grew on the rocky hillside.",
        answer: "SPARSE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'scant' or 'scattered' — thinly spread, with lots of gaps." }
        ],
        hints: [{ word: "SCATTERED", type: "synonym" }, { word: "ABUNDANT", type: "antonym" }],
        explanation: "means thinly spread out, with lots of gaps — just a few patches of grass here and there on the bare hillside."
      },
      {
        before: "The weather was so ", jumbled: "LUADRFED", after: " that the picnic had to be cancelled.",
        answer: "DREADFUL",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'terrible' or 'awful' — extremely bad or unpleasant." }
        ],
        hints: [{ word: "TERRIBLE", type: "synonym" }, { word: "WONDERFUL", type: "antonym" }],
        explanation: "means extremely bad or unpleasant — bad enough that the whole picnic had to be called off."
      },
      {
        before: "The little village nestled quietly in a green ", jumbled: "AELV", after: " between two hills.",
        answer: "VALE",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'valley' or 'dale' — a stretch of low land between hills." }
        ],
        hints: [{ word: "VALLEY", type: "synonym" }],
        explanation: "means a valley, an old poetic word for a stretch of low land between hills — the sort of word you find a lot in old poems and place names."
      },
      {
        before: "The dancer wore an elaborate feathered ", jumbled: "ERDHDSESA", after: " for the festival.",
        answer: "HEADDRESS",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'headpiece' or 'headgear' — an elaborate covering worn on the head." }
        ],
        hints: [{ word: "HEADGEAR", type: "synonym" }],
        explanation: "means an elaborate covering or ornament worn on the head — often part of a costume or ceremonial dress."
      }
    ]
  },
  {
    id: "list2-batch09",
    title: "Vocabulary List 2 — Batch 9",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "It took all her courage to ", jumbled: "OMNSMU", after: " the nerve to speak in front of the class.",
        answer: "SUMMON",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is N." },
          { tag: "Meaning", text: "It means the same as 'call' or 'gather.'" }
        ],
        hints: [{ word: "CALL", type: "synonym" }, { word: "DISMISS", type: "antonym" }],
        explanation: "means to call or gather someone — like summoning up the courage to speak in front of a class."
      },
      {
        before: "With patience and determination, she managed to ", jumbled: "MROSUTNU", after: " every obstacle in her way.",
        answer: "SURMOUNT",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'overcome' or 'conquer.'" }
        ],
        hints: [{ word: "OVERCOME", type: "synonym" }, { word: "SUCCUMB TO", type: "antonym" }],
        explanation: "means to overcome or conquer something difficult — like beating an obstacle through patience."
      },
      {
        before: "She seemed perfectly ", jumbled: "TNCTENO", after: " curled up with a good book by the fire.",
        answer: "CONTENT",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'satisfied' or 'happy.'" },
          { tag: "Homonym", text: "This word has two different meanings — (1) feeling satisfied and happy, and (2) the material or subject matter inside something, like what's written in an essay. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "SATISFIED", type: "synonym" }, { word: "DISCONTENT", type: "antonym" }, { word: "CONTENTS", type: "homonym" }],
        explanation: "means both feeling satisfied and happy, and separately, the contents or subject matter of something like an essay — this sentence uses the first sense."
      },
      {
        before: "They made ", jumbled: "NTLSITSUABA", after: " progress on the project over the summer.",
        answer: "SUBSTANTIAL",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'considerable' or 'large.'" }
        ],
        hints: [{ word: "CONSIDERABLE", type: "synonym" }, { word: "MINOR", type: "antonym" }],
        explanation: "means considerable or large in amount — like making a lot of progress on a project."
      },
      {
        before: "The nurse treated every patient with great ", jumbled: "POMSOICSNA", after: ".",
        answer: "COMPASSION",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'sympathy' or 'kindness.'" }
        ],
        hints: [{ word: "SYMPATHY", type: "synonym" }, { word: "INDIFFERENCE", type: "antonym" }],
        explanation: "means sympathy and kindness towards others — like a nurse caring gently for her patients."
      },
      {
        before: "He gave a ", jumbled: "ATLACONNNH", after: " shrug, as if losing the match didn't bother him at all.",
        answer: "NONCHALANT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'casual' or 'unconcerned.'" }
        ],
        hints: [{ word: "CASUAL", type: "synonym" }, { word: "ANXIOUS", type: "antonym" }],
        explanation: "means casual and unconcerned — like shrugging off a loss as if it didn't matter at all."
      },
      {
        before: "After her tenth flight that year, she felt completely ", jumbled: "SAÉLB", after: " about air travel.",
        answer: "BLASÉ",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'unimpressed' or 'indifferent.'" }
        ],
        hints: [{ word: "UNIMPRESSED", type: "synonym" }, { word: "ENTHUSIASTIC", type: "antonym" }],
        explanation: "means unimpressed or indifferent, often because you've experienced something so many times it no longer excites you."
      },
      {
        before: "Years of the same routine had left him feeling ", jumbled: "ADJDE", after: " about his job.",
        answer: "JADED",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'weary' or 'worn out.'" }
        ],
        hints: [{ word: "WEARY", type: "synonym" }, { word: "ENTHUSIASTIC", type: "antonym" }],
        explanation: "means weary and worn out, often because of doing the same thing for too long."
      },
      {
        before: "Congress moved to ", jumbled: "APEHIMC", after: " the official after evidence of corruption came to light.",
        answer: "IMPEACH",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'accuse' or 'charge' — usually of a public official doing wrong." }
        ],
        hints: [{ word: "ACCUSE", type: "synonym" }, { word: "EXONERATE", type: "antonym" }],
        explanation: "means to formally accuse a public official of serious wrongdoing, often as a step toward removing them from office."
      },
      {
        before: "They laid a plastic ", jumbled: "HSDOTREGUEN", after: " inside the tent to keep out the damp.",
        answer: "GROUNDSHEET",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'tarpaulin' — a waterproof sheet laid on the floor of a tent." }
        ],
        hints: [{ word: "TARPAULIN", type: "synonym" }],
        explanation: "means a waterproof sheet laid on the ground inside a tent to keep the damp out."
      },
      {
        before: "Her fears turned out to be entirely ", jumbled: "UERLNSSDGO", after: ", as the test results were fine.",
        answer: "GROUNDLESS",
        clues: [
          { tag: "Letter position", text: "The 7th letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'unfounded' or 'baseless.'" }
        ],
        hints: [{ word: "UNFOUNDED", type: "synonym" }, { word: "JUSTIFIED", type: "antonym" }],
        explanation: "means unfounded or baseless — a fear or claim with no real evidence behind it."
      },
      {
        before: "There was a ", jumbled: "LEWGNOLSDUR", after: " of public support for the new recycling scheme.",
        answer: "GROUNDSWELL",
        clues: [
          { tag: "Letter position", text: "The 8th letter of the answer is W." },
          { tag: "Meaning", text: "It means the same as 'surge' or 'upsurge' — a sudden growth in feeling or support." }
        ],
        hints: [{ word: "SURGE", type: "synonym" }],
        explanation: "means a sudden surge of feeling or support building up among a large group of people."
      },
      {
        before: "The apple fell from the tree and hit the ", jumbled: "NRODUG", after: " with a thud.",
        answer: "GROUND",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'earth' or 'soil' — the surface you stand on." },
          { tag: "Homonym", text: "This word has two different meanings — (1) the surface of the earth, like soil or land, and (2) a reason or basis for something, like having a solid basis for a complaint. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "EARTH", type: "synonym" }, { word: "SKY", type: "antonym" }, { word: "REASON", type: "homonym" }],
        explanation: "means both the surface of the earth, like soil or land, and separately, a reason or basis for something, as in having 'grounds for complaint' — this sentence uses the first sense."
      },
      {
        before: "The school will not ", jumbled: "DEOCONN", after: " any form of bullying.",
        answer: "CONDONE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'excuse' or 'tolerate' — to allow something wrong to happen without punishing it." }
        ],
        hints: [{ word: "TOLERATE", type: "synonym" }, { word: "CONDEMN", type: "antonym" }],
        explanation: "means to overlook or tolerate something wrong, allowing it to happen without punishment."
      },
      {
        before: "Grandma likes to ", jumbled: "OSMERHT", after: " her toast in strawberry jam every morning.",
        answer: "SMOTHER",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'suffocate' or 'muffle' — or, as in this sentence, to cover something completely and thickly." }
        ],
        hints: [{ word: "STIFLE", type: "synonym" }, { word: "EXPOSE", type: "antonym" }],
        explanation: "means to cover or suffocate completely — here, covering toast thickly with jam, but it can also mean to muffle or suppress something."
      },
      {
        before: "The author published her first novel under a ", jumbled: "SPMDONUYE", after: " to keep her identity secret.",
        answer: "PSEUDONYM",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is E." },
          { tag: "Meaning", text: "It means the same as 'pen name' or 'alias' — a false name used instead of your real one." }
        ],
        hints: [{ word: "ALIAS", type: "synonym" }, { word: "REAL NAME", type: "antonym" }],
        explanation: "means a pen name or alias — a false name an author uses instead of their real one."
      },
      {
        before: "The magazine printed an exclusive ", jumbled: "EWIVPER", after: " of the film before its official release.",
        answer: "PREVIEW",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is W." },
          { tag: "Meaning", text: "It means the same as 'sneak peek' or 'taster' — an early look at something before it's released." }
        ],
        hints: [{ word: "TRAILER", type: "synonym" }],
        explanation: "means a sneak peek or taster of something — an early look before its official release."
      },
      {
        before: "The restaurant received a glowing ", jumbled: "ERWEIV", after: " in the local newspaper.",
        answer: "REVIEW",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'critique' or 'assessment' — a judgement of how good or bad something is." }
        ],
        hints: [{ word: "CRITIQUE", type: "synonym" }],
        explanation: "means a critique or assessment — a written judgement of how good or bad something is, like a restaurant review."
      },
      {
        before: "The gardens were beautifully decorated for the couple's ", jumbled: "UNIAPLT", after: " celebrations.",
        answer: "NUPTIAL",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is U." },
          { tag: "Meaning", text: "It means the same as 'wedding' or 'marital' — to do with a marriage." }
        ],
        hints: [{ word: "WEDDING", type: "synonym" }],
        explanation: "means to do with a wedding or marriage — nuptial celebrations are wedding celebrations."
      },
      {
        before: "We made ", jumbled: "SOTRSARINVEE", after: " at our favourite restaurant for her birthday.",
        answer: "RESERVATIONS",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is S." },
          { tag: "Meaning", text: "It means the same as 'bookings' or 'arrangements' — like a table booked at a restaurant." },
          { tag: "Homonym", text: "This word has two different meanings — (1) bookings or arrangements made in advance, and (2) doubts or hesitations about something, like feeling unsure whether a plan is a good idea. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "BOOKINGS", type: "synonym" }, { word: "CANCELLATIONS", type: "antonym" }, { word: "DOUBTS", type: "homonym" }],
        explanation: "means both bookings or arrangements made in advance, and separately, doubts or hesitations about something — this sentence uses the first sense, a restaurant booking."
      },
      {
        before: "Having broken her own arm before, she could really ", jumbled: "IESPAMEHT", after: " with his pain.",
        answer: "EMPATHISE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'understand' or 'relate to' — to share and understand someone else's feelings." }
        ],
        hints: [{ word: "SYMPATHISE", type: "synonym" }, { word: "DISREGARD", type: "antonym" }],
        explanation: "means to understand and share someone else's feelings — like understanding pain because you've felt it yourself."
      },
      {
        before: "The coach launched into a furious ", jumbled: "AETRID", after: " after the team's careless mistakes.",
        answer: "TIRADE",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is A." },
          { tag: "Meaning", text: "It means the same as 'rant' or 'outburst' — a long, angry speech." }
        ],
        hints: [{ word: "RANT", type: "synonym" }],
        explanation: "means a long, angry outburst of speech — like a coach ranting about careless mistakes."
      },
      {
        before: "The baby fell into a peaceful ", jumbled: "MSURBEL", after: " almost as soon as the car started moving.",
        answer: "SLUMBER",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is L." },
          { tag: "Meaning", text: "It means the same as 'sleep' or 'doze' — a peaceful rest." }
        ],
        hints: [{ word: "SLEEP", type: "synonym" }, { word: "WAKEFULNESS", type: "antonym" }],
        explanation: "means a peaceful sleep or rest — the baby drifted off almost instantly."
      },
      {
        before: "Lifeguards must remain ", jumbled: "AIGLIVTN", after: " at all times in case a swimmer gets into trouble.",
        answer: "VIGILANT",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is G." },
          { tag: "Meaning", text: "It means the same as 'watchful' or 'alert' — always paying close attention." }
        ],
        hints: [{ word: "WATCHFUL", type: "synonym" }, { word: "CARELESS", type: "antonym" }],
        explanation: "means watchful and alert — always paying close attention in case something goes wrong."
      },
      {
        before: "The ancient ", jumbled: "TFSESORR", after: " had withstood countless sieges over the centuries.",
        answer: "FORTRESS",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'stronghold' or 'castle' — a strongly defended building." }
        ],
        hints: [{ word: "STRONGHOLD", type: "synonym" }],
        explanation: "means a stronghold or castle built to withstand attack — strong enough to survive countless sieges."
      },
      {
        before: "The fireworks over the castle created a truly ", jumbled: "CLGMAIA", after: " evening.",
        answer: "MAGICAL",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is C." },
          { tag: "Meaning", text: "It means the same as 'enchanting' or 'wondrous' — as if touched by magic." }
        ],
        hints: [{ word: "ENCHANTING", type: "synonym" }, { word: "ORDINARY", type: "antonym" }],
        explanation: "means enchanting or wondrous — so special it feels as if touched by magic."
      },
      {
        before: "The whole family squeezed into a single ", jumbled: "PWE", after: " at the back of the church.",
        answer: "PEW",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'few' and 'chew.'" },
          { tag: "Meaning", text: "It means the same as 'bench' or 'seat' — the long wooden seats in a church." }
        ],
        hints: [{ word: "BENCH", type: "synonym" }],
        explanation: "means a bench or seat — the long wooden seating found in a church."
      }
    ]
  },
  {
    id: "list2-batch10",
    title: "Vocabulary List 2 — Batch 10",
    source: "indata/vocab_02_reference_table.md — Vocabulary List 2",
    words: [
      {
        before: "He pulled up a ", jumbled: "ACRHI", after: " and sat down beside the fire.",
        answer: "CHAIR",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'hair' and 'fair.'" },
          { tag: "Meaning", text: "It means the same as 'seat' or 'stool' — something to sit on." }
        ],
        hints: [{ word: "SEAT", type: "synonym" }],
        explanation: "means a seat, usually with a back and four legs, for one person to sit on."
      },
      {
        before: "The old professor's lecture was full of ", jumbled: "IEOCERST", after: " references that only a handful of students understood.",
        answer: "ESOTERIC",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is T." },
          { tag: "Meaning", text: "It means the same as 'obscure' or 'mysterious' — understood by only a small, specialist group." }
        ],
        hints: [{ word: "OBSCURE", type: "synonym" }, { word: "MAINSTREAM", type: "antonym" }],
        explanation: "means obscure or understood only by a small group of specialists — the opposite of mainstream knowledge."
      },
      {
        before: "He left a ", jumbled: "PYCICTR", after: " note that nobody could quite work out.",
        answer: "CRYPTIC",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'puzzling' or 'mysterious' — hard to understand at first glance." }
        ],
        hints: [{ word: "PUZZLING", type: "synonym" }, { word: "CLEAR", type: "antonym" }],
        explanation: "means puzzling or mysterious — a message that's deliberately hard to work out."
      },
      {
        before: "Unlike the wizard's secret spellbooks, the village storyteller's tales were ", jumbled: "XTEIOCER", after: " — simple enough for anyone to enjoy.",
        answer: "EXOTERIC",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is X." },
          { tag: "Meaning", text: "It means the same as 'accessible' or 'mainstream' — easy for anyone to understand." }
        ],
        hints: [{ word: "ACCESSIBLE", type: "synonym" }, { word: "OBSCURE", type: "antonym" }],
        explanation: "means accessible or mainstream — easy for anyone to understand, unlike something obscure or specialist."
      },
      {
        before: "As a ", jumbled: "ETOEHYNP", after: " in the wizarding school, he could barely light a candle with his wand.",
        answer: "NEOPHYTE",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'beginner' or 'novice' — someone new to something." }
        ],
        hints: [{ word: "BEGINNER", type: "synonym" }, { word: "EXPERT", type: "antonym" }],
        explanation: "means a beginner or novice — someone completely new to a skill or activity."
      },
      {
        before: "The ancient ", jumbled: "REMROIIG", after: " was said to contain spells no living wizard dared to read aloud.",
        answer: "GRIMOIRE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is I." },
          { tag: "Meaning", text: "It means the same as 'spellbook' — a book containing magic spells." }
        ],
        hints: [{ word: "SPELLBOOK", type: "synonym" }],
        explanation: "means a spellbook — an old book containing magic spells and secret knowledge."
      },
      {
        before: "The villagers whispered that a ", jumbled: "OWALKRC", after: " lived alone in the tower on the hill.",
        answer: "WARLOCK",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is K." },
          { tag: "Meaning", text: "It means the same as 'sorcerer' or 'wizard' — a man who practises magic." }
        ],
        hints: [{ word: "SORCERER", type: "synonym" }],
        explanation: "means a sorcerer or wizard — a man believed to practise dark magic."
      },
      {
        before: "The ", jumbled: "INUFECTNMI", after: " donor paid for the entire new school library.",
        answer: "MUNIFICENT",
        clues: [
          { tag: "Letter position", text: "The 5th letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'generous' or 'lavish' — giving a great deal, very freely." }
        ],
        hints: [{ word: "GENEROUS", type: "synonym" }, { word: "STINGY", type: "antonym" }],
        explanation: "means extremely generous — giving a great deal, freely and without holding back."
      },
      {
        before: "The report seemed deliberately written to ", jumbled: "EUATFCOSB", after: " the real cost of the project.",
        answer: "OBFUSCATE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is F." },
          { tag: "Meaning", text: "It means the same as 'confuse' or 'obscure' — to deliberately make something unclear." }
        ],
        hints: [{ word: "CONFUSE", type: "synonym" }, { word: "CLARIFY", type: "antonym" }],
        explanation: "means to deliberately make something confusing or unclear — often to hide the truth."
      },
      {
        before: "The beauty of the cherry blossoms is ", jumbled: "AMELERHPE", after: ", lasting only a week or two each spring.",
        answer: "EPHEMERAL",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is P." },
          { tag: "Meaning", text: "It means the same as 'fleeting' or 'short-lived' — lasting only a very short time." }
        ],
        hints: [{ word: "FLEETING", type: "synonym" }, { word: "PERMANENT", type: "antonym" }],
        explanation: "means fleeting or short-lived — lasting only a very short time, like blossoms in spring."
      },
      {
        before: "The clear turquoise ", jumbled: "ALGNOO", after: " was perfect for snorkelling.",
        answer: "LAGOON",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'lake' or 'cove' — a shallow area of water, often near the sea." }
        ],
        hints: [{ word: "LAKE", type: "synonym" }],
        explanation: "means a shallow stretch of water, often separated from the sea by a reef or sandbar."
      },
      {
        before: "He gave an ", jumbled: "TCIMPEHA", after: " 'no' when asked if he wanted to go bungee jumping.",
        answer: "EMPHATIC",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is H." },
          { tag: "Meaning", text: "It means the same as 'forceful' or 'firm' — said with strong conviction." }
        ],
        hints: [{ word: "FORCEFUL", type: "synonym" }, { word: "HESITANT", type: "antonym" }],
        explanation: "means forceful and firm — said with such strong conviction there's no doubt about it."
      },
      {
        before: "Her ", jumbled: "UOLVEICQA", after: " answer left us none the wiser about whether she was coming or not.",
        answer: "EQUIVOCAL",
        clues: [
          { tag: "Letter position", text: "The 2nd letter of the answer is Q." },
          { tag: "Meaning", text: "It means the same as 'ambiguous' or 'vague' — unclear because it could mean more than one thing." }
        ],
        hints: [{ word: "AMBIGUOUS", type: "synonym" }, { word: "DEFINITE", type: "antonym" }],
        explanation: "means ambiguous or vague — deliberately unclear, so it could be taken more than one way."
      },
      {
        before: "The committee decided to ", jumbled: "AEPR", after: " down the guest list to save money.",
        answer: "PARE",
        clues: [
          { tag: "Letter position", text: "The 3rd letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'trim' or 'cut down' — to reduce something bit by bit." }
        ],
        hints: [{ word: "TRIM", type: "synonym" }, { word: "EXPAND", type: "antonym" }],
        explanation: "means to trim or cut down gradually — like paring an apple's peel, or paring down a list."
      },
      {
        before: "Farmers always ", jumbled: "MNEBAO", after: " the lack of rain during a dry summer.",
        answer: "BEMOAN",
        clues: [
          { tag: "Letter position", text: "The 4th letter of the answer is O." },
          { tag: "Meaning", text: "It means the same as 'lament' or 'complain about' — to express sadness or complaint about something." }
        ],
        hints: [{ word: "LAMENT", type: "synonym" }, { word: "CELEBRATE", type: "antonym" }],
        explanation: "means to lament or complain about something — expressing sadness or frustration out loud."
      },
      {
        before: "Even at ninety, he remained remarkably ", jumbled: "EALH", after: " and hearty.",
        answer: "HALE",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'pale' and 'tale.'" },
          { tag: "Meaning", text: "It means the same as 'healthy' or 'robust' — strong and well, especially for someone's age." }
        ],
        hints: [{ word: "HEALTHY", type: "synonym" }, { word: "FRAIL", type: "antonym" }],
        explanation: "means healthy and robust — strong and well, often said of someone surprisingly fit for their age."
      },
      {
        before: "The ancient law would ", jumbled: "OBERSIRPC", after: " hunting in the royal forests.",
        answer: "PROSCRIBE",
        clues: [
          { tag: "Letter position", text: "The 6th letter of the answer is R." },
          { tag: "Meaning", text: "It means the same as 'forbid' or 'ban' — to officially not allow something." }
        ],
        hints: [{ word: "FORBID", type: "synonym" }, { word: "PERMIT", type: "antonym" }],
        explanation: "means to forbid or ban something officially — the opposite of allowing it."
      },
      {
        before: "\"", jumbled: "ARND", after: " it!\" she cried, when she dropped her ice cream on the pavement.",
        answer: "DARN",
        clues: [
          { tag: "Rhyme", text: "It rhymes with 'barn' and 'yarn.'" },
          { tag: "Meaning", text: "It means the same as 'blast' or 'drat' — a mild, old-fashioned way of saying you're annoyed." },
          { tag: "Homonym", text: "This word has two different meanings — (1) a mild exclamation of annoyance, like saying 'blast!' or 'drat!', and (2) to mend or sew up a hole in fabric using needle and thread. In this sentence it's used as sense 1, but look out for the other meaning elsewhere!" }
        ],
        hints: [{ word: "BLAST", type: "synonym" }, { word: "MEND", type: "homonym" }],
        explanation: "means both a mild exclamation of annoyance — like saying 'blast!' or 'drat!' — and separately, to mend or sew up a hole in fabric. This sentence uses the first sense, as something to say when things go wrong."
      },
      {
        before: "Before the battle, the knights would ", jumbled: "IDGR", after: " themselves at dawn.",
        answer: "GIRD",
        clues: [
          { tag: "Letter position", text: "The last letter of the answer is D." },
          { tag: "Meaning", text: "It means the same as 'brace' or 'prepare' — to get yourself ready for something difficult." }
        ],
        hints: [{ word: "BRACE", type: "synonym" }],
        explanation: "means to brace or prepare yourself for something difficult — like knights gathering their strength before battle."
      }
    ]
  },
];
