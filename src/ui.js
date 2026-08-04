/* Tiny DOM helpers shared by every view. */
(function () {
  "use strict";

  var esc = window.FX.esc;

  function h(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.firstElementChild;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function pick(arr, n) {
    return shuffle(arr).slice(0, n);
  }

  /* Rules the player is weakest on come up more often. */
  function weighted(items, n) {
    var st = window.Store.state;
    var scored = items.map(function (it) {
      var m = it.r ? st.mastery[it.r] || 0 : 0;
      return { it: it, w: (window.Store.MASTERY_CAP + 1 - m) * (0.6 + Math.random()) };
    });
    scored.sort(function (a, b) {
      return b.w - a.w;
    });
    return shuffle(scored.slice(0, Math.max(n, Math.ceil(n * 1.7)))).slice(0, n).map(function (s) {
      return s.it;
    });
  }

  var sheetEl = null;
  function sheet(html) {
    closeSheet();
    var bg = h('<div class="sheet-bg"></div>');
    var s = h(
      '<div class="sheet" role="dialog" aria-modal="true">' +
        '<button class="sheet-close" aria-label="Close">✕</button>' +
        '<div class="sheet-grab"></div>' +
        html +
        "</div>"
    );
    bg.addEventListener("click", closeSheet);
    s.querySelector(".sheet-close").addEventListener("click", closeSheet);
    document.body.appendChild(bg);
    document.body.appendChild(s);
    document.body.classList.add("locked");
    sheetEl = [bg, s];
    return s;
  }

  function closeSheet() {
    if (!sheetEl) return;
    sheetEl.forEach(function (e) {
      e.remove();
    });
    sheetEl = null;
    document.body.classList.remove("locked");
  }

  function ruleById(n) {
    for (var i = 0; i < window.RULES.length; i++)
      if (window.RULES[i].n === n) return window.RULES[i];
    return null;
  }

  function catName(id) {
    for (var i = 0; i < window.CATEGORIES.length; i++)
      if (window.CATEGORIES[i].id === id) return window.CATEGORIES[i].name;
    return id;
  }

  function pips(n) {
    var m = window.Store.state.mastery[n] || 0;
    var out = '<div class="pips' + (m >= window.Store.MASTERY_CAP ? " max" : "") + '">';
    for (var i = 0; i < window.Store.MASTERY_CAP; i++)
      out += "<i" + (i < m ? ' class="on"' : "") + "></i>";
    return out + "</div>";
  }

  function ruleSheet(n) {
    var r = ruleById(n);
    if (!r) return;
    var wasNew = window.Store.markRead(n);
    var body = r.body
      .split("\n\n")
      .map(function (p) {
        return "<p>" + esc(p) + "</p>";
      })
      .join("");
    var s = sheet(
      '<div class="q-tag">Rule #' +
        r.n +
        " · " +
        esc(catName(r.cat)) +
        "</div><h3>" +
        esc(r.title) +
        "</h3>" +
        '<p class="tiny" style="margin:7px 0 10px;font-size:13px;color:var(--gold)">' +
        esc(r.key) +
        "</p>" +
        pips(r.n) +
        '<div style="height:14px"></div><div class="rule-body">' +
        body +
        "</div>" +
        '<div class="sheet-nav">' +
        '<button class="btn ghost" id="rs-prev"' + (r.n <= 1 ? " disabled" : "") + ">← #" + (r.n - 1) + "</button>" +
        '<button class="btn ghost" id="rs-next"' + (r.n >= 101 ? " disabled" : "") + ">#" + (r.n + 1) + " →</button>" +
        "</div>"
    );
    var prev = s.querySelector("#rs-prev");
    var next = s.querySelector("#rs-next");
    if (prev) prev.onclick = function () { ruleSheet(r.n - 1); };
    if (next) next.onclick = function () { ruleSheet(r.n + 1); };
    if (wasNew) {
      window.FX.play("select");
      window.App.refreshChrome();
    }
  }

  function fmt(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  window.UI = {
    h: h,
    esc: esc,
    shuffle: shuffle,
    pick: pick,
    weighted: weighted,
    sheet: sheet,
    closeSheet: closeSheet,
    ruleById: ruleById,
    ruleSheet: ruleSheet,
    catName: catName,
    pips: pips,
    fmt: fmt,
  };
})();
