/*
 * Reusable "jumbled word decoder" widget.
 * Renders progressive clue stages, then multiple-choice options, then the
 * explanation. A free-text guess box gives immediate right/wrong feedback at
 * every stage so the child never has to wait for clues to know if they're right.
 *
 * Usage: call initJumbleWidget(containerEl, config) where config is:
 * {
 *   before: "The sailors were told to sound the ",   // text before the jumble
 *   jumbled: "NAUTICO",                                // the jumbled letters
 *   after: " and abandon ship.",                        // text after the jumble
 *   answer: "CAUTION",                                  // correct word (any case)
 *   clues: ["Starts with the letter C.", "It means the same as 'care'."],
 *   options: ["CAUTION", "CUSHION", "CANTION", "AUCTION"], // include the answer
 *   explanation: "CAUTION means care — ..."             // shown after reveal
 * }
 */
function initJumpleGuessBox(root, config, feedbackEl) {
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
      revealAll(root._stageApi);
    } else {
      feedbackEl.textContent = "Not quite — try another clue below.";
      feedbackEl.className = "feedback bad";
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
 */
function initJumbleSet(containerId, items) {
  const host = document.getElementById(containerId);
  items.forEach((item, i) => {
    const h3 = document.createElement("h3");
    h3.textContent = "Word " + (i + 1);
    host.appendChild(h3);
    const div = document.createElement("div");
    div.id = containerId + "-w" + (i + 1);
    host.appendChild(div);
    initJumbleWidget(div, item);
  });
}

function initJumbleWidget(container, config) {
  const root = typeof container === "string" ? document.getElementById(container) : container;
  root.innerHTML = "";

  const sentence = document.createElement("div");
  sentence.className = "sentence";
  sentence.innerHTML = `${config.before}<span class="jumble">${config.jumbled}</span>${config.after}`;
  root.appendChild(sentence);

  const feedback = document.createElement("div");
  feedback.className = "feedback";

  initJumpleGuessBox(root, config, feedback);
  root.appendChild(feedback);

  const stagesHost = document.createElement("div");
  root.appendChild(stagesHost);

  let clueIndex = 0;
  let optionsShown = false;
  let revealed = false;

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

  function renderOptions() {
    const div = document.createElement("div");
    div.className = "options";
    config.options.forEach((opt) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = opt;
      b.addEventListener("click", () => {
        [...div.children].forEach((c) => (c.disabled = true));
        if (opt.toUpperCase() === config.answer.toUpperCase()) {
          b.classList.add("correct");
          feedback.textContent = "Correct!";
          feedback.className = "feedback good";
        } else {
          b.classList.add("incorrect");
          feedback.textContent = `Not quite. The answer was ${config.answer}.`;
          feedback.className = "feedback bad";
          [...div.children].forEach((c) => {
            if (c.textContent.toUpperCase() === config.answer.toUpperCase()) c.classList.add("correct");
          });
        }
        renderExplanation();
      });
      div.appendChild(b);
    });
    stagesHost.appendChild(div);
  }

  function renderExplanation() {
    if (revealed) return;
    revealed = true;
    const div = document.createElement("div");
    div.className = "explain";
    div.innerHTML = `<strong>${config.answer}</strong> — ${config.explanation}`;
    stagesHost.appendChild(div);
    nextBtn.remove();
  }

  nextBtn.addEventListener("click", () => {
    if (clueIndex < config.clues.length) {
      renderClue(config.clues[clueIndex]);
      clueIndex++;
      if (clueIndex === config.clues.length) nextBtn.textContent = "Show 4 options";
    } else if (!optionsShown) {
      renderOptions();
      optionsShown = true;
      nextBtn.textContent = "Reveal answer";
    } else {
      renderExplanation();
    }
  });

  root._stageApi = {
    revealAllRemaining() {
      while (clueIndex < config.clues.length) {
        renderClue(config.clues[clueIndex]);
        clueIndex++;
      }
      if (!optionsShown) { renderOptions(); optionsShown = true; }
      renderExplanation();
    },
  };
}
