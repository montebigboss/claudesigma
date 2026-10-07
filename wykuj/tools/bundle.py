#!/usr/bin/env python3
"""Inline Wykuj into single-file builds.

  dist/wykuj.html           full document: open straight off disk, email, host anywhere
  dist/wykuj.artifact.html  body-only variant for hosts that supply their own
                            <!doctype>/<head>/<body> skeleton (claude.ai artifacts)
"""
import os
import re

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
    assert 'href="app.css"' not in html, "the stylesheet was left unresolved"

    out_dir = os.path.join(ROOT, "dist")
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
