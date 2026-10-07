/* Dźwięki z syntezatora, konfetti, powiadomienia. Bez zewnętrznych plików. */
(function () {
  "use strict";
  var W = window.Wykuj;

  var ctx = null;
  function audio() {
    if (!W.Store.state.settings.sound) return null;
    try {
      if (!ctx) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
      }
      if (ctx.state === "suspended") ctx.resume();
    } catch (e) {
      return null;
    }
    return ctx;
  }

  function tone(freq, dur, type, gain, delay, slideTo) {
    var a = audio();
    if (!a) return;
    var t0 = a.currentTime + (delay || 0);
    var o = a.createOscillator();
    var g = a.createGain();
    o.type = type || "sine";
    o.frequency.setValueAtTime(freq, t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain || 0.14, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g);
    g.connect(a.destination);
    o.start(t0);
    o.stop(t0 + dur + 0.03);
  }

  var SOUNDS = {
    tap: function () {
      tone(620, 0.04, "sine", 0.06);
    },
    correct: function (combo) {
      var f = 587.33 * Math.pow(1.0595, Math.min(12, (combo || 1) - 1));
      tone(f, 0.1, "triangle", 0.13);
      tone(f * 1.5, 0.16, "sine", 0.08, 0.06);
    },
    wrong: function () {
      tone(220, 0.18, "sawtooth", 0.07, 0, 110);
    },
    flip: function () {
      tone(400, 0.06, "sine", 0.05, 0, 700);
    },
    tick: function () {
      tone(1000, 0.03, "square", 0.025);
    },
    finish: function () {
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
        tone(f, 0.24, "triangle", 0.12, i * 0.09);
      });
    },
    fail: function () {
      [392, 349.23, 293.66].forEach(function (f, i) {
        tone(f, 0.22, "triangle", 0.1, i * 0.12);
      });
    },
    level: function () {
      [523.25, 783.99, 1046.5, 1318.5, 1567.98].forEach(function (f, i) {
        tone(f, 0.3, "sine", 0.1, i * 0.07);
      });
    }
  };

  W.sound = function (name, arg) {
    if (SOUNDS[name]) SOUNDS[name](arg);
  };

  W.buzz = function (ms) {
    try {
      if (navigator.vibrate) navigator.vibrate(ms || 12);
    } catch (e) {
      /* ignore */
    }
  };

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Konfetti w kolorach kredek. */
  W.confetti = function (n) {
    if (reduced) return;
    var cv = document.createElement("canvas");
    cv.className = "confetti";
    document.body.appendChild(cv);
    var dpr = window.devicePixelRatio || 1;
    var w = window.innerWidth, h = window.innerHeight;
    cv.width = w * dpr;
    cv.height = h * dpr;
    var c = cv.getContext("2d");
    c.scale(dpr, dpr);
    var cs = getComputedStyle(document.documentElement);
    var colors = ["--k-red", "--k-blue", "--k-yellow", "--k-green", "--accent"].map(function (v) {
      return cs.getPropertyValue(v).trim() || "#2a9d5c";
    });
    var parts = [];
    for (var i = 0; i < (n || 120); i++) {
      parts.push({
        x: w / 2 + (Math.random() - 0.5) * w * 0.3,
        y: h * 0.35,
        vx: (Math.random() - 0.5) * 14,
        vy: -Math.random() * 13 - 4,
        r: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
        s: 5 + Math.random() * 7,
        c: colors[i % colors.length]
      });
    }
    var start = performance.now();
    function frame(t) {
      var el = t - start;
      c.clearRect(0, 0, w, h);
      parts.forEach(function (p) {
        p.vy += 0.38;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        c.save();
        c.translate(p.x, p.y);
        c.rotate(p.r);
        c.fillStyle = p.c;
        c.globalAlpha = Math.max(0, 1 - el / 2600);
        c.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        c.restore();
      });
      if (el < 2600) requestAnimationFrame(frame);
      else cv.remove();
    }
    requestAnimationFrame(frame);
  };

  W.toast = function (title, body, kind) {
    var host = document.getElementById("toasts");
    if (!host) return;
    var t = document.createElement("div");
    t.className = "toast " + (kind || "");
    t.innerHTML = "<b>" + W.esc(title) + "</b>" + (body ? "<span>" + W.esc(body) + "</span>" : "");
    host.appendChild(t);
    setTimeout(function () {
      t.classList.add("out");
      setTimeout(function () {
        t.remove();
      }, 400);
    }, 3200);
  };

  W.Store.on("achievement", function (a) {
    W.sound("level");
    W.toast("Odznaka: " + a.name, a.desc, "gold");
  });
  W.Store.on("levelup", function (r) {
    W.sound("level");
    W.toast("Nowa ranga: " + r.name, "Poziom " + r.level, "gold");
    W.confetti(80);
  });
  W.Store.on("goal", function () {
    W.toast("Cel dnia zrealizowany", "Seria jest bezpieczna na dziś", "green");
  });
})();
