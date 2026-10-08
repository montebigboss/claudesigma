/* Czytanki: oryginalne strony (zdjęcia), pytania na zajęcia i interaktywne widżety w streszczeniu. */
(function () {
  "use strict";
  var W = window.Wykuj;
  var esc = W.esc;
  var Store = W.Store;
  var top = W.top;

  function pageSrc(m, id) {
    return W.img("assets/" + m.pageDir + "/" + id + ".jpg");
  }

  /* ================= Oryginał: zdjęcia stron ================= */

  W.screens.pages = function (root, p) {
    var m = W.byId[p.mod];
    var zoom = 1;

    root.innerHTML =
      top("Oryginał", W.modLabel(m) + ": " + m.title) +
      '<div class="page pages">' +
      '<p class="pg-lead">Zdjęcia stron, które wrzuciłeś, w kolejności czytania. Stuknij stronę, żeby ją powiększyć. Przy każdej stronie jest skrót do fragmentu streszczenia, który ją omawia.</p>' +
      '<nav class="pg-toc">' +
      m.pages.map(function (g, gi) { return '<a href="#pg-g' + gi + '" data-jumpg="' + gi + '">' + esc(g.short) + "</a>"; }).join("") +
      "</nav>" +
      m.pages
        .map(function (g, gi) {
          return (
            '<section class="pg-group" id="pg-g' + gi + '"><h2 class="sec-h">' + esc(g.title) + "</h2>" +
            (g.note ? '<p class="pg-note">' + esc(g.note) + "</p>" : "") +
            '<div class="pg-list">' +
            g.items
              .map(function (it) {
                return (
                  '<figure class="pg" id="pg-' + it[0] + '"><button class="pg-img" data-zoom="' + it[0] + '" aria-label="Powiększ: ' + esc(it[1]) + '">' +
                  '<img loading="lazy" decoding="async" src="' + pageSrc(m, it[0]) + '" alt="' + esc(g.short + ", " + it[1]) + '"/></button>' +
                  "<figcaption><b>" + esc(it[1]) + "</b>" +
                  (it[2] ? '<button class="linkish" data-note="' + it[2] + '">' + W.icon("book") + "streszczenie tej strony</button>" : "") +
                  "</figcaption></figure>"
                );
              })
              .join("") +
            "</div></section>"
          );
        })
        .join("") +
      "</div>" +
      '<div class="pg-zoom" hidden role="dialog" aria-modal="true" aria-label="Powiększona strona">' +
      '<div class="pz-bar"><span class="pz-t"></span><button class="btn ghost" data-z="-">−</button><button class="btn ghost" data-z="+">+</button>' +
      '<button class="icon-btn" data-z="x" aria-label="Zamknij">' + W.icon("x") + "</button></div>" +
      '<div class="pz-scroll"><img alt=""/></div></div>';

    var ov = root.querySelector(".pg-zoom"), oimg = ov.querySelector("img");
    function setZoom(z) {
      zoom = Math.max(1, Math.min(3, z));
      oimg.style.width = zoom * 100 + "%";
    }
    function open(id) {
      var label = "";
      m.pages.forEach(function (g) { g.items.forEach(function (it) { if (it[0] === id) label = g.short + ", " + it[1]; }); });
      oimg.src = pageSrc(m, id);
      oimg.alt = label;
      ov.querySelector(".pz-t").textContent = label;
      setZoom(1.6);
      ov.hidden = false;
      ov.querySelector('[data-z="x"]').focus();
    }
    function close() {
      ov.hidden = true;
    }

    root.addEventListener("click", function (e) {
      var z = e.target.closest("[data-zoom]");
      if (z) return open(z.dataset.zoom);
      var b = e.target.closest("[data-z]");
      if (b) {
        if (b.dataset.z === "x") return close();
        return setZoom(zoom + (b.dataset.z === "+" ? 0.5 : -0.5));
      }
      var n = e.target.closest("[data-note]");
      if (n) return W.go("notes", { mod: m.id, jump: n.dataset.note });
      var j = e.target.closest("[data-jumpg]");
      if (j) {
        e.preventDefault();
        var t = root.querySelector("#pg-g" + j.dataset.jumpg);
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
    W.setKeys(function (e) {
      if (ov.hidden) return;
      if (e.key === "Escape") close();
      else if (e.key === "+" || e.key === "=") setZoom(zoom + 0.5);
      else if (e.key === "-") setZoom(zoom - 0.5);
    });
    if (p.page) {
      setTimeout(function () {
        var t = root.querySelector("#pg-" + p.page);
        if (t) t.scrollIntoView({ block: "start" });
      }, 30);
    }
  };

  /* ================= Na zajęcia: powiedz własnymi słowami ================= */

  function talkState(m) {
    var ms = Store.mod(m.id);
    ms.talk = ms.talk || {};
    return ms.talk;
  }

  W.screens.talk = function (root, p) {
    var m = W.byId[p.mod];
    var st = talkState(m);
    var known = m.talk.filter(function (t, i) { return st[i] === 1; }).length;
    var todo = m.talk.map(function (t, i) { return i; }).filter(function (i) { return st[i] !== 1; });

    root.innerHTML =
      top("Na zajęcia", W.modLabel(m) + ": " + m.title) +
      '<div class="page guide talk">' +
      '<section class="g-sec"><h2 class="sec-h">Jak z tego korzystać</h2>' +
      '<ol class="steps">' +
      "<li><b>Przeczytaj pytanie</b><span>Takie pytania mogą paść na zajęciach: z dyskusji, wejściówki albo odpytywania.</span></li>" +
      "<li><b>Odpowiedz na głos albo na brudno</b><span>Mówienie własnymi słowami utrwala najmocniej. Wystarczą 2–4 zdania.</span></li>" +
      "<li><b>Porównaj ze wzorcem</b><span>Sprawdź, czy padły słowa-klucze. Oceń się uczciwie: to, czego nie umiesz, wróci w następnej rundzie.</span></li></ol>" +
      '<div class="row talk-go">' +
      '<button class="btn primary big" data-run="todo"' + (todo.length ? "" : " disabled") + ">" +
      (todo.length ? (known ? "Ćwicz te, których nie umiesz (" + todo.length + ")" : "Zacznij (" + todo.length + " pytań)") : "Umiesz wszystkie") + "</button>" +
      (known ? '<button class="btn ghost" data-run="all">Wszystkie od nowa</button>' : "") +
      "</div></section>" +
      '<section class="g-sec"><h2 class="sec-h">Pytania <small>' + known + "/" + m.talk.length + " umiem</small></h2>" +
      '<p class="g-lead">Rozwiń pytanie, żeby od razu zobaczyć wzorcową odpowiedź (dobre do szybkiej powtórki przed zajęciami).</p>' +
      '<ol class="theory">' +
      m.talk
        .map(function (t, i) {
          var tag = st[i] === 1 ? '<span class="th-tag">umiem</span>' : st[i] === 0 ? '<span class="th-tag later">do powtórki</span>' : "";
          return (
            '<li class="th in"><details><summary><span class="th-q">' + esc(t.q) + "</span>" + tag + "</summary>" +
            '<div class="th-body">' + answerHtml(t) + "</div></details></li>"
          );
        })
        .join("") +
      "</ol></section></div>";

    root.addEventListener("click", function (e) {
      var r = e.target.closest("[data-run]");
      if (!r || r.disabled) return;
      var list = r.dataset.run === "all" ? m.talk.map(function (t, i) { return i; }) : todo;
      W.go("talkrun", { mod: m.id, list: list });
    });
  };

  function answerHtml(t) {
    return (
      '<p class="th-k">Wzorcowa odpowiedź</p><div class="t-ans">' + t.a + "</div>" +
      (t.keys ? '<p class="th-k">Słowa-klucze, które warto powiedzieć</p><ul class="t-keys">' + t.keys.map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("") + "</ul>" : "") +
      (t.trap ? '<div class="fixnote"><p class="ans-k">Uważaj</p><p>' + t.trap + "</p></div>" : "") +
      (t.src ? '<p class="t-src">' + esc(t.src) + "</p>" : "")
    );
  }

  W.screens.talkrun = function (root, p) {
    var m = W.byId[p.mod];
    var st = talkState(m);
    var list = p.list && p.list.length ? p.list : m.talk.map(function (t, i) { return i; });
    var i = 0, score = 0, revealed = false;

    function render() {
      var t = m.talk[list[i]];
      revealed = false;
      root.innerHTML =
        top("Na zajęcia", "Pytanie " + (i + 1) + " z " + list.length, '<span class="clock">' + score + " umiem</span>") +
        '<div class="page sheet">' +
        '<div class="lbar slim"><i style="width:' + Math.round((i / list.length) * 100) + '%"></i></div>' +
        '<article class="task"><span class="task-n display">' + (i + 1) + "</span>" +
        '<h2 class="task-q">' + esc(t.q) + "</h2>" +
        (t.hint ? '<p class="t-hint">' + W.icon("bulb") + esc(t.hint) + "</p>" : "") + "</article>" +
        '<label class="draft-l" for="tdraft-' + list[i] + '">Twoja odpowiedź (na głos albo tutaj, nikt jej nie sprawdza)</label>' +
        '<textarea id="tdraft-' + list[i] + '" class="draft" rows="4" placeholder="Powiedz albo napisz 2–4 zdania…"></textarea>' +
        '<div class="reveal" hidden><div class="answer">' + answerHtml(t) + "</div></div>" +
        '<div class="sheet-act"><button class="btn primary big" data-a="show">Pokaż wzorcową odpowiedź</button></div>' +
        "</div>";
      root.querySelector('[data-a="show"]').onclick = reveal;
    }

    function reveal() {
      if (revealed) return;
      revealed = true;
      W.sound("flip");
      root.querySelector(".reveal").hidden = false;
      root.querySelector(".sheet-act").innerHTML =
        '<p class="self-k">Czy powiedziałeś to samo (własnymi słowami)?</p><div class="grade two">' +
        '<button class="btn g-again" data-g="0">Jeszcze nie umiem</button><button class="btn g-good" data-g="1">Umiem</button></div>';
      root.querySelector(".grade").addEventListener("click", function (e) {
        var b = e.target.closest("[data-g]");
        if (!b) return;
        var ok = b.dataset.g === "1";
        st[list[i]] = ok ? 1 : 0;
        if (ok) {
          score++;
          W.sound("correct", score);
        } else {
          W.sound("wrong");
        }
        Store.save();
        i++;
        if (i < list.length) render();
        else end();
      });
      root.querySelector(".reveal").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function end() {
      var xp = score * 2 + 3;
      Store.addXP(xp);
      var left = m.talk.filter(function (t, k) { return st[k] !== 1; }).length;
      W.resultScreen(root, {
        fail: score < list.length / 2,
        title: score + "/" + list.length,
        sub: left ? "Do powtórki zostało " + left + (left === 1 ? " pytanie" : left < 5 ? " pytania" : " pytań") + ". Wrócą w następnej rundzie." : "Umiesz odpowiedzieć na wszystkie pytania. Jesteś gotowy na zajęcia.",
        confetti: !left,
        stats: [
          { label: "Umiem", value: String(score), tone: "good" },
          { label: "Do powtórki", value: String(list.length - score) },
          { label: "XP", value: "+" + xp, tone: "gold" }
        ],
        actions: [
          { label: "Wróć", fn: function () { W.back(); } },
          left ? { label: "Jeszcze raz te, których nie umiem", fn: function () {
            W.go("talkrun", { mod: m.id, list: m.talk.map(function (t, k) { return k; }).filter(function (k) { return st[k] !== 1; }) }, { replace: true });
          } } : null
        ].filter(Boolean)
      });
    }

    W.setKeys(function (e) {
      if (e.target && e.target.tagName === "TEXTAREA") return;
      if ((e.key === "Enter" || e.key === " ") && !revealed) {
        e.preventDefault();
        reveal();
      }
    });
    render();
  };

  /* ================= Widżety w streszczeniu ================= */

  /* Hamowanie oboczne (Kalat, s. 160–161): 15 receptorów, każdy pobudza „swoją” komórkę
   * dwubiegunową, a przez komórkę horyzontalną hamuje sąsiadki tym słabiej, im dalej.
   * Liczby dobrane tak, żeby zachować opis z książki: oświetlony pas 6–10 → komórki 6 i 10
   * najbardziej pobudzone, 5 i 11 słabiej niż spoczynkowe 1–4. */
  var N = 15, BASE = 0.3, EXC = 1, INH = [0.15, 0.15, 0.08, 0.03];

  function bipolar(lit) {
    var out = [];
    for (var i = 0; i < N; i++) {
      var a = BASE + (lit[i] ? EXC : 0);
      for (var j = 0; j < N; j++) {
        var d = Math.abs(i - j);
        if (lit[j] && d < INH.length) a -= INH[d];
      }
      out.push(Math.max(0, a));
    }
    return out;
  }

  var PRESETS = [
    ["Jeden receptor (8)", [8]],
    ["Pas światła 6–10", [6, 7, 8, 9, 10]],
    ["Krawędź: jasno 1–7", [1, 2, 3, 4, 5, 6, 7]],
    ["Ciemno", []]
  ];

  function mountLI(box) {
    var lit = [];
    for (var i = 0; i < N; i++) lit.push(false);
    function set(list) {
      for (var k = 0; k < N; k++) lit[k] = list.indexOf(k + 1) >= 0;
      draw();
    }
    function draw() {
      var b = bipolar(lit), max = BASE + EXC;
      var w = 340, cw = 20, x0 = (w - N * cw) / 2, svg = "";
      var yR = 8, hR = 40, yB = 74, hB = 100, base = yB + hB - (BASE / max) * hB;
      svg += '<text class="ts" x="4" y="' + (yR + hR + 16) + '" text-anchor="start">receptory: stuknij, żeby oświetlić</text>';
      for (var i = 0; i < N; i++) {
        var x = x0 + i * cw;
        svg += '<g class="li-r' + (lit[i] ? " on" : "") + '" data-r="' + i + '" role="button" tabindex="0" aria-pressed="' + lit[i] + '" aria-label="Receptor ' + (i + 1) + '">' +
          '<rect x="' + (x + 2) + '" y="' + yR + '" width="' + (cw - 4) + '" height="' + hR + '" rx="5"/>' +
          '<text class="ts" x="' + (x + cw / 2) + '" y="' + (yR + 26) + '" text-anchor="middle">' + (i + 1) + "</text></g>";
        var h = (b[i] / max) * hB;
        var cls = b[i] > BASE + 0.001 ? "up" : b[i] < BASE - 0.001 ? "down" : "";
        svg += '<rect class="li-b ' + cls + '" x="' + (x + 3) + '" y="' + (yB + hB - h).toFixed(1) + '" width="' + (cw - 6) + '" height="' + Math.max(1, h).toFixed(1) + '" rx="3"/>';
      }
      svg += '<line class="ln ln-d" x1="' + (x0 - 4) + '" y1="' + base.toFixed(1) + '" x2="' + (x0 + N * cw + 4) + '" y2="' + base.toFixed(1) + '"/>';
      svg += '<text class="ts" x="4" y="' + (yB + hB + 18) + '" text-anchor="start">komórki dwubiegunowe (kreska = spoczynek)</text>';
      box.querySelector(".li-svg").innerHTML = '<svg viewBox="0 0 340 ' + (yB + hB + 26) + '" role="img" aria-label="Symulacja hamowania obocznego">' + svg + "</svg>";
      var up = [], down = [];
      b.forEach(function (v, k) {
        if (v > BASE + 0.001) up.push(k);
        if (v < BASE - 0.001) down.push(k);
      });
      var msg;
      if (!up.length) msg = "Ciemno: wszystkie komórki dwubiegunowe mają tylko aktywność spontaniczną.";
      else {
        var hi = Math.max.apply(null, b), lo = Math.min.apply(null, b);
        var tops = [], lows = [];
        b.forEach(function (v, k) {
          if (v > hi - 0.001) tops.push(k + 1);
          if (down.length && v < lo + 0.001) lows.push(k + 1);
        });
        var names = function (l) { return l.length > 1 ? "komórki " + l.slice(0, -1).join(", ") + " i " + l[l.length - 1] : "komórka " + l[0]; };
        msg = "Najmocniej pobudzona: " + names(tops) + ". " + (lows.length ? "Najsłabiej: " + names(lows) + " (poniżej spoczynku, bo dostają tylko hamowanie). " : "") +
          (up.length > 2 ? "Zobacz: komórki na brzegu jasnego pasa są pobudzone mocniej niż te w środku, a tuż za brzegiem najsłabiej. Tak siatkówka podkreśla krawędzie." : "Sąsiadki oświetlonego receptora spadają poniżej spoczynku: to hamowanie oboczne.");
      }
      box.querySelector(".li-msg").textContent = msg;
    }
    box.innerHTML =
      '<p class="li-k">Symulator: hamowanie oboczne</p>' +
      '<div class="li-pre">' + PRESETS.map(function (pr, k) { return '<button class="chip" data-pre="' + k + '">' + esc(pr[0]) + "</button>"; }).join("") + "</div>" +
      '<div class="li-svg"></div><p class="li-msg" aria-live="polite"></p>';
    box.addEventListener("click", function (e) {
      var pr = e.target.closest("[data-pre]");
      if (pr) return set(PRESETS[+pr.dataset.pre][1]);
      var r = e.target.closest("[data-r]");
      if (r) {
        lit[+r.dataset.r] = !lit[+r.dataset.r];
        W.sound("tap");
        draw();
      }
    });
    box.addEventListener("keydown", function (e) {
      var r = e.target.closest && e.target.closest("[data-r]");
      if (r && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        e.stopPropagation();
        lit[+r.dataset.r] = !lit[+r.dataset.r];
        draw();
        var again = box.querySelector('[data-r="' + r.dataset.r + '"]');
        if (again) again.focus();
      }
    });
    set([6, 7, 8, 9, 10]);
  }

  W.mountWidgets = function (root, m) {
    root.querySelectorAll('[data-widget="hamowanie"]').forEach(function (box) {
      if (!box.dataset.ready) {
        box.dataset.ready = "1";
        mountLI(box);
      }
    });
    if (m && m.pages && !W.pagesOk(m)) {
      /* Bez zdjęć numery stron zostają zwykłym tekstem. */
      root.querySelectorAll("a[data-page]").forEach(function (a) { a.removeAttribute("data-page"); a.classList.add("pg-off"); });
    }
    if (m && W.pagesOk(m)) {
      root.addEventListener("click", function (e) {
        var a = e.target.closest("[data-page]");
        if (!a) return;
        e.preventDefault();
        W.go("pages", { mod: m.id, page: a.dataset.page });
      });
    }
  };
})();
