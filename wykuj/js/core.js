/* Wykuj: rejestr modułów, stan, postępy, synchronizacja. */
(function () {
  "use strict";

  var W = (window.Wykuj = window.Wykuj || {});
  W.modules = [];
  W.byId = {};

  /* ---------- helpers ---------- */

  W.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  };

  W.sample = function (arr, n) {
    return W.shuffle(arr).slice(0, n);
  };

  W.hash = function (str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  };

  W.esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* Text normalisation for typed answers: case, Polish diacritics, spacing. */
  W.norm = function (s) {
    return String(s)
      .toLowerCase()
      .replace(/ł/g, "l")
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9 ]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  };

  W.lev = function (a, b) {
    if (a === b) return 0;
    var prev = [];
    for (var j = 0; j <= b.length; j++) prev[j] = j;
    for (var i = 1; i <= a.length; i++) {
      var cur = [i];
      for (var k = 1; k <= b.length; k++) {
        cur[k] = Math.min(prev[k] + 1, cur[k - 1] + 1, prev[k - 1] + (a[i - 1] === b[k - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  };

  /* Polski cudzysłów wokół tekstu, chyba że tekst już się w nim zaczyna. */
  W.quote = function (t) {
    t = String(t);
    return /^[„"]/.test(t) ? t : "„" + t + "”";
  };

  W.days = function (n) {
    return n + (n === 1 ? " dzień" : " dni");
  };

  W.today = function (d) {
    d = d || new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  };

  function dayDiff(a, b) {
    var pa = a.split("-"), pb = b.split("-");
    var da = Date.UTC(+pa[0], +pa[1] - 1, +pa[2]);
    var db = Date.UTC(+pb[0], +pb[1] - 1, +pb[2]);
    return Math.round((db - da) / 86400000);
  }

  /* ---------- module registry ---------- */

  W.registerModule = function (m) {
    var unitIdx = {};
    m.units.forEach(function (u, i) {
      unitIdx[u.id] = i;
    });
    m.exercises.forEach(function (e) {
      e.s = e.s || "S";
      e.id = m.id + ":" + W.hash(e.t + "|" + (e.q || JSON.stringify(e.pairs || "")));
    });
    m.concepts.forEach(function (c) {
      c.s = c.s || "S";
    });
    m.unitIdx = unitIdx;
    m.sets = m.sets || {};
    m.sourceNames = m.sourceNames || { S: "slajd", U: "ustnie na wykładzie", D: "★ spoza wykładu" };
    m.course.theme = m.course.theme || "green";
    m.course.icon = m.course.icon || "pencil";
    m.course.section = m.course.section || "wyk";
    m.kind = m.kind || "lecture";
    m.passRatio = m.passRatio || 0.5;
    W.modules.push(m);
    W.byId[m.id] = m;
  };

  /* Wykład albo czytanka: jak podpisać moduł i jak o nim mówić w zdaniu. */
  W.modLabel = function (m) {
    return m.label || "Wykład " + m.number;
  };
  W.modNoun = function (m, form) {
    var r = m.kind === "reading";
    return { gen: r ? "czytanki" : "wykładu", nom: r ? "czytanka" : "wykład" }[form || "gen"];
  };

  /* Obrazy z assets/: w pliku jednoplikowym siedzą w W.IMG jako data URI. */
  W.img = function (path) {
    return (W.IMG && W.IMG[path]) || path;
  };

  /* Czy są zdjęcia stron czytanki? W pliku jednoplikowym tylko, gdy zbudowano go z --with-pages. */
  W.pagesOk = function (m) {
    if (!m.pages || !m.pages.length) return false;
    if (!W.BUNDLED) return true;
    return !!(W.IMG && W.IMG["assets/" + m.pageDir + "/" + m.pages[0].items[0][0] + ".jpg"]);
  };

  W.courseMeta = {};
  W.registerCourse = function (c) {
    W.courseMeta[c.id] = c;
  };
  W.guide = function (courseId) {
    var c = W.courseMeta[courseId];
    return c && c.guide ? c.guide : null;
  };

  W.lastModule = function () {
    return W.byId[W.Store.state.lastMod] || W.modules[0];
  };

  W.courses = function (section) {
    var out = [], seen = {};
    W.modules.forEach(function (m) {
      if (section && m.course.section !== section) return;
      if (!seen[m.course.id]) {
        seen[m.course.id] = { course: m.course, modules: [] };
        out.push(seen[m.course.id]);
      }
      seen[m.course.id].modules.push(m);
    });
    out.forEach(function (c) {
      c.modules.sort(function (a, b) {
        return a.number - b.number;
      });
    });
    return out;
  };

  /* ---------- ranks ---------- */

  W.RANKS = [
    [0, "Świeżak"], [60, "Słuchacz"], [150, "Notujący"], [280, "Bywalec sal"], [450, "Kujon"],
    [680, "Prymus"], [960, "Stypendysta"], [1300, "Magister"], [1750, "Doktorant"],
    [2300, "Doktor"], [3000, "Habilitowany"], [4000, "Profesor"]
  ];

  W.rank = function (xp) {
    var i = 0;
    while (i + 1 < W.RANKS.length && xp >= W.RANKS[i + 1][0]) i++;
    var cur = W.RANKS[i], next = W.RANKS[i + 1];
    return {
      level: i + 1,
      name: cur[1],
      from: cur[0],
      to: next ? next[0] : null,
      nextName: next ? next[1] : null,
      pct: next ? (xp - cur[0]) / (next[0] - cur[0]) : 1
    };
  };

  /* ---------- achievements ---------- */

  W.ACH = [
    { id: "first", name: "Pierwszy krok", desc: "Ukończ pierwszą lekcję" },
    { id: "perfect", name: "Bez skazy", desc: "Lekcja bez ani jednego błędu" },
    { id: "streak3", name: "Rozpęd", desc: "3 dni nauki z rzędu" },
    { id: "streak7", name: "Tydzień z głową", desc: "7 dni nauki z rzędu" },
    { id: "goal", name: "Cel dnia", desc: "Zrealizuj dzienny cel XP" },
    { id: "cards20", name: "Fiszkarz", desc: "Powtórz 20 fiszek" },
    { id: "deck", name: "Cała talia", desc: "Każda fiszka modułu co najmniej w pudełku 3" },
    { id: "kahoot", name: "Refleks", desc: "Zdobądź 9000 pkt w quizie na czas" },
    { id: "match", name: "Błyskawica", desc: "Połącz pary w mniej niż 25 s" },
    { id: "sort", name: "Sortownik", desc: "Talia w Sortowni bez błędu" },
    { id: "exam", name: "Zdane!", desc: "Zalicz egzamin próbny" },
    { id: "exam90", name: "Piątka", desc: "Egzamin próbny na 90% lub więcej" },
    { id: "path", name: "Cała ścieżka", desc: "Ukończ wszystkie lekcje modułu" },
    { id: "stars", name: "Gwiazdozbiór", desc: "Trzy gwiazdki w każdej lekcji modułu" },
    { id: "hundred", name: "Setka", desc: "Odpowiedz poprawnie 100 razy" },
    { id: "notes", name: "Czytelnik", desc: "Otwórz notatki z wykładu albo streszczenie czytanki" }
  ];

  /* ---------- state ---------- */

  var KEY = "wykuj.v1";

  function blank() {
    return {
      v: 1,
      updated: 0,
      xp: 0,
      day: { date: W.today(), xp: 0 },
      goal: 50,
      streak: { n: 0, last: null, best: 0 },
      settings: { sound: true, extras: true, free: false },
      mods: {},
      courses: {},
      ach: {},
      stats: { answers: 0, correct: 0, cards: 0 }
    };
  }

  function merge(base, over) {
    Object.keys(over || {}).forEach(function (k) {
      var v = over[k];
      if (v && typeof v === "object" && !Array.isArray(v) && base[k] && typeof base[k] === "object" && !Array.isArray(base[k])) {
        merge(base[k], v);
      } else {
        base[k] = v;
      }
    });
    return base;
  }

  var listeners = {};
  var Store = (W.Store = {
    state: blank(),
    cloud: "off", // off | syncing | ok | local
    on: function (ev, fn) {
      (listeners[ev] = listeners[ev] || []).push(fn);
    },
    emit: function (ev, data) {
      (listeners[ev] || []).forEach(function (fn) {
        fn(data);
      });
    }
  });

  try {
    var raw = window.localStorage.getItem(KEY);
    if (raw) Store.state = merge(blank(), JSON.parse(raw));
  } catch (e) {
    /* storage unavailable: run in memory */
  }

  Store.course = function (id) {
    var all = (Store.state.courses = Store.state.courses || {});
    var c = all[id] || (all[id] = { sheets: {}, oral: {} });
    c.sheets = c.sheets || {};
    c.oral = c.oral || {};
    return c;
  };

  Store.mod = function (id) {
    var m = Store.state.mods[id];
    if (!m) {
      m = Store.state.mods[id] = { path: {}, cards: {}, items: {}, best: {}, exams: [] };
    }
    m.path = m.path || {};
    m.cards = m.cards || {};
    m.items = m.items || {};
    m.best = m.best || {};
    m.exams = m.exams || [];
    return m;
  };

  var cloudTimer = null;
  Store.save = function () {
    Store.state.updated = Date.now();
    try {
      window.localStorage.setItem(KEY, JSON.stringify(Store.state));
    } catch (e) {
      /* ignore */
    }
    if (cloudRef) {
      clearTimeout(cloudTimer);
      cloudTimer = setTimeout(pushCloud, 1500);
    }
    Store.emit("change");
  };

  Store.reset = function () {
    var keepSettings = Store.state.settings;
    Store.state = blank();
    Store.state.settings = keepSettings;
    Store.save();
  };

  /* Day rollover and streak, called whenever XP is earned. */
  function touchDay() {
    var st = Store.state, t = W.today();
    if (st.day.date !== t) st.day = { date: t, xp: 0 };
    if (st.streak.last !== t) {
      var gap = st.streak.last ? dayDiff(st.streak.last, t) : 99;
      st.streak.n = gap === 1 ? st.streak.n + 1 : 1;
      st.streak.last = t;
      st.streak.best = Math.max(st.streak.best || 0, st.streak.n);
      if (st.streak.n >= 3) Store.unlock("streak3");
      if (st.streak.n >= 7) Store.unlock("streak7");
    }
  }

  Store.streakAlive = function () {
    var s = Store.state.streak;
    if (!s.last) return 0;
    var gap = dayDiff(s.last, W.today());
    return gap <= 1 ? s.n : 0;
  };

  Store.todayXP = function () {
    return Store.state.day.date === W.today() ? Store.state.day.xp : 0;
  };

  Store.addXP = function (n) {
    if (!n) return;
    touchDay();
    var st = Store.state;
    var before = W.rank(st.xp).level;
    var goalBefore = st.day.xp >= st.goal;
    st.xp += n;
    st.day.xp += n;
    if (!goalBefore && st.day.xp >= st.goal) {
      if (st.ach.goal) Store.emit("goal");
      else Store.unlock("goal");
    }
    var after = W.rank(st.xp).level;
    if (after > before) Store.emit("levelup", W.rank(st.xp));
    Store.save();
  };

  Store.unlock = function (id) {
    if (Store.state.ach[id]) return;
    Store.state.ach[id] = W.today();
    var a = W.ACH.filter(function (x) {
      return x.id === id;
    })[0];
    if (a) Store.emit("achievement", a);
  };

  /* Per-exercise memory: drives "Do poprawki" and weak-item weighting. */
  Store.record = function (modId, qid, ok) {
    var items = Store.mod(modId).items;
    var it = items[qid] || { ok: 0, bad: 0, last: 1 };
    if (ok) it.ok++;
    else it.bad++;
    it.last = ok ? 1 : 0;
    it.t = Date.now();
    items[qid] = it;
    Store.state.stats.answers++;
    if (ok) {
      Store.state.stats.correct++;
      if (Store.state.stats.correct >= 100) Store.unlock("hundred");
    }
  };

  Store.weight = function (modId, qid) {
    var it = Store.mod(modId).items[qid];
    if (!it) return 2;
    if (it.last === 0) return 4;
    return Math.max(0.5, 2 + it.bad - it.ok * 0.6);
  };

  /* ---------- flashcards (Leitner) ---------- */

  var BOX_DAYS = [0, 1, 2, 4, 8, 16];

  Store.card = function (modId, cid) {
    return Store.mod(modId).cards[cid] || null;
  };

  Store.gradeCard = function (modId, cid, grade) {
    var cards = Store.mod(modId).cards;
    var c = cards[cid] || { box: 0, due: 0, seen: 0 };
    if (grade === "again") c.box = 0;
    else if (grade === "good") c.box = Math.min(5, c.box + 1);
    else c.box = Math.max(1, c.box);
    c.seen++;
    var days = grade === "again" ? 0 : BOX_DAYS[c.box] || 1;
    c.due = grade === "again" ? Date.now() : Date.now() + days * 86400000 - 3600000;
    cards[cid] = c;
    Store.state.stats.cards = (Store.state.stats.cards || 0) + 1;
    if (Store.state.stats.cards >= 20) Store.unlock("cards20");
  };

  Store.dueCards = function (m) {
    var now = Date.now();
    return m.concepts.filter(function (c) {
      var st = Store.card(m.id, c.id);
      return st && st.due <= now && W.allowed(c);
    });
  };

  Store.newCards = function (m) {
    return m.concepts.filter(function (c) {
      return !Store.card(m.id, c.id) && W.allowed(c);
    });
  };

  W.allowed = function (item) {
    return Store.state.settings.extras || item.s !== "D";
  };

  /* ---------- module progress ---------- */

  W.unitDone = function (m, uid) {
    var p = Store.mod(m.id).path[uid];
    return !!(p && p.stars > 0);
  };

  W.unitOpen = function (m, idx) {
    if (Store.state.settings.free || idx === 0) return true;
    return W.unitDone(m, m.units[idx - 1].id);
  };

  W.nextUnit = function (m) {
    for (var i = 0; i < m.units.length; i++) {
      if (!W.unitDone(m, m.units[i].id)) return i;
    }
    return -1;
  };

  W.progress = function (m) {
    var ms = Store.mod(m.id);
    var stars = 0;
    m.units.forEach(function (u) {
      stars += (ms.path[u.id] && ms.path[u.id].stars) || 0;
    });
    var learned = m.concepts.filter(function (c) {
      var st = ms.cards[c.id];
      return st && st.box >= 3;
    }).length;
    var p = 0.6 * (stars / (m.units.length * 3)) + 0.4 * (learned / m.concepts.length);
    return { pct: p, stars: stars, maxStars: m.units.length * 3, learned: learned, total: m.concepts.length };
  };

  W.mistakes = function (m) {
    var items = Store.mod(m.id).items;
    return m.exercises.filter(function (e) {
      return items[e.id] && items[e.id].last === 0 && W.allowed(e);
    });
  };

  /* ---------- cloud sync (claude.ai artifact db, per viewer) ---------- */

  var cloudRef = null;

  function pushCloud() {
    if (!cloudRef) return;
    Store.cloud = "syncing";
    Store.emit("cloud");
    cloudRef
      .set({ json: JSON.stringify(Store.state), updated: Store.state.updated })
      .then(function () {
        Store.cloud = "ok";
        Store.emit("cloud");
      })
      .catch(function () {
        Store.cloud = "local";
        cloudRef = null;
        Store.emit("cloud");
      });
  }

  Store.initCloud = function () {
    var c = window.claude;
    if (!c || typeof c.use !== "function") return;
    Promise.all([c.use("db"), c.use("user")])
      .then(function (r) {
        var db = r[0], user = r[1];
        if (!db || !user) return null;
        return user.id().then(function (uid) {
          if (!uid) return null;
          return db.collection("data/users/" + uid).doc("wykuj");
        });
      })
      .then(function (ref) {
        if (!ref) return;
        Store.cloud = "syncing";
        Store.emit("cloud");
        return ref.get().then(function (snap) {
          cloudRef = ref;
          var data = snap.exists ? snap.data() : null;
          var remote = null;
          try {
            remote = data && data.json ? JSON.parse(data.json) : null;
          } catch (e) {
            remote = null;
          }
          if (remote && (remote.updated || 0) > (Store.state.updated || 0)) {
            Store.state = merge(blank(), remote);
            try {
              window.localStorage.setItem(KEY, JSON.stringify(Store.state));
            } catch (e) {
              /* ignore */
            }
            Store.cloud = "ok";
            Store.emit("remote");
            Store.emit("cloud");
          } else if (Store.state.updated) {
            pushCloud();
          } else {
            Store.cloud = "ok";
            Store.emit("cloud");
          }
        });
      })
      .catch(function () {
        Store.cloud = "local";
        Store.emit("cloud");
      });
  };
})();
