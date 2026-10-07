/* Renderery ćwiczeń. Każdy zwraca kontroler:
 *   el        element DOM
 *   ready()   czy można sprawdzić
 *   grade()   { ok, correct (html poprawnej odpowiedzi), note? }
 *   key(k)    obsługa klawiatury (opcjonalnie)
 *   auto      true, gdy ćwiczenie samo kończy się przez api.done(ok)
 */
(function () {
  "use strict";
  var W = window.Wykuj;
  var esc = W.esc;

  function el(html) {
    var d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstChild;
  }
  W.el = el;

  var LABELS = {
    mcq: "Wybierz odpowiedź",
    tf: "Prawda czy fałsz?",
    cloze: "Uzupełnij lukę",
    type: "Wpisz z pamięci",
    match: "Połącz w pary",
    sort: "Przyporządkuj",
    multi: "Zaznacz wszystkie poprawne"
  };

  W.srcBadge = function (s) {
    if (s === "U") return '<span class="src src-u" title="Powiedziane ustnie na wykładzie">ustnie</span>';
    if (s === "K") return '<span class="src src-k" title="Definicja do zapamiętania słowo w słowo">słowo w słowo</span>';
    if (s === "D") return '<span class="src src-d" title="Dopowiedzenie spoza wykładu">★ spoza wykładu</span>';
    return "";
  };

  /* Normalise mcq-like exercises into {q, options[], correctIndex}. */
  W.asChoice = function (ex, mod) {
    var correct, pool;
    if (ex.t === "which") {
      var list = ex.set ? mod.sets[ex.set].items : mod.principles;
      var fmt = function (p, i) {
        return ex.set ? p : i + 1 + ". " + p;
      };
      correct = fmt(list[ex.a - 1], ex.a - 1);
      pool = list.map(fmt).filter(function (p) {
        return p !== correct;
      });
      pool = W.sample(pool, 3);
    } else if (ex.t === "tf") {
      return { q: ex.q, options: ["Prawda", "Fałsz"], correct: ex.a ? 0 : 1, fixed: true };
    } else {
      correct = ex.a[0];
      pool = ex.a.slice(1);
    }
    var opts = W.shuffle([correct].concat(pool));
    return { q: ex.q, options: opts, correct: opts.indexOf(correct) };
  };

  function choice(ex, mod, api) {
    var c = W.asChoice(ex, mod);
    var sel = -1;
    var isTf = ex.t === "tf";
    var html =
      '<div class="opts ' + (isTf ? "opts-tf" : "") + '">' +
      c.options
        .map(function (o, i) {
          return (
            '<button class="opt" data-i="' + i + '"><kbd>' + (i + 1) + "</kbd><span>" + esc(o) + "</span></button>"
          );
        })
        .join("") +
      "</div>";
    var root = el(html);
    function pick(i) {
      if (root.classList.contains("locked")) return;
      sel = i;
      W.sound("tap");
      [].forEach.call(root.children, function (b, j) {
        b.classList.toggle("sel", j === i);
      });
      api.change();
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".opt");
      if (b) pick(+b.dataset.i);
    });
    return {
      el: root,
      ready: function () {
        return sel >= 0;
      },
      grade: function () {
        root.classList.add("locked");
        var ok = sel === c.correct;
        root.children[c.correct].classList.add("right");
        if (!ok && sel >= 0) root.children[sel].classList.add("wrong");
        return { ok: ok, correct: esc(c.options[c.correct]) };
      },
      key: function (k) {
        var n = parseInt(k, 10);
        if (n >= 1 && n <= c.options.length) pick(n - 1);
      }
    };
  }

  function cloze(ex, mod, api) {
    var correct = ex.a[0];
    var opts = W.shuffle(ex.a);
    var sel = null;
    var parts = ex.q.split("___");
    var root = el(
      '<div class="cloze"><p class="cloze-s">' + esc(parts[0]) + '<span class="blank">&nbsp;</span>' + esc(parts[1] || "") +
        '</p><div class="chips">' +
        opts
          .map(function (o, i) {
            return '<button class="chip" data-i="' + i + '"><kbd>' + (i + 1) + "</kbd>" + esc(o) + "</button>";
          })
          .join("") +
        "</div></div>"
    );
    var blank = root.querySelector(".blank");
    function pick(i) {
      if (root.classList.contains("locked")) return;
      sel = opts[i];
      W.sound("tap");
      blank.textContent = sel;
      blank.classList.add("filled");
      [].forEach.call(root.querySelectorAll(".chip"), function (b, j) {
        b.classList.toggle("sel", j === i);
      });
      api.change();
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (b) pick(+b.dataset.i);
    });
    return {
      el: root,
      prompt: false,
      ready: function () {
        return sel !== null;
      },
      grade: function () {
        root.classList.add("locked");
        var ok = sel === correct;
        blank.classList.add(ok ? "right" : "wrong");
        return { ok: ok, correct: esc(correct) };
      },
      key: function (k) {
        var n = parseInt(k, 10);
        if (n >= 1 && n <= opts.length) pick(n - 1);
      }
    };
  }

  function typed(ex, mod, api) {
    var root = el(
      '<div class="typed"><input id="typed-' + ex.id.replace(/[^a-z0-9]/gi, "") +
        '" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Wpisz odpowiedź…" />' +
        '<p class="hint">Pierwsza litera: <b>' + esc(ex.a[0].charAt(0).toUpperCase()) + "</b> · " + ex.a[0].length + " liter</p></div>"
    );
    var input = root.querySelector("input");
    input.addEventListener("input", api.change);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        api.submit();
      }
    });
    setTimeout(function () {
      input.focus();
    }, 60);
    return {
      el: root,
      ready: function () {
        return W.norm(input.value).length > 0;
      },
      grade: function () {
        input.disabled = true;
        var v = W.norm(input.value);
        var best = 99;
        ex.a.forEach(function (a) {
          best = Math.min(best, W.lev(v, W.norm(a)));
        });
        var tol = ex.a[0].length <= 5 ? 1 : 2;
        var ok = best <= tol;
        input.classList.add(ok ? "right" : "wrong");
        var note = ok && best > 0 ? "Drobna literówka. Poprawnie: „" + ex.a[0] + "”." : null;
        return { ok: ok, correct: esc(ex.a[0]), note: note };
      }
    };
  }

  function match(ex, mod, api) {
    var pairs = ex.pairs;
    var left = W.shuffle(pairs.map(function (p, i) { return { t: p[0], i: i }; }));
    var right = W.shuffle(pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    var root = el(
      '<div class="match"><div class="mcol">' +
        left.map(function (x) { return '<button class="tile" data-side="L" data-i="' + x.i + '">' + esc(x.t) + "</button>"; }).join("") +
        '</div><div class="mcol">' +
        right.map(function (x) { return '<button class="tile" data-side="R" data-i="' + x.i + '">' + esc(x.t) + "</button>"; }).join("") +
        "</div></div>"
    );
    var selL = null, selR = null, done = 0, mistakes = 0;
    root.addEventListener("click", function (e) {
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
        if (a.dataset.i === c.dataset.i) {
          a.classList.remove("sel");
          c.classList.remove("sel");
          a.classList.add("done");
          c.classList.add("done");
          done++;
          W.sound("correct", done);
          if (done === pairs.length) {
            setTimeout(function () {
              api.done(mistakes <= 1, mistakes);
            }, 250);
          }
        } else {
          mistakes++;
          W.sound("wrong");
          a.classList.add("bad");
          c.classList.add("bad");
          setTimeout(function () {
            a.classList.remove("bad", "sel");
            c.classList.remove("bad", "sel");
          }, 450);
        }
      }
    });
    return {
      el: root,
      auto: true,
      ready: function () {
        return false;
      },
      grade: function () {
        return {
          ok: mistakes <= 1,
          correct: pairs.map(function (p) { return esc(p[0]) + " → " + esc(p[1]); }).join("<br>")
        };
      }
    };
  }

  function multi(ex, mod, api) {
    var opts = W.shuffle(ex.a.concat(ex.o || []));
    var picked = {};
    var root = el(
      '<div class="opts multi">' +
        opts
          .map(function (o, i) {
            return '<button class="opt" data-i="' + i + '" aria-pressed="false"><span class="box-ic"></span><span>' + esc(o) + "</span></button>";
          })
          .join("") +
        '<p class="hint">Poprawnych odpowiedzi może być kilka.</p></div>'
    );
    function toggle(i) {
      if (root.classList.contains("locked")) return;
      picked[i] = !picked[i];
      W.sound("tap");
      var b = root.children[i];
      b.classList.toggle("sel", picked[i]);
      b.setAttribute("aria-pressed", picked[i] ? "true" : "false");
      api.change();
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".opt");
      if (b) toggle(+b.dataset.i);
    });
    return {
      el: root,
      ready: function () {
        return Object.keys(picked).some(function (k) { return picked[k]; });
      },
      grade: function () {
        root.classList.add("locked");
        var ok = true;
        opts.forEach(function (o, i) {
          var should = ex.a.indexOf(o) >= 0;
          if (should) root.children[i].classList.add("right");
          else if (picked[i]) root.children[i].classList.add("wrong");
          if (!!picked[i] !== should) ok = false;
        });
        return { ok: ok, correct: ex.a.map(esc).join(", ") };
      },
      key: function (k) {
        var n = parseInt(k, 10);
        if (n >= 1 && n <= opts.length) toggle(n - 1);
      }
    };
  }

  function sorter(ex, mod, api) {
    var items = W.shuffle(ex.items).slice(0, 6);
    var picks = items.map(function () { return -1; });
    var root = el(
      '<div class="sortex">' +
        items
          .map(function (it, i) {
            return (
              '<div class="srow" data-i="' + i + '"><span class="stext">' + esc(it[0]) + '</span><span class="sbtns">' +
              '<button class="sb" data-c="0">' + esc(ex.cats[0]) + '</button><button class="sb" data-c="1">' + esc(ex.cats[1]) +
              "</button></span></div>"
            );
          })
          .join("") +
        "</div>"
    );
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".sb");
      if (!b || root.classList.contains("locked")) return;
      var row = b.closest(".srow");
      var i = +row.dataset.i;
      picks[i] = +b.dataset.c;
      W.sound("tap");
      [].forEach.call(row.querySelectorAll(".sb"), function (x) {
        x.classList.toggle("sel", x === b);
      });
      api.change();
    });
    return {
      el: root,
      ready: function () {
        return picks.indexOf(-1) === -1;
      },
      grade: function () {
        root.classList.add("locked");
        var wrong = [];
        items.forEach(function (it, i) {
          var row = root.children[i];
          var ok = picks[i] === it[1];
          row.classList.add(ok ? "right" : "wrong");
          if (!ok) wrong.push(esc(it[0]) + " → " + esc(ex.cats[it[1]]));
        });
        return { ok: wrong.length === 0, correct: wrong.join("<br>") };
      }
    };
  }

  W.Ex = {
    label: function (ex, mod) {
      if (ex.t === "which") return ex.set ? mod.sets[ex.set].label : mod.whichLabel || "Która to zasada?";
      return LABELS[ex.t] || "";
    },
    render: function (ex, mod, api) {
      switch (ex.t) {
        case "mcq":
        case "which":
        case "tf":
          return choice(ex, mod, api);
        case "cloze":
          return cloze(ex, mod, api);
        case "type":
          return typed(ex, mod, api);
        case "match":
          return match(ex, mod, api);
        case "sort":
          return sorter(ex, mod, api);
        case "multi":
          return multi(ex, mod, api);
      }
      return choice(ex, mod, api);
    },
    /* Prompt shown above the widget (cloze carries its sentence inline). */
    prompt: function (ex) {
      if (ex.t === "cloze" || ex.t === "match") return "";
      return ex.q;
    },

    /* Generated exercises from flashcard concepts. */
    fromConcept: function (c, mod, reverse) {
      var others = mod.concepts.filter(function (o) {
        return o.id !== c.id && W.allowed(o);
      });
      others = W.sample(others, 3);
      if (reverse) {
        return {
          t: "mcq", s: c.s, id: mod.id + ":c:" + c.id + ":r",
          q: "Które pojęcie pasuje do opisu: „" + c.sh + "”?",
          a: [c.term].concat(others.map(function (o) { return o.term; })),
          x: c.def
        };
      }
      return {
        t: "mcq", s: c.s, id: mod.id + ":c:" + c.id,
        q: "Co oznacza pojęcie „" + c.term + "”?",
        a: [c.sh].concat(others.map(function (o) { return o.sh; })),
        x: c.def
      };
    },
    matchFromConcepts: function (list, mod) {
      return {
        t: "match", s: "S", id: mod.id + ":m:" + list.map(function (c) { return c.id; }).join(","),
        pairs: list.map(function (c) { return [c.term, c.sh]; })
      };
    }
  };

  /* Weighted sampling without replacement (Efraimidis–Spirakis). */
  W.weighted = function (modId, list, n) {
    return list
      .map(function (e) {
        return { e: e, k: Math.pow(Math.random(), 1 / W.Store.weight(modId, e.id)) };
      })
      .sort(function (a, b) {
        return b.k - a.k;
      })
      .slice(0, n)
      .map(function (x) {
        return x.e;
      });
  };

  W.buildLesson = function (m, unit) {
    var all = m.exercises.filter(W.allowed);
    if (unit.boss) {
      var bossPool = all.filter(function (e) {
        return e.t !== "match" && e.t !== "sort";
      });
      return W.shuffle(W.weighted(m.id, bossPool, 15));
    }
    var pool = all.filter(function (e) {
      return e.u === unit.id;
    });
    var picked = W.weighted(m.id, pool, 8);
    var concepts = m.concepts.filter(function (c) {
      return c.u === unit.id && W.allowed(c);
    });
    if (concepts.length) {
      var c = concepts[Math.floor(Math.random() * concepts.length)];
      picked.push(W.Ex.fromConcept(c, m, Math.random() < 0.5));
    }
    var hasMatch = picked.some(function (e) {
      return e.t === "match";
    });
    if (!hasMatch && concepts.length >= 2) {
      var fill = m.concepts.filter(function (c2) {
        return c2.u !== unit.id && W.allowed(c2);
      });
      var set = W.sample(concepts, 4);
      if (set.length < 4) set = set.concat(W.sample(fill, 4 - set.length));
      picked.push(W.Ex.matchFromConcepts(set, m));
    }
    var idx = m.unitIdx[unit.id];
    var earlier = all.filter(function (e) {
      return m.unitIdx[e.u] < idx && e.t !== "match";
    });
    if (earlier.length) picked = picked.concat(W.weighted(m.id, earlier, idx >= 3 ? 2 : 1));
    var out = W.shuffle(picked);
    /* Open on something quick rather than a typing or pairing task. */
    var first = out.findIndex(function (e) {
      return e.t === "mcq" || e.t === "tf" || e.t === "which";
    });
    if (first > 0) out.unshift(out.splice(first, 1)[0]);
    return out;
  };
})();
