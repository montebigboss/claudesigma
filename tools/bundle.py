#!/usr/bin/env python3
"""Inline every asset into dist/inbox-dojo.html.

The multi-file version in the repo root is the one to edit. This produces a
single portable file — email it to yourself, drop it on a USB stick, host it
anywhere, open it straight off disk.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def read(rel):
    with open(os.path.join(ROOT, rel), encoding="utf-8") as f:
        return f.read()


def main():
    html = read("index.html")

    # Inline the stylesheet.
    css = read("assets/app.css")
    html = re.sub(
        r'<link rel="stylesheet" href="assets/app\.css" />',
        "<style>\n" + css + "\n</style>",
        html,
    )

    # Inline every script in document order.
    def sub_script(m):
        return "<script>\n" + read(m.group(1)) + "\n</script>"

    html = re.sub(r'<script src="([^"]+)"></script>', sub_script, html)

    assert "<script src=" not in html, "a script tag was left unresolved"
    assert 'href="assets' not in html, "a stylesheet was left unresolved"

    out_dir = os.path.join(ROOT, "dist")
    os.makedirs(out_dir, exist_ok=True)
    out = os.path.join(out_dir, "inbox-dojo.html")
    with open(out, "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote %s (%.0f KB)" % (out, len(html.encode("utf-8")) / 1024))

    # A second variant for hosts that supply their own document skeleton:
    # everything between <body> and </body>, plus the <title> and <style>.
    inner = html.split("<body>", 1)[1].rsplit("</body>", 1)[0].strip()
    title = re.search(r"<title>(.*?)</title>", html, re.S).group(1)
    style = re.search(r"<style>.*?</style>", html, re.S).group(0)
    embed = "<title>" + title + "</title>\n" + style + "\n" + inner
    out2 = os.path.join(out_dir, "inbox-dojo.embed.html")
    with open(out2, "w", encoding="utf-8") as f:
        f.write(embed)
    print("wrote %s (%.0f KB)" % (out2, len(embed.encode("utf-8")) / 1024))


if __name__ == "__main__":
    main()
