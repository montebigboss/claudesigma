/* Router i start aplikacji. Każdy ekran dostaje świeży kontener. */
(function () {
  "use strict";
  var W = window.Wykuj;
  var Store = W.Store;

  var app = document.getElementById("app");
  var stack = [];
  var cleanup = null;
  var keyFn = null;

  W.setKeys = function (fn) {
    keyFn = fn;
  };

  function render(entry) {
    if (cleanup) {
      try {
        cleanup();
      } catch (e) {
        /* ignore */
      }
    }
    cleanup = null;
    keyFn = null;
    var screen = W.screens[entry.name];
    var root = document.createElement("div");
    root.className = "screen s-" + entry.name;
    var mod = entry.params && W.byId[entry.params.mod];
    if (mod) root.classList.add("theme-" + mod.course.theme);
    app.innerHTML = "";
    app.appendChild(root);
    window.scrollTo(0, 0);
    var r = screen(root, entry.params || {});
    if (typeof r === "function") cleanup = r;
  }

  W.go = function (name, params, opts) {
    opts = opts || {};
    var entry = { name: name, params: params || {} };
    if (opts.root) stack = [entry];
    else if (opts.replace && stack.length) stack[stack.length - 1] = entry;
    else stack.push(entry);
    render(entry);
  };

  W.back = function () {
    if (stack.length > 1) stack.pop();
    render(stack[stack.length - 1]);
  };

  W.refresh = function () {
    var cur = stack[stack.length - 1];
    if (cur && /^(home|module|path|profile)$/.test(cur.name)) render(cur);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest('[data-nav="back"]')) W.back();
  });

  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (keyFn) keyFn(e);
  });

  Store.on("remote", W.refresh);
  Store.on("cloud", function () {
    var c = document.querySelector(".cloud");
    if (c) W.refresh();
  });

  W.go("home", {}, { root: true });
  setTimeout(Store.initCloud, 0);
})();
