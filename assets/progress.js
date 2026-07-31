/*
 * Persists jumbled-word practice progress in the browser's localStorage, so
 * the child can close the browser mid-batch and pick back up exactly where
 * they left off next time this page loads on the same device/browser.
 *
 * Each word is identified by "<batchId>:<indexInBatch>" (batch ids and word
 * order come from assets/jumble-data.js). New batches/words can be appended
 * safely; inserting or reordering words *within* an existing batch would
 * shift indices and mismatch old saved state to the wrong word — the data
 * file's own convention (see NOTES.md) is append-only, so this is a known,
 * accepted limitation rather than something worked around here.
 *
 * Falls back to an in-memory (session-only) store if localStorage is
 * unavailable — e.g. private browsing — so the page still works, it just
 * won't remember between visits.
 */
const PROGRESS_STORAGE_KEY = "madhav11plus:jumble-progress:v1";

const ProgressStore = (function () {
  function hasLocalStorage() {
    try {
      const t = "__progress_test__";
      window.localStorage.setItem(t, "1");
      window.localStorage.removeItem(t);
      return true;
    } catch (e) {
      return false;
    }
  }

  const useLS = hasLocalStorage();
  let mem = {};

  function readAll() {
    if (!useLS) return mem;
    try {
      const raw = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function writeAll(data) {
    if (!useLS) {
      mem = data;
      return;
    }
    try {
      window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      /* storage full or blocked — silently drop, page still works */
    }
  }

  function keyFor(batchId, wordIndex) {
    return batchId + ":" + wordIndex;
  }

  return {
    getWord(batchId, wordIndex) {
      return readAll()[keyFor(batchId, wordIndex)] || null;
    },
    setWord(batchId, wordIndex, state) {
      const all = readAll();
      all[keyFor(batchId, wordIndex)] = state;
      writeAll(all);
    },
    getAll: readAll,
    reset() {
      writeAll({});
    },
  };
})();

/*
 * Aggregate stats across one or more batches (same shape as JUMBLE_BATCHES:
 * array of { id, words: [...] }). Returns overall totals plus a per-batch
 * breakdown keyed by batch id.
 */
function computeProgressStats(batches) {
  const all = ProgressStore.getAll();
  let total = 0, attempted = 0, correct = 0, scoreSum = 0;
  const perBatch = {};
  batches.forEach(function (batch) {
    let bAttempted = 0, bCorrect = 0, bScoreSum = 0;
    batch.words.forEach(function (_, i) {
      total++;
      const rec = all[batch.id + ":" + i];
      // A word counts as "answered" the moment a guess was submitted
      // (rec.attempted), even if never fully revealed. Older saved records
      // predate that flag and only have `revealed` -- honor those too so
      // past progress isn't dropped.
      if (rec && (rec.attempted || rec.revealed)) {
        attempted++;
        bAttempted++;
        if (rec.correct === true) {
          correct++;
          bCorrect++;
          // Older saved records predate scoring and have no score field --
          // treat those as a full 1.0 rather than punishing past progress.
          const wordScore = typeof rec.score === "number" ? rec.score : 1;
          scoreSum += wordScore;
          bScoreSum += wordScore;
        }
      }
    });
    perBatch[batch.id] = { total: batch.words.length, attempted: bAttempted, correct: bCorrect, scoreSum: bScoreSum };
  });
  return { total: total, attempted: attempted, correct: correct, scoreSum: scoreSum, perBatch: perBatch };
}
