/* Router + chrome. */
(function () {
  "use strict";

  var TABS = [
    { id: "home", icon: "⚡", label: "Train" },
    { id: "codex", icon: "📖", label: "Codex" },
    { id: "dojo", icon: "🥋", label: "Dojo" },
    { id: "progress", icon: "📊", label: "Progress" },
  ];

  var current = "home";

  function go(id) {
    current = id;
    UI.closeSheet();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    Views[id]();
    drawTabs();
    refreshChrome();
    try {
      history.replaceState(null, "", "#" + id);
    } catch (e) {}
  }

  function drawTabs() {
    document.getElementById("tabbar").innerHTML = TABS.map(function (t) {
      return (
        '<button class="' + (current === t.id ? "on" : "") + '" data-t="' + t.id + '">' +
        '<span class="ic">' + t.icon + "</span>" + t.label + "</button>"
      );
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll("[data-t]"), function (b) {
      b.onclick = function () {
        if (current === b.dataset.t) return;
        FX.play("tick");
        go(b.dataset.t);
      };
    });
  }

  function refreshChrome() {
    var st = Store.state;
    var rk = Store.rank();
    document.getElementById("chip-streak").innerHTML = "🔥 " + st.streak.count;
    document.getElementById("chip-xp").innerHTML = "⭐ " + UI.fmt(st.xp);
    document.getElementById("chip-rank").innerHTML = rk.cur.icon + " " + rk.cur.name;
    document.getElementById("xpfill").style.width = rk.pct + "%";
  }

  function boot() {
    Store.load();

    document.body.innerHTML =
      '<div class="topbar"><div class="topbar-row">' +
      '<div class="brand"><span class="dot"></span>INBOX DOJO</div>' +
      '<div class="stat-chips">' +
      '<span class="chip flame" id="chip-streak">🔥 0</span>' +
      '<span class="chip xp" id="chip-xp">⭐ 0</span>' +
      '<span class="chip rank" id="chip-rank" style="display:none"></span>' +
      "</div></div>" +
      '<div class="xpbar"><i id="xpfill" style="width:0%"></i></div></div>' +
      '<div class="app"><div id="view"></div></div>' +
      '<nav class="tabbar" id="tabbar"></nav>' +
      '<div id="toasts"></div>';

    // The rank chip only fits on wider screens.
    function fitChips() {
      document.getElementById("chip-rank").style.display =
        window.innerWidth > 600 ? "" : "none";
    }
    window.addEventListener("resize", fitChips);
    fitChips();

    window.addEventListener("rankup", function (e) {
      FX.play("levelup");
      FX.rain(140);
      FX.toast({
        icon: e.detail.icon,
        title: "RANK UP — " + e.detail.name,
        body: e.detail.blurb,
        kind: "gold",
        ms: 5200,
      });
    });

    window.addEventListener("achievement", function (e) {
      FX.play("achievement");
      FX.toast({
        icon: e.detail.icon,
        title: "Achievement: " + e.detail.name,
        body: e.detail.desc + " · +150 XP",
        kind: "gold",
        ms: 4600,
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") UI.closeSheet();
    });

    var hash = (location.hash || "").replace("#", "");
    go(TABS.some(function (t) { return t.id === hash; }) ? hash : "home");

    // Welcome the first-timer with the rule everything else hangs off.
    if (Store.state.stats.answered === 0 && !Store.state.read[1]) {
      setTimeout(function () {
        FX.toast({
          icon: "🗿",
          title: "Start with Rule #1",
          body: "The most important word in copywriting isn't 'free'.",
          ms: 5000,
        });
      }, 900);
    }
  }

  window.App = { go: go, refreshChrome: refreshChrome, boot: boot };
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
