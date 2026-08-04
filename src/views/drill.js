/* The shared quiz runner: Rapid Fire, Heresy, Field Research, Campaign
   Commander scenarios and the Gauntlet all run through here. */
(function () {
  "use strict";

  var esc = UI.esc;

  function run(cfg) {
    var host = document.getElementById("view");
    var items = cfg.items;
    var i = 0,
      correct = 0,
      combo = 0,
      bestCombo = 0,
      lives = cfg.lives || 0,
      livesLeft = lives,
      xpRun = 0,
      answered = false,
      startedAt = Date.now(),
      recentCorrectTimes = [],
      timerId = null;

    host.innerHTML =
      '<div class="drill-head">' +
      '<button class="iconbtn" id="d-back" aria-label="Quit">←</button>' +
      (lives ? '<div class="hp" id="d-hp"></div>' : "") +
      '<div class="progress-track"><i id="d-prog" style="width:0%"></i></div>' +
      '<div class="combo" id="d-combo">0×</div>' +
      "</div>" +
      (cfg.seconds ? '<div class="timer-track"><i id="d-timer" style="width:100%"></i></div>' : "") +
      '<div id="d-body"></div>';

    document.getElementById("d-back").onclick = function () {
      stopTimer();
      App.go(cfg.backTo || "home");
    };

    var body = document.getElementById("d-body");
    var comboEl = document.getElementById("d-combo");
    var progEl = document.getElementById("d-prog");

    function drawHP() {
      if (!lives) return;
      var el = document.getElementById("d-hp");
      var s = "";
      for (var k = 0; k < lives; k++)
        s += "<i" + (k >= livesLeft ? ' class="gone"' : "") + ">❤️</i>";
      el.innerHTML = s;
    }

    function stopTimer() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    /* The player can leave mid-run via the tab bar, which throws away our
       DOM. Anything asynchronous has to check it's still on screen first. */
    function alive() {
      return document.body.contains(body);
    }

    function startTimer() {
      if (!cfg.seconds) return;
      stopTimer();
      var bar = document.getElementById("d-timer");
      var end = Date.now() + cfg.seconds * 1000;
      timerId = setInterval(function () {
        if (!alive() || !bar) return stopTimer();
        var left = end - Date.now();
        bar.style.width = Math.max(0, (left / (cfg.seconds * 1000)) * 100) + "%";
        if (left <= 0) {
          stopTimer();
          if (!answered) answer(-1, null);
        }
      }, 50);
    }

    function render() {
      answered = false;
      progEl.style.width = (i / items.length) * 100 + "%";
      drawHP();
      var it = items[i];
      var card, opts;

      if (it._kind === "binary") {
        card =
          '<div class="q-card"><div class="q-tag">Throssell doctrine — or heresy?</div>' +
          '<div class="q-text">“' + esc(it.s) + '”</div></div>';
        opts =
          '<div class="opts">' +
          '<button class="opt" data-i="0"><span class="key">1</span><span>✅ &nbsp;Throssell would say this</span></button>' +
          '<button class="opt" data-i="1"><span class="key">2</span><span>🔥 &nbsp;Heresy. Burn it.</span></button>' +
          "</div>";
      } else {
        var o = it._opts;
        opts =
          '<div class="opts">' +
          o
            .map(function (t, k) {
              return (
                '<button class="opt" data-i="' +
                k +
                '"><span class="key">' +
                (k + 1) +
                "</span><span>" +
                esc(t) +
                "</span></button>"
              );
            })
            .join("") +
          "</div>";
        card =
          '<div class="q-card"><div class="q-tag">' +
          esc(it._tag || cfg.tag || "Question") +
          '</div><div class="q-text">' +
          esc(it.q) +
          "</div></div>";
      }

      body.innerHTML =
        card + opts + '<div id="d-verdict"></div>' +
        '<div class="kbd-hint">Press 1-4 to answer · Enter for next</div>';

      Array.prototype.forEach.call(body.querySelectorAll(".opt"), function (b) {
        b.onclick = function () {
          answer(parseInt(b.dataset.i, 10), b);
        };
      });
      startTimer();
    }

    function answer(chosen, btn) {
      if (answered || !alive()) return;
      answered = true;
      stopTimer();
      var it = items[i];
      var right, correctIdx;

      if (it._kind === "binary") {
        correctIdx = it.t ? 0 : 1;
      } else {
        correctIdx = it._answerIdx;
      }
      right = chosen === correctIdx;

      var btns = body.querySelectorAll(".opt");
      Array.prototype.forEach.call(btns, function (b, k) {
        b.classList.add("locked");
        if (k === correctIdx) b.classList.add("right");
        else if (k === chosen) b.classList.add("wrong");
        else b.classList.add("faded");
      });

      if (right) {
        correct++;
        combo++;
        if (combo > bestCombo) bestCombo = combo;
        var gain = 30 + Math.min(combo, 12) * 6;
        if (cfg.seconds) gain += 10;
        xpRun += gain;
        Store.addXP(gain);
        Store.noteCombo(combo);
        FX.play("correct", combo);
        FX.buzz(10);
        if (btn) {
          FX.floatText(btn, "+" + gain, "");
          if (combo >= 3) FX.burstFrom(btn, 14 + combo, 5 + Math.min(combo, 8));
        }
        if (combo > 0 && combo % 5 === 0) {
          FX.play("combo");
          FX.toast({ icon: "⚡", title: combo + "× combo!", body: "Multiplier climbing.", kind: "gold", ms: 1700 });
        }
        recentCorrectTimes.push(Date.now());
        recentCorrectTimes = recentCorrectTimes.filter(function (t) {
          return Date.now() - t < 60000;
        });
        if (recentCorrectTimes.length >= 8) Store.grant("eight-emails");
        comboEl.classList.add("pop");
        setTimeout(function () {
          comboEl.classList.remove("pop");
        }, 150);
      } else {
        combo = 0;
        livesLeft--;
        FX.play("wrong");
        FX.buzz(45);
        FX.shake(body.querySelector(".q-card"));
        if (btn) FX.floatText(btn, "✗", "bad");
      }

      comboEl.textContent = combo + "×";
      comboEl.classList.toggle("hot", combo >= 8);

      Store.recordAnswer(cfg.mode, right, it.r);
      Store.bumpMetric("anyCorrect", right ? 1 : 0);
      if (cfg.metric && right) {
        var done = Store.bumpMetric(cfg.metric);
        done.forEach(questToast);
      }

      showVerdict(it, right);
      App.refreshChrome();

      if (lives && livesLeft <= 0) {
        drawHP();
        setTimeout(function () {
          if (alive()) finish(true);
        }, 1500);
      }
    }

    function questToast(def) {
      FX.play("achievement");
      FX.toast({ icon: "🎯", title: "Daily quest complete", body: def.text + " · +" + def.xp + " XP", kind: "mint" });
    }

    function showVerdict(it, right) {
      var v = document.getElementById("d-verdict");
      var ruleLink = it.r
        ? '<span class="vr" onclick="UI.ruleSheet(' + it.r + ')">Read Rule #' + it.r + " →</span>"
        : "";
      v.innerHTML =
        '<div class="verdict ' +
        (right ? "good" : "bad") +
        '"><div class="vh">' +
        (right ? "✅ Correct" : "❌ Not quite") +
        (it._kind === "binary" && !right
          ? " — it's " + (it.t ? "doctrine" : "heresy")
          : "") +
        '</div><div class="vb">' +
        esc(it.why) +
        "</div>" +
        ruleLink +
        "</div>" +
        '<button class="btn" id="d-next" style="margin-top:12px">' +
        (i + 1 >= items.length ? "See results →" : "Next →") +
        "</button>";
      document.getElementById("d-next").onclick = next;
      document.getElementById("d-next").focus();
    }

    function next() {
      if (lives && livesLeft <= 0) return finish(true);
      i++;
      if (i >= items.length) return finish(false);
      render();
    }

    function finish(died) {
      stopTimer();
      progEl.style.width = "100%";
      var secs = Math.round((Date.now() - startedAt) / 1000);
      var acc = i === 0 ? 0 : Math.round((correct / Math.max(1, died ? i + 1 : items.length)) * 100);
      var st = Store.state;
      st.stats.runs++;
      var ctx = {};
      if (!died && correct === items.length && items.length >= 8) ctx.flawless = true;
      if (cfg.mode === "gauntlet") {
        if (!died) {
          st.stats.gauntlets++;
          ctx.gauntlet = true;
          if (livesLeft === lives) ctx.gauntletPerfect = true;
        }
      }
      if (cfg.mode === "heresy" && acc >= 90 && items.length >= 10) ctx.ach = "heresy-hunter";
      if (cfg.mode === "campaign" && !died && correct === items.length) ctx.ach = "commander";
      Store.save();
      Store.checkAch(ctx);

      var newStreak = Store.touchStreak();
      var perfect = correct === items.length;

      if (died) {
        FX.play("fail");
      } else {
        FX.play("finish");
        if (perfect) FX.rain(120);
        else if (acc >= 70) FX.rain(50);
      }

      var host2 = document.getElementById("view");
      host2.innerHTML =
        '<div class="result">' +
        '<div class="big">' + acc + "%</div>" +
        '<div class="lbl">' + (died ? "You ran out of lives" : "accuracy") + "</div>" +
        "<h3>" +
        (died
          ? "Down but not out"
          : perfect
          ? "Flawless."
          : acc >= 80
          ? "Sharp work."
          : acc >= 50
          ? "Getting there."
          : "Back to the Codex.") +
        "</h3>" +
        '<div class="result-stats">' +
        '<div class="rs"><div class="v">' + correct + "/" + (died ? i + 1 : items.length) + '</div><div class="k">Correct</div></div>' +
        '<div class="rs"><div class="v">' + bestCombo + '×</div><div class="k">Best combo</div></div>' +
        '<div class="rs"><div class="v">+' + UI.fmt(xpRun) + '</div><div class="k">XP earned</div></div>' +
        "</div>" +
        (newStreak
          ? '<div class="tiny" style="margin-top:12px">🔥 Streak extended to ' + Store.state.streak.count + " day" + (Store.state.streak.count === 1 ? "" : "s") + "</div>"
          : "") +
        '<div class="tiny" style="margin-top:8px">' + secs + "s · " + UI.fmt(Store.state.xp) + " XP total</div>" +
        '<div class="btn-row" style="margin-top:20px">' +
        '<button class="btn ghost" id="r-home">Home</button>' +
        '<button class="btn" id="r-again">Run it again</button>' +
        "</div></div>";

      document.getElementById("r-home").onclick = function () {
        App.go(cfg.backTo || "home");
      };
      document.getElementById("r-again").onclick = cfg.again;
      App.refreshChrome();
    }

    /* keyboard */
    function keys(e) {
      if (!document.getElementById("d-body")) {
        document.removeEventListener("keydown", keys);
        return;
      }
      if (e.key === "Enter") {
        var nb = document.getElementById("d-next");
        if (nb) {
          e.preventDefault();
          nb.click();
        }
        return;
      }
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= 4 && !answered) {
        var b = body.querySelector('.opt[data-i="' + (n - 1) + '"]');
        if (b) b.click();
      }
    }
    document.addEventListener("keydown", keys);

    render();
  }

  /* ------------------------------------------------------------ builders */

  function prepMCQ(item, tag) {
    var it = Object.create(item);
    var pairs = item.o.map(function (t, k) {
      return { t: t, k: k };
    });
    var sh = UI.shuffle(pairs);
    it._opts = sh.map(function (p) {
      return p.t;
    });
    it._answerIdx = sh.findIndex(function (p) {
      return p.k === item.a;
    });
    it._tag = tag;
    return it;
  }

  function prepBinary(item) {
    var it = Object.create(item);
    it._kind = "binary";
    return it;
  }

  window.Drills = {
    rapidFire: function (n) {
      n = n || 12;
      var picked = UI.weighted(window.RAPID_FIRE, n);
      run({
        mode: "rapid",
        metric: "rapidCorrect",
        seconds: 20,
        items: picked.map(function (x) {
          return prepMCQ(x, "Rule #" + x.r);
        }),
        again: function () {
          Drills.rapidFire(n);
        },
      });
    },
    heresy: function (n) {
      n = n || 15;
      var picked = UI.weighted(window.HERESY, n);
      run({
        mode: "heresy",
        metric: "heresyCorrect",
        seconds: 12,
        items: picked.map(prepBinary),
        again: function () {
          Drills.heresy(n);
        },
      });
    },
    research: function (n) {
      n = n || 10;
      var picked = UI.pick(window.RESEARCH_Q, n);
      run({
        mode: "research",
        metric: "researchCorrect",
        tag: "Market Detective",
        items: picked.map(function (x) {
          return prepMCQ(x, "Field Manual");
        }),
        again: function () {
          Drills.research(n);
        },
      });
    },
    campaignQ: function (n) {
      n = n || 10;
      var picked = UI.pick(window.CAMPAIGN_Q, n);
      run({
        mode: "campaign",
        metric: "campaignCorrect",
        tag: "Campaign Conqueror",
        items: picked.map(function (x) {
          return prepMCQ(x, "Campaign Conqueror");
        }),
        again: function () {
          Drills.campaignQ(n);
        },
      });
    },
    gauntlet: function () {
      var pool = []
        .concat(
          UI.pick(window.RAPID_FIRE, 10).map(function (x) {
            return prepMCQ(x, "Rule #" + x.r);
          })
        )
        .concat(UI.pick(window.HERESY, 8).map(prepBinary))
        .concat(
          UI.pick(window.CAMPAIGN_Q, 4).map(function (x) {
            return prepMCQ(x, "Campaign Conqueror");
          })
        )
        .concat(
          UI.pick(window.RESEARCH_Q, 3).map(function (x) {
            return prepMCQ(x, "Field Manual");
          })
        );
      run({
        mode: "gauntlet",
        seconds: 15,
        lives: 3,
        items: UI.shuffle(pool),
        again: Drills.gauntlet,
      });
    },
    run: run,
  };
})();
