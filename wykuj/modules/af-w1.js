/* Moduł: Antropologia filozoficzna, wykład 1: Cel i organizacja wykładu.
 *
 * Źródła: prezentacja prowadzącego (13 slajdów), skrypt „Wykład I. Cel i organizacja
 * wykładu”, tezy kursu oraz notatki studenta z dopowiedzeniami.
 *
 *   "S" slajd albo skrypt prowadzącego (domyślne, pomijane)
 *   "K" definicja do zapamiętania słowo w słowo
 *   "D" dopowiedzenie spoza materiałów prowadzącego (★). Egzamin próbny je pomija.
 *
 * Każde pojęcie ma pole plain: wyjaśnienie bez żargonu, pokazywane na fiszce
 * przed definicją z materiałów.
 */
Wykuj.registerModule({
  id: "af-w1",
  course: { id: "af", name: "Antropologia filozoficzna", short: "AF", theme: "indigo", icon: "column" },
  number: 1,
  title: "Czym jest antropologia filozoficzna",
  official: "Cel i organizacja wykładu",
  lecturer: null,
  term: "KUL · kurs dla psychologów · 01.10.2026",
  passing: null,
  examNote: "Zasady zaliczenia nie padły w materiałach. Próg 50% to tylko punkt odniesienia.",
  passRatio: 0.5,
  sourceNames: { S: "slajdy i skrypt prowadzącego", K: "definicja słowo w słowo", D: "★ dopowiedzenie spoza materiałów" },

  sets: {
    rodz: { label: "Która antropologia?", items: ["Przyrodnicza", "Kulturowa (społeczna)", "Teologiczna", "Filozoficzna"] },
    dych: { label: "Która dychotomia?", items: ["Człowiek – świat", "Wolność – konieczność", "Immanentność – transcendentność", "Dualizm – monizm – jedność duszy i ciała"] },
    cecha: { label: "Która cecha?", items: ["Realistyczna", "Autonomiczna", "Racjonalna", "Aposterioryczna"] },
    czesc: { label: "Która część kursu?", items: ["Wstępna", "Historyczna", "Systematyczna"] },
    typ: { label: "Który typ antropologii filozoficznej?", items: ["Nieautonomiczna", "Autonomiczna z pozaracjonalnymi źródłami", "Aprioryczna", "Aposterioryczna"] }
  },

  units: [
    { id: "nauki", title: "Wiele nauk, wiele kawałków", sub: "Slajd 01: kto bada który wycinek człowieka", icon: "split" },
    { id: "filo", title: "Jedna filozofia czy wiele?", sub: "Slajdy 02–03: koncepcja bytu i filozofia klasyczna", icon: "column" },
    { id: "praktyka", title: "Po co to komu?", sub: "Slajd 04: służebna rola filozofii", icon: "hand" },
    { id: "granice", title: "Czego nauki nie powiedzą", sub: "Slajd 05: wielkie pytania i dychotomie", icon: "wall" },
    { id: "definicja", title: "Definicja i etymologia", sub: "Slajdy 06–07: czym jest antropologia filozoficzna", icon: "book" },
    { id: "rodzaje", title: "Cztery antropologie", sub: "Slajdy 08–10: przyrodnicza, kulturowa, teologiczna, filozoficzna", icon: "pairs" },
    { id: "typy", title: "Drzewko typów", sub: "Skrypt: autonomiczna, racjonalna, aposterioryczna", icon: "path" },
    { id: "specyfika", title: "Przedmiot, cel, metoda", sub: "Slajd 11: uniesprzecznianie i R-A-R-A", icon: "target" },
    { id: "realizm", title: "Definicja do wykucia", sub: "Slajd 12: antropologia realistyczna", icon: "star" },
    { id: "plan", title: "Plan kursu", sub: "Slajd 12 i tezy: trzy części wykładu", icon: "path" },
    { id: "mix", title: "Która antropologia?", sub: "Rozpoznaj po opisie badacza", icon: "dice" },
    { id: "boss", title: "Test końcowy", sub: "Wszystko z wykładu, 15 pytań", icon: "crown", boss: true }
  ],

  concepts: [
    { id: "nauki-szcz", u: "nauki", term: "Nauki szczegółowe",
      plain: "Każda bada jeden kawałek człowieka: anatom ciało, biolog życie, psycholog psychikę. Robią to świetnie, ale żadna nie mówi, kim jest człowiek w całości.",
      def: "Badają szczegółowy odcinek rzeczywistości. Są znakomicie rozwinięte od strony treściowej, ale nie odpowiadają, kim jest człowiek całościowo wzięty.",
      sh: "badają jeden wycinek człowieka" },
    { id: "calosc", u: "nauki", term: "Ujęcie całościowe, integralne, uniwersalne",
      plain: "Cały człowiek (nie kawałek), poskładany w jedność (nie lista części) i każdy człowiek (nie tylko z jednej kultury czy epoki).",
      def: "Pytanie postawione na slajdzie 01: o ujęcie człowieka, które będzie fundamentem dla bardziej szczegółowych wyjaśnień. Dostarcza go filozofia.",
      sh: "cały człowiek, w jedności, każdy człowiek" },
    { id: "redukcjonizm", u: "nauki", s: "D", term: "Redukcjonizm",
      plain: "Pomylenie kawałka z całością: „człowiek to tylko mózg” albo „człowiek to tylko produkt kultury”.",
      def: "Uznanie jednego wycinka człowieka badanego przez jakąś naukę za całego człowieka.",
      sh: "jeden wycinek uznany za całość" },
    { id: "koncepcja-bytu", u: "filo", term: "Koncepcja bytu",
      plain: "Odpowiedź filozofa na pytanie, co w ogóle istnieje. Od niej zależy, kim jest dla niego człowiek. Ile koncepcji bytu, tyle modeli antropologii.",
      def: "Modele antropologii filozoficznych są zależne od koncepcji bytu, czyli od tego, jak dany filozof lub szkoła postrzega i wyjaśnia rzeczywistość.",
      sh: "od niej zależą modele antropologii" },
    { id: "klasyczna", u: "filo", term: "Filozofia klasyczna",
      plain: "Ta „podstawowa” filozofia, na której stoi cały kurs. Zakłada, że świat jest prawdziwy, i szuka najgłębszych powodów, dla których rzeczy są takie, jakie są.",
      def: "Bardziej podstawowy typ filozofii: philosophia perennis, realizm, charakter metafizyczny. Odwołuje się do wielkich filozofów-mistrzów, wyjaśnia realnie istniejący świat i w nim człowieka przez realne racje (przyczyny).",
      sh: "realistyczna, metafizyczna, wyjaśnia przez racje" },
    { id: "perennis", u: "filo", term: "Philosophia perennis",
      plain: "Po łacinie „filozofia wieczysta”. Idea, że jest jeden trwały rdzeń prawdziwej filozofii, od Arystotelesa do dziś.",
      def: "Inna nazwa filozofii klasycznej na slajdzie 03. Skrypt: jest jedna filozofia, tak jak jest jedna matematyka i jedna fizyka.",
      sh: "filozofia wieczysta" },
    { id: "realizm", u: "filo", term: "Realizm",
      plain: "Świat istnieje naprawdę i niezależnie od tego, co o nim myślę. Poznanie ma go po prostu uchwycić.",
      def: "Cecha filozofii klasycznej (slajd 03). Przeciwieństwo: idealizm, dla którego rzeczywistość jest w jakiejś mierze wytworem umysłu.",
      sh: "świat istnieje niezależnie od myśli" },
    { id: "racja", u: "filo", term: "Racja",
      plain: "Po prostu powód albo przyczyna: to, dzięki czemu coś jest i jest takie, jakie jest.",
      def: "Filozofia klasyczna wyjaśnia fakty „z odwołaniem się do ich realnych racji (przyczyn)”.",
      sh: "powód, przyczyna" },
    { id: "metafizyka", u: "filo", term: "Charakter metafizyczny",
      plain: "Nie tylko opisuje, co się dzieje, ale pyta „dlaczego w ogóle” i kopie do samego dna.",
      def: "Filozofia klasyczna ma charakter metafizyczny: szuka ostatecznych, najgłębszych przyczyn.",
      sh: "szukanie ostatecznych przyczyn" },
    { id: "sluzebna", u: "praktyka", term: "Służebna rola filozofii",
      plain: "Filozofia „pracuje” dla innych dziedzin: daje im spójny obraz człowieka, na którym mogą budować.",
      def: "Filozofia jako nauka teoretyczna jest służebna wobec innych nauk i wypracowuje antropologię, która integruje, a nie rozbija spojrzenie na człowieka, i pozostaje w zgodzie z dorobkiem nauk szczegółowych.",
      sh: "daje innym naukom spójny obraz człowieka" },
    { id: "praktyczne", u: "praktyka", term: "Dyscypliny praktyczne",
      plain: "Dziedziny, które coś z człowiekiem robią: uczą go, leczą, sądzą, rządzą nim. Muszą wiedzieć, kim on jest.",
      def: "Pedagogika, polityka, prawo, medycyna, bioetyka, teologia. Poszukują możliwie najpełniejszego filozoficznego obrazu człowieka.",
      sh: "pedagogika, prawo, medycyna, bioetyka…" },
    { id: "ontyczny", u: "granice", term: "Ontyczny",
      plain: "Bytowy. Dotyczy tego, czym coś jest i z czego się „składa” jako coś istniejącego.",
      def: "Od gr. on – byt. Struktura ontyczna człowieka to jego budowa bytowa.",
      sh: "dotyczący bytu (gr. on)" },
    { id: "struktura", u: "granice", term: "Struktura ontyczna",
      plain: "Z czego człowiek jest zbudowany jako byt: czy jest samym ciałem, czy ciałem i duszą, i jak to się trzyma razem.",
      def: "Budowa bytowa człowieka. Antropologia filozoficzna ma ją określić; nauki szczegółowe nie mówią, czy człowiek jest treściowo prosty czy złożony.",
      sh: "budowa bytowa człowieka" },
    { id: "wiez", u: "granice", term: "Więź bytowa",
      plain: "Klej, który trzyma części człowieka razem. Luźne połączenie dwóch rzeczy czy jedna zjednoczona całość?",
      def: "Nauki szczegółowe nie odpowiadają, jaki typ więzi bytowej przysługuje naturze ludzkiej.",
      sh: "to, co spaja części w całość" },
    { id: "absolut", u: "granice", term: "Absolut",
      plain: "Byt ostateczny, pierwsza przyczyna wszystkiego. W tej tradycji po prostu Bóg.",
      def: "Jeden z bytów, do których człowiek pozostaje w relacji (slajd 05): gatunek, społeczeństwo, kultura, przyroda, ponadczasowe wartości, Absolut.",
      sh: "byt ostateczny, pierwsza przyczyna" },
    { id: "dychotomie", u: "granice", term: "Dychotomie",
      plain: "Cztery wielkie „albo-albo” o człowieku, których nauki nie rozstrzygną. Dlatego potrzebna jest filozofia.",
      def: "Człowiek – świat, wolność – konieczność, immanentność – transcendentność, dualizm – monizm czy jedność duszy i ciała. Stąd konieczność antropologii filozoficznej.",
      sh: "cztery pary „albo-albo” o człowieku" },
    { id: "immanencja", u: "granice", s: "D", term: "Immanentność – transcendentność",
      plain: "Czy człowiek jest zamknięty w sobie i w świecie, czy wychodzi poza siebie: ku prawdzie, dobru, innym ludziom, Bogu?",
      def: "Jedna z dychotomii ze slajdu 05. Immanencja: pozostawanie w sobie. Transcendencja: przekraczanie siebie.",
      sh: "zamknięcie w sobie czy wyjście poza siebie" },
    { id: "dualizm", u: "granice", s: "D", term: "Dualizm, monizm, jedność",
      plain: "Dualizm: człowiek to dwie osobne rzeczy (dusza + ciało, Platon, Kartezjusz). Monizm: tylko jedna (np. sama materia). Jedność: jeden byt, w którym dusza ożywia ciało (Arystoteles, Tomasz).",
      def: "Filozoficzna wersja problemu psychofizycznego (umysł – mózg).",
      sh: "dwie rzeczy, jedna, czy jedność" },
    { id: "af", u: "definicja", term: "Antropologia filozoficzna",
      plain: "Filozofia człowieka. Próbuje wyjaśnić, kim jest człowiek i skąd się biorą jego typowo ludzkie działania.",
      def: "Najogólniej: wyjaśniająca interpretacja bytu ludzkiego, czyli człowieka i jego istotnie ludzkiego działania.",
      sh: "wyjaśniająca interpretacja bytu ludzkiego" },
    { id: "etymologia", u: "definicja", term: "Etymologia",
      plain: "„Antropologia” to po grecku „nauka o człowieku”: ánthropos + logos.",
      def: "Gr. ánthropos – człowiek; legein – zbierać, mówić, myśleć; logos – mowa, rozum, prawo, nauka.",
      sh: "ánthropos + legein/logos" },
    { id: "istotnie-ludzkie", u: "definicja", s: "D", term: "Istotnie ludzkie działanie",
      plain: "To, co robi tylko człowiek: myśli pojęciami, wybiera, kocha, tworzy, modli się. Nie trawienie czy odruchy, które mamy wspólne ze zwierzętami.",
      def: "Tradycja tomistyczna: actus humanus (czyn świadomy i wolny) w odróżnieniu od actus hominis (czynność, która „dzieje się” w człowieku).",
      sh: "działania typowe tylko dla człowieka" },
    { id: "odrebna", u: "definicja", term: "Odrębna dziedzina filozofii",
      plain: "Człowiek jest tu tym, co się bada, a nie okularami, przez które patrzy się na resztę świata.",
      def: "Antropologia filozoficzna to nie odczytanie filozoficzne ze stanowiska człowieka tez o przyrodzie, społeczeństwie i poznaniu, ale odrębna dziedzina filozofii, której głównym przedmiotem jest człowiek.",
      sh: "człowiek jako przedmiot, nie punkt widzenia" },
    { id: "wymiary", u: "definicja", term: "Wegetatywny, sensytywny, duchowy",
      plain: "Trzy piętra życia w człowieku: jak roślina (rośnie, odżywia się), jak zwierzę (czuje, porusza się) i to, co tylko ludzkie (myśli, decyduje).",
      def: "Wymiary człowieka ze slajdu 07 (obok metafizyczno-ontologicznego, moralno-etycznego, estetycznego, społeczno-kulturowego). Podział pochodzi od Arystotelesa.",
      sh: "życie roślinne, zmysłowe i rozumne" },
    { id: "przyrodnicza", u: "rodzaje", term: "Antropologia przyrodnicza",
      plain: "Człowiek jako gatunek w przyrodzie: ewolucja, rozwój, ciało, mózg. Mieszanka wielu nauk bez jednej metody.",
      def: "Korzysta z metod nauk szczegółowych, bada człowieka na gruncie świata przyrody. Dziedzina niejednolita, zlepek elementów wielu nauk. Dziś należą do niej m.in. neuronauki.",
      sh: "człowiek jako gatunek w przyrodzie" },
    { id: "kulturowa", u: "rodzaje", term: "Antropologia kulturowa (społeczna)",
      plain: "Patrzy na to, co ludzie tworzą (zwyczaje, obrzędy, instytucje) i z tego wnioskuje o człowieku. Zwykle uważa, że nie ma jednej wspólnej natury ludzkiej, tylko różne kultury.",
      def: "W ramach nauk humanistycznych (skrypt: postkantowskich), zlepek wielu nauk, bada wytwory kulturowe. Problem: odrzuca przeważnie wspólną gatunkowo naturę ludzką, przyjmuje kontekstualizm i historyzm.",
      sh: "wnioskuje o człowieku z wytworów kultury" },
    { id: "teologiczna", u: "rodzaje", term: "Antropologia teologiczna",
      plain: "Człowiek w relacji do Boga, badany w świetle Objawienia, czyli tego, co według wiary Bóg przekazał.",
      def: "Dział nauk teologicznych. Człowiek jako adresat Objawienia (w skrypcie: Zbawienia). Bada związek człowieka z Bogiem na bazie tez Objawienia; korzysta z antropologii filozoficznej i kulturowej.",
      sh: "człowiek w relacji do Boga, w świetle Objawienia" },
    { id: "kontekstualizm", u: "rodzaje", term: "Kontekstualizm i historyzm",
      plain: "Kontekstualizm: człowieka rozumiesz tylko w jego kulturze. Historyzm: człowiek to produkt swojej epoki. Razem podważają jedną wspólną naturę ludzką.",
      def: "Stanowiska, które przyjmuje antropologia kulturowa (slajd 09), rozumiejąc człowieka jako istotnie uwarunkowanego czynnikami kulturowo-społecznymi.",
      sh: "człowiek zależny od kultury i epoki" },
    { id: "nieautonomiczna", u: "typy", term: "Antropologia nieautonomiczna",
      plain: "Filozofia człowieka „na pożyczonych wynikach”: bierze, co ustaliły nauki (np. neuronauki), i je uogólnia. Według skryptu niewiele wnosi ponad to, co nauki już wiedzą.",
      def: "Uzależnia swoje twierdzenia od wyników innych nauk. Dominuje dziś; wyrosła na gruncie pozytywizmu, który dawał filozofii rolę metanauki albo dziedziny uogólniającej wyniki nauk szczegółowych.",
      sh: "oparta na wynikach nauk szczegółowych" },
    { id: "autonomiczna", u: "typy", term: "Antropologia autonomiczna",
      plain: "Filozofia człowieka na własnych nogach: ma swoją metodę, swój przedmiot i swój cel, nie pożycza przesłanek od nauk ani od teologii.",
      def: "Uprawiana w ramach autonomicznej filozofii, posiadającej własną metodę badań, przedmiot oraz cel. Dzieli się dalej według tego, jakie źródła poznania dopuszcza.",
      sh: "własna metoda, przedmiot i cel" },
    { id: "pozaracjonalne", u: "typy", term: "Źródła pozaracjonalne",
      plain: "Poznanie inne niż rozumowe: intuicja, przeżycie, wiara. Dopuszcza je np. egzystencjalizm. Antropologia z wykładu ich nie dopuszcza.",
      def: "Jeden z typów antropologii autonomicznej dopuszcza poza racjonalnymi źródłami poznania także źródła pozaracjonalne (np. egzystencjalizm).",
      sh: "poznanie inne niż rozumowe" },
    { id: "aprioryczna", u: "typy", term: "Aprioryczna a aposterioryczna",
      plain: "A priori: wymyślam w fotelu, zanim spojrzę na świat. A posteriori: najpierw patrzę na fakty z doświadczenia, potem je wyjaśniam. Wykład wybiera drugą drogę.",
      def: "Antropologia nie dopuszczająca pozaracjonalnych źródeł dzieli się na aprioryczną (czysto spekulatywną) i aposterioryczną (nabudowaną na opisie i uzasadnieniu specyficznie ludzkiego doświadczenia).",
      sh: "z założeń czy z doświadczenia" },
    { id: "przedmiot", u: "specyfika", term: "Przedmiot antropologii filozoficznej",
      plain: "Co bada? Człowieka jako coś, co realnie istnieje i ma swoją własną naturę.",
      def: "Człowiek rozpatrywany jako specyficzny element rzeczywistości, jako byt posiadający sobie właściwą naturę.",
      sh: "człowiek jako byt o właściwej sobie naturze" },
    { id: "cel", u: "specyfika", term: "Cel antropologii filozoficznej",
      plain: "Po co? Żeby dokopać się do najgłębszych powodów, dla których człowiek jest taki, jaki jest.",
      def: "Szukanie ostatecznych ontycznych racji bytu ludzkiego i wszystkich jego istotnych aspektów.",
      sh: "ostateczne racje bytu ludzkiego" },
    { id: "metoda", u: "specyfika", term: "Metoda antropologii filozoficznej",
      plain: "Jak? Bierzesz fakt i pytasz, co musi być prawdą o człowieku, żeby ten fakt był w ogóle możliwy.",
      def: "Wyjaśnianie, czyli wskazywanie racji podmiotowych i przedmiotowych dla faktów (metafizyczne uniesprzecznianie stanów bytowych danych w punkcie wyjścia).",
      sh: "wskazywanie racji dla faktów" },
    { id: "uniesprzecznianie", u: "specyfika", term: "Uniesprzecznianie",
      plain: "Detektywistyczne „co musi być prawdą?”. Fakt bez wyjaśnienia byłby sprzeczny, więc szukasz tego, co go czyni możliwym. Przykład: myślimy pojęciami ogólnymi, a materia jest zawsze konkretna, więc w człowieku musi być coś niematerialnego.",
      def: "Wskazanie racji, bez której fakt dany w doświadczeniu byłby sprzeczny, niemożliwy. Metoda antropologii filozoficznej.",
      sh: "szukanie tego, bez czego fakt byłby sprzeczny" },
    { id: "racje-pp", u: "specyfika", s: "D", term: "Racje podmiotowe i przedmiotowe",
      plain: "Podmiotowe są „po mojej stronie” (mam rozum, wolę). Przedmiotowe „po stronie tego, do czego się odnoszę” (świat, który poznaję, dobro, którego chcę).",
      def: "Metoda: wskazywanie racji podmiotowych i przedmiotowych dla faktów.",
      sh: "po stronie człowieka / po stronie przedmiotu" },
    { id: "egzystencjalny", u: "specyfika", term: "Aspekt egzystencjalny",
      plain: "Liczy się to, że człowiek naprawdę istnieje (ten konkretny, żywy), a nie tylko słownikowa definicja „człowieka”.",
      def: "Koncepcja uwzględnia oraz podkreśla egzystencjalny aspekt rzeczywistości, a nie tylko treść pojęcia „człowiek”.",
      sh: "realne istnienie, nie tylko pojęcie" },
    { id: "rara", u: "specyfika", term: "R-A-R-A",
      plain: "Cztery cechy antropologii z wykładu: Realistyczna (od prawdziwego człowieka), Autonomiczna (własna metoda), Racjonalna (tylko rozum), Aposterioryczna (od doświadczenia).",
      def: "Antropologia filozoficzna jest realistyczna, autonomiczna, racjonalna, aposterioryczna.",
      sh: "realistyczna, autonomiczna, racjonalna, aposterioryczna" },
    { id: "def-realistyczna", u: "realizm", s: "K", term: "Antropologia filozoficzna realistyczna",
      plain: "Patrzymy na to, co człowiek robi i tworzy, ale tylko po to, żeby z tych śladów odczytać, czym on jest i jakie ma miejsce w świecie.",
      def: "Dziedzina filozofii, która bada człowieka i jego działania i wytwory, o ile wskazują one na jego określoną strukturę ontyczną i egzystencjalną pozycję w świecie (Krąpiec).",
      sh: "działania i wytwory, o ile wskazują na strukturę" },
    { id: "podstawa", u: "realizm", term: "Podstawa innych dziedzin",
      plain: "Żeby wiedzieć, co jest dla człowieka dobre albo piękne, najpierw trzeba wiedzieć, kim on jest. Dlatego antropologia idzie przed etyką i estetyką.",
      def: "Z racji swego przedmiotu antropologia stanowi podstawę dla etyki, estetyki i filozofii kultury.",
      sh: "fundament etyki, estetyki, filozofii kultury" },
    { id: "metafizyka-szcz", u: "realizm", term: "Metafizyka szczegółowa",
      plain: "Ta sama metoda co w „wielkiej” metafizyce, tylko zastosowana do jednego rodzaju bytu: człowieka.",
      def: "Z racji swej metody antropologia stanowi jedną z tzw. metafizyk szczegółowych.",
      sh: "metoda metafizyki zastosowana do człowieka" },
    { id: "czesci", u: "plan", term: "Trzy części kursu",
      plain: "Najpierw „o czym i jak” (wstęp), potem rdzeń: co wiemy o człowieku (część systematyczna, najważniejsza), a do tego wybrane koncepcje człowieka z historii filozofii.",
      def: "Wstępna (zagadnienia metodologiczne), historyczna (koncepcje człowieka od starożytności po współczesność, zgodnie z koncepcją historyzmu), systematyczna (zasadniczy wykład przedmiotu).",
      sh: "wstępna, historyczna, systematyczna" },
    { id: "porzadek", u: "plan", term: "Porządek badawczy",
      plain: "Najpierw opisz, co widzisz. Potem wyjaśnij, skąd to się bierze.",
      def: "Od opisu danego faktu do jego uzasadnienia.",
      sh: "od opisu faktu do uzasadnienia" }
  ],

  exercises: [
    /* ---------- Nauki ---------- */
    { u: "nauki", t: "match", pairs: [
      ["cielesność", "anatomia, fizjologia"], ["procesy życiowe", "biologia"], ["psychika", "psychologia"],
      ["różne kultury", "etnologia"], ["myślenie", "kognitywistyka, neuronauki"]] },
    { u: "nauki", t: "match", pairs: [
      ["przynależność do przyrody", "przyrodoznawstwo"], ["kultura", "kulturoznawstwo"],
      ["etnologia to inaczej…", "antropologia kulturowa"], ["przyrodoznawstwo to inaczej…", "antropologia przyrodnicza"]] },
    { u: "nauki", t: "mcq", q: "Która nauka bada człowieka w aspekcie jego psychiki?", a: ["Psychologia", "Etnologia", "Fizjologia", "Kulturoznawstwo"] },
    { u: "nauki", t: "mcq", q: "Etnologia to inaczej antropologia…", a: ["kulturowa", "przyrodnicza", "teologiczna", "filozoficzna"] },
    { u: "nauki", t: "mcq", q: "Jaki jest według slajdu efekt tego, że człowieka badają różne nauki szczegółowe?",
      a: ["Różne koncepcje człowieka i akcent na jeden wymiar jego bytu", "Jedna pełna koncepcja człowieka uznana przez wszystkich",
          "Odrzucenie pytania o to, kim jest człowiek", "Zastąpienie filozofii przez neuronauki"] },
    { u: "nauki", t: "mcq", q: "O jakie ujęcie człowieka pyta slajd 01?",
      a: ["Całościowe, integralne i uniwersalne", "Szczegółowe, cząstkowe i empiryczne", "Kulturowe, historyczne i lokalne", "Biologiczne, psychiczne i społeczne"] },
    { u: "nauki", t: "cloze", q: "Nauki o człowieku badają go w aspektach szczegółowych i ___.", a: ["cząstkowych", "całościowych", "uniwersalnych", "duchowych"] },
    { u: "nauki", t: "mcq", q: "Gdzie według skryptu można szukać integralnej i całościowej wiedzy o człowieku?",
      a: ["W filozofii", "W neuronaukach", "W etnologii", "W anatomii"] },
    { u: "nauki", t: "type", q: "Nauki badające człowieka w aspekcie jego myślenia to kognitywistyka i…", a: ["neuronauki", "neuronauka"] },
    { u: "nauki", t: "tf", s: "D", q: "„Człowiek to tylko mózg” to przykład redukcjonizmu: jeden wycinek uznany za całego człowieka.", a: true },
    { u: "nauki", t: "mcq", s: "D", q: "Co znaczy, że ujęcie człowieka ma być „uniwersalne”?",
      a: ["Mówi coś o każdym człowieku, nie tylko o członku jednej kultury", "Łączy wszystkie nauki szczegółowe w jedną",
          "Spaja wymiary człowieka w jedność", "Jest uznawane przez wszystkie szkoły filozofii"] },
    { u: "nauki", t: "tf", q: "Na tym wykładzie psychologia jest jedną z nauk szczegółowych, które badają jeden aspekt człowieka.", a: true },

    /* ---------- Jedna filozofia czy wiele ---------- */
    { u: "filo", t: "mcq", q: "Od czego zależą różne modele antropologii filozoficznych?",
      a: ["Od koncepcji bytu", "Od metod nauk szczegółowych", "Od kultury badacza", "Od epoki historycznej"] },
    { u: "filo", t: "mcq", q: "Jaki problem z filozofią stawia slajd 02?",
      a: ["Wielość koncepcji filozofii, z różnym przedmiotem, celem i metodą", "Brak jakichkolwiek filozoficznych koncepcji człowieka",
          "Zgodność wszystkich filozofów co do natury człowieka", "Całkowitą zależność filozofii od teologii"] },
    { u: "filo", t: "mcq", q: "Jak wykład nazywa „bardziej podstawowy typ filozofii”?",
      a: ["Filozofia klasyczna", "Filozofia analityczna", "Fenomenologia", "Pozytywizm"] },
    { u: "filo", t: "type", q: "Łacińska nazwa filozofii klasycznej ze slajdu 03: philosophia…", a: ["perennis"] },
    { u: "filo", t: "mcq", q: "Co jest celem filozofii klasycznej?",
      a: ["Wyjaśnianie realnie istniejącego świata i w nim człowieka", "Opis przeżyć świadomości bez pytania o byt",
          "Analiza języka i znaczenia słów", "Uogólnianie wyników nauk szczegółowych"] },
    { u: "filo", t: "mcq", q: "Przez co filozofia klasyczna wyjaśnia podstawowe fakty?",
      a: ["Przez ich realne racje (przyczyny)", "Przez intuicję i przeżycie", "Przez eksperyment w laboratorium", "Przez tezy Objawienia"] },
    { u: "filo", t: "mcq", q: "Do kogo odwołuje się filozofia klasyczna?",
      a: ["Do wielkich filozofów – mistrzów", "Do wyników neuronauk", "Do opinii większości", "Wyłącznie do autorów współczesnych"] },
    { u: "filo", t: "mcq", q: "Jakim porównaniem skrypt uzasadnia, że jest „jedna filozofia”?",
      a: ["Ucząc się matematyki czy fizyki, nie uczymy się jednej z wielu ich koncepcji", "Jest jedna biologia, choć wiele gatunków",
          "Jest jeden język, choć wiele dialektów", "Jest jedna prawda w każdej religii"] },
    { u: "filo", t: "match", pairs: [
      ["Philosophia perennis", "filozofia wieczysta"], ["Realizm", "świat istnieje niezależnie od myśli"],
      ["Charakter metafizyczny", "szukanie ostatecznych przyczyn"], ["Racja", "przyczyna, powód"]] },
    { u: "filo", t: "tf", s: "D", q: "Idealizm to przeciwieństwo realizmu: rzeczywistość jest w jakiejś mierze wytworem umysłu.", a: true },
    { u: "filo", t: "mcq", s: "D", q: "Dla którego filozofa człowiek to przede wszystkim dusza „uwięziona” w ciele?",
      a: ["Platona", "Arystotelesa", "Tomasza z Akwinu", "Krąpca"] },
    { u: "filo", t: "cloze", q: "Wiele modeli antropologii filozoficznych zależy od koncepcji ___.", a: ["bytu", "kultury", "nauki", "języka"] },
    { u: "filo", t: "tf", q: "Według wykładu na pytanie „czy jest jedna filozofia?” odpowiadamy: tak, filozofia klasyczna.", a: true,
      x: "Skrypt: jest jedna filozofia ujmująca podstawowe fakty i wyjaśniająca je przez realne racje. To stanowisko tradycji klasycznej i tak odpowiadaj na teście." },

    /* ---------- Po co to komu ---------- */
    { u: "praktyka", t: "mcq", q: "Od jakich motywów zależy rozwój nauki w ostatnich dziesięcioleciach?",
      a: ["Bardziej praktycznych niż teoretycznych", "Wyłącznie teoretycznych", "Głównie religijnych", "Głównie artystycznych"] },
    { u: "praktyka", t: "mcq", q: "Które dyscypliny według slajdu szukają filozoficznego obrazu człowieka?",
      a: ["Pedagogika, polityka, prawo, medycyna, bioetyka, teologia", "Matematyka, fizyka, chemia, informatyka",
          "Astronomia, geologia, geografia, ekologia", "Logika, gramatyka, retoryka, poetyka"] },
    { u: "praktyka", t: "mcq", q: "Jaką rolę ma filozofia jako nauka teoretyczna wobec innych nauk?",
      a: ["Służebną", "Nadrzędną", "Konkurencyjną", "Żadną"] },
    { u: "praktyka", t: "tf", q: "Antropologia wypracowana przez filozofię ma integrować, a nie rozbijać spojrzenie na człowieka.", a: true },
    { u: "praktyka", t: "tf", q: "Teoria człowieka z filozofii może spokojnie przeczyć dorobkowi nauk szczegółowych.", a: false,
      x: "Slajd 04: ma pozostawać w zgodzie z dorobkiem nauk szczegółowych o człowieku." },
    { u: "praktyka", t: "mcq", q: "Jakie dwa warunki ma spełniać antropologia wypracowana przez filozofię?",
      a: ["Integruje spojrzenie na człowieka i zgadza się z dorobkiem nauk szczegółowych", "Zastępuje nauki szczegółowe i opiera się na Objawieniu",
          "Opisuje jeden wymiar człowieka i pomija resztę", "Uogólnia wyniki neuronauk i odrzuca metafizykę"] },
    { u: "praktyka", t: "mcq", s: "D", q: "Która praktyka musi rozstrzygnąć, od kiedy embrion jest człowiekiem?",
      a: ["Bioetyka", "Pedagogika", "Polityka", "Estetyka"] },
    { u: "praktyka", t: "tf", s: "D", q: "Każda szkoła psychoterapii (psychoanaliza, behawioryzm, psychologia humanistyczna) zakłada jakiś obraz człowieka.", a: true },
    { u: "praktyka", t: "type", q: "Filozofia jako nauka teoretyczna jest wobec innych nauk…", a: ["służebna", "sluzebna"] },
    { u: "praktyka", t: "cloze", q: "Filozofia wypracowuje antropologię, która ___, a nie rozbija spojrzenie na człowieka.", a: ["integruje", "zastępuje", "upraszcza", "ocenia"] },

    /* ---------- Granice nauk ---------- */
    { u: "granice", t: "mcq", q: "Na które pytanie NIE odpowiadają nauki szczegółowe?",
      a: ["Kim jest człowiek całościowo wzięty?", "Jak działa układ nerwowy?", "Jakie procesy życiowe zachodzą w organizmie?", "Czym różnią się zwyczaje kultur?"] },
    { u: "granice", t: "mcq", q: "Relacje człowieka z jakimi bytami wymienia slajd 05?",
      a: ["Gatunek, społeczeństwo, kultura, przyroda, ponadczasowe wartości, Absolut", "Rodzina, szkoła, praca, państwo, media, Kościół",
          "Zwierzęta, rośliny, minerały, planety", "Ciało, psychika, mózg, geny"] },
    { u: "granice", t: "mcq", q: "Czego nauki szczegółowe nie rozstrzygają o strukturze ontycznej człowieka?",
      a: ["Czy człowiek jest treściowo prosty czy złożony", "Ile neuronów ma ludzki mózg", "Jak przebiega rozwój mowy", "Ile trwają fazy snu"] },
    { u: "granice", t: "match", pairs: [
      ["człowiek", "świat"], ["wolność", "konieczność"], ["immanentność", "transcendentność"], ["dualizm – monizm", "czy jedność duszy i ciała"]] },
    { u: "granice", t: "mcq", q: "Co wynika z tego, że nauki szczegółowe nie wyjaśniają dychotomii?",
      a: ["Konieczność antropologii filozoficznej", "Rezygnacja z badań nad człowiekiem", "Wyższość neuronauk nad filozofią", "Potrzeba nowej nauki szczegółowej"] },
    { u: "granice", t: "mcq", q: "Kogo cytuje skrypt w sprawie dychotomii, których nauki nie rozstrzygają?",
      a: ["S. Kamińskiego", "K. Wojtyłę", "Arystotelesa", "Kartezjusza"] },
    { u: "granice", t: "which", set: "dych", s: "D", q: "Czy działamy wolno, czy jesteśmy zdeterminowani biologią i środowiskiem?", a: 2 },
    { u: "granice", t: "which", set: "dych", s: "D", q: "Czy człowiek jest po prostu częścią przyrody, czy ją w jakiś sposób przewyższa?", a: 1 },
    { u: "granice", t: "which", set: "dych", s: "D", q: "Czy człowiek jest zamknięty w sobie, czy wychodzi poza siebie ku prawdzie, dobru i innym?", a: 3 },
    { u: "granice", t: "which", set: "dych", s: "D", q: "Czy człowiek to dwie osobne rzeczy, sama materia, czy jeden byt z duszą i ciałem?", a: 4 },
    { u: "granice", t: "mcq", q: "Co znaczy „ontyczny”?", a: ["Bytowy, dotyczący bytu", "Dotyczący poznania", "Dotyczący moralności", "Dotyczący piękna"] },
    { u: "granice", t: "mcq", s: "D", q: "Kto reprezentuje dualizm?", a: ["Platon i Kartezjusz", "Arystoteles i Tomasz z Akwinu", "Krąpiec i Kamiński", "Huizinga i Rogers"] },
    { u: "granice", t: "type", q: "Budowa bytowa człowieka to jego struktura…", a: ["ontyczna"] },
    { u: "granice", t: "cloze", q: "Nauki szczegółowe są znakomicie rozwinięte od strony ___.", a: ["treściowej", "metafizycznej", "całościowej", "filozoficznej"] },

    /* ---------- Definicja ---------- */
    { u: "definicja", t: "mcq", q: "Najogólniejsza definicja antropologii filozoficznej to…",
      a: ["wyjaśniająca interpretacja bytu ludzkiego i jego istotnie ludzkiego działania", "zlepek elementów wielu nauk szczegółowych o człowieku",
          "dział teologii badający człowieka jako adresata Objawienia", "analiza wytworów kultury, z których wnioskuje się o naturze"] },
    { u: "definicja", t: "type", q: "Inna nazwa antropologii filozoficznej ze slajdu: filozofia…", a: ["człowieka", "czlowieka"] },
    { u: "definicja", t: "match", pairs: [["ánthropos", "człowiek"], ["legein", "zbierać, mówić, myśleć"], ["logos", "mowa, rozum, prawo, nauka"]] },
    { u: "definicja", t: "mcq", q: "Co znaczy greckie ánthropos?", a: ["Człowiek", "Rozum", "Byt", "Dusza"] },
    { u: "definicja", t: "tf", q: "Antropologia filozoficzna to patrzenie na przyrodę, społeczeństwo i poznanie z punktu widzenia człowieka.", a: false,
      x: "Odwrotnie. Slajd 07: to NIE jest takie odczytanie, tylko odrębna dziedzina filozofii, której głównym przedmiotem jest człowiek." },
    { u: "definicja", t: "mcq", q: "Co jest głównym przedmiotem antropologii filozoficznej?", a: ["Człowiek", "Przyroda", "Społeczeństwo", "Poznanie"] },
    { u: "definicja", t: "mcq", q: "Które wymiary człowieka wymienia slajd 07?",
      a: ["Metafizyczno-ontologiczny, moralno-etyczny, estetyczny, społeczno-kulturowy", "Biologiczny, chemiczny, fizyczny, mechaniczny",
          "Rodzinny, zawodowy, towarzyski, religijny", "Świadomy, przedświadomy, nieświadomy, zbiorowy"] },
    { u: "definicja", t: "cloze", q: "Inaczej: wymiary wegetatywny, sensytywny i ___.", a: ["duchowy", "społeczny", "kulturowy", "cielesny"] },
    { u: "definicja", t: "mcq", q: "Co oprócz odpowiedzi „kim jest człowiek” ma określić antropologia filozoficzna?",
      a: ["Jego strukturę ontyczną i miejsce wśród innych bytów", "Jego pochodzenie etniczne i język", "Jego iloraz inteligencji", "Jego miejsce w hierarchii społecznej"] },
    { u: "definicja", t: "match", s: "D", pairs: [["Wegetatywny", "odżywianie, wzrost"], ["Sensytywny", "zmysły, popędy, ruch"], ["Duchowy", "intelekt, wola"]] },
    { u: "definicja", t: "mcq", s: "D", q: "Które działanie jest „istotnie ludzkie”?", a: ["Wolna decyzja", "Trawienie", "Odruch kolanowy", "Wzrost włosów"] },
    { u: "definicja", t: "mcq", q: "Przed czym według Kamińskiego (skrypt) nie uchroni filozoficzna interpretacja, która pomija wiedzę o obiektywnej rzeczywistości?",
      a: ["Przed subiektywizmem", "Przed redukcjonizmem biologicznym", "Przed dogmatyzmem religijnym", "Przed relatywizmem kulturowym"] },
    { u: "definicja", t: "mcq", q: "Jak skrypt określa stosunek filozofii człowieka do metafizyki?",
      a: ["Nie może od niej abstrahować, ale nie jest tylko jej rozwinięciem: to metafizyka człowieka", "Jest od metafizyki całkowicie niezależna",
          "Jest tylko przykładem zastosowania metafizyki ogólnej", "Zastępuje metafizykę jako nowsza dyscyplina"] },

    /* ---------- Cztery antropologie ---------- */
    { u: "rodzaje", t: "mcq", q: "Jakie cztery rodzaje antropologii omówiono?",
      a: ["Przyrodniczą, kulturową, teologiczną, filozoficzną", "Biologiczną, psychologiczną, społeczną, religijną",
          "Fizyczną, chemiczną, kulturową, filozoficzną", "Starożytną, średniowieczną, nowożytną, współczesną"] },
    { u: "rodzaje", t: "which", set: "rodz", q: "Korzysta z metod nauk szczegółowych i bada człowieka na gruncie świata przyrody.", a: 1 },
    { u: "rodzaje", t: "which", set: "rodz", q: "Działa w ramach nauk humanistycznych i bada wytwory kulturowe człowieka.", a: 2 },
    { u: "rodzaje", t: "which", set: "rodz", q: "Bada związek człowieka z Bogiem na bazie tez Objawienia.", a: 3 },
    { u: "rodzaje", t: "which", set: "rodz", q: "Bada człowieka na bazie koncepcji bytu (podejście metafizyczne).", a: 4 },
    { u: "rodzaje", t: "which", set: "rodz", q: "Przyjmuje kontekstualizm i historyzm, odrzucając przeważnie wspólną naturę ludzką.", a: 2 },
    { u: "rodzaje", t: "which", set: "rodz", q: "Dotyczy rozwoju gatunkowego i osobniczego, otoczenia przyrodniczego i procesów życiowych.", a: 1 },
    { u: "rodzaje", t: "which", set: "rodz", q: "Korzysta z innych antropologii, szczególnie z filozoficznej i kulturowej.", a: 3 },
    { u: "rodzaje", t: "which", set: "rodz", q: "Zalicza się do niej dziś badania nauk neuronalnych.", a: 1 },
    { u: "rodzaje", t: "mcq", q: "Jaki problem antropologii kulturowej wskazuje slajd 09?",
      a: ["Odrzuca przeważnie wspólną gatunkowo naturę ludzką", "Nie korzysta z żadnych faktów kulturowych",
          "Opiera się wyłącznie na Objawieniu", "Bada tylko procesy życiowe organizmu"] },
    { u: "rodzaje", t: "mcq", q: "W jakim aspekcie antropologia kulturowa wnioskuje o „naturze” człowieka?",
      a: ["Najczęściej psychologicznym bądź socjologicznym", "Najczęściej metafizycznym", "Wyłącznie biologicznym", "Wyłącznie teologicznym"] },
    { u: "rodzaje", t: "tf", q: "Antropologia przyrodnicza ma jedną, jednolitą metodę.", a: false,
      x: "Slajd 08: dziedzina niejednolita (brak jednolitej metody), zlepek elementów wielu nauk szczegółowych." },
    { u: "rodzaje", t: "mcq", q: "Czym według slajdu 08 stają się odpowiednio opracowane wnioski neuronauk?",
      a: ["Elementami współczesnych nieautonomicznych antropologii filozoficznych", "Podstawą antropologii teologicznej",
          "Dowodem na istnienie duszy", "Częścią antropologii kulturowej"] },
    { u: "rodzaje", t: "mcq", q: "Według jakich dwóch tradycji uprawia się antropologię kulturową (skrypt)?",
      a: ["Niemieckiej i anglosaskiej", "Francuskiej i włoskiej", "Greckiej i rzymskiej", "Polskiej i rosyjskiej"] },
    { u: "rodzaje", t: "mcq", q: "W ramach jakich nauk powstała antropologia kulturowa według skryptu?",
      a: ["Postkantowskich nauk humanistycznych", "Średniowiecznej teologii", "Nauk przyrodniczych XIX wieku", "Filozofii klasycznej"] },
    { u: "rodzaje", t: "mcq", q: "Na czym według skryptu antropologia teologiczna opiera wyjaśnianie działań osobowych?",
      a: ["Na racjonalnie analizowanych tezach religii chrześcijańskiej", "Na wynikach neuronauk", "Na analizie obrzędów różnych kultur", "Na uczuciach i intuicji wiernych"] },
    { u: "rodzaje", t: "cloze", q: "Antropologia kulturowa przyjmuje kontekstualizm i ___.", a: ["historyzm", "realizm", "dualizm", "aprioryzm"] },
    { u: "rodzaje", t: "sort", q: "Przyrodnicza czy kulturowa?", cats: ["Przyrodnicza", "Kulturowa"], items: [
      ["metody nauk szczegółowych", 0], ["gatunek ludzki na tle innych gatunków", 0], ["procesy życiowe", 0],
      ["nauki humanistyczne", 1], ["wytwory kulturowe człowieka", 1], ["kontekstualizm i historyzm", 1]] },
    { u: "rodzaje", t: "match", s: "D", pairs: [
      ["Filogeneza", "rozwój gatunku"], ["Ontogeneza", "rozwój jednostki"],
      ["Kontekstualizm", "człowiek tylko w kontekście kultury"], ["Historyzm", "człowiek jako wytwór epoki"]] },

    /* ---------- Drzewko typów (skrypt) ---------- */
    { u: "typy", t: "mcq", q: "Według skryptu zasadniczy podział antropologii filozoficznej dotyczy tego, czy jest…",
      a: ["autonomiczna, czy zależna od wyników innych nauk", "starożytna, czy współczesna", "religijna, czy świecka", "polska, czy zagraniczna"] },
    { u: "typy", t: "mcq", q: "Na gruncie jakiego nurtu wyrosła dziś dominująca, nieautonomiczna antropologia?",
      a: ["Pozytywizmu", "Egzystencjalizmu", "Tomizmu", "Platonizmu"] },
    { u: "typy", t: "mcq", q: "Jaką rolę pozytywizm przypisywał filozofii?",
      a: ["Metanauki albo dziedziny uogólniającej wyniki nauk szczegółowych", "Królowej nauk, ponad wszystkimi naukami",
          "Służebnicy teologii", "Sztuki życia bez związku z nauką"] },
    { u: "typy", t: "mcq", q: "Jaki zarzut stawia skrypt antropologii nieautonomicznej?",
      a: ["Niewiele wnosi ponad wyniki innych nauk albo dochodzi do zbyt ogólnych tez", "Jest zbyt religijna",
          "Ignoruje wyniki nauk szczegółowych", "Opiera się tylko na intuicji"] },
    { u: "typy", t: "which", set: "typ", q: "Uogólnia wyniki nauk szczegółowych; wyrosła z pozytywizmu.", a: 1 },
    { u: "typy", t: "which", set: "typ", q: "Obok rozumu dopuszcza źródła pozaracjonalne, np. egzystencjalizm.", a: 2 },
    { u: "typy", t: "which", set: "typ", q: "Czysto spekulatywna, budowana bez wyjścia od doświadczenia.", a: 3 },
    { u: "typy", t: "which", set: "typ", q: "Nabudowana na opisie i uzasadnieniu specyficznie ludzkiego doświadczenia.", a: 4 },
    { u: "typy", t: "which", set: "typ", q: "To ją proponuje wykład (realistyczna filozofia człowieka).", a: 4 },
    { u: "typy", t: "mcq", q: "Który nurt skrypt podaje jako przykład antropologii dopuszczającej źródła pozaracjonalne?",
      a: ["Egzystencjalizm", "Pozytywizm", "Tomizm", "Strukturalizm"] },
    { u: "typy", t: "mcq", q: "Od kogo według skryptu zaczynają się dzieje filozoficznego namysłu nad człowiekiem?",
      a: ["Od Sokratesa", "Od Platona", "Od Kartezjusza", "Od Kanta"] },
    { u: "typy", t: "mcq", q: "Kiedy według skryptu najostrzej postawiono problem człowieka?",
      a: ["W XVI–XVII wieku, na gruncie teoriopoznawczego antropocentryzmu", "W starożytnej Grecji, u sofistów",
          "W średniowieczu, w sporach chrystologicznych", "W XX wieku, w neuronaukach"] },
    { u: "typy", t: "tf", q: "Realistyczna filozofia człowieka wyklucza pozaracjonalne źródła poznania.", a: true },
    { u: "typy", t: "type", q: "Antropologia czysto spekulatywna, budowana z założeń przed doświadczeniem, to antropologia…", a: ["aprioryczna"] },

    /* ---------- Przedmiot, cel, metoda ---------- */
    { u: "specyfika", t: "mcq", q: "Jak definiuje antropologię filozoficzną slajd 11?",
      a: ["Dziedzina filozofii badająca człowieka na bazie rozumienia rzeczywistości (koncepcji bytu)", "Nauka badająca człowieka na bazie wyników neuronauk",
          "Nauka badająca wytwory kultury i wnioskująca z nich o naturze", "Dział teologii badający związek człowieka z Bogiem"] },
    { u: "specyfika", t: "match", pairs: [
      ["Przedmiot", "człowiek jako byt o właściwej sobie naturze"], ["Cel", "ostateczne ontyczne racje bytu ludzkiego"],
      ["Metoda", "wskazywanie racji dla faktów"]] },
    { u: "specyfika", t: "mcq", q: "Co jest przedmiotem badań antropologii filozoficznej?",
      a: ["Człowiek jako specyficzny element rzeczywistości, byt o sobie właściwej naturze", "Człowiek jako organizm na tle innych gatunków",
          "Człowiek jako twórca i wytwór konkretnej kultury", "Człowiek jako adresat Objawienia"] },
    { u: "specyfika", t: "mcq", q: "Co jest celem antropologii filozoficznej?",
      a: ["Szukanie ostatecznych ontycznych racji bytu ludzkiego", "Opis zachowań człowieka w różnych sytuacjach",
          "Pomiar zdolności poznawczych człowieka", "Porównywanie zwyczajów różnych kultur"] },
    { u: "specyfika", t: "mcq", q: "Jaka jest metoda antropologii filozoficznej?",
      a: ["Wyjaśnianie: wskazywanie racji podmiotowych i przedmiotowych dla faktów", "Eksperyment: sprawdzanie hipotez w laboratorium",
          "Egzegeza: odczytywanie tekstów objawionych", "Obserwacja terenowa zwyczajów różnych ludów"] },
    { u: "specyfika", t: "type", q: "Metafizyczne ______ stanów bytowych to fachowa nazwa metody.", a: ["uniesprzecznianie", "uniesprzecznienie"] },
    { u: "specyfika", t: "mcq", q: "Jaki aspekt rzeczywistości podkreśla ta koncepcja, a nie tylko treść pojęcia „człowiek”?",
      a: ["Egzystencjalny", "Estetyczny", "Językowy", "Kulturowy"] },
    { u: "specyfika", t: "which", set: "cecha", q: "Punktem wyjścia jest realnie istniejący człowiek, a nie idee.", a: 1 },
    { u: "specyfika", t: "which", set: "cecha", q: "Ma własną metodę i nie bierze twierdzeń nauk szczegółowych ani teologii za przesłanki.", a: 2 },
    { u: "specyfika", t: "which", set: "cecha", q: "Uzasadnia twierdzenia rozumem, a nie wiarą czy uczuciem.", a: 3 },
    { u: "specyfika", t: "which", set: "cecha", q: "Wychodzi od doświadczenia.", a: 4 },
    { u: "specyfika", t: "mcq", q: "Która cecha NIE należy do antropologii filozoficznej w ujęciu wykładu?",
      a: ["Aprioryczna", "Autonomiczna", "Realistyczna", "Racjonalna"] },
    { u: "specyfika", t: "type", q: "Cechy: realistyczna, autonomiczna, racjonalna i…", a: ["aposterioryczna"] },
    { u: "specyfika", t: "mcq", s: "D", q: "Który fakt jest klasycznym przykładem do uniesprzeczniania?",
      a: ["Myślimy pojęciami ogólnymi, choć wszystko materialne jest jednostkowe", "Potrzebujemy snu, żeby funkcjonować",
          "Żyjemy w społeczeństwie", "Mamy układ nerwowy"] },
    { u: "specyfika", t: "sort", s: "D", q: "Racja podmiotowa czy przedmiotowa?", cats: ["Podmiotowa", "Przedmiotowa"], items: [
      ["rozum", 0], ["wola", 0], ["budowa człowieka", 0], ["poznawana rzeczywistość", 1], ["dobro, którego się chce", 1]] },
    { u: "specyfika", t: "mcq", s: "D", q: "Definicja „zwierzę rozumne” to przykład…",
      a: ["treści pojęcia „człowiek”", "aspektu egzystencjalnego", "racji przedmiotowej", "antropologii kulturowej"] },

    /* ---------- Definicja realistyczna ---------- */
    { u: "realizm", t: "mcq", s: "K", q: "Która to definicja antropologii filozoficznej realistycznej?",
      a: ["Bada człowieka i jego działania i wytwory, o ile wskazują na jego strukturę ontyczną i pozycję w świecie",
          "Bada wytwory kultury, by wyprowadzić wnioski o „naturze” człowieka w aspekcie społecznym",
          "Bada człowieka na gruncie świata przyrody, korzystając z metod nauk szczegółowych",
          "Bada związek człowieka z Bogiem na bazie tez Objawienia i rozumu"] },
    { u: "realizm", t: "cloze", s: "K", q: "…o ile wskazują one na jego określoną strukturę ontyczną i ___ pozycję w świecie.",
      a: ["egzystencjalną", "społeczną", "biologiczną", "historyczną"] },
    { u: "realizm", t: "cloze", s: "K", q: "Dziedzina filozofii, która bada człowieka i jego działania i ___, o ile wskazują one na jego strukturę ontyczną.",
      a: ["wytwory", "geny", "emocje", "zwyczaje"] },
    { u: "realizm", t: "mcq", q: "Kto jest autorem tej definicji według skryptu?", a: ["M. A. Krąpiec", "S. Kamiński", "K. Wojtyła", "Arystoteles"] },
    { u: "realizm", t: "mcq", q: "Dla jakich dziedzin antropologia jest podstawą z racji swego przedmiotu?",
      a: ["Etyki, estetyki, filozofii kultury", "Logiki, matematyki, fizyki", "Teologii, prawa, medycyny", "Psychologii, socjologii, biologii"] },
    { u: "realizm", t: "mcq", q: "Czym jest antropologia z racji swej metody?",
      a: ["Jedną z metafizyk szczegółowych", "Jedną z nauk przyrodniczych", "Działem teologii", "Częścią kulturoznawstwa"] },
    { u: "realizm", t: "tf", q: "Z racji przedmiotu antropologia jest metafizyką szczegółową, a z racji metody podstawą etyki.", a: false,
      x: "Odwrotnie. Z racji PRZEDMIOTU: podstawa etyki, estetyki i filozofii kultury. Z racji METODY: metafizyka szczegółowa." },
    { u: "realizm", t: "mcq", q: "Co według skryptu antropologia zakłada (suponuje), a co wyprzedza?",
      a: ["Zakłada metafizykę ogólną i filozofię przyrody, wyprzedza psychologię, etykę, estetykę", "Zakłada psychologię i etykę, wyprzedza metafizykę",
          "Zakłada teologię, wyprzedza nauki przyrodnicze", "Niczego nie zakłada i niczego nie wyprzedza"] },
    { u: "realizm", t: "mcq", s: "D", q: "Dlaczego antropologia jest podstawą etyki?",
      a: ["Żeby wiedzieć, co jest dobre dla człowieka, trzeba wiedzieć, kim on jest", "Bo etyka jest częścią antropologii kulturowej",
          "Bo etyka korzysta z metod neuronauk", "Bo antropologia ustala przepisy prawa"] },
    { u: "realizm", t: "mcq", s: "D", q: "Jak antropolog traktuje działania i wytwory człowieka (myślenie, sztukę, język)?",
      a: ["Jako ślady, które pokazują, jakim bytem jest człowiek", "Jako cel badań sam w sobie",
          "Jako dane do pomiaru statystycznego", "Jako dowód wyższości jednej kultury"] },

    /* ---------- Plan kursu ---------- */
    { u: "plan", t: "mcq", q: "Z ilu części składa się wykład przedmiotowy?", a: ["Trzech", "Dwóch", "Czterech", "Pięciu"] },
    { u: "plan", t: "which", set: "czesc", q: "Obejmuje zagadnienia metodologiczne.", a: 1 },
    { u: "plan", t: "which", set: "czesc", q: "Najważniejsze koncepcje człowieka w dziejach filozofii, od starożytności po współczesność.", a: 2 },
    { u: "plan", t: "which", set: "czesc", q: "Od specyficznie ludzkiego doświadczenia, przez uniesprzecznienie struktury bytowej, do istotnie ludzkich działań.", a: 3 },
    { u: "plan", t: "which", set: "czesc", q: "Według skryptu najistotniejsza, centralna część kursu.", a: 3 },
    { u: "plan", t: "which", set: "czesc", q: "Element wykładu „zgodnie z koncepcją historyzmu”.", a: 2 },
    { u: "plan", t: "mcq", q: "Jaki porządek badawczy zachowuje wykład?",
      a: ["Od opisu danego faktu do jego uzasadnienia", "Od uzasadnienia do opisu faktu", "Od definicji do przykładów", "Od historii do teraźniejszości"] },
    { u: "plan", t: "mcq", q: "Co jest teoretycznym punktem wyjścia części systematycznej?",
      a: ["Specyficznie ludzkie doświadczenie", "Definicja człowieka jako zwierzęcia rozumnego", "Wyniki neuronauk", "Tezy Objawienia"] },
    { u: "plan", t: "tf", s: "D", q: "„Historyzm” jako problem antropologii kulturowej (slajd 09) i „koncepcja historyzmu” w planie kursu (slajd 12) znaczą to samo.", a: false,
      x: "Slajd 09: człowiek jako wytwór epoki (stanowisko o człowieku). Slajd 12: wykładanie przedmiotu także przez jego dzieje (sposób nauczania)." },
    { u: "plan", t: "mcq", q: "Który podręcznik jest podstawowy według tez kursu?",
      a: ["M. A. Krąpiec, „Ja – człowiek”", "Arystoteles, „O duszy”", "K. Wojtyła, „Osoba i czyn”", "A. Siemianowski, „Antropologia filozoficzna”"] },
    { u: "plan", t: "mcq", q: "Który temat według tez należy do części systemowej kursu?",
      a: ["Struktura bytu ludzkiego: złożenie z duszy i ciała", "Źródła orfickie antropologii", "Antropologia Kartezjusza i Hume'a", "Bibliografia przedmiotu"] },
    { u: "plan", t: "mcq", q: "Który temat według tez należy do historii antropologii?",
      a: ["Boecjusz i definicja osoby", "Fakt ludzki dostępny w doświadczeniu", "Człowiek i sztuka", "Filozoficzna interpretacja śmierci"] },

    /* ---------- Która antropologia? ---------- */
    { u: "mix", t: "which", set: "rodz", s: "D", q: "Badaczka porównuje obrzędy w trzech plemionach i dochodzi do wniosku, że „natura ludzka” to wytwór kultury.", a: 2 },
    { u: "mix", t: "which", set: "rodz", s: "D", q: "Badacz analizuje szkielety hominidów, żeby opisać ewolucję gatunku.", a: 1 },
    { u: "mix", t: "which", set: "rodz", s: "D", q: "Badacz pyta, co musi być w człowieku, skoro potrafi myśleć pojęciami ogólnymi.", a: 4 },
    { u: "mix", t: "which", set: "rodz", s: "D", q: "Badaczka czyta Pismo Święte, żeby zrozumieć powołanie człowieka.", a: 3 },
    { u: "mix", t: "which", set: "rodz", q: "Neuronaukowiec wyjaśnia stany psychiczne pracą mózgu.", a: 1 },
    { u: "mix", t: "which", set: "rodz", q: "Badacz szuka ostatecznych ontycznych racji bytu ludzkiego.", a: 4 },
    { u: "mix", t: "which", set: "rodz", q: "Badacz uważa, że człowiek jest istotnie uwarunkowany czynnikami kulturowo-społecznymi.", a: 2 },
    { u: "mix", t: "mcq", q: "Którą antropologię wykład uznaje za autonomiczną i właściwą dla tego kursu?",
      a: ["Filozoficzną realistyczną", "Przyrodniczą opartą na neuronaukach", "Kulturową opartą na kontekstualizmie", "Teologiczną opartą na Objawieniu"] },
    { u: "mix", t: "mcq", q: "Które pytanie należy do antropologii filozoficznej, a nie do nauk szczegółowych?",
      a: ["Czy człowiek jest prosty czy złożony w swojej strukturze ontycznej?", "Jaki jest czas reakcji na bodziec?",
          "Jak zbudowany jest mięsień sercowy?", "Jak przebiegają obrzędy weselne?"] }
  ],

  sortDecks: [
    { id: "pytania", title: "Nauka szczegółowa czy filozofia?", sub: "Kto odpowie na to pytanie?",
      cats: ["Nauki szczegółowe", "Antropologia filozoficzna"], items: [
        ["Jak zbudowane jest serce?", 0], ["Jak przebiegają procesy życiowe?", 0], ["Jak działa pamięć robocza?", 0],
        ["Czym różnią się zwyczaje plemion?", 0], ["Jak mózg przetwarza bodźce?", 0], ["Jak dziecko uczy się mówić?", 0],
        ["badanie szczegółowego odcinka rzeczywistości", 0], ["akcent na jeden wymiar człowieka", 0],
        ["Kim jest człowiek całościowo wzięty?", 1], ["Czy człowiek jest prosty czy złożony ontycznie?", 1],
        ["Jaki typ więzi bytowej ma natura ludzka?", 1], ["Jaki jest sens człowieka w perspektywie ontycznej?", 1],
        ["Jak człowiek ma się do Absolutu?", 1], ["Czy jesteśmy wolni, czy zdeterminowani?", 1],
        ["szukanie ostatecznych racji bytu ludzkiego", 1], ["ujęcie całościowe, integralne, uniwersalne", 1]] },
    { id: "cechy", title: "Pasuje do antropologii z wykładu?", sub: "Cechy antropologii filozoficznej realistycznej",
      cats: ["Nie pasuje", "Pasuje"], items: [
        ["realistyczna", 1], ["autonomiczna", 1], ["racjonalna", 1], ["aposterioryczna", 1], ["metafizyczna", 1],
        ["odrębna dziedzina filozofii", 1], ["wyjaśnia przez racje", 1], ["podkreśla aspekt egzystencjalny", 1],
        ["podstawa etyki i estetyki", 1], ["jedna z metafizyk szczegółowych", 1],
        ["aprioryczna", 0], ["czysto spekulatywna", 0], ["nieautonomiczna", 0], ["oparta na Objawieniu", 0],
        ["zlepek wielu nauk", 0], ["przyjmuje kontekstualizm", 0], ["dział nauk teologicznych", 0],
        ["uogólnia wyniki neuronauk", 0], ["dopuszcza źródła pozaracjonalne", 0], ["patrzy na wszystko ze stanowiska człowieka", 0]] },
    { id: "przyr-kult", title: "Przyrodnicza czy kulturowa?", sub: "Dwie antropologie, które łatwo pomylić",
      cats: ["Przyrodnicza", "Kulturowa"], items: [
        ["metody nauk szczegółowych", 0], ["człowiek na gruncie świata przyrody", 0], ["gatunek ludzki na tle innych gatunków", 0],
        ["rozwój gatunkowy i osobniczy", 0], ["otoczenie przyrodnicze", 0], ["procesy życiowe", 0], ["badania nauk neuronalnych", 0],
        ["brak jednolitej metody", 0], ["nauki humanistyczne", 1], ["wytwory kulturowe człowieka", 1],
        ["wnioski w aspekcie psychologicznym lub socjologicznym", 1], ["kontekstualizm", 1], ["historyzm", 1],
        ["odrzuca wspólną naturę ludzką", 1], ["tradycja niemiecka i anglosaska", 1], ["etnologia", 1]] }
  ],

  minimum: [
    ["Dlaczego w ogóle ten przedmiot?", "Nauki szczegółowe (biologia, psychologia, etnologia…) widzą tylko kawałek człowieka. Potrzebne jest ujęcie <b>całościowe, integralne i uniwersalne</b>, a takie daje filozofia."],
    ["Na jakiej filozofii stoi kurs?", "Na <b>filozofii klasycznej</b> (philosophia perennis): realistycznej i metafizycznej, wyjaśniającej świat przez <b>realne racje (przyczyny)</b>."],
    ["Najkrótsza definicja", "<b>Wyjaśniająca interpretacja bytu ludzkiego</b>, czyli człowieka i jego istotnie ludzkiego działania. Inna nazwa: filozofia człowieka."],
    ["Definicja do wykucia", "Dziedzina filozofii, która bada człowieka i jego <b>działania i wytwory, o ile wskazują one</b> na jego określoną <b>strukturę ontyczną i egzystencjalną pozycję w świecie</b>."],
    ["Przedmiot, cel, metoda", "<b>Przedmiot:</b> człowiek jako byt o właściwej sobie naturze. <b>Cel:</b> ostateczne ontyczne racje bytu ludzkiego. <b>Metoda:</b> wyjaśnianie przez racje, czyli <b>uniesprzecznianie</b>."],
    ["Cztery cechy: R-A-R-A", "<b>R</b>ealistyczna, <b>A</b>utonomiczna, <b>R</b>acjonalna, <b>A</b>posterioryczna. Pułapka na teście: „aprioryczna” NIE pasuje."],
    ["Cztery antropologie", "<b>Przyrodnicza</b> (gatunek w przyrodzie, metody nauk, neuronauki), <b>kulturowa</b> (wytwory kultury; problem: odrzuca wspólną naturę), <b>teologiczna</b> (relacja do Boga, Objawienie), <b>filozoficzna</b> (koncepcja bytu)."],
    ["Cztery dychotomie", "Człowiek – świat, wolność – konieczność, immanentność – transcendentność, dualizm – monizm czy jedność duszy i ciała."],
    ["Z racji przedmiotu / z racji metody", "Z racji <b>przedmiotu</b>: podstawa etyki, estetyki, filozofii kultury. Z racji <b>metody</b>: jedna z metafizyk szczegółowych. Łatwo zamienić, uważaj."],
    ["Plan kursu", "Trzy części: <b>wstępna</b> (metodologia), <b>historyczna</b> (koncepcje człowieka w dziejach), <b>systematyczna</b> (najważniejsza). Porządek: <b>od opisu faktu do uzasadnienia</b>."]
  ],

  story: {
    title: "Słowniczek z filozoficznego na nasze",
    intro: "Najtrudniejsze słowa z wykładu przetłumaczone na zwykły język. Na teście używaj jednak słów z lewej kolumny.",
    items: [
      ["ontyczny", "bytowy: dotyczy tego, czym coś jest i z czego się składa"],
      ["racja", "powód, przyczyna"],
      ["uniesprzecznianie", "szukanie tego, co musi być prawdą, żeby fakt w ogóle był możliwy"],
      ["metafizyczny", "pytający o najgłębsze „dlaczego”, a nie tylko „jak”"],
      ["a posteriori", "z doświadczenia (najpierw fakty, potem wyjaśnienie)"],
      ["a priori", "przed doświadczeniem, z samych założeń"],
      ["autonomiczny", "samodzielny, z własną metodą"],
      ["immanentny / transcendentny", "zamknięty w sobie / wychodzący poza siebie"],
      ["egzystencjalny", "dotyczący realnego istnienia, a nie samej definicji"],
      ["Absolut", "byt ostateczny, w tej tradycji Bóg"],
      ["philosophia perennis", "filozofia wieczysta, klasyczna"],
      ["kontekstualizm / historyzm", "człowiek zależny od kultury / od epoki"]
    ]
  },

  table: {
    title: "Cztery antropologie w jednej tabeli",
    head: ["Antropologia", "Gdzie się mieści", "Co bada", "Na czym się opiera", "Haczyk"],
    rows: [
      ["Przyrodnicza", "nauki szczegółowe", "gatunek ludzki na tle innych gatunków, rozwój gatunkowy i osobniczy, otoczenie, procesy życiowe", "metody nauk szczegółowych", "niejednolita, bez jednej metody; dziś też neuronauki"],
      ["Kulturowa (społeczna)", "nauki humanistyczne", "wytwory kulturowe; wnioski o „naturze” w aspekcie psychologicznym lub socjologicznym", "analiza faktów kulturowych", "odrzuca wspólną naturę ludzką: kontekstualizm i historyzm"],
      ["Teologiczna", "dział nauk teologicznych", "związek człowieka z Bogiem; człowiek jako adresat Objawienia (w skrypcie: Zbawienia)", "tezy Objawienia, racjonalnie analizowane", "korzysta z antropologii filozoficznej i kulturowej"],
      ["Filozoficzna", "odrębna dziedzina filozofii", "człowiek jako byt o właściwej sobie naturze", "koncepcja bytu (podejście metafizyczne)", "realistyczna, autonomiczna, racjonalna, aposterioryczna"]
    ]
  },

  notes: [
    { id: "n1", n: 1, title: "Dlaczego potrzebna jest filozofia człowieka", html:
      "<div class='plain'><p>Człowiekiem zajmuje się mnóstwo nauk, ale każda patrzy tylko na swój kawałek. Anatom widzi ciało, psycholog psychikę, etnolog kulturę. Wychodzi z tego wiele różnych obrazów człowieka, a żaden nie jest całością.</p></div>" +
      "<div class='tscroll'><table><thead><tr><th>Człowiek badany w aspekcie…</th><th>Nauka</th></tr></thead><tbody>" +
      "<tr><td>cielesności</td><td>anatomia, fizjologia</td></tr><tr><td>procesów życiowych</td><td>biologia</td></tr>" +
      "<tr><td>psychiki</td><td>psychologia</td></tr><tr><td>przynależności do świata przyrody</td><td>przyrodoznawstwo (= antropologia przyrodnicza)</td></tr>" +
      "<tr><td>różnych kultur</td><td>etnologia (= antropologia kulturowa)</td></tr><tr><td>kultury</td><td>kulturoznawstwo</td></tr>" +
      "<tr><td>myślenia</td><td>kognitywistyka, neuronauki</td></tr></tbody></table></div>" +
      "<p><b>Efekt:</b> różne koncepcje człowieka, akcent na jeden wymiar ludzkiego bytu. Stąd pytanie o ujęcie <b>całościowe, integralne i uniwersalne</b>, które będzie fundamentem dla bardziej szczegółowych wyjaśnień. Według skryptu taki fundament daje filozofia.</p>" +
      "<aside class='extra'><p>Pomylenie kawałka z całością („człowiek to tylko mózg”) to redukcjonizm. Psychologia jest tu jedną z nauk szczegółowych.</p></aside>" },
    { id: "n2", n: 2, title: "Jedna filozofia czy wiele?", html:
      "<div class='plain'><p>Kłopot: filozofii jest dużo i każda widzi człowieka inaczej, bo każda inaczej rozumie, co w ogóle istnieje. Wykład rozwiązuje to tak: jest jedna „podstawowa” filozofia, klasyczna, i na niej budujemy.</p></div>" +
      "<ul><li>Wielość koncepcji filozofii (różny przedmiot, cel, metody), więc wiele interpretacji człowieka.</li>" +
      "<li>Wiele modeli antropologii, <b>zależnych od koncepcji bytu</b>.</li></ul>" +
      "<p><b>Bardziej podstawowy typ:</b> <mark>filozofia klasyczna</mark> · philosophia perennis · realizm · charakter metafizyczny. Odwołuje się do wielkich filozofów-mistrzów. Cel: wyjaśniać realnie istniejący świat i w nim człowieka. Wyjaśnia fakty przez ich <b>realne racje (przyczyny)</b>.</p>" +
      "<p>Skrypt: jest jedna filozofia, tak jak ucząc się matematyki czy fizyki nie uczymy się „jednej z wielu koncepcji” matematyki czy fizyki.</p>" +
      "<aside class='extra'><p>Przykłady koncepcji bytu: materialista widzi w człowieku układ materii, Platon duszę uwięzioną w ciele, Arystoteles i Tomasz jedność duszy i ciała. Inne nurty (fenomenologia, filozofia analityczna) nie zgodziłyby się, że klasyczna to „ta jedna”, ale na teście trzymaj się wykładu.</p></aside>" },
    { id: "n3", n: 3, title: "Po co to komu: służebna rola filozofii", html:
      "<div class='plain'><p>Nauczyciel, lekarz, sędzia czy terapeuta zawsze zakładają jakąś odpowiedź na pytanie „kim jest człowiek”. Filozofia ma im dać spójną odpowiedź, która nie kłóci się z tym, co ustaliły nauki.</p></div>" +
      "<ul><li>Rozwój nauki zależy dziś od motywów <b>bardziej praktycznych niż teoretycznych</b>.</li>" +
      "<li>Dyscypliny praktyczne szukają filozoficznego obrazu człowieka: <b>pedagogika, polityka, prawo, medycyna, bioetyka, teologia</b>.</li>" +
      "<li>Filozofia jest <b>służebna</b> wobec innych nauk. Jej antropologia <b>integruje, a nie rozbija</b> spojrzenie na człowieka i jest <b>w zgodzie z dorobkiem nauk szczegółowych</b>.</li></ul>" +
      "<aside class='extra'><p>Dla psychologa: każda szkoła terapii (psychoanaliza, behawioryzm, psychologia humanistyczna) stoi na jakimś obrazie człowieka.</p></aside>" },
    { id: "n4", n: 4, title: "Czego nauki szczegółowe nie powiedzą", html:
      "<div class='plain'><p>Nauki świetnie opisują szczegóły, ale nie odpowiedzą na wielkie pytania: kim jestem jako całość, z czego się „składam”, co mnie trzyma w jedności i jaki to ma sens.</p></div>" +
      "<p>Nauki szczegółowe są znakomicie rozwinięte <b>od strony treściowej</b>, ale nie mówią:</p>" +
      "<ul><li>kim jest człowiek <b>całościowo wzięty</b>;</li><li>w jakich relacjach jest do innych bytów: gatunku, społeczeństwa, kultury, przyrody, ponadczasowych wartości, <b>Absolutu</b>;</li>" +
      "<li>czy jest treściowo <b>prosty czy złożony</b> w swojej strukturze ontycznej;</li><li>jaki typ <b>więzi bytowej</b> ma natura ludzka;</li><li>jaki jest <b>sens</b> człowieka w perspektywie ontycznej.</li></ul>" +
      "<p><b>Dychotomie</b> (skrypt powołuje się tu na S. Kamińskiego): człowiek – świat · wolność – konieczność · immanentność – transcendentność · dualizm – monizm czy jedność duszy i ciała. <b>Stąd konieczność antropologii filozoficznej.</b></p>" +
      "<aside class='extra'><p>Po ludzku: czy jesteśmy częścią przyrody, czy czymś więcej? Czy jesteśmy wolni? Czy wychodzimy poza siebie? Czy jesteśmy dwiema rzeczami (Platon, Kartezjusz), jedną materią, czy jednym bytem z duszą i ciałem (Arystoteles, Tomasz)? Ostatnia para to filozoficzna wersja problemu umysł – mózg.</p></aside>" },
    { id: "n5", n: 5, title: "Czym jest antropologia filozoficzna", html:
      "<div class='plain'><p>To filozofia człowieka. Człowiek jest w niej tym, co się bada, a nie punktem widzenia na resztę świata. Ma go objąć ze wszystkich stron i powiedzieć, co spaja go w jedną całość.</p></div>" +
      "<div class='key'><p><b>Najogólniej:</b> wyjaśniająca interpretacja bytu ludzkiego, czyli człowieka i jego istotnie ludzkiego działania.</p></div>" +
      "<p><b>Etymologia</b> (gr.): ánthropos – człowiek · legein – zbierać, mówić, myśleć · logos – mowa, rozum, prawo, nauka.</p>" +
      "<p>To <b>nie</b> odczytanie ze stanowiska człowieka tez o przyrodzie, społeczeństwie i poznaniu, ale <b>odrębna dziedzina filozofii</b>, której głównym przedmiotem jest człowiek. Ujmuje go w wymiarach metafizyczno-ontologicznym, moralno-etycznym, estetycznym, społeczno-kulturowym, czyli inaczej <b>wegetatywnym, sensytywnym i duchowym</b>. Szuka odpowiedzi, kim jest człowiek jako jedność tych porządków, jaka jest jego struktura ontyczna i miejsce wśród innych bytów.</p>" +
      "<p>Skrypt (Kamiński): bez wiedzy o obiektywnej rzeczywistości filozofia człowieka nie uchroni się przed <b>subiektywizmem</b>. Nie może abstrahować od metafizyki, ale nie jest tylko jej rozwinięciem: jest <b>metafizyką człowieka</b>.</p>" +
      "<aside class='extra'><p>Wegetatywny, sensytywny, duchowy to trzy „piętra” życia według Arystotelesa: roślinne, zmysłowe i rozumne. Istotnie ludzkie działania to np. myślenie pojęciami, wolne decyzje, miłość, twórczość, religia.</p></aside>" },
    { id: "n6", n: 6, title: "Cztery antropologie", html:
      "<div class='plain'><p>Słowo „antropologia” ma cztery znaczenia. Przyrodnicza patrzy na gatunek, kulturowa na to, co ludzie tworzą, teologiczna na relację z Bogiem, a filozoficzna na to, czym człowiek jest jako byt. Pełne porównanie jest w tabeli niżej.</p></div>" +
      "<p><b>Przyrodnicza:</b> metody nauk szczegółowych, człowiek na gruncie przyrody; <b>niejednolita</b> (brak jednej metody), zlepek wielu nauk. Gatunek na tle innych gatunków, rozwój gatunkowy i osobniczy, otoczenie, procesy życiowe. Dziś także <b>neuronauki</b>, których wnioski stają się elementami <b>nieautonomicznych</b> antropologii filozoficznych.</p>" +
      "<p><b>Kulturowa (społeczna):</b> nauki humanistyczne (skrypt: postkantowskie; tradycja niemiecka i anglosaska), zlepek wielu nauk, bada wytwory kulturowe i z nich wnioskuje o „naturze” człowieka, najczęściej psychologicznie lub socjologicznie. <b>Problem:</b> przeważnie odrzuca wspólną gatunkowo naturę ludzką; przyjmuje <b>kontekstualizm i historyzm</b>.</p>" +
      "<p><b>Teologiczna:</b> dział nauk teologicznych; człowiek jako adresat Objawienia (tak na slajdzie; w skrypcie: Zbawienia). Bada związek człowieka z Bogiem na bazie <b>tez Objawienia</b>; korzysta z antropologii filozoficznej i kulturowej.</p>" +
      "<p><b>Filozoficzna:</b> dziedzina filozofii badająca człowieka na bazie rozumienia rzeczywistości (bytu). Człowiek jako specyficzny element świata o właściwej sobie naturze.</p>" +
      "<aside class='extra'><p>Kontekstualizm: człowieka zrozumiesz tylko w jego kulturze. Historyzm: człowiek jest wytworem epoki. Filogeneza to rozwój gatunku, ontogeneza rozwój jednostki.</p></aside>" },
    { id: "n7", n: 7, title: "Drzewko: jaka filozofia człowieka?", html:
      "<div class='plain'><p>Skrypt pokazuje, jak dochodzi się do antropologii z tego kursu. To cztery rozwidlenia, a na każdym wybieramy jedną drogę. Gdy zrozumiesz drzewko, cechy R-A-R-A przestaną być listą do wykucia.</p></div>" +
      "<ul class='tree'><li><b>Antropologia filozoficzna</b><ul>" +
      "<li class='no'><b>nieautonomiczna</b>: uzależnia twierdzenia od wyników innych nauk; dziś dominuje; wyrosła z pozytywizmu (filozofia jako metanauka); wnosi niewiele ponad nauki.</li>" +
      "<li><b>autonomiczna</b>: własna metoda, przedmiot i cel<ul>" +
      "<li class='no'><b>dopuszcza źródła pozaracjonalne</b>, np. egzystencjalizm</li>" +
      "<li><b>tylko źródła rozumowe</b> (racjonalna)<ul>" +
      "<li class='no'><b>aprioryczna</b>: czysto spekulatywna</li>" +
      "<li class='yes'><b>aposterioryczna</b>: od opisu i uzasadnienia specyficznie ludzkiego doświadczenia. <em>To antropologia z wykładu.</em></li>" +
      "</ul></li></ul></li></ul></li></ul>" +
      "<p>Dzieje namysłu nad człowiekiem zaczynają się od <b>Sokratesa</b>. Najostrzej problem człowieka postawiono w <b>XVI–XVII wieku</b> (teoriopoznawczy antropocentryzm).</p>" },
    { id: "n8", n: 8, title: "Przedmiot, cel, metoda", html:
      "<div class='plain'><p>Trzy pytania: co badamy, po co i jak. Najtrudniejsze słowo to „uniesprzecznianie”, ale chodzi o zwykłe rozumowanie detektywa: skoro ten fakt zachodzi, co musi być prawdą o człowieku, żeby był możliwy?</p></div>" +
      "<div class='key'><p>Antropologia filozoficzna jest dziedziną filozofii badającą człowieka na bazie rozumienia rzeczywistości (koncepcji bytu – podejście metafizyczne).</p></div>" +
      "<div class='tscroll'><table><tbody>" +
      "<tr><th>Przedmiot</th><td>człowiek jako specyficzny element rzeczywistości, byt posiadający sobie właściwą naturę</td></tr>" +
      "<tr><th>Cel</th><td>szukanie ostatecznych ontycznych racji bytu ludzkiego i wszystkich jego istotnych aspektów</td></tr>" +
      "<tr><th>Metoda</th><td>wyjaśnianie, czyli wskazywanie racji podmiotowych i przedmiotowych dla faktów (metafizyczne uniesprzecznianie stanów bytowych)</td></tr>" +
      "</tbody></table></div>" +
      "<p>Podkreśla <b>egzystencjalny</b> aspekt rzeczywistości (to, że człowiek realnie istnieje), a nie tylko treść pojęcia „człowiek”.</p>" +
      "<p>Jest: <mark>R</mark>ealistyczna · <mark>A</mark>utonomiczna · <mark>R</mark>acjonalna · <mark>A</mark>posterioryczna.</p>" +
      "<aside class='extra'><p>Uniesprzecznianie w czterech krokach: (1) fakt z doświadczenia → (2) co musi istnieć, żeby nie był sprzeczny? → (3) wskazanie tej racji → (4) bez niej fakt byłby niemożliwy. Przykład: myślimy pojęciami ogólnymi, a materia jest zawsze jednostkowa, więc w człowieku musi być czynnik niematerialny. Racje podmiotowe są po stronie człowieka (rozum, wola), przedmiotowe po stronie tego, do czego się odnosi (świat, dobro).</p></aside>" },
    { id: "n9", n: 9, title: "Definicja do wykucia i miejsce w filozofii", html:
      "<div class='plain'><p>Antropologa nie interesuje, co człowiek robi, tylko co z tego wynika o tym, kim on jest. Działania i wytwory to ślady, po których się do tego dochodzi.</p></div>" +
      "<div class='key'><p>Dziedzina filozofii, która bada człowieka i jego działania i wytwory, <b>o ile</b> wskazują one na jego określoną <b>strukturę ontyczną</b> i <b>egzystencjalną pozycję w świecie</b>. (Krąpiec)</p></div>" +
      "<ul><li>Z racji <b>przedmiotu</b>: podstawa dla <b>etyki, estetyki, filozofii kultury</b>.</li>" +
      "<li>Z racji <b>metody</b>: jedna z tzw. <b>metafizyk szczegółowych</b>.</li></ul>" +
      "<p>Skrypt: antropologia <b>zakłada</b> metafizykę ogólną i filozofię przyrody, a <b>wyprzedza</b> psychologię (rozumianą jako nauka o duszy), etykę, estetykę i całą filozofię kultury.</p>" +
      "<aside class='extra'><p>Dlaczego podstawa etyki? Żeby wiedzieć, co jest dobre dla człowieka, trzeba najpierw wiedzieć, kim on jest.</p></aside>" },
    { id: "n10", n: 10, title: "Plan kursu", html:
      "<div class='plain'><p>Ten wykład był wstępem. Najważniejsza będzie część systematyczna: co wiemy o człowieku i jak to uzasadniamy. Historia filozofii pojawi się wybiórczo, już po części systemowej.</p></div>" +
      "<ol><li><b>Wstępna</b>: zagadnienia metodologiczne (ten wykład).</li>" +
      "<li><b>Historyczna</b> (zgodnie z koncepcją historyzmu): najważniejsze koncepcje człowieka od starożytności po współczesność.</li>" +
      "<li><b>Systematyczna</b> (centralna i najistotniejsza): od specyficznie ludzkiego doświadczenia, przez uzasadnienie (uniesprzecznienie) struktury bytowej, do istotnie ludzkich działań.</li></ol>" +
      "<p>Porządek badawczy: <b>od opisu danego faktu do jego uzasadnienia</b>.</p>" +
      "<p><b>Co dalej według tez:</b> fakt ludzki „od zewnątrz” i „od wewnątrz” (Ja i akty „moje”), dusza i ciało, osoba – natura – kultura, poznanie i prawda, działanie (miłość, wolność, moralność, uczucia, dobro i zło), człowiek wobec społeczności, sztuka i piękno, człowiek jako byt religijny, śmierć. Potem historia: źródła biblijne i orfickie, starożytność, średniowiecze (Augustyn, Nemezjusz z Emezy, Boecjusz, Tomasz) i nowożytność (od Kartezjusza po postmodernizm).</p>" +
      "<p><b>Podręcznik:</b> M. A. Krąpiec, „Ja – człowiek”. Wersja skrócona: „Człowiek jako osoba”. Antropologia w pigułce: „Rozmowy z Ojcem Krąpcem: O człowieku”.</p>" +
      "<aside class='extra'><p>Uwaga na dwa „historyzmy”: na slajdzie 09 to pogląd, że człowiek jest wytworem epoki (problem antropologii kulturowej), a w planie kursu to sposób wykładania przedmiotu przez jego dzieje.</p></aside>" }
  ]
});
