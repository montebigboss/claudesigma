/* Przewodnik po zaliczeniu przedmiotu i trener kartek egzaminacyjnych. */
(function () {
  "use strict";
  var W = window.Wykuj;
  var esc = W.esc;
  var Store = W.Store;
  var top = W.top;

  function courseInfo(id) {
    return W.courses().filter(function (c) { return c.course.id === id; })[0];
  }

  /* ================= Jak zdać ================= */

  W.screens.guide = function (root, p) {
    var g = W.guide(p.course);
    var info = courseInfo(p.course);
    var cs = Store.course(p.course);
    var known = g.theory.filter(function (t, i) { return cs.oral[i]; }).length;
    var inApp = g.theory.filter(function (t) { return t.mod; }).length;

    root.innerHTML =
      top(g.title, info.course.name) +
      '<div class="page guide">' +
      '<section class="g-sec"><h2 class="sec-h">Jak wygląda egzamin</h2>' +
      '<ol class="steps">' +
      g.steps.map(function (s) { return "<li><b>" + esc(s[0]) + "</b><span>" + s[1] + "</span></li>"; }).join("") +
      "</ol>" +
      '<ul class="shortcuts">' + g.shortcuts.map(function (s) { return "<li>" + s + "</li>"; }).join("") + "</ul>" +
      '<p class="g-note">' + esc(g.rulesNote) + "</p></section>" +

      '<section class="g-sec"><h2 class="sec-h">Kartki próbne <small>z rozwiązaniami</small></h2>' +
      '<p class="g-lead">Takie zadania losujesz na teście praktycznym. Rozwiąż na brudno, odsłoń rozwiązanie i oceń się uczciwie. Do części ustnej trzeba co najmniej 4 z 8.</p>' +
      '<div class="sheet-grid">' +
      g.sheets
        .map(function (s, i) {
          var best = cs.sheets[i];
          var fixes = s.tasks.filter(function (t) { return t.fix; }).length;
          return (
            '<button class="sheet-card" data-sheet="' + i + '"><span class="sc-name display">' + esc(s.name) + "</span>" +
            "<span>" + s.tasks.length + " zadań</span>" + (fixes ? '<span class="sc-fix">' + fixes + (fixes === 1 ? " poprawka" : fixes < 5 ? " poprawki" : " poprawek") + "</span>" : "") +
            '<span class="sc-best ' + (best == null ? "" : best >= 4 ? "pass" : "fail") + '">' + (best == null ? "Nie rozwiązana" : "Najlepiej: " + best + "/" + s.tasks.length) + "</span></button>"
          );
        })
        .join("") +
      "</div></section>" +

      '<section class="g-sec"><h2 class="sec-h">Pytania teoretyczne <small>' + known + "/" + g.theory.length + " umiem</small></h2>" +
      '<p class="g-lead">Lista od prowadzącej. ' + inApp + " tematy są już w aplikacji, z gotowym szkieletem odpowiedzi ustnej. Resztę obejmą kolejne wykłady (w nawiasie rozdział konspektu).</p>" +
      '<ol class="theory">' +
      g.theory
        .map(function (t, i) {
          var tick = '<label class="switch th-ok"><input type="checkbox" id="th-' + i + '" data-th="' + i + '"' + (cs.oral[i] ? " checked" : "") + "/><span></span>umiem</label>";
          if (t.oral) {
            return (
              '<li class="th in"><details><summary><span class="th-q">' + esc(t.q) + '</span><span class="th-tag">w aplikacji</span></summary>' +
              '<div class="th-body"><p class="th-k">Szkielet odpowiedzi ustnej</p><p>' + t.oral + "</p>" +
              '<div class="row"><button class="btn ghost" data-mod="' + t.mod + '">Ćwicz w module</button>' + tick + "</div></div></details></li>"
            );
          }
          return (
            '<li class="th"><div class="th-line"><span class="th-q">' + esc(t.q) + '</span><span class="th-tag later">konspekt ' + esc(t.ks) + "</span></div>" + tick + "</li>"
          );
        })
        .join("") +
      "</ol></section></div>";

    root.addEventListener("click", function (e) {
      var s = e.target.closest("[data-sheet]");
      if (s) return W.go("sheet", { course: p.course, sheet: +s.dataset.sheet });
      var m = e.target.closest("[data-mod]");
      if (m) return W.go("module", { mod: m.dataset.mod });
    });
    root.addEventListener("change", function (e) {
      var k = e.target.dataset.th;
      if (k == null) return;
      cs.oral[k] = e.target.checked;
      Store.save();
      root.querySelector(".theory").closest(".g-sec").querySelector(".sec-h small").textContent =
        g.theory.filter(function (t, i) { return cs.oral[i]; }).length + "/" + g.theory.length + " umiem";
    });
  };

  /* ================= Kartka próbna ================= */

  W.screens.sheet = function (root, p) {
    var g = W.guide(p.course);
    var sheet = g.sheets[p.sheet];
    var tasks = sheet.tasks;
    var i = 0, score = 0, revealed = false;

    function render() {
      var t = tasks[i];
      revealed = false;
      root.innerHTML =
        top(sheet.name, "Zadanie " + (i + 1) + " z " + tasks.length, '<span class="clock">' + score + " pkt</span>") +
        '<div class="page sheet">' +
        '<div class="lbar slim"><i style="width:' + Math.round((i / tasks.length) * 100) + '%"></i></div>' +
        '<article class="task"><span class="task-n display">' + (i + 1) + "</span>" +
        '<h2 class="task-q">' + esc(t.q) + "</h2>" +
        '<div class="task-tags"><span class="th-tag">' + esc(t.topic) + '</span><span class="th-tag later">konspekt ' + esc(t.ks) + "</span>" +
        (t.mod ? '<span class="th-tag">jest w aplikacji</span>' : "") + "</div></article>" +
        '<label class="draft-l" for="draft-' + p.sheet + "-" + i + '">Twoja odpowiedź na brudno (nikt jej nie sprawdza, pomaga się zmierzyć)</label>' +
        '<textarea id="draft-' + p.sheet + "-" + i + '" class="draft" rows="3" placeholder="Napisz albo pomyśl odpowiedź…"></textarea>' +
        '<div class="reveal" hidden>' +
        '<div class="answer"><p class="ans-k">Rozwiązanie' + (t.unsure ? ' <span class="src src-d">niepewne</span>' : "") + "</p><p>" + t.a + "</p></div>" +
        (t.steps ? '<div class="how"><p class="ans-k">Jak to robić</p><p>' + esc(t.steps) + "</p></div>" : "") +
        (t.fix ? '<div class="fixnote"><p class="ans-k">Uwaga na krążącą odpowiedź</p><p>' + t.fix + "</p></div>" : "") +
        "</div>" +
        '<div class="sheet-act"><button class="btn primary big" data-a="show">Pokaż rozwiązanie</button></div>' +
        "</div>";
      root.querySelector('[data-a="show"]').onclick = reveal;
    }

    function reveal() {
      if (revealed) return;
      revealed = true;
      W.sound("flip");
      root.querySelector(".reveal").hidden = false;
      root.querySelector(".sheet-act").innerHTML =
        '<p class="self-k">Jak ci poszło?</p><div class="grade two">' +
        '<button class="btn g-again" data-g="0">Miałem źle</button><button class="btn g-good" data-g="1">Miałem dobrze</button></div>';
      root.querySelector(".grade").addEventListener("click", function (e) {
        var b = e.target.closest("[data-g]");
        if (!b) return;
        if (b.dataset.g === "1") {
          score++;
          W.sound("correct", score);
        } else {
          W.sound("wrong");
        }
        i++;
        if (i < tasks.length) render();
        else end();
      });
      root.querySelector(".reveal").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function end() {
      var cs = Store.course(p.course);
      var prev = cs.sheets[p.sheet];
      if (prev == null || score > prev) cs.sheets[p.sheet] = score;
      var xp = score * 2 + 3;
      Store.addXP(xp);
      var pass = score >= 4;
      W.resultScreen(root, {
        fail: !pass,
        title: score + "/" + tasks.length,
        sub: score === tasks.length
          ? "Bezbłędnie. Na egzaminie dostałbyś tylko 1 pytanie teoretyczne."
          : pass ? "Wystarczy, żeby przejść do części ustnej." : "Za mało do części ustnej (potrzeba co najmniej 4).",
        confetti: pass,
        stats: [
          { label: "Wynik", value: pass ? "Dopuszczenie" : "Brak dopuszczenia", tone: pass ? "good" : "bad" },
          { label: "Próg", value: "4 / 8" },
          { label: "XP", value: "+" + xp, tone: "gold" }
        ],
        actions: [
          { label: "Wróć do przewodnika", fn: function () { W.back(); } },
          { label: "Jeszcze raz tę kartkę", fn: function () { W.go("sheet", p, { replace: true }); } }
        ]
      });
    }

    W.setKeys(function (e) {
      if (e.target && e.target.tagName === "TEXTAREA") return;
      if (e.key === "Enter" || e.key === " ") {
        if (!revealed) {
          e.preventDefault();
          reveal();
        }
      }
    });
    render();
  };
})();
