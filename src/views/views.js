/* Home, Codex, Dojo and Progress screens. */
(function () {
  "use strict";

  var esc = UI.esc;

  var MODES = [
    {
      id: "rapid",
      icon: "⚡",
      name: "Rapid Fire",
      desc: "20 seconds a question, straight from the 101 rules.",
      meta: "12 questions · timed",
      accent: "var(--hot)",
      go: function () {
        Drills.rapidFire(12);
      },
    },
    {
      id: "heresy",
      icon: "🔥",
      name: "Heresy or Throssell",
      desc: "Snap judgement. Is this doctrine, or do we burn it?",
      meta: "15 calls · 12s each",
      accent: "var(--hot-2)",
      go: function () {
        Drills.heresy(15);
      },
    },
    {
      id: "subject",
      icon: "🎯",
      name: "Subject Line Lab",
      desc: "Two lines enter. Only one poses a real question.",
      meta: "10 face-offs",
      accent: "var(--gold)",
      go: function () {
        Labs.subjectLab(10);
      },
    },
    {
      id: "triforce",
      icon: "🔺",
      name: "Triforce Judge",
      desc: "Relevant? Entertaining? Brief? Score the lead on all three.",
      meta: "8 leads",
      accent: "var(--violet)",
      go: function () {
        Labs.triforce(8);
      },
    },
    {
      id: "commander",
      icon: "🎖️",
      name: "Campaign Commander",
      desc: "Tolerance × aggressiveness. Call the send frequency.",
      meta: "8 calls",
      accent: "var(--ice)",
      go: function () {
        Labs.commander(8);
      },
    },
    {
      id: "research",
      icon: "🔎",
      name: "Field Research",
      desc: "Market Detective surveys, interviews and hook-hunting.",
      meta: "10 questions",
      accent: "var(--mint)",
      go: function () {
        Drills.research(10);
      },
    },
    {
      id: "gauntlet",
      icon: "💀",
      name: "The Gauntlet",
      desc: "25 questions. Three lives. Everything in the app.",
      meta: "Boss run · 3 lives",
      accent: "var(--bad)",
      go: function () {
        Drills.gauntlet();
      },
    },
  ];

  /* ------------------------------------------------------------------ HOME */
  function home() {
    var st = Store.state;
    var rk = Store.rank();
    var mastered = Store.masteredCount();
    var read = Object.keys(st.read).length;

    var quests = st.daily.quests
      .map(function (q) {
        var def = Store.questDef(q.id);
        if (!def) return "";
        var prog = Math.min(def.goal, st.daily.metrics[def.metric] || 0);
        return (
          '<div class="quest' + (q.done ? " done" : "") + '">' +
          '<div class="box">' + (q.done ? "✓" : "") + "</div>" +
          '<div class="txt">' + esc(def.text) + "</div>" +
          (q.done
            ? '<div class="rew">+' + def.xp + "</div>"
            : '<div class="prog">' + prog + "/" + def.goal + "</div>") +
          "</div>"
        );
      })
      .join("");

    var greeting = st.stats.answered === 0
      ? "Everything that follows is context-dependent. Including this."
      : rk.cur.blurb;

    document.getElementById("view").innerHTML =
      '<div class="hero"><h1>Become a Throssell-<br>acknowledged copywriter.</h1>' +
      "<p>" + esc(greeting) + "</p>" +
      '<div class="rank-line"><span class="rank-badge"><span class="em">' +
      rk.cur.icon + "</span>" + esc(rk.cur.name) + "</span>" +
      (rk.next
        ? '<span class="rank-next">' + UI.fmt(rk.next.xp - st.xp) + " XP to " + esc(rk.next.name) + "</span>"
        : '<span class="rank-next">Maximum rank. Go send eight emails.</span>') +
      "</div></div>" +

      '<div class="card"><h2 class="sec" style="margin:0 0 4px">Today\'s quests</h2>' +
      quests +
      "</div>" +

      '<h2 class="sec">Training</h2><div class="modes">' +
      MODES.map(function (m) {
        return (
          '<button class="mode" data-mode="' + m.id + '" style="--accent:' + m.accent + '">' +
          '<span class="ic">' + m.icon + "</span>" +
          '<div class="nm">' + esc(m.name) + "</div>" +
          '<div class="ds">' + esc(m.desc) + "</div>" +
          '<div class="meta">' + esc(m.meta) + "</div></button>"
        );
      }).join("") +
      "</div>" +

      '<h2 class="sec">Where you stand</h2><div class="card">' +
      bar("Rules mastered", mastered, 101) +
      bar("Codex read", read, 101) +
      bar("Dojo reps done", Object.keys(st.dojo).filter(function (k) { return st.dojo[k].done; }).length, window.DOJO.length) +
      bar("Field manuals", Object.keys(st.manualsRead).length, window.MANUALS.length) +
      "</div>" +

      '<div class="credit">Built on Daniel Throssell\'s <em>Email Copywriting Compendium</em>, the Campaign Conqueror cheat sheet and Market Detective.<br>Study material for your own practice — go buy the courses at persuasivepage.com.</div>';

    Array.prototype.forEach.call(document.querySelectorAll(".mode"), function (b) {
      b.onclick = function () {
        var m = MODES.filter(function (x) {
          return x.id === b.dataset.mode;
        })[0];
        FX.play("select");
        m.go();
      };
    });
  }

  function bar(label, val, max) {
    var pct = Math.round((val / max) * 100);
    return (
      '<div class="bar-row"><div class="bl">' + esc(label) + "</div>" +
      '<div class="bt"><i style="width:' + pct + '%"></i></div>' +
      '<div class="bv">' + val + "/" + max + "</div></div>"
    );
  }

  /* ----------------------------------------------------------------- CODEX */
  var codexFilter = "all";
  var codexQuery = "";

  function codex() {
    var st = Store.state;
    document.getElementById("view").innerHTML =
      '<h2 class="sec" style="margin-top:4px">Field Manuals</h2>' +
      '<div class="modes">' +
      window.MANUALS.map(function (m) {
        return (
          '<button class="mode" data-manual="' + m.id + '" style="--accent:var(--gold)">' +
          '<span class="ic">' + m.icon + "</span>" +
          '<div class="nm">' + esc(m.name) + "</div>" +
          '<div class="ds">' + esc(m.blurb) + "</div>" +
          '<div class="meta">' + (st.manualsRead[m.id] ? "✓ Read" : m.tag) + "</div></button>"
        );
      }).join("") +
      "</div>" +
      '<h2 class="sec">The 101 Rules</h2>' +
      '<input class="search" id="cx-q" placeholder="Search the Compendium…" value="' + esc(codexQuery) + '">' +
      '<div class="filters" id="cx-f"></div>' +
      '<div id="cx-list"></div>';

    var f = document.getElementById("cx-f");
    f.innerHTML =
      '<button class="fchip' + (codexFilter === "all" ? " on" : "") + '" data-c="all">All 101</button>' +
      '<button class="fchip' + (codexFilter === "todo" ? " on" : "") + '" data-c="todo">Not mastered</button>' +
      window.CATEGORIES.map(function (c) {
        return (
          '<button class="fchip' + (codexFilter === c.id ? " on" : "") + '" data-c="' + c.id + '">' +
          esc(c.name) + "</button>"
        );
      }).join("");

    Array.prototype.forEach.call(f.querySelectorAll(".fchip"), function (b) {
      b.onclick = function () {
        codexFilter = b.dataset.c;
        FX.play("tick");
        codex();
      };
    });

    var q = document.getElementById("cx-q");
    q.oninput = function () {
      codexQuery = q.value;
      drawList();
    };

    Array.prototype.forEach.call(document.querySelectorAll("[data-manual]"), function (b) {
      b.onclick = function () {
        manualSheet(b.dataset.manual);
      };
    });

    drawList();
  }

  function drawList() {
    var st = Store.state;
    var term = codexQuery.trim().toLowerCase();
    var list = window.RULES.filter(function (r) {
      if (codexFilter === "todo" && (st.mastery[r.n] || 0) >= Store.MASTERY_CAP) return false;
      if (codexFilter !== "all" && codexFilter !== "todo" && r.cat !== codexFilter) return false;
      if (!term) return true;
      return (
        r.title.toLowerCase().indexOf(term) >= 0 ||
        r.key.toLowerCase().indexOf(term) >= 0 ||
        r.body.toLowerCase().indexOf(term) >= 0 ||
        String(r.n) === term
      );
    });

    var el = document.getElementById("cx-list");
    if (!list.length) {
      el.innerHTML = '<div class="empty"><span class="ee">🕳️</span>Nothing matches that.</div>';
      return;
    }
    el.innerHTML = list
      .map(function (r) {
        return (
          '<button class="rule-row' + (st.read[r.n] ? " read" : "") + '" data-n="' + r.n + '">' +
          '<div class="num">' + r.n + "</div><div style=\"flex:1\">" +
          '<div class="rt">' + esc(r.title) + "</div>" +
          '<div class="rk">' + esc(r.key) + "</div>" +
          UI.pips(r.n) + "</div></button>"
        );
      })
      .join("");
    Array.prototype.forEach.call(el.querySelectorAll(".rule-row"), function (b) {
      b.onclick = function () {
        UI.ruleSheet(parseInt(b.dataset.n, 10));
      };
    });
  }

  function manualSheet(id) {
    var m = null;
    for (var i = 0; i < window.MANUALS.length; i++)
      if (window.MANUALS[i].id === id) m = window.MANUALS[i];
    if (!m) return;
    var fresh = Store.markManualRead(id);
    var html =
      '<div class="q-tag">Field Manual · ' + esc(m.tag) + "</div><h3>" + esc(m.name) + "</h3>" +
      '<p class="tiny" style="margin:6px 0 16px">' + esc(m.blurb) + "</p>" +
      (m.note ? '<div class="note">' + esc(m.note) + "</div>" : "") +
      m.sections
        .map(function (s) {
          return (
            '<div class="manual-sec"><h4>' + esc(s.h) + "</h4>" +
            (s.lead ? '<p class="lead">' + esc(s.lead) + "</p>" : "") +
            "<ul>" +
            s.items
              .map(function (t) {
                return "<li>" + esc(t) + "</li>";
              })
              .join("") +
            "</ul></div>"
          );
        })
        .join("") +
      '<button class="btn ghost" onclick="UI.closeSheet()">Close</button>';
    UI.sheet(html);
    if (fresh) {
      FX.play("achievement");
      FX.toast({ icon: m.icon, title: "Field manual filed", body: "+60 XP", kind: "gold" });
      App.refreshChrome();
    }
  }

  /* ------------------------------------------------------------------ DOJO */
  function dojo() {
    var st = Store.state;
    var done = Object.keys(st.dojo).filter(function (k) {
      return st.dojo[k].done;
    }).length;

    document.getElementById("view").innerHTML =
      '<div class="hero" style="padding:22px 20px"><h1 style="font-size:24px">The Dojo</h1>' +
      "<p>Knowing 101 rules is worth nothing until your hands know them. Reps are self-scored — be honest, nobody's watching.</p>" +
      '<div class="rank-line"><span class="rank-badge"><span class="em">🥋</span>' + done + "/" + window.DOJO.length + " reps complete</span></div></div>" +

      '<h2 class="sec">Story Vault</h2>' +
      '<div class="card"><div class="tiny" id="vault-prompt" style="color:var(--violet);font-weight:800;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px"></div>' +
      '<textarea class="pad" id="vault-in" style="min-height:110px" placeholder="Two sentences. What happened — and how did you react?"></textarea>' +
      '<div class="btn-row"><button class="btn ghost small" id="vault-skip">New prompt</button>' +
      '<button class="btn small" id="vault-save" style="flex:1">Bank it (+40 XP)</button></div>' +
      '<div class="tiny" style="margin-top:10px">Rule #27 — most people have several story-worthy moments a day. Bank them and your story sense compounds.</div></div>' +
      '<div id="vault-list"></div>' +

      '<h2 class="sec">Writing reps</h2><div id="dojo-list"></div>';

    newPrompt();
    document.getElementById("vault-skip").onclick = function () {
      FX.play("tick");
      newPrompt();
    };
    document.getElementById("vault-save").onclick = saveVault;

    var list = document.getElementById("dojo-list");
    list.innerHTML = window.DOJO.map(function (d) {
      var rec = st.dojo[d.id];
      return (
        '<button class="rule-row" data-d="' + d.id + '"><div style="flex:1">' +
        '<div style="display:flex;gap:8px;align-items:center;margin-bottom:5px">' +
        '<span class="tier-tag tier-' + d.tier + '">Tier ' + d.tier + "</span>" +
        (rec && rec.done ? '<span class="tier-tag" style="color:var(--mint)">✓ Done</span>' : "") +
        "</div>" +
        '<div class="rt">' + esc(d.name) + "</div>" +
        '<div class="rk">' + esc(d.brief.slice(0, 110)) + (d.brief.length > 110 ? "…" : "") + "</div>" +
        '<div class="tiny" style="margin-top:6px">Rules ' + d.rules.map(function (r) { return "#" + r; }).join(", ") + "</div>" +
        "</div></button>"
      );
    }).join("");
    Array.prototype.forEach.call(list.querySelectorAll("[data-d]"), function (b) {
      b.onclick = function () {
        dojoSheet(b.dataset.d);
      };
    });

    drawVault();
  }

  var currentPrompt = "";
  function newPrompt() {
    var p = window.VAULT_PROMPTS[(Math.random() * window.VAULT_PROMPTS.length) | 0];
    currentPrompt = p;
    document.getElementById("vault-prompt").textContent = p;
  }

  function saveVault() {
    var ta = document.getElementById("vault-in");
    var text = ta.value.trim();
    if (text.length < 12) {
      FX.play("wrong");
      FX.shake(ta);
      FX.toast({ icon: "✍️", title: "Give it a bit more", body: "At least a sentence or two." });
      return;
    }
    Store.state.vault.unshift({ at: Date.now(), prompt: currentPrompt, text: text });
    Store.addXP(40);
    Store.save();
    Store.bumpMetric("vaultToday").forEach(function (d) {
      FX.toast({ icon: "🎯", title: "Daily quest complete", body: d.text + " · +" + d.xp + " XP", kind: "mint" });
    });
    Store.touchStreak();
    Store.checkAch();
    ta.value = "";
    FX.play("levelup");
    FX.burstFrom(document.getElementById("vault-save"), 26, 8);
    FX.toast({ icon: "🗝️", title: "Banked", body: "+40 XP · " + Store.state.vault.length + " stories in the vault", kind: "gold" });
    newPrompt();
    drawVault();
    App.refreshChrome();
  }

  function drawVault() {
    var v = Store.state.vault;
    var el = document.getElementById("vault-list");
    if (!el) return;
    if (!v.length) {
      el.innerHTML = "";
      return;
    }
    el.innerHTML =
      '<h2 class="sec">' + v.length + " banked</h2>" +
      v
        .slice(0, 12)
        .map(function (it, idx) {
          var d = new Date(it.at);
          return (
            '<div class="vault-item"><div class="vp">' + esc(it.prompt) + "</div>" +
            '<div class="vt">' + esc(it.text) + "</div>" +
            '<div class="vd">' + d.toLocaleDateString() + " · " +
            '<span style="cursor:pointer;text-decoration:underline" data-del="' + idx + '">delete</span></div></div>'
          );
        })
        .join("") +
      (v.length > 12 ? '<div class="tiny" style="text-align:center;padding:8px">…and ' + (v.length - 12) + " more</div>" : "");

    Array.prototype.forEach.call(el.querySelectorAll("[data-del]"), function (b) {
      b.onclick = function () {
        Store.state.vault.splice(parseInt(b.dataset.del, 10), 1);
        Store.save();
        FX.play("tick");
        drawVault();
      };
    });
  }

  function dojoSheet(id) {
    var d = null;
    for (var i = 0; i < window.DOJO.length; i++) if (window.DOJO[i].id === id) d = window.DOJO[i];
    if (!d) return;
    var rec = Store.state.dojo[id] || { done: false, text: "", checks: [] };

    var s = UI.sheet(
      '<div class="q-tag">Dojo rep · Tier ' + d.tier + "</div><h3>" + esc(d.name) + "</h3>" +
      '<div class="tiny" style="margin:8px 0 14px">Rules ' + d.rules.map(function (r) {
        return '<span style="cursor:pointer;color:var(--ice)" onclick="UI.closeSheet();UI.ruleSheet(' + r + ')">#' + r + "</span>";
      }).join(", ") + "</div>" +
      '<div class="lead-quote" style="font-size:15px">' + esc(d.brief) + "</div>" +
      '<div class="note">' + esc(d.kicker) + "</div>" +
      '<textarea class="pad" id="dj-text" placeholder="Write it here. Or write it elsewhere and paste it in — the point is that it exists.">' +
      esc(rec.text || "") + "</textarea>" +
      '<div class="wordcount" id="dj-wc"></div>' +
      '<h2 class="sec">Self-score</h2><div id="dj-checks">' +
      d.rubric
        .map(function (t, k) {
          return (
            '<button class="check' + (rec.checks && rec.checks[k] ? " on" : "") + '" data-k="' + k + '">' +
            '<div class="box">' + (rec.checks && rec.checks[k] ? "✓" : "") + "</div>" +
            '<div class="lb">' + esc(t) + "</div></button>"
          );
        })
        .join("") +
      "</div>" +
      '<button class="btn" id="dj-save" style="margin-top:16px">Save rep</button>' +
      '<button class="btn ghost" onclick="UI.closeSheet()" style="margin-top:9px">Close</button>'
    );

    var checks = (rec.checks || []).slice();
    while (checks.length < d.rubric.length) checks.push(false);

    var ta = s.querySelector("#dj-text");
    var wc = s.querySelector("#dj-wc");
    function count() {
      var w = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
      wc.textContent = w + " word" + (w === 1 ? "" : "s");
    }
    ta.oninput = count;
    count();

    Array.prototype.forEach.call(s.querySelectorAll(".check"), function (b) {
      b.onclick = function () {
        var k = parseInt(b.dataset.k, 10);
        checks[k] = !checks[k];
        b.classList.toggle("on", checks[k]);
        b.querySelector(".box").textContent = checks[k] ? "✓" : "";
        FX.play("select");
      };
    });

    s.querySelector("#dj-save").onclick = function () {
      var ticked = checks.filter(Boolean).length;
      var text = ta.value.trim();
      if (text.length < 30) {
        FX.play("wrong");
        FX.shake(ta);
        FX.toast({ icon: "✍️", title: "Do the rep first", body: "Paste or write your work before saving." });
        return;
      }
      var wasDone = Store.state.dojo[id] && Store.state.dojo[id].done;
      var nowDone = ticked >= Math.ceil(d.rubric.length * 0.7);
      Store.state.dojo[id] = { done: nowDone, text: text, checks: checks, at: Date.now() };
      Store.save();
      if (nowDone && !wasDone) {
        var xp = 200 + d.tier * 100;
        Store.addXP(xp);
        Store.touchStreak();
        Store.checkAch();
        FX.play("levelup");
        FX.rain(90);
        FX.toast({ icon: "🥋", title: "Rep complete", body: d.name + " · +" + xp + " XP", kind: "gold", ms: 4200 });
        UI.closeSheet();
        dojo();
      } else if (!nowDone) {
        Store.addXP(30);
        FX.play("select");
        FX.toast({
          icon: "📝",
          title: "Saved as a draft",
          body: "Tick at least " + Math.ceil(d.rubric.length * 0.7) + " of " + d.rubric.length + " rubric points to complete it.",
        });
      } else {
        FX.play("select");
        FX.toast({ icon: "💾", title: "Updated" });
        UI.closeSheet();
        dojo();
      }
      App.refreshChrome();
    };
  }

  /* -------------------------------------------------------------- PROGRESS */
  function progress() {
    var st = Store.state;
    var rk = Store.rank();
    var acc = st.stats.answered ? Math.round((st.stats.correct / st.stats.answered) * 100) : 0;

    var cells = window.RULES.map(function (r) {
      var m = st.mastery[r.n] || 0;
      return '<div class="mcell m' + m + '" title="Rule #' + r.n + " — " + esc(r.title) + '" data-n="' + r.n + '">' + r.n + "</div>";
    }).join("");

    var modeBars = Object.keys(st.stats.byMode)
      .map(function (k) {
        var d = st.stats.byMode[k];
        return bar(labelFor(k), d.c, Math.max(1, d.a));
      })
      .join("");

    document.getElementById("view").innerHTML =
      '<div class="hero" style="padding:24px 20px"><h1 style="font-size:26px">' + rk.cur.icon + " " + esc(rk.cur.name) + "</h1>" +
      "<p>" + esc(rk.cur.blurb) + "</p>" +
      '<div class="rank-line"><span class="rank-badge">' + UI.fmt(st.xp) + " XP</span>" +
      '<span class="rank-badge">🔥 ' + st.streak.count + " day streak</span>" +
      '<span class="rank-badge">Best: ' + st.streak.best + "</span></div></div>" +

      '<div class="result-stats" style="margin-bottom:16px">' +
      '<div class="rs"><div class="v">' + UI.fmt(st.stats.answered) + '</div><div class="k">Answered</div></div>' +
      '<div class="rs"><div class="v">' + acc + '%</div><div class="k">Accuracy</div></div>' +
      '<div class="rs"><div class="v">' + st.stats.bestCombo + '×</div><div class="k">Best combo</div></div></div>' +

      '<h2 class="sec">Mastery map — ' + Store.masteredCount() + " of 101 rules mastered</h2>" +
      '<div class="card"><div class="mastery-grid" id="mgrid">' + cells + "</div>" +
      '<div class="tiny" style="margin-top:12px">Every correct answer on a rule adds a level; a miss takes one away. Five levels means mastered. Tap any square to read the rule.</div></div>' +

      (modeBars ? '<h2 class="sec">Accuracy by mode</h2><div class="card">' + modeBars + "</div>" : "") +

      '<h2 class="sec">Achievements — ' + Object.keys(st.ach).length + "/" + window.ACHIEVEMENTS.length + "</h2>" +
      '<div class="ach-grid">' +
      window.ACHIEVEMENTS.map(function (a) {
        var got = !!st.ach[a.id];
        var hidden = a.secret && !got;
        return (
          '<div class="ach' + (got ? " got" : "") + '"><span class="ai">' + (hidden ? "❔" : a.icon) + "</span>" +
          '<div class="an">' + esc(hidden ? "Secret" : a.name) + "</div>" +
          '<div class="ad">' + esc(hidden ? "Keep training." : a.desc) + "</div></div>"
        );
      }).join("") +
      "</div>" +

      '<h2 class="sec">Ranks</h2><div class="card">' +
      window.RANKS.map(function (r, k) {
        var got = st.xp >= r.xp;
        return (
          '<div class="switch-row" style="opacity:' + (got ? 1 : 0.42) + '">' +
          "<div><div style=\"font-weight:800;font-size:14.5px\">" + r.icon + " " + esc(r.name) + "</div>" +
          '<div class="tiny">' + esc(r.blurb) + "</div></div>" +
          '<div class="tiny" style="white-space:nowrap">' + UI.fmt(r.xp) + " XP</div></div>"
        );
      }).join("") +
      "</div>" +

      '<h2 class="sec">Settings</h2><div class="card">' +
      '<div class="switch-row"><div><div style="font-weight:700">Sound</div><div class="tiny">Combo tones, hits and misses</div></div>' +
      '<div class="switch' + (st.settings.sound ? " on" : "") + '" id="sw-sound"></div></div>' +
      '<div class="switch-row"><div><div style="font-weight:700">Motion &amp; haptics</div><div class="tiny">Confetti, shakes, vibration</div></div>' +
      '<div class="switch' + (st.settings.motion ? " on" : "") + '" id="sw-motion"></div></div>' +
      '<div class="switch-row"><div><div style="font-weight:700">Export progress</div><div class="tiny">Copy your save data as JSON</div></div>' +
      '<button class="btn ghost small" id="bt-export">Copy</button></div>' +
      '<div class="switch-row"><div><div style="font-weight:700;color:var(--bad)">Wipe everything</div><div class="tiny">XP, mastery, vault, reps. No undo.</div></div>' +
      '<button class="btn ghost small" id="bt-reset">Reset</button></div>' +
      "</div>" +
      '<div class="credit">Progress is stored in this browser only. Nothing leaves your device.</div>';

    Array.prototype.forEach.call(document.querySelectorAll(".mcell"), function (c) {
      c.onclick = function () {
        UI.ruleSheet(parseInt(c.dataset.n, 10));
      };
    });

    document.getElementById("sw-sound").onclick = function () {
      st.settings.sound = !st.settings.sound;
      Store.save();
      this.classList.toggle("on", st.settings.sound);
      if (st.settings.sound) FX.play("select");
    };
    document.getElementById("sw-motion").onclick = function () {
      st.settings.motion = !st.settings.motion;
      Store.save();
      this.classList.toggle("on", st.settings.motion);
      FX.play("select");
    };
    document.getElementById("bt-export").onclick = function () {
      var data = JSON.stringify(Store.state);
      try {
        navigator.clipboard.writeText(data);
        FX.toast({ icon: "📋", title: "Copied to clipboard", body: (data.length / 1024).toFixed(1) + " KB of progress" });
      } catch (e) {
        UI.sheet('<h3>Your save data</h3><textarea class="pad" style="min-height:260px">' + esc(data) + "</textarea>" +
          '<button class="btn ghost" onclick="UI.closeSheet()" style="margin-top:12px">Close</button>');
      }
    };
    document.getElementById("bt-reset").onclick = function () {
      UI.sheet(
        "<h3>Wipe everything?</h3><p class=\"tiny\" style=\"margin:6px 0 16px\">Your XP, rank, mastery map, story vault and every saved Dojo rep will be deleted. There is no undo.</p>" +
        '<button class="btn" id="rs-yes" style="background:linear-gradient(135deg,var(--bad),#a3122c)">Yes, wipe it</button>' +
        '<button class="btn ghost" onclick="UI.closeSheet()" style="margin-top:9px">Cancel</button>'
      );
      document.getElementById("rs-yes").onclick = function () {
        Store.reset();
        UI.closeSheet();
        FX.play("fail");
        App.go("home");
        App.refreshChrome();
      };
    };
  }

  function labelFor(k) {
    return {
      rapid: "Rapid Fire",
      heresy: "Heresy",
      subject: "Subject Lines",
      triforce: "Triforce",
      commander: "Commander",
      campaign: "Campaign Q",
      research: "Field Research",
      gauntlet: "Gauntlet",
    }[k] || k;
  }

  window.Views = {
    home: home,
    codex: codex,
    dojo: dojo,
    progress: progress,
    manualSheet: manualSheet,
    MODES: MODES,
  };
})();
