#!/usr/bin/env python3
"""Render a 1080x1920 viral-style educational ad over a background photo or video.

Usage:
  python3 make_ad.py --bg "/path/to/our background/boat.jpg" --out ad.png
  python3 make_ad.py --bg clip.mp4 --t 3.2 --out ad.png      # grabs a frame at 3.2 s
  python3 make_ad.py --out ad.png                              # stand-in sea background

Needs: Pillow, numpy (and ffmpeg only for video backgrounds).
Fonts: looks for Inter Black / ExtraBold, then Montserrat, Arial Black, Helvetica.
"""
import argparse, os, subprocess, tempfile
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageEnhance

W, H = 1080, 1920
YELLOW = (255, 214, 0)
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

HOOK = "Masz kredyt i dziecko?"
SUB = "Sprawdź to zanim uznasz, że rodzina jest zabezpieczona"
ITEMS = [
    "Weź grupówkę z pracy",
    "Weź polisę do kredytu",
    "Sprawdź ile wypłacą w razie śmierci",
    "Sprawdź ile wypłacą gdy nie możesz pracować",
    "Sprawdź co dadzą przy poważnej chorobie",
    "Porównaj to z ratą kredytu i kosztami życia",
    "Zobacz, czy Twojej rodzinie czegoś nie zabraknie",
    "Dopiero wtedy podejmij decyzję",
]
CTA = ["Zacznij od bezpłatnej analizy", "pierwsze spotkanie: 0 zł"]

FONT_DIRS = ["/usr/share/fonts", "/Library/Fonts", "/System/Library/Fonts",
             os.path.expanduser("~/Library/Fonts"), "C:/Windows/Fonts"]


def find_font(names):
    for d in FONT_DIRS:
        for root, _, files in os.walk(d):
            for n in names:
                if n in files:
                    return os.path.join(root, n)
    raise SystemExit(f"None of these fonts found: {names}")


F_BLACK = find_font(["Inter-Black.otf", "Inter-Black.ttf", "Montserrat-Black.ttf",
                     "Arial Black.ttf", "ariblk.ttf", "HelveticaNeue.ttc"])
F_HEAVY = find_font(["Inter-ExtraBold.otf", "Inter-ExtraBold.ttf", "Montserrat-ExtraBold.ttf",
                     "Arial Bold.ttf", "arialbd.ttf", "HelveticaNeue.ttc"])


def font(path, size):
    return ImageFont.truetype(path, size)


# ---------------------------------------------------------------- background
def load_bg(path, t):
    if path is None:
        return standin_sea()
    if path.lower().endswith((".mp4", ".mov", ".m4v", ".webm", ".mkv")):
        tmp = os.path.join(tempfile.mkdtemp(), "frame.png")
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-ss", str(t), "-i", path,
                        "-frames:v", "1", tmp], check=True)
        path = tmp
    img = Image.open(path).convert("RGB")
    s = max(W / img.width, H / img.height)
    img = img.resize((round(img.width * s), round(img.height * s)), Image.LANCZOS)
    l, tp = (img.width - W) // 2, (img.height - H) // 2
    return img.crop((l, tp, l + W, tp + H))


def standin_sea():
    """Procedural sunny turquoise sea with a small boat — placeholder only."""
    rng = np.random.default_rng(7)
    y = np.linspace(0, 1, H)[:, None]
    x = np.linspace(0, 1, W)[None, :]
    horizon = 0.30
    img = np.zeros((H, W, 3))
    # sky
    sky_t = np.clip(y / horizon, 0, 1)
    sky = np.stack([120 + 90 * sky_t, 180 + 50 * sky_t, 240 + 10 * sky_t], -1)
    # water: deep blue far -> turquoise -> pale aqua near
    wt = np.clip((y - horizon) / (1 - horizon), 0, 1)
    water = np.broadcast_to(np.stack([10 + 90 * wt ** 1.4, 110 + 120 * wt ** 0.8, 170 + 50 * wt ** 0.7], -1), (H, W, 3)).copy()
    ripples = (np.sin((x * 40 + np.sin(y * 90) * 1.5) * (1 + wt * 3)) *
               np.sin(y * 300 / (0.3 + wt))) * 14 * (0.3 + wt)
    water += ripples[..., None]
    noise = rng.normal(0, 1, (H // 8, W // 8))
    noise = np.array(Image.fromarray(((noise + 3) * 40).clip(0, 255).astype(np.uint8))
                     .resize((W, H), Image.BICUBIC), float) / 255 - 0.5
    water += noise[..., None] * np.array([20, 35, 30])
    # sun glitter
    glit = (rng.random((H, W)) > 0.996) * (np.exp(-((x - 0.62) ** 2) / 0.02)) * (wt < 0.5)
    water += glit[..., None] * 160
    img = np.where((y < horizon)[..., None], sky, water)
    # distant coast
    coast = horizon - 0.012 - 0.01 * np.sin(x * 9) - 0.006 * np.sin(x * 23 + 1)
    img = np.where(((y < horizon) & (y > coast))[..., None], np.array([70, 95, 80]), img)
    im = Image.fromarray(img.clip(0, 255).astype(np.uint8))
    d = ImageDraw.Draw(im)
    # boat
    bx, by = 640, 760
    d.polygon([(bx - 170, by), (bx + 190, by), (bx + 140, by + 55), (bx - 140, by + 55)], fill=(245, 245, 240))
    d.polygon([(bx - 140, by + 55), (bx + 140, by + 55), (bx + 130, by + 68), (bx - 132, by + 68)], fill=(30, 70, 120))
    d.rectangle([bx - 60, by - 55, bx + 70, by], fill=(235, 235, 230))
    d.rectangle([bx - 45, by - 45, bx + 55, by - 22], fill=(60, 90, 110))
    d.ellipse([bx - 200, by + 60, bx + 210, by + 95], fill=(0, 120, 140))
    im = im.filter(ImageFilter.GaussianBlur(1.2))
    return im


# ---------------------------------------------------------------- text helpers
def wrap(text, f, maxw, draw):
    words, lines, cur = text.split(), [], ""
    for w in words:
        test = (cur + " " + w).strip()
        if draw.textlength(test, font=f) <= maxw or not cur:
            cur = test
        else:
            lines.append(cur); cur = w
    lines.append(cur)
    return lines


def text_h(f):
    a, d = f.getmetrics()
    return a + d


def box_block(img, lines, f, fg, bg, y, pad_x, pad_y, radius, line_gap=6, max_w=None):
    d = ImageDraw.Draw(img)
    widths = [d.textlength(l, font=f) for l in lines]
    lh = f.getbbox("ĄŻg")[3] - f.getbbox("ĄŻg")[1]
    bw = (max_w if max_w else max(widths)) + 2 * pad_x
    bh = len(lines) * lh + (len(lines) - 1) * line_gap + 2 * pad_y
    x0 = (W - bw) / 2
    # soft drop shadow
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle([x0, y + 8, x0 + bw, y + bh + 8], radius, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(10)))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([x0, y, x0 + bw, y + bh], radius, fill=bg)
    top_off = f.getbbox("ĄŻg")[1]
    cy = y + pad_y
    for l, w in zip(lines, widths):
        d.text(((W - w) / 2, cy - top_off), l, font=f, fill=fg)
        cy += lh + line_gap
    return y + bh


def render(bg, out):
    bg = bg.filter(ImageFilter.GaussianBlur(5))
    bg = ImageEnhance.Brightness(bg).enhance(0.88)
    img = bg.convert("RGBA")
    # gentle vignette at top & behind list for legibility
    shade = Image.new("L", (W, H), 0)
    sd = ImageDraw.Draw(shade)
    for i in range(H):
        sd.line([(0, i), (W, i)], fill=int(70 * (0.6 + 0.4 * abs(i / H - 0.5) * 2)))
    img = Image.alpha_composite(img, Image.merge("RGBA", (*[Image.new("L", (W, H), 0)] * 3, shade)))
    d = ImageDraw.Draw(img)
    M = 50  # side margin

    # 1) yellow hook box
    f1 = font(F_BLACK, 82)
    y = box_block(img, [HOOK], f1, BLACK, YELLOW, 150, 34, 26, 18)
    # 2) black sub box
    f2 = font(F_BLACK, 50)
    sub_lines = wrap(SUB, f2, W - 2 * M - 70, d)
    y = box_block(img, sub_lines, f2, YELLOW, BLACK, y + 18, 34, 24, 18, line_gap=10)

    # bottom CTA (measure first so list can fill the gap)
    f4 = font(F_BLACK, 58)
    f4b = font(F_BLACK, 52)
    lh4 = f4.getbbox("ĄŻg")[3] - f4.getbbox("ĄŻg")[1]
    cta_h = 2 * lh4 + 18 + 2 * 40
    cta_y = H - 230 - cta_h

    # 3) numbered list — auto-fit font size into available area
    top, bottom = y + 60, cta_y - 55
    for size in range(64, 34, -1):
        fl = font(F_HEAVY, size)
        num_w = d.textlength("8. ", font=fl)
        blocks = [wrap(t, fl, W - 2 * M - num_w, d) for t in ITEMS]
        lh = fl.getbbox("ĄŻg")[3] - fl.getbbox("ĄŻg")[1]
        gap_l, gap_i = int(size * 0.18), int(size * 0.55)
        total = sum(len(b) * lh + (len(b) - 1) * gap_l for b in blocks) + gap_i * (len(blocks) - 1)
        if total <= bottom - top:
            break
    cy = top + (bottom - top - total) / 2
    top_off = fl.getbbox("ĄŻg")[1]
    stroke = max(5, size // 9)
    for i, b in enumerate(blocks):
        num = f"{i + 1}."
        for j, line in enumerate(b):
            x = M + num_w
            if j == 0:
                d.text((M, cy - top_off), num, font=fl, fill=YELLOW, stroke_width=stroke, stroke_fill=BLACK)
            # hard drop shadow + stroke for that caption look
            d.text((x + 4, cy - top_off + 5), line, font=fl, fill=BLACK, stroke_width=stroke, stroke_fill=BLACK)
            d.text((x, cy - top_off), line, font=fl, fill=WHITE, stroke_width=stroke, stroke_fill=BLACK)
            cy += lh + gap_l
        cy += gap_i - gap_l

    # 4) CTA box with two weights of yellow text
    x0, x1 = M, W - M
    sh = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle([x0, cta_y + 10, x1, cta_y + cta_h + 10], 44, fill=(0, 0, 0, 120))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(12)))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([x0, cta_y, x1, cta_y + cta_h], 44, fill=BLACK)
    l1, l2 = CTA
    # shrink line 1 if needed
    while d.textlength(l1, font=f4) > x1 - x0 - 60:
        f4 = font(F_BLACK, f4.size - 2)
    t1 = f4.getbbox("ĄŻg")[1]
    cy = cta_y + 40
    d.text(((W - d.textlength(l1, font=f4)) / 2, cy - t1), l1, font=f4, fill=YELLOW)
    cy += lh4 + 18
    d.text(((W - d.textlength(l2, font=f4b)) / 2, cy - f4b.getbbox("ĄŻg")[1]), l2, font=f4b, fill=YELLOW)

    img.convert("RGB").save(out, quality=95)
    print("saved", out)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--bg", help="background image or video")
    ap.add_argument("--t", type=float, default=1.0, help="frame time (s) for video backgrounds")
    ap.add_argument("--out", default="ad.png")
    a = ap.parse_args()
    render(load_bg(a.bg, a.t), a.out)
