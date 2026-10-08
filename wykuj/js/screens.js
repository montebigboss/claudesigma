/* Ekrany: start, moduł, ścieżka, lekcja, poprawki, notatki, profil. */
(function () {
  "use strict";
  var W = window.Wykuj;
  var esc = W.esc;
  var Store = W.Store;
  var top = W.top;

  function pct(x) {
    return Math.round(x * 100) + "%";
  }

  function ring(value, max, label) {
    var r = 26, c = 2 * Math.PI * r, f = Math.min(1, value / max);
    return (
      '<div class="ring" role="img" aria-label="' + esc(label) + '"><svg viewBox="0 0 64 64">' +
      '<circle cx="32" cy="32" r="' + r + '" class="ring-bg"/>' +
      '<circle cx="32" cy="32" r="' + r + '" class="ring-fg" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - f)).toFixed(1) + '"/>' +
      '</svg><span><b>' + value + "</b>/" + max + "</span></div>"
    );
  }

  function cloudBadge() {
    var s = Store.cloud;
    if (s === "off") return "";
    var t = { syncing: "Zapisuję…", ok: "Postępy w chmurze", local: "Tylko na tym urządzeniu" }[s];
    return '<span class="cloud ' + s + '" title="' + t + '">' + W.icon("cloud") + "</span>";
  }

  /* ================= Start ================= */

  W.screens.home = function (root) {
    var st = Store.state;
    var rk = W.rank(st.xp);
    var streak = Store.streakAlive();
    var today = Store.todayXP();
    var courses = W.courses("wyk");
    var cw = W.courses("cw");
    var tab = st.settings.homeTab === "cw" && cw.length ? "cw" : "wyk";
    var focus = W.lastModule();
    var nu = W.nextUnit(focus);
    var dueN = Store.dueCards(focus).length + Math.min(8, Store.newCards(focus).length);
    var misN = W.mistakes(focus).length;
    var filter = st.settings.homeCourse || "all";
    if (filter !== "all" && !courses.some(function (c) { return c.course.id === filter; })) filter = "all";
    var th = "theme-" + focus.course.theme;
    var tag = esc(focus.course.short) + " · " + esc(W.modLabel(focus));

    function coursePct(c) {
      var sum = 0;
      c.modules.forEach(function (m) { sum += W.progress(m).pct; });
      return sum / c.modules.length;
    }

    function modCard(m) {
      var pr = W.progress(m);
      return (
        '<button class="modcard" data-go="module" data-mod="' + m.id + '"><span class="mc-num">' + m.number + "</span>" +
        '<span class="mc-body"><small>' + esc(W.modLabel(m)) + "</small><b>" + esc(m.title) + "</b>" +
        (m.byline ? '<span class="mc-by">' + esc(m.byline) + "</span>" : "") +
        '<span class="mc-bar"><i style="width:' + pct(pr.pct) + '"></i></span>' +
        '<span class="mc-meta">' + pct(pr.pct) + " opanowane · " + pr.stars + "/" + pr.maxStars + " gwiazdek</span></span></button>"
      );
    }

    function ghost(n, label, title, meta) {
      return (
        '<div class="modcard ghost"><span class="mc-num">' + n + '</span><span class="mc-body"><small>' + esc(label) +
        "</small><b>" + esc(title) + '</b><span class="mc-meta">' + esc(meta) + "</span></span></div>"
      );
    }

    /* Wykłady: przedmiot → wykłady. */
    function lectures() {
      return (
        '<div class="filter" role="group" aria-label="Filtr przedmiotów">' +
        '<button data-filter="all" class="' + (filter === "all" ? "on" : "") + '">Wszystkie</button>' +
        courses
          .map(function (c) {
            return '<button data-filter="' + c.course.id + '" class="theme-' + c.course.theme + (filter === c.course.id ? " on" : "") + '"><i class="fdot"></i>' + esc(c.course.short) + "</button>";
          })
          .join("") +
        "</div>" +
        courses
          .map(function (c) {
            var n = c.modules.length;
            return (
              '<section class="course theme-' + c.course.theme + '" data-course="' + c.course.id + '"' + (filter !== "all" && filter !== c.course.id ? " hidden" : "") + ">" +
              '<div class="course-h"><span class="course-ic">' + W.icon(c.course.icon) + "</span><div><h3>" + esc(c.course.name) + "</h3><small>" +
              n + (n === 1 ? " wykład" : n < 5 ? " wykłady" : " wykładów") + " · " + pct(coursePct(c)) + " opanowane</small></div>" +
              (W.guide(c.course.id) ? '<button class="guide-btn" data-guide="' + c.course.id + '">' + W.icon("target") + "Jak zdać</button>" : "") + "</div>" +
              '<div class="mods">' + c.modules.map(modCard).join("") +
              ghost(n + 1, "Wykład " + (n + 1), "Kolejny wykład", "Pojawi się tu, gdy dodasz materiały z następnych zajęć.") +
              "</div></section>"
            );
          })
          .join("")
      );
    }

    /* Ćwiczenia: prowadzący (z grupami) → półka (np. lektury i czytanki) → materiały. */
    function exercises() {
      return cw
        .map(function (c) {
          var shelves = [], byShelf = {};
          c.modules.forEach(function (m) {
            var k = m.shelf || "Materiały";
            if (!byShelf[k]) {
              byShelf[k] = [];
              shelves.push(k);
            }
            byShelf[k].push(m);
          });
          return (
            '<section class="course cw theme-' + c.course.theme + '" data-course="' + c.course.id + '">' +
            '<div class="course-h"><span class="course-ic">' + W.icon(c.course.icon) + "</span><div><h3>" + esc(c.course.name) + "</h3><small>" +
            (c.course.groups ? esc(c.course.groups) + " · " : "") + pct(coursePct(c)) + " opanowane</small></div></div>" +
            shelves
              .map(function (k) {
                var list = byShelf[k], n = list.length;
                return (
                  '<div class="shelf"><h4 class="shelf-h">' + W.icon("book") + "<span>" + esc(k) + "</span><small>" + n + "</small></h4>" +
                  '<div class="mods">' + list.map(modCard).join("") +
                  ghost(n + 1, "Czytanka " + (n + 1), "Kolejna czytanka", "Wrzuć zdjęcia następnego tekstu, a pojawi się tutaj ze streszczeniem i ćwiczeniami.") +
                  "</div></div>"
                );
              })
              .join("") +
            "</section>"
          );
        })
        .join("");
    }

    root.innerHTML =
      '<header class="apphead">' +
      '<div class="brand"><span class="brand-mark">' + W.icon("pencil") + '</span><span class="display">Wykuj</span></div>' +
      '<div class="hstats">' + cloudBadge() +
      '<span class="hs streak ' + (streak ? "on" : "") + '" title="Seria dni">' + W.icon("flame") + "<b>" + streak + "</b></span>" +
      '<span class="hs xp" title="Łącznie XP">' + W.icon("gem") + "<b>" + st.xp + "</b></span>" +
      '<button class="icon-btn" data-go="profile" aria-label="Profil">' + W.icon("user") + "</button></div></header>" +
      '<div class="page home">' +
      '<section class="today">' +
      ring(today, st.goal, "Dzisiejsze XP") +
      '<div class="today-txt"><p class="eyebrow">Dzisiaj</p><h1 class="display">' +
      (today >= st.goal ? "Cel dnia zaliczony." : streak ? "Seria trwa: " + W.days(streak) + "." : "Zacznij serię.") +
      "</h1><p>" +
      (today >= st.goal ? "Każda kolejna powtórka to bonus dla pamięci." : "Brakuje " + (st.goal - today) + " XP do dziennego celu.") +
      '</p><div class="rankline"><span>' + esc(rk.name) + " · poz. " + rk.level + '</span><div class="rbar"><i style="width:' + pct(rk.pct) + '"></i></div>' +
      (rk.nextName ? "<span>" + esc(rk.nextName) + "</span>" : "") + "</div></div></section>" +
      '<div class="focus ' + th + '">' +
      '<p class="focus-k">' + W.icon(focus.course.icon) + "Ostatnio: " + esc(focus.course.name) + "</p>" +
      (nu >= 0
        ? '<button class="cta" data-lesson="' + focus.id + ":" + nu + '"><span class="cta-ic">' + W.icon(focus.units[nu].icon) + "</span>" +
          '<span class="cta-t"><small>' + tag + " · lekcja " + (nu + 1) + "/" + focus.units.length + "</small><b>" +
          esc(focus.units[nu].title) + "</b><span>" + esc(focus.units[nu].sub) + '</span></span><span class="cta-go">Dalej</span></button>'
        : '<button class="cta done" data-go="exam" data-mod="' + focus.id + '"><span class="cta-ic">' + W.icon("crown") + '</span><span class="cta-t"><small>' + tag +
          " · ścieżka ukończona</small><b>Sprawdź się na egzaminie próbnym</b><span>20 pytań zamkniętych</span></span><span class=\"cta-go\">Start</span></button>") +
      '<div class="todo">' +
      '<button class="todo-i" data-go="cards" data-mod="' + focus.id + '">' + W.icon("cards") + "<span><b>" + dueN + "</b> fiszek na dziś</span></button>" +
      '<button class="todo-i" data-go="review" data-mod="' + focus.id + '"' + (misN ? "" : " disabled") + ">" + W.icon("redo") + "<span><b>" + misN + "</b> " + (misN === 1 ? "błąd" : "błędów") + " do poprawki</span></button>" +
      "</div></div>" +
      '<section class="subjects">' +
      (cw.length
        ? '<div class="hometabs" role="tablist" aria-label="Rodzaj zajęć">' +
          '<button role="tab" data-tab="wyk" aria-selected="' + (tab === "wyk") + '" class="' + (tab === "wyk" ? "on" : "") + '">' + W.icon("column") + "Wykłady<small>" + courses.length + "</small></button>" +
          '<button role="tab" data-tab="cw" aria-selected="' + (tab === "cw") + '" class="' + (tab === "cw" ? "on" : "") + '">' + W.icon("pencil") + "Ćwiczenia<small>" + cw.length + "</small></button></div>"
        : '<div class="subj-head"><h2 class="display">Przedmioty</h2><span>' + courses.length + "</span></div>") +
      '<div class="tabpane" data-pane="wyk"' + (tab === "wyk" ? "" : " hidden") + ">" + lectures() + "</div>" +
      (cw.length ? '<div class="tabpane" data-pane="cw"' + (tab === "cw" ? "" : " hidden") + ">" + exercises() + "</div>" : "") +
      "</section></div>";

    root.addEventListener("click", function (e) {
      var tb = e.target.closest("[data-tab]");
      if (tb) {
        st.settings.homeTab = tb.dataset.tab;
        Store.save();
        root.querySelectorAll("[data-tab]").forEach(function (b) {
          b.classList.toggle("on", b === tb);
          b.setAttribute("aria-selected", b === tb);
        });
        root.querySelectorAll("[data-pane]").forEach(function (pn) { pn.hidden = pn.dataset.pane !== tb.dataset.tab; });
        W.sound("tap");
        return;
      }
      var f = e.target.closest("[data-filter]");
      if (f) {
        var id = f.dataset.filter;
        st.settings.homeCourse = id;
        Store.save();
        root.querySelectorAll("[data-filter]").forEach(function (b) { b.classList.toggle("on", b === f); });
        root.querySelectorAll(".course[data-course]").forEach(function (s) { s.hidden = id !== "all" && s.dataset.course !== id; });
        W.sound("tap");
        return;
      }
      var gb = e.target.closest("[data-guide]");
      if (gb) return W.go("guide", { course: gb.dataset.guide });
      var l = e.target.closest("[data-lesson]");
      if (l) {
        var pr = l.dataset.lesson.split(":");
        return W.go("lesson", { mod: pr[0], unit: +pr[1] });
      }
      var g = e.target.closest("[data-go]");
      if (g && !g.disabled) W.go(g.dataset.go, { mod: g.dataset.mod });
    });
  };

  /* ================= Moduł ================= */

  W.screens.module = function (root, p) {
    var m = W.byId[p.mod];
    var pr = W.progress(m);
    var ms = Store.mod(m.id);
    var dueN = Store.dueCards(m).length;
    var newN = Store.newCards(m).length;
    var misN = W.mistakes(m).length;
    var lastExam = ms.exams.length ? ms.exams[ms.exams.length - 1] : null;
    var nu = W.nextUnit(m);
    if (Store.state.lastMod !== m.id) {
      Store.state.lastMod = m.id;
      Store.save();
    }

    /* Plan nauki: cztery kroki w kolejności, w jakiej najłatwiej się uczyć. */
    function plan() {
      var doneUnits = m.units.filter(function (u) { return W.unitDone(m, u.id); }).length;
      var passed = ms.exams.some(function (h) { return h.pct > m.passRatio; });
      var reading = m.kind === "reading";
      var talkN = m.talk ? m.talk.filter(function (t, i) { return ms.talk && ms.talk[i] === 1; }).length : 0;
      var steps = [
        { go: "notes", t: "Przeczytaj", d: reading ? "streszczenie po ludzku i schematy" : m.minimum ? "minimum i schematy w notatkach" : "notatki z wykładu", done: !!ms.read },
        { go: "path", t: "Przejdź ścieżkę", d: doneUnits + " z " + m.units.length + " lekcji", done: nu < 0 },
        { go: "cards", t: "Utrwal fiszkami", d: pr.learned + " z " + pr.total + " opanowanych", done: pr.learned >= Math.ceil(pr.total * 0.8) }
      ];
      if (m.talk) steps.push({ go: "talk", t: "Powiedz własnymi słowami", d: talkN + " z " + m.talk.length + " pytań na zajęcia", done: talkN >= Math.ceil(m.talk.length * 0.8) });
      steps.push({ go: "exam", t: "Sprawdź się", d: passed ? (reading ? "kartkówka próbna zaliczona" : "egzamin próbny zdany") : reading ? "kartkówka próbna" : "egzamin próbny", done: passed });
      var next = steps.filter(function (x) { return !x.done; })[0];
      return (
        '<section class="plan" aria-label="Plan nauki"><h2 class="sec-h">Jak się tego nauczyć <small>' + steps.filter(function (x) { return x.done; }).length + "/" + steps.length + "</small></h2><ol>" +
        steps.map(function (x, i) {
          return (
            '<li class="' + (x.done ? "done" : x === next ? "next" : "") + '"><button data-go="' + x.go + '"><span class="pl-n">' + (x.done ? W.icon("check") : i + 1) + "</span>" +
            "<b>" + esc(x.t) + "</b><small>" + esc(x.d) + "</small></button></li>"
          );
        }).join("") +
        "</ol></section>"
      );
    }

    var reading = m.kind === "reading";
    var talkKnown = m.talk ? m.talk.filter(function (t, i) { return ms.talk && ms.talk[i] === 1; }).length : 0;
    var modes = [
      { go: "path", ic: "path", t: "Ścieżka", d: "Lekcje krok po kroku, serca i gwiazdki", meta: nu >= 0 ? "Lekcja " + (nu + 1) + " z " + m.units.length : "Ukończona", hero: true },
      { go: "cards", ic: "cards", t: "Fiszki", d: "Powtórki w odstępach", meta: dueN ? dueN + " do powtórki" : newN ? newN + " nowych" : "Na dziś gotowe", badge: dueN },
      { go: "kahoot", ic: "bolt", t: "Quiz na czas", d: "12 pytań, liczy się refleks", meta: ms.best.kahoot ? "Rekord " + ms.best.kahoot + " pkt" : "Bez rekordu" },
      { go: "match", ic: "pairs", t: "Pary", d: "Pojęcie do znaczenia, na czas", meta: ms.best.match ? "Rekord " + ms.best.match.toFixed(1) + " s" : "Bez rekordu" },
      { go: "sort", ic: "swipe", t: "Sortownia", d: m.sortDecks[0].title + " i inne talie", meta: m.sortDecks.length + " talie" },
      { go: "exam", ic: "exam", t: reading ? "Kartkówka próbna" : "Egzamin próbny", d: "20 pytań zamkniętych, próg " + Math.round(m.passRatio * 100) + "%", meta: lastExam ? "Ostatnio " + pct(lastExam.pct) : "Nie podchodziłeś" },
      { go: "review", ic: "redo", t: "Do poprawki", d: "Pytania, na których się potknąłeś", meta: misN ? misN + " pytań" : "Czysto", badge: misN, off: !misN },
      { go: "notes", ic: "book", t: reading ? "Streszczenie" : "Notatki", d: reading ? "Cały tekst po ludzku, ze schematami" : "Cały wykład, tabela i ściąga", meta: m.notes.length + " sekcji" }
    ];
    if (m.talk) modes.splice(1, 0, { go: "talk", ic: "chat", t: "Na zajęcia", d: "Pytania do omówienia z wzorcową odpowiedzią", meta: talkKnown + "/" + m.talk.length + " umiem" });
    if (W.pagesOk(m)) {
      var pageN = m.pages.reduce(function (n, g) { return n + g.items.length; }, 0);
      modes.push({ go: "pages", ic: "exam", t: "Oryginał", d: "Zdjęcia stron czytanki, do powiększenia", meta: pageN + " stron" });
    }

    root.innerHTML =
      top(m.course.name, W.modLabel(m)) +
      '<div class="page">' +
      '<section class="mhero"><p class="eyebrow">' + esc(m.course.short) + " · " + esc(m.term) + "</p>" +
      '<h1 class="display">' + esc(m.title) + "</h1>" +
      (m.sources ? '<ul class="msrc">' + m.sources.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
      (m.official || m.lecturer ? "<p class='lect'>" + esc([m.official ? "Wykład 1: " + m.official : "", m.lecturer || ""].filter(Boolean).join(" · ")).replace("Wykład 1", "Wykład " + m.number) + "</p>" : "") +
      '<div class="mprog"><div class="mprog-bar"><i style="width:' + pct(pr.pct) + '"></i></div><b>' + pct(pr.pct) + "</b></div>" +
      '<div class="mfacts"><span>' + W.icon("star") + pr.stars + "/" + pr.maxStars + " gwiazdek</span><span>" + W.icon("cards") + pr.learned + "/" + pr.total + " fiszek opanowanych</span>" +
      (m.passing ? "<span>" + W.icon("target") + esc(m.passing) + "</span>" : "") + "</div></section>" +
      plan() +
      (W.guide(m.course.id)
        ? '<button class="guide-card" data-guide="' + m.course.id + '"><span class="gc-ic">' + W.icon("target") + "</span><span><b>" + esc(W.guide(m.course.id).title) +
          "</b><small>Zasady egzaminu, kartki próbne z rozwiązaniami, pytania teoretyczne</small></span></button>"
        : "") +
      '<div class="modes">' +
      modes
        .map(function (x) {
          return (
            '<button class="mode ' + (x.hero ? "hero " : "") + (x.off ? "off" : "") + '" data-go="' + x.go + '">' +
            '<span class="mode-ic">' + W.icon(x.ic) + (x.badge ? '<i class="badge">' + x.badge + "</i>" : "") + "</span>" +
            "<b>" + esc(x.t) + "</b><span class='mode-d'>" + esc(x.d) + "</span><span class='mode-m'>" + esc(x.meta) + "</span></button>"
          );
        })
        .join("") +
      "</div></div>";

    var gc = root.querySelector(".guide-card");
    if (gc) gc.onclick = function () { W.go("guide", { course: m.course.id }); };
    root.querySelector(".page").addEventListener("click", function (e) {
      var b = e.target.closest(".modes [data-go], .plan [data-go]");
      if (b) W.go(b.dataset.go, { mod: m.id });
    });
  };

  /* ================= Ścieżka ================= */

  W.screens.path = function (root, p) {
    var m = W.byId[p.mod];
    var ms = Store.mod(m.id);
    var nu = W.nextUnit(m);
    var sel = p.sel != null ? p.sel : nu >= 0 ? nu : null;
    var offsets = [0, 34, 52, 34, 0, -34, -52, -34];

    function draw() {
      root.innerHTML =
        top("Ścieżka", W.modLabel(m) + ": " + m.title) +
        '<div class="page path-page"><ol class="path">' +
        m.units
          .map(function (u, i) {
            var rec = ms.path[u.id];
            var open = W.unitOpen(m, i);
            var done = rec && rec.stars > 0;
            var state = done ? "done" : open ? "open" : "locked";
            if (i === nu) state += " current";
            var off = offsets[i % offsets.length];
            return (
              '<li class="node ' + state + (u.boss ? " boss" : "") + '" style="--x:' + off + 'px">' +
              (i === nu && sel !== i ? '<span class="start-tag">Start</span>' : "") +
              '<button class="nbtn" data-i="' + i + '" aria-label="' + esc(u.title) + '"' + (open ? "" : " aria-disabled=\"true\"") + ">" +
              W.icon(open ? u.icon : "lock") + "</button>" +
              (done ? W.starRow(rec.stars) : '<span class="stars-ph"></span>') +
              '<span class="nlabel">' + esc(u.title) + "</span>" +
              (sel === i
                ? '<div class="bubble"><b>' + esc(u.title) + "</b><span>" + esc(u.sub) + "</span>" +
                  (open
                    ? '<button class="btn primary" data-start="' + i + '">' + (done ? "Powtórz lekcję" : u.boss ? "Zmierz się z testem" : "Zacznij lekcję") + "</button>" +
                      (done && W.teachable(m, u) ? '<button class="btn ghost" data-teach="' + i + '">Przypomnij teorię</button>' : "") +
                      (done ? '<small>Najlepiej: ' + pct(rec.best) + "</small>" : "")
                    : "<small>Ukończ poprzednią lekcję, żeby odblokować. Albo włącz swobodny dostęp w profilu.</small>") +
                  "</div>"
                : "") +
              "</li>"
            );
          })
          .join("") +
        "</ol></div>";
      var cur = root.querySelector(".node.current, .bubble");
      if (cur && !p._scrolled) {
        p._scrolled = true;
        cur.scrollIntoView({ block: "center" });
      }
    }

    root.addEventListener("click", function (e) {
      var s = e.target.closest("[data-start]");
      if (s) return W.go("lesson", { mod: m.id, unit: +s.dataset.start });
      var t = e.target.closest("[data-teach]");
      if (t) return W.go("lesson", { mod: m.id, unit: +t.dataset.teach, teach: true });
      var b = e.target.closest(".nbtn");
      if (b) {
        var i = +b.dataset.i;
        sel = sel === i ? null : i;
        p.sel = sel;
        W.sound("tap");
        draw();
      }
    });
    draw();
  };

  /* ================= Lekcja ================= */

  /* Czy lekcja ma czego „nauczyć” przed ćwiczeniami (pojęcia albo własne wprowadzenie). */
  W.teachable = function (m, u) {
    if (u.boss) return false;
    return !!u.teach || !!u.table || unitSets(m, u).length > 0 || m.concepts.some(function (c) { return c.u === u.id && W.allowed(c); });
  };

  /* Zestawy z pytań „który to…” w danej lekcji, razem z opisem każdej pozycji. */
  function unitSets(m, u) {
    var seen = {}, out = [];
    m.exercises.forEach(function (e) {
      if (e.u !== u.id || e.t !== "which" || !W.allowed(e)) return;
      var k = e.set || "_zasady";
      if (seen[k]) return;
      seen[k] = true;
      var set = W.whichList(e, m);
      if (set && set.why) out.push({ label: e.set ? set.label : "Dziesięć zasad", items: set.items, why: set.why, numbered: set.numbered });
    });
    return out;
  }

  function tableHtml(t) {
    return (
      '<div class="tscroll"><table><thead><tr>' + t.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
      t.rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return i ? "<td>" + esc(c) + "</td>" : "<th>" + esc(c) + "</th>"; }).join("") + "</tr>"; }).join("") +
      "</tbody></table></div>"
    );
  }

  /* Mini-lekcja przed ćwiczeniami: najpierw krótko teoria, potem pytania. */
  function teach(root, m, u, onGo) {
    var cs = m.concepts.filter(function (c) { return c.u === u.id && W.allowed(c); });
    var figs = [];
    cs.forEach(function (c) { if (c.fig && figs.indexOf(c.fig) < 0) figs.push(c.fig); });
    root.innerHTML =
      top("Najpierw krótko", u.title) +
      '<div class="page teach">' +
      '<p class="eyebrow">Zanim zaczniesz ćwiczenia</p>' +
      '<h1 class="display">' + esc(u.title) + "</h1>" +
      '<p class="teach-lead">Przeczytaj w minutę. Pytania w lekcji sprawdzają dokładnie to, co jest niżej, a po każdej odpowiedzi zobaczysz, dlaczego jest dobra albo zła.</p>' +
      (u.teach ? '<div class="teach-intro">' + u.teach + "</div>" : "") +
      (u.table && m.table ? '<div class="teach-intro note"><h2 class="sec-h">' + esc(m.table.title) + "</h2>" + tableHtml(m.table) + "</div>" : "") +
      figs.slice(0, 1).map(function (k) { return W.figHtml(m, k); }).join("") +
      '<ol class="teach-list">' +
      cs.map(function (c) {
        return (
          '<li class="tc"><div class="tc-h"><b class="display">' + esc(c.term) + "</b>" + W.srcBadge(c.s, m) + "</div>" +
          (c.plain ? '<p class="tc-plain">' + esc(c.plain) + "</p>" : "") +
          '<p class="tc-def"><span>' + (c.plain ? "Na teście" : "Definicja") + "</span>" + esc(c.def) + "</p></li>"
        );
      }).join("") +
      "</ol>" +
      (cs.length < 2
        ? unitSets(m, u).map(function (set) {
            return (
              '<section class="cheat"><h2 class="sec-h">Ściąga <small>' + esc(set.label) + "</small></h2><dl>" +
              set.items.map(function (it, i) {
                return "<div><dt>" + (set.numbered ? i + 1 + ". " : "") + esc(it) + "</dt><dd>" + esc(set.why[i].charAt(0).toUpperCase() + set.why[i].slice(1)) + "</dd></div>";
              }).join("") +
              "</dl></section>"
            );
          }).join("")
        : "") +
      '<div class="teach-go"><button class="btn primary big" data-a="go">Zaczynam ćwiczenia</button></div></div>';
    root.querySelector('[data-a="go"]').onclick = onGo;
    if (W.mountWidgets) W.mountWidgets(root, m);
    W.setKeys(function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        onGo();
      }
    });
  }

  W.screens.lesson = function (root, p) {
    var m = W.byId[p.mod];
    var u = m.units[p.unit];
    if (!p.go && W.teachable(m, u) && (p.teach || !W.unitDone(m, u.id))) {
      return teach(root, m, u, function () {
        W.go("lesson", { mod: p.mod, unit: p.unit, go: true }, { replace: true });
      });
    }
    var items = W.buildLesson(m, u);
    W.runSession(root, {
      mod: m,
      unit: u,
      items: items,
      hearts: 3,
      onExit: function () {
        Store.save();
        W.back();
      },
      onFinish: function (r) {
        var ms = Store.mod(m.id);
        if (!r.completed) {
          Store.save();
          return W.resultScreen(root, {
            fail: true,
            title: "Zabrakło serc",
            sub: "Błędy z tej lekcji trafiły do „Do poprawki”. Spróbuj jeszcze raz, pytania się przetasują.",
            stats: [
              { label: "Dobrze za 1. razem", value: r.firstTry + "/" + r.total },
              { label: "Czas", value: W.fmtTime(r.secs) }
            ],
            actions: [
              { label: "Spróbuj ponownie", fn: function () { W.go("lesson", p, { replace: true }); } },
              { label: "Wróć do ścieżki", fn: function () { W.back(); } }
            ]
          });
        }
        var stars = W.starsFor(r.acc);
        var prev = ms.path[u.id] || { stars: 0, best: 0, runs: 0 };
        var bonus = 5 + (r.acc === 1 ? 5 : 0) + (u.boss ? 10 : 0);
        ms.path[u.id] = { stars: Math.max(prev.stars, stars), best: Math.max(prev.best, r.acc), runs: (prev.runs || 0) + 1 };
        Store.unlock("first");
        if (r.acc === 1) Store.unlock("perfect");
        if (W.nextUnit(m) < 0) Store.unlock("path");
        if (m.units.every(function (x) { return ms.path[x.id] && ms.path[x.id].stars === 3; })) Store.unlock("stars");
        Store.addXP(bonus);
        var nextI = p.unit + 1 < m.units.length ? p.unit + 1 : null;
        var actions = [];
        if (nextI != null && W.unitOpen(m, nextI)) {
          actions.push({ label: "Następna lekcja", fn: function () { W.go("lesson", { mod: m.id, unit: nextI }, { replace: true }); } });
        }
        actions.push({ label: "Wróć do ścieżki", fn: function () { W.back(); } });
        actions.push({ label: "Powtórz tę lekcję", fn: function () { W.go("lesson", p, { replace: true }); } });
        W.resultScreen(root, {
          stars: stars,
          title: r.acc === 1 ? "Bezbłędnie!" : stars === 3 ? "Świetna robota!" : stars === 2 ? "Dobrze idzie!" : "Lekcja zaliczona",
          sub: u.title,
          confetti: true,
          stats: [
            { label: "Dobrze za 1. razem", value: pct(r.acc), tone: "good" },
            { label: "Najdłuższa seria", value: String(r.bestCombo) },
            { label: "Czas", value: W.fmtTime(r.secs) },
            { label: "Bonus XP", value: "+" + bonus, tone: "gold" }
          ],
          actions: actions
        });
      }
    });
  };

  /* ================= Do poprawki ================= */

  W.screens.review = function (root, p) {
    var m = W.byId[p.mod];
    var list = W.mistakes(m);
    if (!list.length) {
      root.innerHTML =
        top("Do poprawki", m.title) +
        '<div class="page"><div class="empty"><div class="empty-ic">' + W.icon("check") + "</div><h2>Nie ma czego poprawiać</h2>" +
        "<p>Gdy pomylisz się w lekcji, quizie albo na egzaminie, pytanie trafi tutaj, aż odpowiesz na nie poprawnie.</p></div></div>";
      return;
    }
    var items = W.shuffle(list).slice(0, 15);
    W.runSession(root, {
      mod: m,
      items: items,
      hearts: null,
      onExit: function () {
        Store.save();
        W.back();
      },
      onFinish: function (r) {
        Store.addXP(5);
        var left = W.mistakes(m).length;
        W.resultScreen(root, {
          title: left ? "Poprawione" : "Wszystko poprawione",
          sub: left ? "Zostało jeszcze " + left + " pytań do poprawki." : "Lista błędów jest pusta.",
          confetti: !left,
          stats: [
            { label: "Dobrze za 1. razem", value: r.firstTry + "/" + r.total, tone: "good" },
            { label: "Czas", value: W.fmtTime(r.secs) }
          ],
          actions: left
            ? [
                { label: "Następna porcja", fn: function () { W.go("review", p, { replace: true }); } },
                { label: "Wróć do modułu", fn: function () { W.back(); } }
              ]
            : [{ label: "Wróć do modułu", fn: function () { W.back(); } }]
        });
      }
    });
  };

  /* ================= Notatki ================= */

  W.screens.notes = function (root, p) {
    var m = W.byId[p.mod];
    var st = Store.state.settings;
    Store.unlock("notes");
    Store.mod(m.id).read = true;
    Store.save();

    var SRC = { S: "lg-s", U: "lg-u", K: "lg-k", D: "lg-d" };
    /* Schemat trafia w miejsce znacznika <!--fig:klucz--> w treści, a bez znacznika zaraz po „po ludzku”. */
    function withFigs(n) {
      var html = n.html, rest = [];
      if (!m.figs) return html;
      Object.keys(m.figs).forEach(function (k) {
        if (m.figs[k].n !== n.id) return;
        var mark = "<!--fig:" + k + "-->";
        if (html.indexOf(mark) >= 0) html = html.replace(mark, W.figHtml(m, k));
        else rest.push(W.figHtml(m, k));
      });
      if (!rest.length) return html;
      var cut = html.indexOf("<div class='plain'>") === 0 ? html.indexOf("</div>") + 6 : 0;
      return html.slice(0, cut) + rest.join("") + html.slice(cut);
    }
    var story = m.story;
    var toc = [];
    if (m.minimum) toc.push(["min", "min"]);
    if (m.deep) toc.push(["deep", "?"]);
    m.notes.forEach(function (n) { toc.push([n.id, n.n ? n.n : "·"]); });
    if (m.table) toc.push(["tab", "tab"]);
    if (story) toc.push(["story", "★"]);
    toc.push(["gloss", "A–Z"]);

    root.innerHTML =
      top(m.kind === "reading" ? "Streszczenie" : "Notatki", W.modLabel(m) + ": " + m.title) +
      '<div class="page notes ' + (st.extras ? "" : "no-extra") + (m.kind === "reading" ? " reading" : "") + '">' +
      '<div class="legend">' +
      Object.keys(m.sourceNames)
        .map(function (k) { return '<span><i class="lg ' + SRC[k] + '"></i>' + esc(m.sourceNames[k]) + "</span>"; })
        .join("") +
      '<label class="switch"><input type="checkbox" id="notes-extra" ' + (st.extras ? "checked" : "") + '/><span></span>Pokaż ★</label></div>' +
      '<nav class="toc">' +
      toc.map(function (t) { return '<a href="#n-' + t[0] + '" data-jump="' + t[0] + '">' + t[1] + "</a>"; }).join("") +
      "</nav>" +
      (m.minimum
        ? '<section class="note minimum" id="n-min"><h2>' + esc(m.minimumTitle || "Minimum na zaliczenie") + '</h2><p class="min-k">Jeśli masz mało czasu, opanuj te ' + m.minimum.length +
          " rzeczy. Reszta " + (m.kind === "reading" ? "streszczenia" : "notatek") + " je rozwija.</p><ol>" +
          m.minimum.map(function (x) { return "<li><b>" + esc(x[0]) + "</b><span>" + x[1] + "</span></li>"; }).join("") +
          "</ol></section>"
        : "") +
      (m.deep
        ? '<section class="note deep" id="n-deep"><h2>Do przemyślenia</h2><p class="min-k">' + (m.kind === "reading" ? "Wątki z tekstu, o które łatwo zahaczyć w dyskusji na zajęciach." : "Wątki z wykładu, które łatwo zgłębić. Dobre na powtórkę i do rozmowy na ustnym.") + " Rozwiń, żeby przeczytać.</p>" +
          m.deep
            .map(function (d) {
              return '<details class="dq"><summary>' + esc(d.q) + "</summary><p>" + esc(d.a) + "</p>" + (d.link ? '<p class="dq-link">' + esc(d.link) + "</p>" : "") + "</details>";
            })
            .join("") +
          "</section>"
        : "") +
      m.notes
        .map(function (n) {
          return (
            '<section class="note" id="n-' + n.id + '"><h2>' + (n.n ? '<span class="nn">' + n.n + "</span>" : "") + esc(n.title) + "</h2>" + withFigs(n) + "</section>"
          );
        })
        .join("") +
      (m.table
        ? '<section class="note" id="n-tab"><h2>' + esc(m.table.title) + '</h2><div class="tscroll"><table><thead><tr>' +
          m.table.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          m.table.rows.map(function (r) { return "<tr>" + r.map(function (c, i) { return i ? "<td>" + esc(c) + "</td>" : "<th>" + esc(c) + "</th>"; }).join("") + "</tr>"; }).join("") +
          "</tbody></table></div></section>"
        : "") +
      (story
        ? '<section class="note ' + (story.extra ? "extra-sec" : "") + '" id="n-story"><h2>' + esc(story.title) + '</h2><p class="story-k">' + esc(story.intro) + "</p>" +
          (story.ordered
            ? '<ol class="story">' + story.items.map(function (x) { return "<li><b>" + esc(x[0]) + "</b><span>" + esc(x[1]) + "</span></li>"; }).join("") + "</ol>"
            : '<dl class="xlate">' + story.items.map(function (x) { return "<div><dt>" + esc(x[0]) + "</dt><dd>" + esc(x[1]) + "</dd></div>"; }).join("") + "</dl>") +
          "</section>"
        : "") +
      '<section class="note" id="n-gloss"><h2>Słowniczek</h2><input id="gloss-q" class="search" type="search" placeholder="Szukaj pojęcia…" autocomplete="off"/><dl class="gloss">' +
      m.concepts
        .slice()
        .sort(function (a, b) { return a.term.localeCompare(b.term, "pl"); })
        .map(function (c) {
          return (
            '<div class="gi ' + (c.s === "D" ? "extra" : "") + '" data-k="' + esc(W.norm(c.term + " " + c.def + " " + (c.plain || ""))) + '"><dt>' + esc(c.term) + W.srcBadge(c.s, m) + "</dt>" +
            (c.plain ? '<dd class="gi-plain">' + esc(c.plain) + "</dd>" : "") + "<dd>" + esc(c.def) + "</dd></div>"
          );
        })
        .join("") +
      "</dl></section></div>";

    if (W.mountWidgets) W.mountWidgets(root, m);
    if (p.jump) {
      setTimeout(function () {
        var t = root.querySelector("#n-" + p.jump);
        if (t) t.scrollIntoView({ block: "start" });
      }, 30);
    }
    root.querySelector("#notes-extra").addEventListener("change", function (e) {
      st.extras = e.target.checked;
      Store.save();
      root.querySelector(".notes").classList.toggle("no-extra", !st.extras);
    });
    root.querySelector(".toc").addEventListener("click", function (e) {
      var a = e.target.closest("[data-jump]");
      if (!a) return;
      e.preventDefault();
      var t = root.querySelector("#n-" + a.dataset.jump);
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    root.querySelector("#gloss-q").addEventListener("input", function (e) {
      var q = W.norm(e.target.value);
      root.querySelectorAll(".gi").forEach(function (g) {
        g.hidden = q && g.dataset.k.indexOf(q) < 0;
      });
    });
  };

  /* ================= Profil ================= */

  W.screens.profile = function (root) {
    var st = Store.state;
    var rk = W.rank(st.xp);
    var acc = st.stats.answers ? st.stats.correct / st.stats.answers : 0;

    function toggle(id, label, desc, on) {
      return (
        '<label class="set"><span><b>' + esc(label) + "</b><small>" + esc(desc) + '</small></span><span class="switch"><input type="checkbox" id="set-' + id + '" data-set="' + id + '" ' +
        (on ? "checked" : "") + "/><span></span></span></label>"
      );
    }

    root.innerHTML =
      top("Profil", "Postępy i ustawienia") +
      '<div class="page profile">' +
      '<section class="rankcard"><span class="rk-lv display">' + rk.level + '</span><div><p class="eyebrow">Ranga</p><h1 class="display">' + esc(rk.name) + "</h1>" +
      '<div class="rbar"><i style="width:' + pct(rk.pct) + '"></i></div><small>' +
      (rk.to ? st.xp + " / " + rk.to + " XP do rangi „" + esc(rk.nextName) + "”" : st.xp + " XP · najwyższa ranga") + "</small></div></section>" +
      '<div class="pstats">' +
      [
        ["XP łącznie", st.xp],
        ["Seria teraz", W.days(Store.streakAlive())],
        ["Najdłuższa seria", W.days(st.streak.best || 0)],
        ["Odpowiedzi", st.stats.answers],
        ["Trafność", pct(acc)],
        ["Powtórzone fiszki", st.stats.cards || 0]
      ]
        .map(function (s) { return '<div class="ps"><span>' + s[0] + "</span><b>" + s[1] + "</b></div>"; })
        .join("") +
      "</div>" +
      '<h2 class="sec-h">Odznaki <small>' + Object.keys(st.ach).length + "/" + W.ACH.length + "</small></h2>" +
      '<div class="achs">' +
      W.ACH.map(function (a) {
        var got = st.ach[a.id];
        return '<div class="ach ' + (got ? "got" : "") + '"><span class="ach-ic">' + W.icon(got ? "star" : "lock") + "</span><b>" + esc(a.name) + "</b><small>" + esc(a.desc) + "</small></div>";
      }).join("") +
      "</div>" +
      '<h2 class="sec-h">Ustawienia</h2><div class="sets">' +
      '<div class="set"><span><b>Dzienny cel</b><small>Ile XP chcesz zdobywać każdego dnia</small></span><span class="seg">' +
      [20, 50, 100, 150].map(function (g) { return '<button data-goal="' + g + '" class="' + (st.goal === g ? "on" : "") + '">' + g + "</button>"; }).join("") +
      "</span></div>" +
      toggle("sound", "Dźwięki", "Krótkie sygnały przy odpowiedziach", st.settings.sound) +
      toggle("extras", "Materiał spoza wykładu (★)", "Dopowiedzenia z notatek w lekcjach, fiszkach i quizach. Egzamin próbny zawsze je pomija.", st.settings.extras) +
      toggle("free", "Swobodny dostęp do ścieżki", "Wszystkie lekcje otwarte od razu, np. tuż przed egzaminem", st.settings.free) +
      "</div>" +
      '<p class="cloudline">' + W.icon("cloud") +
      ({ off: "Postępy zapisują się w tej przeglądarce.", syncing: "Synchronizuję postępy…", ok: "Postępy zapisują się na Twoim koncie i działają na każdym urządzeniu.", local: "Brak dostępu do zapisu w chmurze. Postępy zapisują się w tej przeglądarce." }[Store.cloud]) +
      "</p>" +
      '<div class="danger"><button class="btn danger-ghost" data-a="reset">Wyzeruj postępy</button>' +
      '<div class="confirm" hidden><p>Na pewno? Znikną XP, gwiazdki, fiszki i odznaki. Tego nie da się cofnąć.</p><div class="row"><button class="btn danger" data-a="reset-yes">Tak, wyzeruj</button><button class="btn ghost" data-a="reset-no">Anuluj</button></div></div></div>' +
      "</div>";

    root.addEventListener("change", function (e) {
      var k = e.target.dataset.set;
      if (!k) return;
      st.settings[k] = e.target.checked;
      Store.save();
    });
    root.addEventListener("click", function (e) {
      var g = e.target.closest("[data-goal]");
      if (g) {
        st.goal = +g.dataset.goal;
        Store.save();
        root.querySelectorAll("[data-goal]").forEach(function (b) { b.classList.toggle("on", b === g); });
        return;
      }
      var a = e.target.closest("[data-a]");
      if (!a) return;
      var c = root.querySelector(".confirm");
      if (a.dataset.a === "reset") c.hidden = false;
      else if (a.dataset.a === "reset-no") c.hidden = true;
      else if (a.dataset.a === "reset-yes") {
        Store.reset();
        W.toast("Postępy wyzerowane", "Zaczynasz od nowa");
        W.go("home", {}, { root: true });
      }
    });
  };
})();
