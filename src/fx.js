/* Juice: synthesised sound, particles, toasts, shake. No external assets. */
(function () {
  "use strict";

  var ctx = null;
  function audio() {
    if (!window.Store.state.settings.sound) return null;
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function tone(freq, dur, type, gain, delay, slideTo) {
    var a = audio();
    if (!a) return;
    var t0 = a.currentTime + (delay || 0);
    var osc = a.createOscillator();
    var g = a.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain === undefined ? 0.16 : gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g);
    g.connect(a.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }

  function noise(dur, gain) {
    var a = audio();
    if (!a) return;
    var len = Math.floor(a.sampleRate * dur);
    var buf = a.createBuffer(1, len, a.sampleRate);
    var d = buf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    var src = a.createBufferSource();
    src.buffer = buf;
    var g = a.createGain();
    g.gain.value = gain || 0.05;
    var f = a.createBiquadFilter();
    f.type = "highpass";
    f.frequency.value = 1200;
    src.connect(f);
    f.connect(g);
    g.connect(a.destination);
    src.start();
  }

  var SOUNDS = {
    correct: function (combo) {
      var base = 523.25 * Math.pow(1.0595, Math.min(14, (combo || 1) - 1));
      tone(base, 0.09, "triangle", 0.14);
      tone(base * 1.5, 0.13, "sine", 0.09, 0.045);
    },
    wrong: function () {
      tone(180, 0.16, "sawtooth", 0.1, 0, 90);
      noise(0.12, 0.03);
    },
    tick: function () {
      tone(880, 0.03, "square", 0.03);
    },
    select: function () {
      tone(660, 0.05, "sine", 0.07);
    },
    levelup: function () {
      [523.25, 659.25, 783.99, 1046.5].forEach(function (f, i) {
        tone(f, 0.26, "triangle", 0.13, i * 0.085);
      });
    },
    achievement: function () {
      [659.25, 830.61, 987.77, 1318.5].forEach(function (f, i) {
        tone(f, 0.3, "sine", 0.11, i * 0.07);
      });
      noise(0.3, 0.02);
    },
    finish: function () {
      [392, 523.25, 659.25].forEach(function (f, i) {
        tone(f, 0.3, "triangle", 0.12, i * 0.1);
      });
    },
    fail: function () {
      [330, 262, 196].forEach(function (f, i) {
        tone(f, 0.32, "sawtooth", 0.09, i * 0.13);
      });
    },
    combo: function () {
      tone(1318.5, 0.08, "square", 0.06);
      tone(1760, 0.1, "square", 0.05, 0.05);
    },
  };

  function play(name, arg) {
    try {
      if (SOUNDS[name]) SOUNDS[name](arg);
    } catch (e) {
      /* audio is a nice-to-have */
    }
  }

  function buzz(ms) {
    if (navigator.vibrate && window.Store.state.settings.motion) {
      try {
        navigator.vibrate(ms || 12);
      } catch (e) {}
    }
  }

  /* ------------------------------------------------------------ particles */
  var canvas, cctx, parts = [], raf = null;

  function ensureCanvas() {
    if (canvas) return;
    canvas = document.createElement("canvas");
    canvas.className = "fx-canvas";
    document.body.appendChild(canvas);
    cctx = canvas.getContext("2d");
    resize();
    window.addEventListener("resize", resize);
  }

  function resize() {
    if (!canvas) return;
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    cctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  var PALETTE = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#b388ff", "#ffffff"];

  function burst(x, y, count, power) {
    if (!window.Store.state.settings.motion) return;
    ensureCanvas();
    count = count || 28;
    power = power || 7;
    for (var i = 0; i < count; i++) {
      var ang = Math.random() * Math.PI * 2;
      var sp = (0.35 + Math.random()) * power;
      parts.push({
        x: x,
        y: y,
        vx: Math.cos(ang) * sp,
        vy: Math.sin(ang) * sp - 2,
        life: 1,
        decay: 0.012 + Math.random() * 0.016,
        size: 3 + Math.random() * 5,
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.3,
      });
    }
    loop();
  }

  function rain(count) {
    if (!window.Store.state.settings.motion) return;
    ensureCanvas();
    count = count || 90;
    for (var i = 0; i < count; i++) {
      parts.push({
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * window.innerHeight * 0.6,
        vx: (Math.random() - 0.5) * 2,
        vy: 2 + Math.random() * 4,
        life: 1,
        decay: 0.004 + Math.random() * 0.005,
        size: 4 + Math.random() * 7,
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.25,
      });
    }
    loop();
  }

  function loop() {
    if (raf) return;
    var step = function () {
      raf = null;
      cctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (var i = parts.length - 1; i >= 0; i--) {
        var p = parts[i];
        p.vy += 0.22;
        p.vx *= 0.994;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= p.decay;
        if (p.life <= 0 || p.y > window.innerHeight + 40) {
          parts.splice(i, 1);
          continue;
        }
        cctx.save();
        cctx.globalAlpha = Math.max(0, p.life);
        cctx.translate(p.x, p.y);
        cctx.rotate(p.rot);
        cctx.fillStyle = p.color;
        cctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        cctx.restore();
      }
      if (parts.length) raf = requestAnimationFrame(step);
      else cctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    };
    raf = requestAnimationFrame(step);
  }

  function burstFrom(el, count, power) {
    if (!el) return;
    var r = el.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + r.height / 2, count, power);
  }

  /* --------------------------------------------------------------- toasts */
  function toast(opts) {
    var wrap = document.getElementById("toasts");
    if (!wrap) return;
    var t = document.createElement("div");
    t.className = "toast " + (opts.kind || "");
    t.innerHTML =
      '<div class="toast-icon">' +
      (opts.icon || "✨") +
      "</div><div><div class='toast-title'>" +
      esc(opts.title || "") +
      "</div>" +
      (opts.body ? "<div class='toast-body'>" + esc(opts.body) + "</div>" : "") +
      "</div>";
    wrap.appendChild(t);
    requestAnimationFrame(function () {
      t.classList.add("in");
    });
    setTimeout(function () {
      t.classList.remove("in");
      setTimeout(function () {
        t.remove();
      }, 400);
    }, opts.ms || 3200);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function shake(el) {
    if (!el || !window.Store.state.settings.motion) return;
    el.classList.remove("shake");
    void el.offsetWidth;
    el.classList.add("shake");
  }

  function floatText(el, text, kind) {
    if (!el || !window.Store.state.settings.motion) return;
    var r = el.getBoundingClientRect();
    var d = document.createElement("div");
    d.className = "float-text " + (kind || "");
    d.textContent = text;
    d.style.left = r.left + r.width / 2 + "px";
    d.style.top = r.top + "px";
    document.body.appendChild(d);
    setTimeout(function () {
      d.remove();
    }, 1100);
  }

  window.FX = {
    play: play,
    buzz: buzz,
    burst: burst,
    burstFrom: burstFrom,
    rain: rain,
    toast: toast,
    shake: shake,
    floatText: floatText,
    esc: esc,
  };
})();
