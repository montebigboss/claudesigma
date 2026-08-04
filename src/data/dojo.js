// ---------------------------------------------------------------------------
// THE DOJO — writing reps. Knowing the 101 rules is worthless without them.
// Each rep gives a brief, the rules under test, and a self-scored rubric.
// ---------------------------------------------------------------------------
window.DOJO = [
  {
    id: "subject-10",
    tier: 1,
    name: "Ten Subject Lines, One Email",
    rules: [56, 57, 60, 61],
    brief:
      "Take the last email you wrote (or any email in your inbox right now). Write TEN subject lines for it. For each one, write the exact question it forms in the reader's head.",
    kicker:
      "Then run every line through the graft test: imagine it arrived from a sender you almost never open. How many survive?",
    rubric: [
      "All ten pose a question — none are just descriptive",
      "At least two make the reader think 'Wait —' or 'Huh?'",
      "At least three use specificity or borrowed credibility",
      "At least one is genuinely 'out there' — the weirdest legitimate angle in the body",
      "I wrote down the question each line forms, not just the line",
    ],
  },
  {
    id: "story-capture",
    tier: 1,
    name: "The Story Sense Rep",
    rules: [27, 30],
    brief:
      "Write down three things that happened to you in the last 48 hours. Not big things — the smaller the better. Then for each one, write a single sentence about how you REACTED.",
    kicker:
      "The reaction is the email. The event is just scaffolding. Do this daily and your story sense compounds.",
    rubric: [
      "All three are ordinary, everyday moments — no life milestones",
      "Each has a reaction line that reveals something about my character",
      "At least one made me smile writing it",
      "I can see a pivot to a lesson in at least one of them",
    ],
  },
  {
    id: "triforce-fix",
    tier: 1,
    name: "Triforce Triage",
    rules: [28, 14],
    brief:
      "Write a 3-sentence email lead about something from your own week. Then score it honestly: relevant to your topic? entertaining? brief? If you scored fewer than two, rewrite it until you don't.",
    kicker:
      "The fastest fix is almost always brevity. Cut it in half before you try to make it funnier.",
    rubric: [
      "My lead scores at least 2 of 3 on the Triforce",
      "The first line alone would stop a skimmer",
      "It implies something fun or valuable is coming",
      "I actually rewrote it at least once",
    ],
  },
  {
    id: "pas-rep",
    tier: 1,
    name: "PAS Without A Story",
    rules: [29, 43, 46],
    brief:
      "Pick a product you could plausibly sell. Write a 200-word email using pure PAS — paint the problem, agitate it, reveal the solution. No personal story allowed.",
    kicker:
      "Agitate with a horror story, not a lecture. And write with empathy — pain plus a way out is hope, not misery.",
    rubric: [
      "The problem is painted in concrete, specific detail",
      "The agitation shows a vivid consequence, not an abstract one",
      "It reads with empathy — I understand them, I'm not mocking them",
      "The solution arrives as relief, not as a pitch",
      "Under 250 words",
    ],
  },
  {
    id: "villains",
    tier: 2,
    name: "Build Your Villains Gallery",
    rules: [37, 43, 48],
    brief:
      "For one market you know: list 15 pains, frustrations and fears. Then list 5 enemies you could fight on their behalf. That's 20 email themes you now own.",
    kicker: "Keep this file forever. Add to it every time you read something in your market.",
    rubric: [
      "15+ pains, written in the market's own words where possible",
      "5 enemies, at least one of which is a philosophy rather than a person",
      "At least three pains have a horror story attached",
      "I can name the email I'd write from the top three",
    ],
  },
  {
    id: "backwards",
    tier: 2,
    name: "Write It Backwards",
    rules: [33, 36],
    brief:
      "Start with a story from your life. Write it out first — no idea yet what you're selling. THEN find the tip inside it, and THEN find the pitch it pivots to.",
    kicker:
      "This is the skill that makes daily email sustainable. It's also the one most people never practise.",
    rubric: [
      "I wrote the story before I knew the pitch",
      "The pivot to the tip feels earned, not bolted on",
      "The story plants an idea that makes the product feel necessary",
      "Total time under 60 minutes",
    ],
  },
  {
    id: "reader-mail",
    tier: 2,
    name: "The Reply Email",
    rules: [40, 48, 49],
    brief:
      "Find a critical or opinionated message you've received (or a hostile comment on a post in your market). Write the email that reprints it and responds.",
    kicker:
      "Write the furious first draft. Then delete every insult and every sign that you're rattled. What's left is the email.",
    rubric: [
      "The reprinted message is the hook — it opens the email",
      "I played the ball, not the man",
      "I don't come across as rattled or upset anywhere",
      "I took an actual position rather than hedging",
      "There's a CTA at the end",
    ],
  },
  {
    id: "human-rewrite",
    tier: 2,
    name: "De-Copywriter A Sequence",
    rules: [86, 35, 85],
    brief:
      "Find a cart abandonment or promo email in your own inbox that reeks of persuasion hacks. Rewrite it as if a real human who genuinely knows the customer wrote it in two minutes.",
    kicker:
      "Would a 50-year-old woman write 'This Product Is In Your Cart… But It Would Rather Be Burning Your Fat!'? Heck no.",
    rubric: [
      "No rhetorical questions aimed at the reader",
      "No bulleted 'what you get' stack",
      "It sounds like a specific person, not a brand",
      "It's shorter than the original",
      "I'd send it to someone I actually liked",
    ],
  },
  {
    id: "word-paint",
    tier: 2,
    name: "Word-Painting Drill",
    rules: [75, 74],
    brief:
      "Pick a physical object within arm's reach. Sell it in 150 words using as many senses as you can — sight, smell, sound, touch, taste. Then do it again for something expensive.",
    kicker:
      "For the luxury version, add the story of how it was made and the kind of person who owns it.",
    rubric: [
      "At least three senses engaged in the first version",
      "The luxury version tells a craft or rarity story",
      "The luxury version implies an identity the buyer wants",
      "No feature list anywhere",
    ],
  },
  {
    id: "campaign-plan",
    tier: 3,
    name: "Plan A Full Campaign",
    rules: [87, 88, 89, 91, 95, 98],
    brief:
      "Pick an offer. Write the campaign plan on one page: length, close date and time, email tolerance, aggressiveness, emails per day for each phase, and the subject line of every single email including the last call.",
    kicker:
      "Do the intel first — iPdo, offer & narrative, tolerance, relationship. The schedule falls out of it.",
    rubric: [
      "Sale is 3-7 days and closes on a weekday",
      "Emails-per-day matches tolerance × aggressiveness for both phases",
      "Every subject line poses a question",
      "The deadline appears in the last call subject line",
      "The pre-launch email warns them about the volume",
      "There's a narrative — a reason this sale exists",
    ],
  },
  {
    id: "seven-day",
    tier: 3,
    name: "Seven Days, Seven Emails",
    rules: [17, 18, 21, 78],
    brief:
      "Write and send (or draft) seven emails in seven days to a real list. Every one sells something. Every one leaves the reader knowing you better.",
    kicker:
      "This is the rep that separates people who've read the Compendium from people who can do it.",
    rubric: [
      "All seven contain a link or CTA",
      "Six of seven are soft sells",
      "Each one reveals something new about my character",
      "None took me more than 60 minutes",
      "At least one is a rant, a fight, or a strong opinion",
      "At least one made someone reply",
    ],
  },
  {
    id: "market-dig",
    tier: 3,
    name: "The Two-Hour Market Dig",
    rules: [39, 43],
    brief:
      "Pick a market you know nothing about. Spend two hours in their forums. Come out with: 10 verbatim pain quotes, 3 horror stories, 5 hooks, and 5 subject lines.",
    kicker:
      "Look for the long rants where everyone replies 'this is exactly how I feel'. That's the gold.",
    rubric: [
      "10 quotes captured verbatim — their words, not mine",
      "3 horror stories with a vivid consequence",
      "5 hooks that promise the fast, easy transformation",
      "5 subject lines, each with its implied question written out",
      "I could write a sales email for this market right now",
    ],
  },
];

// The Story Vault prompt rotation — Rule #27 in daily form.
window.VAULT_PROMPTS = [
  "What was the most irritating thing that happened today?",
  "What did someone say to you that you're still thinking about?",
  "What small thing went wrong that you handled badly?",
  "What did you overhear that wasn't meant for you?",
  "What did a child, a pet, or a stranger do that made you laugh?",
  "What did you almost buy today, and what stopped you?",
  "What's something you're weirdly stubborn about?",
  "What opinion did you have today that you'd be nervous to publish?",
  "What did you fail at this week?",
  "What piece of technology betrayed you?",
  "Who annoyed you, and what exactly did they do?",
  "What did you do today that you'd be embarrassed to admit?",
  "What's the last thing that made you genuinely excited?",
  "What rule did you break today?",
  "What did you put off, and why?",
  "What's a habit of yours that other people find strange?",
  "What advice did you give someone recently?",
  "What did you argue about?",
  "What did you notice that nobody else seemed to?",
  "What went right when you expected it to go wrong?",
];
