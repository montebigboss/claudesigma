#!/usr/bin/env python3
"""Parse the Compendium transcription into src/data/rules.js.

The transcript is OCR output, so a handful of headings are mangled or wrapped
into the body. Those are patched below by rule number. Everything else is
lifted verbatim so the Codex quotes Throssell rather than paraphrasing him.
"""
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.environ.get(
    "COMPENDIUM_TXT",
    "/root/.claude/uploads/177eeb24-6843-544f-8912-c8dfb3ae967b/3f18fd40-Compendium_transcription.txt",
)

# --- OCR fixes -------------------------------------------------------------
TITLE_FIX = {
    25: "Exaggeration Is The Most Amazing, Incredible Technique In The History Of Storytelling And There Has NEVER Been Anything Better!!!",
    33: "Regular Broadcasts Are Best Written sdrawkcaB (btw that's 'Backwards' ... backwards)",
    36: "How To Use Stories To Sell",
    38: "How To Never Run Out Of Email Ideas, Part II",
    58: "Why I Love Subject Lines That Don't Even Show Up In Full On Your Phone",
}
# Rule 36's heading ran into its body in the OCR; put the stray sentence back.
BODY_PREFIX = {
    36: "Most of the stories I tell in emails are designed to entertain and build a "
}

# These headings wrapped onto a second line, which the parser read as body text.
BODY_STRIP = {
    25: "Storytelling And There Has NEVER Been Anything Better!!!",
    31: "About The Reader",
    58: "The Whole Screen On A Desktop",
    62: "Full Name Boosts Opens More, But ...",
}

# Straight OCR misreads. Each is a literal substring swap, applied once.
TEXT_FIXES = [
    ("so | have to either", "so I have to either"),
    ("the stories | tell", "the stories I tell"),
    ("this is why | think", "this is why I think"),
    ("for this reason L always", "for this reason I always"),
    ("how hard 1 am going", "how hard I am going"),
    ("stupid, Igenerally write", "stupid, I generally write"),
    ("the rarity\n\nof what's in it", "the rarity of what's in it"),
    ("38. How To Never Run Out Of Email Ideas, Part I|", ""),
]

# --- category + one-line "key" for every rule ------------------------------
# cat ids must match CATS below.
META = {
    1: ("mind", "Every rule is context-dependent — including these ones."),
    2: ("list", "Ten ingredients that make an email list must-read."),
    3: ("list", "Ask: is this worth my reader stopping what they're doing?"),
    4: ("list", "Take a 5-year view of your list, not a 5-week one."),
    5: ("list", "Entertainment is value. Everything must be entertaining."),
    6: ("list", "People value curation, not volume. One idea per email."),
    7: ("list", "People value what they pay for. Don't give away your best."),
    8: ("list", "One boring email and you're filed under 'read later' forever."),
    9: ("list", "Aim for ~500 words. Leave them hungry."),
    10: ("list", "Fun emails read short no matter the word count."),
    11: ("list", "Grade 5 or lower. Short sentences, small words, line breaks."),
    12: ("list", "Readers make THREE decisions, not one."),
    13: ("list", "Hurdle 2: perceived effort — how many words they can see."),
    14: ("list", "Hurdle 3: the first few lines. Make line one grabby."),
    15: ("list", "One email can't take someone cold to sold. Sell cumulatively."),
    16: ("list", "Good email marketing can replace the long sales letter entirely."),
    17: ("sell", "Every email gets a link or a CTA. No exceptions."),
    18: ("sell", "Soft-sell 90% of the time; harvest with short hard sales."),
    19: ("persona", "People open their inbox to be entertained, not briefed."),
    20: ("persona", "Make characters of the people in your life."),
    21: ("persona", "Ask: will they know me better after reading this?"),
    22: ("persona", "Caricature everyone — yourself most of all."),
    23: ("persona", "Brands need a single human voice behind them."),
    24: ("persona", "Cast yourself as an authority figure in your stories."),
    25: ("story", "Amplify the emotion. Burst into rooms; don't enter them."),
    26: ("story", "Write the best story, not the most accurate one."),
    27: ("story", "Small everyday moments beat big life events. Note them daily."),
    28: ("story", "Leads need relevance, entertainment, brevity — nail two of three."),
    29: ("story", "No story? Use PAS: problem, agitate, solution."),
    30: ("story", "Stories exist to show how your character REACTS, not what happened."),
    31: ("story", "Build the relationship and your stories become 'you' content."),
    32: ("persona", "Write like a shop owner chatting to a regular over the counter."),
    33: ("ideas", "Write backwards: start with the hook, then find the pitch."),
    34: ("persona", "Write an entertainment column, not a letter to a friend."),
    35: ("sell", "Weak copywriters use questions. Strong copywriters use stories."),
    36: ("sell", "Pick the story that plants the idea they need the product."),
    37: ("ideas", "Villains Gallery: list their pains, fears and enemies."),
    38: ("ideas", "Be a news desk. Comment on developments in your world."),
    39: ("ideas", "Lurk Reddit and forums. Steal the top posts."),
    40: ("ideas", "Reprint and reply to reader mail. Angrier is better."),
    41: ("ideas", "'I read a story the other day about a guy who...' — then go."),
    42: ("list", "Elevate their thinking with bold, contrarian insight."),
    43: ("emotion", "Horror stories persuade harder than anything else."),
    44: ("emotion", "Be the refreshing drink after the world's bad news."),
    45: ("emotion", "Don't leave people feeling sad, guilty or uncomfortable."),
    46: ("emotion", "Paint pain WITH empathy and a way out — that's hope, not misery."),
    47: ("persona", "Never show chinks in your armour. Stay in character."),
    48: ("emotion", "Fights get more attention than anything else. Pick good ones."),
    49: ("emotion", "Play the ball, not the man. Never appear rattled."),
    50: ("sell", "The hitman funnel is dead. Take the reins long-term."),
    51: ("sell", "Never be needy. Offer the privilege of buying from you."),
    52: ("sell", "You can't fake excitement. Actually be excited."),
    53: ("list", "Double opt-in: better leads and an extra page to write copy for."),
    54: ("list", "Ask for names. The upside beats the opt-in loss."),
    55: ("subject", "Your sender name outranks your subject line for real readers."),
    56: ("subject", "A subject line poses a question and implies the answer's inside."),
    57: ("subject", "Add shock so the question starts with 'Wait —'."),
    58: ("subject", "Long subject lines truncate into curiosity. Front-load them."),
    59: ("subject", "Flat subject line? Add specificity or credibility."),
    60: ("subject", "Find the craziest legitimate angle in the body copy."),
    61: ("subject", "Graft it onto a sender you'd normally ignore. Still open it?"),
    62: ("subject", "Names lift opens — but don't sound like a bank."),
    63: ("subject", "Self-interest generally beats pure curiosity."),
    64: ("subject", "Unsatisfied curiosity turns into resentment. Pay it off fast."),
    65: ("emotion", "Talk about what they're already thinking about."),
    66: ("emotion", "Hot topics hijack their emotional state — pivot carefully."),
    67: ("mind", "A single email's results mean nothing without context."),
    68: ("list", "Never ask for a favour. Bribe with self-interest."),
    69: ("list", "Welcome series runs only as long as it beats your live emails."),
    70: ("list", "Don't ask for whitelisting. Bribe them into replying."),
    71: ("sell", "Sell proudly always, so nobody feels entitled to shame you."),
    72: ("sell", "Humour lowers defences to heavy salesmanship."),
    73: ("sell", "Keep selling to buyers — it re-sells them on using it."),
    74: ("sell", "Luxury sells on story, craft, rarity and identity."),
    75: ("sell", "Physical goods sell by word-painting every sense."),
    76: ("sell", "When there's no problem to solve, sell the relationship."),
    77: ("list", "Give context — but cultivating super-fans is worth some continuity."),
    78: ("list", "Every morning is a mind refresh. Daily is fine if you're interesting."),
    79: ("mind", "30-60 minutes per email. Over 2 hours means weak research."),
    80: ("mind", "Reuse an email once a year at most."),
    81: ("mind", "There's no universal good open rate. Only split-tests compare."),
    82: ("mind", "For every reply, 50 people felt the same and said nothing."),
    83: ("mind", "Watching your subscriber list makes no money and only hurts."),
    84: ("mind", "Unsubscribes clean the list and prove you're not bland."),
    85: ("sell", "Bullets tell people where to stop reading. Use them sparingly."),
    86: ("persona", "Stop being a copywriter. Write like an actual human."),
    87: ("campaign", "Keep promos 3-7 days. Four or five is the sweet spot."),
    88: ("campaign", "Open the sale by being totally up-front. Then it's all reminders."),
    89: ("campaign", "Front-of-mind beats the perfect sales argument."),
    90: ("campaign", "Same emails, but more often, harder CTA, deadline in every one."),
    91: ("campaign", "2/day for short sales; go wild on the final day if it's fun."),
    92: ("campaign", "Mix salesy emails with value emails when mailing twice a day."),
    93: ("sell", "Benefits, not features. How this changes their life."),
    94: ("campaign", "'Free taste' emails devalue the product and rarely work."),
    95: ("campaign", "A third to half of sales land in the final 24 hours."),
    96: ("campaign", "Disguise the pitch as entertainment and you can pitch more."),
    97: ("campaign", "FAQ emails are stupid. Sprinkle FAQs one per email."),
    98: ("campaign", "Always send a last call, 1-3 hours out, deadline in the subject."),
    99: ("mind", "Most people don't get mad at extra emails. They just move on."),
    100: ("mind", "Someone will hate you either way. Choose the profitable way."),
    101: ("mind", "Most things don't matter. Nobody remembers your mistake."),
}

CATS = [
    ("mind", "Mindset & Meta", "The rules about the rules"),
    ("list", "The List", "Building something people want to open"),
    ("persona", "Persona & Character", "Becoming someone worth reading"),
    ("story", "Storytelling", "Turning your life into content"),
    ("ideas", "Idea Generation", "Never running dry"),
    ("emotion", "Emotional Warfare", "Horror, hope, and picking fights"),
    ("subject", "Subject Lines", "The question in their head"),
    ("sell", "Selling", "Soft, hard, and never needy"),
    ("campaign", "Campaigns", "Running a sale that converts"),
]


def parse():
    src = open(SRC, encoding="utf-8").read()
    src = src.replace("WSODOWNLOADS.IN\n", "")
    src = re.sub(
        r"© Compulsive Copy Pty Ltd\. All rights reserved\. See persuasivepage\.com\n",
        "",
        src,
    )
    lines = [l.rstrip() for l in src.split("\n")]

    hits = []
    for i, l in enumerate(lines):
        for m in re.finditer(r'(?:^|(?<=[.\s]))(\d{1,3})\.\s+([A-Z"\'].*)$', l):
            n = int(m.group(1))
            if 1 <= n <= 101:
                hits.append((i, m.start(), n, m.group(2).strip()))
    # Rules 3-5 lost their numbers in the OCR.
    for ln, n, t in (
        (36, 3, "Before You Send Any Email, Ask This ..."),
        (41, 4, "Never Sell Out Your List"),
        (47, 5, '"Value" Does Not Mean "Teaching"'),
    ):
        hits.append((ln, 0, n, t))
    hits.sort()

    acc, last = [], 0
    for i, c, n, t in hits:
        if n == last + 1:
            acc.append((i, c, n, t))
            last = n
    assert len(acc) == 101, f"parsed {len(acc)} rules, expected 101"

    rules = []
    for k, (i, c, n, t) in enumerate(acc):
        end_i = acc[k + 1][0] if k + 1 < len(acc) else len(lines)
        end_c = acc[k + 1][1] if k + 1 < len(acc) else None
        chunk = lines[i + 1 : end_i]
        if end_c:
            chunk.append(lines[end_i][:end_c])
        body = re.sub(r"\n{2,}", "\n\n", "\n".join(chunk)).strip()
        paras = [
            re.sub(r"\s+", " ", p).strip() for p in body.split("\n\n") if p.strip()
        ]
        body = "\n\n".join(paras)
        if n in BODY_STRIP:
            body = body[len(BODY_STRIP[n]) :].lstrip()
        if n in BODY_PREFIX:
            body = BODY_PREFIX[n] + body
        for bad, good in TEXT_FIXES:
            body = body.replace(bad, good)
        cat, key = META[n]
        rules.append(
            {
                "n": n,
                "title": TITLE_FIX.get(n, t),
                "key": key,
                "cat": cat,
                "body": body,
            }
        )
    return rules


def main():
    rules = parse()
    out = os.path.join(ROOT, "src", "data", "rules.js")
    with open(out, "w", encoding="utf-8") as f:
        f.write("// GENERATED by tools/build_rules.py — do not edit by hand.\n")
        f.write("// Source: Daniel Throssell, *Email Copywriting Compendium* (101 rules).\n")
        f.write("window.CATEGORIES = ")
        f.write(
            json.dumps(
                [{"id": a, "name": b, "blurb": c} for a, b, c in CATS],
                indent=2,
                ensure_ascii=False,
            )
        )
        f.write(";\n\nwindow.RULES = ")
        f.write(json.dumps(rules, indent=1, ensure_ascii=False))
        f.write(";\n")
    print(f"wrote {out} ({len(rules)} rules)")


if __name__ == "__main__":
    main()
