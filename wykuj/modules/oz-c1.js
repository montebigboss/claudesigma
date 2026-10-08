/* Ćwiczenia u dr Wioletty Ozgi (grupy 1, 2, 3, 8, 10), lektury i czytanki: czytanka 1.
 *
 * Źródła (zdjęcia stron od studenta, assets/ozga/):
 *   J.W. Kalat, „Biologiczne podstawy psychologii”, rozdz. 6 „Wzrok”, s. 144, 146–150, 157–161
 *     (na zdjęciach brak s. 145 i 151–156)
 *   P. Francuz, „Imagia”, fragment „Neuropoznawcze podstawy widzenia”, s. 40–57
 *     (s. 40 zaczyna się w połowie zdania; na s. 52–53 brak ostatnich linijek)
 *
 *   "S" z czytanki (domyślne)
 *   "D" dopowiedzenie spoza czytanki (★). Kartkówka próbna je pomija.
 *
 * Każde ćwiczenie ma x (dlaczego poprawna jest poprawna) i, gdzie są opcje, w
 * (czym są błędne opcje, po kolei za poprawną; w multi za o[]).
 * talk[]: pytania na zajęcia { q, a (html), keys[], trap?, src?, hint? }.
 * pages[]: grupy stron { short, title, note?, items: [id pliku, podpis, id sekcji streszczenia] }.
 */
Wykuj.registerModule({
  id: "oz-c1",
  kind: "reading",
  course: { id: "ozga", name: "Dr Wioletta Ozga", short: "Ćw. Ozga", groups: "grupy 1, 2, 3, 8, 10", theme: "amber", icon: "book", section: "cw" },
  shelf: "Lektury i czytanki – po ludzku",
  number: 1,
  label: "Czytanka 1",
  title: "Jak widzimy: od oka do mózgu",
  byline: "Kalat „Wzrok” + Francuz „Imagia”",
  sources: [
    "J.W. Kalat, „Biologiczne podstawy psychologii”, rozdz. 6 „Wzrok”, s. 144–161",
    "P. Francuz, „Imagia”, „Neuropoznawcze podstawy widzenia”, s. 40–57"
  ],
  term: "Ćwiczenia · lektura",
  passing: null,
  passRatio: 0.6,
  examNote: "Nie wiadomo, jak prowadząca sprawdza czytanki. Próg 60% to punkt odniesienia: kto go przekracza, zna tekst dobrze.",
  minimumTitle: "Najważniejsze w 5 minut",
  sourceNames: { S: "z czytanki", D: "★ dopowiedzenie spoza czytanki" },

  pageDir: "ozga",
  pages: [
    { short: "Kalat", title: "Kalat, „Biologiczne podstawy psychologii”, rozdz. 6 „Wzrok”",
      note: "Na zdjęciach nie ma s. 145 ani s. 151–156 (dalszy ciąg o widzeniu barw). Jeśli były zadane, wrzuć je, a dopiszę je do streszczenia.",
      items: [["k144", "s. 144", "s1"], ["k146", "s. 146", "s5"], ["k147", "s. 147", "s5"], ["k148", "s. 148", "s7"], ["k149", "s. 149", "s6"], ["k150", "s. 150", "s12"],
        ["k157", "s. 157", "s8"], ["k158", "s. 158", "s5"], ["k159", "s. 159", "s9"], ["k160", "s. 160", "s10"], ["k161", "s. 161", "s10"]] },
    { short: "Francuz", title: "Francuz, „Imagia”, „Neuropoznawcze podstawy widzenia”",
      note: "Na zdjęciach tekst zaczyna się w połowie zdania na s. 40 (wcześniejsze strony opisują pierwsze trzy cechy sceny). Na s. 52 i 53 ucięło ostatnie 2–3 linijki.",
      items: [["f40", "s. 40", "s2"], ["f41", "s. 41", "s3"], ["f42", "s. 42", "s3"], ["f43", "s. 43", "s8"], ["f44", "s. 44", "s4"], ["f45", "s. 45", "s4"],
        ["f46", "s. 46", "s4"], ["f47", "s. 47", "s6"], ["f48", "s. 48", "s6"], ["f49", "s. 49", "s7"], ["f50", "s. 50", "s7"], ["f51", "s. 51", "s7"],
        ["f52", "s. 52", "s6"], ["f53", "s. 53", "s5"], ["f54", "s. 54", "s11"], ["f55", "s. 55", "s11"], ["f56", "s. 56", "s11"], ["f57", "s. 57", "s11"]] }
  ],

  sets: {
    komorki: { label: "Która to komórka siatkówki?",
      items: ["Receptory (pręciki i czopki)", "Komórki dwubiegunowe", "Komórki zwojowe", "Komórki horyzontalne", "Komórki amakrynowe"],
      why: ["komórki z tyłu siatkówki, które pochłaniają światło i zamieniają je na sygnał",
        "pierwszy przekaźnik za receptorami: biorą od nich sygnał i oddają komórkom zwojowym",
        "ostatnia warstwa siatkówki; ich aksony tworzą nerw wzrokowy",
        "komórki pobudzane przez receptory, które hamują komórki dwubiegunowe w okolicy (hamowanie oboczne)",
        "bardzo zróżnicowani pośrednicy (co najmniej 29 odmian) między komórkami dwubiegunowymi, amakrynowymi i zwojowymi"] },
    oko: { label: "Która to część oka?",
      items: ["Rogówka", "Źrenica", "Tęczówka", "Soczewka", "Mięśnie rzęskowe", "Twardówka", "Siatkówka"],
      why: ["przezroczysta osłona z przodu oka, soczewka o stałym kształcie",
        "otwór w środku tęczówki, przez który światło wpada do oka",
        "przysłona, która reguluje średnicę źrenicy",
        "przezroczysty „kryształ” za tęczówką, który zmienia kształt i ustawia ostrość",
        "mięśnie, które rozciągają soczewkę albo pozwalają jej się uwypuklić (akomodacja)",
        "sztywna obudowa gałki ocznej: chroni ją i utrzymuje kształt",
        "światłoczuła warstwa z receptorami na tylnej ścianie oka"] },
    droga: { label: "Który to odcinek drogi wzrokowej?",
      items: ["Nerw wzrokowy", "Skrzyżowanie wzrokowe", "Trakt wzrokowy", "Ciało kolankowate boczne (LGN)", "Promienistość wzrokowa", "Pierwotna kora wzrokowa"],
      why: ["wiązka aksonów komórek zwojowych, która wychodzi z oka",
        "miejsce, gdzie połowa włókien z każdego oka przechodzi na drugą stronę mózgu",
        "odcinek od skrzyżowania wzrokowego do ciała kolankowatego bocznego",
        "jądro wzgórza, pierwsza stacja w mózgu dla większości informacji z oczu",
        "aksony komórek z LGN biegnące do kory w płacie potylicznym",
        "kora w płacie potylicznym, do której docierają impulsy z LGN"] },
    widzenie: { label: "Jakie to widzenie?",
      items: ["Widzenie fotopowe", "Widzenie mezopowe", "Widzenie skotopowe"],
      why: ["widzenie w bardzo dobrym świetle, głównie czopkami",
        "widzenie o zmierzchu, świcie i przy księżycu: pracują pręciki i czopki, żaden na 100%",
        "widzenie w słabym świetle, wynik aktywności pręcików"] },
    zwojowe: { label: "Który typ komórek zwojowych?",
      items: ["Komórki karłowate", "Komórki parasolowe", "Komórki pyłkowe"],
      why: ["małe komórki ze środka siatkówki: szczegóły i para czerwony–zielony, ok. 80% włókien nerwu",
        "duże komórki: drobne różnice jasności, krawędzie, ruch, dwa razy szybsze, ok. 10% włókien",
        "maleńkie ciała, duże rozgałęzienia: para niebieski–żółty, ok. 10% włókien"] }
  },

  units: [
    { id: "zielen", title: "Zieleń jest w nas", sub: "Ogólne prawa percepcji (Kalat)", icon: "bulb", seq: true,
      teach: "<p><b>Myśl przewodnia całej czytanki:</b> nie widzimy świata „jak przez szybę”. Oko i mózg nie robią kopii widoku, tylko <b>tłumaczą</b> światło na sygnały nerwowe i z nich <b>budują</b> to, co widzisz.</p>" +
        "<p>Kalat zaczyna od przykładu: dla kawałka żelaza woda jest „rdzawa”, ale rdza powstaje w żelazie, nie w wodzie. Tak samo zieleń liści powstaje w twoim oku i mózgu, nie w liściach.</p>" },
    { id: "scena", title: "Scena wizualna: rzeczy i relacje", sub: "Cztery cechy, dwie kategorie (Francuz)", icon: "shapes", seq: true,
      teach: "<p>Francuz rozkłada każdy widok na <b>cztery cechy</b>: <b>kształt, barwa, organizacja przestrzenna, dynamika (ruch)</b>.</p>" +
        "<p>Łączy je w <b>dwie kategorie</b>: <b>rzeczy</b> (kształt i barwa: CO to jest) i <b>relacji</b> (położenie i ruch: GDZIE i JAK się rusza). Kategorie nie są rozłączne: szybki ruch zaciera kształt i kolor.</p>" },
    { id: "kreacja", title: "Widzenie to akt kreacji", sub: "Dekompozycja i kompozycja", icon: "spark", seq: true,
      teach: "<p>Widzenie to <b>nie kamera</b>. Mózg najpierw <b>rozkłada</b> obraz z siatkówki na cechy i bada je osobnymi ścieżkami (<b>dekompozycja</b>), a potem <b>składa</b> wyniki w całość, dokładając wiedzę z pamięci wizualnej (<b>kompozycja</b>).</p>" +
        "<p>Dlatego Francuz pisze, że to, co widzisz, jest raczej <b>wytwarzane</b> niż <b>odtwarzane</b>, a widzenie to <b>akt kreacji</b>.</p>" },
    { id: "oko", title: "Oko jak aparat (prawie)", sub: "Rogówka, soczewka, akomodacja", icon: "eye", seq: true,
      teach: "<p>Droga światła: <b>rogówka → źrenica (w tęczówce) → soczewka → siatkówka</b>. Twardówka to obudowa.</p>" +
        "<p>Oko przypomina aparat, ale <b>działa inaczej</b>: ostrość ustawia przez <b>zmianę grubości soczewki</b> (akomodacja), a siatkówka, w przeciwieństwie do matrycy, nie rejestruje obrazu wszędzie tak samo dobrze.</p>" },
    { id: "siatkowka", title: "Siatkówka zbudowana na opak", sub: "Warstwy komórek i plamka ślepa", icon: "wall", seq: true,
      teach: "<p>Sygnał idzie: <b>receptory → komórki dwubiegunowe → komórki zwojowe → nerw wzrokowy</b>. Z boku pracują <b>horyzontalne</b> i <b>amakrynowe</b>.</p>" +
        "<p>Haczyk: receptory leżą <b>z tyłu</b> oka, więc światło przechodzi przez pozostałe warstwy. Aksony komórek zwojowych muszą jakoś wyjść z oka: wychodzą w jednym miejscu, gdzie nie ma receptorów. To <b>plamka ślepa</b>.</p>" },
    { id: "receptory", title: "Pręciki i czopki", sub: "Noc, dzień i zmierzch", icon: "moon", seq: true,
      teach: "<p><b>Pręciki</b> (walce): czułe na słabe światło, bez kolorów, najwięcej na obwodzie, jest ich ok. 20 razy więcej. <b>Czopki</b> (stożki): jasne światło, kolory i szczegóły, najwięcej w dołku.</p>" +
        "<p>Stąd trzy rodzaje widzenia: <b>fotopowe</b> (dzień, czopki), <b>skotopowe</b> (noc, pręciki), <b>mezopowe</b> (zmierzch, oba, żaden na 100%).</p>" },
    { id: "dolek", title: "Dołek środkowy a obwód", sub: "Ostrość czy czułość", icon: "target", seq: true, table: true,
      teach: "<p>To, na co patrzysz, pada na <b>plamkę żółtą</b>, a jej środek to <b>dołek środkowy</b>: same czopki, każdy z „prywatnym kablem” do mózgu. Wynik: <b>najostrzejsze widzenie</b>.</p>" +
        "<p>Na <b>obwodzie</b> wiele pręcików zbiega się na jedną komórkę. Szczegóły się gubią, ale słabe światło się sumuje: <b>lepsza czułość</b>. Dlatego słabą gwiazdę lepiej widać, patrząc trochę obok.</p>" },
    { id: "droga", title: "Droga do mózgu", sub: "Od nerwu wzrokowego do kory", icon: "path", seq: true,
      teach: "<p>Kolejność do zapamiętania: <b>nerw wzrokowy → skrzyżowanie wzrokowe → trakt wzrokowy → ciało kolankowate boczne (LGN, we wzgórzu) → promienistość wzrokowa → pierwotna kora wzrokowa</b> (płat potyliczny).</p>" +
        "<p>Na skrzyżowaniu u człowieka <b>połowa</b> włókien z każdego oka przechodzi na drugą stronę. Część aksonów skręca do <b>wzgórków górnych</b>.</p>" },
    { id: "pola", title: "Pola recepcyjne", sub: "Na co reaguje neuron", icon: "spiral", seq: true,
      teach: "<p><b>Pole widzenia</b> to wszystko, co widzisz naraz. <b>Pole recepcyjne</b> neuronu to kawałek pola widzenia, na który ten neuron reaguje.</p>" +
        "<p>Receptor ma pole jak punkt. Komórka zwojowa zbiera sygnały z wielu receptorów, więc jej pole jest większe i ma kształt <b>obwarzanka</b>: centrum działa w jedną stronę, otoczka w przeciwną.</p>" },
    { id: "hamowanie", title: "Hamowanie oboczne", sub: "Jak siatkówka wyostrza krawędzie", icon: "split", seq: true,
      teach: "<p><b>Hamowanie oboczne</b>: aktywny neuron hamuje sąsiadów. W siatkówce robią to <b>komórki horyzontalne</b>, a ich wpływ słabnie z odległością.</p>" +
        "<p>Skutek: na granicy jasne–ciemne komórki po jasnej stronie brzegu są pobudzone <b>najmocniej</b>, a tuż za brzegiem po ciemnej <b>najsłabiej</b>. Krawędzie wychodzą wyraźniej. Pobaw się symulatorem:</p>" +
        "<div class='li-box' data-widget='hamowanie'></div>" },
    { id: "zwojowe", title: "Trzy rodzaje komórek zwojowych", sub: "Karłowate, parasolowe, pyłkowe", icon: "pairs", seq: true,
      teach: "<p>Francuz dzieli komórki zwojowe na trzy grupy:</p>" +
        "<ul><li><b>Karłowate</b>: małe, ze środka siatkówki; szczegóły i para <b>czerwony–zielony</b>; ok. <b>80%</b> włókien nerwu.</li>" +
        "<li><b>Pyłkowe</b>: maleńkie ciała; para <b>niebieski–żółty</b>; ok. 10%.</li>" +
        "<li><b>Parasolowe</b>: duże; bez kolorów, ale łapią <b>różnice jasności 1–2%</b>, krawędzie i <b>ruch</b>, przewodzą <b>dwa razy szybciej</b>; ok. 10%.</li></ul>" },
    { id: "barwy", title: "Skąd się biorą kolory", sub: "Fale, czopki i porównywanie", icon: "sun", seq: true,
      teach: "<p>Kolor zależy od <b>długości fali</b> światła (fiolet najkrótsze, czerwień najdłuższe). Ale jedna komórka nerwowa nie może naraz zakodować i jasności, i barwy, więc kolor to zawsze <b>porównanie aktywności wielu neuronów</b>, np. różnych typów czopków.</p>" +
        "<p>Teoria <b>trichromatyczna</b> (Younga–Helmholtza): <b>trzy typy czopków</b>, każdy najczulszy na inny zakres fal.</p>" },
    { id: "boss", title: "Test z całej czytanki", sub: "15 pytań ze wszystkich lekcji", icon: "crown", boss: true }
  ],

  concepts: [
    /* ---------- zieleń jest w nas ---------- */
    { id: "zielen", u: "zielen", term: "Zieleń jest w nas",
      plain: "Liście nie są „zielone same z siebie”. Zieleń powstaje dopiero, gdy odbite od nich światło zadziała na neurony oka i mózgu. Tak jak rdza powstaje w żelazie, a nie w wodzie.",
      def: "Kolor nie jest cechą przedmiotu, tylko tym, co się dzieje, gdy światło odbite od przedmiotu oddziałuje na neurony w oku i w mózgu. Każdy koloruje swój własny świat (Kalat: przykład żelaza i rdzy).",
      sh: "kolor powstaje w nas, nie w przedmiocie" },
    { id: "transdukcja", u: "zielen", term: "Transdukcja",
      plain: "Receptor „tłumaczy” energię ze świata (np. światło) na język układu nerwowego, czyli na sygnał elektrochemiczny.",
      def: "Każdy receptor pochłania tylko jeden rodzaj energii i przekształca go we wzorzec aktywności elektrochemicznej. Receptory wzrokowe reagują nawet na pojedynczy foton.",
      sh: "zamiana energii bodźca na sygnał nerwowy" },
    { id: "pot-receptorowy", u: "zielen", term: "Potencjał receptorowy",
      plain: "Mała zmiana napięcia na błonie receptora. Im większa, tym mocniej receptor pobudza albo hamuje kolejny neuron.",
      def: "Lokalna depolaryzacja lub hiperpolaryzacja błony komórkowej receptora. Jego wielkość określa siłę pobudzenia lub hamowania następnego neuronu na drodze do mózgu.",
      sh: "lokalna zmiana napięcia błony receptora" },
    { id: "ludzik", u: "zielen", term: "Mały ludzik w głowie (błąd Kartezjusza)",
      plain: "Kartezjusz myślał, że mózg robi „kopię” widoku, którą ktoś w środku ogląda. Ale kto ogląda tę kopię? I kto siedzi w nim? Błędne koło.",
      def: "Pogląd, że mózgowa reprezentacja bodźca musi go przypominać (Kartezjusz, XVII w.). Zakłada istnienie małego ludzika, który ogląda obraz w głowie, więc niczego nie wyjaśnia.",
      sh: "błąd: mózg robi kopię widoku dla „ludzika”" },
    { id: "bez-kopii", u: "zielen", term: "Kodowanie bez kopiowania",
      plain: "Mózg nie przechowuje obrazka stołu. Blat stołu nie musi być „na górze” siatkówki ani na górze głowy.",
      def: "Kodowanie informacji wzrokowych w mózgu nie polega na duplikowaniu kształtu widzianego przedmiotu (Kalat).",
      sh: "w mózgu nie ma obrazka, jest kod" },
    { id: "muller", u: "zielen", term: "Prawo specyficznych energii nerwowych",
      plain: "Każdy nerw „mówi” jednym językiem: wzrokowy zawsze o świetle, słuchowy zawsze o dźwięku. Mózg wie, co czujesz, po tym, KTÓRY nerw jest aktywny.",
      def: "Johannes Müller (1838): wszelka aktywność w danym nerwie zawsze przenosi do mózgu ten sam rodzaj informacji. Nerwy przesyłają tylko potencjały czynnościowe, a mózg interpretuje je zależnie od tego, z którego nerwu przyszły.",
      sh: "dany nerw zawsze niesie ten sam rodzaj informacji" },

    /* ---------- scena ---------- */
    { id: "cechy-sceny", u: "scena", term: "Cztery cechy sceny wizualnej",
      plain: "Patrząc na widok, rejestrujesz: jaki kształt mają rzeczy, jaki mają kolor, jak są rozmieszczone i czy się ruszają.",
      def: "Kształt, barwa, organizacja przestrzenna i dynamika (Francuz).",
      sh: "kształt, barwa, organizacja przestrzenna, dynamika" },
    { id: "kat-rzeczy", u: "scena", term: "Kategoria rzeczy",
      plain: "CO to jest i jak wygląda: forma i kolor. Kubek rozpoznasz tak samo, czy stoi po lewej, czy po prawej, czy się rusza.",
      def: "Kształt i barwa: własności sceny, dzięki którym rozpoznajemy przedmioty i orzekamy o ich formach i barwach. Ich analiza nie zależy od położenia względem obserwatora ani od ruchu.",
      sh: "kształt i barwa: CO to jest" },
    { id: "kat-relacji", u: "scena", term: "Kategoria relacji",
      plain: "GDZIE co jest i JAK się porusza. To zawsze relacja czegoś do czegoś, np. „kubek jest na prawo ode mnie”.",
      def: "Organizacja przestrzenna i ruch obiektów. Zawsze dotyczą czegoś, co ma kształt i barwę; wiążą się z reprezentacją ciała obserwatora i z motoryką.",
      sh: "położenie i ruch: GDZIE i JAK się rusza" },
    { id: "egocentryczna", u: "scena", term: "Egocentryczna pozycja obserwatora",
      plain: "Punktem odniesienia jesteś ty: „po lewej”, „po prawej”, „nade mną” liczysz od swojego ciała.",
      def: "Uprzywilejowanie obserwatora w scenie (Goodale i Milner, 2008): relacje w płaszczyźnie prostopadłej do osi widzenia ustala się intuicyjnie względem stron ciała i naturalnych ram pola widzenia lub ramy obrazu.",
      sh: "relacje liczone względem ciała patrzącego" },
    { id: "glebia", u: "scena", term: "Relacje w głąb",
      plain: "Co jest bliżej, a co dalej, nie widać „za darmo”. Mózg musi to wyliczyć z danych siatkówki i ze wskazówek głębi.",
      def: "Dostrzeżenie relacji wzdłuż linii równoległych do osi widzenia (w głąb) nie jest oczywiste i wymaga specjalnych procedur przetwarzania danych siatkówkowych oraz wiedzy o wskaźnikach głębi.",
      sh: "odległość w głąb trzeba wyliczyć" },
    { id: "dynamika", u: "scena", term: "Dynamika sceny",
      plain: "Ruch: rzeczy się przesuwają, ty idziesz, twoje oczy skaczą po widoku. To najbardziej komplikuje analizę.",
      def: "Czwarta cecha sceny: pochodna szybkości, zmienności, przyspieszenia i trajektorii ruchu przedmiotów i obserwatora. Liczy się też ruch oczu, który przenosi oś widzenia na różne fragmenty sceny.",
      sh: "ruch przedmiotów, obserwatora i oczu" },
    { id: "na-styku", u: "scena", term: "Doświadczenia na styku kategorii",
      plain: "Gdy coś mknie bardzo szybko, kształt i kolor się rozmywają, a zostaje samo wrażenie ruchu. Dlatego rzeczy i relacje to kategorie, które się zazębiają.",
      def: "Np. bardzo szybko poruszający się obiekt lub obserwator: całkowite zatarcie konturów i barw daje doświadczenie ruchu, który nie jest ruchem rzeczy o określonym kształcie. Takich doświadczeń przybywa (szybkie podróże, media), a ewolucja nie wykształciła jeszcze mechanizmów radzenia sobie z nimi (złudzenia ruchu, złudzenia pilotów).",
      sh: "szybki ruch zaciera kształt i barwę" },

    /* ---------- kreacja ---------- */
    { id: "cztery-sciezki", u: "kreacja", term: "Cztery częściowo niezależne ścieżki",
      plain: "Kształt, kolor, położenie i ruch mózg analizuje osobnymi „liniami produkcyjnymi”, trochę niezależnie od siebie.",
      def: "Od komórek siatkówki do struktur mózgu cechy sceny (kształt, barwa, orientacja przestrzenna 2D i 3D, ruch) są analizowane przez cztery częściowo niezależne ścieżki (podsystemy) neuronalne. Źródło: artykuł Livingstone i Hubela w „Science” (1988).",
      sh: "cechy sceny analizują osobne podsystemy" },
    { id: "dekompozycja", u: "kreacja", term: "Dekompozycja",
      plain: "Faza 1 widzenia: mózg rozkłada widok na cechy i każdą bada osobno.",
      def: "Pierwsza faza widzenia: analityczna i względnie niezależna analiza cech sceny, po wyabstrahowaniu ich z obrazu siatkówkowego (Francuz).",
      sh: "rozkład widoku na cechy analizowane osobno" },
    { id: "kompozycja", u: "kreacja", term: "Kompozycja",
      plain: "Faza 2 widzenia: mózg skleja wyniki z powrotem w całość i dokłada to, co pamięta z wcześniejszych widoków.",
      def: "Druga faza widzenia: integrowanie (syntetyzowanie) wyników analiz z fazy pierwszej z uwzględnieniem danych zapisanych wcześniej w pamięci wizualnej.",
      sh: "składanie wyników w całość z pomocą pamięci" },
    { id: "akt-kreacji", u: "kreacja", term: "Widzenie jako akt kreacji",
      plain: "To, co widzisz, mózg raczej wytwarza, niż odtwarza. Wynik zawsze trochę różni się od tego, co padło na siatkówkę.",
      def: "Wynik integracji sensorycznej zawsze (w mniejszym lub większym stopniu) odbiega od danych źródłowych, więc treści doświadczenia wzrokowego są wytwarzane przez system wzrokowy, a nie odtwarzane z obrazów siatkówkowych (Francuz).",
      sh: "obraz jest wytwarzany, nie odtwarzany" },
    { id: "bez-procesora", u: "kreacja", term: "Brak centralnego procesora",
      plain: "Nie ma w mózgu jednego miejsca, które widzi wszystko naraz. Różne części kory zajmują się różnymi stronami widoku.",
      def: "W głowie nie ma małego ludzika ani centralnego procesora, który widziałby naraz wszystkie aspekty bodźca. Różne części kory przetwarzają odrębne aspekty (co to jest, położenie, kolor, ruch) do pewnego stopnia niezależnie (Kalat).",
      sh: "różne części kory, różne aspekty widoku" },
    { id: "slepota-ruch", u: "kreacja", term: "Ślepota na ruch",
      plain: "Niektórzy ludzie widzą dobrze, a mimo to nie widzą ruchu albo nie umieją ocenić jego kierunku i prędkości. To znak, że ruch analizuje osobny system.",
      def: "Zjawisko, które zaskoczyło psychologów końca XX wieku: osoby, które poza tym dobrze widzą, nie zauważają, że przedmiot się porusza, albo mają duże problemy z określeniem kierunku lub prędkości ruchu (Kalat).",
      sh: "dobrze widzi, ale nie dostrzega ruchu" },

    /* ---------- oko ---------- */
    { id: "rogowka", u: "oko", term: "Rogówka",
      plain: "Przezroczysta „szybka” z przodu oka. Chroni je i działa jak soczewka, która nie zmienia kształtu.",
      def: "Najbardziej wysunięta na zewnątrz, przezroczysta część oka. Chroni je przed uszkodzeniem mechanicznym, pełni funkcję filtra ochronnego i soczewki o stałej ogniskowej (stałym kształcie).",
      sh: "przezroczysta osłona o stałym kształcie" },
    { id: "zrenica", u: "oko", term: "Źrenica i tęczówka",
      plain: "Źrenica to dziurka, przez którą wpada światło. Tęczówka to kolorowy pierścień wokół niej, który ją zwęża i rozszerza jak przysłona w aparacie.",
      def: "Źrenica: otwór w środku tęczówki, przez który światło wpada do oka. Tęczówka: przysłona, która reguluje średnicę źrenicy.",
      sh: "otwór na światło i regulująca go przysłona" },
    { id: "soczewka", u: "oko", term: "Soczewka",
      plain: "„Biologiczny kryształ” za tęczówką: prawie idealnie przezroczysty i zmienia grubość, żeby ostro widzieć blisko i daleko.",
      def: "Soczewka zmiennoogniskowa (o zmiennym kształcie) za tęczówką. Przepuszcza niemal 100% światła i pozwala ostro widzieć rzeczy w różnej odległości. Ralf Dahm nazywa ją „kryształem biologicznym”.",
      sh: "przezroczysta, zmienia kształt, ustawia ostrość" },
    { id: "akomodacja", u: "oko", term: "Akomodacja",
      plain: "Ustawianie ostrości przez zmianę grubości soczewki: rzecz blisko, soczewka grubsza; rzecz daleko, soczewka cieńsza. Aparat robi to inaczej.",
      def: "Mięśnie rzęskowe, kurcząc się, rozciągają soczewkę (staje się cieńsza), a rozluźniając się, pozwalają jej się uwypuklić. Im bliżej obiekt, tym grubsza soczewka. Grubsza soczewka załamuje promienie pod większym kątem.",
      sh: "ostrość przez zmianę grubości soczewki" },
    { id: "twardowka", u: "oko", term: "Twardówka",
      plain: "Twarda, biała obudowa gałki ocznej, jak korpus aparatu.",
      def: "Szczelna i sztywna obudowa oka. Chroni gałkę oczną przed uszkodzeniami mechanicznymi i stabilizuje jej kształt.",
      sh: "sztywna obudowa gałki ocznej" },
    { id: "siatkowka", u: "oko", term: "Siatkówka",
      plain: "Światłoczuła „matryca” na tylnej ścianie oka, wyściela ok. 70% wnętrza gałki. Obraz pada na nią pomniejszony i do góry nogami.",
      def: "Tylna powierzchnia gałki ocznej pokryta receptorami wzrokowymi (pręcikami i czopkami). Obraz siatkówkowy jest sferyczny, pomniejszony i odwrócony.",
      sh: "światłoczuła warstwa z receptorami na dnie oka" },
    { id: "odwrocony", u: "oko", term: "Odwrócony obraz",
      plain: "Obraz na siatkówce jest do góry nogami i lewa strona jest po prawej. Mózgowi to nie przeszkadza, bo nie potrzebuje „prostego” obrazka, tylko kodu.",
      def: "Światło z lewej pada na prawą połowę siatkówki, z góry na dolną. Układ wzrokowy nie duplikuje obrazu, więc odwrócenie nie jest problemem, tak jak komputer nie musi trzymać komend z góry ekranu w „górnej” części pamięci (Kalat).",
      sh: "do góry nogami, ale mózgowi to nie przeszkadza" },
    { id: "ekran", u: "oko", term: "Siatkówka jak zniszczony ekran",
      plain: "Matryca aparatu rejestruje każdy punkt tak samo. Siatkówka nie: w jednych miejscach jest świetna, w innych słaba, a w jednym ma dziurę.",
      def: "Obraz pada na siatkówkę ostro, ale siatkówka nie odwzorowuje go wszędzie z tą samą jakością. Przypomina mocno zniszczony ekran kinowy: pofałdowany, zabrudzony, miejscami podziurawiony. Budowa oka i aparatu jest podobna, działanie niemal całkowicie odmienne (Francuz za Duchowskim, 2007).",
      sh: "siatkówka odwzorowuje obraz nierówno" },

    /* ---------- siatkówka ---------- */
    { id: "dwubiegunowe", u: "siatkowka", term: "Komórki dwubiegunowe",
      plain: "Pierwszy „przekaźnik” za receptorami. Nazwa od tego, że ich wypustki wychodzą z dwóch przeciwnych końców (biegunów).",
      def: "Neurony siatkówki położone bliżej środka oka niż receptory; dostają od receptorów sygnały i przekazują je komórkom zwojowym. Ich wypustki wychodzą z przeciwległych końców (biegunów) neuronu.",
      sh: "przekaźnik między receptorem a komórką zwojową" },
    { id: "zwojowe", u: "siatkowka", term: "Komórki zwojowe",
      plain: "Ostatnia warstwa siatkówki. Ich długie aksony to „kable”, które wychodzą z oka jako nerw wzrokowy.",
      def: "Neurony siatkówki położone najbliżej środka oka. Dostają sygnały od komórek dwubiegunowych, a ich aksony grupują się, splatają i jako nerw wzrokowy biegną do mózgu.",
      sh: "ich aksony tworzą nerw wzrokowy" },
    { id: "horyzontalne", u: "siatkowka", term: "Komórki horyzontalne",
      plain: "Leżą „w poprzek” siatkówki. Receptory je pobudzają, a one hamują komórki dwubiegunowe dookoła.",
      def: "Komórki siatkówki, z którymi pręciki i czopki tworzą synapsy; tworzą połączenia hamujące z komórkami dwubiegunowymi. To neurony lokalne: bez aksonu i bez potencjałów czynnościowych.",
      sh: "hamują komórki dwubiegunowe w okolicy" },
    { id: "amakrynowe", u: "siatkowka", term: "Komórki amakrynowe",
      plain: "Bardzo różnorodni „pośrednicy”: biorą informacje od komórek dwubiegunowych i rozsyłają je dalej. Znamy co najmniej 29 ich rodzajów.",
      def: "Otrzymują informacje od komórek dwubiegunowych i przesyłają je do innych komórek dwubiegunowych, amakrynowych lub zwojowych. Zidentyfikowano co najmniej 29 odmian, co daje wiele możliwości złożonego przetwarzania (Kalat za Maslandem, 2001).",
      sh: "zróżnicowani pośrednicy, co najmniej 29 odmian" },
    { id: "na-opak", u: "siatkowka", term: "Siatkówka zbudowana na opak",
      plain: "Receptory są na samym tyle oka, więc światło musi najpierw przejść przez warstwy innych komórek. Na szczęście te komórki są przezroczyste.",
      def: "Receptory z tyłu oka wysyłają sygnały nie do mózgu, tylko do komórek dwubiegunowych i zwojowych położonych bliżej środka oka. Światło przechodzi przez te warstwy, zanim dotrze do receptorów; komórki są przezroczyste, więc go nie zniekształcają.",
      sh: "światło mija inne warstwy, zanim trafi do receptorów" },
    { id: "plamka-slepa", u: "siatkowka", term: "Plamka ślepa (tarcza nerwu wzrokowego)",
      plain: "Miejsce, gdzie nerw wzrokowy i naczynia krwionośne wychodzą z oka. Nie ma tam receptorów, więc nic tam nie widzisz.",
      def: "Miejsce wyjścia nerwu wzrokowego i naczyń krwionośnych z gałki ocznej, pozbawione fotoreceptorów. Według Francuza ok. 15° od dołka w stronę nosa, średnica ok. 1,5 mm, powierzchnia ok. 1,2 mm².",
      sh: "wyjście nerwu z oka, brak receptorów" },
    { id: "nic-nie-czern", u: "siatkowka", term: "Nic, a nie czerń",
      plain: "W plamce ślepej nie widzisz czarnej dziury, tylko po prostu NIC, jak z tyłu głowy. Dlatego jej nie zauważasz.",
      def: "W ślepych obszarach nie widzi się czerni, tylko po prostu nic, czyli brak jakichkolwiek doznań. Dlatego nawet duże ubytki pola widzenia (np. po jaskrze, która zniszczyła część nerwu wzrokowego) bywają niezauważone (Kalat).",
      sh: "w ślepym miejscu brak doznań, nie czerń" },
    { id: "dwoje-oczu", u: "siatkowka", term: "Dwoje oczu łata plamkę ślepą",
      plain: "Każde oko ma plamkę ślepą w trochę innym miejscu widoku, więc to, czego nie widzi jedno oko, widzi drugie.",
      def: "Oczy są od siebie odsunięte, więc w plamkę ślepą każdego oka rzutują się nieco inne fragmenty sceny. Ten fragment, którego nie widzi jedno oko, widzi drugie i odwrotnie (Francuz).",
      sh: "jedno oko widzi to, czego nie widzi drugie" },

    /* ---------- receptory ---------- */
    { id: "precik", u: "receptory", term: "Pręciki",
      plain: "Receptory „nocne”: bardzo czułe na słabe światło, ale nie rozróżniają kolorów. Najwięcej ich na obwodzie siatkówki i jest ich ok. 20 razy więcej niż czopków.",
      def: "Fotoreceptory w kształcie walców. Reagują na słabe światło, a silne je oślepia; nie różnicują barw (obraz achromatyczny). Najwięcej w obwodowej części siatkówki. Liczba: 78–107 mln, średnio ok. 92 mln (Francuz), ok. 120 mln (Kalat).",
      sh: "czułe na słabe światło, bez kolorów" },
    { id: "czopek", u: "receptory", term: "Czopki",
      plain: "Receptory „dzienne”: potrzebują dużo światła, ale dają kolory i ostrość. Najwięcej ich w dołku środkowym.",
      def: "Fotoreceptory w kształcie stożków. Mniej aktywne w słabym świetle, silnie reagują w jasnym; reagują z różną siłą na różne długości fal, więc są kluczowe dla widzenia barw. Najwięcej w dołku środkowym i wokół niego. Liczba: ok. 4,6 mln (Francuz), ok. 6 mln (Kalat).",
      sh: "jasne światło, kolory, ostrość" },
    { id: "barwnik", u: "receptory", term: "Barwniki wzrokowe",
      plain: "Substancje w pręcikach i czopkach, które „łapią” światło. Retinal (pochodna witaminy A) pod wpływem światła zmienia kształt i uruchamia komórkę.",
      def: "Światłoczułe substancje, które pod wpływem padającego światła wydzielają energię. Zawierają 11-cis-retinal (pochodna witaminy A) i białko opsynę. Światło niemal natychmiast przekształca 11-cis-retinal w trans-retinal, a powstała energia steruje aktywnością komórki (Kalat).",
      sh: "światłoczuła substancja z retinalem i opsyną" },
    { id: "fotopowe", u: "receptory", term: "Widzenie fotopowe",
      plain: "Widzenie w pełnym świetle, głównie czopkami: kolory i szczegóły.",
      def: "Widzenie w warunkach bardzo dobrego oświetlenia, w którym biorą udział przede wszystkim czopki.",
      sh: "dzienne, głównie czopki" },
    { id: "skotopowe", u: "receptory", term: "Widzenie skotopowe",
      plain: "Widzenie po ciemku, pręcikami: odcienie szarości, bez kolorów.",
      def: "Widzenie w warunkach słabego oświetlenia, wynik aktywności pręcików.",
      sh: "nocne, głównie pręciki" },
    { id: "mezopowe", u: "receptory", term: "Widzenie mezopowe",
      plain: "Zmierzch, świt, noc przy księżycu: pracują oba rodzaje receptorów, ale żaden na 100%. Dlatego to groźna pora dla kierowców.",
      def: "Widzenie podczas zmierzchu, wczesnym rankiem lub w księżycową noc. Pracują pręciki i czopki, ale żaden z systemów nie działa w pełni; szczególnie niebezpieczny czas dla kierowców (Francuz).",
      sh: "zmierzch: oba systemy, żaden na 100%" },

    /* ---------- dołek ---------- */
    { id: "plamka-zolta", u: "dolek", term: "Plamka żółta",
      plain: "Mały obszar w środku siatkówki, na który trafia to, na co patrzysz. Czopki są tam ściśnięte jak nigdzie indziej.",
      def: "Obszar w miejscu przecięcia osi widzenia z siatkówką. Według Francuza elipsa ok. 1,5 × 2 mm (ok. 2,4 mm²), ponad pół miliona czopków, ponad 200 tys. na mm² (według Kalata ok. 3 × 5 mm).",
      sh: "środek siatkówki z najgęstszymi czopkami" },
    { id: "dolek", u: "dolek", term: "Dołek środkowy (centralny)",
      plain: "Środek plamki żółtej: same czopki, każdy z własnym „kablem” do mózgu. Stąd najostrzejsze widzenie.",
      def: "Obszar ok. 1 mm² w środku plamki żółtej, wyspecjalizowany w ostrym i szczegółowym widzeniu. Nie ma w nim pręcików; w samym środku (dołeczek) nawet 324 tys. czopków na mm². Zajmuje tylko ok. 0,1% powierzchni siatkówki.",
      sh: "miejsce najostrzejszego widzenia, same czopki" },
    { id: "os-widzenia", u: "dolek", term: "Oś widzenia a oś optyczna",
      plain: "Oś optyczna to prosta przez środek rogówki, źrenicy i soczewki. Oś widzenia biegnie do miejsca, na które patrzysz, i jest od niej przekrzywiona o ok. 5°.",
      def: "Oś widzenia przecina siatkówkę tam, gdzie jest największe skupisko czopków, a drugim końcem trafia w to, na czym skupiamy wzrok. Jest nachylona o ok. 5° (5–7°) do osi optycznej, która biegnie przez środki rogówki, źrenicy i soczewki.",
      sh: "kierunek patrzenia, ok. 5° od osi optycznej" },
    { id: "zbieznosc", u: "dolek", term: "Konwergencja (zbieżność) receptorów",
      plain: "Ile receptorów „zrzuca się” na jedną komórkę dalej. W dołku jeden. Na obwodzie dziesiątki albo setki.",
      def: "Liczba receptorów wysyłających sygnały do jednej komórki postsynaptycznej. W widzeniu centralnym jeden lub kilka, w obwodowym rośnie w miarę oddalania się od środka (Kalat, tabela 6.1).",
      sh: "ile receptorów przypada na jedną komórkę dalej" },
    { id: "ostrosc-czulosc", u: "dolek", term: "Ostrość kontra czułość",
      plain: "Dołek: widzisz szczegóły, ale potrzebujesz światła. Obwód: wyłapujesz słabe światło, ale bez szczegółów.",
      def: "Widzenie przez dołek ma lepszą ostrość (wrażliwość na szczegóły), widzenie obwodowe lepszą wrażliwość na słabe światło. Na obwodzie sumowanie sygnałów z wielu receptorów zwiększa czułość, ale mózg nie zna dokładnego położenia ani kształtu źródła światła.",
      sh: "dołek: szczegóły; obwód: słabe światło" },
    { id: "katem-oka", u: "dolek", term: "Patrzenie kątem oka",
      plain: "Po ciemku coś lepiej widać, gdy patrzysz trochę obok (ok. 20°), bo tam jest najwięcej pręcików.",
      def: "W słabym świetle widzimy wyraźniej, gdy przesuniemy oś widzenia o ok. 20° od miejsca, które chcemy zobaczyć, bo tam jest najwięcej pręcików (ok. 150 tys. na mm²) (Francuz). U Kalata: słabą gwiazdę łatwiej zobaczyć, patrząc obok niej.",
      sh: "po ciemku patrz ok. 20° obok" },
    { id: "otoczenie", u: "dolek", term: "Zakłócający wpływ otoczenia",
      plain: "Na obwodzie pola widzenia kształt rozpoznajesz dużo lepiej, gdy stoi sam, niż gdy otaczają go inne kształty.",
      def: "Widzenie obwodowe znacznie lepiej identyfikuje kształt, gdy występuje on samodzielnie, niż gdy otaczają go inne bodźce. Ten zakłócający wpływ nie występuje, gdy bodziec pada na dołek środkowy (Kalat za Parkes i in., 2001).",
      sh: "sąsiednie kształty psują rozpoznanie na obwodzie" },
    { id: "ptaki", u: "dolek", term: "Receptory a tryb życia",
      plain: "Gdzie zwierzę ma najwięcej receptorów, zależy od tego, jak żyje: sokół patrzy z góry w dół, szczur z dołu do góry.",
      def: "Ptaki drapieżne mają więcej receptorów w górnej części siatkówki: dobrze widzą w dół w locie, a żeby spojrzeć w górę, muszą odwrócić głowę. Zwierzęta będące ofiarami, np. szczury, mają ich więcej w dolnej części i lepiej widzą obiekty nad sobą. Wiele ptaków ma po dwa dołki środkowe w oku.",
      sh: "rozmieszczenie receptorów dopasowane do trybu życia" },

    /* ---------- droga ---------- */
    { id: "nerw-wzrokowy", u: "droga", term: "Nerw wzrokowy",
      plain: "„Kabel” z ok. miliona przewodów, czyli aksonów komórek zwojowych, który wynosi sygnał z oka do mózgu.",
      def: "Wiązka aksonów komórek zwojowych (ok. 1 mln, od 770 tys. do 1,7 mln) wychodząca z gałki ocznej w plamce ślepej. Biegnie wzdłuż dolnej powierzchni mózgu do skrzyżowania wzrokowego.",
      sh: "kabel z aksonów komórek zwojowych" },
    { id: "skrzyzowanie", u: "droga", term: "Skrzyżowanie wzrokowe",
      plain: "Miejsce, gdzie nerwy z obu oczu się spotykają i u człowieka połowa włókien z każdego oka przechodzi na drugą stronę mózgu.",
      def: "Miejsce spotkania nerwów wzrokowych obu oczu. U człowieka połowa aksonów z każdego oka przechodzi na drugą stronę mózgu; ten odsetek zależy od położenia oczu (u królików i świnek morskich, z oczami po bokach głowy, przechodzą niemal wszystkie).",
      sh: "połowa włókien przechodzi na drugą stronę" },
    { id: "trakt", u: "droga", term: "Trakt wzrokowy",
      plain: "Kawałek drogi od skrzyżowania wzrokowego do ciała kolankowatego bocznego.",
      def: "Odcinek drogi wzrokowej między skrzyżowaniem wzrokowym a ciałem kolankowatym bocznym (Francuz).",
      sh: "odcinek od skrzyżowania do LGN" },
    { id: "lgn", u: "droga", term: "Ciało kolankowate boczne (LGN)",
      plain: "Stacja przesiadkowa we wzgórzu: tu trafia większość informacji z oczu, zanim pójdzie do kory.",
      def: "Jądro wzgórza wyspecjalizowane w percepcji wzrokowej (lateral geniculate nucleus), u niektórych gatunków przypomina kolano. Pierwsza struktura w mózgu, do której dociera większość informacji z siatkówki. Wysyła aksony do innych części wzgórza i do kory wzrokowej.",
      sh: "stacja we wzgórzu między okiem a korą" },
    { id: "promienistosc", u: "droga", term: "Promienistość wzrokowa",
      plain: "Ostatni odcinek: aksony komórek z LGN biegną do kory w płacie potylicznym.",
      def: "Odcinek od ciała kolankowatego bocznego do pierwotnej kory wzrokowej, utworzony przez aksony komórek, których ciała leżą w LGN. Z grubsza zamyka pierwszy etap przesyłania i przetwarzania danych na szlaku wzrokowym.",
      sh: "odcinek od LGN do kory wzrokowej" },
    { id: "v1", u: "droga", term: "Pierwotna kora wzrokowa",
      plain: "Pierwsze „piętro widzenia” w korze, z tyłu głowy, w płacie potylicznym.",
      def: "Kora w płacie potylicznym (primary visual cortex, striate cortex), do której impulsy z LGN docierają przez promienistość wzrokową.",
      sh: "kora w płacie potylicznym" },
    { id: "wzgorki", u: "droga", term: "Wzgórki górne",
      plain: "Boczna odnoga drogi: część aksonów z oka idzie nie do LGN, tylko do wzgórków górnych.",
      def: "Struktura, do której dochodzą niektóre aksony komórek zwojowych. Nieliczne aksony trafiają też do kilku innych obszarów, m.in. do części podwzgórza, która steruje cyklem snu i czuwania (Kalat).",
      sh: "boczna droga części aksonów z oka" },
    { id: "zwrotne", u: "droga", term: "Sprzężenie zwrotne kora–wzgórze",
      plain: "Kora nie tylko słucha wzgórza, ale też do niego „odpisuje”. Dlatego to, co płynie do kory, jest ciągle poprawiane.",
      def: "Kora mózgowa wysyła wiele aksonów do wzgórza, więc sygnały ze wzgórza do kory są nieustannie modyfikowane przez informacje zwrotne (Kalat za Guillery, Feig, van Lieshout, 2001).",
      sh: "kora ciągle modyfikuje sygnały ze wzgórza" },
    { id: "roznice", u: "droga", term: "Różnice indywidualne w drodze wzrokowej",
      plain: "Niektórzy mają w nerwie wzrokowym 2–3 razy więcej włókien niż inni i lepiej łapią krótkie, słabe i szybkie bodźce.",
      def: "Niektórzy ludzie mają w nerwie wzrokowym dwa lub trzy razy więcej aksonów niż inni i odpowiednio więcej komórek w LGN i w korze wzrokowej. To prowadzi do dużych różnic w dostrzeganiu krótkich, słabych lub szybko zmieniających się bodźców (Kalat).",
      sh: "2–3 razy więcej aksonów, lepsze wychwytywanie bodźców" },

    /* ---------- pola ---------- */
    { id: "pole-widzenia", u: "pola", term: "Pole widzenia",
      plain: "Wszystko, co widzisz naraz, bez ruszania oczami.",
      def: "Fragment otoczenia, jaki można zobaczyć za jednym razem. Część po lewej to lewe pole widzenia, a część po prawej to prawe pole widzenia.",
      sh: "to, co widać za jednym razem" },
    { id: "pole-recepcyjne", u: "pola", term: "Pole recepcyjne",
      plain: "Kawałek pola widzenia, na który reaguje dany neuron. Dla receptora to jeden punkt, dla komórek dalej coraz większe obszary.",
      def: "Część pola widzenia, na którą reaguje dany neuron. Pole recepcyjne receptora to punkt w przestrzeni, z którego światło pada na ten receptor; pola dalszych neuronów zależą od połączonych z nimi receptorów i mogą mieć części pobudzające i hamujące.",
      sh: "fragment pola widzenia, na który reaguje neuron" },
    { id: "obwarzanek", u: "pola", term: "Pole typu centrum–otoczka",
      plain: "Komórka zwojowa ma pole jak obwarzanek: światło w środku działa w jedną stronę (np. pobudza), a w pierścieniu dookoła w przeciwną (hamuje).",
      def: "Pole recepcyjne komórki zwojowej ma koliste centrum i antagonistyczną otoczkę w kształcie obwarzanka: światło w centrum działa pobudzająco, a w otoczce hamująco, lub odwrotnie.",
      sh: "centrum i przeciwna mu otoczka" },
    { id: "mapowanie", u: "pola", term: "Mapowanie pola recepcyjnego",
      plain: "Jak to zbadać: świecimy w różne punkty i patrzymy na neuron. Strzela szybciej? Część pobudzeniowa. Wolniej? Hamulcowa.",
      def: "Zakres pola ustala się, emitując światło z różnych miejsc i rejestrując aktywność neuronu. Jeśli światło z danego punktu pobudza neuron, punkt należy do pobudzeniowej części pola; jeśli hamuje, do hamulcowej.",
      sh: "punkt pobudza albo hamuje neuron" },

    /* ---------- hamowanie ---------- */
    { id: "hamowanie-oboczne", u: "hamowanie", term: "Hamowanie oboczne",
      plain: "Aktywny neuron „ucisza” sąsiadów. Dzięki temu na granicy jasne–ciemne różnica wychodzi mocniej i krawędzie są wyraźniejsze.",
      def: "Hamowanie aktywności w neuronie przez aktywność sąsiednich komórek nerwowych (Hartline, 1949). W siatkówce działa przez komórki horyzontalne. Główna funkcja: zaakcentowanie kontrastów i granic.",
      sh: "neuron hamowany przez aktywnych sąsiadów" },
    { id: "neuron-lokalny", u: "hamowanie", term: "Neuron lokalny",
      plain: "Komórka horyzontalna nie ma aksonu i nie wysyła impulsów, więc jej wpływ słabnie z odległością: blisko hamuje mocno, dalej słabiej.",
      def: "Komórka horyzontalna jest neuronem lokalnym, bez aksonu i potencjałów czynnościowych, więc jej depolaryzacja maleje wraz z odległością.",
      sh: "bez aksonu, wpływ słabnie z odległością" },
    { id: "krawedz", u: "hamowanie", term: "Efekt krawędzi",
      plain: "Przy oświetlonym pasie najmocniej pobudzone są komórki tuż PRZY brzegu od strony jasnej, a najsłabiej te tuż ZA brzegiem, po stronie ciemnej.",
      def: "Komórki dwubiegunowe od wewnętrznej strony krawędzi są najbardziej pobudzone (hamowane tylko z jednej strony), a te przy zewnętrznej stronie krawędzi najmniej aktywne (dostają tylko hamowanie, bez pobudzenia) (Kalat).",
      sh: "brzeg jasnego pola wzmocniony, za brzegiem przyciemniony" },
    { id: "zelatyna", u: "hamowanie", term: "Klocki w żelatynie",
      plain: "Analogia z książki: klocek wciska żelatynę (pobudzenie), a obok żelatyna się wybrzusza (hamowanie sąsiadów). W rzędzie klocków te na końcach siedzą najgłębiej.",
      def: "Klocek na żelatynie: zagłębienie pod nim to pobudzenie neuronu, wybrzuszenie wokół to hamowanie oboczne sąsiadów. W rzędzie klocków skrajne zanurzają się głębiej, bo wypycha je w górę tylko jeden sąsiad (Kalat, rys. 6.19).",
      sh: "zagłębienie to pobudzenie, wybrzuszenie to hamowanie" },

    /* ---------- komórki zwojowe ---------- */
    { id: "cztery-spec", u: "zwojowe", term: "Cztery specjalizacje komórek zwojowych",
      plain: "Komórki zwojowe dzielą się pracą: kolor, kontrast (z niego kształty), zmiany w czasie (z nich ruch) i rozdzielczość (z niej ostrość).",
      def: "Komórki zwojowe specjalizują się w danych o: (1) długości fali (podstawa widzenia barw), (2) kontrastach jasności (krawędzie, kształty), (3) zmienności oświetlenia w czasie (ruch), (4) rozdzielczości przestrzennej (ostrość widzenia) (Francuz).",
      sh: "barwa, kontrast, zmiana w czasie, rozdzielczość" },
    { id: "karlowate", u: "zwojowe", term: "Komórki karłowate",
      plain: "Małe komórki zwojowe ze środka siatkówki: ostre szczegóły i kolory czerwony–zielony. Jest ich najwięcej, ok. 80% włókien nerwu.",
      def: "Komórki zwojowe (midget) o drobnych ciałach i niewielu rozgałęzieniach. Łączą się głównie z fotoreceptorami w centralnej części siatkówki (w dołku każda dostaje sygnał od jednego czopka). Wrażliwe na rozdzielczość przestrzenną i na barwy zieloną i czerwoną. Ok. 80% aksonów nerwu wzrokowego.",
      sh: "małe: szczegóły i czerwień–zieleń, ok. 80%" },
    { id: "parasolowe", u: "zwojowe", term: "Komórki parasolowe",
      plain: "Duże komórki z wielkimi „drzewami” dendrytów: nie widzą kolorów, ale łapią drobne różnice jasności, krawędzie i ruch. Przewodzą dwa razy szybciej.",
      def: "Komórki zwojowe (parasol) o dużych ciałach i rozbudowanych drzewach dendrytycznych. Nie różnicują długości fal, ale wykrywają krawędzie płaszczyzn o podobnej jasności (różnica 1–2%), obejmują większy obszar siatkówki i mają grubsze aksony (ok. 4 m/s, dwa razy szybciej). Służą widzeniu ruchu i organizacji przestrzennej. Ok. 10% aksonów.",
      sh: "duże: kontrast, krawędzie, ruch, ok. 10%" },
    { id: "pylkowe", u: "zwojowe", term: "Komórki pyłkowe",
      plain: "Maleńkie ciała, ale spore rozgałęzienia. Zajmują się parą kolorów niebieski–żółty. Ok. 10% włókien nerwu.",
      def: "Komórki zwojowe (bistratified) o maleńkich ciałach i nieproporcjonalnie dużych rozgałęzieniach (mniejszych jednak niż u parasolowych). Odgrywają podstawową rolę w różnicowaniu barwy niebieskiej i żółtej (Dacey, 2000). Ok. 10% aksonów.",
      sh: "małe: niebieski–żółty, ok. 10%" },
    { id: "uszkodzenie", u: "zwojowe", term: "Uszkodzenie detektora to brak cechy",
      plain: "Jeśli zepsuje się „czujnik” jakiejś cechy, tej cechy po prostu nie widzisz, jakby jej nie było.",
      def: "Widzenie danej własności obrazu wynika bezpośrednio z kondycji neuronalnych przetworników i przekaźników danych. Ich uszkodzenie może sprawić, że jakiejś cechy obrazu po prostu nie dostrzegamy, jakby jej nie było (Francuz).",
      sh: "zepsuty detektor cechy, cecha znika" },
    { id: "hardware", u: "zwojowe", term: "Biologiczny hardware",
      plain: "Widzimy tak, jak pozwalają nam nasze komórki, a nie tak, jak świat „naprawdę” wygląda.",
      def: "Z budowy i fizjologii komórek zwojowych wynikają ich funkcje, a z nich zręby subiektywnego doświadczenia. Obrazy widzimy tak, jak widzimy, bo mamy taki biologiczny hardware, a nie dlatego, że one takie są (Francuz).",
      sh: "widzimy tak, bo tak jesteśmy zbudowani" },

    /* ---------- barwy ---------- */
    { id: "dlugosc-fali", u: "barwy", term: "Długość fali a barwa",
      plain: "Światło to fale. Najkrótsze widzimy jako fiolet, najdłuższe jako czerwień, a po drodze niebieski, zielony, żółty, pomarańczowy.",
      def: "Między długością fali a widzianą barwą jest ścisła zależność. U Kalata najkrótsze widzialne fale ok. 350 nm dają fiolet, najdłuższe ok. 700 nm czerwień; u Francuza zakres światła widzialnego to ok. 400–700 nm.",
      sh: "krótkie fale fiolet, długie czerwień" },
    { id: "porownanie", u: "barwy", term: "Kolor to porównanie",
      plain: "Jeden neuron może tylko strzelać szybciej albo wolniej. Nie powie naraz „jasno” i „czerwono”, więc kolor wynika z porównania wielu neuronów.",
      def: "Pojedynczy neuron nie może jednocześnie przekazywać informacji o jasności i barwie; spostrzeżenia barw opierają się na wzorcach aktywności wielu neuronów. Widzenie barwne wymaga porównywania aktywności różnych typów czopków (szczury mają jeden typ czopków i nie rozróżniają barw) (Kalat).",
      sh: "barwa z porównania aktywności wielu neuronów" },
    { id: "trichromatyczna", u: "barwy", term: "Teoria trichromatyczna (Younga–Helmholtza)",
      plain: "Mamy trzy typy czopków, każdy najczulszy na inny zakres fal. Kolor to „przepis”: ile pobudził się każdy z nich.",
      def: "Percepcja barw opiera się na ocenie względnej siły pobudzeń trzech typów czopków, z których każdy jest maksymalnie wrażliwy na inny zakres długości fal. Hipotezę postawił Thomas Young, rozwinął Hermann von Helmholtz na podstawie obserwacji psychofizycznych.",
      sh: "trzy typy czopków, porównanie ich pobudzeń" },
    { id: "przeciwstawne", u: "barwy", s: "D", term: "Teoria przeciwstawnych procesów",
      plain: "Druga z dwóch XIX-wiecznych teorii barw. Na zdjęciach jest tylko jej nazwa; szczegóły są na stronach, których nie ma.",
      def: "Jedna z dwóch najważniejszych teorii widzenia barwnego z XIX wieku (obok trichromatycznej). Opis jest na s. 151–156, których nie ma na zdjęciach. ★ Mówi, że barwy są kodowane parami przeciwieństw: czerwony–zielony, niebieski–żółty, jasny–ciemny; pasuje to do tego, co Francuz pisze o komórkach karłowatych (czerwony–zielony) i pyłkowych (niebieski–żółty).",
      sh: "barwy kodowane parami przeciwieństw" }
  ],

  exercises: [
    /* ---------- Zieleń jest w nas (Kalat, s. 144) ---------- */
    { u: "zielen", t: "tf", q: "Według Kalata zieleń jest cechą samych liści.", a: false,
      x: "Nie. Zieleń to to, co się dzieje, gdy światło odbite od liści zadziała na neurony oka, a potem mózgu. Tak jak rdzawość nie jest cechą wody, tylko efektem jej reakcji z żelazem." },
    { u: "zielen", t: "mcq", q: "Co w przykładzie Kalata z kawałkiem żelaza odpowiada twoim neuronom?",
      a: ["Żelazo, w którym powstaje rdza", "Woda, która spada na żelazo", "Rdza, która osiada na wodzie", "Powietrze wokół kawałka żelaza"],
      x: "Rdza powstaje w żelazie, choć wywołała ją woda. Tak samo zieleń powstaje w tobie (w neuronach), choć wywołało ją światło odbite od liści.",
      w: ["Woda to bodziec, jak światło odbite od liści. Wrażenie nie powstaje w niej.", "Rdza odpowiada wrażeniu (zieleni), a nie neuronom. Poza tym nie osiada na wodzie.", "Powietrze w tym przykładzie nie gra żadnej roli."] },
    { u: "zielen", t: "mcq", q: "Co robi każdy receptor według „ogólnych praw percepcji” Kalata?",
      a: ["Pochłania jeden rodzaj energii i zamienia go na sygnał", "Pochłania po trochu wszystkie rodzaje energii", "Przesyła do mózgu dokładną kopię bodźca", "Wysyła impulsy do mózgu tylko w ciemności"],
      x: "Każdy receptor pochłania tylko jeden rodzaj energii i przekształca go we wzorzec aktywności elektrochemicznej. To transdukcja.",
      w: ["Receptor jest wyspecjalizowany: wzrokowy łapie światło, a nie dźwięk czy zapach.", "Kopii nie ma: kodowanie nie polega na powielaniu bodźca.", "Receptory wzrokowe reagują właśnie na światło, nawet na pojedynczy foton."] },
    { u: "zielen", t: "cloze", q: "Receptory wzrokowe mogą zareagować nawet na pojedynczy ___ światła.", a: ["foton", "promień", "kolor", "piksel"],
      x: "Kalat: receptory wzrokowe mogą pochłaniać i reagować nawet na pojedynczy foton, czyli najmniejszą porcję światła.",
      w: ["Promień to wiązka światła, a Kalat mówi o najmniejszej porcji, fotonie.", "Kolor nie jest porcją światła, tylko wrażeniem w nas.", "Piksel to punkt ekranu lub matrycy, a nie porcja światła."] },
    { u: "zielen", t: "mcq", q: "Czym jest potencjał receptorowy?",
      a: ["Lokalną zmianą napięcia na błonie receptora", "Impulsem biegnącym prosto do kory wzrokowej", "Barwnikiem wzrokowym zawartym w czopkach", "Liczbą receptorów połączonych z komórką"],
      x: "To lokalna depolaryzacja lub hiperpolaryzacja błony receptora. Od jej wielkości zależy, jak mocno receptor pobudzi albo zahamuje następny neuron.",
      w: ["Potencjał receptorowy jest lokalny, w samym receptorze. Do kory biegną impulsy dalszych neuronów.", "Barwnik to substancja z retinalem i opsyną, a nie zmiana napięcia.", "To opis zbieżności (konwergencji), a nie potencjału."] },
    { u: "zielen", t: "mcq", q: "Jaki zarzut Kalat stawia poglądowi Kartezjusza, że obraz w mózgu przypomina bodziec?",
      a: ["Zakłada ludzika w głowie, który ogląda obraz", "Twierdzi, że oko w ogóle nie odbiera światła", "Uważa, że kolory są cechą samych przedmiotów", "Pomija istnienie nerwu wzrokowego"],
      x: "Skoro w mózgu jest „obrazek”, ktoś musi go oglądać: mały ludzik. A jak widzi ludzik? Mniejszym ludzikiem w swojej głowie? Takie wyjaśnienie niczego nie wyjaśnia.",
      w: ["Kartezjusz nie przeczył, że oko odbiera światło. Chodziło o to, jak mózg reprezentuje widok.", "Ten zarzut nie pada. Zarzut dotyczy „kopii” w mózgu i ludzika, który ją ogląda.", "Kartezjusz mówił właśnie o nerwach, które wysyłają wzorzec do kory."] },
    { u: "zielen", t: "tf", q: "Kalat: dawni uczeni uniknęliby błędu „ludzika w głowie”, gdyby zamiast wzroku badali węch.", a: true,
      x: "Tak. Trudno sobie wyobrazić, że w głowie tworzymy mały kwiatek, który wącha mały ludzik. Przy wzroku łatwo wpaść w myślenie „w głowie jest obrazek”." },
    { u: "zielen", t: "tf", q: "Gdy widzimy stół, reprezentacja blatu musi być w górnej części siatkówki albo głowy.", a: false,
      x: "Nie musi. Kodowanie informacji wzrokowych nie polega na powielaniu kształtu przedmiotu, więc blat nie musi być „na górze” ani w siatkówce, ani w głowie." },
    { u: "zielen", t: "mcq", q: "Co mówi prawo specyficznych energii nerwowych (Müller, 1838)?",
      a: ["Dany nerw zawsze niesie ten sam rodzaj informacji", "Każdy nerw może nieść światło, dźwięk lub zapach", "Silniejszy bodziec zawsze zmienia rodzaj wrażenia", "Nerwy przesyłają do mózgu kopie przedmiotów"],
      x: "Aktywność nerwu wzrokowego mózg zawsze „widzi”, a słuchowego zawsze „słyszy”. O rodzaju wrażenia decyduje to, KTÓRY nerw jest aktywny.",
      w: ["Właśnie nie: żaden nerw nie przesyła raz „wysokiego C”, a raz „jaskrawożółtego”.", "Siła bodźca zmienia natężenie, a nie rodzaj wrażenia: nerw wzrokowy dalej daje światło.", "Nerwy przesyłają tylko potencjały czynnościowe, a nie kopie."] },
    { u: "zielen", t: "mcq", q: "Jaki rodzaj komunikatu przesyła każdy nerw, niezależnie od zmysłu?",
      a: ["Potencjały czynnościowe", "Małe obrazki przedmiotów", "Fale świetlne i dźwiękowe", "Gotowe kolory i zapachy"],
      x: "Wszystkie nerwy „mówią” tym samym alfabetem: potencjałami czynnościowymi. Mózg odczytuje je jako światło, dźwięk albo zapach zależnie od tego, z którego nerwu przyszły.",
      w: ["Obrazków w nerwach nie ma: kodowanie nie powiela kształtu.", "Fale zostają na zewnątrz albo w receptorze. Dalej płyną impulsy nerwowe.", "Kolor i zapach to wrażenia powstające w mózgu, a nie to, co płynie nerwem."] },
    { u: "zielen", t: "tf", q: "Kalat przyznaje, że to, JAK mózg zamienia impulsy z różnych nerwów w różne wrażenia, wciąż jest nierozstrzygniętą zagadką.", a: true,
      x: "Tak. Kalat pisze, że mózg „w jakiś sposób” interpretuje impulsy z nerwu słuchowego jako dźwięki, a ze wzrokowego jako światło, i przyznaje, że to „w jakiś sposób” kryje nierozstrzygniętą zagadkę." },
    { u: "zielen", t: "match", pairs: [["Transdukcja", "zamiana energii bodźca na sygnał"], ["Potencjał receptorowy", "lokalna zmiana napięcia receptora"], ["Prawo Müllera", "nerw zawsze niesie jeden rodzaj informacji"], ["Błąd Kartezjusza", "obraz w mózgu oglądany przez ludzika"]],
      x: "Cztery pojęcia z „ogólnych praw percepcji”: receptor tłumaczy energię (transdukcja) przez zmianę napięcia (potencjał receptorowy), nerwy mają swój stały „temat” (Müller), a mózg nie trzyma kopii (błąd Kartezjusza)." },
    { u: "zielen", t: "type", q: "Nazwisko badacza, który w 1838 r. opisał prawo specyficznych energii nerwowych:", a: ["Müller", "Muller", "Mueller"],
      x: "Johannes Müller, 1838. Każdy nerw zawsze niesie do mózgu ten sam rodzaj informacji." },
    { u: "zielen", t: "type", q: "Zamiana energii bodźca na sygnał elektrochemiczny w receptorze to…", a: ["transdukcja"],
      x: "Transdukcja: receptor przekształca pochłoniętą energię we wzorzec aktywności elektrochemicznej." },

    /* ---------- Scena wizualna (Francuz, s. 40–41) ---------- */
    { u: "scena", t: "multi", q: "Które cechy sceny wizualnej wymienia Francuz?", a: ["kształt", "barwa", "organizacja przestrzenna", "dynamika"], o: ["głośność", "zapach"],
      x: "Cztery cechy sceny: kształt, barwa, organizacja przestrzenna i dynamika (ruch).",
      w: ["Głośność to cecha dźwięku, a nie sceny wizualnej.", "Zapach to inny zmysł. Scena wizualna to kształt, barwa, organizacja i dynamika."] },
    { u: "scena", t: "mcq", q: "Którą cechę sceny Francuz nazywa czwartą i ostatnią?",
      a: ["Dynamikę", "Barwę", "Kształt", "Głębię"],
      x: "Dynamika: szybkość, zmienność, przyspieszenie i trajektoria ruchu przedmiotów i samego obserwatora.",
      w: ["Barwa to jedna z wcześniejszych cech.", "Kształt to jedna z wcześniejszych cech.", "Głębia nie jest osobną cechą: to część organizacji przestrzennej (relacje w głąb)."] },
    { u: "scena", t: "sort", q: "Kategoria rzeczy czy relacji?", cats: ["Rzeczy", "Relacji"],
      why: ["Kształt i barwa, czyli CO to jest. Analiza nie zależy od położenia ani ruchu.", "Położenie i ruch, czyli GDZIE i JAK. Zawsze relacja czegoś do czegoś."],
      items: [["kształt", 0], ["barwa", 0], ["„to jest kubek”", 0], ["organizacja przestrzenna", 1], ["ruch obiektów", 1], ["„kubek jest na prawo ode mnie”", 1]],
      x: "Rzeczy to kształt i barwa (co to jest). Relacje to organizacja przestrzenna i ruch (gdzie i jak się rusza)." },
    { u: "scena", t: "mcq", q: "Co według Francuza tworzy kategorię relacji?",
      a: ["Organizacja przestrzenna i ruch obiektów", "Kształt i barwa przedmiotów w scenie", "Wspomnienia z wcześniejszych widoków", "Podobieństwa między dwoma obrazami"],
      x: "Organizacja przestrzenna i ruch zawsze dotyczą czegoś, co ma kształt i barwę, i wiążą się z ciałem obserwatora oraz z ruchem (motoryką).",
      w: ["To kategoria rzeczy.", "Pamięć wizualna pojawia się dopiero w fazie kompozycji, nie w kategoriach cech.", "Francuz nie definiuje tak żadnej kategorii."] },
    { u: "scena", t: "tf", q: "Analiza kształtu i barwy przedmiotu zależy od tego, gdzie stoi on względem obserwatora i czy się porusza.", a: false,
      x: "Nie zależy. Francuz: percepcyjna analiza egzemplarzy kategorii rzeczy (kształt, barwa) nie zależy od położenia względem obserwatora ani od tego, czy są w ruchu." },
    { u: "scena", t: "mcq", q: "Co znaczy, że obserwator ma w scenie pozycję egocentryczną?",
      a: ["Relacje w scenie ustala względem swojego ciała", "Widzi tylko to, co go osobiście interesuje", "Zawsze stoi w samym środku oglądanej sceny", "Nie zauważa innych ludzi w polu widzenia"],
      x: "„Po lewej”, „po prawej”, „wyżej” liczymy od stron ciała i od ram pola widzenia lub obrazu (Goodale i Milner, 2008). Obserwator jest punktem odniesienia.",
      w: ["To potoczne znaczenie egocentryzmu, a nie to, o co chodzi Francuzowi.", "Nie chodzi o miejsce w scenie, tylko o punkt odniesienia dla relacji.", "Pozycja egocentryczna dotyczy odniesienia przestrzennego, a nie uwagi na ludzi."] },
    { u: "scena", t: "mcq", q: "Które relacje w scenie wymagają specjalnych procedur przetwarzania i wiedzy o wskaźnikach głębi?",
      a: ["Relacje w głąb, wzdłuż osi widzenia", "Relacje lewo–prawo na wprost oczu", "Relacje góra–dół w ramie obrazu", "Relacje kolorów sąsiednich rzeczy"],
      x: "Relacje w płaszczyźnie prostopadłej do osi widzenia ustalamy intuicyjnie. Relacje wzdłuż osi, czyli w głąb, trzeba wyliczyć z danych siatkówki i ze wskaźników głębi.",
      w: ["Lewo–prawo leży w płaszczyźnie prostopadłej do osi widzenia, więc ustalamy je intuicyjnie.", "Góra–dół też leży w tej płaszczyźnie i jest intuicyjne.", "Kolor to cecha z kategorii rzeczy, a pytanie dotyczy relacji w przestrzeni."] },
    { u: "scena", t: "mcq", q: "Jakie ruchy obserwatora komplikują według Francuza analizę sceny?",
      a: ["Przemieszczanie się i ruchy gałek ocznych", "Wyłącznie oddech i bicie serca obserwatora", "Tylko ruchy rąk, gdy czegoś dotyka", "Mruganie, które co chwilę zasłania obraz"],
      x: "Liczy się i to, że obserwator chodzi (np. ogląda wystawy na spacerze), i to, że rusza oczami, przenosząc oś widzenia na różne fragmenty sceny.",
      w: ["O oddechu i sercu Francuz nie pisze.", "Ruchy rąk nie są tu omawiane, tylko przemieszczanie się i ruch oczu.", "Mrugania tekst nie wymienia."] },
    { u: "scena", t: "tf", q: "Kategorie rzeczy i relacji są według Francuza całkowicie rozłączne.", a: false,
      x: "Nie są rozłączne. Istnieją doświadczenia na ich styku, np. bardzo szybki ruch, przy którym zacierają się kontury i barwy." },
    { u: "scena", t: "mcq", q: "Co się dzieje, gdy obiekt albo obserwator porusza się bardzo szybko?",
      a: ["Kontury i barwy się zacierają, zostaje wrażenie ruchu", "Kształt staje się wyraźniejszy niż w bezruchu", "Barwy robią się jaskrawsze i bardziej nasycone", "Przedmiot wydaje się większy i bliższy, niż jest"],
      x: "Całkowite zatarcie linii konturowych i barw daje doświadczenie ruchu, który nie jest ruchem rzeczy o określonym kształcie. To przykład doświadczenia na styku kategorii.",
      w: ["Przeciwnie: przy szybkim ruchu kształt się rozmywa.", "Przeciwnie: barwy się zacierają.", "Francuz nie pisze o zmianie wielkości, tylko o zatarciu konturów i barw."] },
    { u: "scena", t: "tf", q: "Według Francuza ewolucja wykształciła już sprawne mechanizmy radzenia sobie z bardzo szybkim ruchem.", a: false,
      x: "Przeciwnie. Takich doświadczeń przybywa (szybkie podróże, media elektroniczne), a ewolucja nie wykształciła jeszcze mechanizmów radzenia sobie z nimi. Stąd złudzenia ruchu i złudzenia pilotów." },
    { u: "scena", t: "mcq", q: "Którego ruchu Francuz zapowiada, że NIE będzie omawiał w książce?",
      a: ["Ruchu wewnątrz kadru obrazu", "Ruchu gałek ocznych widza", "Przemieszczania się obserwatora", "Ruchu głowy podczas oglądania"],
      x: "Francuz pisze, że ruch w obrazie, czyli wewnątrz kadru, nie jest przedmiotem jego książki. Ruch obserwatora, zwłaszcza ruch jego gałek ocznych podczas oglądania obrazu, już tak.",
      w: ["Ruch oczu widza Francuz omawia, zwłaszcza podczas oglądania obrazu.", "Ruch obserwatora należy do tematu książki.", "Ruch obserwatora (także głowy) to właśnie to, co książka omawia."] },
    { u: "scena", t: "type", q: "Czwarta cecha sceny wizualnej według Francuza to…", a: ["dynamika", "ruch"],
      x: "Dynamika, czyli ruch: szybkość, zmienność, przyspieszenie i trajektoria ruchu przedmiotów i obserwatora." },

    /* ---------- Widzenie to akt kreacji (Francuz, s. 41–42; Kalat, s. 157) ---------- */
    { u: "kreacja", t: "mcq", q: "Czyj artykuł Francuz nazywa znakomitym wprowadzeniem do neuronalnego systemu analizy sceny wizualnej?",
      a: ["Livingstone i Hubela", "Goodale’a i Milnera", "Hartline’a i Müllera", "Younga i Helmholtza"],
      x: "Margaret Livingstone i David Hubel (noblista z 1981 r.), artykuł w „Science” z 1988 roku. Mimo upływu lat większość jego hipotez się potwierdziła.",
      w: ["Goodale i Milner to źródło o egocentrycznej pozycji obserwatora.", "Hartline opisał hamowanie oboczne, a Müller prawo specyficznych energii nerwowych. Nie pisali razem.", "Young i Helmholtz to teoria trichromatyczna widzenia barw."] },
    { u: "kreacja", t: "mcq", q: "Ile częściowo niezależnych ścieżek analizuje cechy sceny według Francuza?",
      a: ["Cztery", "Dwie", "Sześć", "Jedna"],
      x: "Cztery ścieżki (podsystemy): kształt, barwa, orientacja przestrzenna (dwu- i trójwymiarowa) i ruch.",
      w: ["Dwie to liczba kategorii (rzeczy i relacji), a nie ścieżek.", "Sześć nie pada w tekście.", "Jedna ścieżka przeczyłaby całej idei podziału pracy."] },
    { u: "kreacja", t: "tf", q: "Widzenie sceny to wierne odzwierciedlenie obrazu na siatkówce, jak w camera obscura.", a: false,
      x: "Francuz wprost temu przeczy. Widzenie zachodzi w dwóch fazach (dekompozycja i kompozycja), a jego wynik zawsze trochę odbiega od danych z siatkówki." },
    { u: "kreacja", t: "mcq", q: "Na czym polega dekompozycja?",
      a: ["Na rozłożeniu widoku na cechy badane osobno", "Na złożeniu wyników z pomocą pamięci", "Na odwróceniu obrazu do góry nogami", "Na zamianie światła na sygnał w oku"],
      x: "Dekompozycja to faza pierwsza: analityczna i względnie niezależna analiza cech (kształt, barwa, przestrzeń, ruch) po wyabstrahowaniu ich z obrazu siatkówkowego.",
      w: ["To kompozycja, czyli faza druga.", "Odwrócenie obrazu to sprawa soczewki, a nie faza widzenia.", "To transdukcja w receptorach, a nie dekompozycja."] },
    { u: "kreacja", t: "mcq", q: "Z czego oprócz wyników analiz z fazy pierwszej korzysta kompozycja?",
      a: ["Z danych zapisanych w pamięci wizualnej", "Z sygnałów płynących z nerwu słuchowego", "Z ruchów mięśni rzęskowych soczewki", "Z liczby pręcików w danym miejscu"],
      x: "Kompozycja integruje (syntetyzuje) wyniki analiz z fazy pierwszej z uwzględnieniem danych zapisanych wcześniej w pamięci wizualnej.",
      w: ["Francuz mówi o pamięci wizualnej, nie o słuchu.", "Mięśnie rzęskowe ustawiają ostrość w oku, a nie składają obrazu.", "Liczba pręcików to anatomia siatkówki, a nie materiał do kompozycji."] },
    { u: "kreacja", t: "order", q: "Ułóż kolejność według Francuza: jak powstaje doświadczenie widzenia.", a: ["Obraz na siatkówce", "Dekompozycja", "Kompozycja", "Doświadczenie widzenia"],
      x: "Z obrazu siatkówkowego mózg wyodrębnia cechy (dekompozycja), potem składa wyniki z pomocą pamięci (kompozycja) i dopiero to daje doświadczenie widzenia." },
    { u: "kreacja", t: "cloze", q: "Treści doświadczenia wizualnego są raczej ___ przez system wzrokowy, niż odtwarzane z obrazów siatkówkowych.", a: ["wytwarzane", "kopiowane", "odbijane", "zapisywane"],
      x: "Francuz: treści widzenia są stale raczej WYTWARZANE przez system wzrokowy, a nie ODTWARZANE z obrazów siatkówkowych.",
      w: ["Kopiowanie to właśnie odtwarzanie, któremu Francuz przeczy.", "Odbicie to obraz jak w lustrze, czyli znowu odtwarzanie.", "Zapis kojarzy się z rejestracją jak w aparacie, a Francuz mówi o tworzeniu."] },
    { u: "kreacja", t: "mcq", q: "Dlaczego Francuz nazywa widzenie aktem kreacji?",
      a: ["Mózg konstruuje obraz, który odbiega od danych z oka", "Człowiek widzi tylko to, co sam kiedyś narysował", "Każdy widz świadomie wymyśla, co ma przed oczami", "Oko samo wytwarza światło, które potem odbiera"],
      x: "W każdym akcie widzenia są dwie fazy, a wynik integracji zawsze odbiega od danych źródłowych. Obraz rzeczywistości jest więc konstruowany, a nie kopiowany.",
      w: ["Nie chodzi o rysowanie ani sztukę, tylko o to, że mózg buduje obraz.", "Ta konstrukcja dzieje się automatycznie, a nie świadomie.", "Oko nie wytwarza światła, tylko je odbiera."] },
    { u: "kreacja", t: "tf", q: "Kalat: w naszych głowach jest centralny procesor, który widzi naraz wszystkie aspekty bodźca.", a: false,
      x: "Kalat prosi, żeby to powtórzyć: w głowie nie ma ani małego ludzika, ani centralnego procesora. Różne części kory przetwarzają odrębne aspekty widoku do pewnego stopnia niezależnie." },
    { u: "kreacja", t: "mcq", q: "Jakie zjawisko zaskoczyło psychologów końca XX wieku według Kalata?",
      a: ["Ślepota na ruch u ludzi, którzy poza tym widzą dobrze", "Reakcja czopków na pojedynczy foton światła", "Odwrócenie obrazu przez soczewkę na siatkówce", "Przewaga liczebna pręcików nad czopkami"],
      x: "Jak kiedyś ślepota barw, tak pod koniec XX wieku zaskoczyła ślepota na ruch: można widzieć przedmiot, a nie widzieć, że się rusza. To znak, że ruch analizuje osobny system.",
      w: ["Kalat wspomina o pojedynczym fotonie przy receptorach, ale nie jako o zaskoczeniu psychologów.", "Odwrócony obraz znano dawno i nie jest on problemem.", "Liczebność receptorów to fakt anatomiczny, nie zaskakujące zjawisko."] },
    { u: "kreacja", t: "mcq", q: "Z jakim pytaniem z XVII wieku Kalat porównuje pytanie „jak można nie widzieć ruchu?”",
      a: ["Jak można coś widzieć, nie widząc koloru?", "Jak można widzieć z odwróconym obrazem?", "Dlaczego niebo w dzień jest niebieskie?", "Czy zwierzęta widzą tak samo jak ludzie?"],
      x: "Odkrycie ślepoty barw było kiedyś szokiem. Dziś to oczywistość. Ślepota na ruch to podobna niespodzianka: kolor i ruch to osobne „kanały”.",
      w: ["O odwróconym obrazie Kalat pisze gdzie indziej i nie porównuje go z ruchem.", "Tego pytania w tekście nie ma.", "Tego pytania w tekście nie ma."] },
    { u: "kreacja", t: "multi", q: "Które aspekty bodźca różne części kory przetwarzają do pewnego stopnia niezależnie (Kalat)?", a: ["czym jest przedmiot", "jego położenie", "jego kolor", "jego ruch"], o: ["jego zapach", "jego cena"],
      x: "Kalat: spostrzegamy, jaki jest przedmiot, jego położenie, kolor i ruch, a różne części kory przetwarzają te aspekty do pewnego stopnia niezależnie.",
      w: ["Zapach to inny zmysł.", "Cena nie jest cechą wzrokową."] },
    { u: "kreacja", t: "type", q: "Pierwsza faza widzenia według Francuza, czyli rozkład na cechy, to…", a: ["dekompozycja"],
      x: "Dekompozycja. Druga faza to kompozycja, czyli składanie wyników z pomocą pamięci wizualnej." },

    /* ---------- Oko (Francuz, s. 44–46; Kalat, s. 146) ---------- */
    { u: "oko", t: "order", q: "Ułóż drogę światła przez oko.", a: ["Rogówka", "Źrenica", "Soczewka", "Siatkówka"],
      x: "Najpierw rogówka (na samym wierzchu), potem otwór w tęczówce, czyli źrenica, za nią soczewka, a na tylnej ścianie siatkówka." },
    { u: "oko", t: "which", set: "oko", q: "Przezroczysta, najbardziej wysunięta część oka; soczewka o stałym kształcie:", a: 1,
      x: "Rogówka. Chroni oko i działa jak soczewka o stałej ogniskowej." },
    { u: "oko", t: "which", set: "oko", q: "Przysłona, która reguluje średnicę źrenicy:", a: 3,
      x: "Tęczówka. Źrenica to otwór w jej środku." },
    { u: "oko", t: "which", set: "oko", q: "Sztywna obudowa oka, która chroni je i utrzymuje jego kształt:", a: 6,
      x: "Twardówka. Francuz porównuje ją do szczelnej, sztywnej obudowy aparatu." },
    { u: "oko", t: "mcq", q: "Jak oko ustawia ostrość na rzeczy bliskie i dalekie?",
      a: ["Zmienia grubość soczewki", "Przesuwa soczewkę do przodu", "Zmienia kształt rogówki", "Przesuwa siatkówkę do tyłu"],
      x: "Zmienia kształt (grubość) soczewki. To akomodacja. Francuz podkreśla, że ten mechanizm w niczym nie przypomina zmiany ogniskowej w obiektywie aparatu.",
      w: ["Soczewka oka zostaje na miejscu i zmienia tylko kształt.", "Rogówka ma stały kształt.", "Siatkówka się nie przesuwa."] },
    { u: "oko", t: "tf", q: "Im bliżej jest oglądany przedmiot, tym cieńsza staje się soczewka.", a: false,
      x: "Odwrotnie: im bliżej przedmiot, tym grubsza soczewka, a im dalej, tym cieńsza. Grubsza soczewka załamuje promienie pod większym kątem." },
    { u: "oko", t: "tf", q: "Rogówka zmienia kształt, żeby ustawić ostrość.", a: false,
      x: "Rogówka ma stały kształt (stałą ogniskową). Kształt zmienia soczewka." },
    { u: "oko", t: "mcq", q: "Jaki jest obraz na siatkówce według Francuza?",
      a: ["Sferyczny, pomniejszony i odwrócony", "Płaski, powiększony i prosty", "Płaski, pomniejszony i prosty", "Sferyczny, powiększony i lustrzany"],
      x: "Siatkówka jest zakrzywiona (sferyczna), obraz jest mniejszy od przedmiotu i odwrócony „do góry nogami”. Dla mózgu to żaden problem.",
      w: ["Siatkówka jest zakrzywiona, a obraz pomniejszony i odwrócony.", "Obraz nie jest prosty, tylko odwrócony.", "Obraz jest pomniejszony, nie powiększony."] },
    { u: "oko", t: "mcq", q: "Dlaczego odwrócony obraz na siatkówce nie jest problemem dla mózgu?",
      a: ["Układ wzrokowy nie powiela obrazu, tylko go koduje", "Soczewka odwraca go drugi raz przed siatkówką", "Kora wzrokowa obraca go z powrotem o 180°", "W dołku środkowym obraz jest zawsze prosty"],
      x: "Kalat: układ wzrokowy nie duplikuje obrazu. Tak jak komputer nie musi trzymać komend z góry ekranu w „górnej” części pamięci, mózg nie potrzebuje obrazu we właściwym położeniu.",
      w: ["To właśnie przez soczewkę obraz jest odwrócony.", "W mózgu nie ma „obracania obrazka”, bo w ogóle nie ma obrazka, tylko kod.", "Obraz jest odwrócony na całej siatkówce, także w dołku."] },
    { u: "oko", t: "cloze", q: "Światło biegnące z lewej strony pada na ___ połowę siatkówki.", a: ["prawą", "lewą", "górną", "dolną"],
      x: "Światło z lewej pada na prawą połowę siatkówki i odwrotnie. Światło z góry pada na dolną połowę, a z dołu na górną.",
      w: ["Lewa połowa dostaje światło z prawej strony.", "Górna połowa dostaje światło biegnące z dołu.", "Dolna połowa dostaje światło biegnące z góry."] },
    { u: "oko", t: "mcq", q: "Jaką część wewnętrznej powierzchni gałki ocznej wyściela siatkówka według Francuza?",
      a: ["Około 70%", "Około 10%", "Około 30%", "Prawie 100%"],
      x: "Siatkówka, czyli światłoczuła matryca, wyściela ok. 70% wewnętrznej powierzchni gałki ocznej.",
      w: ["To o wiele za mało.", "To za mało: Francuz podaje ok. 70%.", "Z przodu oka jest układ optyczny, więc siatkówka nie wyściela całego wnętrza."] },
    { u: "oko", t: "mcq", q: "Do czego Francuz porównuje siatkówkę, żeby pokazać, czym różni się od matrycy aparatu?",
      a: ["Do mocno zniszczonego ekranu kinowego", "Do idealnie gładkiego, czystego lustra", "Do starej, prześwietlonej kliszy", "Do nowego ekranu telefonu z dotykiem"],
      x: "Siatkówka przypomina ekran pofałdowany, zabrudzony i miejscami podziurawiony: nie odwzorowuje obrazu wszędzie tak samo dobrze. Matryca aparatu rejestruje każdy punkt z tą samą jakością.",
      w: ["Lustro odbija wszystko równo, a sedno porównania to nierówność siatkówki.", "Kliszy Francuz tu nie przywołuje.", "Nowy ekran jest równy, a Francuzowi chodzi o nierówność."] },
    { u: "oko", t: "tf", q: "Według Francuza oko i aparat fotograficzny są podobnie zbudowane, ale działają niemal całkowicie inaczej.", a: true,
      x: "Tak. Ile mają wspólnych cech budowy, o tyle ich funkcjonowanie jest niemal całkowicie odmienne (Francuz za Duchowskim, 2007)." },
    { u: "oko", t: "tf", q: "Sprawna soczewka oka przepuszcza do wnętrza niemal 100% światła.", a: true,
      x: "Tak. To jedna z dwóch własności, które według Francuza odróżniają ją od obiektywu: znakomita przezroczystość i zmienna ogniskowa. Ralf Dahm nazywa ją „kryształem biologicznym”." },
    { u: "oko", t: "type", q: "Zmiana kształtu soczewki, żeby ostro widzieć rzeczy w różnej odległości, to…", a: ["akomodacja"],
      x: "Akomodacja. Blisko: soczewka grubsza. Daleko: cieńsza." },

    /* ---------- Siatkówka na opak (Kalat, s. 146–147, 157–158; Francuz, s. 53) ---------- */
    { u: "siatkowka", t: "order", q: "Ułóż drogę sygnału w siatkówce, od komórki, która łapie światło.", a: ["Receptor", "Komórka dwubiegunowa", "Komórka zwojowa", "Nerw wzrokowy"],
      x: "Receptory z tyłu oka wysyłają sygnał do komórek dwubiegunowych, te do komórek zwojowych, a aksony komórek zwojowych tworzą nerw wzrokowy." },
    { u: "siatkowka", t: "order", q: "Siatkówka jest „na opak”. W jakiej kolejności światło mija jej warstwy?", a: ["Komórki zwojowe", "Komórki dwubiegunowe", "Receptory"],
      x: "Światło najpierw przechodzi przez komórki zwojowe (najbliżej środka oka), potem przez dwubiegunowe, a dopiero na końcu trafia do receptorów z tyłu. Sygnał biegnie w odwrotną stronę." },
    { u: "siatkowka", t: "which", set: "komorki", q: "Ich aksony tworzą nerw wzrokowy:", a: 3,
      x: "Komórki zwojowe. Ich aksony grupują się, splatają i wychodzą z oka jako nerw wzrokowy." },
    { u: "siatkowka", t: "which", set: "komorki", q: "Mają wypustki na dwóch przeciwległych końcach i przekazują sygnał od receptorów dalej:", a: 2,
      x: "Komórki dwubiegunowe. Nazwa od biegunów, czyli przeciwległych końców neuronu, z których wychodzą wypustki." },
    { u: "siatkowka", t: "which", set: "komorki", q: "Receptory je pobudzają, a one hamują komórki dwubiegunowe w okolicy:", a: 4,
      x: "Komórki horyzontalne. To dzięki nim działa hamowanie oboczne." },
    { u: "siatkowka", t: "which", set: "komorki", q: "Zidentyfikowano co najmniej 29 ich odmian:", a: 5,
      x: "Komórki amakrynowe. Ich różnorodność daje wiele możliwości złożonego przetwarzania informacji w samej siatkówce." },
    { u: "siatkowka", t: "mcq", q: "Dlaczego światło, przechodząc przez warstwy komórek siatkówki, nie ulega zniekształceniu?",
      a: ["Komórki siatkówki są bardzo przezroczyste", "Omija je bokiem przez plamkę ślepą", "Te warstwy są tylko na obwodzie oka", "Soczewka usuwa wszystkie zniekształcenia"],
      x: "Kalat: komórki są w wysokim stopniu przezroczyste, więc światło przechodzi przez nie bez zniekształceń.",
      w: ["W plamce ślepej nie ma receptorów, więc światło stamtąd w ogóle nie jest rejestrowane.", "Warstwy komórek są w całej siatkówce. Przy dołku jest ich mniej, ale nie tylko tam.", "Soczewka skupia światło, ale nie ma nic wspólnego z warstwami siatkówki."] },
    { u: "siatkowka", t: "mcq", q: "Którą konsekwencję budowy siatkówki „na opak” Kalat nazywa ważniejszą?",
      a: ["Plamkę ślepą", "Odwrócony obraz", "Widzenie barw", "Akomodację"],
      x: "Aksony komórek zwojowych leżą od strony światła, więc żeby wyjść z oka, muszą przebić siatkówkę w jednym miejscu. Tam nie ma receptorów: to plamka ślepa.",
      w: ["Odwrócony obraz to skutek działania soczewki, nie ułożenia warstw.", "Barwy zależą od czopków, a nie od kolejności warstw.", "Akomodacja to praca soczewki."] },
    { u: "siatkowka", t: "mcq", q: "Co wychodzi z oka w miejscu plamki ślepej?",
      a: ["Nerw wzrokowy i naczynia krwionośne", "Pręciki przesunięte z obwodu siatkówki", "Mięśnie rzęskowe połączone z soczewką", "Światło odbite od tylnej ściany oka"],
      x: "Tędy wychodzi nerw wzrokowy (aksony komórek zwojowych) i naczynia krwionośne, które dotleniają komórki wewnątrz oka. Na receptory nie ma tam miejsca.",
      w: ["Pręcików w plamce ślepej nie ma wcale.", "Mięśnie rzęskowe są z przodu oka, przy soczewce.", "Światło nie „wychodzi” z oka plamką ślepą."] },
    { u: "siatkowka", t: "tf", q: "W plamce ślepej jest mniej receptorów niż gdzie indziej, ale kilka jednak jest.", a: false,
      x: "Nie ma tam ani jednego fotoreceptora (Francuz). Obraz, który pada w to miejsce, „trafia w pustkę”." },
    { u: "siatkowka", t: "mcq", q: "Gdzie leży plamka ślepa według Francuza?",
      a: ["Ok. 15° od dołka, w części od strony nosa", "Dokładnie w środku dołka środkowego", "Ok. 15° od dołka, w części od strony skroni", "Na samym brzegu siatkówki, przy rogówce"],
      x: "Mniej więcej 15° od dołka środkowego, w przynosowej części siatkówki każdego oka. Średnica ok. 1,5 mm, powierzchnia ok. 1,2 mm².",
      w: ["W dołku jest najostrzejsze widzenie, a nie dziura.", "Plamka ślepa leży w przynosowej, a nie skroniowej części siatkówki.", "Leży dość blisko dołka, a siatkówka nie sięga rogówki."] },
    { u: "siatkowka", t: "mcq", q: "Co według Kalata widzi osoba z jaskrą w swoich ślepych obszarach?",
      a: ["Nic, czyli brak jakichkolwiek doznań", "Czarne plamy w polu widzenia", "Szarą mgłę zamiast obrazu", "Migające jasne punkciki"],
      x: "To, co „widzą” w ślepych obszarach, nie jest czernią, tylko po prostu niczym, jak to, co widzisz w swojej plamce ślepej albo z tyłu głowy. Dlatego takie ubytki łatwo przeoczyć.",
      w: ["Kalat podkreśla, że to właśnie NIE jest czerń.", "Tekst nie mówi o mgle, tylko o braku doznań.", "Tekst nie mówi o błyskach, tylko o braku doznań."] },
    { u: "siatkowka", t: "tf", q: "Dzięki temu, że mamy dwoje oczu, problem plamki ślepej jest dużo mniejszy.", a: true,
      x: "Oczy są od siebie odsunięte, więc w plamkę ślepą każdego z nich rzutują się nieco inne fragmenty sceny. Czego nie widzi jedno oko, widzi drugie (Francuz)." },
    { u: "siatkowka", t: "mcq", q: "Test Kalata: zamykasz lewe oko, prawym patrzysz na „o” i przybliżasz kartkę. Co się dzieje przy ok. 25 cm?",
      a: ["Znika „x”, bo jego obraz pada na plamkę ślepą", "Znika „o”, bo oko przestaje na nie patrzeć", "Oba znaki zlewają się w jedną plamę", "Znak „x” robi się nagle dwa razy większy"],
      x: "Patrzysz na „o”, więc ono pada na dołek. „X” jest z boku i w pewnej odległości jego obraz trafia dokładnie na plamkę ślepą, więc znika.",
      w: ["„O” jest w centrum spojrzenia, więc pada na dołek i widać je najlepiej.", "Znaki się nie zlewają: jeden po prostu znika.", "Nic się nie powiększa, „x” znika."] },
    { u: "siatkowka", t: "tf", q: "W drugiej części testu Kalata, z przerwaną linią, przy tej samej odległości brakujący fragment znika i linia wygląda na ciągłą.", a: true,
      x: "Kalat: „Tym razem znika brakująca część”. Mózg nie pokazuje dziury, tylko domyka obraz. To jeszcze jeden dowód, że widzenie to konstrukcja, a nie kopia." },
    { u: "siatkowka", t: "type", q: "Miejsce wyjścia nerwu wzrokowego z oka, w którym nie ma receptorów, to plamka…", a: ["ślepa"],
      x: "Plamka ślepa, czyli tarcza nerwu wzrokowego." },

    /* ---------- Pręciki i czopki (Francuz, s. 46–49, 52; Kalat, s. 149–150) ---------- */
    { u: "receptory", t: "sort", q: "Pręcik czy czopek?", cats: ["Pręcik", "Czopek"],
      why: ["Pręciki: kształt walca, słabe światło, obraz bez barw, najwięcej na obwodzie.", "Czopki: kształt stożka, jasne światło, barwy i szczegóły, najwięcej w dołku."],
      items: [["kształt walca", 0], ["widzi po ciemku", 0], ["obraz w odcieniach szarości", 0], ["kształt stożka", 1], ["rozróżnia barwy", 1], ["najwięcej w dołku środkowym", 1]],
      x: "Pręciki są do nocy (czułe, bez barw, na obwodzie), czopki do dnia (barwy, ostrość, w dołku)." },
    { u: "receptory", t: "mcq", q: "Których receptorów jest więcej w siatkówce człowieka?",
      a: ["Pręcików, ok. 20 razy więcej", "Czopków, ok. 20 razy więcej", "Obu typów jest tyle samo", "Czopków, ok. 2 razy więcej"],
      x: "Oba teksty: pręcików jest ponad 20 razy więcej. Francuz: 78–107 mln pręcików (średnio ok. 92 mln) i ok. 4,6 mln czopków. Kalat: ok. 120 mln i 6 mln.",
      w: ["Odwrotnie: to pręcików jest ok. 20 razy więcej.", "Różnica jest ogromna, ponad dwudziestokrotna.", "Czopków jest mniej, nie więcej."] },
    { u: "receptory", t: "mcq", q: "Dlaczego po ciemku nie rozróżniamy kolorów?",
      a: ["Widzenie przejmują pręciki, które nie różnicują barw", "Czopki w ciemności po prostu przestają istnieć", "Źrenica zwęża się i nie wpuszcza kolorowego światła", "Kolory w nocy znikają z powierzchni przedmiotów"],
      x: "Gdy robi się ciemno, kontrolę przejmują pręciki. Są wyczulone na jasność, ale dają obraz achromatyczny, więc rozróżniamy już tylko odcienie szarości.",
      w: ["Czopki nie znikają, tylko przy słabym świetle słabo reagują.", "W ciemności źrenica się rozszerza, nie zwęża.", "Kolor to wrażenie w nas. Przedmioty się nie zmieniają, zmienia się to, który receptor pracuje."] },
    { u: "receptory", t: "tf", q: "W nocy widzimy kolorowe neony, bo emitowane przez nie światło pobudza czopki.", a: true,
      x: "Tak. Zasada „po ciemku bez kolorów” dotyczy powierzchni, które światło odbijają, a nie źródeł, które je emitują. Światło neonu jest na tyle silne, że pobudza czopki." },
    { u: "receptory", t: "mcq", q: "Dlaczego w ciemnej ulicy możesz nie odróżnić zielonego auta od czerwonego?",
      a: ["Odbijają podobnie dużo światła, a pręciki widzą tylko jasność", "Czerwony lakier w nocy pochłania całe światło latarni", "Czopki w ciemności widzą wszystkie kolory jako zieleń", "Pręciki zamieniają czerwień w zieleń już w siatkówce"],
      x: "Francuz: w słabym świetle oba lakiery odbijają mniej więcej tyle samo światła, a pręciki zareagują na nie podobnie. Pręcik nie wie nic o kolorze.",
      w: ["Lakier nie pochłania całego światła. Problem leży w receptorach, nie w lakierze.", "Czopki po ciemku słabo reagują, a nie zamieniają kolorów.", "Pręciki niczego nie zamieniają: w ogóle nie różnicują barw."] },
    { u: "receptory", t: "which", set: "widzenie", q: "Zmierzch: pracują oba rodzaje receptorów, ale żaden na 100%.", a: 2,
      x: "Widzenie mezopowe: o zmierzchu, wczesnym rankiem albo przy księżycu." },
    { u: "receptory", t: "which", set: "widzenie", q: "Pełne światło dnia, pracują głównie czopki.", a: 1,
      x: "Widzenie fotopowe: bardzo dobre oświetlenie, przede wszystkim czopki." },
    { u: "receptory", t: "which", set: "widzenie", q: "Ciemna noc, pracują głównie pręciki.", a: 3,
      x: "Widzenie skotopowe: słabe oświetlenie, wynik aktywności pręcików." },
    { u: "receptory", t: "mcq", q: "Dlaczego zmierzch to szczególnie niebezpieczna pora dla kierowców?",
      a: ["Żaden system siatkówki nie działa wtedy w 100%", "Pręciki są wtedy wyłączone, a czopki oślepione", "O zmierzchu źrenica przestaje się poruszać", "Kierowcy patrzą wtedy wyłącznie kątem oka"],
      x: "To widzenie mezopowe: czopki słabną, pręciki dopiero się „budzą”. Pracują oba systemy, ale żaden w pełni (Francuz).",
      w: ["Pręciki właśnie się wtedy uaktywniają, a czopki nie są oślepione, tylko słabną.", "Tekst nic nie mówi o źrenicy.", "Tekst nie mówi o patrzeniu kątem oka przy jeździe."] },
    { u: "receptory", t: "cloze", q: "Jasność, przy której działa dany system widzenia, Francuz wyraża w ___ na metr kwadratowy.", a: ["kandelach", "lumenach", "watach", "decybelach"],
      x: "W kandelach na m² (cd/m²). Jedna kandela to mniej więcej światło o zmierzchu, tuż po zachodzie słońca.",
      w: ["Lumenów tekst nie używa. Mowa o kandelach na m².", "Wat to jednostka mocy, a nie jasności.", "Decybele mierzą głośność dźwięku."] },
    { u: "receptory", t: "mcq", q: "Z czego składają się barwniki wzrokowe w pręcikach i czopkach (Kalat)?",
      a: ["Z 11-cis-retinalu i białka opsyny", "Z melaniny i białka hemoglobiny", "Z glukozy i tlenu z krwi w siatkówce", "Z wapnia i witaminy D z pożywienia"],
      x: "Barwnik to 11-cis-retinal (pochodna witaminy A) połączony z białkiem, opsyną. Pod wpływem światła wydziela energię, która steruje aktywnością komórki.",
      w: ["Tych substancji Kalat w barwnikach nie wymienia.", "To paliwo komórki, a nie barwnik wzrokowy.", "Retinal pochodzi od witaminy A, nie D."] },
    { u: "receptory", t: "tf", q: "Retinal w barwniku wzrokowym jest pochodną witaminy A.", a: true,
      x: "Tak. 11-cis-retinal to pochodna witaminy A (Kalat)." },
    { u: "receptory", t: "mcq", q: "Co światło robi z 11-cis-retinalem?",
      a: ["Niemal natychmiast zmienia go w trans-retinal", "Rozpuszcza go w ciele szklistym oka", "Zmienia go z powrotem w witaminę A", "Przenosi go do nerwu wzrokowego"],
      x: "W ciemności 11-cis-retinal nie zmienia struktury, a energia świetlna niemal natychmiast przekształca go w trans-retinal. Ta zmiana daje energię, która steruje aktywnością komórki.",
      w: ["Retinal zostaje w receptorze, nie rozpuszcza się.", "Kalat nie opisuje cofania do witaminy A.", "Do nerwu wzrokowego płyną impulsy, a nie barwnik."] },
    { u: "receptory", t: "mcq", q: "Jak Francuz tłumaczy, że w siatkówce jest tak dużo pręcików, a mało czopków?",
      a: ["To pewnie spadek po drapieżnych przodkach polujących nocą", "To skutek tego, że ludzie zaczęli czytać przy świecach", "To wynik życia pod wodą u pierwszych przodków ssaków", "To efekt diety bogatej w marchew i witaminę A"],
      x: "Francuz: najprawdopodobniej to pozostałość po drapieżnych przodkach, którym nie zależało na kolorach i którzy woleli polować nocą. To hipoteza, nie pewnik.",
      w: ["Tego w tekście nie ma.", "Tego w tekście nie ma.", "Witamina A pada u Kalata przy barwnikach, a nie w wyjaśnieniu proporcji receptorów."] },
    { u: "receptory", t: "mcq", q: "Komu według Francuza zawdzięczamy widzenie barwne?",
      a: ["Małpim przodkom, którzy jedli owoce w dzień", "Drapieżnym przodkom, którzy polowali nocą", "Rybom, od których pochodzą wszystkie ssaki", "Ptakom drapieżnym, które szybują wysoko"],
      x: "Przodkom, którzy jedli w ciągu dnia i uważnie przyglądali się barwie skórki banana czy mango, choćby dla dobra trawienia.",
      w: ["Drapieżnym przodkom zawdzięczamy raczej przewagę pręcików.", "Tego w tekście nie ma.", "Ptaki pojawiają się u Kalata przy rozmieszczeniu receptorów, a nie przy pochodzeniu widzenia barw."] },
    { u: "receptory", t: "mcq", q: "Pręcików jest ok. 20 razy więcej. Ile reakcji w mózgu przypada na czopki według Kalata?",
      a: ["Ok. 10 na każdą 1 od pręcików", "Ok. 1 na każde 20 od pręcików", "Tyle samo co od pręcików", "Żadna, czopki działają tylko w oku"],
      x: "Czopki mają bardziej bezpośrednie połączenie z mózgiem (w dołku każdy ma własną drogę), więc w mózgu na 10 reakcji od czopków przypada 1 od pręcików (Masland, 2001).",
      w: ["Tak byłoby, gdyby liczyła się tylko liczba receptorów, a liczą się połączenia.", "Czopki mają przewagę w mózgu, mimo mniejszej liczby.", "Sygnały z czopków docierają do mózgu, i to bardzo bezpośrednio."] },
    { u: "receptory", t: "type", q: "Widzenie w słabym świetle, dzięki pręcikom, to widzenie…", a: ["skotopowe"],
      x: "Skotopowe. Dzienne, czopkami, to fotopowe, a zmierzchowe, obydwoma, mezopowe." },

    /* ---------- Dołek środkowy a obwód (Francuz, s. 49–52; Kalat, s. 148–150) ---------- */
    { u: "dolek", t: "mcq", q: "Gdzie pada obraz, gdy czytasz albo oglądasz drobne szczegóły?",
      a: ["Na plamkę żółtą, najostrzej na dołek", "Na plamkę ślepą, gdzie brak receptorów", "Na obwód siatkówki, gdzie są pręciki", "Równo na całą siatkówkę naraz"],
      x: "Przy czytaniu obraz pada na plamkę żółtą, a najostrzejsze widzenie daje jej środek: dołek środkowy.",
      w: ["W plamce ślepej nic nie widać.", "Obwód widzi słabe światło, ale nie szczegóły.", "Oś widzenia trafia w plamkę żółtą, a reszta siatkówki dostaje obraz z boków."] },
    { u: "dolek", t: "tf", q: "W dołku środkowym nie ma pręcików.", a: true,
      x: "Tak. W dołku są same czopki. Pierwsze pręciki pojawiają się dopiero na obrzeżach plamki żółtej." },
    { u: "dolek", t: "mcq", q: "Ile czopków może przypadać na 1 mm² w samym środku dołka (dołeczku) według Francuza?",
      a: ["Nawet 324 tysiące", "Około 7 tysięcy", "Około 75 tysięcy", "Zaledwie 3–4"],
      x: "W dołeczku nawet 324 tys./mm², u dorosłych średnio ok. 199 tys./mm² (Curcio i in., 1990). Dalej od dołka jest ich coraz mniej.",
      w: ["7 tys./mm² to średnia gęstość czopków poza plamką żółtą.", "75 tys./mm² to gęstość pręcików na krawędziach siatkówki.", "3–4 to liczba pikseli na 1 mm² ekranu LCD, z którym Francuz porównuje oko."] },
    { u: "dolek", t: "mcq", q: "Jaką rozdzielczość miałaby matryca aparatu 36 × 24 mm z czopków ze środka dołka (Francuz)?",
      a: ["Ok. 280 megapikseli", "Ok. 12 megapikseli", "Ok. 30 megapikseli", "Ok. 2 megapikseli"],
      x: "Francuz: nie 12, nawet nie 30, tylko ok. 280 Mpix. Dokładność obrazu w okolicy dołka jest niewyobrażalnie duża.",
      w: ["Francuz pisze: „nie 12”…", "…„czy nawet 30”, tylko ok. 280.", "To o wiele za mało."] },
    { u: "dolek", t: "mcq", q: "Jaką część powierzchni całej siatkówki zajmuje dołek środkowy?",
      a: ["Ok. 0,1%", "Ok. 10%", "Ok. 30%", "Ok. 50%"],
      x: "Dołek to zaledwie 0,1% siatkówki, a plamka żółta 0,3% (Młodkowski, 1998). Mimo to jest w nim 1/8 wszystkich czopków.",
      w: ["Za dużo o dwa rzędy wielkości.", "Za dużo.", "Za dużo."] },
    { u: "dolek", t: "tf", q: "Kalat i Francuz podają ten sam rozmiar plamki żółtej.", a: false,
      x: "Nie. Kalat: ok. 3 × 5 mm. Francuz: elipsa ok. 1,5 × 2 mm (ok. 2,4 mm²). Jeśli padnie pytanie o liczby, dobrze wiedzieć, z którego tekstu pochodzą." },
    { u: "dolek", t: "mcq", q: "Dlaczego w dołku widzimy najostrzej według Kalata? Wybierz najpełniejszą odpowiedź.",
      a: ["Gęste czopki, mało naczyń i każdy czopek ma własną drogę do mózgu", "Dołek ma najwięcej pręcików, które widzą najdrobniejsze szczegóły", "W dołku soczewka jest najgrubsza i najmocniej powiększa obraz", "Dołek leży przy nerwie wzrokowym, więc sygnał płynie szybciej"],
      x: "Trzy powody: (1) mało naczyń krwionośnych i komórek zwojowych, więc światło nie jest zakłócane; (2) gęsto upakowane receptory; (3) każdy czopek łączy się z jedną komórką dwubiegunową, a ta z jedną zwojową.",
      w: ["W dołku w ogóle nie ma pręcików.", "Soczewka jest jedna dla całego oka, a o ostrości w dołku decydują receptory i połączenia.", "Przy nerwie wzrokowym jest plamka ślepa, a nie dołek."] },
    { u: "dolek", t: "mcq", q: "Czym jest karłowata komórka zwojowa w dołku według Kalata?",
      a: ["Małą komórką, która dostaje sygnał od jednego czopka", "Dużą komórką, która zbiera sygnały z setek pręcików", "Komórką horyzontalną, która hamuje sąsiednie czopki", "Komórką, która wysyła sygnał z mózgu z powrotem do oka"],
      x: "Komórki zwojowe w dołku u ludzi i innych naczelnych są małe i każda dostaje informację od pojedynczego czopka. Dzięki temu mózg zna dokładne położenie każdego punktu światła w tej części siatkówki.",
      w: ["To opis komórki z obwodu siatkówki.", "Komórka horyzontalna to inny typ komórki: hamuje dwubiegunowe.", "Komórki zwojowe przesyłają sygnał z oka do mózgu, a nie odwrotnie."] },
    { u: "dolek", t: "mcq", q: "Co zyskuje obwód siatkówki dzięki temu, że wiele receptorów zbiega się na jedną komórkę?",
      a: ["Czułość na bardzo słabe światło", "Lepszą ostrość widzenia szczegółów", "Lepsze rozróżnianie kolorów", "Dokładne położenie źródła światła"],
      x: "Sumowanie sygnałów z wielu receptorów zwiększa wrażliwość na bardzo słabe światło. Ceną jest gorsza ostrość: mózg nie wie, który z wielu receptorów dostał światło.",
      w: ["Przeciwnie: zbieżność pogarsza ostrość.", "Barwy rozróżniają czopki, a na obwodzie jest ich mało.", "Przeciwnie: przez zbieżność mózg nie zna dokładnego położenia źródła."] },
    { u: "dolek", t: "mcq", q: "Kalat: czasem w nocy słabą gwiazdę łatwiej zobaczyć, gdy patrzysz nieco obok niej. Dlaczego?",
      a: ["Jej obraz pada na obwód, gdzie pręciki sumują słabe światło", "Jej obraz pada na dołek, gdzie czopki są najgęstsze", "Gwiazda przestaje razić czopki i nie oślepia", "Patrząc obok, omijamy plamkę ślepą w dołku"],
      x: "Patrząc wprost, kierujesz gwiazdę na dołek, gdzie są same czopki, słabe w ciemności. Patrząc obok, przesuwasz jej obraz na obwód, gdzie pręciki są czułe, a wiele z nich zbiega się na jedną komórkę.",
      w: ["Odwrotnie: patrząc obok, przesuwasz obraz POZA dołek.", "Słaba gwiazda nikogo nie razi. Czopki po prostu słabo reagują na słabe światło.", "Plamka ślepa nie leży w dołku, tylko ok. 15° od niego."] },
    { u: "dolek", t: "mcq", q: "O ile stopni warto po ciemku przesunąć wzrok, żeby coś zobaczyć wyraźniej (Francuz)?",
      a: ["O ok. 20°", "O ok. 5°", "O ok. 90°", "O ok. 1°"],
      x: "Ok. 20° od dołka jest najwięcej pręcików (ok. 150 tys./mm²). Francuz: po ciemku widzimy coś wyraźniej „kątem oka”, przesuwając środek układu optycznego o ok. 20°.",
      w: ["5° to kąt między osią widzenia a osią optyczną.", "90° to już skraj pola widzenia.", "1° to wciąż okolica dołka, gdzie nie ma pręcików."] },
    { u: "dolek", t: "mcq", q: "O ile stopni oś widzenia jest nachylona względem osi optycznej (Francuz)?",
      a: ["Ok. 5°", "Ok. 20°", "Ok. 15°", "Ok. 45°"],
      x: "Oś widzenia (do miejsca, na które patrzysz, i do dołka) jest nachylona o ok. 5° (5–7°) do osi optycznej, która biegnie przez środki rogówki, źrenicy i soczewki.",
      w: ["20° to miejsce największej gęstości pręcików.", "15° to odległość plamki ślepej od dołka.", "Nachylenie jest niewielkie, kilka stopni."] },
    { u: "dolek", t: "tf", q: "Na obwodzie pola widzenia kształt rozpoznajemy lepiej, gdy otaczają go inne bodźce.", a: false,
      x: "Odwrotnie. Widzenie obwodowe dużo lepiej rozpoznaje kształt, gdy jest on sam. Otaczające elementy zakłócają percepcję szczegółów, ale tylko na obwodzie, nie w dołku (Parkes i in., 2001)." },
    { u: "dolek", t: "mcq", q: "Dlaczego ptaki drapieżne mają więcej receptorów w górnej części siatkówki?",
      a: ["Szybując wysoko, patrzą głównie w dół", "Polują nocą i potrzebują więcej pręcików", "Mają po dwa dołki w każdym oku", "Często patrzą prosto w słońce nad sobą"],
      x: "Obraz w oku jest odwrócony, więc górna część siatkówki widzi to, co jest w dole. Ptak drapieżny szybuje i wypatruje ofiary pod sobą. Żeby spojrzeć w górę, musi odwrócić głowę.",
      w: ["Tekst wiąże to z patrzeniem w dół w locie, a nie z polowaniem nocą.", "Dwa dołki u wielu ptaków służą do widzenia szczegółów z przodu i z boku, a nie w dole.", "Tekst nic nie mówi o patrzeniu w słońce."] },
    { u: "dolek", t: "mcq", q: "Gdzie szczury mają więcej receptorów i co im to daje?",
      a: ["W dolnej części siatkówki: lepiej widzą, co nad nimi", "W górnej części siatkówki: lepiej widzą, co pod nimi", "W dołku środkowym: lepiej widzą kolory", "Na obwodzie siatkówki: lepiej widzą, co za nimi"],
      x: "Szczury są ofiarami, a zagrożenie (np. ptak) nadlatuje z góry. Dolna część siatkówki widzi to, co jest w górze (Lund, Lund, Wise, 1974).",
      w: ["Tak jest u ptaków drapieżnych.", "Szczury mają jeden typ czopków i w ogóle nie rozróżniają kolorów.", "Tekst nie mówi o widzeniu za sobą."] },
    { u: "dolek", t: "type", q: "Miejsce najostrzejszego widzenia, w środku plamki żółtej, to dołek…", a: ["środkowy", "centralny"],
      x: "Dołek środkowy (Kalat) albo dołek centralny (Francuz). To ta sama struktura, po łacinie fovea." },

    /* ---------- Droga do mózgu (Kalat, s. 157, 159; Francuz, s. 43–44, 55, 58) ---------- */
    { u: "droga", t: "order", q: "Ułóż drogę wzrokową od oka do kory.", a: ["Nerw wzrokowy", "Skrzyżowanie wzrokowe", "Trakt wzrokowy", "Ciało kolankowate boczne", "Promienistość wzrokowa", "Pierwotna kora wzrokowa"],
      x: "Nerw wzrokowy → skrzyżowanie wzrokowe → trakt wzrokowy → LGN we wzgórzu → promienistość wzrokowa → pierwotna kora wzrokowa w płacie potylicznym. Zdanie do zapamiętania: „Nie Skręcaj, Tramwaj Leci Prosto do Kory”." },
    { u: "droga", t: "which", set: "droga", q: "Miejsce, gdzie u człowieka połowa włókien z każdego oka przechodzi na drugą stronę mózgu:", a: 2,
      x: "Skrzyżowanie wzrokowe (optic chiasm)." },
    { u: "droga", t: "which", set: "droga", q: "Jądro wzgórza, pierwsza stacja w mózgu dla większości informacji z oczu:", a: 4,
      x: "Ciało kolankowate boczne (LGN)." },
    { u: "droga", t: "which", set: "droga", q: "Aksony komórek z LGN, które biegną do kory w płacie potylicznym:", a: 5,
      x: "Promienistość wzrokowa (optic radiation). Z grubsza zamyka pierwszy etap przesyłania danych." },
    { u: "droga", t: "which", set: "droga", q: "Odcinek od skrzyżowania wzrokowego do ciała kolankowatego bocznego:", a: 3,
      x: "Trakt wzrokowy (optic tract)." },
    { u: "droga", t: "mcq", q: "Z ilu mniej więcej aksonów składa się nerw wzrokowy (Francuz)?",
      a: ["Z ok. 1 miliona", "Z ok. 120 milionów", "Z ok. 1 tysiąca", "Z ok. 6 milionów"],
      x: "Ok. 1 mln (od 770 tys. do 1,7 mln) aksonów komórek zwojowych. Francuz porównuje nerw do kabla z miedzianych drucików.",
      w: ["120 mln to u Kalata liczba pręcików, a nie aksonów.", "To za mało o trzy rzędy wielkości.", "6 mln to u Kalata liczba czopków."] },
    { u: "droga", t: "tf", q: "U królików i świnek morskich na drugą stronę mózgu przechodzą niemal wszystkie aksony z oka.", a: true,
      x: "Tak. Mają oczy po bokach głowy. Odsetek krzyżujących się aksonów zależy od położenia oczu; u człowieka przechodzi połowa." },
    { u: "droga", t: "mcq", q: "Gdzie leży ciało kolankowate boczne?",
      a: ["We wzgórzu", "W płacie potylicznym", "W siatkówce", "W móżdżku"],
      x: "To jądro wzgórza wyspecjalizowane w percepcji wzrokowej, mniej więcej w połowie drogi między oczami a korą.",
      w: ["W płacie potylicznym jest pierwotna kora wzrokowa, do której LGN wysyła sygnał.", "W siatkówce są komórki zwojowe, które dopiero wysyłają aksony do LGN.", "Móżdżek nie pojawia się w tekście."] },
    { u: "droga", t: "mcq", q: "Dokąd poza LGN trafiają niektóre aksony z siatkówki (Kalat)?",
      a: ["Do wzgórków górnych", "Do móżdżku", "Do kory ruchowej", "Do rdzenia kręgowego"],
      x: "Niektóre aksony dochodzą do wzgórków górnych, a nieliczne do kilku innych obszarów, m.in. do części podwzgórza.",
      w: ["Móżdżku tekst nie wymienia.", "Kory ruchowej tekst nie wymienia.", "Rdzenia kręgowego tekst nie wymienia."] },
    { u: "droga", t: "mcq", q: "Czym steruje część podwzgórza, do której docierają nieliczne aksony z siatkówki?",
      a: ["Cyklem snu i czuwania", "Ruchami gałek ocznych", "Rozróżnianiem barw", "Ostrością widzenia"],
      x: "Kalat: część podwzgórza, która steruje cyklem snu i czuwania. Dlatego światło wpływa na rytm dnia.",
      w: ["Tekst tego nie łączy z podwzgórzem.", "Barwy to sprawa czopków i komórek zwojowych.", "Ostrość to sprawa dołka i soczewki."] },
    { u: "droga", t: "tf", q: "Sygnały ze wzgórza do kory płyną tylko w jedną stronę, bez informacji zwrotnych.", a: false,
      x: "Kora wysyła wiele aksonów z powrotem do wzgórza, więc sygnały ze wzgórza do kory są nieustannie modyfikowane przez informacje zwrotne (Guillery, Feig, van Lieshout, 2001)." },
    { u: "droga", t: "mcq", q: "Co wynika z tego, że niektórzy ludzie mają 2–3 razy więcej aksonów w nerwie wzrokowym?",
      a: ["Lepiej dostrzegają bodźce krótkie, słabe i szybkie", "Widzą więcej kolorów niż pozostali ludzie", "Nie mają plamki ślepej w żadnym oku", "Widzą obraz prosto, a nie odwrócony"],
      x: "Więcej aksonów idzie w parze z większą liczbą komórek w LGN i korze. Daje to duże różnice w dostrzeganiu krótkich, słabych lub szybko zmieniających się bodźców.",
      w: ["Tekst wiąże to z wychwytywaniem bodźców, a nie z liczbą kolorów.", "Plamka ślepa jest u każdego: tam wychodzi nerw.", "Obraz jest odwrócony u wszystkich i nikomu to nie przeszkadza."] },
    { u: "droga", t: "mcq", q: "Dlaczego oko nie może po prostu przesłać do mózgu 126 mln osobnych komunikatów (Kalat)?",
      a: ["Nie da się ich sensownie przetworzyć, trzeba wydobyć wzorce", "Nerw wzrokowy ma dokładnie 126 mln włókien i jest zapchany", "Pręciki i czopki w ogóle nie wysyłają sygnałów do mózgu", "Mózg może naraz przetworzyć tylko jeden punkt obrazu"],
      x: "120 mln pręcików + 6 mln czopków to za dużo niezależnych komunikatów. Układ wzrokowy musi wydobywać znaczące wzorce: co to za przedmioty, gdzie są i czy się ruszają.",
      w: ["Nerw ma ok. 1 mln włókien, czyli o wiele mniej niż receptorów.", "Wysyłają, tylko przez kolejne komórki siatkówki.", "Tekst tego nie mówi. Chodzi o wydobywanie wzorców."] },
    { u: "droga", t: "mcq", q: "Kto w latach 20. XX wieku odkrył, że aksony małych i dużych komórek zwojowych łączą się z LGN w zaskakująco uporządkowany sposób?",
      a: ["Mieczysław Minkowski", "Johannes Müller", "Hermann von Helmholtz", "Margaret Livingstone"],
      x: "Mieczysław Minkowski, szwajcarski neurolog polskiego pochodzenia (Francuz, s. 58).",
      w: ["Müller opisał prawo specyficznych energii nerwowych w 1838 r.", "Helmholtz rozwinął teorię trichromatyczną widzenia barw.", "Livingstone to współautorka (z Hubelem) artykułu o czterech ścieżkach analizy."] },
    { u: "droga", t: "tf", q: "Według Kalata rozwój kory mózgowej zależy od tego, ile sygnałów otrzymuje ona ze wzgórza.", a: true,
      x: "Tak (Sur, Leamey, 2001). Kora rozwija się pod wpływem tego, co do niej dociera." },
    { u: "droga", t: "type", q: "Skrót angielskiej nazwy ciała kolankowatego bocznego:", a: ["LGN"],
      x: "LGN, lateral geniculate nucleus." },

    /* ---------- Pola recepcyjne (Kalat, s. 159–160) ---------- */
    { u: "pola", t: "mcq", q: "Czym jest pole widzenia?",
      a: ["Fragmentem otoczenia widocznym za jednym razem", "Częścią siatkówki z największą liczbą czopków", "Obszarem kory, który analizuje obrazy", "Miejscem, na które reaguje jeden neuron"],
      x: "Pole widzenia to wszystko, co widać za jednym razem. Część po lewej to lewe pole widzenia, a po prawej prawe.",
      w: ["To plamka żółta z dołkiem.", "To kora wzrokowa, a nie pole widzenia.", "To pole recepcyjne, a nie pole widzenia."] },
    { u: "pola", t: "mcq", q: "Czym jest pole recepcyjne neuronu?",
      a: ["Częścią pola widzenia, na którą reaguje ten neuron", "Fragmentem otoczenia widocznym za jednym razem", "Grupą neuronów, z którymi ten neuron się łączy", "Obszarem kory, w którym leży ciało neuronu"],
      x: "Pole recepcyjne to ten kawałek pola widzenia, na który dany neuron reaguje. Każdy neuron ma swoje.",
      w: ["To pole widzenia, czyli wszystko naraz.", "Połączenia wyznaczają pole recepcyjne, ale nim nie są.", "Pole recepcyjne to miejsce w polu widzenia, a nie w mózgu."] },
    { u: "pola", t: "mcq", q: "Czym jest pole recepcyjne pojedynczego receptora?",
      a: ["Punktem, z którego światło pada na ten receptor", "Całym polem widzenia jednego oka naraz", "Obwarzankiem z centrum i przeciwną otoczką", "Lewą albo prawą połową pola widzenia"],
      x: "Kalat: pole recepcyjne receptora to po prostu punkt w przestrzeni, z którego światło docierające do oka pada na ten receptor.",
      w: ["Całe pole widzenia to suma pól wielu receptorów.", "Kształt obwarzanka ma pole komórki zwojowej, nie receptora.", "Pół pola widzenia to ogromny obszar, a receptor „widzi” jeden punkt."] },
    { u: "pola", t: "tf", q: "Pole recepcyjne komórki zwojowej powstaje z połączenia pól recepcyjnych receptorów, z którymi jest ona połączona.", a: true,
      x: "Tak. Komórka zwojowa połączona z grupą receptorów ma pole, które jest połączeniem ich pól. Potem pola komórek zwojowych łączą się w pola komórek na kolejnym poziomie." },
    { u: "pola", t: "mcq", q: "Pytanie kontrolne Kalata: czy pola recepcyjne rosną, maleją, czy się nie zmieniają, gdy idziemy od komórek dwubiegunowych dalej szlakiem wzrokowym?",
      a: ["Rosną, bo każda kolejna komórka zbiera pola wielu poprzednich", "Maleją, bo każda kolejna komórka widzi coraz mniej", "Nie zmieniają się, bo każdy neuron ma jeden receptor", "Znikają, bo komórki w korze nie mają pól recepcyjnych"],
      x: "Każda komórka na kolejnym poziomie łączy pola recepcyjne komórek z poziomu niższego, więc pola rosną. (Odpowiedź z książki jest na s. 176, której nie ma na zdjęciach; ta wynika wprost z tekstu na s. 159.)",
      w: ["Odwrotnie: kolejne komórki zbierają sygnały z coraz większego obszaru.", "Jeden receptor na komórkę jest tylko w dołku, i to na początku drogi.", "Komórki kory też mają pola recepcyjne, np. ta reagująca na zieloną poziomą linię."] },
    { u: "pola", t: "mcq", q: "Jaki kształt ma pole recepcyjne komórki zwojowej?",
      a: ["Koliste centrum z przeciwną mu otoczką", "Pozioma linia w jednym kolorze", "Pojedynczy punkt bez otoczenia", "Kwadrat podzielony na cztery części"],
      x: "Koliste centrum i antagonistyczna otoczka w kształcie obwarzanka: światło w centrum pobudza, a w otoczce hamuje, albo odwrotnie.",
      w: ["Na linie reagują niektóre komórki kory, nie komórki zwojowe.", "Punkt to pole recepcyjne pojedynczego receptora.", "Tekst nie opisuje takiego pola."] },
    { u: "pola", t: "tf", q: "W polu typu centrum–otoczka światło w centrum i w otoczce działa na neuron tak samo.", a: false,
      x: "Przeciwnie, stąd słowo „antagonistyczna”. Jeśli światło w centrum pobudza, to w otoczce hamuje, i odwrotnie." },
    { u: "pola", t: "mcq", q: "Jak ustala się zakres pola recepcyjnego?",
      a: ["Świeci się z różnych miejsc i patrzy na aktywność neuronu", "Liczy się receptory pod mikroskopem elektronowym", "Pyta się badanego, gdzie coś widzi, a gdzie nie", "Mierzy się grubość soczewki przy różnych odległościach"],
      x: "Emituje się światło z różnych miejsc i jednocześnie rejestruje aktywność neuronu. Jeśli światło z danego punktu pobudza neuron, to część pobudzeniowa; jeśli hamuje, hamulcowa.",
      w: ["Liczenie receptorów nie mówi, na co reaguje konkretny neuron.", "Pole recepcyjne dotyczy jednego neuronu, więc mierzy się jego aktywność, a nie relację osoby.", "Grubość soczewki to akomodacja, nie pola recepcyjne."] },
    { u: "pola", t: "mcq", q: "Co znaczy zdanie neurobiologa: „ta komórka kory reaguje najsilniej na zieloną poziomą linię”?",
      a: ["Pobudza się, gdy taka linia jest w jej polu recepcyjnym", "Pobudza ją światło padające wprost na ten neuron", "Neuron sam jest zielony i ułożony poziomo", "Neuron rysuje w mózgu zieloną poziomą linię"],
      x: "Kalat wyjaśnia: nie chodzi o to, że światło pada na ten neuron, tylko o to, że neuron ulega pobudzeniu, kiedy jego pole recepcyjne jest tak oświetlone.",
      w: ["Kalat wprost zaznacza, że NIE o to chodzi. Na neurony w korze światło w ogóle nie pada.", "Neurony nie mają koloru linii, na którą reagują.", "W mózgu nie ma rysowania obrazków, tylko kod."] },
    { u: "pola", t: "tf", q: "Połączenia między neuronami mogą być pobudzające albo hamujące, więc pola recepcyjne mogą mieć obszary jednego i drugiego rodzaju.", a: true,
      x: "Tak (Kalat, s. 159). Stąd np. pole typu centrum–otoczka." },
    { u: "pola", t: "cloze", q: "Pole recepcyjne komórki zwojowej ma kształt ___: koliste centrum i antagonistyczna otoczka.", a: ["obwarzanka", "kwadratu", "linii", "trójkąta"],
      x: "Kalat porównuje je do obwarzanka: kółko w środku i pierścień dookoła.",
      w: ["Tekst nie opisuje kwadratowych pól.", "Na linie reagują niektóre komórki kory.", "Tekst nie opisuje trójkątnych pól."] },
    { u: "pola", t: "type", q: "Część pola widzenia, na którą reaguje dany neuron, to pole…", a: ["recepcyjne"],
      x: "Pole recepcyjne. Nie myl z polem widzenia, czyli wszystkim, co widać za jednym razem." },

    /* ---------- Hamowanie oboczne (Kalat, s. 160–161) ---------- */
    { u: "hamowanie", t: "mcq", q: "Czym jest hamowanie oboczne?",
      a: ["Hamowaniem neuronu przez aktywność sąsiednich komórek", "Hamowaniem ruchu gałek ocznych na boki", "Wyłączaniem pręcików w bardzo jasnym świetle", "Blokowaniem sygnału w okolicy plamki ślepej"],
      x: "Definicja Kalata: hamowanie aktywności w neuronie przez aktywność sąsiednich komórek nerwowych (Hartline, 1949).",
      w: ["„Oboczne” znaczy „z boku, od sąsiadów”, a nie ruch oczu na boki.", "Pręciki oślepia silne światło, ale to nie jest hamowanie oboczne.", "W plamce ślepej nie ma receptorów, więc nie ma czego hamować."] },
    { u: "hamowanie", t: "mcq", q: "Jaka jest główna funkcja hamowania obocznego?",
      a: ["Zaakcentowanie kontrastów i granic", "Rozróżnianie czerwieni i zieleni", "Ochrona siatkówki przed silnym światłem", "Przesuwanie obrazu z obwodu do dołka"],
      x: "Granice mówią, gdzie kończy się jeden przedmiot, a zaczyna drugi. Hamowanie oboczne to sposób, w jaki siatkówka wyostrza kontrasty, żeby te granice były wyraźne.",
      w: ["Czerwień i zieleń różnicują komórki karłowate.", "Tekst nie przypisuje hamowaniu funkcji ochronnej.", "Obraz przesuwamy na dołek ruchem oczu, a nie hamowaniem."] },
    { u: "hamowanie", t: "sort", q: "Pobudza czy hamuje? (uproszczony model Kalata)", cats: ["Pobudza", "Hamuje"],
      why: ["W uproszczeniu Kalata receptor pobudza swoją komórkę dwubiegunową i komórkę horyzontalną.", "Komórka horyzontalna hamuje komórki dwubiegunowe, tym słabiej, im dalej leżą."],
      items: [["receptor → jego komórka dwubiegunowa", 0], ["receptor → komórka horyzontalna", 0], ["komórka horyzontalna → komórki dwubiegunowe", 1], ["aktywny neuron → jego sąsiedzi", 1]],
      x: "Schemat: receptor pobudza swoją komórkę dwubiegunową i komórkę horyzontalną, a horyzontalna hamuje komórki dwubiegunowe dookoła." },
    { u: "hamowanie", t: "tf", q: "W rzeczywistości receptory tworzą z komórkami dwubiegunowymi synapsy hamujące, a światło zmniejsza aktywność receptorów.", a: true,
      x: "Tak pisze Kalat. Żeby uniknąć podwójnego przeczenia (światło zmniejsza hamowanie, czyli w sumie pobudza), w przykładzie przyjmuje, że receptory po prostu pobudzają komórki dwubiegunowe." },
    { u: "hamowanie", t: "mcq", q: "Dlaczego wpływ komórki horyzontalnej słabnie z odległością?",
      a: ["To neuron lokalny, bez aksonu i potencjałów czynnościowych", "Jest bardzo krótka i sięga tylko jednej komórki", "Dalsze komórki dwubiegunowe są od niej odcięte", "Hamuje wyłącznie komórki leżące bliżej dołka"],
      x: "Komórka horyzontalna nie wysyła impulsów, które biegłyby bez strat, więc jej depolaryzacja maleje wraz z odległością: blisko hamuje mocno, dalej słabiej.",
      w: ["Przeciwnie: jest długa, więc jeden receptor może zahamować dużą grupę komórek.", "Nie są odcięte, tylko hamowane słabiej.", "Tekst nic nie mówi o kierunku do dołka."] },
    { u: "hamowanie", t: "mcq", q: "Światło pada tylko na receptor 8. Co dzieje się z komórką dwubiegunową 8?",
      a: ["Jest pobudzona: pobudzenie przeważa nad hamowaniem", "Jest zahamowana, bo horyzontalna hamuje ją najmocniej", "Nic, bo pobudzenie i hamowanie się znoszą", "Wyłącza ją na stałe komórka amakrynowa"],
      x: "Dostaje i pobudzenie od receptora 8, i hamowanie od komórki horyzontalnej, ale synapsa pobudzająca przeważa. Wypadkowa: pobudzenie.",
      w: ["Hamowanie jest, ale słabsze niż pobudzenie.", "Nie znoszą się: przeważa pobudzenie.", "W tym przykładzie nie ma komórek amakrynowych."] },
    { u: "hamowanie", t: "mcq", q: "Światło pada tylko na receptor 8. Co dzieje się z komórkami dwubiegunowymi 7 i 9?",
      a: ["Spadają poniżej poziomu spontanicznej aktywności", "Są pobudzone dokładnie tak jak komórka 8", "Nic się z nimi nie dzieje, zostają bez zmian", "Są pobudzone jeszcze mocniej niż komórka 8"],
      x: "Nie dostają żadnego pobudzenia (ich receptory są w ciemności), a komórka horyzontalna mocno je hamuje. Ich aktywność spada dużo poniżej poziomu spontanicznego. 6 i 10 spadają mniej.",
      w: ["Nie dostają pobudzenia, bo ich receptory są w ciemności.", "Zmienia się: hamuje je komórka horyzontalna.", "Bez pobudzenia nie mogą przebić komórki 8."] },
    { u: "hamowanie", t: "mcq", q: "Światło pada na receptory 6–10. Które komórki dwubiegunowe są najbardziej pobudzone?",
      a: ["6 i 10, na brzegach jasnego pasa", "8, w samym środku jasnego pasa", "5 i 11, tuż za brzegiem pasa", "1–4, daleko w ciemności"],
      x: "Wszystkie 6–10 dostają pobudzenie, ale 7, 8 i 9 są hamowane z obu stron, a 6 i 10 tylko z jednej. Dlatego brzegi pasa są pobudzone najmocniej.",
      w: ["8 jest hamowana z obu stron, więc słabiej niż brzegi.", "5 i 11 nie dostają pobudzenia, tylko hamowanie: są najsłabsze.", "1–4 mają tylko aktywność spontaniczną."] },
    { u: "hamowanie", t: "mcq", q: "Światło pada na receptory 6–10. Dlaczego komórka dwubiegunowa 5 reaguje słabiej niż komórki 1–4?",
      a: ["Nie dostaje pobudzenia, a hamują ją receptory 6 i 7", "Leży najdalej od komórki horyzontalnej", "Jej receptor jest uszkodzony przez światło", "Dostaje pobudzenie od receptorów 6 i 7"],
      x: "Jej receptor jest w ciemności, więc pobudzenia brak. Za to przez komórkę horyzontalną hamują ją sąsiednie oświetlone receptory 6 i 7. Komórki 1–4 są za daleko, żeby je hamowano.",
      w: ["Komórka horyzontalna jest długa i sięga też komórki 5.", "Receptor 5 jest w ciemności, nie uszkodzony.", "Od receptorów 6 i 7 dostaje hamowanie, nie pobudzenie."] },
    { u: "hamowanie", t: "tf", q: "Komórki dwubiegunowe tuż za krawędzią oświetlonego obszaru, po ciemnej stronie, są najmniej aktywne.", a: true,
      x: "Tak. Dostają tylko hamowanie, bez pobudzenia. Po jasnej stronie brzegu jest najmocniej, po ciemnej najsłabiej: tak siatkówka podkreśla krawędź." },
    { u: "hamowanie", t: "mcq", q: "Co w analogii Kalata z klockami na żelatynie odpowiada pobudzeniu neuronu?",
      a: ["Zagłębienie pod klockiem", "Wybrzuszenie wokół klocka", "Brzeg naczynia z żelatyną", "Kolor żelatyny w naczyniu"],
      x: "Klocek wciska żelatynę: zagłębienie to pobudzenie neuronu. Wybrzuszenie wokół to hamowanie oboczne sąsiadów.",
      w: ["Wybrzuszenie to hamowanie oboczne sąsiednich neuronów.", "Brzeg naczynia nie ma odpowiednika w siatkówce.", "Kolor nie gra tu roli."] },
    { u: "hamowanie", t: "mcq", q: "Dlaczego w rzędzie klocków na żelatynie skrajne klocki zanurzają się głębiej niż środkowe?",
      a: ["Wypycha je w górę tylko jeden sąsiad, a środkowe dwóch", "Są cięższe od klocków w środku rzędu", "Żelatyna na brzegach naczynia jest rzadsza", "Kładzie się je na samym końcu układania"],
      x: "Każdy klocek wewnątrz rzędu jest wypychany do góry z obu stron, a skrajne tylko z jednej. To dokładnie jak komórki 6 i 10 na brzegu jasnego pasa.",
      w: ["Klocki są takie same.", "Żelatyna jest wszędzie taka sama.", "Kolejność układania nie ma znaczenia."] },
    { u: "hamowanie", t: "mcq", q: "Kto opisał hamowanie oboczne?",
      a: ["Hartline, 1949", "Müller, 1838", "Young, ok. 1800", "Hubel, 1981"],
      x: "Haldan Keffer Hartline, 1949 (Kalat podaje nazwisko i rok).",
      w: ["Müller opisał prawo specyficznych energii nerwowych.", "Young to hipoteza o kilku typach receptorów barw.", "1981 to rok Nobla Hubela."] },
    { u: "hamowanie", t: "mcq", q: "Siatka czarnych kwadratów z białymi paskami: na skrzyżowaniach pasków widać szare plamki. Jak to wyjaśnić hamowaniem obocznym?",
      a: ["Skrzyżowanie ma biel z czterech stron, więc jest silniej hamowane", "Na skrzyżowaniach wypada plamka ślepa, więc nic tam nie widać", "Czarne kwadraty odbijają światło prosto na skrzyżowania", "Pręciki w środku pola widzenia widzą wszystko na szaro"],
      x: "Punkt na skrzyżowaniu ma jasne sąsiedztwo z czterech stron, a punkt na pasku między kwadratami tylko z dwóch. Więcej jasnych sąsiadów to więcej hamowania, więc skrzyżowanie wygląda ciemniej. (To pytanie kontrolne 5; odpowiedź z s. 176 nie jest na zdjęciach, ta wynika z mechanizmu z s. 160–161.)",
      w: ["Plamka ślepa jest w jednym miejscu oka, a szarych plamek jest wiele.", "Czarne powierzchnie odbijają mało światła.", "Na środku pola widzenia jest dołek z czopkami, a plamki widać raczej obok miejsca, na które patrzysz."] },
    { u: "hamowanie", t: "type", q: "Komórki, przez które w siatkówce działa hamowanie oboczne, to komórki…", a: ["horyzontalne"],
      x: "Horyzontalne. Receptor je pobudza, a one hamują sąsiednie komórki dwubiegunowe." },

    /* ---------- Komórki zwojowe (Francuz, s. 54–57) ---------- */
    { u: "zwojowe", t: "multi", q: "W czym specjalizują się komórki zwojowe według Francuza?", a: ["długość fali (barwy)", "kontrasty jasności (kształty)", "zmiany oświetlenia w czasie (ruch)", "rozdzielczość przestrzenna (ostrość)"], o: ["wysokość dźwięku", "temperatura otoczenia"],
      x: "Cztery specjalizacje: długość fali to podstawa barw, kontrasty jasności to krawędzie i kształty, zmiany w czasie to ruch, a rozdzielczość przestrzenna to ostrość widzenia.",
      w: ["Dźwięk to słuch, nie wzrok.", "Temperatury siatkówka nie rejestruje."] },
    { u: "zwojowe", t: "which", set: "zwojowe", q: "Małe, ze środka siatkówki, ok. 80% włókien nerwu, para czerwony–zielony:", a: 1,
      x: "Komórki karłowate (midget)." },
    { u: "zwojowe", t: "which", set: "zwojowe", q: "Wyłapują różnice jasności 1–2% i ruch, przewodzą dwa razy szybciej:", a: 2,
      x: "Komórki parasolowe (parasol)." },
    { u: "zwojowe", t: "which", set: "zwojowe", q: "Para niebieski–żółty, maleńkie ciała i duże rozgałęzienia:", a: 3,
      x: "Komórki pyłkowe (bistratified)." },
    { u: "zwojowe", t: "mcq", q: "Jaką część aksonów nerwu wzrokowego tworzą małe komórki zwojowe (karłowate i pyłkowe)?",
      a: ["Ok. 90%", "Ok. 50%", "Ok. 10%", "Ok. 20%"],
      x: "Karłowate ok. 80% + pyłkowe ok. 10% = ok. 90%. Parasolowe to tylko ok. 10%. Francuz wnioskuje, że dane z małych komórek są z jakiegoś powodu ważniejsze dla mózgu.",
      w: ["Małych jest zdecydowanie więcej niż połowa.", "10% to udział samych parasolowych (albo samych pyłkowych).", "20% to za mało: same karłowate to już ok. 80%."] },
    { u: "zwojowe", t: "mcq", q: "Jak szybko przewodzą impulsy grube aksony komórek parasolowych (Francuz)?",
      a: ["Ok. 4 m/s, dwa razy szybciej niż karłowate", "Ok. 2 m/s, dwa razy wolniej niż karłowate", "Ok. 4 m/s, tak samo jak karłowate", "Ok. 400 m/s, sto razy szybciej"],
      x: "Duże komórki mają znacznie grubsze aksony, więc przewodzą impulsy dwukrotnie szybciej, z prędkością ok. 4 m/s.",
      w: ["Odwrotnie: parasolowe są szybsze.", "Są dwa razy szybsze, nie tak samo szybkie.", "To przesada: dwa razy, nie sto razy."] },
    { u: "zwojowe", t: "mcq", q: "Dlaczego szybkość komórek parasolowych jest tak ważna?",
      a: ["Pozwala wykrywać zmiany oświetlenia, czyli ruch", "Pozwala rozróżniać czerwień od zieleni", "Pozwala czytać drobny druk w dołku", "Pozwala widzieć w zupełnej ciemności"],
      x: "Szybkie przewodzenie jest kluczowe dla wykrywania zmian w oświetleniu siatkówki, a te zmiany to ruch.",
      w: ["Czerwień i zieleń różnicują komórki karłowate.", "Drobny druk to sprawa karłowatych i dołka.", "W zupełnej ciemności nie widzi nikt; po ciemku pomagają pręciki."] },
    { u: "zwojowe", t: "mcq", q: "Czym jest wzrokowa detekcja ruchu według Francuza?",
      a: ["Przesuwaniem się wzoru światła i cienia po siatkówce", "Porównywaniem kolorów rzeczy w kolejnych chwilach", "Zmianą grubości soczewki przy zbliżaniu się rzeczy", "Liczeniem mrugnięć podczas patrzenia na scenę"],
      x: "Detekcja ruchu przedmiotu (a także obserwatora) to przesuwanie się tego samego lub podobnego układu światła i cienia po siatkówce w czasie. Tempo i kierunek przesunięć wskazują szybkość i kierunek ruchu.",
      w: ["Kolory nie są tu kluczowe. Parasolowe w ogóle ich nie różnicują.", "To akomodacja, a nie wykrywanie ruchu.", "Tego w tekście nie ma."] },
    { u: "zwojowe", t: "tf", q: "Komórki parasolowe świetnie różnicują długość fal, czyli kolory.", a: false,
      x: "Nie różnicują długości fal wcale. Za to są dużo wrażliwsze od karłowatych na krawędzie między płaszczyznami o podobnej jasności." },
    { u: "zwojowe", t: "mcq", q: "Jaką różnicę jasności sąsiednich płaszczyzn wychwytują już komórki parasolowe?",
      a: ["Już 1–2%", "Dopiero ok. 50%", "Dopiero ok. 90%", "Tylko pełne 100%"],
      x: "Rejestrują różnicę jasności 1–2%, a różnice 10–15% kodują bez problemów (Shapley, Kaplan, Soodak, 1981). Karłowate potrzebują znacznie większej różnicy.",
      w: ["Za dużo: wystarczy 1–2%.", "Za dużo: wystarczy 1–2%.", "Za dużo: wystarczy 1–2%."] },
    { u: "zwojowe", t: "mcq", q: "Dlaczego według Francuza aksonów komórek karłowatych i pyłkowych jest w nerwie tak dużo?",
      a: ["Barwa i rozdzielczość pozwalają oddzielić rzeczy od tła", "Te komórki są dla organizmu najtańsze w budowie", "Odpowiadają za całe widzenie w nocy", "Wykrywają ruch szybciej niż inne komórki"],
      x: "Dzięki ich wrażliwości na barwę i rozdzielczość przestrzenną oddzielamy przedmioty od siebie i od tła. To najbardziej podstawowa funkcja widzenia, stąd tyle tych włókien.",
      w: ["Tekst nie mówi o kosztach budowy.", "W nocy pracują pręciki, a o porze dnia tu nie ma mowy.", "Ruch to domena szybszych komórek parasolowych."] },
    { u: "zwojowe", t: "tf", q: "Im bliżej dołka, tym mniejsze są zarówno komórki karłowate, jak i parasolowe.", a: true,
      x: "Tak. Ich wielkość, a zwłaszcza liczba i rozłożystość drzew dendrytycznych, zależy od odległości od dołka. Bliżej dołka jedne i drugie są mniejsze." },
    { u: "zwojowe", t: "mcq", q: "Co według Francuza może się stać, gdy uszkodzone zostaną komórki odpowiedzialne za jakąś cechę obrazu?",
      a: ["Tej cechy nie dostrzegamy, jakby jej nie było", "Widzimy tę cechę podwójnie i nieostro", "Inne komórki od razu przejmują jej rolę", "Widzimy tę cechę zawsze na czarno"],
      x: "Widzenie danej własności wynika wprost z kondycji neuronalnych „przetworników”. Ich uszkodzenie może sprawić, że cechy po prostu nie dostrzegamy. Por. ślepota na ruch u Kalata.",
      w: ["Tekst nie mówi o podwójnym widzeniu.", "Tekst tego nie twierdzi.", "Brak cechy to nie czerń, tylko po prostu brak."] },
    { u: "zwojowe", t: "mcq", q: "Jakim porównaniem Francuz opisuje komórki zwojowe, które wysyłają do kory sygnał o zieleni?",
      a: ["Wysyłają impulsy niczym alfabetem Morse'a", "Malują zieleń w mózgu jak pędzlem", "Odbijają zieleń do mózgu jak lustro", "Nagrywają zieleń jak kamera filmowa"],
      x: "Komórki wysyłają impulsy „niczym alfabetem Morse'a”: kod, a nie obrazek. Wtedy obserwator doświadcza widzenia czegoś zielonego.",
      w: ["Malowanie sugeruje obrazek w mózgu, a to jest kod.", "Lustro to kopia, a widzenie nie jest kopią.", "Kamera nagrywa obraz, a komórki wysyłają kod."] },
    { u: "zwojowe", t: "cloze", q: "„Obrazy widzimy tak, jak widzimy, ponieważ taki mamy biologiczny ___, a nie dlatego, że one takie są.”", a: ["hardware", "software", "charakter", "gust"],
      x: "Zdanie, którym Francuz zamyka tę część: o tym, jak widzimy, decyduje budowa i fizjologia naszych komórek („biologiczny hardware”).",
      w: ["Software to programy. Francuz mówi o budowie, czyli sprzęcie.", "Charakter to cecha osobowości, a tu chodzi o budowę układu wzrokowego.", "Gust to sprawa upodobań, a tu chodzi o biologię."] },
    { u: "zwojowe", t: "tf", q: "Gdy aktywują się komórki od wykrywania ruchu, mózg od razu wie, czy porusza się coś w scenie, czy sam obserwator.", a: false,
      x: "Z samych tych danych jeszcze nie „wie”. Szybko się „dowie”, analizując dane z innych zmysłów (Francuz)." },
    { u: "zwojowe", t: "type", q: "Najliczniejsze komórki zwojowe (ok. 80% włókien nerwu) to komórki…", a: ["karłowate"],
      x: "Karłowate (midget). Do tego pyłkowe ok. 10% i parasolowe ok. 10%." },

    /* ---------- Barwy (Kalat, s. 150; Francuz, s. 47, 56) ---------- */
    { u: "barwy", t: "mcq", q: "Jakie wrażenie barwne dają najkrótsze widzialne fale świetlne (Kalat)?",
      a: ["Fioletowe", "Czerwone", "Zielone", "Żółte"],
      x: "Najkrótsze widzialne fale (u Kalata ok. 350 nm) dają fiolet, a najdłuższe (ok. 700 nm) czerwień.",
      w: ["Czerwień to najdłuższe fale.", "Zieleń jest pośrodku.", "Żółty jest bliżej długich fal."] },
    { u: "barwy", t: "order", q: "Ułóż barwy od najkrótszych do najdłuższych fal (Kalat).", a: ["fioletowy", "niebieski", "zielony", "żółty", "pomarańczowy", "czerwony"],
      x: "Kalat: fale ok. 350 nm dają fiolet, dłuższe kolejno niebieski, zielony, żółty, pomarańczowy i na końcu czerwony przy ok. 700 nm." },
    { u: "barwy", t: "mcq", q: "Dlaczego pojedynczy neuron nie może naraz przekazać informacji o jasności i barwie (Kalat)?",
      a: ["Może tylko zmieniać tempo impulsów, czyli ma jedną „skalę”", "Neurony reagują wyłącznie na kolor czerwony", "Jasność kodują pręciki, a barwę tylko soczewka", "Barwę przenosi wyłącznie nerw słuchowy"],
      x: "Neuron może jedynie zmieniać częstotliwość potencjałów czynnościowych (albo stopień polaryzacji błony). Jeśli tym sygnalizuje jasność, nie może już sygnalizować barwy, i odwrotnie. Dlatego barwa to wzorzec wielu neuronów.",
      w: ["Tego tekst nie mówi.", "Soczewka niczego nie koduje, tylko skupia światło.", "Nerw słuchowy niesie zawsze dźwięk (prawo Müllera)."] },
    { u: "barwy", t: "tf", q: "Szczury mają jeden typ czopków i nie rozróżniają kolorów.", a: true,
      x: "Tak (Neitz, Jacobs, 1986). Widzenie barw wymaga porównywania aktywności różnych typów czopków, a z jednym typem nie ma czego porównywać." },
    { u: "barwy", t: "mcq", q: "Na czym polega teoria trichromatyczna?",
      a: ["Na porównaniu pobudzeń trzech typów czopków", "Na tym, że każdy kolor ma własny receptor", "Na trzech warstwach komórek w siatkówce", "Na trzech częściach pola recepcyjnego"],
      x: "Percepcja barw opiera się na ocenie względnej siły pobudzeń trzech typów czopków, z których każdy jest najbardziej wrażliwy na inny zakres długości fal. „Trichromatyczna” znaczy „trójkolorowa”.",
      w: ["Kalat pyta właśnie, czy mamy osobny receptor na każdy kolor. Odpowiedź: nie, wystarczą trzy typy.", "Warstw komórek w siatkówce jest więcej i nie o nie tu chodzi.", "Pole recepcyjne ma centrum i otoczkę, a teoria dotyczy typów czopków."] },
    { u: "barwy", t: "mcq", q: "Kto pierwszy postawił hipotezę, że widzenie barw to porównywanie kilku typów receptorów?",
      a: ["Thomas Young", "Hermann von Helmholtz", "Johannes Müller", "Margaret Livingstone"],
      x: "Thomas Young (1773–1829), brytyjski lekarz i wszechstronny uczony (m.in. częściowo odczytał kamień z Rosetty). Teorię udoskonalił później Helmholtz.",
      w: ["Helmholtz teorię udoskonalił, ale nie był pierwszy.", "Müller to prawo specyficznych energii nerwowych.", "Livingstone to współautorka artykułu o czterech ścieżkach analizy."] },
    { u: "barwy", t: "mcq", q: "Na jakiej podstawie Helmholtz ustalił, że typy czopków są trzy?",
      a: ["Relacji obserwatorów (psychofizyki)", "Zdjęć siatkówki spod mikroskopu", "Sekcji mózgu osoby ślepej na barwy", "Pomiarów grubości soczewki"],
      x: "Gromadził obserwacje psychofizyczne, czyli sprawozdania obserwatorów o tym, co widzą.",
      w: ["Tekst mówi o obserwacjach psychofizycznych, nie o mikroskopie.", "Tego w tekście nie ma.", "Grubość soczewki to akomodacja, nie barwy."] },
    { u: "barwy", t: "mcq", q: "Które komórki zwojowe według Francuza różnicują czerwień i zieleń, a które niebieski i żółty?",
      a: ["Karłowate czerwień–zieleń, pyłkowe niebieski–żółty", "Parasolowe czerwień–zieleń, karłowate niebieski–żółty", "Pyłkowe czerwień–zieleń, parasolowe niebieski–żółty", "Wszystkie trzy typy różnicują wszystkie barwy jednakowo"],
      x: "Niemal wszystkie karłowate znakomicie różnicują fale odpowiadające zieleni i czerwieni, ale gorzej radzą sobie z żółcią i błękitem. To zadanie pyłkowych (Dacey, 2000).",
      w: ["Parasolowe w ogóle nie różnicują barw.", "Parasolowe w ogóle nie różnicują barw.", "Francuz wyraźnie dzieli tę pracę."] },
    { u: "barwy", t: "multi", q: "Które teorie widzenia barw Kalat nazywa dwiema najważniejszymi z XIX wieku?", a: ["trichromatyczna (Younga–Helmholtza)", "przeciwstawnych procesów"], o: ["specyficznych energii nerwowych", "hamowania obocznego"],
      x: "Teoria trichromatyczna i teoria przeciwstawnych procesów. Druga jest opisana na s. 151 i dalej, których nie ma na zdjęciach.",
      w: ["To prawo Müllera o nerwach, nie teoria barw.", "To mechanizm wyostrzania krawędzi (Hartline), nie teoria barw."] },
    { u: "barwy", t: "tf", s: "D", q: "★ Teoria przeciwstawnych procesów mówi, że barwy są kodowane parami przeciwieństw: czerwony–zielony, niebieski–żółty, jasny–ciemny.", a: true,
      x: "★ Tak (to wiedza spoza zdjęć, ta część rozdziału jest na brakujących stronach). Pasuje do Francuza: karłowate różnicują czerwień i zieleń, pyłkowe niebieski i żółty." },
    { u: "barwy", t: "type", q: "Teoria widzenia barw oparta na trzech typach czopków to teoria…", a: ["trichromatyczna", "trójchromatyczna"],
      x: "Trichromatyczna, czyli Younga–Helmholtza." }
  ],

  sortDecks: [
    { id: "precik-czopek", title: "Pręcik czy czopek?", sub: "Noc i szarości czy dzień i kolory?",
      cats: ["Pręcik", "Czopek"],
      why: ["Pręciki: kształt walca, czułe na słabe światło, obraz bez barw, najwięcej na obwodzie siatkówki.",
        "Czopki: kształt stożka, jasne światło, barwy i ostrość, najwięcej w dołku środkowym."],
      items: [
        ["kształt walca", 0], ["kształt stożka", 1],
        ["widzi przy słabym świetle", 0, "Pręciki są nieporównywalnie bardziej wrażliwe na światło niż czopki."],
        ["oślepia go silne światło", 0, "Kalat: pręciki reagują na słabe światło, ale silne je oślepia."],
        ["obraz achromatyczny (odcienie szarości)", 0], ["rozróżnia długości fal, czyli barwy", 1],
        ["najwięcej ok. 20° od dołka", 0, "Francuz: maksimum pręcików (ok. 150 tys./mm²) ok. 20° od dołka."],
        ["jedyny receptor w dołku środkowym", 1, "W dołku nie ma pręcików, są same czopki."],
        ["ok. 92 mln (Francuz) albo 120 mln (Kalat)", 0], ["ok. 4,6 mln (Francuz) albo 6 mln (Kalat)", 1],
        ["„śpi” w dzień, pracuje w nocy", 0, "Francuz za Młodkowskim: pręciki „śpią” w dzień, a w nocy są aktywne."],
        ["dzięki niemu widzisz nocą kolorowy neon", 1, "Światło emitowane przez neon jest na tyle silne, że pobudza czopki."],
        ["daje 10 na 1 reakcji w mózgu", 1, "Kalat: na 10 reakcji w mózgu wywołanych przez czopki przypada 1 wywołana przez pręciki."],
        ["pracuje przy widzeniu skotopowym", 0], ["pracuje przy widzeniu fotopowym", 1]] },
    { id: "dolek-obwod", title: "Dołek środkowy czy obwód siatkówki?", sub: "Ostrość czy czułość?",
      cats: ["Dołek", "Obwód"],
      why: ["Dołek środkowy: same czopki, każdy z własną drogą do mózgu. Najostrzejsze widzenie i dobre barwy.",
        "Obwód: przewaga pręcików, wiele receptorów na jedną komórkę. Czułość na słabe światło, słabe szczegóły."],
      items: [
        ["czytanie drobnego druku", 0], ["słaba gwiazda dostrzeżona kątem oka", 1],
        ["jeden czopek → jedna dwubiegunowa → jedna zwojowa", 0], ["setki receptorów na jedną komórkę zwojową", 1],
        ["dobre widzenie barw", 0, "Tabela 6.1: widzenie barwne w centrum dobre (wiele czopków), na obwodzie słabe."],
        ["dobra reakcja na słabe światło", 1],
        ["nie ma tu ani jednego pręcika", 0],
        ["kształt otoczony innymi trudno rozpoznać", 1, "Zakłócający wpływ otoczenia występuje w widzeniu obwodowym, nie w dołku."],
        ["mózg zna dokładne położenie punktu światła", 0],
        ["sumowanie sygnałów z wielu receptorów", 1],
        ["ok. 0,1% powierzchni siatkówki", 0], ["ok. 7 tys. czopków na mm²", 1, "Francuz: poza plamką żółtą średnio ok. 7 tys. czopków na mm², ok. 30 razy mniej niż w dołku."],
        ["tu trafia oś widzenia", 0], ["tu dominują pręciki", 1]] },
    { id: "male-duze", title: "Małe czy duże komórki zwojowe?", sub: "Karłowate i pyłkowe czy parasolowe?",
      cats: ["Małe (karłowate, pyłkowe)", "Duże (parasolowe)"],
      why: ["Małe komórki zwojowe: barwa i rozdzielczość przestrzenna, czyli kształty i szczegóły. Razem ok. 90% włókien nerwu.",
        "Duże komórki parasolowe: drobne różnice jasności, krawędzie, ruch i organizacja przestrzenna. Ok. 10% włókien, dwa razy szybsze."],
      items: [
        ["ok. 90% włókien nerwu wzrokowego", 0], ["ok. 10% włókien nerwu wzrokowego", 1],
        ["różnicują czerwień i zieleń", 0], ["różnicują niebieski i żółty", 0, "To komórki pyłkowe, czyli też małe."],
        ["nie różnicują długości fal", 1], ["wychwytują różnicę jasności 1–2%", 1],
        ["łączą się głównie z centralną częścią siatkówki", 0], ["obejmują większy obszar siatkówki", 1],
        ["grube aksony, ok. 4 m/s", 1], ["wykrywanie ruchu", 1],
        ["ostre rozpoznawanie kształtów", 0], ["oddzielanie przedmiotów od tła", 0, "Francuz: dzięki barwie i rozdzielczości (małe komórki) oddzielamy przedmioty od siebie i od tła."]] },
    { id: "rzeczy-relacje", title: "Kategoria rzeczy czy relacji?", sub: "CO to jest czy GDZIE i JAK się rusza?",
      cats: ["Rzeczy", "Relacji"],
      why: ["Kategoria rzeczy (Francuz): kształt i barwa. Rozpoznajemy, CO to jest, niezależnie od położenia i ruchu.",
        "Kategoria relacji: organizacja przestrzenna i ruch. Zawsze relacja czegoś do czegoś, związana z ciałem obserwatora."],
      items: [
        ["kształt", 0], ["barwa", 0], ["organizacja przestrzenna", 1], ["ruch obiektów", 1],
        ["„to jest czerwone jabłko”", 0], ["„jabłko leży na lewo od kubka”", 1],
        ["„ten kształt to litera A”", 0], ["„samochód zbliża się do mnie”", 1],
        ["odróżniasz kota od psa", 0], ["oceniasz, co jest bliżej, a co dalej", 1]] }
  ],

  minimum: [
    ["Myśl przewodnia", "Nie widzimy świata „jak przez szybę”. Receptory <b>tłumaczą</b> światło na impulsy (<b>transdukcja</b>), a mózg z nich <b>buduje</b> widok. Kolor jest w nas („<b>zieleń jest w nas</b>”, jak rdza w żelazie). W głowie nie ma kopii obrazu ani <b>ludzika</b>, który by ją oglądał (błąd Kartezjusza)."],
    ["Prawo specyficznych energii nerwowych", "<b>Müller, 1838</b>: dany nerw zawsze niesie ten sam rodzaj informacji. Wszystkie nerwy przesyłają tylko <b>potencjały czynnościowe</b>; mózg „widzi” nerw wzrokowy i „słyszy” słuchowy."],
    ["Scena wizualna (Francuz)", "Cztery cechy: <b>kształt, barwa, organizacja przestrzenna, dynamika</b>. Dwie kategorie: <b>rzeczy</b> (kształt i barwa: CO) i <b>relacji</b> (położenie i ruch: GDZIE i JAK). Nie są rozłączne: szybki ruch zaciera kontury i barwy."],
    ["Widzenie to akt kreacji", "Cechy analizują <b>cztery częściowo niezależne ścieżki</b> (Livingstone i Hubel, 1988). Dwie fazy: <b>dekompozycja</b> (rozkład na cechy) i <b>kompozycja</b> (składanie z pomocą pamięci wizualnej). Obraz jest <b>wytwarzany, nie odtwarzany</b>. Kalat: nie ma centralnego procesora; dowód: <b>ślepota na ruch</b>."],
    ["Oko", "Światło: <b>rogówka → źrenica (w tęczówce) → soczewka → siatkówka</b>; twardówka to obudowa. Ostrość przez <b>akomodację</b>: blisko soczewka grubsza, daleko cieńsza. Obraz na siatkówce jest <b>sferyczny, pomniejszony i odwrócony</b>, ale mózgowi to nie przeszkadza, bo nie robi kopii. Oko jest zbudowane jak aparat, ale <b>działa inaczej</b>: siatkówka rejestruje obraz nierówno („zniszczony ekran”)."],
    ["Siatkówka na opak", "Sygnał: <b>receptory → komórki dwubiegunowe → komórki zwojowe → nerw wzrokowy</b>; z boku <b>horyzontalne</b> (hamują) i <b>amakrynowe</b> (≥29 odmian). Światło mija warstwy, zanim dotrze do receptorów. Tam, gdzie wychodzi nerw, jest <b>plamka ślepa</b>: brak receptorów, ok. 15° od dołka w stronę nosa. Nie zauważamy jej, bo widzimy <b>„nic”, a nie czerń</b>, mamy <b>dwoje oczu</b>, a mózg domyka obraz."],
    ["Pręciki i czopki", "<b>Pręciki</b>: walce, słabe światło, bez barw, obwód, ok. 92 mln (F) / 120 mln (K). <b>Czopki</b>: stożki, jasne światło, barwy, ostrość, dołek, ok. 4,6 mln (F) / 6 mln (K). Pręcików ok. <b>20 razy więcej</b>, ale czopki mają bardziej bezpośrednie połączenie z mózgiem (10 : 1 reakcji). Barwnik: <b>11-cis-retinal + opsyna</b>."],
    ["Trzy rodzaje widzenia", "<b>Fotopowe</b> (dzień, czopki), <b>skotopowe</b> (noc, pręciki, szarości), <b>mezopowe</b> (zmierzch, oba systemy, żaden na 100%, groźne dla kierowców). Jasność w <b>kandelach na m²</b>."],
    ["Dołek a obwód", "Oś widzenia trafia w <b>plamkę żółtą</b>, jej środek to <b>dołek środkowy</b>: same czopki (nawet 324 tys./mm²), 0,1% siatkówki. Każdy czopek ma własną drogę przez <b>karłowatą komórkę zwojową</b>, więc <b>ostrość</b>. Na obwodzie wiele receptorów na jedną komórkę (<b>konwergencja</b>), więc <b>czułość</b> na słabe światło. Po ciemku patrz ok. <b>20° obok</b> (słaba gwiazda)."],
    ["Droga do mózgu", "<b>Nerw wzrokowy</b> (ok. 1 mln aksonów) → <b>skrzyżowanie</b> (u człowieka połowa włókien przechodzi na drugą stronę) → <b>trakt</b> → <b>LGN</b> we wzgórzu → <b>promienistość</b> → <b>pierwotna kora wzrokowa</b> (płat potyliczny). Część aksonów idzie do <b>wzgórków górnych</b>. Kora odsyła sygnały do wzgórza (sprzężenie zwrotne)."],
    ["Pola recepcyjne", "<b>Pole widzenia</b>: to, co widać naraz. <b>Pole recepcyjne</b>: kawałek pola widzenia, na który reaguje neuron. Receptor ma pole punktowe, komórka zwojowa ma pole typu <b>centrum–otoczka</b> (obwarzanek). Wyżej na szlaku pola <b>rosną</b>."],
    ["Hamowanie oboczne", "Aktywny neuron hamuje sąsiadów (<b>Hartline, 1949</b>). W siatkówce przez <b>komórki horyzontalne</b> (neuron lokalny: wpływ słabnie z odległością). Skutek: <b>krawędzie podkreślone</b>, bo brzeg jasnego pola jest najmocniej pobudzony, a obszar tuż za nim najsłabiej. Analogia: <b>klocki na żelatynie</b>."],
    ["Trzy rodzaje komórek zwojowych", "<b>Karłowate</b> (ok. 80%): szczegóły i czerwień–zieleń. <b>Pyłkowe</b> (ok. 10%): niebieski–żółty. <b>Parasolowe</b> (ok. 10%): różnice jasności 1–2%, krawędzie, <b>ruch</b>, dwa razy szybsze (ok. 4 m/s). Wniosek Francuza: widzimy tak, bo mamy taki <b>biologiczny hardware</b>."],
    ["Barwy", "Fiolet to najkrótsze fale, czerwień najdłuższe. Jeden neuron nie przekaże naraz jasności i barwy, więc barwa to <b>porównanie wielu neuronów</b>. <b>Teoria trichromatyczna</b> (Young, Helmholtz): <b>trzy typy czopków</b>. Druga teoria z XIX w.: <b>przeciwstawnych procesów</b>."]
  ],

  deep: [
    { q: "Kalat i Francuz podają różne liczby. Które zapamiętać?",
      a: "Pręciki: Kalat ok. 120 mln, Francuz 78–107 mln (średnio ok. 92 mln). Czopki: Kalat ok. 6 mln, Francuz ok. 4,6 mln. Plamka żółta: Kalat ok. 3 × 5 mm, Francuz ok. 1,5 × 2 mm (2,4 mm²). Najkrótsze widzialne fale: Kalat ok. 350 nm, Francuz od ok. 400 nm. Oba teksty zgadzają się co do proporcji: pręcików jest ponad 20 razy więcej. Najbezpieczniej pamiętać proporcję i podawać liczby z zaznaczeniem, kto je podaje (np. „u Kalata ok. 120 mln”).",
      link: "Różnice biorą się z różnych badań i sposobów liczenia (Francuz cytuje Curcio i in., 1990)." },
    { q: "Mięśnie rzęskowe: Francuz kontra podręczniki fizjologii",
      a: "Francuz pisze, że mięśnie rzęskowe, kurcząc się, rozciągają soczewkę (robi się cieńsza), a rozluźniając, pozwalają jej się uwypuklić. ★ W podręcznikach fizjologii opisuje się to odwrotnie: skurcz mięśnia rzęskowego luzuje więzadełka, na których wisi soczewka, i soczewka sama się zaokrągla (patrzenie z bliska). Pewne w obu wersjach jest to, co najważniejsze: blisko soczewka grubsza, daleko cieńsza.",
      link: "Jeśli na zajęciach padnie to pytanie, warto powiedzieć, co pisze Francuz, i zaznaczyć, że fizjologia opisuje mechanizm odwrotnie." },
    { q: "Czy siatkówka „na opak” to błąd projektu?",
      a: "Kalat żartuje, że gdybyśmy sami projektowali oko, wysyłalibyśmy sygnał z receptorów prosto do mózgu. U kręgowców jest odwrotnie: światło przechodzi przez warstwy komórek, a nerw musi przebić siatkówkę, co daje plamkę ślepą. Komórki są przezroczyste, a dwoje oczu i mózg łatają dziurę, więc w praktyce prawie nic nie tracimy. ★ Ośmiornice i kałamarnice mają oko zbudowane „odwrotnie” niż my: receptory od strony światła i bez plamki ślepej.",
      link: "Dobre na dyskusję: ewolucja nie projektuje od zera, tylko przerabia to, co już jest." },
    { q: "Dlaczego nie widzisz swojej plamki ślepej?",
      a: "Trzy powody, wszystkie z czytanki. (1) W plamce ślepej nie widzisz czerni, tylko „nic”, tak jak z tyłu głowy (Kalat). (2) Masz dwoje oczu, a plamki ślepe rzutują się na różne fragmenty sceny (Francuz). (3) Mózg domyka obraz: w teście Kalata z przerwaną linią przerwa znika i linia wydaje się ciągła. Dlatego nawet duże ubytki po jaskrze bywają niezauważone.",
      link: "Zrób test ze streszczenia (sekcja 5), żeby to poczuć na sobie." },
    { q: "280 megapikseli, a jednak oko nie jest aparatem",
      a: "Francuz liczy, że matryca z czopków ze środka dołka miałaby ok. 280 Mpix. Brzmi jak super-aparat, ale to tylko 0,1% siatkówki. Na obwodzie czopków jest ok. 30 razy mniej, a w jednym miejscu nie ma receptorów wcale. Do tego aparat zapisuje każdy piksel tak samo, a oko nie zapisuje nic: zamienia światło w kod, który mózg dopiero interpretuje.",
      link: "To jest sedno porównania „zniszczony ekran kinowy”." },
    { q: "Skąd wiadomo, że ruch analizuje osobny system?",
      a: "Trzy tropy z czytanki. Kalat: ślepota na ruch u ludzi, którzy poza tym dobrze widzą. Francuz: osobna grupa komórek zwojowych (parasolowe) jest wyspecjalizowana w zmianach oświetlenia w czasie i przewodzi dwa razy szybciej. Francuz: uszkodzenie detektorów jakiejś cechy sprawia, że jej po prostu nie widzimy. Do tego cztery częściowo niezależne ścieżki według Livingstone i Hubela.",
      link: "Ten sam argument działa dla koloru: ślepota barw." },
    { q: "Drapieżcy, małpy i banany: skąd nasze receptory?",
      a: "Francuz stawia hipotezę (pisze „najprawdopodobniej”): mamy dużo pręcików po drapieżnych przodkach, którzy polowali nocą i nie potrzebowali kolorów. Widzenie barwne odziedziczyliśmy po małpich przodkach, którzy jedli w ciągu dnia i przyglądali się skórce banana czy mango. Kalat ma podobny wątek przy zwierzętach: sokoły mają więcej receptorów w górnej części siatkówki, szczury w dolnej. Oko jest dopasowane do trybu życia.",
      link: "Na zajęciach warto zaznaczyć, że to hipoteza, a nie pewnik." },
    { q: "„Zieleń jest w nas”, a obrazy i sztuka",
      a: "Francuz pisze książkę o obrazach („Imagia”). Jego wniosek z tej części: obrazy widzimy tak, jak widzimy, bo taki mamy biologiczny hardware, a nie dlatego, że one takie są. Kalat mówi to samo innymi słowami: każdy koloruje swój własny świat. Pytanie do dyskusji: czy dwie osoby, patrząc na ten sam obraz, widzą „to samo”? Biologia mówi: podobnie, ale nie identycznie (np. różna liczba włókien w nerwie wzrokowym).",
      link: "Dobre pytanie otwierające dyskusję na zajęciach." }
  ],

  talk: [
    { q: "Co Kalat chce pokazać przykładem żelaza i rdzy?",
      a: "<p>Że kolor nie jest cechą przedmiotu, tylko tego, kto patrzy. Dla kawałka żelaza woda jest „rdzawa”, ale rdza powstaje w żelazie, a nie w wodzie. Tak samo zieleń liści powstaje dopiero wtedy, gdy odbite od nich światło zadziała na neurony w oku i w mózgu.</p><p>Wniosek: każdy koloruje swój własny świat, a percepcja to wynik pracy układu nerwowego, nie kopia świata.</p>",
      keys: ["kolor nie jest cechą przedmiotu", "zieleń powstaje w nas", "neurony oka i mózgu"], src: "Kalat, s. 144" },
    { q: "Na czym polega błąd Kartezjusza i dlaczego to błąd?",
      a: "<p>Kartezjusz uważał, że mózgowa reprezentacja bodźca musi go przypominać, czyli że do kory płynie „obrazek” widoku. Problem: ktoś musiałby ten obrazek oglądać. To zakłada <b>małego ludzika w głowie</b>, a potem trzeba by wyjaśnić, jak ludzik widzi (mniejszym ludzikiem?).</p><p>Naprawdę kodowanie <b>nie polega na powielaniu kształtu</b>: blat stołu nie musi być „na górze” siatkówki ani głowy. Kalat dodaje, że przy węchu nikt by tego błędu nie popełnił.</p>",
      keys: ["reprezentacja nie przypomina bodźca", "ludzik w głowie", "kod, nie kopia"], src: "Kalat, s. 144" },
    { q: "Wyjaśnij prawo specyficznych energii nerwowych.",
      a: "<p>Opisał je <b>Johannes Müller w 1838 r.</b>: aktywność w danym nerwie zawsze przenosi do mózgu <b>ten sam rodzaj informacji</b>. Nerw nie może raz przesłać „wysokiego C”, a raz „jaskrawożółtego”. Wszystkie nerwy przesyłają tylko <b>potencjały czynnościowe</b>, a o tym, czy czujemy światło, dźwięk czy zapach, decyduje to, <b>który nerw</b> jest aktywny.</p><p>Kalat przyznaje, że to, jak mózg to robi, wciąż jest zagadką.</p>",
      keys: ["Müller 1838", "ten sam rodzaj informacji", "potencjały czynnościowe", "który nerw jest aktywny"], src: "Kalat, s. 144" },
    { q: "Jakie cechy ma scena wizualna według Francuza i w jakie kategorie się układają?",
      a: "<p>Cztery cechy: <b>kształt, barwa, organizacja przestrzenna i dynamika</b> (ruch). Układają się w dwie kategorie: <b>rzeczy</b> (kształt i barwa, czyli co to jest; analiza nie zależy od położenia ani ruchu) i <b>relacji</b> (organizacja przestrzenna i ruch, czyli gdzie i jak się rusza; zawsze względem obserwatora i jego ciała).</p><p>Kategorie <b>nie są rozłączne</b>: przy bardzo szybkim ruchu kontury i barwy się zacierają i zostaje samo wrażenie ruchu.</p>",
      keys: ["kształt, barwa, organizacja przestrzenna, dynamika", "rzeczy i relacje", "nie są rozłączne"], src: "Francuz, s. 40–41" },
    { q: "Dlaczego Francuz nazywa widzenie aktem kreacji?",
      a: "<p>Bo widzenie nie jest kopią obrazu z siatkówki (jak w camera obscura). Zachodzi w <b>dwóch fazach</b>: <b>dekompozycji</b>, w której cechy (kształt, barwa, przestrzeń, ruch) są analizowane osobno przez cztery częściowo niezależne ścieżki, i <b>kompozycji</b>, w której wyniki są składane w całość z pomocą <b>pamięci wizualnej</b>.</p><p>Wynik zawsze trochę odbiega od danych z oka, więc treści widzenia są <b>wytwarzane, a nie odtwarzane</b>.</p>",
      keys: ["dekompozycja", "kompozycja", "pamięć wizualna", "wytwarzane, nie odtwarzane"], src: "Francuz, s. 41–42" },
    { q: "Czym oko przypomina aparat fotograficzny, a czym się od niego różni?",
      a: "<p><b>Podobieństwa:</b> sztywna obudowa (twardówka), układ optyczny z przodu (rogówka, źrenica jak otwór, tęczówka jak przysłona, soczewka), światłoczuła matryca z tyłu (siatkówka), obraz odwrócony.</p><p><b>Różnice:</b> ostrość ustawia się przez <b>zmianę kształtu soczewki</b> (akomodacja), a nie jak w obiektywie; soczewka przepuszcza prawie 100% światła; a przede wszystkim siatkówka <b>nie rejestruje obrazu wszędzie tak samo</b> (Francuz: jak zniszczony ekran kinowy), podczas gdy matryca aparatu rejestruje każdy punkt z tą samą jakością. Budowa podobna, działanie niemal całkiem inne.</p>",
      keys: ["twardówka, soczewka, siatkówka", "akomodacja", "siatkówka rejestruje nierówno", "zniszczony ekran"], src: "Francuz, s. 44–46" },
    { q: "Dlaczego odwrócony obraz na siatkówce nie przeszkadza nam widzieć?",
      a: "<p>Bo <b>układ wzrokowy nie powiela obrazu</b>, tylko go koduje. Kalat porównuje to do komputera, który nie musi trzymać komend z góry ekranu w „górnej” części pamięci. Mózg nie potrzebuje obrazu „we właściwym położeniu”, bo w mózgu w ogóle nie ma obrazka.</p>",
      keys: ["nie powiela obrazu", "kod", "analogia z komputerem"], src: "Kalat, s. 146" },
    { q: "Dlaczego mówi się, że siatkówka jest zbudowana na opak? Jakie to ma skutki?",
      a: "<p>Receptory leżą z <b>tyłu</b> oka, a sygnał idzie do komórek dwubiegunowych i zwojowych, które leżą <b>bliżej środka oka</b>. Światło musi więc przejść przez te warstwy, zanim dotrze do receptorów; na szczęście komórki są przezroczyste.</p><p>Ważniejszy skutek to <b>plamka ślepa</b>: aksony komórek zwojowych muszą jakoś wyjść z oka i robią to w jednym miejscu, w którym nie ma receptorów.</p>",
      keys: ["receptory z tyłu", "światło mija warstwy", "plamka ślepa"], src: "Kalat, s. 146" },
    { q: "Czemu plamka ślepa jest ślepa i dlaczego jej nie zauważamy?",
      a: "<p><b>Ślepa</b>, bo w tym miejscu nie ma ani jednego receptora: tędy wychodzi nerw wzrokowy i naczynia krwionośne (ok. 15° od dołka, od strony nosa, średnica ok. 1,5 mm).</p><p><b>Niezauważona</b>, bo: (1) w ślepym miejscu widzimy „nic”, a nie czerń; (2) mamy dwoje oczu, a plamki ślepe padają na różne fragmenty sceny; (3) mózg domyka obraz (w teście Kalata przerwa w linii znika).</p>",
      keys: ["brak receptorów", "wyjście nerwu wzrokowego", "nic, a nie czerń", "dwoje oczu"], src: "Kalat, pytanie kontrolne 3 (s. 147); Francuz, s. 53",
      trap: "Odpowiedź Kalata do tego pytania jest na s. 156, której nie ma na zdjęciach. Ta odpowiedź jest złożona z treści obu tekstów." },
    { q: "Porównaj pręciki i czopki.",
      a: "<p><b>Pręciki</b>: kształt walca, bardzo czułe na słabe światło (silne je oślepia), nie różnicują barw, najwięcej na obwodzie siatkówki (najwięcej ok. 20° od dołka), ok. 20 razy liczniejsze.</p><p><b>Czopki</b>: kształt stożka, działają w jasnym świetle, różnicują długości fal, czyli barwy, najwięcej w dołku (tam są wyłącznie one), mają bardziej bezpośrednie połączenie z mózgiem (10 reakcji na 1 od pręcików).</p><p>Oba zawierają barwniki z 11-cis-retinalem i opsyną.</p>",
      keys: ["walce / stożki", "słabe / jasne światło", "bez barw / barwy", "obwód / dołek", "20 razy więcej pręcików"], src: "Kalat, s. 149; Francuz, s. 46–47" },
    { q: "Dlaczego słabą gwiazdę łatwiej zobaczyć, patrząc trochę obok niej?",
      a: "<p>Patrząc wprost, kierujesz jej obraz na <b>dołek</b>, gdzie są same czopki, a te słabo reagują na słabe światło. Patrząc obok, przesuwasz obraz na <b>obwód</b>, gdzie przeważają pręciki, czułe na słabe światło, a sygnały z wielu receptorów <b>sumują się</b> na jednej komórce. Francuz: najwięcej pręcików jest ok. 20° od dołka, więc warto patrzeć „kątem oka”.</p>",
      keys: ["dołek = czopki", "obwód = pręciki", "sumowanie (konwergencja)", "ok. 20°"], src: "Kalat, pytanie kontrolne 4 (s. 150); Francuz, s. 52",
      trap: "Odpowiedź Kalata jest na s. 156, której nie ma na zdjęciach. Ta odpowiedź wynika z tabeli 6.1 i tekstu Francuza." },
    { q: "Czym różni się widzenie fotopowe, mezopowe i skotopowe? Dlaczego zmierzch jest groźny dla kierowców?",
      a: "<p><b>Fotopowe</b>: bardzo dobre oświetlenie, pracują głównie czopki (kolory, szczegóły). <b>Skotopowe</b>: słabe oświetlenie, pracują pręciki (szarości). <b>Mezopowe</b>: zmierzch, świt, noc przy księżycu; pracują oba systemy, ale <b>żaden na 100%</b>.</p><p>Dlatego zmierzch jest groźny dla kierowców. Jasność, przy której działa dany system, mierzy się w kandelach na m².</p>",
      keys: ["czopki / pręciki / oba", "żaden na 100%", "kandele na m²"], src: "Francuz, s. 48–49" },
    { q: "Dlaczego w dołku środkowym widzimy najostrzej, a na obwodzie lepiej w ciemności?",
      a: "<p><b>Dołek</b>: same czopki, gęsto upakowane (nawet 324 tys./mm²), mało naczyń i komórek zwojowych na drodze światła, a każdy czopek łączy się z jedną dwubiegunową i jedną <b>karłowatą komórką zwojową</b>, więc ma własną drogę do mózgu. Mózg wie dokładnie, który punkt był oświetlony: <b>ostrość</b>.</p><p><b>Obwód</b>: wiele receptorów (głównie pręcików) na jedną komórkę (<b>konwergencja</b>). Słabe sygnały się sumują: <b>czułość</b>, ale mózg nie zna dokładnego położenia źródła.</p>",
      keys: ["jeden czopek, jedna droga", "karłowate komórki zwojowe", "konwergencja", "ostrość kontra czułość"], src: "Kalat, s. 148–150; Francuz, s. 50–51" },
    { q: "Gdzie zaczyna się i kończy nerw wzrokowy? Opisz drogę do kory.",
      a: "<p>Nerw wzrokowy <b>zaczyna się</b> w siatkówce: tworzą go aksony komórek zwojowych (ok. 1 mln), które wychodzą z oka w plamce ślepej. Dalej: <b>skrzyżowanie wzrokowe</b> (u człowieka połowa włókien z każdego oka przechodzi na drugą stronę), <b>trakt wzrokowy</b>, <b>ciało kolankowate boczne</b> we wzgórzu (tu kończy się większość aksonów), <b>promienistość wzrokowa</b> i <b>pierwotna kora wzrokowa</b> w płacie potylicznym.</p><p>Część aksonów kończy się we <b>wzgórkach górnych</b>, nieliczne m.in. w podwzgórzu (cykl snu i czuwania).</p>",
      keys: ["komórki zwojowe", "skrzyżowanie: połowa", "LGN we wzgórzu", "kora potyliczna", "wzgórki górne"], src: "Kalat, pytanie kontrolne 1 (s. 159); Francuz, s. 43–44",
      trap: "Odpowiedź z książki jest na s. 176, której nie ma na zdjęciach. Ta jest złożona z opisu anatomii z obu tekstów." },
    { q: "Co to jest pole recepcyjne i czy pola rosną, czy maleją wzdłuż szlaku wzrokowego?",
      a: "<p><b>Pole recepcyjne</b> to część pola widzenia, na którą reaguje dany neuron. Dla receptora to po prostu punkt. Komórka zwojowa zbiera sygnały z grupy receptorów, więc jej pole jest <b>połączeniem ich pól</b> i ma kształt obwarzanka (centrum i przeciwna otoczka).</p><p>Pola komórek zwojowych łączą się w pola komórek na kolejnym poziomie, więc wzdłuż szlaku <b>pola rosną</b>.</p>",
      keys: ["część pola widzenia", "receptor: punkt", "centrum–otoczka", "rosną"], src: "Kalat, s. 159–160, pytanie kontrolne 2 (s. 161)",
      trap: "Odpowiedź z książki jest na s. 176, której nie ma na zdjęciach; ta wynika wprost z tekstu na s. 159." },
    { q: "Wyjaśnij hamowanie oboczne na przykładzie oświetlonego pasa siatkówki.",
      a: "<p>Hamowanie oboczne to hamowanie neuronu przez aktywność sąsiednich komórek (Hartline, 1949). Receptor pobudza swoją komórkę dwubiegunową i komórkę horyzontalną, a ta <b>hamuje komórki dwubiegunowe dookoła</b>, tym słabiej, im dalej (to neuron lokalny bez aksonu).</p><p>Gdy oświetlone są receptory 6–10, komórki 6–10 są pobudzone, ale 7–9 są hamowane z obu stron, a 6 i 10 tylko z jednej, więc <b>brzegi są pobudzone najmocniej</b>. Komórki 5 i 11 dostają tylko hamowanie, więc są <b>słabsze niż te w ciemności</b>. Efekt: <b>krawędzie są podkreślone</b>. Analogia: klocki na żelatynie.</p>",
      keys: ["komórki horyzontalne", "hamowanie słabnie z odległością", "brzeg najmocniej", "za brzegiem najsłabiej", "akcent na krawędzie"], src: "Kalat, s. 160–161 (pytania kontrolne 3 i 4)" },
    { q: "Dlaczego na siatce czarnych kwadratów widać szare plamki na skrzyżowaniach białych pasków?",
      a: "<p>To skutek hamowania obocznego. Punkt na <b>skrzyżowaniu</b> białych pasków ma jasne sąsiedztwo <b>z czterech stron</b>, a punkt na pasku między dwoma kwadratami tylko <b>z dwóch</b>. Więcej jasnych sąsiadów to silniejsze hamowanie, więc skrzyżowanie wydaje się ciemniejsze, szare. Plamka znika, gdy spojrzysz prosto na skrzyżowanie.</p>",
      keys: ["hamowanie oboczne", "cztery jasne strony", "silniejsze hamowanie = ciemniej"], src: "Kalat, pytanie kontrolne 5 (s. 161)",
      trap: "Rysunek 6.20 i odpowiedź z s. 176 nie są na zdjęciach. Ta odpowiedź wynika z mechanizmu z s. 160–161. ★ Złudzenie nazywa się siatką Hermanna; to, że plamka znika przy patrzeniu wprost, to wiedza spoza czytanki." },
    { q: "Jakie są trzy rodzaje komórek zwojowych i czym się różnią?",
      a: "<p><b>Karłowate</b> (ok. 80% włókien): małe, łączą się głównie z centrum siatkówki; rozdzielczość, czyli ostre kształty, i barwy czerwona i zielona.</p><p><b>Pyłkowe</b> (ok. 10%): maleńkie ciała, duże rozgałęzienia; barwy niebieska i żółta.</p><p><b>Parasolowe</b> (ok. 10%): duże, z rozbudowanymi dendrytami; nie widzą barw, ale wyłapują różnice jasności 1–2%, obejmują większy obszar, mają grube aksony (ok. 4 m/s, dwa razy szybciej), więc wykrywają <b>ruch</b>, kontury i relacje przestrzenne.</p><p>Wniosek Francuza: obrazy widzimy tak, bo mamy taki <b>biologiczny hardware</b>.</p>",
      keys: ["karłowate 80%: szczegóły, czerwony–zielony", "pyłkowe: niebieski–żółty", "parasolowe: kontrast, ruch, 4 m/s", "biologiczny hardware"], src: "Francuz, s. 54–57" },
    { q: "Jak powstaje wrażenie koloru według czytanki?",
      a: "<p>Barwa zależy od długości fali (fiolet najkrótsze, czerwień najdłuższe). Ale pojedynczy neuron może tylko szybciej albo wolniej wysyłać impulsy, więc nie przekaże naraz jasności i barwy. Kolor wynika z <b>porównania aktywności wielu neuronów</b>, np. różnych typów czopków (szczury mają jeden typ i nie rozróżniają barw).</p><p><b>Teoria trichromatyczna</b> (Younga–Helmholtza): trzy typy czopków, każdy najczulszy na inny zakres fal. Druga teoria z XIX wieku to <b>teoria przeciwstawnych procesów</b>. Francuz dodaje: karłowate komórki zwojowe różnicują czerwień i zieleń, a pyłkowe niebieski i żółty.</p>",
      keys: ["długość fali", "porównanie wielu neuronów", "trzy typy czopków", "Young i Helmholtz"], src: "Kalat, s. 150; Francuz, s. 47, 56" }
  ],

  story: {
    title: "Droga do kory w jednym zdaniu",
    intro: "★ Pomoc pamięciowa spoza czytanki: pierwsze litery słów to kolejne odcinki drogi wzrokowej.",
    ordered: true,
    items: [
      ["Nerw wzrokowy", "Nie"], ["Skrzyżowanie wzrokowe", "Skręcaj,"], ["Trakt wzrokowy", "Tramwaj"],
      ["LGN (ciało kolankowate boczne)", "Leci"], ["Promienistość wzrokowa", "Prosto"], ["Kora wzrokowa", "do Kory."]
    ]
  },

  table: {
    title: "Widzenie centralne a obwodowe (Kalat, tabela 6.1, uzupełniona o liczby Francuza)",
    head: ["Cecha", "Widzenie centralne (dołek)", "Widzenie obwodowe"],
    rows: [
      ["Receptory", "w samym dołku tylko czopki; wokół czopki i pręciki", "udział pręcików rośnie ku obwodowi; najdalej tylko pręciki"],
      ["Gęstość", "nawet 324 tys. czopków/mm² (Francuz)", "ok. 7 tys. czopków/mm²; pręcików do ok. 150 tys./mm² (Francuz)"],
      ["Konwergencja", "jeden lub kilka receptorów na komórkę", "coraz więcej receptorów na jedną komórkę"],
      ["Wrażliwość na jasność", "rozróżnia jasne źródła; słabo reaguje na słabe światło", "dobrze reaguje na słabe światło; gorzej z kontrastami w jasnym"],
      ["Szczegóły", "dobre: mało receptorów na jedną komórkę", "słabe: bardzo wiele receptorów na tę samą komórkę"],
      ["Barwy", "dobre (wiele czopków)", "słabe (mało czopków)"],
      ["Komórki zwojowe", "karłowate: jedna na jeden czopek", "zbierają sygnały z wielu receptorów"]
    ]
  },

  notes: [
    { id: "s0", title: "Mapa czytanki: o czym to jest", html:
      "<div class='plain'><p><b>Dwa teksty, jeden temat: jak to się dzieje, że widzimy.</b> Kalat (podręcznik biopsychologii) oprowadza po oku, siatkówce i drodze do mózgu. Francuz („Imagia”, książka o obrazach) dorzuca liczby i główną myśl: widzenie to nie kopia świata, tylko konstrukcja mózgu.</p></div>" +
      "<h3>Cała czytanka w sześciu zdaniach</h3>" +
      "<ol>" +
      "<li>Kolor, kształt i ruch nie wpadają do głowy gotowe: receptory <b>tłumaczą</b> światło na impulsy, a mózg z nich <b>buduje</b> widok. Zieleń jest w nas, a w głowie nie ma ludzika, który oglądałby obrazek.</li>" +
      "<li>Mózg <b>rozkłada</b> widok na cechy (kształt, barwa, przestrzeń, ruch), bada je osobnymi ścieżkami i <b>składa</b> z pomocą pamięci. Dlatego widzenie to <b>akt kreacji</b>.</li>" +
      "<li>Oko jest zbudowane jak aparat, ale <b>działa inaczej</b>: soczewka zmienia kształt, a siatkówka rejestruje obraz nierówno.</li>" +
      "<li>Siatkówka jest <b>„na opak”</b> (światło mija warstwy komórek) i ma dziurę, <b>plamkę ślepą</b>, której nie zauważamy.</li>" +
      "<li><b>Pręciki</b> widzą po ciemku i bez kolorów (obwód), <b>czopki</b> w dzień, z kolorami i ostro (dołek). Dołek daje ostrość, obwód czułość.</li>" +
      "<li>Sygnał biegnie <b>nerwem wzrokowym</b> przez skrzyżowanie i LGN do kory. Już w siatkówce jest obrabiany: <b>pola recepcyjne</b>, <b>hamowanie oboczne</b> (krawędzie) i <b>trzy typy komórek zwojowych</b> (szczegóły i barwy kontra kontrast i ruch).</li>" +
      "</ol>" +
      "<h3>Jak z tego korzystać</h3>" +
      "<p>Streszczenie idzie <b>tematami</b>, nie tekstami, bo oba teksty mówią o tym samym (oko, siatkówka, receptory). Przy każdej sekcji jest źródło: stuknij numer strony, a zobaczysz zdjęcie oryginału. Ramki „★” to moje dopowiedzenia spoza tekstu.</p>" +
      "<p>Jeśli masz mało czasu: przeczytaj <b>„Najważniejsze w 5 minut”</b> na górze, a potem przećwicz <b>„Na zajęcia”</b> (pytania z wzorcową odpowiedzią). Kalat i Francuz podają czasem <b>różne liczby</b>; zestawienie jest w sekcji „Do przemyślenia”.</p>" },

    { id: "s1", n: 1, title: "Zieleń jest w nas: ogólne prawa percepcji", html:
      "<div class='plain'><p>Nie widzisz świata takim, jaki jest. Twoje receptory tłumaczą światło na impulsy nerwowe, a mózg z tych impulsów buduje to, co przeżywasz jako kolory i kształty. Nie ma w tym żadnej „kopii” świata.</p></div>" +
      "<p class='srcline'>Kalat, <a data-page='k144'>s. 144</a></p>" +
      "<h3>Żelazo i rdza</h3>" +
      "<p>Kalat prosi, żebyś wyobraził sobie, że jesteś kawałkiem żelaza i spada na ciebie kropla wody. Jako żelazo doświadczysz <b>rdzy</b>, więc z twojej perspektywy woda będzie przede wszystkim „rdzawa”. A przecież rdzawość to nie cecha wody, tylko efekt jej reakcji z żelazem.</p>" +
      "<p>Z widzeniem jest tak samo. Liście spostrzegasz jako zielone, ale <b>zieleń nie jest cechą liści</b>, tak jak rdzawość nie jest cechą wody. Zieleń to to, co się dzieje, gdy światło odbite od liści zadziała na neurony z tyłu oka, a potem w mózgu. <b>Każdy koloruje swój własny świat: zieleń jest w nas.</b></p>" +
      "<h3>Receptor tłumaczy energię na sygnał</h3>" +
      "<ul><li>Każdy receptor pochłania <b>tylko jeden rodzaj energii</b> i przekształca go we wzorzec aktywności elektrochemicznej. To <b>transdukcja</b>.</li>" +
      "<li>Receptory wzrokowe reagują nawet na <b>pojedynczy foton</b>.</li>" +
      "<li>Wynik to <b>potencjał receptorowy</b>: lokalna depolaryzacja lub hiperpolaryzacja błony receptora. Im jest większy, tym mocniej receptor pobudza albo hamuje kolejny neuron w drodze do mózgu.</li></ul>" +
      "<p>Pytanie, które Kalat stawia: jak mózg wydobywa sens z informacji płynących z <b>milionów</b> receptorów?</p>" +
      "<h3>Czego w głowie NIE ma</h3>" +
      "<p><b>Kartezjusz</b> (XVII w.) sądził, że reprezentacja bodźca w mózgu musi go <b>przypominać</b>: do kory płynie wzorzec podobny do widoku. Słabość: to zakłada <b>małego ludzika w głowie</b>, który ogląda ten obraz. A jak ten ludzik widzi? Ma mniejszego ludzika w swojej głowie? To niczego nie wyjaśnia.</p>" +
      "<p>Kalat zauważa z przekąsem, że dawni uczeni uniknęliby tego błędu, gdyby zamiast wzroku badali <b>węch</b>: nikt nie wyobraża sobie, że w głowie powstaje mały kwiatek, który wącha mały ludzik.</p>" +
      "<p>Wniosek: <b>kodowanie informacji wzrokowych nie polega na powielaniu kształtu</b> przedmiotu. Gdy widzisz stół, reprezentacja blatu nie musi być w górnej części siatkówki ani w górnej części głowy.</p>" +
      "<h3>Prawo specyficznych energii nerwowych</h3>" +
      "<p>Ważne jest, <b>które</b> neurony są aktywne: ta sama częstotliwość impulsów znaczy co innego w różnych neuronach. <b>Johannes Müller (1838)</b>: wszelka aktywność w danym nerwie zawsze przenosi do mózgu <b>ten sam rodzaj informacji</b>. Mózg „widzi” aktywność nerwu wzrokowego i „słyszy” aktywność nerwu słuchowego.</p>" +
      "<p>Inaczej: żaden nerw nie przesyła raz „wysokiego C”, raz „jaskrawożółtego”, a raz „zapachu cytryny”. Wszystkie przesyłają tylko <b>potencjały czynnościowe</b>. Mózg „w jakiś sposób” interpretuje je jako dźwięk, zapach albo światło, zależnie od nerwu, i Kalat przyznaje, że to „w jakiś sposób” to wciąż nierozstrzygnięta zagadka.</p>" +
      "<!--fig:muller-->" +
      "<div class='key'><p><b>Zapamiętaj:</b> transdukcja (energia → sygnał), potencjał receptorowy (lokalna zmiana napięcia), błąd Kartezjusza (ludzik w głowie), prawo Müllera (nerw = rodzaj wrażenia).</p></div>" },

    { id: "s2", n: 2, title: "Scena wizualna: rzeczy i relacje", html:
      "<div class='plain'><p>Francuz rozkłada każdy widok na cztery cechy: kształt, barwę, rozmieszczenie i ruch. Pierwsze dwie mówią, CO widzisz. Dwie ostatnie mówią, GDZIE to jest i JAK się rusza, zawsze w odniesieniu do ciebie.</p></div>" +
      "<p class='srcline'>Francuz, <a data-page='f40'>s. 40</a>–<a data-page='f41'>41</a> (zdjęcia zaczynają się w połowie zdania; pierwsze trzy cechy były opisane na wcześniejszych stronach)</p>" +
      "<h3>Obserwator jest w centrum</h3>" +
      "<p>Pozycja obserwatora w scenie jest tak uprzywilejowana, że można mówić o jego pozycji <b>egocentrycznej</b> (Goodale i Milner, 2008). Widzi nie tylko rzeczy, ale też <b>relacje między nimi</b>.</p>" +
      "<ul><li>Relacje w płaszczyźnie <b>prostopadłej do osi widzenia</b> (lewo–prawo, góra–dół) ustalamy <b>intuicyjnie</b>: względem stron ciała, naturalnych ram pola widzenia albo ramy obrazu.</li>" +
      "<li>Relacje <b>w głąb</b> (wzdłuż osi widzenia) <b>nie są oczywiste</b>: wymagają specjalnego przetwarzania danych z siatkówki i wiedzy o wskaźnikach głębi.</li></ul>" +
      "<h3>Czwarta cecha: dynamika</h3>" +
      "<p>Dynamika to pochodna <b>szybkości, zmienności, przyspieszenia i trajektorii ruchu</b>, zarówno przedmiotów, jak i obserwatora. Ruch rzeczy rozbija relacje przestrzenne między nimi. Obserwator też się rusza: chodzi (np. ogląda wystawy na spacerze) i przede wszystkim <b>rusza oczami</b>, przenosząc oś widzenia na różne fragmenty sceny. Ruch przedmiotów i obserwatora w najwyższym stopniu komplikuje analizę widoku.</p>" +
      "<p>Uwaga: ruchu <b>wewnątrz kadru obrazu</b> Francuz w swojej książce nie omawia; ruch widza, zwłaszcza jego oczu, owszem.</p>" +
      "<h3>Dwie kategorie</h3>" +
      "<div class='tscroll'><table><thead><tr><th>Kategoria</th><th>Cechy</th><th>Pytanie</th></tr></thead><tbody>" +
      "<tr><th>Rzeczy</th><td>kształt, barwa</td><td>CO to jest? Analiza nie zależy od tego, gdzie rzecz jest ani czy się rusza.</td></tr>" +
      "<tr><th>Relacji</th><td>organizacja przestrzenna, ruch</td><td>GDZIE i JAK? Zawsze relacja czegoś (co ma kształt i barwę) do czegoś, związana z ciałem i ruchem obserwatora.</td></tr>" +
      "</tbody></table></div>" +
      "<!--fig:rzeczy-->" +
      "<h3>Kategorie się zazębiają</h3>" +
      "<p>Nie są rozłączne. Gdy obiekt albo obserwator porusza się bardzo szybko, <b>kontury i barwy się zacierają</b> i zostaje doświadczenie ruchu, który nie jest ruchem rzeczy o określonym kształcie. Takich doświadczeń przybywa (szybkie podróże, media elektroniczne), a <b>ewolucja nie wykształciła jeszcze sprawnych mechanizmów</b> radzenia sobie z nimi. Najlepszy dowód: złudzenia ruchu (np. na stronie michaelbach.de) i złudzenia, którym ulegają piloci samolotów odrzutowych (Bednarek, 2011).</p>" },

    { id: "s3", n: 3, title: "Widzenie to akt kreacji", html:
      "<div class='plain'><p>Mózg nie robi zdjęcia. Najpierw rozbiera widok na części (kształt, kolor, położenie, ruch) i każdą bada osobno. Potem skleja wyniki i dokłada to, co pamięta. To, co w końcu widzisz, jest jego wytworem, a nie wierną kopią obrazu z oka.</p></div>" +
      "<p class='srcline'>Francuz, <a data-page='f41'>s. 41</a>–<a data-page='f42'>42</a>; Kalat, <a data-page='k157'>s. 157</a></p>" +
      "<h3>Cztery ścieżki</h3>" +
      "<p>Francuz poleca artykuł <b>Margaret Livingstone i Davida Hubela</b> (Hubel to noblista z 1981 r.) z „Science”, 1988. Choć ma już ćwierć wieku, większość jego hipotez się potwierdziła. Główne ustalenie: od siatkówki do mózgu cechy sceny (<b>kształt, barwa, orientacja przestrzenna 2D i 3D, ruch</b>) analizują <b>cztery częściowo niezależne ścieżki</b> (podsystemy) neuronalne. Ich wyniki są potem interpretowane w świetle wcześniejszych doświadczeń wzrokowych.</p>" +
      "<h3>Dwie fazy każdego aktu widzenia</h3>" +
      "<ol class='walk'>" +
      "<li><b>Dekompozycja</b><span class='where'>faza 1</span><span>Analityczna i względnie niezależna analiza cech sceny, po wyabstrahowaniu ich z obrazu na siatkówce.</span><span class='chk'>co tu się dzieje? Rozkład na cechy.</span></li>" +
      "<li><b>Kompozycja</b><span class='where'>faza 2</span><span>Integrowanie (syntetyzowanie) wyników z fazy pierwszej, z uwzględnieniem danych zapisanych w <b>pamięci wizualnej</b>.</span><span class='chk'>czego używa oprócz danych z oka? Pamięci.</span></li>" +
      "</ol>" +
      "<!--fig:kreacja-->" +
      "<p>Skoro w każdym akcie widzenia są obie fazy, wynik <b>zawsze</b> (mniej lub bardziej) <b>odbiega od danych źródłowych</b>. Treści widzenia są raczej <b>WYTWARZANE</b> przez system wzrokowy niż <b>ODTWARZANE</b> z obrazów siatkówkowych. Widzenie to więc <b>akt kreacji</b>: konstruowanie obrazu rzeczywistości z tego, co zarejestrowały fotoreceptory. Nie jest to proste odzwierciedlenie jak w camera obscura.</p>" +
      "<h3>To samo u Kalata</h3>" +
      "<p>Kalat prosi, żeby to powtórzyć, bo łatwo zapomnieć: <b>w głowie nie ma ani małego ludzika, ani centralnego procesora</b>, który widziałby naraz wszystkie aspekty bodźca. Spostrzegamy, czym jest przedmiot, gdzie jest, jaki ma kolor i jak się porusza, a <b>różne części kory przetwarzają te aspekty do pewnego stopnia niezależnie</b>.</p>" +
      "<p>Dowód: <b>ślepota na ruch</b>. Niektórzy ludzie, którzy poza tym dobrze widzą, nie zauważają, że przedmiot się porusza, albo nie potrafią ocenić jego kierunku i prędkości. Pod koniec XX wieku zaskoczyło to psychologów tak, jak kiedyś odkrycie ślepoty barw. Pytanie „jak można nie widzieć ruchu?” przypomina XVII-wieczne „jak można coś widzieć, nie widząc koloru?”.</p>" },

    { id: "s4", n: 4, title: "Oko: jak aparat, ale nie do końca", html:
      "<div class='plain'><p>Oko ma obudowę, otwór na światło, soczewkę i światłoczułą „matrycę”, jak aparat. Ale ostrość ustawia inaczej (soczewka zmienia kształt), a jego „matryca”, siatkówka, w jednych miejscach jest świetna, a w innych słaba. Obraz na niej jest do góry nogami i nikomu to nie przeszkadza.</p></div>" +
      "<p class='srcline'>Francuz, <a data-page='f43'>s. 43</a>–<a data-page='f46'>46</a>; Kalat, <a data-page='k146'>s. 146</a></p>" +
      "<p>Francuz nazywa oko (układ optyczny i siatkówkę) razem z ciałem kolankowatym bocznym <b>wczesnym systemem analizy zawartości sceny wizualnej</b>. Rejestracja światła w siatkówce to pierwszy etap tej analizy.</p>" +
      "<h3>Droga światła przez oko</h3>" +
      "<ol class='walk'>" +
      "<li><b>Rogówka</b><span class='where'>na samym przodzie</span><span>Przezroczysta, najbardziej wysunięta część oka. Jak twardówka chroni oko przed uszkodzeniem, a do tego działa jak filtr ochronny i soczewka o <b>stałym kształcie</b> (stałej ogniskowej).</span></li>" +
      "<li><b>Źrenica i tęczówka</b><span class='where'>za rogówką</span><span>Źrenica to otwór, przez który wpada światło. Jej średnicę reguluje <b>tęczówka</b>, czyli przysłona.</span></li>" +
      "<li><b>Soczewka</b><span class='where'>za tęczówką</span><span>„Kryształ biologiczny” (Ralf Dahm, 2007). Różni się od obiektywu dwiema rzeczami: przepuszcza <b>niemal 100% światła</b> i jest <b>zmiennoogniskowa</b>, więc pozwala ostro widzieć rzeczy w różnej odległości.</span></li>" +
      "<li><b>Siatkówka</b><span class='where'>na tylnej ścianie</span><span>Światłoczuła matryca, wyściela <b>ok. 70%</b> wnętrza gałki. Obraz na niej jest <b>sferyczny, pomniejszony i odwrócony</b> „do góry nogami”.</span></li>" +
      "</ol>" +
      "<!--fig:oko-->" +
      "<p><b>Twardówka</b> to szczelna, sztywna obudowa oka (jak korpus aparatu): chroni gałkę przed urazami i utrzymuje jej kształt. Na rysunku Kalata widać też <b>ciało szkliste</b> wypełniające wnętrze oka i <b>mięsień rzęskowy</b>, który reguluje krzywiznę soczewki.</p>" +
      "<h3>Akomodacja: jak oko ustawia ostrość</h3>" +
      "<p>Soczewka wisi na <b>mięśniach rzęskowych</b>. Ostrość zapewnia <b>zmiana kształtu soczewki</b>: <b>im bliżej obiekt, tym grubsza soczewka, a im dalej, tym cieńsza</b>. Grubsza soczewka załamuje promienie pod większym kątem. To <b>akomodacja</b>, a jej mechanizm w niczym nie przypomina zmiany ogniskowej w obiektywie.</p>" +
      "<!--fig:akomodacja-->" +
      "<aside class='extra'><p>Francuz pisze, że mięśnie rzęskowe, <i>kurcząc się</i>, rozciągają soczewkę (robi się cieńsza). W podręcznikach fizjologii opisuje się to odwrotnie: skurcz mięśnia luzuje więzadełka i soczewka sama się zaokrągla (do patrzenia z bliska). Najważniejsza zasada (blisko grubsza, daleko cieńsza) jest w obu wersjach taka sama.</p></aside>" +
      "<h3>Obraz do góry nogami? Żaden problem</h3>" +
      "<p>Kalat: światło z lewej pada na <b>prawą</b> połowę siatkówki, z góry na <b>dolną</b>. Obraz jest odwrócony jak w aparacie, ale to <b>nie przeszkadza</b>, bo układ wzrokowy <b>nie duplikuje obrazu</b>. Komputer nie musi trzymać komend z góry ekranu w „górnej” części pamięci, a mózg nie potrzebuje obrazu „we właściwym położeniu”.</p>" +
      "<h3>Podobna budowa, inne działanie</h3>" +
      "<p>Jeśli układ optyczny jest sprawny, cały obraz pada na siatkówkę <b>ostro i wyraźnie</b>. Ale siatkówka <b>nie odwzorowuje go wszędzie tak samo dobrze</b>. Francuz porównuje ją do <b>mocno zniszczonego ekranu kinowego</b>: pofałdowanego, zabrudzonego, miejscami podziurawionego. Matryca aparatu rejestruje każdy parametr światła z tą samą jakością, a fotoreceptory nie. Wniosek: oko i aparat mają wiele wspólnych cech budowy, ale <b>działają niemal całkowicie inaczej</b> (Duchowski, 2007). Dlaczego? Odpowiedź jest w sekcjach o receptorach i o dołku.</p>" },

    { id: "s5", n: 5, title: "Siatkówka zbudowana na opak i plamka ślepa", html:
      "<div class='plain'><p>Receptory siedzą na samym tyle oka, „plecami” do światła. Sygnał idzie od nich do przodu, przez kolejne warstwy komórek, a kable z ostatniej warstwy muszą przebić siatkówkę, żeby wyjść z oka. W tym miejscu nie ma receptorów: to plamka ślepa.</p></div>" +
      "<p class='srcline'>Kalat, <a data-page='k146'>s. 146</a>–<a data-page='k147'>147</a>, <a data-page='k157'>157</a>–<a data-page='k158'>158</a>; Francuz, <a data-page='f53'>s. 53</a></p>" +
      "<h3>Kto jest kim w siatkówce</h3>" +
      "<ol class='walk'>" +
      "<li><b>Receptory (pręciki i czopki)</b><span class='where'>z tyłu oka</span><span>Łapią światło. Tworzą synapsy z komórkami <b>dwubiegunowymi</b> i <b>horyzontalnymi</b>.</span></li>" +
      "<li><b>Komórki dwubiegunowe</b><span class='where'>bliżej środka oka</span><span>Dostają sygnał od receptorów i oddają go komórkom zwojowym. Nazwa: wypustki wychodzą z dwóch przeciwległych końców (biegunów).</span></li>" +
      "<li><b>Komórki zwojowe</b><span class='where'>najbliżej środka oka</span><span>Ich <b>aksony</b> grupują się, splatają i biegną do mózgu jako <b>nerw wzrokowy</b>.</span></li>" +
      "</ol>" +
      "<!--fig:warstwy-->" +
      "<ul><li><b>Komórki horyzontalne</b> leżą w poprzek: receptory je pobudzają, a one tworzą <b>połączenia hamujące</b> z komórkami dwubiegunowymi (więcej w sekcji o hamowaniu obocznym).</li>" +
      "<li><b>Komórki amakrynowe</b> dostają informacje od komórek dwubiegunowych i przesyłają je do innych dwubiegunowych, amakrynowych lub zwojowych. Są liczne i różnorodne: <b>co najmniej 29 odmian</b>, co daje wiele możliwości złożonego przetwarzania.</li></ul>" +
      "<h3>Dlaczego „na opak”</h3>" +
      "<p>Kalat: gdybyśmy sami projektowali oko, wysyłalibyśmy sygnał z receptorów prosto do mózgu. U kręgowców receptory z tyłu oka wysyłają go do komórek położonych <b>bliżej środka oka</b>. Skutki:</p>" +
      "<ul><li>Światło musi przejść przez warstwy komórek zwojowych i dwubiegunowych, zanim dotrze do receptorów. Komórki są <b>bardzo przezroczyste</b>, więc go nie zniekształcają.</li>" +
      "<li>Ważniejszy skutek: <b>plamka ślepa</b>. Aksony komórek zwojowych wychodzą z oka w jednym punkcie, razem z naczyniami krwionośnymi. Tam <b>nie ma receptorów</b>. Każdy z nas jest więc w części oka niewidomy.</li></ul>" +
      "<h3>Plamka ślepa w liczbach (Francuz)</h3>" +
      "<p>Mniej więcej <b>15° od dołka</b>, w części siatkówki <b>od strony nosa</b>, jest dosłownie „dziura” o średnicy ok. <b>1,5 mm</b> i powierzchni ok. <b>1,2 mm²</b>. To <b>plamka ślepa</b> (blind spot), czyli <b>tarcza nerwu wzrokowego</b> (optic disc). Nie ma tam ani jednego fotoreceptora. Przechodzi tędy nerw wzrokowy i naczynia, które dotleniają komórki wewnątrz oka. Obraz, który tam pada, trafia w pustkę.</p>" +
      "<h3>Sprawdź na sobie</h3>" +
      "<p>Test jest tuż pod tym akapitem. Zamknij <b>prawe</b> oko, lewym patrz na krzyżyk, a ekran powoli przybliżaj i oddalaj. W pewnej odległości kropka zniknie, a przerwa w linii się „zaklei”. U Kalata: zamknij lewe oko i patrz prawym na „o”; przy ok. 25 cm znika „x”, a w drugiej części rysunku <b>znika brakujący fragment</b>, więc linia wydaje się ciągła. Mózg nie pokazuje dziury, tylko domyka obraz.</p>" +
      "<!--fig:plamka-->" +
      "<h3>Dlaczego jej nie zauważasz</h3>" +
      "<ul><li><b>„Nic”, a nie czerń.</b> W ślepym miejscu nie widzisz czarnej plamy, tylko po prostu nic, tak jak z tyłu głowy. Dlatego ludzie z <b>jaskrą</b>, która zniszczyła część nerwu wzrokowego, często nie zauważają nawet dużych ubytków (Kalat).</li>" +
      "<li><b>Dwoje oczu.</b> Oczy są od siebie odsunięte, więc w plamkę ślepą każdego z nich padają nieco inne fragmenty sceny. Czego nie widzi jedno, widzi drugie (Francuz).</li></ul>" },

    { id: "s6", n: 6, title: "Pręciki i czopki: dzień, noc i zmierzch", html:
      "<div class='plain'><p>Masz dwa rodzaje receptorów. Pręciki to „nocna zmiana”: bardzo czułe, ale ślepe na kolory. Czopki to „dzienna zmiana”: potrzebują dużo światła, ale dają kolory i ostrość. O zmierzchu pracują obie zmiany naraz i żadna dobrze.</p></div>" +
      "<p class='srcline'>Francuz, <a data-page='f46'>s. 46</a>–<a data-page='f48'>48</a>, <a data-page='f52'>52</a>; Kalat, <a data-page='k149'>s. 149</a>–<a data-page='k150'>150</a></p>" +
      "<div class='tscroll'><table><thead><tr><th>Cecha</th><th>Pręciki</th><th>Czopki</th></tr></thead><tbody>" +
      "<tr><th>Kształt</th><td>walce</td><td>stożki</td></tr>" +
      "<tr><th>Liczba</th><td>78–107 mln, średnio ok. 92 mln (Francuz); ok. 120 mln (Kalat)</td><td>ok. 4,6 mln (Francuz); ok. 6 mln (Kalat)</td></tr>" +
      "<tr><th>Gdzie najwięcej</th><td>na obwodzie; najwięcej ok. 20° od dołka; w dołku wcale</td><td>w dołku środkowym i wokół niego</td></tr>" +
      "<tr><th>Światło</th><td>nieporównywalnie czulsze; silne światło je oślepia</td><td>słabe w słabym świetle, silne w jasnym</td></tr>" +
      "<tr><th>Barwy</th><td>nie różnicują; obraz achromatyczny (szarości)</td><td>reagują różnie na różne długości fal: barwy</td></tr>" +
      "<tr><th>Połączenie z mózgiem</th><td>wiele pręcików na jedną komórkę</td><td>bardziej bezpośrednie; w mózgu 10 reakcji od czopków na 1 od pręcików (Masland, 2001)</td></tr>" +
      "<tr><th>Pora</th><td>„śpią” w dzień, pracują w nocy</td><td>pracują w dzień, w nocy „zasypiają”</td></tr>" +
      "</tbody></table></div>" +
      "<!--fig:receptory-->" +
      "<p>Oba teksty: pręcików jest <b>ponad 20 razy więcej</b>. Francuz: siatkówka jest więc dużo gorzej „wyposażona sprzętowo” do kolorów w pełnym świetle niż do widzenia czarno-białego i po ciemku.</p>" +
      "<h3>Jak receptor łapie światło (Kalat)</h3>" +
      "<p>Pręciki i czopki zawierają <b>barwniki wzrokowe</b>: substancje, które pod wpływem światła wydzielają energię. Składają się z <b>11-cis-retinalu</b> (pochodnej witaminy A) i białka <b>opsyny</b>. W ciemności 11-cis-retinal się nie zmienia; światło niemal natychmiast zamienia go w <b>trans-retinal</b>, a powstała energia steruje aktywnością komórki. Światło jest przy tym pochłaniane, a nie odbija się wewnątrz oka.</p>" +
      "<h3>Trzy rodzaje widzenia (Francuz)</h3>" +
      "<ul><li><b>Fotopowe</b>: bardzo dobre oświetlenie, pracują głównie <b>czopki</b>.</li>" +
      "<li><b>Skotopowe</b>: słabe oświetlenie, pracują <b>pręciki</b>.</li>" +
      "<li><b>Mezopowe</b>: zmierzch, wczesny ranek, księżycowa noc. Im ciemniej, tym słabsze czopki i aktywniejsze pręciki; im jaśniej, tym odwrotnie. Pracują <b>oba systemy, ale żaden na 100%</b>, dlatego to szczególnie <b>niebezpieczny czas dla kierowców</b>.</li></ul>" +
      "<!--fig:swiatlo-->" +
      "<p>Jasność, przy której działa dany system, mierzy się w <b>kandelach na m²</b>. Jedna kandela to mniej więcej światło o zmierzchu, tuż po zachodzie słońca. Obrazy oglądamy głównie czopkami, dlatego Francuz poświęca im najwięcej uwagi.</p>" +
      "<h3>Przykłady z życia</h3>" +
      "<ul><li>Po ciemku kontrolę przejmują pręciki, więc <b>przestajemy rozróżniać barwy</b>, a rozróżniamy tylko odcienie szarości.</li>" +
      "<li>To dotyczy barw powierzchni, które <b>odbijają</b> światło. <b>Neony</b>, które światło <b>emitują</b>, widzimy w nocy w kolorze, bo ich światło pobudza czopki.</li>" +
      "<li>W ciemnej ulicy możesz nie odróżnić <b>zielonego auta od czerwonego</b>: oba lakiery odbijają mniej więcej tyle samo światła, a pręciki zareagują na nie podobnie.</li></ul>" +
      "<h3>Skąd taki układ? (hipoteza Francuza)</h3>" +
      "<p>Najprawdopodobniej to pozostałość po <b>drapieżnych przodkach</b>, którym nie zależało na kolorach i którzy woleli polować nocą. <b>Widzenie barwne</b> odziedziczyliśmy po <b>małpich przodkach</b>, którzy jedli w dzień i przyglądali się barwie skórki banana czy mango, choćby dla dobra trawienia.</p>" },

    { id: "s7", n: 7, title: "Dołek środkowy i obwód: ostrość kontra czułość", html:
      "<div class='plain'><p>Środek siatkówki, dołek, to „aparat 280 megapikseli”: same czopki, każdy z prywatnym kablem do mózgu. Reszta siatkówki ma dużo mniej czopków, za to dużo pręcików, i to podłączonych grupami. Dołek widzi szczegóły, obwód widzi po ciemku.</p></div>" +
      "<p class='srcline'>Francuz, <a data-page='f49'>s. 49</a>–<a data-page='f52'>52</a>; Kalat, <a data-page='k148'>s. 148</a>–<a data-page='k150'>150</a></p>" +
      "<h3>Dwie osie oka</h3>" +
      "<p><b>Oś optyczna</b> biegnie przez środki rogówki, źrenicy i soczewki. <b>Oś widzenia</b> łączy miejsce, na które patrzysz, z miejscem największego skupiska czopków. Jest nachylona do osi optycznej o <b>ok. 5°</b> (5–7°).</p>" +
      "<h3>Plamka żółta, dołek, dołeczek</h3>" +
      "<ul><li><b>Plamka żółta</b> (macula): tam, gdzie oś widzenia przecina siatkówkę. U Francuza elipsa ok. 1,5 × 2 mm (ok. 2,4 mm²), ponad pół miliona czopków, ponad 200 tys. na mm². U Kalata ok. 3 × 5 mm. Dla porównania: na 1 mm² ekranu LCD 1920 × 1200 są 3–4 piksele, czyli <b>50 tys. razy mniej</b>.</li>" +
      "<li><b>Dołek środkowy</b> (centralny, fovea): obszar ok. 1 mm² w środku plamki, wyspecjalizowany w ostrym, szczegółowym widzeniu. Średnio ok. 199 tys. czopków/mm².</li>" +
      "<li><b>Dołeczek</b> (foveola): w samym środku dołka nawet <b>324 tys. czopków/mm²</b>.</li></ul>" +
      "<p>Gdyby z czopków ze środka dołka zbudować matrycę aparatu 36 × 24 mm, miałaby ona nie 12 czy 30, tylko <b>ok. 280 megapikseli</b>.</p>" +
      "<h3>Ale to tylko maleńki kawałek</h3>" +
      "<p>Dołek to zaledwie <b>0,1%</b> powierzchni siatkówki, a plamka żółta <b>0,3%</b>. Nie ma tam pręcików, a czopki w tym obszarze to 1/8 wszystkich czopków. Pozostałe 4–5 mln czopków rozkłada się na 99,7% siatkówki: średnio ok. <b>7 tys. na mm²</b>, czyli ok. <b>30 razy mniej</b> niż w dołku. Skutek: zależnie od tego, gdzie pada światło, obraz jest przetwarzany z <b>inną rozdzielczością</b>. Z miejsc gęstych mózg ma dużo więcej danych.</p>" +
      "<h3>Gdzie są pręciki</h3>" +
      "<p>W dołku ich nie ma. Pojawiają się na obrzeżach plamki żółtej i im dalej, tym ich więcej: maksimum <b>ok. 20° od dołka</b> (ok. 150 tys./mm², tyle co czopków w plamce), a ku brzegom siatkówki ubywa ich do ok. 75 tys./mm². Dlatego w słabym świetle lepiej widać coś <b>„kątem oka”</b>, przesuwając wzrok o ok. 20°.</p>" +
      "<!--fig:gestosc-->" +
      "<h3>Dlaczego dołek widzi ostro (Kalat)</h3>" +
      "<ol><li>Przy dołku jest bardzo mało naczyń krwionośnych i komórek zwojowych, więc nic nie zakłóca światła.</li>" +
      "<li>Receptory są gęsto upakowane.</li>" +
      "<li>Każdy czopek łączy się z <b>jedną</b> komórką dwubiegunową, a ta z <b>jedną</b> komórką zwojową. Te komórki zwojowe to <b>karłowate komórki zwojowe</b>: małe, każda dostaje informację od pojedynczego czopka. Każdy czopek w dołku ma więc bezpośrednie połączenie z mózgiem, który może dokładnie określić położenie każdego punktu światła.</li></ol>" +
      "<h3>Obwód: czułość zamiast ostrości</h3>" +
      "<p>Im dalej od środka, tym więcej receptorów przypada na jedną komórkę dwubiegunową i zwojową (<b>konwergencja</b>). Mózg nie wie dokładnie, skąd przyszło światło, ale <b>sumowanie</b> zwiększa wrażliwość na bardzo słabe światło. W skrócie: <b>dołek = ostrość, obwód = czułość</b>. Stąd pytanie kontrolne Kalata: słabą gwiazdę łatwiej zobaczyć, gdy patrzysz nieco obok niej.</p>" +
      "<!--fig:zbieznosc-->" +
      "<p>Jeszcze jedno: na obwodzie kształt rozpoznajesz dużo lepiej, gdy jest <b>sam</b>, niż gdy otaczają go inne bodźce (Parkes i in., 2001). Patrząc na znak obok, łatwo dostrzeżesz kierunek ukośnych kresek; gdy kreski są otoczone innymi znakami, nie dostrzeżesz go. Ten zakłócający wpływ znika, gdy bodziec pada na dołek.</p>" +
      "<h3>Zwierzęta</h3>" +
      "<ul><li>Wiele ptaków ma <b>dwa dołki</b> w każdym oku: jeden do przodu, drugi w bok, więc widzą szczegóły także na peryferiach.</li>" +
      "<li><b>Ptaki drapieżne</b> mają więcej receptorów w <b>górnej</b> części siatkówki, więc dobrze widzą w dół, gdy szybują. Żeby spojrzeć w górę, muszą odwrócić głowę (sowa na rysunku Kalata, sokół z początku rozdziału).</li>" +
      "<li><b>Szczury</b>, które padają ofiarą drapieżników, mają więcej receptorów w <b>dolnej</b> części, więc lepiej widzą to, co nad nimi.</li>" +
      "<li>„Sokoli wzrok”: u wielu ptaków oczy zajmują większą część głowy, u ludzi zaledwie 5%.</li></ul>" +
      "<p>Pełne porównanie środka i obwodu jest w tabeli niżej („Widzenie centralne a obwodowe”).</p>" },

    { id: "s8", n: 8, title: "Droga do mózgu", html:
      "<div class='plain'><p>Kable z oka (nerw wzrokowy) spotykają się z kablami z drugiego oka, połowa się krzyżuje i wszystko jedzie do „stacji przesiadkowej” we wzgórzu (LGN), a stamtąd do kory z tyłu głowy. Kora odpisuje wzgórzu, więc to nie jest ulica jednokierunkowa.</p></div>" +
      "<p class='srcline'>Kalat, <a data-page='k157'>s. 157</a>, <a data-page='k159'>159</a>; Francuz, <a data-page='f43'>s. 43</a>–<a data-page='f44'>44</a>, <a data-page='f55'>55</a></p>" +
      "<h3>Odcinek po odcinku</h3>" +
      "<ol class='walk'>" +
      "<li><b>Nerw wzrokowy</b><span class='where'>z oka do skrzyżowania</span><span>Aksony komórek zwojowych, jak druty telefoniczne. Ok. <b>1 mln</b> aksonów (od 770 tys. do 1,7 mln), jak kabel z miedzianych drucików. Wychodzi z oka w plamce ślepej i biegnie wzdłuż dolnej powierzchni mózgu.</span></li>" +
      "<li><b>Skrzyżowanie wzrokowe</b><span class='where'>pod mózgiem</span><span>Nerwy obu oczu się spotykają. U człowieka <b>połowa</b> aksonów z każdego oka przechodzi na drugą stronę mózgu; połowa z lewego oka łączy się z połową z prawego i razem biegną do jednej półkuli. Odsetek zależy od gatunku: u zwierząt z oczami po bokach głowy (króliki, świnki morskie) krzyżują się prawie wszystkie.</span></li>" +
      "<li><b>Trakt wzrokowy</b><span class='where'>od skrzyżowania do LGN</span><span>Tak Francuz nazywa ten odcinek.</span></li>" +
      "<li><b>Ciało kolankowate boczne (LGN)</b><span class='where'>we wzgórzu</span><span>Jądro wzgórza wyspecjalizowane w widzeniu; u niektórych gatunków przypomina kolano. Pierwsza struktura w mózgu, do której dociera większość informacji z oczu. Wysyła aksony do innych części wzgórza i do kory wzrokowej.</span></li>" +
      "<li><b>Promienistość wzrokowa</b><span class='where'>od LGN do kory</span><span>Aksony komórek z LGN. Z grubsza zamyka pierwszy etap przesyłania i przetwarzania danych na szlaku wzrokowym.</span></li>" +
      "<li><b>Pierwotna kora wzrokowa</b><span class='where'>płat potyliczny</span><span>Primary visual cortex, czyli kora prążkowana (striate cortex).</span></li>" +
      "</ol>" +
      "<!--fig:droga-->" +
      "<h3>Boczne drogi i sprzężenie zwrotne (Kalat)</h3>" +
      "<ul><li>Niektóre aksony idą do <b>wzgórków górnych</b>, a nieliczne do kilku innych obszarów, m.in. do części <b>podwzgórza</b>, która steruje <b>cyklem snu i czuwania</b>.</li>" +
      "<li>Kora wysyła wiele aksonów <b>z powrotem do wzgórza</b>, więc sygnały ze wzgórza do kory są stale modyfikowane przez informacje zwrotne (Guillery, Feig, van Lieshout, 2001).</li>" +
      "<li>Rozwój kory zależy od tego, ile sygnałów dostaje ze wzgórza (Sur, Leamey, 2001).</li>" +
      "<li>Różnice między ludźmi są większe, niż się wydaje: niektórzy mają w nerwie wzrokowym <b>2–3 razy więcej aksonów</b> i odpowiednio więcej komórek w LGN i korze. To daje duże różnice w dostrzeganiu <b>krótkich, słabych lub szybko zmieniających się</b> bodźców.</li></ul>" +
      "<h3>Po co ta cała obróbka</h3>" +
      "<p>Kalat: siatkówka ma ok. 120 mln pręcików i 6 mln czopków. <b>Nie da się sensownie przetwarzać 126 mln niezależnych komunikatów</b>, trzeba z nich wydobyć wzorce: jakie to przedmioty, gdzie są, czy się ruszają. Podział pracy zaczyna się już na poziomie komórek zwojowych: różne ich typy tworzą <b>odrębne ścieżki (kanały)</b>, które przeważnie pozostają odrębne w LGN i w korze.</p>" +
      "<p>Francuz (początek s. 58, tylko kilka linijek na zdjęciu): już w latach 20. XX wieku <b>Mieczysław Minkowski</b>, szwajcarski neurolog polskiego pochodzenia, odkrył, że aksony małych i dużych komórek zwojowych łączą się z LGN w zaskakująco uporządkowany sposób. Warstwy 3–6 LGN dostają sygnał od małych komórek i też składają się z małych komórek: to <b>warstwy drobnokomórkowe</b> (parvocellular, typu P).</p>" },

    { id: "s9", n: 9, title: "Pola recepcyjne", html:
      "<div class='plain'><p>Każdy neuron w układzie wzrokowym „pilnuje” swojego kawałka widoku. Receptor pilnuje jednego punktu. Komórka zwojowa pilnuje małego kółka, w którym środek i pierścień dookoła działają przeciwnie. Im dalej w mózgu, tym większe kawałki.</p></div>" +
      "<p class='srcline'>Kalat, <a data-page='k159'>s. 159</a>–<a data-page='k160'>160</a></p>" +
      "<div class='key'><p><b>Pole widzenia:</b> fragment otoczenia, jaki można zobaczyć za jednym razem (lewe i prawe pole widzenia).</p><p><b>Pole recepcyjne:</b> część pola widzenia, na którą reaguje dany neuron.</p></div>" +
      "<ul><li>Pole recepcyjne <b>receptora</b> to po prostu <b>punkt</b> w przestrzeni, z którego światło pada na ten receptor.</li>" +
      "<li>Receptory łączą się z komórkami dwubiegunowymi, a te ze zwojowymi, więc pole recepcyjne dalszych komórek zależy od ich połączeń. Komórka zwojowa połączona z grupą receptorów ma pole, które jest <b>połączeniem pól tych receptorów</b>. Pola komórek zwojowych łączą się w pola komórek na kolejnym poziomie i tak dalej, więc <b>pola rosną</b>.</li>" +
      "<li>Połączenia mogą być pobudzające albo hamujące, więc pole może mieć obszary <b>pobudzające i hamujące</b>.</li></ul>" +
      "<h3>Jak się bada pole recepcyjne</h3>" +
      "<p>Emituje się światło z różnych miejsc i jednocześnie rejestruje aktywność neuronu. Jeśli światło z danego punktu pobudza neuron, ten punkt należy do <b>pobudzeniowej</b> części pola; jeśli hamuje, do <b>hamulcowej</b>.</p>" +
      "<p>Gdy neurobiolog mówi „ta komórka kory reaguje najsilniej na zieloną poziomą linię”, nie chodzi o to, że światło pada na ten neuron. Chodzi o to, że neuron jest pobudzony, gdy <b>jego pole recepcyjne</b> jest tak oświetlone.</p>" +
      "<h3>Obwarzanek komórki zwojowej</h3>" +
      "<p>Pole recepcyjne komórki zwojowej ma <b>koliste centrum</b> i <b>antagonistyczną otoczkę</b> w kształcie obwarzanka: światło w centrum działa pobudzająco, a w otoczce hamująco, albo odwrotnie.</p>" +
      "<!--fig:pole-->" },

    { id: "s10", n: 10, title: "Hamowanie oboczne: jak siatkówka wyostrza krawędzie", html:
      "<div class='plain'><p>Najważniejsze w widoku są granice: gdzie kończy się jedna rzecz, a zaczyna druga. Siatkówka sztucznie je podkreśla. Każda oświetlona komórka „ucisza” sąsiadki, więc na granicy jasne–ciemne jasna strona wychodzi jeszcze jaśniej, a ciemna jeszcze ciemniej.</p></div>" +
      "<p class='srcline'>Kalat, <a data-page='k160'>s. 160</a>–<a data-page='k161'>161</a></p>" +
      "<div class='key'><p><b>Hamowanie oboczne</b>: hamowanie aktywności w neuronie przez aktywność sąsiednich komórek nerwowych (<b>Hartline, 1949</b>). Główna funkcja: <b>zaakcentowanie kontrastów</b>.</p></div>" +
      "<h3>Okablowanie (w uproszczeniu Kalata)</h3>" +
      "<ul><li>W rzeczywistości receptory tworzą z komórkami dwubiegunowymi synapsy <b>hamujące</b>, a światło <b>zmniejsza</b> ich aktywność. Żeby uniknąć podwójnego przeczenia, Kalat przyjmuje, że receptory po prostu <b>pobudzają</b> komórki dwubiegunowe, i to jeden receptor jedną komórkę (poza dołkiem naprawdę jest ich wiele).</li>" +
      "<li>Każdy receptor pobudza też <b>komórkę horyzontalną</b>, a ta <b>hamuje</b> komórki dwubiegunowe. Komórka horyzontalna jest długa, więc jeden receptor może zahamować całą grupę.</li>" +
      "<li>To <b>neuron lokalny</b>, bez aksonu i bez potencjałów czynnościowych, więc jej wpływ <b>słabnie z odległością</b>: blisko hamuje mocno, dalej słabiej.</li></ul>" +
      "<h3>Przykład 1: światło tylko na receptor 8</h3>" +
      "<ul><li>Komórka dwubiegunowa <b>8</b>: dostaje pobudzenie od receptora i hamowanie od komórki horyzontalnej. Pobudzenie przeważa, więc wypadkowo jest <b>pobudzona</b>.</li>" +
      "<li>Komórki <b>7 i 9</b>: brak pobudzenia, silne hamowanie, więc ich aktywność <b>spada dużo poniżej poziomu spontanicznego</b>.</li>" +
      "<li>Komórki <b>6 i 10</b>: hamowane słabiej, więc spadają mniej.</li></ul>" +
      "<h3>Przykład 2: światło na receptory 6–10 (pas światła)</h3>" +
      "<ul><li>Komórki 6–10 dostają pobudzenie i hamowanie, pobudzenie jest silniejsze, więc wszystkie są pobudzone.</li>" +
      "<li>Ale <b>7, 8 i 9 są hamowane z obu stron</b>, a <b>6 i 10 tylko z jednej</b>. Dlatego <b>6 i 10 są pobudzone mocniej</b> niż 7–9: brzeg jasnego pasa jest „podbity”.</li>" +
      "<li>Komórki <b>5 i 11</b> nie dostają pobudzenia, za to hamują je oświetlone sąsiadki, więc reagują <b>jeszcze słabiej niż komórki 1–4</b> (te mają tylko spontaniczną aktywność).</li></ul>" +
      "<p><b>Wynik:</b> komórki od <b>wewnętrznej</b> strony krawędzi są najbardziej pobudzone, a te przy <b>zewnętrznej</b> stronie najmniej aktywne. Granica jest wyraźniejsza, niż wynikałoby z samego światła.</p>" +
      "<div class='li-box' data-widget='hamowanie'></div>" +
      "<h3>Analogia: klocki na żelatynie</h3>" +
      "<p>Kładziesz drewniany klocek na żelatynie: pod nim powstaje <b>zagłębienie</b> (to pobudzenie neuronu), a wokół <b>wybrzuszenie</b> (to hamowanie oboczne sąsiadów). Drugi klocek obok lekko unosi pierwszy. W całym rzędzie klocki <b>na końcach</b> zanurzają się głębiej niż pozostałe, bo każdy klocek w środku jest wypychany w górę z obu stron, a skrajne tylko z jednej. Dokładnie jak komórki 6 i 10.</p>" +
      "<!--fig:zelatyna-->" +
      "<h3>Pytanie kontrolne 5: szare plamki na siatce</h3>" +
      "<p>Na siatce czarnych kwadratów z białymi paskami widać szare plamki na skrzyżowaniach pasków. Wyjaśnienie z mechanizmu: punkt na <b>skrzyżowaniu</b> ma jasne sąsiedztwo z <b>czterech stron</b>, a punkt na pasku między kwadratami tylko z <b>dwóch</b>. Więcej jasnych sąsiadów to silniejsze hamowanie, więc skrzyżowanie wygląda ciemniej. Sprawdź na rysunku pod tym akapitem. (Rysunku 6.20 i odpowiedzi z s. 176 nie ma na zdjęciach.)</p>" +
      "<!--fig:hermann-->" },

    { id: "s11", n: 11, title: "Trzy rodzaje komórek zwojowych", html:
      "<div class='plain'><p>Ostatnia warstwa siatkówki to nie jedna drużyna, tylko trzy. Małe komórki (karłowate i pyłkowe) zajmują się szczegółami i kolorami, a duże (parasolowe) kontrastem i ruchem. To, jak widzimy, wynika z tego, jak te komórki są zbudowane.</p></div>" +
      "<p class='srcline'>Francuz, <a data-page='f54'>s. 54</a>–<a data-page='f57'>57</a></p>" +
      "<h3>Cztery specjalizacje</h3>" +
      "<p>Analiza <b>oddolna</b> na wczesnym etapie jest możliwa dzięki temu, że w siatkówce są nie tylko fotoreceptory, ale i różne komórki nerwowe, zwłaszcza <b>komórki zwojowe</b>. Specjalizują się w danych o:</p>" +
      "<ol><li><b>długości fali</b> światła → podstawa widzenia <b>barw</b>;</li>" +
      "<li><b>kontrastach jasności</b> → <b>krawędzie</b>, czyli kształty;</li>" +
      "<li><b>zmienności oświetlenia w czasie</b> → <b>ruch</b>;</li>" +
      "<li><b>rozdzielczości przestrzennej</b> → <b>ostrość</b> widzenia.</li></ol>" +
      "<!--fig:specjalizacje-->" +
      "<p>Przykład: niektóre komórki są szczególnie wrażliwe na falę odpowiadającą zieleni. Gdy wysyłają impulsy do kory, <b>niczym alfabetem Morse'a</b>, widzisz coś zielonego. Gdy aktywują się komórki od ruchu, mózg „dowiaduje się”, że coś się zmienia, ale z samych tych danych nie wie jeszcze, czy rusza się scena, czy ty. Szybko „się dowie” z danych z innych zmysłów.</p>" +
      "<p>Widzenie danej cechy wynika wprost z kondycji tych neuronalnych „przetworników”. Ich <b>uszkodzenie</b> może sprawić, że jakiejś cechy po prostu <b>nie dostrzegamy</b>, jakby jej nie było (por. ślepota na ruch u Kalata).</p>" +
      "<h3>Trzy grupy</h3>" +
      "<div class='tscroll'><table><thead><tr><th></th><th>Karłowate (midget)</th><th>Pyłkowe (bistratified)</th><th>Parasolowe (parasol)</th></tr></thead><tbody>" +
      "<tr><th>Budowa</th><td>drobne ciała, mało rozgałęzień</td><td>maleńkie ciała, duże rozgałęzienia</td><td>duże ciała, bardzo dużo rozgałęzień</td></tr>" +
      "<tr><th>Udział w nerwie</th><td>ok. 80%</td><td>ok. 10%</td><td>ok. 10%</td></tr>" +
      "<tr><th>Z czym się łączą</th><td>głównie centrum siatkówki</td><td>głównie centrum siatkówki</td><td>większy obszar siatkówki</td></tr>" +
      "<tr><th>Barwy</th><td>czerwony–zielony</td><td>niebieski–żółty</td><td>nie różnicują</td></tr>" +
      "<tr><th>Mocna strona</th><td>rozdzielczość: ostre kształty</td><td>barwy niebieska i żółta</td><td>różnice jasności 1–2%, krawędzie, ruch</td></tr>" +
      "<tr><th>Szybkość</th><td>wolniej</td><td>wolniej</td><td>grube aksony, ok. 4 m/s, dwa razy szybciej</td></tr>" +
      "</tbody></table></div>" +
      "<!--fig:zwojowe-->" +
      "<ul><li>Wielkość komórek i rozłożystość ich drzew dendrytycznych zależy od odległości od dołka: <b>bliżej dołka obie są mniejsze</b>.</li>" +
      "<li><b>Akson</b> to odgałęzienie, które odprowadza impulsy z ciała komórki do innej. Aksony wszystkich trzech typów tworzą nerw wzrokowy: ok. 1 mln, jak kabel z miedzianych drucików.</li>" +
      "<li>Małe komórki to ok. <b>90%</b> włókien nerwu, więc dane z nich są z jakiegoś powodu ważniejsze dla mózgu.</li>" +
      "<li>Małe łączą się z mniejszą liczbą fotoreceptorów, głównie w centrum, więc są <b>wrażliwsze na rozdzielczość przestrzenną</b>: dzięki nim odróżniamy kształty. Minus: ich największe skupisko pokrywa mały obszar siatkówki, czyli mały zakres pola widzenia.</li>" +
      "<li>Ponad 90% małych komórek specjalizuje się w <b>długości fal</b>: karłowate świetnie różnicują zieleń i czerwień, gorzej żółć i błękit; to drugie robią pyłkowe (Dacey, 2000).</li>" +
      "<li><b>Parasolowe</b> nie różnicują fal, ale rejestrują już <b>1–2%</b> różnicy jasności między sąsiednimi płaszczyznami, a różnice 10–15% kodują bez problemu (Shapley, Kaplan, Soodak, 1981). Karłowate potrzebują dużo większej różnicy. Parasolowe obejmują też większy obszar siatkówki, więc uzupełniają małe komórki w wykrywaniu <b>konturów poza dołkiem</b> i <b>relacji przestrzennych</b>.</li>" +
      "<li>Grube aksony parasolowych przewodzą <b>dwa razy szybciej</b> (ok. 4 m/s), co jest kluczowe dla wykrywania <b>zmian oświetlenia</b>, czyli <b>ruchu</b>. Ruch to przesuwanie się tego samego wzoru światła i cienia po siatkówce; tempo i kierunek przesunięć to szybkość i kierunek ruchu.</li></ul>" +
      "<h3>Podsumowanie Francuza</h3>" +
      "<p>Jak cechy sceny, tak komórki układają się w <b>dwie kategorie</b>. <b>Karłowate i pyłkowe</b>: barwa i rozdzielczość, czyli kształty i oddzielanie przedmiotów od siebie i od tła. To najbardziej podstawowa funkcja widzenia, dlatego ich aksonów jest najwięcej. <b>Parasolowe</b>: szybkość i wrażliwość na odcienie jasności, czyli ruch, organizacja przestrzenna i kontury.</p>" +
      "<blockquote>„Obrazy widzimy bowiem tak jak widzimy, ponieważ taki mamy biologiczny hardware, a nie dlatego, że one takie są.”</blockquote>" },

    { id: "s12", n: 12, title: "Kolory w czytance", html:
      "<div class='plain'><p>Kolor to nie „fala w oku”, tylko wynik porównania. Masz trzy typy czopków, które reagują na różne fale, a mózg porównuje, ile pobudził się każdy z nich. Jeden neuron sam nie powie „czerwone”.</p></div>" +
      "<p class='srcline'>Kalat, <a data-page='k150'>s. 150</a> (dalszy ciąg, s. 151–156, nie jest na zdjęciach); Francuz, <a data-page='f47'>s. 47</a>, <a data-page='f56'>56</a></p>" +
      "<ul><li>Prawie wszystkie kręgowce mają pręciki i czopki, ale widzenie barw wymaga <b>porównywania aktywności różnych typów czopków</b>. Szczury mają jeden typ czopków i nie rozróżniają kolorów.</li>" +
      "<li>Najkrótsze widzialne fale (u Kalata ok. 350 nm, u Francuza zakres od ok. 400 nm) dają <b>fiolet</b>, dłuższe kolejno niebieski, zielony, żółty, pomarańczowy i przy ok. 700 nm <b>czerwień</b>. Francuz: między długością fali a barwą jest ścisła zależność.</li>" +
      "<li>Problem kodowania: neuron może tylko zmieniać częstotliwość impulsów (albo polaryzację błony). Jeśli sygnalizuje tak jasność, nie może naraz sygnalizować barwy. Wniosek: <b>pojedynczy neuron nie przekaże jednocześnie jasności i barwy</b>; spostrzeżenia opierają się na <b>wzorcach aktywności wielu neuronów</b>.</li></ul>" +
      "<!--fig:widmo-->" +
      "<h3>Teoria trichromatyczna (Younga–Helmholtza)</h3>" +
      "<p>Czy na każdy kolor jest osobny receptor? Nie. <b>Thomas Young</b> (1773–1829), brytyjski lekarz i geniusz od wszystkiego (częściowo odczytał kamień z Rosetty, położył podwaliny optyki), pierwszy uznał, że barwa wymaga wyjaśnienia <b>biologicznego</b>, a nie tylko fizycznego. Zaproponował, że widzenie barw to porównywanie aktywności <b>kilku typów receptorów</b>, każdy czuły na inny zakres fal. <b>Hermann von Helmholtz</b> rozwinął to na podstawie <b>obserwacji psychofizycznych</b> (relacji obserwatorów).</p>" +
      "<div class='key'><p><b>Teoria trichromatyczna:</b> percepcja barw opiera się na ocenie względnej siły pobudzeń <b>trzech typów czopków</b>, z których każdy jest najbardziej wrażliwy na inny zakres długości fal.</p></div>" +
      "<p>Druga z dwóch najważniejszych XIX-wiecznych teorii to <b>teoria przeciwstawnych procesów</b>. Jej opis jest na brakujących stronach.</p>" +
      "<aside class='extra'><p>Teoria przeciwstawnych procesów (Hering) mówi, że barwy są kodowane parami przeciwieństw: czerwony–zielony, niebieski–żółty, jasny–ciemny. To pasuje do Francuza: komórki karłowate różnicują czerwień i zieleń, a pyłkowe niebieski i żółty.</p></aside>" }
  ]
});
