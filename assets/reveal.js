/*
 * Reusable "jumbled word decoder" widget.
 * Renders progressive clue stages, then a read-only list of labeled hint
 * words, then the explanation. A free-text guess box gives immediate
 * right/wrong feedback at every stage so the child never has to wait for
 * clues to know if they're right.
 *
 * Usage: call initJumbleWidget(containerEl, config, progressKey) where config is:
 * {
 *   before: "The sailors were told to sound the ",   // text before the jumble
 *   jumbled: "NAUTICO",                                // the jumbled letters
 *   after: " and abandon ship.",                        // text after the jumble
 *   answer: "CAUTION",                                  // correct word (any case)
 *   clues: ["Starts with the letter C.", "It means the same as 'care'."],
 *   hints: [                                            // shown read-only,
 *     { word: "CARE", type: "synonym" },                // never clickable —
 *     { word: "RECKLESSNESS", type: "antonym" },         // the answer itself
 *   ],                                                  // is never one of these
 *   explanation: "CAUTION means care — ..."             // shown after reveal
 * }
 * progressKey is optional: { batchId, index }. When given, the widget's
 * exact state (clues shown, options revealed/picked, explanation shown,
 * right-or-wrong) is saved via ProgressStore (assets/progress.js) after every
 * change, and replayed on load so the child resumes exactly where they left
 * off. Omit it for one-off widgets (e.g. Lesson 1's demo words) that don't
 * need to be remembered.
 */
function initJumpleGuessBox(root, config, feedbackEl, callbacks) {
  callbacks = callbacks || {};
  const wrap = document.createElement("div");
  wrap.style.display = "flex";
  wrap.style.gap = "0.6rem";
  wrap.style.alignItems = "center";
  wrap.style.margin = "0.9rem 0";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type your guess";
  input.autocomplete = "off";

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "Check";
  checkBtn.type = "button";

  wrap.appendChild(input);
  wrap.appendChild(checkBtn);
  root.appendChild(wrap);

  function check() {
    const val = input.value.trim().toUpperCase();
    if (!val) return;
    if (val === config.answer.toUpperCase()) {
      feedbackEl.textContent = "Yes! That's it.";
      feedbackEl.className = "feedback good";
      if (callbacks.onCorrect) callbacks.onCorrect();
    } else {
      feedbackEl.textContent = "Not quite — try another clue below.";
      feedbackEl.className = "feedback bad";
      if (callbacks.onWrong) callbacks.onWrong();
    }
  }

  checkBtn.addEventListener("click", check);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") check(); });
}

function revealAll(api) {
  if (api) api.revealAllRemaining();
}

/*
 * Renders a large batch of jumble widgets from a plain data array, each in its
 * own "Word N" block (no answer named). Used for big multi-word lesson pages.
 * items: array of the same config objects initJumbleWidget takes.
 * batchId: optional — when given, each word's progress is saved/restored
 * under "<batchId>:<index>" (see initJumbleWidget).
 */
function initJumbleSet(containerId, items, batchId) {
  const host = document.getElementById(containerId);
  items.forEach((item, i) => {
    const h3 = document.createElement("h3");
    h3.textContent = "Word " + (i + 1);
    host.appendChild(h3);
    const div = document.createElement("div");
    div.id = containerId + "-w" + (i + 1);
    host.appendChild(div);
    initJumbleWidget(div, item, batchId ? { batchId: batchId, index: i } : null);
  });
}

function initJumbleWidget(container, config, progressKey) {
  const root = typeof container === "string" ? document.getElementById(container) : container;
  root.innerHTML = "";

  const saved = progressKey ? ProgressStore.getWord(progressKey.batchId, progressKey.index) : null;

  const sentence = document.createElement("div");
  sentence.className = "sentence";
  sentence.innerHTML = `${config.before}<span class="jumble">${config.jumbled}</span>${config.after}`;
  root.appendChild(sentence);

  const feedback = document.createElement("div");
  feedback.className = "feedback";

  let clueIndex = 0;
  let optionsShown = false;
  let revealed = false;
  let correct = null;
  // 1.0 = guessed right with no help at all. Each clue shown (and the
  // hint-words reveal, counted as one more step) knocks 10% off, down to a
  // 50% floor -- getting it right after help is still a real win, just not a
  // full one. Computed once at the moment of a correct guess and never
  // recalculated, so revealAll()'s auto-reveal of the remaining stages
  // afterward doesn't further penalize it.
  let score = null;

  function persist() {
    if (!progressKey) return;
    ProgressStore.setWord(progressKey.batchId, progressKey.index, {
      clueIndex: clueIndex,
      optionsShown: optionsShown,
      revealed: revealed,
      correct: correct,
      score: score,
      feedbackText: feedback.textContent,
      feedbackClass: feedback.className.replace(/^feedback\s*/, ""),
    });
    if (window.onJumbleProgress) window.onJumbleProgress();
  }

  initJumpleGuessBox(root, config, feedback, {
    onCorrect: () => {
      const helpSteps = clueIndex + (optionsShown ? 1 : 0);
      score = Math.max(0.5, 1 - 0.1 * helpSteps);
      if (score < 1) {
        feedback.textContent += " (" + Math.round(score * 100) + "% — clue" +
          (helpSteps === 1 ? "" : "s") + " used)";
      }
      correct = true;
      revealAll(root._stageApi);
    },
    onWrong: () => persist(),
  });
  root.appendChild(feedback);

  const stagesHost = document.createElement("div");
  root.appendChild(stagesHost);

  const nextBtn = document.createElement("button");
  nextBtn.type = "button";
  nextBtn.className = "secondary";
  nextBtn.textContent = "Show a clue";
  root.appendChild(nextBtn);

  function renderClue(clue) {
    const div = document.createElement("div");
    div.className = "clue-stage";
    if (typeof clue === "string") {
      div.textContent = clue;
    } else {
      const tag = document.createElement("span");
      tag.className = "clue-tag";
      tag.textContent = clue.tag;
      div.appendChild(tag);
      div.appendChild(document.createTextNode(" " + clue.text));
    }
    stagesHost.appendChild(div);
  }

  function showNextClue() {
    renderClue(config.clues[clueIndex]);
    clueIndex++;
    if (clueIndex === config.clues.length) {
      nextBtn.textContent = "Show " + config.hints.length + " hint words";
    }
    persist();
  }

  const TYPE_LABEL = { synonym: "synonym", antonym: "antonym", root: "root", related: "related word" };

  function renderOptions() {
    const div = document.createElement("div");
    div.className = "options options-readonly";
    config.hints.forEach((hint) => {
      const chip = document.createElement("div");
      chip.className = "option-chip";
      chip.textContent = hint.word;
      const tag = document.createElement("span");
      tag.className = "option-chip-type";
      tag.textContent = "(" + (TYPE_LABEL[hint.type] || hint.type) + ")";
      chip.appendChild(tag);
      div.appendChild(chip);
    });
    stagesHost.appendChild(div);
  }

  function showOptions() {
    optionsShown = true;
    renderOptions();
    nextBtn.textContent = "Reveal answer";
    persist();
  }

  function finish() {
    persist();
    if (revealed) return;
    revealed = true;
    const div = document.createElement("div");
    div.className = "explain";
    div.innerHTML = `<strong>${config.answer}</strong> — ${config.explanation}`;
    stagesHost.appendChild(div);
    nextBtn.remove();
    persist();
  }

  nextBtn.addEventListener("click", () => {
    if (clueIndex < config.clues.length) {
      showNextClue();
    } else if (!optionsShown) {
      showOptions();
    } else {
      finish();
    }
  });

  root._stageApi = {
    revealAllRemaining() {
      while (clueIndex < config.clues.length) showNextClue();
      if (!optionsShown) showOptions();
      finish();
    },
  };

  // Replay any saved state so the widget looks exactly as it was left.
  if (saved) {
    // Seed correct/score up front: a word solved via the free-text guess box
    // has both set before finish() ever runs.
    correct = saved.correct;
    score = typeof saved.score === "number" ? saved.score : null;
    for (let i = 0; i < saved.clueIndex && i < config.clues.length; i++) showNextClue();
    if (saved.optionsShown) showOptions();
    if (saved.revealed && !revealed) finish();
    // Reapply the exact saved feedback text/class last — it's authoritative
    // regardless of which replay path above set (or didn't set) it.
    if (saved.feedbackText) {
      feedback.textContent = saved.feedbackText;
      feedback.className = "feedback" + (saved.feedbackClass ? " " + saved.feedbackClass : "");
    }
  }
}
