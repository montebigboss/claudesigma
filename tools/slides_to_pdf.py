#!/usr/bin/env python3
"""Rebuild the document someone screen-shares in a video as a PDF.

A talk where the presenter walks through a deck or a PDF is mostly static: the
page holds still while they talk, then jumps to the next one. So sample the
video cheaply, find the runs of frames that hold still, keep one clean frame per
run, and stack those into a PDF.

Two knobs matter in practice:

  --mask   a webcam overlay or a blinking cursor never stops moving, so every
           frame looks like a change. Mask those boxes out of the comparison.
  --crop   the page is usually a rectangle inside a larger window. Crop it so
           the PDF is the document, not a screenshot of someone's desktop.

Geometry is X,Y,W,H, either in pixels (400,120,1200,900) or as percentages of
the frame (25%,10%,60%,80%); the two can be mixed.

    tools/slides_to_pdf.py talk.mp4 --list
    tools/slides_to_pdf.py talk.mp4 --mask 0,75%,22%,25% --out deck.pdf
    tools/slides_to_pdf.py talk.mp4 --at 0:12,1:05,2:33.5 --out deck.pdf
"""
import argparse
import os
import re
import shutil
import subprocess
import sys
import tempfile

import numpy as np
from PIL import Image

# Frames are compared at this width; wide enough to see a heading change, small
# enough that a 40-minute talk is a rounding error in memory.
COMPARE_WIDTH = 240

# A page turn has to clear the footage's own noise by this much.
NOISE_MULTIPLE = 6.0


# --- geometry --------------------------------------------------------------

def parse_box(text):
    """'400,120,1200,900' or '25%,10%,60%,80%' -> 4 (value, is_pct) pairs."""
    parts = [p.strip() for p in text.split(",")]
    if len(parts) != 4:
        raise argparse.ArgumentTypeError(
            "expected X,Y,W,H — got %r" % text)
    out = []
    for p in parts:
        m = re.fullmatch(r"(-?\d+(?:\.\d+)?)(%?)", p)
        if not m:
            raise argparse.ArgumentTypeError("bad number %r in %r" % (p, text))
        out.append((float(m.group(1)), m.group(2) == "%"))
    return out


def resolve_box(box, width, height):
    """Turn a parsed box into integer pixel (x, y, w, h), clipped to frame."""
    spans = (width, height, width, height)
    vals = [v / 100.0 * span if pct else v for (v, pct), span in zip(box, spans)]
    x, y, w, h = (int(round(v)) for v in vals)
    x, y = max(0, x), max(0, y)
    w, h = max(1, min(w, width - x)), max(1, min(h, height - y))
    return x, y, w, h


def parse_timestamp(text):
    """'92', '1:32', '1:02:03.5' -> seconds as float."""
    bits = text.strip().split(":")
    if len(bits) > 3:
        raise argparse.ArgumentTypeError("bad timestamp %r" % text)
    secs = 0.0
    for bit in bits:
        secs = secs * 60 + float(bit)
    return secs


def fmt_timestamp(secs):
    m, s = divmod(secs, 60)
    h, m = divmod(int(m), 60)
    if h:
        return "%d:%02d:%05.2f" % (h, m, s)
    return "%d:%05.2f" % (m, s)


# --- video in --------------------------------------------------------------

def ensure_tool(name):
    if shutil.which(name) is None:
        sys.exit("%s is not installed — install it and re-run" % name)


def fetch(url, dest_dir):
    """Download a video URL with yt-dlp. Returns the local path."""
    out = os.path.join(dest_dir, "source.%(ext)s")
    cmd = [sys.executable, "-m", "yt_dlp",
           "-f", "bestvideo[height<=1440]+bestaudio/best",
           "--merge-output-format", "mp4", "-o", out, url]
    print("$ " + " ".join(cmd[-6:]))
    if subprocess.call(cmd) != 0:
        sys.exit("download failed — see yt-dlp's output above")
    got = [f for f in os.listdir(dest_dir) if f.startswith("source.")]
    if not got:
        sys.exit("yt-dlp reported success but wrote no file")
    return os.path.join(dest_dir, got[0])


def sample(video, fps, dest_dir):
    """Decode the video down to `fps` PNGs. Returns sorted paths."""
    pattern = os.path.join(dest_dir, "%06d.png")
    cmd = ["ffmpeg", "-nostdin", "-loglevel", "error", "-i", video,
           "-vf", "fps=%s" % fps, pattern]
    if subprocess.call(cmd) != 0:
        sys.exit("ffmpeg could not decode %s" % video)
    frames = sorted(os.path.join(dest_dir, f) for f in os.listdir(dest_dir)
                    if f.endswith(".png"))
    if not frames:
        sys.exit("no frames came out of %s" % video)
    return frames


def grab(video, secs, dest):
    """Pull the single frame at `secs` — accurate seek, so -ss goes after -i."""
    cmd = ["ffmpeg", "-nostdin", "-loglevel", "error", "-i", video,
           "-ss", "%.3f" % secs, "-frames:v", "1", "-y", dest]
    if subprocess.call(cmd) != 0:
        sys.exit("ffmpeg could not grab the frame at %s" % fmt_timestamp(secs))
    return dest


# --- comparison ------------------------------------------------------------

def signature(path, crop_box, masks):
    """A small grayscale array standing in for the frame's content."""
    with Image.open(path) as im:
        arr = np.asarray(im.convert("L"), dtype=np.float32)
    height, width = arr.shape
    # Mask first, against the full frame, so the boxes line up with the frame
    # the user measured them against rather than with whatever --crop leaves.
    # Both frames get the same constant there, so the difference cancels out.
    for box in masks:
        mx, my, mw, mh = resolve_box(box, width, height)
        arr[my:my + mh, mx:mx + mw] = 0.0
    if crop_box:
        cx, cy, cw, ch = resolve_box(crop_box, width, height)
        arr = arr[cy:cy + ch, cx:cx + cw]
    small = Image.fromarray(arr).resize(
        (COMPARE_WIDTH, max(1, round(COMPARE_WIDTH * arr.shape[0] / arr.shape[1]))),
        Image.BILINEAR)
    return np.asarray(small, dtype=np.float32)


def _to_pil_box(px):
    x, y, w, h = px
    return (x, y, x + w, y + h)


def moved_fraction(a, b, pixel_delta):
    """Fraction of the compared area whose brightness shifted meaningfully."""
    return float((np.abs(a - b) > pixel_delta).mean())


def consecutive_diffs(sigs, pixel_delta):
    return [moved_fraction(sigs[i - 1], sigs[i], pixel_delta)
            for i in range(1, len(sigs))]


def pick_threshold(diffs, area_floor):
    """How much movement counts as a new page.

    A fixed number cannot serve both a sparse page, where changing a heading
    moves a fraction of a percent of the pixels, and noisy footage, where
    compression alone moves that much every frame. So sit above whatever the
    footage does at rest: the median frame-to-frame difference is the noise
    baseline (most frames of a talk are a page holding still), and a real page
    turn clears it by a wide margin. --area is the floor under that estimate.
    """
    if not diffs:
        return area_floor
    return max(area_floor, float(np.median(diffs)) * NOISE_MULTIPLE)


def find_holds(diffs, min_hold_frames, threshold):
    """Group frames into runs that hold still. Returns [(start, end)] inclusive."""
    holds, start, total = [], 0, len(diffs) + 1
    for i, diff in enumerate(diffs, 1):
        if diff > threshold:
            if i - start >= min_hold_frames:
                holds.append((start, i - 1))
            start = i
    if total - start >= min_hold_frames:
        holds.append((start, total - 1))
    return holds


def dedupe(picks, sigs, pixel_delta, threshold):
    """Drop a page we have already kept (a slide the talk returns to)."""
    kept = []
    for idx in picks:
        if any(moved_fraction(sigs[idx], sigs[seen], pixel_delta) <= threshold
               for seen in kept):
            continue
        kept.append(idx)
    return kept


# --- pdf out ---------------------------------------------------------------

def page_image(path, crop_box):
    """One chosen frame as it should appear in the PDF."""
    im = Image.open(path)
    if crop_box:
        im = im.crop(_to_pil_box(resolve_box(crop_box, *im.size)))
    return im.convert("RGB")


def build_pdf(images, out_path, crop_box, dpi):
    pages = []
    try:
        pages = [page_image(path, crop_box) for path in images]
        if not pages:
            sys.exit("nothing to write — no pages were selected")
        pages[0].save(out_path, "PDF", resolution=float(dpi),
                      save_all=True, append_images=pages[1:])
    finally:
        for im in pages:
            im.close()
    return out_path


# --- driver ----------------------------------------------------------------

def main(argv=None):
    p = argparse.ArgumentParser(
        description=__doc__,
        formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("source", help="local video file, or a URL to fetch")
    p.add_argument("--out", default="slides.pdf", help="PDF to write")
    p.add_argument("--fps", default="2",
                   help="frames sampled per second of video (default 2)")
    p.add_argument("--at", type=str, default=None,
                   help="skip detection; use these timestamps "
                        "(e.g. 0:12,1:05,2:33.5)")
    p.add_argument("--crop", type=parse_box, default=None,
                   help="crop every page to X,Y,W,H")
    p.add_argument("--mask", type=parse_box, action="append", default=[],
                   help="ignore X,Y,W,H when comparing frames (repeatable)")
    p.add_argument("--min-hold", type=float, default=1.2,
                   help="seconds a page must hold still to count (default 1.2)")
    p.add_argument("--pixel-delta", type=float, default=12.0,
                   help="0-255 brightness change that counts as movement")
    p.add_argument("--area", type=float, default=0.0006,
                   help="floor on the fraction of pixels that must move for a "
                        "page turn; raised automatically on noisy footage")
    p.add_argument("--keep-repeats", action="store_true",
                   help="keep a page even if an identical one was already kept")
    p.add_argument("--list", action="store_true",
                   help="print the detected pages and stop")
    p.add_argument("--frames-dir", default=None,
                   help="also save the chosen frames as PNGs here")
    p.add_argument("--dpi", type=int, default=150, help="PDF resolution")
    args = p.parse_args(argv)

    ensure_tool("ffmpeg")
    work = tempfile.mkdtemp(prefix="slides2pdf-")
    try:
        if re.match(r"^[a-z][a-z0-9+.-]*://", args.source, re.I):
            video = fetch(args.source, work)
        else:
            video = args.source
            if not os.path.isfile(video):
                sys.exit("no such file: %s" % video)

        # Explicit timestamps: the user already knows which frames they want.
        if args.at:
            try:
                stamps = [parse_timestamp(s)
                          for s in args.at.split(",") if s.strip()]
            except argparse.ArgumentTypeError as exc:
                sys.exit("--at: %s" % exc)
            if not stamps:
                sys.exit("--at was given but parsed to no timestamps")
            chosen, times = [], stamps
            for n, secs in enumerate(stamps):
                chosen.append(grab(video, secs,
                                   os.path.join(work, "at%04d.png" % n)))
        else:
            shots = os.path.join(work, "shots")
            os.makedirs(shots)
            frames = sample(video, args.fps, shots)
            step = 1.0 / float(args.fps)
            print("sampled %d frames at %s fps" % (len(frames), args.fps))

            sigs = [signature(f, args.crop, args.mask) for f in frames]
            diffs = consecutive_diffs(sigs, args.pixel_delta)
            threshold = pick_threshold(diffs, args.area)
            print("page-turn threshold %.5f of the compared area" % threshold)
            min_frames = max(1, int(round(args.min_hold / step)))
            holds = find_holds(diffs, min_frames, threshold)
            # The middle of a run is furthest from either transition.
            picks = [(s + e) // 2 for s, e in holds]
            if not args.keep_repeats:
                picks = dedupe(picks, sigs, args.pixel_delta, threshold)
            print("found %d page%s" % (len(picks), "" if len(picks) == 1 else "s"))

            chosen = [frames[i] for i in picks]
            # ffmpeg's fps filter puts frame n at n*step; mid-run is close enough
            # to cite as a timestamp.
            times = [i * step for i in picks]

        for n, (path, secs) in enumerate(zip(chosen, times), 1):
            print("  page %2d  %s  %s" % (n, fmt_timestamp(secs),
                                          os.path.basename(path)))
        if args.list:
            return 0

        if args.frames_dir:
            os.makedirs(args.frames_dir, exist_ok=True)
            for n, path in enumerate(chosen, 1):
                with page_image(path, args.crop) as im:
                    im.save(os.path.join(args.frames_dir, "page%03d.png" % n))
            print("frames -> %s" % args.frames_dir)

        out = build_pdf(chosen, args.out, args.crop, args.dpi)
        print("wrote %s (%d pages, %.1f MB)"
              % (out, len(chosen), os.path.getsize(out) / 1e6))
        return 0
    finally:
        shutil.rmtree(work, ignore_errors=True)


if __name__ == "__main__":
    sys.exit(main())
