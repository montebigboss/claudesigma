/* The three bespoke labs: Subject Line face-offs, the Triforce Judge, and
   Campaign Commander's frequency tables. */
(function () {
  "use strict";

  var esc = UI.esc;

  /* ==================================================== SUBJECT LINE LAB */
  function subjectLab(n) {
    n = n || 10;
    var items = UI.weighted(window.SUBJECT_PAIRS, n);
    var host = document.getElementById("view");
    var i = 0,
      correct = 0,
      combo = 0,
      best = 0,
      xpRun = 0,
      answered = false;

    host.innerHTML =
      '<div class="drill-head">' +
      '<button class="iconbtn" id="s-back">←</button>' +
      '<div class="progress-track"><i id="s-prog" style="width:0%"></i></div>' +
      '<div class="combo" id="s-combo">0×</div></div><div id="s-body"></div>';
    document.getElementById("s-back").onclick = function () {
      App.go("home");
    };
    var body = document.getElementById("s-body");
    var comboEl = document.getElementById("s-combo");

    function render() {
      answered = false;
      document.getElementById("s-prog").style.width = (i / items.length) * 100 + "%";
      var it = items[i];
      var flip = Math.random() < 0.5;
      var left = flip ? it.b : it.a;
      var right = flip ? it.a : it.b;
      // `flip` swaps which source line lands on which side.
      it._winSide = flip
        ? it.win === "a" ? "right" : "left"
        : it.win === "a" ? "left" : "right";

      body.innerHTML =
        '<div class="q-card"><div class="q-tag">Subject Line Lab · Rule #' +
        it.r +
        '</div><div class="q-text">Which one poses the better question?</div>' +
        '<div class="q-sub">Rule #56: a subject line sets up a question in the reader\'s mind and implies the answer is inside.</div></div>' +
        '<div class="opts">' +
        '<button class="opt" data-side="left"><span class="key">1</span><span>' +
        esc(left) +
        "</span></button>" +
        '<button class="opt" data-side="right"><span class="key">2</span><span>' +
        esc(right) +
        "</span></button></div><div id=\"s-verdict\"></div>" +
        '<div class="kbd-hint">Press 1 or 2 · Enter for next</div>';

      Array.prototype.forEach.call(body.querySelectorAll(".opt"), function (b) {
        b.onclick = function () {
          judge(b.dataset.side, b);
        };
      });
    }

    function keys(e) {
      if (!document.body.contains(body)) {
        document.removeEventListener("keydown", keys);
        return;
      }
      if (e.key === "Enter") {
        var nb = document.getElementById("s-next");
        if (nb) {
          e.preventDefault();
          nb.click();
        }
        return;
      }
      if (!answered && (e.key === "1" || e.key === "2")) {
        var b = body.querySelector('.opt[data-side="' + (e.key === "1" ? "left" : "right") + '"]');
        if (b) b.click();
      }
    }
    document.addEventListener("keydown", keys);

    function judge(side, btn) {
      if (answered) return;
      answered = true;
      var it = items[i];
      var right = side === it._winSide;
      Array.prototype.forEach.call(body.querySelectorAll(".opt"), function (b) {
        b.classList.add("locked");
        b.classList.add(b.dataset.side === it._winSide ? "right" : "wrong");
      });

      if (right) {
        correct++;
        combo++;
        if (combo > best) best = combo;
        var gain = 35 + Math.min(combo, 12) * 6;
        xpRun += gain;
        Store.addXP(gain);
        Store.noteCombo(combo);
        FX.play("correct", combo);
        FX.buzz(10);
        FX.floatText(btn, "+" + gain);
        if (combo >= 3) FX.burstFrom(btn, 16, 6);
        if (combo >= 12) Store.grant("subject-savant");
        Store.bumpMetric("subjectCorrect").forEach(function (d) {
          FX.toast({ icon: "🎯", title: "Daily quest complete", body: d.text + " · +" + d.xp + " XP", kind: "mint" });
        });
      } else {
        combo = 0;
        FX.play("wrong");
        FX.buzz(45);
        FX.shake(body.querySelector(".q-card"));
      }
      comboEl.textContent = combo + "×";
      comboEl.classList.toggle("hot", combo >= 8);
      Store.recordAnswer("subject", right, it.r);
      Store.bumpMetric("anyCorrect", right ? 1 : 0);

      document.getElementById("s-verdict").innerHTML =
        '<div class="verdict ' +
        (right ? "good" : "bad") +
        '"><div class="vh">' +
        (right ? "✅ Correct" : "❌ The other one") +
        '</div><div class="vb"><strong>The question it forms:</strong> “' +
        esc(it.q) +
        "”<br><br>" +
        esc(it.why) +
        '</div><span class="vr" onclick="UI.ruleSheet(' +
        it.r +
        ')">Read Rule #' +
        it.r +
        " →</span></div>" +
        '<button class="btn" id="s-next" style="margin-top:12px">' +
        (i + 1 >= items.length ? "See results →" : "Next →") +
        "</button>";
      document.getElementById("s-next").onclick = next;
      App.refreshChrome();
    }

    function next() {
      i++;
      if (i >= items.length) return finish();
      render();
    }

    function finish() {
      var acc = Math.round((correct / items.length) * 100);
      Store.state.stats.runs++;
      Store.save();
      Store.checkAch(correct === items.length && items.length >= 8 ? { flawless: true } : {});
      var streak = Store.touchStreak();
      FX.play("finish");
      if (acc >= 80) FX.rain(acc === 100 ? 120 : 55);
      host.innerHTML =
        '<div class="result"><div class="big">' +
        acc +
        '%</div><div class="lbl">subject lines called correctly</div><h3>' +
        (acc === 100 ? "You have the ear." : acc >= 70 ? "Solid instincts." : "Read #56 again.") +
        "</h3>" +
        '<div class="result-stats">' +
        '<div class="rs"><div class="v">' + correct + "/" + items.length + '</div><div class="k">Correct</div></div>' +
        '<div class="rs"><div class="v">' + best + '×</div><div class="k">Best combo</div></div>' +
        '<div class="rs"><div class="v">+' + UI.fmt(xpRun) + '</div><div class="k">XP earned</div></div></div>' +
        (streak ? '<div class="tiny" style="margin-top:12px">🔥 Streak now ' + Store.state.streak.count + " days</div>" : "") +
        '<div class="btn-row" style="margin-top:20px"><button class="btn ghost" id="sr-home">Home</button>' +
        '<button class="btn" id="sr-again">Again</button></div></div>';
      document.getElementById("sr-home").onclick = function () {
        App.go("home");
      };
      document.getElementById("sr-again").onclick = function () {
        subjectLab(n);
      };
      App.refreshChrome();
    }

    render();
  }

  /* ======================================================= TRIFORCE JUDGE */
  function triforce(n) {
    n = n || 8;
    var items = UI.pick(window.TRIFORCE, n);
    var host = document.getElementById("view");
    var i = 0,
      perfect = 0,
      xpRun = 0,
      picks = { rel: false, ent: false, brief: false },
      locked = false;

    host.innerHTML =
      '<div class="drill-head"><button class="iconbtn" id="t-back">←</button>' +
      '<div class="progress-track"><i id="t-prog" style="width:0%"></i></div>' +
      '<div class="combo" id="t-score">0</div></div><div id="t-body"></div>';
    document.getElementById("t-back").onclick = function () {
      App.go("home");
    };
    var body = document.getElementById("t-body");

    function render() {
      locked = false;
      picks = { rel: false, ent: false, brief: false };
      document.getElementById("t-prog").style.width = (i / items.length) * 100 + "%";
      var it = items[i];
      body.innerHTML =
        '<div class="q-card"><div class="q-tag">Triforce Judge · Rule #28</div>' +
        '<div class="q-text" style="font-size:17px">Score this lead. Tap everything it gets right.</div></div>' +
        '<div class="lead-quote">' + esc(it.lead) + "</div>" +
        '<div class="pivot-line">…then it pivots to: “' + esc(it.pitch) + "”</div>" +
        '<div class="tri-grid">' +
        tri("rel", "🎯", "Relevant", "to the pitch") +
        tri("ent", "🎭", "Entertaining", "worth the time") +
        tri("brief", "⚡", "Brief", "fast to read") +
        "</div>" +
        '<button class="btn" id="t-lock">Lock in verdict</button><div id="t-verdict"></div>';

      Array.prototype.forEach.call(body.querySelectorAll(".tri"), function (b) {
        b.onclick = function () {
          if (locked) return;
          var k = b.dataset.k;
          picks[k] = !picks[k];
          b.classList.toggle("on", picks[k]);
          FX.play("select");
        };
      });
      document.getElementById("t-lock").onclick = lockIn;
    }

    function tri(k, icon, name, hint) {
      return (
        '<button class="tri" data-k="' +
        k +
        '"><span class="ti">' +
        icon +
        '</span><span class="tn">' +
        name +
        '</span><div class="th">' +
        hint +
        "</div></button>"
      );
    }

    function lockIn() {
      if (locked) return;
      locked = true;
      var it = items[i];
      var keys = ["rel", "ent", "brief"];
      var hits = 0;
      keys.forEach(function (k) {
        var el = body.querySelector('.tri[data-k="' + k + '"]');
        var ok = picks[k] === it.truth[k];
        if (ok) hits++;
        el.classList.add(ok ? "reveal-right" : "reveal-wrong");
        el.classList.toggle("on", it.truth[k]);
      });
      var trueCount = keys.filter(function (k) {
        return it.truth[k];
      }).length;
      var allRight = hits === 3;
      if (allRight) {
        perfect++;
        var gain = 60;
        xpRun += gain;
        Store.addXP(gain);
        FX.play("correct", perfect);
        FX.burstFrom(body.querySelector(".tri-grid"), 22, 7);
        FX.floatText(body.querySelector(".tri-grid"), "+" + gain);
      } else {
        FX.play("wrong");
        FX.shake(body.querySelector(".tri-grid"));
        var partial = hits * 12;
        xpRun += partial;
        Store.addXP(partial);
      }
      FX.buzz(allRight ? 10 : 40);
      document.getElementById("t-score").textContent = perfect;
      Store.recordAnswer("triforce", allRight, it.r);
      Store.bumpMetric("anyCorrect", allRight ? 1 : 0);
      Store.bumpMetric("triforceCorrect", allRight ? 1 : 0).forEach(function (d) {
        FX.toast({ icon: "🎯", title: "Daily quest complete", body: d.text + " · +" + d.xp + " XP", kind: "mint" });
      });

      document.getElementById("t-lock").style.display = "none";
      document.getElementById("t-verdict").innerHTML =
        '<div class="verdict ' + (allRight ? "good" : "bad") + '">' +
        '<div class="vh">' +
        (allRight ? "✅ You read all three correctly" : "❌ You got " + hits + " of 3 calls right") +
        "</div>" +
        '<div class="vb"><strong>The lead scores ' + trueCount + "/3 — it " +
        (trueCount >= 2 ? "PASSES" : "FAILS") + ".</strong><br>" + esc(it.why) + "</div>" +
        '<span class="vr" onclick="UI.ruleSheet(28)">Read Rule #28 →</span></div>' +
        '<button class="btn" id="t-next" style="margin-top:12px">' +
        (i + 1 >= items.length ? "See results →" : "Next lead →") +
        "</button>";
      document.getElementById("t-next").onclick = function () {
        i++;
        if (i >= items.length) return finish();
        render();
      };
      App.refreshChrome();
    }

    function finish() {
      var acc = Math.round((perfect / items.length) * 100);
      Store.state.stats.runs++;
      Store.save();
      if (perfect === items.length && items.length >= 8) Store.grant("triforce");
      var streak = Store.touchStreak();
      FX.play("finish");
      if (acc >= 75) FX.rain(acc === 100 ? 110 : 45);
      host.innerHTML =
        '<div class="result"><div class="big">' + perfect + "/" + items.length +
        '</div><div class="lbl">leads judged perfectly</div><h3>' +
        (acc === 100 ? "Perfect ear for a lead." : acc >= 60 ? "Good instincts." : "Study #28.") + "</h3>" +
        '<div class="result-stats"><div class="rs"><div class="v">' + acc + '%</div><div class="k">Perfect calls</div></div>' +
        '<div class="rs"><div class="v">' + items.length + '</div><div class="k">Leads judged</div></div>' +
        '<div class="rs"><div class="v">+' + UI.fmt(xpRun) + '</div><div class="k">XP earned</div></div></div>' +
        (streak ? '<div class="tiny" style="margin-top:12px">🔥 Streak now ' + Store.state.streak.count + " days</div>" : "") +
        '<div class="btn-row" style="margin-top:20px"><button class="btn ghost" id="tr-home">Home</button>' +
        '<button class="btn" id="tr-again">Again</button></div></div>';
      document.getElementById("tr-home").onclick = function () {
        App.go("home");
      };
      document.getElementById("tr-again").onclick = function () {
        triforce(n);
      };
      App.refreshChrome();
    }

    render();
  }

  /* ==================================================== CAMPAIGN COMMANDER */
  function commander(n) {
    n = n || 8;
    var T = window.CAMPAIGN_TABLES;
    var rounds = [];
    for (var k = 0; k < n; k++) {
      var tol = T.tolerance[(Math.random() * T.tolerance.length) | 0];
      var agg = T.aggression[(Math.random() * T.aggression.length) | 0];
      var phase = Math.random() < 0.5 ? "postLaunch" : "finalDay";
      rounds.push({ tol: tol, agg: agg, phase: phase, ans: T[phase][tol.id][agg.id] });
    }

    var host = document.getElementById("view");
    var i = 0,
      correct = 0,
      xpRun = 0,
      locked = false;

    host.innerHTML =
      '<div class="drill-head"><button class="iconbtn" id="c-back">←</button>' +
      '<div class="progress-track"><i id="c-prog" style="width:0%"></i></div>' +
      '<div class="combo" id="c-score">0</div></div><div id="c-body"></div>';
    document.getElementById("c-back").onclick = function () {
      App.go("home");
    };
    var body = document.getElementById("c-body");

    var CHOICES = ["1", "1-2", "2", "2-3", "2-4", "3", "3-4", "3-5", "5-7"];

    function render() {
      locked = false;
      document.getElementById("c-prog").style.width = (i / rounds.length) * 100 + "%";
      var r = rounds[i];
      var opts = UI.shuffle(
        [r.ans].concat(
          UI.shuffle(
            CHOICES.filter(function (c) {
              return c !== r.ans;
            })
          ).slice(0, 3)
        )
      );
      body.innerHTML =
        '<div class="q-card"><div class="q-tag">Campaign Commander</div>' +
        '<div class="q-text">How many emails per day?</div>' +
        '<div class="q-sub">' +
        (r.phase === "finalDay"
          ? "It's the FINAL DAY of the sale. Cart closes tonight."
          : "You're in the middle stretch — post-launch, before the final day.") +
        "</div></div>" +
        '<div class="cmd-scenario">' +
        fact("Email tolerance", r.tol.name, r.tol.desc) +
        fact("Aggressiveness", r.agg.name.replace(" Aggressiveness", ""), r.agg.desc) +
        fact("Phase", r.phase === "finalDay" ? "Final day" : "Post-launch", "") +
        "</div>" +
        '<div class="cmd-opts">' +
        opts
          .map(function (o) {
            return '<button class="cmd-opt" data-v="' + o + '">' + o + "</button>";
          })
          .join("") +
        '</div><div id="c-verdict"></div>';

      Array.prototype.forEach.call(body.querySelectorAll(".cmd-opt"), function (b) {
        b.onclick = function () {
          judge(b.dataset.v, b);
        };
      });
    }

    function fact(k, v, desc) {
      return (
        '<div class="cmd-fact"><div><div class="k">' +
        esc(k) +
        "</div>" +
        (desc ? '<div class="tiny" style="max-width:34ch;margin-top:3px">' + esc(desc) + "</div>" : "") +
        '</div><div class="v">' +
        esc(v) +
        "</div></div>"
      );
    }

    function judge(val, btn) {
      if (locked) return;
      locked = true;
      var r = rounds[i];
      var right = val === r.ans;
      Array.prototype.forEach.call(body.querySelectorAll(".cmd-opt"), function (b) {
        b.classList.add("locked");
        if (b.dataset.v === r.ans) b.classList.add("right");
        else if (b === btn) b.classList.add("wrong");
      });
      if (right) {
        correct++;
        var gain = 45;
        xpRun += gain;
        Store.addXP(gain);
        FX.play("correct", correct);
        FX.burstFrom(btn, 16, 6);
        FX.floatText(btn, "+" + gain);
      } else {
        FX.play("wrong");
        FX.shake(body.querySelector(".cmd-opts"));
      }
      FX.buzz(right ? 10 : 40);
      document.getElementById("c-score").textContent = correct;
      Store.recordAnswer("commander", right, null);
      Store.bumpMetric("anyCorrect", right ? 1 : 0);
      Store.bumpMetric("campaignCorrect", right ? 1 : 0).forEach(function (d) {
        FX.toast({ icon: "🎯", title: "Daily quest complete", body: d.text + " · +" + d.xp + " XP", kind: "mint" });
      });

      document.getElementById("c-verdict").innerHTML =
        '<div class="verdict ' + (right ? "good" : "bad") + '">' +
        '<div class="vh">' + (right ? "✅ " : "❌ The answer is ") + r.ans + " email" + (r.ans === "1" ? "" : "s") + " per day</div>" +
        '<div class="vb">' + esc(r.tol.name) + " tolerance × " + esc(r.agg.name.replace(" Aggressiveness", "")) +
        " aggressiveness, " + (r.phase === "finalDay" ? "final day" : "post-launch") +
        ". Rule of thumb only — and beyond 5 a day, tie them together with a fun theme.</div></div>" +
        '<button class="btn" id="c-next" style="margin-top:12px">' +
        (i + 1 >= rounds.length ? "See results →" : "Next call →") + "</button>";
      document.getElementById("c-next").onclick = function () {
        i++;
        if (i >= rounds.length) return finish();
        render();
      };
      App.refreshChrome();
    }

    function finish() {
      var acc = Math.round((correct / rounds.length) * 100);
      Store.state.stats.runs++;
      Store.save();
      if (correct === rounds.length) Store.grant("commander");
      var streak = Store.touchStreak();
      FX.play("finish");
      if (acc >= 75) FX.rain(acc === 100 ? 110 : 45);
      host.innerHTML =
        '<div class="result"><div class="big">' + acc + '%</div><div class="lbl">frequency calls correct</div>' +
        "<h3>" + (acc === 100 ? "Field Marshal." : acc >= 60 ? "You know the table." : "Study the cheat sheet.") + "</h3>" +
        '<div class="result-stats"><div class="rs"><div class="v">' + correct + "/" + rounds.length + '</div><div class="k">Correct</div></div>' +
        '<div class="rs"><div class="v">+' + UI.fmt(xpRun) + '</div><div class="k">XP earned</div></div>' +
        '<div class="rs"><div class="v">' + Store.state.streak.count + '</div><div class="k">Day streak</div></div></div>' +
        '<div class="btn-row" style="margin-top:20px"><button class="btn ghost" id="cr-manual">See the table</button>' +
        '<button class="btn" id="cr-again">Again</button></div>' +
        '<button class="btn ghost" id="cr-home" style="margin-top:9px">Home</button></div>';
      document.getElementById("cr-again").onclick = function () {
        commander(n);
      };
      document.getElementById("cr-home").onclick = function () {
        App.go("home");
      };
      document.getElementById("cr-manual").onclick = function () {
        App.go("codex");
        setTimeout(function () {
          Views.manualSheet("caesar");
        }, 60);
      };
      App.refreshChrome();
      if (streak) {
        /* streak toast already handled by chrome refresh */
      }
    }

    render();
  }

  window.Labs = { subjectLab: subjectLab, triforce: triforce, commander: commander };
})();
