/* Przebieg lekcji w stylu Duolingo: serca, ponawianie błędów, pasek postępu. */
(function () {
  "use strict";
  var W = window.Wykuj;
  var esc = W.esc;
  var Store = W.Store;

  /* opts: { mod, items, title, hearts (number|null), onExit(), onFinish(result) } */
  W.runSession = function (root, opts) {
    var m = opts.mod;
    var queue = opts.items.slice();
    var total = queue.length;
    var solved = 0;
    var firstTry = 0;
    var seen = {};
    var hearts = opts.hearts;
    var combo = 0, bestCombo = 0;
    var t0 = Date.now();
    var cur = null, ctrl = null, phase = "answer";

    root.innerHTML =
      '<div class="lesson">' +
      '<header class="l-top">' +
      '<button class="icon-btn" data-act="quit" aria-label="Zakończ lekcję">' + W.icon("x") + "</button>" +
      '<div class="lbar" role="progressbar" aria-label="Postęp lekcji"><i></i></div>' +
      (hearts != null ? '<div class="hearts" aria-label="Serca">' + W.icon("heart") + "<b></b></div>" : "") +
      "</header>" +
      '<div class="combo" hidden></div>' +
      '<main class="l-body"></main>' +
      '<footer class="l-foot"><div class="fb" hidden></div><div class="l-foot-row">' +
      '<button class="btn ghost" data-act="skip">Nie wiem</button>' +
      '<button class="btn primary" data-act="check" disabled>Sprawdź</button></div></footer>' +
      '<div class="modal" hidden><div class="modal-card"><h3>Przerwać lekcję?</h3><p>Postęp tej lekcji przepadnie. XP za poprawne odpowiedzi zostaje.</p>' +
      '<div class="row"><button class="btn primary" data-act="stay">Zostaję</button><button class="btn danger-ghost" data-act="leave">Wyjdź</button></div></div></div>' +
      "</div>";

    var $ = function (s) { return root.querySelector(s); };
    var body = $(".l-body"), foot = $(".l-foot"), fb = $(".fb"), btn = $('[data-act="check"]');
    var skip = $('[data-act="skip"]'), bar = $(".lbar i"), comboEl = $(".combo"), modal = $(".modal");

    function paint() {
      bar.style.width = Math.round((solved / total) * 100) + "%";
      if (hearts != null) $(".hearts b").textContent = hearts;
    }

    function next() {
      if (!queue.length) return finish(true);
      cur = queue.shift();
      phase = "answer";
      foot.className = "l-foot";
      fb.hidden = true;
      btn.textContent = "Sprawdź";
      btn.disabled = true;
      skip.hidden = false;
      var prompt = W.Ex.prompt(cur);
      body.innerHTML =
        '<div class="l-head"><span class="l-label">' + W.Ex.label(cur, m) + "</span>" + W.srcBadge(cur.s) +
        (seen[cur.id] ? '<span class="src src-redo">powtórka błędu</span>' : "") + "</div>" +
        (prompt ? '<h2 class="l-q">' + esc(prompt) + "</h2>" : "") +
        '<div class="l-ex"></div>';
      ctrl = W.Ex.render(cur, m, {
        change: function () {
          btn.disabled = !ctrl.ready();
        },
        submit: function () {
          if (ctrl.ready()) check();
        },
        done: function (ok) {
          check(ok);
        }
      });
      body.querySelector(".l-ex").appendChild(ctrl.el);
      if (ctrl.auto) {
        btn.hidden = true;
      } else {
        btn.hidden = false;
      }
      body.scrollTop = 0;
      paint();
    }

    function check(forced) {
      if (phase !== "answer") return;
      phase = "feedback";
      var g = ctrl.grade();
      var ok = forced === undefined ? g.ok : forced;
      if (forced === false && g.ok) ok = false;
      var retry = !!seen[cur.id];
      if (cur.id) Store.record(m.id, cur.id, ok);
      if (ok) {
        solved++;
        if (!retry) firstTry++;
        combo++;
        bestCombo = Math.max(bestCombo, combo);
        Store.addXP(retry ? 1 : 2);
        W.sound("correct", combo);
        W.buzz(10);
      } else {
        combo = 0;
        seen[cur.id] = true;
        if (hearts != null) hearts--;
        queue.push(cur);
        W.sound("wrong");
        W.buzz([30, 40, 30]);
        root.querySelector(".lesson").classList.add("shake");
        setTimeout(function () {
          var l = root.querySelector(".lesson");
          if (l) l.classList.remove("shake");
        }, 400);
      }
      if (combo >= 3 && combo % 1 === 0) {
        comboEl.hidden = false;
        comboEl.innerHTML = W.icon("flame") + combo + " z rzędu";
        comboEl.classList.remove("pop");
        void comboEl.offsetWidth;
        comboEl.classList.add("pop");
      } else {
        comboEl.hidden = true;
      }
      var praise = ["Świetnie!", "Dokładnie tak!", "Brawo!", "Zgadza się!", "Tak trzymaj!"];
      var head = ok ? praise[Math.floor(Math.random() * praise.length)] : "Poprawna odpowiedź:";
      var html = "<b class='fb-h'>" + W.icon(ok ? "check" : "x") + esc(head) + "</b>";
      if (!ok && g.correct) html += "<div class='fb-a'>" + g.correct + "</div>";
      if (g.note) html += "<p class='fb-x'>" + esc(g.note) + "</p>";
      if (cur.x) html += "<p class='fb-x'>" + esc(cur.x) + "</p>";
      fb.innerHTML = html;
      fb.hidden = false;
      foot.className = "l-foot " + (ok ? "ok" : "bad");
      skip.hidden = true;
      btn.hidden = false;
      btn.disabled = false;
      btn.textContent = "Dalej";
      paint();
      btn.focus({ preventScroll: true });
    }

    function finish(completed) {
      phase = "done";
      var secs = Math.round((Date.now() - t0) / 1000);
      var acc = total ? firstTry / total : 0;
      var res = {
        completed: completed && (hearts == null || hearts > 0),
        acc: acc,
        firstTry: firstTry,
        total: total,
        secs: secs,
        bestCombo: bestCombo,
        hearts: hearts
      };
      opts.onFinish(res);
    }

    function onClick(e) {
      var a = e.target.closest("[data-act]");
      if (!a) return;
      var act = a.dataset.act;
      if (act === "check") {
        if (phase === "answer") check();
        else if (phase === "feedback") {
          if (hearts != null && hearts <= 0) finish(false);
          else next();
        }
      } else if (act === "skip") {
        if (phase === "answer") check(false);
      } else if (act === "quit") {
        modal.hidden = false;
      } else if (act === "stay") {
        modal.hidden = true;
      } else if (act === "leave") {
        opts.onExit();
      }
    }
    root.addEventListener("click", onClick);

    W.setKeys(function (e) {
      if (!modal.hidden) {
        if (e.key === "Escape") modal.hidden = true;
        return;
      }
      if (e.key === "Escape") {
        modal.hidden = false;
        return;
      }
      if (e.key === "Enter") {
        if (e.target && e.target.tagName === "BUTTON") return;
        e.preventDefault();
        if (!btn.disabled && !btn.hidden) btn.click();
        return;
      }
      if (phase === "answer" && ctrl && ctrl.key && !(e.target && e.target.tagName === "INPUT")) ctrl.key(e.key);
    });

    next();
  };

  W.starsFor = function (acc) {
    return acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1;
  };

  W.starRow = function (n, max) {
    var s = "";
    for (var i = 0; i < (max || 3); i++) s += '<span class="st ' + (i < n ? "on" : "") + '">' + W.icon("star") + "</span>";
    return '<span class="stars">' + s + "</span>";
  };

  W.fmtTime = function (secs) {
    var m = Math.floor(secs / 60), s = secs % 60;
    return m + ":" + ("0" + s).slice(-2);
  };

  /* Ekran wyniku wspólny dla lekcji, quizów i gier. */
  W.resultScreen = function (root, o) {
    root.innerHTML =
      '<div class="result ' + (o.fail ? "fail" : "") + '">' +
      '<div class="r-hero">' +
      (o.stars != null ? '<div class="r-stars">' + W.starRow(o.stars) + "</div>" : "") +
      '<h1 class="display">' + esc(o.title) + "</h1>" +
      (o.sub ? '<p class="r-sub">' + esc(o.sub) + "</p>" : "") +
      "</div>" +
      '<div class="r-stats">' +
      o.stats
        .map(function (s) {
          return '<div class="r-stat ' + (s.tone || "") + '"><span>' + esc(s.label) + "</span><b>" + esc(s.value) + "</b></div>";
        })
        .join("") +
      "</div>" +
      (o.extra || "") +
      '<div class="r-actions">' +
      o.actions
        .map(function (a, i) {
          return '<button class="btn ' + (i === 0 ? "primary" : "ghost") + '" data-r="' + i + '">' + esc(a.label) + "</button>";
        })
        .join("") +
      "</div></div>";
    root.querySelectorAll("[data-r]").forEach(function (b) {
      b.addEventListener("click", function () {
        o.actions[+b.dataset.r].fn();
      });
    });
    W.setKeys(function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        o.actions[0].fn();
      }
    });
    if (!o.fail) {
      W.sound("finish");
      if (o.confetti) W.confetti();
    } else {
      W.sound("fail");
    }
    var first = root.querySelector('[data-r="0"]');
    if (first) first.focus({ preventScroll: true });
  };
})();
