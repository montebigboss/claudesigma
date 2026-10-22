/* Ćwiczenia: Podstawy psychologii i historii myśli psychologicznej (mgr Natalia Wójcicka).
 * Zajęcia 1: Prowadzenie badań w psychologii.
 *
 * Źródło: prezentacja z zajęć (11 slajdów). Przykłady z książki R. Hocka „40 prac badawczych,
 * które zmieniły oblicze psychologii” (rozdz. 3–4) służą do ćwiczenia pojęć metodologicznych.
 *
 *   "S" prezentacja z zajęć albo lektura (domyślne)
 *   "D" dopowiedzenie spoza materiałów (★). Kartkówka próbna je pomija.
 */
Wykuj.registerModule({
  id: "wj-z1",
  kind: "reading",
  course: { id: "wojcicka", name: "mgr Natalia Wójcicka", short: "Ćw. Wójcicka", groups: "Podstawy psychologii i historii myśli psychologicznej", theme: "rose", icon: "bulb", section: "cw" },
  shelf: "Zajęcia i lektury",
  nouns: { gen: "zajęć", nom: "zajęcia", all: "całych zajęć" },
  notesClass: "zaj",
  ghost: ["Zajęcia", "Kolejne zajęcia", "Wrzuć prezentację i rozdział z Hocka, a pojawią się tu streszczenie i ćwiczenia."],
  number: 1,
  label: "Zajęcia 1",
  title: "Jak bada się psychologię",
  byline: "Prezentacja „Prowadzenie badań w psychologii”",
  sources: ["N. Wójcicka, „Prowadzenie badań w psychologii” (prezentacja z zajęć, 2026/27)"],
  term: "Ćwiczenia · zajęcia 1",
  passing: null,
  passRatio: 0.6,
  examNote: "Forma sprawdzania wiedzy na ćwiczeniach nie jest znana. Próg 60% to punkt odniesienia.",
  minimumTitle: "Najważniejsze w 5 minut",
  sourceNames: { S: "prezentacja z zajęć", D: "★ dopowiedzenie spoza materiałów" },

  sets: {
    badanie: { label: "Jakie to badanie?", items: ["Korelacyjne", "Eksperymentalne", "Jakościowe"],
      why: ["badacz tylko mierzy zmienne i sprawdza, czy są związane; nie manipuluje, więc nie ustali przyczyny",
            "badacz celowo zmienia zmienną niezależną i mierzy jej wpływ na zależną, kontrolując inne czynniki",
            "badacz zbiera doświadczenia, znaczenia i kontekst, np. w wywiadach, a nie liczby"] },
    zmienna: { label: "Która to zmienna?", items: ["Zmienna niezależna", "Zmienna zależna", "Zmienna kontrolna", "Czynnik zakłócający"],
      why: ["zmienna, której wartości badacz zmienia, żeby zobaczyć, co się stanie z wynikiem",
            "wynik, który mierzymy: to jej związek z innymi zmiennymi badamy",
            "czynnik utrzymywany na stałym poziomie lub monitorowany, żeby nie wpłynął na wynik",
            "czynnik, który nieumyślnie wpływa i na zmienną niezależną, i na zależną, zniekształcając wyniki"] },
    galaz: { label: "Która gałąź psychologii?", items: ["Kliniczna", "Rozwojowa", "Społeczna", "Poznawcza", "Psychologia pracy i organizacji", "Sądowa"],
      why: ["zaburzenia psychiczne, diagnoza i pomoc",
            "zmiany w ciągu życia człowieka",
            "jak inni ludzie wpływają na nasze myślenie i zachowanie",
            "uwaga, pamięć, myślenie, rozwiązywanie problemów",
            "człowiek w pracy: dobór, motywacja, organizacja",
            "psychologia w wymiarze sprawiedliwości, np. zeznania świadków"] }
  },

  units: [
    { id: "przedmiot", title: "Czym zajmuje się psychologia", sub: "Przedmiot i gałęzie psychologii", icon: "eye" },
    { id: "mapa", title: "Mapa przedmiotu", sub: "Od metodologii do etyki psychologa", icon: "path" },
    { id: "podejscie", title: "Idiograficzne czy nomotetyczne", sub: "Metodologia i dwa podejścia (Allport)", icon: "user" },
    { id: "pytania", title: "Pytanie i hipoteza", sub: "Co sprawdzamy i czego oczekujemy", icon: "chat" },
    { id: "zmienne", title: "Zmienne i operacjonalizacja", sub: "Zależna, niezależna, wskaźniki", icon: "split", seq: true,
      teach: "<p><b>Zmienna</b> to cecha, która może przyjąć dwie lub więcej wartości (np. płeć, liczba godzin nauki, poziom stresu).</p>" +
        "<p>Najprostszy sposób, żeby nie pomylić: <b>niezależną</b> badacz <b>zmienia</b> (to „przyczyna” w eksperymencie), a <b>zależną mierzy</b> (to „wynik”, który od niej <i>zależy</i>).</p>" +
        "<p><b>Operacjonalizacja</b>: zamieniamy pojęcie z teorii (np. „stres”) na coś, co da się zmierzyć (np. wynik w skali stresu).</p>" },
    { id: "rodzaje", title: "Ilościowe i jakościowe", sub: "Liczby czy doświadczenia", icon: "pairs" },
    { id: "korelacja", title: "Korelacja czy eksperyment", sub: "Kiedy wolno mówić o przyczynie", icon: "target",
      teach: "<p><b>Badanie korelacyjne</b>: mierzymy dwie zmienne i patrzymy, czy idą w parze. Nikt niczego nie zmienia, więc <b>nie wiemy, co jest przyczyną</b>.</p>" +
        "<p><b>Eksperyment</b>: badacz <b>celowo zmienia</b> zmienną niezależną i <b>kontroluje</b> inne czynniki. Dobrze zaplanowany eksperyment pozwala wnioskować o przyczynie i skutku.</p>" },
    { id: "zewnetrzne", title: "Zmienne zewnętrzne", sub: "Kontrolne i czynniki zakłócające (szum)", icon: "wall" },
    { id: "mix", title: "Rozpoznaj w słynnych badaniach", sub: "Metodologia na przykładach z Hocka", icon: "dice" },
    { id: "boss", title: "Kartkówka próbna", sub: "Wszystko z zajęć 1, 15 pytań", icon: "crown", boss: true }
  ],

  concepts: [
    { id: "przedmiot", u: "przedmiot", term: "Przedmiot psychologii",
      plain: "Psychologia opisuje i wyjaśnia zachowanie człowieka w szerokim sensie: od myśli i uczuć w środku po to, co widać na zewnątrz.",
      def: "Opisanie i wyjaśnienie zachowania człowieka w szerokim jego rozumieniu, od wewnętrznych przeżyć (myśli, emocji, uczuć) po obserwowalne zachowanie świadome i/lub automatyczne (Brzeziński, 2019).",
      sh: "opisać i wyjaśnić zachowanie w szerokim sensie" },
    { id: "szeroko", u: "przedmiot", term: "Zachowanie w szerokim rozumieniu",
      plain: "Zachowanie to nie tylko ruchy ciała. Myśl, emocja czy odruch też się liczą.",
      def: "Obejmuje wewnętrzne przeżycia (myśli, emocje, uczucia) i obserwowalne zachowanie, zarówno świadome, jak i automatyczne.",
      sh: "przeżycia wewnętrzne + zachowanie obserwowalne" },
    { id: "galezie", u: "przedmiot", term: "Gałęzie psychologii",
      plain: "Psychologia dzieli się na wiele dziedzin, bo człowieka da się badać z wielu stron: w chorobie, w rozwoju, w grupie, w pracy, w sądzie.",
      def: "Wg Spielman i in. (2020) m.in.: kliniczna, poznawcza, rozwojowa, społeczna, biologiczna (biopsychologia), przemysłowa / pracy i organizacji, edukacyjna, zdrowia, sądowa, środowiskowa, neuropsychologia, sportu, zaburzeń, porównawcza.",
      sh: "14 dziedzin ze slajdu (Spielman i in., 2020)" },
    { id: "porownawcza", u: "przedmiot", s: "D", term: "Psychologia porównawcza",
      plain: "Porównuje zachowanie ludzi i zwierząt. Stąd w psychologii tyle badań na szczurach i gołębiach.",
      def: "Dział badający zachowanie różnych gatunków i porównujący je z zachowaniem człowieka.",
      sh: "porównuje ludzi i zwierzęta" },

    { id: "mapa", u: "mapa", term: "Mapa przedmiotu",
      plain: "Schemat kursu: w środku funkcjonowanie człowieka, dookoła cztery obszary, na górze metodologia, na dole etyka psychologa.",
      def: "Funkcjonowanie człowieka w centrum. Procesy psychiczne (uczenie się; psychologia poznawcza i inteligencja; spostrzeganie i świadomość; emocje i motywacja), rozwój i osobowość (psychologia rozwoju, osobowości, rozwój moralny), zdrowie i pomoc (zdrowie psychiczne, psychopatologia, psychoterapia), relacje i kultura (psychologia społeczna i kulturowa). Nad tym metodologia badań, pod tym etyka psychologa.",
      sh: "funkcjonowanie człowieka w centrum" },
    { id: "procesy", u: "mapa", term: "Procesy psychiczne",
      plain: "Pierwszy obszar mapy: jak się uczymy, myślimy, spostrzegamy i co nas porusza.",
      def: "Uczenie się; psychologia poznawcza i inteligencja; spostrzeganie i świadomość; emocje i motywacja.",
      sh: "uczenie, poznanie, spostrzeganie, emocje" },
    { id: "rozwoj", u: "mapa", term: "Rozwój i osobowość",
      plain: "Drugi obszar: jak się zmieniamy przez życie i czym się różnimy.",
      def: "Psychologia rozwoju, psychologia osobowości, rozwój moralny.",
      sh: "rozwój, osobowość, rozwój moralny" },
    { id: "zdrowie", u: "mapa", term: "Zdrowie i pomoc",
      plain: "Trzeci obszar: kiedy psychika choruje i jak pomóc.",
      def: "Zdrowie psychiczne, psychopatologia, psychoterapia.",
      sh: "zdrowie psychiczne, psychopatologia, terapia" },
    { id: "relacje", u: "mapa", term: "Relacje i kultura",
      plain: "Czwarty obszar: człowiek wśród innych ludzi.",
      def: "Psychologia społeczna i kulturowa.",
      sh: "psychologia społeczna i kulturowa" },
    { id: "etyka", u: "mapa", term: "Etyka psychologa",
      plain: "Rama dla całej mapy: każde badanie i każda pomoc muszą być etyczne.",
      def: "Na mapie przedmiotu etyka psychologa obejmuje wszystkie obszary (dolna rama schematu).",
      sh: "rama całej mapy" },

    { id: "metodologia", u: "podejscie", term: "Metodologia badań psychologicznych",
      plain: "Zasady, jak porządnie badać ludzi i jak uzasadnić, że to, co wiemy, jest prawdą.",
      def: "Zajmuje się zasadami prowadzenia badań i uzasadniania wiedzy naukowej o zachowaniu oraz procesach psychicznych (Brzeziński, 2019; Price i in., 2015).",
      sh: "zasady prowadzenia badań i uzasadniania wiedzy" },
    { id: "idiograficzne", u: "podejscie", term: "Podejście idiograficzne",
      plain: "Patrzymy na jednego człowieka i chcemy go zrozumieć w całej jego niepowtarzalności.",
      def: "Koncentracja na pojedynczej osobie; poznanie indywidualności i niepowtarzalności jednostki; szczegółowa analiza doświadczeń i kontekstu życia; opis i rozumienie konkretnego przypadku (Allport, 1937).",
      sh: "jedna osoba, jej niepowtarzalność" },
    { id: "nomotetyczne", u: "podejscie", term: "Podejście nomotetyczne",
      plain: "Patrzymy na wielu ludzi naraz i szukamy praw, które dotyczą wszystkich.",
      def: "Koncentracja na prawidłowościach wspólnych dla wielu osób; poszukiwanie ogólnych praw funkcjonowania człowieka; porównywanie osób i badanie zależności między zmiennymi; uogólnianie wyników i przewidywanie zachowania (Allport, 1937).",
      sh: "ogólne prawa dla wielu osób" },
    { id: "allport", u: "podejscie", s: "D", term: "Skąd te nazwy",
      plain: "Od greckich słów: idios znaczy „własny, osobny”, nomos znaczy „prawo”.",
      def: "Idios – własny, szczególny; nomos – prawo. Rozróżnienie wprowadził do psychologii Gordon Allport (1937), za filozofem W. Windelbandem.",
      sh: "idios – własny, nomos – prawo" },

    { id: "pytanie", u: "pytania", term: "Pytanie badawcze",
      plain: "To, czego chcemy się dowiedzieć. Ma być jasne i takie, żeby dane mogły na nie odpowiedzieć.",
      def: "Określa, czego chcemy się dowiedzieć w badaniu. Powinno być jasne, precyzyjne i możliwe do rozstrzygnięcia na podstawie danych. Może dotyczyć opisu zjawiska, różnic między grupami lub związku między zmiennymi (Price i in., 2015).",
      sh: "czego chcemy się dowiedzieć" },
    { id: "hipoteza", u: "pytania", term: "Hipoteza badawcza",
      plain: "Przewidywana odpowiedź na pytanie: zakładamy z góry, co wyjdzie, na podstawie teorii albo wcześniejszych badań.",
      def: "Przewidywana odpowiedź na pytanie badawcze, sformułowana na podstawie teorii lub wcześniejszych badań. Wskazuje oczekiwaną zależność lub różnicę i umożliwia sprawdzenie jej w badaniu.",
      sh: "przewidywana odpowiedź na pytanie" },
    { id: "eksploracyjne", u: "pytania", term: "Badania eksploracyjne",
      plain: "Badanie, w którym jeszcze nie wiemy, czego się spodziewać, więc zaczynamy od samych pytań, bez hipotez.",
      def: "Nie każde badanie wymaga hipotezy: w badaniach eksploracyjnych można rozpocząć od samych pytań badawczych.",
      sh: "same pytania, bez hipotezy" },

    { id: "zmienna", u: "zmienne", term: "Zmienna",
      plain: "Cecha, która u różnych ludzi albo w różnych sytuacjach może mieć różne wartości.",
      def: "Właściwość empiryczna (charakterystyka), która przyjmuje dwie lub więcej wartości (Bedyńska i Brzezicka, 2007).",
      sh: "właściwość o dwóch lub więcej wartościach" },
    { id: "zalezna", u: "zmienne", term: "Zmienna zależna",
      plain: "To, co mierzymy jako wynik. Sprawdzamy, czy zależy od czegoś innego.",
      def: "Jest przedmiotem badania; staramy się zidentyfikować jej związek z innymi zmiennymi w badaniu (Price i in., 2015).",
      sh: "wynik, który mierzymy" },
    { id: "niezalezna", u: "zmienne", term: "Zmienna niezależna",
      plain: "To, co badacz zmienia albo porównuje, żeby zobaczyć, czy zmieni się wynik.",
      def: "Badamy, w jaki sposób zmiany jej wartości przekładają się na wyniki zmiennej zależnej (Price i in., 2015).",
      sh: "jej zmiany przekładają się na wynik" },
    { id: "operacjonalizacja", u: "zmienne", term: "Operacjonalizacja",
      plain: "Zamiana pojęcia z teorii na coś mierzalnego. „Inteligencja” to dla badacza np. wynik w konkretnym teście.",
      def: "Poszukiwanie empirycznych odpowiedników (wskaźników) terminów teoretycznych.",
      sh: "szukanie wskaźników dla pojęć" },

    { id: "ilosciowe", u: "rodzaje", term: "Badania ilościowe",
      plain: "Wyniki w liczbach i statystyka. Przykład: czy wynik w skali stresu wiąże się z liczbą godzin nauki.",
      def: "Wyniki liczbowe i analiza statystyczna. Przykład ze slajdu: związek wyniku skali stresu z liczbą godzin nauki.",
      sh: "liczby i statystyka" },
    { id: "jakosciowe", u: "rodzaje", term: "Badania jakościowe",
      plain: "Słowa zamiast liczb: jak ludzie coś przeżywają i co to dla nich znaczy. Przykład: wywiady o pierwszej sesji.",
      def: "Doświadczenia, znaczenia i kontekst. Przykład ze slajdu: wywiady o przeżywaniu pierwszej sesji egzaminacyjnej.",
      sh: "doświadczenia, znaczenia, kontekst" },

    { id: "korelacyjne", u: "korelacja", term: "Badania korelacyjne",
      plain: "Mierzymy dwie rzeczy i patrzymy, czy idą w parze. Niczego nie zmieniamy, więc nie wiemy, co jest przyczyną.",
      def: "Polegają na pomiarze zmiennych i sprawdzaniu, czy oraz jak silnie są ze sobą związane. Badacz nie manipuluje zmiennymi. Sam związek nie pozwala ustalić przyczyny i skutku.",
      sh: "pomiar związku bez manipulacji" },
    { id: "eksperymentalne", u: "korelacja", term: "Badania eksperymentalne",
      plain: "Badacz sam coś zmienia i patrzy, co się dzieje, pilnując reszty. Tylko tak można powiedzieć: to jest przyczyną tamtego.",
      def: "Polegają na celowej zmianie zmiennej niezależnej i pomiarze jej wpływu na zmienną zależną, przy kontrolowaniu innych czynników. Prawidłowo zaplanowany eksperyment pozwala wnioskować o przyczynach i skutkach.",
      sh: "celowa zmiana i kontrola, wniosek o przyczynie" },
    { id: "przyczyna", u: "korelacja", s: "D", term: "Korelacja to nie przyczynowość",
      plain: "Lody i utonięcia rosną razem latem, ale lody nie topią ludzi. Obie rzeczy zależą od upału.",
      def: "Związek dwóch zmiennych może wynikać z tego, że obie zależą od trzeciej (np. temperatury) albo że przyczyna działa odwrotnie, niż myślimy.",
      sh: "związek nie mówi, co jest przyczyną" },

    { id: "zewnetrzne", u: "zewnetrzne", term: "Zmienne zewnętrzne",
      plain: "Wszystko inne, co się zmienia w badaniu poza tym, co badamy. Mogą namieszać w wynikach.",
      def: "Wszystko, co zmienia się w kontekście badania, z wyjątkiem zmiennych niezależnych i zależnych. Nie są przedmiotem badania, ale są kontrolowane w celu uniknięcia zakłócenia wyników.",
      sh: "wszystko poza niezależną i zależną" },
    { id: "kontrolne", u: "zewnetrzne", term: "Zmienne kontrolne",
      plain: "Rzeczy, które celowo trzymamy takie same albo pilnujemy, żeby nie wpłynęły na wynik.",
      def: "Czynniki w badaniu, które są utrzymywane na stałym poziomie lub monitorowane, aby zapewnić, że nie mają one wpływu na wynik eksperymentu.",
      sh: "utrzymywane na stałym poziomie" },
    { id: "zaklocajace", u: "zewnetrzne", term: "Czynniki zakłócające (szum)",
      plain: "Coś, czego nie zauważyliśmy, a co wpływa i na „przyczynę”, i na „wynik”. Przez to wyniki są przekłamane.",
      def: "Czynniki, które nieumyślnie wpływają zarówno na zmienne niezależne, jak i zależne, potencjalnie zniekształcając wyniki badania.",
      sh: "nieumyślnie zniekształcają wyniki" },
    { id: "podwojna", u: "mix", term: "Podwójnie ślepa próba",
      plain: "Ani badani, ani osoba prowadząca badanie nie wiedzą, kto jest w której grupie. Dzięki temu oczekiwania badacza nie psują wyników.",
      def: "Procedura, w której prowadzący eksperyment mający kontakt z badanymi nie zna hipotez (ani przydziału do grup). Hock (przy badaniu Rosenthala): pozwala uniknąć efektu oczekiwań eksperymentatora.",
      sh: "prowadzący nie zna hipotez ani grup" },
    { id: "efekt-oczekiwan", u: "mix", term: "Efekt oczekiwań eksperymentatora",
      plain: "Badacz nieświadomie podpowiada badanym, czego się spodziewa, i dostaje to, czego chciał. Przykład: koń Mądry Hans.",
      def: "Obserwatorzy wysyłają badanym niejawne, niezamierzone sygnały; badani reagują zgodnie z oczekiwaniami, więc wyniki nie są trafne (Hock, rozdz. 4: Mądry Hans, szczury „inteligentne” i „tępe”).",
      sh: "oczekiwania badacza zmieniają wyniki" }
  ],

  exercises: [
    /* ---------- Przedmiot ---------- */
    { u: "przedmiot", t: "mcq", q: "Czym według Brzezińskiego (2019) zajmuje się psychologia?",
      a: ["Opisem i wyjaśnianiem zachowania człowieka", "Wyłącznie leczeniem zaburzeń psychicznych u dorosłych", "Badaniem budowy i działania samego mózgu", "Tylko tym zachowaniem, które da się zobaczyć"],
      x: "Przedmiotem psychologii jest opisanie i wyjaśnienie zachowania w szerokim rozumieniu: od myśli i emocji po obserwowalne zachowanie.",
      w: ["Leczenie to jedna gałąź (kliniczna), a nie cały przedmiot.", "Mózg bada m.in. biopsychologia i neuropsychologia, ale to też tylko część.", "Definicja obejmuje także wewnętrzne przeżycia: myśli, emocje, uczucia."] },
    { u: "przedmiot", t: "tf", q: "Według definicji ze slajdu przedmiotem psychologii są też myśli i emocje, a nie tylko obserwowalne zachowanie.", a: true,
      x: "Tak: „od wewnętrznych przeżyć: myśli, emocji, uczuć, po obserwowalne zachowanie”." },
    { u: "przedmiot", t: "cloze", q: "Psychologia opisuje i wyjaśnia obserwowalne zachowanie świadome i/lub ___.",
      a: ["automatyczne", "patologiczne", "zwierzęce", "społeczne"],
      x: "Świadome i/lub automatyczne: także to, co robimy bez namysłu.",
      w: ["Definicja nie ogranicza się do patologii.", "Definicja mówi o zachowaniu człowieka.", "Społeczne to zbyt wąskie słowo; definicja mówi o automatycznym."] },
    { u: "przedmiot", t: "which", set: "galaz", q: "Bada, jak zmieniamy się od niemowlęctwa do starości.", a: 2, x: "Zmiany w ciągu życia to psychologia rozwojowa." },
    { u: "przedmiot", t: "which", set: "galaz", q: "Bada, czy zeznania naocznych świadków są wiarygodne.", a: 6, x: "Psychologia w wymiarze sprawiedliwości to psychologia sądowa (takie badania prowadziła Loftus)." },
    { u: "przedmiot", t: "which", set: "galaz", q: "Bada, jak obecność innych ludzi wpływa na nasze decyzje.", a: 3, x: "Wpływ innych to psychologia społeczna." },
    { u: "przedmiot", t: "which", set: "galaz", q: "Bada uwagę, pamięć i rozwiązywanie problemów.", a: 4, x: "To procesy poznawcze, czyli psychologia poznawcza." },
    { u: "przedmiot", t: "multi", q: "Które z tych gałęzi są na liście ze slajdu (Spielman i in., 2020)?",
      a: ["psychologia zdrowia", "psychologia sportu", "neuropsychologia", "psychologia środowiskowa"],
      o: ["psychologia kosmiczna", "psychologia handlu zagranicznego"],
      x: "Na slajdzie jest 14 gałęzi, m.in. zdrowia, sportu, neuropsychologia i środowiskowa.",
      w: ["Nie ma jej na slajdzie.", "Nie ma jej na slajdzie."] },
    { u: "przedmiot", t: "tf", q: "Psychologia przemysłowa to na slajdzie ta sama gałąź co psychologia pracy i organizacji.", a: true,
      x: "Tak, na slajdzie są w jednym punkcie: „psychologia przemysłowa, psychologia pracy i organizacji”." },

    /* ---------- Mapa ---------- */
    { u: "mapa", t: "mcq", q: "Co jest w samym środku mapy przedmiotu?",
      a: ["Funkcjonowanie człowieka", "Metodologia badań", "Etyka psychologa", "Procesy psychiczne człowieka"],
      x: "W centrum mapy jest funkcjonowanie człowieka, a od niego odchodzą cztery obszary.",
      w: ["Metodologia jest na górze, nad całą mapą.", "Etyka jest ramą na dole mapy.", "To jeden z czterech obszarów, nie centrum."] },
    { u: "mapa", t: "match", pairs: [
        ["procesy psychiczne", "uczenie się, spostrzeganie, emocje"],
        ["rozwój i osobowość", "rozwój moralny, osobowość"],
        ["zdrowie i pomoc", "psychopatologia, psychoterapia"],
        ["relacje i kultura", "psychologia społeczna i kulturowa"]],
      x: "Cztery obszary wokół funkcjonowania człowieka na mapie przedmiotu." },
    { u: "mapa", t: "which", set: "galaz", q: "Na mapie przedmiotu należy do obszaru „zdrowie i pomoc”.", a: 1,
      x: "Zdrowie i pomoc (zdrowie psychiczne, psychopatologia, psychoterapia) to domena psychologii klinicznej." },
    { u: "mapa", t: "mcq", q: "Do którego obszaru mapy należy temat „emocje i motywacja”?",
      a: ["Procesy psychiczne", "Rozwój i osobowość", "Zdrowie i pomoc", "Relacje i kultura"],
      x: "Emocje i motywacja są w procesach psychicznych, obok uczenia się, poznania i spostrzegania.",
      w: ["Tam są rozwój, osobowość i rozwój moralny.", "Tam są zdrowie psychiczne, psychopatologia i psychoterapia.", "Tam jest psychologia społeczna i kulturowa."] },
    { u: "mapa", t: "tf", q: "Na mapie przedmiotu etyka psychologa obejmuje całość, a metodologia badań jest nad wszystkimi obszarami.", a: true,
      x: "Tak: metodologia na górze, etyka jako dolna rama całej mapy." },
    { u: "mapa", t: "mcq", q: "Do którego obszaru mapy należy rozwój moralny?",
      a: ["Rozwój i osobowość", "Procesy psychiczne", "Relacje i kultura", "Zdrowie i pomoc"],
      x: "Rozwój moralny jest obok psychologii rozwoju i osobowości.",
      w: ["Tam są uczenie się, poznanie, spostrzeganie, emocje.", "Tam jest psychologia społeczna i kulturowa.", "Tam są zdrowie psychiczne, psychopatologia, psychoterapia."] },
    { u: "mapa", t: "multi", q: "Co należy do obszaru „procesy psychiczne”?",
      a: ["uczenie się", "psychologia poznawcza i inteligencja", "spostrzeganie i świadomość", "emocje i motywacja"],
      o: ["psychoterapia", "rozwój moralny"],
      x: "Cztery tematy procesów psychicznych. To akurat tematy kolejnych zajęć i rozdziałów z Hocka.",
      w: ["Psychoterapia jest w „zdrowiu i pomocy”.", "Rozwój moralny jest w „rozwoju i osobowości”."] },

    /* ---------- Podejście ---------- */
    { u: "podejscie", t: "mcq", q: "Czym zajmuje się metodologia badań psychologicznych?",
      a: ["Zasadami prowadzenia badań i uzasadniania wiedzy", "Historią najważniejszych odkryć w psychologii", "Leczeniem pacjentów metodami naukowymi", "Wyłącznie analizą statystyczną danych"],
      x: "Metodologia to zasady prowadzenia badań i uzasadniania wiedzy naukowej o zachowaniu i procesach psychicznych.",
      w: ["To historia psychologii.", "To psychologia kliniczna i psychoterapia.", "Statystyka to tylko jedno z narzędzi metodologii."] },
    { u: "podejscie", t: "sort", q: "Idiograficzne czy nomotetyczne?", cats: ["Idiograficzne", "Nomotetyczne"],
      why: ["Idiograficzne: jedna osoba, jej niepowtarzalność i kontekst życia.", "Nomotetyczne: prawidłowości wspólne dla wielu osób i ogólne prawa."],
      items: [["koncentracja na pojedynczej osobie", 0], ["szczegółowa analiza kontekstu życia", 0], ["opis konkretnego przypadku", 0],
        ["poszukiwanie ogólnych praw", 1], ["porównywanie osób", 1], ["uogólnianie wyników i przewidywanie", 1]],
      x: "Allport (1937): idiograficzne poznaje jednostkę, nomotetyczne szuka praw dla wielu." },
    { u: "podejscie", t: "mcq", q: "Kto wprowadził rozróżnienie podejścia idiograficznego i nomotetycznego (slajd)?",
      a: ["Allport, 1937", "Brzeziński, 2019", "Price i in., 2015", "Spielman i in., 2020"],
      x: "Na slajdzie podpis: Allport, 1937.",
      w: ["Brzeziński to definicja przedmiotu psychologii i metodologii.", "Price i in. to pytania, hipotezy i rodzaje badań.", "Spielman i in. to lista gałęzi psychologii."] },
    { u: "podejscie", t: "mcq", q: "Psycholożka przez rok rozmawia z jedną ocalałą z powodzi, żeby zrozumieć jej historię. To podejście…",
      a: ["idiograficzne", "nomotetyczne", "eksperymentalne", "korelacyjne"],
      x: "Jedna osoba, niepowtarzalność i kontekst życia: podejście idiograficzne.",
      w: ["Nomotetyczne szukałoby praw dla wielu osób.", "Nikt tu niczego nie zmienia celowo.", "Nie mierzymy związku dwóch zmiennych u wielu osób."] },
    { u: "podejscie", t: "mcq", q: "Badacze sprawdzają na 2000 osób, czy sen wiąże się z wynikami w nauce. To podejście…",
      a: ["nomotetyczne", "idiograficzne", "jakościowe", "eksploracyjne"],
      x: "Wiele osób, zależność między zmiennymi, uogólnianie: podejście nomotetyczne.",
      w: ["Idiograficzne skupia się na jednej osobie.", "Tu są liczby (pomiar snu i wyników), więc to badanie ilościowe.", "Mają konkretną zależność do sprawdzenia, a nie tylko pytania."] },
    { u: "podejscie", t: "tf", q: "Podejście nomotetyczne służy uogólnianiu wyników i przewidywaniu zachowania.", a: true,
      x: "Tak, to jeden z punktów ze slajdu." },

    /* ---------- Pytania i hipotezy ---------- */
    { u: "pytania", t: "mcq", q: "Czym różni się pytanie badawcze od hipotezy?",
      a: ["Pytanie: co sprawdzamy; hipoteza: jakiego wyniku oczekujemy", "Pytanie jest w eksperymencie, hipoteza w korelacji", "Hipoteza jest zawsze ogólniejsza niż pytanie", "Nie różnią się, to dwa synonimy tego samego"],
      x: "Slajd: „Pytanie wskazuje, co sprawdzamy, a hipoteza – jakiego wyniku oczekujemy”.",
      w: ["Oba występują w różnych typach badań.", "Hipoteza to przewidywana odpowiedź na pytanie, więc jest konkretna.", "Nie są synonimami."] },
    { u: "pytania", t: "sort", q: "Pytanie badawcze czy hipoteza?", cats: ["Pytanie badawcze", "Hipoteza"],
      why: ["Pytanie: czego chcemy się dowiedzieć.", "Hipoteza: przewidywana odpowiedź, z kierunkiem zależności albo różnicy."],
      items: [["Czy stres wiąże się z liczbą godzin nauki?", 0], ["Jak studenci przeżywają pierwszą sesję?", 0], ["Czy chłopcy i dziewczynki różnią się agresją?", 0],
        ["Im więcej godzin nauki, tym wyższy stres.", 1], ["Chłopcy częściej naśladują agresję niż dziewczynki.", 1], ["Pytania sugerujące zwiększą liczbę fałszywych wspomnień.", 1]],
      x: "Pytanie zostawia odpowiedź otwartą, hipoteza mówi, jakiego wyniku się spodziewamy." },
    { u: "pytania", t: "tf", q: "Każde badanie musi mieć hipotezę.", a: false,
      x: "Fałsz. W badaniach eksploracyjnych można zacząć od samych pytań badawczych." },
    { u: "pytania", t: "multi", q: "Czego może dotyczyć pytanie badawcze według slajdu?",
      a: ["opisu zjawiska", "różnic między grupami", "związku między zmiennymi"],
      o: ["prywatnych poglądów badacza", "rzeczy niemożliwych do sprawdzenia danymi"],
      x: "Opis, różnice albo związek. Pytanie musi dać się rozstrzygnąć na podstawie danych.",
      w: ["Pytanie dotyczy zjawiska, a nie przekonań badacza.", "Pytanie ma być możliwe do rozstrzygnięcia na podstawie danych."] },
    { u: "pytania", t: "mcq", q: "Na czym opiera się hipoteza badawcza?",
      a: ["Na teorii lub wcześniejszych badaniach", "Na intuicji badanych osób", "Na wynikach już przeprowadzonego badania", "Na losowym wyborze odpowiedzi"],
      x: "Hipotezę formułuje się na podstawie teorii lub wcześniejszych badań, zanim zbierzemy dane.",
      w: ["To badacz formułuje hipotezę, nie badani.", "Hipoteza jest przed badaniem, nie po nim.", "Nie jest losowa: wynika z teorii."] },
    { u: "pytania", t: "cloze", q: "Pytanie badawcze powinno być jasne, precyzyjne i możliwe do rozstrzygnięcia na podstawie ___.",
      a: ["danych", "teorii", "intuicji", "autorytetu"],
      x: "Na podstawie danych z badania.",
      w: ["Teoria pomaga postawić hipotezę, ale rozstrzygają dane.", "Intuicja nie rozstrzyga w nauce.", "Autorytet nie zastąpi danych."] },
    { u: "pytania", t: "mcq", q: "Loftus spodziewała się, że pytanie z fałszywą presupozycją doda do wspomnienia fałszywy szczegół. To była…",
      a: ["hipoteza", "zmienna zależna", "operacjonalizacja", "zmienna kontrolna"],
      x: "Przewidywana odpowiedź, oparta na wcześniejszych badaniach: hipoteza.",
      w: ["Zmienna zależna to to, co mierzyła (np. % odpowiedzi „tak”).", "Operacjonalizacja to wybór wskaźnika.", "Zmienna kontrolna to coś utrzymywanego na stałym poziomie."] },

    /* ---------- Zmienne ---------- */
    { u: "zmienne", t: "mcq", q: "Czym jest zmienna (Bedyńska i Brzezicka, 2007)?",
      a: ["Właściwością przyjmującą co najmniej dwie wartości", "Każdym wynikiem uzyskanym w eksperymencie", "Błędem pomiaru, który trzeba usunąć", "Teorią, którą badacz próbuje obalić"],
      x: "Zmienna to właściwość empiryczna (charakterystyka), która przyjmuje dwie lub więcej wartości.",
      w: ["Wynik to wartość zmiennej zależnej, a nie definicja zmiennej.", "Błąd pomiaru to coś innego.", "Teoria to nie zmienna."] },
    { u: "zmienne", t: "mcq", q: "Która zmienna jest przedmiotem badania i to jej związek z innymi chcemy poznać?",
      a: ["Zależna", "Niezależna", "Kontrolna", "Zakłócająca"],
      x: "Zmienna zależna to wynik, który mierzymy i wyjaśniamy.",
      w: ["Niezależną zmieniamy, żeby zobaczyć wpływ na zależną.", "Kontrolną trzymamy na stałym poziomie.", "Zakłócająca psuje wyniki."] },
    { u: "zmienne", t: "which", set: "zmienna", q: "Badacz daje jednej grupie kawę, a drugiej wodę.", a: 1, x: "To, co badacz zmienia (kawa czy woda), to zmienna niezależna." },
    { u: "zmienne", t: "which", set: "zmienna", q: "Czas reakcji mierzony po wypiciu napoju.", a: 2, x: "Mierzony wynik to zmienna zależna." },
    { u: "zmienne", t: "mcq", q: "Badacz mierzy „lęk” jako liczbę punktów w kwestionariuszu. Jak nazywa się ten krok?",
      a: ["Operacjonalizacja", "Generalizacja", "Randomizacja", "Hipoteza"],
      x: "Szukanie empirycznego wskaźnika (punkty w kwestionariuszu) dla terminu teoretycznego (lęk) to operacjonalizacja.",
      w: ["Generalizacja to uogólnianie wyników.", "Randomizacja to losowy przydział do grup.", "Hipoteza to przewidywany wynik."] },
    { u: "zmienne", t: "tf", q: "Płeć może być zmienną, bo przyjmuje co najmniej dwie wartości.", a: true,
      x: "Tak. Każda cecha, która przyjmuje dwie lub więcej wartości, jest zmienną." },
    { u: "zmienne", t: "match", pairs: [["zmienna niezależna", "jej zmiany przekładają się na wynik"], ["zmienna zależna", "przedmiot badania, wynik"], ["operacjonalizacja", "wskaźnik dla pojęcia"], ["zmienna", "dwie lub więcej wartości"]],
      x: "Cztery pojęcia ze slajdu o zmiennych." },
    { u: "zmienne", t: "mcq", q: "Bandura pokazywał dzieciom agresywny albo nieagresywny model. Co było zmienną niezależną?",
      a: ["Rodzaj modela (agresywny czy nieagresywny)", "Liczba agresywnych zachowań dziecka", "Wiek dzieci w przedszkolu", "Kolor i wielkość lalki Bobo"],
      x: "Badacze celowo zmieniali rodzaj modela (i jego płeć). To zmienne niezależne.",
      w: ["To zmienna zależna: mierzony wynik.", "Wiek był podobny u wszystkich, nie był manipulowany.", "To nie było badane."] },
    { u: "zmienne", t: "mcq", q: "W badaniu Rosenthala (efekt Pigmaliona) mierzono przyrost ilorazu inteligencji uczniów. To była…",
      a: ["zmienna zależna", "zmienna niezależna", "zmienna kontrolna", "presupozycja"],
      x: "Przyrost IQ to wynik, który mierzono: zmienna zależna. Niezależna to oczekiwania nauczycieli.",
      w: ["Niezależna to oczekiwania (lista „przyszłych prymusów”).", "Kontrolna byłaby utrzymywana na stałym poziomie.", "Presupozycja to pojęcie z badań Loftus."] },

    /* ---------- Ilościowe i jakościowe ---------- */
    { u: "rodzaje", t: "sort", q: "Ilościowe czy jakościowe?", cats: ["Ilościowe", "Jakościowe"],
      why: ["Ilościowe: wyniki liczbowe i analiza statystyczna.", "Jakościowe: doświadczenia, znaczenia i kontekst."],
      items: [["związek skali stresu z liczbą godzin nauki", 0], ["średnia liczba błędów szczurów", 0], ["procent osób odpowiadających „tak”", 0],
        ["wywiady o przeżywaniu pierwszej sesji", 1], ["opis, co znaczy dla kogoś żałoba", 1], ["analiza pamiętników uczniów", 1]],
      x: "Liczby i statystyka to badania ilościowe, przeżycia i znaczenia to jakościowe." },
    { u: "rodzaje", t: "mcq", q: "Który przykład ze slajdu ilustruje badania jakościowe?",
      a: ["Wywiady o przeżywaniu pierwszej sesji egzaminacyjnej", "Związek wyniku skali stresu z liczbą godzin nauki", "Pomiar czasu reakcji po wypiciu kawy", "Porównanie średnich ocen dwóch klas"],
      x: "Wywiady o przeżyciach to badanie jakościowe.",
      w: ["To przykład ilościowy ze slajdu.", "Czas reakcji to liczby.", "Średnie to liczby."] },
    { u: "rodzaje", t: "tf", q: "Badania jakościowe skupiają się na wynikach liczbowych i statystyce.", a: false,
      x: "Fałsz. To cecha badań ilościowych. Jakościowe skupiają się na doświadczeniach, znaczeniach i kontekście." },
    { u: "rodzaje", t: "mcq", q: "Badanie Loftus (procent osób, które „widziały” stodołę) to przykład badania…",
      a: ["ilościowego", "jakościowego", "idiograficznego", "eksploracyjnego bez pomiaru"],
      x: "Wyniki w procentach i test istotności statystycznej: badanie ilościowe.",
      w: ["Jakościowe badałoby przeżycia i znaczenia, nie procenty.", "Badanych było 150, szukano prawidłowości.", "Był pomiar i hipoteza."] },

    /* ---------- Korelacja czy eksperyment ---------- */
    { u: "korelacja", t: "mcq", q: "Co odróżnia eksperyment od badania korelacyjnego?",
      a: ["Badacz celowo zmienia zmienną niezależną", "Znacznie większa liczba badanych osób", "Używanie kwestionariuszy i testów", "Analiza statystyczna wyników"],
      x: "W eksperymencie badacz celowo manipuluje zmienną niezależną i kontroluje inne czynniki.",
      w: ["Liczba osób nie decyduje o typie badania.", "Kwestionariusze są w obu typach.", "Statystykę stosuje się w obu typach."] },
    { u: "korelacja", t: "tf", q: "Badanie korelacyjne pozwala ustalić, co jest przyczyną, a co skutkiem.", a: false,
      x: "Fałsz. Sam związek nie pozwala ustalić przyczyny i skutku." },
    { u: "korelacja", t: "which", set: "badanie", q: "Badacz mierzy, ile godzin dziennie ludzie spędzają w mediach społecznościowych i jak oceniają swój nastrój.", a: 1,
      x: "Tylko pomiar dwóch zmiennych, bez manipulacji: badanie korelacyjne." },
    { u: "korelacja", t: "which", set: "badanie", q: "Losowo połowa badanych dostaje pytanie ze słowem „ten”, połowa bez niego, i porównuje się odpowiedzi.", a: 2,
      x: "Badacz celowo zmienia sformułowanie pytania: eksperyment (tak pracowała Loftus)." },
    { u: "korelacja", t: "which", set: "badanie", q: "Badaczka prowadzi wywiady z nauczycielami o tym, jak przeżywają pierwszy rok pracy.", a: 3,
      x: "Doświadczenia i znaczenia: badanie jakościowe." },
    { u: "korelacja", t: "mcq", q: "Okazało się, że osoby więcej śpiące mają lepsze oceny. Co można powiedzieć?",
      a: ["Że są związane, ale przyczyna jest nieznana", "Że sen na pewno poprawia oceny", "Że dobre oceny na pewno poprawiają sen", "Że taki wynik nie ma żadnego znaczenia"],
      x: "To korelacja: wiemy, że zmienne idą w parze, ale bez eksperymentu nie wiemy, co jest przyczyną.",
      w: ["Tego nie wolno wnioskować z korelacji.", "Tego też nie wolno wnioskować z korelacji.", "Związek ma znaczenie, tylko nie rozstrzyga przyczyny."] },
    { u: "korelacja", t: "cloze", q: "Prawidłowo zaplanowany eksperyment pozwala wnioskować o ___ i skutkach.",
      a: ["przyczynach", "korelacjach", "znaczeniach", "hipotezach"],
      x: "O przyczynach i skutkach, bo badacz sam zmienia przyczynę i kontroluje resztę.",
      w: ["Korelacje opisuje badanie korelacyjne.", "Znaczenia bada podejście jakościowe.", "Hipotezy się sprawdza, a wnioskuje o przyczynach."] },
    { u: "korelacja", t: "tf", s: "D", q: "Związek dwóch zmiennych może wynikać z trzeciej zmiennej, która wpływa na obie.", a: true,
      x: "Tak. Np. sprzedaż lodów i liczba utonięć rosną razem, bo obie zależą od upału." },

    /* ---------- Zmienne zewnętrzne ---------- */
    { u: "zewnetrzne", t: "mcq", q: "Czym są zmienne zewnętrzne?",
      a: ["Innymi czynnikami niż zmienne niezależne i zależne", "Zmiennymi mierzonymi poza laboratorium", "Zmiennymi, które badacz celowo manipuluje", "Wynikami wcześniejszych badań innych autorów"],
      x: "Zmienne zewnętrzne to wszystko inne w kontekście badania. Nie są przedmiotem badania, ale się je kontroluje.",
      w: ["Nie chodzi o miejsce pomiaru.", "To zmienna niezależna.", "To nie zmienne w badaniu."] },
    { u: "zewnetrzne", t: "which", set: "zmienna", q: "Wszyscy badani robią test o tej samej porze dnia i w tej samej sali.", a: 3,
      x: "Pora i sala utrzymywane na stałym poziomie to zmienne kontrolne." },
    { u: "zewnetrzne", t: "which", set: "zmienna", q: "Grupa z kawą przypadkiem była też bardziej wyspana, co wpłynęło na czas reakcji.", a: 4,
      x: "Wyspanie nieumyślnie wpłynęło na wynik i pomieszało się z efektem kawy: czynnik zakłócający." },
    { u: "zewnetrzne", t: "mcq", q: "Jak inaczej nazywa się na slajdzie czynniki zakłócające?",
      a: ["Szum", "Wskaźniki", "Presupozycje", "Wzmocnienia"],
      x: "Na slajdzie: „Czynniki zakłócające (szum)”.",
      w: ["Wskaźniki są w operacjonalizacji.", "Presupozycje to pojęcie z badań Loftus.", "Wzmocnienia to pojęcie z warunkowania."] },
    { u: "zewnetrzne", t: "sort", q: "Zmienna kontrolna czy czynnik zakłócający?", cats: ["Kontrolna", "Zakłócająca (szum)"],
      why: ["Kontrolna: utrzymywana na stałym poziomie albo monitorowana, żeby nie wpłynęła na wynik.", "Zakłócająca: nieumyślnie wpływa na zmienne i zniekształca wyniki."],
      items: [["ta sama instrukcja dla wszystkich", 0], ["ta sama sala i pora", 0], ["pilnowany wiek badanych", 0],
        ["nauczyciel nieświadomie faworyzuje „prymusów”", 1, "W badaniu Rosenthala to był właśnie badany efekt, ale w zwykłym badaniu byłby zakłóceniem."],
        ["przypadkiem bardziej wyspana jedna grupa", 1], ["hałas za oknem tylko w jednej grupie", 1]],
      x: "Kontrolne pilnujemy celowo, zakłócające wkradają się nieumyślnie." },
    { u: "zewnetrzne", t: "mcq", q: "Pawłow zbudował dźwiękoszczelne laboratorium, żeby psy nie reagowały na inne bodźce. Co w ten sposób robił?",
      a: ["Kontrolował zmienne zewnętrzne", "Operacjonalizował ślinienie", "Stawiał pytanie badawcze", "Prowadził badanie jakościowe"],
      x: "Izolacja od dźwięków i ludzi to kontrola zmiennych zewnętrznych, żeby nie zakłóciły wyników (Hock, rozdz. 3).",
      w: ["Operacjonalizacją był pomiar ilości śliny.", "Pytanie stawia się przed badaniem.", "Liczył krople śliny: ilościowo."] },
    { u: "zewnetrzne", t: "tf", q: "Czynniki zakłócające mogą wpływać zarówno na zmienną niezależną, jak i zależną.", a: true,
      x: "Tak, to definicja ze slajdu: nieumyślnie wpływają na obie i zniekształcają wyniki." },

    /* ---------- Mix: Hock ---------- */
    { u: "mix", t: "mcq", q: "Rosenthal: studentom powiedziano, że ich szczury są „inteligentne” albo „tępe”, choć szczury były losowe. Co pokazało badanie?",
      a: ["Efekt oczekiwań eksperymentatora", "Uczenie się utajone u szczurów", "Generalizację reakcji", "Wzmocnienie przypadkowe"],
      x: "„Inteligentne” szczury uczyły się szybciej, bo studenci nieświadomie traktowali je inaczej: efekt oczekiwań eksperymentatora.",
      w: ["To Tolman i szczury bez nagrody.", "To Mały Albert.", "To przesądne gołębie Skinnera."] },
    { u: "mix", t: "mcq", q: "Jak według Hocka chronić badanie przed efektem oczekiwań eksperymentatora?",
      a: ["Metodą podwójnie ślepej próby", "Zwiększając nagrodę dla badanych", "Badając tylko jedną osobę", "Rezygnując z hipotezy"],
      x: "Prowadzący, który ma kontakt z badanymi, nie zna hipotez: podwójnie ślepa próba.",
      w: ["Nagroda nie usuwa oczekiwań badacza.", "Jedna osoba nie rozwiązuje problemu.", "Hipoteza zostaje, tylko prowadzący jej nie zna."] },
    { u: "mix", t: "mcq", q: "Mądry Hans „liczył”, stukając kopytem. Co naprawdę się działo?",
      a: ["Odbierał niezamierzone sygnały pytających", "Rozumiał liczby tak jak człowiek", "Właściciel celowo go oszukiwał", "Zgadywał całkowicie losowo"],
      x: "Ludzie patrzyli na kopyto i lekko unosili głowę przy właściwej liczbie, a koń to wychwytywał (Pfungst, 1911).",
      w: ["Pfungst pokazał, że nie.", "Komisja potwierdziła, że von Osten nie podpowiadał świadomie.", "Odpowiadał trafnie, bo reagował na sygnały."] },
    { u: "mix", t: "which", set: "badanie", q: "Watson i Rayner łączyli białego szczura z głośnym hałasem i sprawdzali reakcję Alberta.", a: 2,
      x: "Celowe łączenie bodźców i obserwacja skutku: eksperyment (choć na jednym dziecku)." },
    { u: "mix", t: "mcq", q: "W badaniu Loftus (znak stopu vs skręt w prawo) zmienną zależną był…",
      a: ["odsetek osób, które „widziały” znak stopu", "sposób sformułowania pytania", "film z wypadkiem samochodowym", "liczba samochodów w karambolu"],
      x: "Mierzono, ilu badanych twierdziło, że widziało znak stopu (53% vs 35%).",
      w: ["To zmienna niezależna: badaczka ją zmieniała.", "Film był taki sam dla wszystkich (zmienna kontrolna).", "Tego nie mierzono."] },
    { u: "mix", t: "tf", q: "W badaniu Bandury dzieci dobrano tak, żeby grupy miały podobny wyjściowy poziom agresji. To kontrola zmiennej zewnętrznej.", a: true,
      x: "Tak. Wcześniejsza agresywność mogłaby zniekształcić wyniki, więc ją wyrównano." },
    { u: "mix", t: "mcq", q: "Watson badał jedno dziecko, Alberta, bardzo szczegółowo. Co jest tu słabością z punktu widzenia uogólniania?",
      a: ["Trudno uogólnić wyniki jednej osoby", "Brak jakiejkolwiek zmiennej zależnej", "Brak jakiejkolwiek manipulacji", "Badanie było wyłącznie jakościowe"],
      x: "Wniosek z jednego przypadku trudno uogólnić. Krytycy (Harris, Samelson) wątpili też, czy Albert był mocno uwarunkowany.",
      w: ["Była: reakcja strachu.", "Była: łączenie szczura z hałasem.", "Obserwowano reakcje, ale była manipulacja bodźcami."] },
    { u: "mix", t: "mcq", q: "Grupa kontrolna w badaniu Tolmana (grupa K) zawsze dostawała pokarm. Po co jest grupa kontrolna?",
      a: ["Żeby było z czym porównać pozostałe grupy", "Żeby zwiększyć liczbę badanych", "Żeby sprawdzić, czy szczury są w ogóle zdrowe", "Żeby zastąpić hipotezę"],
      x: "Grupa kontrolna to punkt odniesienia: bez niej nie wiadomo, czy zmiana jest efektem manipulacji.",
      w: ["Liczba badanych to nie jej cel.", "To nie jej cel.", "Hipoteza nadal jest potrzebna."] }
  ],

  sortDecks: [
    { id: "idio", title: "Idiograficzne czy nomotetyczne?", sub: "Jedna osoba czy prawa ogólne", cats: ["Idiograficzne", "Nomotetyczne"],
      why: ["Jedna osoba: niepowtarzalność, kontekst życia, opis przypadku.", "Wiele osób: prawidłowości, ogólne prawa, przewidywanie."],
      items: [["biografia jednej artystki", 0], ["studium przypadku pacjenta", 0], ["opis doświadczeń jednej rodziny", 0], ["analiza listów jednej osoby", 0],
        ["badanie 2000 studentów", 1], ["poszukiwanie praw uczenia się", 1], ["porównanie grup", 1], ["przewidywanie zachowania", 1], ["korelacja snu i ocen", 1]] },
    { id: "zmienne", title: "Niezależna czy zależna?", sub: "Co badacz zmienia, a co mierzy", cats: ["Niezależna (zmieniana)", "Zależna (mierzona)"],
      why: ["Niezależna: badacz ją zmienia albo porównuje grupy według niej.", "Zależna: wynik, który mierzymy."],
      items: [["rodzaj modela u Bandury", 0], ["słowo „ten” w pytaniu Loftus", 0], ["oczekiwania nauczycieli u Rosenthala", 0], ["nagroda albo jej brak u Tolmana", 0], ["kawa czy woda", 0],
        ["liczba agresywnych zachowań", 1], ["procent odpowiedzi „tak”", 1], ["przyrost IQ", 1], ["liczba błędów w labiryncie", 1], ["czas reakcji", 1]] },
    { id: "ilosc", title: "Ilościowe czy jakościowe?", sub: "Liczby czy przeżycia", cats: ["Ilościowe", "Jakościowe"],
      why: ["Wyniki liczbowe i statystyka.", "Doświadczenia, znaczenia, kontekst."],
      items: [["skala stresu", 0], ["średnia liczba błędów", 0], ["procent badanych", 0], ["wynik testu IQ", 0],
        ["wywiad o pierwszej sesji", 1], ["opowieść o żałobie", 1], ["co dla ucznia znaczy szkoła", 1], ["pamiętnik terapeutyczny", 1]] }
  ],

  minimum: [
    ["Przedmiot psychologii", "Opisanie i wyjaśnienie <b>zachowania człowieka w szerokim rozumieniu</b>: od myśli, emocji i uczuć po obserwowalne zachowanie <b>świadome i/lub automatyczne</b> (Brzeziński, 2019)."],
    ["Mapa przedmiotu", "W centrum <b>funkcjonowanie człowieka</b>; obszary: <b>procesy psychiczne</b>, <b>rozwój i osobowość</b>, <b>zdrowie i pomoc</b>, <b>relacje i kultura</b>; na górze <b>metodologia</b>, na dole <b>etyka psychologa</b>."],
    ["Metodologia", "Zasady <b>prowadzenia badań i uzasadniania wiedzy</b> naukowej o zachowaniu i procesach psychicznych."],
    ["Idiograficzne vs nomotetyczne (Allport, 1937)", "<b>Idiograficzne</b>: jedna osoba, niepowtarzalność, kontekst. <b>Nomotetyczne</b>: prawidłowości wielu osób, ogólne prawa, przewidywanie."],
    ["Pytanie i hipoteza", "<b>Pytanie</b>: co sprawdzamy. <b>Hipoteza</b>: jakiego wyniku oczekujemy (z teorii lub badań). W badaniach <b>eksploracyjnych</b> wystarczą pytania."],
    ["Zmienne", "<b>Zmienna</b>: cecha o 2+ wartościach. <b>Niezależna</b>: jej zmiany przekładają się na wynik. <b>Zależna</b>: przedmiot badania, wynik. <b>Operacjonalizacja</b>: szukanie wskaźników dla pojęć."],
    ["Ilościowe i jakościowe", "<b>Ilościowe</b>: liczby i statystyka (stres a godziny nauki). <b>Jakościowe</b>: doświadczenia i znaczenia (wywiady o pierwszej sesji)."],
    ["Korelacja i eksperyment", "<b>Korelacyjne</b>: pomiar związku, bez manipulacji, <b>bez wniosku o przyczynie</b>. <b>Eksperyment</b>: celowa zmiana niezależnej + kontrola innych czynników = wniosek o <b>przyczynie i skutku</b>."],
    ["Zmienne zewnętrzne", "Wszystko poza niezależną i zależną. <b>Kontrolne</b>: utrzymywane na stałym poziomie. <b>Czynniki zakłócające (szum)</b>: nieumyślnie wpływają na obie zmienne i zniekształcają wyniki."]
  ],

  deep: [
    { q: "Dlaczego ten slajd z mapą wraca na każdych zajęciach?",
      a: "Mapa przedmiotu to plan całego kursu. Kolejne zajęcia idą po obszarze „procesy psychiczne”: uczenie się (zajęcia 2), psychologia poznawcza i inteligencja (zajęcia 3), spostrzeganie i świadomość (zapowiedziany rozdział 2 z Hocka). Te same tematy mają rozdziały książki Hocka.",
      link: "Na każdych zajęciach warto zapytać siebie: w którym miejscu mapy teraz jestem?" },
    { q: "Czy psychologia zajmuje się tylko tym, co widać?",
      a: "Nie. Definicja obejmuje też myśli i emocje. Historycznie było inaczej: behawioryści (Watson, Skinner) chcieli badać tylko obserwowalne zachowanie. Tolman pokazał, że o procesach umysłowych da się wnioskować z zachowania (Hock, rozdz. 4).",
      link: "To wątek z zajęć 2 i 3: od behawioryzmu do psychologii poznawczej." },
    { q: "Dlaczego badanie na jednym dziecku (Mały Albert) było tak ważne, skoro jest idiograficzne?",
      a: "Watson nie chciał opisać Alberta jako osoby, tylko pokazać ogólne prawo: emocje można warunkować. Formalnie badał jedną osobę, ale cel był nomotetyczny. Dlatego krytycy podważali uogólnianie z jednego, słabo udokumentowanego przypadku.",
      link: "Na zajęciach 2 wrócą też problemy etyczne tego badania." }
  ],

  talk: [
    { q: "Czym zajmuje się psychologia i co obejmuje „zachowanie w szerokim rozumieniu”?",
      a: "<p>Psychologia opisuje i wyjaśnia zachowanie człowieka w szerokim rozumieniu (Brzeziński, 2019). Obejmuje ono <b>wewnętrzne przeżycia</b> (myśli, emocje, uczucia) i <b>obserwowalne zachowanie</b>, zarówno świadome, jak i automatyczne.</p>",
      keys: ["opis i wyjaśnienie", "wewnętrzne przeżycia", "obserwowalne zachowanie", "świadome i automatyczne"], src: "Slajd 3" },
    { q: "Porównaj podejście idiograficzne i nomotetyczne. Podaj przykład każdego.",
      a: "<p><b>Idiograficzne</b>: koncentracja na pojedynczej osobie, jej niepowtarzalności i kontekście życia; opis i rozumienie przypadku (np. studium jednego pacjenta). <b>Nomotetyczne</b>: prawidłowości wspólne dla wielu osób, ogólne prawa, porównywanie, uogólnianie i przewidywanie (np. badanie, jak sen wiąże się z ocenami u tysięcy studentów). Rozróżnienie: Allport (1937).</p>",
      keys: ["jedna osoba", "niepowtarzalność", "ogólne prawa", "uogólnianie i przewidywanie", "Allport"], src: "Slajd 6" },
    { q: "Czym różni się pytanie badawcze od hipotezy? Czy hipoteza jest zawsze potrzebna?",
      a: "<p>Pytanie określa, <b>czego chcemy się dowiedzieć</b>; ma być jasne i rozstrzygalne danymi. Hipoteza to <b>przewidywana odpowiedź</b> oparta na teorii lub wcześniejszych badaniach, wskazująca oczekiwaną zależność lub różnicę. Hipoteza nie zawsze jest potrzebna: w badaniach <b>eksploracyjnych</b> zaczyna się od samych pytań.</p>",
      keys: ["co sprawdzamy", "jakiego wyniku oczekujemy", "teoria lub wcześniejsze badania", "badania eksploracyjne"], src: "Slajd 7" },
    { q: "Wyjaśnij pojęcia: zmienna, zmienna zależna i niezależna, operacjonalizacja. Pokaż je na jednym badaniu.",
      a: "<p>Zmienna to właściwość o dwóch lub więcej wartościach. Zależna to przedmiot badania (wynik), niezależna to ta, której zmiany przekładają się na wynik. Operacjonalizacja to znalezienie wskaźników dla pojęć. Przykład (Bandura): niezależna – rodzaj modela; zależna – liczba agresywnych zachowań dziecka; agresję zoperacjonalizowano jako liczbę konkretnych aktów (uderzenia, kopnięcia, słowa).</p>",
      keys: ["2+ wartości", "zależna = wynik", "niezależna = zmieniana", "wskaźniki", "przykład badania"], src: "Slajd 8" },
    { q: "Kiedy wolno mówić o przyczynie i skutku: w badaniu korelacyjnym czy eksperymentalnym? Dlaczego?",
      a: "<p>Tylko w <b>eksperymencie</b>. Badacz celowo zmienia zmienną niezależną, mierzy wpływ na zależną i kontroluje inne czynniki. W badaniu <b>korelacyjnym</b> tylko mierzymy związek, bez manipulacji, więc nie wiemy, co jest przyczyną (a związek może wynikać z trzeciej zmiennej).</p>",
      keys: ["manipulacja", "kontrola czynników", "sam związek nie daje przyczyny"], src: "Slajd 10" },
    { q: "Czym są zmienne zewnętrzne? Odróżnij zmienne kontrolne od czynników zakłócających.",
      a: "<p>Zmienne zewnętrzne to wszystko, co zmienia się w badaniu poza niezależnymi i zależnymi. <b>Kontrolne</b> utrzymujemy na stałym poziomie lub monitorujemy (ta sama sala, instrukcja). <b>Czynniki zakłócające (szum)</b> nieumyślnie wpływają na obie zmienne i zniekształcają wyniki (np. jedna grupa przypadkiem bardziej wyspana).</p>",
      keys: ["poza niezależną i zależną", "stały poziom", "nieumyślnie", "szum"], src: "Slajd 11" }
  ],

  story: { title: "Słowniczek metodologa", intro: "Trudne słowa z zajęć po ludzku.", items: [
    ["empiryczny", "oparty na doświadczeniu i pomiarze"],
    ["idiograficzny", "o jednej, niepowtarzalnej osobie"],
    ["nomotetyczny", "szukający ogólnych praw"],
    ["hipoteza", "przewidywany wynik"],
    ["zmienna", "cecha o różnych wartościach"],
    ["operacjonalizacja", "z pojęcia na coś mierzalnego"],
    ["korelacja", "dwie rzeczy idą w parze"],
    ["manipulacja (w badaniu)", "celowa zmiana zmiennej przez badacza"],
    ["szum", "czynnik zakłócający wyniki"],
    ["eksploracyjny", "rozpoznający teren, bez gotowej hipotezy"]
  ] },

  notes: [
    { id: "s1", n: 1, title: "Przedmiot i gałęzie psychologii", html:
      "<div class='plain'><p>Psychologia opisuje i wyjaśnia, co ludzie robią, myślą i czują. Jest bardzo szeroka, dlatego ma wiele gałęzi.</p></div>" +
      "<div class='key'><p><b>Przedmiot psychologii:</b> opisanie i wyjaśnienie zachowania człowieka w szerokim jego rozumieniu, od wewnętrznych przeżyć (myśli, emocji, uczuć) po obserwowalne zachowanie świadome i/lub automatyczne (Brzeziński, 2019).</p></div>" +
      "<p><b>Główne gałęzie</b> (Spielman i in., 2020): kliniczna, poznawcza, rozwojowa, społeczna, biologiczna (biopsychologia), przemysłowa / pracy i organizacji, edukacyjna, zdrowia, sądowa, środowiskowa, neuropsychologia, sportu, zaburzeń, porównawcza.</p>" +
      "<aside class='extra'><p>Psychologia porównawcza porównuje zachowanie różnych gatunków. Dlatego wiele klasycznych badań (Pawłow, Skinner, Tolman) prowadzono na zwierzętach.</p></aside>" },
    { id: "s2", n: 2, title: "Mapa przedmiotu", html:
      "<div class='plain'><p>To plan całego kursu. Kolejne zajęcia przechodzą przez te obszary.</p></div>" +
      "<!--fig:mapa-->" +
      "<ul><li><b>Procesy psychiczne:</b> uczenie się; psychologia poznawcza i inteligencja; spostrzeganie i świadomość; emocje i motywacja.</li>" +
      "<li><b>Rozwój i osobowość:</b> psychologia rozwoju, osobowości, rozwój moralny.</li>" +
      "<li><b>Zdrowie i pomoc:</b> zdrowie psychiczne, psychopatologia, psychoterapia.</li>" +
      "<li><b>Relacje i kultura:</b> psychologia społeczna i kulturowa.</li></ul>" +
      "<p>Nad całością: <b>metodologia badań w psychologii</b>. Pod całością: <b>etyka psychologa</b>.</p>" },
    { id: "s3", n: 3, title: "Metodologia i dwa podejścia", html:
      "<div class='plain'><p>Metodologia to „instrukcja obsługi” nauki: jak badać i jak uzasadnić wnioski. Można przy tym patrzeć na jednego człowieka albo na wielu naraz.</p></div>" +
      "<div class='key'><p><b>Metodologia badań psychologicznych</b> zajmuje się zasadami prowadzenia badań i uzasadniania wiedzy naukowej o zachowaniu oraz procesach psychicznych (Brzeziński, 2019; Price i in., 2015).</p></div>" +
      "<div class='tscroll'><table><thead><tr><th>Idiograficzne</th><th>Nomotetyczne</th></tr></thead><tbody>" +
      "<tr><td>koncentracja na pojedynczej osobie</td><td>prawidłowości wspólne dla wielu osób</td></tr>" +
      "<tr><td>poznanie indywidualności i niepowtarzalności</td><td>poszukiwanie ogólnych praw funkcjonowania</td></tr>" +
      "<tr><td>szczegółowa analiza doświadczeń i kontekstu życia</td><td>porównywanie osób, zależności między zmiennymi</td></tr>" +
      "<tr><td>opis i rozumienie konkretnego przypadku</td><td>uogólnianie wyników i przewidywanie zachowania</td></tr></tbody></table></div>" +
      "<p>Źródło rozróżnienia: Allport (1937).</p>" +
      "<aside class='extra'><p>Gr. <i>idios</i> – własny, <i>nomos</i> – prawo.</p></aside>" },
    { id: "s4", n: 4, title: "Pytania badawcze i hipotezy", html:
      "<div class='plain'><p>Pytanie mówi, co chcemy wiedzieć. Hipoteza mówi, co naszym zdaniem wyjdzie.</p></div>" +
      "<ul><li><b>Pytanie badawcze</b> określa, czego chcemy się dowiedzieć. Jasne, precyzyjne, rozstrzygalne na podstawie danych. Może dotyczyć opisu zjawiska, różnic między grupami lub związku między zmiennymi.</li>" +
      "<li><b>Hipoteza badawcza</b> to przewidywana odpowiedź, sformułowana na podstawie teorii lub wcześniejszych badań; wskazuje oczekiwaną zależność lub różnicę i da się ją sprawdzić.</li>" +
      "<li>Pytanie wskazuje, <b>co sprawdzamy</b>, hipoteza – <b>jakiego wyniku oczekujemy</b>. W badaniach <b>eksploracyjnych</b> można zacząć od samych pytań (Price i in., 2015).</li></ul>" },
    { id: "s5", n: 5, title: "Zmienne i operacjonalizacja", html:
      "<div class='plain'><p>Badacz zmienia jedną rzecz (niezależną) i patrzy, co dzieje się z drugą (zależną). Żeby cokolwiek zmierzyć, trzeba najpierw zamienić pojęcie na liczbę lub obserwację.</p></div>" +
      "<!--fig:zmienne-->" +
      "<ul><li><b>Zmienna</b>: właściwość empiryczna (charakterystyka), która przyjmuje dwie lub więcej wartości (Bedyńska i Brzezicka, 2007).</li>" +
      "<li><b>Zmienna zależna</b>: przedmiot badania; staramy się zidentyfikować jej związek z innymi zmiennymi.</li>" +
      "<li><b>Zmienna niezależna</b>: badamy, jak zmiany jej wartości przekładają się na wyniki zmiennej zależnej.</li>" +
      "<li><b>Operacjonalizacja</b>: poszukiwanie empirycznych odpowiedników (wskaźników) terminów teoretycznych.</li></ul>" },
    { id: "s6", n: 6, title: "Badania ilościowe i jakościowe", html:
      "<div class='plain'><p>Albo liczymy, albo słuchamy i rozumiemy.</p></div>" +
      "<ul><li><b>Ilościowe</b>: wyniki liczbowe i analiza statystyczna. Przykład: związek wyniku skali stresu z liczbą godzin nauki.</li>" +
      "<li><b>Jakościowe</b>: doświadczenia, znaczenia i kontekst. Przykład: wywiady o przeżywaniu pierwszej sesji egzaminacyjnej.</li></ul>" },
    { id: "s7", n: 7, title: "Badania korelacyjne i eksperymentalne", html:
      "<div class='plain'><p>Korelacja mówi, że dwie rzeczy idą w parze. Tylko eksperyment mówi, co jest czego przyczyną.</p></div>" +
      "<ul><li><b>Korelacyjne</b>: pomiar zmiennych i sprawdzanie, czy oraz jak silnie są związane. Badacz <b>nie manipuluje</b> zmiennymi. Sam związek nie pozwala ustalić przyczyny i skutku.</li>" +
      "<li><b>Eksperymentalne</b>: <b>celowa zmiana</b> zmiennej niezależnej i pomiar jej wpływu na zależną, przy <b>kontrolowaniu</b> innych czynników. Prawidłowo zaplanowany eksperyment pozwala wnioskować o przyczynach i skutkach.</li></ul>" +
      "<aside class='extra'><p>Klasyczny przykład: sprzedaż lodów i liczba utonięć rosną razem latem. Przyczyną obu jest upał, a nie lody.</p></aside>" },
    { id: "s8", n: 8, title: "Zmienne zewnętrzne", html:
      "<div class='plain'><p>W każdym badaniu dzieje się więcej, niż chcemy zbadać. Część rzeczy trzymamy pod kontrolą, a część wkrada się sama i psuje wynik.</p></div>" +
      "<ul><li><b>Zmienne zewnętrzne</b>: wszystko, co zmienia się w kontekście badania, z wyjątkiem zmiennych niezależnych i zależnych. Nie są przedmiotem badania, ale kontroluje się je, by uniknąć zakłócenia wyników.</li>" +
      "<li><b>Zmienne kontrolne</b>: utrzymywane na stałym poziomie lub monitorowane, aby nie wpłynęły na wynik.</li>" +
      "<li><b>Czynniki zakłócające (szum)</b>: nieumyślnie wpływają zarówno na zmienne niezależne, jak i zależne, potencjalnie zniekształcając wyniki.</li></ul>" },
    { id: "s9", n: 9, title: "Metodologia w słynnych badaniach (Hock)", html:
      "<div class='plain'><p>Pojęcia z tych zajęć warto przećwiczyć na badaniach, które czytacie w książce Hocka.</p></div>" +
      "<div class='tscroll'><table><thead><tr><th>Badanie</th><th>Zmienna niezależna</th><th>Zmienna zależna</th><th>Typ</th></tr></thead><tbody>" +
      "<tr><td>Bandura, Ross, Ross (1961)</td><td>model agresywny / nieagresywny, płeć modela</td><td>liczba agresywnych zachowań dziecka</td><td>eksperyment</td></tr>" +
      "<tr><td>Rosenthal, Jacobson (1966)</td><td>oczekiwania nauczycieli („przyszli prymusi”)</td><td>przyrost IQ</td><td>eksperyment w szkole</td></tr>" +
      "<tr><td>Tolman (1948)</td><td>nagroda od początku / brak / od 11. dnia</td><td>liczba błędów w labiryncie</td><td>eksperyment</td></tr>" +
      "<tr><td>Loftus (1975)</td><td>sformułowanie pytania (presupozycja)</td><td>% odpowiedzi „tak”, liczba demonstrantów</td><td>eksperyment</td></tr></tbody></table></div>" +
      "<p><b>Efekt oczekiwań eksperymentatora</b>: badacz nieświadomie wysyła sygnały, a badani (nawet konie i szczury) reagują zgodnie z jego oczekiwaniami. Przykład: Mądry Hans; szczury „inteligentne” i „tępe” (Rosenthal, Fode, 1963). Ochrona: <b>podwójnie ślepa próba</b>.</p>" }
  ]
});
