/* Ćwiczenia u dr Wioletty Ozgi (grupy 1, 2, 3, 8, 10), lektury i czytanki: czytanka 2.
 *
 * Źródła (zrzuty ekranu od studenta, Dysk Google „modul 2 i 3 ozga/2modul_czesc_*.pdf”, 80 stron):
 *   P. Francuz, „Imagia”: s. 59–65 (od siatkówki do kory), 120–129 (ostrość widzenia),
 *     132–148 (kontury, pasma Macha, kanały ON/OFF, hamowanie oboczne),
 *     223–262 (głębia: wskaźniki, stałość kształtu i wielkości, interpozycja)
 *   J.W. Kalat, „Biologiczne podstawy psychologii”, s. 162–163 (równoległe drogi wzrokowe)
 *   „Psychologia. Podręcznik akademicki”, rozdz. 14, s. 45–47 (organizacja percepcyjna)
 *
 *   "S" z czytanki (domyślne)
 *   "D" dopowiedzenie spoza czytanki (★). Kartkówka próbna je pomija.
 */
Wykuj.registerModule({
  id: "oz-c2",
  kind: "reading",
  course: { id: "ozga", name: "Dr Wioletta Ozga", short: "Ćw. Ozga", groups: "grupy 1, 2, 3, 8, 10", theme: "amber", icon: "book", section: "cw" },
  shelf: "Lektury i czytanki – po ludzku",
  number: 2,
  label: "Czytanka 2",
  title: "Kontury, szlaki i głębia",
  byline: "Francuz „Imagia” + Kalat + podręcznik akademicki",
  sources: [
    "P. Francuz, „Imagia”, s. 59–65, 120–129, 132–148 i 223–262",
    "J.W. Kalat, „Biologiczne podstawy psychologii”, rozdz. 6 „Wzrok”, s. 162–163",
    "„Psychologia. Podręcznik akademicki”, rozdz. 14 „Spostrzeganie jako mechanizm tworzenia doświadczenia”, s. 45–47"
  ],
  term: "Ćwiczenia · lektura",
  passing: null,
  passRatio: 0.6,
  examNote: "Nie wiadomo, jak prowadząca sprawdza czytanki. Próg 60% to punkt odniesienia: kto go przekracza, zna tekst dobrze.",
  minimumTitle: "Najważniejsze w 5 minut",
  sourceNames: { S: "z czytanki", D: "★ dopowiedzenie spoza czytanki" },

  sets: {
    szlak: { label: "Który szlak (Francuz, Kalat)?", numbered: true,
      items: ["Wielkokomórkowy (M)", "Drobnokomórkowy (P)", "Pyłkokomórkowy (K)"],
      why: ["duże komórki i pola, szybki; ruch i duże kształty; nie rozróżnia barw",
            "małe komórki i pola, wolniejszy; szczegóły, kontrast, barwy",
            "ok. 10% komórek zwojowych, warstwa między 2 a 3 w LGN; zwykle liczony do drobnokomórkowego"] },
    grupa: { label: "Która grupa jednoocznych wskaźników głębi?", numbered: true,
      items: ["Relacje między elementami (interpozycja, transpozycja, perspektywa)", "Zacieranie konturów (gradient tekstury, ostrość detali)", "Luminancja i barwa (światłocień, perspektywa powietrzna, separacja barw)"],
      why: ["głębia z układu rzeczy względem siebie i ram obrazu",
            "im mniej zróżnicowana powierzchnia, tym dalej",
            "im jaśniej, tym bliżej; mgiełka oddala; ciepłe barwy bliżej (sporne)"] },
    prawo: { label: "Które prawo grupowania (psychologia postaci)?", numbered: true,
      items: ["Prawo bliskości", "Prawo podobieństwa", "Prawo domykania", "Prawo wspólnej drogi"],
      why: ["elementy położone blisko siebie tworzą figurę",
            "elementy podobne tworzą figurę",
            "system percepcyjny dodaje brakujące elementy figury",
            "elementy poruszające się w tym samym kierunku tworzą jedną figurę"] },
    stalosc: { label: "Stałość kształtu czy wielkości?", numbered: true,
      items: ["Stałość kształtu", "Stałość wielkości"],
      why: ["ten sam przedmiot mimo innego punktu widzenia, oświetlenia, przysłonięcia",
            "właściwa wielkość mimo odległości, czyli mimo innej wielkości obrazu na siatkówce"] }
  },

  units: [
    { id: "lgn", title: "Ciało kolankowate boczne", sub: "Francuz s. 59–61: warstwy M, P i K", icon: "diamond", table: true, seq: true,
      teach: "<p>Pierwsza stacja w mózgu to <b>LGN</b> we wzgórzu: sześć warstw jak w przekrojonej fasoli. Warstwy <b>1–2</b> to duże komórki (<b>M</b>, wielkokomórkowe), <b>3–6</b> małe (<b>P</b>, drobnokomórkowe), a między 2 i 3 leżą komórki <b>K</b> (pyłkowe).</p>" +
        "<p>Szlak <b>M</b> jest szybki i czuły na ruch, szlak <b>P</b> wolniejszy, ale widzi szczegóły i kolory.</p>" },
    { id: "kora", title: "Do kory wzrokowej", sub: "Promienistość, frenologia, V1 (s. 61–65)", icon: "bulb" },
    { id: "drogi", title: "Równoległe drogi: co i gdzie", sub: "Kalat s. 162–163", icon: "split" },
    { id: "ostrosc", title: "Ostrość widzenia", sub: "Pola recepcyjne i tablica Snellena (s. 120–123)", icon: "eye" },
    { id: "monaliza", title: "Uśmiech Mona Lizy", sub: "Widzenie centralne i obwodowe w sztuce (s. 124–129)", icon: "star" },
    { id: "kontury", title: "Kontur to skok jasności", sub: "Marr i Hildreth, mapa uwagi (s. 129–134)", icon: "pencil" },
    { id: "mach", title: "Pasma Macha", sub: "Iluzja na granicy jasności (s. 135–138)", icon: "column" },
    { id: "onoff", title: "Kanały ON i OFF", sub: "Centrum i otoczka pola recepcyjnego (s. 138–143)", icon: "sun", seq: true,
      teach: "<p>Pole recepcyjne komórki zwojowej ma <b>centrum</b> i <b>otoczkę</b>. Kanał <b>ON</b> mówi mózgowi „tu jest jasno”, kanał <b>OFF</b> „tu jest ciemno”.</p>" +
        "<p>Gdy całe pole jest oświetlone jednakowo, komórka reaguje umiarkowanie: to tylko powierzchnia, a nie krawędź. Hubel: wnętrza jednolitych płaszczyzn są dla mózgu „nieciekawe”.</p>" },
    { id: "hamowanie", title: "Hamowanie oboczne w liczbach", sub: "Jak powstają pasma Macha (s. 143–148)", icon: "pulse", seq: true,
      teach: "<p>Komórki amakrynowe <b>hamują</b> sąsiednie komórki dwubiegunowe o 20% światła, które do nich dociera. Na jasnym polu (100) każda komórka traci 20 + 20 i zostaje <b>60</b>; na ciemnym (50) traci 10 + 10 i zostaje <b>30</b>.</p>" +
        "<p>Na granicy jasna komórka ma ciemnego sąsiada, więc traci tylko 20 + 10 = <b>70</b> (jaśniejsze pasmo). Ciemna ma jasnego sąsiada i traci 20 + 10 = <b>20</b> (ciemniejsze pasmo).</p>" },
    { id: "glebia", title: "Trzeci wymiar", sub: "Widzenie dwuoczne i nauka głębi (s. 223–228)", icon: "shapes" },
    { id: "wskazniki", title: "Jednooczne wskaźniki głębi", sub: "Trzy grupy (s. 228–230)", icon: "cards" },
    { id: "ksztalt", title: "Stałość kształtu", sub: "Wentylator, perspektywa kanoniczna, mózg (s. 231–237)", icon: "target" },
    { id: "wielkosc", title: "Stałość wielkości", sub: "Wielkość kanoniczna i sztuka (s. 238–248)", icon: "path" },
    { id: "interpozycja", title: "Interpozycja", sub: "Skrzyżowania T, granica własna obiektu (s. 249–262)", icon: "wall" },
    { id: "gestalt", title: "Organizacja percepcyjna", sub: "Podręcznik akademicki s. 45–47", icon: "pairs" },
    { id: "mix", title: "Rozpoznaj w życiu", sub: "Sytuacje i obrazy", icon: "dice" },
    { id: "boss", title: "Test z całej czytanki", sub: "15 pytań ze wszystkich lekcji", icon: "crown", boss: true }
  ],

  concepts: [
    /* ---------- LGN ---------- */
    { id: "lgn", u: "lgn", term: "Ciało kolankowate boczne (LGN)",
      plain: "Pierwsza stacja w mózgu, do której trafiają sygnały z oczu. Leży we wzgórzu i porządkuje dane, zanim pójdą do kory.",
      def: "Struktura we wzgórzu, pierwsza w mózgu, do której docierają informacje z siatkówek. Budową przypomina ziarno fasoli; po przecięciu widać sześć warstw komórek o dwóch różnych wielkościach (ryc. 18). Już w latach 20. XX w. Mieczysław Minkowski odkrył, że aksony małych i dużych komórek zwojowych łączą się z LGN w uporządkowany sposób.",
      sh: "pierwsza stacja, sześć warstw" },
    { id: "warstwy-m", u: "lgn", term: "Warstwy wielkokomórkowe (M)",
      plain: "Warstwy 1 i 2. Duże komórki, sygnały od parasolowych komórek zwojowych.",
      def: "Ciemniejsze warstwy 1 i 2 odbierają impulsy od parasolowych komórek zwojowych; ciała komórek są duże, stąd nazwa: wielkokomórkowe (magnocellular), typ M (magno) lub Y.",
      sh: "warstwy 1–2, duże komórki, typ M/Y" },
    { id: "warstwy-p", u: "lgn", term: "Warstwy drobnokomórkowe (P)",
      plain: "Warstwy 3–6. Małe komórki, sygnały od karłowatych komórek zwojowych.",
      def: "Warstwy 3–6 odbierają sygnały od małych (karłowatych) komórek zwojowych i same mają małe komórki: drobnokomórkowe (parvocellular), typ P (parvo) lub X.",
      sh: "warstwy 3–6, małe komórki, typ P/X" },
    { id: "warstwa-k", u: "lgn", term: "Komórki pyłkowe (K)",
      plain: "Siódma, cienka warstwa między 2 a 3. To trzeci, mały szlak, zwykle liczony do drobnokomórkowego.",
      def: "Warstwa między 2 a 3 zawiera komórki pyłkowe (koniocellular), typ K, od pyłkowych komórek zwojowych: trzeci szlak, pyłkokomórkowy. To tylko ok. 10% komórek zwojowych, o funkcjach podobnych do karłowatych, więc traktuje się go jako część szlaku drobnokomórkowego.",
      sh: "ok. 10%, część szlaku P" },
    { id: "szlak-m", u: "lgn", term: "Szlak wielkokomórkowy",
      plain: "Szybki szlak od ruchu i dużych kształtów. Nie widzi kolorów ani drobnych szczegółów.",
      def: "Parasolowe komórki zwojowe + warstwy M w LGN. Duże ciała i pola, szybka transmisja, mało aksonów; nie różnicuje barw; mała wrażliwość na kontrast i rozdzielczość przestrzenna; duża rozdzielczość czasowa i wrażliwość na ruch; duża wrażliwość na różnice jasności płaszczyzn obok siebie.",
      sh: "szybki, ruch, bez barw" },
    { id: "szlak-p", u: "lgn", term: "Szlak drobnokomórkowy",
      plain: "Wolniejszy szlak od szczegółów i kolorów.",
      def: "Karłowate komórki zwojowe + warstwy P w LGN. Małe ciała i pola, wolna transmisja, dużo aksonów; różnicuje barwy; duża wrażliwość na kontrast i rozdzielczość przestrzenna; mała rozdzielczość czasowa i wrażliwość na ruch.",
      sh: "wolniejszy, szczegóły, barwy" },
    { id: "skrzyzowanie-lgn", u: "lgn", term: "Skrzyżowanie i warstwy z każdego oka",
      plain: "Do każdego LGN trafiają dane z obu oczu, ale do różnych warstw: 1, 4, 6 z oka po przeciwnej stronie, 2, 3, 5 z oka po tej samej stronie.",
      def: "Na skrzyżowaniu wzrokowym wiązki się dzielą, więc utrata jednego oka nie wyłącza części mózgu. Do LGN po tej samej stronie trafiają dane ze skroniowej części siatkówki tego oka i z przynosowej części drugiego oka. Warstwy 1, 4, 6 – oko po przeciwnej stronie głowy; 2, 3, 5 – oko po tej samej stronie.",
      sh: "1, 4, 6 przeciwne; 2, 3, 5 to samo oko" },
    { id: "logistyka", u: "lgn", term: "LGN porządkuje dane",
      plain: "Po plątaninie siatkówki w LGN wiadomo już, którym „kablem” płyną kolory, kontury, ruch i położenie.",
      def: "LGN organizuje dane o cechach sceny (barwy, kontury, ruch, organizacja przestrzenna) i pozwala przewidzieć, z której strony ciała i z której części oka napływają. Widzenie to poważne przedsięwzięcie logistyczne.",
      sh: "organizuje dane o cechach sceny" },

    /* ---------- Kora ---------- */
    { id: "promienistosc", u: "kora", term: "Promienistość wzrokowa",
      plain: "Pęk włókien z LGN, który szerokim łukiem biegnie do kory w tyle głowy.",
      def: "Ostatni etap wczesnego szlaku: pasmo aksonów komórek LGN, które szerokim łukiem dochodzi do kory wzrokowej w płacie potylicznym, ściślej do bruzdy ostrogowej po wewnętrznej stronie płatów (ryc. 20).",
      sh: "aksony LGN → bruzda ostrogowa" },
    { id: "frenologia", u: "kora", term: "Frenologia",
      plain: "XIX-wieczna teoria, że każda zdolność ma swoje miejsce w mózgu. Dziś pseudonauka, ale z trafną intuicją. Widzenie umieszczała jednak z przodu, przy oczach.",
      def: "Franz Josef Gall: ścisły związek budowy i lokalizacji struktur kory z funkcjami psychicznymi. Dziś pseudonauka, ale trafna intuicja leżąca u podstaw neuronauki (Fodor, 1983). Widzenie (kształt, wielkość, barwa) frenolodzy umieszczali w korze czołowej nad oczodołami, a płatowi potylicznemu przypisywali m.in. miłość rodzicielską i przywiązanie.",
      sh: "lokalizacja funkcji; widzenie z przodu" },
    { id: "kora-20", u: "kora", term: "Widzenie zajmuje ok. 20% kory",
      plain: "Wzrok angażuje miliardy neuronów i mniej więcej piątą część kory.",
      def: "Wyższe piętra szlaku wzrokowego: ok. 4–6 mld neuronów w płatach potylicznym, ciemieniowym, skroniowym, a nawet czołowym; łącznie ok. 20% powierzchni kory (Wandell, Dumoulin, Brewer, 2009).",
      sh: "4–6 mld neuronów, 20% kory" },
    { id: "v1", u: "kora", term: "Kora prążkowa (V1)",
      plain: "Pierwsza część kory, do której dociera obraz. Na końcu płata potylicznego, w bruździe ostrogowej. Ma prążki jak zebra.",
      def: "Kora prążkowa (striate) leży w bruździe ostrogowej, w przyśrodkowej części końca płata potylicznego. U Brodmanna (1907) pole 17; inaczej pierwszorzędowa kora wzrokowa albo V1. Ma ok. 300 mln neuronów w obu półkulach, 40 razy więcej niż LGN (Wandell, 1995). Prążki to wybarwione oksydazą cytochromową pasy odbierające sygnały z oka po przeciwnej stronie.",
      sh: "pole 17, 300 mln neuronów" },
    { id: "pozaprazkowa", u: "kora", term: "Kora pozaprążkowa",
      plain: "Reszta kory wzrokowej: V2, V3, V3A, V4, V5. Do tego obszary w płacie ciemieniowym, skroniowym i czołowym.",
      def: "Pola Brodmanna 18 i 19, czyli obszary V2, V3, V3A, V4, V5. W widzenie zaangażowane są też: w płacie ciemieniowym V7 i bruzda śródciemieniowa (IPS), w skroniowym dolna kora skroniowa (ITC) i górna bruzda skroniowa (STS), w czołowym ośrodek skojarzonego spojrzenia w bok (FEF).",
      sh: "pola 18–19: V2–V5" },

    /* ---------- Drogi (Kalat) ---------- */
    { id: "podzial-pracy", u: "drogi", term: "Podział pracy w drodze wzrokowej",
      plain: "Patrząc na idącą osobę, widzisz jedną całość, a w mózgu osobne zespoły zajmują się sylwetką, kolorem i ruchem.",
      def: "Różne aspekty spostrzeżenia analizują różne części mózgu: jedne neurony sylwetkę, inne kolor, jeszcze inne szybkość i kierunek ruchu (Livingstone, Hubel, 1988; Zeki, Shipp, 1988). Szlaki komunikują się, ale działają niezależnie bardziej, niż sądzono. Podział zaczyna się już w siatkówce.",
      sh: "różne cechy w różnych miejscach" },
    { id: "trzy-zwojowe", u: "drogi", term: "Trzy rodzaje komórek zwojowych (Kalat)",
      plain: "Drobnokomórkowe: szczegóły i kolor przy dołku. Wielkokomórkowe: ruch w całej siatkówce. Pyłkokomórkowe: różne funkcje, w całej siatkówce.",
      def: "Drobnokomórkowe: małe ciała i pola, w dołku i przy nim, wrażliwe na kolor i szczegóły, tylko do LGN. Wielkokomórkowe: duże ciała i pola, w całej siatkówce, ruch i duże kształty, bez koloru. Pyłkokomórkowe: małe ciała, w całej siatkówce, kilka funkcji, do LGN, innych części wzgórza i wzgórków górnych (tabela 6.2).",
      sh: "P szczegóły, M ruch, K różne" },
    { id: "zrob-ruch", u: "drogi", term: "Ruch widać na obrzeżu, kolor nie",
      plain: "Przedmiot na skraju pola widzenia: nie wiesz, jaki ma kształt i kolor, ale gdy nim potrząśniesz, od razu widzisz ruch.",
      def: "Ćwiczenie Kalata: przy granicy pola widzenia nie określisz kształtu ani koloru przedmiotu, ale łatwo zauważysz, że się porusza. Na obwodzie są komórki wielkokomórkowe, a brakuje drobnokomórkowych.",
      sh: "obwód: ruch tak, kolor nie" },
    { id: "trzy-sciezki", u: "drogi", term: "Trzy ścieżki w korze",
      plain: "W korze dwa szlaki dzielą się na trzy: od kształtów, od ruchu i od jasności z kolorem.",
      def: "Ścieżka drobnokomórkowa: szczegółowa analiza kształtów. Ścieżka wielkokomórkowa: percepcja ruchu (MT) i integracja widzenia z ruchem (MST, do kory ciemieniowej). Ścieżka mieszana: jasność i barwa. Wszystkie poza integracją z ruchem zmierzają do płata skroniowego (rys. 6.21). U makaka 30–40 obszarów wzrokowych.",
      sh: "kształt, ruch, barwa i jasność" },
    { id: "co-gdzie", u: "drogi", term: "Droga „co” i droga „gdzie/jak”",
      plain: "Strumień brzuszny (skroniowy) rozpoznaje, co to jest. Strumień grzbietowy (ciemieniowy) mówi, gdzie to jest i jak po to sięgnąć.",
      def: "Strumień brzuszny (płat skroniowy): droga „co”, rozpoznawanie i identyfikacja przedmiotów. Strumień grzbietowy (płat ciemieniowy): droga „gdzie” lub „jak”, lokalizacja przedmiotów i sposób zbliżania się do nich, chwytania.",
      sh: "brzuszny „co”, grzbietowy „gdzie/jak”" },
    { id: "v1-wyobraznia", u: "drogi", term: "V1 działa też przy wyobrażaniu",
      plain: "Pierwsza kora wzrokowa pracuje nawet wtedy, gdy zamykasz oczy i coś sobie wyobrażasz.",
      def: "V1 reaguje na każdy typ bodźca wzrokowego i uaktywnia się nawet przy zamkniętych oczach, gdy wyobrażamy sobie bodźce (Kosslyn i in., 1999). Połączenia V1–V2 są zwrotne.",
      sh: "aktywna przy wyobrażeniach" },

    /* ---------- Ostrość ---------- */
    { id: "pola-dolek", u: "ostrosc", term: "Pola recepcyjne rosną od środka",
      plain: "W dołku jeden czopek ma własną „linię” do mózgu. Dalej setki receptorów zlewają się w jeden sygnał.",
      def: "Im dalej od środka siatkówki, tym większe pola recepcyjne komórek zwojowych; powyżej 20° ok. 1 mm² i kilkaset fotoreceptorów (Młodkowski, 1998). W plamce żółtej kilka–kilkanaście czopków, w samym dołku pojedyncze czopki (bez komórek horyzontalnych i amakrynowych): dokładność do jednego czopka, 3 µm.",
      sh: "dołek: 1 czopek; obwód: setki" },
    { id: "paczkowanie", u: "ostrosc", term: "Uśrednianie, czyli „paczkowanie” danych",
      plain: "Duże pole wysyła jeden uśredniony sygnał, więc szczegóły giną. Dlatego kątem oka widzimy nieostro.",
      def: "Z pola recepcyjnego płynie pojedynczy sygnał, uśrednienie aktywności wszystkich jego fotoreceptorów. Im większy obszar uśredniania, tym łatwiej zgubić szczegóły; to rodzaj „paczkowania” danych (Troy, 2009). Peryferie: powyżej 10° w dobrym świetle, 20° po zmroku.",
      sh: "uśrednienie gubi szczegóły" },
    { id: "snellen", u: "ostrosc", term: "Tablica Snellena",
      plain: "Tablica z literami u okulisty. 20/20 to wzrok normalny, 20/100 oznacza, że czytasz z 20 stóp to, co zdrowe oko czyta ze 100.",
      def: "Hermann Snellen (poł. XIX w.): ostrość = odległość badania / odległość, z której znak powinien być rozpoznany. Optotyp (np. litera E) ma elementy pod kątem 1' (1/60 stopnia), co odpowiada dwóm pobudzonym czopkom z niepobudzonym między nimi. 11 rzędów; 20/200 znaczy: z 20 stóp (6 m) to, co zdrowe oko czyta z 200 stóp (60 m).",
      sh: "odległość badania / odległość wzorcowa" },
    { id: "ostrosc-1", u: "ostrosc", term: "Ostrość 1,0 tylko w dołku",
      plain: "Pełną ostrość ma tylko malutki dołek. 15° obok jest już pięć razy gorzej, jak u krótkowidza.",
      def: "Maksymalna ostrość 1,0 (8. rząd z 20 stóp, 20/20 = 6/6 m) dotyczy tylko dołka. Kto czyta z 20 stóp tylko 2. rząd (C, J), ma 20/100 = 0,2 i potrzebuje okularów. Ostrość ≤ 0,2 odpowiada siatkówce powyżej 15° od dołka (5 razy gorzej), mniej więcej jak obraz krótkowidza z wadą −3 dioptrie.",
      sh: "1,0 w dołku, 0,2 powyżej 15°" },

    /* ---------- Mona Liza ---------- */
    { id: "monaliza", u: "monaliza", term: "Uśmiech Mona Lizy (Livingstone, 2000)",
      plain: "Mona Liza uśmiecha się pogodniej, gdy patrzysz na tło albo dłonie, a poważnieje, gdy patrzysz prosto na usta.",
      def: "Margaret Livingstone (za sugestią Gombricha): im dalej od ust patrzymy, tym pogodniejszy uśmiech. Kątem oka widzimy usta rozmyte, gładsze i „zmysłowe”, centralnie – damę o refleksyjnym wyrazie. Symulacja: rozmycie Gaussa + kontrast (ryc. 59). Hipoteza równie prawdopodobna jak technika sfumato (zacieranie krawędzi).",
      sh: "rozmycie peryferyjne = pogodniejszy uśmiech" },
    { id: "rembrandt", u: "monaliza", term: "Malarze a widzenie centralne",
      plain: "Rembrandt malował dokładnie tylko twarz, resztę ledwo zaznaczał, tak jak widzi ją oko z boku.",
      def: "Autoportrety Rembrandta (1659, 1669), prace Toulouse-Lautreca i Renoira: twarz szczegółowa, dłonie i reszta tylko zasygnalizowane. Wyrazista twarz przyciąga i trzyma uwagę. Oglądając z ok. 1,5 m, gdy plamka obejmuje do 5,5°, artyści oddali relację obszaru widzianego centralnie do peryferycznego.",
      sh: "ostra twarz, rozmyta reszta" },
    { id: "glebia-ostrosci", u: "monaliza", term: "Głębia ostrości",
      plain: "Zakres odległości, w którym wszystko jest ostre. Im mniejsza przysłona (źrenica), tym jest głębsza.",
      def: "Głębia (tolerancja) ostrości: odległość między płaszczyznami przed i za płaszczyzną D, na którą nastawiony jest aparat lub oko; obiekty między −D i +D są równie wyraziste. Nie zależy od akomodacji, lecz od wielkości przesłony lub źrenicy: im mniejsza, tym dłuższa głębia (ryc. 64–65).",
      sh: "zależy od przesłony/źrenicy" },
    { id: "berens", u: "monaliza", term: "Wyraziste miejsca przyciągają wzrok",
      plain: "Badanie ruchów oczu: ludzie patrzą najczęściej tam, gdzie obraz jest najbardziej wyraźny.",
      def: "Francuz z Agatą Królikowską pokazał ponad 50 osobom obrazy Chrisa Berensa (wiele głębi ostrości naraz) i rejestrował ruch oczu (okulograf SMI). Ścisły związek: im wyrazistszy fragment (krawędzie), tym chętniej oglądany; oglądanie zaczynamy od miejsc, które pozwalają odczytać sens.",
      sh: "uwaga idzie do wyrazistych krawędzi" },

    /* ---------- Kontury ---------- */
    { id: "nieciaglosc", u: "kontury", term: "Kontur = nieciągłość luminancji",
      plain: "Kontur to miejsce, gdzie jasność gwałtownie się zmienia. Gdy zmiana jest łagodna, krawędzi nie widać.",
      def: "Marr i Hildreth (1980), algorytm wykrywania krawędzi: kontur to nieciągłość luminancji. Luminancja ciągła to stopniowa zmiana oświetlenia na dużej przestrzeni; im mniejsza przestrzeń zmiany, tym łatwiej o kontur.",
      sh: "gwałtowna zmiana jasności" },
    { id: "rozmyte", u: "kontury", term: "Dlaczego widzimy nieostro",
      plain: "Nieostre są miejsca, gdzie granice między jasnym a ciemnym się zlewają.",
      def: "Utrata wyrazistości to przede wszystkim rozmycie konturów: granice płaszczyzn różniących się jasnością przenikają się tonalnie. Wyodrębnianie przedmiotów na podstawie konturów to podstawowa funkcja wzroku (Marr, 1982; Ratliff, 1971).",
      sh: "granice się przenikają" },
    { id: "renoir", u: "kontury", term: "Renoir i mapa uwagi",
      plain: "Na portrecie Madame Henriot ludzie patrzyli na twarz, broszkę i podpis malarza, czyli na najbardziej kontrastowe miejsca.",
      def: "Analiza krawędzi obrazu Madame Henriot wyłoniła kontury twarzy oraz broszkę i podpis. Badanie okulograficzne z Anną Szpak (38 studentów): mapa uwagi pokazała największe zainteresowanie właśnie tymi miejscami. Mapa uwagi uśrednia liczbę i czas fiksacji wzroku.",
      sh: "uwaga na najbardziej kontrastowe" },

    /* ---------- Mach ---------- */
    { id: "pasma-macha", u: "mach", term: "Pasma (wstęgi) Macha",
      plain: "Na granicy jasnego i ciemnego widzisz cienki, jeszcze jaśniejszy pasek po jasnej stronie i jeszcze ciemniejszy po ciemnej. Naprawdę ich tam nie ma.",
      def: "Ernst Mach (1865), austriacki fizyk, filozof i psycholog: wzdłuż krawędzi płaszczyzn o różnej jasności widać dodatkowe wąskie pasy, jaśniejszy po stronie jaśniejszej i ciemniejszy po ciemniejszej (ryc. 70A). Przy ciągłym przejściu (70B) ich nie ma.",
      sh: "iluzoryczne pasy przy krawędzi" },
    { id: "ratliff", u: "mach", term: "Ratliff, Signac i Seurat",
      plain: "Malarze sami dorysowywali pasma Macha, żeby wzmocnić kontur, tak jak robi to mózg.",
      def: "Floyd Ratliff (1919–1999) zauważył, że Signac w „Śniadaniu” rozjaśnił cień przy krawędzi przedmiotu, odcinając go jaśniejszym pasem. Seurat w „Kąpiących się w Asnières” przyciemniał lub rozjaśniał tło przy postaciach. Iluzję wykorzystywali malarze chińscy, renesansowi i współcześni.",
      sh: "artyści malowali pasma Macha" },
    { id: "trzy-sprawy", u: "mach", term: "Trzy prawdy o pasmach Macha",
      plain: "Są iluzją, pokazują mechanizm podbijania kontrastu i pomagają widzieć kontury kątem oka.",
      def: "(1) To iluzja: nie ma ich w obrazie na siatkówce. (2) Są przejawem mechanizmu podnoszenia kontrastu między sąsiednimi powierzchniami o różnej jasności. (3) Są przeciwwagą dla nieostrego widzenia na peryferiach siatkówki: zwiększają szansę dostrzeżenia konturów.",
      sh: "iluzja, kontrast, pomoc na obwodzie" },

    /* ---------- ON/OFF ---------- */
    { id: "piec-warstw", u: "onoff", term: "Pięć warstw siatkówki",
      plain: "Receptory, horyzontalne, dwubiegunowe, amakrynowe i zwojowe. Tylko zwojowe wysyłają sygnał do mózgu.",
      def: "(1) pręciki i czopki, (2) komórki horyzontalne, (3) dwubiegunowe, (4) amakrynowe, (5) zwojowe (ryc. 73). Horyzontalne i amakrynowe łączą fotoreceptory w pola recepcyjne i wpływają na dwubiegunowe; dwubiegunowe przekazują sygnał do zwojowych, a te aksonami do mózgu.",
      sh: "receptory → … → zwojowe" },
    { id: "horyzontalna", u: "onoff", term: "Komórka horyzontalna",
      plain: "Łączy od kilku do kilkudziesięciu receptorów w jedną grupę.",
      def: "Leży tuż pod fotoreceptorami, łączy się z nimi dendrytami; łączy od kilku do kilkudziesięciu fotoreceptorów, a każdy fotoreceptor łączy się z co najmniej dwiema horyzontalnymi. Informacja na wyjściu z siatkówki (poza dołkiem) jest co najmniej o dwa rzędy wielkości uboższa niż na wejściu.",
      sh: "łączy receptory w grupy" },
    { id: "centrum-otoczka", u: "onoff", term: "Centrum i otoczka",
      plain: "Pole komórki zwojowej ma środek i pierścień dookoła, które działają inaczej.",
      def: "Pole recepcyjne komórki zwojowej dzieli się na centrum (fotoreceptory obsługiwane przez komórkę horyzontalną i dwubiegunową) i otoczkę (tylko przez horyzontalną). Sygnał zależy od tego, ile receptorów pobudzono w centrum, a ile na obwodzie, i jak silnie.",
      sh: "środek i pierścień pola" },
    { id: "kanal-on", u: "onoff", term: "Kanał ON (włączeniowy)",
      plain: "Mówi mózgowi, gdzie jest jasno: reaguje, gdy środek pola jest jaśniejszy od otoczenia.",
      def: "Fotoreceptor → dwubiegunowa ON → zwojowa ON (Longstaff, 2002). Światło jaśniejsze od średniego na centrum: silna reakcja, tym silniejsza, im więcej pobudzonych w środku, a mniej na obwodzie. Centrum ciemne, otoczka jasna: brak reakcji. Przekazuje położenie jasnych miejsc.",
      sh: "położenie jasnych miejsc" },
    { id: "kanal-off", u: "onoff", term: "Kanał OFF (wyłączeniowy)",
      plain: "Mówi mózgowi, gdzie jest ciemno: reaguje, gdy środek pola jest ciemniejszy od otoczenia.",
      def: "Fotoreceptor → dwubiegunowa OFF → zwojowa OFF. Światło słabsze od średniego na centrum: silna reakcja („tu ciemno”). Centrum oświetlone, otoczka w cieniu: brak reakcji. Przekazuje położenie ciemnych miejsc. Kanałów ON i OFF jest tyle samo, równomiernie rozłożonych.",
      sh: "położenie ciemnych miejsc" },
    { id: "nieciekawe", u: "onoff", term: "Jednolite płaszczyzny są „nieciekawe”",
      plain: "Gdy całe pole jest równo oświetlone, komórka pracuje „na luzie”. Mózg dowiaduje się tylko, że to powierzchnia, a nie krawędź.",
      def: "Gdy wszystkie fotoreceptory pola mają podobne światło, sygnały ON i OFF się równoważą, a komórka reaguje umiarkowanie (aktywność spontaniczna). Oznacza to powierzchnię, nie krawędź. Hubel (1988): wnętrza jednolitych płaszczyzn są dla mózgu po prostu nieciekawe.",
      sh: "równe światło = umiarkowana reakcja" },

    /* ---------- Hamowanie ---------- */
    { id: "amakrynowe", u: "hamowanie", term: "Komórki amakrynowe",
      plain: "Łączą pola recepcyjne i w ostatniej chwili, tuż przed zwojową, wzmacniają albo hamują sygnał.",
      def: "Komórki amakrynowe i inne interneurony łączą pola komórek zwojowych; wiążą się z dwubiegunowymi na wyjściu, tuż przed zwojową, więc „wiedzą”, jaki sygnał idzie, i mogą go wzmocnić albo wyhamować. Wiele z nich zajmuje się tylko hamowaniem, co jest podstawą detekcji konturów.",
      sh: "hamują sygnał przed zwojową" },
    { id: "hamowanie-oboczne", u: "hamowanie", term: "Hamowanie oboczne",
      plain: "Komórki „z boku” obniżają sobie nawzajem aktywność. Dzięki temu różnica na granicy jasnego i ciemnego staje się większa.",
      def: "Lateral inhibition: komórki hamują poziom pobudzenia sąsiadujących komórek dwubiegunowych. Hipotezę, że to tłumaczy pasma Macha, postawił już Mach, choć nie mógł jej sprawdzić; intuicja była trafna.",
      sh: "sąsiedzi wzajemnie się hamują" },
    { id: "rachunek", u: "hamowanie", term: "Rachunek z ryc. 77",
      plain: "Jasne pole 100 → 60. Ciemne 50 → 30. Ale na samej granicy: jasna 70 (jaśniejsze pasmo), ciemna 20 (ciemniejsze pasmo).",
      def: "Założenia (Matthews, 2000): prawa strona o połowę ciemniejsza (50 vs 100); hamowanie = 20% intensywności w danym rejonie; każda dwubiegunowa połączona z dwiema sąsiednimi. Jasno: 100 − 20 − 20 = 60; ciemno: 50 − 10 − 10 = 30; ostatnia jasna przy krawędzi: 100 − 20 − 10 = 70; pierwsza ciemna: 50 − 20 − 10 = 20.",
      sh: "60 | 70 ‖ 20 | 30" },
    { id: "kontur-stylizacja", u: "hamowanie", term: "Kontur jako stylizacja hamowania obocznego",
      plain: "Rzeczy w naturze nie mają obrysów. Rysując linię, pokazujemy to, co siatkówka wysyła do mózgu.",
      def: "Kontur zwalnia system wzrokowy z podbijania kontrastu: to rzutowany na płaszczyznę wynik hamowania obocznego, jego artystyczna stylizacja. Rysując kontur, przedstawiamy świat taki, jaki wychodzi z siatkówki do mózgu.",
      sh: "linia = wyjście siatkówki" },
    { id: "chauvet", u: "hamowanie", term: "Kontur: najstarsze narzędzie obrazowania",
      plain: "Ok. 30 tysięcy lat temu ludzie odkryli, że trójwymiarowe zwierzę da się narysować linią na ścianie jaskini.",
      def: "Rysunki w Chauvet, Lascaux, Altamirze (20–30 tys. lat), ryty w Gobustanie, rysunki dzieci. Wcześniej ludzie tylko rzeźbili. Francuz uważa odkrycie konturu za kamień milowy cywilizacji na równi z ogniem i językiem („genialny Leonardo z Chauvet”).",
      sh: "kamień milowy jak ogień i język" },

    /* ---------- Głębia ---------- */
    { id: "trzy-wymiary", u: "glebia", term: "Trzy wymiary przestrzeni",
      plain: "Prawo–lewo, góra–dół i przód–tył. Pierwsze dwa tworzą płaszczyznę na wprost ciebie, trzeci biegnie w głąb.",
      def: "Wymiar horyzontalny, wertykalny i w głąb. Horyzontalny i wertykalny wyznaczają płaszczyznę prostopadłą do osi widzenia, wymiar w głąb – linię do niej równoległą. Trafna lokalizacja wymaga sprawnego systemu wzrokowego, egocentrycznej pozycji i doświadczenia w poruszaniu się (Milner, Goodale, 2008).",
      sh: "horyzontalny, wertykalny, w głąb" },
    { id: "szesc-metrow", u: "glebia", term: "Strefa 6 metrów",
      plain: "Najdokładniej oceniamy odległość do ok. 6 metrów, bo to strefa bezpieczeństwa. Jeszcze dokładniej w zasięgu rąk.",
      def: "Mechanizmy widzenia w głąb służą przetrwaniu: szczególną uwagą objęty jest obszar do ok. 6 m wokół nas; w zasięgu rąk precyzja jest jeszcze większa, co umożliwiło wytwarzanie narzędzi i rzeźb (Wenus z Hohle Fels, 35–40 tys. lat).",
      sh: "do 6 m i w zasięgu rąk" },
    { id: "rozbieznosc", u: "glebia", term: "Rozbieżność dwuoczna",
      plain: "Każde oko widzi trochę inny obraz. Mózg łączy oba i z różnicy wylicza głębię.",
      def: "Widzenie stereoskopowe: różnice reakcji w odpowiadających sobie polach recepcyjnych obu siatkówek są na korowych etapach szlaku integrowane w jeden obraz z informacją o porządku w głąb. Pierwsze analizy w V1, dalsze w płatach ciemieniowych (szlak grzbietowy), zwłaszcza w V5 (Barlow, Blakemore, Pettigrew, 1967).",
      sh: "różnica obrazów obu oczu" },
    { id: "rywalizacja", u: "glebia", term: "Rywalizacja dwuoczna",
      plain: "Gdy oczy widzą zupełnie różne obrazy, mózg nie liczy głębi, tylko wybiera jeden obraz, zwykle z oka dominującego.",
      def: "Przy zbyt dużej rozbieżności (całkiem inne obrazy) różnice nie są wskaźnikiem głębi; jeden obraz, najczęściej z oka dominującego, jest traktowany jako właściwy, drugi ignorowany.",
      sh: "jeden obraz wygrywa" },
    { id: "wergencja", u: "glebia", term: "Konwergencja i dywergencja",
      plain: "Oczy zbiegają się, gdy patrzymy na coś bliskiego, i rozchodzą przy dalszym. Działa to tylko do ok. 6 m.",
      def: "Odruchy wergencyjne: zbieżny (konwergencyjny) ruch oczu przy zainteresowaniu obiektami bliżej, rozbieżny (dywergencyjny) przy dalszych, ale tylko do ok. 6 m, bo dalej linie widzenia są niemal równoległe.",
      sh: "zbieżność blisko, do 6 m" },
    { id: "jednooczne", u: "glebia", term: "Jednooczne wskaźniki głębi",
      plain: "Wskazówki o głębi, które działają nawet przy jednym oku i na płaskim obrazie.",
      def: "Niestereoskopowe wskaźniki („przestrzeń widziana okiem Cyklopa”): pozwalają ocenić porządek w głąb blisko i daleko oraz są podstawą iluzji trzeciego wymiaru na obrazach. Bardziej uniwersalne niż dwuoczne.",
      sh: "działają jednym okiem i na obrazie" },
    { id: "hudson", u: "glebia", term: "Test Hudsona: głębi się uczymy",
      plain: "Afrykańczycy z kultur bez obrazów perspektywicznych widzieli na rysunku polowanie na słonia, a nie na odległą antylopę.",
      def: "Trafna interpretacja jednoocznych wskaźników jest wynikiem uczenia się. Serpell i Deregowski (1980): wskaźniki oczywiste dla Europejczyków (horyzont, zbiegające się krawędzie drogi, proporcje) nie pomagały mieszkańcom Ghany, Zambii, Ugandy; scenę z testu Hudsona (1960) odczytywali jako polowanie na słonia.",
      sh: "wskaźniki głębi są wyuczone" },
    { id: "brunelleschi", u: "glebia", term: "Perspektywa linearna (Brunelleschi)",
      plain: "Choć ludzie od zawsze wiedzieli, że dalsze rzeczy są mniejsze, zasady perspektywy spisano dopiero na początku XV wieku.",
      def: "Ponad 30 tys. lat minęło od malowideł jaskiniowych, zanim perspektywę linearną świadomie stosowano w sztuce Zachodu. Na początku XV w. Filippo Brunelleschi skodyfikował jej zasady. Nie jest jedyną możliwą: Dick Termes – sześciopunktowa perspektywa sferyczna; nie wiemy nawet, czy linie perspektywy w widzeniu są proste czy krzywe.",
      sh: "XV w., nie jedyna perspektywa" },

    /* ---------- Wskaźniki ---------- */
    { id: "grupa1", u: "wskazniki", term: "Grupa 1: relacje między elementami",
      plain: "Coś zasłania coś innego, coś jest wyżej przy horyzoncie, linie zbiegają się w punkcie.",
      def: "Wskaźniki z relacji między elementami sceny lub do ram obrazu: interpozycja (okluzja), transpozycja (elevation – położenie względem linii horyzontu a iluzoryczna odległość), perspektywa liniowa i krzywoliniowa (zero-, jedno- lub wielopunktowa).",
      sh: "interpozycja, transpozycja, perspektywa" },
    { id: "grupa2", u: "wskazniki", term: "Grupa 2: zacieranie konturów",
      plain: "Im dalej, tym drobniejsza i mniej wyraźna faktura, np. kostka brukowa w oddali zlewa się w szarość.",
      def: "Gradient (zagęszczanie) struktury powierzchni i ostrość (wyrazistość) widzenia detali. Reguła: im mniej zróżnicowana powierzchnia, tym większa jej odległość od obserwatora.",
      sh: "mniej szczegółów = dalej" },
    { id: "grupa3", u: "wskazniki", term: "Grupa 3: luminancja i barwa",
      plain: "Jaśniejsze wydaje się bliżej, ciemniejsze dalej. Daleko wszystko jest za niebieskawą mgiełką.",
      def: "Światłocień (chiaroscuro), perspektywa powietrzna i separacja barw. Reguła: im jaśniej, tym bliżej, im ciemniej, tym dalej (z założeniem o położeniu źródła światła). Perspektywa powietrzna: odległe góry za błękitno-szarą mgiełką.",
      sh: "światłocień, mgiełka, barwy" },
    { id: "separacja", u: "wskazniki", term: "Separacja barw: najbardziej sporna",
      plain: "Czy ciepłe kolory „wychodzą” do przodu, a zimne cofają się? Cézanne mówił tak, Picasso nie.",
      def: "Najbardziej kontrowersyjny wskaźnik. Picasso: barwy nie kodują przestrzeni, mają tylko charakter symboliczny. Cézanne i XVII-wieczni akademicy: barwy ciepłe są bliżej, zimne dalej.",
      sh: "ciepłe bliżej? Picasso: nie" },
    { id: "inkluzja", u: "wskazniki", term: "Inkluzja: najmniej sporny wskaźnik",
      plain: "Jeśli coś zasłania coś innego, to jest bliżej. Tego nikt nie kwestionuje, nawet w różnych kulturach.",
      def: "Obiekt zasłaniany nie może być bliżej niż zasłaniający. To najbardziej oczywisty i najmniej kontrowersyjny wskaźnik; afrykańskie dzieci w latach 60. miały z nim najmniej problemów w teście Hudsona.",
      sh: "zasłaniający jest bliżej" },
    { id: "stalosc-widzenia", u: "wskazniki", term: "Zasady stałości widzenia",
      plain: "Głębia ciągle zmienia wygląd i wielkość rzeczy, a my i tak wiemy, że to te same rzeczy. To zasady stałości.",
      def: "Wymiar w głąb najbardziej „niszczy” stałość widzenia: zmienia wielkość i wygląd rzeczy, a inkluzja zostawia tylko szczątki obrazów. Zespół cech przeciwdziałających temu to zasady stałości widzenia (visual object constancy); dla obrazów najważniejsze: stałość kształtu i wielkości. Interpretacja wskaźników zależy od spostrzegania rzeczy jako tożsamych (Lawson, 1999).",
      sh: "tożsamość rzeczy mimo głębi" },

    /* ---------- Stałość kształtu ---------- */
    { id: "stalosc-ksztaltu", u: "ksztalt", term: "Stałość kształtu",
      plain: "Wentylator z boku, z przodu i z ukosa ma zupełnie inny obrys, a ty i tak wiesz, że to ten sam wentylator.",
      def: "Spostrzeganie złożonych kształtów jako tych samych, mimo nowego lub nietypowego punktu widzenia, złego oświetlenia czy częściowego przysłonięcia (Palmer, 1999; Pizlo, 2008). Jeden z filarów widzenia. Doświadczenie trzeciego wymiaru nie jest dane bezpośrednio jak światło; to wniosek z wielu przesłanek w płaskich obrazach siatkówkowych.",
      sh: "ten sam obiekt mimo innego wyglądu" },
    { id: "rozmycie", u: "ksztalt", term: "Rozmycie szkodzi kształtowi, nie wielkości",
      plain: "Gdy obraz się rozmywa, trudniej rozpoznać kształt, ale ocena wielkości działa dalej.",
      def: "Stałość kształtu nie zależy od wielkości obrazu siatkówkowego, ale duża odległość obniża ostrość i po pewnym progu szkodzi. Leibowitz, Wilcox, Post (1978): rozmycie obniża stałość kształtu, a nie wpływa na stałość wielkości.",
      sh: "rozmycie: kształt tak, wielkość nie" },
    { id: "symetria", u: "ksztalt", term: "Symetria, płaszczyzny, objętość",
      plain: "Najłatwiej rozpoznać z innej strony bryłę symetryczną, z wyraźnymi ścianami.",
      def: "Chan, Stevenson, Li, Pizlo (2006): stałość kształtu brył wiąże się z symetrią, widocznością konturów wyznaczających płaszczyzny i objętością; szczególnie z symetrią. Pizlo i in. (2008): z bliska nie jest konieczna ani wystarczająca rozbieżność dwuoczna; podstawą są cechy widziane w 2D.",
      sh: "symetria najważniejsza" },
    { id: "kanoniczna", u: "ksztalt", term: "Perspektywa kanoniczna i kształt prototypowy",
      plain: "Każdą rzecz najłatwiej rozpoznać z jednego „ulubionego” punktu widzenia, np. kubek lekko z góry i z boku.",
      def: "Palmer, Rosch, Chase (1981): dla każdego przedmiotu istnieje najbardziej preferowany punkt widzenia, z którego jest najszybciej rozpoznawany; ujawnia najwięcej istotnych szczegółów i jest najczęstszy w życiu (Blanz i in., 1999). Kształt z tej perspektywy to kształt prototypowy, do którego umysł porównuje widziane kształty.",
      sh: "ulubiony punkt widzenia, prototyp" },
    { id: "mozg-ksztalt", u: "ksztalt", term: "Mózg: zakręt dolny skroniowy i wrzecionowaty",
      plain: "Kształty rozpoznaje szlak brzuszny. Słowa – lewy zakręt wrzecionowaty, twarze – prawy lub oba.",
      def: "Za stałość kształtu odpowiadają na szlaku brzusznym zakręt dolny skroniowy (IT) i zakręt wrzecionowaty, z danymi głównie z V4 (Tanaka). Litery i słowa: lewy zakręt wrzecionowaty, obszar VWFA (Dehaene, Cohen, 2011). Twarze: zakręt wrzecionowaty prawy lub oba (FFA; Kanwisher i in., 1997). Neurony reagują na kształt niezależnie od sposobu kodowania konturu, wielkości, położenia i przysłonięcia.",
      sh: "IT, wrzecionowaty, VWFA, FFA" },
    { id: "wrodzona-ksztalt", u: "ksztalt", term: "Stałość kształtu jest wrodzona",
      plain: "Już kilkudniowe niemowlęta nudzą się znanymi kształtami i ciekawią nowymi.",
      def: "Slater i Morison (1985), Slater i in. (1996): mechanizm kodowania złożonych kształtów i ich stałości jest wrodzony; habituacja już u kilkudniowych niemowląt (spadek zainteresowania znanymi kształtami, wzrost – nowymi).",
      sh: "habituacja u noworodków" },
    { id: "agnozja", u: "ksztalt", term: "Agnozja kształtu (Utermohlen)",
      plain: "Malarz chory na Alzheimera malował autoportrety, które z roku na rok coraz bardziej się rozpadały.",
      def: "Degeneracja mózgu może prowadzić do agnozji kształtu: niezdolności rozpoznawania i odtwarzania rzeczy (Farah, 1990). William Utermohlen malował autoportrety w wieku 63–66 lat, gdy choroba Alzheimera niszczyła jego mózg (1997–2000). Sztuka współczesna świadomie łamie stałość kształtu: surrealizm (Dalí), ekspresjonizm (Bacon), kubizm (Picasso).",
      sh: "rozpad kształtów w chorobie" },

    /* ---------- Stałość wielkości ---------- */
    { id: "stalosc-wielkosci", u: "wielkosc", term: "Stałość wielkości",
      plain: "Ludzie 15 metrów dalej mają na zdjęciu wzrost mniejszy niż głowa osoby z przodu, a nie wydają się niscy.",
      def: "Zdolność trafnej oceny wielkości rzeczy niezależnie od ich odległości, czyli bez względu na wielkość obrazu na siatkówce (Gibson, 1979; Palmer, 1999). Opiera się na wiedzy i doświadczeniu: spostrzegana wielkość znanych obiektów wynika z odległości. Ryc. 144: para ok. 15 m dalej ma ≤ 2/3 wysokości głowy osoby z przodu.",
      sh: "wielkość mimo odległości" },
    { id: "uccello", u: "wielkosc", term: "Obraz w obrazie (Uccello)",
      plain: "Na obrazie Uccella postać 60–80 metrów dalej ma pół wzrostu postaci z przodu, a w naturze byłaby kropką. I tak to akceptujemy.",
      def: "Paolo Uccello, „Sceny z życia świętych pustelników” (1460): klęczący pustelnik w najdalszym planie ma ok. połowę wysokości postaci z przodu. Ramy obrazu nie są jedynym odniesieniem: plany działają jak „obrazy w obrazie”, każdy z własną przestrzenią i proporcjami.",
      sh: "plany jako osobne obrazy" },
    { id: "wielkosc-kanoniczna", u: "wielkosc", term: "Wielkość kanoniczna (Konkle, Oliva, 2011)",
      plain: "Każdą rzecz lubimy widzieć na obrazie w pewnej „właściwej” wielkości względem kartki.",
      def: "Najbardziej preferowana wielkość obiektu w przedstawieniu na obrazie (analogia do kanonicznego kształtu). Ryba, krzesło i ciężarówka rysowane na takich samych kartkach rosną, ale logarytmicznie, nie liniowo; samochód na kartkach różnej wielkości zajmuje mniej więcej tę samą proporcję. Stałość wielkości dotyczy realnej odległości, wielkość kanoniczna – obrazu.",
      sh: "preferowana wielkość na obrazie" },
    { id: "wrodzona-wielkosc", u: "wielkosc", term: "Stałość wielkości: prawdopodobnie wrodzona",
      plain: "Badania noworodków i niemowląt sugerują, że to wrodzone. Z wiekiem rośnie tylko dokładność.",
      def: "Badania habituacji kilkudniowych noworodków (Granrud, 1987; Slater i in., 1990) i niemowląt 4–6 mies. wspierają hipotezę wrodzoności. U dzieci 5–11 lat stałość jest względnie stabilna, a z wiekiem rośnie dokładność oceny wielkości zależnie od dystansu (Granrud, 2009).",
      sh: "wrodzona, dokładność rośnie z wiekiem" },
    { id: "gdzie-wielkosc", u: "wielkosc", term: "Gdzie w mózgu jest wielkość",
      plain: "Nie wiadomo dokładnie. Prawdopodobnie biorą w tym udział oba szlaki.",
      def: "Leibowitz i Post (1982): kształt – system brzuszny, wielkość – grzbietowy. Saito i in. (1986): ok. 15% neuronów w MST (grzbietowy) reaguje na zmiany wielkości. Pacjentka D.F. (uszkodzony brzuszny) miała problemy z wielkością przy jednym oku. Dobbins i in.: MT i V4. Ross i Plug (2002): za mało danych, raczej nie jeden szlak.",
      sh: "oba szlaki, wiedza niepewna" },
    { id: "male-duze", u: "wielkosc", term: "Małe i duże przedmioty w mózgu",
      plain: "Moneta i kubek aktywują inne miejsca w korze niż fotel i kosiarka, niezależnie od tego, jak duże są na siatkówce.",
      def: "Konkle i Oliva (2012, fMRI): małe obiekty (moneta, fajka, liść, kubek) aktywują dolną korę skroniową i boczną potyliczną, duże (fotel, komoda, wózek, kosiarka) – okolicę przyhipokampową. Aktywność nie zależy od wielkości obrazu na siatkówce (4° czy 11°), więc wiąże się z wiedzą o wielkości.",
      sh: "wiedza o wielkości ma swoje miejsca" },
    { id: "lamanie-wielkosci", u: "wielkosc", term: "Łamanie stałości wielkości w sztuce",
      plain: "W Egipcie faraon był największy, bo najważniejszy. Magritte powiększał jabłko do rozmiaru pokoju, by zaskoczyć.",
      def: "Wielkość jako znak ważności: Echnaton, Nefertiti i córka składający ofiarę Atonowi (Egipt); Memling, „Sąd ostateczny” (Gdańsk). Mniej przykładów w sztuce Azji, Ameryki Płd., Australii i w ikonie. Współcześnie: Chuck Close i Andy Warhol (ogromne twarze), Magritte („Słuchanie pokoju”, „Olbrzymka”).",
      sh: "wielkość = ranga lub zaskoczenie" },

    /* ---------- Interpozycja ---------- */
    { id: "interpozycja", u: "interpozycja", term: "Interpozycja (okluzja)",
      plain: "Coś zasłania coś innego, więc to zasłonięte jest dalej. Najważniejszy wskaźnik głębi.",
      def: "Wzajemne przysłanianie się nieprzezroczystych obiektów; przysłonięty jest spostrzegany jako dalszy (ryc. 153A). Najbardziej oczywisty i najważniejszy wskaźnik głębi w scenie 3D i na obrazie. Najpierw system musi ustalić, czy widzi jeden obiekt, czy dwa ustawione w głąb.",
      sh: "zasłonięty = dalej" },
    { id: "skrzyzowania", u: "interpozycja", term: "Skrzyżowania L, T i X (Kanizsa)",
      plain: "Kształt „T” na styku konturów mówi „jeden obiekt jest przed drugim”. Kształt „X” mówi „oba są przezroczyste”.",
      def: "Kanizsa (1979): dla interpozycji charakterystyczne są skrzyżowania konturów typu „L” i „T” (wewnątrz- i międzyobiektowe); kluczowe dla oddzielenia obiektów są międzyobiektowe skrzyżowania „T”. Obiekty przezroczyste nie dają interpozycji; typowe dla nich są skrzyżowania „X” (ryc. 153B).",
      sh: "T = przysłanianie, X = przezroczystość" },
    { id: "granica-wlasna", u: "interpozycja", term: "Granica własna obiektu",
      plain: "Kontur zawsze „należy” do jednej strony. W korze V2 są komórki, które wiedzą, po której stronie jest figura.",
      def: "Gestaltyści (Koffka, 1935): border ownership – płaszczyzna należąca do figury, w odróżnieniu od tła. Zhou, Friedman, von der Heydt (2000) i inni: w V2 ponad 50% komórek kodujących kontur silniej reaguje po wewnętrznej stronie figury. O'Herron i von der Heydt (2009): przy niejasnej figurze aktywność po obu stronach trwa dłużej, ponad sekundę. Na jakiej podstawie te komórki „wiedzą”, nadal nie wiadomo.",
      sh: "V2 wie, po której stronie figura" },
    { id: "amodalne", u: "interpozycja", term: "Rekonstrukcja amodalna",
      plain: "„Widzimy” zasłoniętą część rzeczy, choć żaden zmysł nie może tego sprawdzić.",
      def: "Kanizsa (1979): odtwarzanie niewidocznej części zasłoniętego obiektu jest amodalne, bo wiedzy o niej nie da się zweryfikować żadnym zmysłem. Trafne odtworzenie niewidocznych części jest podstawą widzenia porządku w głąb.",
      sh: "dopowiadamy niewidzialne" },
    { id: "dobra-kontynuacja", u: "interpozycja", term: "Dobra kontynuacja a prostota",
      plain: "Czasem mózg przedłuża widoczne linie, a czasem wybiera prostszą, symetryczną figurę. Żadna zasada Gestalt nie wygrywa zawsze.",
      def: "Van Lier, van der Helm, Leeuwenberg (1994): zasada dobrej kontynuacji (zasłonięta część przedłuża widoczne kontury; lokalna analiza skrzyżowań T) kontra globalne zasady prostoty, regularności, symetrii. Ryc. 158: raz wygrywa kontynuacja, raz prostota. Wniosek: ani lokalne, ani globalne zasady Gestalt nie wystarczają.",
      sh: "ani lokalne, ani globalne nie wystarczą" },
    { id: "zlozonosc-pamieciowa", u: "interpozycja", term: "Złożoność percepcyjna a pamięciowa",
      plain: "Wybieramy interpretację, która jest najbardziej prawdopodobna z doświadczenia, a nie tę, do której najprościej dojść.",
      def: "Van Lier i in.: złożoność percepcyjna dotyczy procesu dochodzenia do rozwiązania, złożoność pamięciowa – samego rozwiązania. Preferowane są rozwiązania prostsze, bardziej prawdopodobne (Attneave, 1954; Hatfield, Epstein, 1985), oparte na wcześniejszych doświadczeniach; idealnie dopasowane kształty są mniej prawdopodobne niż dwa zasłaniające się.",
      sh: "wygrywa interpretacja najczęstsza" },
    { id: "interpozycja-pamiec", u: "interpozycja", term: "Interpozycja jako rozbieżność z pamięcią",
      plain: "Widzę kawałek konia, a w głowie mam całego konia. Ta różnica mówi mi, że coś go zasłania, czyli jest głębia.",
      def: "Znane obiekty: widoczne części wystarczają do wzbudzenia pełnej reprezentacji w pamięci (te same struktury, zwłaszcza zakręt dolny skroniowy, działają przy obiektach całych i częściowo zasłoniętych). Interpozycja to rozbieżność między kompletną reprezentacją w pamięci a niekompletnym obrazem na siatkówce, odczytywana jako wskaźnik głębi (fryz Partenonu, Fidiasz).",
      sh: "pamięć całości vs fragment na siatkówce" },
    { id: "magritte", u: "interpozycja", term: "Magritte łamie interpozycję",
      plain: "Na obrazie „Carte Blanche” amazonka na koniu przenika między drzewami w niemożliwy sposób.",
      def: "René Magritte, „Carte Blanche” (1965): amazonka przenika trzeci wymiar jak igła przez kanwę, łamiąc regułę interpozycji, co zmusza do refleksji nad przestrzenią. Kanizsa (1985) zrobił „toporny” fotomontaż z samochodem w lesie. Wcześniej: Strzemiński (kontury przezroczyste) i jaskinia Chauvet (zwierzęta raz przysłaniane, raz przenikające się).",
      sh: "niemożliwe przysłanianie" },

    /* ---------- Gestalt ---------- */
    { id: "figura-tlo-podr", u: "gestalt", term: "Figura i tło (psychologia postaci)",
      plain: "Figura ma kształt i miejsce, tło jest bez kształtu. Ale to od ciebie zależy, co jest figurą: ptaki czy chmury.",
      def: "Psychologia postaci: percepcja przedmiotu wymaga podziału pola na figurę i tło. Figura jest określona kształtem i miejscem; tło bezkształtne, pomaga lokalizować. Podział zależy od zachowania obserwatora: lecące ptaki są figurą, chmury tłem; gdy patrzymy na chmury, one stają się figurami. Figury dwuznaczne (profile i kielich) zależą wyłącznie od nastawienia.",
      sh: "zależy od nastawienia obserwatora" },
    { id: "grupowanie", u: "gestalt", term: "Grupowanie percepcyjne",
      plain: "Kropki ułożone w kwadrat widzisz jako kwadrat, choć nie ma żadnej linii.",
      def: "Figurę można spostrzegać nawet bez dobrze wyodrębnionego konturu: zgrupowane elementy tworzą jedną większą figurę (ryc. 14-7). Prawa psychologii postaci opisują grupowanie, które pozwala wyodrębnić figurę z tła.",
      sh: "elementy łączą się w figurę" },
    { id: "kontur-iluzoryczny", u: "gestalt", term: "Iluzoryczny kontur trójkąta",
      plain: "Trzy koła z wyciętymi kawałkami i widzisz trójkąt, którego nikt nie narysował.",
      def: "Szczególnie interesujący przykład grupowania przy percepcji brakujących elementów figury (ryc. 14-8): z trzech wyciętych kół wyłania się trójkąt bez narysowanego konturu.",
      sh: "trójkąt bez konturu" },
    { id: "konstruktywizm", u: "gestalt", term: "Konstruktywizm (Neisser, 1967)",
      plain: "Nie tyle odkrywamy świat, ile go tworzymy: sami wybieramy figury i porządkujemy to, co widzimy.",
      def: "Czy człowiek odkrywa rzeczywistość, czy ją tworzy? Przykłady (figury dwuznaczne, grupowanie) wskazują na tworzenie: można dowolnie wyodrębniać figury i różnie organizować stymulację. Ten kierunek to konstruktywizm (Neisser, 1967).",
      sh: "spostrzeganie tworzy rzeczywistość" },
    { id: "prawa", u: "gestalt", term: "Prawa grupowania",
      plain: "Bliskie, podobne i razem się poruszające rzeczy łączymy w jedno, a braki dopowiadamy.",
      def: "(1) Bliskości: elementy blisko siebie tworzą figurę. (2) Podobieństwa: elementy podobne. (3) Domykania: system dodaje brakujące elementy. (4) Kolejne prawo (nazwa na niewidocznym fragmencie strony) dotyczy dobrej postaci przedmiotu: symetrii i regularności kształtu. (5) „Wspólnej drogi”: elementy poruszające się w tym samym kierunku tworzą jedną figurę.",
      sh: "bliskość, podobieństwo, domykanie, wspólna droga" },
    { id: "dol-gora", u: "gestalt", term: "Z dołu do góry i z góry na dół",
      plain: "Mózg składa obraz z prostych cech, ale jednocześnie dopasowuje go do tego, czego się spodziewa.",
      def: "Wyodrębnianie cech to integracja prostych właściwości bodźca „z dołu do góry” (wcześniej: „detektor owadów” Barlowa, „jednostki gnostyczne” Konorskiego, „geony” Biedermana), ale jest uwarunkowane schematem, więc działa też „z góry na dół” (Spillman, Ehrenstein). Te procesy się nie wykluczają: reakcja neuronów zależy też od innych bodźców i stanu organizmu.",
      sh: "cechy + schematy naraz" },
    { id: "synteza", u: "gestalt", term: "Synteza percepcyjna",
      plain: "To, co widzimy, ma sens i porządek w przestrzeni i w czasie, bo do zmysłów dochodzą pamięć i wnioskowanie.",
      def: "Spostrzegane przedmioty są zorganizowane: dostrzegamy sens w układzie przestrzennym (wyodrębnianie, wielkość, lokalizacja) i czasowym (ruch). Logika percepcji wykracza poza analizatory zmysłowe; szczególnie ważne są pamięć i wnioskowanie, które tworzą syntetyczny obraz rzeczywistości.",
      sh: "pamięć + wnioskowanie = całość" },
    { id: "informacyjne", u: "gestalt", term: "Podejście informacyjne",
      plain: "Spostrzeganie to wnioskowanie: porównujemy to, co widzimy, z tym, co już wiemy.",
      def: "Palmer (1983): ważność układu odniesienia; Ullman (1985): programy wzrokowe (visual routines), np. czy punkt jest wewnątrz figury. W podejściu informacyjnym człowiek aktywnie przetwarza informacje z otoczenia i z pamięci; spostrzeganie to wnioskowanie o rzeczywistości na podstawie wiedzy (Marr, 1982). Już w 1867 r. pisał o tym Helmholtz.",
      sh: "spostrzeganie jako wnioskowanie" }
  ],

  exercises: [
    /* ---------- LGN ---------- */
    { u: "lgn", t: "mcq", q: "Która struktura mózgu jako pierwsza odbiera informacje z siatkówek?",
      a: ["Ciało kolankowate boczne (LGN)", "Pierwszorzędowa kora wzrokowa (V1)", "Zakręt wrzecionowaty", "Bruzda śródciemieniowa"],
      x: "LGN we wzgórzu to pierwsza stacja; potem promienistość wzrokowa prowadzi do V1.",
      w: ["V1 jest dalej, po LGN.", "To szlak brzuszny, bardzo późno.", "To płat ciemieniowy, dalej w szlaku."] },
    { u: "lgn", t: "which", set: "szlak", q: "Warstwy 1 i 2 LGN, sygnały od parasolowych komórek zwojowych.", a: 1, x: "Duże komórki: wielkokomórkowe, typ M/Y." },
    { u: "lgn", t: "which", set: "szlak", q: "Warstwy 3–6 LGN, sygnały od karłowatych komórek zwojowych.", a: 2, x: "Małe komórki: drobnokomórkowe, typ P/X." },
    { u: "lgn", t: "which", set: "szlak", q: "Cienka warstwa między warstwą 2 a 3, ok. 10% komórek zwojowych.", a: 3, x: "Komórki pyłkowe, typ K." },
    { u: "lgn", t: "which", set: "szlak", q: "Szybka transmisja, duża wrażliwość na ruch, nie rozróżnia barw.", a: 1, x: "Szlak wielkokomórkowy." },
    { u: "lgn", t: "which", set: "szlak", q: "Duża rozdzielczość przestrzenna i różnicowanie barw.", a: 2, x: "Szlak drobnokomórkowy." },
    { u: "lgn", t: "sort", q: "Szlak wielko- czy drobnokomórkowy (tabela Francuza)?", cats: ["Wielkokomórkowy", "Drobnokomórkowy"],
      why: ["Duży, szybki, od ruchu.", "Mały, wolniejszy, od szczegółów i barw."],
      items: [["duże pola recepcyjne", 0], ["szybka transmisja", 0], ["mało aksonów w nerwie", 0], ["duża rozdzielczość czasowa", 0],
        ["różnicowanie barw", 1], ["duża wrażliwość na kontrast", 1], ["dużo aksonów w nerwie", 1], ["duża rozdzielczość przestrzenna", 1]],
      x: "Zestawienie ze s. 60." },
    { u: "lgn", t: "mcq", q: "Które warstwy LGN odbierają sygnały z oka po przeciwnej stronie głowy?",
      a: ["1, 4 i 6", "2, 3 i 5", "1 i 2", "3, 4, 5 i 6"],
      x: "1, 4, 6 – oko po przeciwnej stronie; 2, 3, 5 – oko po tej samej stronie.",
      w: ["To oko po tej samej stronie.", "To warstwy M, mają oba oczy.", "To warstwy P, mają oba oczy."] },
    { u: "lgn", t: "mcq", q: "Dlaczego szlak pyłkokomórkowy liczy się zwykle do drobnokomórkowego?",
      a: ["Bo jest mały i działa podobnie jak karłowate", "Bo jego komórki są największe w całym LGN", "Bo w ogóle nie dochodzi do ciała kolankowatego", "Bo odpowiada za ruch"],
      x: "To ok. 10% komórek zwojowych, o funkcjach analogicznych do karłowatych.",
      w: ["Komórki K są małe.", "Dochodzi (warstwa między 2 a 3).", "Ruch to szlak M."] },
    { u: "lgn", t: "tf", q: "Dzięki skrzyżowaniu wzrokowemu utrata jednego oka nie wyłącza całkiem żadnej części mózgu z widzenia.", a: true,
      x: "Tak, Francuz nazywa to sprytnym wynalazkiem ewolucji." },

    /* ---------- Kora ---------- */
    { u: "kora", t: "mcq", q: "Gdzie dochodzi promienistość wzrokowa?",
      a: ["Do bruzdy ostrogowej w płacie potylicznym", "Do kory czołowej nad oczodołami", "Do wzgórków górnych", "Do zakrętu wrzecionowatego w płacie skroniowym"],
      x: "Promienistość to aksony komórek LGN, które łukiem biegną do kory wzrokowej w bruździe ostrogowej.",
      w: ["Tam widzenie umieszczali frenolodzy.", "Tam trafia część komórek pyłkowych, nie promienistość.", "To dalszy etap szlaku brzusznego."] },
    { u: "kora", t: "mcq", q: "Gdzie frenolodzy umieszczali widzenie kształtu, wielkości i barwy?",
      a: ["W korze czołowej nad oczodołami", "W płacie potylicznym, z tyłu głowy", "W płatach skroniowych", "W móżdżku"],
      x: "Frenolodzy nie domyślali się, że widzenie angażuje płat potyliczny, najdalszy od oczu.",
      w: ["Płatowi potylicznemu przypisywali miłość rodzicielską i przywiązanie.", "Tam umieszczali przebojowość i powściągliwość.", "Nie."] },
    { u: "kora", t: "tf", q: "Według Francuza frenologia jest dziś pseudonauką, ale zawierała trafną intuicję leżącą u podstaw neuronauki.", a: true,
      x: "Tak: idea związku lokalizacji struktur z funkcjami (Fodor, 1983)." },
    { u: "kora", t: "mcq", q: "Jaka część kory mózgu jest zaangażowana w widzenie?",
      a: ["Ok. 20%", "Ok. 5%", "Ok. 50%", "Cała kora"],
      x: "Ok. 20% powierzchni kory i 4–6 mld neuronów (Wandell i in., 2009).",
      w: ["Za mało.", "Za dużo.", "Nie."] },
    { u: "kora", t: "match", pairs: [["pole 17 Brodmanna", "V1, kora prążkowa"], ["pola 18 i 19", "kora pozaprążkowa"], ["FEF", "płat czołowy"], ["IPS", "płat ciemieniowy"]],
      x: "Mapa kory wzrokowej z s. 64–65." },
    { u: "kora", t: "mcq", q: "Ile razy więcej neuronów ma V1 niż LGN?",
      a: ["Ok. 40 razy", "Ok. 2 razy", "Ok. 1000 razy", "Tyle samo"],
      x: "V1: ok. 300 mln neuronów w obu półkulach (Wandell, 1995).",
      w: ["Za mało.", "Za dużo.", "Nie."] },
    { u: "kora", t: "mcq", q: "Skąd biorą się prążki na powierzchni V1?",
      a: ["Z wybarwionych pasów od przeciwnego oka", "Z naczyń krwionośnych biegnących po korze", "Z warstw komórek pyłkowych", "Z bruzd w płacie czołowym"],
      x: "Ciemniejsze prążki (oksydaza cytochromowa) odbierają sygnały z oka leżącego po przeciwnej stronie (LeVay, Hubel, Wiesel).",
      w: ["Nie.", "Te są w LGN.", "Nie."] },

    /* ---------- Drogi ---------- */
    { u: "drogi", t: "mcq", q: "Co pokazuje ćwiczenie z przedmiotem na skraju pola widzenia?",
      a: ["Obwód siatkówki wykrywa ruch, ale nie kolor", "Obwód siatkówki widzi kolory lepiej niż dołek", "Na obrzeżach w ogóle nic nie widać", "Kształt widać lepiej niż ruch"],
      x: "Na obwodzie są komórki wielkokomórkowe (ruch), a brakuje drobnokomórkowych (kolor, szczegóły).",
      w: ["Odwrotnie.", "Ruch widać.", "Odwrotnie."] },
    { u: "drogi", t: "match", pairs: [["drobnokomórkowe", "szczegółowa analiza nieruchomych przedmiotów"], ["wielkokomórkowe", "ruch i ogólne zarysy kształtu"], ["pyłkokomórkowe", "zakres zróżnicowany, nie w pełni poznany"]],
      x: "Tabela 6.2 Kalata." },
    { u: "drogi", t: "mcq", q: "Dokąd zmierza strumień grzbietowy?",
      a: ["Do kory ciemieniowej", "Do kory skroniowej", "Do móżdżku", "Do kory czołowej"],
      x: "Grzbietowy (ciemieniowy) to droga „gdzie/jak”: lokalizacja i sięganie.",
      w: ["Tam idzie strumień brzuszny.", "Nie.", "Nie."] },
    { u: "drogi", t: "mcq", q: "Jaka jest główna funkcja strumienia brzusznego?",
      a: ["Rozpoznawanie i identyfikacja przedmiotów", "Lokalizacja przedmiotów w przestrzeni wokół nas", "Sterowanie chwytaniem", "Wykrywanie ruchu"],
      x: "Droga „co”, w płacie skroniowym.",
      w: ["To grzbietowy.", "To grzbietowy.", "To ścieżka wielkokomórkowa (MT)."] },
    { u: "drogi", t: "tf", q: "Kora V1 aktywuje się nawet wtedy, gdy przy zamkniętych oczach wyobrażamy sobie bodźce.", a: true,
      x: "Tak (Kosslyn i in., 1999)." },
    { u: "drogi", t: "multi", q: "Jakie trzy ścieżki w korze opisuje Kalat (rys. 6.21)?",
      a: ["z przewagą drobnokomórkową: analiza kształtów", "z przewagą wielkokomórkową: ruch", "mieszana: barwa i jasność"],
      o: ["pyłkokomórkowa: dźwięki", "czołowa: decyzje"],
      x: "Ścieżki rozdzielają się w korze z dwóch na trzy.",
      w: ["Nie.", "Nie."] },

    /* ---------- Ostrość ---------- */
    { u: "ostrosc", t: "mcq", q: "Dlaczego na obwodzie siatkówki widzimy mniej dokładnie?",
      a: ["Bo duże pola uśredniają sygnał z wielu receptorów", "Bo na obwodzie w ogóle nie ma żadnych receptorów", "Bo tam światło jest słabsze", "Bo soczewka tam nie sięga"],
      x: "Z każdego pola płynie jeden uśredniony sygnał; im większe pole, tym łatwiej zgubić szczegóły („paczkowanie”).",
      w: ["Są, głównie pręciki.", "Nie o to chodzi.", "Nie."] },
    { u: "ostrosc", t: "mcq", q: "Z jaką dokładnością dołek przesyła obraz do mózgu?",
      a: ["Do średnicy jednego czopka, ok. 3 µm", "Do 1 mm²", "Do grupy kilkuset receptorów naraz", "Do jednego stopnia kąta"],
      x: "W dołku pole tworzy pojedynczy czopek połączony bezpośrednio przez dwubiegunową z zwojową.",
      w: ["Tak duże są pola na obwodzie.", "Tyle łączą duże pola.", "Nie."] },
    { u: "ostrosc", t: "mcq", q: "Co oznacza zapis 20/200 przy rzędzie tablicy Snellena?",
      a: ["Z 20 stóp czytasz to, co zdrowe oko z 200", "Masz dokładnie 20% wzroku zdrowego oka", "Widzisz 20 liter na 200", "Patrzysz z 200 stóp"],
      x: "Badanie z 20 stóp (6 m), a litera powinna być rozpoznana z 200 stóp (60 m).",
      w: ["Nie.", "Nie.", "Odwrotnie."] },
    { u: "ostrosc", t: "mcq", q: "Ktoś z 20 stóp czyta tylko 2. rząd (powinien być czytany ze 100 stóp). Jaka jest jego ostrość?",
      a: ["0,2", "1,0", "5,0", "0,02"],
      x: "20/100 = 0,2; wymaga okularów.",
      w: ["To ostrość normalna.", "Odwrotny ułamek.", "Za mało."] },
    { u: "ostrosc", t: "mcq", q: "Jakiemu kątowi odpowiada element optotypu?",
      a: ["1 minucie kątowej (1/60 stopnia)", "Jednemu pełnemu stopniowi kąta widzenia", "15 stopniom", "1 radianowi"],
      x: "To odpowiada dwóm pobudzonym czopkom z jednym niepobudzonym pomiędzy.",
      w: ["Za dużo.", "Za dużo.", "Nie."] },
    { u: "ostrosc", t: "tf", q: "Ostrość widzenia powyżej 15° od dołka spada do ok. 0,2, czyli pięciokrotnie.", a: true,
      x: "Tak; to mniej więcej obraz krótkowidza z wadą −3 dioptrie." },

    /* ---------- Mona Liza ---------- */
    { u: "monaliza", t: "mcq", q: "Kiedy według Livingstone Mona Liza uśmiecha się najpogodniej?",
      a: ["Gdy patrzymy na tło lub dłonie, a nie na usta", "Gdy patrzymy prosto na usta", "Gdy oglądamy obraz z bliska", "Gdy oglądamy obraz w dobrym, jasnym oświetleniu"],
      x: "Kątem oka widzimy usta rozmyte, przez co uśmiech wydaje się pogodniejszy.",
      w: ["Wtedy wygląda poważniej, refleksyjnie.", "Nie o to chodzi.", "Nie."] },
    { u: "monaliza", t: "mcq", q: "Jak Livingstone zasymulowała widzenie obwodowe?",
      a: ["Rozmyła obraz i podniosła kontrast", "Przyciemniła obraz", "Pokazała obraz do góry nogami", "Zamieniła wszystkie kolory na odcienie szarości"],
      x: "Rozmycie Gaussa + kontrast imitują utratę rozdzielczości na peryferiach (ryc. 59).",
      w: ["Nie.", "Nie.", "Nie o to chodziło."] },
    { u: "monaliza", t: "mcq", q: "Od czego zależy głębia ostrości?",
      a: ["Od wielkości przesłony lub źrenicy", "Od stopnia akomodacji soczewki oka", "Od koloru obiektu", "Od liczby czopków"],
      x: "Im mniejsza przesłona (źrenica), tym dłuższa głębia ostrości.",
      w: ["Francuz podkreśla, że nie od akomodacji.", "Nie.", "Nie."] },
    { u: "monaliza", t: "mcq", q: "Co wspólnego mają autoportrety Rembrandta i widzenie centralne?",
      a: ["Szczegółowa twarz, reszta tylko zaznaczona", "Wszystko jest równie wyraźne", "Twarz rozmyta, a tło namalowane ze szczegółami", "Brak konturów na całym obrazie"],
      x: "Artyści oddali relację obszaru widzianego ostro (centralnie) do peryferycznego.",
      w: ["To większość obrazów, nie te.", "Odwrotnie.", "Nie."] },
    { u: "monaliza", t: "tf", q: "W badaniu z obrazami Berensa ludzie najchętniej oglądali najbardziej rozmyte fragmenty.", a: false,
      x: "Fałsz. Im wyrazistszy fragment, tym chętniej mu się przyglądamy." },

    /* ---------- Kontury ---------- */
    { u: "kontury", t: "mcq", q: "Czym jest kontur według Marra i Hildreth?",
      a: ["Nieciągłością luminancji", "Linią narysowaną wokół obiektu", "Ciągłą zmianą oświetlenia", "Zmianą koloru tła"],
      x: "Kontur to gwałtowna zmiana jasności na małej przestrzeni.",
      w: ["Rzeczy w naturze nie mają narysowanych linii.", "Ciągła zmiana nie daje konturu.", "Chodzi o jasność."] },
    { u: "kontury", t: "mcq", q: "Na co najdłużej patrzyli badani na obrazie Madame Henriot?",
      a: ["Na twarz, broszkę i podpis", "Na fałdy sukni i jasne tło", "Równo na cały obraz", "Na ramę obrazu"],
      x: "To miejsca o największej kontrastowości, wyłonione też przez analizę krawędzi.",
      w: ["Tam kontury są rozmyte.", "Nie.", "Nie."] },
    { u: "kontury", t: "mcq", q: "Dlaczego niektóre fragmenty obrazu widzimy niewyraźnie?",
      a: ["Bo ich kontury są rozmyte", "Bo mają za dużo kolorów", "Bo są za jasne", "Bo leżą w środku obrazu"],
      x: "Granice płaszczyzn o różnej jasności przenikają się tonalnie.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "kontury", t: "tf", q: "Według Francuza wyodrębnianie przedmiotów na podstawie konturów jest podstawową funkcją wzroku.", a: true,
      x: "Tak (Marr, 1982; Ratliff, 1971)." },

    /* ---------- Mach ---------- */
    { u: "mach", t: "mcq", q: "Co widać na granicy jasnej i ciemnej płaszczyzny według Macha?",
      a: ["Jaśniejszy pas po jasnej, ciemniejszy po ciemnej", "Jednakowo szary pas po obu stronach krawędzi", "Kolorową obwódkę", "Nic szczególnego"],
      x: "To pasma (wstęgi) Macha; przy ciągłym przejściu ich nie ma.",
      w: ["Nie.", "Nie.", "Pasma widać."] },
    { u: "mach", t: "tf", q: "Pasma Macha naprawdę istnieją w obrazie rzutowanym na siatkówkę.", a: false,
      x: "Fałsz. To iluzja: powstają w układzie nerwowym." },
    { u: "mach", t: "mcq", q: "Co zrobił Signac w obrazie „Śniadanie. Jadalnia”?",
      a: ["Rozjaśnił cień przy krawędzi przedmiotu", "Usunął wszystkie cienie", "Namalował cały obraz zupełnie bez konturów", "Pomalował stół na czarno"],
      x: "Ratliff zauważył, że Signac namalował pasmo Macha, odcinając cień od przedmiotu.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "mach", t: "multi", q: "Jakie trzy rzeczy Francuz podkreśla o pasmach Macha?",
      a: ["są iluzją", "pokazują mechanizm podbijania kontrastu", "pomagają widzieć kontury na peryferiach"],
      o: ["powstają w soczewce", "występują tylko przy kolorach"],
      x: "Podsumowanie ze s. 147.",
      w: ["Nie, powstają w siatkówce.", "Dotyczą jasności."] },

    /* ---------- ON/OFF ---------- */
    { u: "onoff", t: "order", q: "Ułóż warstwy siatkówki od receptorów do wyjścia.",
      a: ["Pręciki i czopki", "Komórki horyzontalne", "Komórki dwubiegunowe", "Komórki amakrynowe", "Komórki zwojowe"],
      x: "Ryc. 73: pięć warstw." },
    { u: "onoff", t: "mcq", q: "Co przekazuje do mózgu kanał ON?",
      a: ["Położenie jasnych miejsc", "Położenie ciemnych miejsc", "Kolor obiektów", "Ruch obiektów"],
      x: "ON: fotoreceptor → dwubiegunowa ON → zwojowa ON; reaguje, gdy centrum jest jaśniejsze od średniej.",
      w: ["To OFF.", "Nie.", "Nie."] },
    { u: "onoff", t: "sort", q: "Jak zareaguje komórka zwojowa?", cats: ["Silna reakcja", "Brak lub umiarkowana"],
      why: ["Centrum zgodne z typem komórki.", "Centrum niezgodne albo pole jednolite."],
      items: [["ON: centrum jasne, otoczka ciemna", 0], ["OFF: centrum ciemne, otoczka jasna", 0],
        ["ON: centrum ciemne, otoczka jasna", 1], ["OFF: centrum jasne, otoczka ciemna", 1], ["ON: całe pole jednakowo jasne", 1], ["OFF: całe pole jednakowo ciemne", 1]],
      x: "Ryc. 76: wiersze (a), (b), (c)." },
    { u: "onoff", t: "mcq", q: "Co oznacza dla mózgu umiarkowana reakcja przy jednolitym oświetleniu pola?",
      a: ["Że to powierzchnia, a nie krawędź", "Że pole jest całkiem ciemne", "Że komórka jest zmęczona lub uszkodzona", "Że obiekt się porusza"],
      x: "Hubel: wnętrza jednolitych płaszczyzn są dla mózgu nieciekawe.",
      w: ["Może być i jasne.", "Nie.", "Nie."] },
    { u: "onoff", t: "mcq", q: "Ile fotoreceptorów łączy jedna komórka horyzontalna?",
      a: ["Od kilku do kilkudziesięciu", "Zawsze jeden", "Kilka milionów naraz, z całej siatkówki", "Dokładnie dwa"],
      x: "A każdy fotoreceptor łączy się z co najmniej dwiema horyzontalnymi.",
      w: ["Tak jest w dołku z komórką zwojową, nie horyzontalną.", "Za dużo.", "Nie."] },
    { u: "onoff", t: "tf", q: "Informacja na wyjściu z siatkówki (poza dołkiem) jest co najmniej o dwa rzędy wielkości uboższa niż na wejściu.", a: true,
      x: "Tak; mózg nie dostaje danych o każdym fotoreceptorze." },

    /* ---------- Hamowanie ---------- */
    { u: "hamowanie", t: "mcq", q: "Która komórka jest głównym wykonawcą hamowania obocznego u Francuza?",
      a: ["Amakrynowa", "Zwojowa", "Pręcik", "Komórka pyłkowa LGN"],
      x: "Amakrynowe łączą się z dwubiegunowymi tuż przed zwojową i mogą wyhamować sygnał.",
      w: ["Zwojowa odbiera wynik.", "To receptor.", "To już mózg."] },
    { u: "hamowanie", t: "mcq", q: "Jasne pole: 100 jednostek, hamowanie 20% od każdego z dwóch sąsiadów. Ile dociera do zwojowej?",
      a: ["60", "80", "100", "40"],
      x: "100 − 20 − 20 = 60.",
      w: ["Tylko jeden sąsiad.", "Bez hamowania.", "To suma hamowania."] },
    { u: "hamowanie", t: "mcq", q: "Ile otrzymuje komórka przy samej krawędzi po jasnej stronie (jeden sąsiad w cieniu)?",
      a: ["70", "60", "50", "20"],
      x: "100 − 20 − 10 = 70: to jaśniejsze pasmo Macha.",
      w: ["Tyle mają komórki dalej od krawędzi.", "Nie.", "To pierwsza po ciemnej stronie."] },
    { u: "hamowanie", t: "mcq", q: "Ile otrzymuje pierwsza komórka po ciemnej stronie (50 jednostek)?",
      a: ["20", "30", "40", "50"],
      x: "50 − 20 − 10 = 20: ciemniejsze pasmo Macha (dalej od krawędzi jest 30).",
      w: ["Tyle mają dalsze ciemne komórki.", "Nie.", "Bez hamowania."] },
    { u: "hamowanie", t: "order", q: "Ułóż wartości od lewej do prawej przez krawędź (ryc. 77).",
      a: ["60 (jasno)", "70 (jasne pasmo)", "20 (ciemne pasmo)", "30 (ciemno)"],
      x: "Skok przy krawędzi jest większy niż różnica płaszczyzn: kontrast rośnie." },
    { u: "hamowanie", t: "mcq", q: "Czym według Francuza jest rysowany kontur?",
      a: ["Stylizacją efektów hamowania obocznego", "Kopią rzeczywistych krawędzi przedmiotów", "Wymysłem renesansu", "Efektem perspektywy powietrznej"],
      x: "Rzeczy nie mają konturów; linia przedstawia świat taki, jaki wychodzi z siatkówki.",
      w: ["W naturze konturów nie ma.", "Kontury rysowano już 30 tys. lat temu.", "Nie."] },
    { u: "hamowanie", t: "tf", q: "Francuz porównuje odkrycie konturu do opanowania ognia i języka.", a: true,
      x: "Tak, to dla niego kamień milowy cywilizacji (jaskinia Chauvet)." },

    /* ---------- Głębia ---------- */
    { u: "glebia", t: "match", pairs: [["horyzontalny", "w prawo lub w lewo"], ["wertykalny", "w górę lub w dół"], ["w głąb", "z przodu lub z tyłu"]],
      x: "Trzy wymiary przestrzeni." },
    { u: "glebia", t: "mcq", q: "Do jakiej odległości działają odruchy wergencyjne?",
      a: ["Do ok. 6 m", "Do ok. 60 m", "Do ok. 60 cm", "Bez ograniczeń"],
      x: "Dalej linie widzenia są prawie równoległe.",
      w: ["Za daleko.", "Za blisko.", "Mają granicę."] },
    { u: "glebia", t: "mcq", q: "Co się dzieje przy rywalizacji dwuocznej?",
      a: ["Mózg wybiera obraz jednego oka, drugi ignoruje", "Mózg łączy oba obrazy w jedno widzenie trójwymiarowe", "Oczy zaczynają się zbiegać", "Widzimy podwójnie"],
      x: "Zbyt różne obrazy nie dają głębi; zwykle wygrywa oko dominujące.",
      w: ["To przy małej rozbieżności.", "To wergencja.", "Nie."] },
    { u: "glebia", t: "mcq", q: "Jak Afrykańczycy w teście Hudsona odczytali scenę polowania?",
      a: ["Jako polowanie na słonia", "Jako polowanie na antylopę", "Jako scenę bez głębi", "Jako dwie osobne sceny"],
      x: "Nie korzystali z wskaźników typu horyzont i zbiegające się linie, więc mały słoń „w oddali” był dla nich blisko.",
      w: ["Tak odczytaliby to Europejczycy.", "Nie.", "Nie."] },
    { u: "glebia", t: "mcq", q: "Kto skodyfikował zasady perspektywy linearnej?",
      a: ["Filippo Brunelleschi", "Leonardo da Vinci", "Dick Termes", "Michał Anioł Buonarroti"],
      x: "Na początku XV w.; wcześniej przez ponad 30 tys. lat jej świadomie nie stosowano.",
      w: ["Nie on.", "On proponuje perspektywę sferyczną.", "Nie."] },
    { u: "glebia", t: "tf", q: "Według Francuza umiejętność odczytywania jednoocznych wskaźników głębi jest wynikiem uczenia się.", a: true,
      x: "Tak; wspierają to badania międzykulturowe." },
    { u: "glebia", t: "mcq", q: "Gdzie odbywa się dalsza analiza rozbieżności dwuocznej?",
      a: ["W płatach ciemieniowych, zwłaszcza w V5", "W zakręcie wrzecionowatym płata skroniowego", "W płacie czołowym", "W samych oczach"],
      x: "Pierwsze sygnały w V1, dalej szlak grzbietowy, V5.",
      w: ["To szlak brzuszny (kształty).", "Nie.", "Wymaga porównania obu oczu w korze."] },

    /* ---------- Wskaźniki ---------- */
    { u: "wskazniki", t: "which", set: "grupa", q: "Perspektywa liniowa: krawędzie drogi zbiegają się w oddali.", a: 1, x: "Relacje między elementami." },
    { u: "wskazniki", t: "which", set: "grupa", q: "Kostka brukowa w oddali zlewa się w jednolitą szarą powierzchnię.", a: 2, x: "Gradient struktury powierzchni." },
    { u: "wskazniki", t: "which", set: "grupa", q: "Odległe góry za błękitno-szarą mgiełką.", a: 3, x: "Perspektywa powietrzna." },
    { u: "wskazniki", t: "which", set: "grupa", q: "Drzewo bliżej linii horyzontu wydaje się dalej.", a: 1, x: "Transpozycja (elevation)." },
    { u: "wskazniki", t: "which", set: "grupa", q: "Rembrandt oświetla twarz, a tło ginie w ciemności.", a: 3, x: "Światłocień (chiaroscuro)." },
    { u: "wskazniki", t: "mcq", q: "Który wskaźnik głębi jest najbardziej sporny?",
      a: ["Separacja barw", "Interpozycja", "Perspektywa liniowa", "Gradient tekstury"],
      x: "Picasso: barwy nie kodują przestrzeni; Cézanne: ciepłe bliżej, zimne dalej.",
      w: ["To najmniej sporny.", "Nie.", "Nie."] },
    { u: "wskazniki", t: "mcq", q: "Jaka jest reguła wskaźników z grupy luminancji?",
      a: ["Im jaśniej, tym bliżej", "Im ciemniej, tym bliżej", "Im bardziej kolorowo, tym dalej", "Jasność nie ma znaczenia"],
      x: "Z założeniem o położeniu źródła światła.",
      w: ["Odwrotnie.", "Nie.", "Ma."] },
    { u: "wskazniki", t: "tf", q: "Inkluzja (zasłanianie) jest najbardziej oczywistym i najmniej spornym wskaźnikiem głębi.", a: true,
      x: "Tak: obiekt zasłaniany nie może być bliżej niż zasłaniający." },

    /* ---------- Stałość kształtu ---------- */
    { u: "ksztalt", t: "which", set: "stalosc", q: "Wentylator widziany z boku i z przodu to dla ciebie ten sam wentylator.", a: 1, x: "Stałość kształtu (ryc. 137)." },
    { u: "ksztalt", t: "which", set: "stalosc", q: "Autobus w oddali nie wydaje ci się zabawką.", a: 2, x: "Stałość wielkości." },
    { u: "ksztalt", t: "mcq", q: "Co według Leibowitza i in. (1978) robi rozmycie obrazu?",
      a: ["Obniża stałość kształtu, nie wielkości", "Obniża stałość wielkości, nie kształtu", "Obniża obie stałości", "Nie wpływa na żadną"],
      x: "Stąd później hipoteza o różnych szlakach dla kształtu i wielkości.",
      w: ["Odwrotnie.", "Nie.", "Wpływa na kształt."] },
    { u: "ksztalt", t: "mcq", q: "Która cecha jest szczególnie ważna dla stałości kształtu brył (Chan i in., 2006)?",
      a: ["Symetria", "Kolor", "Wielkość obrazu na siatkówce", "Ruch"],
      x: "Do tego widoczność konturów płaszczyzn i objętość.",
      w: ["Nie.", "Stałość kształtu zasadniczo nie zależy od wielkości obrazu.", "Nie."] },
    { u: "ksztalt", t: "mcq", q: "Czym jest perspektywa kanoniczna?",
      a: ["Najbardziej preferowanym punktem widzenia", "Perspektywą linearną Brunelleschiego", "Widokiem z lotu ptaka", "Perspektywą sferyczną"],
      x: "Palmer, Rosch, Chase (1981): z tego punktu przedmiot jest rozpoznawany najszybciej; daje kształt prototypowy.",
      w: ["To co innego.", "Nie.", "To Termes."] },
    { u: "ksztalt", t: "match", pairs: [["VWFA", "litery i słowa, lewy zakręt wrzecionowaty"], ["FFA", "twarze, prawy zakręt wrzecionowaty"], ["zakręt dolny skroniowy", "stałość kształtu przedmiotów"]],
      x: "Ryc. 139." },
    { u: "ksztalt", t: "mcq", q: "Co pokazali Slater i Morison, badając kilkudniowe niemowlęta?",
      a: ["Że stałość kształtu jest wrodzona", "Że niemowlęta nie widzą kształtów", "Że stałości uczymy się do 7. roku", "Że noworodki widzą tylko kolory"],
      x: "Habituacja: znane kształty nudzą, nowe ciekawią.",
      w: ["Widzą.", "Nie według tych badań.", "Nie."] },
    { u: "ksztalt", t: "mcq", q: "Co ilustrują autoportrety Williama Utermohlena?",
      a: ["Agnozję kształtu w chorobie Alzheimera", "Pasma Macha", "Perspektywę kanoniczną w malarstwie portretowym", "Rywalizację dwuoczną"],
      x: "Malowane w wieku 63–66 lat, gdy choroba niszczyła mózg.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "ksztalt", t: "tf", q: "Według Pizla i in. (2008) do stałości kształtu z bliska potrzebna jest rozbieżność dwuoczna.", a: false,
      x: "Fałsz. Nie jest ani konieczna, ani wystarczająca; podstawą są cechy w 2D." },

    /* ---------- Stałość wielkości ---------- */
    { u: "wielkosc", t: "mcq", q: "Na czym opiera się stałość wielkości?",
      a: ["Na wiedzy i doświadczeniu o odległości", "Na wielkości obrazu na siatkówce", "Na kolorze obiektu", "Wyłącznie na rozbieżności dwuocznej obu oczu"],
      x: "Wiemy, że spostrzegana wielkość znanych rzeczy zależy od odległości.",
      w: ["Właśnie niezależnie od niej.", "Nie.", "Nie wyłącznie."] },
    { u: "wielkosc", t: "mcq", q: "Czym jest wielkość kanoniczna (Konkle, Oliva)?",
      a: ["Preferowaną wielkością obiektu na obrazie", "Rzeczywistą wielkością obiektu", "Wielkością obrazu przedmiotu na siatkówce oka", "Wielkością ramy obrazu"],
      x: "Analogia do kanonicznego kształtu; dotyczy przedstawień.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "wielkosc", t: "mcq", q: "Jak rośnie wielkość ryby, krzesła i ciężarówki rysowanych na takich samych kartkach?",
      a: ["Logarytmicznie, nie liniowo", "Dokładnie proporcjonalnie", "Wcale nie rośnie", "Losowo"],
      x: "Pierwszy efekt Konkle i Olivy (ryc. 146A).",
      w: ["Tak byłoby w rzeczywistości.", "Rośnie.", "Nie."] },
    { u: "wielkosc", t: "mcq", q: "Co pokazały badania fMRI Konkle i Olivy (2012)?",
      a: ["Małe i duże obiekty aktywują różne obszary kory", "Wszystkie obiekty aktywują to samo", "Aktywność zależy tylko od wielkości obrazu na siatkówce", "Duże obiekty nie aktywują kory"],
      x: "Niezależnie od wielkości obrazu siatkówkowego (4° czy 11°).",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "wielkosc", t: "mcq", q: "Dlaczego na egipskim papirusie Echnaton jest większy od innych?",
      a: ["Bo wielkość oznacza rangę", "Bo stoi najbliżej", "Bo artysta nie znał perspektywy", "Bo był wysoki"],
      x: "Łamanie stałości wielkości jako znak ważności.",
      w: ["Odległość nie decyduje.", "Nie o to chodzi.", "Nie."] },
    { u: "wielkosc", t: "tf", q: "Wiadomo dokładnie, która część mózgu odpowiada za stałość wielkości.", a: false,
      x: "Fałsz. Ross i Plug (2002): za mało danych; raczej udział obu szlaków." },
    { u: "wielkosc", t: "mcq", q: "Co dzieje się ze stałością wielkości u dzieci od 5 do 11 lat?",
      a: ["Jest stabilna, a dokładność rośnie z wiekiem", "Dopiero się pojawia, wcześniej jej nie ma", "Zanika", "Zależy od koloru oczu"],
      x: "Granrud (2009). Mechanizm najprawdopodobniej wrodzony.",
      w: ["Jest wcześniej.", "Nie.", "Nie."] },

    /* ---------- Interpozycja ---------- */
    { u: "interpozycja", t: "mcq", q: "Jakie skrzyżowanie konturów jest kluczowe dla oddzielenia dwóch obiektów (Kanizsa)?",
      a: ["Międzyobiektowe typu „T”", "Wewnątrzobiektowe typu „X”", "Typu „O”", "Typu „Y”"],
      x: "„X” jest typowe dla obiektów przezroczystych, bez interpozycji.",
      w: ["To przezroczystość.", "Nie.", "Nie."] },
    { u: "interpozycja", t: "mcq", q: "Co odkryli von der Heydt i współpracownicy w V2?",
      a: ["Komórki silniej reagują po stronie figury", "Komórki reagują tylko na kolor", "V2 w ogóle nie koduje konturów, tylko ruch", "Figura nie ma znaczenia"],
      x: "Ponad 50% komórek kodujących kontur silniej reaguje po wewnętrznej stronie figury.",
      w: ["Nie.", "Koduje.", "Ma."] },
    { u: "interpozycja", t: "mcq", q: "Dlaczego Kanizsa nazywa odtwarzanie zasłoniętej części amodalnym?",
      a: ["Bo nie da się go sprawdzić żadnym zmysłem", "Bo dotyczy tylko dźwięku", "Bo jest bardzo dokładne", "Bo zachodzi już w siatkówce, przed korą"],
      x: "Wiedzy o tym, czego nie widać, nie zweryfikujemy zmysłami.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "interpozycja", t: "mcq", q: "Jaki wniosek płynie z badań van Liera i in. (1994)?",
      a: ["Ani lokalne, ani globalne zasady nie wystarczą", "Zawsze wygrywa lokalna zasada dobrej kontynuacji", "Zawsze wygrywa prostota", "Interpozycja nie istnieje"],
      x: "Raz wygrywa kontynuacja, raz prostota i symetria (ryc. 158).",
      w: ["Nie zawsze (ryc. 158B).", "Nie zawsze (ryc. 158C).", "Nie."] },
    { u: "interpozycja", t: "mcq", q: "Czym jest interpozycja w ujęciu Francuza?",
      a: ["Różnicą między całością w pamięci a fragmentem na siatkówce", "Złudzeniem wynikającym z rozbieżności barw obu oczu", "Ruchem gałek ocznych", "Brakiem konturów"],
      x: "Widoczny fragment wzbudza pełną reprezentację; różnica jest odczytywana jako głębia.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "interpozycja", t: "mcq", q: "Kto namalował amazonkę, która w niemożliwy sposób przenika między drzewami?",
      a: ["René Magritte", "Władysław Strzemiński", "Paolo Uccello", "Georges Seurat"],
      x: "„Carte Blanche” (1965) łamie regułę interpozycji.",
      w: ["Strzemiński używał konturów przezroczystych.", "Uccello: obraz w obrazie.", "Seurat: pasma Macha."] },
    { u: "interpozycja", t: "tf", q: "Przy oglądaniu obiektów częściowo zasłoniętych aktywne są te same struktury szlaku brzusznego co przy całych.", a: true,
      x: "Tak, zwłaszcza zakręt dolny skroniowy (Kovács i in.)." },

    /* ---------- Gestalt ---------- */
    { u: "gestalt", t: "which", set: "prawo", q: "Kropki ułożone blisko siebie w dwie grupy widzisz jako dwie figury.", a: 1, x: "Prawo bliskości." },
    { u: "gestalt", t: "which", set: "prawo", q: "W rzędzie kółek i krzyżyków widzisz kolumny samych kółek.", a: 2, x: "Prawo podobieństwa." },
    { u: "gestalt", t: "which", set: "prawo", q: "Przerwane koło nadal widzisz jako koło.", a: 3, x: "Prawo domykania." },
    { u: "gestalt", t: "which", set: "prawo", q: "Klucz ptaków lecących w jednym kierunku widzisz jako jedną figurę.", a: 4, x: "Prawo wspólnej drogi." },
    { u: "gestalt", t: "mcq", q: "Od czego według podręcznika zależy, co jest figurą, a co tłem?",
      a: ["Od zachowania i nastawienia obserwatora", "Wyłącznie od bodźca", "Od koloru figury", "Od odległości obserwatora od figury i tła"],
      x: "Ptaki są figurą, chmury tłem; gdy patrzymy na chmury, to one stają się figurami.",
      w: ["Podręcznik mówi wprost, że nie.", "Nie.", "Nie."] },
    { u: "gestalt", t: "mcq", q: "Jak nazywa się kierunek, według którego spostrzeganie tworzy rzeczywistość (Neisser, 1967)?",
      a: ["Konstruktywizm", "Behawioryzm", "Frenologia", "Psychoanaliza"],
      x: "Człowiek dowolnie wyodrębnia figury i organizuje stymulację.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "gestalt", t: "mcq", q: "Co pokazuje iluzoryczny kontur trójkąta?",
      a: ["Grupowanie i dopowiadanie brakujących elementów", "Pasma Macha", "Stałość wielkości", "Rywalizację dwuoczną między obrazami obu oczu"],
      x: "Trójkąta nikt nie narysował, a my go widzimy.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "gestalt", t: "mcq", q: "Co podręcznik mówi o procesach „z dołu do góry” i „z góry na dół”?",
      a: ["Nie muszą się wzajemnie wykluczać", "Działa tylko „z dołu do góry”", "Działa tylko „z góry na dół”", "Są tym samym"],
      x: "Integracja cech jest uwarunkowana schematem; reakcja neuronów zależy też od innych bodźców i stanu organizmu.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "gestalt", t: "tf", q: "W podejściu informacyjnym spostrzeganie jest wnioskowaniem o rzeczywistości na podstawie posiadanej wiedzy.", a: true,
      x: "Tak; pisał o tym już Helmholtz w 1867 roku." },

    /* ---------- Mix ---------- */
    { u: "mix", t: "mcq", q: "Fotograf chce, żeby wszystko od kwiatka po góry było ostre. Co powinien zrobić?",
      a: ["Zmniejszyć przesłonę", "Zwiększyć przesłonę", "Zbliżyć się do kwiatka", "Użyć koloru"],
      x: "Mniejsza przesłona = dłuższa głębia ostrości.",
      w: ["Odwrotnie.", "Nie.", "Nie."] },
    { u: "mix", t: "mcq", q: "Na granicy białej kartki i czarnego blatu widzisz cieniutką, „jeszcze bielszą” linię. Co to?",
      a: ["Pasmo Macha", "Rywalizacja dwuoczna", "Perspektywa powietrzna", "Agnozja"],
      x: "Efekt hamowania obocznego.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "mix", t: "which", set: "grupa", q: "Na zdjęciu z wakacji odległe wzgórza są bledsze i bardziej niebieskie.", a: 3, x: "Perspektywa powietrzna." },
    { u: "mix", t: "mcq", q: "Rozpoznajesz kolegę po samej czapce wystającej zza samochodu. Co działa?",
      a: ["Fragment wzbudza pełną reprezentację w pamięci", "Rywalizacja dwuoczna", "Pasma Macha", "Separacja barw: ciepłe kolory wydają się bliżej"],
      x: "Jak przy fryzie Partenonu: widoczne fragmenty wystarczą.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "mix", t: "tf", q: "Czytanka pokazuje, że widzenie to aktywne konstruowanie: od hamowania obocznego w siatkówce po wnioskowanie w korze.", a: true,
      x: "Tak: kontury, głębia i stałości są „dopowiadane” przez układ nerwowy." }
  ],

  sortDecks: [
    { id: "m-p", title: "M czy P?", sub: "Szlak wielko- czy drobnokomórkowy", cats: ["Wielkokomórkowy (M)", "Drobnokomórkowy (P)"],
      why: ["Duży, szybki, ruch, bez barw.", "Mały, wolniejszy, szczegóły, barwy, kontrast."],
      items: [["warstwy 1–2 LGN", 0], ["parasolowe komórki zwojowe", 0], ["szybka transmisja", 0], ["wrażliwość na ruch", 0], ["typ Y", 0],
        ["warstwy 3–6 LGN", 1], ["karłowate komórki zwojowe", 1], ["różnicowanie barw", 1], ["duża rozdzielczość przestrzenna", 1], ["typ X", 1]] },
    { id: "ksztalt-wielkosc", title: "Stałość kształtu czy wielkości?", sub: "Francuz, rozdział o głębi", cats: ["Kształtu", "Wielkości"],
      why: ["Ten sam obiekt mimo innego wyglądu.", "Właściwa wielkość mimo odległości."],
      items: [["wentylator z trzech stron", 0], ["perspektywa kanoniczna", 0], ["symetria i objętość", 0], ["zakręt wrzecionowaty", 0], ["agnozja Utermohlena", 0],
        ["para 15 m dalej", 1], ["wielkość kanoniczna", 1], ["Uccello: obraz w obrazie", 1], ["moneta vs kosiarka w fMRI", 1], ["Echnaton jako największy", 1]] },
    { id: "dwu-jedno", title: "Dwuoczny czy jednooczny?", sub: "Wskaźniki głębi", cats: ["Dwuoczny", "Jednooczny"],
      why: ["Wymaga obu oczu, działa blisko.", "Działa jednym okiem i na obrazie."],
      items: [["rozbieżność dwuoczna", 0], ["konwergencja", 0], ["dywergencja", 0], ["rywalizacja dwuoczna", 0],
        ["interpozycja", 1], ["perspektywa liniowa", 1], ["gradient tekstury", 1], ["światłocień", 1], ["perspektywa powietrzna", 1], ["transpozycja", 1]] }
  ],

  minimum: [
    ["LGN", "Pierwsza stacja we wzgórzu, 6 warstw. <b>1–2 M</b> (wielko-, parasolowe: szybkie, ruch, bez barw), <b>3–6 P</b> (drobno-, karłowate: szczegóły, barwy, kontrast), między 2 i 3 <b>K</b> (pyłkowe, ok. 10%). Warstwy <b>1, 4, 6</b> – oko przeciwne, <b>2, 3, 5</b> – to samo."],
    ["Kora", "Promienistość → bruzda ostrogowa. <b>V1</b> = kora prążkowa = pole 17, 300 mln neuronów (40× LGN). Pozaprążkowa: pola 18–19 (V2–V5). Widzenie = ok. <b>20% kory</b>. Frenologia (Gall) umieszczała widzenie z przodu – błędnie."],
    ["Drogi (Kalat)", "Komórki zwojowe: <b>drobno-</b> (szczegóły, kolor, dołek), <b>wielko-</b> (ruch, cała siatkówka), <b>pyłko-</b>. W korze trzy ścieżki: kształt, ruch, barwa i jasność. <b>Brzuszny</b> = „co” (skroniowy), <b>grzbietowy</b> = „gdzie/jak” (ciemieniowy)."],
    ["Ostrość", "W dołku 1 czopek = 1 sygnał (3 µm); dalej pola rosną i <b>uśredniają</b>. <b>Snellen</b>: 20/20 = 1,0; 20/100 = 0,2. Powyżej 15° ostrość spada do 0,2. <b>Mona Liza</b>: kątem oka uśmiech pogodniejszy (Livingstone)."],
    ["Kontury i Mach", "Kontur = <b>nieciągłość luminancji</b> (Marr, Hildreth). Wzrok idzie do najbardziej kontrastowych miejsc. <b>Pasma Macha</b>: iluzoryczne jaśniejsze i ciemniejsze pasy na granicy; malowali je Signac i Seurat."],
    ["ON/OFF i hamowanie", "Pole: <b>centrum</b> i <b>otoczka</b>. <b>ON</b> = jasne miejsca, <b>OFF</b> = ciemne; jednolite pole „nieciekawe”. <b>Hamowanie oboczne</b> (amakrynowe, 20%): 100 → 60, 50 → 30, przy krawędzi <b>70</b> i <b>20</b> = pasma Macha. Rysowany kontur = stylizacja tego mechanizmu."],
    ["Głębia", "Trzy wymiary. Do <b>6 m</b> działają <b>dwuoczne</b> wskaźniki: rozbieżność, wergencja (rywalizacja przy zbyt różnych obrazach). <b>Jednooczne</b> są wyuczone (test Hudsona), Brunelleschi (XV w.) – perspektywa linearna. Trzy grupy: <b>relacje</b> (interpozycja, transpozycja, perspektywa), <b>zacieranie</b> (gradient tekstury, ostrość detali), <b>luminancja/barwa</b> (światłocień, perspektywa powietrzna, separacja barw – sporna)."],
    ["Stałość kształtu", "Ten sam obiekt z różnych stron (wentylator). Rozmycie jej szkodzi. Ważna <b>symetria</b>. <b>Perspektywa kanoniczna</b> → kształt prototypowy. Mózg: <b>zakręt dolny skroniowy</b> i <b>wrzecionowaty</b> (VWFA – słowa, FFA – twarze). Wrodzona; w chorobie – <b>agnozja</b> (Utermohlen)."],
    ["Stałość wielkości", "Właściwa wielkość mimo odległości, z wiedzy i doświadczenia. <b>Wielkość kanoniczna</b> na obrazie (Konkle, Oliva). Uccello: obraz w obrazie. Prawdopodobnie wrodzona. Lokalizacja niepewna, oba szlaki. Sztuka łamie ją dla ważności (Echnaton) lub zaskoczenia (Magritte)."],
    ["Interpozycja", "Zasłonięte = dalej; najważniejszy wskaźnik. Kanizsa: skrzyżowania <b>T</b> (przysłanianie) vs <b>X</b> (przezroczystość). <b>Granica własna obiektu</b>: V2 „wie”, gdzie figura. Rekonstrukcja <b>amodalna</b>. Ani lokalne, ani globalne zasady Gestalt nie wystarczą. Interpozycja = rozbieżność pamięci i siatkówki."],
    ["Organizacja percepcyjna", "<b>Figura i tło</b> zależą od nastawienia. Grupowanie: prawa <b>bliskości, podobieństwa, domykania</b>, dobrej postaci (symetria), <b>wspólnej drogi</b>. Iluzoryczny trójkąt. <b>Konstruktywizm</b> (Neisser). Procesy z dołu do góry i z góry na dół się nie wykluczają."]
  ],

  deep: [
    { q: "Dlaczego widzimy coś, czego nie ma?",
      a: "Pasma Macha, iluzoryczny trójkąt, zasłonięta część konia: we wszystkich tych przypadkach układ nerwowy „dopowiada”. Hamowanie oboczne podbija kontrast, grupowanie domyka figury, pamięć uzupełnia zasłonięte części. To nie błędy, tylko sposób, w jaki mózg szybko wyodrębnia przedmioty.",
      link: "Czytanka 1: widzenie to akt kreacji (Francuz)." },
    { q: "Czy perspektywa jest „naturalna”?",
      a: "Francuz pokazuje, że nie do końca. Ludzie rysowali od 30 tys. lat, a perspektywę linearną skodyfikowano dopiero w XV wieku. Badania Hudsona pokazały, że wskaźniki oczywiste dla Europejczyków nie działały w innych kulturach. Za to inkluzja (zasłanianie) działała wszędzie.",
      link: "Por. Turnbull i Kenge (Wójcicka, zajęcia 4): stałości wielkości też się uczymy." },
    { q: "Wrodzone czy wyuczone?",
      a: "W tej czytance stałość kształtu i wielkości wyglądają na wrodzone (habituacja noworodków), a odczytywanie wskaźników głębi na obrazie na wyuczone (test Hudsona). Kalat i Turnbull dodają, że stałość wielkości w dużych odległościach wymaga doświadczenia.",
      link: "Warto zapamiętać oba wątki, bo pytanie „natura czy kultura” wraca w wielu tekstach." }
  ],

  talk: [
    { q: "Opisz budowę LGN i różnice między szlakiem wielko- i drobnokomórkowym.",
      a: "<p>LGN we wzgórzu ma sześć warstw: <b>1–2 wielkokomórkowe (M)</b> od parasolowych komórek zwojowych i <b>3–6 drobnokomórkowe (P)</b> od karłowatych; między 2 i 3 leżą komórki <b>pyłkowe (K)</b>. Szlak M: duże pola, szybki, wrażliwy na ruch, nie rozróżnia barw, mała rozdzielczość przestrzenna. Szlak P: małe pola, wolniejszy, barwy, kontrast, duża rozdzielczość przestrzenna. Warstwy 1, 4, 6 dostają sygnał z oka po przeciwnej stronie, 2, 3, 5 z oka po tej samej.</p>",
      keys: ["6 warstw", "M: 1–2, P: 3–6, K", "ruch vs szczegóły i barwy", "1, 4, 6 vs 2, 3, 5"], src: "Francuz, s. 59–61" },
    { q: "Od czego zależy ostrość widzenia i jak ją mierzy tablica Snellena?",
      a: "<p>W dołku każdy czopek ma własny sygnał (3 µm), dalej pola recepcyjne rosną i <b>uśredniają</b> sygnał setek receptorów, więc szczegóły giną. <b>Snellen</b>: ostrość = odległość badania / odległość, z której znak powinien być rozpoznany; element optotypu ma 1' kąta. 20/20 = 1,0 (tylko dołek); 20/100 = 0,2, jak siatkówka powyżej 15°. Przykład: uśmiech Mona Lizy widziany kątem oka jest pogodniejszy (Livingstone).</p>",
      keys: ["pola rosną od środka", "uśrednianie", "Snellen, 1'", "20/20 vs 0,2", "Mona Liza"], src: "Francuz, s. 120–125" },
    { q: "Wyjaśnij pasma Macha i mechanizm hamowania obocznego.",
      a: "<p>Pasma Macha to iluzoryczne pasy przy krawędzi: jaśniejszy po jasnej, ciemniejszy po ciemnej stronie. Komórki <b>amakrynowe</b> hamują sąsiednie dwubiegunowe (20% światła). Na jasnym polu 100 − 20 − 20 = 60, na ciemnym 50 − 10 − 10 = 30, ale przy krawędzi jasna komórka ma 100 − 20 − 10 = <b>70</b>, a ciemna 50 − 20 − 10 = <b>20</b>. Różnica rośnie, kontrast się wzmacnia. Pomaga to widzieć kontury na peryferiach. Malowali je Signac i Seurat; rysowany kontur to stylizacja tego mechanizmu.</p>",
      keys: ["iluzja", "amakrynowe", "60–70 | 20–30", "podbijanie kontrastu", "kontur jako stylizacja"], src: "Francuz, s. 135–148" },
    { q: "Czym różnią się kanały ON i OFF?",
      a: "<p>Pole komórki zwojowej ma <b>centrum</b> (horyzontalna + dwubiegunowa) i <b>otoczkę</b> (tylko horyzontalna). Kanał <b>ON</b> reaguje silnie, gdy centrum jest jaśniejsze od średniego oświetlenia: sygnalizuje jasne miejsca. <b>OFF</b> reaguje, gdy centrum jest ciemniejsze: sygnalizuje ciemne. Przy odwrotnym układzie brak reakcji, a przy jednolitym polu reakcja umiarkowana, bo to powierzchnia, nie krawędź (Hubel: „nieciekawe”).</p>",
      keys: ["centrum i otoczka", "ON = jasne", "OFF = ciemne", "jednolite = umiarkowana"], src: "Francuz, s. 138–143" },
    { q: "Jakie są dwuoczne i jednooczne wskaźniki głębi? Czy ich odczytywania się uczymy?",
      a: "<p><b>Dwuoczne</b> (do ok. 6 m): rozbieżność dwuoczna (V1, potem szlak grzbietowy, V5), odruchy wergencyjne; przy zbyt różnych obrazach – rywalizacja dwuoczna. <b>Jednooczne</b>, w trzech grupach: relacje (interpozycja, transpozycja, perspektywa), zacieranie konturów (gradient tekstury, ostrość detali), luminancja i barwa (światłocień, perspektywa powietrzna, separacja barw – sporna). Ich odczytywanie jest wyuczone: test Hudsona, Brunelleschi dopiero w XV wieku. Najmniej sporna jest inkluzja.</p>",
      keys: ["6 m", "rozbieżność, wergencja", "trzy grupy", "test Hudsona", "Brunelleschi"], src: "Francuz, s. 223–230" },
    { q: "Omów stałość kształtu i stałość wielkości.",
      a: "<p><b>Stałość kształtu</b>: ten sam przedmiot mimo innego punktu widzenia, światła, przysłonięcia (wentylator). Ważna symetria; perspektywa kanoniczna daje kształt prototypowy; mózg: zakręt dolny skroniowy i wrzecionowaty (VWFA, FFA); wrodzona; rozmycie jej szkodzi; w chorobie – agnozja (Utermohlen). <b>Stałość wielkości</b>: właściwa wielkość mimo odległości, z wiedzy i doświadczenia; na obrazach – wielkość kanoniczna (Konkle, Oliva); prawdopodobnie wrodzona; lokalizacja niepewna. Sztuka łamie ją dla ważności lub zaskoczenia.</p>",
      keys: ["wentylator", "symetria, perspektywa kanoniczna", "IT, wrzecionowaty", "wielkość kanoniczna", "wrodzone"], src: "Francuz, s. 230–248" },
    { q: "Czym jest interpozycja i jak mózg ją rozpoznaje?",
      a: "<p>Interpozycja to przysłanianie: zasłonięty obiekt jest dalej. Kanizsa: skrzyżowania konturów <b>T</b> oznaczają przysłanianie, <b>X</b> przezroczystość. <b>Granica własna obiektu</b>: w V2 ponad połowa komórek konturu reaguje silniej po stronie figury. Niewidoczną część odtwarzamy <b>amodalnie</b>; zasady Gestalt (kontynuacja, prostota) nie wystarczają. Francuz: interpozycja to rozbieżność między pełną reprezentacją w pamięci a fragmentem na siatkówce (fryz Partenonu; Magritte łamie tę regułę).</p>",
      keys: ["zasłonięte dalej", "T i X", "granica własna, V2", "amodalne", "pamięć vs siatkówka"], src: "Francuz, s. 249–262" },
    { q: "Jakie są prawa organizacji percepcyjnej psychologii postaci?",
      a: "<p>Podstawą jest podział na <b>figurę i tło</b>, który zależy od nastawienia obserwatora (ptaki czy chmury; profile czy kielich). Grupowanie: <b>bliskość, podobieństwo, domykanie</b>, dobra postać (symetria, regularność), <b>wspólna droga</b>. Przykład: iluzoryczny kontur trójkąta. Wniosek: człowiek tworzy rzeczywistość – <b>konstruktywizm</b> (Neisser). Spostrzeganie łączy procesy z dołu do góry i z góry na dół.</p>",
      keys: ["figura i tło", "pięć praw", "iluzoryczny trójkąt", "konstruktywizm"], src: "Podręcznik akademicki, s. 45–47" }
  ],

  table: {
    title: "Szlak wielko- i drobnokomórkowy (Francuz, s. 60)",
    head: ["Cecha", "Wielkokomórkowy (M)", "Drobnokomórkowy (P)"],
    rows: [
      ["Wielkość ciał komórek zwojowych", "duże", "małe"],
      ["Wielkość pól recepcyjnych", "duże", "małe"],
      ["Szybkość transmisji", "szybka", "wolna"],
      ["Liczba aksonów w nerwie i trakcie", "mała", "duża"],
      ["Różnicowanie barw", "nie", "tak"],
      ["Wrażliwość na kontrast", "mała", "duża"],
      ["Rozdzielczość przestrzenna", "mała", "duża"],
      ["Rozdzielczość czasowa i ruch", "duża", "mała"],
      ["Różnicowanie jasności płaszczyzn obok siebie", "duża", "mała"]
    ]
  },

  notes: [
    { id: "s0", title: "Mapa czytanki: o czym to jest", html:
      "<div class='plain'><p>Ta czytanka idzie dalej niż czytanka 1: z siatkówki do kory, potem do tego, jak widzimy kontury, a na końcu jak z płaskich obrazów robimy przestrzeń.</p></div>" +
      "<ol><li><b>Droga do kory</b>: LGN, promienistość, V1 (Francuz) + trzy rodzaje komórek zwojowych i drogi „co” i „gdzie” (Kalat).</li>" +
      "<li><b>Ostrość i kontury</b>: dlaczego kątem oka widzimy nieostro, pasma Macha, kanały ON/OFF, hamowanie oboczne (Francuz).</li>" +
      "<li><b>Głębia</b>: wskaźniki dwu- i jednooczne, stałość kształtu i wielkości, interpozycja (Francuz).</li>" +
      "<li><b>Organizacja percepcyjna</b>: figura i tło, prawa grupowania, konstruktywizm (podręcznik akademicki).</li></ol>" },
    { id: "s1", n: 1, title: "Od siatkówki do ciała kolankowatego bocznego", html:
      "<div class='plain'><p>Sygnał z oka trafia najpierw do LGN we wzgórzu. Tam dane są już posortowane: osobno to, co szybkie i ruchome, osobno szczegóły i kolory.</p></div>" +
      "<p class='srcline'>Francuz, s. 59–61</p>" +
      "<ul><li><b>LGN</b>: pierwsza struktura mózgu z danymi z siatkówek; kształt ziarna fasoli, 6 warstw o dwóch wielkościach (ryc. 18). Mieczysław Minkowski (lata 20. XX w.) odkrył uporządkowane połączenia.</li>" +
      "<li><b>Warstwy 1–2</b>: wielkokomórkowe (M, magno, Y), od parasolowych komórek zwojowych. <b>Warstwy 3–6</b>: drobnokomórkowe (P, parvo, X), od karłowatych. <b>Warstwa między 2 a 3</b>: pyłkowe (K), ok. 10% komórek zwojowych, liczone do szlaku drobnokomórkowego.</li></ul>" +
      "<!--fig:lgn-->" +
      "<ul><li>Szlak <b>wielkokomórkowy</b>: szybki, ruch, bez barw. <b>Drobnokomórkowy</b>: wolniejszy, barwy, kontrast, szczegóły (tabela w sekcji „tab”).</li>" +
      "<li><b>Skrzyżowanie wzrokowe</b>: utrata oka nie wyłącza części mózgu. Do LGN po tej samej stronie: skroniowa część siatkówki tego oka + przynosowa drugiego. Warstwy <b>1, 4, 6</b> – oko po przeciwnej stronie, <b>2, 3, 5</b> – oko po tej samej.</li>" +
      "<li>LGN organizuje dane o barwach, konturach, ruchu i przestrzeni: widzenie to przedsięwzięcie logistyczne.</li></ul>" },
    { id: "s2", n: 2, title: "Do kory wzrokowej", html:
      "<div class='plain'><p>Z LGN szeroki pęk włókien biegnie do tyłu głowy, do kory wzrokowej. Kiedyś myślano, że widzenie jest z przodu, przy oczach.</p></div>" +
      "<p class='srcline'>Francuz, s. 61–65</p>" +
      "<ul><li><b>Promienistość wzrokowa</b>: aksony komórek LGN, szerokim łukiem do kory w płacie potylicznym, do <b>bruzdy ostrogowej</b> (ryc. 20).</li>" +
      "<li><b>Frenologia</b> (Gall, XIX w.): funkcje mają swoje miejsca w korze. Pseudonauka, ale trafna intuicja (Fodor, 1983). Widzenie lokalizowali w korze czołowej nad oczodołami; płatowi potylicznemu przypisywali miłość rodzicielską, przywiązanie, umiłowanie domu.</li>" +
      "<li>Dziś: ok. 4–6 mld neuronów w płatach potylicznym, ciemieniowym, skroniowym, czołowym; ok. <b>20% kory</b>.</li>" +
      "<li><b>Kora prążkowa</b> = pole 17 Brodmanna = <b>V1</b> = pierwszorzędowa kora wzrokowa; bruzda ostrogowa; ok. 300 mln neuronów, 40× więcej niż LGN. Prążki (oksydaza cytochromowa) to pasy od oka po przeciwnej stronie.</li>" +
      "<li><b>Kora pozaprążkowa</b>: pola 18 i 19, obszary V2, V3, V3A, V4, V5. Także IPS i V7 (ciemieniowy), ITC i STS (skroniowy), FEF (czołowy).</li></ul>" },
    { id: "s3", n: 3, title: "Równoległe drogi: co i gdzie (Kalat)", html:
      "<div class='plain'><p>Widzisz idącą osobę jako całość, ale sylwetkę, kolor i ruch analizują różne części mózgu, i to już od siatkówki.</p></div>" +
      "<p class='srcline'>Kalat, s. 162–163</p>" +
      "<ul><li><b>Zrób to sam</b>: kolorowy przedmiot na granicy pola widzenia. Nie poznasz kształtu ani koloru, ale gdy nim potrząśniesz, zobaczysz ruch.</li>" +
      "<li>Trzy rodzaje komórek zwojowych: <b>drobnokomórkowe</b> (małe pola, przy dołku, szczegóły i kolor – pobudzane jedną barwą, hamowane inną; tylko do LGN), <b>wielkokomórkowe</b> (duże pola, cała siatkówka, ruch i duże kształty, bez koloru), <b>pyłkokomórkowe</b> (cała siatkówka, kilka funkcji; LGN, inne części wzgórza, wzgórki górne).</li>" +
      "<li>V1 reaguje na każdy bodziec wzrokowy, także przy wyobrażaniu z zamkniętymi oczami (Kosslyn). Połączenia V1–V2 zwrotne; u makaka 30–40 obszarów wzrokowych.</li>" +
      "<li>W korze trzy ścieżki: drobnokomórkowa (kształty), wielkokomórkowa (ruch – MT; integracja z ruchem – MST), mieszana (jasność i barwa).</li>" +
      "<li><b>Strumień brzuszny</b> (skroniowy) = droga „co”: rozpoznawanie. <b>Strumień grzbietowy</b> (ciemieniowy) = „gdzie/jak”: lokalizacja, sięganie, chwytanie.</li></ul>" },
    { id: "s4", n: 4, title: "Ostrość widzenia", html:
      "<div class='plain'><p>Ostro widzimy tylko malutkim środkiem oka. Reszta to uśredniona, rozmyta „paczka” danych.</p></div>" +
      "<p class='srcline'>Francuz, s. 120–123</p>" +
      "<ul><li>Pola recepcyjne komórek zwojowych rosną od środka; powyżej 20° ok. 1 mm² i kilkaset fotoreceptorów. W plamce żółtej kilka–kilkanaście czopków, w <b>dołku</b> pojedyncze czopki (brak horyzontalnych i amakrynowych): dokładność 3 µm.</li>" +
      "<li>Sygnał z pola to <b>uśrednienie</b>; im większe pole, tym łatwiej zgubić szczegóły („paczkowanie”, Troy, 2009).</li>" +
      "<li><b>Snellen</b> (XIX w.): ostrość = odległość badania / odległość wzorcowa. Optotyp (litera E) – elementy pod kątem 1' = dwa pobudzone czopki z niepobudzonym między nimi. 20/200: z 20 stóp (6 m) to, co zdrowe oko z 200 (60 m).</li>" +
      "<li>Ostrość <b>1,0</b> (20/20) tylko w dołku. 20/100 = <b>0,2</b>, potrzebne okulary. Powyżej 15° od dołka ostrość ≤ 0,2: pięć razy gorzej, jak krótkowidz z wadą −3 dioptrie.</li></ul>" },
    { id: "s5", n: 5, title: "Uśmiech Mona Lizy i malarze", html:
      "<div class='plain'><p>To, gdzie patrzymy na obraz, zmienia jego sens. Malarze to wiedzieli i malowali ostro tylko to, co ważne.</p></div>" +
      "<p class='srcline'>Francuz, s. 124–129</p>" +
      "<ul><li><b>Livingstone (2000)</b>: im dalej od ust patrzymy, tym pogodniejszy uśmiech Mona Lizy; kątem oka usta są rozmyte, gładsze, „zmysłowe”. Symulacja: rozmycie Gaussa + kontrast. Hipoteza równie dobra jak sfumato.</li>" +
      "<li>Rembrandt, Toulouse-Lautrec, Renoir: twarz szczegółowa, reszta zasygnalizowana; to relacja widzenia centralnego do peryferycznego przy oglądaniu z ok. 1,5 m.</li>" +
      "<li><b>Głębia ostrości</b>: zakres odległości, w którym wszystko jest ostre; zależy od przesłony lub źrenicy (im mniejsza, tym dłuższa), nie od akomodacji.</li>" +
      "<li>Chris Berens maluje jakby z wieloma głębiami ostrości. Badanie okulograficzne (Francuz, Królikowska, ponad 50 osób): uwaga idzie do najbardziej wyrazistych krawędzi.</li>" +
      "<li>Niewyraźność = rozmyte kontury. Wyodrębnianie przedmiotów po konturach to podstawowa funkcja wzroku (Marr; Ratliff).</li></ul>" },
    { id: "s6", n: 6, title: "Kontury i pasma Macha", html:
      "<div class='plain'><p>Kontur to miejsce, gdzie jasność gwałtownie się zmienia. Mózg dodatkowo ten skok podbija, i stąd biorą się pasma Macha.</p></div>" +
      "<p class='srcline'>Francuz, s. 132–138</p>" +
      "<ul><li><b>Marr i Hildreth (1980)</b>: kontur to <b>nieciągłość luminancji</b>; im mniejsza przestrzeń zmiany oświetlenia, tym łatwiej o kontur. Analiza krawędzi portretu Madame Henriot (Renoir) wyłania twarz, broszkę i podpis.</li>" +
      "<li><b>Mapa uwagi</b> (z Anną Szpak, 38 studentów, okulograf): najwięcej uwagi przyciągnęły te same, najbardziej kontrastowe miejsca.</li>" +
      "<li><b>Pasma Macha</b> (Ernst Mach, 1865): na granicy jasnego i ciemnego widać cienki jaśniejszy pas po jasnej stronie i ciemniejszy po ciemnej. Nie ma ich w obrazie; przy ciągłym przejściu znikają.</li>" +
      "<li><b>Floyd Ratliff</b>: Signac („Śniadanie. Jadalnia”) rozjaśnił cień przy krawędzi; Seurat („Kąpiący się w Asnières”) przyciemniał lub rozjaśniał tło przy postaciach.</li></ul>" },
    { id: "s7", n: 7, title: "Kanały ON i OFF", html:
      "<div class='plain'><p>Siatkówka wysyła dwa rodzaje wiadomości: „tu jest jaśniej niż dookoła” i „tu jest ciemniej”. Równe światło mózg uznaje za nudne.</p></div>" +
      "<p class='srcline'>Francuz, s. 138–143</p>" +
      "<ul><li>Pięć warstw siatkówki: receptory, horyzontalne, dwubiegunowe, amakrynowe, zwojowe (ryc. 73).</li>" +
      "<li><b>Komórka horyzontalna</b> łączy kilka–kilkadziesiąt receptorów; każdy receptor łączy się z co najmniej dwiema. Na wyjściu siatkówki informacji jest co najmniej o dwa rzędy wielkości mniej niż na wejściu.</li>" +
      "<li>Pole komórki zwojowej: <b>centrum</b> (horyzontalna + dwubiegunowa) i <b>otoczka</b> (tylko horyzontalna).</li>" +
      "<li><b>Kanał ON</b>: centrum jaśniejsze od średniej → silna reakcja („jasno”). <b>Kanał OFF</b>: centrum ciemniejsze → silna reakcja („ciemno”). Odwrotny układ → brak reakcji. Jednolite pole → umiarkowana, spontaniczna aktywność: to powierzchnia, nie krawędź.</li></ul>" +
      "<!--fig:onoff-->" +
      "<p>Kanałów ON i OFF jest tyle samo, więc mózg jest stale informowany. Hubel: wnętrza jednolitych płaszczyzn są dla mózgu „nieciekawe”.</p>" },
    { id: "s8", n: 8, title: "Hamowanie oboczne w liczbach", html:
      "<div class='plain'><p>Komórki hamują swoich sąsiadów. Na granicy jasnego i ciemnego hamowanie jest nierówne, więc różnica rośnie i widzimy wyraźniejszą krawędź.</p></div>" +
      "<p class='srcline'>Francuz, s. 143–148</p>" +
      "<ul><li><b>Komórki amakrynowe</b> łączą się z dwubiegunowymi tuż przed zwojową i mogą wzmocnić albo wyhamować sygnał. Wiele zajmuje się tylko hamowaniem: to podstawa detekcji konturów. <b>Hamowanie oboczne</b> = hamowanie „z boku” sąsiednich komórek.</li>" +
      "<li><b>Ryc. 77</b> (Matthews, 2000): jasno 100, ciemno 50; hamowanie 20% intensywności; każda dwubiegunowa połączona z dwiema sąsiednimi.</li></ul>" +
      "<!--fig:hamowanie-->" +
      "<ul><li>Jasno: 100 − 20 − 20 = <b>60</b>. Ciemno: 50 − 10 − 10 = <b>30</b>. Przy krawędzi po jasnej stronie: 100 − 20 − 10 = <b>70</b> (jaśniejsze pasmo). Po ciemnej: 50 − 20 − 10 = <b>20</b> (ciemniejsze pasmo). Ryc. 78: spostrzegana jasność ma „górkę” i „dołek” przy krawędzi.</li>" +
      "<li>Trzy sprawy: (1) pasma to <b>iluzja</b>; (2) przejaw mechanizmu <b>podnoszenia kontrastu</b>; (3) <b>przeciwwaga</b> dla nieostrego widzenia na peryferiach.</li>" +
      "<li><b>Kontur – fundament i szkielet obrazu</b>: rzeczy nie mają konturów, a rysujemy je liniami (Chauvet, Lascaux, Altamira, rysunki dzieci). Kontur to stylizacja efektów hamowania obocznego: świat „na wyjściu z siatkówki”. Ok. 30 tys. lat temu odkrycie rysunku na płaszczyźnie – kamień milowy jak ogień i język.</li></ul>" },
    { id: "s9", n: 9, title: "Trzeci wymiar i wskaźniki głębi", html:
      "<div class='plain'><p>Na siatkówce obraz jest płaski, a my widzimy przestrzeń. Blisko pomagają dwa oczy, dalej i na obrazach – wskazówki, których się uczymy.</p></div>" +
      "<p class='srcline'>Francuz, s. 223–230</p>" +
      "<ul><li>Trzy wymiary: <b>horyzontalny, wertykalny, w głąb</b>. Pierwsze dwa tworzą płaszczyznę prostopadłą do osi widzenia; głąb to linia równoległa.</li>" +
      "<li>Szczególna uwaga do ok. <b>6 m</b> (bezpieczeństwo), największa precyzja w zasięgu rąk (narzędzia, rzeźby).</li>" +
      "<li><b>Dwuoczne</b>: <b>rozbieżność dwuoczna</b> (V1, dalej szlak grzbietowy i V5; Barlow, Blakemore, Pettigrew, 1967), <b>rywalizacja dwuoczna</b> przy całkiem różnych obrazach (wygrywa oko dominujące), <b>konwergencja i dywergencja</b> (do ok. 6 m).</li>" +
      "<li><b>Jednooczne</b> („okiem Cyklopa”): działają blisko i daleko, są podstawą iluzji 3D na obrazach. Ich odczytywanie jest <b>wyuczone</b>: test Hudsona – mieszkańcy Ghany, Zambii, Ugandy widzieli polowanie na słonia, a nie na antylopę (Serpell, Deregowski, 1980).</li>" +
      "<li><b>Brunelleschi</b> (XV w.) skodyfikował perspektywę linearną; to nie jedyna możliwa (Termes – perspektywa sferyczna). Escher łamie wskaźniki, zmuszając do rewizji.</li></ul>" +
      "<!--fig:wskazniki-->" +
      "<p><b>Separacja barw</b> jest najbardziej sporna (Picasso vs Cézanne). <b>Inkluzja</b> najmniej: zasłaniany nie może być bliżej. Wymiar w głąb zmienia wygląd i wielkość rzeczy, więc potrzebne są <b>zasady stałości widzenia</b>: kształtu i wielkości.</p>" },
    { id: "s10", n: 10, title: "Stałość kształtu", html:
      "<div class='plain'><p>Wentylator z boku i z przodu ma zupełnie inny obrys, a dla nas to ten sam przedmiot. Mózg porównuje go z „ulubionym” widokiem w pamięci.</p></div>" +
      "<p class='srcline'>Francuz, s. 231–237</p>" +
      "<ul><li><b>Stałość kształtu</b>: ten sam przedmiot mimo nowego punktu widzenia, złego światła, przysłonięcia (Palmer; Pizlo). Doświadczenie 3D to wniosek z płaskich obrazów siatkówkowych. Ryc. 137: wentylator.</li>" +
      "<li>Nie zależy od wielkości obrazu, ale rozmycie (odległość) jej szkodzi; nie szkodzi stałości wielkości (Leibowitz i in., 1978).</li>" +
      "<li>Chan i in. (2006): <b>symetria</b>, widoczne płaszczyzny, objętość. Pizlo i in. (2008): rozbieżność dwuoczna niepotrzebna; podstawą cechy w 2D.</li>" +
      "<li><b>Perspektywa kanoniczna</b> (Palmer, Rosch, Chase, 1981): najlepszy punkt widzenia → <b>kształt prototypowy</b>.</li>" +
      "<li>Mózg: <b>zakręt dolny skroniowy</b> i <b>wrzecionowaty</b> (dane z V4). Słowa: lewy wrzecionowaty, <b>VWFA</b>. Twarze: prawy lub oba, <b>FFA</b>. Neurony niezależne od sposobu kodowania konturu, wielkości, położenia, przysłonięcia.</li>" +
      "<li><b>Wrodzona</b>: habituacja u kilkudniowych niemowląt (Slater). <b>Agnozja kształtu</b> w degeneracji: autoportrety Utermohlena (Alzheimer). Sztuka łamie stałość kształtu: Dalí, Bacon, Picasso.</li></ul>" },
    { id: "s11", n: 11, title: "Stałość wielkości", html:
      "<div class='plain'><p>Ludzie w oddali wcale nie wydają się nam mali. Na obrazach rządzą jednak trochę inne reguły niż w realnej przestrzeni.</p></div>" +
      "<p class='srcline'>Francuz, s. 238–248</p>" +
      "<ul><li><b>Stałość wielkości</b>: trafna ocena wielkości niezależnie od odległości, z wiedzy i doświadczenia. Ryc. 144: para 15 m dalej ma ≤ 2/3 wysokości głowy osoby z przodu, a nie wydaje się niska.</li>" +
      "<li><b>Uccello</b>: plany jak osobne obrazy w obrazie, każdy z własną skalą.</li>" +
      "<li><b>Wielkość kanoniczna</b> (Konkle, Oliva, 2011): preferowana wielkość obiektu na obrazie; ryba, krzesło, ciężarówka rosną logarytmicznie; proporcja do kartki stała.</li>" +
      "<li>Prawdopodobnie <b>wrodzona</b> (Granrud; Slater); u dzieci 5–11 lat rośnie dokładność.</li>" +
      "<li>Lokalizacja niepewna: grzbietowy (Leibowitz, Post; MST), ale też brzuszny (pacjentka D.F.; V4). fMRI (2012): małe przedmioty – dolna kora skroniowa, duże – okolica przyhipokampowa, niezależnie od wielkości obrazu.</li>" +
      "<li>Łamanie w sztuce: Egipt (Echnaton największy, bo najważniejszy), Memling, Warhol, Close, Magritte.</li></ul>" },
    { id: "s12", n: 12, title: "Interpozycja", html:
      "<div class='plain'><p>To, co zasłonięte, jest dalej. Proste, ale mózg musi najpierw rozstrzygnąć, które kontury do czego należą i jak wygląda zasłonięta część.</p></div>" +
      "<p class='srcline'>Francuz, s. 249–262</p>" +
      "<ul><li><b>Interpozycja (okluzja)</b>: najważniejszy wskaźnik głębi. Najpierw pytanie: jeden obiekt czy dwa w głąb?</li>" +
      "<li><b>Kanizsa</b>: skrzyżowania <b>L</b> i <b>T</b>; międzyobiektowe <b>T</b> oddzielają obiekty. Przezroczyste dają <b>X</b> i brak interpozycji.</li></ul>" +
      "<!--fig:skrzyzowania-->" +
      "<ul><li><b>Granica własna obiektu</b> (Koffka): kontur należy do figury. W <b>V2</b> ponad 50% komórek konturu reaguje silniej po stronie figury (von der Heydt i in.); przy niejasnej figurze aktywność trwa ponad sekundę. Skąd ta „wiedza” – nieznane.</li>" +
      "<li>Strzemiński (kontury przezroczyste), Chauvet (przenikające się zwierzęta), szkice Leonarda.</li>" +
      "<li>Rekonstrukcja <b>amodalna</b> (Kanizsa). <b>Dobra kontynuacja</b> vs <b>prostota, regularność, symetria</b> (van Lier i in., 1994): żadne nie wystarczają. Złożoność percepcyjna vs pamięciowa: wygrywa interpretacja najbardziej prawdopodobna z doświadczenia.</li>" +
      "<li>Znane obiekty: fragment wzbudza pełną reprezentację (zakręt dolny skroniowy). <b>Interpozycja = rozbieżność</b> między kompletną reprezentacją w pamięci a niekompletnym obrazem na siatkówce (fryz Partenonu, Fidiasz). Magritte („Carte Blanche”) łamie tę regułę.</li></ul>" },
    { id: "s13", n: 13, title: "Organizacja percepcyjna (podręcznik akademicki)", html:
      "<div class='plain'><p>Nie odbieramy świata jak kamera. Grupujemy elementy, wybieramy figurę, dopowiadamy brakujące kawałki. W tym sensie świat, który widzimy, sami tworzymy.</p></div>" +
      "<p class='srcline'>„Psychologia. Podręcznik akademicki”, s. 45–47</p>" +
      "<ul><li>Cechy integrujemy <b>z dołu do góry</b> (detektor owadów Barlowa, jednostki gnostyczne Konorskiego, geony Biedermana), ale według schematów, czyli też <b>z góry na dół</b>. Te procesy się nie wykluczają.</li>" +
      "<li><b>Synteza percepcyjna</b>: porządek w przestrzeni i w czasie; pamięć i wnioskowanie tworzą syntetyczny obraz.</li>" +
      "<li><b>Figura i tło</b> (psychologia postaci): figura ma kształt i miejsce, tło jest bezkształtne. Podział zależy od obserwatora (ptaki czy chmury); figury dwuznaczne (profile i kielich) – od nastawienia.</li>" +
      "<li><b>Grupowanie</b>: figura bez konturu (kropki tworzą kwadrat i trójkąt); <b>iluzoryczny kontur trójkąta</b>.</li>" +
      "<li><b>Konstruktywizm</b> (Neisser, 1967): człowiek tworzy rzeczywistość.</li>" +
      "<li>Prawa: (1) <b>bliskości</b>, (2) <b>podobieństwa</b>, (3) <b>domykania</b>, (4) dobrej postaci – symetria, regularność (nazwa na niewidocznym fragmencie), (5) <b>wspólnej drogi</b>.</li>" +
      "<li>Podejście informacyjne: Palmer (układ odniesienia), Ullman (programy wzrokowe); spostrzeganie to <b>wnioskowanie</b> na podstawie wiedzy (Marr; Helmholtz już w 1867).</li></ul>" }
  ]
});
