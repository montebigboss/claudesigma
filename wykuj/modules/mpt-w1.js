/* Moduł: Metody pracy twórczej z dziećmi i młodzieżą, wykład 1: Specyfika.
 *
 * Źródło każdej pozycji (pole s):
 *   "S" slajd lub sylabus (domyślne, pomijane)
 *   "U" powiedziane ustnie na wykładzie
 *   "D" dopowiedzenie spoza wykładu (★). Egzamin próbny je pomija.
 *
 * Typy ćwiczeń (pole t):
 *   mcq    q, a[] (pierwsza odpowiedź jest poprawna), x
 *   tf     q, a (true/false), x
 *   cloze  q z luką ___, a[] (pierwsza poprawna), x
 *   type   q, a[] (akceptowane odpowiedzi), x
 *   which  q (sytuacja), a (numer zasady 1-10), x
 *   match  pairs[[lewo, prawo], ...]
 *   sort   q, cats[2], items[[tekst, 0|1], ...]
 */
Wykuj.registerModule({
  id: "mpt-w1",
  course: { id: "mpt", name: "Metody pracy twórczej z dziećmi i młodzieżą", short: "MPT", theme: "green", icon: "pencil" },
  number: 1,
  title: "Specyfika",
  lecturer: "dr Barbara Cichy-Jasiocha",
  term: "semestr zimowy 2026/2027",
  passing: "Obecność + test pisemny z pytaniami zamkniętymi. Trzeba uzyskać więcej niż 50% punktów.",
  passRatio: 0.5,

  principles: [
    "Prymat procesu nad efektem",
    "Psychologiczne bezpieczeństwo",
    "Aktywacja polisensoryczna",
    "Elastyczność struktury",
    "Metaforyzacja i projekcja",
    "Rytualizacja i ramy (setting)",
    "Ambiwalencja oporu",
    "Przekraczanie egocentryzmu, teoria umysłu",
    "Sprawczość i poczucie kontroli (LOC)",
    "Kanalizacja i sublimacja"
  ],

  units: [
    { id: "wstep", title: "Na start", sub: "Facylitacja, socjoterapia, zaliczenie", icon: "spark" },
    { id: "z1", title: "Proces nad efektem", sub: "Zasada 1 i projekcja myśli", icon: "spiral" },
    { id: "z2", title: "Zielony ołówek", sub: "Zasada 2: bezpieczeństwo i prawo do odmowy", icon: "pencil" },
    { id: "z34", title: "Zmysły i zwroty akcji", sub: "Zasady 3 i 4", icon: "hand" },
    { id: "z56", title: "Metafora i setting", sub: "Zasady 5 i 6", icon: "moon" },
    { id: "z7", title: "Opór", sub: "Zasada 7: „to jest bez sensu”", icon: "wall" },
    { id: "z8", title: "Cudza perspektywa", sub: "Zasada 8: egocentryzm i teoria umysłu", icon: "eye" },
    { id: "z9", title: "Czarne słońce", sub: "Zasada 9: sprawczość i LOC", icon: "sun" },
    { id: "z10", title: "Glina i bunt", sub: "Zasada 10: kanalizacja i sublimacja", icon: "flame" },
    { id: "tab", title: "Dzieci a młodzież", sub: "Tabela różnic", icon: "split" },
    { id: "mix", title: "Która to zasada?", sub: "Sytuacje z praktyki, wszystkie 10", icon: "dice" },
    { id: "boss", title: "Test końcowy", sub: "Wszystko z wykładu, 15 pytań", icon: "crown", boss: true }
  ],

  concepts: [
    { id: "facylitacja", u: "wstep", s: "U", term: "Facylitacja",
      def: "Sytuacja, w której obecność psychologa umożliwia rozpoczęcie i kontynuowanie procesu rozmawiania o trudnych emocjach.",
      sh: "obecność psychologa umożliwia rozmowę o trudnych emocjach" },
    { id: "facylitator", u: "wstep", s: "D", term: "Facylitator",
      def: "Nie jest ekspertem, który „naprawia”. Tworzy warunki, w których proces może zajść sam. Termin spopularyzował m.in. Carl Rogers (nurt humanistyczny).",
      sh: "tworzy warunki, by proces zaszedł sam (Rogers)" },
    { id: "socjoterapia", u: "wstep", s: "D", term: "Socjoterapia",
      def: "Grupowa forma pomocy psychologicznej dla dzieci i młodzieży z trudnościami emocjonalnymi i w relacjach. Opiera się na doświadczeniach korektywnych w bezpiecznej grupie.",
      sh: "grupowa pomoc oparta na doświadczeniach korektywnych" },
    { id: "cele-socjo", u: "wstep", s: "D", term: "Cele socjoterapii",
      def: "Terapeutyczne (odreagowanie, korekta przekonań o sobie i innych), edukacyjne (umiejętności społeczne, komunikacja) i rozwojowe (wspieranie potrzeb rozwojowych).",
      sh: "terapeutyczne, edukacyjne, rozwojowe" },
    { id: "zaliczenie", u: "wstep", term: "Zaliczenie przedmiotu",
      def: "Obecność plus egzamin: test pisemny z pytaniami zamkniętymi. Trzeba uzyskać więcej niż 50% punktów.",
      sh: "obecność + test zamknięty, ponad 50%" },
    { id: "proces", u: "z1", term: "Prymat procesu nad efektem",
      def: "Największą wartość terapeutyczną i rozwojową ma sam akt tworzenia, a nie produkt końcowy. Paradygmat „tu i teraz”. Cel: uwolnienie od presji perfekcjonizmu.",
      sh: "liczy się akt tworzenia, nie produkt" },
    { id: "projekcja", u: "z1", s: "U", term: "Projekcja myśli",
      def: "Przypisywanie obiektowi zewnętrznemu własnych stanów wewnętrznych. Uruchamia ją pytanie otwarte: „opowiedz mi o tym misiu, o czym on myśli?”.",
      sh: "przypisywanie obiektowi własnych stanów" },
    { id: "projekcja-psa", u: "z1", s: "D", term: "Projekcja w psychoanalizie",
      def: "Mechanizm obronny: przypisywanie innym własnych nieakceptowanych impulsów. Na teście trzymaj się definicji z wykładu (projekcja myśli, bez założenia obrony).",
      sh: "mechanizm obronny: moje impulsy przypisuję innym" },
    { id: "bezpieczenstwo", u: "z2", term: "Psychologiczne bezpieczeństwo",
      def: "Klimat bez oceniania: całkowite zawieszenie krytyki i ocen szkolnych. Twórczość wymaga odsłonięcia się, a to ryzyko emocjonalne (szczególnie u młodzieży).",
      sh: "klimat bez oceniania i krytyki" },
    { id: "zielony", u: "z2", term: "Zasada zielonego ołówka",
      def: "Zauważanie i wzmacnianie tego, co unikalne, nietypowe i ciekawe w pomyśle uczestnika (ZASOBY), zamiast wytykania błędów.",
      sh: "wzmacnianie zasobów zamiast wytykania błędów" },
    { id: "czerwony", u: "z2", term: "Czerwony ołówek",
      def: "Wytykanie błędów i tego, co „nie wyszło”. Tego psycholog unika.",
      sh: "wytykanie błędów i tego, co nie wyszło" },
    { id: "odmowa", u: "z2", term: "Prawo do odmowy",
      def: "Uczestnik zawsze może powiedzieć „NIE” i nie pokazywać pracy grupie, gdy temat jest zbyt intymny albo gdy po prostu nie chce.",
      sh: "zawsze można nie pokazać pracy grupie" },
    { id: "kierunek", u: "z2", s: "U", term: "Kierunek oceny",
      def: "Od oceniania nie da się uciec, więc psycholog świadomie zmienia jej kierunek: patrzy na zasoby (co się udaje), a nie na błędy.",
      sh: "oceniamy zasoby, nie błędy" },
    { id: "polisensoryka", u: "z34", term: "Aktywacja polisensoryczna",
      def: "Angażowanie wielu zmysłów jako zakotwiczenie w ciele: glina przy muzyce, malowanie na podłodze, zapachy, faktury. Wspiera regulację układu nerwowego i ekspresję.",
      sh: "angażowanie wielu zmysłów naraz" },
    { id: "snoezelen", u: "z34", s: "D", term: "Snoezelen",
      def: "Sala doświadczania świata wywodząca się z Holandii. Najbardziej znana realizacja środowisk wielozmysłowych (multi-sensory environments).",
      sh: "wielozmysłowa sala z Holandii" },
    { id: "elastycznosc", u: "z34", term: "Elastyczność struktury",
      def: "Podążanie za dynamiką grupy. Sztywny scenariusz to największy wróg kreatywności, prowadzący musi być gotowy na ZWROTY AKCJI. Twórczość staje się wentylem bezpieczeństwa.",
      sh: "scenariusz to punkt wyjścia, nie obowiązek" },
    { id: "metafora", u: "z56", term: "Metaforyzacja",
      def: "Bezpieczny dystans emocjonalny. Łatwiej opowiedzieć o „smutnym potworze, który zgubił się w lesie” albo zagrać buntownika niż powiedzieć wprost o swoich lękach.",
      sh: "bezpieczny dystans emocjonalny dzięki metaforze" },
    { id: "bajkoterapia", u: "z56", term: "Bajkoterapia",
      def: "Praca z opowieścią i metaforą, np. smutny potwór zgubiony w lesie. Rekomendowana dla dzieci (temat 9 sylabusa).",
      sh: "opowieść i metafora o trudnych emocjach" },
    { id: "drama", u: "z56", term: "Drama",
      def: "Odgrywanie ról, np. zbuntowanego bohatera albo zepsutej zabawki na deszczu. Trenuje przyjmowanie cudzej perspektywy; rekomendowana dla młodzieży.",
      sh: "odgrywanie ról i cudzej perspektywy" },
    { id: "setting", u: "z56", term: "Setting",
      def: "Jasne granice i rytuały oddzielające przestrzeń twórczą od „zwykłej rzeczywistości”. W psychoterapii: stałe ramy spotkań, czyli miejsce, czas i zasady.",
      sh: "stałe ramy: miejsce, czas, zasady, rytuały" },
    { id: "iskierka", u: "z56", s: "D", term: "Iskierka przyjaźni",
      def: "Rytuał rozpoczęcia: zabawa integracyjna w kręgu, w której uczestnicy kolejno przekazują sobie uścisk dłoni.",
      sh: "uścisk dłoni przekazywany w kręgu" },
    { id: "opor", u: "z7", term: "Ambiwalencja oporu",
      def: "Opór jest naturalnym elementem procesu, zwłaszcza u młodzieży. Kryje się pod nim lęk przed oceną, odrzuceniem przez grupę lub trudnymi emocjami. Psycholog nie walczy z nim, przyjmuje go z empatią.",
      sh: "opór jest naturalny, pod nim kryje się lęk" },
    { id: "ego-pozn", u: "z8", term: "Egocentryzm poznawczy",
      def: "Młodsze dzieci tkwią we własnej perspektywie i nie odróżniają swojej wiedzy od wiedzy innych (Piaget, stadium przedoperacyjne). Przykład: zasady zabawy, których nikomu nie powiedziały.",
      sh: "nie odróżnia swojej wiedzy od cudzej" },
    { id: "ego-adol", u: "z8", term: "Egocentryzm adolescentny",
      def: "Silne skupienie młodzieży na własnym przeżywaniu (opisał D. Elkind). Przejawy: wyobrażona publiczność i baśń osobista. Przykład: impreza z pryszczem.",
      sh: "młodzież skupiona na własnym przeżywaniu" },
    { id: "publicznosc", u: "z8", s: "D", term: "Wyobrażona publiczność",
      def: "Przekonanie, że wszyscy mnie obserwują. Przejaw egocentryzmu adolescentnego (Elkind).",
      sh: "przekonanie, że wszyscy mnie obserwują" },
    { id: "basn", u: "z8", s: "D", term: "Baśń osobista",
      def: "Przekonanie o własnej wyjątkowości. Przejaw egocentryzmu adolescentnego (Elkind).",
      sh: "przekonanie o własnej wyjątkowości" },
    { id: "tom", u: "z8", s: "D", term: "Teoria umysłu",
      def: "Zdolność przypisywania innym stanów psychicznych (przekonań, intencji) odmiennych od własnych.",
      sh: "inni mają inne przekonania i intencje niż ja" },
    { id: "marketing", u: "z8", s: "D", term: "Marketing doświadczeń",
      def: "Sprzedaje przeżycie, nie produkt. Zaaranżowane warunki prowadzą do projekcji, a projekcja do przeżycia. Ten sam mechanizm co w pracy twórczej, inny cel: sprzedaż zamiast wglądu.",
      sh: "sprzedaż przeżycia przez projekcję" },
    { id: "sprawczosc", u: "z9", term: "Sprawczość",
      def: "Poczucie wpływu na własny świat, budowane przez oddanie dziecku wszystkich decyzji twórczych: „ja decyduję, ja kreuję, mój głos ma znaczenie”.",
      sh: "„ja decyduję, mój głos ma znaczenie”" },
    { id: "loc", u: "z9", s: "D", term: "LOC (umiejscowienie kontroli)",
      def: "Koncepcja J. Rottera. Kontrola wewnętrzna: wyniki zależą ode mnie. Kontrola zewnętrzna: zależą od losu albo od innych.",
      sh: "umiejscowienie kontroli wg Rottera" },
    { id: "internalizacja", u: "z9", s: "D", term: "Internalizacja poczucia kontroli",
      def: "Uwewnętrznienie kontroli: przesuwanie się od przekonania „decydują za mnie” do „to zależy ode mnie”.",
      sh: "od „decydują za mnie” do „zależy ode mnie”" },
    { id: "czarne-slonce", u: "z9", s: "U", term: "Czarne słońce",
      def: "Nauczyciel plastyki poprawi: „słońce nie jest czarne”. Psycholog nie poprawia, tylko zastanawia się, dlaczego dziecko tak namalowało. Wybór koloru może nieść informację o przeżyciach.",
      sh: "psycholog nie poprawia, pyta: dlaczego tak?" },
    { id: "sublimacja", u: "z10", term: "Sublimacja",
      def: "Według nurtu psychodynamicznego najwyższa forma obrony przed lękiem: zamiana destrukcyjnej energii w konstruktywny lub ekspresyjny wytwór. Opisał ją Freud; Vaillant zalicza ją do mechanizmów dojrzałych.",
      sh: "destrukcyjna energia zamieniona w wytwór" },
    { id: "kanalizacja", u: "z10", s: "U", term: "Kanalizacja napięcia",
      def: "Nie wygaszamy napięcia, tylko nadajemy mu kierunek: glina do uderzania, buntowniczy tekst piosenki, taniec zamiast uciszania.",
      sh: "nadanie napięciu kierunku zamiast wygaszania" },
    { id: "homo-ludens", u: "tab", s: "D", term: "Homo ludens",
      def: "„Człowiek bawiący się” (J. Huizinga): zabawa jest pierwotnym źródłem kultury. Na niej opiera się motywacja dzieci.",
      sh: "człowiek bawiący się (Huizinga)" },
    { id: "vision-board", u: "tab", s: "U", term: "Vision board",
      def: "Metoda kolażu (manifestu) dla młodzieży: zdjęcia podpisane ideami, wartościami lub celami. Służy autorefleksji i budowaniu tożsamości.",
      sh: "kolaż-manifest z celami i wartościami" }
  ],

  exercises: [
    /* ---------- Na start ---------- */
    { u: "wstep", t: "mcq", s: "U", q: "Czym według prowadzącej jest facylitacja?",
      a: ["Sytuacją, w której obecność psychologa umożliwia rozpoczęcie i kontynuowanie rozmowy o trudnych emocjach",
          "Oceną postępów dziecka w zajęciach twórczych",
          "Prowadzeniem zajęć ściśle według scenariusza",
          "Rozwiązaniem problemu dziecka przez eksperta"] },
    { u: "wstep", t: "type", s: "U", q: "Sytuacja, w której obecność psychologa umożliwia rozpoczęcie i kontynuowanie procesu rozmawiania o trudnych emocjach, to…",
      a: ["facylitacja"] },
    { u: "wstep", t: "tf", s: "D", q: "Facylitator to ekspert, który „naprawia” problem dziecka.", a: false,
      x: "Facylitator nie naprawia. Tworzy warunki, w których proces może zajść sam." },
    { u: "wstep", t: "mcq", s: "D", q: "Kto spopularyzował termin „facylitator” w nurcie humanistycznym?",
      a: ["Carl Rogers", "Jean Piaget", "Zygmunt Freud", "Julian Rotter"] },
    { u: "wstep", t: "mcq", s: "D", q: "Socjoterapia to…",
      a: ["grupowa forma pomocy psychologicznej dla dzieci i młodzieży z trudnościami emocjonalnymi i w relacjach",
          "indywidualna terapia dorosłych oparta na rozmowie",
          "forma oceniania wytworów plastycznych",
          "metoda nauczania przedmiotów artystycznych"] },
    { u: "wstep", t: "mcq", s: "D", q: "Na czym opiera się socjoterapia?",
      a: ["Na doświadczeniach korektywnych w bezpiecznej grupie", "Na testach projekcyjnych",
          "Na nagradzaniu najlepszych prac", "Na sztywnym programie ćwiczeń"] },
    { u: "wstep", t: "match", s: "D", pairs: [
      ["Cele terapeutyczne", "odreagowanie, korekta przekonań"],
      ["Cele edukacyjne", "umiejętności społeczne, komunikacja"],
      ["Cele rozwojowe", "wspieranie potrzeb rozwojowych"]] },
    { u: "wstep", t: "mcq", q: "Jak zalicza się ten przedmiot?",
      a: ["Obecność i test z pytaniami zamkniętymi, powyżej 50% punktów", "Projekt grupowy i prezentacja",
          "Egzamin ustny", "Esej zaliczeniowy"] },
    { u: "wstep", t: "tf", q: "Wykład 1 pokazuje elementy, które odróżniają zajęcia twórcze z dziećmi i młodzieżą od standardowej edukacji i od pracy z dorosłymi.", a: true },
    { u: "wstep", t: "cloze", q: "Prowadząca nazywa elementy specyfiki kluczowymi zasadami ___, które każdy przyszły psycholog powinien wdrożyć w praktyce.",
      a: ["psychopedagogicznymi", "psychoanalitycznymi", "dydaktycznymi", "artystycznymi"] },
    { u: "wstep", t: "mcq", s: "D", q: "Co jest podstawowym narzędziem socjoterapii?",
      a: ["Metody twórcze: rysunek, drama, ruch", "Testy psychometryczne", "Wykłady i prezentacje", "Kary i nagrody"] },

    /* ---------- Zasada 1 ---------- */
    { u: "z1", t: "mcq", q: "Co według prowadzącej ma największą wartość w pracy twórczej z dziećmi?",
      a: ["Sam akt tworzenia", "Estetyka wytworu", "Zgodność z instrukcją", "Szybkość wykonania"],
      x: "Prymat procesu nad efektem: największą wartość terapeutyczną i rozwojową ma sam akt tworzenia." },
    { u: "z1", t: "mcq", q: "Którą wypowiedź psychologa wykład podaje jako właściwą?",
      a: ["„Widzę, że użyłeś dużo czerwieni i mocno naciskałeś kredkę (opowiesz mi o tym?)”",
          "„Piękny rysunek!”", "„Hej, słońce nie jest czarne”", "„Super, to na szóstkę”"],
      x: "Opis bez oceny estetycznej, z zaproszeniem do opowiedzenia." },
    { u: "z1", t: "cloze", q: "Zasada 1 to prymat ___ nad efektem.", a: ["procesu", "produktu", "oceny", "talentu"] },
    { u: "z1", t: "tf", q: "U dorosłych w pracy twórczej często liczy się produkt końcowy, np. książka, obraz czy projekt.", a: true },
    { u: "z1", t: "mcq", q: "Jaki jest cel tego, że psycholog nie ocenia estetyki dzieła?",
      a: ["Uwolnienie od presji perfekcjonizmu", "Przyspieszenie pracy", "Ułatwienie wystawienia oceny", "Nauka techniki plastycznej"] },
    { u: "z1", t: "mcq", s: "U", q: "Pytanie „co dostałeś z kartkówki?” prowadząca podała jako przykład…",
      a: ["nastawienia dorosłych na efekt (ocenę), a nie na proces", "dobrej praktyki facylitacji",
          "pytania otwartego, które uruchamia projekcję", "zasady zielonego ołówka"] },
    { u: "z1", t: "mcq", s: "U", q: "Co według wykładu oznacza „wylewanie dziecka z kąpielą” w pracy twórczej?",
      a: ["Ocenianie tylko efektu bez analizy procesu, przez co tracimy to, co najcenniejsze",
          "Zbyt częste zmienianie scenariusza", "Pozwalanie dziecku na odmowę", "Używanie zbyt wielu bodźców naraz"] },
    { u: "z1", t: "type", s: "U", q: "Przypisywanie obiektowi zewnętrznemu własnych stanów wewnętrznych to ______ myśli.",
      a: ["projekcja"] },
    { u: "z1", t: "mcq", s: "U", q: "Prośba „opowiedz mi o tym misiu, o czym on myśli?” sprawia, że dziecko…",
      a: ["projektuje na misia własne myśli: mówiąc o misiu, mówi o sobie", "uczy się poprawnie opisywać przedmioty",
          "zostaje ocenione za wypowiedź", "przestaje się bawić"] },
    { u: "z1", t: "tf", s: "D", q: "Na teście projekcję należy definiować jak w psychoanalizie: jako mechanizm obronny przypisywania innym nieakceptowanych impulsów.", a: false,
      x: "Na teście trzymaj się definicji z wykładu: przypisywanie obiektowi zewnętrznemu własnych stanów wewnętrznych, bez założenia obrony." },
    { u: "z1", t: "mcq", q: "Jak nazywa się paradygmat związany z zasadą 1?",
      a: ["„Tu i teraz”", "„Krok po kroku”", "„Liczy się wynik”", "„Zero tolerancji”"] },
    { u: "z1", t: "tf", q: "Dobrą praktyką jest chwalenie estetyki dzieła, np. „super”, żeby zmotywować dziecko.", a: false,
      x: "Psycholog nie ocenia estetyki. Zamiast „piękny rysunek” czy „super” opisuje, co widzi, i zaprasza do opowiedzenia." },

    /* ---------- Zasada 2 ---------- */
    { u: "z2", t: "mcq", q: "Na czym polega zasada zielonego ołówka?",
      a: ["Zauważa się i wzmacnia to, co unikalne, nietypowe i ciekawe (zasoby), zamiast wytykać błędy",
          "Błędy poprawia się na zielono, żeby mniej raziły", "Ocenia się tylko prace wykonane zielonym kolorem",
          "Nagradza się najlepszą pracę w grupie"] },
    { u: "z2", t: "type", q: "Jakie hasło było wyróżnione na slajdzie przy zasadzie zielonego ołówka?", a: ["zasoby"] },
    { u: "z2", t: "mcq", q: "Co w tej metaforze oznacza czerwony ołówek?",
      a: ["Wytykanie błędów i tego, co „nie wyszło”", "Wzmacnianie zasobów", "Prawo do odmowy", "Wyrażanie złości"] },
    { u: "z2", t: "tf", q: "Uczestnik zawsze może powiedzieć „NIE” i nie pokazywać swojej pracy grupie.", a: true, x: "To prawo do odmowy." },
    { u: "z2", t: "mcq", q: "Kiedy uczestnik może nie pokazywać pracy grupie?",
      a: ["Zawsze, także wtedy, gdy po prostu nie chce", "Tylko gdy praca dotyczy traumy", "Tylko za zgodą rodziców", "Nigdy, dzielenie się jest obowiązkowe"] },
    { u: "z2", t: "mcq", q: "Dlaczego twórczość wiąże się z ryzykiem emocjonalnym?",
      a: ["Bo wymaga odsłonięcia się", "Bo materiały plastyczne bywają niebezpieczne", "Bo zajęcia są oceniane", "Bo trwają zbyt długo"] },
    { u: "z2", t: "cloze", q: "Specyfika tych zajęć to całkowite zawieszenie krytyki i ___ szkolnych.", a: ["ocen", "zasad", "przerw", "lekcji"] },
    { u: "z2", t: "mcq", s: "U", q: "Skoro „nie da się uciec od oceniania”, co według prowadzącej robi psycholog?",
      a: ["Świadomie zmienia kierunek oceny: na zasoby, nie na błędy", "Ukrywa swoje oceny przed dzieckiem",
          "Ocenia wyłącznie efekt końcowy", "Przekazuje ocenianie grupie"] },
    { u: "z2", t: "tf", q: "Ryzyko emocjonalne związane z odsłonięciem się jest szczególnie duże u młodzieży.", a: true },
    { u: "z2", t: "mcq", s: "D", q: "Z jakim nurtem polskiej dydaktyki kojarzy się „zielony ołówek”?",
      a: ["Z ocenianiem kształtującym", "Z pedagogiką Montessori", "Z behawioryzmem", "Z edukacją zdalną"] },
    { u: "z2", t: "mcq", q: "Jak brzmi pełna nazwa zasady 2?",
      a: ["Zasada psychologicznego bezpieczeństwa (klimat bez oceniania)", "Zasada pozytywnej dyscypliny",
          "Zasada równego traktowania", "Zasada aktywnego słuchania"] },

    /* ---------- Zasady 3 i 4 ---------- */
    { u: "z34", t: "mcq", q: "Aktywacja polisensoryczna to…",
      a: ["angażowanie wielu zmysłów naraz", "nauka wyłącznie przez myślenie pojęciowe",
          "praca jednym materiałem przez całe zajęcia", "relaksacja z zamkniętymi oczami"] },
    { u: "z34", t: "mcq", q: "Dlaczego dzieci i młodzież potrzebują aktywacji polisensorycznej?",
      a: ["W dobie przebodźcowania cyfrowego potrzebują zakotwiczenia w ciele", "Bo nie potrafią myśleć pojęciowo",
          "Bo szkoła zabrania ruchu", "Bo tak zajęcia trwają krócej"] },
    { u: "z34", t: "mcq", q: "Który przykład ilustruje aktywację polisensoryczną?",
      a: ["Glina przy muzyce, malowanie na podłodze, zapachy i faktury", "Rozwiązywanie testu przy biurku",
          "Czytanie podręcznika w ciszy", "Słuchanie wykładu"] },
    { u: "z34", t: "mcq", q: "Jaki efekt daje aktywacja polisensoryczna?",
      a: ["Pomaga regulować układ nerwowy i ułatwia ekspresję osobom, którym trudno mówić o emocjach",
          "Poprawia oceny z plastyki", "Skraca czas zajęć", "Zastępuje rozmowę z psychologiem"] },
    { u: "z34", t: "type", s: "D", q: "Najbardziej znana realizacja środowisk wielozmysłowych, sala doświadczania świata z Holandii, to…",
      a: ["snoezelen"] },
    { u: "z34", t: "tf", s: "U", q: "Samo siedzenie przy biurku to praca wyłącznie na myśleniu pojęciowym, której zasada 3 ma zapobiegać.", a: true },
    { u: "z34", t: "mcq", q: "Co jest „największym wrogiem kreatywności” według zasady 4?",
      a: ["Sztywny scenariusz zajęć", "Hałas w sali", "Brak materiałów", "Zbyt duża grupa"] },
    { u: "z34", t: "type", q: "Hasło wyróżnione na slajdzie przy zasadzie 4: prowadzący musi być gotowy na ZWROTY ______.", a: ["akcji"] },
    { u: "z34", t: "mcq", q: "Zaplanowałeś rysowanie bajki o lęku, a grupa wchodzi poruszona konfliktem w klasie. Co robisz?",
      a: ["Porzucasz plan i przekształcasz metodę w narzędzie do przepracowania bieżącego kryzysu",
          "Realizujesz scenariusz, bo jest zaplanowany", "Odwołujesz zajęcia", "Prosisz grupę, żeby zostawiła konflikt za drzwiami"] },
    { u: "z34", t: "cloze", q: "W sytuacji kryzysu twórczość staje się ___ bezpieczeństwa.", a: ["wentylem", "pasem", "alarmem", "strażnikiem"] },
    { u: "z34", t: "tf", s: "U", q: "Scenariusz warsztatów jest obowiązkiem do wykonania, a nie punktem wyjścia.", a: false,
      x: "Odwrotnie: scenariusz to punkt wyjścia, a nie obowiązek. Dotyczy to każdych warsztatów." },
    { u: "z34", t: "mcq", q: "Jaką metodę wymienia slajd przy zasadzie 3?",
      a: ["Multi-sensory environments", "Mind mapping", "Burza mózgów", "Metoda projektów"] },

    /* ---------- Zasady 5 i 6 ---------- */
    { u: "z56", t: "mcq", q: "Dlaczego metody twórcze sięgają po narzędzia projekcyjne (zasada 5)?",
      a: ["Bo dzieciom i młodzieży trudno mówić wprost o lękach, kompleksach i traumach", "Bo są tańsze od rozmowy",
          "Bo pozwalają szybko postawić diagnozę", "Bo dzieci nie lubią rozmawiać z dorosłymi"] },
    { u: "z56", t: "mcq", q: "Który przykład z wykładu ilustruje bajkoterapię?",
      a: ["Opowieść o „smutnym potworze, który zgubił się w lesie”", "Granie zbuntowanego bohatera",
          "Rundka „jakim kolorem dziś jesteś?”", "Uderzanie w glinę"] },
    { u: "z56", t: "mcq", q: "Zagranie zbuntowanego bohatera to przykład…",
      a: ["dramy", "bajkoterapii", "kolażu", "art journalingu"] },
    { u: "z56", t: "cloze", q: "Metafora i symbolika dają dziecku ___.", a: ["bezpieczeństwo", "ocenę", "nagrodę", "diagnozę"] },
    { u: "z56", t: "mcq", q: "Jaki dystans zapewnia metaforyzacja?",
      a: ["Bezpieczny dystans emocjonalny", "Dystans fizyczny od prowadzącego", "Dystans od grupy rówieśniczej", "Dystans czasowy od zdarzenia"] },
    { u: "z56", t: "type", q: "Jakie hasło wyróżniono na slajdzie przy zasadzie 6 (rytualizacja)?", a: ["setting"] },
    { u: "z56", t: "mcq", q: "Czym jest setting?",
      a: ["Jasnymi granicami i rytuałami, które oddzielają przestrzeń twórczą od „zwykłej rzeczywistości”",
          "Dekoracją sali", "Planem zajęć na cały semestr", "Ustawieniem oświetlenia"] },
    { u: "z56", t: "mcq", q: "Który przykład wykład podaje jako rytuał rozpoczęcia?",
      a: ["Iskierka przyjaźni albo rundka „jakim kolorem dziś jesteś?”", "Sprawdzenie listy obecności",
          "Kartkówka na wejście", "Rozdanie ocen"] },
    { u: "z56", t: "tf", q: "Odsunięcie ławek i siadanie w kręgu na poduszkach to element ram przestrzennych zajęć.", a: true,
      x: "Fizyczna zmiana przestrzeni oddziela zajęcia twórcze od zwykłej lekcji." },
    { u: "z56", t: "mcq", s: "D", q: "Iskierka przyjaźni to…",
      a: ["zabawa w kręgu, w której uczestnicy kolejno przekazują sobie uścisk dłoni", "rysowanie ogniska",
          "zabawa z latarką w ciemności", "pochwała dla najlepszego uczestnika"] },
    { u: "z56", t: "mcq", q: "Po co są rytuały rozpoczęcia i zakończenia zajęć?",
      a: ["Wyznaczają granice (setting) między przestrzenią twórczą a „zwykłą rzeczywistością”",
          "Żeby zajęcia trwały dłużej", "Żeby sprawdzić obecność", "Żeby ocenić zaangażowanie"] },
    { u: "z56", t: "tf", q: "Według wykładu dziecku łatwiej powiedzieć „czuję się samotny i nierozumiany przez rodziców” niż opowiedzieć o smutnym potworze.", a: false,
      x: "Odwrotnie. Metafora daje bezpieczny dystans, dlatego łatwiej mówić o potworze niż o sobie." },
    { u: "z56", t: "mcq", s: "D", q: "W psychoterapii „setting” oznacza…",
      a: ["stałe ramy spotkań: miejsce, czas i zasady", "diagnozę wstępną", "ćwiczenia relaksacyjne", "superwizję terapeuty"] },

    /* ---------- Zasada 7 ---------- */
    { u: "z7", t: "mcq", q: "Co niemal zawsze kryje się za tekstami „to jest dla dzieci” albo „nie umiem rysować”?",
      a: ["Lęk przed oceną, przed odrzuceniem przez grupę lub przed dotknięciem trudnych emocji", "Lenistwo",
          "Brak talentu", "Chęć zwrócenia na siebie uwagi"] },
    { u: "z7", t: "mcq", q: "Jak psycholog reaguje na opór?",
      a: ["Nie walczy i nie zmusza, przyjmuje opór z empatią", "Stawia uwagę", "Przekonuje argumentami", "Ignoruje uczestnika"] },
    { u: "z7", t: "mcq", q: "Którą reakcję na opór wykład podaje jako właściwą?",
      a: ["„Masz prawo uważać to zadanie za nudne. Możesz po prostu posiedzieć z nami i popatrzeć.”",
          "„Wszyscy robią, ty też musisz.”", "„Nie przesadzaj, to nic trudnego.”", "„Jak nie chcesz, to wyjdź.”"] },
    { u: "z7", t: "tf", q: "U dzieci, a zwłaszcza u młodzieży, opór jest naturalnym elementem procesu.", a: true },
    { u: "z7", t: "tf", q: "U dorosłych opór w ogóle nie występuje, bo przychodzą dobrowolnie.", a: false,
      x: "Pojawia się rzadko, ale może być zakamuflowany i subtelny." },
    { u: "z7", t: "mcq", q: "Co często robi młodzież, gdy nie czuje nacisku?",
      a: ["Po kilkunastu minutach sama dołącza", "Wychodzi z zajęć", "Zaczyna przeszkadzać", "Prosi o ocenę"] },
    { u: "z7", t: "mcq", s: "U", q: "Z którą zasadą prowadząca połączyła prawo uczestnika do oporu?",
      a: ["Z prawem do odmowy (zasada 2)", "Z aktywacją polisensoryczną (zasada 3)", "Z sublimacją (zasada 10)", "Z teorią umysłu (zasada 8)"] },
    { u: "z7", t: "cloze", q: "Zasada 7 to ___ oporu.", a: ["ambiwalencja", "eliminacja", "przełamywanie", "kara"] },
    { u: "z7", t: "mcq", q: "Jak wykład opisuje opór u dorosłych?",
      a: ["Pojawia się rzadko, ale bywa zakamuflowany i subtelny", "Jest głośny i otwarty",
          "Zawsze świadczy o zaburzeniu", "Występuje częściej niż u dzieci"] },
    { u: "z7", t: "tf", s: "U", q: "Nie każde zadanie spodoba się każdemu uczestnikowi i uczestnik ma prawo do oporu.", a: true },

    /* ---------- Zasada 8 ---------- */
    { u: "z8", t: "mcq", q: "Dlaczego grupowa praca twórcza (drama, wspólne pisanie scenariusza) to potężne narzędzie?",
      a: ["To trening społeczny: wymusza przyjęcie cudzej perspektywy", "Pozwala wyłonić lidera grupy",
          "Jest szybsza od pracy indywidualnej", "Ułatwia ocenianie uczestników"] },
    { u: "z8", t: "mcq", q: "W jakim egocentryzmie naturalnie tkwią młodsze dzieci?",
      a: ["Poznawczym", "Adolescentnym", "Społecznym", "Narcystycznym"] },
    { u: "z8", t: "mcq", q: "Jak slajd nazywa silne skupienie młodzieży na własnym przeżywaniu?",
      a: ["Egocentryzm adolescentny", "Egocentryzm poznawczy", "Egocentryzm percepcyjny", "Egoizm rozwojowy"] },
    { u: "z8", t: "mcq", q: "Które zadanie wymusza przyjęcie perspektywy innej osoby lub obiektu?",
      a: ["„Napisz list z perspektywy twojego nauczyciela”", "„Narysuj swój dom”",
          "„Opowiedz, co robiłeś w weekend”", "„Ulep dowolną figurkę”"] },
    { u: "z8", t: "mcq", s: "U", q: "Dziecko w zabawie zakłada, że obowiązują zasady, które samo wymyśliło i nikomu nie powiedziało. To egocentryzm…",
      a: ["poznawczy", "adolescentny", "afektywny", "percepcyjny"],
      x: "Dziecko nie odróżnia swojej wiedzy od wiedzy innych, a to egocentryzm poznawczy." },
    { u: "z8", t: "mcq", s: "U", q: "„Idę na imprezę z pryszczem, to wina świata, więc obrażam się na wszystkich”. Jak prowadząca nazwała ustnie ten egocentryzm?",
      a: ["Afektywny (emocjonalny)", "Poznawczy", "Percepcyjny", "Przedoperacyjny"],
      x: "Ustnie padła nazwa „egocentryzm afektywny”. Na slajdzie skupienie młodzieży na własnym przeżywaniu to egocentryzm adolescentny i tej nazwy używaj na teście." },
    { u: "z8", t: "type", s: "D", q: "Zdolność przypisywania innym stanów psychicznych (przekonań, intencji) odmiennych od własnych to teoria…",
      a: ["umysłu"] },
    { u: "z8", t: "mcq", s: "D", q: "Kto opisał egocentryzm poznawczy jako cechę stadium przedoperacyjnego?",
      a: ["J. Piaget", "D. Elkind", "J. Rotter", "C. Rogers"] },
    { u: "z8", t: "mcq", s: "D", q: "Kto opisał egocentryzm adolescentny?",
      a: ["D. Elkind", "J. Piaget", "Z. Freud", "J. Huizinga"] },
    { u: "z8", t: "match", s: "D", pairs: [
      ["Wyobrażona publiczność", "wszyscy mnie obserwują"],
      ["Baśń osobista", "jestem wyjątkowy"],
      ["Egocentryzm poznawczy", "inni wiedzą co innego niż ja"],
      ["Egocentryzm percepcyjny", "inni widzą co innego niż ja"],
      ["Egocentryzm afektywny", "inni czują co innego niż ja"]] },
    { u: "z8", t: "tf", s: "D", q: "Na teście skupienie młodzieży na własnym przeżywaniu (np. przykład z pryszczem) nazywaj egocentryzmem adolescentnym, tak jak na slajdzie.", a: true },
    { u: "z8", t: "mcq", s: "U", q: "Na jakim mechanizmie według prowadzącej budują się duże marki, np. kosmetyczne?",
      a: ["Tworzą warunki, w których odbiorca projektuje na siebie przeżycie", "Na obniżaniu cen",
          "Na ocenianiu klientów", "Na sztywnym scenariuszu reklam"] },
    { u: "z8", t: "mcq", s: "D", q: "Czym projekcja w pracy twórczej różni się od marketingu doświadczeń?",
      a: ["Celem: w psychologii to wgląd i rozwój, w marketingu sprzedaż", "Mechanizmem, bo są zupełnie różne",
          "Tylko liczbą zaangażowanych zmysłów", "Niczym"] },
    { u: "z8", t: "cloze", q: "Zadania z cudzą perspektywą budują empatię i elastyczność ___ w bezpiecznych, fikcyjnych warunkach.",
      a: ["poznawczą", "ruchową", "językową", "twórczą"] },

    /* ---------- Zasada 9 ---------- */
    { u: "z9", t: "mcq", q: "Dziecko maluje czarne słońce. Którą zasadę realizuje psycholog, akceptując to?",
      a: ["Doświadczenie sprawczości i internalizację poczucia kontroli", "Aktywację polisensoryczną",
          "Rytualizację", "Elastyczność struktury"] },
    { u: "z9", t: "mcq", s: "U", q: "Jak na czarne słońce reaguje nauczyciel plastyki, a jak psycholog?",
      a: ["Nauczyciel poprawi, psycholog zastanowi się, dlaczego dziecko tak namalowało", "Obaj poprawią",
          "Psycholog poprawi, nauczyciel zaakceptuje", "Obaj pochwalą estetykę"] },
    { u: "z9", t: "type", q: "Zasada 9: doświadczenie sprawczości i internalizacja poczucia ______ (LOC).", a: ["kontroli"] },
    { u: "z9", t: "mcq", q: "Wielu młodych ludzi z trudnościami czuje, że nie ma wpływu na swoje życie. Jakie mają umiejscowienie kontroli?",
      a: ["Zewnętrzne", "Wewnętrzne", "Stabilne", "Rozproszone"] },
    { u: "z9", t: "mcq", s: "D", q: "Kto jest autorem koncepcji umiejscowienia kontroli (LOC)?",
      a: ["J. Rotter", "J. Piaget", "G. Vaillant", "K. Sawicka"] },
    { u: "z9", t: "mcq", q: "Co według slajdu daje dziecku „absolutną władzę nad tworzonym światem”?",
      a: ["Czysta kartka, kawałek gliny czy pusta scena", "Gotowy szablon do pokolorowania",
          "Instrukcja krok po kroku", "Pochwała nauczyciela"] },
    { u: "z9", t: "cloze", q: "„Ja decyduję, ja kreuję, mój ___ ma znaczenie”.", a: ["głos", "wynik", "talent", "rysunek"] },
    { u: "z9", t: "tf", q: "Każda decyzja projektowa należy do młodego człowieka. Jeśli trawa w bajce jest niebieska, psycholog to akceptuje.", a: true },
    { u: "z9", t: "mcq", s: "D", q: "Internalizacja poczucia kontroli to…",
      a: ["przesuwanie się od „decydują za mnie” do „to zależy ode mnie”", "przejmowanie kontroli nad grupą",
          "tłumienie emocji", "uzależnienie od opinii innych"] },
    { u: "z9", t: "mcq", s: "U", q: "Przekonanie „ktoś steruje moim losem” odpowiada…",
      a: ["zewnętrznemu umiejscowieniu kontroli", "wewnętrznemu umiejscowieniu kontroli", "sublimacji", "teorii umysłu"] },
    { u: "z9", t: "mcq", s: "U", q: "Co według prowadzącej jest ważne, gdy otoczenie narzuca ramy (grafik w pracy, plan studiów)?",
      a: ["Nie tylko to, jakie ramy są narzucane, ale jak dana osoba je przeżywa", "Żeby ram było jak najwięcej",
          "Żeby ram w ogóle nie było", "Tylko to, kto je narzuca"] },
    { u: "z9", t: "tf", s: "U", q: "Wybór koloru jest decyzją dziecka i może nieść informację o jego przeżyciach.", a: true },

    /* ---------- Zasada 10 ---------- */
    { u: "z10", t: "mcq", q: "Czym według nurtu psychodynamicznego jest twórczość?",
      a: ["Najwyższą formą obrony przed lękiem, czyli sublimacją", "Ucieczką od rzeczywistości",
          "Objawem zaburzenia", "Nagrodą za dobre zachowanie"] },
    { u: "z10", t: "type", q: "Zamiana destrukcyjnej energii w konstruktywny lub ekspresyjny wytwór to…", a: ["sublimacja"] },
    { u: "z10", t: "mcq", q: "Nastolatek jest pełen agresji. Co proponuje wykład?",
      a: ["Dać mu ciężką glinę do uderzania i rzeźbienia albo pozwolić napisać buntowniczy tekst piosenki",
          "Stłumić agresję i wyciągnąć konsekwencje", "Wysłać go do pedagoga", "Kazać mu się uspokoić"] },
    { u: "z10", t: "mcq", q: "Co zrobić z ruchem nadaktywnego dziecka?",
      a: ["Zamienić go w ekspresyjny taniec lub improwizację ruchową", "Uciszyć dziecko",
          "Posadzić je w ławce", "Wysłać je na przerwę"] },
    { u: "z10", t: "tf", s: "U", q: "Zadaniem psychologa jest wygaszenie nadmiaru napięcia u dziecka.", a: false,
      x: "Nie wygaszenie, lecz nadanie mu kierunku: przekształcenie w twórczą aktywność." },
    { u: "z10", t: "mcq", s: "D", q: "Kto opisał sublimację jako mechanizm obronny?",
      a: ["Z. Freud", "C. Rogers", "J. Rotter", "J. Huizinga"] },
    { u: "z10", t: "mcq", s: "D", q: "Do jakich mechanizmów obronnych sublimację zalicza G. Vaillant?",
      a: ["Dojrzałych", "Niedojrzałych", "Psychotycznych", "Narcystycznych"] },
    { u: "z10", t: "cloze", q: "Zasada 10: ___ i sublimacja popędów oraz trudnych emocji.", a: ["kanalizacja", "eliminacja", "kumulacja", "negacja"] },
    { u: "z10", t: "mcq", q: "Jakie trudne stany wymienia slajd przy zasadzie 10?",
      a: ["Napięcie, złość, lęk, energię seksualną", "Nudę, zmęczenie, głód", "Radość, ekscytację, dumę", "Wyłącznie smutek"] },

    /* ---------- Tabela ---------- */
    { u: "tab", t: "sort", q: "Główny cel pracy twórczej: u kogo?", cats: ["Dzieci", "Młodzież"], items: [
      ["rozwój sensoryczny", 0], ["ciekawość", 0], ["przełamywanie schematów poznawczych", 0],
      ["autorefleksja", 1], ["budowanie tożsamości", 1], ["kanalizowanie trudnych emocji", 1]] },
    { u: "tab", t: "mcq", q: "Jaka jest rola prowadzącego wobec młodzieży?",
      a: ["Partner w dyskusji, świadek procesu, gwarant poufności i bezpieczeństwa", "Towarzysz w zabawie i animator",
          "Nauczyciel oceniający postępy", "Ekspert, który naprawia"] },
    { u: "tab", t: "mcq", q: "Jaka jest rola prowadzącego wobec dzieci?",
      a: ["Towarzysz w zabawie, facylitator, animator dostarczający bodźców", "Gwarant poufności",
          "Partner w dyskusji", "Egzaminator"] },
    { u: "tab", t: "mcq", q: "Co jest największym oporem u młodzieży?",
      a: ["Lęk przed oceną rówieśników, ironia, postawa „to jest bez sensu”", "Szybkie rozpraszanie uwagi",
          "Brak cierpliwości", "Trudność z frustracją"] },
    { u: "tab", t: "mcq", q: "Co jest największym oporem u dzieci?",
      a: ["Szybkie rozpraszanie uwagi, brak cierpliwości, trudność z frustracją", "Ironia",
          "Lęk przed oceną rówieśników", "Postawa „to jest bez sensu”"] },
    { u: "tab", t: "mcq", q: "Jaka jest motywacja dzieci?",
      a: ["Naturalna, wewnętrzna, oparta na zabawie (homo ludens)", "Zależna od poczucia sensu i autonomii",
          "Zależna od akceptacji rówieśników", "Oparta na ocenach"] },
    { u: "tab", t: "mcq", q: "Od czego zależy motywacja młodzieży?",
      a: ["Od poczucia sensu i autonomii, z silnym wpływem akceptacji rówieśniczej", "Od zabawy",
          "Od nagród rzeczowych", "Wyłącznie od rodziców"] },
    { u: "tab", t: "sort", q: "Rekomendowane techniki: dla kogo?", cats: ["Dzieci", "Młodzież"], items: [
      ["techniki sensoryczne", 0], ["bajkoterapia", 0], ["gry ruchowo-twórcze", 0],
      ["drama", 1], ["art journaling", 1], ["kolaż (manifesty)", 1], ["fotografia", 1]] },
    { u: "tab", t: "type", q: "„Człowiek bawiący się” to po łacinie homo…", a: ["ludens"] },
    { u: "tab", t: "mcq", s: "D", q: "Kto jest autorem określenia homo ludens?",
      a: ["J. Huizinga", "D. Elkind", "J. Piaget", "Z. Freud"] },
    { u: "tab", t: "mcq", s: "U", q: "Czym jest vision board?",
      a: ["Kolażem dla młodzieży: zdjęcia podpisane ideami, wartościami lub celami", "Tablicą z ocenami",
          "Planem zajęć", "Techniką sensoryczną dla przedszkolaków"] },
    { u: "tab", t: "tf", s: "U", q: "Vision board odpowiada celom młodzieży z tabeli: autorefleksji i budowaniu tożsamości.", a: true },

    /* ---------- Która to zasada? ---------- */
    { u: "mix", t: "which", q: "Psycholog mówi: „Widzę, że użyłeś dużo czerwieni”, zamiast „piękny rysunek”.", a: 1 },
    { u: "mix", t: "which", q: "Prowadzącego nie interesuje, jak wygląda gotowa praca, tylko jak dziecko pracowało.", a: 1 },
    { u: "mix", t: "which", q: "Nastolatek nie chce pokazać grupie swojego listu. Prowadzący to akceptuje.", a: 2 },
    { u: "mix", t: "which", q: "Prowadzący docenia nietypowy pomysł w pracy, zamiast wytykać krzywe linie.", a: 2 },
    { u: "mix", t: "which", q: "Grupa lepi z gliny przy muzyce, a w sali pachnie lawendą.", a: 3 },
    { u: "mix", t: "which", q: "Uczestnicy malują wielkoformatowo na podłodze i dotykają różnych faktur.", a: 3 },
    { u: "mix", t: "which", q: "Klasa przychodzi po bójce na przerwie. Prowadzący porzuca plan i zajmuje się konfliktem.", a: 4 },
    { u: "mix", t: "which", q: "Prowadzący traktuje scenariusz jako punkt wyjścia, a nie obowiązek.", a: 4 },
    { u: "mix", t: "which", q: "Dziewczynka opowiada o smutnym potworze, który zgubił się w lesie.", a: 5 },
    { u: "mix", t: "which", q: "Chłopiec gra zbuntowanego bohatera zamiast mówić wprost o swoich problemach.", a: 5 },
    { u: "mix", t: "which", q: "Każde zajęcia zaczynają się rundką „jakim kolorem dziś jesteś?”.", a: 6 },
    { u: "mix", t: "which", q: "Ławki lądują pod ścianą, a grupa siada w kręgu na poduszkach.", a: 6 },
    { u: "mix", t: "which", q: "Nastolatek mówi „to jest dla dzieci”. Prowadzący odpowiada, że może po prostu posiedzieć i popatrzeć.", a: 7 },
    { u: "mix", t: "which", q: "Uczestnicy grają rolę zepsutej zabawki zostawionej na deszczu.", a: 8 },
    { u: "mix", t: "which", q: "Uczniowie piszą list z perspektywy swojego nauczyciela.", a: 8 },
    { u: "mix", t: "which", q: "Dziecko maluje niebieską trawę i czarne słońce. Psycholog niczego nie poprawia.", a: 9 },
    { u: "mix", t: "which", q: "Każda decyzja w projekcie należy do uczestnika: kolory, postacie, zakończenie.", a: 9 },
    { u: "mix", t: "which", q: "Wściekły nastolatek uderza w ciężką glinę i z niej rzeźbi.", a: 10 },
    { u: "mix", t: "which", q: "Nadaktywne dziecko zamienia swój ruch w ekspresyjny taniec.", a: 10 },
    { u: "mix", t: "which", q: "Nastolatka pisze tekst piosenki pełen buntu i ostrych słów.", a: 10 },
    { u: "mix", t: "mcq", q: "Który element NIE należy do 10 elementów specyfiki pracy twórczej?",
      a: ["Rywalizacja i ranking najlepszych prac", "Ambiwalencja oporu", "Rytualizacja i ramy czasowo-przestrzenne", "Aktywacja polisensoryczna"] },
    { u: "mix", t: "mcq", q: "Ile elementów specyfiki pracy twórczej z dziećmi i młodzieżą omówiono na wykładzie?",
      a: ["10", "7", "5", "12"] }
  ],

  sortDecks: [
    { id: "wiek", title: "Dzieci czy młodzież?", sub: "Tabela różnic: cele, motywacja, rola, opór, techniki",
      cats: ["Dzieci", "Młodzież"], items: [
        ["rozwój sensoryczny", 0], ["ciekawość", 0], ["przełamywanie schematów poznawczych", 0],
        ["motywacja oparta na zabawie (homo ludens)", 0], ["towarzysz w zabawie", 0], ["facylitator, animator dostarczający bodźców", 0],
        ["szybkie rozpraszanie uwagi", 0], ["brak cierpliwości", 0], ["trudność z frustracją", 0],
        ["techniki sensoryczne", 0], ["bajkoterapia", 0], ["gry ruchowo-twórcze", 0], ["rysunek i malowanie", 0],
        ["autorefleksja", 1], ["budowanie tożsamości", 1], ["kanalizowanie trudnych emocji", 1],
        ["motywacja zależna od poczucia sensu i autonomii", 1], ["silny wpływ akceptacji rówieśniczej", 1],
        ["partner w dyskusji", 1], ["świadek procesu", 1], ["gwarant poufności i bezpieczeństwa", 1],
        ["lęk przed oceną rówieśników", 1], ["ironia", 1], ["postawa „to jest bez sensu”", 1],
        ["drama", 1], ["art journaling", 1], ["kolaż (manifesty)", 1], ["muzyka", 1], ["fotografia", 1], ["vision board", 1]] },
    { id: "olowek", title: "Zielony czy czerwony ołówek?", sub: "Tak robi psycholog albo tak nie robi",
      cats: ["Czerwony: błąd", "Zielony: dobrze"], items: [
        ["„Widzę, że użyłeś dużo czerwieni. Opowiesz mi o tym?”", 1],
        ["„Opowiedz mi o tym misiu. O czym on myśli?”", 1],
        ["Docenia nietypowy pomysł w pracy", 1],
        ["Akceptuje, że uczestnik nie chce pokazać pracy", 1],
        ["„Masz prawo uważać to za nudne. Możesz posiedzieć i popatrzeć.”", 1],
        ["Porzuca plan, gdy grupa przychodzi skłócona", 1],
        ["Zaczyna zajęcia rundką „jakim kolorem dziś jesteś?”", 1],
        ["Akceptuje czarne słońce i zastanawia się, skąd ten wybór", 1],
        ["Daje złemu nastolatkowi glinę do uderzania", 1],
        ["Zamienia ruch nadaktywnego dziecka w taniec", 1],
        ["Odsuwa ławki i sadza grupę w kręgu", 1],
        ["Łączy glinę z muzyką i zapachami", 1],
        ["„Piękny rysunek, super!”", 0],
        ["„Co dostałeś z kartkówki?”", 0],
        ["„Hej, słońce nie jest czarne”", 0],
        ["Zaznacza na czerwono, co nie wyszło", 0],
        ["Każe wszystkim pokazać prace grupie", 0],
        ["„Wszyscy robią, więc ty też musisz”", 0],
        ["Trzyma się scenariusza mimo kryzysu w grupie", 0],
        ["Ucisza nadaktywne dziecko", 0],
        ["Tłumi agresję nastolatka karą", 0],
        ["Ocenia estetykę gotowego dzieła", 0],
        ["Prowadzi zajęcia tylko przy biurkach, na samym myśleniu pojęciowym", 0],
        ["Wygasza napięcie zamiast nadać mu kierunek", 0]] },
    { id: "loc", title: "Kontrola wewnętrzna czy zewnętrzna?", sub: "Zasada 9: rozpoznaj umiejscowienie kontroli",
      cats: ["Zewnętrzna", "Wewnętrzna"], items: [
        ["„To zależy ode mnie.”", 1], ["„Ja decyduję, ja kreuję.”", 1], ["„Mój głos ma znaczenie.”", 1],
        ["„Jak się przygotuję, to zdam.”", 1], ["„Mogę coś zmienić.”", 1], ["„Mój wybór, moje słońce.”", 1],
        ["„Nie mam na nic wpływu.”", 0], ["„Ktoś steruje moim losem.”", 0], ["„Decydują za mnie.”", 0],
        ["„To kwestia szczęścia.”", 0], ["„I tak wszystko zależy od innych.”", 0], ["„Macie się dostosować i tyle.”", 0]] }
  ],

  /* Pomoc pamięciowa do 10 zasad (★ nie z wykładu). */
  story: { title: "10 zasad w jednej scenie", extra: true, ordered: true,
    intro: "★ Pomoc pamięciowa, nie z wykładu. Wyobraź sobie jedne zajęcia od wejścia do wyjścia:", items: [
    ["Proces", "Dziecko rysuje, a nikt nie pyta, na ile to jest."],
    ["Bezpieczeństwo", "Na stole leży tylko zielony ołówek. Czerwony został w szufladzie."],
    ["Zmysły", "Pachnie glina, gra muzyka, farba ląduje na podłodze."],
    ["Elastyczność", "Wpada skłócona klasa, więc scenariusz idzie do kosza."],
    ["Metafora", "Zamiast o sobie dzieci opowiadają o smutnym potworze w lesie."],
    ["Rytuał", "Ławki pod ścianą, krąg na poduszkach, iskierka przyjaźni."],
    ["Opór", "W kącie siedzi nastolatek: „to jest bez sensu”. Może sobie popatrzeć."],
    ["Perspektywa", "Ktoś gra zepsutą zabawkę zostawioną na deszczu."],
    ["Sprawczość", "Na rysunku wschodzi czarne słońce i nikt go nie poprawia."],
    ["Sublimacja", "Na koniec ktoś wali pięścią w glinę, a nie w kolegę."]
  ] },

  /* Notatki do czytania. Klasy: .oral = ustnie, .extra = dopowiedzenie (★). */
  notes: [
    { id: "intro", title: "O czym jest ten wykład", html:
      "<p>Wykład otwiera kurs (temat 1 z sylabusa). Pokazuje uniwersalne elementy, które odróżniają zajęcia twórcze z dziećmi i młodzieżą od standardowej edukacji i od pracy z dorosłymi. Prowadząca nazywa je <b>kluczowymi zasadami psychopedagogicznymi</b>, które każdy przyszły psycholog powinien wdrożyć w praktyce.</p>" +
      "<p><b>Zaliczenie:</b> obecność plus egzamin, czyli test pisemny z pytaniami zamkniętymi. Trzeba uzyskać <b>więcej niż 50%</b> punktów.</p>" +
      "<div class='oral'><p><b>Facylitacja</b> to sytuacja, w której obecność psychologa umożliwia rozpoczęcie i kontynuowanie procesu rozmawiania o trudnych emocjach. Obok facylitacji prowadząca wprowadziła pojęcie socjoterapii.</p></div>" +
      "<aside class='extra'><p>Termin „facylitator” spopularyzował m.in. <b>Carl Rogers</b> w nurcie humanistycznym. Facylitator nie jest ekspertem, który „naprawia”. Tworzy warunki, w których proces może zajść sam.</p>" +
      "<p><b>Socjoterapia</b> to grupowa forma pomocy psychologicznej dla dzieci i młodzieży z trudnościami emocjonalnymi i w relacjach. Opiera się na doświadczeniach korektywnych. Cele: terapeutyczne (odreagowanie, korekta przekonań), edukacyjne (umiejętności społeczne, komunikacja) i rozwojowe. Metody twórcze (rysunek, drama, ruch) są jej podstawowym narzędziem. W Polsce spopularyzowała ją m.in. K. Sawicka.</p></aside>" },
    { id: "p1", n: 1, title: "Prymat procesu nad efektem", html:
      "<p>Paradygmat <b>„tu i teraz”</b>. U dorosłych często liczy się produkt końcowy (książka, obraz, projekt). U dzieci i młodzieży największą wartość terapeutyczną i rozwojową ma <b>sam akt tworzenia</b>.</p>" +
      "<p>Psycholog nie ocenia estetyki dzieła. Zamiast „piękny rysunek” czy „super” mówi:</p>" +
      "<blockquote>„Widzę, że użyłeś dużo czerwieni i mocno naciskałeś kredkę (opowiesz mi o tym?)”</blockquote>" +
      "<p><b>Cel:</b> uwolnienie od presji perfekcjonizmu.</p>" +
      "<div class='oral'><ul><li>„Co dostałeś z kartkówki?” to typowe nastawienie dorosłych na wynik zamiast na to, jak dziecko pracowało.</li>" +
      "<li>„Wylewanie dziecka z kąpielą”: oceniając tylko efekt, tracimy to, co w pracy twórczej najcenniejsze.</li>" +
      "<li>Pytanie otwarte („opowiedz mi o tym misiu, o czym on myśli?”) uruchamia <b>projekcję</b>: mówiąc o misiu, dziecko mówi o sobie.</li>" +
      "<li><b>Projekcja myśli</b> to przypisywanie obiektowi zewnętrznemu własnych stanów wewnętrznych.</li></ul></div>" +
      "<aside class='extra'><p>W psychoanalizie projekcja to mechanizm obronny. Tu chodzi o sens z technik projekcyjnych, bez założenia obrony. Na teście trzymaj się definicji z wykładu.</p></aside>" },
    { id: "p2", n: 2, title: "Psychologiczne bezpieczeństwo", html:
      "<p>Twórczość wymaga odsłonięcia się, a to ryzyko emocjonalne (szczególnie u młodzieży). Specyfika tych zajęć to <b>całkowite zawieszenie krytyki i ocen szkolnych</b>.</p>" +
      "<p><b>Zasada zielonego ołówka:</b> zamiast wytykać błędy (czerwony ołówek) psycholog zauważa i wzmacnia to, co unikalne, nietypowe i ciekawe. Hasło ze slajdu: <mark>ZASOBY</mark>.</p>" +
      "<p><b>Prawo do odmowy:</b> uczestnik zawsze może powiedzieć „NIE” i nie pokazywać pracy grupie.</p>" +
      "<div class='oral'><p>„Nie da się uciec od oceniania”, więc psycholog świadomie zmienia jej <b>kierunek</b>: zasoby, nie błędy.</p></div>" +
      "<aside class='extra'><p>„Zielony ołówek” jest znany z oceniania kształtującego. Łączy się z tematem 4 (etyka oceniania wytworów).</p></aside>" },
    { id: "p3", n: 3, title: "Aktywacja polisensoryczna", html:
      "<p>W dobie przebodźcowania cyfrowego dzieci i młodzież potrzebują <b>zakotwiczenia w ciele</b>. Praca twórcza nie może opierać się wyłącznie na myśleniu pojęciowym.</p>" +
      "<p>Przykłady: glina przy muzyce, malowanie wielkoformatowe na podłodze, zapachy, faktury (multi-sensory environments).</p>" +
      "<p><b>Efekt:</b> regulacja układu nerwowego i łatwiejsza ekspresja dla osób, którym trudno mówić o emocjach.</p>" +
      "<div class='oral'><p>Samo siedzenie przy biurku to praca wyłącznie na myśleniu pojęciowym.</p></div>" +
      "<aside class='extra'><p>Najbardziej znana realizacja: <b>Snoezelen</b>, sala doświadczania świata z Holandii.</p></aside>" },
    { id: "p4", n: 4, title: "Elastyczność struktury", html:
      "<p><b>Sztywny scenariusz zajęć jest największym wrogiem kreatywności.</b> Prowadzący musi być gotowy na <mark>ZWROTY AKCJI</mark>.</p>" +
      "<p>Jeśli zaplanowałeś bajkę o lęku, a grupa wchodzi poruszona konfliktem w klasie, porzucasz plan i zamieniasz metodę w narzędzie do przepracowania kryzysu. Twórczość staje się <b>wentylem bezpieczeństwa</b>.</p>" +
      "<div class='oral'><p>Scenariusz jest punktem wyjścia, a nie obowiązkiem.</p></div>" },
    { id: "p5", n: 5, title: "Metaforyzacja i projekcja", html:
      "<p>Dzieciom i młodzieży trudno mówić wprost o lękach, kompleksach i traumach, więc korzystamy z narzędzi projekcyjnych.</p>" +
      "<p>Łatwiej opowiedzieć o „smutnym potworze, który zgubił się w lesie” (bajkoterapia) albo zagrać zbuntowanego bohatera (drama), niż powiedzieć „czuję się samotny i nierozumiany przez rodziców”. <b>Metafora i symbolika dają dziecku bezpieczeństwo.</b></p>" },
    { id: "p6", n: 6, title: "Rytualizacja i ramy czasowo-przestrzenne", html:
      "<p>Jasne granice oddzielają przestrzeń twórczą od „zwykłej rzeczywistości”. Hasło ze slajdu: <mark>SETTING</mark>.</p>" +
      "<p>Stałe rytuały rozpoczęcia (Iskierka przyjaźni, rundka „jakim kolorem dziś jesteś?”) i zakończenia. Fizyczna zmiana przestrzeni: odsunięte ławki, krąg na poduszkach.</p>" +
      "<aside class='extra'><p>Iskierka przyjaźni: uczestnicy w kręgu kolejno przekazują sobie uścisk dłoni. Setting w psychoterapii: stałe ramy spotkań, czyli miejsce, czas i zasady.</p></aside>" },
    { id: "p7", n: 7, title: "Ambiwalencja oporu", html:
      "<p>U dorosłych opór pojawia się rzadko (ale bywa zakamuflowany). U dzieci, a zwłaszcza młodzieży, <b>opór jest naturalnym elementem procesu</b>.</p>" +
      "<p>Za tekstami „to jest dla dzieci”, „nie umiem rysować” kryje się <b>lęk</b> przed oceną, odrzuceniem przez grupę lub trudnymi emocjami. Psycholog nie walczy i nie zmusza:</p>" +
      "<blockquote>„Masz prawo uważać to zadanie za nudne. Możesz po prostu posiedzieć z nami i popatrzeć.”</blockquote>" +
      "<p>Młodzież bez nacisku często po kilkunastu minutach sama dołącza.</p>" +
      "<div class='oral'><p>Opór jest normalny i uczestnik ma do niego prawo. To łączy się z prawem do odmowy (zasada 2).</p></div>" },
    { id: "p8", n: 8, title: "Egocentryzm i teoria umysłu", html:
      "<p>Grupowa praca twórcza (drama, wspólny scenariusz) to trening społeczny. Młodsze dzieci tkwią w <b>egocentryzmie poznawczym</b>, młodzież w <b>egocentryzmie adolescentnym</b>.</p>" +
      "<p>Zadania wymuszają cudzą perspektywę: „zagraj zepsutą zabawkę zostawioną na deszczu”, „napisz list z perspektywy nauczyciela”. Buduje to empatię i elastyczność poznawczą.</p>" +
      "<div class='oral'><ul><li>Poznawczy: dziecko oczekuje, że wszyscy znają zasady, które samo wymyśliło.</li>" +
      "<li>Afektywny: „idę na imprezę z pryszczem, to wina świata”.</li>" +
      "<li>Marki (np. kosmetyczne) budują warunki, w których odbiorca projektuje na siebie przeżycie.</li></ul></div>" +
      "<aside class='extra'><p>Poznawczy opisał <b>Piaget</b> (stadium przedoperacyjne), adolescentny <b>Elkind</b>: wyobrażona publiczność i baśń osobista. Teoria umysłu to przypisywanie innym stanów psychicznych odmiennych od własnych. Na teście używaj nazwy ze slajdu: <b>egocentryzm adolescentny</b>.</p></aside>" },
    { id: "p9", n: 9, title: "Sprawczość i poczucie kontroli (LOC)", html:
      "<p>Wielu młodych ludzi z trudnościami czuje, że nie ma wpływu na swoje życie (<b>zewnętrzne umiejscowienie kontroli</b>).</p>" +
      "<p>Czysta kartka, glina czy pusta scena dają dziecku absolutną władzę nad tworzonym światem. Każda decyzja należy do młodego człowieka. Czarne słońce i niebieska trawa? Akceptujemy.</p>" +
      "<blockquote>„Ja decyduję, ja kreuję, mój głos ma znaczenie.”</blockquote>" +
      "<div class='oral'><p>Nauczyciel plastyki poprawi czarne słońce. Psycholog zastanowi się, dlaczego dziecko tak namalowało. Ważne jest też, jak ktoś przeżywa narzucone ramy.</p></div>" +
      "<aside class='extra'><p>LOC to koncepcja <b>J. Rottera</b>. Internalizacja: od „decydują za mnie” do „to zależy ode mnie”.</p></aside>" },
    { id: "p10", n: 10, title: "Kanalizacja i sublimacja", html:
      "<p>Dzieci i młodzież noszą w sobie napięcie, złość, lęk, energię seksualną. Według nurtu psychodynamicznego twórczość jest <b>najwyższą formą obrony przed lękiem (sublimacją)</b>: zamienia destrukcyjną energię w wytwór.</p>" +
      "<p>Agresja? Ciężka glina do uderzania albo buntowniczy tekst piosenki. Nadaktywność? Ekspresyjny taniec.</p>" +
      "<div class='oral'><p>Zadaniem psychologa nie jest wygaszenie napięcia, lecz nadanie mu kierunku.</p></div>" +
      "<aside class='extra'><p>Sublimację opisał <b>Freud</b>. <b>Vaillant</b> zalicza ją do mechanizmów dojrzałych.</p></aside>" }
  ],

  table: {
    title: "Dzieci a młodzież",
    head: ["Wymiar", "Dzieci", "Młodzież"],
    rows: [
      ["Główny cel", "rozwój sensoryczny, ciekawość, przełamywanie schematów poznawczych", "autorefleksja, budowanie tożsamości, kanalizowanie trudnych emocji"],
      ["Motywacja", "naturalna, wewnętrzna, oparta na zabawie (homo ludens)", "zależna od poczucia sensu i autonomii; silny wpływ akceptacji rówieśniczej"],
      ["Rola prowadzącego", "towarzysz w zabawie, facylitator, animator dostarczający bodźców", "partner w dyskusji, świadek procesu, gwarant poufności i bezpieczeństwa"],
      ["Największy opór", "szybkie rozpraszanie uwagi, brak cierpliwości, trudność z frustracją", "lęk przed oceną rówieśników, ironia, postawa „to jest bez sensu”"],
      ["Techniki", "techniki sensoryczne, bajkoterapia, gry ruchowo-twórcze, rysunek, malowanie", "drama, art journaling, kolaż (manifesty), muzyka, fotografia"]
    ]
  }
});
