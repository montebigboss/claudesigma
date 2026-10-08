#!/usr/bin/env python3
"""Inline Wykuj into single-file builds.

  dist/wykuj.html           full document: open straight off disk, email, host anywhere
  dist/wykuj.artifact.html  body-only variant for hosts that supply their own
                            <!doctype>/<head>/<body> skeleton (claude.ai artifacts)

With --with-pages the photos of reading pages (assets/) are inlined as data URIs
and the builds go to dist-private/ instead. Those photos are other people's
copyrighted books, so they stay out of git (see .gitignore) and only end up in
the private artifact.
"""
import base64
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def main():
    html = read("index.html")
    css = read("app.css")
    html = html.replace('<link rel="stylesheet" href="app.css" />', "<style>\n" + css + "\n</style>")
    html = re.sub(
        r'<script src="([^"]+)"></script>',
        lambda m: "<script>\n" + read(m.group(1)).replace("</script", "<\\/script") + "\n</script>",
        html,
    )
    assert "<script src=" not in html, "a script tag was left unresolved"

    # Zdjęcia z assets/ (strony czytanek) jako data URI w Wykuj.IMG, zaraz po silniku.
    # Bez --with-pages plik wie, że zdjęć w nim nie ma, i chowa tryb „Oryginał”.
    with_pages = "--with-pages" in sys.argv
    imgs = {}
    if with_pages:
        for path in sorted(glob.glob(os.path.join(ROOT, "assets", "**", "*.jpg"), recursive=True)):
            rel = os.path.relpath(path, ROOT).replace(os.sep, "/")
            with open(path, "rb") as f:
                imgs[rel] = "data:image/jpeg;base64," + base64.b64encode(f.read()).decode("ascii")
        assert imgs, "--with-pages but no photos in assets/"
    anchor = "<!-- moduły: jeden plik na wykład -->"
    assert anchor in html, "missing modules anchor for images"
    html = html.replace(anchor, "<script>\nWykuj.BUNDLED = true;\nWykuj.IMG = " + json.dumps(imgs) + ";\n</script>\n    " + anchor, 1)
    assert 'href="app.css"' not in html, "the stylesheet was left unresolved"

    out_dir = os.path.join(ROOT, "dist-private" if with_pages else "dist")
    os.makedirs(out_dir, exist_ok=True)
    full = os.path.join(out_dir, "wykuj.html")
    with open(full, "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote %s (%.0f KB)" % (full, len(html.encode("utf-8")) / 1024))

    title = re.search(r"<title>.*?</title>", html, re.S).group(0)
    style = re.search(r"<style>.*?</style>", html, re.S).group(0)
    inner = html.split("<body>", 1)[1].rsplit("</body>", 1)[0].strip()
    embed = title + "\n" + style + "\n" + inner + "\n"
    art = os.path.join(out_dir, "wykuj.artifact.html")
    with open(art, "w", encoding="utf-8") as f:
        f.write(embed)
    print("wrote %s (%.0f KB)" % (art, len(embed.encode("utf-8")) / 1024))


if __name__ == "__main__":
    main()
