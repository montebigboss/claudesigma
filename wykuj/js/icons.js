/* Ikony SVG rysowane kreską, w stylu kredki. Kolor z currentColor. */
(function () {
  "use strict";
  var W = window.Wykuj;

  var P = {
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    spiral: '<path d="M12 12a1.5 1.5 0 1 1 1.5-1.5A3 3 0 1 1 9 12a4.5 4.5 0 1 1 7.5 3.4A6 6 0 1 1 18 8"/>',
    pencil: '<path d="M4 20l1-4L16 5l3 3L8 19l-4 1z"/><path d="M14 7l3 3"/>',
    hand: '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4.5a1.5 1.5 0 0 1 3 0V11M14 10.5V6a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6 7-2.6 0-4-1.3-5.4-3.6L4 13.6a1.4 1.4 0 0 1 2.3-1.5L8 14"/>',
    moon: '<path d="M19 14.5A7.5 7.5 0 0 1 9.5 5a7.5 7.5 0 1 0 9.5 9.5z"/>',
    wall: '<path d="M3 6h18v12H3z"/><path d="M3 10h18M3 14h18M8 6v4M14 6v4M11 10v4M17 10v4M8 14v4M14 14v4"/>',
    eye: '<path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    sun: '<circle cx="12" cy="12" r="4" fill="currentColor"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/>',
    flame: '<path d="M12 21c-4 0-6.5-2.6-6.5-6.2 0-3.6 3-5.4 3.6-9.3 2.7 1.4 4.3 3.7 4.5 6.1.9-.7 1.4-1.8 1.5-3 2.2 1.9 3.4 4 3.4 6.4C18.5 18.4 16 21 12 21z"/>',
    split: '<path d="M12 3v18"/><path d="M4 8h5M4 12h5M4 16h5M15 8h5M15 12h5M15 16h5"/>',
    dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.2" fill="currentColor"/><circle cx="15" cy="15" r="1.2" fill="currentColor"/><circle cx="15" cy="9" r="1.2" fill="currentColor"/><circle cx="9" cy="15" r="1.2" fill="currentColor"/>',
    crown: '<path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/>',
    column: '<path d="M4 21h16M5 18h14M6 7h12M4 7l8-4 8 4"/><path d="M8 7v11M12 7v11M16 7v11"/>',
    chat: '<path d="M4 5h16v11H10l-5 4v-4H4z"/><path d="M8 9h8M8 12h5"/>',
    cat: '<path d="M5 20c0-5 2.5-8 7-8s7 3 7 8z"/><circle cx="12" cy="9" r="4.5"/><path d="M8.3 6.2L7.5 2.5l3 2.4M15.7 6.2l.8-3.7-3 2.4"/><path d="M19 18c2 0 3-1.5 2.5-3.5"/>',
    star: '<path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    path: '<circle cx="7" cy="5" r="2"/><circle cx="17" cy="12" r="2"/><circle cx="7" cy="19" r="2"/><path d="M9 5.5c5 .5 6 2.5 6.5 4.5M15.5 14c-.5 2-1.5 4-6.5 4.5"/>',
    cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    pairs: '<rect x="3" y="4" width="7" height="6" rx="1.5"/><rect x="14" y="14" width="7" height="6" rx="1.5"/><rect x="14" y="4" width="7" height="6" rx="1.5"/><rect x="3" y="14" width="7" height="6" rx="1.5"/><path d="M10 7h4M10 17h4"/>',
    swipe: '<rect x="7" y="4" width="10" height="14" rx="2"/><path d="M3 11H1M23 11h-2M4 8l-2 3 2 3M20 8l2 3-2 3"/>',
    exam: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    redo: '<path d="M4 12a8 8 0 1 0 2.4-5.7M4 4v4h4"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h7"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4.4-6.5 8-6.5s7 2 8 6.5"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/>',
    gem: '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l3 16M15 4l-3 16"/>',
    cloud: '<path d="M7 18a4.5 4.5 0 0 1-.5-9 6 6 0 0 1 11.5 1.5A3.8 3.8 0 0 1 17.5 18z"/>',
    sound: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    triangle: '<path d="M12 4l9 16H3z" fill="currentColor" stroke="none"/>',
    diamond: '<path d="M12 2l10 10-10 10L2 12z" fill="currentColor" stroke="none"/>',
    circle: '<circle cx="12" cy="12" r="9.5" fill="currentColor" stroke="none"/>',
    square: '<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" stroke="none"/>'
  };

  W.iconPath = function (name) {
    return P[name] || P.spark;
  };

  W.icon = function (name, cls) {
    return (
      '<svg class="ic ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || P.spark) + "</svg>"
    );
  };
})();
