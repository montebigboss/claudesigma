/* Lektorat: język angielski (English for Psychology). Powtórka przed kolokwium 1.
 *
 * Źródła (Dysk Google, folder z materiałami z dotychczasowych zajęć):
 *   VOCABULARY CLASS 1 – Psychology (słownictwo + ćwiczenia)
 *   „How old is psychology?” – worksheet do filmu (szkoły, Freud)
 *   „Areas of Psychology” – tekst i pytania
 *   „Freud Psychoanalysis” – tekst z pytaniami; „Freud and Dreams” – słowotwórstwo
 *   „Arrangement of the Nervous System” – worksheet
 *   „Psychology Vocabulary in Use”, rozdz. 1 „The Brain”
 *   „Brain Disorders” – słowotwórstwo
 *   „Brain Control” (Linguahouse, TED: Greg Gage) – worksheet i transkrypt
 *   słowniczek psychologiczny EN–PL z zajęć (zrzuty ekranu) i notatki odręczne
 *
 *   "S" z materiałów z zajęć (domyślne)
 *   "D" dopowiedzenie spoza materiałów (★). Kolokwium próbne je pomija.
 */
Wykuj.registerModule((function () {
  /* pojęcie: termin po angielsku, tłumaczenie, wyjaśnienie po polsku, definicja po angielsku */
  function c(id, u, term, sh, plain, def, s) {
    var o = { id: id, u: u, term: term, sh: sh, plain: plain, def: def };
    if (s) o.s = s;
    return o;
  }
  /* słowotwórstwo: wpisz formę wyrazu, bez tolerancji na literówki */
  function wf(u, base, sentence, answers, x) {
    return { u: u, t: "type", strict: true, q: "(" + base + ") " + sentence, a: [].concat(answers), x: x };
  }

  return {
    id: "ang-k1",
    kind: "reading",
    course: { id: "ang", name: "Lektorat: język angielski", short: "Angielski", groups: "English for Psychology", theme: "sky", icon: "chat", section: "cw" },
    shelf: "Kolokwia",
    nouns: { gen: "kolokwium", nom: "kolokwium", all: "całego materiału do kolokwium" },
    notesClass: "zaj",
    ghost: ["Kolokwium", "Kolejne kolokwium", "Wrzuć materiały z następnych zajęć, a pojawi się tu powtórka do kolejnego kolokwium."],
    number: 1,
    label: "Kolokwium 1",
    title: "English for Psychology",
    byline: "Słownictwo, mózg, układ nerwowy, Freud, gramatyka",
    sources: [
      "VOCABULARY CLASS 1 – Psychology (lista słów i ćwiczenia)",
      "„How old is psychology?” (worksheet) i „Areas of Psychology” (tekst + pytania)",
      "„Freud Psychoanalysis” (tekst) i „Freud and Dreams” (word formation)",
      "„Arrangement of the Nervous System” (worksheet)",
      "„Psychology Vocabulary in Use”, rozdz. 1 „The Brain”; „Brain Disorders” (word formation)",
      "„Brain Control” (Linguahouse, TED: Greg Gage): słownictwo, phrasal verbs, continuous infinitive",
      "Słowniczek psychologiczny EN–PL z zajęć"
    ],
    term: "Lektorat · kolokwium 1",
    passing: null,
    passRatio: 0.6,
    examNote: "Forma kolokwium nie jest znana. Próg 60% to punkt odniesienia; słówka ćwicz też w Fiszkach i Parach.",
    minimumTitle: "Najważniejsze w 5 minut",
    sourceNames: { S: "z materiałów z zajęć", D: "★ dopowiedzenie spoza materiałów" },

    sets: {
      school: { label: "Which school of thought?", numbered: true,
        items: ["Structuralism", "Functionalism", "Psychoanalysis", "Behaviorism"],
        why: ["breaks mental processes down into basic components; relies on introspection (Wundt)",
              "focuses on the purpose of mental processes and behavior",
              "unconscious motives and early experiences; talk therapy (Freud)",
              "observable actions and conditioning (Skinner)"] },
      psyche: { label: "Id, ego or super-ego?", numbered: true,
        items: ["Id", "Ego", "Super-ego"],
        why: ["primitive desires such as hunger; “much like a child”",
              "mediates between the id, the super-ego and the world; “simply you, as an adult”",
              "norms and society's moral codes; “a parental figure”"] },
      ns: { label: "Which part of the nervous system?", numbered: true,
        items: ["Central nervous system", "Somatic system", "Sympathetic division", "Parasympathetic division"],
        why: ["the brain and the spinal cord",
              "senses to the CNS, messages to the muscles; voluntary",
              "autonomic: prepares the body for excited, active states",
              "autonomic: quiet, recuperative functions such as rest and digestion"] },
      structure: { label: "Which brain structure?", numbered: true,
        items: ["Amygdala", "Hippocampus", "Thalamus", "Hypothalamus", "Cerebellum", "Medulla oblongata"],
        why: ["controls emotions",
              "formation of long-term memory",
              "relays sensory information",
              "keeps the body in balance: temperature, hunger, thirst, sleep",
              "coordinates movement, posture and balance",
              "heart rate, blood pressure and respiration"] },
      branch: { label: "Which area of psychology?", numbered: true,
        items: ["Clinical psychology", "Cognitive psychology", "Developmental psychology", "Forensic psychology", "Health psychology", "Industrial-organizational psychology"],
        why: ["assessment and treatment of mental illness and abnormal behavior",
              "mental processes: how people think, perceive, remember and learn",
              "development throughout the lifespan",
              "the intersection of psychology and the law",
              "promoting health, prevention and treatment of illness",
              "psychological principles applied to organizations and the workplace"] }
    },

    units: [
      { id: "basics", title: "Core vocabulary", sub: "Vocabulary Class 1: nauka, umysł, zachowanie", icon: "chat" },
      { id: "families", title: "Word families & collocations", sub: "apply – application – applied, conduct research…", icon: "pencil" },
      { id: "history", title: "How old is psychology?", sub: "Wundt, structuralism, schools of thought", icon: "column", seq: true,
        teach: "<p><b>Wilhelm Wundt</b> opened the first psychology lab in <b>Leipzig</b>. His school, <b>structuralism</b>, used <b>introspection</b> (self-observation), which critics found too subjective.</p>" +
          "<p>Po polsku: psychologia wyrosła z filozofii i biologii, a osobną nauką stała się dopiero w XIX wieku.</p>" },
      { id: "freud", title: "Freud & psychoanalysis", sub: "Unconscious, id–ego–super-ego, Neo-Freudians", icon: "moon", seq: true,
        teach: "<p>Freud: people are <b>driven by unconscious</b> thoughts, desires and memories. Bringing them into consciousness gives <b>insight</b> and <b>catharsis</b> (emotional release).</p>" +
          "<p><b>Id</b> = a child, <b>super-ego</b> = a parent, <b>ego</b> = you as an adult, mediating between them.</p>" },
      { id: "dreams", title: "Freud and Dreams", sub: "Word formation: FOUND → founder", icon: "spark" },
      { id: "today", title: "Psychology today", sub: "Academic vs applied, research methods, courses", icon: "target" },
      { id: "areas", title: "Areas of psychology", sub: "17 branches: clinical, forensic, health…", icon: "shapes" },
      { id: "ns", title: "The nervous system", sub: "CNS, PNS, somatic, autonomic", icon: "pulse", seq: true,
        teach: "<p>The nervous system has two divisions: <b>central</b> (brain + spinal cord) and <b>peripheral</b> (nerves to and from the CNS).</p>" +
          "<p>The PNS = <b>somatic</b> (senses and muscles, voluntary) + <b>autonomic</b> (heart rate, digestion). Autonomic = <b>sympathetic</b> (action) + <b>parasympathetic</b> (rest).</p>" },
      { id: "nswords", title: "Nervous system: words", sub: "Word partnerships i tłumaczenia", icon: "pairs" },
      { id: "brain", title: "The brain: structure", sub: "Cerebrum, cerebellum, brainstem, lobes", icon: "bulb", table: true },
      { id: "functions", title: "Who does what in the brain", sub: "Amygdala, hippocampus, thalamus…", icon: "eye" },
      { id: "cases", title: "Brain cases & imaging", sub: "Case studies, CT, MRI, PET, Jason Padgett", icon: "user" },
      { id: "disorders", title: "Brain disorders", sub: "Stroke, tumour, meningitis + word formation", icon: "bolt" },
      { id: "ted", title: "Brain control (TED)", sub: "Słownictwo i phrasal verbs z nagrania", icon: "hand" },
      { id: "grammar", title: "Continuous infinitive", sub: "to be doing / to have been doing", icon: "path", seq: true,
        teach: "<p><b>Continuous infinitive</b>: <b>(to) be + -ing</b> – czynność trwająca teraz: <i>He could <b>be having</b> lunch.</i></p>" +
          "<p><b>Perfect continuous infinitive</b>: <b>(to) have been + -ing</b> – czynność trwająca wcześniej: <i>He must <b>have been waiting</b> for ages.</i> Po czasownikach modalnych bez „to”.</p>" },
      { id: "mix", title: "Mixed revision", sub: "Wszystko naraz", icon: "dice" },
      { id: "boss", title: "Kolokwium próbne z całości", sub: "15 pytań ze wszystkich lekcji", icon: "crown", boss: true }
    ],

    concepts: [
      /* ---------- basics ---------- */
      c("science", "basics", "science / scientific", "nauka / naukowy", "Nauka i przymiotnik „naukowy”: scientific method, scientific study.", "Science: knowledge gained through observation and experiment. Scientific: based on the methods of science."),
      c("research", "basics", "research", "badania (naukowe)", "Rzeczownik niepoliczalny: do / conduct / carry out research (nie: „a research”, „researches”).", "Careful study of a subject in order to discover new facts."),
      c("mind", "basics", "mind", "umysł", "Brain to narząd, mind to umysł: myśli, uczucia, świadomość.", "The part of a person that thinks, feels and is aware."),
      c("mental-state", "basics", "mental state", "stan psychiczny", "Kondycja psychiczna w danym momencie.", "The condition of a person's cognitive and emotional functioning at a given time."),
      c("human", "basics", "human", "człowiek / ludzki", "Rzeczownik i przymiotnik: human behaviour, human mind.", "A person; relating to people."),
      c("personality", "basics", "personality", "osobowość", "Stały wzorzec myślenia, odczuwania i działania.", "A person's characteristic patterns of thinking, feeling, and behaving."),
      c("psychology", "basics", "psychology", "psychologia", "Nowoczesna definicja: zachowanie + procesy psychiczne.", "The scientific study of behavior and mental processes."),
      c("psychologist", "basics", "psychologist", "psycholog", "Osoba; przymiotnik: psychological (psychologiczny).", "A specialist who studies behavior and mental processes."),
      c("psychoanalysis", "basics", "psychoanalysis", "psychoanaliza", "Teoria i terapia Freuda: nieświadome motywy, wczesne doświadczenia.", "A therapeutic approach that explores unconscious motives and early experiences."),
      c("psychotherapy", "basics", "psychotherapy", "psychoterapia", "Leczenie rozmową z terapeutą.", "A method of treatment involving talking through problems with a therapist."),
      c("psychiatry", "basics", "psychiatry", "psychiatria", "Dział medycyny, nie rodzaj terapii rozmową. Leczy środkami medycznymi.", "A branch of medicine focused on diagnosing and treating mental disorders."),
      c("emphasize", "basics", "to emphasize", "podkreślać / akcentować", "Np. Behaviorism emphasizes observable behaviour.", "To give special importance to something."),
      c("behave", "basics", "to behave / behaviour", "zachowywać się / zachowanie", "BrE behaviour, AmE behavior. Behaviorism = behawioryzm.", "To act in a particular way; the way a person acts."),
      c("behaviorism", "basics", "behaviourism (behaviorism)", "behawioryzm", "Bada tylko to, co widać: zachowanie i warunkowanie. Skinner.", "A psychological approach focused on observable actions and conditioning."),
      c("awareness", "basics", "awareness", "świadomość (czegoś)", "Zdawanie sobie sprawy z czegoś: self-awareness, awareness of a problem.", "Knowing that something exists or understanding a situation."),
      c("conscious", "basics", "to be conscious (of)", "być świadomym (czegoś)", "Przeciwieństwo: unconscious (nieświadomy / nieprzytomny).", "To be aware of something; awake and able to think."),
      c("consciousness", "basics", "consciousness", "świadomość", "Stan bycia świadomym siebie i otoczenia. To nie metoda leczenia.", "The awareness of internal and external existence."),
      c("approach", "basics", "to approach / approach", "podchodzić (do problemu) / podejście", "Czasownik i rzeczownik: a new approach to therapy.", "To deal with something in a particular way; a way of dealing with something."),
      c("observe", "basics", "to observe", "obserwować", "Rzeczownik: observation.", "To notice or watch carefully."),
      c("thinking", "basics", "thinking, perceiving, dreaming", "myślenie, postrzeganie, śnienie", "Trzy procesy psychiczne z listy słówek. Perceiving = perception.", "Mental processes: using the mind, becoming aware through the senses, and having dreams."),
      c("deal-with", "basics", "to deal with", "radzić sobie z / zajmować się", "Deal – dealt – dealt. Psychology deals with behaviour; to deal with stress.", "To take action to solve a problem; to be about a subject."),
      c("environment", "basics", "environment", "środowisko / otoczenie", "Environment influences behaviour. Przymiotnik: environmental.", "The conditions and surroundings in which a person lives."),
      c("experience", "basics", "to experience / experience", "doświadczać / doświadczenie", "Experienced = doświadczony. Early childhood experiences.", "To feel or live through something; knowledge gained from events."),
      c("treat", "basics", "to treat / treatment", "leczyć, traktować / leczenie", "Treat a disorder; mental health treatment.", "To give medical or psychological care; the care given."),
      c("respond", "basics", "to respond / response", "reagować / reakcja, odpowiedź", "Respond TO something (nie: „respond the sunset”).", "To react to a stimulus or situation."),
      c("stimulus", "basics", "stimulus (pl. stimuli)", "bodziec (bodźce)", "Nieregularna liczba mnoga: one stimulus, two stimuli.", "Something that causes a reaction in a person or an organ."),

      /* ---------- families ---------- */
      c("apply", "families", "to apply – application – applied", "stosować – zastosowanie – stosowany", "Applied psychology = psychologia stosowana.", "To put knowledge to practical use; the practical use; used in practice."),
      c("conduct", "families", "to conduct research", "prowadzić badania", "Kolokacja: conduct research / an experiment / a study.", "To organize and carry out a study."),
      c("carry-out", "families", "to carry out", "przeprowadzać (np. eksperyment)", "Carry out an experiment; the PNS carries out the brain's orders.", "To do and complete a task, a study or an order."),
      c("facilitate", "families", "to facilitate", "ułatwiać", "Counseling psychology facilitates personal and interpersonal functioning.", "To make something easier or more likely to happen."),
      c("contribute", "families", "to contribute to", "wnosić wkład w / przyczyniać się do", "Rzeczownik: contribution. Each school has contributed to our understanding.", "To help to cause or achieve something."),
      c("biased", "families", "biased", "stronniczy / obciążony błędem", "Rzeczownik: bias. Przeciwieństwo: unbiased, objective.", "Unfairly preferring one view; not objective."),
      c("attitude", "families", "attitude", "postawa", "Uwaga na pisownię: attiTUDE. Worker attitudes.", "The way you think and feel about something."),
      c("field", "families", "field", "dziedzina (nauki)", "A field of psychology; a field of study.", "An area of study or activity."),
      c("conditioning", "families", "conditioning", "warunkowanie", "Kluczowe pojęcie behawioryzmu.", "Learning in which behavior is shaped by stimuli and consequences."),
      c("conformity", "families", "conformity", "konformizm", "Temat psychologii społecznej.", "Behaving in the same way as most other people in a group."),
      c("crowd", "families", "crowd psychology", "psychologia tłumu", "Jak ludzie zachowują się w tłumie.", "The study of how people behave in large groups."),
      c("disorder", "families", "disorder", "zaburzenie / choroba", "Mental disorder, neurological disorder. W worksheecie: „an illness”.", "An illness of the mind or body."),
      c("counselling", "families", "career counselling", "doradztwo zawodowe", "BrE counselling, AmE counseling. Counselor = doradca.", "Professional advice about choosing and developing a career."),
      c("pay-attention", "families", "to pay attention to", "zwracać uwagę na", "Pay attention to non-verbal cues during therapy.", "To watch or listen to something carefully."),
      c("reflect-on", "families", "to reflect on", "zastanawiać się nad", "Reflect on your childhood experiences.", "To think deeply and carefully about something."),
      c("find-out", "families", "to find out / figure out", "odkryć / ustalić", "Researchers aim to find out patterns in human behavior.", "To discover a fact or understand something."),

      /* ---------- history ---------- */
      c("psyche", "history", "psyche", "dusza / umysł (gr.)", "Od tego słowa pochodzi „psychology”.", "A Greek word meaning “soul” or “mind”, the origin of the word psychology."),
      c("roots", "history", "philosophy and biology", "filozofia i biologia", "Dwa źródła psychologii; dyskusje sięgają Arystotelesa i Sokratesa.", "The two subjects psychology evolved out of."),
      c("wundt", "history", "Wilhelm Wundt", "założyciel pierwszego laboratorium", "Lipsk, Niemcy: wtedy psychologia „naprawdę się narodziła”.", "He established the first psychology lab in Leipzig, Germany."),
      c("structuralism", "history", "structuralism", "strukturalizm", "Szkoła Wundta: opisać struktury, z których składa się umysł.", "A school that attempts to break down mental processes into basic components."),
      c("introspection", "history", "introspection", "introspekcja", "Obserwowanie własnych myśli i uczuć. Zarzut: zbyt subiektywne.", "A method of self-observation of one's thoughts and feelings."),
      c("functionalism", "history", "functionalism", "funkcjonalizm", "Pyta „po co?”: jaki jest cel procesów psychicznych.", "A school that focuses on the purpose of mental processes and behavior."),
      c("schools", "history", "schools of thought", "szkoły (nurty) myślenia", "Structuralism, functionalism, psychoanalysis, behaviorism, humanism, cognitivism.", "Groups of psychologists sharing a perspective; each rises to dominance for a period of time."),
      c("subjective", "history", "subjective / objective", "subiektywny / obiektywny", "Introspection is highly subjective; dziś wolimy objective scientific methods.", "Based on personal feelings / based on facts."),
      c("integrative", "history", "an integrative science", "nauka integrująca", "Psychologia łączy różne perspektywy i metody.", "A science that brings together different perspectives and methods."),

      /* ---------- freud ---------- */
      c("unconscious", "freud", "the unconscious", "nieświadomość", "Procesy, z których nie zdajemy sobie sprawy, a które wpływają na zachowanie.", "Mental processes we are unaware of that influence behavior."),
      c("driven", "freud", "to be driven by", "być kierowanym / napędzanym przez", "Freud: people are driven by unconscious thoughts, desires and memories.", "To be strongly motivated or controlled by something."),
      c("insight", "freud", "insight", "wgląd", "Gain insight into your mental health and personality.", "A clear, deep understanding of yourself or a problem."),
      c("catharsis", "freud", "catharsis", "katharsis / emocjonalne rozładowanie", "Ulga po wydobyciu nieświadomych treści.", "An emotional release from psychological distress."),
      c("distress", "freud", "psychological distress", "cierpienie psychiczne", "Distress = silny niepokój, ból psychiczny.", "A state of mental suffering or anxiety."),
      c("free-association", "freud", "free association", "wolne skojarzenia", "Pacjent się relaksuje i mówi wszystko, co przyjdzie mu do głowy.", "A technique in which a relaxed person talks about anything that comes to mind."),
      c("psychodynamic", "freud", "psychodynamic perspective", "podejście psychodynamiczne", "Łagodniejsza wersja: zachowało część idei Freuda, mniej o dzieciństwie.", "A more moderate perspective that kept some of Freud's ideas."),
      c("defense", "freud", "defense mechanisms", "mechanizmy obronne", "Zniekształcamy rzeczywistość, by zmniejszyć lęk, nie wiedząc o tym.", "Ways of reducing anxiety by distorting reality without realizing it."),
      c("repress", "freud", "to repress", "wypierać", "Repress a bad memory. Rzeczownik: repression.", "To push a painful memory out of conscious awareness."),
      c("denial", "freud", "to be in denial", "zaprzeczać / być w zaprzeczeniu", "Be in denial about your current situation.", "To refuse to accept that something unpleasant is true."),
      c("projection", "freud", "projection", "projekcja", "Własne uczucia przypisujemy innym.", "Attributing one's own feelings to others."),
      c("id", "freud", "id", "id (to)", "Prymitywne pragnienia, np. głód. „Jak dziecko”.", "The part of personality that focuses on primitive desires such as hunger."),
      c("superego", "freud", "super-ego", "superego (nadjaźń)", "Normy i kodeks moralny społeczeństwa. „Rodzic”.", "The part that focuses on following norms and society's moral codes."),
      c("ego", "freud", "ego", "ego (ja)", "Pośredniczy między id, superego i światem. „Ty jako dorosły”.", "The part mediating between the id, the super-ego, and the world."),
      c("neo", "freud", "Neo-Freudians", "neofreudyści", "Jung, Horney, Adler: przyjęli część teorii Freuda, z resztą się nie zgadzali.", "Carl Jung, Karen Horney and Alfred Adler, who followed some of Freud's theories but disagreed with others."),
      c("adler", "freud", "Alfred Adler", "napięcia społeczne, nie seksualne", "Dzieciństwo ważne, ale liczą się napięcia społeczne.", "He stated that social tensions, not sexual ones, were creating the impact."),
      c("horney", "freud", "Karen Horney", "Freud pominął kobiety", "I nie uwzględnił zmiennych społecznych.", "She stated that Freud ignored females and did not take social variables into consideration."),
      c("jung", "freud", "Carl Jung", "nieświadomość zbiorowa", "Collective unconscious: wprowadził genetykę do rozwoju osobowości.", "He added the collective unconscious, bringing genetics into the picture."),

      /* ---------- dreams ---------- */
      c("founder", "dreams", "founder (FOUND)", "założyciel / twórca", "Freud is regarded as the founder of psychoanalysis.", "A person who starts an organization or a school of thought."),
      c("influential", "dreams", "influential (INFLUENCE)", "wpływowy", "His work has been influential in many areas.", "Having a lot of influence on people or events."),
      c("attention", "dreams", "attention (ATTEND)", "uwaga", "Draw (our) attention to dreams.", "Notice or interest given to something."),
      c("essentially", "dreams", "essentially (ESSENTIAL)", "zasadniczo / w istocie", "A dream is essentially a disguised expression…", "Basically; in its most important nature."),
      c("significance", "dreams", "significance (SIGNIFY)", "znaczenie", "Difficult to understand its significance.", "The meaning or importance of something."),
      c("knowledge", "dreams", "knowledge (KNOW)", "wiedza", "An expert knowledge of how dreams disguise desires.", "Information and understanding gained through learning."),
      c("involvement", "dreams", "involvement (INVOLVE)", "zaangażowanie", "Lack of personal involvement in the dream.", "The act of taking part in something."),
      c("mysterious", "dreams", "mysterious (MYSTERY)", "tajemniczy", "Dreams use a mysterious symbolic language.", "Strange and difficult to explain."),
      c("evidence", "dreams", "evidence (EVIDENT)", "dowody", "There is no hard evidence. Niepoliczalne!", "Facts that show that something is true."),
      c("undoubtedly", "dreams", "undoubtedly (DOUBT)", "niewątpliwie", "Freud undoubtedly made a major contribution.", "Without any doubt; certainly."),
      c("disguise", "dreams", "to disguise", "ukrywać / maskować", "A disguised expression of unconscious wishes.", "To hide the true nature of something."),

      /* ---------- today ---------- */
      c("academic", "today", "academic psychology", "psychologia akademicka", "Bada pod-tematy: osobowość, społeczna, rozwojowa. Poszerza teorię.", "The study of different sub-topics within psychology; basic research."),
      c("applied", "today", "applied psychology", "psychologia stosowana", "Zasady psychologii użyte do rozwiązywania realnych problemów.", "The use of psychological principles to solve real world problems."),
      c("basic-research", "today", "basic research", "badania podstawowe", "Cel: poszerzyć wiedzę teoretyczną.", "Research that seeks to expand our theoretical knowledge."),
      c("applied-research", "today", "applied research", "badania stosowane", "Cel: rozwiązać codzienne problemy.", "Research that seeks to solve everyday problems."),
      c("hypothesis", "today", "hypothesis", "hipoteza", "Liczba mnoga: hypotheses. Badanie zaczyna się od hipotezy.", "An idea that is then empirically tested."),
      c("empirically", "today", "empirically tested", "sprawdzony empirycznie", "Czyli doświadczalnie, na danych.", "Checked by observation or experiment rather than theory."),
      c("methods", "today", "research methods", "metody badawcze", "Experiments, correlational studies, longitudinal studies.", "Scientific ways used to test, explain and predict behavior."),
      c("longitudinal", "today", "longitudinal study", "badanie podłużne", "Ci sami ludzie badani przez długi czas.", "A study that follows the same people over a long period.", "D"),
      c("correlational", "today", "correlational study", "badanie korelacyjne", "Sprawdza związek zmiennych, nie przyczynę.", "A study that looks at relationships between variables.", "D"),
      c("statistics", "today", "statistics", "statystyka", "„A must for any psychology major”: 85% programów magisterskich jej wymaga.", "A course on statistical methods and techniques used by researchers."),
      c("major", "today", "psychology major", "student kierunku psychologia", "AmE: major = główny kierunek studiów / student tego kierunku.", "A student whose main subject is psychology."),
      c("predict", "today", "to understand, explain and predict", "rozumieć, wyjaśniać i przewidywać", "Trzy cele współczesnej psychologii.", "The three aims psychologists have regarding human behavior."),

      /* ---------- areas ---------- */
      c("abnormal", "areas", "abnormal psychology", "psychologia zaburzeń (psychopatologia)", "Depresja, obsesje-kompulsje i inne zaburzenia.", "A field that deals with psychopathology and abnormal behavior."),
      c("biopsychology", "areas", "biopsychology", "biopsychologia", "Psychologia + neuronauka.", "A field that analyzes how the brain and neurotransmitters influence behaviors, thoughts and feelings."),
      c("clinical", "areas", "clinical psychology", "psychologia kliniczna", "Diagnoza i leczenie chorób psychicznych.", "The branch concerned with the assessment and treatment of mental illness."),
      c("cognitive", "areas", "cognitive psychology", "psychologia poznawcza", "Część cognitive science; blisko neuronauki, filozofii, językoznawstwa.", "The branch that studies how people think, perceive, remember and learn."),
      c("comparative", "areas", "comparative psychology", "psychologia porównawcza", "Zachowanie zwierząt; początki: Darwin i Romanes.", "The branch concerned with the study of animal behavior."),
      c("counseling", "areas", "counseling psychology", "psychologia doradcza / poradnictwo", "Jedna z największych specjalności.", "A field focused on providing therapeutic treatments to clients with a wide variety of symptoms."),
      c("developmental", "areas", "developmental psychology", "psychologia rozwojowa", "Od rozwoju prenatalnego po chorobę Alzheimera.", "The branch that looks at development throughout the lifespan."),
      c("educational", "areas", "educational psychology", "psychologia edukacyjna", "Wyniki uczniów, uzdolnieni, trudności w uczeniu się.", "The study of how people learn."),
      c("experimental", "areas", "experimental psychology", "psychologia eksperymentalna", "Metody naukowe do badania umysłu i zachowania.", "An area that utilizes scientific methods to research the mind and behavior."),
      c("forensic", "areas", "forensic psychology", "psychologia sądowa", "Opinie, analizy i zeznania w sprawach prawnych i karnych.", "The intersection of psychology and the law."),
      c("health", "areas", "health psychology", "psychologia zdrowia", "Jak ludzie reagują na chorobę, radzą sobie i zdrowieją.", "A field focused on promoting health and the prevention and treatment of disease."),
      c("human-factors", "areas", "human factors psychology", "psychologia inżynieryjna / ergonomia", "USA: human factors; Europa: ergonomics.", "An area focused on ergonomics, workplace safety, human error and product design."),
      c("io", "areas", "industrial-organizational psychology", "psychologia pracy i organizacji", "Wydajność pracy i dobrostan pracowników.", "A field that applies psychological theories and principles to organizations."),
      c("personality-psy", "areas", "personality psychology", "psychologia osobowości", "Teorie Freuda i Eriksona.", "Looks at the patterns of thoughts, feelings and behavior that make a person unique."),
      c("school-psy", "areas", "school psychology", "psychologia szkolna", "Współpraca z rodzicami, nauczycielami i uczniami.", "A field that works within the educational system to help children."),
      c("social", "areas", "social psychology", "psychologia społeczna", "Zachowanie grup, konformizm, agresja, uprzedzenia.", "Looks at group behavior, social perception, leadership, conformity and prejudice."),
      c("sports", "areas", "sports psychology", "psychologia sportu", "Motywacja i wyniki sportowców.", "The study of how psychology influences sports and athletic performance."),
      c("bystander", "areas", "the bystander effect", "efekt widza", "Temat z kursu psychologii społecznej, obok obedience i persuasion.", "People are less likely to help when others are present.", "D"),

      /* ---------- ns ---------- */
      c("nervous-system", "ns", "nervous system", "układ nerwowy", "Sieć nerwów i komórek przenosząca wiadomości.", "A complex network of nerves and cells that carries messages to and from the brain and spinal cord."),
      c("cns", "ns", "central nervous system (CNS)", "ośrodkowy układ nerwowy", "Mózg + rdzeń kręgowy.", "The brain and the spinal cord."),
      c("pns", "ns", "peripheral nervous system (PNS)", "obwodowy układ nerwowy", "Wysyła informacje do mózgu i wykonuje jego polecenia.", "The nerves that carry messages to and from the CNS."),
      c("neuron", "ns", "neuron (nerve cell)", "neuron / komórka nerwowa", "Mózg zawiera ich miliardy.", "The basic structural unit of the nervous system."),
      c("cell-body", "ns", "cell body", "ciało komórki", "Ciała komórek tworzą istotę szarą.", "The part of a neuron that contains the nucleus."),
      c("axon", "ns", "axon / nerve fibre", "akson / włókno nerwowe", "Z aksonów zbudowana jest istota biała.", "A long extension of a neuron that carries impulses away from the cell body."),
      c("grey-matter", "ns", "grey matter", "istota szara", "Przetwarza informacje.", "Nervous tissue with the cell bodies of neurons; it processes information."),
      c("white-matter", "ns", "white matter", "istota biała", "Przewodzi impulsy do i z istoty szarej.", "Nervous tissue made of axons; it carries impulses."),
      c("impulse", "ns", "impulse", "impuls (nerwowy)", "To transmit an impulse.", "An electrical signal that travels along a nerve."),
      c("reflex", "ns", "reflex", "odruch", "Wiele odruchów kontroluje rdzeń kręgowy, bez udziału mózgu.", "An automatic reaction that happens without thinking."),
      c("spinal-cord", "ns", "spinal cord", "rdzeń kręgowy", "Dwie funkcje: przewodzi impulsy mózg–ciało i kontroluje wiele odruchów.", "A long, tube-like structure which extends from the brain down the backbone."),
      c("cranial", "ns", "cranial nerves", "nerwy czaszkowe", "Z mózgu do głowy: uszy, oczy, twarz.", "Nerves that run directly from the brain."),
      c("spinal-nerves", "ns", "spinal nerves", "nerwy rdzeniowe", "Z rdzenia do reszty ciała.", "Nerves that run from the spinal cord to the body."),
      c("somatic", "ns", "somatic nervous system", "somatyczny układ nerwowy", "Zmysły → CNS, polecenia → mięśnie. Zależny od woli.", "The voluntary part of the PNS; it controls the muscles and the senses."),
      c("autonomic", "ns", "autonomic nervous system", "autonomiczny układ nerwowy", "Tętno, trawienie: działa bez naszego myślenia.", "The involuntary part of the PNS; it controls the internal organs."),
      c("sympathetic", "ns", "sympathetic division", "część współczulna", "Mobilizacja do działania.", "It prepares the body for excited, active states."),
      c("parasympathetic", "ns", "parasympathetic division", "część przywspółczulna", "Odpoczynek i trawienie.", "It is involved in quiet, recuperative functions such as rest and digestion."),
      c("serotonin", "ns", "serotonin", "serotonina", "Wydziela się podczas ćwiczeń; pomaga radzić sobie ze stresem.", "A brain chemical released during exercise; it improves mood."),

      /* ---------- nswords ---------- */
      c("skull", "nswords", "skull", "czaszka", "The brain lies within the skull.", "The bone structure of the head that protects the brain."),
      c("backbone", "nswords", "backbone", "kręgosłup", "Inaczej: spine. Przymiotnik: spinal.", "The row of bones down the middle of the back."),
      c("voluntary", "nswords", "voluntary movement", "ruch dowolny (zależny od woli)", "Przeciwieństwo: involuntary.", "Movement that you control consciously."),
      c("internal-organ", "nswords", "internal organ", "narząd wewnętrzny", "Np. serce, żołądek.", "An organ inside the body."),
      c("heart-rate", "nswords", "heart rate", "tętno", "Kontroluje je układ autonomiczny.", "The number of times the heart beats per minute."),
      c("digestion", "nswords", "digestion", "trawienie", "Czasownik: to digest.", "The process of breaking down food in the body."),
      c("circulation", "nswords", "circulation", "krążenie", "Krążenie krwi.", "The movement of blood around the body."),
      c("swallowing", "nswords", "breathing and swallowing", "oddychanie i połykanie", "Podstawowe funkcje kontrolowane przez mózg.", "Taking air into the lungs; making food go down the throat."),
      c("transmit", "nswords", "to transmit an impulse", "przekazywać impuls", "Word partnership z ćwiczenia 4.", "To send a signal from one place to another."),
      c("regulate", "nswords", "to regulate / to control", "regulować / kontrolować", "Regulate breathing, control reflexes.", "To keep something working at the right level."),
      c("recuperative", "nswords", "recuperative", "regeneracyjny", "Quiet, recuperative functions.", "Helping the body to recover and rest."),

      /* ---------- brain ---------- */
      c("cerebrum", "brain", "cerebrum", "kresomózgowie (mózg)", "Największa część mózgu; wyższe funkcje umysłowe.", "The largest portion of the human brain; it controls higher mental functions."),
      c("cerebellum", "brain", "cerebellum", "móżdżek", "Nie mylić z cerebrum!", "It coordinates the body's movement, posture and balance."),
      c("brainstem", "brain", "brainstem", "pień mózgu", "Midbrain + pons + medulla oblongata.", "The part made of the midbrain, the pons and the medulla oblongata."),
      c("cortex", "brain", "cerebral cortex", "kora mózgowa", "Inaczej grey matter; ewolucyjnie najmłodsza.", "The outer layer of the cerebrum, also referred to as grey matter."),
      c("hemispheres", "brain", "cerebral hemispheres", "półkule mózgu", "Lewa steruje prawą stroną ciała i odwrotnie.", "The left and right halves of the cerebrum."),
      c("corpus", "brain", "corpus callosum", "ciało modzelowate (spoidło wielkie)", "Łączy półkule; zawiera włókna nerwowe.", "A structure containing nerve fibers that joins the two hemispheres."),
      c("frontal", "brain", "frontal lobe", "płat czołowy", "Jeden z czterech płatów.", "The lobe at the front of the brain."),
      c("parietal", "brain", "parietal lobe", "płat ciemieniowy", "Integruje informacje z różnych zmysłów (Padgett).", "The lobe at the top of the brain."),
      c("occipital", "brain", "occipital lobe", "płat potyliczny", "Z tyłu mózgu; głównie wzrok.", "Located at the back of the brain, it is involved mainly in vision."),
      c("temporal", "brain", "temporal lobe", "płat skroniowy", "Z boku, przy skroni.", "The lobe at the side of the brain."),
      c("glial", "brain", "glial cells", "komórki glejowe", "To nie neurony! Odżywiają, chronią i podpierają neurony.", "Supporting cells that provide neurons with nutrients, protection and physical support."),
      c("synapse", "brain", "synapse", "synapsa", "Każdy neuron łączy się synapsami z tysiącami innych.", "The connection between neurons."),
      c("neural-networks", "brain", "neural networks", "sieci neuronowe", "Formed from thousands of connected neurons.", "Groups of neurons connected to one another by synapses."),
      c("limbic", "brain", "limbic system", "układ limbiczny", "Hipokamp, ciało migdałowate, podwzgórze. Rozwinął się jako drugi.", "Brain structures located on both sides of the thalamus."),
      c("pineal", "brain", "pineal gland", "szyszynka", "Na rysunku przekroju mózgu.", "A small gland in the brain.", "D"),
      c("subcortical", "brain", "subcortical structures", "struktury podkorowe", "Amygdala, hippocampus, thalamus, hypothalamus, olfactory bulbs.", "Structures of the cerebrum lying under the cortex."),
      c("energy", "brain", "2% of weight, 20% of energy", "2% masy, 20% energii", "Mózg zużywa nieproporcjonalnie dużo energii.", "The adult brain is only 2% of body weight but consumes about 20% of the body's energy."),

      /* ---------- functions ---------- */
      c("amygdala", "functions", "amygdala (pl. amygdalae)", "ciało migdałowate", "Emocje, np. strach.", "It controls emotions."),
      c("hippocampus", "functions", "hippocampus", "hipokamp", "Pamięć długotrwała (Clive Wearing).", "It is involved in the formation of long-term memory."),
      c("thalamus", "functions", "thalamus", "wzgórze", "Stacja przekaźnikowa zmysłów.", "It relays sensory information."),
      c("hypothalamus", "functions", "hypothalamus", "podwzgórze", "Temperatura, głód, pragnienie, zmęczenie, sen, złość.", "It maintains the body in a balanced condition."),
      c("olfactory", "functions", "olfactory bulbs", "opuszki węchowe", "Węch.", "They are responsible for the sense of smell."),
      c("midbrain", "functions", "midbrain", "śródmózgowie", "Wzrok i słuch.", "It is responsible for the regulation of vision and hearing."),
      c("pons", "functions", "pons", "most (Varola)", "Sen i czuwanie.", "It regulates sleep-wake cycles."),
      c("medulla", "functions", "medulla oblongata", "rdzeń przedłużony", "Tętno, ciśnienie, oddychanie.", "It regulates heart rate, blood pressure and respiration."),
      c("relay", "functions", "to relay", "przekazywać dalej", "The thalamus relays sensory information.", "To receive and pass on information."),

      /* ---------- cases ---------- */
      c("imaging", "cases", "brain imaging techniques", "techniki obrazowania mózgu", "CT, MRI, fMRI, PET: bez otwierania czaszki.", "Sophisticated techniques used to examine the brain without cutting it open."),
      c("ct-mri", "cases", "CT and MRI", "tomografia i rezonans (struktura)", "Gdy interesuje nas budowa mózgu.", "Techniques used to study the structure of the brain."),
      c("pet-fmri", "cases", "PET and fMRI", "PET i funkcjonalny rezonans (aktywność)", "Gdy interesuje nas praca mózgu.", "Techniques used when scientists are interested in the brain's activity."),
      c("post-mortem", "cases", "post-mortem", "sekcja zwłok", "Inaczej: autopsy. Kiedyś jedyny sposób badania mózgu.", "An examination of a body after death."),
      c("amnesia", "cases", "amnesia", "amnezja", "To develop amnesia. Clive Wearing: profound amnesia.", "Loss of memory."),
      c("concussion", "cases", "concussion", "wstrząśnienie mózgu", "Padgett: severe concussion.", "A temporary brain injury caused by a blow to the head."),
      c("traumatic", "cases", "traumatic brain injury", "urazowe uszkodzenie mózgu", "Trauma (rz.) → traumatic (przym.).", "Damage to the brain caused by a blow to the head."),
      c("savant", "cases", "savant syndrome", "zespół sawanta", "Niezwykłe zdolności, np. po urazie (Jason Padgett).", "A condition in which a person shows extraordinary abilities."),
      c("ocd", "cases", "obsessive-compulsive disorder", "zaburzenie obsesyjno-kompulsyjne", "Skutek uboczny u Padgetta, obok fobii społecznej.", "A disorder with unwanted repeated thoughts and behaviors."),
      c("impaired", "cases", "impaired", "upośledzony / osłabiony", "An impaired sense of smell.", "Damaged or not working normally."),

      /* ---------- disorders ---------- */
      c("stroke", "disorders", "stroke", "udar mózgu", "Komórki mózgu nie dostają tlenu. Przyczyny: nadciśnienie, twardniejące tętnice.", "It occurs when the brain cells do not get enough oxygen."),
      c("tumour", "disorders", "brain tumour", "guz mózgu", "AmE: tumor. Usuwany operacyjnie lub lekami.", "A mass caused by the rapid growth of cells."),
      c("meningitis", "disorders", "meningitis", "zapalenie opon mózgowych", "Wywoływane przez bakterie lub wirusy.", "A disease that affects the membranes that cover the brain and the spinal cord."),
      c("encephalitis", "disorders", "encephalitis", "zapalenie mózgu", "Clive Wearing: viral encephalitis.", "Inflammation of the brain, often caused by a virus."),
      c("down", "disorders", "Down's syndrome", "zespół Downa", "Dodatkowy chromosom.", "A condition in which an extra chromosome causes mental disorder."),
      c("huntington", "disorders", "Huntington's disease", "choroba Huntingtona", "Błąd genetyczny; wiek średni.", "It occurs mostly during middle age and leads to jerky movements of the body."),
      c("alzheimer", "disorders", "Alzheimer's disease", "choroba Alzheimera", "Często po 60. roku życia.", "Victims suffer from a loss of memory and often cannot care for themselves."),
      c("eeg", "disorders", "EEG (electroencephalogram)", "elektroencefalogram", "Zapisuje czynność mózgu.", "It records the activity in the brain."),
      c("inherit", "disorders", "to inherit", "dziedziczyć", "Diseases you may inherit from your parents.", "To receive a quality or disease from your parents through genes."),
      c("artery", "disorders", "artery", "tętnica", "Strokes: when arteries become harder.", "A tube that carries blood from the heart."),
      c("membrane", "disorders", "membranes", "błony (tu: opony mózgowe)", "Pokrywają mózg i rdzeń kręgowy.", "Thin layers of tissue that cover the brain and the spinal cord."),

      /* ---------- ted ---------- */
      c("neuroscience", "ted", "neuroscience", "neuronauka", "Neuroscientist = neurobiolog.", "The scientific study of the brain and the nervous system."),
      c("diy", "ted", "DIY (do it yourself)", "zrób to sam", "DIY neuroscience equipment (Backyard Brains).", "Relating to work that you do yourself instead of hiring someone to do it."),
      c("free-will", "ted", "free will", "wolna wola", "„She will take away your free will.”", "When you do something because you want to, not because someone forces you to."),
      c("good-sport", "ted", "a good sport", "ktoś, kto gra fair / ma dystans", "„Thank you for being such a good sport.”", "A person who plays fair, accepts both victory and defeat, and stays nice."),
      c("stick-out", "ted", "to stick out", "wystawić / wyciągnąć", "Stick out your arm for science.", "To push or stretch something forwards or away from you, especially a part of your body."),
      c("roll-up", "ted", "to roll up", "podwinąć", "Roll up your sleeve a bit.", "To fold something several times to make it shorter."),
      c("pick-up", "ted", "to pick up", "odebrać / wychwycić (sygnał)", "The discharge is picked up by these electrodes.", "To receive an electronic signal on a radio or similar piece of equipment."),
      c("turn-out", "ted", "to turn out", "okazać się", "It turns out that there is a nerve right here.", "To develop in a particular way."),
      c("hook-up", "ted", "to hook up", "podłączyć", "I just need to hook you up.", "To connect a piece of equipment to a computer."),
      c("bring-on", "ted", "to bring on", "wywołać / sprowadzić", "We're going to bring on the neuro-revolution.", "To cause something to appear."),
      c("motor-cortex", "ted", "motor cortex", "kora ruchowa", "Stąd neurony wysyłają sygnał do mięśni.", "The part of the brain that sends messages down when you move."),
      c("ulnar", "ted", "ulnar nerve", "nerw łokciowy", "Blisko skóry; unerwia trzy palce.", "A nerve in the arm that innervates three fingers."),
      c("squeeze", "ted", "to squeeze", "ściskać", "Squeeze your hand.", "To press something firmly with your hand."),
      c("facts-ted", "ted", "1 in 5, zero cures, 80 billion", "1 na 5 osób, zero leków, 80 mld neuronów", "20% ludzi będzie miało zaburzenie neurologiczne; neuronauka wymaga 6,5 roku studiów doktoranckich.", "One out of five of us will have a neurological disorder, there are zero cures, and the brain has about 80 billion neurons."),

      /* ---------- grammar ---------- */
      c("cont-inf", "grammar", "continuous infinitive", "(to) be + -ing", "Czynność w trakcie: He seems to be dreaming.", "Used to express a continuing action after a verb or auxiliary which must be followed by the infinitive."),
      c("perf-cont-inf", "grammar", "perfect continuous infinitive", "(to) have been + -ing", "Czynność trwająca wcześniej: He must have been waiting for ages.", "Used to express an action that was in progress before the preceding verb."),
      c("no-to", "grammar", "after modal verbs", "bez „to”", "must be joking, could be having, should have been sleeping.", "After modal verbs the word “to” is omitted."),
      c("with-to", "grammar", "after seem, would like, pretend", "z „to”", "seems to be dreaming, I'd like to be swimming, pretended to be working.", "After verbs like seem, would like, want and pretend the infinitive keeps “to”.")
    ],

    exercises: [
      /* ---------- basics ---------- */
      { u: "basics", t: "match", pairs: [["psychology", "the scientific study of behavior and mental processes"], ["psychiatry", "a branch of medicine treating mental disorders"], ["psychotherapy", "treatment by talking through problems"], ["psychoanalysis", "explores unconscious motives and early experiences"]],
        x: "Exercise 1 z Vocabulary Class 1. Psychiatry to medycyna, psychotherapy to rozmowa." },
      { u: "basics", t: "match", pairs: [["consciousness", "awareness of internal and external existence"], ["personality", "patterns of thinking, feeling and behaving"], ["to observe", "to notice or watch carefully"], ["to respond", "to react to a stimulus"]],
        x: "Exercise 1, część druga." },
      { u: "basics", t: "match", pairs: [["mind", "umysł"], ["awareness", "świadomość"], ["environment", "środowisko"], ["behaviour", "zachowanie"], ["treatment", "leczenie"]],
        x: "Podstawowe słówka ze słowniczka." },
      { u: "basics", t: "cloze", q: "He decided to seek ___ after experiencing high levels of stress.",
        a: ["psychotherapy", "personality", "consciousness", "behaviorism"],
        x: "Seek psychotherapy = szukać pomocy terapeuty.",
        w: ["Osobowości się nie „szuka”.", "Świadomość to nie leczenie.", "To nurt, nie pomoc."] },
      { u: "basics", t: "cloze", q: "The ___ method in psychology is used to gather data through observation and experimentation.",
        a: ["scientific", "science", "scientist", "scientifically"],
        x: "Przed rzeczownikiem potrzebny przymiotnik: scientific method.",
        w: ["To rzeczownik.", "To osoba.", "To przysłówek."] },
      { u: "basics", t: "cloze", q: "The patient's ___ state showed signs of improvement after weeks of therapy.",
        a: ["mental", "mind", "applied", "human"],
        x: "Mental state = stan psychiczny.",
        w: ["Mind to rzeczownik.", "Applied = stosowany.", "Nie ta kolokacja."] },
      { u: "basics", t: "cloze", q: "___ is a branch of medicine focused on treating mental disorders through medical means.",
        a: ["Psychiatry", "Psychotherapy", "Psychoanalysis", "Psychology"],
        x: "Środki medyczne = psychiatria.",
        w: ["To leczenie rozmową.", "To terapia Freuda.", "To nauka, nie dział medycyny."] },
      { u: "basics", t: "cloze", q: "A person's ___ shapes how they react to their environment and interact with others.",
        a: ["personality", "psychiatry", "treatment", "research"],
        x: "Personality = stały wzorzec reagowania.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "basics", t: "mcq", q: "Which sentence is correct?",
        a: ["He responded to the sunset with deep thoughts.", "He responded the sunset with deep thoughts.", "He responded at the sunset with deep thoughts.", "He responded on the sunset with deep thoughts."],
        x: "Respond TO something. To zdanie z Exercise 3 (sentence correction).",
        w: ["Brakuje przyimka „to”.", "Zły przyimek.", "Zły przyimek."] },
      { u: "basics", t: "mcq", q: "“Psychiatry is a form of talking therapy.” Which word should replace “Psychiatry”?",
        a: ["Psychotherapy", "Consciousness", "Personality", "Behaviorism"],
        x: "Talking therapy = psychotherapy. Psychiatry is a branch of medicine.",
        w: ["To świadomość.", "To osobowość.", "To nurt."] },
      { u: "basics", t: "mcq", q: "“Her personality was unconscious during the interview.” What is wrong?",
        a: ["A personality cannot be unconscious; a person can", "The word “interview” is misspelled here", "The noun should be plural: “personalities”", "Nothing is wrong"],
        x: "Poprawnie np.: She was unconscious… albo: Her personality was evident during the interview.",
        w: ["Nie.", "Nie.", "Zdanie jest błędne."] },
      { u: "basics", t: "tf", q: "“Research” is an uncountable noun: we say “do research”, not “make a research”.", a: true,
        x: "Tak. Także: conduct research, carry out research.", s: "D" },
      { u: "basics", t: "type", q: "The plural of “stimulus” is…", a: ["stimuli"], strict: true,
        x: "Stimulus – stimuli (bodziec – bodźce), z notatek z zajęć." },

      /* ---------- families ---------- */
      { u: "families", t: "match", pairs: [["to apply", "stosować"], ["application", "zastosowanie"], ["applied", "stosowany"], ["to approach", "podchodzić (do problemu)"]],
        x: "Rodzina wyrazów apply." },
      { u: "families", t: "match", pairs: [["conduct research", "prowadzić badania"], ["carry out", "przeprowadzać"], ["facilitate", "ułatwiać"], ["contribute to", "wnosić wkład w"], ["biased", "stronniczy"]],
        x: "Ze słowniczka z zajęć." },
      { u: "families", t: "cloze", q: "The therapist helped the patient ___ with traumatic memories.",
        a: ["deal", "pay", "reflect", "carry"],
        x: "Deal with = radzić sobie z (także: cope with).",
        w: ["Pay attention to.", "Reflect on.", "Carry out."] },
      { u: "families", t: "cloze", q: "It's important to ___ attention to non-verbal cues during therapy.",
        a: ["pay", "make", "do", "put"],
        x: "Pay attention to.",
        w: ["Nie ta kolokacja.", "Nie ta kolokacja.", "Nie ta kolokacja."] },
      { u: "families", t: "cloze", q: "The psychologist asked the client to ___ on their childhood experiences.",
        a: ["reflect", "deal", "find", "respond"],
        x: "Reflect on = zastanowić się nad.",
        w: ["Deal with.", "Find out.", "Respond to."] },
      { u: "families", t: "cloze", q: "Researchers aim to ___ out patterns in human behavior.",
        a: ["find", "pay", "deal", "treat"],
        x: "Find out / figure out = odkryć, ustalić.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "families", t: "cloze", q: "Scientists continue to ___ different strategies in treating mental health disorders.",
        a: ["apply", "application", "applied", "applying"],
        x: "Po „to” bezokolicznik: to apply.",
        w: ["Rzeczownik.", "Przymiotnik / forma przeszła.", "Po „continue to” bezokolicznik."] },
      { u: "families", t: "mcq", q: "Which is the correct spelling?",
        a: ["attitude", "attitute", "atitude", "attitiude"],
        x: "Attitude = postawa. W słowniczku była literówka „attitute”.",
        w: ["Częsty błąd.", "Dwa „t”.", "Nie."] },
      { u: "families", t: "mcq", q: "“Biased” research is research that is…",
        a: ["not objective", "very expensive", "done on animals", "empirically tested"],
        x: "Biased = stronniczy, obciążony błędem.",
        w: ["Nie.", "To comparative psychology.", "Nie."] },
      wf("families", "BEHAVE", "Psychology is the scientific study of ___ and mental processes.", ["behaviour", "behavior"], "Behave → behaviour (BrE) / behavior (AmE)."),
      wf("families", "TREAT", "Applications of psychology include mental health ___.", ["treatment"], "Treat → treatment."),
      wf("families", "CONSCIOUS", "___ is the awareness of internal and external existence.", ["consciousness"], "Conscious → consciousness."),
      wf("families", "AWARE", "Self-___ is knowing your own feelings and motives.", ["awareness"], "Aware → awareness."),

      /* ---------- history ---------- */
      { u: "history", t: "mcq", q: "What does the modern definition of psychology include?",
        a: ["Study of behavior and mental processes", "Study of the soul", "Study of dreams", "Study of therapy"],
        x: "Pytanie z worksheetu „How old is psychology?”: odpowiedź b.",
        w: ["To dawne rozumienie (psyche).", "Za wąsko.", "Za wąsko."] },
      { u: "history", t: "mcq", q: "Psychology evolved out of…",
        a: ["philosophy and biology", "medicine and law", "physics and chemistry", "sociology and history"],
        x: "Tekst „Areas of Psychology”: both philosophy and biology.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "history", t: "mcq", q: "Where did Wilhelm Wundt establish the first psychology lab?",
        a: ["Leipzig, Germany", "Vienna, Austria", "London, England", "Boston, USA"],
        x: "Leipzig (Lipsk).",
        w: ["Wiedeń kojarzy się z Freudem.", "Nie.", "Nie."] },
      { u: "history", t: "mcq", q: "What was a major criticism of structuralism?",
        a: ["It relied on introspection and was too subjective", "It was too scientific", "It ignored behavior", "It focused only on dreams"],
        x: "Worksheet, pytanie 3: odpowiedź b.",
        w: ["Odwrotnie.", "Nie.", "Nie."] },
      { u: "history", t: "mcq", q: "Which psychologist is associated with behaviorism?",
        a: ["Skinner", "Freud", "James", "Wundt"],
        x: "Skinner. Freud: psychoanalysis; Wundt: structuralism; James: functionalism.",
        w: ["Psychoanaliza.", "Funkcjonalizm.", "Strukturalizm."] },
      { u: "history", t: "which", set: "school", q: "It tries to break mental processes down into basic components.", a: 1, x: "Structuralism." },
      { u: "history", t: "which", set: "school", q: "It asks about the purpose of mental processes and behavior.", a: 2, x: "Functionalism." },
      { u: "history", t: "which", set: "school", q: "A theory and therapy based on unconscious motives and talk therapy.", a: 3, x: "Psychoanalysis." },
      { u: "history", t: "which", set: "school", q: "It focuses on observable actions and conditioning.", a: 4, x: "Behaviorism." },
      { u: "history", t: "multi", q: "Which are schools of thought listed in the text?",
        a: ["Humanism", "Cognitivism", "Functionalism"], o: ["Ergonomics", "Statistics"],
        x: "Structuralism, functionalism, psychoanalysis, behaviorism, humanism, cognitivism.",
        w: ["To dział stosowany.", "To przedmiot na studiach."] },
      { u: "history", t: "mcq", q: "“Introspection is a method used to observe other people's behavior.” Correct it.",
        a: ["It is self-observation of one's own thoughts and feelings", "It is a method of conditioning animals with rewards", "It is a branch of medicine", "It is attributing your own feelings to other people"],
        x: "Activity 2 z worksheetu.",
        w: ["To behawioryzm.", "To psychiatria.", "To projekcja."] },
      { u: "history", t: "tf", q: "The word “psychology” comes from the Greek word “psyche”, meaning “soul” or “mind”.", a: true, x: "Tak." },
      { u: "history", t: "tf", q: "Structuralism explains how behavior is shaped by rewards.", a: false,
        x: "Fałsz: to behawioryzm. Structuralism rozkłada procesy psychiczne na składniki." },

      /* ---------- freud ---------- */
      { u: "freud", t: "mcq", q: "According to Freud, what drives people?",
        a: ["Unconscious thoughts, desires and memories", "Rewards and punishments from the environment", "Social norms only", "Conscious, logical decision-making"],
        x: "People are driven by unconscious thoughts, desires, and memories.",
        w: ["To behawioryzm.", "Nie.", "Nie."] },
      { u: "freud", t: "mcq", q: "What technique did Freud use to uncover unconscious motives?",
        a: ["Free association", "Hypnosis", "Medication", "Observation"],
        x: "Odpowiedź z worksheetu: b) free association.",
        w: ["Nie w tym tekście.", "Nie.", "Nie."] },
      { u: "freud", t: "mcq", q: "What is catharsis?",
        a: ["An emotional release from distress", "A defense mechanism against anxiety", "A part of the brain", "A research method used in experiments"],
        x: "Catharsis = emocjonalne rozładowanie.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "freud", t: "which", set: "psyche", q: "Primitive desires such as hunger; “much like a child”.", a: 1, x: "Id." },
      { u: "freud", t: "which", set: "psyche", q: "Mediates between the other two and the world; “you, as an adult”.", a: 2, x: "Ego." },
      { u: "freud", t: "which", set: "psyche", q: "Follows norms and society's moral codes; “a parental figure”.", a: 3, x: "Super-ego." },
      { u: "freud", t: "match", pairs: [["Carl Jung", "collective unconscious"], ["Karen Horney", "Freud ignored females"], ["Alfred Adler", "social, not sexual, tensions"]],
        x: "Neo-Freudians i ich zastrzeżenia do Freuda." },
      { u: "freud", t: "mcq", q: "What are defense mechanisms?",
        a: ["Reducing anxiety by distorting reality", "Talking about anything that comes to mind", "Rewards that shape behavior", "Nerves that protect the brain"],
        x: "…without realizing it. Przykłady: repress a memory, be in denial.",
        w: ["To free association.", "To behawioryzm.", "Nie."] },
      { u: "freud", t: "mcq", q: "“Projection” means…",
        a: ["attributing one's own feelings to others", "thinking deeply about your emotions", "forgetting a bad memory", "talking about your dreams"],
        x: "Activity 1 i 2 z worksheetu.",
        w: ["To introspection / reflection.", "To repression.", "Nie."] },
      { u: "freud", t: "mcq", q: "How does the psychodynamic perspective differ from psychoanalysis?",
        a: ["It does not focus on unresolved childhood moments", "It rejects the idea of the unconscious completely", "It studies only animals", "It uses only medication"],
        x: "A more moderate perspective: kept some of Freud's ideas.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "freud", t: "tf", q: "According to Freud, personality develops during early childhood and is highly influenced by one's experiences.", a: true, x: "Tak." },
      { u: "freud", t: "tf", q: "Psychoanalysis focuses on conscious decision-making and logic.", a: false,
        x: "Fałsz: na nieświadomych motywach (Activity 2)." },
      { u: "freud", t: "cloze", q: "One may ___ a bad memory or be in denial about their current situation.",
        a: ["repress", "respond", "relay", "regulate"],
        x: "Repress = wypierać.",
        w: ["Reagować.", "Przekazywać.", "Regulować."] },

      /* ---------- dreams ---------- */
      wf("dreams", "FOUND", "Sigmund Freud is regarded as the ___ of psychoanalysis.", ["founder"], "Found → founder (osoba)."),
      wf("dreams", "INFLUENCE", "His work has been ___ in many areas.", ["influential"], "Influence → influential (przymiotnik)."),
      wf("dreams", "ATTEND", "He is best known for having drawn our ___ to dreams.", ["attention"], "Attend → attention; draw attention to."),
      wf("dreams", "ESSENTIAL", "A dream is ___ a disguised expression of the unconscious mind.", ["essentially"], "Przed frazą potrzebny przysłówek: essentially."),
      wf("dreams", "SIGNIFY", "It is difficult for the dreamer to understand its ___.", ["significance"], "Signify → significance (rzeczownik)."),
      wf("dreams", "AWARE", "…prevent the dreamer from having any ___ of their true nature.", ["awareness"], "Aware → awareness."),
      wf("dreams", "KNOW", "It required a psychoanalyst with an expert ___ of how dreams disguise desires.", ["knowledge"], "Know → knowledge."),
      wf("dreams", "INVOLVE", "The psychoanalyst's lack of personal ___ in the dream…", ["involvement"], "Involve → involvement."),
      wf("dreams", "MYSTERY", "Dreams use a ___ symbolic language.", ["mysterious"], "Mystery → mysterious (y → i + ous)."),
      wf("dreams", "EVIDENT", "There is no hard ___ for believing that dreams reflect our wishes.", ["evidence"], "Evident → evidence; hard evidence = twarde dowody."),
      wf("dreams", "DOUBT", "Nevertheless, Freud ___ made a major contribution to twentieth-century thought.", ["undoubtedly"], "Doubt → undoubtedly (przedrostek un- + -edly)."),
      { u: "dreams", t: "mcq", q: "For Freud, dreams were…",
        a: ["clues to inner conflicts", "random brain noise", "memories of the day", "messages from others"],
        x: "Dreams… which he believed were clues to inner conflicts.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "dreams", t: "tf", q: "The text says there is hard evidence that dreams reflect our unconscious wishes.", a: false,
        x: "Fałsz: „there is no hard evidence”." },
      { u: "dreams", t: "match", pairs: [["FOUND", "founder"], ["SIGNIFY", "significance"], ["DOUBT", "undoubtedly"], ["EVIDENT", "evidence"], ["INVOLVE", "involvement"]],
        x: "Klucz do zadania „Freud and Dreams”." },

      /* ---------- today ---------- */
      { u: "today", t: "mcq", q: "What are the two major areas of focus in psychology?",
        a: ["Academic and applied psychology", "Clinical and social psychology", "Freudian and behavioral", "Theory and statistics"],
        x: "Pytanie 1 z „Areas of Psychology Questions”.",
        w: ["To dwie z wielu gałęzi.", "To nurty.", "Nie."] },
      { u: "today", t: "sort", q: "Basic or applied?", cats: ["Basic research", "Applied research"],
        why: ["Seeks to expand theoretical knowledge.", "Seeks to solve everyday problems."],
        items: [["expanding our theoretical knowledge", 0], ["studying sub-topics like personality", 0], ["solving real world problems", 1], ["ergonomics", 1], ["forensic psychology", 1], ["industrial-organizational psychology", 1]],
        x: "Academic psychology prowadzi basic research; applied psychology rozwiązuje problemy." },
      { u: "today", t: "mcq", q: "Psychological studies begin with a hypothesis that is then…",
        a: ["empirically tested", "discussed in therapy", "kept secret", "introspected"],
        x: "Highly structured: hypothesis → empirical testing.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "today", t: "multi", q: "Which research methods are named in the text?",
        a: ["experiments", "correlational studies", "longitudinal studies"], o: ["free association", "introspection"],
        x: "Experiments, correlational studies, longitudinal studies and others.",
        w: ["To technika Freuda.", "To metoda strukturalizmu."] },
      { u: "today", t: "mcq", q: "Why are statistics courses “a must” for psychology majors?",
        a: ["They show how psychologists investigate behavior", "They replace courses in experimental psychology", "They are the easiest courses", "They teach talk therapy"],
        x: "Statistics offers a core background; 85% of graduate programs require it.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "today", t: "mcq", q: "What do courses in abnormal psychology focus on?",
        a: ["Influences on abnormal behavior", "Animal behavior", "Workplace productivity and safety", "Child development only"],
        x: "Biological, environmental and cultural influences; mood, personality, psychosomatic disorders, substance abuse.",
        w: ["Comparative.", "I-O.", "Developmental."] },
      { u: "today", t: "tf", q: "Today, psychologists prefer more objective scientific methods to understand, explain and predict human behavior.", a: true, x: "Tak." },
      { u: "today", t: "cloze", q: "Psychologists ___ basic research that seeks to expand our theoretical knowledge.",
        a: ["conduct", "make", "treat", "respond"],
        x: "Conduct research.",
        w: ["Nie „make research”.", "Nie.", "Nie."] },

      /* ---------- areas ---------- */
      { u: "areas", t: "which", set: "branch", q: "Assessment and treatment of mental illness, abnormal behavior and psychiatric problems.", a: 1, x: "Clinical psychology." },
      { u: "areas", t: "which", set: "branch", q: "How people think, perceive, remember and learn.", a: 2, x: "Cognitive psychology." },
      { u: "areas", t: "which", set: "branch", q: "Changes from prenatal development to Alzheimer's disease.", a: 3, x: "Developmental psychology." },
      { u: "areas", t: "which", set: "branch", q: "Providing testimony, analysis or recommendations in legal or criminal cases.", a: 4, x: "Forensic psychology." },
      { u: "areas", t: "which", set: "branch", q: "Understanding how people react, cope and recover from illness.", a: 5, x: "Health psychology." },
      { u: "areas", t: "which", set: "branch", q: "Increasing workplace productivity and the well-being of employees.", a: 6, x: "Industrial-organizational psychology." },
      { u: "areas", t: "match", pairs: [["abnormal psychology", "psychologia zaburzeń"], ["cognitive psychology", "psychologia poznawcza"], ["developmental psychology", "psychologia rozwojowa"], ["forensic psychology", "psychologia sądowa"], ["comparative psychology", "psychologia porównawcza"]],
        x: "Ze słowniczka z zajęć." },
      { u: "areas", t: "match", pairs: [["counseling psychology", "poradnictwo psychologiczne"], ["human factors psychology", "ergonomia"], ["industrial-organizational psychology", "psychologia pracy i organizacji"], ["social psychology", "psychologia społeczna"], ["health psychology", "psychologia zdrowia"]],
        x: "Ze słowniczka z zajęć." },
      { u: "areas", t: "mcq", q: "Which branch studies animal behavior?",
        a: ["Comparative psychology", "Experimental psychology", "Abnormal psychology", "Biopsychology"],
        x: "Began with Charles Darwin and Georges Romanes.",
        w: ["Nie.", "Nie.", "Mózg i neuroprzekaźniki."] },
      { u: "areas", t: "mcq", q: "Biopsychology analyzes how…",
        a: ["the brain and neurotransmitters influence behavior", "social groups influence the behavior of individuals", "children learn at school", "law and psychology intersect"],
        x: "A combination of basic psychology and neuroscience.",
        w: ["Social.", "Educational / school.", "Forensic."] },
      { u: "areas", t: "mcq", q: "“Human factors” and “ergonomics” are…",
        a: ["often used synonymously", "opposite terms", "two schools of thought", "research methods"],
        x: "Human factors: USA; ergonomics: Europe.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "areas", t: "multi", q: "Which topics belong to social psychology?",
        a: ["conformity", "prejudice", "leadership"], o: ["neurotransmitters", "prenatal development"],
        x: "Group behavior, social perception, leadership, nonverbal behavior, conformity, aggression, prejudice.",
        w: ["Biopsychology.", "Developmental."] },
      { u: "areas", t: "tf", q: "Personality psychology includes Freud's psychoanalytic theory and Erikson's theory of psychosocial development.", a: true, x: "Tak." },

      /* ---------- ns ---------- */
      { u: "ns", t: "mcq", q: "What two parts is the central nervous system divided into?",
        a: ["The brain and the spinal cord", "The somatic and autonomic systems", "Grey and white matter", "Cranial and spinal nerves"],
        x: "Exercise 3, pytanie 1.",
        w: ["To części PNS.", "To rodzaje tkanki.", "To nerwy PNS."] },
      { u: "ns", t: "which", set: "ns", q: "It sends touch, vision and hearing to the CNS and makes the muscles move the body.", a: 2, x: "Somatic system." },
      { u: "ns", t: "which", set: "ns", q: "It prepares the body for excited, active states.", a: 3, x: "Sympathetic division." },
      { u: "ns", t: "which", set: "ns", q: "It is involved in rest and digestion.", a: 4, x: "Parasympathetic division." },
      { u: "ns", t: "which", set: "ns", q: "It consists of the brain and the spinal cord.", a: 1, x: "CNS." },
      { u: "ns", t: "sort", q: "Grey matter or white matter?", cats: ["Grey matter", "White matter"],
        why: ["Cell bodies; processes information.", "Axons; carries impulses."],
        items: [["processes information", 0], ["cell bodies of neurons", 0], ["carries impulses", 1], ["consists of nerve fibres called axons", 1]],
        x: "Exercise 3, pytanie 3." },
      { u: "ns", t: "tf", q: "The brain weighs about three kilograms.", a: false, x: "False: approximately 1.3–1.4 kg." },
      { u: "ns", t: "tf", q: "Messages travel from the brain to the eyes through the spinal nerves.", a: false, x: "False: through the cranial nerves." },
      { u: "ns", t: "tf", q: "The autonomic system sends messages to motor nerve fibres to move the muscles.", a: false, x: "False: that is the somatic system." },
      { u: "ns", t: "tf", q: "The somatic system controls heart rate and digestion.", a: false, x: "False: the autonomic system does." },
      { u: "ns", t: "tf", q: "White matter carries impulses to and from grey matter.", a: true, x: "True." },
      { u: "ns", t: "mcq", q: "“There are twelve pairs of cranial nerves in the human body.” In the reading this is…",
        a: ["not stated", "true", "false", "stated twice"],
        x: "T/F/NS: tekst nie podaje liczby nerwów czaszkowych (NS). Tak samo: „Grey matter is found only in the brain”.",
        w: ["Prawda w rzeczywistości, ale nie ma tego w tekście.", "Nie.", "Nie."] },
      { u: "ns", t: "mcq", q: "What are the two major functions of the spinal cord?",
        a: ["Carrying impulses and controlling many reflexes", "Processing long-term memory and emotions", "Regulating sleep and hunger", "Producing serotonin and hormones"],
        x: "It carries impulses between the brain and the body, and it controls many reflexes.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "ns", t: "mcq", q: "“White matter consists of the cell bodies of neurons.” Correct it.",
        a: ["White matter consists of axons", "White matter consists of glial cells only", "White matter is found in the skull bone", "The sentence is correct"],
        x: "Exercise 2: cell bodies are in grey matter.",
        w: ["Nie.", "Nie.", "Jest błędne."] },
      { u: "ns", t: "mcq", q: "Which chemical does exercise release in the brain?",
        a: ["Serotonin", "Oxygen", "Insulin", "Adrenaline"],
        x: "It makes you feel good and helps you deal with stress.",
        w: ["Nie.", "Nie.", "Nie w tym tekście."] },

      /* ---------- nswords ---------- */
      { u: "nswords", t: "match", pairs: [["internal", "organ"], ["voluntary", "movement"], ["spinal", "cord"], ["heart", "rate"], ["nervous", "system"]],
        x: "Exercise 4: word partnerships." },
      { u: "nswords", t: "match", pairs: [["to transmit", "an impulse"], ["to carry", "information"], ["protective", "bone"], ["temperature", "variations"], ["to control", "reflexes"]],
        x: "Exercise 4: word partnerships." },
      { u: "nswords", t: "match", pairs: [["skull", "czaszka"], ["backbone", "kręgosłup"], ["spinal cord", "rdzeń kręgowy"], ["digestion", "trawienie"], ["circulation", "krążenie"]],
        x: "Exercise 6: translate into Polish." },
      { u: "nswords", t: "match", pairs: [["grey matter", "istota szara"], ["white matter", "istota biała"], ["cell body", "ciało komórki"], ["reflex", "odruch"], ["heart rate", "tętno"]],
        x: "Exercise 6: translate into Polish." },
      { u: "nswords", t: "cloze", q: "The brain lies within the ___ and is protected by bone.",
        a: ["skull", "backbone", "spinal cord", "axon"],
        x: "Skull = czaszka. Exercise 2: „The brain lies within the backbone” jest błędne.",
        w: ["W kręgosłupie biegnie rdzeń.", "Nie.", "Nie."] },
      { u: "nswords", t: "cloze", q: "The spinal cord controls many ___, automatic reactions that happen without thinking.",
        a: ["reflexes", "impulses", "neurons", "organs"],
        x: "Reflex = odruch.",
        w: ["To sygnały.", "To komórki.", "Nie."] },
      { u: "nswords", t: "cloze", q: "The somatic system is the ___ part of the PNS: you decide to move your muscles.",
        a: ["voluntary", "involuntary", "central", "recuperative"],
        x: "Voluntary = zależny od woli. Autonomic = involuntary.",
        w: ["To układ autonomiczny.", "Nie.", "Nie."] },
      wf("nswords", "SPINE", "The ___ cord extends from the brain down the backbone.", ["spinal"], "Spine → spinal."),
      wf("nswords", "DIGEST", "The parasympathetic division is involved in rest and ___.", ["digestion"], "Digest → digestion."),
      wf("nswords", "NERVE", "The ___ system is a complex network of nerves and cells.", ["nervous"], "Nerve → nervous."),

      /* ---------- brain ---------- */
      { u: "brain", t: "multi", q: "The brain comprises…",
        a: ["the cerebrum", "the cerebellum", "the brainstem"], o: ["the spinal cord", "the skull"],
        x: "The brain is located within the skull and comprises the cerebrum, the cerebellum and the brainstem.",
        w: ["To druga część CNS.", "To kość, nie część mózgu."] },
      { u: "brain", t: "multi", q: "The brainstem is made of…",
        a: ["the midbrain", "the pons", "the medulla oblongata"], o: ["the thalamus", "the amygdala"],
        x: "Midbrain, pons, medulla oblongata.",
        w: ["Struktura podkorowa.", "Struktura podkorowa."] },
      { u: "brain", t: "match", pairs: [["frontal lobe", "płat czołowy"], ["parietal lobe", "płat ciemieniowy"], ["occipital lobe", "płat potyliczny"], ["temporal lobe", "płat skroniowy"]],
        x: "Cztery płaty." },
      { u: "brain", t: "match", pairs: [["cerebrum", "kresomózgowie"], ["cerebellum", "móżdżek"], ["brainstem", "pień mózgu"], ["corpus callosum", "ciało modzelowate"], ["pineal gland", "szyszynka"]],
        x: "Ze słowniczka." },
      { u: "brain", t: "tf", q: "Glial cells are types of nerve cells.", a: false, x: "False: they are supporting cells; nerve cells are neurons." },
      { u: "brain", t: "tf", q: "The medulla oblongata is part of the cerebral cortex.", a: false, x: "False: it is part of the brainstem." },
      { u: "brain", t: "tf", q: "If a stroke occurs in the left side of the brain, the right side of the body is affected.", a: true, x: "True: the left hemisphere controls the right side." },
      { u: "brain", t: "tf", q: "The human brain consumes a disproportionate amount of energy.", a: true, x: "True: 2% of body weight, about 20% of energy." },
      { u: "brain", t: "tf", q: "The cerebral cortex is the brain structure with the longest ancestry.", a: false, x: "False: it developed last. The brainstem and cerebellum developed first." },
      { u: "brain", t: "tf", q: "Breathing and heartbeat do not require the brain.", a: false, x: "False: the medulla oblongata regulates them. Only simple reflex actions do not need the brain." },
      { u: "brain", t: "order", q: "Order the layers of the brain as they developed in evolution.",
        a: ["Brainstem and cerebellum", "Limbic system", "Cerebral cortex"],
        x: "The human brain has tripled in size and developed three distinctive layers." },
      { u: "brain", t: "cloze", q: "The two hemispheres are joined together by the ___.",
        a: ["corpus callosum", "cerebellum", "thalamus", "pons"],
        x: "A structure containing nerve fibers.",
        w: ["Móżdżek.", "Wzgórze.", "Most."] },
      { u: "brain", t: "cloze", q: "Located at the back of the brain, the ___ lobe is involved mainly in vision.",
        a: ["occipital", "frontal", "temporal", "parietal"],
        x: "Exercise 2, zdanie 2.",
        w: ["Z przodu.", "Z boku.", "U góry."] },
      { u: "brain", t: "cloze", q: "The brain ___ much more energy than other organs.",
        a: ["consumes", "controls", "relays", "comprises"],
        x: "Exercise 2: consumes.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "brain", t: "cloze", q: "Neurons serve as the basic building blocks of the nervous system, ___ information throughout the whole body.",
        a: ["transmitting", "consuming", "locating", "joining"],
        x: "Exercise 2: transmitting.",
        w: ["Nie.", "Nie.", "Nie."] },

      /* ---------- functions ---------- */
      { u: "functions", t: "which", set: "structure", q: "It controls emotions.", a: 1, x: "Amygdala." },
      { u: "functions", t: "which", set: "structure", q: "It is involved in the formation of long-term memory.", a: 2, x: "Hippocampus." },
      { u: "functions", t: "which", set: "structure", q: "It relays sensory information.", a: 3, x: "Thalamus." },
      { u: "functions", t: "which", set: "structure", q: "It controls body temperature, hunger, thirst, fatigue and sleep.", a: 4, x: "Hypothalamus." },
      { u: "functions", t: "which", set: "structure", q: "It coordinates the body's movement, posture and balance.", a: 5, x: "Cerebellum." },
      { u: "functions", t: "which", set: "structure", q: "It regulates heart rate, blood pressure and respiration.", a: 6, x: "Medulla oblongata." },
      { u: "functions", t: "match", pairs: [["olfactory bulbs", "sense of smell"], ["midbrain", "vision and hearing"], ["pons", "sleep-wake cycles"], ["cerebrum", "higher mental functions"]],
        x: "Lista funkcji z podręcznika." },
      { u: "functions", t: "match", pairs: [["amygdala", "ciało migdałowate"], ["hippocampus", "hipokamp"], ["thalamus", "wzgórze"], ["hypothalamus", "podwzgórze"], ["medulla oblongata", "rdzeń przedłużony"]],
        x: "Ze słowniczka." },
      { u: "functions", t: "match", pairs: [["midbrain", "śródmózgowie"], ["pons", "most"], ["olfactory bulb", "opuszka węchowa"], ["cerebellum", "móżdżek"]],
        x: "Ze słowniczka." },
      { u: "functions", t: "mcq", q: "Which structures are subcortical parts of the cerebrum?",
        a: ["Amygdala, hippocampus, thalamus", "Pons, midbrain, medulla", "Skull, spine, nerves", "Frontal, parietal, occipital"],
        x: "…plus the hypothalamus and olfactory bulbs.",
        w: ["To pień mózgu.", "Nie.", "To płaty."] },

      /* ---------- cases ---------- */
      { u: "cases", t: "mcq", q: "After a car accident a woman can no longer process emotional stimuli; she isn't scared in high-risk situations. What was damaged?",
        a: ["amygdala", "thalamus", "brainstem", "hypothalamus"],
        x: "Exercise 3.1: c) amygdala controls emotions.",
        w: ["Zmysły.", "Podstawowe funkcje.", "Równowaga organizmu."] },
      { u: "cases", t: "mcq", q: "Clive Wearing developed profound amnesia after viral encephalitis and cannot form new long-term memories. What was damaged?",
        a: ["hippocampus", "medulla oblongata", "hypothalamus", "cerebellum"],
        x: "Exercise 3.2: b) hippocampus.",
        w: ["Tętno, oddech.", "Głód, sen.", "Ruch."] },
      { u: "cases", t: "mcq", q: "A man is unsteady, cannot walk in a straight line and his body swaggers. What was damaged?",
        a: ["cerebellum", "amygdala", "thalamus", "corpus callosum"],
        x: "Exercise 3.3: b) cerebellum coordinates movement and balance.",
        w: ["Emocje.", "Zmysły.", "Łączy półkule."] },
      { u: "cases", t: "mcq", q: "After a head injury a woman has problems detecting odours. What was damaged?",
        a: ["olfactory bulb", "amygdala", "pons", "cerebellum"],
        x: "Exercise 3.4: a) olfactory bulb.",
        w: ["Emocje.", "Sen.", "Ruch."] },
      { u: "cases", t: "mcq", q: "You are out of breath after cycling uphill. Which structure regulates your heartbeat?",
        a: ["medulla oblongata", "hypothalamus", "thalamus", "cerebellum"],
        x: "Exercise 3.5: c) medulla oblongata.",
        w: ["Temperatura, głód.", "Zmysły.", "Ruch."] },
      { u: "cases", t: "mcq", q: "Andrew is often sleepy in class. Which part of the brain is responsible for his sleepiness?",
        a: ["brainstem", "cerebellum", "corpus callosum", "amygdala"],
        x: "Exercise 3.6: d) brainstem (the pons regulates sleep-wake cycles).",
        w: ["Ruch.", "Łączy półkule.", "Emocje."] },
      { u: "cases", t: "mcq", q: "I wake up at night feeling hungry. Which structure makes me feel hungry?",
        a: ["hypothalamus", "cerebellum", "corpus callosum", "hippocampus"],
        x: "Exercise 3.7: a) hypothalamus.",
        w: ["Ruch.", "Łączy półkule.", "Pamięć."] },
      { u: "cases", t: "sort", q: "Structure or activity?", cats: ["Structure of the brain", "Activity of the brain"],
        why: ["CT scanning or MRI.", "PET scanning and fMRI."],
        items: [["CT scan", 0], ["MRI", 0], ["PET", 1], ["fMRI", 1]],
        x: "Structure: CT, MRI. Activity: PET, fMRI." },
      { u: "cases", t: "cloze", q: "The blows he received to the ___ left him with a brain injury.",
        a: ["head", "forehead", "scalp", "skull bone"],
        x: "Exercise 4 (Jason Padgett), luka 1: head.",
        w: ["Czoło: za wąsko.", "Skóra głowy.", "Nie."] },
      { u: "cases", t: "cloze", q: "The attack left him with a ___ brain injury.",
        a: ["traumatic", "trauma", "traumatised", "traumatically"],
        x: "Luka 2: traumatic brain injury.",
        w: ["Rzeczownik.", "Tak mówimy o osobie.", "Przysłówek."] },
      { u: "cases", t: "cloze", q: "Doctors diagnosed Padgett with severe ___, but released him the same night.",
        a: ["concussion", "collision", "contusion", "confusion"],
        x: "Luka 3: concussion = wstrząśnienie mózgu.",
        w: ["Zderzenie.", "Stłuczenie.", "Dezorientacja."] },
      { u: "cases", t: "cloze", q: "Brain scans revealed profound changes in the left ___ of his brain.",
        a: ["hemisphere", "lobe", "cortex", "bulb"],
        x: "Luka 4: left hemisphere.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "cases", t: "cloze", q: "…and hyperactivity in the left parietal ___, an area that integrates information from different senses.",
        a: ["cortex", "cerebrum", "cerebellum", "callosum"],
        x: "Luka 5: parietal cortex.",
        w: ["Nie.", "Nie.", "Nie."] },
      { u: "cases", t: "cloze", q: "His extraordinary abilities are called “___ syndrome”.",
        a: ["savant", "prodigy", "genius", "Down's"],
        x: "Luka 6: savant syndrome.",
        w: ["Cudowne dziecko.", "Geniusz.", "Nie."] },
      { u: "cases", t: "tf", q: "A brain autopsy remains the only way to examine the brain thoroughly.", a: false,
        x: "False: imaging techniques (CT, MRI, fMRI, PET) examine it without cutting it open." },

      /* ---------- disorders ---------- */
      wf("disorders", "ILL", "Injuries, ___ and diseases that you may inherit can damage your brain.", ["illnesses"], "Ill → illness → liczba mnoga illnesses (obok injuries, diseases)."),
      wf("disorders", "PLACE", "The body cannot ___ lost cells.", ["replace"], "Place → replace (przedrostek re-)."),
      wf("disorders", "DAMAGE", "The brain can no longer work in the ___ area.", ["damaged"], "Damage → damaged (przymiotnik)."),
      wf("disorders", "ABLE", "Very often, they lose the ___ to speak clearly.", ["ability"], "Able → ability."),
      wf("disorders", "CLEAR", "They lose the ability to speak ___.", ["clearly"], "Clear → clearly (przysłówek)."),
      wf("disorders", "PART", "Some stroke victims die, others recover ___.", ["partly", "partially"], "Part → partly / partially."),
      wf("disorders", "GROW", "Brain tumours are caused by the rapid ___ of cells.", ["growth"], "Grow → growth."),
      wf("disorders", "MOVE", "Sometimes tumours can be ___ by operations or with drugs.", ["removed"], "Move → removed (re- + strona bierna)."),
      wf("disorders", "SPINE", "Meningitis affects the membranes that cover the brain and the ___ cord.", ["spinal"], "Spine → spinal."),
      wf("disorders", "BORN", "Sometimes the brain of an ___ baby does not develop the way it should.", ["unborn"], "Born → unborn."),
      wf("disorders", "GENE", "In other cases, ___ errors cause brain damage in later life.", ["genetic"], "Gene → genetic."),
      wf("disorders", "MOVE", "Huntington's disease leads to jerky ___ of the body.", ["movements"], "Move → movements (liczba mnoga)."),
      wf("disorders", "LOSE", "Many victims suffer from a ___ of memory.", ["loss"], "Lose → loss."),
      wf("disorders", "ACT", "The EEG records the ___ in the brain.", ["activity"], "Act → activity."),
      wf("disorders", "MAGNET", "___ resonance imaging (MRI) uses magnets.", ["magnetic"], "Magnet → magnetic."),
      wf("disorders", "POWER", "MRI uses ___ magnets to show how atoms in your brain change.", ["powerful"], "Power → powerful."),
      { u: "disorders", t: "mcq", q: "A stroke occurs when…",
        a: ["brain cells do not get enough oxygen", "cells grow too rapidly", "there is an extra chromosome", "membranes become infected"],
        x: "Oxygen is transported by blood; causes: high blood pressure, harder arteries.",
        w: ["To guz.", "Zespół Downa.", "Meningitis."] },
      { u: "disorders", t: "match", pairs: [["stroke", "udar mózgu"], ["tumour", "guz"], ["meningitis", "zapalenie opon mózgowych"], ["encephalitis", "zapalenie mózgu"], ["amnesia", "amnezja"]],
        x: "Z tekstu i notatek z zajęć." },
      { u: "disorders", t: "match", pairs: [["Down's syndrome", "an extra chromosome"], ["Huntington's disease", "jerky movements in middle age"], ["Alzheimer's disease", "loss of memory after 60"], ["meningitis", "affects membranes covering the brain"]],
        x: "Brain Disorders." },
      { u: "disorders", t: "tf", q: "Disorders that destroy brain cells are very serious because the body cannot replace lost cells.", a: true, x: "True." },

      /* ---------- ted ---------- */
      { u: "ted", t: "match", pairs: [["a disorder", "an illness"], ["DIY", "work you do yourself"], ["a spinal cord", "nerves inside the spine"], ["free will", "doing something because you want to"], ["a good sport", "a person who plays fair and stays nice"]],
        x: "Vocabulary development z worksheetu." },
      { u: "ted", t: "match", pairs: [["stick out", "push a part of your body forwards"], ["roll up", "fold to make shorter"], ["pick up", "receive a signal"], ["turn out", "develop in a particular way"], ["hook up", "connect equipment"], ["bring on", "cause something to appear"]],
        x: "Sześć phrasal verbs z transkryptu." },
      { u: "ted", t: "cloze", q: "I need you to ___ out your arm for science.",
        a: ["stick", "roll", "pick", "hook"], x: "Stick out your arm.", w: ["Roll up.", "Pick up.", "Hook up."] },
      { u: "ted", t: "cloze", q: "…and ___ up your sleeve a bit.",
        a: ["roll", "stick", "turn", "bring"], x: "Roll up your sleeve.", w: ["Stick out.", "Turn out.", "Bring on."] },
      { u: "ted", t: "cloze", q: "That electrical discharge is going to be ___ up by these electrodes.",
        a: ["picked", "hooked", "rolled", "turned"], x: "Picked up = odebrany.", w: ["Hook up = podłączyć.", "Roll up.", "Turn out."] },
      { u: "ted", t: "cloze", q: "It ___ out that there is a nerve right here that innervates these three fingers.",
        a: ["turns", "sticks", "brings", "picks"], x: "It turns out that… = okazuje się, że…", w: ["Stick out.", "Bring on.", "Pick up."] },
      { u: "ted", t: "cloze", q: "We're going to ___ on the neuro-revolution.",
        a: ["bring", "turn", "hook", "roll"], x: "Bring on = wywołać.", w: ["Nie.", "Nie.", "Nie."] },
      { u: "ted", t: "tf", q: "Neuroscience isn't taught at schools because the equipment is very expensive.", a: true, x: "True: the equipment is so complex and so expensive." },
      { u: "ted", t: "tf", q: "Less than 10 percent of the world will have a neurological disorder.", a: false, x: "False: one out of five, i.e. 20 percent." },
      { u: "ted", t: "tf", q: "There are cures for some serious neurological disorders.", a: false, x: "False: “there are zero cures for these diseases”." },
      { u: "ted", t: "tf", q: "It's possible to move somebody else's hand with your brain.", a: true, x: "True: the human-to-human interface demonstration." },
      { u: "ted", t: "mcq", q: "How many neurons are there in your brain, according to Greg Gage?",
        a: ["About 80 billion", "About 80 million", "About 8 billion", "About 800 billion"],
        x: "“You have about 80 billion neurons inside your brain.”", w: ["Za mało.", "Za mało.", "Za dużo."] },
      { u: "ted", t: "order", q: "Order the path of the signal when you move your arm.",
        a: ["Motor cortex", "Spinal cord", "Lower motor neuron", "Muscles"],
        x: "From the motor cortex, down the spinal cord to the lower motor neuron and out to the muscles." },
      { u: "ted", t: "mcq", q: "What is Backyard Brains?",
        a: ["A company making DIY neuroscience equipment", "A hospital treating neurological disorders", "A TED conference", "A university lab in Leipzig"],
        x: "Started by Greg Gage and Tim Marzullo.", w: ["Nie.", "Nie.", "Nie."] },

      /* ---------- grammar ---------- */
      { u: "grammar", t: "mcq", q: "How is the continuous infinitive formed?",
        a: ["to be + -ing", "to have + past participle", "to be + past participle", "to have been + -ing"],
        x: "Continuous infinitive: (to) be doing.",
        w: ["Perfect infinitive.", "Passive infinitive.", "Perfect continuous infinitive."] },
      { u: "grammar", t: "mcq", q: "Which form expresses an action that was in progress before the preceding verb?",
        a: ["to have been + -ing", "to be + -ing form", "to + base verb", "being + -ed"],
        x: "Perfect continuous infinitive.",
        w: ["To czynność trwająca teraz.", "Zwykły bezokolicznik.", "Nie."] },
      { u: "grammar", t: "cloze", q: "Where was he last night? He should ___ in bed.",
        a: ["have been sleeping", "be sleeping", "to be sleeping", "has been sleeping"],
        x: "Przeszłość (last night) → should have been sleeping.",
        w: ["To o teraźniejszości.", "Po modalnym bez „to”.", "Po modalnym „have”, nie „has”."] },
      { u: "grammar", t: "cloze", q: "You want to go out in this weather? You must ___.",
        a: ["be joking", "have been joking", "to be joking", "joking"],
        x: "Teraz → must be joking.",
        w: ["To o przeszłości.", "Bez „to”.", "Brakuje „be”."] },
      { u: "grammar", t: "cloze", q: "I don't think Conor was serious when he said he was going to retire young. He must ___.",
        a: ["have been joking", "be joking", "to have been joking", "been joking"],
        x: "Wtedy, w przeszłości → must have been joking.",
        w: ["To o teraz.", "Bez „to”.", "Brakuje „have”."] },
      { u: "grammar", t: "cloze", q: "Look at the dog! She seems ___ about something.",
        a: ["to be dreaming", "be dreaming", "to have been dreaming", "dreaming to be"],
        x: "Seem + to; dzieje się teraz → to be dreaming.",
        w: ["Po „seem” potrzebne „to”.", "To o wcześniej.", "Nie."] },
      { u: "grammar", t: "cloze", q: "I can't remember where I was this time last year. I might ___ in the park.",
        a: ["have been jogging", "be jogging", "to be jogging", "had been jogging"],
        x: "Przeszłość → might have been jogging.",
        w: ["To o teraz.", "Bez „to”.", "Po modalnym „have”."] },
      { u: "grammar", t: "cloze", q: "The manager isn't in his office right now. He could ___ lunch with a client.",
        a: ["be having", "have been having", "to be having", "having"],
        x: "Right now → could be having.",
        w: ["To o przeszłości.", "Bez „to”.", "Brakuje „be”."] },
      { u: "grammar", t: "cloze", q: "I'd really like ___ in the sea right now.",
        a: ["to be swimming", "be swimming", "to have been swimming", "swimming be"],
        x: "Would like + to; right now → to be swimming.",
        w: ["Potrzebne „to”.", "To o wcześniej.", "Nie."] },
      { u: "grammar", t: "cloze", q: "I wouldn't want ___ in that country right now. It's very dangerous.",
        a: ["to be travelling", "be travelling", "to have been travelling", "travelling to be"],
        x: "Want + to; right now → to be travelling.",
        w: ["Potrzebne „to”.", "To o wcześniej.", "Nie."] },
      { u: "grammar", t: "cloze", q: "He pretended ___ hard, but nobody believed him.",
        a: ["to be working", "be working", "working be", "to working"],
        x: "Pretend + to be doing: udawał w tym samym czasie.",
        w: ["Potrzebne „to”.", "Nie.", "Nie."] },
      { u: "grammar", t: "mcq", q: "Which sentence from the talk contains a continuous infinitive?",
        a: ["They may be thinking about becoming a brain scientist.", "We started a company called Backyard Brains.", "The brain is an amazing and complex organ.", "I need a volunteer."],
        x: "May + be thinking.",
        w: ["Past simple.", "Present simple.", "Present simple."] },
      { u: "grammar", t: "tf", q: "After modal verbs (must, could, should, might) the word “to” is omitted.", a: true, x: "Tak: He must be joking." },
      { u: "grammar", t: "cloze", q: "The organisers were thought ___ for days.",
        a: ["to have been preparing", "to be preparing", "have been preparing", "been preparing"],
        x: "Przykład z worksheetu: wcześniej, przez dłuższy czas.",
        w: ["To równocześnie.", "Potrzebne „to”.", "Nie."] },

      /* ---------- mix ---------- */
      { u: "mix", t: "mcq", q: "Which pair is correct?",
        a: ["cerebrum – higher mental functions; cerebellum – balance", "cerebrum – balance; cerebellum – higher mental functions", "cerebrum – smell; cerebellum – sleep", "cerebrum – heartbeat; cerebellum – hunger"],
        x: "Cerebrum vs cerebellum: najczęstsza pułapka.",
        w: ["Odwrotnie.", "Nie.", "Nie."] },
      { u: "mix", t: "mcq", q: "Which word is NOT a part of the brainstem?",
        a: ["thalamus", "pons", "midbrain", "medulla oblongata"],
        x: "Thalamus is a subcortical structure of the cerebrum.",
        w: ["Część pnia.", "Część pnia.", "Część pnia."] },
      { u: "mix", t: "which", set: "ns", q: "Your heart beats faster before an exam.", a: 3, x: "Sympathetic: excited, active states.", s: "D" },
      { u: "mix", t: "which", set: "school", q: "“Talk about anything that comes to mind.”", a: 3, x: "Free association: psychoanalysis." },
      { u: "mix", t: "which", set: "branch", q: "A psychologist gives testimony in a criminal case.", a: 4, x: "Forensic psychology." },
      { u: "mix", t: "cloze", q: "Applied psychology uses psychological principles to ___ real world problems.",
        a: ["solve", "repress", "inherit", "squeeze"],
        x: "Solve problems.",
        w: ["Wypierać.", "Dziedziczyć.", "Ściskać."] },
      wf("mix", "PSYCHOLOGY", "A ___ is a specialist who studies behavior and mental processes.", ["psychologist"], "Psychology → psychologist (osoba)."),
      wf("mix", "SCIENCE", "Psychologists prefer objective ___ methods.", ["scientific"], "Science → scientific."),
      { u: "mix", t: "tf", q: "The peripheral nervous system is made up of the somatic and the autonomic nervous systems.", a: true, x: "True." }
    ],

    sortDecks: [
      { id: "cns-pns", title: "CNS or PNS?", sub: "Ośrodkowy czy obwodowy układ nerwowy", cats: ["CNS", "PNS"],
        why: ["The brain and the spinal cord.", "Nerves carrying messages to and from the CNS."],
        items: [["brain", 0], ["spinal cord", 0], ["grey matter of the brain", 0], ["cerebellum", 0],
          ["cranial nerves", 1], ["spinal nerves", 1], ["somatic system", 1], ["autonomic system", 1], ["sympathetic division", 1], ["parasympathetic division", 1]] },
      { id: "noun-adj", title: "Noun or adjective?", sub: "Słowotwórstwo: która część mowy", cats: ["Noun", "Adjective"],
        why: ["Rzeczownik: -ness, -ment, -ance, -th, -ity, -ion.", "Przymiotnik: -al, -ic, -ous, -ful, -ed."],
        items: [["awareness", 0], ["involvement", 0], ["significance", 0], ["growth", 0], ["ability", 0], ["loss", 0], ["knowledge", 0],
          ["influential", 1], ["mysterious", 1], ["genetic", 1], ["powerful", 1], ["spinal", 1], ["magnetic", 1], ["damaged", 1]] },
      { id: "now-before", title: "be doing or have been doing?", sub: "Continuous vs perfect continuous infinitive", cats: ["be + -ing (now)", "have been + -ing (before)"],
        why: ["Czynność trwa w tym samym czasie.", "Czynność trwała wcześniej."],
        items: [["He could ___ lunch right now. (have)", 0], ["She seems to ___ about something. (dream)", 0], ["You must ___! (joke, now)", 0], ["I'd like to ___ in the sea right now. (swim)", 0],
          ["He should ___ in bed last night. (sleep)", 1], ["He must ___ for ages. (wait)", 1], ["I might ___ this time last year. (jog)", 1], ["They were thought to ___ for days. (prepare)", 1]] },
      { id: "freud-skinner", title: "Psychoanalysis or behaviorism?", sub: "Freud kontra Skinner", cats: ["Psychoanalysis", "Behaviorism"],
        why: ["Unconscious motives, talk therapy.", "Observable actions and conditioning."],
        items: [["free association", 0], ["the unconscious", 0], ["dreams as clues to inner conflicts", 0], ["id, ego, super-ego", 0], ["catharsis", 0],
          ["observable actions", 1], ["conditioning", 1], ["behavior shaped by rewards", 1], ["Skinner", 1]] }
    ],

    minimum: [
      ["Four “psych-” words", "<b>Psychology</b>: scientific study of behavior and mental processes. <b>Psychiatry</b>: branch of medicine. <b>Psychotherapy</b>: talking with a therapist. <b>Psychoanalysis</b>: unconscious motives (Freud)."],
      ["Word families", "apply – application – <b>applied</b>; behave – <b>behaviour</b>; conscious – <b>consciousness</b>; aware – <b>awareness</b>; treat – <b>treatment</b>; respond <b>to</b>; deal <b>with</b>; reflect <b>on</b>; pay attention <b>to</b>; <b>conduct / carry out</b> research."],
      ["History", "Psychology evolved out of <b>philosophy and biology</b>; psyche = soul/mind. <b>Wundt</b>, first lab, <b>Leipzig</b>; <b>structuralism</b> + <b>introspection</b> (too subjective). Schools: structuralism, functionalism, psychoanalysis, behaviorism (Skinner), humanism, cognitivism."],
      ["Freud", "People are <b>driven by the unconscious</b>. <b>Free association</b> → insight and <b>catharsis</b>. <b>Id</b> (child), <b>ego</b> (adult), <b>super-ego</b> (parent). <b>Defense mechanisms</b>: repress, denial, projection. Neo-Freudians: <b>Jung</b> (collective unconscious), <b>Horney</b> (women, social variables), <b>Adler</b> (social tensions)."],
      ["Freud and Dreams (key)", "founder, influential, attention, essentially, significance, awareness, knowledge, involvement, mysterious, evidence, undoubtedly."],
      ["Psychology today", "<b>Academic</b> (basic research, theory) vs <b>applied</b> (real world problems: forensic, ergonomics, I-O). Hypothesis → <b>empirically tested</b>. Methods: experiments, correlational, longitudinal studies."],
      ["Nervous system", "<b>CNS</b> = brain + spinal cord. <b>PNS</b> = <b>somatic</b> (senses, muscles, voluntary) + <b>autonomic</b> (heart rate, digestion) = <b>sympathetic</b> (active) + <b>parasympathetic</b> (rest). <b>Grey matter</b>: cell bodies, processes; <b>white matter</b>: axons, carries impulses."],
      ["Brain", "<b>Cerebrum</b> (higher functions), <b>cerebellum</b> (movement, balance), <b>brainstem</b> = midbrain + pons + medulla. Amygdala: emotions; hippocampus: long-term memory; thalamus: sensory relay; hypothalamus: balance (hunger, temperature); olfactory bulbs: smell; pons: sleep; medulla: heart rate, breathing."],
      ["Brain Disorders (key)", "illnesses, replace, damaged, ability, clearly, partly, growth, removed, spinal, unborn, genetic, movements, loss, activity, magnetic, powerful."],
      ["TED: Brain control", "disorder, DIY, spinal cord, free will, a good sport. Phrasal verbs: <b>stick out, roll up, pick up, turn out, hook up, bring on</b>. Facts: 1 in 5 (20%), zero cures, 80 billion neurons."],
      ["Grammar", "<b>(to) be + -ing</b> = now: <i>He could be having lunch.</i> <b>(to) have been + -ing</b> = before: <i>He must have been waiting.</i> No “to” after modals; “to” after seem, would like, want, pretend."]
    ],

    deep: [
      { q: "Can AI replace human psychologists?",
        a: "Ostatnie pytanie z listy „Areas of Psychology Questions”. Warto mieć gotowe słownictwo: benefits (availability, lower cost, no waiting lists, anonymity) and risks (lack of empathy, biased data, privacy, no responsibility in a crisis).",
        link: "Użyj: facilitate, treatment, biased, approach, deal with, mental state." },
      { q: "Why might one school of thought limit psychology?",
        a: "Pytanie 19: each perspective has contributed to our understanding, so strict adherence to one school ignores what the others explain. Psychology is an integrative science.",
        link: "Przykład: behaviorism ignores the unconscious; psychoanalysis lacks hard evidence." },
      { q: "“God may forgive your sins, but your nervous system won't.”",
        a: "Cytat Korzybskiego z rozgrzewki. Możliwa interpretacja po angielsku: what we do to our body and mind (stress, lack of sleep, unhealthy habits) leaves lasting traces in the nervous system.",
        link: "Słownictwo: deal with stress, serotonin, healthy diet, exercise." }
    ],

    talk: [
      { q: "What is psychology? How is it different from psychiatry, psychotherapy and psychoanalysis?",
        a: "<p><b>Psychology</b> is the scientific study of behavior and mental processes. <b>Psychiatry</b> is a branch of medicine focused on diagnosing and treating mental disorders. <b>Psychotherapy</b> is a method of treatment involving talking through problems with a therapist. <b>Psychoanalysis</b> is a therapeutic approach that explores unconscious motives and early experiences.</p>",
        keys: ["behavior and mental processes", "branch of medicine", "talking therapy", "unconscious motives"], src: "Vocabulary Class 1" },
      { q: "Describe the role of Wilhelm Wundt and the significance of structuralism.",
        a: "<p>Psychology was truly born when Wundt established the first psychology lab in Leipzig, Germany. His research used <b>structuralism</b>, which described the structures that compose the mind. It relied on <b>introspection</b>, a highly subjective process, which was its main weakness. Still, it made psychology a separate science.</p>",
        keys: ["first lab, Leipzig", "structures of the mind", "introspection", "subjective"], src: "Areas of Psychology, pyt. 3–4" },
      { q: "What would drive people according to Freud? How could they find an emotional release?",
        a: "<p>According to Freud, people are driven by <b>unconscious thoughts, desires and memories</b>. If these are brought into consciousness and analyzed, for example through <b>free association</b>, a person may gain insight and experience <b>catharsis</b>, an emotional release from psychological distress.</p>",
        keys: ["unconscious thoughts, desires, memories", "free association", "insight", "catharsis"], src: "Freud Psychoanalysis, pyt. 1–2" },
      { q: "What roles do the id, ego and super-ego have in our lives?",
        a: "<p>The <b>id</b> focuses on primitive desires such as hunger; it is much like a child. The <b>super-ego</b> focuses on following norms and society's moral codes, like a parental figure. The <b>ego</b> mediates between the id, the super-ego and the world: it is you as an adult.</p>",
        keys: ["id: primitive desires", "super-ego: moral codes", "ego: mediates"], src: "Freud Psychoanalysis, pyt. 3" },
      { q: "Where did the Neo-Freudians break from Freud and why?",
        a: "<p><b>Adler</b> agreed childhood matters but stated that social, not sexual, tensions create the impact. <b>Horney</b> said Freud ignored females and social variables. <b>Jung</b> added the collective unconscious, bringing genetics into personality development.</p>",
        keys: ["Adler: social tensions", "Horney: females, social variables", "Jung: collective unconscious"], src: "Freud Psychoanalysis, pyt. 4" },
      { q: "What is the distinction between academic and applied psychology? Give an example of an applied area.",
        a: "<p><b>Academic psychology</b> studies sub-topics such as personality, social and developmental psychology and conducts basic research to expand theoretical knowledge. <b>Applied psychology</b> uses psychological principles to solve real world problems. Example: <b>forensic psychology</b>, the intersection of psychology and the law, where specialists provide testimony or recommendations in legal cases.</p>",
        keys: ["basic research, theory", "real world problems", "forensic / ergonomics / I-O"], src: "Areas of Psychology, pyt. 9–10" },
      { q: "Describe the arrangement of the nervous system.",
        a: "<p>The nervous system has two divisions. The <b>central nervous system</b> consists of the brain and the spinal cord. The <b>peripheral nervous system</b> carries messages to and from the CNS and is made up of the <b>somatic</b> system (sensory information and voluntary movement) and the <b>autonomic</b> system (heart rate, digestion). The autonomic system has a <b>sympathetic</b> division for active states and a <b>parasympathetic</b> division for rest and digestion.</p>",
        keys: ["CNS: brain + spinal cord", "PNS: somatic + autonomic", "sympathetic / parasympathetic"], src: "Nervous System worksheet" },
      { q: "What is the difference between grey matter and white matter? What does the spinal cord do?",
        a: "<p><b>Grey matter</b> contains the cell bodies of neurons and processes information. <b>White matter</b> consists of axons and carries impulses to and from the grey matter. The <b>spinal cord</b> carries impulses between the brain and the body and controls many reflexes.</p>",
        keys: ["cell bodies, processes", "axons, carries impulses", "impulses + reflexes"], src: "Nervous System, Exercise 3" },
      { q: "Describe the main parts of the brain and their functions.",
        a: "<p>The brain comprises the <b>cerebrum</b>, the <b>cerebellum</b> and the <b>brainstem</b>. The cerebrum controls higher mental functions and is divided into two hemispheres joined by the corpus callosum and into four lobes. The cerebellum coordinates movement, posture and balance. The brainstem (midbrain, pons, medulla oblongata) regulates basic functions such as sleep, heart rate and respiration. Inside, the amygdala controls emotions and the hippocampus forms long-term memory.</p>",
        keys: ["cerebrum, cerebellum, brainstem", "hemispheres, four lobes", "amygdala, hippocampus"], src: "The Brain" },
      { q: "Summarise Greg Gage's TED talk “How to control someone else's arm with your brain”.",
        a: "<p>Gage says neuroscience is not taught in schools because the equipment is complex and expensive, although one in five people will have a neurological disorder and there are zero cures. His company makes <b>DIY</b> neuroscience equipment. In the demonstration, electrodes pick up the signal from one volunteer's arm and send it to another person's ulnar nerve, so her brain moves his hand: he loses his <b>free will</b>.</p>",
        keys: ["expensive equipment", "1 in 5, zero cures", "DIY equipment", "electrodes, ulnar nerve", "free will"], src: "Brain Control (TED)" }
    ],

    table: {
      title: "Brain structures: function and Polish name",
      head: ["Structure", "Function", "Po polsku"],
      rows: [
        ["cerebrum", "higher mental functions", "kresomózgowie"],
        ["cerebellum", "movement, posture, balance", "móżdżek"],
        ["amygdala", "emotions", "ciało migdałowate"],
        ["hippocampus", "long-term memory", "hipokamp"],
        ["thalamus", "relays sensory information", "wzgórze"],
        ["hypothalamus", "temperature, hunger, thirst, sleep", "podwzgórze"],
        ["olfactory bulbs", "sense of smell", "opuszki węchowe"],
        ["midbrain", "vision and hearing", "śródmózgowie"],
        ["pons", "sleep-wake cycles", "most"],
        ["medulla oblongata", "heart rate, blood pressure, respiration", "rdzeń przedłużony"],
        ["corpus callosum", "joins the hemispheres", "ciało modzelowate"]
      ]
    },

    notes: [
      { id: "s0", title: "Co jest w tym module", html:
        "<div class='plain'><p>Wszystko z dotychczasowych zajęć lektoratu w jednym miejscu: słówka, teksty, klucze do zadań ze słowotwórstwa i gramatyka. Pytania są po angielsku, wyjaśnienia po polsku.</p></div>" +
        "<ol><li><b>Słownictwo</b>: Vocabulary Class 1 + słowniczek EN–PL (fiszki i pary działają jak tłumaczenie w obie strony).</li>" +
        "<li><b>Teksty</b>: How old is psychology?, Areas of Psychology, Freud, Nervous System, The Brain, Brain Disorders.</li>" +
        "<li><b>Word formation</b>: Freud and Dreams, Brain Disorders (wpisujesz formę wyrazu).</li>" +
        "<li><b>Listening</b>: TED „Brain control”: słownictwo i phrasal verbs.</li>" +
        "<li><b>Grammar</b>: continuous i perfect continuous infinitive.</li></ol>" },
      { id: "s1", n: 1, title: "Core vocabulary (Class 1)", html:
        "<div class='plain'><p>Lista słów z pierwszych zajęć. Uważaj na cztery podobne: psychology, psychiatry, psychotherapy, psychoanalysis.</p></div>" +
        "<p class='srcline'>VOCABULARY CLASS 1 + słowniczek</p>" +
        "<div class='tscroll'><table><thead><tr><th>English</th><th>Polski</th></tr></thead><tbody>" +
        "<tr><td>science, scientific, research</td><td>nauka, naukowy, badania</td></tr>" +
        "<tr><td>brain, mind, mental state, human</td><td>mózg, umysł, stan psychiczny, człowiek</td></tr>" +
        "<tr><td>to emphasize</td><td>podkreślać</td></tr>" +
        "<tr><td>to behave, behaviour, behaviourism</td><td>zachowywać się, zachowanie, behawioryzm</td></tr>" +
        "<tr><td>awareness, consciousness</td><td>świadomość</td></tr>" +
        "<tr><td>to be conscious (of) / unconscious</td><td>być świadomym (czegoś) / nieświadomy</td></tr>" +
        "<tr><td>to apply, application, applied</td><td>stosować, zastosowanie, stosowany</td></tr>" +
        "<tr><td>to approach, approach</td><td>podchodzić (do problemu), podejście</td></tr>" +
        "<tr><td>to observe, thinking, perceiving, dreaming</td><td>obserwować, myślenie, postrzeganie, śnienie</td></tr>" +
        "<tr><td>to deal (with)</td><td>radzić sobie z / zajmować się</td></tr>" +
        "<tr><td>environment</td><td>środowisko / otoczenie</td></tr>" +
        "<tr><td>to experience, experience, experienced</td><td>doświadczać, doświadczenie, doświadczony</td></tr>" +
        "<tr><td>to treat, treatment</td><td>leczyć / traktować, leczenie</td></tr>" +
        "<tr><td>response, to respond</td><td>reakcja, reagować</td></tr>" +
        "<tr><td>conduct research, carry out</td><td>prowadzić badania, przeprowadzać</td></tr>" +
        "<tr><td>facilitate, contribute to</td><td>ułatwiać, wnosić wkład w</td></tr>" +
        "<tr><td>biased, attitude, field</td><td>stronniczy, postawa, dziedzina</td></tr>" +
        "<tr><td>conditioning, conformity, crowd psychology</td><td>warunkowanie, konformizm, psychologia tłumu</td></tr>" +
        "<tr><td>stimulus / stimuli</td><td>bodziec / bodźce</td></tr></tbody></table></div>" +
        "<ul><li><b>Definicje (Exercise 1)</b>: psychology – the scientific study of behavior and mental processes; psychiatry – a branch of medicine; psychotherapy – talking through problems with a therapist; psychoanalysis – unconscious motives and early experiences; behaviorism – observable actions and conditioning; consciousness – awareness of internal and external existence; personality – characteristic patterns of thinking, feeling, behaving.</li>" +
        "<li><b>Kolokacje (Exercise 4)</b>: deal <mark>with</mark> memories, find <mark>out</mark> patterns, pay attention <mark>to</mark>, reflect <mark>on</mark> experiences.</li></ul>" },
      { id: "s2", n: 2, title: "How old is psychology? Schools of thought", html:
        "<div class='plain'><p>Psychologia wyrosła z filozofii i biologii. Osobną nauką stała się, gdy Wundt otworzył laboratorium w Lipsku.</p></div>" +
        "<p class='srcline'>Worksheet do filmu + „Areas of Psychology”</p>" +
        "<ul><li>Psychology: both an <b>applied and academic</b> field that studies the human mind and behavior. From Greek <b>psyche</b>: “soul” or “mind”. Evolved out of <b>philosophy and biology</b> (Aristotle, Socrates).</li>" +
        "<li><b>Wilhelm Wundt</b>: first psychology lab, <b>Leipzig</b>, Germany. <b>Structuralism</b>: describing the structures that compose the mind; relied on <b>introspection</b>, a highly subjective process.</li>" +
        "<li>Schools of thought: <b>structuralism, functionalism, psychoanalysis, behaviorism, humanism, cognitivism</b>. Each has contributed to our understanding.</li></ul>" +
        "<div class='tscroll'><table><thead><tr><th>Term</th><th>Definition (worksheet)</th></tr></thead><tbody>" +
        "<tr><td>psychoanalysis</td><td>a theory and therapy based on unconscious motives and talk therapy</td></tr>" +
        "<tr><td>behaviorism</td><td>focuses on observable actions and conditioning (Skinner)</td></tr>" +
        "<tr><td>introspection</td><td>a method of self-observation of one's thoughts and feelings</td></tr>" +
        "<tr><td>projection</td><td>attributing one's own feelings to others</td></tr>" +
        "<tr><td>unconscious</td><td>mental processes we are unaware of that influence behavior</td></tr>" +
        "<tr><td>structuralism</td><td>attempts to break down mental processes into basic components</td></tr>" +
        "<tr><td>functionalism</td><td>focuses on the purpose of mental processes and behavior</td></tr></tbody></table></div>" +
        "<p><b>Klucz (multiple choice)</b>: 1b behavior and mental processes · 2b free association · 3b introspection, too subjective · 4b Skinner.</p>" },
      { id: "s3", n: 3, title: "Freud & psychoanalysis", html:
        "<div class='plain'><p>Freud: rządzi nami nieświadomość. Terapia ma wydobyć ukryte treści na światło dzienne.</p></div>" +
        "<p class='srcline'>„Freud Psychoanalysis”</p>" +
        "<ul><li>People are <b>driven by unconscious thoughts, desires, and memories</b>. Brought into consciousness → new <b>insight</b> + <b>catharsis</b> (an emotional release from psychological distress).</li>" +
        "<li>Personality develops during <b>early childhood</b>. Technique: <b>free association</b> (relax and talk about anything that comes to mind).</li>" +
        "<li><b>Psychodynamic perspective</b>: more moderate; kept <b>defense mechanisms</b> (reducing anxiety by distorting reality without realizing it: <b>repress</b> a bad memory, be <b>in denial</b>).</li>" +
        "<li><b>Id</b>: primitive desires (a child). <b>Super-ego</b>: norms and moral codes (a parental figure). <b>Ego</b>: mediates between them and the world (you, as an adult).</li>" +
        "<li><b>Neo-Freudians</b>: <b>Adler</b> – social tensions, not sexual ones; <b>Horney</b> – Freud ignored females and social variables; <b>Jung</b> – collective unconscious (genetics).</li>" +
        "<li>Levels: conscious, preconscious, unconscious (rysunek góry lodowej).</li></ul>" },
      { id: "s4", n: 4, title: "Freud and Dreams: word formation (klucz)", html:
        "<div class='plain'><p>Zadanie typu Use of English: z wyrazu w nawiasie tworzysz właściwą formę. Najpierw ustal, jaka część mowy pasuje do luki.</p></div>" +
        "<p class='srcline'>„Freud and Dreams” (liveworksheets)</p>" +
        "<div class='tscroll'><table><thead><tr><th>Nr</th><th>Given</th><th>Answer</th></tr></thead><tbody>" +
        "<tr><td>0</td><td>FOUND</td><td>founder</td></tr><tr><td>28</td><td>INFLUENCE</td><td>influential</td></tr>" +
        "<tr><td>29</td><td>ATTEND</td><td>attention</td></tr><tr><td>30</td><td>ESSENTIAL</td><td>essentially</td></tr>" +
        "<tr><td>31</td><td>SIGNIFY</td><td>significance</td></tr><tr><td>32</td><td>AWARE</td><td>awareness</td></tr>" +
        "<tr><td>33</td><td>KNOW</td><td>knowledge</td></tr><tr><td>34</td><td>INVOLVE</td><td>involvement</td></tr>" +
        "<tr><td>35</td><td>MYSTERY</td><td>mysterious</td></tr><tr><td>36</td><td>EVIDENT</td><td>evidence</td></tr>" +
        "<tr><td>37</td><td>DOUBT</td><td>undoubtedly</td></tr></tbody></table></div>" +
        "<aside class='extra'><p>Klucz ułożony na podstawie treści zadania (w materiałach nie było gotowych odpowiedzi). Wszystkie formy są standardowe dla tego tekstu.</p></aside>" },
      { id: "s5", n: 5, title: "Psychology today & areas", html:
        "<div class='plain'><p>Dziś psychologia używa obiektywnych metod. Dzieli się na akademicką (teoria) i stosowaną (praktyka), a dalej na kilkanaście działów.</p></div>" +
        "<p class='srcline'>„Areas of Psychology”</p>" +
        "<ul><li>Studies: highly structured, begin with a <b>hypothesis</b> that is <b>empirically tested</b>. Aim: understand, explain, predict behavior.</li>" +
        "<li><b>Academic psychology</b>: sub-topics (personality, social, developmental); <b>basic research</b>. <b>Applied psychology</b>: real world problems (forensic psychology, ergonomics, industrial-organizational).</li>" +
        "<li>Methods: <b>experiments, correlational studies, longitudinal studies</b>.</li></ul>" +
        "<div class='tscroll'><table><thead><tr><th>Area</th><th>Focus</th><th>Po polsku</th></tr></thead><tbody>" +
        "<tr><td>abnormal</td><td>psychopathology and abnormal behavior</td><td>psychologia zaburzeń</td></tr>" +
        "<tr><td>biopsychology</td><td>brain and neurotransmitters</td><td>biopsychologia</td></tr>" +
        "<tr><td>clinical</td><td>assessment and treatment of mental illness</td><td>kliniczna</td></tr>" +
        "<tr><td>cognitive</td><td>think, perceive, remember, learn</td><td>poznawcza</td></tr>" +
        "<tr><td>comparative</td><td>animal behavior</td><td>porównawcza</td></tr>" +
        "<tr><td>counseling</td><td>therapeutic treatments to clients</td><td>doradcza / poradnictwo</td></tr>" +
        "<tr><td>developmental</td><td>development throughout the lifespan</td><td>rozwojowa</td></tr>" +
        "<tr><td>educational</td><td>how people learn</td><td>edukacyjna</td></tr>" +
        "<tr><td>experimental</td><td>scientific methods to research mind and behavior</td><td>eksperymentalna</td></tr>" +
        "<tr><td>forensic</td><td>psychology and the law</td><td>sądowa</td></tr>" +
        "<tr><td>health</td><td>promoting health, coping with illness</td><td>zdrowia</td></tr>" +
        "<tr><td>human factors</td><td>ergonomics, workplace safety, product design</td><td>inżynieryjna / ergonomia</td></tr>" +
        "<tr><td>industrial-organizational</td><td>productivity, well-being of employees</td><td>pracy i organizacji</td></tr>" +
        "<tr><td>personality</td><td>patterns that make a person unique</td><td>osobowości</td></tr>" +
        "<tr><td>school</td><td>children's emotional, social, academic issues</td><td>szkolna</td></tr>" +
        "<tr><td>social</td><td>group behavior, conformity, prejudice</td><td>społeczna</td></tr>" +
        "<tr><td>sports</td><td>athletic performance, motivation</td><td>sportu</td></tr></tbody></table></div>" +
        "<p><b>Courses</b>: General Psychology, History of Psychology, <b>Statistics</b> (a must; 85% of graduate programs require it), Experimental, Physiological, Cognitive, Abnormal, Developmental, Social, Personality Psychology.</p>" },
      { id: "s6", n: 6, title: "Arrangement of the nervous system", html:
        "<div class='plain'><p>Układ nerwowy = ośrodkowy (mózg i rdzeń) + obwodowy (nerwy). Obwodowy dzieli się na somatyczny (wola) i autonomiczny (automat).</p></div>" +
        "<p class='srcline'>Worksheet „Arrangement of the Nervous System”</p>" +
        "<!--fig:ns-->" +
        "<ul><li><b>CNS</b>: the brain (within the skull, 1.3–1.4 kg, billions of neurons) and the spinal cord (extends from the brain down the backbone).</li>" +
        "<li><b>Grey matter</b> processes information (cell bodies). <b>White matter</b> carries impulses (axons).</li>" +
        "<li>The brain controls breathing, swallowing, perception, memory and voluntary movement. The <b>spinal cord</b>: carries impulses between brain and body + controls many reflexes.</li>" +
        "<li><b>PNS</b>: <b>cranial nerves</b> (brain → ears, eyes, face), <b>spinal nerves</b> (spinal cord → the rest of the body).</li>" +
        "<li><b>Somatic</b>: sensory information to the CNS; motor fibres move the muscles. <b>Autonomic</b>: heart rate, digestion; <b>sympathetic</b> (excited, active states) and <b>parasympathetic</b> (rest and digestion).</li>" +
        "<li>Healthy nervous system: be active, eat well, keep busy and happy; exercise releases <b>serotonin</b>.</li></ul>" +
        "<p><b>Klucz T/F/NS</b>: 1T · 2F (1.3–1.4 kg) · 3NS · 4T · 5T · 6T · 7F (cranial nerves) · 8NS · 9T · 10F (somatic) · 11T · 12F (autonomic) · 13T.</p>" +
        "<p><b>Word partnerships</b>: internal organ, voluntary movement, to carry information, protective bone, to transmit (an) impulse, temperature variations, spinal cord, to control reflexes, heart rate, to regulate breathing, nervous system, unconscious behaviour.</p>" +
        "<p><b>Translate</b>: nervous system – układ nerwowy; cell body – ciało komórki; white matter – istota biała; grey matter – istota szara; impulse – impuls; reflex – odruch; skull – czaszka; backbone – kręgosłup; spinal cord – rdzeń kręgowy; voluntary movement – ruch dowolny; internal organ – narząd wewnętrzny; heart rate – tętno; digestion – trawienie; circulation – krążenie.</p>" },
      { id: "s7", n: 7, title: "The brain", html:
        "<div class='plain'><p>Trzy główne części: cerebrum, cerebellum, brainstem. Każda struktura ma „swoją” funkcję i to o nią pytają zadania z przypadkami.</p></div>" +
        "<p class='srcline'>„Psychology Vocabulary in Use”, rozdz. 1</p>" +
        "<ul><li>The brain: within the skull; <b>cerebrum, cerebellum, brainstem</b>. Two classes of cells: <b>glial cells</b> (supporting) and <b>neurons</b>, connected by <b>synapses</b> into <b>neural networks</b>.</li>" +
        "<li><b>Cerebrum</b>: cerebral cortex (grey matter) + subcortical structures (amygdala, hippocampus, thalamus, hypothalamus, olfactory bulbs). Two <b>hemispheres</b> joined by the <b>corpus callosum</b>; four lobes: <b>frontal, parietal, occipital, temporal</b>. Left hemisphere controls the right side of the body.</li>" +
        "<li><b>Brainstem</b>: midbrain, pons, medulla oblongata. Evolution: brainstem and cerebellum first, <b>limbic system</b> next, cerebral cortex last.</li>" +
        "<li>2% of body weight, about 20% of energy.</li>" +
        "<li>Imaging: <b>CT</b> and <b>MRI</b> for structure; <b>PET</b> and <b>fMRI</b> for activity. Earlier: only a post-mortem.</li></ul>" +
        "<!--fig:brain-->" +
        "<p><b>Klucz Ex. 1</b>: 1F · 2F · 3F · 4T · 5T · 6T · 7F · 8F. <b>Ex. 2</b>: controls/coordinates · Located · formed · transmitting · processes · consumes. <b>Ex. 3</b>: 1c amygdala · 2b hippocampus · 3b cerebellum · 4a olfactory bulb · 5c medulla oblongata · 6d brainstem · 7a hypothalamus. <b>Ex. 4</b> (Padgett): head · traumatic · concussion · hemisphere · cortex · savant.</p>" },
      { id: "s8", n: 8, title: "Brain disorders: word formation (klucz)", html:
        "<div class='plain'><p>Tekst o chorobach mózgu z lukami. Poniżej słówka i komplet odpowiedzi.</p></div>" +
        "<p class='srcline'>„Brain Disorders”</p>" +
        "<ul><li><b>Stroke</b> (udar): brain cells do not get enough oxygen; causes: high blood pressure, harder arteries. <b>Brain tumour</b> (guz): rapid growth of cells. <b>Meningitis</b> (zapalenie opon mózgowych): membranes covering the brain and spinal cord. <b>Encephalitis</b>: zapalenie mózgu.</li>" +
        "<li><b>Down's syndrome</b>: an extra chromosome. <b>Huntington's disease</b>: middle age, jerky movements. <b>Alzheimer's disease</b>: after 60, loss of memory.</li>" +
        "<li><b>EEG</b> records activity; <b>computed tomography</b> uses X-rays; <b>MRI</b> uses powerful magnets.</li></ul>" +
        "<div class='tscroll'><table><thead><tr><th>Nr</th><th>Given</th><th>Answer</th></tr></thead><tbody>" +
        "<tr><td>1</td><td>ILL</td><td>illnesses</td></tr><tr><td>2</td><td>PLACE</td><td>replace</td></tr><tr><td>3</td><td>DAMAGE</td><td>damaged</td></tr>" +
        "<tr><td>4</td><td>ABLE</td><td>ability</td></tr><tr><td>5</td><td>CLEAR</td><td>clearly</td></tr><tr><td>6</td><td>PART</td><td>partly / partially</td></tr>" +
        "<tr><td>7</td><td>GROW</td><td>growth</td></tr><tr><td>8</td><td>MOVE</td><td>removed</td></tr><tr><td>9</td><td>SPINE</td><td>spinal</td></tr>" +
        "<tr><td>10</td><td>BORN</td><td>unborn</td></tr><tr><td>11</td><td>GENE</td><td>genetic</td></tr><tr><td>12</td><td>MOVE</td><td>movements</td></tr>" +
        "<tr><td>13</td><td>LOSE</td><td>loss</td></tr><tr><td>14</td><td>ACT</td><td>activity</td></tr><tr><td>15</td><td>MAGNET</td><td>Magnetic</td></tr><tr><td>16</td><td>POWER</td><td>powerful</td></tr></tbody></table></div>" +
        "<aside class='extra'><p>Klucz ułożony na podstawie treści zadania (w materiałach nie było gotowych odpowiedzi).</p></aside>" },
      { id: "s9", n: 9, title: "Brain control (TED, Greg Gage)", html:
        "<div class='plain'><p>Nagranie o tym, jak sygnałem z mózgu jednej osoby poruszyć ręką drugiej. Na kolokwium: słówka, phrasal verbs i fakty z T/F.</p></div>" +
        "<p class='srcline'>Linguahouse „Brain Control” + transkrypt</p>" +
        "<ul><li><b>Vocabulary</b>: a disorder – an illness; DIY – work you do yourself; a spinal cord – the set of nerves inside the spine; free will – doing something because you want to; a good sport – a person who plays fair and stays nice.</li>" +
        "<li><b>T/F</b>: 1T (expensive equipment) · 2F (one out of five = 20%) · 3F (zero cures) · 4T.</li>" +
        "<li><b>Facts</b>: six and a half years as a graduate student; about 80 billion neurons; company Backyard Brains (Greg Gage, Tim Marzullo); signal: motor cortex → spinal cord → lower motor neuron → muscles; ulnar nerve; human-to-human interface.</li></ul>" +
        "<div class='tscroll'><table><thead><tr><th>Phrasal verb</th><th>Definition</th><th>W nagraniu</th></tr></thead><tbody>" +
        "<tr><td>stick out</td><td>push or stretch something forwards</td><td>stick out your arm for science</td></tr>" +
        "<tr><td>roll up</td><td>fold several times to make shorter</td><td>roll up your sleeve</td></tr>" +
        "<tr><td>pick up</td><td>receive an electronic signal</td><td>picked up by these electrodes</td></tr>" +
        "<tr><td>turn out</td><td>develop in a particular way</td><td>it turns out that there is a nerve</td></tr>" +
        "<tr><td>hook up</td><td>connect equipment</td><td>I just need to hook you up</td></tr>" +
        "<tr><td>bring on</td><td>cause something to appear</td><td>bring on the neuro-revolution</td></tr></tbody></table></div>" },
      { id: "s10", n: 10, title: "Grammar: continuous infinitive", html:
        "<div class='plain'><p>Dwie formy. „Be doing” – coś dzieje się w tej samej chwili. „Have been doing” – coś działo się wcześniej.</p></div>" +
        "<p class='srcline'>Linguahouse „Brain Control”, Grammar + Practice</p>" +
        "<ul><li><b>Continuous infinitive</b>: <mark>to be + -ing</mark>. A continuing action after a verb or auxiliary followed by the infinitive. <i>What we should be doing… / They may be thinking… / what your brain is going to be doing.</i></li>" +
        "<li>After <b>modal verbs</b> “to” is omitted: must be joking, could be having.</li>" +
        "<li><b>Perfect continuous infinitive</b>: <mark>to have been + -ing</mark>. An action in progress before the preceding verb. <i>I'm glad to have been living in Barcelona. / He must have been waiting for ages. / Soon, he'll have been running for four hours. / The organisers were thought to have been preparing for days.</i></li></ul>" +
        "<p><b>Klucz Practice</b>: 1 should <b>have been sleeping</b> · 2 must <b>be joking</b> · 3 must <b>have been joking</b> · 4 seems <b>to be dreaming</b> · 5 might <b>have been jogging</b> · 6 could <b>be having</b> · 7 I'd like <b>to be swimming</b> · 8 wouldn't want <b>to be travelling</b> · 9 pretended <b>to be working</b>.</p>" }
    ]
  };
})());
