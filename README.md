# Inbox Dojo

A high-dopamine trainer for Daniel Throssell's email copywriting material — built
so the ideas end up in your hands, not just your bookmarks.

Everything runs in the browser. No build step, no dependencies, no server, no
account. Progress lives in `localStorage` and never leaves your device.

## Run it

Open `index.html`. That's it.

For the portable single-file version (one 300 KB HTML file you can email
yourself, drop on a USB stick, or host anywhere):

```
python3 tools/bundle.py     # → dist/inbox-dojo.html
```

## What's in it

**Seven training modes**, each drilling a different muscle:

| Mode | What it trains |
| --- | --- |
| ⚡ Rapid Fire | 20-second recall across all 101 Compendium rules |
| 🔥 Heresy or Throssell | Snap binary judgement — is this doctrine, or do we burn it? |
| 🎯 Subject Line Lab | Rule #56 — which line actually poses a question? |
| 🔺 Triforce Judge | Rule #28 — score a lead on relevance, entertainment, brevity |
| 🎖️ Campaign Commander | Tolerance × aggressiveness → emails per day, from the cheat sheet |
| 🔎 Field Research | Market Detective surveys, interviews and hook-hunting |
| 💀 The Gauntlet | 25 mixed questions, three lives, everything in the app |

**The Codex** — all 101 rules in full, categorised and searchable, plus four
Field Manuals condensed from the Campaign Conqueror cheat sheet, the hooks &
angles Q&A, and Market Detective stages III and IV.

**The Dojo** — twelve writing reps across three tiers, from "ten subject lines
for one email" up to "plan a full campaign" and "seven days, seven emails". Each
has a self-scored rubric. Plus a **Story Vault** for Rule #27: a rotating daily
prompt to bank the small everyday moments that become emails.

**Progression** — XP, eleven ranks (Unsubscribed Nobody → Email Emperor), a
mastery map over all 101 rules, day streaks, 27 achievements, and three daily
quests that reroll each morning.

### The spaced-repetition bit

Every rule carries a mastery level from 0 to 5. A correct answer adds one; a
miss takes one away. Five means mastered. Drills weight their question selection
toward the rules you're weakest on, so the app pushes you at what you don't know
rather than what you already do.

## Project layout

```
index.html              entry point; loads everything in order
assets/app.css          all styling
src/
  state.js              progress, XP, mastery, streaks, achievements, quests
  fx.js                 synthesised audio, particles, toasts, haptics
  ui.js                 shared DOM helpers and the rule/manual sheets
  app.js                router and top chrome
  views/
    drill.js            shared quiz runner (MCQ + binary)
    labs.js             Subject Line Lab, Triforce Judge, Campaign Commander
    views.js            Home, Codex, Dojo, Progress
  data/
    rules.js            GENERATED — all 101 rules
    manuals.js          the four field manuals
    rapidfire.js        105 multiple-choice questions
    heresy.js           70 doctrine/heresy statements
    labs.js             24 subject line pairs, 12 leads, campaign tables & questions
    dojo.js             12 writing reps + story prompts
    progress.js         ranks, achievements, quest pool
tools/
  build_rules.py        parses the Compendium transcript → src/data/rules.js
  bundle.py             inlines everything → dist/inbox-dojo.html
  slides_to_pdf.py      rebuilds a screen-shared document from a video → PDF
```

### Regenerating the rules

`src/data/rules.js` is generated, not hand-edited. The source transcript is OCR
output, so the build script patches four headings that wrapped onto a second
line, three rules that lost their numbers, and a handful of character misreads.
Category and one-line summary for each rule are authored in the script's `META`
table.

```
COMPENDIUM_TXT=/path/to/transcript.txt python3 tools/build_rules.py
```

## Capturing a document from a video

`tools/slides_to_pdf.py` rebuilds the document someone screen-shares in a talk.
A walkthrough is mostly static — the page holds still while they talk, then
jumps — so the script samples the video, finds the runs of frames that hold
still, keeps one clean frame per run, and stacks those into a PDF. A page the
talk returns to is dropped as a duplicate unless you pass `--keep-repeats`.

Needs `ffmpeg` on `PATH`, plus `pillow` and `numpy`. Give it a local file, or a
URL if `yt-dlp` is installed and the network allows it.

```
python3 tools/slides_to_pdf.py talk.mp4 --list          # what it found, no PDF
python3 tools/slides_to_pdf.py talk.mp4 --out deck.pdf
```

Two knobs carry most of the work. Geometry is `X,Y,W,H`, in pixels
(`960,500,300,200`) or as percentages of the frame (`75%,70%,25%,28%`).

| Flag | Use |
| --- | --- |
| `--mask` | ignore a box when comparing frames — a webcam overlay or a blinking cursor never stops moving, so without this every frame reads as a page turn (repeatable) |
| `--crop` | crop every page, so the PDF is the document rather than a screenshot of someone's desktop |
| `--at` | skip detection and grab exactly these timestamps: `--at 0:12,1:05,2:33.5` |
| `--area` | floor on how much must change to count as a page turn; lower it if pages differ only subtly |
| `--min-hold` | seconds a page must hold still to count (default 1.2) |
| `--frames-dir` | also save the chosen pages as PNGs, so you can check or hand-fix them |

Start with `--list` and tune `--mask` and `--area` until the page count matches
what you counted by eye. The threshold adapts to the footage — it sits above
whatever the video does at rest — so noisy recordings raise it on their own.

Use it on material you're entitled to have: your own recordings, a talk whose
deck was shared with the audience, a course you've bought.

## Credit

All source material is Daniel Throssell's: the *Email Copywriting Compendium*,
the Campaign Conqueror cheat sheet, and *Market Detective*. This is a personal
study tool built from notes — go buy the actual courses at
[persuasivepage.com](https://persuasivepage.com).
