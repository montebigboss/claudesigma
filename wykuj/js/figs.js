/* Schematy dla wzrokowców: rysowane w SVG, kolorowane przez CSS (motyw przedmiotu,
 * jasny i ciemny), projektowane na szerokość telefonu (340 jednostek).
 *
 * Każdy schemat: { cap (podpis i aria-label), w, h, body, n (id sekcji notatek), c (id pojęć) }.
 * Pojęcia z listy c dostają schemat na odwrocie fiszki.
 */
(function () {
  "use strict";
  var W = window.Wykuj;
  var esc = W.esc;
  var r1 = function (v) { return Math.round(v * 10) / 10; };

  /* ---------- prymitywy ---------- */

  function T(x, y, s, cls, anchor, extra) {
    var lines = [].concat(s);
    var dy = /\bts\b/.test(cls || "") ? 13 : 15;
    return (
      '<text class="' + (cls || "t") + '" x="' + x + '" y="' + r1(y) + '" text-anchor="' + (anchor || "middle") + '"' + (extra || "") + ">" +
      lines.map(function (l, i) { return '<tspan x="' + x + '" dy="' + (i ? dy : 0) + '">' + esc(l) + "</tspan>"; }).join("") +
      "</text>"
    );
  }
  /* tekst wyśrodkowany pionowo wokół cy */
  function Tc(cx, cy, s, cls) {
    var lines = [].concat(s);
    var dy = /\bts\b/.test(cls || "") ? 13 : 15;
    return T(cx, cy - ((lines.length - 1) * dy) / 2 + 4.5, lines, cls);
  }
  function R(x, y, w, h, cls) {
    return '<rect class="' + (cls || "bx") + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="10"/>';
  }
  /* pudełko z tytułem i opcjonalnym podpisem */
  function B(x, y, w, h, title, sub, cls) {
    var out = R(x, y, w, h, cls), cx = x + w / 2;
    if (!sub) return out + Tc(cx, y + h / 2, title, "tb");
    var tl = [].concat(title), sl = [].concat(sub);
    var total = tl.length * 15 + sl.length * 13;
    var top = y + h / 2 - total / 2 + 11;
    return out + T(cx, top, tl, "tb") + T(cx, top + tl.length * 15 + 1, sl, "ts");
  }
  /* strzałka: linia + grot jako wielokąt */
  function A(x1, y1, x2, y2, cls, dash) {
    var ang = Math.atan2(y2 - y1, x2 - x1), L = 8, hw = 4.5;
    var bx = x2 - L * Math.cos(ang), by = y2 - L * Math.sin(ang);
    var p1 = [bx + hw * Math.sin(ang), by - hw * Math.cos(ang)], p2 = [bx - hw * Math.sin(ang), by + hw * Math.cos(ang)];
    var accent = /ln-a/.test(cls || "");
    return (
      '<line class="ln ' + (cls || "") + (dash ? " ln-d" : "") + '" x1="' + r1(x1) + '" y1="' + r1(y1) + '" x2="' + r1(bx) + '" y2="' + r1(by) + '"/>' +
      '<polygon class="' + (accent ? "ar-a" : "ar") + '" points="' + r1(x2) + "," + r1(y2) + " " + r1(p1[0]) + "," + r1(p1[1]) + " " + r1(p2[0]) + "," + r1(p2[1]) + '"/>'
    );
  }
  function L(x1, y1, x2, y2, cls) {
    return '<line class="ln ' + (cls || "") + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"/>';
  }
  /* piktogram z biblioteki ikon, osadzony w schemacie */
  function I(name, x, y, size, cls) {
    return '<svg x="' + x + '" y="' + y + '" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" class="pic" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + W.iconPath(name) + "</svg>";
  }

  /* ---------- rejestr ---------- */

  W.addFigs = function (modId, figs) {
    var m = W.byId[modId];
    if (!m) return;
    m.figs = figs;
    Object.keys(figs).forEach(function (k) {
      (figs[k].c || []).forEach(function (cid) {
        m.concepts.forEach(function (c) { if (c.id === cid && !c.fig) c.fig = k; });
      });
    });
  };

  W.figHtml = function (m, key, small) {
    var f = m.figs && m.figs[key];
    if (!f) return "";
    return (
      '<figure class="fig' + (small ? " fig-sm" : "") + '"><svg viewBox="0 0 ' + f.w + " " + f.h + '" role="img" aria-label="' + esc(f.cap) +
      '" xmlns="http://www.w3.org/2000/svg">' + f.body + "</svg>" + (small ? "" : "<figcaption>" + esc(f.cap) + "</figcaption>") + "</figure>"
    );
  };

  W.figsFor = function (m, noteId) {
    if (!m.figs) return "";
    return Object.keys(m.figs)
      .filter(function (k) { return m.figs[k].n === noteId; })
      .map(function (k) { return W.figHtml(m, k); })
      .join("");
  };

  /* ================= Procesy poznawcze ================= */

  function ppEtapy() {
    var names = [
      ["1 · Bodziec fizyczny", "energia dostępna dla zmysłu"],
      ["2 · Receptor", "wyspecjalizowana komórka"],
      ["3 · Transdukcja", "w receptorze: energia → sygnał"],
      [["4 · Kodowanie", "neuronalne"], "wzorce aktywności neuronów"],
      [["5 · Organizacja", "percepcyjna"], "cechy → obiekty i zdarzenia"],
      ["6 · Rozpoznanie", "kategoria, osoba, znaczenie"]
    ];
    var x = 26, w = 206, h = 58, gap = 26, out = "";
    names.forEach(function (n, i) {
      var y = 8 + i * (h + gap);
      out += B(x, y, w, h, n[0], n[1], i === 2 ? "bx-a" : "bx");
      if (i < 5) out += A(x + w / 2 + 20, y + h, x + w / 2 + 20, y + h + gap);
      if (i >= 2 && i < 5) out += A(x + 46, y + h + gap, x + 46, y + h, "", true);
    });
    var gy = 8 + 3 * (h + gap);
    out += B(246, gy, 88, 3 * h + 2 * gap, ["kontekst", "cele", "pamięć", "oczekiwania"], "", "bx-g");
    out += T(290, gy - 6, "odgórnie:", "ts");
    for (var k = 3; k < 6; k++) out += A(246, 8 + k * (h + gap) + h / 2, x + w, 8 + k * (h + gap) + h / 2, "", true);
    var ay = 8 + 6 * (h + gap);
    out += A(x + w / 2 + 20, ay - gap, x + w / 2 + 20, ay);
    out += B(x, ay, w, 44, "Działanie", "ruch oczu, podejście, dotyk", "bx-a");
    out += '<path class="ln ln-a" d="M' + x + "," + (ay + 22) + " H10 V34 H" + (x - 8) + '"/>';
    out += '<polygon class="ar-a" points="' + x + ",34 " + (x - 8) + ",29.5 " + (x - 8) + ',38.5"/>';
    out += T(20, 290, "pętla sensoryczno-ruchowa", "ts ta", "middle", ' transform="rotate(-90 20 290)"');
    return { w: 340, h: ay + 52, body: out };
  }

  function ppOdwrotny() {
    var ex = 300, ey = 92, far = 22;
    var yAt = function (x, top) { return ey + (top ? -1 : 1) * ((ex - 18 - x) / (ex - 18 - far)) * 72; };
    var out = "";
    out += '<path class="soft" d="M' + (ex - 18) + "," + ey + " L" + far + "," + (ey - 72) + " L" + far + "," + (ey + 72) + ' Z"/>';
    out += L(ex - 18, ey, far, ey - 72) + L(ex - 18, ey, far, ey + 72);
    out += '<ellipse class="obj" cx="40" cy="' + ey + '" rx="7" ry="' + r1(ey - yAt(40, true)) + '"/>';
    out += '<ellipse class="obj obj-a" cx="190" cy="' + ey + '" rx="5" ry="' + r1(ey - yAt(190, true)) + '"/>';
    out += '<ellipse class="bx" cx="' + ex + '" cy="' + ey + '" rx="20" ry="12"/><circle class="acf" cx="' + (ex - 8) + '" cy="' + ey + '" r="5"/>';
    out += T(ex, ey + 30, "oko", "ts");
    out += T(258, ey - 5, "α", "tb ta");
    out += T(40, 186, ["A: duży,", "daleko"], "tb", "start");
    out += T(190, 186, ["B: mały,", "blisko"], "tb ta");
    out += B(222, 168, 114, 44, "ten sam obraz", "na siatkówce", "bx-a");
    return { w: 340, h: 218, body: out };
  }

  function ppBodzce() {
    var out = "";
    out += T(52, 98, "A", "huge ta");
    out += L(52, 40, 196, 82, "ln-d") + L(52, 104, 196, 82, "ln-d");
    out += '<circle class="bx" cx="236" cy="82" r="42"/><ellipse class="bx-a" cx="196" cy="82" rx="5" ry="14"/>';
    out += T(268, 76, "A", "mid ta", "middle", ' transform="rotate(180 268 70)"');
    out += T(52, 140, ["dystalny:", "litera na tablicy"], "ts", "middle");
    out += T(236, 140, ["proksymalny:", "wzorzec światła na siatkówce"], "ts", "middle");
    return { w: 340, h: 170, body: out };
  }

  function ppLejek() {
    var out = '<path class="soft" d="M20,40 L320,40 L188,168 L188,200 L152,200 L152,168 Z"/>';
    out += '<path class="ln" d="M20,40 L152,168 L152,200 M320,40 L188,168 L188,200"/>';
    for (var i = 0; i < 26; i++) {
      var row = i % 2, col = Math.floor(i / 2);
      out += '<circle class="dot" cx="' + (36 + col * 22 + row * 11) + '" cy="' + (52 + row * 12) + '" r="3"/>';
    }
    out += '<circle class="acf" cx="170" cy="214" r="3.5"/><circle class="acf" cx="170" cy="226" r="3.5"/>';
    out += T(170, 24, "≈ 1 000 000 000 bitów/s wpada", "tb");
    out += Tc(170, 104, ["uwaga", "wybiera i redukuje"], "tb ta");
    out += T(170, 252, "≈ 10 bitów/s świadomie", "tb");
    return { w: 340, h: 262, body: out };
  }

  function ppKierunki() {
    var out = "";
    out += B(20, 8, 300, 46, "wiedza · oczekiwania · cele", "pamięć · kultura", "bx-g");
    out += B(100, 104, 140, 40, "spostrzeżenie", "", "bx-a");
    out += B(20, 194, 300, 46, "dźwięk · kolor · kształt", "lokalizacja · ruch", "bx");
    out += A(170, 54, 170, 104);
    out += A(170, 194, 170, 144);
    out += T(180, 84, "odgórnie (top-down)", "ts", "start");
    out += T(180, 174, "oddolnie (bottom-up)", "ts", "start");
    return { w: 340, h: 248, body: out };
  }

  function ppUmysl() {
    var out = '<ellipse class="bx-a" cx="170" cy="30" rx="72" ry="22"/>' + Tc(170, 30, "UMYSŁ", "tb");
    var boxes = [
      [6, "Reprezentacje", ["stany niosące", "informację"]],
      [119, "Świadomość", ["kiedy stają się", "przeżyciem"]],
      [232, "Procesy", ["przetwarzanie", "w czasie"]]
    ];
    boxes.forEach(function (b, i) {
      out += B(b[0], 104, 102, 66, b[1], b[2], i === 1 ? "bx-g" : "bx");
      out += A(170 + (i - 1) * 40, 52, b[0] + 51, 104);
    });
    return { w: 340, h: 178, body: out };
  }

  W.registerFigs = W.registerFigs || [];
  W.registerFigs.push(function () {
    W.addFigs("pp-w1", {
      umysl: { n: "p3", c: ["reprezentacje", "procesy", "swiadomosc"], cap: "Psychologia poznawcza bada umysł w trzech obszarach: co w nim jest, kiedy to przeżywamy i jak to się zmienia w czasie.", fn: ppUmysl },
      odwrotny: { n: "p6", c: ["odwrotny", "kat", "fizyka-percepcja"], cap: "Duży obiekt daleko i mały blisko wypełniają ten sam kąt widzenia, więc dają na siatkówce identyczny obraz. Mózg musi zgadnąć, który to.", fn: ppOdwrotny },
      etapy: { n: "p7", c: ["bodziec-f", "receptor", "transdukcja", "kodowanie", "organizacja", "rozpoznanie", "petle", "odgorne-wplywy"], cap: "Sześć etapów od bodźca do rozpoznania. Przerywane strzałki: sprzężenia neuronalne (w górę) i wpływy odgórne (z boku). Działanie zmienia to, co trafia do zmysłów (pętla sensoryczno-ruchowa).", fn: ppEtapy },
      bodzce: { n: "p8", c: ["dystalny", "proksymalny"], cap: "Bodziec dystalny to litera w świecie. Bodziec proksymalny to jej odwrócony obraz, czyli wzorzec światła na siatkówce.", fn: ppBodzce },
      kierunki: { n: "p8", c: ["bottom-up", "top-down"], cap: "Spostrzeżenie powstaje z dwóch stron: od cech bodźca w górę i od wiedzy i oczekiwań w dół.", fn: ppKierunki },
      lejek: { n: "p10", c: ["przepustowosc", "uwaga"], cap: "Do układu nerwowego wpada ok. miliard bitów na sekundę, a świadomie używamy ok. dziesięciu. Uwaga działa jak lejek.", fn: ppLejek }
    });
  });

  /* ================= Logika ================= */

  function lgTrojkat() {
    var out = "";
    out += L(170, 52, 70, 150) + L(170, 52, 270, 150) + L(70, 166, 270, 166, "ln-d");
    out += B(110, 8, 120, 46, "ZNAK", "coś (dym)", "bx-a");
    out += B(8, 146, 124, 46, "PRZEDMIOT", "czegoś (ogień)", "bx");
    out += B(208, 146, 124, 46, "UŻYTKOWNIK", "dla kogoś (ty)", "bx-g");
    out += T(96, 96, "oznacza", "ts", "end");
    out += T(244, 96, "odczytuje", "ts", "start");
    out += T(170, 210, "przez znak dochodzi do poznania przedmiotu", "ts");
    return { w: 340, h: 218, body: out };
  }

  function lgDzialy() {
    var out = "";
    out += B(130, 104, 80, 40, "ZNAK", "", "bx-a");
    out += B(8, 104, 84, 40, "inny znak", "", "bx");
    out += B(130, 8, 80, 40, "świat", "", "bx");
    out += B(248, 104, 84, 40, "człowiek", "", "bx-g");
    out += A(130, 124, 92, 124) + A(92, 124, 130, 124);
    out += A(170, 104, 170, 48) + A(170, 48, 170, 104);
    out += A(210, 124, 248, 124) + A(248, 124, 210, 124);
    out += T(111, 164, "syntaktyka", "tb ta");
    out += T(178, 80, "semantyka", "tb ta", "start");
    out += T(229, 164, "pragmatyka", "tb ta");
    out += T(170, 196, "Każdy dział bada inną relację znaku.", "ts");
    return { w: 340, h: 206, body: out };
  }

  function lgPoziomy() {
    var out = "";
    out += B(40, 8, 260, 44, "„Kot” jest rzeczownikiem.", "metajęzyk: mówi o słowie", "bx-g");
    out += B(40, 92, 260, 44, "Kot ma cztery łapy.", "język przedmiotowy: mówi o świecie", "bx");
    out += A(170, 52, 170, 92);
    out += A(170, 136, 170, 172);
    out += I("cat", 150, 172, 40, "ta");
    out += T(250, 196, "prawdziwy kot", "ts");
    return { w: 340, h: 220, body: out };
  }

  function lgZnaki() {
    var out = "";
    out += B(120, 6, 100, 32, "ZNAKI", "", "bx-a");
    out += B(8, 60, 150, 44, "geneza", "", "bx");
    out += B(182, 60, 150, 44, ["stosunek do", "świadomości"], "", "bx");
    out += L(170, 38, 83, 60) + L(170, 38, 257, 60);
    var left = [["naturalny", "dym → ogień"], ["konwencjonalny", "czarna opaska"], ["ikoniczny", "mapa, zdjęcie"]];
    var right = [["instrumentalny", "ślad"], ["formalny", "słowo"]];
    out += L(22, 104, 22, 116 + 2 * 44 + 18);
    left.forEach(function (c, i) {
      var y = 116 + i * 44;
      out += L(22, y + 18, 34, y + 18) + B(34, y, 124, 36, c[0], c[1], "bx");
    });
    out += L(196, 104, 196, 116 + 44 + 18);
    right.forEach(function (c, i) {
      var y = 116 + i * 44;
      out += L(196, y + 18, 208, y + 18) + B(208, y, 124, 36, c[0], c[1], i === 1 ? "bx-a" : "bx");
    });
    return { w: 340, h: 256, body: out };
  }

  W.registerFigs.push(function () {
    W.addFigs("lg-w1", {
      dzialy: { n: "l5", c: ["syntaktyka", "semantyka", "pragmatyka"], cap: "Trzy działy semiotyki to trzy relacje znaku: z innymi znakami, ze światem i z człowiekiem.", fn: lgDzialy },
      trojkat: { n: "l6", c: ["znak", "trojczlonowa"], cap: "Znak to relacja trójczłonowa: coś (dym) jest znakiem czegoś (ognia) dla kogoś (ciebie).", fn: lgTrojkat },
      znaki: { n: "l7", c: ["naturalny", "konwencjonalny", "ikoniczny", "instrumentalny", "formalny"], cap: "Dwa podziały znaków: według genezy i według stosunku do świadomości użytkownika. Znaki językowe są formalne.", fn: lgZnaki },
      poziomy: { n: "l10", c: ["metajezyk"], cap: "Język przedmiotowy mówi o świecie, metajęzyk o słowach. Cudzysłów to sygnał, że mówimy o słowie.", fn: lgPoziomy }
    });
  });

  /* ================= Antropologia ================= */

  function afCalosc() {
    var out = "";
    var pieces = [["ciało", "anatomia"], ["psychika", "psychologia"], ["kultura", "etnologia"], ["myślenie", "neuronauki"]];
    pieces.forEach(function (p, i) {
      var x = 8 + (i % 2) * 76, y = 22 + Math.floor(i / 2) * 70;
      out += B(x, y, 70, 62, p[0], p[1], "bx");
    });
    out += A(162, 92, 196, 92);
    out += T(179, 82, "?", "tb ta");
    out += B(200, 22, 132, 132, ["kim jest", "człowiek", "jako całość?"], ["antropologia", "filozoficzna"], "bx-a");
    out += T(81, 14, "nauki szczegółowe", "ts");
    return { w: 340, h: 164, body: out };
  }

  function afRodzaje() {
    var cards = [
      ["Przyrodnicza", "gatunek w przyrodzie", "metody nauk", "bx"],
      ["Kulturowa", "wytwory kultury", "fakty kulturowe", "bx"],
      ["Teologiczna", "człowiek a Bóg", "tezy Objawienia", "bx"],
      ["Filozoficzna", "człowiek jako byt", "koncepcja bytu", "bx-a"]
    ];
    var out = "";
    cards.forEach(function (c, i) {
      var x = 8 + (i % 2) * 166, y = 8 + Math.floor(i / 2) * 96;
      out += R(x, y, 158, 88, c[3]);
      out += T(x + 79, y + 26, c[0], "tb");
      out += T(x + 79, y + 50, c[1], "ts");
      out += T(x + 79, y + 70, "↳ " + c[2], "ts ta");
    });
    return { w: 340, h: 200, body: out };
  }

  function afUniesprzecz() {
    var steps = [
      ["1 · Fakt z doświadczenia", ["myślimy pojęciami ogólnymi"], "bx"],
      ["2 · Pytanie", ["co musi istnieć, żeby ten fakt", "nie był sprzeczny?"], "bx"],
      ["3 · Racja", ["w człowieku jest czynnik", "niematerialny"], "bx-a"],
      ["4 · Sprawdzenie", ["bez tej racji fakt byłby", "niemożliwy"], "bx"]
    ];
    var out = "";
    steps.forEach(function (s, i) {
      var y = 8 + i * 82;
      out += B(20, y, 300, 58, s[0], s[1], s[2]);
      if (i < 3) out += A(170, y + 58, 170, y + 82);
    });
    return { w: 340, h: 8 + 3 * 82 + 66, body: out };
  }

  function afDrzewo() {
    var out = "", step = 66, h = 42;
    var rows = [
      [null, ["Antropologia filozoficzna", "bx"]],
      [["nieautonomiczna", "bx-x"], ["autonomiczna", "bx"]],
      [[["dopuszcza", "pozaracjonalne"], "bx-x"], [["tylko rozum", "(racjonalna)"], "bx"]],
      [["aprioryczna", "bx-x"], ["aposterioryczna", "bx-a"]]
    ];
    rows.forEach(function (r, i) {
      var y = 8 + i * step;
      if (i === 0) {
        out += B(50, y, 240, h, r[1][0], "", r[1][1]);
        return;
      }
      var py = y - step + h, px = i === 1 ? 170 : 257;
      out += L(px, py, 83, y) + L(px, py, 257, y);
      out += B(8, y, 150, h, r[0][0], "", r[0][1]) + B(182, y, 150, h, r[1][0], "", r[1][1]);
    });
    out += T(170, 8 + 3 * step + h + 22, "aposterioryczna + realistyczna = ta z wykładu", "ts ta");
    return { w: 340, h: 8 + 3 * step + h + 32, body: out };
  }

  W.registerFigs.push(function () {
    W.addFigs("af-w1", {
      calosc: { n: "n1", c: ["nauki-szcz", "calosc", "redukcjonizm"], cap: "Nauki szczegółowe badają osobne kawałki człowieka. Antropologia filozoficzna pyta, kim jest człowiek jako całość.", fn: afCalosc },
      rodzaje: { n: "n6", c: ["przyrodnicza", "kulturowa", "teologiczna"], cap: "Cztery antropologie różnią się tym, co badają i na czym się opierają. Filozoficzna opiera się na koncepcji bytu.", fn: afRodzaje },
      drzewo: { n: "n7", c: ["nieautonomiczna", "autonomiczna", "pozaracjonalne", "aprioryczna", "rara"], cap: "Na każdym rozwidleniu wykład wybiera prawą gałąź. Tak powstają cechy: autonomiczna, racjonalna, aposterioryczna (plus realistyczna).", fn: afDrzewo },
      uniesprzecz: { n: "n8", c: ["uniesprzecznianie", "metoda"], cap: "Uniesprzecznianie w czterech krokach: od faktu do racji, bez której ten fakt byłby niemożliwy.", fn: afUniesprzecz }
    });
  });

  /* ================= Metody pracy twórczej ================= */

  function mptOlowki() {
    var out = "";
    var pencil = function (y, cls, tipCls) {
      return R(16, y, 200, 26, cls) + '<polygon class="' + tipCls + '" points="216,' + y + " 250," + (y + 13) + " 216," + (y + 26) + '"/>' + R(6, y, 18, 26, "bx");
    };
    out += pencil(30, "bx-r", "tip-r");
    out += T(116, 22, "czerwony ołówek: wytyka błędy", "ts", "middle");
    out += T(290, 52, "✗ ✗", "huge-s tr");
    out += pencil(104, "bx-a", "tip-a");
    out += T(116, 96, "zielony ołówek: wzmacnia ZASOBY", "ts ta", "middle");
    out += T(290, 126, "★", "huge-s ta");
    return { w: 340, h: 148, body: out };
  }

  function mptOpor() {
    var out = "";
    out += '<rect class="water" x="0" y="70" width="340" height="190"/>';
    out += '<path class="ln wave" d="M0,70 q20,-8 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0"/>';
    out += '<polygon class="ice" points="140,70 170,22 205,70"/>';
    out += '<polygon class="ice" points="140,70 205,70 290,140 250,240 90,240 40,150"/>';
    out += T(170, 14, "„to jest bez sensu”", "tb");
    out += T(170, 116, "pod spodem:", "ts");
    out += Tc(166, 160, ["lęk przed oceną", "lęk przed odrzuceniem", "lęk przed trudnymi", "emocjami"], "tb ta");
    return { w: 340, h: 250, body: out };
  }

  function mptSublimacja() {
    var out = "";
    out += B(8, 30, 120, 66, "napięcie", ["złość, lęk,", "energia"], "bx-r");
    out += B(212, 30, 120, 66, "wytwór", ["glina, taniec,", "tekst piosenki"], "bx-a");
    out += A(128, 63, 212, 63, "ln-a");
    out += T(170, 54, "kierunek", "ts ta");
    out += T(170, 124, "nie wygaszamy, nadajemy kierunek", "ts");
    return { w: 340, h: 134, body: out };
  }

  function mptDziesiec() {
    var items = [
      ["spiral", "Proces", "akt tworzenia, nie efekt"], ["pencil", "Bezpieczeństwo", "zielony ołówek, prawo do odmowy"],
      ["hand", "Zmysły", "glina, muzyka, faktury"], ["redo", "Elastyczność", "scenariusz to punkt wyjścia"],
      ["moon", "Metafora", "smutny potwór w lesie"], ["target", "Rytuał", "krąg, iskierka, setting"],
      ["wall", "Opór", "przyjmij z empatią"], ["eye", "Perspektywa", "zagraj zepsutą zabawkę"],
      ["sun", "Sprawczość", "czarne słońce, LOC"], ["flame", "Sublimacja", "glina zamiast pięści"]
    ];
    var out = "", rowH = 48;
    items.forEach(function (it, i) {
      var y = 6 + i * rowH;
      out += R(8, y, 324, rowH - 6, "bx");
      out += '<circle class="acf" cx="28" cy="' + (y + 21) + '" r="12"/>' + T(28, y + 25.5, String(i + 1), "num");
      out += I(it[0], 48, y + 9, 24, "ta");
      out += T(84, y + 18, it[1], "tb", "start");
      out += T(84, y + 33, it[2], "ts", "start");
    });
    return { w: 340, h: 6 + 10 * rowH, body: out };
  }

  W.registerFigs.push(function () {
    W.addFigs("mpt-w1", {
      dziesiec: { n: "intro", cap: "Mapa 10 zasad: każdy obrazek to jedna zasada. Te same symbole są na ścieżce lekcji.", fn: mptDziesiec },
      olowki: { n: "p2", c: ["zielony", "czerwony", "kierunek"], cap: "Czerwony ołówek szuka tego, co nie wyszło. Zielony zauważa i wzmacnia to, co ciekawe: zasoby.", fn: mptOlowki },
      opor: { n: "p7", c: ["opor"], cap: "Opór jak góra lodowa: na wierzchu „to jest bez sensu”, pod wodą lęk.", fn: mptOpor },
      sublimacja: { n: "p10", c: ["sublimacja", "kanalizacja"], cap: "Kanalizacja i sublimacja: trudnej energii nie tłumimy, tylko kierujemy ją w twórczy wytwór.", fn: mptSublimacja }
    });
  });

  /* Rysuje wszystkie schematy po załadowaniu modułów. */
  W.buildFigs = function () {
    W.registerFigs.forEach(function (fn) { fn(); });
    W.modules.forEach(function (m) {
      if (!m.figs) return;
      Object.keys(m.figs).forEach(function (k) {
        var f = m.figs[k], d = f.fn();
        f.w = d.w;
        f.h = d.h;
        f.body = d.body;
      });
    });
  };
  W.buildFigs();
})();
