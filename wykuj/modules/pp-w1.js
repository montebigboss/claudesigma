/* Moduł: Procesy poznawcze (percepcja i uwaga), wykład 1: Wprowadzenie.
 *
 * Źródła: zdjęcia slajdów z wykładu i notatki tekstowe studenta z tego,
 * co padło na wykładzie ustnie.
 *
 *   "S" slajd (domyślne, pomijane)
 *   "K" definicja ze slajdu do zapamiętania słowo w słowo
 *   "U" powiedziane ustnie (z notatek studenta)
 *   "D" dopowiedzenie spoza wykładu (★). Egzamin próbny je pomija.
 *
 * Typ "order": ułóż w kolejności; a[] w poprawnej kolejności.
 * Pole deep: wątki „do przemyślenia” z wykładu, pokazywane w notatkach.
 */
Wykuj.registerModule({
  id: "pp-w1",
  course: { id: "pp", name: "Procesy poznawcze: percepcja i uwaga", short: "PP", theme: "plum", icon: "eye" },
  number: 1,
  title: "Wprowadzenie do percepcji i uwagi",
  official: "Wprowadzenie do psychologii percepcji i uwagi",
  lecturer: null,
  term: "KUL · wykład 1 z 15",
  passing: null,
  examNote: "Forma zaliczenia nie padła w materiałach. Próg 50% to tylko punkt odniesienia.",
  passRatio: 0.5,
  sourceNames: { S: "slajdy", K: "definicja ze slajdu", U: "ustnie na wykładzie (twoje notatki)", D: "★ dopowiedzenie spoza wykładu" },

  sets: {
    umysl: { label: "Co to jest?", items: ["Reprezentacje poznawcze", "Procesy poznawcze", "Świadomość"] },
    problem: { label: "Który z trzech problemów?", items: ["Stymulacja", "Percepcja", "Uwaga"] },
    etap: { label: "Który to etap?", items: ["Bodziec fizyczny", "Receptor", "Transdukcja", "Kodowanie neuronalne", "Organizacja percepcyjna", "Rozpoznanie"] },
    zawod: { label: "Dlaczego percepcja zawiodła?", items: ["Niejednoznaczność stymulacji", "Szum", "Ograniczona rozdzielczość", "Kontekst", "Wcześniejsza wiedza", "Cele i uwaga"] },
    bodziec: { label: "Jaki to bodziec?", items: ["Dystalny", "Proksymalny"] },
    kierunek: { label: "Oddolnie czy odgórnie?", items: ["Proces oddolny (bottom-up)", "Proces odgórny (top-down)"] }
  },

  units: [
    { id: "realnosc", title: "Czy widzimy świat takim, jaki jest?", sub: "Interpretacja i trzy główne problemy", icon: "eye" },
    { id: "historia", title: "Od behawioryzmu do poznawczej", sub: "Zmienne latentne i „ciemna materia” psychologii", icon: "split" },
    { id: "umysl", title: "Reprezentacje, procesy, świadomość", sub: "Czym zajmuje się psychologia poznawcza", icon: "spark" },
    { id: "rodzaje", title: "Rodzaje procesów poznawczych", sub: "Od percepcji do kontroli poznawczej", icon: "pairs" },
    { id: "ewolucja", title: "Po co nam percepcja?", sub: "Znaczenie ewolucyjne", icon: "flame" },
    { id: "odwrotny", title: "Problem odwrotny percepcji", sub: "Mózg zgaduje przyczynę sygnału", icon: "target" },
    { id: "etapy", title: "Od bodźca do spostrzeżenia", sub: "Sześć etapów i dwie pętle zwrotne", icon: "path" },
    { id: "bodzce", title: "Dystalne, proksymalne, oddolne, odgórne", sub: "Dwa ważne rozróżnienia", icon: "wall" },
    { id: "zawodna", title: "Dlaczego percepcja zawodzi?", sub: "Sześć przyczyn ze slajdu", icon: "x" },
    { id: "uwaga", title: "Po co nam uwaga?", sub: "10⁹ bitów wchodzi, 10 bitów zostaje", icon: "bolt" },
    { id: "mix", title: "Rozpoznaj w życiu", sub: "Sytuacje z codzienności", icon: "dice" },
    { id: "boss", title: "Test końcowy", sub: "Wszystko z wykładu 1, 15 pytań", icon: "crown", boss: true }
  ],

  concepts: [
    { id: "interpretacja", u: "realnosc", s: "U", term: "Rzeczywistość jako interpretacja",
      plain: "Nie widzimy świata „jak w oknie”. Zmysły łapią mały wycinek, a mózg sam, automatycznie, nadaje mu znaczenie.",
      def: "Zdrowy rozsądek mówi, że widzimy rzeczywistość taką, jaka jest, ale widzimy przez zmysły tylko jej mały fragment, nadajemy znaczenie automatycznie i odbieramy często biernie. Rzeczywistość, którą widzimy, to interpretacja.",
      sh: "to, co widzimy, to interpretacja mózgu" },
    { id: "trzy-problemy", u: "realnosc", s: "U", term: "Trzy główne problemy",
      plain: "Co w ogóle wpada do głowy, jak to rozumiemy i co z tego wygrywa walkę o naszą głowę.",
      def: "Stymulacja → percepcja → uwaga: co dociera do systemu, jak zostaje zinterpretowane, co uzyskuje priorytet.",
      sh: "co dociera, jak to rozumiemy, co wygrywa" },
    { id: "behawioryzm", u: "historia", s: "U", term: "Behawioryzm",
      plain: "Patrzymy tylko na to, co widać: sytuacja i zachowanie. Co dzieje się „w środku”, nas nie interesuje.",
      def: "Schemat: sytuacja → zachowanie. Według wykładu ten nurt się „wywalił”, bo bez zmiennych latentnych nie da się wyjaśnić zachowania.",
      sh: "sytuacja → zachowanie" },
    { id: "latentne", u: "historia", s: "U", term: "Zmienne latentne",
      plain: "Rzeczy, których nie da się bezpośrednio zmierzyć ani zobaczyć, ale bez których nic się nie spina, np. myśli czy pamięć.",
      def: "Zmienne, których nie można (bezpośrednio) zmierzyć. Psychologia poznawcza uznała, że bez nich się nie da.",
      sh: "niemierzalne bezpośrednio, ale konieczne" },
    { id: "ciemna-materia", u: "historia", s: "U", term: "„Ciemna materia” psychologii",
      plain: "Fizycy zakładają ciemną materię, choć jej nie widać, bo inaczej teorie się sypią. Psychologia poznawcza tak samo zakłada umysł.",
      def: "Analogia z wykładu: bez założenia, że istnieje ciemna materia, teorie nie miałyby racji bytu. Tak samo bez zmiennych latentnych (procesów poznawczych) nie da się zbudować teorii zachowania.",
      sh: "niewidoczne, ale konieczne do teorii" },
    { id: "psych-pozn", u: "historia", s: "U", term: "Schemat psychologii poznawczej",
      plain: "Między sytuacją a zachowaniem jest „środek”: umysł i mózg, które przetwarzają informacje.",
      def: "Sytuacja → procesy poznawcze (umysł i mózg, mind and brain) → zachowanie.",
      sh: "sytuacja → procesy poznawcze → zachowanie" },
    { id: "reprezentacje", u: "umysl", s: "K", term: "Reprezentacje poznawcze",
      plain: "To, co „siedzi” w głowie i niesie informację: obraz, pojęcie, wspomnienie. Może być na chwilę albo na dłużej.",
      def: "Względnie trwałe lub chwilowe stany umysłu, które niosą informację.",
      sh: "stany umysłu niosące informację" },
    { id: "procesy", u: "umysl", s: "K", term: "Procesy poznawcze",
      plain: "To, co umysł z tymi informacjami robi w czasie: przetwarza, zmienia, łączy.",
      def: "Operacje lub zmiany zachodzące w umyśle: jak informacje są przetwarzane w czasie.",
      sh: "operacje na informacji w czasie" },
    { id: "swiadomosc", u: "umysl", s: "K", term: "Świadomość",
      plain: "Kiedy to, co dzieje się w głowie, staje się czymś, co przeżywamy i co możemy opisać.",
      def: "Kiedy i w jakich warunkach reprezentacje i procesy poznawcze stają się treścią doświadczenia.",
      sh: "kiedy procesy stają się doświadczeniem" },
    { id: "mind-body", u: "umysl", s: "U", term: "Problem umysł–ciało (mind–body)",
      plain: "Jak to możliwe, że z prądów w mózgu bierze się to, że coś czujesz i przeżywasz? Tego nikt dobrze nie rozumie.",
      def: "Jak to jest, że procesom fizycznym towarzyszy coś, co nie ma fizycznego charakteru, czyli przeżycie. Subiektywne doświadczenie odróżnia nas od przyjmowania informacji jak robot.",
      sh: "jak z procesów fizycznych bierze się przeżycie" },
    { id: "cztery", u: "umysl", s: "U", term: "Około 4 reprezentacje",
      plain: "Naraz możemy „zaraportować”, czyli świadomie opisać, tylko około czterech rzeczy, bo reszta zmienia się co chwilę.",
      def: "Tylko około 4 reprezentacje poznawcze mogą zostać „zraportowane”, bo zmieniają się co chwilę.",
      sh: "ok. 4 naraz da się zraportować" },
    { id: "rodzaje", u: "rodzaje", term: "Rodzaje procesów poznawczych",
      plain: "Od prostszych do bardziej złożonych: percepcja i uwaga, potem uczenie się i pamięć, język i myślenie, na górze decyzje i kontrola poznawcza. Wszystko na siebie nawzajem wpływa, a świadomość jest obok.",
      def: "Percepcja, uwaga, uczenie się, pamięć, język, myślenie, podejmowanie decyzji, kontrola poznawcza; do tego świadomość. Im wyżej na schemacie, tym większa złożoność i zakres integracji.",
      sh: "percepcja, uwaga, pamięć… kontrola poznawcza" },
    { id: "ewolucja", u: "ewolucja", term: "Znaczenie ewolucyjne percepcji",
      plain: "Żeby przeżyć i mieć dzieci, trzeba ogarniać otoczenie: zauważyć drapieżnika, wodę, jedzenie, partnera. Do tego jest percepcja.",
      def: "Cel: przeżyć na tyle długo, by przekazać swój materiał genetyczny. Przeżycie w określonym środowisku wymaga efektywnej adaptacji, adaptacja wymaga interakcji ze środowiskiem, a interakcja oznacza konieczność orientacji w nim i rozpoznania zagrożeń i możliwości.",
      sh: "przeżyć → adaptacja → interakcja → orientacja" },
    { id: "odwrotny", u: "odwrotny", term: "Problem odwrotny percepcji",
      plain: "Mózg siedzi w ciemnej czaszce i dostaje tylko impulsy elektryczne. Musi z nich zgadnąć, co jest na zewnątrz, a ten sam sygnał może mieć różne przyczyny.",
      def: "Mózg nie ma bezpośredniego dostępu do świata zewnętrznego, dostaje tylko sygnał w postaci elektrycznych impulsów ze zmysłów, więc musi wnioskować o ich przyczynach. Różne przyczyny mogą prowadzić do takiego samego sygnału.",
      sh: "z sygnału trzeba zgadnąć przyczynę" },
    { id: "fizyka-percepcja", u: "odwrotny", term: "Fizyka a percepcja",
      plain: "Fizyka idzie od przyczyny do sygnału. Percepcja musi iść pod prąd: od sygnału do przyczyny.",
      def: "Fizyka: jak przyczyny wytwarzają sygnał? Percepcja: jaka przyczyna mogła wytworzyć ten sygnał? (od niepełnego sygnału do jego prawdopodobnej przyczyny).",
      sh: "przyczyna → sygnał / sygnał → przyczyna" },
    { id: "kat", u: "odwrotny", term: "Ten sam kąt widzenia",
      plain: "Mała moneta blisko oka i duży talerz daleko mogą dać na siatkówce dokładnie taki sam obrazek. Sam obrazek tego nie rozstrzygnie.",
      def: "Obiekt A (duży, daleko) i B (mały, blisko) przy tym samym kącie widzenia α dają taki sam rozmiar obrazu na siatkówce. Pomagają: kontekst, wiedza, dodatkowe wskazówki zmysłowe.",
      sh: "„mały i blisko” czy „duży i daleko”?" },
    { id: "bodziec-f", u: "etapy", term: "Bodziec fizyczny",
      plain: "To, co w ogóle może trafić do zmysłu: światło, dźwięk, zapach.",
      def: "Etap 1: energia lub zdarzenie dostępne dla zmysłu.", sh: "energia dostępna dla zmysłu" },
    { id: "receptor", u: "etapy", term: "Receptor",
      plain: "Specjalna komórka, która „łapie” dany rodzaj energii, np. czopki w oku.",
      def: "Etap 2: wyspecjalizowana komórka lub zakończenie nerwowe.", sh: "wyspecjalizowana komórka lub zakończenie nerwowe" },
    { id: "transdukcja", u: "etapy", term: "Transdukcja",
      plain: "Tłumaczenie: światło czy dźwięk zamienia się w język mózgu, czyli sygnał elektrochemiczny. Dzieje się w receptorze.",
      def: "Etap 3: zamiana energii fizycznej na sygnał elektrochemiczny; zachodzi w receptorze.", sh: "energia → sygnał elektrochemiczny" },
    { id: "kodowanie", u: "etapy", term: "Kodowanie neuronalne",
      plain: "Informacja zapisana w tym, które neurony i jak mocno „strzelają”.",
      def: "Etap 4: wzorce aktywności neuronów i populacji neuronów.", sh: "wzorce aktywności neuronów" },
    { id: "organizacja", u: "etapy", term: "Organizacja percepcyjna",
      plain: "Z kresek, kolorów i plam mózg składa całe rzeczy: powierzchnie, przedmioty, zdarzenia.",
      def: "Etap 5: cechy → powierzchnie, obiekty i zdarzenia.", sh: "cechy składane w obiekty i zdarzenia" },
    { id: "rozpoznanie", u: "etapy", term: "Rozpoznanie",
      plain: "Wiesz, CO to jest: „to kubek”, „to mama”, „to niebezpieczne”.",
      def: "Etap 6: kategoria, obiekt, osoba lub znaczenie.", sh: "kategoria, obiekt, osoba, znaczenie" },
    { id: "petle", u: "etapy", term: "Dwie pętle zwrotne",
      plain: "Informacja nie płynie tylko w jedną stronę. Mózg sam do siebie „odpisuje” (pętla neuronalna), a ty ruszasz oczami czy ręką, żeby zobaczyć lepiej (pętla sensoryczno-ruchowa).",
      def: "Pętla neuronalna: strzałki wstecz, sprzężenia neuronalne między etapami. Pętla sensoryczno-ruchowa: działanie (także bez pełnego świadomego rozpoznania) zmienia dostępną stymulację, np. ruch oczu, podejście, dotknięcie przedmiotu.",
      sh: "neuronalna i sensoryczno-ruchowa" },
    { id: "odgorne-wplywy", u: "etapy", term: "Wpływy odgórne",
      plain: "To, co już wiesz, czego chcesz i czego się spodziewasz, zmienia to, co widzisz.",
      def: "Kontekst, cele, pamięć, oczekiwania wpływają odgórnie na przetwarzanie informacji (na kodowanie, organizację i rozpoznanie).",
      sh: "kontekst, cele, pamięć, oczekiwania" },
    { id: "dystalny", u: "bodzce", s: "K", term: "Bodziec dystalny",
      plain: "Prawdziwa rzecz „tam”, w świecie: litera A na tablicy.",
      def: "Obiekt lub zdarzenie w środowisku.", sh: "obiekt lub zdarzenie w środowisku" },
    { id: "proksymalny", u: "bodzce", s: "K", term: "Bodziec proksymalny",
      plain: "To, co faktycznie dotyka zmysłu: odwrócony obrazek litery A na siatkówce.",
      def: "Wzorzec energii docierający do receptorów.", sh: "wzorzec energii na receptorach" },
    { id: "bottom-up", u: "bodzce", term: "Procesy oddolne (bottom-up)",
      plain: "Od danych w górę: kolor, kształt, dźwięk, ruch budują spostrzeżenie.",
      def: "Przetwarzanie napędzane cechami bodźca: dźwięk, kolor, kształt, lokalizacja, ruch i inne.", sh: "od cech bodźca w górę" },
    { id: "top-down", u: "bodzce", term: "Procesy odgórne (top-down)",
      plain: "Od głowy w dół: wiedza, oczekiwania, cele, pamięć i kultura podpowiadają, co widzisz.",
      def: "Przetwarzanie napędzane tym, co już mamy w umyśle: wiedza, oczekiwania, cele, pamięć, kultura i inne.", sh: "od wiedzy i oczekiwań w dół" },
    { id: "zawodnosc", u: "zawodna", term: "Dlaczego percepcja bywa zawodna",
      plain: "Sygnał bywa dwuznaczny, zaszumiony i mało dokładny, a do tego mieszają kontekst, to, co już wiemy, i to, na czym się skupiamy.",
      def: "Niejednoznaczność stymulacji, szum, ograniczona rozdzielczość, kontekst, wcześniejsza wiedza, cele i uwaga.",
      sh: "dwuznaczność, szum, rozdzielczość, kontekst, wiedza, cele" },
    { id: "przepustowosc", u: "uwaga", term: "10⁹ wobec 10 bitów na sekundę",
      plain: "Do układu nerwowego wpada około miliarda bitów na sekundę, a świadomie używamy około dziesięciu. To jak próba wypicia wodospadu przez słomkę.",
      def: "Cały układ nerwowy odbiera ok. 10⁹ bitów/s informacji z otoczenia; świadomie przetwarzamy i wykorzystujemy do działania tylko ok. 10 bitów/s (Zheng i Meister, 2025).",
      sh: "ok. miliard bitów wchodzi, ok. 10 zostaje" },
    { id: "uwaga", u: "uwaga", term: "Po co uwaga",
      plain: "Uwaga to bramkarz: wybiera z zalewu informacji to, co teraz ważne, a resztę wycina.",
      def: "Mózg filtruje i redukuje ogromną ilość informacji zmysłowej, zostawiając do świadomości i działania ułamek. Uwaga pomaga w redukcji i selekcji informacji istotnych w danym kontekście.",
      sh: "selekcja i redukcja informacji" },
    { id: "plan", u: "uwaga", term: "Plan kursu",
      plain: "Pierwsze 10 wykładów to percepcja (wzrok, słuch, inne zmysły, teorie, złudzenia), ostatnie 5 to uwaga.",
      def: "Percepcja (1–10): wprowadzenie; jak się bada; percepcja wzrokowa I i II; słuchowa; smak, węch, dotyk, równowaga i ból; integracja multisensoryczna; teorie percepcji I i II; złudzenia i błędy. Uwaga (11–15): funkcje i mechanizmy; teorie uwagi i kontrola wykonawcza; neurobiologia; uwaga, świadomość i ograniczenia przetwarzania; różnice indywidualne.",
      sh: "10 wykładów percepcji, 5 uwagi" }
  ],

  exercises: [
    /* ---------- Czy widzimy świat takim, jaki jest ---------- */
    { u: "realnosc", t: "tf", s: "U", q: "Według wykładu widzimy rzeczywistość dokładnie taką, jaka jest, tak jak podpowiada zdrowy rozsądek.", a: false,
      x: "Zdrowy rozsądek mówi „tak”, ale widzimy tylko mały fragment, a znaczenie nadajemy automatycznie. To, co widzimy, to interpretacja." },
    { u: "realnosc", t: "mcq", s: "U", q: "Czym według wykładu jest rzeczywistość, którą widzimy?",
      a: ["Interpretacją dokonaną przez nasze zmysły i mózg", "Wiernym zapisem świata", "Losowym szumem", "Wyłącznie wspomnieniem"] },
    { u: "realnosc", t: "order", s: "U", q: "Ułóż trzy główne problemy w kolejności przetwarzania.", a: ["Stymulacja", "Percepcja", "Uwaga"] },
    { u: "realnosc", t: "which", set: "problem", s: "U", q: "Co w ogóle dociera do systemu?", a: 1 },
    { u: "realnosc", t: "which", set: "problem", s: "U", q: "Jak to, co dotarło, zostaje zinterpretowane?", a: 2 },
    { u: "realnosc", t: "which", set: "problem", s: "U", q: "Co uzyskuje priorytet?", a: 3 },
    { u: "realnosc", t: "multi", s: "U", q: "Co według notatek z wykładu ogranicza i kształtuje naszą percepcję?",
      a: ["widzimy zmysłami tylko mały fragment rzeczywistości", "nadajemy znaczenie automatycznie", "często odbieramy biernie"],
      o: ["zawsze świadomie analizujemy każdy bodziec", "widzimy wszystko, co istnieje"] },
    { u: "realnosc", t: "mcq", s: "D", q: "Który przykład pokazuje, że zmysły łapią tylko wycinek rzeczywistości?",
      a: ["Nie widzimy podczerwieni ani nie słyszymy ultradźwięków", "Lubimy niektóre kolory bardziej niż inne", "Czasem mylimy imiona znajomych", "Niektórzy ludzie noszą okulary"] },

    /* ---------- Historia ---------- */
    { u: "historia", t: "mcq", s: "U", q: "Jaki schemat opisuje behawioryzm?", a: ["Sytuacja → zachowanie", "Sytuacja → procesy poznawcze → zachowanie", "Zachowanie → sytuacja", "Mózg → świadomość → mózg"] },
    { u: "historia", t: "mcq", s: "U", q: "Jaki schemat opisuje psychologia poznawcza?", a: ["Sytuacja → procesy poznawcze (umysł i mózg) → zachowanie", "Sytuacja → zachowanie", "Bodziec → nagroda", "Zachowanie → procesy poznawcze → sytuacja"] },
    { u: "historia", t: "mcq", s: "U", q: "Czym są zmienne latentne?", a: ["Zmiennymi, których nie można bezpośrednio zmierzyć", "Zmiennymi, które zawsze da się zmierzyć linijką", "Błędami pomiaru", "Zmiennymi tylko w behawioryzmie"] },
    { u: "historia", t: "mcq", s: "U", q: "Dlaczego według wykładu behawioryzm „się wywalił”?",
      a: ["Bez zmiennych latentnych (tego, co w umyśle) nie dało się wyjaśnić zachowania", "Bo nie mierzył zachowania", "Bo zajmował się tylko świadomością", "Bo nie przeprowadzał eksperymentów"] },
    { u: "historia", t: "mcq", s: "U", q: "Do czego wykładowca porównał zakładanie procesów poznawczych, których nie widać?",
      a: ["Do ciemnej materii w fizyce", "Do czarnej dziury", "Do wirusa komputerowego", "Do placebo"],
      x: "Ciemnej materii nie widać, ale bez jej założenia teorie się nie spinają. Tak samo z umysłem." },
    { u: "historia", t: "cloze", s: "U", q: "Psychologia poznawcza: sytuacja → procesy poznawcze (umysł i ___) → zachowanie.", a: ["mózg", "dusza", "nagroda", "kara"] },
    { u: "historia", t: "mcq", s: "D", q: "Kiedy według podręczników nastąpiła „rewolucja poznawcza” w psychologii?",
      a: ["Na przełomie lat 50. i 60. XX wieku", "W latach 90. XX wieku", "W XIX wieku", "Po 2010 roku"],
      x: "W notatkach z wykładu zapisano „lata 90.”. Klasycznie zwrot poznawczy datuje się na lata 50.–60. (np. „Cognitive Psychology” Neissera, 1967). Lata 90. to „dekada mózgu” i rozkwit neuronauki poznawczej. Sprawdź, co dokładnie padło na wykładzie." },
    { u: "historia", t: "type", s: "U", q: "Zmienne, których nie można bezpośrednio zmierzyć, to zmienne…", a: ["latentne"] },

    /* ---------- Umysł ---------- */
    { u: "umysl", t: "match", s: "K", pairs: [
      ["Reprezentacje poznawcze", "stany umysłu niosące informację"], ["Procesy poznawcze", "przetwarzanie informacji w czasie"],
      ["Świadomość", "kiedy to staje się doświadczeniem"]] },
    { u: "umysl", t: "which", set: "umysl", s: "K", q: "Względnie trwałe lub chwilowe stany umysłu, które niosą informację.", a: 1 },
    { u: "umysl", t: "which", set: "umysl", s: "K", q: "Operacje lub zmiany zachodzące w umyśle: jak informacje są przetwarzane w czasie.", a: 2 },
    { u: "umysl", t: "which", set: "umysl", s: "K", q: "Kiedy i w jakich warunkach reprezentacje i procesy poznawcze stają się treścią doświadczenia.", a: 3 },
    { u: "umysl", t: "which", set: "umysl", s: "D", q: "Obraz twarzy przyjaciela, który masz w pamięci.", a: 1 },
    { u: "umysl", t: "which", set: "umysl", s: "D", q: "Porównywanie dwóch ofert i wybieranie tańszej.", a: 2 },
    { u: "umysl", t: "mcq", s: "K", q: "Na jakie trzy obszary dzieli się umysł na slajdzie „Czym zajmuje się psychologia poznawcza?”",
      a: ["Reprezentacje poznawcze, świadomość, procesy poznawcze", "Percepcja, uwaga, pamięć", "Id, ego, superego", "Myślenie, uczucia, wola"] },
    { u: "umysl", t: "mcq", s: "U", q: "Na czym polega problem umysł–ciało (mind–body problem)?",
      a: ["Jak to jest, że procesom fizycznym w mózgu towarzyszy przeżycie", "Jak ćwiczenia fizyczne wpływają na nastrój", "Jak mózg steruje mięśniami", "Dlaczego ciało się męczy"] },
    { u: "umysl", t: "tf", s: "U", q: "Według wykładu to subiektywne doświadczenie odróżnia nas od przyjmowania informacji tak jak roboty.", a: true },
    { u: "umysl", t: "mcq", s: "U", q: "Ile reprezentacji poznawczych według wykładu może zostać naraz „zraportowanych”?",
      a: ["Około 4", "Około 40", "Około 400", "Nieograniczenie wiele"] },
    { u: "umysl", t: "mcq", s: "U", q: "Dlaczego tylko kilka reprezentacji da się zraportować?", a: ["Bo zmieniają się co chwilę", "Bo są zawsze nieświadome", "Bo mózg ich nie przechowuje", "Bo nie mają treści"] },

    /* ---------- Rodzaje procesów ---------- */
    { u: "rodzaje", t: "multi", q: "Które z tych procesów są na slajdzie „Rodzaje procesów poznawczych”?",
      a: ["percepcja", "uwaga", "pamięć", "uczenie się", "język", "myślenie", "podejmowanie decyzji", "kontrola poznawcza"],
      o: ["trawienie", "odruch kolanowy"] },
    { u: "rodzaje", t: "mcq", q: "Które procesy są na schemacie najniżej, jako najbardziej podstawowe?", a: ["Percepcja i uwaga", "Myślenie i język", "Podejmowanie decyzji i kontrola poznawcza", "Pamięć i uczenie się"] },
    { u: "rodzaje", t: "mcq", q: "Które procesy są na schemacie najwyżej?", a: ["Podejmowanie decyzji i kontrola poznawcza", "Percepcja i uwaga", "Uczenie się i pamięć", "Język i percepcja"] },
    { u: "rodzaje", t: "mcq", q: "Co oznacza strzałka w górę na schemacie procesów poznawczych?", a: ["Rosnącą złożoność i zakres integracji", "Upływ czasu", "Rozwój dziecka", "Rosnącą liczbę neuronów"] },
    { u: "rodzaje", t: "tf", q: "Procesy poznawcze na schemacie działają osobno i nie wpływają na siebie.", a: false, x: "Schemat pokazuje strzałki wzajemnych wpływów, np. percepcja ↔ uwaga, uczenie się ↔ pamięć." },
    { u: "rodzaje", t: "mcq", q: "Który element stoi na schemacie z boku, ponad procesami, przy kontroli poznawczej?", a: ["Świadomość", "Percepcja", "Mózg", "Zachowanie"] },
    { u: "rodzaje", t: "order", q: "Ułóż od najbardziej podstawowego do najbardziej złożonego (jak na schemacie).", a: ["Percepcja", "Pamięć", "Myślenie", "Kontrola poznawcza"] },

    /* ---------- Ewolucja ---------- */
    { u: "ewolucja", t: "mcq", q: "Jaki jest ewolucyjny cel, któremu służy percepcja?", a: ["Przeżyć na tyle długo, by przekazać swój materiał genetyczny", "Odczuwać przyjemność", "Tworzyć sztukę", "Mieć jak najwięcej wspomnień"] },
    { u: "ewolucja", t: "order", q: "Ułóż łańcuch rozumowania ze slajdu „Percepcja. Znaczenie ewolucyjne”.",
      a: ["Przeżyć i przekazać geny", "Adaptować się do środowiska", "Wchodzić w interakcję ze środowiskiem", "Orientować się i rozpoznawać zagrożenia i możliwości"] },
    { u: "ewolucja", t: "cloze", q: "Aby przeżyć w określonym środowisku, trzeba się do niego efektywnie ___.", a: ["adaptować", "przyzwyczaić", "przeprowadzić", "zamknąć"] },
    { u: "ewolucja", t: "cloze", q: "Adaptacja wymaga ___ ze środowiskiem.", a: ["interakcji", "rywalizacji", "ucieczki", "zgody"] },
    { u: "ewolucja", t: "multi", q: "Co według slajdu oznacza interakcja ze środowiskiem?", a: ["orientację w nim", "rozpoznanie zagrożeń", "rozpoznanie możliwości"], o: ["ucieczkę od niego", "ignorowanie bodźców"] },

    /* ---------- Problem odwrotny ---------- */
    { u: "odwrotny", t: "mcq", q: "Na czym polega problem odwrotny percepcji?",
      a: ["Mózg dostaje tylko impulsy ze zmysłów i musi wnioskować o ich przyczynach", "Obraz na siatkówce jest odwrócony do góry nogami", "Lewa półkula widzi prawą stronę", "Pamiętamy rzeczy w odwrotnej kolejności"],
      x: "Pułapka: odwrócony obraz na siatkówce to co innego. Problem odwrotny to zgadywanie przyczyny na podstawie sygnału." },
    { u: "odwrotny", t: "tf", q: "Mózg ma bezpośredni dostęp do świata zewnętrznego.", a: false },
    { u: "odwrotny", t: "match", pairs: [["Fizyka", "jak przyczyny wytwarzają sygnał?"], ["Percepcja", "jaka przyczyna wytworzyła ten sygnał?"]] },
    { u: "odwrotny", t: "mcq", q: "Duży obiekt daleko i mały obiekt blisko pod tym samym kątem widzenia dają na siatkówce…",
      a: ["taki sam rozmiar obrazu", "zawsze różne obrazy", "obraz tylko dużego obiektu", "obraz tylko bliższego obiektu"] },
    { u: "odwrotny", t: "multi", q: "Co według slajdu pomaga w interpretacji niejednoznacznego sygnału?", a: ["kontekst", "wiedza", "dodatkowe wskazówki zmysłowe"], o: ["większa źrenica", "zamknięcie oczu"] },
    { u: "odwrotny", t: "cloze", q: "Różne przyczyny mogą prowadzić do ___ sygnału.", a: ["takiego samego", "zawsze innego", "żadnego", "silniejszego"] },
    { u: "odwrotny", t: "mcq", q: "W jakiej postaci mózg dostaje sygnał ze zmysłów?", a: ["Elektrycznych impulsów", "Obrazów i dźwięków", "Słów", "Zapachów"] },
    { u: "odwrotny", t: "mcq", s: "D", q: "Kto w XIX wieku opisał percepcję jako „nieświadome wnioskowanie”, co pasuje do problemu odwrotnego?",
      a: ["Hermann von Helmholtz", "Sigmund Freud", "B. F. Skinner", "Jean Piaget"] },

    /* ---------- Etapy ---------- */
    { u: "etapy", t: "order", q: "Ułóż etapy od bodźca do spostrzeżenia.",
      a: ["Bodziec fizyczny", "Receptor", "Transdukcja", "Kodowanie neuronalne", "Organizacja percepcyjna", "Rozpoznanie"] },
    { u: "etapy", t: "which", set: "etap", q: "Energia lub zdarzenie dostępne dla zmysłu.", a: 1 },
    { u: "etapy", t: "which", set: "etap", q: "Wyspecjalizowana komórka lub zakończenie nerwowe.", a: 2 },
    { u: "etapy", t: "which", set: "etap", q: "Energia fizyczna zamienia się w sygnał elektrochemiczny.", a: 3 },
    { u: "etapy", t: "which", set: "etap", q: "Wzorce aktywności neuronów i ich populacji.", a: 4 },
    { u: "etapy", t: "which", set: "etap", q: "Z cech powstają powierzchnie, obiekty i zdarzenia.", a: 5 },
    { u: "etapy", t: "which", set: "etap", q: "Kategoria, obiekt, osoba lub znaczenie: „to jest kubek”.", a: 6 },
    { u: "etapy", t: "mcq", q: "Gdzie zachodzi transdukcja?", a: ["W receptorze", "W korze mózgowej", "W rdzeniu kręgowym", "W bodźcu fizycznym"] },
    { u: "etapy", t: "type", q: "Zamiana energii fizycznej na sygnał elektrochemiczny to…", a: ["transdukcja"] },
    { u: "etapy", t: "multi", q: "Jakie wpływy odgórne działają na przetwarzanie informacji według schematu?", a: ["kontekst", "cele", "pamięć", "oczekiwania"], o: ["receptor", "transdukcja"] },
    { u: "etapy", t: "mcq", q: "Jakie dwie pętle zwrotne pokazuje schemat?", a: ["Neuronalną i sensoryczno-ruchową", "Hormonalną i nerwową", "Świadomą i nieświadomą", "Wzrokową i słuchową"] },
    { u: "etapy", t: "mcq", q: "Co robi pętla sensoryczno-ruchowa?", a: ["Działanie zmienia dostępną stymulację, np. ruch oczu, podejście, dotknięcie", "Wysyła hormony do mózgu", "Wyłącza percepcję podczas ruchu", "Zapisuje spostrzeżenia w pamięci"] },
    { u: "etapy", t: "tf", q: "Według schematu działanie może nastąpić także bez pełnego świadomego rozpoznania.", a: true },

    /* ---------- Bodźce i kierunki ---------- */
    { u: "bodzce", t: "match", s: "K", pairs: [["Bodziec dystalny", "obiekt lub zdarzenie w środowisku"], ["Bodziec proksymalny", "wzorzec energii na receptorach"]] },
    { u: "bodzce", t: "which", set: "bodziec", q: "Litera A na tablicy.", a: 1 },
    { u: "bodzce", t: "which", set: "bodziec", q: "Odwrócony obraz litery A na siatkówce.", a: 2 },
    { u: "bodzce", t: "which", set: "bodziec", s: "D", q: "Fala dźwiękowa, która porusza błoną bębenkową.", a: 2 },
    { u: "bodzce", t: "which", set: "bodziec", s: "D", q: "Dzwon bijący na wieży kościoła.", a: 1 },
    { u: "bodzce", t: "mcq", q: "Co jest procesem odgórnym (top-down)?", a: ["Oczekiwania", "Kolor", "Kształt", "Ruch"] },
    { u: "bodzce", t: "mcq", q: "Co jest procesem oddolnym (bottom-up)?", a: ["Lokalizacja bodźca", "Kultura", "Cele", "Pamięć"] },
    { u: "bodzce", t: "sort", q: "Oddolne czy odgórne?", cats: ["Oddolne", "Odgórne"], items: [
      ["dźwięk", 0], ["kolor", 0], ["kształt", 0], ["wiedza", 1], ["oczekiwania", 1], ["kultura", 1]] },
    { u: "bodzce", t: "cloze", q: "Procesy odgórne i oddolne razem tworzą ___.", a: ["spostrzeżenie", "receptor", "transdukcję", "bodziec"] },

    /* ---------- Zawodność ---------- */
    { u: "zawodna", t: "multi", q: "Które przyczyny zawodności percepcji są na slajdzie?",
      a: ["niejednoznaczność stymulacji", "szum", "ograniczona rozdzielczość", "kontekst", "wcześniejsza wiedza", "cele i uwaga"], o: ["zbyt duża liczba receptorów"] },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "W głośnym pubie słowa kolegi giną w gwarze.", a: 2 },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Z przystanku nie odczytasz numeru autobusu, który jest jeszcze daleko.", a: 3 },
    { u: "zawodna", t: "which", set: "zawod", q: "Ten sam obraz na siatkówce może pochodzić od małego bliskiego albo dużego dalekiego obiektu.", a: 1 },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Szukając kluczy, nie zauważasz, że współlokator przemalował ścianę.", a: 6 },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Znasz piosenkę, więc „słyszysz” słowa, których wokalista wcale wyraźnie nie zaśpiewał.", a: 5 },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Ten sam szary kwadrat wygląda jaśniej na czarnym tle niż na białym.", a: 4 },
    { u: "zawodna", t: "tf", q: "Wpływy, które pomagają percepcji (kontekst, wiedza), mogą też być źródłem jej błędów.", a: true,
      x: "Kontekst i wcześniejsza wiedza są i na liście pomocy w interpretacji, i na liście przyczyn zawodności." },

    /* ---------- Uwaga ---------- */
    { u: "uwaga", t: "mcq", q: "Ile informacji odbiera cały układ nerwowy z otoczenia (w przybliżeniu)?", a: ["Około 10⁹ bitów na sekundę", "Około 10 bitów na sekundę", "Około 1000 bitów na sekundę", "Około 10⁹ bitów na dzień"] },
    { u: "uwaga", t: "mcq", q: "Ile informacji faktycznie przetwarzamy świadomie i wykorzystujemy do działania?", a: ["Około 10 bitów na sekundę", "Około 10⁹ bitów na sekundę", "Około 10 000 bitów na sekundę", "Około 1 bitu na minutę"] },
    { u: "uwaga", t: "mcq", q: "Na badania jakich autorów powołuje się slajd o uwadze?", a: ["Zheng i Meister, 2025", "Neisser, 1967", "Broadbent, 1958", "James, 1890"] },
    { u: "uwaga", t: "mcq", q: "Do czego według slajdu służy uwaga?", a: ["Do redukcji i selekcji informacji istotnych w danym kontekście", "Do zwiększania liczby bodźców", "Do zapamiętywania wszystkiego", "Do zamiany energii na impulsy"] },
    { u: "uwaga", t: "cloze", q: "Mózg filtruje i ___ ogromną ilość informacji przychodzącej zmysłowo.", a: ["redukuje", "powiela", "wzmacnia", "ignoruje całkowicie"] },
    { u: "uwaga", t: "mcq", q: "Ile wykładów kursu dotyczy percepcji, a ile uwagi?", a: ["10 percepcji, 5 uwagi", "5 percepcji, 10 uwagi", "Po 7", "15 percepcji, 0 uwagi"] },
    { u: "uwaga", t: "mcq", q: "Który temat jest ostatnim wykładem z percepcji?", a: ["Złudzenia i błędy percepcji", "Integracja multisensoryczna", "Percepcja słuchowa", "Teorie uwagi"] },

    /* ---------- Rozpoznaj w życiu ---------- */
    { u: "mix", t: "which", set: "kierunek", s: "D", q: "Czekasz na tramwaj „3”, więc z daleka „widzisz” trójkę, choć to ósemka.", a: 2 },
    { u: "mix", t: "which", set: "kierunek", s: "D", q: "Jaskrawoczerwony punkt na szarej ścianie od razu przyciąga wzrok.", a: 1 },
    { u: "mix", t: "which", set: "kierunek", s: "D", q: "Lekarz na zdjęciu RTG widzi złamanie, którego laik nie dostrzega.", a: 2 },
    { u: "mix", t: "which", set: "etap", s: "D", q: "Fotoreceptory w oku zamieniają światło na sygnał elektryczny.", a: 3 },
    { u: "mix", t: "which", set: "etap", s: "D", q: "Z plam kolorów składasz kształt kota leżącego na kanapie.", a: 5 },
    { u: "mix", t: "which", set: "etap", s: "D", q: "Wiesz, że ten kot to Mruczek sąsiadów.", a: 6 },
    { u: "mix", t: "which", set: "problem", s: "D", q: "Na imprezie słyszysz swoje imię przez cały gwar i od razu się odwracasz.", a: 3 },
    { u: "mix", t: "mcq", s: "D", q: "Podchodzisz bliżej do tablicy, żeby odczytać małe litery. Którą pętlę uruchamiasz?",
      a: ["Sensoryczno-ruchową", "Neuronalną", "Hormonalną", "Żadną"] }
  ],

  sortDecks: [
    { id: "kierunek", title: "Oddolne czy odgórne?", sub: "Co buduje spostrzeżenie: dane czy głowa?",
      cats: ["Oddolne (bottom-up)", "Odgórne (top-down)"], items: [
        ["kolor", 0], ["kształt", 0], ["dźwięk", 0], ["lokalizacja", 0], ["ruch", 0], ["jasność plamy", 0],
        ["jaskrawy punkt sam przyciąga wzrok", 0], ["wiedza", 1], ["oczekiwania", 1], ["cele", 1], ["pamięć", 1], ["kultura", 1],
        ["kontekst sytuacji", 1], ["„widzisz” tramwaj, na który czekasz", 1]] },
    { id: "bodziec", title: "Dystalny czy proksymalny?", sub: "Rzecz w świecie czy energia na receptorze?",
      cats: ["Dystalny", "Proksymalny"], items: [
        ["drzewo za oknem", 0], ["obraz drzewa na siatkówce", 1], ["dzwon na wieży", 0], ["fala dźwiękowa na błonie bębenkowej", 1],
        ["jabłko na stole", 0], ["cząsteczki zapachu w nosie", 1], ["litera A na tablicy", 0], ["odwrócone A na siatkówce", 1],
        ["samochód na ulicy", 0], ["wzorzec światła na fotoreceptorach", 1], ["kwiat w ogrodzie", 0], ["nacisk filiżanki na opuszki palców", 1]] },
    { id: "nurt", title: "Behawioryzm czy psychologia poznawcza?", sub: "Do którego nurtu to pasuje?",
      cats: ["Behawioryzm", "Psychologia poznawcza"], items: [
        ["sytuacja → zachowanie", 0], ["liczy się tylko to, co da się zaobserwować", 0], ["zachowanie jako reakcja na sytuację", 0],
        ["„wywalił się” według wykładu", 0], ["sytuacja → procesy poznawcze → zachowanie", 1], ["zmienne latentne", 1],
        ["umysł i mózg (mind and brain)", 1], ["reprezentacje poznawcze", 1], ["analogia z ciemną materią", 1], ["świadomość jako temat badań", 1]] }
  ],

  minimum: [
    ["Czym zajmuje się psychologia poznawcza", "Umysłem, w trzech obszarach: <b>reprezentacje poznawcze</b> (stany umysłu niosące informację), <b>procesy poznawcze</b> (jak informacja jest przetwarzana w czasie), <b>świadomość</b> (kiedy to staje się treścią doświadczenia)."],
    ["Behawioryzm a psychologia poznawcza", "Behawioryzm: <b>sytuacja → zachowanie</b>. Psychologia poznawcza: <b>sytuacja → procesy poznawcze (umysł i mózg) → zachowanie</b>. Bez zmiennych latentnych się nie da."],
    ["Trzy główne problemy", "<b>Stymulacja</b> (co dociera) → <b>percepcja</b> (jak to interpretujemy) → <b>uwaga</b> (co dostaje priorytet)."],
    ["Rodzaje procesów poznawczych", "Percepcja i uwaga (najbardziej podstawowe), uczenie się, pamięć, język, myślenie, podejmowanie decyzji, kontrola poznawcza; obok świadomość. W górę rośnie złożoność i zakres integracji."],
    ["Po co percepcja", "Żeby <b>przeżyć i przekazać geny</b> → trzeba się <b>adaptować</b> → to wymaga <b>interakcji</b> → a ta <b>orientacji</b> i <b>rozpoznawania zagrożeń i możliwości</b>."],
    ["Problem odwrotny", "Mózg nie widzi świata, dostaje <b>impulsy elektryczne</b> i musi <b>wnioskować o ich przyczynach</b>. <b>Różne przyczyny dają ten sam sygnał</b> (duży i daleko = mały i blisko). Pomagają kontekst, wiedza, dodatkowe wskazówki."],
    ["Sześć etapów", "<b>Bodziec fizyczny → receptor → transdukcja (w receptorze) → kodowanie neuronalne → organizacja percepcyjna → rozpoznanie</b>. Wpływy odgórne: kontekst, cele, pamięć, oczekiwania. Pętle: neuronalna i sensoryczno-ruchowa."],
    ["Dystalny i proksymalny", "<b>Dystalny</b>: obiekt lub zdarzenie w środowisku. <b>Proksymalny</b>: wzorzec energii docierający do receptorów."],
    ["Oddolne i odgórne", "<b>Oddolne</b>: dźwięk, kolor, kształt, lokalizacja, ruch. <b>Odgórne</b>: wiedza, oczekiwania, cele, pamięć, kultura. Razem dają spostrzeżenie."],
    ["Zawodność i uwaga", "Percepcja zawodzi przez: niejednoznaczność, szum, ograniczoną rozdzielczość, kontekst, wcześniejszą wiedzę, cele i uwagę. Wchodzi <b>ok. 10⁹ bit/s</b>, świadomie używamy <b>ok. 10 bit/s</b>, więc uwaga <b>selekcjonuje i redukuje</b>."]
  ],

  deep: [
    { q: "Czy widzimy rzeczywistość taką, jaka jest?",
      a: "Zdrowy rozsądek mówi „tak”. Wykład mówi „nie do końca”: zmysły łapią mały wycinek świata, a znaczenie nadajemy automatycznie i często biernie. To, co widzisz, jest interpretacją. ★ Przykład: oko rejestruje światło mniej więcej od 380 do 750 nm, więc podczerwieni i ultrafioletu nie widzimy, choć są wokół nas.",
      link: "To samo mówi problem odwrotny: mózg zgaduje, co jest na zewnątrz." },
    { q: "Ciemna materia psychologii",
      a: "Fizycy zakładają istnienie ciemnej materii, choć nikt jej nie widział, bo bez niej teorie się nie spinają. Wykład przenosi to na psychologię: procesów w umyśle też nie widać (zmienne latentne), ale bez nich nie da się wyjaśnić zachowania. Dlatego behawioryzm, który chciał się obyć bez „środka”, przegrał z psychologią poznawczą.",
      link: "Pytanie kontrolne: jaki schemat ma behawioryzm, a jaki psychologia poznawcza?" },
    { q: "Czym różnisz się od robota?",
      a: "Robot też przyjmuje informacje i reaguje. Ty dodatkowo coś przeżywasz: czerwień jest dla ciebie jakaś, ból boli. Wykład: doświadczeń subiektywnych nikt dobrze nie rozumie, ale to one nas wyróżniają. Pytanie, jak procesom fizycznym w mózgu towarzyszy przeżycie, to problem umysł–ciało. ★ Filozof David Chalmers nazwał je „trudnym problemem świadomości”.",
      link: "★ Połączenie z Antropologią: dychotomia „dualizm – monizm – jedność duszy i ciała”." },
    { q: "Tylko około 4 rzeczy naraz",
      a: "Według wykładu tylko około 4 reprezentacje poznawcze mogą zostać „zraportowane”, bo zmieniają się co chwilę. ★ Zgadza się to z badaniami pojemności pamięci roboczej (Nelson Cowan: około 4 elementy).",
      link: "Zestaw to z 10 bitami na sekundę: świadomy umysł to bardzo wąskie gardło." },
    { q: "Schopenhauer: czy masz wpływ na swoje myśli?",
      a: "Na wykładzie padło odwołanie do Schopenhauera: nie mamy wpływu na to, co myślimy, ani na nasze decyzje, jedynie ich doświadczamy. ★ Jego najsłynniejsze zdanie na ten temat: „Człowiek może robić, co chce, ale nie może chcieć tego, co chce”.",
      link: "★ Połączenie z Antropologią: dychotomia „wolność – konieczność”." },
    { q: "Miliard bitów wchodzi, dziesięć zostaje",
      a: "Układ nerwowy dostaje około 10⁹ bitów na sekundę, a świadomie używamy około 10. To stosunek mniej więcej 100 milionów do jednego. Bez filtra, czyli uwagi, bylibyśmy zalani bodźcami.",
      link: "Do zapamiętania liczby i autorzy: Zheng i Meister, 2025." },
    { q: "Kiedy behawioryzm „się wywalił”?",
      a: "W notatkach zapisano, że psychologia poznawcza wyłoniła się w latach 90. ★ W podręcznikach zwrot poznawczy datuje się na lata 50.–60. XX wieku (np. książka Ulrica Neissera „Cognitive Psychology”, 1967). Lata 90. to „dekada mózgu” i rozkwit neuronauki poznawczej, więc możliwe, że chodziło o połączenie umysłu z mózgiem.",
      link: "Warto dopytać prowadzącego albo sprawdzić w slajdach, jeśli je udostępni." }
  ],

  story: {
    title: "Sześć etapów na jedno zdanie",
    intro: "★ Pomoc pamięciowa spoza wykładu: pierwsze litery etapów to B-R-T-K-O-R.",
    ordered: true,
    items: [
      ["Bodziec fizyczny", "Babcia"], ["Receptor", "Robi"], ["Transdukcja", "Twarożek,"],
      ["Kodowanie neuronalne", "Kot"], ["Organizacja percepcyjna", "Ogląda"], ["Rozpoznanie", "Radośnie."]
    ]
  },

  table: {
    title: "Od bodźca do spostrzeżenia",
    head: ["Etap", "Co się dzieje (slajd)", "Po ludzku"],
    rows: [
      ["1. Bodziec fizyczny", "energia lub zdarzenie dostępne dla zmysłu", "światło, dźwięk, zapach"],
      ["2. Receptor", "wyspecjalizowana komórka lub zakończenie nerwowe", "„łapacz” danej energii"],
      ["3. Transdukcja", "energia fizyczna → sygnał elektrochemiczny; zachodzi w receptorze", "tłumaczenie na język mózgu"],
      ["4. Kodowanie neuronalne", "wzorce aktywności neuronów i populacji", "które neurony i jak mocno strzelają"],
      ["5. Organizacja percepcyjna", "cechy → powierzchnie, obiekty i zdarzenia", "z plam i kresek powstają rzeczy"],
      ["6. Rozpoznanie", "kategoria, obiekt, osoba lub znaczenie", "„to jest kubek”"]
    ]
  },

  notes: [
    { id: "p1", n: 1, title: "Czy widzimy świat takim, jaki jest?", html:
      "<div class='plain'><p>Wydaje się, że patrzymy na świat jak przez szybę. Wykład zaczyna od rozbicia tego złudzenia: widzimy tylko wycinek, a mózg sam dopowiada resztę.</p></div>" +
      "<div class='oral'><p>Zdrowy rozsądek mówi „tak”, ale widzimy zmysłami tylko mały fragment rzeczywistości. Percepcja nie jest tylko ograniczona: znaczenie nadajemy automatycznie, a odbieramy często biernie. <b>Rzeczywistość, którą widzimy, jest interpretacją.</b></p>" +
      "<p><b>Trzy główne problemy:</b> stymulacja → percepcja → uwaga, czyli: co dociera do systemu → jak zostaje zinterpretowane → co uzyskuje priorytet.</p></div>" },
    { id: "p2", n: 2, title: "Od behawioryzmu do psychologii poznawczej", html:
      "<div class='plain'><p>Behawioryści patrzyli tylko na wejście i wyjście. Psychologia poznawcza mówi, że trzeba zajrzeć do środka, nawet jeśli tego środka nie da się bezpośrednio zmierzyć.</p></div>" +
      "<div class='oral'><ul><li><b>Behawioryzm:</b> sytuacja → zachowanie. Nurt ten „się wywalił”.</li>" +
      "<li><b>Zmienne latentne:</b> zmienne, których nie można (bezpośrednio) zmierzyć. Psycholodzy uznali, że bez nich się nie da.</li>" +
      "<li><b>Psychologia poznawcza:</b> sytuacja → procesy poznawcze (umysł i mózg, mind and brain) → zachowanie.</li>" +
      "<li>Analogia: bez założenia, że istnieje ciemna materia, teorie nie miałyby racji bytu.</li></ul></div>" +
      "<aside class='extra'><p>W notatkach zapisano „lata 90.”, ale zwrot poznawczy datuje się na lata 50.–60. XX wieku (Neisser, „Cognitive Psychology”, 1967). Lata 90. to „dekada mózgu”. Szczegóły w sekcji „Do przemyślenia”.</p></aside>" },
    { id: "p3", n: 3, title: "Czym zajmuje się psychologia poznawcza", html:
      "<div class='plain'><p>Umysł ma trzy „warstwy”: to, co w nim jest (reprezentacje), to, co się w nim dzieje (procesy), i to, co z tego przeżywamy (świadomość).</p></div>" +
      "<div class='key'><p><b>Reprezentacje poznawcze:</b> względnie trwałe lub chwilowe stany umysłu, które niosą informację.</p>" +
      "<p><b>Świadomość:</b> kiedy i w jakich warunkach reprezentacje i procesy poznawcze stają się treścią doświadczenia.</p>" +
      "<p><b>Procesy poznawcze:</b> operacje lub zmiany zachodzące w umyśle, czyli jak informacje są przetwarzane w czasie.</p></div>" +
      "<div class='oral'><p>Doświadczeń subiektywnych nikt nie rozumie, ale to one odróżniają nas od przyjmowania informacji jak roboty. Jak to jest, że procesom fizycznym towarzyszy coś, co fizycznego charakteru nie ma, czyli przeżycie? To <b>mind–body problem</b>.</p>" +
      "<p>Tylko około <b>4 reprezentacje</b> poznawcze mogą zostać „zraportowane”, bo zmieniają się co chwilę.</p>" +
      "<p>Odwołanie do Schopenhauera: nie mamy wpływu na to, co myślimy, ani na nasze decyzje, jedynie ich doświadczamy.</p></div>" },
    { id: "p4", n: 4, title: "Rodzaje procesów poznawczych", html:
      "<div class='plain'><p>Na dole schematu są procesy podstawowe, czyli percepcja i uwaga (o nich jest ten kurs). Im wyżej, tym więcej informacji proces łączy. Wszystko jest połączone strzałkami w obie strony.</p></div>" +
      "<p>Od dołu: <b>percepcja</b>, <b>uwaga</b> → <b>uczenie się</b>, <b>pamięć</b> → <b>język</b>, <b>myślenie</b> → <b>podejmowanie decyzji</b>, <b>kontrola poznawcza</b>. Obok: <b>świadomość</b>. Strzałka w górę: rosnąca złożoność i zakres integracji.</p>" +
      "<aside class='extra'><p>Opisy na schemacie były na zdjęciu nieczytelne. Prawdopodobnie położenie pionowe pokazuje orientacyjny zakres integracji, a nie sztywną hierarchię, a strzałki rozróżniają wzajemne wpływy i główny kierunek wpływu.</p></aside>" },
    { id: "p5", n: 5, title: "Po co nam percepcja", html:
      "<div class='plain'><p>Percepcja nie jest po to, żeby świat był ładny. Jest po to, żeby przeżyć: zauważyć drapieżnika, znaleźć wodę, jedzenie i partnera.</p></div>" +
      "<ol><li><b>Cel:</b> przeżyć na tyle długo, by móc przekazać swój materiał genetyczny.</li>" +
      "<li>Aby przeżyć w określonym środowisku, trzeba się do niego efektywnie <b>adaptować</b>.</li>" +
      "<li>Adaptacja wymaga <b>interakcji</b> ze środowiskiem.</li>" +
      "<li>Interakcja oznacza konieczność <b>orientacji</b> w nim i <b>rozpoznania</b> zagrożeń i możliwości.</li></ol>" },
    { id: "p6", n: 6, title: "Problem odwrotny percepcji", html:
      "<div class='plain'><p>Mózg siedzi w zamkniętej czaszce i dostaje tylko impulsy elektryczne. Jak detektyw musi zgadnąć, co je wywołało. A ten sam ślad może zostawić kilku sprawców.</p></div>" +
      "<p>Mózg <b>nie ma bezpośredniego dostępu do świata zewnętrznego</b>, dostaje tylko sygnał w postaci <b>elektrycznych impulsów</b> ze zmysłów, więc <b>musi wnioskować o ich przyczynach</b>.</p>" +
      "<div class='tscroll'><table><tbody><tr><th>Fizyka</th><td>jak przyczyny wytwarzają sygnał? (obiekt + warunki obserwacji → sygnał na siatkówce)</td></tr>" +
      "<tr><th>Percepcja</th><td>jaka przyczyna mogła wytworzyć ten sygnał? (od niepełnego sygnału do prawdopodobnej przyczyny)</td></tr></tbody></table></div>" +
      "<p>Przykład: A (duży, daleko) i B (mały, blisko) przy tym samym kącie widzenia α dają <b>taki sam rozmiar obrazu</b> na siatkówce. Sam sygnał nie rozstrzyga. Pomagają: <b>kontekst, wiedza, dodatkowe wskazówki zmysłowe</b>. <b>Różne przyczyny mogą prowadzić do takiego samego sygnału.</b></p>" +
      "<aside class='extra'><p>To współczesna wersja pomysłu Hermanna von Helmholtza z XIX wieku: percepcja to „nieświadome wnioskowanie”.</p></aside>" },
    { id: "p7", n: 7, title: "Od bodźca do spostrzeżenia", html:
      "<div class='plain'><p>Sześć kroków od światła do „to jest kubek”. Ważne: informacja płynie też wstecz, a twoje ruchy zmieniają to, co dostają zmysły. Pełna tabela jest niżej.</p></div>" +
      "<p><b>Bodziec fizyczny → receptor → transdukcja → kodowanie neuronalne → organizacja percepcyjna → rozpoznanie.</b></p>" +
      "<p><b>Wpływy odgórne</b> na przetwarzanie informacji: kontekst, cele, pamięć, oczekiwania.</p>" +
      "<p><b>Dwie pętle zwrotne:</b> <b>neuronalna</b> (strzałki wstecz, czyli sprzężenia neuronalne) i <b>sensoryczno-ruchowa</b>: działanie, także bez pełnego świadomego rozpoznania, zmienia dostępną stymulację, np. ruch oczu, podejście, dotknięcie przedmiotu.</p>" },
    { id: "p8", n: 8, title: "Dystalne, proksymalne, oddolne, odgórne", html:
      "<div class='plain'><p>Dystalny to rzecz w świecie, proksymalny to to, co ta rzecz robi z twoim receptorem. Oddolnie buduje spostrzeżenie sam bodziec, odgórnie dokłada się twoja głowa.</p></div>" +
      "<div class='key'><p><b>Bodziec dystalny:</b> obiekt lub zdarzenie w środowisku.</p><p><b>Bodziec proksymalny:</b> wzorzec energii docierający do receptorów.</p></div>" +
      "<p>Przykład ze slajdu: litera A na tablicy (dystalny) i jej odwrócony obraz na siatkówce (proksymalny).</p>" +
      "<p><b>Procesy odgórne (top-down):</b> wiedza, oczekiwania, cele, pamięć, kultura i inne. <b>Procesy oddolne (bottom-up):</b> dźwięk, kolor, kształt, lokalizacja, ruch i inne. Razem dają <b>spostrzeżenie</b>.</p>" },
    { id: "p9", n: 9, title: "Dlaczego percepcja bywa zawodna", html:
      "<div class='plain'><p>Sygnał bywa dwuznaczny, zaszumiony i mało szczegółowy. A to, co zwykle pomaga (kontekst, wiedza, cele), czasem prowadzi na manowce.</p></div>" +
      "<ul><li>niejednoznaczność stymulacji</li><li>szum</li><li>ograniczona rozdzielczość</li><li>kontekst</li><li>wcześniejsza wiedza</li><li>cele i uwaga</li></ul>" +
      "<p>Złudzenia i błędy percepcji będą osobnym wykładem (nr 10).</p>" },
    { id: "p10", n: 10, title: "Dlaczego organizm potrzebuje uwagi", html:
      "<div class='plain'><p>Do głowy wpada lawina informacji, a świadomie mieścimy kroplę. Uwaga decyduje, która kropla przejdzie.</p></div>" +
      "<ul><li>Cały układ nerwowy odbiera w przybliżeniu <b>ok. 10⁹ bitów/s</b> informacji z otoczenia.</li>" +
      "<li>Informacje, które faktycznie przetwarzamy i świadomie wykorzystujemy do działania, to tylko <b>ok. 10 bitów/s</b>.</li>" +
      "<li>Mózg <b>filtruje i redukuje</b> informację zmysłową, zostawiając do świadomości i działania ułamek.</li>" +
      "<li>Uwaga pomaga w <b>redukcji i selekcji</b> informacji istotnych w danym kontekście.</li></ul><p>(Zheng i Meister, 2025)</p>" +
      "<p><b>Plan kursu.</b> Percepcja: 1 wprowadzenie; 2 jak bada się percepcję i uwagę; 3 percepcja wzrokowa I (od światła do wczesnego widzenia); 4 percepcja wzrokowa II (przestrzeń, ruch, obiekty); 5 percepcja słuchowa; 6 smak, węch, dotyk, równowaga i ból; 7 integracja multisensoryczna; 8 teorie percepcji I (klasyczne); 9 teorie percepcji II (współczesne i obliczeniowe); 10 złudzenia i błędy percepcji. Uwaga: 11 funkcje i mechanizmy; 12 teorie uwagi i kontrola wykonawcza; 13 neurobiologia uwagi i kontroli wykonawczej; 14 uwaga, świadomość i ograniczenia przetwarzania; 15 różnice indywidualne.</p>" }
  ]
});
