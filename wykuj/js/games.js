/* Tryby gry: fiszki, quiz na czas, pary, sortownia, egzamin próbny. */
(function () {
  "use strict";
  var W = window.Wykuj;
  var esc = W.esc;
  var Store = W.Store;
  W.screens = W.screens || {};

  function top(title, sub, right) {
    return (
      '<header class="topbar">' +
      '<button class="icon-btn" data-nav="back" aria-label="Wróć">' + W.icon("back") + "</button>" +
      '<div class="tb-title"><b>' + esc(title) + "</b>" + (sub ? "<span>" + esc(sub) + "</span>" : "") + "</div>" +
      '<div class="tb-right">' + (right || "") + "</div></header>"
    );
  }
  W.top = top;

  /* ================= Fiszki ================= */

  W.screens.cards = function (root, p) {
    var m = W.byId[p.mod];
    var st = Store.state.settings;
    var dir = st.cardDir || "term";
    var allowed = m.concepts.filter(W.allowed);
    var queue;
    if (p.cram) queue = W.sample(allowed, 15);
    else {
      var due = Store.dueCards(m).sort(function (a, b) {
        return Store.card(m.id, a.id).due - Store.card(m.id, b.id).due;
      });
      queue = due.concat(Store.newCards(m).slice(0, 8)).slice(0, 20);
    }

    function boxes() {
      var counts = [0, 0, 0, 0, 0, 0], fresh = 0;
      allowed.forEach(function (c) {
        var s = Store.card(m.id, c.id);
        if (!s) fresh++;
        else counts[s.box]++;
      });
      var cells = '<div class="box new"><b>' + fresh + "</b><span>nowe</span></div>";
      counts.forEach(function (n, i) {
        cells += '<div class="box b' + i + '"><b>' + n + "</b><span>" + (i === 0 ? "do nauki" : "pud. " + i) + "</span></div>";
      });
      return '<div class="boxes" aria-label="Pudełka Leitnera">' + cells + "</div>";
    }

    if (!queue.length) {
      root.innerHTML =
        top("Fiszki", m.title) +
        '<div class="page"><div class="empty"><div class="empty-ic">' + W.icon("check") + "</div>" +
        "<h2>Na dziś wszystko powtórzone</h2><p>Kolejne fiszki wrócą, kiedy przyjdzie ich termin. Im lepiej umiesz kartę, tym rzadziej wraca.</p>" +
        boxes() +
        '<button class="btn primary" data-a="cram">Powtórz 15 losowych mimo to</button></div></div>';
      root.querySelector('[data-a="cram"]').onclick = function () {
        W.go("cards", { mod: m.id, cram: true }, { replace: true });
      };
      return;
    }

    var total = queue.length, done = 0, good = 0, xp = 0, flipped = false, cur = null;
    root.innerHTML =
      top("Fiszki", m.title, '<button class="pill-btn" data-a="dir">' + (dir === "term" ? "Pojęcie → opis" : "Opis → pojęcie") + "</button>") +
      '<div class="page cards-page">' +
      '<div class="lbar slim"><i></i></div>' +
      '<div class="fc-wrap"><button class="fc" aria-live="polite"><div class="fc-in"><div class="fc-face fc-front"></div><div class="fc-face fc-back"></div></div></button></div>' +
      '<p class="fc-tip">Kliknij kartę albo naciśnij spację, żeby ją odwrócić.</p>' +
      '<div class="grade" hidden>' +
      '<button class="btn g-again" data-g="again"><kbd>1</kbd>Nie pamiętam</button>' +
      '<button class="btn g-hard" data-g="hard"><kbd>2</kbd>Z trudem</button>' +
      '<button class="btn g-good" data-g="good"><kbd>3</kbd>Umiem</button></div>' +
      "</div>";
    var $ = function (s) { return root.querySelector(s); };
    var card = $(".fc"), front = $(".fc-front"), back = $(".fc-back"), grade = $(".grade"), tip = $(".fc-tip");

    function faces(c) {
      var termHtml = '<span class="fc-k">Pojęcie</span><h2 class="display">' + esc(c.term) + "</h2>";
      var defHtml = c.plain
        ? '<span class="fc-k">Po ludzku</span><p>' + esc(c.plain) + '</p><span class="fc-k">Na teście</span><p class="fc-def">' + esc(c.def) + "</p>"
        : '<span class="fc-k">Definicja</span><p>' + esc(c.def) + "</p>";
      var badge = W.srcBadge(c.s);
      var unit = m.units[m.unitIdx[c.u]];
      var pic = '<span class="fc-pic">' + W.icon(c.ic || (unit && unit.icon) || "spark") + "</span>";
      var fig = c.fig ? W.figHtml(m, c.fig, true) : "";
      var s = Store.card(m.id, c.id);
      var meta = '<span class="fc-box">' + (s ? "Pudełko " + s.box : "Nowa karta") + "</span>";
      if (dir === "term") {
        front.innerHTML = meta + pic + termHtml + badge;
        back.innerHTML = defHtml + fig + badge;
      } else {
        front.innerHTML = meta + pic + defHtml + badge;
        back.innerHTML = termHtml + '<p class="fc-small">' + esc(c.sh) + "</p>" + fig + badge;
      }
    }

    function show() {
      if (!queue.length) return end();
      cur = queue.shift();
      flipped = false;
      card.classList.remove("flipped");
      grade.hidden = true;
      tip.hidden = false;
      setTimeout(function () {
        faces(cur);
      }, 120);
      $(".lbar i").style.width = Math.round((done / total) * 100) + "%";
    }

    function flip() {
      flipped = !flipped;
      card.classList.toggle("flipped", flipped);
      W.sound("flip");
      if (flipped) {
        grade.hidden = false;
        tip.hidden = true;
      }
    }

    function rate(g) {
      if (!flipped) return;
      Store.gradeCard(m.id, cur.id, g);
      if (g === "again") {
        queue.splice(Math.min(3, queue.length), 0, cur);
        W.sound("wrong");
      } else {
        done++;
        if (g === "good") good++;
        xp += 1;
        Store.addXP(1);
        W.sound("correct", good);
      }
      var full = allowed.every(function (c) {
        var s = Store.card(m.id, c.id);
        return s && s.box >= 3;
      });
      if (full) Store.unlock("deck");
      Store.save();
      show();
    }

    function end() {
      W.resultScreen(root, {
        title: "Talia powtórzona",
        sub: good + " z " + total + " kart oznaczyłeś jako „umiem”.",
        confetti: good === total,
        stats: [
          { label: "Karty", value: String(total) },
          { label: "Umiem", value: String(good), tone: "good" },
          { label: "XP", value: "+" + xp, tone: "gold" }
        ],
        extra: boxes(),
        actions: [
          { label: "Wróć do modułu", fn: function () { W.back(); } },
          { label: "Jeszcze 15 losowych", fn: function () { W.go("cards", { mod: m.id, cram: true }, { replace: true }); } }
        ]
      });
    }

    card.onclick = flip;
    grade.addEventListener("click", function (e) {
      var b = e.target.closest("[data-g]");
      if (b) rate(b.dataset.g);
    });
    $('[data-a="dir"]').onclick = function () {
      st.cardDir = dir === "term" ? "def" : "term";
      Store.save();
      W.go("cards", p, { replace: true });
    };
    W.setKeys(function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!flipped) flip();
        else if (e.key === "Enter") rate("good");
      } else if (flipped && e.key === "1") rate("again");
      else if (flipped && e.key === "2") rate("hard");
      else if (flipped && e.key === "3") rate("good");
    });
    show();
  };

  /* ================= Quiz na czas (Kahoot) ================= */

  var SHAPES = [
    ["k-red", "triangle"], ["k-blue", "diamond"], ["k-yellow", "circle"], ["k-green", "square"]
  ];

  W.screens.kahoot = function (root, p) {
    var m = W.byId[p.mod];
    var pool = m.exercises.filter(function (e) {
      return W.allowed(e) && /^(mcq|tf|which|cloze)$/.test(e.t);
    });
    var items = W.weighted(m.id, pool, 12);
    var i = -1, score = 0, streak = 0, bestStreak = 0, correct = 0;
    var timer = null, startT = 0, limit = 20, answered = false, choice = null;
    var best = Store.mod(m.id).best.kahoot || 0;

    function cleanup() {
      clearInterval(timer);
    }

    function countdown() {
      var n = 3;
      root.innerHTML =
        '<div class="kh kh-intro"><p class="kh-eyebrow">Quiz na czas · 12 pytań</p><div class="kh-count display">3</div>' +
        "<p>Im szybciej, tym więcej punktów. Seria dobrych odpowiedzi daje bonus.</p></div>";
      var el = root.querySelector(".kh-count");
      W.sound("tick");
      timer = setInterval(function () {
        n--;
        if (n <= 0) {
          clearInterval(timer);
          ask();
        } else {
          el.textContent = n;
          W.sound("tick");
        }
      }, 800);
    }

    function ask() {
      i++;
      if (i >= items.length) return end();
      var ex = items[i];
      choice = W.asChoice(ex, m);
      limit = ex.t === "tf" ? 12 : 20;
      answered = false;
      var q = ex.t === "cloze" ? ex.q.replace("___", "_____") : ex.q;
      var isTf = ex.t === "tf";
      var shapes = isTf ? [SHAPES[1], SHAPES[0]] : SHAPES;
      root.innerHTML =
        '<div class="kh">' +
        '<header class="kh-top"><button class="icon-btn" data-nav="back" aria-label="Zakończ">' + W.icon("x") + "</button>" +
        '<span class="kh-n">' + (i + 1) + " / " + items.length + "</span>" +
        '<span class="kh-score"><b>' + score + "</b> pkt</span></header>" +
        '<div class="kh-q"><h2>' + esc(q) + "</h2>" + W.srcBadge(ex.s) + "</div>" +
        '<div class="kh-timer"><span class="kh-sec">' + limit + '</span><div class="kh-tbar"><i></i></div></div>' +
        '<div class="kh-tiles ' + (isTf ? "two" : "") + '">' +
        choice.options
          .map(function (o, j) {
            var sh = shapes[j];
            return '<button class="kt ' + sh[0] + '" data-j="' + j + '">' + W.icon(sh[1], "kt-ic") + "<span>" + esc(o) + "</span><kbd>" + (j + 1) + "</kbd></button>";
          })
          .join("") +
        "</div>" +
        '<div class="kh-reveal" hidden></div></div>';
      var tbar = root.querySelector(".kh-tbar i"), sec = root.querySelector(".kh-sec");
      startT = Date.now();
      requestAnimationFrame(function () {
        tbar.style.transitionDuration = limit + "s";
        tbar.style.width = "0%";
      });
      root.querySelector(".kh-tiles").addEventListener("click", function (e) {
        var b = e.target.closest(".kt");
        if (b) answer(+b.dataset.j);
      });
      var lastShown = limit;
      timer = setInterval(function () {
        var left = Math.max(0, limit - (Date.now() - startT) / 1000);
        var shown = Math.ceil(left);
        if (shown !== lastShown) {
          lastShown = shown;
          sec.textContent = shown;
          if (shown <= 5 && shown > 0) W.sound("tick");
        }
        if (left <= 0) answer(-1);
      }, 100);
    }

    function answer(j) {
      if (answered) return;
      answered = true;
      clearInterval(timer);
      var ex = items[i];
      var elapsed = (Date.now() - startT) / 1000;
      var ok = j === choice.correct;
      Store.record(m.id, ex.id, ok);
      var pts = 0;
      if (ok) {
        streak++;
        bestStreak = Math.max(bestStreak, streak);
        correct++;
        pts = Math.round(1000 * (1 - Math.min(1, elapsed / limit) / 2)) + Math.min(streak - 1, 5) * 100;
        score += pts;
        W.sound("correct", streak);
      } else {
        streak = 0;
        W.sound("wrong");
      }
      var tiles = root.querySelectorAll(".kt");
      tiles.forEach(function (t, k) {
        t.disabled = true;
        if (k === choice.correct) t.classList.add("right");
        else t.classList.add("dim");
        if (k === j && !ok) t.classList.add("wrong");
      });
      var tb = root.querySelector(".kh-tbar i");
      tb.style.transitionDuration = "0s";
      tb.style.width = getComputedStyle(tb).width;
      root.querySelector(".kh-score b").textContent = score;
      var rv = root.querySelector(".kh-reveal");
      rv.className = "kh-reveal " + (ok ? "ok" : "bad");
      rv.innerHTML =
        "<div><b>" + (ok ? "Dobrze! +" + pts : j < 0 ? "Czas minął" : "Niestety nie") + "</b>" +
        (ok && streak >= 2 ? '<span class="kh-streak">' + W.icon("flame") + "seria " + streak + "</span>" : "") +
        (ok ? "" : '<p class="kh-right">Poprawnie: <b>' + esc(choice.options[choice.correct]) + "</b></p>") +
        W.explain(ex, { notes: choice.notes, correctText: choice.options[choice.correct], wrongPicks: !ok && j >= 0 ? [choice.options[j]] : [] }) + "</div>" +
        '<button class="btn primary" data-a="next">' + (i + 1 < items.length ? "Dalej" : "Wynik") + "</button>";
      rv.hidden = false;
      rv.querySelector('[data-a="next"]').onclick = ask;
      rv.querySelector('[data-a="next"]').focus({ preventScroll: true });
    }

    function end() {
      cleanup();
      var rec = score > best;
      if (rec) Store.mod(m.id).best.kahoot = score;
      if (score >= 9000) Store.unlock("kahoot");
      Store.addXP(correct * 2 + 5);
      W.resultScreen(root, {
        title: score + " pkt",
        sub: rec ? "Nowy rekord! Poprzedni: " + best + " pkt." : "Rekord do pobicia: " + best + " pkt.",
        confetti: rec,
        stats: [
          { label: "Poprawne", value: correct + "/" + items.length, tone: "good" },
          { label: "Najdłuższa seria", value: String(bestStreak) },
          { label: "XP", value: "+" + (correct * 2 + 5), tone: "gold" }
        ],
        actions: [
          { label: "Jeszcze raz", fn: function () { W.go("kahoot", p, { replace: true }); } },
          { label: "Wróć do modułu", fn: function () { W.back(); } }
        ]
      });
    }

    W.setKeys(function (e) {
      if (!answered) {
        var n = parseInt(e.key, 10);
        if (choice && n >= 1 && n <= choice.options.length) answer(n - 1);
      } else if (e.key === "Enter") {
        var b = root.querySelector('[data-a="next"]');
        if (b && e.target !== b) {
          e.preventDefault();
          b.click();
        }
      }
    });
    countdown();
    return cleanup;
  };

  /* ================= Pary ================= */

  W.screens.match = function (root, p) {
    var m = W.byId[p.mod];
    var concepts = W.sample(m.concepts.filter(W.allowed), 15);
    var rounds = [concepts.slice(0, 5), concepts.slice(5, 10), concepts.slice(10, 15)].filter(function (r) {
      return r.length >= 2;
    });
    var r = 0, mistakes = 0, start = Date.now(), timer = null;
    var best = Store.mod(m.id).best.match || 0;

    root.innerHTML =
      top("Pary", "Pojęcie i jego sens", '<span class="clock">0.0 s</span>') +
      '<div class="page"><div class="lbar slim"><i></i></div><p class="mg-info">Runda <b class="mg-r">1</b> z ' + rounds.length +
      ' · błąd to +3 s' + (best ? " · rekord " + best.toFixed(1) + " s" : "") + '</p><div class="mg"></div>' +
      '<p class="mg-fb" aria-live="polite">Połącz pojęcie z jego znaczeniem. Pod spodem zobaczysz, co oznacza każda para.</p></div>';
    var clock = root.querySelector(".clock"), grid = root.querySelector(".mg"), mfb = root.querySelector(".mg-fb");
    var byC = {}, missed = {};
    concepts.forEach(function (c) { byC[c.id] = c; });
    function gist(c) {
      return c.plain || c.def;
    }

    function elapsed() {
      return (Date.now() - start) / 1000 + mistakes * 3;
    }
    timer = setInterval(function () {
      clock.textContent = elapsed().toFixed(1) + " s";
    }, 100);

    function round() {
      root.querySelector(".mg-r").textContent = r + 1;
      root.querySelector(".lbar i").style.width = Math.round((r / rounds.length) * 100) + "%";
      var set = rounds[r];
      var L = W.shuffle(set), R = W.shuffle(set);
      grid.innerHTML =
        '<div class="mcol">' + L.map(function (c) { return '<button class="tile big" data-side="L" data-id="' + c.id + '">' + esc(c.term) + "</button>"; }).join("") +
        '</div><div class="mcol">' + R.map(function (c) { return '<button class="tile big" data-side="R" data-id="' + c.id + '">' + esc(c.sh) + "</button>"; }).join("") +
        "</div>";
      var selL = null, selR = null, left = set.length;
      grid.onclick = function (e) {
        var b = e.target.closest(".tile");
        if (!b || b.classList.contains("done")) return;
        W.sound("tap");
        if (b.dataset.side === "L") {
          if (selL) selL.classList.remove("sel");
          selL = b;
        } else {
          if (selR) selR.classList.remove("sel");
          selR = b;
        }
        b.classList.add("sel");
        if (selL && selR) {
          var a = selL, c = selR;
          selL = selR = null;
          if (a.dataset.id === c.dataset.id) {
            a.className = c.className = "tile big done";
            var hit = byC[a.dataset.id];
            mfb.className = "mg-fb ok";
            mfb.innerHTML = "<b>" + esc(hit.term) + ":</b> " + esc(gist(hit));
            left--;
            W.sound("correct", set.length - left);
            if (!left) {
              r++;
              setTimeout(r < rounds.length ? round : end, 350);
            }
          } else {
            mistakes++;
            var cl = byC[a.dataset.id], cr = byC[c.dataset.id];
            missed[cl.id] = missed[cr.id] = true;
            mfb.className = "mg-fb bad";
            mfb.innerHTML = "<b>To nie para.</b> " + esc(W.quote(cl.term)) + " znaczy: " + esc(cl.sh) + ". A " + esc(W.quote(cr.sh)) + " to opis pojęcia " + esc(W.quote(cr.term)) + ".";
            W.sound("wrong");
            W.buzz(30);
            a.classList.add("bad");
            c.classList.add("bad");
            setTimeout(function () {
              a.classList.remove("bad", "sel");
              c.classList.remove("bad", "sel");
            }, 450);
          }
        }
      };
    }

    function end() {
      clearInterval(timer);
      var t = elapsed();
      var rec = !best || t < best;
      if (rec) Store.mod(m.id).best.match = Math.round(t * 10) / 10;
      if (t < 25) Store.unlock("match");
      var xp = 10 + (rec ? 5 : 0);
      Store.addXP(xp);
      var miss = concepts.filter(function (c) { return missed[c.id]; });
      W.resultScreen(root, {
        extra: miss.length
          ? '<h3 class="r-h">Te pary ci się pomyliły</h3><ul class="r-list r-defs">' +
            miss.map(function (c) { return "<li><b>" + esc(c.term) + "</b><span>" + esc(gist(c)) + "</span></li>"; }).join("") + "</ul>"
          : "",
        title: t.toFixed(1) + " s",
        sub: rec ? "Nowy rekord!" : "Rekord: " + best.toFixed(1) + " s",
        confetti: rec,
        stats: [
          { label: "Pary", value: String(concepts.length) },
          { label: "Błędy", value: String(mistakes), tone: mistakes ? "bad" : "good" },
          { label: "XP", value: "+" + xp, tone: "gold" }
        ],
        actions: [
          { label: "Jeszcze raz", fn: function () { W.go("match", p, { replace: true }); } },
          { label: "Wróć do modułu", fn: function () { W.back(); } }
        ]
      });
    }

    round();
    return function () {
      clearInterval(timer);
    };
  };

  /* ================= Sortownia ================= */

  W.screens.sort = function (root, p) {
    var m = W.byId[p.mod];
    var bests = Store.mod(m.id).best.sort || {};

    if (!p.deck) {
      root.innerHTML =
        top("Sortownia", "Przesuń kartę w lewo albo w prawo") +
        '<div class="page"><div class="deck-list">' +
        m.sortDecks
          .map(function (d) {
            var b = bests[d.id];
            return (
              '<button class="deck" data-d="' + d.id + '"><span class="deck-cats"><i>' + esc(d.cats[0]) + "</i><i>" + esc(d.cats[1]) + "</i></span>" +
              "<b>" + esc(d.title) + "</b><span>" + esc(d.sub) + "</span>" +
              '<span class="deck-meta">' + d.items.length + " kart" + (b != null ? " · najlepiej " + Math.round(b * 100) + "%" : "") + "</span></button>"
            );
          })
          .join("") +
        "</div></div>";
      root.querySelector(".deck-list").addEventListener("click", function (e) {
        var b = e.target.closest("[data-d]");
        if (b) W.go("sort", { mod: m.id, deck: b.dataset.d });
      });
      return;
    }

    var deck = m.sortDecks.filter(function (d) { return d.id === p.deck; })[0];
    var items = W.shuffle(deck.items).slice(0, 16);
    var i = 0, correct = 0, wrong = [], busy = false;

    root.innerHTML =
      top(deck.title, "Sortownia", '<span class="clock"><b class="sw-n">1</b>/' + items.length + "</span>") +
      '<div class="page sw-page"><div class="lbar slim"><i></i></div>' +
      '<div class="sw-zones"><div class="sw-z z0">' + W.icon("back") + esc(deck.cats[0]) + '</div><div class="sw-z z1">' + esc(deck.cats[1]) + W.icon("back", "flip") + "</div></div>" +
      '<div class="sw-stage"><div class="sw-card"></div></div>' +
      '<div class="sw-btns"><button class="btn sw-b0" data-c="0"><kbd>←</kbd>' + esc(deck.cats[0]) + '</button><button class="btn sw-b1" data-c="1">' + esc(deck.cats[1]) + "<kbd>→</kbd></button></div>" +
      '<p class="sw-fb" aria-live="polite"></p></div>';
    var card = root.querySelector(".sw-card"), fb = root.querySelector(".sw-fb");

    function show() {
      if (i >= items.length) return end();
      card.className = "sw-card in";
      card.style.transform = "";
      card.textContent = items[i][0];
      root.querySelector(".sw-n").textContent = i + 1;
      root.querySelector(".lbar i").style.width = Math.round((i / items.length) * 100) + "%";
      busy = false;
    }

    var waiting = false;
    function decide(c) {
      if (waiting) return next();
      if (busy) return;
      busy = true;
      var it = items[i];
      var ok = c === it[1];
      var side = it[1] === 0 ? -1 : 1;
      var why = W.sortWhy(deck, it);
      if (ok) {
        correct++;
        W.sound("correct", correct);
        fb.className = "sw-fb ok";
        fb.innerHTML = "<b>" + W.icon("check") + esc(it[0]) + " → " + esc(deck.cats[it[1]]) + ".</b>" + (why ? " " + esc(why) : "");
        card.classList.add("ok");
        card.style.transform = "translateX(" + side * 140 + "%) rotate(" + side * 18 + "deg)";
        setTimeout(next, 260);
      } else {
        wrong.push(it);
        W.sound("wrong");
        W.buzz(30);
        fb.className = "sw-fb bad";
        fb.innerHTML = "<b>" + W.icon("x") + "To jednak: " + esc(deck.cats[it[1]]) + ".</b>" + (why ? " " + esc(why) : "") +
          '<button class="btn primary sw-next" data-a="next">Rozumiem, dalej</button>';
        card.classList.add("bad");
        card.style.transform = "translateX(" + side * 18 + "%)";
        waiting = true;
        fb.querySelector(".sw-next").focus({ preventScroll: true });
      }
    }
    function next() {
      if (waiting) {
        waiting = false;
        var side = items[i][1] === 0 ? -1 : 1;
        card.style.transform = "translateX(" + side * 140 + "%) rotate(" + side * 18 + "deg)";
        return setTimeout(function () {
          i++;
          show();
        }, 220);
      }
      i++;
      show();
    }

    /* drag */
    var sx = null, dx = 0;
    card.addEventListener("pointerdown", function (e) {
      if (busy || waiting) return;
      sx = e.clientX;
      dx = 0;
      card.setPointerCapture(e.pointerId);
      card.classList.add("drag");
    });
    card.addEventListener("pointermove", function (e) {
      if (sx == null) return;
      dx = e.clientX - sx;
      card.style.transform = "translateX(" + dx + "px) rotate(" + dx / 14 + "deg)";
      root.querySelector(".z0").classList.toggle("hot", dx < -50);
      root.querySelector(".z1").classList.toggle("hot", dx > 50);
    });
    function release() {
      if (sx == null) return;
      sx = null;
      card.classList.remove("drag");
      root.querySelectorAll(".sw-z").forEach(function (z) { z.classList.remove("hot"); });
      if (Math.abs(dx) > 80) decide(dx > 0 ? 1 : 0);
      else card.style.transform = "";
    }
    card.addEventListener("pointerup", release);
    card.addEventListener("pointercancel", release);
    root.querySelector(".sw-btns").addEventListener("click", function (e) {
      var b = e.target.closest("[data-c]");
      if (b) decide(+b.dataset.c);
    });
    fb.addEventListener("click", function (e) {
      if (e.target.closest('[data-a="next"]')) next();
    });
    W.setKeys(function (e) {
      if (waiting && (e.key === "Enter" || e.key === " " || e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
        return next();
      }
      if (e.key === "ArrowLeft") decide(0);
      else if (e.key === "ArrowRight") decide(1);
    });

    function end() {
      var acc = correct / items.length;
      var all = Store.mod(m.id).best;
      all.sort = all.sort || {};
      if (all.sort[deck.id] == null || acc > all.sort[deck.id]) all.sort[deck.id] = acc;
      if (!wrong.length) Store.unlock("sort");
      Store.addXP(correct);
      W.resultScreen(root, {
        title: Math.round(acc * 100) + "%",
        sub: wrong.length ? "Te karty warto przejrzeć:" : "Bez ani jednego błędu.",
        confetti: !wrong.length,
        stats: [
          { label: "Dobrze", value: correct + "/" + items.length, tone: "good" },
          { label: "Błędy", value: String(wrong.length), tone: wrong.length ? "bad" : "" },
          { label: "XP", value: "+" + correct, tone: "gold" }
        ],
        extra: wrong.length
          ? '<ul class="r-list r-defs">' + wrong.map(function (w) {
              var why = W.sortWhy(deck, w);
              return "<li><b>" + esc(w[0]) + " → " + esc(deck.cats[w[1]]) + "</b>" + (why ? "<span>" + esc(why) + "</span>" : "") + "</li>";
            }).join("") + "</ul>"
          : "",
        actions: [
          { label: "Jeszcze raz", fn: function () { W.go("sort", p, { replace: true }); } },
          { label: "Inna talia", fn: function () { W.back(); } }
        ]
      });
    }
    show();
  };

  /* ================= Egzamin próbny ================= */

  W.screens.exam = function (root, p) {
    var m = W.byId[p.mod];
    var N = 20;
    var pool = m.exercises.filter(function (e) {
      return e.s !== "D" && /^(mcq|tf|which|cloze)$/.test(e.t);
    });
    var hist = Store.mod(m.id).exams;

    root.innerHTML =
      top("Egzamin próbny", m.title) +
      '<div class="page"><div class="exam-intro">' +
      '<p class="eyebrow">' + esc(m.course.name) + "</p>" +
      '<h1 class="display">Test zamknięty</h1>' +
      "<ul class='rules'><li><b>" + N + " pytań</b> jednokrotnego wyboru, losowanych z całego wykładu</li>" +
      "<li>Bez podpowiedzi. Wynik i omówienie dopiero po oddaniu</li>" +
      "<li>Tylko materiał prowadzącego (" + esc(m.sourceNames.S) + (m.sourceNames.U ? ", " + esc(m.sourceNames.U) : "") + "). Bez dopowiedzeń ★</li>" +
      (m.examNote ? "<li>" + esc(m.examNote) + "</li>" : "<li>Zaliczenie: <b>więcej niż " + Math.round(m.passRatio * 100) + "%</b>, jak na prawdziwym teście</li>") + "</ul>" +
      (hist.length
        ? '<div class="hist"><span>Twoje podejścia</span><div class="hist-bars">' +
          hist.slice(-10).map(function (h) {
            return '<i class="' + (h.pct > m.passRatio ? "pass" : "fail") + '" style="height:' + Math.max(6, Math.round(h.pct * 100)) + '%" title="' + h.date + ": " + Math.round(h.pct * 100) + '%"></i>';
          }).join("") +
          "</div></div>"
        : "") +
      '<button class="btn primary big" data-a="start">Rozpocznij test</button></div></div>';
    root.querySelector('[data-a="start"]').onclick = start;
    W.setKeys(function (e) {
      if (e.key === "Enter") start();
    });

    var qs, ans, at, t0, timer;

    function start() {
      qs = W.sample(pool, N).map(function (e) {
        var c = W.asChoice(e, m);
        c.ex = e;
        return c;
      });
      ans = qs.map(function () { return -1; });
      at = 0;
      t0 = Date.now();
      root.innerHTML =
        top("Egzamin próbny", m.title, '<span class="clock">0:00</span>') +
        '<div class="page exam">' +
        '<div class="ex-dots"></div>' +
        '<div class="ex-sheet"></div>' +
        '<div class="ex-nav"><button class="btn ghost" data-a="prev">Wstecz</button><button class="btn primary" data-a="next">Dalej</button></div>' +
        '<div class="modal" hidden><div class="modal-card"><h3>Oddać test?</h3><p class="mc-p"></p><div class="row"><button class="btn primary" data-a="submit">Oddaj</button><button class="btn ghost" data-a="cancel">Wróć do pytań</button></div></div></div>' +
        "</div>";
      timer = setInterval(function () {
        var c = root.querySelector(".clock");
        if (c) c.textContent = W.fmtTime(Math.round((Date.now() - t0) / 1000));
      }, 1000);
      root.querySelector(".page").addEventListener("click", onClick);
      W.setKeys(function (e) {
        var n = "abcd".indexOf(e.key.toLowerCase());
        var d = parseInt(e.key, 10);
        if (d >= 1 && d <= 4) n = d - 1;
        if (n >= 0 && n < qs[at].options.length) pick(n);
        else if (e.key === "ArrowRight" || e.key === "Enter") go(at + 1);
        else if (e.key === "ArrowLeft") go(at - 1);
      });
      render();
    }

    function render() {
      var q = qs[at];
      var text = q.ex.t === "cloze" ? q.q.replace("___", "_____") : q.q;
      root.querySelector(".ex-dots").innerHTML = qs
        .map(function (_, k) {
          return '<button class="dot ' + (ans[k] >= 0 ? "on " : "") + (k === at ? "cur" : "") + '" data-go="' + k + '" aria-label="Pytanie ' + (k + 1) + '">' + (k + 1) + "</button>";
        })
        .join("");
      root.querySelector(".ex-sheet").innerHTML =
        '<p class="ex-n">Pytanie ' + (at + 1) + " z " + qs.length + "</p>" +
        '<h2 class="ex-q">' + esc(text) + "</h2>" +
        '<div class="ex-opts">' +
        q.options
          .map(function (o, k) {
            return '<button class="ex-o ' + (ans[at] === k ? "sel" : "") + '" data-o="' + k + '"><span class="ex-l">' + "abcd"[k] + ")</span><span>" + esc(o) + "</span></button>";
          })
          .join("") +
        "</div>";
      root.querySelector('[data-a="prev"]').disabled = at === 0;
      root.querySelector('[data-a="next"]').textContent = at === qs.length - 1 ? "Oddaj test" : "Dalej";
    }

    function pick(k) {
      ans[at] = k;
      W.sound("tap");
      render();
    }

    function go(k) {
      if (k >= qs.length) return askSubmit();
      if (k < 0) return;
      at = k;
      render();
    }

    function askSubmit() {
      var empty = ans.filter(function (a) { return a < 0; }).length;
      var mod = root.querySelector(".modal");
      mod.querySelector(".mc-p").textContent = empty
        ? "Bez odpowiedzi zostało " + empty + " pytań. Puste liczą się jako błędne."
        : "Wszystkie pytania mają odpowiedź.";
      mod.hidden = false;
    }

    function onClick(e) {
      var t = e.target.closest("[data-o],[data-go],[data-a]");
      if (!t) return;
      if (t.dataset.o != null) pick(+t.dataset.o);
      else if (t.dataset.go != null) go(+t.dataset.go);
      else if (t.dataset.a === "prev") go(at - 1);
      else if (t.dataset.a === "next") go(at + 1);
      else if (t.dataset.a === "submit") finish();
      else if (t.dataset.a === "cancel") root.querySelector(".modal").hidden = true;
    }

    function finish() {
      clearInterval(timer);
      var secs = Math.round((Date.now() - t0) / 1000);
      var ok = 0, wrongList = [], rightList = [];
      qs.forEach(function (q, k) {
        var good = ans[k] === q.correct;
        Store.record(m.id, q.ex.id, good);
        if (good) {
          ok++;
          rightList.push({ q: q, a: ans[k] });
        } else wrongList.push({ q: q, a: ans[k] });
      });
      function reviewItem(w, good) {
        var right = w.q.options[w.q.correct];
        var text = w.q.ex.t === "cloze" ? w.q.q.replace("___", "_____") : w.q.q;
        return (
          "<li><p>" + esc(text) + "</p>" +
          (good
            ? '<span class="rv-good">Twoja: ' + esc(right) + "</span>"
            : (w.a >= 0 ? '<span class="rv-bad">Twoja: ' + esc(w.q.options[w.a]) + "</span>" : '<span class="rv-bad">Bez odpowiedzi</span>') +
              '<span class="rv-good">Poprawna: ' + esc(right) + "</span>") +
          W.explain(w.q.ex, { notes: w.q.notes, correctText: right, wrongPicks: !good && w.a >= 0 ? [w.q.options[w.a]] : [] }) +
          "</li>"
        );
      }
      var pct = ok / qs.length;
      var pass = pct > m.passRatio;
      hist.push({ date: W.today(), pct: pct, secs: secs });
      if (hist.length > 30) hist.shift();
      if (pass) Store.unlock("exam");
      if (pct >= 0.9) Store.unlock("exam90");
      var xp = ok * 2 + (pass ? 15 : 0);
      Store.addXP(xp);
      W.resultScreen(root, {
        fail: !pass,
        title: Math.round(pct * 100) + "%",
        sub: ok + " z " + qs.length + " punktów · " + W.fmtTime(secs),
        confetti: pass,
        stats: [
          { label: "Wynik", value: pass ? "Zaliczone" : "Niezaliczone", tone: pass ? "good" : "bad" },
          { label: "Próg", value: "> " + Math.round(m.passRatio * 100) + "%" },
          { label: "XP", value: "+" + xp, tone: "gold" }
        ],
        extra:
          '<div class="stamp ' + (pass ? "pass" : "fail") + '">' + (pass ? "ZALICZONE" : "POPRAW") + "</div>" +
          (wrongList.length
            ? '<h3 class="r-h">Do przejrzenia (' + wrongList.length + ")</h3><ol class=\"review\">" +
              wrongList.map(function (w) { return reviewItem(w, false); }).join("") +
              "</ol>"
            : "") +
          (rightList.length
            ? '<details class="r-more"><summary>Dobrze (' + rightList.length + '): zobacz, dlaczego</summary><ol class="review">' +
              rightList.map(function (w) { return reviewItem(w, true); }).join("") +
              "</ol></details>"
            : ""),
        actions: [
          { label: "Nowy test", fn: function () { W.go("exam", p, { replace: true }); } },
          { label: "Wróć do modułu", fn: function () { W.back(); } }
        ]
      });
    }

    return function () {
      clearInterval(timer);
    };
  };
})();
