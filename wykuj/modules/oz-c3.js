/* Ćwiczenia u dr Wioletty Ozgi (grupy 1, 2, 3, 8, 10), lektury i czytanki: czytanka 3.
 *
 * Źródło (zrzuty ekranu od studenta, Dysk Google „modul 2 i 3 ozga/3modul.pdf”):
 *   J.W. Kalat, „Biologiczne podstawy psychologii”, rozdz. 6 „Wzrok”, s. 150–155 i 164–168
 *   (ciąg dalszy czytanki 1: widzenie barw; potem kora wzrokowa i analiza kształtu)
 *
 *   "S" z czytanki (domyślne)
 *   "D" dopowiedzenie spoza czytanki (★). Kartkówka próbna je pomija.
 */
Wykuj.registerModule({
  id: "oz-c3",
  kind: "reading",
  course: { id: "ozga", name: "Dr Wioletta Ozga", short: "Ćw. Ozga", groups: "grupy 1, 2, 3, 8, 10", theme: "amber", icon: "book", section: "cw" },
  shelf: "Lektury i czytanki – po ludzku",
  number: 3,
  label: "Czytanka 3",
  title: "Kolory i kora wzrokowa",
  byline: "Kalat „Wzrok”, s. 150–155 i 164–168",
  sources: ["J.W. Kalat, „Biologiczne podstawy psychologii”, rozdz. 6 „Wzrok”, s. 150–155 (widzenie barwne) i 164–168 (kora mózgowa: droga analizy kształtu)"],
  term: "Ćwiczenia · lektura",
  passing: null,
  passRatio: 0.6,
  examNote: "Nie wiadomo, jak prowadząca sprawdza czytanki. Próg 60% to punkt odniesienia: kto go przekracza, zna tekst dobrze.",
  minimumTitle: "Najważniejsze w 5 minut",
  sourceNames: { S: "z czytanki", D: "★ dopowiedzenie spoza czytanki" },

  sets: {
    teoria: { label: "Która teoria widzenia barw?", numbered: true,
      items: ["Teoria trichromatyczna (Young–Helmholtz)", "Teoria przeciwstawnych procesów (Hering)", "Teoria retinex (Land)"],
      why: ["barwa = porównanie pobudzenia trzech typów czopków",
            "barwy kodowane parami przeciwieństw: czerwony–zielony, żółty–niebieski, biały–czarny",
            "kora porównuje informacje z różnych części siatkówki; wyjaśnia stałość barw i jasności"] },
    komorka: { label: "Który typ komórki kory wzrokowej?", numbered: true,
      items: ["Komórka prosta", "Komórka złożona", "Komórka z hamulcowym brzegiem"],
      why: ["tylko V1; najmniejsze pole; sztywny podział na strefę pobudzeniową i hamulcową",
            "V1 i V2; pasek o danej orientacji w dowolnym miejscu pola, najlepiej w ruchu prostopadłym do osi",
            "jak złożona, ale z silnie hamującym obszarem na jednym końcu pola; największe pole"] },
    strumien: { label: "Uszkodzenie którego strumienia?", numbered: true,
      items: ["Strumień brzuszny (kora skroniowa)", "Strumień grzbietowy (kora ciemieniowa)"],
      why: ["nie opisze rozmiaru, kształtu, położenia, ale sięgnie po przedmiot i go ominie",
            "dokładnie opisze, co widzi, ale nie sięgnie precyzyjnie po przedmiot"] }
  },

  units: [
    { id: "start", title: "Problem kodowania barwy", sub: "Kalat s. 150: jeden neuron to za mało", icon: "bulb" },
    { id: "tri", title: "Trzy typy czopków", sub: "Teoria trichromatyczna (s. 150–152)", icon: "sun", seq: true,
      teach: "<p><b>Young</b> wpadł na pomysł, a <b>Helmholtz</b> go dopracował: ludzie mogą uzyskać każdą barwę, mieszając <b>trzy</b> długości fal. Wniosek: wystarczą <b>trzy typy czopków</b> (krótko-, średnio- i długofalowe).</p>" +
        "<p>Każdy czopek reaguje na szeroki zakres fal. Barwę daje <b>proporcja</b> ich pobudzeń: 500 nm pobudza średniofalowe na ok. 65%, długofalowe na 40%, krótkofalowe na 10–15%, i widzimy niebieskozielony. Gdy wszystkie są pobudzone jednakowo, widzimy biel lub szarość.</p>" },
    { id: "rozmieszczenie", title: "Gdzie są czopki", sub: "Mało niebieskich, rozmieszczenie przypadkowe (s. 151–152)", icon: "target" },
    { id: "przeciw", title: "Pary przeciwieństw", sub: "Teoria przeciwstawnych procesów (s. 152–154)", icon: "split", seq: true,
      teach: "<p>Popatrz minutę na kolorowy obrazek, a potem na białą ścianę: zobaczysz <b>negatywowy powidok</b>, w którym czerwony zmienia się w zielony, żółty w niebieski, biały w czarny.</p>" +
        "<p><b>Hering</b>: barwy są kodowane w parach <b>czerwony–zielony</b>, <b>żółty–niebieski</b>, <b>biały–czarny</b>. Komórka „zmęczona” jednym kolorem po przejściu na biel daje wrażenie koloru przeciwnego.</p>" },
    { id: "retinex", title: "Stałość barw i jasności", sub: "Teoria retinex (s. 154–155)", icon: "eye" },
    { id: "dalton", title: "Ślepota na barwy", sub: "Zaburzenia widzenia barwnego (s. 155)", icon: "x" },
    { id: "strumienie", title: "Co i gdzie", sub: "Strumień brzuszny i grzbietowy (s. 164)", icon: "path" },
    { id: "hubel", title: "Hubel i Wiesel", sub: "Pasek światła i krawędź slajdu (s. 164)", icon: "star" },
    { id: "komorki", title: "Proste, złożone, z hamulcowym brzegiem", sub: "Typy komórek w korze wzrokowej (s. 164–166)", icon: "cards", table: true, seq: true,
      teach: "<p><b>Prosta</b> (tylko V1): pole w kształcie paska z <b>ustalonymi</b> strefami pobudzeniową i hamulcową; reaguje na pasek w jednym miejscu i o jednej orientacji.</p>" +
        "<p><b>Złożona</b> (V1 i V2): pasek o danej orientacji <b>w dowolnym miejscu</b> pola, najsilniej, gdy porusza się prostopadle do swojej osi.</p>" +
        "<p><b>Z hamulcowym brzegiem</b> (hiperzłożona): jak złożona, ale z silnie hamującym <b>końcem</b> pola.</p>" },
    { id: "kolumny", title: "Kolumny w korze", sub: "Organizacja kolumnowa (s. 166–167)", icon: "column" },
    { id: "detektory", title: "Detektory cech?", sub: "Efekt wodospadu i częstotliwości przestrzenne (s. 167–168)", icon: "spiral" },
    { id: "ksztalt", title: "Kształty poza V1", sub: "V2, V4 i dolna kora skroniowa (s. 168)", icon: "shapes" },
    { id: "mix", title: "Rozpoznaj w życiu", sub: "Sytuacje i eksperymenty „zrób to sam”", icon: "dice" },
    { id: "boss", title: "Test z całej czytanki", sub: "15 pytań ze wszystkich lekcji", icon: "crown", boss: true }
  ],

  concepts: [
    /* ---------- Start ---------- */
    { id: "retinal", u: "start", term: "Retinal i opsyna",
      plain: "W receptorze jest barwnik, który światło natychmiast „przestawia”. Ta zmiana uruchamia pracę komórki.",
      def: "Barwnik receptora to 11-cis-retinal połączony z białkiem opsyną. W ciemności 11-cis-retinal nie zmienia struktury; energia świetlna niemal natychmiast przekształca go w formę trans-retinal, co steruje aktywnością komórki. Światło jest przy tym pochłaniane i nie odbija się w oku.",
      sh: "światło przestawia cis → trans" },
    { id: "gwiazda", u: "start", term: "Słaba gwiazda kątem oka",
      plain: "W nocy słabą gwiazdę lepiej widać, gdy patrzysz trochę obok niej, bo wtedy jej światło pada na pręciki.",
      def: "Pytanie kontrolne 4 (s. 150): słabą gwiazdę łatwiej zobaczyć, patrząc nieco obok niej. Widzenie obwodowe (więcej pręcików, duża zbieżność) dobrze reaguje na słabe światło, a dołek środkowy (czopki) słabo (tabela 6.1).",
      sh: "obwód siatkówki czulszy na słabe światło" },
    { id: "szczury", u: "start", term: "Widzenie barw wymaga porównania",
      plain: "Do kolorów trzeba co najmniej dwóch typów czopków, które można porównać. Szczury mają jeden i kolorów nie widzą.",
      def: "Prawie wszystkie kręgowce mają pręciki i czopki, ale widzenie barwne wymaga porównywania aktywności różnych typów czopków. Szczury mają jeden typ czopków i nie rozróżniają kolorów.",
      sh: "jeden typ czopków = brak kolorów" },
    { id: "kodowanie", u: "start", term: "Problem kodowania barwy",
      plain: "Neuron może tylko szybciej albo wolniej „strzelać”. Nie może jednocześnie powiedzieć „jasne” i „zielone”. Dlatego kolor to wzór aktywności wielu neuronów.",
      def: "Neuron może jedynie zmieniać częstotliwość potencjałów czynnościowych (lub stopień polaryzacji błony). Jeśli sygnalizuje jasność, nie może sygnalizować barwy, i odwrotnie. Spostrzeżenia muszą opierać się na wzorcach aktywności wielu neuronów.",
      sh: "jasność i barwa nie w jednym neuronie" },

    /* ---------- Trichromatyczna ---------- */
    { id: "young", u: "tri", term: "Thomas Young",
      plain: "Brytyjski lekarz i geniusz od wszystkiego. Pierwszy powiedział, że kolor trzeba wyjaśniać biologią, a nie tylko fizyką.",
      def: "Thomas Young (1773–1829): częściowo odczytał kamień z Rosetty, położył podwaliny nowoczesnej optyki, wprowadził współczesną definicję energii. Jako jeden z pierwszych uznał, że barwa wymaga wyjaśnienia biologicznego. Hipoteza: widzenie barw to porównanie aktywności niewielkiej liczby receptorów wrażliwych na różne zakresy fal.",
      sh: "barwa wymaga wyjaśnienia biologicznego" },
    { id: "trichromatyczna", u: "tri", term: "Teoria trichromatyczna (Younga–Helmholtza)",
      plain: "Mamy trzy typy czopków. Kolor to proporcja, w jakiej każdy z nich się pobudził.",
      def: "Percepcja barw opiera się na ocenie względnej siły pobudzeń trzech typów czopków, z których każdy jest maksymalnie wrażliwy na inny zakres długości fal („trichromatyczna” = „trójkolorowa”). Teorię Younga udoskonalił Hermann von Helmholtz.",
      sh: "proporcja pobudzeń trzech czopków" },
    { id: "helmholtz", u: "tri", term: "Helmholtz i psychofizyka",
      plain: "Helmholtz pytał ludzi, co widzą. Okazało się, że każdą barwę da się uzyskać, mieszając tylko trzy fale.",
      def: "Helmholtz gromadził obserwacje psychofizyczne (sprawozdania obserwatorów o spostrzeżeniach bodźców). Odkrył, że dowolną barwę można uzyskać, mieszając w odpowiednich proporcjach trzy długości fal, więc wystarczą trzy rodzaje receptorów, dziś zwane czopkami.",
      sh: "trzy fale wystarczą do każdej barwy" },
    { id: "trzy-czopki", u: "tri", term: "Czopki krótko-, średnio- i długofalowe",
      plain: "Trzy typy czopków: „niebieskie”, „zielone” i „czerwone”. Każdy reaguje na wiele fal, ale na jedne mocniej.",
      def: "Rysunek 6.10: czopki krótkofalowe, średniofalowe i długofalowe. Każdy reaguje na szeroki zakres fal, ale maksymalną czułość ma w węższym zakresie.",
      sh: "szeroki zakres, jeden szczyt" },
    { id: "przyklad-500", u: "tri", term: "Przykład: 500 nm",
      plain: "Światło 500 nm pobudza „zielone” czopki na 65%, „czerwone” na 40%, „niebieskie” na 10–15%. Ta mieszanka daje niebieskozielony.",
      def: "Światło o długości 500 nm pobudza czopki średniofalowe do ok. 65% maksimum, długofalowe do 40%, krótkofalowe do 10–15%. Taka proporcja daje wrażenie barwy niebieskozielonej.",
      sh: "65/40/10–15% = niebieskozielony" },
    { id: "jasniej", u: "tri", term: "Mocniejsze światło, ten sam kolor",
      plain: "Jaśniejsze światło pobudza wszystkie czopki mocniej, ale proporcja zostaje, więc kolor jest ten sam, tylko jaśniejszy.",
      def: "Zwiększenie intensywności światła nasila aktywność wszystkich czopków, ale nie zmienia istotnie względnych różnic. Barwa jest jaśniejsza, lecz ten sam odcień. Gdy wszystkie typy czopków są jednakowo aktywne, widzimy biel lub szarość.",
      sh: "proporcja = odcień, poziom = jasność" },
    { id: "wieloznacznosc", u: "tri", term: "Jeden czopek jest wieloznaczny",
      plain: "Sam „zielony” czopek nie wie, czy dostał słabe światło idealne dla siebie, czy mocne światło innej fali.",
      def: "Słaba reakcja czopka średniofalowego może oznaczać słabe światło 540 nm, jaśniejsze 500 nm albo jeszcze silniejsze 460 nm. Barwę i natężenie układ nerwowy ocenia wyłącznie przez porównanie aktywności trzech typów czopków.",
      sh: "dopiero porównanie usuwa niejasność" },

    /* ---------- Rozmieszczenie ---------- */
    { id: "malo-niebieskich", u: "rozmieszczenie", term: "Mało czopków „niebieskich”",
      plain: "W środku siatkówki jest dużo czopków czerwonych i zielonych, a mało niebieskich. Dlatego niebieskie kropki z daleka robią się czarne.",
      def: "W środkowej części siatkówki czopki długo- i średniofalowe są znacznie liczniejsze niż krótkofalowe (niebieskie), więc łatwiej dostrzec mikroskopijne punkciki czerwone, żółte lub zielone niż niebieskie (Roorda, Williams, 1999). Niebieskie kropki z daleka wydają się czarne.",
      sh: "niebieskie z daleka czernieją" },
    { id: "przypadkowe", u: "rozmieszczenie", term: "Przypadkowe rozmieszczenie czopków",
      plain: "Czopki trzech typów są porozrzucane bez ładu i u każdego inaczej. Są całe łaty z samymi „czerwonymi” albo „zielonymi”.",
      def: "Trzy typy czopków są rozmieszczone przypadkowo (Roorda i in., 2001). Rys. 6.11: różnice między dwiema osobami, mało czopków krótkofalowych, obszary z samymi średnio- lub długofalowymi. Lokalnie brakuje zróżnicowania potrzebnego do widzenia barw.",
      sh: "porozrzucane, różne u różnych osób" },
    { id: "obwod-barwa", u: "rozmieszczenie", term: "Na obwodzie barwa ginie",
      plain: "Kolorowy punkt na palcu zobaczysz kątem oka, ale jego kolor rozpoznasz dopiero bliżej środka pola widzenia.",
      def: "Blisko dołka nierównomierne rozmieszczenie nie przeszkadza, ale na obwodzie, gdzie czopków jest mało, trudno określić barwę małych przedmiotów (Martin i in., 2001). Palec zobaczysz dużo wcześniej, niż rozpoznasz jego kolor; im mniejsza kropka (zwłaszcza niebieska), tym bliżej środka trzeba ją przesunąć.",
      sh: "kształt kątem oka, kolor w centrum" },

    /* ---------- Przeciwstawne ---------- */
    { id: "powidok", u: "przeciw", term: "Negatywowy powidok barwny",
      plain: "Po minucie patrzenia na kolorowy obrazek na białej ścianie widzisz ten sam obrazek w kolorach przeciwnych.",
      def: "Po wpatrywaniu się w obraz w jasnym świetle przez minutę i przeniesieniu wzroku na białą powierzchnię widać powidok, w którym czerwony zamienia się w zielony, zielony w czerwony, żółty w niebieski, a biały w czarny (rys. 6.12). Teoria trichromatyczna tego nie wyjaśnia.",
      sh: "kolory zamieniają się na przeciwne" },
    { id: "hering", u: "przeciw", term: "Teoria przeciwstawnych procesów (Hering)",
      plain: "Kolory działają w parach przeciwieństw. Dlatego nie ma koloru „czerwonozielonego” ani „żółtoniebieskiego”.",
      def: "XIX-wieczny fizjolog Ewald Hering: widzenie barw opiera się na przeciwstawnych parach: czerwony–zielony, żółty–niebieski, biały–czarny (Hurvich, Jameson, 1957). Nie istnieje barwa czerwonozielona ani żółtoniebieska. Mózg tworzy barwę na dwóch wymiarach: od czerwonego do zielonego i od żółtego do niebieskiego.",
      sh: "pary: czerwony–zielony, żółty–niebieski, biały–czarny" },
    { id: "dwubiegunowa-barwa", u: "przeciw", term: "Komórka dwubiegunowa „niebieskie–żółte”",
      plain: "Komórka, którą niebieskie światło pobudza, a żółte hamuje. Więcej aktywności = niebieski, mniej = żółty.",
      def: "Rys. 6.13: komórka dwubiegunowa pobudzana przez światło krótkofalowe (niebieskie), hamowana przez długo- lub średniofalowe, a najbardziej przez ich mieszaninę (żółty). Wzrost aktywności daje wrażenie niebieskiego, spadek – żółtego. Białe światło pobudza i hamuje mniej więcej po równo.",
      sh: "w górę niebieski, w dół żółty" },
    { id: "zmeczenie", u: "przeciw", term: "Zmęczenie komórki a powidok",
      plain: "Długo patrzysz na niebieskie: komórka się męczy. Potem białe światło bardziej ją hamuje, niż pobudza, i widzisz żółty.",
      def: "Długotrwała stymulacja światłem krótkofalowym męczy komórkę. Oświetlona potem białym światłem jest bardziej hamowana niż pobudzana; jej aktywność spada poniżej poziomu podstawowego, co daje wrażenie żółtego. Wiele neuronów od komórek dwubiegunowych po korę jest pobudzanych przez jedne fale, a hamowanych przez inne.",
      sh: "zmęczony kanał = kolor przeciwny" },
    { id: "niepelna", u: "przeciw", term: "Wyjaśnienie niepełne",
      plain: "Białe kółko powinno dać szary albo czarny powidok, a ludzie widzą zielony. Teoria nie wyjaśnia wszystkiego.",
      def: "W eksperymencie z czerwonym kwadratem i białym kółkiem otaczający kwadrat daje czerwony powidok, zgodnie z teorią. Ale kółko zamiast szarego lub czarnego (przeciwieństwo bieli) daje powidok zielony.",
      sh: "kółko daje zielony, nie szary" },
    { id: "powidok-zludzenia", u: "przeciw", term: "Powidok złudzenia (Shimojo i in., 2001)",
      plain: "Ludzie widzą zielony powidok czerwonego kwadratu, którego wcale nie było. Więc powidok robi mózg, nie tylko oko.",
      def: "Rys. 6.14: cztery czerwone ćwiartki koła tworzą złudzenie czerwonego kwadratu. Powidok to czasem cztery zielone ćwiartki, a czasem cały zielony kwadrat, czyli powidok złudzenia. Powidoki zależą przynajmniej częściowo od obszaru mózgu tworzącego złudzenie, najpewniej kory, a nie od samej siatkówki.",
      sh: "powidok czegoś, czego nie było" },

    /* ---------- Retinex ---------- */
    { id: "stalosc-barw", u: "retinex", term: "Stałość barw",
      plain: "W zielonych okularach banan nadal wydaje ci się żółty, a kartka biała. Mózg odejmuje zieleń od wszystkiego naraz.",
      def: "Zdolność do rozpoznania koloru przedmiotu pomimo zmiany oświetlenia. Z zielonymi okularami lub przy zielonej żarówce banan dalej jest żółty, a papier biały, bo porównujemy barwę jednego przedmiotu z innymi i odejmujemy od każdego tę samą zieleń. Wymaga porównania wszystkich przedmiotów w polu widzenia.",
      sh: "kolor ten sam mimo zmiany światła" },
    { id: "stalosc-jasnosci", u: "retinex", term: "Stałość jasności",
      plain: "Dwie połowy obrazka wydają się szara i biała, a po zasłonięciu środka okazują się tak samo jasne.",
      def: "Ocena jasności też wymaga porównania z innymi przedmiotami. Rys. 6.15 (Purves, Shimpi, Lotto, 1999): wydaje się, że góra jest szara, a dół biały; po zakryciu granicy palcami obie części mają tę samą jasność.",
      sh: "jasność oceniamy przez porównanie" },
    { id: "retinex", u: "retinex", term: "Teoria retinex (Land)",
      plain: "Siatkówka + kora. Kora porównuje sygnały z całej siatkówki i dopiero wtedy ustala kolor i jasność każdego miejsca.",
      def: "Edwin Land; nazwa z ang. retina (siatkówka) i cortex (kora). Kora porównuje informacje z różnych części siatkówki, aby określić jasność i barwę w każdym obszarze. Gdy wykryje stały składnik zieleni w całym polu, odejmuje go od każdego obiektu. Wyjaśnia stałość barw, której nie tłumaczą dwie pozostałe teorie.",
      sh: "kora porównuje całą siatkówkę" },
    { id: "purves", u: "retinex", term: "Widzenie jako wnioskowanie (Purves)",
      plain: "Mózg pyta: „co to zwykle było, gdy widziałem coś takiego?”. Widzenie to rodzaj rozumowania, nie tylko pobudzenie oka.",
      def: "Dale Purves i współpracownicy: widząc, wnioskujemy o cechach przedmiotu i „konstruujemy” go w świadomości. Mózg szacuje, jaki przedmiot mógł wytworzyć dany wzorzec stymulacji (także przy kształcie i ruchu). Percepcja wzrokowa to coś więcej niż pobudzenie siatkówki: to proces rozumowania.",
      sh: "percepcja to rozumowanie" },

    /* ---------- Daltonizm ---------- */
    { id: "daltonizm", u: "dalton", term: "Ślepota na barwy (daltonizm)",
      plain: "Niezdolność do rozróżniania niektórych kolorów. Kalat uważa jej odkrycie za wielkie odkrycie psychologii.",
      def: "Niezdolność do rozróżniania niektórych barw. Całkowita ślepota na barwy (tylko odcienie czerni i bieli) jest rzadka. Kalat podaje ją jako swój typ wielkiego odkrycia psychologii.",
      sh: "nie rozróżnia niektórych barw" },
    { id: "nie-kopia", u: "dalton", term: "Wzrok nie kopiuje świata",
      plain: "Przed XVII wiekiem myślano, że oko po prostu kopiuje to, co widzi. Daltonizm pokazał, że można dobrze widzieć bez kolorów.",
      def: "Przed odkryciem ślepoty na barwy w XVII wieku sądzono, że wzrok kopiuje przedmioty (okrągłe – widzimy okrągłość, żółte – żółć). Naukowcy odkryli, że można poprawnie widzieć, nie spostrzegając barw.",
      sh: "można widzieć bez barw" },
    { id: "typy-dalton", u: "dalton", term: "Rodzaje zaburzeń widzenia barw",
      plain: "Może brakować jednego typu czopków, może ich być bardzo mało albo mogą być zdeformowane.",
      def: "Z powodu mutacji genetycznych można nie mieć jednego rodzaju czopków (długo-, średnio- lub krótkofalowych); inni nie mają dwóch typów (Nathans i in., 1989). Niektórzy mają wszystkie trzy, ale bardzo mało albo zdeformowane.",
      sh: "brak, niedobór lub deformacja czopków" },
    { id: "czerwono-zielony", u: "dalton", term: "Ślepota czerwono-zielona",
      plain: "Najczęstsza. Gen jest na chromosomie X, dlatego dotyczy ok. 8% mężczyzn i niecałego 1% kobiet.",
      def: "Najbardziej rozpowszechniona forma: trudność z odróżnieniem zielonego od czerwonego. Mutacja sprawia, że czopki długo- i średniofalowe wytwarzają jeden barwnik zamiast dwóch. Gen leży na chromosomie X. Nie odróżnia czerwieni od zieleni ok. 8% mężczyzn i niecały 1% kobiet (Bowmaker, 1998).",
      sh: "chromosom X: 8% mężczyzn, <1% kobiet" },
    { id: "chromosom", u: "dalton", s: "D", term: "★ Dlaczego częściej u mężczyzn",
      plain: "Mężczyzna ma jeden chromosom X, więc jedna wadliwa kopia genu wystarczy. Kobieta ma dwa X i zwykle drugi jest zdrowy.",
      def: "★ Mężczyźni mają chromosomy XY, kobiety XX. Gen na chromosomie X w jednej wadliwej kopii daje u mężczyzny objaw, a u kobiety zwykle kompensuje go druga, prawidłowa kopia.",
      sh: "jeden X u mężczyzn" },

    /* ---------- Strumienie ---------- */
    { id: "brzuszny", u: "strumienie", term: "Uszkodzenie strumienia brzusznego",
      plain: "Ktoś nie potrafi opisać, co widzi, ale umie po to sięgnąć. Gorzej też wyobraża sobie kształty i twarze.",
      def: "Uszkodzenie strumienia brzusznego (kora skroniowa): nie można w pełni opisać rozmiaru, kształtu ani położenia przedmiotów, ale można po nie sięgać, podchodzić do nich lub je omijać. Upośledzone jest wyobrażanie kształtów i twarzy, np. czy Jerzy Waszyngton miał brodę (Kosslyn i in., 2001).",
      sh: "nie opisze, ale sięgnie" },
    { id: "grzbietowy", u: "strumienie", term: "Uszkodzenie strumienia grzbietowego",
      plain: "Ktoś dokładnie opisze kubek, ale nie potrafi precyzyjnie po niego sięgnąć ani opisać z pamięci, gdzie stoją meble.",
      def: "Uszkodzenie strumienia grzbietowego (kora ciemieniowa): dokładny opis tego, co się widzi, ale brak koordynacji z działaniem; nieprecyzyjne sięganie po przedmiot (Goodale, Milner i in.). Trudność z wyobrażeniem lub opisem położenia z pamięci (pokoje w domu, meble).",
      sh: "opisze, ale nie sięgnie" },
    { id: "co-gdzie", u: "strumienie", term: "Identyfikacja to nie lokalizacja",
      plain: "Rozpoznanie, co to jest, i ustalenie, gdzie to jest, to dwa różne zadania mózgu.",
      def: "Podsumowanie Kalata: wzrokowa identyfikacja przedmiotów jest czymś innym niż spostrzeganie ich położenia.",
      sh: "co ≠ gdzie" },

    /* ---------- Hubel ---------- */
    { id: "hubel-wiesel", u: "hubel", term: "Hubel i Wiesel",
      plain: "W latach 50. pokazywali kotom i małpom wzory świetlne i mierzyli, jak reagują pojedyncze neurony w korze. Dostali za to Nobla.",
      def: "David Hubel i Torsten Wiesel (1959) rzutowali wzorce świetlne na siatkówkę i rejestrowali aktywność komórek w mózgu kota lub małpy. Ich badania, nagrodzone Noblem, nazywa się „eksperymentami, które zaowocowały tysiącem mikroelektrod” (dziś raczej milionami).",
      sh: "neurony kory, Nobel" },
    { id: "krawedz-slajdu", u: "hubel", term: "Odkrycie przy wkładaniu slajdu",
      plain: "Punkty światła prawie nie działały. Komórka „wystrzeliła” dopiero na krawędź slajdu wsuwanego do rzutnika.",
      def: "Najpierw pokazywali punkty świetlne i uzyskiwali niewielką reakcję komórek kory. Dużą reakcję uzyskali dopiero podczas wkładania slajdu do rzutnika: komórka reagowała na krawędź slajdu i miała pole recepcyjne w kształcie paska.",
      sh: "pole w kształcie paska" },
    { id: "mikroelektrody", u: "hubel", term: "Rejestracja mikroelektrodami",
      plain: "Cienka elektroda przy pojedynczej komórce mózgu zapisuje, na jakie bodźce ta komórka reaguje.",
      def: "Metody 6.1: zwierzę się znieczula, wierci mały otwór w czaszce i wkłada cienką elektrodę (drucik z odsłoniętą końcówką albo szklaną rurkę z roztworem soli) w komórkę lub obok niej. Rejestruje się jej aktywność przy różnych bodźcach, np. wzorcach świetlnych.",
      sh: "aktywność jednego neuronu" },

    /* ---------- Komórki ---------- */
    { id: "prosta", u: "komorki", term: "Komórka prosta",
      plain: "Reaguje na pasek światła w jednym konkretnym miejscu i pod jednym kątem. Ma wyraźnie podzielone pole: tu pobudza, tam hamuje.",
      def: "Występuje wyłącznie w V1. Pole recepcyjne w kształcie paska lub krawędzi ze sztywnym podziałem na część pobudzeniową i hamulcową; najmniejsze pole. Im więcej światła w strefie pobudzeniowej, tym silniejsza reakcja; im więcej w hamulcowej, tym słabsza. Pasek przesunięty lub odchylony od preferowanej orientacji daje słabą reakcję.",
      sh: "jedno miejsce, sztywne strefy, tylko V1" },
    { id: "orientacja", u: "komorki", term: "Pion i poziom przeważają",
      plain: "Więcej komórek lubi linie pionowe i poziome niż ukośne, bo większość ważnych rzeczy tak stoi.",
      def: "Pola komórek prostych są zorientowane pionowo, poziomo lub pośrednio; pionowe i poziome przeważają nad ukośnymi, prawdopodobnie dlatego, że większość ważnych obiektów ma takie ustawienie (Coppola i in., 1998).",
      sh: "więcej pionowych i poziomych" },
    { id: "zlozona", u: "komorki", term: "Komórka złożona",
      plain: "Reaguje na pasek o danym nachyleniu gdziekolwiek w swoim dużym polu, najmocniej, gdy pasek się porusza w poprzek.",
      def: "Występuje w V1 i V2; średnie pole bez wydzielonych stref pobudzeniowej i hamulcowej. Reaguje na bodziec o określonej orientacji w dowolnym miejscu pola, najsilniej, gdy porusza się on prostopadle do swojej osi (np. pionowy pasek w poziomie).",
      sh: "dana orientacja, dowolne miejsce, ruch" },
    { id: "jak-odroznic", u: "komorki", term: "Jak odróżnić prostą od złożonej",
      plain: "Przesuń trochę pasek. Jeśli komórka przestaje reagować, jest prosta. Jeśli reaguje dalej, jest złożona.",
      def: "Najlepiej lekko przemieszczać pasek: komórka reagująca tylko w jednej lokalizacji to prosta, reagująca na dużym obszarze to złożona.",
      sh: "przesuń pasek i patrz" },
    { id: "z-prostych", u: "komorki", term: "Złożone zbierają sygnały z prostych",
      plain: "Gdy wyłączono komórki proste, złożone też przestały reagować. Więc dostają od nich sygnał.",
      def: "Hipotezę sprawdzono bezpośrednio: GABA (neuroprzekaźnik hamujący) zablokował przewodzenie z ciała kolankowatego bocznego do komórek prostych. Gdy proste przestały reagować, złożone też (Martinez, Alonso, 2001).",
      sh: "potwierdzone blokadą GABA" },
    { id: "hamulcowy", u: "komorki", term: "Komórka z hamulcowym brzegiem (hiperzłożona)",
      plain: "Jak złożona, ale ma „hamulec” na jednym końcu pola. Zbyt długi pasek ją wyłącza.",
      def: "Ang. end-stopped cell. Przypomina komórkę złożoną, ale ma silnie hamujący obszar na jednym końcu pola recepcyjnego: reaguje na pasek w dowolnym miejscu pola, o ile nie wychodzi on poza pewną granicę. V1 i V2; największe pole.",
      sh: "złożona + hamujący koniec" },

    /* ---------- Kolumny ---------- */
    { id: "kolumny", u: "kolumny", term: "Kolumnowa organizacja kory wzrokowej",
      plain: "Komórki o podobnych upodobaniach stoją jedna pod drugą, w słupkach prostopadłych do powierzchni kory.",
      def: "Komórki o podobnych właściwościach grupują się w kolumny prostopadłe do powierzchni kory (Hubel, Wiesel, 1977). W jednej kolumnie reagują głównie na lewe oko, głównie na prawe albo tak samo na oba, i najsilniej na linie o tej samej orientacji.",
      sh: "kolumna = podobne właściwości" },
    { id: "elektroda-ab", u: "kolumny", term: "Elektroda prosto i ukośnie",
      plain: "Elektroda wbita prosto w dół trafia na komórki lubiące ten sam kąt. Wbita ukośnie przecina kolumny i trafia na różne kąty.",
      def: "Rys. 6.26: elektroda wnikająca prostopadle (A) napotyka neurony o tej samej preferowanej orientacji; po przejściu przez istotę białą wchodzi w inną kolumnę. Elektroda ukośna (B) przechodzi przez trzy kolumny i napotyka różne orientacje. Komórki w jednej kolumnie przetwarzają podobne informacje.",
      sh: "prostopadle: ta sama orientacja" },

    /* ---------- Detektory ---------- */
    { id: "detektor", u: "detektory", term: "Detektor cech",
      plain: "Neuron, którego aktywność znaczy „tu jest pionowa linia” albo „tu jest krawędź”.",
      def: "Neuron, którego reakcja oznacza wystąpienie danej cechy. Skoro neurony V1 silnie reagują na paski i krawędzie, naturalne jest przypuszczenie, że są detektorami cech, a komórki w dalszych regionach – detektorami bardziej złożonych kształtów.",
      sh: "neuron = obecność cechy" },
    { id: "wodospad", u: "detektory", term: "Efekt wodospadu",
      plain: "Po minucie patrzenia na wodospad skały obok zdają się płynąć do góry. „Zmęczyły się” detektory ruchu w dół.",
      def: "Argument za detektorami cech: długie patrzenie na cechę zmniejsza wrażliwość na nią. Po minucie–dwóch patrzenia na wodospad skały i drzewa obok pozornie wznoszą się, bo zmęczone są neurony wykrywające ruch w dół, a odhamowane te od ruchu przeciwnego. To samo daje wolne przewijanie ekranu.",
      sh: "zmęczone detektory ruchu w dół" },
    { id: "populacja", u: "detektory", term: "Odpowiedź populacji",
      plain: "Każdy neuron reaguje trochę na wiele bodźców. Dopiero porównanie wielu komórek mówi, co widzimy.",
      def: "Jak czopek reaguje na cały zakres fal, tak neuron, który najlepiej reaguje na jeden bodziec, reaguje też na inne. Każdy bodziec wzbudza całą populację komórek; reakcja komórki jest niejednoznaczna, dopóki nie porówna się jej z innymi (Tsunoda i in., 2001).",
      sh: "znaczenie daje porównanie wielu" },
    { id: "czestotliwosc", u: "detektory", term: "Częstotliwości przestrzenne",
      plain: "Neurony V1 lubią jeszcze bardziej niż paski „rozmyte prążki” o określonej gęstości. Z takich prążków matematycznie da się złożyć każdy kształt.",
      def: "Komórki reagujące na pasek reagują zwykle silniej na prążki o sinusoidalnie zmieniającej się jasności. Różne neurony są dostrojone do różnych częstotliwości przestrzennych (gęstości pasków), często bardzo precyzyjnie (DeValois i in., 1982). Większość badaczy sądzi, że V1 reaguje raczej na częstotliwości przestrzenne niż na paski.",
      sh: "prążki sinusoidalne o danej gęstości" },
    { id: "fourier", u: "detektory", term: "Analiza fourierowska",
      plain: "Z sumy prostych fal można złożyć dowolnie skomplikowany kształt. Ale my nie widzimy świata jako fal, więc zagadka zostaje.",
      def: "Operacja matematyczna przekształcająca złożenie fal sinusoidalnych w dowolne skomplikowane kształty. Detektory częstotliwości mogą więc reprezentować każdy przedmiot, ale nie spostrzegamy świata jako sinusoid. V1 i V2 to raczej wstępny etap analizy przed rozpoznawaniem w wyspecjalizowanych obszarach (Lennie, 1998).",
      sh: "wstępna analiza, nie rozpoznanie" },

    /* ---------- Kształt ---------- */
    { id: "coraz-wieksze", u: "ksztalt", term: "Pola coraz większe i bardziej wyspecjalizowane",
      plain: "Im dalej od V1, tym komórki widzą większy kawałek pola i reagują na bardziej złożone kształty.",
      def: "Gdy informacja przechodzi od komórek prostych do złożonych i dalej, pola recepcyjne stają się większe i bardziej wyspecjalizowane. V2: część komórek reaguje na koła lub linie pod kątem prostym (Hegdé, Van Essen, 2000). V4: na nachylenie linii w przestrzeni 3D (Hinkle, Connor, 2002).",
      sh: "V2 koła i kąty, V4 nachylenie w 3D" },
    { id: "skroniowa", u: "ksztalt", term: "Dolna kora skroniowa",
      plain: "Komórki widzą prawie całe pole widzenia, więc nie wiedzą, gdzie coś jest, ale świetnie wiedzą, jaki to kształt.",
      def: "Ogromne pola recepcyjne (zawsze obejmujące pole dołka), więc prawie brak informacji o położeniu. Wiele komórek reaguje selektywnie na złożone kształty, np. tak samo na czarny kwadrat na białym tle, biały na czarnym i kwadrat z kropek w ruchu (Sáry i in., 1993).",
      sh: "kształt bez położenia" },
    { id: "przeksztalcenia", u: "ksztalt", term: "Lustro i negatyw tak, odwrócenie figury i tła nie",
      plain: "Ten sam neuron reaguje na kształt, jego odbicie lustrzane i negatyw. Ale gdy zamienisz figurę z tłem, to dla niego coś innego.",
      def: "Neurony dolnej kory skroniowej reagują niemal tak samo na kształt, jego lustrzane odbicie i obraz negatywowy, ale słabo na odwrócenie figury i tła (Baylis, Driver, 2001; rys. 6.27). Rozpoznają obiekt, a nie ilość światła w danym miejscu siatkówki.",
      sh: "liczy się obiekt, nie światło" },
    { id: "stalosc-ksztaltu", u: "ksztalt", term: "Stałość kształtu",
      plain: "Rozpoznajesz krzesło, nawet gdy jest obrócone albo dalej. To zasługa komórek, które ignorują wielkość i kierunek.",
      def: "Zdolność do rozpoznawania kształtu przedmiotu nawet po zmianie położenia lub orientacji. Prawdopodobnie możliwa dzięki temu, że neurony dolnej okolicy skroniowej ignorują zmiany wielkości i kierunku.",
      sh: "kształt rozpoznany mimo obrotu" }
  ],

  exercises: [
    /* ---------- Start ---------- */
    { u: "start", t: "mcq", q: "Dlaczego pojedynczy neuron nie może jednocześnie przekazywać informacji o jasności i barwie?",
      a: ["Bo zmienia tylko częstotliwość impulsów", "Bo reaguje wyłącznie na jeden kolor", "Bo nie łączy się z czopkami", "Bo działa tylko w ciemności"],
      x: "Neuron ma do dyspozycji tylko częstotliwość wyładowań (albo polaryzację błony). Jeśli koduje nią jasność, nie zakoduje barwy, więc barwa wynika ze wzorca wielu neuronów.",
      w: ["Neurony reagują na różne fale (por. czopki).", "Kalat tego nie mówi.", "Nie."] },
    { u: "start", t: "tf", q: "Szczury nie rozróżniają kolorów, bo mają tylko jeden typ czopków.", a: true,
      x: "Tak. Widzenie barw wymaga porównywania aktywności różnych typów czopków." },
    { u: "start", t: "mcq", q: "Dlaczego słabą gwiazdę łatwiej zobaczyć, patrząc nieco obok niej?",
      a: ["Bo jej światło pada wtedy na obwód z pręcikami", "Bo w dołku środkowym jest najwięcej pręcików", "Bo soczewka lepiej skupia światło z boku", "Bo czopki są czulsze na słabe światło"],
      x: "Widzenie obwodowe (pręciki, duża zbieżność) dobrze reaguje na słabe światło; dołek z czopkami słabo (tabela 6.1).",
      w: ["W samym dołku są tylko czopki.", "Nie o to chodzi.", "Odwrotnie: czopki słabo reagują na słabe światło."] },
    { u: "start", t: "mcq", q: "Co robi światło z 11-cis-retinalem w receptorze?",
      a: ["Przekształca go w formę trans-retinal", "Rozkłada go na opsynę i wodę", "Zmienia go w barwnik czerwony", "Nic, retinal działa tylko w ciemności"],
      x: "Energia świetlna prawie natychmiast zmienia 11-cis-retinal w trans-retinal, co steruje aktywnością komórki.",
      w: ["Nie.", "Nie.", "W ciemności nie zmienia struktury; zmienia ją światło."] },

    /* ---------- Trichromatyczna ---------- */
    { u: "tri", t: "which", set: "teoria", q: "Barwa wynika z proporcji pobudzeń trzech typów czopków.", a: 1, x: "Teoria trichromatyczna." },
    { u: "tri", t: "mcq", q: "Jak Helmholtz ustalił, że wystarczą trzy typy receptorów?",
      a: ["Każdą barwę uzyskano z trzech fal", "Zobaczył trzy typy czopków pod mikroskopem", "Porównał siatkówki różnych zwierząt", "Policzył wszystkie kolory tęczy"],
      x: "Obserwacje psychofizyczne: dowolną barwę można uzyskać, mieszając w odpowiednich proporcjach tylko trzy długości fal.",
      w: ["Czopki potwierdzono później.", "Kalat tego nie opisuje.", "Nie."] },
    { u: "tri", t: "mcq", q: "Co według Younga wymaga wyjaśnienia barwy?",
      a: ["Biologia, a nie tylko fizyka", "Wyłącznie fizyka światła", "Psychoanaliza snów", "Filozofia piękna i sztuki"],
      x: "Young był jednym z pierwszych, którzy uznali, że problem barwy wymaga wyjaśnienia biologicznego.",
      w: ["Właśnie nie tylko fizyka.", "Nie.", "Nie."] },
    { u: "tri", t: "mcq", q: "Światło 500 nm pobudza czopki średniofalowe na ok. 65%, długofalowe na 40%, krótkofalowe na 10–15%. Jaką barwę widzimy?",
      a: ["Niebieskozieloną", "Ciemnoczerwoną", "Pomarańczową", "Szarobiałą"],
      x: "Przykład Kalata: taka proporcja daje wrażenie barwy niebieskozielonej.",
      w: ["Czerwień to fale długie.", "Żółty to mieszanka długo- i średniofalowych.", "Biel daje równe pobudzenie wszystkich."] },
    { u: "tri", t: "mcq", q: "Co się dzieje z barwą, gdy zwiększymy natężenie światła?",
      a: ["Jaśnieje, ale odcień zostaje", "Zmienia się na przeciwną", "Robi się coraz bardziej biała", "Znika, bo czopki się męczą"],
      x: "Wszystkie czopki reagują silniej, ale proporcja zostaje, więc odcień się nie zmienia.",
      w: ["To powidok, inny mechanizm.", "Biel daje jednakowe pobudzenie wszystkich typów.", "Nie."] },
    { u: "tri", t: "tf", q: "Gdy wszystkie trzy typy czopków są jednakowo aktywne, widzimy kolor biały lub szary.", a: true,
      x: "Tak, s. 151." },
    { u: "tri", t: "mcq", q: "Dlaczego reakcja jednego typu czopka jest wieloznaczna?",
      a: ["Bo tę samą reakcję dają różne fale", "Bo czopki reagują zupełnie losowo", "Bo czopek reaguje tylko na jedną falę", "Bo czopki w ogóle nie reagują na jasność"],
      x: "Słaba reakcja czopka średniofalowego może oznaczać słabe 540 nm, jaśniejsze 500 nm albo jeszcze silniejsze 460 nm. Dopiero porównanie trzech typów daje odpowiedź.",
      w: ["Nie losowo.", "Każdy reaguje na szeroki zakres fal.", "Reagują, i to jest właśnie źródło niejasności."] },
    { u: "tri", t: "match", pairs: [["Thomas Young", "barwa wymaga wyjaśnienia biologicznego"], ["Hermann von Helmholtz", "trzy fale wystarczą do każdej barwy"], ["Ewald Hering", "pary barw przeciwstawnych"], ["Edwin Land", "teoria retinex"]],
      x: "Czterech autorów teorii widzenia barw z czytanki." },

    /* ---------- Rozmieszczenie ---------- */
    { u: "rozmieszczenie", t: "mcq", q: "Dlaczego z daleka niebieskie kropki wydają się czarne?",
      a: ["Bo czopków krótkofalowych jest mało", "Bo niebieskie światło nie dociera do oka", "Bo pręciki nie widzą niebieskiego", "Bo niebieski jest zbyt jasny dla oka"],
      x: "Czopków długo- i średniofalowych jest w centrum dużo więcej niż krótkofalowych, więc małe niebieskie punkty trudniej dostrzec.",
      w: ["Dociera.", "Nie o to chodzi.", "Nie."] },
    { u: "rozmieszczenie", t: "multi", q: "Co pokazuje rys. 6.11 z rozmieszczeniem czopków dwóch osób?",
      a: ["czopki są rozmieszczone przypadkowo", "czopków krótkofalowych jest mało", "rozmieszczenie różni się między osobami"],
      o: ["czopki tworzą regularną mozaikę", "każdy typ ma tyle samo czopków"],
      x: "Są też obszary z samymi średnio- lub długofalowymi czopkami.",
      w: ["Rozmieszczenie jest przypadkowe.", "Krótkofalowych jest wyraźnie mniej."] },
    { u: "rozmieszczenie", t: "mcq", q: "Ktoś przesuwa kolorowy punkt na palcu od boku do środka twojego pola widzenia. Co zauważysz?",
      a: ["Palec dużo wcześniej niż jego kolor", "Kolor wcześniej niż palec", "Palec i kolor naraz", "Kolor tylko, gdy punkt jest niebieski"],
      x: "Na obwodzie jest mało czopków, więc kształt widać wcześniej niż barwę; najtrudniej z niebieskim.",
      w: ["Odwrotnie.", "Nie.", "Niebieski rozpoznasz najpóźniej."] },
    { u: "rozmieszczenie", t: "tf", q: "Blisko dołka środkowego nierównomierne rozmieszczenie czopków nie przeszkadza w widzeniu barw.", a: true,
      x: "Tak. Problem pojawia się na obwodzie, gdzie czopków jest dużo mniej." },

    /* ---------- Przeciwstawne ---------- */
    { u: "przeciw", t: "which", set: "teoria", q: "Nie istnieje barwa czerwonozielona ani żółtoniebieska.", a: 2, x: "Pary przeciwieństw: Hering." },
    { u: "przeciw", t: "which", set: "teoria", q: "Po minucie patrzenia na czerwień na białej ścianie widzisz zieleń.", a: 2, x: "Negatywowy powidok wyjaśnia teoria przeciwstawnych procesów." },
    { u: "przeciw", t: "match", pairs: [["czerwony", "zielony"], ["żółty", "niebieski"], ["biały", "czarny"]],
      x: "Trzy pary przeciwstawne według Heringa." },
    { u: "przeciw", t: "mcq", q: "Komórka dwubiegunowa jest pobudzana przez światło krótkofalowe, a hamowana przez długo- i średniofalowe. Co daje spadek jej aktywności?",
      a: ["Wrażenie koloru żółtego", "Wrażenie koloru niebieskiego", "Wrażenie bieli", "Wrażenie czerwieni"],
      x: "Wzrost aktywności = niebieski, spadek = żółty (rys. 6.13).",
      w: ["To wzrost aktywności.", "Biel pobudza i hamuje po równo.", "Nie w tym kanale."] },
    { u: "przeciw", t: "order", q: "Ułóż wyjaśnienie powidoku żółtego po patrzeniu na niebieski.",
      a: ["Długie pobudzanie komórki światłem niebieskim", "Zmęczenie komórki", "Białe światło bardziej ją hamuje, niż pobudza", "Aktywność poniżej poziomu podstawowego", "Wrażenie koloru żółtego"],
      x: "Mechanizm hipotetyczny z s. 152." },
    { u: "przeciw", t: "mcq", q: "Czego nie wyjaśnia prosta wersja teorii przeciwstawnych procesów?",
      a: ["Zielonego powidoku białego kółka", "Czerwonego powidoku zielonego kwadratu", "Braku barwy czerwonozielonej", "Powidoku żółtego po niebieskim"],
      x: "Białe kółko powinno dać szary lub czarny powidok, a ludzie widzą zielony.",
      w: ["To zgodne z teorią.", "To jej główna teza.", "To właśnie wyjaśnia."] },
    { u: "przeciw", t: "mcq", q: "Co sugeruje powidok złudzenia czerwonego kwadratu (Shimojo i in., 2001)?",
      a: ["Że powidoki zależą częściowo od kory", "Że powidoki powstają tylko w siatkówce", "Że złudzeń nie da się zobaczyć", "Że czopki widzą kwadraty"],
      x: "Kwadratu w ogóle nie było, a jego powidok się pojawia, więc tworzy go obszar mózgu odpowiedzialny za złudzenie, najpewniej kora.",
      w: ["Odwrotnie.", "Nie.", "Nie."] },
    { u: "przeciw", t: "tf", q: "Teoria trichromatyczna dobrze wyjaśnia negatywowe powidoki barwne.", a: false,
      x: "Fałsz. Właśnie dlatego Hering zaproponował teorię przeciwstawnych procesów." },

    /* ---------- Retinex ---------- */
    { u: "retinex", t: "which", set: "teoria", q: "Kora porównuje informacje z różnych części siatkówki, aby ustalić barwę każdego obszaru.", a: 3, x: "Teoria retinex." },
    { u: "retinex", t: "which", set: "teoria", q: "W zielonych okularach banan nadal wygląda na żółty.", a: 3, x: "Stałość barw wyjaśnia teoria retinex." },
    { u: "retinex", t: "mcq", q: "Czym jest stałość barw?",
      a: ["Rozpoznaniem koloru mimo innego światła", "Niezmiennością długości fal światła", "Brakiem jakichkolwiek powidoków barwnych", "Widzeniem tylko trzech podstawowych kolorów"],
      x: "Zdolność do rozpoznania koloru przedmiotu pomimo zmiany oświetlenia.",
      w: ["To fizyka, nie percepcja.", "Nie.", "Nie."] },
    { u: "retinex", t: "mcq", q: "Skąd nazwa „retinex”?",
      a: ["Od ang. retina i cortex", "Od nazwiska odkrywcy", "Od łacińskiego słowa „kolor”", "Od nazwy barwnika w oku"],
      x: "Retina = siatkówka, cortex = kora mózgowa.",
      w: ["Odkrywcą był Edwin Land.", "Nie.", "Barwnik to retinal."] },
    { u: "retinex", t: "mcq", q: "Co pokazuje rysunek 6.15 z „szarym” i „białym” przedmiotem?",
      a: ["Że jasność oceniamy przez porównanie", "Że szary jest zawsze ciemniejszy", "Że palce zmieniają jasność", "Że to dwa różne przedmioty"],
      x: "Po zakryciu granicy obie części mają tę samą jasność. To stałość jasności.",
      w: ["Tu oba mają tę samą jasność.", "Nie.", "Mózg tak wnioskuje, ale to złudzenie."] },
    { u: "retinex", t: "mcq", q: "Jak Purves opisuje widzenie?",
      a: ["Jako wnioskowanie o tym, co wywołało bodziec", "Jako wierne kopiowanie obrazu z siatkówki", "Jako zmęczenie detektorów cech", "Jako odruch bezwarunkowy"],
      x: "Mózg pyta: „gdy poprzednio widziałem coś takiego, czym to było?”. Percepcja to rodzaj rozumowania.",
      w: ["Kalat podkreśla, że to coś więcej niż pobudzenie siatkówki.", "To efekt wodospadu.", "Nie."] },
    { u: "retinex", t: "tf", q: "Teorie trichromatyczna i przeciwstawnych procesów dobrze wyjaśniają stałość barw.", a: false,
      x: "Fałsz. Są wobec niej bezradne; stąd teoria retinex." },

    /* ---------- Daltonizm ---------- */
    { u: "dalton", t: "mcq", q: "Ile osób nie odróżnia czerwieni od zieleni według Kalata?",
      a: ["Ok. 8% mężczyzn i niecały 1% kobiet", "Ok. 1% mężczyzn i 8% kobiet", "Po ok. 8% kobiet i mężczyzn", "Ok. 50% mężczyzn i 5% kobiet"],
      x: "Gen leży na chromosomie X, więc problem dotyczy głównie mężczyzn.",
      w: ["Odwrotnie.", "Płcie się różnią.", "Za dużo."] },
    { u: "dalton", t: "mcq", q: "Co jest przyczyną najczęstszej ślepoty na barwy?",
      a: ["Jeden barwnik w dwóch typach czopków", "Brak pręcików w całej siatkówce", "Uszkodzenie dolnej kory skroniowej", "Zmęczenie komórek dwubiegunowych"],
      x: "Mutacja sprawia, że te czopki wytwarzają jeden rodzaj barwnika zamiast dwóch.",
      w: ["Pręciki nie odpowiadają za barwy.", "To inny problem (strumień brzuszny).", "To powidok."] },
    { u: "dalton", t: "mcq", q: "Dlaczego Kalat uważa odkrycie daltonizmu za wielkie odkrycie psychologii?",
      a: ["Pokazało, że wzrok nie kopiuje przedmiotów", "Pozwoliło skutecznie leczyć ślepotę", "Udowodniło ostatecznie teorię retinex", "Wyjaśniło, skąd bierze się efekt wodospadu"],
      x: "Wcześniej sądzono, że widzimy okrągłość, bo przedmiot jest okrągły, i żółć, bo jest żółty. A można poprawnie widzieć bez barw.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "dalton", t: "multi", q: "Jakie zaburzenia widzenia barw opisuje Kalat?",
      a: ["brak jednego typu czopków", "brak dwóch typów czopków", "bardzo mało lub zdeformowane czopki"],
      o: ["nadmiar czopków krótkofalowych", "brak pręcików"],
      x: "Trzy rodzaje z s. 155. Całkowita ślepota na barwy jest rzadka.",
      w: ["Nie.", "To nie dotyczy barw."] },
    { u: "dalton", t: "tf", q: "Całkowita ślepota na barwy, czyli widzenie tylko odcieni szarości, jest częsta.", a: false,
      x: "Fałsz. Jest rzadka; najczęstsza jest ślepota czerwono-zielona." },

    /* ---------- Strumienie ---------- */
    { u: "strumienie", t: "which", set: "strumien", q: "Pacjent nie potrafi opisać kształtu kubka, ale bez trudu po niego sięga.", a: 1, x: "Uszkodzenie strumienia brzusznego (kora skroniowa)." },
    { u: "strumienie", t: "which", set: "strumien", q: "Pacjent dokładnie opisuje kubek, ale nie potrafi precyzyjnie go chwycić.", a: 2, x: "Uszkodzenie strumienia grzbietowego (kora ciemieniowa)." },
    { u: "strumienie", t: "which", set: "strumien", q: "Pacjent nie pamięta, czy Jerzy Waszyngton miał brodę.", a: 1, x: "Upośledzone wyobrażanie kształtów i twarzy: strumień brzuszny." },
    { u: "strumienie", t: "which", set: "strumien", q: "Pacjent nie potrafi z pamięci opisać, gdzie stoją meble w jego pokoju.", a: 2, x: "Trudność z położeniem: strumień grzbietowy." },
    { u: "strumienie", t: "mcq", q: "Jaki wniosek wyciąga Kalat z uszkodzeń obu strumieni?",
      a: ["Co to jest i gdzie to jest – to dwa zadania", "Oba strumienie robią dokładnie to samo", "Wzrok zależy wyłącznie od siatkówki", "Kora ciemieniowa rozpoznaje twarze"],
      x: "Wzrokowa identyfikacja przedmiotów jest czymś innym niż spostrzeganie ich położenia.",
      w: ["Uszkodzenia dają różne objawy.", "Nie.", "Twarze to raczej strumień brzuszny."] },

    /* ---------- Hubel ---------- */
    { u: "hubel", t: "mcq", q: "Na co komórka kory zareagowała silnie po raz pierwszy u Hubela i Wiesela?",
      a: ["Na krawędź wkładanego slajdu", "Na pojedynczy punkt świetlny", "Na kolorowe światło z rzutnika", "Na dźwięk włączanego rzutnika"],
      x: "Punkty dawały słabą reakcję; silną dała krawędź slajdu. Pole recepcyjne miało kształt paska.",
      w: ["Punkty dawały niewielką reakcję.", "Nie.", "Nie."] },
    { u: "hubel", t: "mcq", q: "Jak nazywa się badania Hubela i Wiesela, bo zainspirowały tak wiele kolejnych?",
      a: ["„Eksperymentami tysiąca mikroelektrod”", "„Eksperymentami z wodospadem w tle”", "„Eksperymentami z kamieniem z Rosetty”", "„Eksperymentami z zielonymi okularami”"],
      x: "Kalat dodaje, że dziś mikroelektrody trzeba by liczyć w milionach.",
      w: ["To efekt wodospadu.", "To Young.", "To stałość barw."] },
    { u: "hubel", t: "order", q: "Ułóż kroki rejestracji mikroelektrodami (Metody 6.1).",
      a: ["Znieczulenie zwierzęcia", "Wywiercenie małego otworu w czaszce", "Umieszczenie elektrody w komórce lub obok niej", "Rejestracja aktywności przy różnych bodźcach"],
      x: "Wyniki mówią, jakie bodźce pobudzają daną komórkę." },
    { u: "hubel", t: "tf", q: "Hubel i Wiesel badali neurony kory wzrokowej kotów i małp i dostali za to Nagrodę Nobla.", a: true,
      x: "Tak, s. 164." },

    /* ---------- Komórki ---------- */
    { u: "komorki", t: "which", set: "komorka", q: "Występuje tylko w V1 i ma sztywny podział pola na strefę pobudzeniową i hamulcową.", a: 1, x: "Komórka prosta." },
    { u: "komorki", t: "which", set: "komorka", q: "Reaguje na pionowy pasek w dowolnym miejscu pola, najmocniej, gdy porusza się poziomo.", a: 2, x: "Komórka złożona." },
    { u: "komorki", t: "which", set: "komorka", q: "Reaguje na pasek, dopóki nie wyjdzie on poza pewną granicę pola.", a: 3, x: "Komórka z hamulcowym brzegiem." },
    { u: "komorki", t: "which", set: "komorka", q: "Ma największe pole recepcyjne z trzech typów.", a: 3, x: "Tabela 6.3." },
    { u: "komorki", t: "order", q: "Ułóż typy komórek od najmniejszego do największego pola recepcyjnego.",
      a: ["Komórka prosta", "Komórka złożona", "Komórka z hamulcowym brzegiem"],
      x: "Tabela 6.3: najmniejsze, średnie, największe." },
    { u: "komorki", t: "mcq", q: "Jak najprościej sprawdzić, czy komórka jest prosta, czy złożona?",
      a: ["Lekko przesuwać pasek", "Zmienić kolor paska na czerwony", "Zamknąć jedno oko zwierzęcia", "Podać neuroprzekaźnik GABA"],
      x: "Reakcja tylko w jednym miejscu = prosta; na dużym obszarze = złożona.",
      w: ["Kolor nie rozstrzyga.", "Obie dostają sygnały z obu oczu.", "GABA posłużyło do innego pytania."] },
    { u: "komorki", t: "mcq", q: "Co pokazali Martinez i Alonso (2001), blokując GABA przewodzenie do komórek prostych?",
      a: ["Że złożone dostają sygnały od prostych", "Że proste dostają sygnały od złożonych", "Że GABA pobudza komórki kory", "Że komórki proste są w V4"],
      x: "Gdy proste przestały reagować, złożone też.",
      w: ["Odwrotnie.", "GABA jest hamujący.", "Proste są tylko w V1."] },
    { u: "komorki", t: "mcq", q: "Dlaczego więcej komórek prostych preferuje orientację pionową i poziomą niż ukośną?",
      a: ["Bo tak stoi większość ważnych obiektów", "Bo oczy leżą obok siebie poziomo", "Bo ukośne linie są dla nas niewidoczne", "Bo tak wynika z analizy Fouriera"],
      x: "Prawdopodobne wyjaśnienie Coppoli i in. (1998).",
      w: ["Kalat tak tego nie tłumaczy.", "Są widoczne.", "Nie."] },
    { u: "komorki", t: "tf", q: "Komórki z hamulcowym brzegiem nazywa się też hiperzłożonymi.", a: true,
      x: "Tak, ang. end-stopped cells." },

    /* ---------- Kolumny ---------- */
    { u: "kolumny", t: "mcq", q: "Co łączy komórki w jednej kolumnie kory wzrokowej?",
      a: ["Podobne właściwości, np. ta sama orientacja", "Ten sam kolor ulubiony", "To samo położenie w polu widzenia całego oka", "Nic, są ułożone przypadkowo"],
      x: "Reagują na to samo oko (lub oba) i najsilniej na linie o tej samej orientacji.",
      w: ["Kalat mówi o orientacji i oku.", "Nie.", "Właśnie nie przypadkowo."] },
    { u: "kolumny", t: "mcq", q: "Elektroda wbita prostopadle do powierzchni kory napotyka…",
      a: ["komórki o tej samej orientacji", "komórki o coraz to innej orientacji", "wyłącznie komórki złożone", "wyłącznie istotę białą"],
      x: "Prostopadle = w obrębie jednej kolumny. Ukośna elektroda przecina kolumny i trafia na różne orientacje.",
      w: ["Tak jest przy elektrodzie ukośnej.", "Nie.", "Nie."] },
    { u: "kolumny", t: "tf", q: "Kolumny w korze wzrokowej są ułożone równolegle do jej powierzchni.", a: false,
      x: "Fałsz. Prostopadle do powierzchni." },

    /* ---------- Detektory ---------- */
    { u: "detektory", t: "mcq", q: "Czym jest detektor cech?",
      a: ["Neuronem sygnalizującym daną cechę", "Urządzeniem do badania wzroku u ludzi", "Czopkiem wrażliwym na długie fale", "Kolumną komórek w korze ciemieniowej"],
      x: "Np. neuron, którego aktywność oznacza „tu jest pionowa krawędź”.",
      w: ["To nie urządzenie.", "Czopki to receptory.", "Kolumna to grupa komórek."] },
    { u: "detektory", t: "mcq", q: "Po minucie patrzenia na wodospad skały obok zdają się wznosić. Dlaczego?",
      a: ["Zmęczyły się detektory ruchu w dół", "Oczy się przesunęły", "Skały naprawdę się ruszają", "Zmęczyły się czopki niebieskie"],
      x: "Zmęczenie neuronów wykrywających ruch w dół odhamowuje detektory ruchu w przeciwnym kierunku.",
      w: ["Nie.", "Nie.", "To dotyczy barw, nie ruchu."] },
    { u: "detektory", t: "mcq", q: "Na co według większości badaczy reagują raczej neurony V1?",
      a: ["Na częstotliwości przestrzenne", "Na kolory całych przedmiotów", "Na całe twarze ludzi", "Na dźwięki z otoczenia"],
      x: "Reagują silniej na prążki o sinusoidalnie zmieniającej się jasności niż na pojedyncze paski.",
      w: ["Nie.", "To dalsze obszary.", "Nie."] },
    { u: "detektory", t: "mcq", q: "Dlaczego teoria częstotliwości przestrzennych nie zamyka sprawy?",
      a: ["Bo nie spostrzegamy świata jako sumy fal", "Bo analiza Fouriera jest błędna", "Bo V1 nie reaguje na prążki", "Bo nie da się zbudować z fal kształtu"],
      x: "Matematycznie z fal da się zbudować każdy kształt, ale powstawanie spostrzeżeń dalej jest zagadką. V1 i V2 to raczej wstępny etap.",
      w: ["Nie.", "Reaguje.", "Da się."] },
    { u: "detektory", t: "tf", q: "Reakcja pojedynczego neuronu kory jest jednoznaczna, nawet bez porównania z innymi.", a: false,
      x: "Fałsz. Każdy neuron reaguje w pewnym stopniu na wiele bodźców; znaczenie daje porównanie z innymi komórkami." },

    /* ---------- Kształt ---------- */
    { u: "ksztalt", t: "mcq", q: "Dlaczego komórki dolnej kory skroniowej niewiele mówią o położeniu bodźca?",
      a: ["Bo mają ogromne pola recepcyjne", "Bo reagują tylko na kolory", "Bo nie dostają sygnałów z oka", "Bo są tylko w V1"],
      x: "Pola obejmują zawsze pole dołka, więc położenie ginie, ale kształt jest kodowany selektywnie.",
      w: ["Reagują na kształty.", "Dostają.", "Nie."] },
    { u: "ksztalt", t: "sort", q: "Neuron dolnej kory skroniowej: reaguje podobnie czy słabo?", cats: ["Reaguje podobnie", "Reaguje słabo"],
      why: ["To ten sam obiekt w innej postaci.", "Zmieniło się, co jest figurą, a co tłem."],
      items: [["odbicie lustrzane kształtu", 0], ["obraz negatywowy", 0], ["czarny kwadrat na białym zamiast białego na czarnym", 0],
        ["odwrócenie figury i tła", 1]],
      x: "Baylis i Driver (2001): komórki rozpoznają obiekt, a nie ilość światła w danym miejscu." },
    { u: "ksztalt", t: "mcq", q: "Na co reagują niektóre komórki w V2?",
      a: ["Na koła i kąty proste", "Na całe twarze znajomych", "Wyłącznie na punkty świetlne", "Na kolory w parach Heringa"],
      x: "Hegdé i Van Essen (2000). W V4: nachylenie linii w przestrzeni 3D.",
      w: ["To dalsze obszary.", "Nie.", "To teoria Heringa."] },
    { u: "ksztalt", t: "mcq", q: "Co prawdopodobnie umożliwia stałość kształtu?",
      a: ["Neurony skroniowe obojętne na obrót", "Czopki krótkofalowe w dołku", "Kolumny dominacji jednego oka", "Zmęczenie detektorów ruchu"],
      x: "Stałość kształtu: rozpoznanie przedmiotu mimo zmiany położenia lub orientacji.",
      w: ["Nie.", "Nie.", "To efekt wodospadu."] },
    { u: "ksztalt", t: "order", q: "Ułóż etapy analizy kształtu od najprostszych pól do najbardziej złożonych.",
      a: ["Komórki proste w V1", "Komórki złożone w V1 i V2", "V2 i V4: koła, kąty, nachylenie w 3D", "Dolna kora skroniowa: złożone kształty"],
      x: "Pola recepcyjne rosną i stają się bardziej wyspecjalizowane." },

    /* ---------- Uzupełnienia ---------- */
    { u: "kolumny", t: "multi", q: "Pod jakim względem komórki jednej kolumny są podobne?",
      a: ["reagują na to samo oko (lub oba)", "reagują najsilniej na tę samą orientację linii"],
      o: ["reagują na ten sam kolor", "leżą równolegle do powierzchni kory"],
      x: "Hubel i Wiesel (1977): dominacja oczna i preferowana orientacja.",
      w: ["Kalat o tym nie pisze.", "Kolumny są prostopadłe do powierzchni."] },
    { u: "kolumny", t: "mcq", q: "Elektroda wbita ukośnie przez korę wzrokową napotyka…",
      a: ["komórki o różnych orientacjach", "tylko komórki o jednej orientacji", "tylko komórki proste", "tylko komórki z hamulcowym brzegiem"],
      x: "Ukośna elektroda (B na rys. 6.26) przecina kilka kolumn.",
      w: ["Tak jest przy elektrodzie prostopadłej.", "Nie.", "Nie."] },
    { u: "start", t: "tf", q: "Według Kalata najkrótsze widzialne fale (ok. 350 nm) dają wrażenie czerwieni.", a: false,
      x: "Fałsz. Ok. 350 nm to fiolet, a ok. 700 nm to czerwień." },
    { u: "rozmieszczenie", t: "mcq", q: "Co pokazuje porównanie siatkówek dwóch osób na rys. 6.11?",
      a: ["Że rozmieszczenie czopków różni się między ludźmi", "Że wszyscy mają identyczny układ czopków", "Że czopki niebieskie przeważają", "Że czopki tworzą równe rzędy"],
      x: "Rozmieszczenie jest przypadkowe i indywidualne; czopków krótkofalowych jest mało.",
      w: ["Właśnie nie.", "Odwrotnie: jest ich mało.", "Rozmieszczenie jest przypadkowe."] },
    { u: "hubel", t: "mcq", q: "Jaki kształt miało pole recepcyjne odkrytej przez Hubela i Wiesela komórki?",
      a: ["Paska", "Koła", "Pierścienia", "Kwadratu"],
      x: "Komórka reagowała na krawędź slajdu i miała pole w kształcie paska.",
      w: ["Koliste pola (centrum–otoczka) mają komórki zwojowe (czytanka 1).", "Nie.", "Na kwadraty reagują dalsze obszary."] },
    /* ---------- Mix ---------- */
    { u: "mix", t: "mcq", q: "Kineskop wyłączonego telewizora jest szary, a w czasie programu widzimy na nim czerń, choć świeci jaśniej. Co to wyjaśnia?",
      a: ["Jasność oceniamy przez porównanie", "Czopki przestają wtedy działać", "To łagodna ślepota na barwy", "To odmiana efektu wodospadu"],
      x: "Pytanie kontrolne 6. Miejsce ciemniejsze od jasnych obszarów obok wygląda na czarne: stałość jasności i teoria retinex.",
      w: ["Nie.", "Nie.", "To dotyczy ruchu."] },
    { u: "mix", t: "mcq", q: "Wieczorem przy żółtym świetle lampy kartka nadal wydaje ci się biała. Co działa?",
      a: ["Stałość barw", "Powidok negatywowy", "Teoria trichromatyczna", "Efekt wodospadu"],
      x: "Mózg odejmuje od wszystkich przedmiotów tę samą „żółć” oświetlenia (retinex).",
      w: ["Nie wpatrywałaś się minutę.", "Ona tego nie wyjaśnia.", "To ruch."] },
    { u: "mix", t: "mcq", q: "Po długim przewijaniu tekstu w telefonie stół zdaje się „płynąć”. Czego to przykład?",
      a: ["Zmęczenia detektorów ruchu", "Stałości wielkości", "Ślepoty czerwono-zielonej", "Uszkodzenia strumienia brzusznego"],
      x: "Kalat: to samo co efekt wodospadu daje wolne przewijanie ekranu.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "mix", t: "which", set: "teoria", q: "Kolor to wynik porównania aktywności czopków „niebieskich”, „zielonych” i „czerwonych”.", a: 1, x: "Teoria trichromatyczna." },
    { u: "mix", t: "which", set: "teoria", q: "Komórka „niebieskie–żółte” zmęczona niebieskim daje potem wrażenie żółci.", a: 2, x: "Teoria przeciwstawnych procesów." }
  ],

  sortDecks: [
    { id: "trzy-teorie", title: "Trichromatyczna czy przeciwstawna?", sub: "Young–Helmholtz czy Hering", cats: ["Trichromatyczna", "Przeciwstawne procesy"],
      why: ["Trzy typy czopków i ich proporcje.", "Pary barw i powidoki."],
      items: [["mieszanie trzech fal daje każdą barwę", 0], ["500 nm = niebieskozielony", 0], ["biel przy równym pobudzeniu", 0],
        ["powidok zielony po czerwonym", 1], ["brak barwy żółtoniebieskiej", 1], ["komórka niebieskie–żółte", 1], ["Young i Helmholtz", 0], ["Hering", 1]] },
    { id: "prosta-zlozona", title: "Prosta czy złożona?", sub: "Komórki kory wzrokowej", cats: ["Prosta", "Złożona"],
      why: ["Tylko V1, jedno miejsce, sztywne strefy.", "V1 i V2, dowolne miejsce, ruch prostopadły."],
      items: [["tylko w V1", 0], ["najmniejsze pole", 0], ["strefa pobudzeniowa i hamulcowa", 0], ["reaguje w jednym miejscu", 0],
        ["w V1 i V2", 1], ["reaguje w dowolnym miejscu pola", 1], ["najsilniej przy ruchu prostopadłym", 1], ["dostaje sygnały od prostych", 1]] },
    { id: "brzuszny-grzbietowy", title: "Brzuszny czy grzbietowy?", sub: "Co to jest czy gdzie to jest", cats: ["Brzuszny (co)", "Grzbietowy (gdzie i jak)"],
      why: ["Kora skroniowa: identyfikacja, kształt, twarze.", "Kora ciemieniowa: położenie, sięganie."],
      items: [["kora skroniowa", 0], ["opis kształtu", 0], ["wyobrażanie twarzy", 0], ["broda Waszyngtona", 0],
        ["kora ciemieniowa", 1], ["precyzyjne sięganie", 1], ["położenie mebli z pamięci", 1]] }
  ],

  minimum: [
    ["Kodowanie barwy", "Neuron zmienia tylko częstotliwość impulsów, więc <b>nie przekaże naraz jasności i barwy</b>. Barwa to <b>wzorzec wielu neuronów</b>. Szczury (jeden typ czopków) nie widzą barw."],
    ["Teoria trichromatyczna", "<b>Young</b> (barwa wymaga biologii) + <b>Helmholtz</b> (psychofizyka: trzy fale dają każdą barwę). <b>Trzy typy czopków</b>: krótko-, średnio-, długofalowe. Barwa = <b>proporcja</b> pobudzeń (500 nm: 65/40/10–15% = niebieskozielony). Równe pobudzenie = biel/szarość. Jeden czopek jest wieloznaczny."],
    ["Rozmieszczenie czopków", "Mało <b>krótkofalowych</b> (niebieskie kropki z daleka czernieją). Rozmieszczenie <b>przypadkowe</b> i różne u ludzi. Na obwodzie kształt widać wcześniej niż kolor."],
    ["Przeciwstawne procesy", "<b>Hering</b>: pary <b>czerwony–zielony, żółty–niebieski, biały–czarny</b>; brak barwy czerwonozielonej. Wyjaśnia <b>negatywowy powidok</b> (zmęczona komórka). Niepełna: zielony powidok białego kółka; powidok złudzenia kwadratu wskazuje na <b>korę</b>."],
    ["Retinex", "<b>Land</b> (retina + cortex): kora porównuje całą siatkówkę → <b>stałość barw</b> (żółty banan w zielonych okularach) i <b>stałość jasności</b> (rys. 6.15). <b>Purves</b>: widzenie to wnioskowanie."],
    ["Daltonizm", "Odkryty w XVII w.: wzrok <b>nie kopiuje</b> świata. Najczęstsza <b>czerwono-zielona</b>: jeden barwnik zamiast dwóch, gen na <b>chromosomie X</b>, <b>8% mężczyzn, &lt;1% kobiet</b>. Całkowita rzadka."],
    ["Co i gdzie", "<b>Brzuszny</b> (skroniowa): nie opisze kształtu, ale sięgnie; trudno z twarzami. <b>Grzbietowy</b> (ciemieniowa): opisze, ale nie sięgnie. Identyfikacja ≠ położenie."],
    ["Hubel i Wiesel", "Krawędź slajdu → pole w kształcie paska. Nobel. <b>Prosta</b> (V1, jedno miejsce, sztywne strefy, najmniejsze pole), <b>złożona</b> (V1, V2, dowolne miejsce, ruch prostopadły), <b>z hamulcowym brzegiem</b> (hamujący koniec, największe pole). Złożone zbierają sygnały z prostych."],
    ["Kolumny i detektory", "<b>Kolumny</b> prostopadłe do powierzchni: to samo oko, ta sama orientacja. <b>Detektory cech</b>: efekt <b>wodospadu</b>. Ale V1 reaguje raczej na <b>częstotliwości przestrzenne</b>; to wstępny etap analizy."],
    ["Poza V1", "Pola coraz większe: V2 koła i kąty, V4 nachylenie 3D, <b>dolna kora skroniowa</b>: złożone kształty bez położenia; ten sam obiekt w lustrze i negatywie, ale nie po <b>odwróceniu figury i tła</b>. Stąd <b>stałość kształtu</b>."]
  ],

  deep: [
    { q: "Trzy teorie barw: która jest prawdziwa?",
      a: "Wszystkie trzy opisują inny poziom. Trichromatyczna mówi o czopkach (trzy typy się potwierdziły). Przeciwstawne procesy mówią o komórkach dalej (dwubiegunowe i kora), które przeliczają sygnały czopków na pary. Retinex dodaje porównanie całego pola w korze, potrzebne do stałości barw. Razem dają pełniejszy obraz niż każda osobno.",
      link: "W czytance 1 była już teoria trichromatyczna i obietnica „dalszego ciągu” na s. 151–156. To jest ten ciąg." },
    { q: "Dlaczego powidok złudzenia jest tak ważny?",
      a: "Gdyby powidoki powstawały tylko w zmęczonych komórkach siatkówki, nie dałoby się zobaczyć powidoku kwadratu, którego na kartce nie ma. Skoro widzimy zielony kwadrat, część pracy robi obszar mózgu, który „dorysował” czerwony kwadrat, najpewniej kora.",
      link: "To samo przesłanie co u Francuza w czytance 1: widzenie to akt kreacji mózgu." },
    { q: "Detektory cech czy częstotliwości?",
      a: "Hubel i Wiesel pokazali paski i krawędzie, więc nazwano neurony detektorami cech. Później okazało się, że te same komórki jeszcze mocniej reagują na prążki o określonej gęstości. Kalat uczciwie przyznaje: matematycznie to działa, ale jak z tego powstaje spostrzeżenie, wciąż nie wiadomo.",
      link: "Zwróć uwagę na podobieństwo: czopek i neuron kory reagują szeroko, a znaczenie daje dopiero porównanie wielu." }
  ],

  talk: [
    { q: "Wyjaśnij teorię trichromatyczną. Kto ją stworzył i jak ją uzasadniono?",
      a: "<p><b>Thomas Young</b> uznał, że barwa wymaga wyjaśnienia biologicznego i zależy od porównania kilku typów receptorów. <b>Helmholtz</b> na podstawie obserwacji psychofizycznych pokazał, że każdą barwę da się uzyskać z <b>trzech fal</b>, więc wystarczą <b>trzy typy czopków</b>. Barwa to <b>proporcja</b> ich pobudzeń (500 nm: 65/40/10–15% = niebieskozielony). Mocniejsze światło nie zmienia proporcji, tylko jasność; równe pobudzenie to biel lub szarość.</p>",
      keys: ["Young", "Helmholtz, psychofizyka", "trzy typy czopków", "proporcja pobudzeń", "biel = równe pobudzenie"], src: "Kalat, s. 150–151" },
    { q: "Czego teoria trichromatyczna nie wyjaśnia i co proponuje Hering?",
      a: "<p>Nie wyjaśnia <b>negatywowych powidoków</b>: po patrzeniu na czerwień widzimy zieleń. <b>Hering</b>: barwy kodowane w parach <b>czerwony–zielony, żółty–niebieski, biały–czarny</b>; nie ma barwy czerwonozielonej. Mechanizm: komórka dwubiegunowa pobudzana przez niebieskie, hamowana przez żółte; zmęczona niebieskim przy białym świetle spada poniżej poziomu podstawowego i widzimy żółty. Ale teoria jest niepełna: białe kółko daje zielony powidok, a powidok złudzenia kwadratu wskazuje na rolę kory.</p>",
      keys: ["powidok negatywowy", "trzy pary", "komórka niebieskie–żółte", "zmęczenie", "niepełna, rola kory"], src: "Kalat, s. 152–154" },
    { q: "Czym jest stałość barw i jak wyjaśnia ją teoria retinex?",
      a: "<p><b>Stałość barw</b>: rozpoznajemy kolor przedmiotu mimo zmiany oświetlenia (banan żółty w zielonych okularach). <b>Land</b>: kora porównuje informacje z różnych części siatkówki i odejmuje od wszystkich przedmiotów ten sam składnik (np. zieleń). Podobnie <b>stałość jasności</b> (rys. 6.15). <b>Purves</b>: widzenie to wnioskowanie, czym najpewniej było to, co wywołało dany wzorzec.</p>",
      keys: ["stałość barw", "retina + cortex", "porównanie całego pola", "stałość jasności", "wnioskowanie"], src: "Kalat, s. 154–155" },
    { q: "Omów ślepotę na barwy. Dlaczego jej odkrycie było tak ważne?",
      a: "<p>Do XVII wieku sądzono, że wzrok kopiuje przedmioty. Daltonizm pokazał, że można dobrze widzieć bez barw. Rodzaje: brak jednego lub dwóch typów czopków, mało albo zdeformowane czopki; całkowita ślepota rzadka. Najczęstsza <b>czerwono-zielona</b>: czopki długo- i średniofalowe mają jeden barwnik; gen na <b>chromosomie X</b>, więc ok. <b>8% mężczyzn</b> i niecały <b>1% kobiet</b>.</p>",
      keys: ["wzrok nie kopiuje", "rodzaje", "czerwono-zielona", "chromosom X", "8% i <1%"], src: "Kalat, s. 155" },
    { q: "Opisz komórki proste, złożone i z hamulcowym brzegiem.",
      a: "<p>Hubel i Wiesel: <b>prosta</b> (tylko V1) ma pole w kształcie paska ze sztywnymi strefami pobudzeniową i hamulcową; reaguje w jednym miejscu i orientacji. <b>Złożona</b> (V1, V2) reaguje na pasek o danej orientacji w dowolnym miejscu pola, najsilniej w ruchu prostopadłym; dostaje sygnały od prostych (blokada GABA). <b>Z hamulcowym brzegiem</b> jest jak złożona, ale ma hamujący koniec pola. Pola: najmniejsze, średnie, największe.</p>",
      keys: ["prosta: V1, sztywne strefy", "złożona: dowolne miejsce, ruch", "hamulcowy koniec", "rozmiar pól"], src: "Kalat, s. 164–166" },
    { q: "Czy neurony kory wzrokowej to detektory cech?",
      a: "<p>Za: reagują na paski i krawędzie, a długie patrzenie na cechę zmniejsza wrażliwość (<b>efekt wodospadu</b>: zmęczone detektory ruchu w dół). Przeciw: każdy neuron reaguje na wiele bodźców, a znaczenie daje populacja. Neurony V1 reagują silniej na <b>prążki sinusoidalne o określonej częstotliwości przestrzennej</b>; z fal (analiza Fouriera) da się złożyć każdy kształt, ale nie widzimy świata jako fal. V1 i V2 to raczej wstępna analiza.</p>",
      keys: ["detektor cech", "efekt wodospadu", "populacja", "częstotliwości przestrzenne", "wstępny etap"], src: "Kalat, s. 167–168" },
    { q: "Co dzieje się z analizą kształtu poza V1?",
      a: "<p>Pola recepcyjne rosną i się specjalizują: V2 koła i kąty proste, V4 nachylenie w 3D. W <b>dolnej korze skroniowej</b> pola są ogromne, więc położenie ginie, ale komórki reagują na złożone kształty, tak samo na odbicie lustrzane i negatyw, a słabo na <b>odwrócenie figury i tła</b>. To podstawa <b>stałości kształtu</b>. Uszkodzenia: strumień brzuszny (co) vs grzbietowy (gdzie).</p>",
      keys: ["V2, V4", "dolna kora skroniowa", "lustro i negatyw tak", "figura–tło nie", "stałość kształtu"], src: "Kalat, s. 164, 168" }
  ],

  table: {
    title: "Komórki pierwszorzędowej kory wzrokowej (Kalat, tabela 6.3)",
    head: ["Cecha", "Komórki proste", "Komórki złożone", "Z hamulcowym brzegiem"],
    rows: [
      ["Położenie", "V1", "V1 i V2", "V1 i V2"],
      ["Sygnały z obojga oczu", "tak", "tak", "tak"],
      ["Rozmiar pola", "najmniejszy", "średni", "największy"],
      ["Pole recepcyjne", "pasek lub krawędź z ustalonymi strefami pobudzeniową i hamulcową", "pasek lub krawędź bez stref; reaguje w dowolnym miejscu, zwłaszcza przy ruchu prostopadłym do osi", "jak w złożonej, ale z silną częścią hamulcową na jednym brzegu"]
    ]
  },

  notes: [
    { id: "s1", n: 1, title: "Problem kodowania barwy", html:
      "<div class='plain'><p>Jeden neuron może tylko szybciej albo wolniej wysyłać impulsy. Nie zakoduje naraz „jak jasno” i „jaki kolor”. Dlatego kolor to zawsze porównanie wielu komórek.</p></div>" +
      "<p class='srcline'>Kalat, s. 150 (ciąg dalszy czytanki 1)</p>" +
      "<ul><li>Barwnik receptora: <b>11-cis-retinal</b> + białko <b>opsyna</b>. Światło niemal natychmiast zmienia go w <b>trans-retinal</b>, co steruje aktywnością komórki; światło jest pochłaniane i nie odbija się w oku.</li>" +
      "<li><b>Pytanie kontrolne 4</b>: słabą gwiazdę łatwiej zobaczyć, patrząc obok niej, bo obwód siatkówki (pręciki, duża zbieżność) dobrze reaguje na słabe światło (tabela 6.1).</li>" +
      "<li>Widzenie barw wymaga <b>porównywania różnych typów czopków</b>. Szczury mają jeden typ i nie rozróżniają kolorów.</li>" +
      "<li>Fale ok. 350 nm dają fiolet, potem niebieski, zielony, żółty, pomarańczowy, a ok. 700 nm czerwień.</li>" +
      "<li><b>Problem kodowania</b>: neuron zmienia tylko częstotliwość potencjałów czynnościowych (lub polaryzację błony). Jeśli koduje jasność, nie zakoduje barwy, i odwrotnie. Spostrzeżenia opierają się na <b>wzorcach aktywności wielu neuronów</b>.</li></ul>" +
      "<p>Dwie XIX-wieczne teorie: <b>trichromatyczna</b> i <b>przeciwstawnych procesów</b>.</p>" },
    { id: "s2", n: 2, title: "Teoria trichromatyczna (Younga–Helmholtza)", html:
      "<div class='plain'><p>Nie mamy osobnego receptora na każdy kolor. Mamy trzy typy czopków, a kolor to proporcja, w jakiej każdy z nich się pobudził.</p></div>" +
      "<p class='srcline'>Kalat, s. 150–151</p>" +
      "<ul><li><b>Thomas Young</b> (1773–1829), brytyjski lekarz: częściowo odczytał kamień z Rosetty, położył podwaliny optyki. Pierwszy uznał, że <b>barwa wymaga wyjaśnienia biologicznego</b>; hipoteza: porównanie aktywności kilku receptorów wrażliwych na różne fale.</li>" +
      "<li><b>Hermann von Helmholtz</b> udoskonalił teorię na podstawie <b>obserwacji psychofizycznych</b>: każdą barwę można uzyskać, mieszając <b>trzy</b> długości fal. Wniosek: wystarczą trzy rodzaje receptorów, dziś czopki.</li></ul>" +
      "<div class='key'><p><b>Teoria trichromatyczna:</b> percepcja barw opiera się na ocenie względnej siły pobudzeń <b>trzech typów czopków</b>, z których każdy jest najbardziej wrażliwy na inny zakres długości fal.</p></div>" +
      "<!--fig:czopki-->" +
      "<ul><li>Każdy czopek (krótko-, średnio-, długofalowy) reaguje na <b>szeroki zakres</b> fal, ale na jedne mocniej (rys. 6.10).</li>" +
      "<li><b>500 nm</b>: średniofalowe ok. 65%, długofalowe 40%, krótkofalowe 10–15% maksimum, czyli wrażenie <b>niebieskozielone</b>.</li>" +
      "<li>Silniejsze światło: wszystkie czopki mocniej, <b>proporcja ta sama</b>, więc barwa jaśniejsza, ale ten sam odcień. Wszystkie jednakowo aktywne: <b>biel lub szarość</b>.</li>" +
      "<li>Jeden typ czopka jest <b>wieloznaczny</b>: słaba reakcja średniofalowego to słabe 540 nm, jaśniejsze 500 nm albo jeszcze silniejsze 460 nm. Barwę i natężenie ocenia się tylko przez <b>porównanie</b> trzech typów.</li></ul>" },
    { id: "s3", n: 3, title: "Gdzie są czopki", html:
      "<div class='plain'><p>Czopków „niebieskich” jest mało, a wszystkie trzy typy są porozrzucane przypadkowo. Dlatego małe niebieskie punkty i kolory na obrzeżach pola widzenia widzimy słabo.</p></div>" +
      "<p class='srcline'>Kalat, s. 151–152</p>" +
      "<ul><li>W środku siatkówki czopki długo- i średniofalowe są dużo liczniejsze niż <b>krótkofalowe</b>, więc łatwiej dostrzec mikroskopijne punkty czerwone, żółte i zielone niż niebieskie (Roorda, Williams, 1999). <b>Zrób to sam</b>: niebieskie kropki z daleka robią się czarne.</li>" +
      "<li>Rozmieszczenie jest <b>przypadkowe</b> (Roorda i in., 2001). Rys. 6.11: siatkówki dwóch osób różnią się; jest mało krótkofalowych i są obszary z samymi średnio- albo długofalowymi.</li>" +
      "<li>Blisko dołka to nie przeszkadza, ale na <b>obwodzie</b>, gdzie czopków jest mało, trudno ustalić kolor małych przedmiotów. <b>Zrób to sam</b>: kolorowy punkt na palcu zobaczysz dużo wcześniej, niż rozpoznasz jego kolor; im mniejsza kropka (zwłaszcza niebieska), tym bliżej środka trzeba ją przesunąć.</li></ul>" },
    { id: "s4", n: 4, title: "Teoria przeciwstawnych procesów (Hering)", html:
      "<div class='plain'><p>Kolory działają w parach: czerwony–zielony, żółty–niebieski, biały–czarny. Gdy jedna strona pary się „zmęczy”, widzisz drugą. Tak powstają powidoki.</p></div>" +
      "<p class='srcline'>Kalat, s. 152–154</p>" +
      "<ul><li><b>Zrób to sam</b> (rys. 6.12): minutę patrzysz na obraz w jasnym świetle, potem na białą ścianę i widzisz <b>negatywowy powidok</b>: czerwony ↔ zielony, żółty ↔ niebieski, biały ↔ czarny. Teoria trichromatyczna tego nie wyjaśnia.</li>" +
      "<li><b>Ewald Hering</b> (XIX w.): barwy opierają się na parach <b>czerwony–zielony, żółty–niebieski, biały–czarny</b> (Hurvich, Jameson, 1957). Nie ma barwy czerwonozielonej ani żółtoniebieskiej. Mózg tworzy barwę na dwóch osiach: czerwony–zielony i żółty–niebieski.</li></ul>" +
      "<!--fig:para-->" +
      "<ul><li><b>Mechanizm</b> (rys. 6.13): komórka dwubiegunowa pobudzana przez światło krótkofalowe (niebieskie), hamowana przez długo- i średniofalowe (najbardziej przez ich mieszankę, czyli żółty). Wzrost aktywności = niebieski, spadek = żółty. Długie patrzenie na niebieski <b>męczy</b> komórkę; potem białe światło bardziej ją hamuje, niż pobudza, aktywność spada poniżej poziomu podstawowego i widzimy <b>żółty</b>. Wiele neuronów, od dwubiegunowych po korę, działa w ten sposób.</li>" +
      "<li><b>Ale to niepełne.</b> Czerwony kwadrat z białym kółkiem: kwadrat daje zgodnie z teorią czerwony powidok, a kółko zamiast szarego czy czarnego daje <b>zielony</b>.</li>" +
      "<li><b>Powidok złudzenia</b> (rys. 6.14; Shimojo, Kamitani, Nishida, 2001): cztery czerwone ćwiartki tworzą złudzenie czerwonego kwadratu. Powidok to czasem cztery zielone ćwiartki, a czasem cały <b>zielony kwadrat</b>, czyli powidok czegoś, czego nie było. Powidoki zależą częściowo od obszaru mózgu, który tworzy złudzenie, najpewniej <b>kory</b>.</li></ul>" },
    { id: "s5", n: 5, title: "Stałość barw, stałość jasności i teoria retinex", html:
      "<div class='plain'><p>Kolor i jasność przedmiotu mózg ustala, porównując go z resztą sceny. Dlatego w zielonych okularach banan nadal jest żółty.</p></div>" +
      "<p class='srcline'>Kalat, s. 154–155</p>" +
      "<ul><li><b>Stałość barw</b>: rozpoznajemy kolor przedmiotu mimo zmiany oświetlenia. W zielonych okularach albo przy zielonej żarówce banan dalej jest żółty, a papier biały, bo porównujemy przedmioty i od każdego odejmujemy tę samą zieleń. Wymaga porównania <b>wszystkich</b> przedmiotów w polu widzenia.</li>" +
      "<li><b>Stałość jasności</b> (rys. 6.15; Purves, Shimpi, Lotto, 1999): wydaje się, że góra jest szara, a dół biały; po zakryciu granicy palcami obie części są tak samo jasne. <b>Zrób to sam.</b></li></ul>" +
      "<div class='key'><p><b>Teoria retinex</b> (Edwin Land; retina + cortex): kora mózgowa porównuje informacje z różnych części siatkówki, aby określić jasność i barwę w każdym obszarze. Gdy w całym polu wykryje stały składnik zieleni, odejmuje go od każdego obiektu.</p></div>" +
      "<p><b>Purves</b>: widząc, wnioskujemy o cechach przedmiotu i „konstruujemy” go w świadomości („gdy poprzednio widziałem coś takiego, czym to było?”). To samo przy kształcie i ruchu. <mark>Percepcja wzrokowa to więcej niż pobudzenie siatkówki: to rodzaj rozumowania.</mark></p>" },
    { id: "s6", n: 6, title: "Zaburzenia widzenia barwnego", html:
      "<div class='plain'><p>Daltonizm pokazał, że oko nie kopiuje świata: można dobrze widzieć i nie odróżniać niektórych kolorów.</p></div>" +
      "<p class='srcline'>Kalat, s. 155</p>" +
      "<ul><li>Kalat na pytanie „co odkryli psychologowie?” wskazuje <b>ślepotę na barwy</b>. Przed jej odkryciem w <b>XVII wieku</b> sądzono, że wzrok <b>kopiuje</b> przedmioty (okrągłe – widzimy okrągłość, żółte – żółć).</li>" +
      "<li>Całkowita ślepota na barwy (tylko czerń, biel, szarość) jest <b>rzadka</b>.</li>" +
      "<li>Rodzaje: brak jednego typu czopków (długo-, średnio- lub krótkofalowych), brak dwóch typów (Nathans i in., 1989), wszystkie trzy, ale bardzo nieliczne lub zdeformowane.</li>" +
      "<li>Najczęstsza: <b>czerwono-zielona</b>. Mutacja: czopki długo- i średniofalowe mają <b>jeden barwnik zamiast dwóch</b>. Gen na <b>chromosomie X</b>: ok. <b>8% mężczyzn</b> i niecały <b>1% kobiet</b> (Bowmaker, 1998).</li></ul>" +
      "<aside class='extra'><p>Mężczyzna ma jeden chromosom X, więc jedna wadliwa kopia genu daje objaw. Kobieta ma dwa i zwykle druga kopia jest prawidłowa.</p></aside>" +
      "<p><b>Podsumowanie 6.1 u Kalata</b>: receptor transdukuje energię w potencjał receptorowy; informacja jest kodowana tak, że nie przypomina bodźca; prawo specyficznych energii nerwowych (było w czytance 1). Widzenie wymaga niezwykle złożonego przetwarzania: „myślałem, że światło wpada do oczu i wtedy się widzi” (syn Kalata).</p>" },
    { id: "s7", n: 7, title: "Co i gdzie: strumień brzuszny i grzbietowy", html:
      "<div class='plain'><p>Rozpoznanie, co to jest, i ustalenie, gdzie to jest, robią różne części mózgu. Po uszkodzeniu jednej z nich ktoś może opisać przedmiot, ale go nie chwyci, albo odwrotnie.</p></div>" +
      "<p class='srcline'>Kalat, s. 164 (koniec wcześniejszego fragmentu)</p>" +
      "<!--fig:strumienie-->" +
      "<ul><li><b>Strumień brzuszny</b> (kora skroniowa) uszkodzony: nie można w pełni opisać rozmiaru, kształtu ani położenia przedmiotów, ale można po nie sięgać, podchodzić i je omijać. Gorsze wyobrażanie kształtów i twarzy (czy Jerzy Waszyngton miał brodę? Kosslyn i in., 2001).</li>" +
      "<li><b>Strumień grzbietowy</b> (kora ciemieniowa) uszkodzony: dokładny opis tego, co się widzi, ale brak koordynacji z działaniem; nieprecyzyjne sięganie (Goodale i in.). Trudność z opisem położenia z pamięci (pokoje, meble).</li></ul>" +
      "<p><mark>Wzrokowa identyfikacja przedmiotów jest czymś innym niż spostrzeganie ich położenia.</mark></p>" },
    { id: "s8", n: 8, title: "Hubel i Wiesel: pasek zamiast punktu", html:
      "<div class='plain'><p>Dwaj badacze chcieli sprawdzić, na co reagują neurony kory wzrokowej. Punkty światła prawie nie działały. Zadziałała dopiero krawędź slajdu.</p></div>" +
      "<p class='srcline'>Kalat, s. 164</p>" +
      "<ul><li>Lata 50. XX w.: <b>David Hubel i Torsten Wiesel</b> (1959) rzutowali wzorce świetlne na siatkówkę i rejestrowali komórki w mózgu kota lub małpy.</li>" +
      "<li>Punkty świetlne dawały niewielką reakcję. Dużą dała <b>krawędź slajdu</b> wkładanego do rzutnika: pole recepcyjne w kształcie <b>paska</b>.</li>" +
      "<li><b>Nagroda Nobla</b>; „eksperymenty, które zaowocowały tysiącem mikroelektrod” (dziś raczej milionami).</li></ul>" +
      "<p><b>Metody 6.1, rejestracja mikroelektrodami</b>: znieczulenie zwierzęcia, mały otwór w czaszce, cienka elektroda (drucik z odsłoniętą końcówką albo szklana rurka z solą i drutem) w komórce lub obok niej, rejestracja aktywności przy różnych bodźcach. Wynik: jakie bodźce pobudzają daną komórkę.</p>" },
    { id: "s9", n: 9, title: "Komórki proste, złożone i z hamulcowym brzegiem", html:
      "<div class='plain'><p>Prosta lubi pasek w jednym miejscu. Złożona lubi pasek gdziekolwiek, zwłaszcza w ruchu. Z hamulcowym brzegiem lubi pasek, byle nie za długi.</p></div>" +
      "<p class='srcline'>Kalat, s. 164–166 (tabela 6.3 w sekcji „tab”)</p>" +
      "<!--fig:komorki-->" +
      "<ul><li><b>Komórka prosta</b> (tylko V1): pole w kształcie paska lub krawędzi ze <b>sztywnym podziałem</b> na część pobudzeniową i hamulcową. Im więcej światła w części pobudzeniowej, tym silniejsza reakcja; w hamulcowej – słabsza. Pasek przesunięty z środka lub odchylony od pionu daje spadek reakcji (rys. 6.23). Orientacje pionowe i poziome przeważają nad ukośnymi, bo tak ustawiona jest większość ważnych obiektów (Coppola i in., 1998).</li>" +
      "<li><b>Komórka złożona</b> (V1 i V2): pole bez wydzielonych stref; reaguje na bodziec o danej orientacji <b>w dowolnym miejscu</b> pola, najsilniej, gdy porusza się <b>prostopadle do swojej osi</b>. Test: lekko przesuwać pasek; reakcja w jednym miejscu = prosta, na dużym obszarze = złożona.</li>" +
      "<li>Złożone dostają sygnały od prostych: gdy GABA zablokował przewodzenie z ciała kolankowatego bocznego do prostych, złożone też przestały reagować (Martinez, Alonso, 2001).</li>" +
      "<li><b>Komórka z hamulcowym brzegiem</b> (end-stopped, hiperzłożona): jak złożona, ale z silnie hamującym obszarem na jednym końcu pola; reaguje na pasek, dopóki nie wyjdzie poza granicę.</li></ul>" },
    { id: "s10", n: 10, title: "Kolumny i detektory cech", html:
      "<div class='plain'><p>Komórki o podobnych upodobaniach stoją w słupkach. Czy każda z nich to „czujnik” jednej cechy? Częściowo tak, ale sprawa jest bardziej skomplikowana.</p></div>" +
      "<p class='srcline'>Kalat, s. 166–168</p>" +
      "<ul><li><b>Kolumny</b> (Hubel, Wiesel, 1977): komórki o podobnych właściwościach tworzą kolumny <b>prostopadłe do powierzchni</b> kory: reagują głównie na lewe oko, na prawe albo na oba, i najsilniej na linie o tej samej orientacji. Rys. 6.26: elektroda prostopadła (A) trafia na tę samą orientację; ukośna (B) przecina trzy kolumny i różne orientacje.</li>" +
      "<li><b>Detektor cech</b>: neuron, którego reakcja oznacza wystąpienie cechy. Za: długie patrzenie na cechę zmniejsza wrażliwość. <b>Efekt wodospadu</b>: po minucie patrzenia na wodospad skały zdają się wznosić, bo zmęczyły się detektory ruchu w dół. <b>Zrób to sam</b>: wolne przewijanie ekranu.</li>" +
      "<li>Ale każdy neuron reaguje w pewnym stopniu na wiele bodźców; reakcja jest niejednoznaczna bez porównania z innymi (Tsunoda i in., 2001).</li>" +
      "<li>Komórki „od pasków” reagują silniej na <b>prążki o sinusoidalnej jasności</b>; są precyzyjnie dostrojone do <b>częstotliwości przestrzennych</b> (DeValois i in., 1982). Z sinusoid (<b>analiza fourierowska</b>) można złożyć każdy kształt, ale nie widzimy świata jako fal. V1 i V2 to raczej <b>wstępny etap</b> przed rozpoznaniem w wyspecjalizowanych obszarach (Lennie, 1998).</li></ul>" },
    { id: "s11", n: 11, title: "Analiza kształtów poza V1", html:
      "<div class='plain'><p>Im dalej w mózgu, tym komórki widzą większy kawałek świata i reagują na bardziej złożone kształty. Na końcu jest kora skroniowa, która rozpoznaje obiekt, gdziekolwiek jest.</p></div>" +
      "<p class='srcline'>Kalat, s. 168</p>" +
      "<ul><li>Od prostych przez złożone dalej: pola coraz <b>większe i bardziej wyspecjalizowane</b>. <b>V2</b>: część komórek reaguje na koła i linie pod kątem prostym (Hegdé, Van Essen, 2000). <b>V4</b>: nachylenie linii w przestrzeni 3D (Hinkle, Connor, 2002).</li>" +
      "<li><b>Dolna kora skroniowa</b>: ogromne pola (zawsze z polem dołka), więc mało informacji o położeniu. Selektywne reakcje na złożone kształty: tak samo na czarny kwadrat na białym, biały na czarnym i kwadrat z kropek w ruchu (Sáry i in., 1993).</li></ul>" +
      "<!--fig:skroniowa-->" +
      "<ul><li>Neurony reagują podobnie na <b>odbicie lustrzane</b> i <b>obraz negatywowy</b>, ale słabo na <b>odwrócenie figury i tła</b> (Baylis, Driver, 2001; rys. 6.27). Rozpoznają <b>obiekt</b>, a nie ilość światła w danym miejscu siatkówki.</li>" +
      "<li>Dzięki ignorowaniu zmian wielkości i kierunku możliwa jest prawdopodobnie <b>stałość kształtu</b>: rozpoznanie przedmiotu mimo zmiany położenia lub orientacji.</li></ul>" }
  ]
});
