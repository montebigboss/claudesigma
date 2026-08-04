// ---------------------------------------------------------------------------
// SUBJECT LINE LAB — Rule #56: a subject line poses a question and implies the
// answer is inside. Pick the stronger line, then read the question it forms.
// ---------------------------------------------------------------------------
window.SUBJECT_PAIRS = [
  {
    r: 56,
    a: "Summer breeze, ice cream and sandy shoes",
    b: "How to stop panic attacks with a tennis ball",
    win: "b",
    q: "Wait — you can stop a panic attack with a tennis ball?! How?",
    why: "A forms no question at all. B poses one you can't leave unanswered.",
  },
  {
    r: 56,
    a: "This is not the email I wanted to send you today",
    b: "An important update from our team",
    win: "a",
    q: "What's inside that made him not want to send it? Why did his plans change?",
    why: "'Important update' poses no question. A opens a loop that demands closing.",
  },
  {
    r: 60,
    a: "Why we don't see the world as it is",
    b: "You're too biased",
    win: "b",
    q: "Excuse me? Too biased about WHAT? How would he know?",
    why: "Throssell's actual rewrite. Provocative and in-your-face beats abstract and safe.",
  },
  {
    r: 60,
    a: "How to have customers begging you to send emails",
    b: "Dating advice for business owners",
    win: "b",
    q: "Dating advice? For business owners? What on earth is this about?",
    why: "The email mentioned dating in passing. He pulled the weirdest legitimate angle out of the body.",
  },
  {
    r: 59,
    a: "How To Make Your Business Stand Out",
    b: "The Steve Jobs secret to making your business stand out",
    win: "b",
    q: "What did Steve Jobs do that I could copy?",
    why: "Same promise, but credibility borrowed from a name people already believe.",
  },
  {
    r: 59,
    a: "Get more leads for your business",
    b: "How to get 36% more leads in your business in December",
    win: "b",
    q: "36%? In December specifically? What's the mechanism?",
    why: "Specificity is the cheapest upgrade available to a flat subject line.",
  },
  {
    r: 57,
    a: "5 tips for better emails",
    b: "The $20 copywriting seminar that saved my business",
    win: "b",
    q: "What's the $20 seminar that saved his business?",
    why: "Ben Settle's. Cheap price + big outcome = a question worth opening for.",
  },
  {
    r: 55,
    a: "Hey",
    b: "Newsletter #47 — March Edition",
    win: "a",
    q: "Huh? Why is the President sending me a personal email?",
    why: "Barack Obama's. The sender name does the work — proof that subject lines don't operate alone.",
  },
  {
    r: 63,
    a: "The thing nobody tells you",
    b: "The copywriting mistake that cost me a client",
    win: "b",
    q: "Which mistake? Would I be making it?",
    why: "Self-interest usually beats naked curiosity — and 'copywriting' tells his list it's for them.",
  },
  {
    r: 35,
    a: "Do you struggle to come up with email ideas?",
    b: "I stole this email idea from a Reddit rant",
    win: "b",
    q: "You stole it? From a rant? Can I do that too?",
    why: "Questions are the tell of an inexperienced copywriter. Statements and stories aren't.",
  },
  {
    r: 62,
    a: "Daniel, check out our new savings accounts",
    b: "The savings account my bank didn't want me to find",
    win: "b",
    q: "What did they not want him to find? Do I have the wrong account?",
    why: "Merge-field openers sound like a bank. Names lift opens — but don't lean on them.",
  },
  {
    r: 64,
    a: "12 words that close any sale (buy my course to find out)",
    b: "The 12 words I used to close a $9,000 client",
    win: "b",
    q: "What were the 12 words? What was the client?",
    why: "Both tease. Only one implies the answer is actually in the email. Unpaid curiosity becomes resentment.",
  },
  {
    r: 98,
    a: "A few final thoughts before we wrap up",
    b: "Last chance to get 33% off any copywriting course I sell",
    win: "b",
    q: "It ends today? What's 33% off?",
    why: "For a last call, the deadline goes IN the subject so people get it without opening.",
  },
  {
    r: 88,
    a: "Something new is coming...",
    b: "Market Detective (my NEW course) is LIVE",
    win: "b",
    q: "It's live? What is it? What does it cost?",
    why: "Cart-open emails are for pre-sold buyers. Announce clearly; don't be coy.",
  },
  {
    r: 43,
    a: "Why hydration matters for kidney health",
    b: "He fell to the floor crying. Then the doctor said one word: water.",
    win: "b",
    q: "What happened to him? What does water have to do with it?",
    why: "Horror story beats health tip. Show the fate, and they persuade themselves.",
  },
  {
    r: 48,
    a: "My thoughts on the copywriting industry",
    b: "r/copywriting is at it again",
    win: "b",
    q: "What did they do? Whose side am I on?",
    why: "A named fight. People want to watch and pick a side.",
  },
  {
    r: 27,
    a: "3 lessons about resilience",
    b: "My 'wind-proof' umbrella had other plans",
    win: "b",
    q: "What happened to the umbrella? And why is he emailing me about it?",
    why: "A tiny everyday moment, told with a promise of entertainment. That's story sense.",
  },
  {
    r: 58,
    a: "Big news",
    b: "I sent deeply personal fan mail to a famous copywriter and got back a...",
    win: "b",
    q: "Got back a WHAT? What did they say?",
    why: "Truncation on mobile adds its own curiosity — so front-load the interesting words.",
  },
  {
    r: 42,
    a: "How to write better bullets",
    b: "Why bullets in sales letters don't work anymore",
    win: "b",
    q: "They don't work? Since when? What am I supposed to use instead?",
    why: "Challenging dogma with real reasoning is how you elevate thinking — and get remembered for it.",
  },
  {
    r: 97,
    a: "Your questions, answered",
    b: "2005 Mia has some objections for 2020 Mia",
    win: "b",
    q: "What is this? Which objections? Who wins?",
    why: "Nothing says 'don't read me' like an FAQ subject. Make it a fight between two versions of a person.",
  },
  {
    r: 6,
    a: "The complete 7-part guide to email deliverability",
    b: "The one-word reply that fixed my deliverability",
    win: "b",
    q: "One word? Which one?",
    why: "Curation over volume. A guide feels like homework; one idea feels like a gift.",
  },
  {
    r: 40,
    a: "Reader feedback roundup",
    b: "'Daniel, this is the worst advice I've ever read'",
    win: "b",
    q: "Who said that? About what? How is he going to respond?",
    why: "Reprint the angry mail. Conflict plus other people's opinions is irresistible.",
  },
  {
    r: 41,
    a: "Some thoughts on learning languages",
    b: "The 99-cent tool you need in your pocket to learn Hebrew",
    win: "b",
    q: "99 cents? What is it? Does it actually work?",
    why: "From the Hooks manual — a teacher's offhand notebook habit, turned into a hook.",
  },
  {
    r: 96,
    a: "Day 3 of the sale",
    b: "How Ben Settle would end my sale today",
    win: "b",
    q: "What would Ben Settle do? Is this written in his voice?",
    why: "Black Friday 2020. Disguise the pitch as entertainment and you can pitch far more often.",
  },
];

// ---------------------------------------------------------------------------
// TRIFORCE JUDGE — Rule #28. Score a lead on relevance, entertainment and
// brevity. Two out of three is a pass; one or zero is a rewrite.
// ---------------------------------------------------------------------------
window.TRIFORCE = [
  {
    r: 28,
    lead:
      "My four-year-old spent eleven minutes this morning explaining, in enormous detail, why the correct number of Weet-Bix is 'all of them'.",
    pitch: "…which is a lot like how most copywriters approach bullet points.",
    truth: { rel: false, ent: true, brief: true },
    why: "Not relevant to copywriting on its own — but it's funny and it's over in one line. Two of three. Ship it.",
  },
  {
    r: 28,
    lead:
      "Last Tuesday I took the train into the city. It was raining. I had a coffee at the place near the station, then walked eight blocks to the client's office, which is on the fourth floor of a building with a slow lift.",
    pitch: "Anyway, the client meeting taught me something about offers.",
    truth: { rel: false, ent: false, brief: false },
    why: "Zero of three. Irrelevant, dull and long. This is the lead that makes people ask 'why am I reading this?'",
  },
  {
    r: 28,
    lead:
      "A reader emailed me yesterday to tell me my emails are 'a masterclass in arrogance'. He's subscribed for two years.",
    pitch: "Which brings me to why unsubscribes don't scare me.",
    truth: { rel: true, ent: true, brief: true },
    why: "Three of three — relevant, entertaining, and two sentences long. This is the ceiling.",
  },
  {
    r: 28,
    lead:
      "I want to talk today about the psychology of deadlines, and specifically about how the perception of scarcity interacts with a buyer's cognitive load in the final hours of a purchase window.",
    pitch: "So here's how to structure your last day of a sale.",
    truth: { rel: true, ent: false, brief: false },
    why: "One of three. Relevant, yes — but it reads like a textbook and it never ends. Compensating factors: none.",
  },
  {
    r: 28,
    lead: "I got fired from my first copywriting job. In week two. By text message.",
    pitch: "Here's what that taught me about client onboarding.",
    truth: { rel: true, ent: true, brief: true },
    why: "Three of three. Relevant, dramatic, and three short sentences.",
  },
  {
    r: 28,
    lead:
      "Here is a complete history of the Weber grill company, founded in 1952 by George Stephen, a metalworker at Weber Brothers Metal Works who was frustrated with the open braziers common at the time and cut a buoy in half to make a lid.",
    pitch: "And that's why your welcome sequence needs a lid. Sort of.",
    truth: { rel: false, ent: false, brief: false },
    why: "Nothing rescues this. Irrelevant, dry and endless — and the pivot admits it doesn't work.",
  },
  {
    r: 28,
    lead:
      "My wife asked me to grab milk. I came home with milk, two novels, a bike pump and no milk.",
    pitch: "Which is exactly what your reader does with your bulleted offer stack.",
    truth: { rel: false, ent: true, brief: true },
    why: "Two of three. Off-topic but funny and fast — and the pivot makes the relevance retroactive.",
  },
  {
    r: 28,
    lead:
      "Open rates across the industry fell 4% last quarter according to a report I read.",
    pitch: "Which is why you should stop worrying about open rates.",
    truth: { rel: true, ent: false, brief: true },
    why: "Two of three. Relevant and short, if flavourless. It survives — but it won't be remembered.",
  },
  {
    r: 28,
    lead:
      "A man in Ohio was fired for being too fat. Not for missing work. Not for poor performance. For his weight — and the letter said so in writing.",
    pitch: "And that's the fear my client's supplement is really selling against.",
    truth: { rel: true, ent: true, brief: true },
    why: "Three of three, and it plants the idea too (#36). This is what a horror-story lead looks like.",
  },
  {
    r: 28,
    lead:
      "I've been reflecting a lot lately on my journey as a copywriter and the many lessons I've learned along the way about persistence, craft, and the value of showing up every single day even when the words don't come easily.",
    pitch: "So today I want to share five of those lessons.",
    truth: { rel: true, ent: false, brief: false },
    why: "One of three. Relevant — and that's all. Vague, self-indulgent and slow. Rewrite it.",
  },
  {
    r: 28,
    lead: "Someone stole my car last night. I found it two streets away. The thief had refuelled it.",
    pitch: "Reminds me of what a good affiliate does for your launch.",
    truth: { rel: false, ent: true, brief: true },
    why: "Two of three. Bizarre, delightful, over in a breath.",
  },
  {
    r: 28,
    lead:
      "Yesterday I reviewed a student's cart abandonment sequence. The headline was: 'This Product Is In Your Cart... But It Would Rather Be Burning Your Fat!'",
    pitch: "Here's how I rewrote it as an actual human being.",
    truth: { rel: true, ent: true, brief: true },
    why: "Three of three. Relevant, the headline is funny on its own, and it takes two lines.",
  },
];

// ---------------------------------------------------------------------------
// CAMPAIGN COMMANDER — the Campaign Conqueror cheat sheet, made playable.
// ---------------------------------------------------------------------------
window.CAMPAIGN_TABLES = {
  tolerance: [
    { id: "extreme", name: "Extreme", desc: "Daily or almost daily — sometimes more than once a day" },
    { id: "high", name: "High", desc: "A few times a week" },
    { id: "medium", name: "Medium", desc: "A few times a month" },
    { id: "low", name: "Low", desc: "Once a month or less" },
  ],
  aggression: [
    {
      id: "high",
      name: "High Aggressiveness",
      desc: "The offer is so good you'd bang on their window to wake them up. Maximising sales. Willing to risk angry replies, unsubs and spam complaints.",
    },
    {
      id: "low",
      name: "Low Aggressiveness",
      desc: "Good offer, but not worth getting them out of bed for. Not looking to rock the boat with this list.",
    },
  ],
  postLaunch: {
    extreme: { high: "3", low: "2" },
    high: { high: "2-3", low: "1-2" },
    medium: { high: "1-2", low: "1" },
    low: { high: "1-2", low: "1" },
  },
  finalDay: {
    extreme: { high: "5-7", low: "3-4" },
    high: { high: "3-5", low: "2-3" },
    medium: { high: "2-4", low: "1-2" },
    low: { high: "2", low: "1" },
  },
};

// Hand-written campaign scenarios (the table drills are generated at runtime).
window.CAMPAIGN_Q = [
  {
    r: 87,
    q: "A client wants a 12-day sale so 'everyone gets a chance to see it'. What do you tell them?",
    o: [
      "Great — more exposure means more sales",
      "Cut it to 3-7 days; beyond 7 you just tire people out",
      "Extend it to 14 for a round two weeks",
      "Split it into two 12-day sales",
    ],
    a: 1,
    why: "4 or 5 days is probably best. Extending cart-open does NOT give proportionate sales increases.",
  },
  {
    q: "In the magnifying glass metaphor, what is the solar flare?",
    o: ["Your list size", "The deadline", "Your offer", "The sales page"],
    a: 1,
    why: "Emails are the magnifying glass, attention and desire are the light, the sale is the leaf — and the deadline is the flare.",
  },
  {
    q: "The 3 Laws of New Email Warfare are: send more, stand alone, and...",
    o: [
      "Discount deeper each day",
      "Make your sales emails something people WANT to read",
      "Segment aggressively",
      "Never mention the deadline twice",
    ],
    a: 1,
    why: "More volume only works if the emails are worth opening.",
  },
  {
    q: "Which is NOT part of the intel you need before writing a campaign?",
    o: [
      "Market profiling (iPdo)",
      "Email tolerance",
      "List relationship",
      "Their preferred email client",
    ],
    a: 3,
    why: "iPdo = identity, problems, dreams, obstacles. Plus offer & narrative, tolerance, and relationship.",
  },
  {
    q: "'Email tolerance' and 'list relationship' are...",
    o: [
      "The same thing measured two ways",
      "Related but NOT necessarily correlated",
      "Both measured by open rate",
      "Both irrelevant to frequency",
    ],
    a: 1,
    why: "Relationship determines the power and scope of your narrative. Measure it by replies, not opens.",
  },
  {
    q: "When should you START teasing a campaign?",
    o: [
      "One week out",
      "The moment you know you're going to run it",
      "The day before",
      "Only once the sales page is finished",
    ],
    a: 1,
    why: "Duration of teasing beats strength of sales pitches. Only start specifically pre-selling 1-2 weeks out.",
  },
  {
    q: "Why tell people in the pre-launch email that you'll be emailing heavily and they can unsubscribe?",
    o: [
      "It's legally required",
      "It psychologically preps them to accept the emails when they come",
      "It boosts list quality metrics",
      "It reduces spam complaints to zero",
    ],
    a: 1,
    why: "Warn them, give them the exit, and the ones who stay have consented to the barrage.",
  },
  {
    q: "Price-anchoring works better the...",
    o: [
      "Closer to launch you do it",
      "Longer someone believes it",
      "Higher the discount",
      "Fewer times you mention it",
    ],
    a: 1,
    why: "Which is why you anchor as early as possible.",
  },
  {
    q: "What's the job of the cart-open email?",
    o: [
      "Deliver the strongest sales argument of the campaign",
      "Serve the pre-sold buyers: what it is, where to buy",
      "Tell a long origin story",
      "Handle objections",
    ],
    a: 1,
    why: "Don't get fancy. Clear announcing subject line, quick recap, link.",
  },
  {
    q: "Why use the middle days of a sale for LOGICAL appeals?",
    o: [
      "People are more logical and less emotional when they have time",
      "It's easier to write",
      "Emotional appeals get flagged as spam",
      "Logic converts better overall",
    ],
    a: 0,
    why: "So the emotional push at the deadline has a logical backing already in place.",
  },
  {
    q: "If you're sending 2 emails a day, when should they go out?",
    o: [
      "Both in the morning",
      "Morning and afternoon of your main market, or 12 hours apart",
      "Midnight and noon UTC",
      "Whenever your ESP allows",
    ],
    a: 1,
    why: "At 3/day: early morning, early afternoon and evening — or 8 hours apart.",
  },
  {
    q: "Beyond 5 emails on the final day, Throssell recommends...",
    o: [
      "Stopping — it's too many",
      "A fun theme that ties them all together",
      "Switching to SMS",
      "Sending only to openers",
    ],
    a: 1,
    why: "Like 'How XYZ would end my sale today' from Black Friday 2020.",
  },
  {
    q: "Why does the last call email matter beyond the sale itself?",
    o: [
      "It's the highest-converting email",
      "It's the FIRST email people open afterwards — your chance to soothe their rage at the 'spam'",
      "It resets deliverability",
      "It triggers the refund window",
    ],
    a: 1,
    why: "Tell them the sales emails stop tomorrow. 30-60 minutes before cart close.",
  },
  {
    q: "When writing the campaign's sales page, remember you're writing for...",
    o: ["Cold traffic", "Warm traffic", "Affiliates", "Search engines"],
    a: 1,
    why: "So avoid long story leads, lead with the product, and don't hide the price if your emails named it.",
  },
  {
    q: "Which change does NOT belong in a campaign email versus a normal one?",
    o: [
      "Higher frequency",
      "Shorter length",
      "Removing your personality to look professional",
      "Mentioning the deadline in every email",
    ],
    a: 2,
    why: "The Compendium approach stays intact. You just tighten, quicken and push.",
  },
  {
    q: "Should every campaign email have a hook?",
    o: [
      "Yes, always",
      "No — some can be dedicated purely to discussing the offer",
      "Only on the final day",
      "Only the cart-open email",
    ],
    a: 1,
    why: "During a sale, a naked offer email is legitimate. Outside one, it isn't.",
  },
];

// ---------------------------------------------------------------------------
// FIELD RESEARCH — drills from the two Market Detective manuals + Hooks.
// ---------------------------------------------------------------------------
window.RESEARCH_Q = [
  {
    q: "Why must survey data never overrule anonymous forum data?",
    o: [
      "Surveys have smaller samples",
      "Surveys ask people to ANALYSE their feelings; people are only good at EXPRESSING them",
      "Forums are more recent",
      "Survey tools introduce bias",
    ],
    a: 1,
    why: "A Reddit rant is expression. A survey answer is self-analysis — and people are bad at it.",
  },
  {
    q: "The world's dumbest survey question is...",
    o: [
      "'What's your biggest struggle?'",
      "'Would you buy this?'",
      "'How did you hear about us?'",
      "'What do you do for work?'",
    ],
    a: 1,
    why: "Ask instead: 'What have you already bought to solve this problem?'",
  },
  {
    q: "Which is one of the 4 Laws of Surveys?",
    o: [
      "Always use multiple choice for clean data",
      "Write the survey as your client, in the voice you'd use for their copy",
      "Ask at least 15 questions to get depth",
      "Cap answers at 100 characters",
    ],
    a: 1,
    why: "Also: let people write as much as they want, fewer questions, and don't be vague.",
  },
  {
    q: "Why avoid multiple-choice questions in a market survey?",
    o: [
      "They're harder to build",
      "How much someone writes is itself a signal of how good a prospect they are",
      "They bias toward the first option",
      "They can't be sorted in a spreadsheet",
    ],
    a: 1,
    why: "Longer answers can usually be trusted more.",
  },
  {
    q: "The 'Passion Score' trick is...",
    o: [
      "Rating each response 1-10 by hand",
      "Using =LEN() on open-ended answers and sorting descending",
      "Counting emotional words",
      "Weighting by purchase history",
    ],
    a: 1,
    why: "The best responses filter to the top automatically.",
  },
  {
    q: "A useful survey response needs all three of:",
    o: [
      "Length, politeness, detail",
      "Relevance, emotion, specifics",
      "Emotion, urgency, budget",
      "Relevance, brevity, humour",
    ],
    a: 1,
    why: "Emotion can be powerful words ('terrified', 'paralysed') or a powerful idea.",
  },
  {
    q: "Roughly how many good, meaty responses should you aim for?",
    o: ["10", "30 (usually about 100 total)", "100 good ones", "500"],
    a: 1,
    why: "Most arrive within 24 hours. If you don't get there, work with what you have.",
  },
  {
    q: "What bias do surveys always carry?",
    o: [
      "They under-represent buyers",
      "They over-represent your best, most motivated people",
      "They favour newer subscribers",
      "They skew negative",
    ],
    a: 1,
    why: "The people motivated enough to fill in a survey aren't typical. Adjust for it.",
  },
  {
    q: "Which is a BAD way to get people talking to you?",
    o: [
      "Handling customer service duties for a while",
      "Emailing survey respondents to follow up",
      "Simply calling prospects and asking if they'd chat",
      "Meeting up with someone you know in the market",
    ],
    a: 2,
    why: "Also bad: connecting on LinkedIn like a total stalker.",
  },
  {
    q: "The 'sneaky hack' for avoiding market interviews entirely:",
    o: [
      "Read reviews instead",
      "Interview the customer service team — they're on the front lines every day",
      "Buy a market research report",
      "Survey twice as many people",
    ],
    a: 1,
    why: "They deal with actual customers daily and are a wealth of information.",
  },
  {
    q: "Why does approaching an interview as 'market research' backfire?",
    o: [
      "It's a legal grey area",
      "You come across as creepy, and people won't open up",
      "It takes longer",
      "Clients don't like the term",
    ],
    a: 1,
    why: "Put on your empathy hat. Frame it as something for their sake — you want to fix their problem.",
  },
  {
    q: "When CAN you flip the frame to 'you'd be helping me'?",
    o: [
      "Always — people like helping",
      "When the brand has 'celebrity' status in the market's eyes",
      "When you're paying them",
      "Never",
    ],
    a: 1,
    why: "If the audience puts the brand on a pedestal, they'll be more than willing to help out.",
  },
  {
    q: "Why are first answers in an interview usually useless?",
    o: [
      "People are nervous at the start",
      "People give the answer they WANT to believe — a vague false front",
      "The questions are always too broad",
      "They haven't warmed up their memory",
    ],
    a: 1,
    why: "Your job is to follow up and see through it: 'Apart from that, is there any other reason?'",
  },
  {
    q: "Which question digs for underlying motivation?",
    o: [
      "'What does that look like for you?'",
      "'What would it mean for you if you could do that?'",
      "'Any reason you haven't tried X?'",
      "'Oh?'",
    ],
    a: 1,
    why: "Specificity, motivation, excuses, detail — four different jobs, four different probes.",
  },
  {
    q: "'Shadowing' in an interview means...",
    o: [
      "Following someone for a day",
      "Repeating their exact words back with a question intonation",
      "Recording the call silently",
      "Taking notes without speaking",
    ],
    a: 1,
    why: "It's the cheapest way to get more detail without steering the answer.",
  },
  {
    q: "The best place to find content for a hook, if you can access it:",
    o: [
      "Competitor sales pages",
      "The product itself — dig out the cool stuff inside it",
      "Google Trends",
      "The client's brand guidelines",
    ],
    a: 1,
    why: "A teacher's offhand notebook habit becomes 'the 99-cent tool you need in your pocket'.",
  },
  {
    q: "What was the common thread in 'the 5 second hack' and 'the handkerchief technique'?",
    o: [
      "Both used numbers",
      "Both promised SPEED — the core pain of language learners",
      "Both named a physical object",
      "Both were alliterative",
    ],
    a: 1,
    why: "The sexy angle is always the quick, easy way to transform into that ideal self.",
  },
  {
    q: "When you find a rant where everyone replies 'THIS IS EXACTLY HOW I FEEL', you should...",
    o: [
      "Paraphrase it carefully in your own polished voice",
      "Retell it in as close to their own words as you can",
      "Quote it with attribution and a link",
      "Avoid it — it's too negative for email",
    ],
    a: 1,
    why: "'I read a guy saying...' Nail the pains and people sell themselves. A gentle pitch is enough after.",
  },
];
