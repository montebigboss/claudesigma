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
    var accent = /ln-a/.test(cls || ""), gold = /ln-g/.test(cls || "");
    return (
      '<line class="ln ' + (cls || "") + (dash ? " ln-d" : "") + '" x1="' + r1(x1) + '" y1="' + r1(y1) + '" x2="' + r1(bx) + '" y2="' + r1(by) + '"/>' +
      '<polygon class="' + (accent ? "ar-a" : gold ? "ar-g" : "ar") + '" points="' + r1(x2) + "," + r1(y2) + " " + r1(p1[0]) + "," + r1(p1[1]) + " " + r1(p2[0]) + "," + r1(p2[1]) + '"/>'
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

  W.figHtml = function (m, key, small, cid) {
    var f = m.figs && m.figs[key];
    if (!f) return "";
    /* Na fiszce wysoki schemat zastępuje jego mała wersja z podświetlonym fragmentem. */
    if (small && cid && f.mini && f.mini[cid] != null) f = Object.assign({}, f, f.miniFn(f.mini[cid]));
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
    /* Pionowa wersja slajdu „Od bodźca do spostrzeżenia”: sześć etapów, wpływy odgórne
       wchodzą w etapy 4–6, strzałki wstecz między 4–5 i 5–6 (pętla neuronalna),
       działanie wychodzi z 5 i 6 i wraca do etapu 1 (pętla sensoryczno-ruchowa). */
    var st = [
      ["sun", "Bodziec fizyczny", ["energia lub zdarzenie", "dostępne dla zmysłu"]],
      ["eye", "Receptor", ["wyspecjalizowana komórka", "lub zakończenie nerwowe"]],
      ["bolt", "Transdukcja", ["energia → sygnał", "zachodzi w receptorze"]],
      ["pulse", ["Kodowanie", "neuronalne"], ["wzorce aktywności", "neuronów i populacji"]],
      ["shapes", ["Organizacja", "percepcyjna"], ["cechy → powierzchnie,", "obiekty i zdarzenia"]],
      ["bulb", "Rozpoznanie", ["kategoria, obiekt,", "osoba lub znaczenie"]]
    ];
    var x = 30, w = 198, gap = 24, y = 8, out = "", box = [];
    var fx = x + w / 2 + 22, bx = x + w / 2 - 22;
    st.forEach(function (s, i) {
      var tl = [].concat(s[1]), sl = s[2];
      var h = 16 + tl.length * 15 + sl.length * 13;
      box.push({ y: y, h: h, c: y + h / 2 });
      out += R(x, y, w, h, i < 3 ? "bx" : "bx-a");
      out += I(s[0], x + 12, y + h / 2 - 12, 24);
      var top = y + h / 2 - (tl.length * 15 + sl.length * 13) / 2 + 11;
      out += T(x + 46, top, tl, "tb", "start") + T(x + 46, top + tl.length * 15 + 1, sl, "ts", "start");
      out += '<circle class="acf" cx="' + (x + 2) + '" cy="' + (y + 2) + '" r="9"/>' + T(x + 2, y + 6.5, String(i + 1), "num");
      y += h + gap;
    });
    /* przepływ w przód */
    for (var i = 0; i < 5; i++) out += A(fx, box[i].y + box[i].h, fx, box[i + 1].y);
    /* strzałki wstecz: 5 → 4 i 6 → 5 */
    for (var k = 3; k < 5; k++) out += A(bx, box[k + 1].y, bx, box[k].y + box[k].h, "ln-a", true);
    /* 1–3: od świata do sygnału */
    out += L(240, box[0].y + 4, 240, box[2].y + box[2].h - 4) + L(236, box[0].y + 4, 240, box[0].y + 4) + L(236, box[2].y + box[2].h - 4, 240, box[2].y + box[2].h - 4);
    out += Tc(290, box[1].c, ["od świata", "do sygnału"], "ts ta");
    /* wpływy odgórne na 4–6 */
    out += Tc(293, box[3].y + 8, ["od sygnału", "do znaczenia"], "ts ta");
    var gy = box[3].y + 28, gh = box[5].y + box[5].h - gy;
    out += R(250, gy, 86, gh, "bx-g");
    out += T(293, gy + 24, ["wpływy", "odgórne"], "tb");
    out += T(293, gy + 66, ["kontekst", "cele", "pamięć", "oczekiwania"], "ts");
    for (var j = 3; j < 6; j++) out += A(250, Math.max(box[j].c, gy + 10), x + w, Math.max(box[j].c, gy + 10), "", true);
    /* działanie: z organizacji (5) i z rozpoznania (6) */
    var dy = box[5].y + box[5].h + 30, dh = 58;
    out += R(x, dy, w, dh, "bx-x");
    out += I("hand", x + 12, dy + dh / 2 - 12, 24);
    out += T(x + 46, dy + 20, "Działanie", "tb", "start") + T(x + 46, dy + 36, ["także bez pełnego", "świadomego rozpoznania"], "ts", "start");
    out += A(fx, box[5].y + box[5].h, fx, dy, "ln-a");
    var g56 = box[4].y + box[4].h + gap / 2;
    out += '<path class="ln ln-a" d="M' + (x + 14) + "," + (box[4].y + box[4].h) + " V" + g56 + " H20 V" + (dy + 16) + " H" + (x - 9) + '"/>';
    out += '<polygon class="ar-a" points="' + x + "," + (dy + 16) + " " + (x - 8) + "," + (dy + 11.5) + " " + (x - 8) + "," + (dy + 20.5) + '"/>';
    /* pętla sensoryczno-ruchowa: działanie zmienia stymulację → etap 1 */
    var ly = dy + dh + 16;
    out += '<path class="ln ln-a" d="M' + (x + w / 2) + "," + (dy + dh) + " V" + ly + " H8 V" + box[0].c + " H" + (x - 9) + '"/>';
    out += '<polygon class="ar-a" points="' + x + "," + box[0].c + " " + (x - 8) + "," + (box[0].c - 4.5) + " " + (x - 8) + "," + (box[0].c + 4.5) + '"/>';
    out += T(x + w / 2 + 8, ly + 16, "zmiana dostępnej stymulacji → wraca do 1", "ts ta", "middle");
    out += T(x + w / 2 + 8, ly + 30, "(ruch oczu, podejście, dotknięcie)", "ts", "middle");
    return { w: 340, h: ly + 38, body: out };
  }

  /* Wersja na fiszkę: sześć etapów w jednym rzędzie, podświetlony ten, o który pyta karta.
     focus: numer etapu 1–6 albo "odg" (wpływy odgórne), "neuro" (strzałki wstecz), "sr" (działanie). */
  function ppEtapyMini(focus) {
    var icons = ["sun", "eye", "bolt", "pulse", "shapes", "bulb"];
    var names = ["bodziec fizyczny", "receptor", "transdukcja", "kodowanie neuronalne", "organizacja percepcyjna", "rozpoznanie"];
    var top = focus === "odg" ? 40 : 6, cy = top + 30, r = 18, out = "";
    var cx = function (i) { return 30 + i * 56; };
    var hot = function (i) { return focus === i + 1 || ((focus === "odg" || focus === "neuro") && i >= 3) || (focus === "sr" && (i === 4 || i === 5)); };
    var twoWay = focus === "neuro";
    for (var i = 0; i < 6; i++) {
      if (i < 5) {
        out += A(cx(i) + r + 2, cy - (twoWay && i >= 3 ? 5 : 0), cx(i + 1) - r - 2, cy - (twoWay && i >= 3 ? 5 : 0));
        if (twoWay && i >= 3) out += A(cx(i + 1) - r - 2, cy + 5, cx(i) + r + 2, cy + 5, "ln-a", true);
      }
      out += '<circle class="' + (hot(i) ? "bx-a" : "bx") + '" cx="' + cx(i) + '" cy="' + cy + '" r="' + r + '"/>';
      out += I(icons[i], cx(i) - 10, cy - 10, 20);
      out += '<circle class="acf" cx="' + (cx(i) + 13) + '" cy="' + (cy - 14) + '" r="7"/>' + T(cx(i) + 13, cy - 10.5, String(i + 1), "numx");
    }
    var h = cy + r + 8;
    if (typeof focus === "number") {
      var x = Math.min(Math.max(cx(focus - 1), 60), 280);
      out += T(x, cy + r + 18, names[focus - 1], "tb ta");
      h = cy + r + 26;
    } else if (focus === "odg") {
      out += R(146, 4, 192, 22, "bx-g") + T(242, 19, "kontekst · cele · pamięć · oczekiwania", "tx");
      for (var k = 3; k < 6; k++) out += A(cx(k), 26, cx(k), cy - r - 1, "", true);
      out += T(cx(1), cy + r + 18, "wpływy odgórne → etapy 4–6", "tb ta");
      h = cy + r + 26;
    } else if (focus === "neuro") {
      out += T((cx(3) + cx(5)) / 2, cy + r + 18, "strzałki wstecz 4 ⇄ 5 ⇄ 6", "tb ta");
      h = cy + r + 26;
    } else if (focus === "sr") {
      var by = cy + r + 14;
      out += R(cx(4) - 34, by, 90, 24, "bx-x") + T(cx(4) + 11, by + 16, "działanie", "tb");
      out += A(cx(4), cy + r, cx(4), by, "ln-a") + A(cx(5), cy + r, cx(5), by, "ln-a");
      out += '<path class="ln ln-a" d="M' + (cx(4) - 34) + "," + (by + 12) + " H" + cx(0) + " V" + (cy + r + 9) + '"/>';
      out += '<polygon class="ar-a" points="' + cx(0) + "," + (cy + r + 1) + " " + (cx(0) - 4.5) + "," + (cy + r + 9) + " " + (cx(0) + 4.5) + "," + (cy + r + 9) + '"/>';
      out += T(cx(1) + 22, by + 26, "zmienia stymulację", "tx");
      h = by + 32;
    }
    return { w: 340, h: h, body: out };
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
      etapy: { n: "p7", c: ["bodziec-f", "receptor", "transdukcja", "kodowanie", "organizacja", "rozpoznanie", "petla-neuro", "petla-sr", "dzialanie", "odgorne-wplywy"], cap: "Etapy 1–3 prowadzą od świata do sygnału, etapy 4–6 to praca mózgu. Wpływy odgórne (żółta ramka) trafiają w etapy 4–6. Przerywane strzałki w górę to pętla neuronalna. Z organizacji i rozpoznania wychodzi działanie, które zmienia stymulację i wraca do etapu 1: to pętla sensoryczno-ruchowa.", fn: ppEtapy,
        mini: { "bodziec-f": 1, receptor: 2, transdukcja: 3, kodowanie: 4, organizacja: 5, rozpoznanie: 6, "odgorne-wplywy": "odg", "petla-neuro": "neuro", "petla-sr": "sr", dzialanie: "sr" }, miniFn: ppEtapyMini },
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

  /* ================= Ćwiczenia, dr Ozga: czytanka 1 (widzenie) ================= */

  function P(d, cls) {
    return '<path class="' + (cls || "ln") + '" d="' + d + '"/>';
  }
  function C(cx, cy, r, cls) {
    return '<circle class="' + (cls || "bx") + '" cx="' + cx + '" cy="' + cy + '" r="' + r + '"/>';
  }
  function Rs(x, y, w, h, cls, rx) {
    return '<rect class="' + (cls || "bx") + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (rx == null ? 3 : rx) + '"/>';
  }

  function ozMuller() {
    var rows = [["Nerw wzrokowy", "„widzę światło”"], ["Nerw słuchowy", "„słyszę dźwięk”"], ["Nerw węchowy", "„czuję zapach”"]];
    var out = "";
    rows.forEach(function (r, i) {
      var y = 8 + i * 52;
      out += B(8, y, 116, 40, r[0], null, "bx");
      out += A(126, y + 20, 212, y + 20);
      out += I("pulse", 157, y + 4, 24);
      out += B(216, y, 116, 40, r[1], null, i === 0 ? "bx-a" : "bx");
    });
    out += T(170, 174, "zawsze te same impulsy (potencjały czynnościowe),", "ts");
    out += T(170, 188, "o wrażeniu decyduje to, KTÓRY nerw jest aktywny", "ts ta");
    return { w: 340, h: 196, body: out };
  }

  function ozRzeczy() {
    var out = "";
    out += '<circle class="bx-a" cx="118" cy="98" r="88" style="fill-opacity:.55"/>';
    out += '<circle class="bx-g" cx="222" cy="98" r="88" style="fill-opacity:.55"/>';
    out += T(78, 62, "RZECZY", "tb ta");
    out += T(78, 84, ["kształt", "barwa"], "t");
    out += T(78, 128, "CO to jest?", "ts");
    out += T(262, 62, "RELACJE", "tb");
    out += T(262, 84, ["położenie", "ruch"], "t");
    out += T(262, 128, "GDZIE i JAK?", "ts");
    out += T(170, 84, ["szybki", "ruch:", "kontury", "i barwy", "się", "zacierają"], "tx");
    return { w: 340, h: 192, body: out };
  }

  function ozKreacja() {
    var out = "", cx = [44, 128, 212, 296], names = ["kształt", "barwa", "przestrzeń", "ruch"];
    out += B(90, 6, 160, 34, "Obraz na siatkówce", null, "bx");
    cx.forEach(function (x, i) {
      out += A(170, 40, x, 68);
    });
    out += Rs(64, 47, 212, 16, "lbl-bg", 8) + T(170, 59, "1. dekompozycja: każda cecha osobno", "ts ta");
    cx.forEach(function (x, i) {
      out += B(x - 40, 68, 80, 34, names[i], null, "bx-a");
      out += A(x, 102, 135, 146);
    });
    out += B(40, 146, 190, 40, "2. kompozycja", "składanie wyników w całość", "bx-a");
    out += B(246, 146, 86, 40, "pamięć", "wizualna", "bx-g");
    out += A(246, 166, 232, 166, "ln-g");
    out += A(135, 186, 170, 210);
    out += B(60, 210, 220, 44, "Doświadczenie widzenia", "wytworzone, a nie odtworzone", "bx-g");
    return { w: 340, h: 262, body: out };
  }

  function ozOko() {
    var out = "", cx = 210, cy = 105, r = 78;
    function pt(a, rr) { var t = a * Math.PI / 180; return [r1(cx + (rr || r) * Math.cos(t)), r1(cy + (rr || r) * Math.sin(t))]; }
    /* gałka, nerw, rogówka */
    out += P("M268 143 L332 166 L326 184 L262 158 Z", "bx-g");
    out += C(cx, cy, r, "bx");
    /* przedmiot i promienie przez środek soczewki */
    out += A(22, 132, 22, 76, "ln-a");
    out += T(22, 150, "przedmiot", "ts");
    out += L(22, 78, 280, 129, "ln-d ln-a") + L(22, 132, 280, 81, "ln-d ln-a");
    out += P("M146 62 Q108 105 146 148", "ln");
    /* siatkówka (tylna ściana) */
    var a1 = pt(-62, r - 4), a2 = pt(30, r - 4);
    out += P("M" + a1[0] + " " + a1[1] + " A" + (r - 4) + " " + (r - 4) + " 0 0 1 " + a2[0] + " " + a2[1], "st-a");
    /* tęczówka i soczewka */
    out += L(150, 70, 150, 93, "st-b") + L(150, 117, 150, 140, "st-b");
    out += '<ellipse class="bx-b" cx="162" cy="105" rx="9" ry="24"/>';
    /* obraz odwrócony na siatkówce */
    out += A(278, 86, 278, 126, "ln-a");
    /* plamka ślepa: wyjście nerwu */
    var bs = pt(35, r - 2);
    out += C(bs[0], bs[1], 4, "fl-g");
    /* podpisy */
    out += L(124, 36, 134, 70) + T(124, 30, "rogówka", "ts");
    out += L(178, 36, 166, 80) + T(182, 30, "soczewka", "ts");
    out += L(262, 22, 252, 38) + T(270, 18, "siatkówka", "ts ta");
    out += L(150, 152, 150, 140) + T(150, 166, "tęczówka", "ts");
    out += T(150, 179, "(otwór: źrenica)", "tx");
    out += T(298, 110, "dołek", "tx", "start");
    out += T(262, 102, "obraz", "tx", "end");
    out += L(222, 187, 262, 154) + T(212, 198, "plamka ślepa", "ts");
    out += L(318, 186, 316, 178) + T(338, 198, "nerw wzrokowy", "tx", "end");
    out += L(300, 64, 284, 73) + T(338, 60, "twardówka", "tx", "end");
    return { w: 340, h: 206, body: out };
  }

  function ozAkomodacja() {
    var out = "";
    function eye(cy, thick, label, sub) {
      out += C(250, cy, 40, "bx");
      var a1 = [250 + 37 * Math.cos(-1), cy + 37 * Math.sin(-1)], a2 = [250 + 37 * Math.cos(1), cy + 37 * Math.sin(1)];
      out += P("M" + r1(a1[0]) + " " + r1(a1[1]) + " A37 37 0 0 1 " + r1(a2[0]) + " " + r1(a2[1]), "st-a");
      out += '<ellipse class="bx-b" cx="222" cy="' + cy + '" rx="' + thick + '" ry="22"/>';
      out += T(338, cy - 2, label, "ts", "end");
    }
    /* daleki przedmiot: promienie prawie równoległe */
    eye(50, 4, "cieńsza", "");
    out += T(12, 22, "daleki przedmiot", "ts", "start");
    out += L(12, 36, 222, 36, "ln-d ln-a") + L(12, 64, 222, 64, "ln-d ln-a");
    out += L(222, 36, 285, 50, "ln-a") + L(222, 64, 285, 50, "ln-a");
    /* bliski przedmiot: promienie rozbieżne */
    eye(150, 11, "grubsza", "");
    out += C(110, 150, 4, "obj-a");
    out += T(110, 134, "bliski przedmiot", "ts");
    out += L(110, 150, 222, 136, "ln-d ln-a") + L(110, 150, 222, 164, "ln-d ln-a");
    out += L(222, 136, 285, 150, "ln-a") + L(222, 164, 285, 150, "ln-a");
    out += T(222, 102, "soczewka", "ts");
    out += T(170, 204, "blisko: soczewka grubsza · daleko: cieńsza", "ts ta");
    return { w: 340, h: 212, body: out };
  }

  function ozWarstwy() {
    var out = "", xs = [64, 88, 112, 136, 160, 184], y0 = 18;
    out += T(36, 10, "nerw wzrokowy → do mózgu", "tx ta", "start");
    out += T(336, 10, "tył oka", "tx", "end");
    xs.forEach(function (x, i) {
      if (i % 2) out += P("M" + (x - 6) + " " + (y0 + 28) + " L" + x + " " + (y0 + 2) + " L" + (x + 6) + " " + (y0 + 28) + " Z", "bx-a");
      else out += Rs(x - 5, y0, 10, 28, "bx-b", 4);
    });
    out += T(212, y0 + 18, "receptory", "ts", "start");
    out += P("M56 " + (y0 + 42) + " Q124 " + (y0 + 34) + " 192 " + (y0 + 42), "st-g");
    out += T(212, y0 + 44, "horyzontalna", "ts", "start");
    [76, 124, 172].forEach(function (x) {
      out += L(x, y0 + 28, x, y0 + 60) + C(x, y0 + 66, 6, "bx") + L(x, y0 + 72, x, y0 + 100);
    });
    out += T(212, y0 + 70, "dwubiegunowe", "ts", "start");
    out += P("M68 " + (y0 + 88) + " L180 " + (y0 + 88), "st-b ln-d");
    out += T(212, y0 + 92, "amakrynowa", "ts", "start");
    [76, 124, 172].forEach(function (x) {
      out += C(x, y0 + 110, 9, "obj-a");
    });
    out += T(212, y0 + 114, "zwojowe", "ts", "start");
    /* aksony biegną do jednego miejsca i przebijają siatkówkę: plamka ślepa */
    out += P("M76 " + (y0 + 119) + " Q72 " + (y0 + 132) + " 42 " + (y0 + 132) + " M124 " + (y0 + 119) + " Q118 " + (y0 + 138) + " 42 " + (y0 + 136) +
      " M172 " + (y0 + 119) + " Q166 " + (y0 + 144) + " 42 " + (y0 + 140), "st-a");
    out += '<path class="st-a" style="stroke-width:5" d="M40 ' + (y0 + 142) + " L40 " + (y0 - 2) + '"/>';
    /* sygnał w dół, światło w górę */
    out += A(198, y0 + 4, 198, y0 + 104, "ln-a");
    out += A(16, y0 + 168, 16, y0 + 4, "ln-g");
    out += T(170, y0 + 162, "środek oka (stąd wpada światło)", "tx");
    out += T(8, y0 + 186, "złota strzałka: światło mija wszystkie warstwy", "tx", "start");
    out += T(8, y0 + 200, "pomarańczowa: sygnał wraca do komórek zwojowych", "tx", "start");
    return { w: 340, h: y0 + 208, body: out };
  }

  function ozPlamka() {
    var out = Rs(0, 0, 340, 160, "fl-paper", 10);
    out += C(58, 44, 13, "fl-black");
    out += P("M290 30 L290 58 M276 44 L304 44", "st-black");
    out += P("M14 104 L48 104 M68 104 L126 104", "st-black");
    out += P("M290 90 L290 118 M276 104 L304 104", "st-black");
    out += '<text class="tx-black" x="170" y="136" text-anchor="middle">zamknij prawe oko, lewym patrz na krzyżyk</text>';
    out += '<text class="tx-black" x="170" y="150" text-anchor="middle">i powoli przybliżaj albo oddalaj ekran</text>';
    return { w: 340, h: 160, body: out };
  }

  function ozReceptory() {
    var out = "";
    out += Rs(28, 14, 22, 120, "bx-b", 9);
    for (var y = 22; y < 68; y += 7) out += L(31, y, 47, y);
    out += T(60, 22, "PRĘCIK", "tb", "start");
    out += T(60, 42, ["kształt walca", "słabe światło", "bez barw (szarości)", "obwód siatkówki", "ok. 20 × więcej"], "ts", "start");
    out += P("M200 134 L200 70 Q200 40 211 14 Q222 40 222 70 L222 134 Z", "bx-a");
    for (var y2 = 30; y2 < 70; y2 += 7) out += L(205, y2, 217, y2);
    out += T(232, 22, "CZOPEK", "tb ta", "start");
    out += T(232, 42, ["kształt stożka", "jasne światło", "barwy i szczegóły", "dołek środkowy", "ok. 4,6–6 mln"], "ts", "start");
    return { w: 340, h: 142, body: out };
  }

  function ozSwiatlo() {
    var out = "", xs = [32, 98, 170, 240, 308];
    var lab = [["noc bez", "księżyca"], ["pełnia"], ["zmierzch,", "świt"], ["biuro,", "sklep"], ["słońce"]];
    out += A(14, 58, 330, 58);
    xs.forEach(function (x, i) {
      out += L(x, 52, x, 64);
      out += I(i < 2 ? "moon" : "sun", x - 9, 4, 18);
      out += T(x, 34, lab[i], "tx");
    });
    out += T(330, 76, "jaśniej →", "tx", "end");
    out += B(14, 84, 120, 30, "skotopowe", null, "bx-b");
    out += B(96, 120, 140, 30, "mezopowe", null, "bx-g");
    out += B(200, 156, 128, 30, "fotopowe", null, "bx-a");
    out += T(140, 103, "pręciki", "ts", "start");
    out += T(90, 132, ["oba,", "żaden na 100%"], "tx", "end");
    out += T(194, 175, "czopki", "ts", "end");
    return { w: 340, h: 194, body: out };
  }

  function ozGestosc() {
    var out = "", X = function (d) { return r1(182 + d * 2.3); }, Y = function (k) { return r1(170 - k * 0.68); };
    /* osie i siatka */
    out += L(40, 170, 330, 170) + L(40, 30, 40, 170);
    [50, 100, 150, 200].forEach(function (k) {
      out += L(36, Y(k), 40, Y(k)) + T(34, Y(k) + 4, String(k), "tx", "end");
    });
    out += T(44, 22, "tys. receptorów na mm²", "tx", "start");
    [-60, -20, 0, 20, 60].forEach(function (d) {
      out += L(X(d), 170, X(d), 174) + T(X(d), 186, (d > 0 ? "+" : "") + d + "°", "tx");
    });
    out += T(46, 200, "← strona skroniowa", "tx", "start");
    out += T(330, 200, "strona nosowa →", "tx", "end");
    /* plamka ślepa */
    out += '<rect class="bx-x" x="' + X(13) + '" y="30" width="' + r1(X(17) - X(13)) + '" height="140" rx="2"/>';
    out += T(X(15), 26, "plamka ślepa", "tx");
    /* pręciki */
    var rl = [[-60, 75], [-50, 96], [-40, 120], [-30, 140], [-20, 150], [-12, 128], [-6, 70], [-2, 14], [0, 0], [2, 14], [6, 70], [10, 115], [13, 132], [13, 0]];
    var rr = [[17, 0], [17, 146], [20, 150], [30, 140], [40, 120], [50, 96], [60, 75]];
    function line(pts) { return pts.map(function (p, i) { return (i ? "L" : "M") + X(p[0]) + " " + Y(p[1]); }).join(" "); }
    out += P(line(rl), "st-b") + P(line(rr), "st-b");
    /* czopki */
    var cl = [[-60, 6], [-10, 8], [-4, 30], [-1.5, 140], [0, 200], [1.5, 140], [4, 30], [10, 8], [13, 7], [13, 0]];
    var cr = [[17, 0], [17, 7], [60, 6]];
    out += P(line(cl), "st-a") + P(line(cr), "st-a");
    out += T(X(0) - 8, Y(186), "czopki", "ts ta", "end");
    out += T(X(-20), Y(150) - 8, "pręciki", "ts", "middle");
    out += T(X(0), 200, "dołek", "tx ta");
    return { w: 340, h: 206, body: out };
  }

  function ozZbieznosc() {
    var out = "";
    /* dołek: 3 czopki, każdy z własną drogą */
    out += T(85, 14, "DOŁEK", "tb ta");
    [55, 85, 115].forEach(function (x) {
      out += P("M" + (x - 7) + " 50 L" + x + " 22 L" + (x + 7) + " 50 Z", "bx-a");
      out += L(x, 50, x, 78) + C(x, 84, 6, "bx") + L(x, 90, x, 112) + C(x, 120, 8, "obj-a") + A(x, 128, x, 156, "ln-a");
    });
    out += T(85, 174, "1 czopek → 1 komórka", "ts");
    out += T(85, 188, "ostro, ale trzeba światła", "ts ta");
    /* obwód: wiele pręcików na jedną komórkę */
    out += T(255, 14, "OBWÓD", "tb");
    [200, 222, 244, 266, 288, 310].forEach(function (x) {
      out += Rs(x - 5, 22, 10, 28, "bx-b", 4) + L(x, 50, 255, 78);
    });
    out += C(255, 84, 6, "bx") + L(255, 90, 255, 112) + C(255, 120, 8, "obj") + A(255, 128, 255, 156);
    out += T(255, 174, "wiele pręcików → 1 komórka", "ts");
    out += T(255, 188, "czule, ale bez szczegółów", "ts");
    out += L(170, 12, 170, 192, "ln-d");
    return { w: 340, h: 196, body: out };
  }

  function ozDroga() {
    var out = "";
    out += C(95, 28, 20, "bx") + C(95, 28, 7, "bx-b");
    out += C(245, 28, 20, "bx") + C(245, 28, 7, "bx-b");
    out += T(68, 32, "lewe oko", "ts", "end");
    out += T(272, 32, "prawe oko", "ts", "start");
    /* włókna lewego oka (akcent) i prawego (złote) */
    out += P("M88 47 L150 98 L104 146", "st-a") + P("M102 47 L170 100 L236 146", "st-a");
    out += P("M252 47 L190 98 L236 146", "st-g") + P("M238 47 L170 100 L104 146", "st-g");
    out += T(4, 56, ["nerw", "wzrokowy"], "tx", "start");
    out += L(76, 96, 142, 99) + T(4, 92, ["skrzyżowanie", "wzrokowe"], "tx", "start");
    out += L(56, 132, 122, 126) + T(4, 130, ["trakt", "wzrokowy"], "tx", "start");
    out += B(64, 146, 80, 32, "LGN", "wzgórze", "bx");
    out += B(196, 146, 80, 32, "LGN", "wzgórze", "bx");
    /* wzgórki górne */
    out += A(220, 129, 276, 124, "", true);
    out += B(278, 106, 60, 36, "wzgórki", "górne", "bx-x");
    /* promienistość i kora */
    [60, 82, 104, 126, 148].forEach(function (x) { out += L(104, 178, x, 214); });
    [192, 214, 236, 258, 280].forEach(function (x) { out += L(236, 178, x, 214); });
    out += T(4, 186, ["promienistość", "wzrokowa"], "tx", "start");
    out += B(44, 214, 120, 34, "kora wzrokowa", "płat potyliczny", "bx-a");
    out += B(176, 214, 120, 34, "kora wzrokowa", "płat potyliczny", "bx-a");
    return { w: 340, h: 254, body: out };
  }

  function ozPole() {
    var out = "";
    /* od punktu do obwarzanka */
    out += C(40, 34, 3, "obj");
    out += T(40, 60, ["receptor:", "punkt"], "tx");
    out += A(62, 34, 104, 34);
    out += C(140, 34, 22, "bx-r") + C(140, 34, 9, "bx-a");
    out += T(140, 74, ["komórka zwojowa:", "obwarzanek"], "tx");
    out += A(176, 34, 218, 34);
    out += C(270, 34, 34, "bx-x");
    out += T(270, 84, ["dalej w mózgu:", "coraz większe pola"], "tx");
    /* dwa typy */
    out += C(90, 150, 46, "bx-r") + C(90, 150, 19, "bx-a");
    out += T(90, 158, "+", "huge-s ta") + T(90, 124, "−", "huge-s tr") + T(90, 192, "−", "huge-s tr");
    out += C(250, 150, 46, "bx-a") + C(250, 150, 19, "bx-r");
    out += T(250, 158, "−", "huge-s tr") + T(250, 124, "+", "huge-s ta") + T(250, 192, "+", "huge-s ta");
    out += T(90, 214, ["światło w centrum pobudza,", "w otoczce hamuje"], "tx");
    out += T(250, 214, "albo odwrotnie", "tx");
    return { w: 340, h: 236, body: out };
  }

  function ozZelatyna() {
    var out = "";
    out += T(12, 16, "jeden klocek", "ts", "start");
    out += P("M14 50 L128 50 Q140 40 150 60 L190 60 Q200 40 212 50 L326 50 L326 86 L14 86 Z", "bx-a");
    out += Rs(150, 28, 40, 32, "bx-g");
    out += A(96, 102, 166, 62) + T(14, 112, ["zagłębienie", "= pobudzenie"], "ts", "start");
    out += A(262, 102, 206, 47) + T(326, 112, ["wybrzuszenie", "= hamowanie sąsiadów"], "ts", "end");
    out += T(12, 150, "rząd klocków", "ts", "start");
    out += P("M14 172 L76 172 Q84 162 90 186 L130 186 L130 180 L250 180 L250 186 L290 186 Q296 162 304 172 L326 172 L326 208 L14 208 Z", "bx-a");
    [[90, 186], [130, 180], [170, 180], [210, 180], [250, 186]].forEach(function (b) {
      out += Rs(b[0], b[1] - 32, 40, 32, "bx-g");
    });
    out += T(170, 228, "skrajne toną głębiej = brzeg najmocniej pobudzony", "ts ta");
    return { w: 340, h: 236, body: out };
  }

  function ozHermann() {
    var out = Rs(0, 0, 340, 232, "fl-paper", 10), s = 46, g = 12, x0 = 25, y0 = 12;
    for (var r = 0; r < 4; r++) for (var c = 0; c < 5; c++) out += Rs(x0 + c * (s + g), y0 + r * (s + g), s, s, "fl-black", 0);
    return { w: 340, h: 232, body: out };
  }

  function ozZwojowe() {
    var out = "", cols = [[60, "karłowate", "ok. 80%", ["szczegóły,", "czerwony–zielony"], 5, 6, 10, "obj-a"],
      [170, "pyłkowe", "ok. 10%", ["niebieski–żółty"], 3, 9, 18, "fl-b"],
      [280, "parasolowe", "ok. 10%", ["kontrast, ruch,", "2 × szybciej"], 9, 14, 30, "fl-g"]];
    cols.forEach(function (c) {
      var x = c[0], y = 52;
      for (var i = 0; i < c[5]; i++) {
        var a = (i / c[5]) * Math.PI * 2 - Math.PI / 2, L1 = c[6] * (0.7 + 0.3 * ((i * 7) % 3) / 2);
        out += L(x, y, r1(x + Math.cos(a) * (c[4] + L1)), r1(y + Math.sin(a) * (c[4] + L1)));
      }
      out += C(x, y, c[4], c[7]);
      out += T(x, 104, c[1], "tb");
      out += T(x, 120, c[2], "ts");
      out += T(x, 136, c[3], "tx");
    });
    out += Rs(20, 166, 240, 16, "obj-a", 0) + Rs(260, 166, 30, 16, "fl-b", 0) + Rs(290, 166, 30, 16, "fl-g", 0);
    out += T(140, 196, "małe: ok. 90% włókien nerwu wzrokowego", "tx");
    return { w: 340, h: 204, body: out };
  }

  function ozSpecjalizacje() {
    var rows = [["długość fali", "barwa"], ["kontrast jasności", "krawędzie, kształt"], ["zmiana w czasie", "ruch"], ["rozdzielczość", "ostrość"]];
    var out = T(80, 12, "komórki zwojowe badają…", "tx") + T(258, 12, "…więc widzimy", "tx");
    rows.forEach(function (r, i) {
      var y = 20 + i * 44;
      out += B(8, y, 144, 34, r[0], null, "bx");
      out += A(156, y + 17, 182, y + 17, "ln-a");
      out += B(186, y, 146, 34, r[1], null, "bx-a");
    });
    return { w: 340, h: 198, body: out };
  }

  function ozWidmo() {
    var out = '<defs><linearGradient id="oz-widmo-g" x1="0" x2="1" y1="0" y2="0">' +
      '<stop offset="0" stop-color="#7a3bd1"/><stop offset=".2" stop-color="#2f5fe0"/><stop offset=".42" stop-color="#1f9a55"/>' +
      '<stop offset=".62" stop-color="#e3c21a"/><stop offset=".8" stop-color="#ef7d1a"/><stop offset="1" stop-color="#d4282a"/></linearGradient></defs>';
    out += '<rect x="20" y="30" width="300" height="34" rx="8" fill="url(#oz-widmo-g)"/>';
    out += T(20, 20, "krótkie fale", "tx", "start") + T(320, 20, "długie fale", "tx", "end");
    out += T(20, 82, "fiolet", "ts", "start") + T(320, 82, "czerwień", "ts", "end");
    out += T(20, 98, "ok. 350–400 nm", "tx", "start") + T(320, 98, "ok. 700 nm", "tx", "end");
    out += T(170, 120, "po drodze: niebieski, zielony, żółty, pomarańczowy", "tx");
    return { w: 340, h: 128, body: out };
  }

  W.registerFigs.push(function () {
    W.addFigs("oz-c1", {
      muller: { n: "s1", c: ["muller"], cap: "Każdy nerw przesyła te same impulsy. Mózg wie, czy to światło, czy dźwięk, po tym, który nerw je przyniósł (prawo specyficznych energii nerwowych, Müller 1838).", fn: ozMuller },
      rzeczy: { n: "s2", c: ["kat-rzeczy", "kat-relacji", "na-styku", "cechy-sceny"], cap: "Cztery cechy sceny w dwóch kategoriach. Kategorie się zazębiają: przy bardzo szybkim ruchu kształt i barwa się zacierają.", fn: ozRzeczy },
      kreacja: { n: "s3", c: ["dekompozycja", "kompozycja", "akt-kreacji", "cztery-sciezki"], cap: "Widzenie według Francuza: obraz z siatkówki rozbity na cechy (dekompozycja), złożony z pomocą pamięci (kompozycja). Wynik jest wytworem mózgu.", fn: ozKreacja },
      oko: { n: "s4", c: ["rogowka", "zrenica", "soczewka", "siatkowka", "odwrocony", "twardowka"], cap: "Przekrój oka. Promienie z przedmiotu krzyżują się w soczewce, więc obraz na siatkówce jest odwrócony. W miejscu wyjścia nerwu (złoty) jest plamka ślepa.", fn: ozOko },
      akomodacja: { n: "s4", c: ["akomodacja"], cap: "Akomodacja: żeby ostro widzieć coś blisko, soczewka grubnieje; przy dalekim przedmiocie robi się cieńsza.", fn: ozAkomodacja },
      warstwy: { n: "s5", c: ["na-opak", "dwubiegunowe", "zwojowe", "horyzontalne", "amakrynowe"], cap: "Siatkówka na opak: receptory są z tyłu, więc światło (złota strzałka) mija wszystkie warstwy, a sygnał (pomarańczowa strzałka) wraca do komórek zwojowych, których aksony tworzą nerw wzrokowy.", fn: ozWarstwy },
      plamka: { n: "s5", c: ["plamka-slepa", "nic-nie-czern", "dwoje-oczu"], cap: "Test plamki ślepej. Zamknij prawe oko, lewym patrz na górny krzyżyk i powoli przybliżaj ekran: w pewnej odległości kropka zniknie. Potem patrz na dolny krzyżyk: przerwa w linii się „zaklei”.", fn: ozPlamka },
      receptory: { n: "s6", c: ["precik", "czopek"], cap: "Dwa rodzaje fotoreceptorów: pręciki do nocy, czopki do dnia i kolorów.", fn: ozReceptory },
      swiatlo: { n: "s6", c: ["fotopowe", "skotopowe", "mezopowe"], cap: "Trzy rodzaje widzenia na skali jasności (według rycin u Francuza). O zmierzchu pracują oba systemy, ale żaden w pełni.", fn: ozSwiatlo },
      gestosc: { n: "s7", c: ["dolek", "plamka-zolta", "katem-oka"], cap: "Gęstość receptorów w siatkówce (według ryciny 14 u Francuza). Czopki: wąski szczyt w dołku. Pręciki: zero w dołku, najwięcej ok. 20° od niego. W plamce ślepej nie ma żadnych.", fn: ozGestosc },
      zbieznosc: { n: "s7", c: ["zbieznosc", "ostrosc-czulosc"], cap: "W dołku każdy czopek ma własną drogę do mózgu (ostrość). Na obwodzie wiele pręcików zbiega się na jedną komórkę: słabe światło się sumuje (czułość), ale szczegóły giną.", fn: ozZbieznosc },
      droga: { n: "s8", c: ["nerw-wzrokowy", "skrzyzowanie", "trakt", "lgn", "promienistosc", "v1", "wzgorki"], cap: "Droga wzrokowa (widok z góry). Włókna lewego oka pomarańczowe, prawego złote. Na skrzyżowaniu połowa włókien z każdego oka przechodzi na drugą stronę.", fn: ozDroga },
      pole: { n: "s9", c: ["pole-recepcyjne", "obwarzanek", "mapowanie", "pole-widzenia"], cap: "Pola recepcyjne rosną wzdłuż szlaku. Komórka zwojowa ma pole centrum–otoczka: światło w środku działa odwrotnie niż w pierścieniu dookoła.", fn: ozPole },
      zelatyna: { n: "s10", c: ["zelatyna", "krawedz", "hamowanie-oboczne"], cap: "Analogia Kalata (rys. 6.19): klocek wciska żelatynę, a obok ją wybrzusza. Skrajne klocki rzędu toną głębiej, tak jak najmocniej pobudzone są komórki na brzegu jasnego pola.", fn: ozZelatyna },
      hermann: { n: "s10", cap: "Patrz na jeden kwadrat: na skrzyżowaniach białych pasków obok pojawiają się szare plamki. Skrzyżowanie ma jasne sąsiedztwo z czterech stron, więc jest silniej hamowane.", fn: ozHermann },
      zwojowe: { n: "s11", c: ["karlowate", "parasolowe", "pylkowe"], cap: "Trzy rodzaje komórek zwojowych (Francuz): im większa komórka i jej rozgałęzienia, tym większy obszar siatkówki obejmuje. Pasek na dole to udział we włóknach nerwu wzrokowego.", fn: ozZwojowe },
      specjalizacje: { n: "s11", c: ["cztery-spec", "uszkodzenie"], cap: "Cztery specjalizacje komórek zwojowych i to, co z nich „widzimy”.", fn: ozSpecjalizacje },
      widmo: { n: "s12", c: ["dlugosc-fali"], cap: "Długość fali a barwa: od fioletu (najkrótsze) do czerwieni (najdłuższe).", fn: ozWidmo }
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
