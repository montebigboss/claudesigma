#!/usr/bin/env python3
"""Stitch scroll-capture screenshots back into the document they came from.

Someone scrolling a document on a call gives you overlapping screenshots, each
with a webcam tile sitting on top of the page. Stacking them into a PDF
duplicates whatever the overlap covered and leaves the webcam over the text.

So: find how far the page scrolled between each pair by matching their overlap,
lay them on one tall canvas at those offsets, and when a pixel is available
from more than one screenshot, take it from a frame where nothing was covering
it. The webcam disappears as long as some other frame saw that part of the page.

    tools/stitch_scroll_to_pdf.py shots/*.png \\
        --doc 230,0,2096,1179 --occlude 264,907,420,238 \\
        --canvas document.png --out document.pdf

Geometry is X,Y,W,H in pixels, measured on the screenshots as given.
All geometry is measured on the screenshots as given, before --doc crops them.
--occlude takes a box covered in EVERY frame (the webcam). For something that
only appears in one shot — a tooltip, a cursor label — use --occlude-in N:BOX,
where N is the 1-based position of that screenshot on the command line.
"""
import argparse
import os
import sys

import numpy as np
from PIL import Image

# An overlap shorter than this is not enough to trust an alignment on.
MIN_OVERLAP = 220
# Below this correlation the alignment is a guess, and the user should know.
WEAK_MATCH = 0.55
# Candidate shifts from the cheap 1-D pass that get a full 2-D check.
CANDIDATES = 6
# Every Nth column in the 2-D check; the page is wide and highly redundant.
COL_STEP = 3


def parse_box(text):
    parts = text.split(",")
    if len(parts) != 4:
        raise argparse.ArgumentTypeError("expected X,Y,W,H — got %r" % text)
    try:
        return tuple(int(round(float(p))) for p in parts)
    except ValueError:
        raise argparse.ArgumentTypeError("non-numeric value in %r" % text)


def parse_indexed_box(text):
    """'3:900,120,240,60' -> (3, (900, 120, 240, 60))"""
    if ":" not in text:
        raise argparse.ArgumentTypeError(
            "expected N:X,Y,W,H — got %r" % text)
    n, box = text.split(":", 1)
    try:
        n = int(n)
    except ValueError:
        raise argparse.ArgumentTypeError("bad screenshot number in %r" % text)
    if n < 1:
        raise argparse.ArgumentTypeError("screenshot numbers start at 1")
    return n, parse_box(box)


def translate(box, doc):
    """Boxes are measured on the screenshot; move them into --doc's frame."""
    if not doc:
        return box
    x, y, w, h = box
    return (x - doc[0], y - doc[1], w, h)


def clip_box(box, width, height):
    x, y, w, h = box
    x, y = max(0, x), max(0, y)
    w, h = max(0, min(w, width - x)), max(0, min(h, height - y))
    return x, y, w, h


def load(paths, doc):
    """Screenshots cropped to the document area, as RGB arrays."""
    out = []
    for p in paths:
        with Image.open(p) as im:
            im = im.convert("RGB")
            if doc:
                x, y, w, h = clip_box(doc, *im.size)
                im = im.crop((x, y, x + w, y + h))
            out.append(np.asarray(im, dtype=np.uint8))
    shapes = {a.shape for a in out}
    if len(shapes) != 1:
        sys.exit("screenshots differ in size after cropping: %s\n"
                 "capture them at one window size, or fix --doc"
                 % ", ".join("%dx%d" % (s[1], s[0]) for s in shapes))
    return out


def match_columns(width, occlusions):
    """Columns safe to match on — those no occlusion box ever covers."""
    safe = np.ones(width, dtype=bool)
    for x, _, w, _ in occlusions:
        safe[max(0, x):max(0, x) + w] = False
    cols = np.where(safe)[0]
    if cols.size < 50:
        sys.exit("almost every column is occluded — nothing left to align on")
    return cols


def correlate(a, b):
    """Zero-mean normalized correlation of two equal-shaped arrays."""
    a = a - a.mean()
    b = b - b.mean()
    denom = np.sqrt((a * a).sum() * (b * b).sum())
    if denom < 1e-6:
        return 0.0
    return float((a * b).sum() / denom)


def row_signature(gray, cols):
    """Per-row descriptor: how much ink is on the row, and how broken up it is.

    A page of text is mostly white, so plain brightness barely varies and
    correlating on it matches whitespace to whitespace. Edge density says where
    the lines of text actually are, which is what makes rows distinguishable.
    """
    strip = gray[:, cols].astype(np.float32)
    ink = 255.0 - strip.mean(axis=1)
    edges = np.abs(np.diff(strip, axis=1)).mean(axis=1)
    return ink + 2.0 * edges


def offset(prev_gray, next_gray, cols, min_shift):
    """How far the page scrolled between two frames.

    Cheap 1-D pass over row signatures to shortlist shifts, then a real 2-D
    check on the overlap so a row pattern that repeats down the page cannot
    win on its own. Returns (shift, score); a low score means no overlap was
    found, which usually means the capture skipped a stretch of the page.
    """
    height = prev_gray.shape[0]
    sig_a = row_signature(prev_gray, cols)
    sig_b = row_signature(next_gray, cols)

    scored = []
    for dy in range(min_shift, height - MIN_OVERLAP + 1):
        overlap = height - dy
        scored.append((correlate(sig_a[dy:], sig_b[:overlap]), dy))
    if not scored:
        return height, 0.0
    scored.sort(reverse=True)

    sub = cols[::COL_STEP]
    best, best_score = scored[0][1], -1.0
    for _, dy in scored[:CANDIDATES]:
        overlap = height - dy
        score = correlate(prev_gray[dy:, sub].astype(np.float32),
                          next_gray[:overlap, sub].astype(np.float32))
        if score > best_score:
            best_score, best = score, dy
    return best, best_score


def composite(frames, offsets, occlusions, per_image):
    """Lay the frames on one tall canvas, preferring unoccluded pixels."""
    h, w = frames[0].shape[:2]
    tops = np.cumsum([0] + offsets)
    tops = tops - tops.min()
    total = int(tops.max() + h)

    canvas = np.full((total, w, 3), 255, dtype=np.uint8)
    filled = np.zeros((total, w), dtype=bool)

    for n, (frame, top) in enumerate(zip(frames, tops), 1):
        usable = np.ones((h, w), dtype=bool)
        for box in list(occlusions) + per_image.get(n, []):
            x, y, bw, bh = clip_box(box, w, h)
            usable[y:y + bh, x:x + bw] = False
        top = int(top)
        region = filled[top:top + h]
        take = usable & ~region
        canvas[top:top + h][take] = frame[take]
        region |= take

    return canvas, filled


def trim(canvas, filled):
    """Drop any rows no screenshot covered (a gap in the capture)."""
    rows = filled.any(axis=1)
    if not rows.any():
        sys.exit("nothing was composited")
    ys = np.where(rows)[0]
    gaps = np.where(~rows[ys.min():ys.max() + 1])[0]
    return canvas[ys.min():ys.max() + 1], gaps.size


def paginate(canvas, page_height):
    if page_height <= 0:
        return [Image.fromarray(canvas)]
    pages, top = [], 0
    height = canvas.shape[0]
    while top < height:
        pages.append(Image.fromarray(canvas[top:top + page_height]))
        top += page_height
    return pages


def main(argv=None):
    p = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("shots", nargs="+", help="screenshots, in scroll order")
    p.add_argument("--doc", type=parse_box, default=None,
                   help="crop every screenshot to this document area")
    p.add_argument("--occlude", type=parse_box, action="append", default=[],
                   help="box covered in every frame, e.g. the webcam "
                        "(repeatable)")
    p.add_argument("--occlude-in", type=parse_indexed_box, action="append",
                   default=[], dest="occlude_in", metavar="N:X,Y,W,H",
                   help="box covering only screenshot N (repeatable)")
    p.add_argument("--out", default="document.pdf", help="PDF to write")
    p.add_argument("--canvas", default=None,
                   help="also write the whole stitched document as a PNG")
    p.add_argument("--page-height", type=int, default=1400,
                   help="pixels per PDF page; 0 for one tall page")
    p.add_argument("--dpi", type=int, default=150, help="PDF resolution")
    p.add_argument("--min-shift", type=int, default=40,
                   help="ignore matches claiming the page barely moved")
    args = p.parse_args(argv)

    for path in args.shots:
        if not os.path.isfile(path):
            sys.exit("no such file: %s" % path)

    frames = load(args.shots, args.doc)
    h, w = frames[0].shape[:2]
    print("%d screenshots, document area %dx%d" % (len(frames), w, h))

    occlusions = [translate(b, args.doc) for b in args.occlude]
    per_image = {}
    for n, box in args.occlude_in:
        if n > len(frames):
            sys.exit("--occlude-in %d: only %d screenshots given"
                     % (n, len(frames)))
        per_image.setdefault(n, []).append(translate(box, args.doc))

    gray = [np.asarray(Image.fromarray(f).convert("L")) for f in frames]
    cols = match_columns(w, occlusions)

    offsets, gaps, weak = [], [], []
    for i in range(len(frames) - 1):
        dy, score = offset(gray[i], gray[i + 1], cols, args.min_shift)
        if score < WEAK_MATCH:
            # No overlap worth trusting. Compositing at a guessed offset would
            # print two different parts of the page on top of each other, so
            # butt the frames together instead and say what is missing.
            gaps.append((i + 1, i + 2))
            offsets.append(h)
            print("  %2d -> %2d   no overlap found (best match %.2f)"
                  % (i + 1, i + 2, score))
            continue
        if score < WEAK_MATCH + 0.15:
            weak.append(i + 2)
        offsets.append(int(dy))
        print("  %2d -> %2d   shift %4dpx  overlap %4dpx  match %.2f%s"
              % (i + 1, i + 2, dy, h - dy, score,
                 "  <-- weak" if score < WEAK_MATCH + 0.15 else ""))

    canvas, filled = composite(frames, offsets, occlusions, per_image)
    canvas, gap_rows = trim(canvas, filled)
    print("stitched document: %dx%d" % (canvas.shape[1], canvas.shape[0]))
    if gaps:
        print("  MISSING CONTENT between screenshot %s — they do not overlap, "
              "so whatever the page showed in between is not in the PDF. "
              "Capture that stretch and re-run."
              % " and ".join("%d/%d" % g for g in gaps))
    if gap_rows:
        print("  %d rows no screenshot covered" % gap_rows)
    if weak:
        print("  check the seam above screenshot(s) %s — the overlap matched "
              "only weakly" % ", ".join(str(n) for n in sorted(set(weak))))

    if args.canvas:
        Image.fromarray(canvas).save(args.canvas)
        print("wrote %s" % args.canvas)

    pages = paginate(canvas, args.page_height)
    try:
        pages[0].save(args.out, "PDF", resolution=float(args.dpi),
                      save_all=True, append_images=pages[1:])
    finally:
        for im in pages:
            im.close()
    print("wrote %s (%d page%s, %.1f MB)"
          % (args.out, len(pages), "" if len(pages) == 1 else "s",
             os.path.getsize(args.out) / 1e6))
    return 0


if __name__ == "__main__":
    sys.exit(main())
