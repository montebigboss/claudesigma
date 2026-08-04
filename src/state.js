/* Persistent progress. Everything lives in localStorage — no account, no server. */
(function () {
  "use strict";

  var KEY = "inboxDojo.v1";
  var MASTERY_CAP = 5;

  function today() {
    var d = new Date();
    return (
      d.getFullYear() +
      "-" +
      String(d.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d.getDate()).padStart(2, "0")
    );
  }

  function daysBetween(a, b) {
    var pa = a.split("-").map(Number);
    var pb = b.split("-").map(Number);
    var da = Date.UTC(pa[0], pa[1] - 1, pa[2]);
    var db = Date.UTC(pb[0], pb[1] - 1, pb[2]);
    return Math.round((db - da) / 86400000);
  }

  function blank() {
    return {
      v: 1,
      xp: 0,
      mastery: {},
      read: {},
      manualsRead: {},
      ach: {},
      streak: { count: 0, last: null, best: 0 },
      daily: { date: null, quests: [], metrics: {} },
      dojo: {},
      vault: [],
      stats: {
        answered: 0,
        correct: 0,
        bestCombo: 0,
        runs: 0,
        gauntlets: 0,
        byMode: {},
      },
      settings: { sound: true, motion: true },
      createdAt: Date.now(),
    };
  }

  var S = blank();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        var fresh = blank();
        Object.keys(fresh).forEach(function (k) {
          if (parsed[k] === undefined) parsed[k] = fresh[k];
        });
        Object.keys(fresh.stats).forEach(function (k) {
          if (parsed.stats[k] === undefined) parsed.stats[k] = fresh.stats[k];
        });
        S = parsed;
      }
    } catch (e) {
      S = blank();
    }
    rollDaily();
    return S;
  }

  var saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try {
        localStorage.setItem(KEY, JSON.stringify(S));
      } catch (e) {
        /* quota — nothing useful to do */
      }
    }, 120);
  }

  /* ---------------------------------------------------------------- daily */
  function pickQuests(seedDate) {
    var pool = window.QUEST_POOL.slice();
    // Deterministic shuffle so the same day always yields the same three.
    var seed = seedDate.split("-").join("") | 0;
    function rnd() {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    }
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(rnd() * (i + 1));
      var t = pool[i];
      pool[i] = pool[j];
      pool[j] = t;
    }
    return pool.slice(0, 3).map(function (q) {
      return { id: q.id, prog: 0, done: false };
    });
  }

  function rollDaily() {
    var t = today();
    if (S.daily.date !== t) {
      S.daily = { date: t, quests: pickQuests(t), metrics: {} };
      save();
    }
  }

  function touchStreak() {
    var t = today();
    if (S.streak.last === t) return false;
    if (S.streak.last && daysBetween(S.streak.last, t) === 1) S.streak.count += 1;
    else S.streak.count = 1;
    S.streak.last = t;
    if (S.streak.count > S.streak.best) S.streak.best = S.streak.count;
    save();
    checkAch();
    return true;
  }

  function bumpMetric(name, by) {
    rollDaily();
    S.daily.metrics[name] = (S.daily.metrics[name] || 0) + (by === undefined ? 1 : by);
    var completed = [];
    S.daily.quests.forEach(function (q) {
      if (q.done) return;
      var def = questDef(q.id);
      if (!def || def.metric !== name) return;
      q.prog = Math.min(def.goal, S.daily.metrics[name] || 0);
      if (q.prog >= def.goal) {
        q.done = true;
        addXP(def.xp);
        completed.push(def);
      }
    });
    save();
    return completed;
  }

  function setMetricMax(name, value) {
    rollDaily();
    if ((S.daily.metrics[name] || 0) >= value) return [];
    S.daily.metrics[name] = value;
    var completed = [];
    S.daily.quests.forEach(function (q) {
      if (q.done) return;
      var def = questDef(q.id);
      if (!def || def.metric !== name) return;
      q.prog = Math.min(def.goal, value);
      if (q.prog >= def.goal) {
        q.done = true;
        addXP(def.xp);
        completed.push(def);
      }
    });
    save();
    return completed;
  }

  function questDef(id) {
    for (var i = 0; i < window.QUEST_POOL.length; i++)
      if (window.QUEST_POOL[i].id === id) return window.QUEST_POOL[i];
    return null;
  }

  /* ------------------------------------------------------------------ xp */
  function addXP(n) {
    var before = rank().index;
    S.xp += n;
    save();
    var after = rank().index;
    if (after > before) {
      window.dispatchEvent(
        new CustomEvent("rankup", { detail: window.RANKS[after] })
      );
    }
    return n;
  }

  function rank() {
    var idx = 0;
    for (var i = 0; i < window.RANKS.length; i++)
      if (S.xp >= window.RANKS[i].xp) idx = i;
    var cur = window.RANKS[idx];
    var next = window.RANKS[idx + 1] || null;
    var pct = next
      ? Math.min(100, ((S.xp - cur.xp) / (next.xp - cur.xp)) * 100)
      : 100;
    return { index: idx, cur: cur, next: next, pct: pct };
  }

  /* -------------------------------------------------------------- mastery */
  function scoreRule(n, correct) {
    if (!n) return;
    var cur = S.mastery[n] || 0;
    S.mastery[n] = correct
      ? Math.min(MASTERY_CAP, cur + 1)
      : Math.max(0, cur - 1);
    save();
  }

  function masteredCount() {
    var c = 0;
    for (var k in S.mastery) if (S.mastery[k] >= MASTERY_CAP) c++;
    return c;
  }

  function markRead(n) {
    if (S.read[n]) return false;
    S.read[n] = true;
    addXP(15);
    bumpMetric("codexRead");
    save();
    checkAch();
    return true;
  }

  function markManualRead(id) {
    if (S.manualsRead[id]) return false;
    S.manualsRead[id] = true;
    addXP(60);
    save();
    checkAch();
    return true;
  }

  /* --------------------------------------------------------- achievements */
  function grant(id) {
    if (S.ach[id]) return false;
    S.ach[id] = Date.now();
    save();
    var def = null;
    for (var i = 0; i < window.ACHIEVEMENTS.length; i++)
      if (window.ACHIEVEMENTS[i].id === id) def = window.ACHIEVEMENTS[i];
    if (def) {
      addXP(150);
      window.dispatchEvent(new CustomEvent("achievement", { detail: def }));
    }
    return true;
  }

  function checkAch(ctx) {
    ctx = ctx || {};
    if (S.stats.correct >= 1) grant("first-blood");
    if (S.stats.bestCombo >= 10) grant("combo-10");
    if (S.stats.bestCombo >= 25) grant("combo-25");
    var readCount = Object.keys(S.read).length;
    if (readCount >= 25) grant("codex-25");
    if (readCount >= 101) grant("codex-all");
    var m = masteredCount();
    if (m >= 10) grant("mastery-10");
    if (m >= 50) grant("mastery-50");
    if (m >= 101) grant("mastery-all");
    if ((S.mastery[1] || 0) >= MASTERY_CAP) grant("rule-1");
    if (S.streak.count >= 3) grant("streak-3");
    if (S.streak.count >= 7) grant("streak-7");
    if (S.streak.count >= 30) grant("streak-30");
    var dojoDone = 0;
    for (var k in S.dojo) if (S.dojo[k] && S.dojo[k].done) dojoDone++;
    if (dojoDone >= 1) grant("dojo-1");
    if (dojoDone >= 5) grant("dojo-5");
    if (dojoDone >= window.DOJO.length) grant("dojo-all");
    if (S.vault.length >= 10) grant("vault-10");
    if (S.vault.length >= 50) grant("vault-50");
    if (Object.keys(S.manualsRead).length >= window.MANUALS.length) grant("manuals");
    var h = new Date().getHours();
    if (h >= 0 && h < 4 && S.stats.answered > 0) grant("night-owl");
    if (ctx.flawless) grant("flawless");
    if (ctx.gauntlet) grant("boss-1");
    if (ctx.gauntletPerfect) grant("boss-perfect");
    if (ctx.ach) grant(ctx.ach);
  }

  /* ---------------------------------------------------------------- stats */
  function recordAnswer(mode, correct, ruleN) {
    S.stats.answered++;
    if (correct) S.stats.correct++;
    if (!S.stats.byMode[mode]) S.stats.byMode[mode] = { a: 0, c: 0 };
    S.stats.byMode[mode].a++;
    if (correct) S.stats.byMode[mode].c++;
    scoreRule(ruleN, correct);
    save();
  }

  function noteCombo(n) {
    if (n > S.stats.bestCombo) {
      S.stats.bestCombo = n;
      save();
      checkAch();
    }
    setMetricMax("bestComboToday", n);
  }

  window.Store = {
    get state() {
      return S;
    },
    load: load,
    save: save,
    reset: function () {
      S = blank();
      rollDaily();
      save();
    },
    today: today,
    rollDaily: rollDaily,
    touchStreak: touchStreak,
    addXP: addXP,
    rank: rank,
    scoreRule: scoreRule,
    masteredCount: masteredCount,
    markRead: markRead,
    markManualRead: markManualRead,
    grant: grant,
    checkAch: checkAch,
    recordAnswer: recordAnswer,
    noteCombo: noteCombo,
    bumpMetric: bumpMetric,
    setMetricMax: setMetricMax,
    questDef: questDef,
    MASTERY_CAP: MASTERY_CAP,
  };
})();
