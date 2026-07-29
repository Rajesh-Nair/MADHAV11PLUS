/*
 * Reusable "jumbled word decoder" widget.
 * Renders progressive clue stages, then multiple-choice options, then the
 * explanation. A free-text guess box gives immediate right/wrong feedback at
 * every stage so the child never has to wait for clues to know if they're right.
 *
 * Usage: call initJumbleWidget(containerEl, config, progressKey) where config is:
 * {
 *   before: "The sailors were told to sound the ",   // text before the jumble
 *   jumbled: "NAUTICO",                                // the jumbled letters
 *   after: " and abandon ship.",                        // text after the jumble
 *   answer: "CAUTION",                                  // correct word (any case)
 *   clues: ["Starts with the letter C.", "It means the same as 'care'."],
 *   options: ["CAUTION", "CUSHION", "CANTION", "AUCTION"], // include the answer
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
  let selectedOption = null;
  let correct = null;

  function persist() {
    if (!progressKey) return;
    ProgressStore.setWord(progressKey.batchId, progressKey.index, {
      clueIndex: clueIndex,
      optionsShown: optionsShown,
      revealed: revealed,
      selectedOption: selectedOption,
      correct: correct,
      feedbackText: feedback.textContent,
      feedbackClass: feedback.className.replace(/^feedback\s*/, ""),
    });
    if (window.onJumbleProgress) window.onJumbleProgress();
  }

  initJumpleGuessBox(root, config, feedback, {
    onCorrect: () => { correct = true; revealAll(root._stageApi); },
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
      nextBtn.textContent = "Show " + config.options.length + " options";
    }
    persist();
  }

  function selectOption(opt, entries) {
    entries.forEach((e) => (e.btn.disabled = true));
    const isCorrect = opt.toUpperCase() === config.answer.toUpperCase();
    const chosen = entries.find((e) => e.opt === opt);
    if (isCorrect) {
      chosen.btn.classList.add("correct");
      feedback.textContent = "Correct!";
      feedback.className = "feedback good";
    } else {
      chosen.btn.classList.add("incorrect");
      feedback.textContent = `Not quite. The answer was ${config.answer}.`;
      feedback.className = "feedback bad";
      entries.forEach((e) => {
        if (e.opt.toUpperCase() === config.answer.toUpperCase()) e.btn.classList.add("correct");
      });
    }
    selectedOption = opt;
    correct = isCorrect;
    finish();
  }

  function renderOptions(preSelected) {
    const div = document.createElement("div");
    div.className = "options";
    const entries = config.options.map((opt) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = opt;
      div.appendChild(b);
      return { btn: b, opt: opt };
    });
    entries.forEach((entry) => {
      entry.btn.addEventListener("click", () => selectOption(entry.opt, entries));
    });
    stagesHost.appendChild(div);
    if (preSelected) selectOption(preSelected, entries);
  }

  function showOptions(preSelected) {
    optionsShown = true;
    renderOptions(preSelected || null);
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
      showOptions(null);
    } else {
      finish();
    }
  });

  root._stageApi = {
    revealAllRemaining() {
      while (clueIndex < config.clues.length) showNextClue();
      if (!optionsShown) showOptions(null);
      finish();
    },
  };

  // Replay any saved state so the widget looks exactly as it was left.
  if (saved) {
    // Seed correct/selectedOption up front: a word solved via the free-text
    // guess box has correct=true but no selectedOption, so it can't rely on
    // the options-replay below (selectOption) to set these.
    correct = saved.correct;
    selectedOption = saved.selectedOption || null;
    for (let i = 0; i < saved.clueIndex && i < config.clues.length; i++) showNextClue();
    if (saved.optionsShown) showOptions(saved.selectedOption || null);
    if (saved.revealed && !revealed) finish();
    // Reapply the exact saved feedback text/class last — it's authoritative
    // regardless of which replay path above set (or didn't set) it.
    if (saved.feedbackText) {
      feedback.textContent = saved.feedbackText;
      feedback.className = "feedback" + (saved.feedbackClass ? " " + saved.feedbackClass : "");
    }
  }
}
