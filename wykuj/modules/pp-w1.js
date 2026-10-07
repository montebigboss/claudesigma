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
 * Każde ćwiczenie ma x: dlaczego poprawna odpowiedź jest poprawna.
 * w: dlaczego nie pasują błędne opcje (po kolei za poprawną; w multi za o[]).
 * sets[].why: czym jest każda pozycja zestawu (pytania „który to…”).
 * Typ "order": ułóż w kolejności; a[] w poprawnej kolejności.
 * Jednostka z seq: true podaje pytania w kolejności z pliku (od prostych do trudnych).
 * Pole teach jednostki: krótkie wprowadzenie przed pierwszymi ćwiczeniami.
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
    umysl: { label: "Co to jest?", items: ["Reprezentacje poznawcze", "Procesy poznawcze", "Świadomość"],
      why: ["to, co jest w umyśle i niesie informację: obraz, pojęcie, wspomnienie",
        "to, co umysł robi z informacją w czasie: przetwarza, porównuje, zmienia",
        "moment, w którym reprezentacje i procesy stają się przeżyciem"] },
    problem: { label: "Który z trzech problemów?", items: ["Stymulacja", "Percepcja", "Uwaga"],
      why: ["pytanie, co w ogóle dociera do systemu", "pytanie, jak to, co dotarło, zostaje zinterpretowane", "pytanie, co z tego dostaje priorytet"] },
    etap: { label: "Który to etap?", items: ["Bodziec fizyczny", "Receptor", "Transdukcja", "Kodowanie neuronalne", "Organizacja percepcyjna", "Rozpoznanie"],
      why: ["etap 1, czyli energia lub zdarzenie dostępne dla zmysłu, jeszcze na zewnątrz (światło, dźwięk, zapach)",
        "etap 2, czyli wyspecjalizowana komórka lub zakończenie nerwowe, które łapie swój rodzaj energii",
        "etap 3, czyli zamiana energii fizycznej na sygnał elektrochemiczny, która zachodzi w receptorze",
        "etap 4, czyli zapis informacji we wzorcach aktywności neuronów i ich populacji",
        "etap 5, czyli składanie cech w powierzchnie, obiekty i zdarzenia (wiesz, że coś jest, ale jeszcze nie co)",
        "etap 6, czyli kategoria, obiekt, osoba lub znaczenie: „to jest kubek”"] },
    schemat: { label: "Który element schematu?", items: ["Wpływy odgórne", "Pętla neuronalna", "Pętla sensoryczno-ruchowa"],
      why: ["kontekst, cele, pamięć i oczekiwania, które z góry wpływają na etapy 4–6",
        "strzałki wstecz między etapami 4, 5 i 6: wyższe etapy odsyłają informację niższym",
        "działanie (ruch oczu, podejście, dotyk), które zmienia dostępną stymulację, więc proces rusza od etapu 1"] },
    zawod: { label: "Dlaczego percepcja zawiodła?", items: ["Niejednoznaczność stymulacji", "Szum", "Ograniczona rozdzielczość", "Kontekst", "Wcześniejsza wiedza", "Cele i uwaga"],
      why: ["sytuacja, w której ten sam sygnał może mieć różne przyczyny (problem odwrotny)",
        "przypadkowe zakłócenia, które zagłuszają właściwy sygnał",
        "granica dokładności zmysłu: drobnych szczegółów nie widać, np. z daleka",
        "otoczenie bodźca, które zmienia to, jak go odbieramy",
        "to, co już znamy i co podpowiada (czasem błędnie), co widzimy lub słyszymy",
        "skupienie na tym, czego szukamy, przez które przeoczamy resztę"] },
    bodziec: { label: "Jaki to bodziec?", items: ["Dystalny", "Proksymalny"],
      why: ["obiekt lub zdarzenie w środowisku, czyli rzecz „tam”, w świecie",
        "wzorzec energii docierający do receptorów, czyli to, co faktycznie dotyka zmysłu"] },
    kierunek: { label: "Oddolnie czy odgórnie?", items: ["Proces oddolny (bottom-up)", "Proces odgórny (top-down)"],
      why: ["przetwarzanie napędzane cechami bodźca: kolor, kształt, dźwięk, lokalizacja, ruch",
        "przetwarzanie napędzane tym, co już masz w głowie: wiedza, oczekiwania, cele, pamięć, kultura"] }
  },

  units: [
    { id: "realnosc", title: "Czy widzimy świat takim, jaki jest?", sub: "Interpretacja i trzy główne problemy", icon: "eye" },
    { id: "historia", title: "Od behawioryzmu do poznawczej", sub: "Zmienne latentne i „ciemna materia” psychologii", icon: "split" },
    { id: "umysl", title: "Reprezentacje, procesy, świadomość", sub: "Czym zajmuje się psychologia poznawcza", icon: "spark" },
    { id: "rodzaje", title: "Rodzaje procesów poznawczych", sub: "Od percepcji do kontroli poznawczej", icon: "pairs" },
    { id: "ewolucja", title: "Po co nam percepcja?", sub: "Znaczenie ewolucyjne", icon: "flame" },
    { id: "odwrotny", title: "Problem odwrotny percepcji", sub: "Mózg zgaduje przyczynę sygnału", icon: "target" },
    { id: "etapy", title: "Etapy 1–3: od świata do sygnału", sub: "Bodziec, receptor, transdukcja", icon: "sun", seq: true,
      teach: "<p><b>Cały proces w jednym zdaniu:</b> energia ze świata trafia do komórki zmysłowej, ta tłumaczy ją na sygnał, mózg zapisuje go jako wzór aktywności neuronów, składa z niego przedmioty i rozpoznaje, co to jest.</p>" +
        "<p>Ta lekcja to pierwsza połowa: <b>od świata do sygnału</b>. Para, którą wszyscy mylą: <b>receptor</b> to komórka (KTO odbiera), a <b>transdukcja</b> to tłumaczenie energii na sygnał (CO ta komórka robi). Transdukcja dzieje się właśnie w receptorze.</p>" },
    { id: "etapy2", title: "Etapy 4–6: od sygnału do znaczenia", sub: "Kodowanie, organizacja, rozpoznanie", icon: "bulb", seq: true,
      teach: "<p>Sygnał jest już elektrochemiczny. Teraz układ nerwowy robi z niego coś sensownego, w trzech krokach:</p>" +
        "<ol><li><b>Kodowanie neuronalne</b>: zapis we wzorach aktywności neuronów. To jeszcze kod, nie „rzecz”.</li>" +
        "<li><b>Organizacja percepcyjna</b>: z cech (krawędzie, kolory) powstaje przedmiot oddzielony od tła. Wiesz, że coś jest.</li>" +
        "<li><b>Rozpoznanie</b>: wiesz, CO to jest. „To mój kubek”.</li></ol>" },
    { id: "petle", title: "Cały schemat: pętle i wpływy odgórne", sub: "Strzałki wstecz, działanie, kontekst", icon: "redo", seq: true,
      teach: "<p>Schemat to nie taśmociąg w jedną stronę. Są na nim trzy rzeczy „z boku”:</p>" +
        "<ul><li><b>Wpływy odgórne</b> (kontekst, cele, pamięć, oczekiwania) wchodzą od góry w etapy 4, 5 i 6.</li>" +
        "<li><b>Pętla neuronalna</b>: strzałki wstecz między etapami 4, 5 i 6.</li>" +
        "<li><b>Pętla sensoryczno-ruchowa</b>: z organizacji i z rozpoznania idzie strzałka do <b>działania</b> (także bez pełnego świadomego rozpoznania). Działanie zmienia dostępną stymulację, więc wszystko startuje od etapu 1.</li></ul>" },
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
      plain: "To, co w ogóle może trafić do zmysłu: światło odbite od kubka, fala dźwięku, cząsteczki zapachu. To jest jeszcze na zewnątrz, w tobie nic się nie dzieje.",
      def: "Etap 1: energia lub zdarzenie dostępne dla zmysłu.", sh: "energia dostępna dla zmysłu" },
    { id: "receptor", u: "etapy", term: "Receptor",
      plain: "Komórka-specjalista, która reaguje tylko na swój rodzaj energii: czopki i pręciki w oku na światło, komórki rzęsate w uchu na drgania. To KTO odbiera.",
      def: "Etap 2: wyspecjalizowana komórka lub zakończenie nerwowe.", sh: "wyspecjalizowana komórka lub zakończenie nerwowe" },
    { id: "transdukcja", u: "etapy", term: "Transdukcja",
      plain: "Tłumaczenie na język mózgu: światło czy drgania zamieniają się w sygnał elektrochemiczny. To CO robi receptor, więc dzieje się w receptorze.",
      def: "Etap 3: zamiana energii fizycznej na sygnał elektrochemiczny; zachodzi w receptorze.", sh: "energia → sygnał elektrochemiczny" },
    { id: "kodowanie", u: "etapy2", term: "Kodowanie neuronalne",
      plain: "Informacja zapisana w tym, które neurony „strzelają”, jak często i w jakim układzie. To jeszcze nie jest „rzecz”, tylko wzór aktywności, trochę jak kod kreskowy.",
      def: "Etap 4: wzorce aktywności neuronów i populacji neuronów.", sh: "wzorce aktywności neuronów" },
    { id: "organizacja", u: "etapy2", term: "Organizacja percepcyjna",
      plain: "Z cech (krawędzie, kolory, ruch) mózg składa całości: oddziela przedmiot od tła, widzi powierzchnie, obiekty i zdarzenia. Wiesz, że coś tam jest, ale jeszcze nie wiesz co.",
      def: "Etap 5: cechy → powierzchnie, obiekty i zdarzenia.", sh: "cechy składane w obiekty i zdarzenia" },
    { id: "rozpoznanie", u: "etapy2", term: "Rozpoznanie",
      plain: "Wiesz, CO to jest: „to kubek”, „to mama”, „to niebezpieczne”. Tu mocno pomaga pamięć, bo porównujesz z tym, co już znasz.",
      def: "Etap 6: kategoria, obiekt, osoba lub znaczenie.", sh: "kategoria, obiekt, osoba, znaczenie" },
    { id: "odgorne-wplywy", u: "petle", term: "Wpływy odgórne (na schemacie)",
      plain: "To, gdzie jesteś (kontekst), czego chcesz (cele), co już wiesz (pamięć) i czego się spodziewasz (oczekiwania), zmienia to, jak mózg przetwarza sygnał. Na schemacie wchodzą od góry w etapy 4, 5 i 6.",
      def: "Kontekst, cele, pamięć, oczekiwania: wpływy odgórne na przetwarzanie informacji. Na schemacie trafiają w kodowanie neuronalne, organizację percepcyjną i rozpoznanie.",
      sh: "kontekst, cele, pamięć, oczekiwania" },
    { id: "petla-neuro", u: "petle", term: "Pętla neuronalna",
      plain: "Informacja płynie też wstecz: wyższe etapy „odpisują” niższym. Na schemacie to strzałki wstecz między kodowaniem, organizacją i rozpoznaniem.",
      def: "Strzałki wstecz na schemacie, czyli sprzężenia neuronalne między etapami: kodowanie ⇄ organizacja ⇄ rozpoznanie.",
      sh: "strzałki wstecz między etapami 4–6" },
    { id: "petla-sr", u: "petle", term: "Pętla sensoryczno-ruchowa",
      plain: "Robisz coś (ruszasz oczami, podchodzisz, dotykasz), a to zmienia, co trafia do zmysłów. Spostrzeganie to nie tylko odbiór, ale też aktywne szukanie informacji.",
      def: "Działanie zmienia dostępną stymulację, np. ruch oczu, podejście, dotknięcie przedmiotu. Na schemacie strzałka wraca od działania do bodźca fizycznego.",
      sh: "działanie zmienia dostępną stymulację" },
    { id: "dzialanie", u: "petle", term: "Działanie (na schemacie)",
      plain: "Reagujesz czasem, zanim w pełni wiesz, na co: odskakujesz przed czymś, co leci, choć jeszcze nie wiesz, że to piłka. Dlatego strzałka do działania wychodzi już z etapu 5.",
      def: "Działanie wychodzi z organizacji percepcyjnej i z rozpoznania; może nastąpić także bez pełnego świadomego rozpoznania.",
      sh: "reakcja także bez pełnego rozpoznania" },
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
      a: ["Interpretacją, którą tworzą nasze zmysły i mózg", "Wiernym, kompletnym zapisem tego, co jest w świecie", "Przypadkowym szumem, z którego nic nie wynika", "Wyłącznie wspomnieniem tego, co już widzieliśmy"],
      x: "Zmysły łapią tylko wycinek świata, a mózg automatycznie nadaje mu znaczenie. Dlatego to, co widzimy, jest interpretacją, a nie kopią świata.",
      w: ["Gdyby tak było, widzielibyśmy wszystko, a widzimy tylko mały fragment rzeczywistości.",
        "Percepcja nie jest przypadkowa: mózg porządkuje sygnał i nadaje mu znaczenie.",
        "Pamięć pomaga w interpretacji, ale widzimy też to, co dzieje się teraz."] },
    { u: "realnosc", t: "order", s: "U", q: "Ułóż trzy główne problemy w kolejności przetwarzania.", a: ["Stymulacja", "Percepcja", "Uwaga"],
      x: "Najpierw coś musi dotrzeć (stymulacja), potem zostaje zinterpretowane (percepcja), a na końcu wybieramy, co ważne (uwaga)." },
    { u: "realnosc", t: "which", set: "problem", s: "U", q: "Co w ogóle dociera do systemu?", a: 1,
      x: "Stymulacja to pierwszy problem: co w ogóle trafia do zmysłów, zanim cokolwiek zinterpretujemy." },
    { u: "realnosc", t: "which", set: "problem", s: "U", q: "Jak to, co dotarło, zostaje zinterpretowane?", a: 2,
      x: "Percepcja to interpretacja: nadanie sensu temu, co dotarło do zmysłów." },
    { u: "realnosc", t: "which", set: "problem", s: "U", q: "Co uzyskuje priorytet?", a: 3,
      x: "Uwaga decyduje, co z tego, co dotarło i zostało zinterpretowane, dostaje pierwszeństwo." },
    { u: "realnosc", t: "multi", s: "U", q: "Co według notatek z wykładu ogranicza i kształtuje naszą percepcję?",
      a: ["widzimy zmysłami tylko mały fragment rzeczywistości", "nadajemy znaczenie automatycznie", "często odbieramy biernie"],
      o: ["zawsze świadomie analizujemy każdy bodziec", "widzimy wszystko, co istnieje"],
      x: "Z wykładu: widzimy tylko mały fragment rzeczywistości, znaczenie nadajemy automatycznie i często odbieramy biernie.",
      w: ["Odwrotnie: znaczenie nadajemy automatycznie i często biernie, bez świadomej analizy.", "Widzimy tylko mały wycinek rzeczywistości."] },
    { u: "realnosc", t: "mcq", s: "D", q: "Który przykład pokazuje, że zmysły łapią tylko wycinek rzeczywistości?",
      a: ["Nie widzimy podczerwieni i nie słyszymy ultradźwięków", "Niektóre kolory lubimy bardziej niż pozostałe", "Zdarza się nam pomylić imiona znajomych", "Część ludzi musi nosić okulary do czytania"],
      x: "Podczerwień i ultradźwięki istnieją, ale nasze zmysły ich nie rejestrują. To dowód, że odbieramy tylko wycinek świata.",
      w: ["To kwestia gustu, a nie tego, co zmysły w ogóle mogą zarejestrować.", "To błąd pamięci, a nie granica zmysłów.",
        "Okulary poprawiają wadę wzroku. Nie pokazują, że nawet zdrowe zmysły łapią tylko wycinek świata."] },

    /* ---------- Historia ---------- */
    { u: "historia", t: "mcq", s: "U", q: "Jaki schemat opisuje behawioryzm?", a: ["Sytuacja → zachowanie", "Sytuacja → procesy poznawcze → zachowanie", "Zachowanie → sytuacja", "Mózg → świadomość → mózg"],
      x: "Behawioryzm patrzy tylko na to, co widać: sytuację i zachowanie. Środek, czyli umysł, pomija.",
      w: ["To schemat psychologii poznawczej, która dodała „środek”.", "Kierunek jest odwrotny: w behawioryzmie sytuacja wywołuje zachowanie.",
        "Takiego schematu nie było na wykładzie, a behawioryzm w ogóle nie zajmował się świadomością."] },
    { u: "historia", t: "mcq", s: "U", q: "Jaki schemat opisuje psychologia poznawcza?",
      a: ["Sytuacja → procesy poznawcze (umysł i mózg) → zachowanie", "Sytuacja → zachowanie, bez żadnych procesów pośrodku", "Bodziec → nagroda → wzmocnienie zachowania w przyszłości", "Zachowanie → procesy poznawcze (umysł) → sytuacja"],
      x: "Psychologia poznawcza wstawia między sytuację a zachowanie „środek”: procesy poznawcze, czyli umysł i mózg (mind and brain).",
      w: ["To behawioryzm, który pomija umysł.", "To język warunkowania z behawioryzmu, a nie schemat ze slajdu.", "Kolejność jest odwrócona: zaczynamy od sytuacji, kończymy na zachowaniu."] },
    { u: "historia", t: "mcq", s: "U", q: "Czym są zmienne latentne?",
      a: ["Zmiennymi, których nie da się bezpośrednio zmierzyć", "Zmiennymi, które łatwo zmierzyć zwykłą linijką", "Błędami, które pojawiają się podczas pomiaru", "Zmiennymi, którymi zajmował się tylko behawioryzm"],
      x: "Latentny znaczy ukryty. To np. myśli czy pamięć: nie widać ich wprost, ale bez nich nie da się wyjaśnić zachowania.",
      w: ["Odwrotnie: chodzi o to, czego nie da się zmierzyć bezpośrednio.", "Błąd pomiaru to coś innego. Zmienne latentne istnieją, tylko są ukryte.",
        "Behawioryzm właśnie odrzucał zmienne latentne i dlatego „się wywalił”."] },
    { u: "historia", t: "mcq", s: "U", q: "Dlaczego według wykładu behawioryzm „się wywalił”?",
      a: ["Bez zmiennych latentnych nie dało się wyjaśnić zachowania", "Bo w ogóle nie mierzył i nie opisywał zachowania", "Bo zajmował się wyłącznie świadomością człowieka", "Bo nie przeprowadzał żadnych eksperymentów"],
      x: "Behawioryzm chciał wyjaśniać zachowanie bez zaglądania do umysłu. Okazało się, że bez zmiennych latentnych (procesów w umyśle) się nie da.",
      w: ["Mierzenie zachowania to właśnie to, na czym behawioryzm się skupiał.", "Behawioryzm pomijał świadomość, a nie się nią zajmował.",
        "Behawioryzm był bardzo eksperymentalny. Problemem było pominięcie umysłu."] },
    { u: "historia", t: "mcq", s: "U", q: "Do czego wykładowca porównał zakładanie procesów poznawczych, których nie widać?",
      a: ["Do ciemnej materii w fizyce", "Do czarnej dziury", "Do wirusa komputerowego", "Do placebo"],
      x: "Ciemnej materii nie widać, ale bez jej założenia teorie się nie spinają. Tak samo z umysłem.",
      w: ["Na wykładzie padła ciemna materia: coś, czego nie widać, a co trzeba założyć, żeby teoria się spinała."] },
    { u: "historia", t: "cloze", s: "U", q: "Psychologia poznawcza: sytuacja → procesy poznawcze (umysł i ___) → zachowanie.", a: ["mózg", "dusza", "nagroda", "kara"],
      x: "Na slajdzie: umysł i mózg, po angielsku mind and brain.",
      w: ["„Dusza” to język filozofii (np. antropologii), a nie schematu psychologii poznawczej.", "Nagroda to pojęcie z behawioryzmu.", "Kara to pojęcie z behawioryzmu."] },
    { u: "historia", t: "mcq", s: "D", q: "Kiedy według podręczników nastąpiła „rewolucja poznawcza” w psychologii?",
      a: ["Na przełomie lat 50. i 60. XX wieku", "Na przełomie lat 80. i 90. XX wieku", "W drugiej połowie XIX wieku, za Wundta", "Dopiero w XXI wieku, po 2010 roku"],
      x: "W notatkach z wykładu zapisano „lata 90.”. Klasycznie zwrot poznawczy datuje się na lata 50.–60. (np. „Cognitive Psychology” Neissera, 1967). Lata 90. to „dekada mózgu” i rozkwit neuronauki poznawczej. Sprawdź, co dokładnie padło na wykładzie.",
      w: ["Lata 90. to „dekada mózgu”, czyli rozkwit neuronauki poznawczej, a nie początek zwrotu poznawczego.",
        "W XIX wieku psychologia dopiero powstawała jako nauka (laboratorium Wundta, 1879).", "Po 2010 roku psychologia poznawcza była już od dawna główną szkołą."] },
    { u: "historia", t: "type", s: "U", q: "Zmienne, których nie można bezpośrednio zmierzyć, to zmienne…", a: ["latentne"],
      x: "Latentne, czyli ukryte. Bez nich, jak pokazała psychologia poznawcza, nie da się wyjaśnić zachowania." },

    /* ---------- Umysł ---------- */
    { u: "umysl", t: "match", s: "K", pairs: [
      ["Reprezentacje poznawcze", "stany umysłu niosące informację"], ["Procesy poznawcze", "przetwarzanie informacji w czasie"],
      ["Świadomość", "kiedy to staje się doświadczeniem"]],
      x: "Reprezentacje to treść (co jest w umyśle), procesy to operacje w czasie (co umysł robi), świadomość to moment, w którym to staje się przeżyciem." },
    { u: "umysl", t: "which", set: "umysl", s: "K", q: "Względnie trwałe lub chwilowe stany umysłu, które niosą informację.", a: 1,
      x: "Słowa-klucze: „stany” i „niosą informację”. To treść umysłu, czyli reprezentacje poznawcze." },
    { u: "umysl", t: "which", set: "umysl", s: "K", q: "Operacje lub zmiany zachodzące w umyśle: jak informacje są przetwarzane w czasie.", a: 2,
      x: "Słowa-klucze: „operacje” i „w czasie”. To procesy poznawcze, czyli to, co umysł robi z informacją." },
    { u: "umysl", t: "which", set: "umysl", s: "K", q: "Kiedy i w jakich warunkach reprezentacje i procesy poznawcze stają się treścią doświadczenia.", a: 3,
      x: "Słowa-klucze: „stają się treścią doświadczenia”. To świadomość." },
    { u: "umysl", t: "which", set: "umysl", s: "D", q: "Obraz twarzy przyjaciela, który masz w pamięci.", a: 1,
      x: "To stan umysłu, który niesie informację (jak wygląda twarz), czyli reprezentacja poznawcza." },
    { u: "umysl", t: "which", set: "umysl", s: "D", q: "Porównywanie dwóch ofert i wybieranie tańszej.", a: 2,
      x: "To operacja na informacji, która trwa w czasie, czyli proces poznawczy." },
    { u: "umysl", t: "mcq", s: "K", q: "Na jakie trzy obszary dzieli się umysł na slajdzie „Czym zajmuje się psychologia poznawcza?”",
      a: ["Reprezentacje poznawcze, świadomość, procesy poznawcze", "Percepcja, uwaga, pamięć robocza i myślenie", "Id, ego i superego, czyli struktura osobowości", "Myślenie, uczucia i wola, czyli władze duszy"],
      x: "Slajd „Czym zajmuje się psychologia poznawcza?”: umysł, a w nim reprezentacje poznawcze, świadomość i procesy poznawcze.",
      w: ["To przykłady procesów poznawczych, a nie trzy obszary umysłu.", "To Freud i psychoanaliza, nie psychologia poznawcza.", "To stary filozoficzny podział, a nie slajd z wykładu."] },
    { u: "umysl", t: "mcq", s: "U", q: "Na czym polega problem umysł–ciało (mind–body problem)?",
      a: ["Jak to jest, że procesom fizycznym w mózgu towarzyszy przeżycie", "Jak ćwiczenia fizyczne wpływają na nasz nastrój i samopoczucie", "W jaki sposób mózg steruje ruchami mięśni całego ciała", "Dlaczego ciało męczy się szybciej, gdy jesteśmy zestresowani"],
      x: "Problem umysł–ciało pyta, jak z czegoś fizycznego (neurony, impulsy) bierze się coś niefizycznego: przeżycie, np. to, jak „czuje się” czerwień.",
      w: ["To pytanie o wpływ ciała na nastrój, a nie o to, skąd w ogóle bierze się przeżycie.", "Sterowanie mięśniami da się opisać czysto fizycznie, bez zagadki przeżycia.",
        "To pytanie z fizjologii, a nie o relację umysłu i ciała."] },
    { u: "umysl", t: "tf", s: "U", q: "Według wykładu to subiektywne doświadczenie odróżnia nas od przyjmowania informacji tak jak roboty.", a: true,
      x: "Robot też przyjmuje informacje, ale nic nie przeżywa. Według wykładu to subiektywne doświadczenie nas wyróżnia." },
    { u: "umysl", t: "mcq", s: "U", q: "Ile reprezentacji poznawczych według wykładu może zostać naraz „zraportowanych”?",
      a: ["Około 4", "Około 40", "Około 400", "Nieograniczenie wiele"],
      x: "Około czterech. To bardzo mało, dlatego świadomy umysł jest wąskim gardłem.",
      w: ["Dziesięć razy za dużo. Według wykładu to około 4.", "Sto razy za dużo. Według wykładu to około 4.", "Gdyby tak było, nie potrzebowalibyśmy uwagi, która wybiera informacje."] },
    { u: "umysl", t: "mcq", s: "U", q: "Dlaczego tylko kilka reprezentacji da się zraportować?",
      a: ["Bo zmieniają się co chwilę", "Bo zawsze są nieświadome", "Bo mózg w ogóle ich nie przechowuje", "Bo nie mają żadnej treści"],
      x: "Według wykładu reprezentacje zmieniają się co chwilę, więc zanim zdążysz je opisać, są już inne. Zostaje około 4.",
      w: ["Gdyby były zawsze nieświadome, nie dałoby się zraportować żadnej.", "Mózg je przechowuje, np. w pamięci. Problemem jest tempo zmian.", "Reprezentacje z definicji niosą informację, czyli mają treść."] },

    /* ---------- Rodzaje procesów ---------- */
    { u: "rodzaje", t: "multi", q: "Które z tych procesów są na slajdzie „Rodzaje procesów poznawczych”?",
      a: ["percepcja", "uwaga", "pamięć", "uczenie się", "język", "myślenie", "podejmowanie decyzji", "kontrola poznawcza"],
      o: ["trawienie", "odruch kolanowy"],
      x: "Na slajdzie: percepcja, uwaga, uczenie się, pamięć, język, myślenie, podejmowanie decyzji i kontrola poznawcza, a obok świadomość.",
      w: ["Trawienie to proces fizjologiczny, a nie poznawczy: nie przetwarza informacji.", "Odruch kolanowy to automatyczna reakcja rdzenia kręgowego, bez przetwarzania informacji w umyśle."] },
    { u: "rodzaje", t: "mcq", q: "Które procesy są na schemacie najniżej, jako najbardziej podstawowe?",
      a: ["Percepcja i uwaga", "Myślenie i język", "Podejmowanie decyzji i kontrola poznawcza", "Pamięć i uczenie się"],
      x: "Percepcja i uwaga są na dole: od nich wszystko się zaczyna i o nich jest cały ten kurs.",
      w: ["Myślenie i język są wyżej, bo łączą więcej informacji.", "To szczyt schematu, czyli procesy najbardziej złożone.", "Pamięć i uczenie się są w środku schematu."] },
    { u: "rodzaje", t: "mcq", q: "Które procesy są na schemacie najwyżej?",
      a: ["Decyzje i kontrola poznawcza", "Percepcja i uwaga selektywna", "Uczenie się i pamięć robocza", "Język i percepcja wzrokowa"],
      x: "Na górze są podejmowanie decyzji i kontrola poznawcza, bo łączą najwięcej informacji z innych procesów.",
      w: ["To dół schematu, procesy najbardziej podstawowe.", "Uczenie się i pamięć są w środku schematu.", "Percepcja jest na samym dole, więc ta para nie może być na górze."] },
    { u: "rodzaje", t: "mcq", q: "Co oznacza strzałka w górę na schemacie procesów poznawczych?",
      a: ["Rosnącą złożoność i zakres integracji", "Upływ czasu od bodźca do reakcji", "Kolejne etapy rozwoju dziecka", "Rosnącą liczbę zaangażowanych neuronów"],
      x: "Im wyżej proces, tym bardziej złożony i tym więcej informacji łączy (integruje).",
      w: ["Schemat nie jest osią czasu. Pokazuje złożoność.", "Schemat nie opisuje rozwoju dziecka.", "Na slajdzie nie ma mowy o liczbie neuronów, tylko o złożoności i integracji."] },
    { u: "rodzaje", t: "tf", q: "Procesy poznawcze na schemacie działają osobno i nie wpływają na siebie.", a: false,
      x: "Schemat pokazuje strzałki wzajemnych wpływów, np. percepcja ↔ uwaga, uczenie się ↔ pamięć." },
    { u: "rodzaje", t: "mcq", q: "Który element stoi na schemacie z boku, ponad procesami, przy kontroli poznawczej?",
      a: ["Świadomość", "Percepcja", "Mózg", "Zachowanie"],
      x: "Świadomość nie jest jednym ze szczebli, tylko stoi obok, bo dotyczy tego, kiedy procesy stają się przeżyciem.",
      w: ["Percepcja jest na samym dole schematu.", "Mózg nie jest osobnym elementem tego schematu.", "Zachowanie było na schematach behawioryzmu i psychologii poznawczej, a nie tutaj."] },
    { u: "rodzaje", t: "order", q: "Ułóż od najbardziej podstawowego do najbardziej złożonego (jak na schemacie).", a: ["Percepcja", "Pamięć", "Myślenie", "Kontrola poznawcza"],
      x: "Od dołu: percepcja (i uwaga), potem uczenie się i pamięć, potem język i myślenie, na górze decyzje i kontrola poznawcza." },

    /* ---------- Ewolucja ---------- */
    { u: "ewolucja", t: "mcq", q: "Jaki jest ewolucyjny cel, któremu służy percepcja?",
      a: ["Przeżyć na tyle długo, by przekazać swój materiał genetyczny", "Odczuwać jak najwięcej przyjemności z kontaktu ze światem", "Tworzyć sztukę i podziwiać piękno otoczenia", "Gromadzić jak najwięcej wspomnień na całe życie"],
      x: "Slajd: percepcja służy przetrwaniu na tyle długo, by przekazać geny. Reszta łańcucha (adaptacja, interakcja, orientacja) z tego wynika.",
      w: ["Przyjemność bywa skutkiem ubocznym, ale nie jest celem ewolucyjnym ze slajdu.", "Sztuka to późny wytwór kultury, a percepcja istniała miliony lat wcześniej.",
        "Wspomnienia to zadanie pamięci. Celem ewolucyjnym jest przeżycie."] },
    { u: "ewolucja", t: "order", q: "Ułóż łańcuch rozumowania ze slajdu „Percepcja. Znaczenie ewolucyjne”.",
      a: ["Przeżyć i przekazać geny", "Adaptować się do środowiska", "Wchodzić w interakcję ze środowiskiem", "Orientować się i rozpoznawać zagrożenia i możliwości"],
      x: "Każdy krok wynika z poprzedniego: żeby przeżyć, trzeba się adaptować; adaptacja wymaga interakcji; interakcja wymaga orientacji i rozpoznawania zagrożeń i możliwości." },
    { u: "ewolucja", t: "cloze", q: "Aby przeżyć w określonym środowisku, trzeba się do niego efektywnie ___.", a: ["adaptować", "przyzwyczaić", "przeprowadzić", "zamknąć"],
      x: "Slajd: przeżycie w określonym środowisku wymaga efektywnej adaptacji.",
      w: ["Przyzwyczajenie jest bierne, a slajd mówi o aktywnym dopasowaniu, czyli adaptacji."] },
    { u: "ewolucja", t: "cloze", q: "Adaptacja wymaga ___ ze środowiskiem.", a: ["interakcji", "rywalizacji", "ucieczki", "zgody"],
      x: "Żeby się dopasować, trzeba ze środowiskiem działać, czyli wchodzić w interakcję.",
      w: ["Rywalizacja to tylko jeden rodzaj kontaktu. Slajd mówi szerzej o interakcji.", "Ucieczka bywa reakcją na zagrożenie, ale adaptacja wymaga kontaktu ze środowiskiem."] },
    { u: "ewolucja", t: "multi", q: "Co według slajdu oznacza interakcja ze środowiskiem?", a: ["orientację w nim", "rozpoznanie zagrożeń", "rozpoznanie możliwości"], o: ["ucieczkę od niego", "ignorowanie bodźców"],
      x: "Slajd: interakcja oznacza konieczność orientacji w środowisku i rozpoznania zagrożeń i możliwości. Do tego właśnie potrzebna jest percepcja.",
      w: ["Interakcja to kontakt, a nie unikanie środowiska.", "Ignorując bodźce, nie da się rozpoznać zagrożeń ani możliwości."] },

    /* ---------- Problem odwrotny ---------- */
    { u: "odwrotny", t: "mcq", q: "Na czym polega problem odwrotny percepcji?",
      a: ["Mózg dostaje tylko impulsy ze zmysłów i musi wnioskować o ich przyczynach", "Obraz na siatkówce jest odwrócony i mózg musi go obrócić", "Lewa półkula odbiera prawą stronę pola widzenia, a prawa lewą", "Wspomnienia odtwarzamy w odwrotnej kolejności, niż je zapisaliśmy"],
      x: "Z sygnału (impulsów) trzeba odgadnąć przyczynę (co jest na zewnątrz), a ten sam sygnał mogą dać różne przyczyny. Pułapka: odwrócony obraz na siatkówce to co innego.",
      w: ["Obraz rzeczywiście jest odwrócony, ale to nie jest problem odwrotny. Problem odwrotny to zgadywanie przyczyny na podstawie sygnału.",
        "To fakt z anatomii, ale nie o tym jest problem odwrotny.", "To nie ma związku z percepcją ani z wykładem."] },
    { u: "odwrotny", t: "tf", q: "Mózg ma bezpośredni dostęp do świata zewnętrznego.", a: false,
      x: "Nie ma. Dostaje tylko impulsy elektryczne ze zmysłów i z nich wnioskuje, co jest na zewnątrz. To sedno problemu odwrotnego." },
    { u: "odwrotny", t: "match", pairs: [["Fizyka", "jak przyczyny wytwarzają sygnał?"], ["Percepcja", "jaka przyczyna wytworzyła ten sygnał?"]],
      x: "Fizyka idzie od przyczyny do sygnału. Percepcja musi iść pod prąd: od sygnału do jego prawdopodobnej przyczyny." },
    { u: "odwrotny", t: "mcq", q: "Duży obiekt daleko i mały obiekt blisko pod tym samym kątem widzenia dają na siatkówce…",
      a: ["taki sam rozmiar obrazu", "zawsze wyraźnie różne obrazy", "obraz wyłącznie dużego obiektu", "obraz wyłącznie bliższego obiektu"],
      x: "Ten sam kąt widzenia daje ten sam rozmiar obrazu na siatkówce. Dlatego sam obraz nie rozstrzyga, czy to „mały i blisko”, czy „duży i daleko”.",
      w: ["Właśnie nie: przy tym samym kącie widzenia obrazy mają ten sam rozmiar. Na tym polega problem.",
        "Oba obiekty dają obraz. Chodzi o to, że ma on ten sam rozmiar.", "Oba obiekty dają obraz. Chodzi o to, że ma on ten sam rozmiar."] },
    { u: "odwrotny", t: "multi", q: "Co według slajdu pomaga w interpretacji niejednoznacznego sygnału?", a: ["kontekst", "wiedza", "dodatkowe wskazówki zmysłowe"], o: ["większa źrenica", "zamknięcie oczu"],
      x: "Slajd: gdy sam sygnał nie wystarcza, pomagają kontekst, wiedza i dodatkowe wskazówki zmysłowe.",
      w: ["Szersza źrenica wpuszcza więcej światła, ale nie rozstrzyga, jaka przyczyna dała sygnał.", "Zamknięcie oczu odbiera sygnał, a nie pomaga go zinterpretować."] },
    { u: "odwrotny", t: "cloze", q: "Różne przyczyny mogą prowadzić do ___ sygnału.", a: ["takiego samego", "zawsze innego", "żadnego", "silniejszego"],
      x: "Na tym polega problem: różne przyczyny dają ten sam sygnał, więc mózg musi zgadywać.",
      w: ["Gdyby każda przyczyna dawała inny sygnał, nie byłoby problemu odwrotnego.", "Sygnał jest. Kłopot w tym, że nie mówi jednoznacznie, skąd się wziął.", "Nie chodzi o siłę sygnału, tylko o to, że jest identyczny."] },
    { u: "odwrotny", t: "mcq", q: "W jakiej postaci mózg dostaje sygnał ze zmysłów?", a: ["Elektrycznych impulsów", "Gotowych obrazów i dźwięków", "Słów i nazw przedmiotów", "Zapachów i smaków"],
      x: "Do mózgu trafiają tylko impulsy elektryczne. Obraz, dźwięk czy zapach to już wynik interpretacji tych impulsów.",
      w: ["Obrazy i dźwięki to wynik pracy mózgu, a nie to, co do niego dociera.", "Słowa to już wynik rozpoznania, a nie surowy sygnał ze zmysłów.", "Zapach i smak to wrażenia, które mózg tworzy z impulsów."] },
    { u: "odwrotny", t: "mcq", s: "D", q: "Kto w XIX wieku opisał percepcję jako „nieświadome wnioskowanie”, co pasuje do problemu odwrotnego?",
      a: ["Hermann von Helmholtz", "Sigmund Freud", "B. F. Skinner", "Jean Piaget"],
      x: "Hermann von Helmholtz twierdził, że percepcja to „nieświadome wnioskowanie” o przyczynach wrażeń. To dokładnie problem odwrotny.",
      w: ["Freud badał nieświadomość w sensie popędów i konfliktów, a nie wnioskowanie w percepcji.", "Skinner to behawiorysta, który pomijał procesy w umyśle.", "Piaget badał rozwój poznawczy dzieci, nie percepcję jako wnioskowanie."] },

    /* ---------- Etapy 1–3: od świata do sygnału (kolejność z pliku) ---------- */
    { u: "etapy", t: "which", set: "etap", q: "Energia lub zdarzenie dostępne dla zmysłu.", a: 1,
      x: "Etap 1 dzieje się jeszcze na zewnątrz: światło, dźwięk czy zapach, który może trafić do zmysłu." },
    { u: "etapy", t: "which", set: "etap", s: "D", q: "Światło odbija się od kubka na stole i leci w stronę twojego oka.", a: 1,
      x: "Światło jeszcze nie dotarło do oka. To energia dostępna dla zmysłu, czyli bodziec fizyczny." },
    { u: "etapy", t: "tf", q: "Bodziec fizyczny to jeszcze nie twoje przeżycie, tylko energia lub zdarzenie, które może dotrzeć do zmysłu.", a: true,
      x: "Tak. Etap 1 to sam świat: światło, dźwięk, zapach. Przeżycie pojawia się dopiero na końcu całego procesu." },
    { u: "etapy", t: "which", set: "etap", q: "Wyspecjalizowana komórka lub zakończenie nerwowe.", a: 2,
      x: "Receptor to „łapacz” jednego rodzaju energii, np. czopki i pręciki w oku łapią światło." },
    { u: "etapy", t: "which", set: "etap", s: "D", q: "Czopki i pręciki w siatkówce reagują na światło, ale nie na dźwięk.", a: 2,
      x: "To wyspecjalizowane komórki zmysłowe, czyli receptory. Każdy receptor łapie tylko swój rodzaj energii." },
    { u: "etapy", t: "cloze", q: "Receptor to wyspecjalizowana ___ lub zakończenie nerwowe.", a: ["komórka", "energia", "myśl", "kategoria"],
      x: "Slajd: receptor to wyspecjalizowana komórka lub zakończenie nerwowe.",
      w: ["Energia to bodziec fizyczny (etap 1), który receptor dopiero odbiera.", "Myśl to już wytwór umysłu, a nie część zmysłu.", "Kategoria pojawia się dopiero przy rozpoznaniu (etap 6)."] },
    { u: "etapy", t: "which", set: "etap", q: "Energia fizyczna zamienia się w sygnał elektrochemiczny.", a: 3,
      x: "Zamiana energii na sygnał elektrochemiczny to transdukcja, czyli tłumaczenie świata na język układu nerwowego." },
    { u: "etapy", t: "mcq", q: "Gdzie zachodzi transdukcja?", a: ["W receptorze", "W korze mózgowej", "W rdzeniu kręgowym", "W bodźcu fizycznym"],
      x: "Slajd: transdukcja zachodzi w receptorze. To receptor zamienia energię na sygnał, a do mózgu dociera już gotowy sygnał.",
      w: ["Do kory dociera sygnał, który już jest elektrochemiczny. Tłumaczenie odbyło się wcześniej, w receptorze.",
        "Rdzeń przewodzi gotowe sygnały, ale nie zamienia energii na sygnał.", "Bodziec to energia na zewnątrz. Nic w nim nie jest jeszcze tłumaczone."] },
    { u: "etapy", t: "tf", q: "Transdukcja zachodzi w mózgu, w korze wzrokowej.", a: false,
      x: "Według slajdu transdukcja zachodzi w receptorze, np. w siatkówce oka. Do mózgu trafia już sygnał elektrochemiczny." },
    { u: "etapy", t: "mcq", q: "Czym różni się receptor od transdukcji?",
      a: ["Receptor to komórka, a transdukcja to zamiana energii na sygnał, która w niej zachodzi", "Receptor to proces zamiany energii, a transdukcja to komórka, która go wykonuje", "To dwie nazwy tego samego etapu, używane zamiennie na wykładzie", "Receptor działa w mózgu, a transdukcja zachodzi wcześniej, w samym bodźcu"],
      x: "Receptor to KTO (komórka), transdukcja to CO ROBI (zamiana energii na sygnał). Transdukcja zachodzi w receptorze, ale to dwa osobne etapy: 2 i 3.",
      w: ["Odwrotnie: receptor to komórka, a transdukcja to proces.", "Na schemacie to osobne etapy: receptor to 2, transdukcja to 3.", "Receptor jest w narządzie zmysłu, a w bodźcu nic się nie tłumaczy."] },
    { u: "etapy", t: "which", set: "etap", s: "D", q: "Komórki rzęsate w uchu zamieniają drgania na impulsy nerwowe.", a: 3,
      x: "Zamiana drgań (energii) na impulsy nerwowe (sygnał) to transdukcja. Tak samo działa to w każdym zmyśle." },
    { u: "etapy", t: "mcq", q: "Dlaczego oko nie słyszy, a ucho nie widzi?",
      a: ["Bo receptory są wyspecjalizowane: każdy reaguje na swój rodzaj energii", "Bo transdukcja zachodzi dopiero w korze mózgowej, a nie w narządzie zmysłu", "Bo wpływy odgórne wyłączają te zmysły, które są w danej chwili zbędne", "Bo światło i dźwięk dają na receptorach ten sam bodziec proksymalny"],
      x: "Receptor to wyspecjalizowana komórka. Czopki i pręciki łapią światło, komórki rzęsate drgania. Każdy zmysł ma swoich „łapaczy”.",
      w: ["Transdukcja zachodzi w receptorze, nie w korze.", "Wpływy odgórne działają na etapy 4–6. Nie decydują o tym, na jaką energię reaguje receptor.", "Bodźce proksymalne światła i dźwięku to zupełnie różne wzorce energii."] },
    { u: "etapy", t: "type", q: "Zamiana energii fizycznej na sygnał elektrochemiczny to…", a: ["transdukcja"],
      x: "Transdukcja, czyli etap 3. Zachodzi w receptorze." },
    { u: "etapy", t: "order", q: "Ułóż pierwsze trzy etapy: od świata do sygnału.", a: ["Bodziec fizyczny", "Receptor", "Transdukcja"],
      x: "Najpierw energia na zewnątrz (bodziec), potem komórka, która ją łapie (receptor), na końcu tłumaczenie na sygnał w tej komórce (transdukcja)." },

    /* ---------- Etapy 4–6: od sygnału do znaczenia (kolejność z pliku) ---------- */
    { u: "etapy2", t: "which", set: "etap", q: "Wzorce aktywności neuronów i ich populacji.", a: 4,
      x: "Informacja zapisana w tym, które neurony i jak strzelają, to kodowanie neuronalne." },
    { u: "etapy2", t: "mcq", q: "Czym jest kodowanie neuronalne?",
      a: ["Zapisem informacji we wzorcach aktywności neuronów i ich populacji", "Zamianą energii światła na sygnał elektrochemiczny w receptorze", "Składaniem krawędzi i kolorów w przedmioty oraz zdarzenia", "Nadawaniem nazwy temu, co widzimy, na podstawie pamięci"],
      x: "Kodowanie to zapis: które neurony są aktywne, jak często i w jakich grupach (populacjach). To jeszcze nie jest „przedmiot”, tylko kod.",
      w: ["To transdukcja, czyli etap 3.", "To organizacja percepcyjna, czyli etap 5.", "To rozpoznanie, czyli etap 6."] },
    { u: "etapy2", t: "tf", q: "Na etapie kodowania neuronalnego mózg już wie, że patrzy na kubek.", a: false,
      x: "Kodowanie to dopiero wzór aktywności neuronów. Wiedza „to kubek” pojawia się na etapie 6, w rozpoznaniu." },
    { u: "etapy2", t: "which", set: "etap", s: "D", q: "W korze wzrokowej jedna grupa neuronów strzela szybciej przy pionowych krawędziach, a inna przy poziomych.", a: 4,
      x: "Informacja o krawędziach jest zapisana we wzorze aktywności grup neuronów. To kodowanie neuronalne." },
    { u: "etapy2", t: "which", set: "etap", q: "Z cech powstają powierzchnie, obiekty i zdarzenia.", a: 5,
      x: "Składanie cech w całości to organizacja percepcyjna." },
    { u: "etapy2", t: "cloze", q: "Organizacja percepcyjna: ___ → powierzchnie, obiekty i zdarzenia.", a: ["cechy", "neurony", "kategorie", "receptory"],
      x: "Slajd: cechy → powierzchnie, obiekty i zdarzenia. Z krawędzi, kolorów i ruchu powstają całe rzeczy.",
      w: ["Neurony robią całą tę pracę, ale na slajdzie wejściem są cechy.", "Kategorie to wynik rozpoznania (etap 6), a nie organizacji.", "Receptory to etap 2, na samym początku drogi."] },
    { u: "etapy2", t: "which", set: "etap", s: "D", q: "Widzisz, że na stole stoi jeden przedmiot oddzielony od blatu, ale jeszcze nie wiesz, co to jest.", a: 5,
      x: "Jest przedmiot oddzielony od tła, ale bez nazwy. To organizacja percepcyjna: cechy złożone w obiekt, zanim nastąpi rozpoznanie." },
    { u: "etapy2", t: "which", set: "etap", q: "Kategoria, obiekt, osoba lub znaczenie: „to jest kubek”.", a: 6,
      x: "Wiesz, CO to jest. To rozpoznanie, ostatni etap." },
    { u: "etapy2", t: "which", set: "etap", s: "D", q: "Mówisz w myślach: „to mój kubek z herbatą”.", a: 6,
      x: "Pojawia się kategoria (kubek), konkretny obiekt (mój) i znaczenie (herbata). To rozpoznanie." },
    { u: "etapy2", t: "multi", q: "Co według slajdu może być wynikiem rozpoznania?", a: ["kategoria", "obiekt", "osoba", "znaczenie"], o: ["sygnał elektrochemiczny", "wzorzec energii na receptorach"],
      x: "Slajd: rozpoznanie to kategoria, obiekt, osoba lub znaczenie.",
      w: ["Sygnał elektrochemiczny to wynik transdukcji (etap 3).", "Wzorzec energii na receptorach to bodziec proksymalny, sam początek drogi."] },
    { u: "etapy2", t: "mcq", q: "Czym różni się organizacja percepcyjna od rozpoznania?",
      a: ["Organizacja składa cechy w przedmiot, a rozpoznanie mówi, co to za przedmiot", "Organizacja mówi, co to za przedmiot, a rozpoznanie składa cechy w całość", "Organizacja zachodzi w receptorze, a rozpoznanie w bodźcu fizycznym", "Niczym, to dwie nazwy tego samego etapu na schemacie"],
      x: "Organizacja: „jest tu jeden przedmiot, oddzielony od tła” (etap 5). Rozpoznanie: „to kubek” (etap 6).",
      w: ["Odwrotnie: najpierw składamy cechy w przedmiot, potem go rozpoznajemy.", "W receptorze zachodzi transdukcja, a w bodźcu nic się nie przetwarza.", "To osobne etapy: 5 i 6."] },
    { u: "etapy2", t: "type", q: "Etap, na którym wiesz już, CO widzisz (kategoria, osoba, znaczenie), to…", a: ["rozpoznanie"],
      x: "Rozpoznanie, etap 6: kategoria, obiekt, osoba lub znaczenie." },
    { u: "etapy2", t: "order", q: "Ułóż etapy 4–6: od sygnału do znaczenia.", a: ["Kodowanie neuronalne", "Organizacja percepcyjna", "Rozpoznanie"],
      x: "Najpierw zapis w neuronach (kodowanie), potem składanie cech w przedmioty (organizacja), na końcu nazwa i znaczenie (rozpoznanie)." },

    /* ---------- Cały schemat: pętle i wpływy odgórne (kolejność z pliku) ---------- */
    { u: "petle", t: "order", q: "Ułóż etapy od bodźca do spostrzeżenia.",
      a: ["Bodziec fizyczny", "Receptor", "Transdukcja", "Kodowanie neuronalne", "Organizacja percepcyjna", "Rozpoznanie"],
      x: "Od świata do sygnału (1–3), od sygnału do znaczenia (4–6). Pomoc: „Babcia Robi Twarożek, Kot Ogląda Radośnie”." },
    { u: "petle", t: "multi", q: "Jakie wpływy odgórne działają na przetwarzanie informacji według schematu?", a: ["kontekst", "cele", "pamięć", "oczekiwania"], o: ["receptor", "transdukcja"],
      x: "Ramka nad schematem: kontekst, cele, pamięć, oczekiwania, czyli wpływy odgórne na przetwarzanie informacji.",
      w: ["Receptor to etap 2, a nie wpływ odgórny.", "Transdukcja to etap 3, a nie wpływ odgórny."] },
    { u: "petle", t: "multi", q: "Na które etapy według schematu działają wpływy odgórne (przerywane strzałki z góry)?",
      a: ["kodowanie neuronalne", "organizacja percepcyjna", "rozpoznanie"], o: ["bodziec fizyczny", "receptor", "transdukcja"],
      x: "Przerywane strzałki z ramki „kontekst, cele, pamięć, oczekiwania” trafiają w etapy 4, 5 i 6, czyli tam, gdzie sygnał jest już przetwarzany przez układ nerwowy.",
      w: ["Bodziec jest na zewnątrz. Twoje oczekiwania nie zmieniają światła, które leci do oka.", "Na schemacie strzałki odgórne nie trafiają w receptor.", "Na schemacie strzałki odgórne nie trafiają w transdukcję."] },
    { u: "petle", t: "cloze", q: "Kontekst, cele, pamięć i oczekiwania to wpływy ___ na przetwarzanie informacji.", a: ["odgórne", "oddolne", "sensoryczne", "ruchowe"],
      x: "Pochodzą z głowy, nie z bodźca, więc działają z góry w dół: odgórnie.",
      w: ["Oddolne są cechy bodźca: kolor, kształt, dźwięk.", "To nie zmysły, tylko to, co już jest w umyśle.", "Ruch należy do pętli sensoryczno-ruchowej, a nie do wpływów odgórnych."] },
    { u: "petle", t: "mcq", q: "Jakie dwie pętle zwrotne pokazuje schemat?", a: ["Neuronalną i sensoryczno-ruchową", "Hormonalną i autonomiczno-nerwową", "Świadomą i nieświadomą (automatyczną)", "Wzrokową i słuchowo-równoważną"],
      x: "Podtytuł slajdu: etapy analizy oraz dwie pętle zwrotne, neuronalna i sensoryczno-ruchowa.",
      w: ["Hormonów nie ma na tym schemacie.", "Świadomość pojawia się tylko przy działaniu („także bez pełnego świadomego rozpoznania”), ale to nie nazwy pętli.", "To zmysły, a schemat jest wspólny dla wszystkich zmysłów."] },
    { u: "petle", t: "mcq", q: "Co na schemacie oznaczają strzałki wstecz między etapami 4, 5 i 6?",
      a: ["Sprzężenia neuronalne, czyli pętlę neuronalną", "Pętlę sensoryczno-ruchową, czyli ruch ciała", "Wpływy odgórne z kontekstu i oczekiwań", "Powrót bodźca do receptora po rozpoznaniu"],
      x: "Legenda slajdu: strzałki wstecz to sprzężenia neuronalne. Wyższe etapy odsyłają informację niższym, np. rozpoznanie pomaga organizacji.",
      w: ["Pętla sensoryczno-ruchowa idzie przez działanie i wraca do bodźca, a nie wstecz między etapami.", "Wpływy odgórne to przerywane strzałki z ramki nad schematem.", "Bodziec wraca na początek tylko przez działanie (pętla sensoryczno-ruchowa)."] },
    { u: "petle", t: "mcq", q: "Między którymi etapami schemat pokazuje strzałki w obie strony?",
      a: ["Kodowanie ⇄ organizacja ⇄ rozpoznanie", "Bodziec ⇄ receptor ⇄ transdukcja", "Receptor ⇄ transdukcja ⇄ kodowanie", "Między wszystkimi sześcioma etapami"],
      x: "Strzałki wstecz (pętla neuronalna) są między etapami 4, 5 i 6. Etapy 1–3 mają tylko strzałki do przodu.",
      w: ["Od bodźca do transdukcji informacja płynie tylko w przód.", "Między etapami 2, 3 i 4 są tylko strzałki do przodu.", "Strzałki wstecz są tylko między etapami 4, 5 i 6."] },
    { u: "petle", t: "which", set: "schemat", q: "Strzałki wstecz między etapami: wyższe etapy odsyłają informację niższym.", a: 2,
      x: "Strzałki wstecz to sprzężenia neuronalne, czyli pętla neuronalna." },
    { u: "petle", t: "mcq", q: "Z których etapów na schemacie wychodzą strzałki do działania?", a: ["Z organizacji percepcyjnej i z rozpoznania", "Tylko z rozpoznania, po pełnym rozpoznaniu", "Z receptora i z transdukcji, przed kodowaniem", "Tylko z bodźca fizycznego, przed receptorem"],
      x: "Strzałka do działania wychodzi już z etapu 5, a nie tylko z 6. Dlatego działanie może wyprzedzić pełne rozpoznanie.",
      w: ["Nie tylko: strzałka wychodzi też z organizacji, dlatego działanie bywa szybsze niż rozpoznanie.", "Receptor i transdukcja tylko przekazują sygnał dalej.", "Bodziec to dopiero początek, a nie źródło działania."] },
    { u: "petle", t: "tf", q: "Według schematu działanie może nastąpić także bez pełnego świadomego rozpoznania.", a: true,
      x: "Tak jest na slajdzie. Strzałka do działania wychodzi już z organizacji percepcyjnej, więc możesz zareagować, zanim wiesz, na co." },
    { u: "petle", t: "mcq", q: "Co robi pętla sensoryczno-ruchowa?",
      a: ["Działanie zmienia dostępną stymulację, np. ruch oczu", "Przesyła informację wstecz między etapami w mózgu", "Wyłącza percepcję na czas wykonywania ruchu", "Zapisuje gotowe spostrzeżenia w pamięci"],
      x: "Robisz coś (ruch oczu, podejście, dotknięcie), a to zmienia, co trafia do zmysłów. Nowy bodziec wraca na początek schematu.",
      w: ["To pętla neuronalna, czyli strzałki wstecz.", "Odwrotnie: ruch pomaga spostrzegać, bo dostarcza nowej stymulacji.", "Pamięć to wpływ odgórny, a nie pętla sensoryczno-ruchowa."] },
    { u: "petle", t: "mcq", q: "Dokąd na schemacie wraca pętla sensoryczno-ruchowa?",
      a: ["Do bodźca fizycznego, bo działanie zmienia stymulację", "Do rozpoznania, bo działanie zmienia znaczenie", "Do pamięci, bo działanie zapisuje wspomnienie", "Do transdukcji, bo ruch wzmacnia sygnał w receptorze"],
      x: "Strzałka „zmiana dostępnej stymulacji” biegnie od działania do etapu 1. Ruszasz się, więc do zmysłów trafia inny bodziec.",
      w: ["Strzałka wraca do początku schematu, nie do rozpoznania.", "Pamięci nie ma w tej pętli. Pamięć to wpływ odgórny.", "Działanie zmienia sam bodziec, czyli etap 1, a nie przebieg transdukcji."] },
    { u: "petle", t: "which", set: "schemat", s: "D", q: "Z daleka nie wiesz, czy to twój kolega. Podchodzisz bliżej i już wiesz.", a: 3,
      x: "Podejście to działanie, które zmienia dostępną stymulację (większy, wyraźniejszy obraz). To pętla sensoryczno-ruchowa." },
    { u: "petle", t: "which", set: "schemat", s: "D", q: "Czekasz na przyjaciółkę i przez chwilę bierzesz nieznajomą osobę za nią.", a: 1,
      x: "Oczekiwanie (z twojej głowy) wpływa na rozpoznanie. To wpływ odgórny, który tym razem prowadzi na manowce." },
    { u: "petle", t: "mcq", s: "D", q: "Odskakujesz przed czymś, co leci w twoją stronę, zanim wiesz, że to piłka. Co pokazuje ta sytuacja?",
      a: ["Działanie bez pełnego świadomego rozpoznania", "Transdukcję zachodzącą w receptorze", "Wpływ oczekiwań na rozpoznanie", "Problem umysł–ciało"],
      x: "Reakcja przyszła, zanim wiesz, co leci. Na schemacie strzałka do działania wychodzi już z organizacji (etap 5), przed rozpoznaniem.",
      w: ["Transdukcja zaszła, ale nie ona jest tu ciekawa. Chodzi o działanie przed rozpoznaniem.", "Niczego się nie spodziewałeś, a rozpoznania jeszcze nie było.", "Problem umysł–ciało dotyczy tego, skąd bierze się przeżycie, a nie szybkości reakcji."] },
    { u: "petle", t: "type", q: "Jak nazywa się pętla, w której działanie (ruch oczu, podejście, dotyk) zmienia dostępną stymulację? Pętla…", a: ["sensoryczno-ruchowa", "sensoryczno ruchowa", "sensomotoryczna"],
      x: "Pętla sensoryczno-ruchowa: zmysły (sensoryczna) plus ruch (ruchowa)." },

    /* ---------- Bodźce i kierunki ---------- */
    { u: "bodzce", t: "match", s: "K", pairs: [["Bodziec dystalny", "obiekt lub zdarzenie w środowisku"], ["Bodziec proksymalny", "wzorzec energii na receptorach"]],
      x: "Dystalny znaczy daleki: rzecz w świecie. Proksymalny znaczy bliski: energia, która dotarła do receptorów." },
    { u: "bodzce", t: "which", set: "bodziec", q: "Litera A na tablicy.", a: 1,
      x: "Litera na tablicy to obiekt w środowisku, czyli bodziec dystalny." },
    { u: "bodzce", t: "which", set: "bodziec", q: "Odwrócony obraz litery A na siatkówce.", a: 2,
      x: "Obraz na siatkówce to wzorzec energii (światła) na receptorach, czyli bodziec proksymalny." },
    { u: "bodzce", t: "which", set: "bodziec", s: "D", q: "Fala dźwiękowa, która porusza błoną bębenkową.", a: 2,
      x: "Fala, która już dotarła do ucha, to energia na narządzie zmysłu, czyli bodziec proksymalny." },
    { u: "bodzce", t: "which", set: "bodziec", s: "D", q: "Dzwon bijący na wieży kościoła.", a: 1,
      x: "Dzwon to obiekt w świecie, źródło dźwięku, czyli bodziec dystalny." },
    { u: "bodzce", t: "mcq", q: "Co jest procesem odgórnym (top-down)?", a: ["Oczekiwania", "Kolor bodźca", "Kształt bodźca", "Ruch bodźca"],
      x: "Oczekiwania pochodzą z twojej głowy, a nie z bodźca, więc działają odgórnie.",
      w: ["Kolor to cecha bodźca, więc działa oddolnie.", "Kształt to cecha bodźca, więc działa oddolnie.", "Ruch to cecha bodźca, więc działa oddolnie."] },
    { u: "bodzce", t: "mcq", q: "Co jest procesem oddolnym (bottom-up)?", a: ["Lokalizacja bodźca", "Kultura, w której wyrosłeś", "Twoje cele", "Pamięć o podobnych rzeczach"],
      x: "Lokalizacja to cecha samego bodźca (gdzie jest), więc działa oddolnie.",
      w: ["Kultura to to, co masz w głowie, więc działa odgórnie.", "Cele to twoje zamiary, więc działają odgórnie.", "Pamięć to wiedza, którą już masz, więc działa odgórnie."] },
    { u: "bodzce", t: "sort", q: "Oddolne czy odgórne?", cats: ["Oddolne", "Odgórne"],
      why: ["Cecha samego bodźca buduje spostrzeżenie od dołu.", "To pochodzi z twojej głowy i podpowiada z góry, co widzisz."],
      items: [["dźwięk", 0], ["kolor", 0], ["kształt", 0], ["wiedza", 1], ["oczekiwania", 1], ["kultura", 1]],
      x: "Oddolne to cechy bodźca (dźwięk, kolor, kształt, lokalizacja, ruch). Odgórne to zawartość głowy (wiedza, oczekiwania, cele, pamięć, kultura)." },
    { u: "bodzce", t: "cloze", q: "Procesy odgórne i oddolne razem tworzą ___.", a: ["spostrzeżenie", "receptor", "transdukcję", "bodziec"],
      x: "Na slajdzie obie strzałki, z góry i z dołu, spotykają się w spostrzeżeniu.",
      w: ["Receptor to komórka zmysłowa, a nie wynik przetwarzania.", "Transdukcja to etap 3, zamiana energii na sygnał w receptorze.", "Bodziec jest na początku, a nie jest wynikiem przetwarzania."] },

    /* ---------- Zawodność ---------- */
    { u: "zawodna", t: "multi", q: "Które przyczyny zawodności percepcji są na slajdzie?",
      a: ["niejednoznaczność stymulacji", "szum", "ograniczona rozdzielczość", "kontekst", "wcześniejsza wiedza", "cele i uwaga"], o: ["zbyt duża liczba receptorów"],
      x: "Slajd wymienia sześć przyczyn: niejednoznaczność stymulacji, szum, ograniczoną rozdzielczość, kontekst, wcześniejszą wiedzę oraz cele i uwagę.",
      w: ["Tej przyczyny nie ma na slajdzie."] },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "W głośnym pubie słowa kolegi giną w gwarze.", a: 2,
      x: "Gwar to przypadkowy hałas, który zagłusza właściwy sygnał (głos kolegi). To szum." },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Z przystanku nie odczytasz numeru autobusu, który jest jeszcze daleko.", a: 3,
      x: "Z daleka oko nie rozróżnia drobnych szczegółów, takich jak cyfry. To ograniczona rozdzielczość." },
    { u: "zawodna", t: "which", set: "zawod", q: "Ten sam obraz na siatkówce może pochodzić od małego bliskiego albo dużego dalekiego obiektu.", a: 1,
      x: "Jeden sygnał, dwie możliwe przyczyny. To niejednoznaczność stymulacji, czyli problem odwrotny w praktyce." },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Szukając kluczy, nie zauważasz, że współlokator przemalował ścianę.", a: 6,
      x: "Skupiasz się na celu (klucze), więc przeoczasz resztę. To cele i uwaga." },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Znasz piosenkę, więc „słyszysz” słowa, których wokalista wcale wyraźnie nie zaśpiewał.", a: 5,
      x: "Znasz tekst, więc mózg „dopowiada” słowa, których nie było wyraźnie słychać. To wcześniejsza wiedza." },
    { u: "zawodna", t: "which", set: "zawod", s: "D", q: "Ten sam szary kwadrat wygląda jaśniej na czarnym tle niż na białym.", a: 4,
      x: "Kwadrat jest ten sam, zmienia się tło. To, co dookoła, zmienia odbiór, czyli kontekst." },
    { u: "zawodna", t: "tf", q: "Wpływy, które pomagają percepcji (kontekst, wiedza), mogą też być źródłem jej błędów.", a: true,
      x: "Kontekst i wcześniejsza wiedza są i na liście pomocy w interpretacji, i na liście przyczyn zawodności." },

    /* ---------- Uwaga ---------- */
    { u: "uwaga", t: "mcq", q: "Ile informacji odbiera cały układ nerwowy z otoczenia (w przybliżeniu)?",
      a: ["Około 10⁹ bitów na sekundę", "Około 10 bitów na sekundę", "Około 1000 bitów na sekundę", "Około 10⁹ bitów na dzień"],
      x: "Cały układ nerwowy odbiera ok. 10⁹, czyli miliard bitów na sekundę (Zheng i Meister, 2025).",
      w: ["10 bitów na sekundę to tyle, ile przetwarzamy świadomie, a nie tyle, ile wpada.", "Za mało: wpada ok. miliard bitów na sekundę.", "Jednostka się nie zgadza: miliard bitów wpada co sekundę, nie co dzień."] },
    { u: "uwaga", t: "mcq", q: "Ile informacji faktycznie przetwarzamy świadomie i wykorzystujemy do działania?",
      a: ["Około 10 bitów na sekundę", "Około 10⁹ bitów na sekundę", "Około 10 000 bitów na sekundę", "Około 1 bitu na minutę"],
      x: "Świadomie przetwarzamy i wykorzystujemy do działania ok. 10 bitów na sekundę. Reszta zostaje odfiltrowana.",
      w: ["To tyle, ile wpada do całego układu nerwowego, a nie tyle, ile przetwarzamy świadomie.", "Za dużo: świadomie to tylko ok. 10 bitów na sekundę.", "Za mało: to ok. 10 bitów na sekundę."] },
    { u: "uwaga", t: "mcq", q: "Na badania jakich autorów powołuje się slajd o uwadze?", a: ["Zheng i Meister, 2025", "Ulric Neisser, 1967", "Donald Broadbent, 1958", "William James, 1890"],
      x: "Slajd o uwadze powołuje się na Zheng i Meister (2025).",
      w: ["Neisser (1967) to książka „Cognitive Psychology”, a nie badania o przepustowości.", "Broadbent (1958) to klasyczna teoria filtra uwagi, ale nie on jest na tym slajdzie.", "William James (1890) pisał o uwadze, ale slajd cytuje Zheng i Meister."] },
    { u: "uwaga", t: "mcq", q: "Do czego według slajdu służy uwaga?",
      a: ["Do redukcji i selekcji informacji istotnych w danym kontekście", "Do zwiększania liczby bodźców, które docierają do mózgu", "Do zapamiętywania wszystkiego, co widzimy i słyszymy", "Do zamiany energii fizycznej na impulsy nerwowe"],
      x: "Uwaga to filtr: z miliarda bitów wybiera to, co w danej chwili ważne, a resztę odrzuca.",
      w: ["Odwrotnie: uwaga zmniejsza ilość informacji, a nie ją zwiększa.", "Gdybyśmy zapamiętywali wszystko, uwaga nie byłaby potrzebna. Ona właśnie wybiera.", "To transdukcja, która zachodzi w receptorze."] },
    { u: "uwaga", t: "cloze", q: "Mózg filtruje i ___ ogromną ilość informacji przychodzącej zmysłowo.", a: ["redukuje", "powiela", "wzmacnia", "ignoruje całkowicie"],
      x: "Filtruje i redukuje: z ok. miliarda bitów zostaje ok. 10.",
      w: ["Powielanie zwiększyłoby ilość informacji, a mózg ją zmniejsza.", "Wzmacnianie zwiększałoby zalew informacji, a mózg go zmniejsza.", "Nie całkowicie: ułamek zostaje do świadomości i działania."] },
    { u: "uwaga", t: "mcq", q: "Ile wykładów kursu dotyczy percepcji, a ile uwagi?", a: ["10 percepcji, 5 uwagi", "5 percepcji, 10 uwagi", "Po 7 każdego, plus wstęp", "15 percepcji, uwaga osobno"],
      x: "Wykłady 1–10 to percepcja, 11–15 to uwaga.",
      w: ["Odwrotnie: więcej jest percepcji.", "Podział jest 10 do 5.", "Uwaga jest częścią tego kursu: wykłady 11–15."] },
    { u: "uwaga", t: "mcq", q: "Który temat jest ostatnim wykładem z percepcji?", a: ["Złudzenia i błędy percepcji", "Integracja multisensoryczna", "Percepcja słuchowa", "Teorie uwagi"],
      x: "Wykład 10, ostatni z percepcji, to złudzenia i błędy percepcji. Potem zaczyna się uwaga.",
      w: ["Integracja multisensoryczna to wykład 7.", "Percepcja słuchowa to wykład 5.", "Teorie uwagi to wykład 12, już w części o uwadze."] },

    /* ---------- Rozpoznaj w życiu ---------- */
    { u: "mix", t: "which", set: "kierunek", s: "D", q: "Czekasz na tramwaj „3”, więc z daleka „widzisz” trójkę, choć to ósemka.", a: 2,
      x: "Czekasz na „3”, więc oczekiwanie (z głowy) zmienia to, co widzisz. To proces odgórny." },
    { u: "mix", t: "which", set: "kierunek", s: "D", q: "Jaskrawoczerwony punkt na szarej ścianie od razu przyciąga wzrok.", a: 1,
      x: "Wzrok przyciąga sama cecha bodźca (jaskrawy kolor na tle), więc to proces oddolny." },
    { u: "mix", t: "which", set: "kierunek", s: "D", q: "Lekarz na zdjęciu RTG widzi złamanie, którego laik nie dostrzega.", a: 2,
      x: "Obraz na kliszy jest dla obu ten sam. Lekarz widzi więcej dzięki wiedzy i doświadczeniu, czyli odgórnie." },
    { u: "mix", t: "which", set: "etap", s: "D", q: "Fotoreceptory w oku zamieniają światło na sygnał elektryczny.", a: 3,
      x: "Zamiana światła na sygnał w fotoreceptorach to transdukcja. Zachodzi w receptorze." },
    { u: "mix", t: "which", set: "etap", s: "D", q: "Z plam kolorów składasz kształt kota leżącego na kanapie.", a: 5,
      x: "Składanie plam w kształt („jest tu jakiś kot”) to organizacja percepcyjna. Kto to jest, wiesz dopiero na etapie 6." },
    { u: "mix", t: "which", set: "etap", s: "D", q: "Wiesz, że ten kot to Mruczek sąsiadów.", a: 6,
      x: "Wiesz, KTO to jest: konkretny kot sąsiadów. To rozpoznanie." },
    { u: "mix", t: "which", set: "problem", s: "D", q: "Na imprezie słyszysz swoje imię przez cały gwar i od razu się odwracasz.", a: 3,
      x: "Twoje imię wygrywa walkę o priorytet z całym gwarem. To uwaga." },
    { u: "mix", t: "mcq", s: "D", q: "Podchodzisz bliżej do tablicy, żeby odczytać małe litery. Którą pętlę uruchamiasz?",
      a: ["Sensoryczno-ruchową", "Neuronalną (strzałki wstecz)", "Hormonalną (stresową)", "Żadną, to zwykły odruch"],
      x: "Ruszasz się (działanie), żeby zmienić to, co trafia do oczu. To pętla sensoryczno-ruchowa.",
      w: ["Pętla neuronalna to strzałki wstecz w układzie nerwowym, bez ruchu ciała.", "Na schemacie nie ma pętli hormonalnej.", "Działanie zmienia stymulację, więc jakaś pętla na pewno działa."] }
  ],


  sortDecks: [
    { id: "etapy", title: "Od świata do sygnału czy od sygnału do znaczenia?", sub: "Etapy 1–3 czy 4–6?",
      cats: ["Etapy 1–3", "Etapy 4–6"],
      why: ["Etapy 1–3 to droga od świata do sygnału: energia na zewnątrz, komórka, która ją łapie, i zamiana na sygnał w tej komórce.",
        "Etapy 4–6 to praca układu nerwowego: kod w neuronach, składanie przedmiotów i rozpoznanie. Tu trafiają wpływy odgórne i strzałki wstecz."],
      items: [
        ["światło odbite od kubka leci do oka", 0, "To energia dostępna dla zmysłu, czyli bodziec fizyczny (etap 1)."],
        ["czopki i pręciki w siatkówce", 0, "To receptory, czyli etap 2."],
        ["zamiana światła na sygnał elektrochemiczny", 0, "To transdukcja, etap 3. Zachodzi w receptorze."],
        ["fala dźwiękowa dociera do ucha", 0, "Energia dostępna dla zmysłu to etap 1."],
        ["komórki rzęsate zamieniają drgania na impulsy", 0, "Zamiana energii na sygnał to transdukcja, etap 3."],
        ["energia lub zdarzenie dostępne dla zmysłu", 0, "Definicja bodźca fizycznego, etap 1."],
        ["wzór aktywności grupy neuronów", 1, "To kodowanie neuronalne, etap 4."],
        ["krawędzie i kolory składają się w przedmiot", 1, "To organizacja percepcyjna, etap 5."],
        ["„to mój kubek z herbatą”", 1, "Kategoria i znaczenie to rozpoznanie, etap 6."],
        ["przedmiot oddzielony od tła, jeszcze bez nazwy", 1, "Obiekt bez nazwy to organizacja percepcyjna, etap 5."],
        ["tu trafiają wpływy odgórne", 1, "Przerywane strzałki z ramki „kontekst, cele, pamięć, oczekiwania” trafiają w etapy 4–6."],
        ["tu są strzałki wstecz (pętla neuronalna)", 1, "Sprzężenia neuronalne są między etapami 4, 5 i 6."],
        ["rozpoznajesz twarz: „to mama”", 1, "Osoba to wynik rozpoznania, etap 6."],
        ["stąd wychodzi strzałka do działania", 1, "Do działania prowadzą strzałki z organizacji (5) i z rozpoznania (6)."]] },
    { id: "kierunek", title: "Oddolne czy odgórne?", sub: "Co buduje spostrzeżenie: dane czy głowa?",
      cats: ["Oddolne (bottom-up)", "Odgórne (top-down)"],
      why: ["Cecha samego bodźca buduje spostrzeżenie od dołu.", "To pochodzi z twojej głowy (wiedza, oczekiwania, cele, pamięć, kultura) i podpowiada z góry."],
      items: [
        ["kolor", 0], ["kształt", 0], ["dźwięk", 0], ["lokalizacja", 0], ["ruch", 0], ["jasność plamy", 0],
        ["jaskrawy punkt sam przyciąga wzrok", 0, "Wzrok przyciąga cecha bodźca (kolor na tle), a nie twoje oczekiwania."],
        ["wiedza", 1], ["oczekiwania", 1], ["cele", 1], ["pamięć", 1], ["kultura", 1],
        ["kontekst sytuacji", 1, "Na schemacie etapów kontekst stoi w ramce wpływów odgórnych, razem z celami, pamięcią i oczekiwaniami."],
        ["„widzisz” tramwaj, na który czekasz", 1, "Oczekiwanie z głowy zmienia to, co widzisz."]] },
    { id: "bodziec", title: "Dystalny czy proksymalny?", sub: "Rzecz w świecie czy energia na receptorze?",
      cats: ["Dystalny", "Proksymalny"],
      why: ["Rzecz albo zdarzenie w świecie, czyli źródło bodźca.", "Energia, która już dotarła do receptorów: światło na siatkówce, fala na błonie, cząsteczki w nosie, nacisk na skórze."],
      items: [
        ["drzewo za oknem", 0], ["obraz drzewa na siatkówce", 1], ["dzwon na wieży", 0], ["fala dźwiękowa na błonie bębenkowej", 1],
        ["jabłko na stole", 0], ["cząsteczki zapachu w nosie", 1], ["litera A na tablicy", 0], ["odwrócone A na siatkówce", 1],
        ["samochód na ulicy", 0], ["wzorzec światła na fotoreceptorach", 1], ["kwiat w ogrodzie", 0], ["nacisk filiżanki na opuszki palców", 1]] },
    { id: "nurt", title: "Behawioryzm czy psychologia poznawcza?", sub: "Do którego nurtu to pasuje?",
      cats: ["Behawioryzm", "Psychologia poznawcza"],
      why: ["Behawioryzm patrzy tylko na sytuację i zachowanie, bez „środka”.", "Psychologia poznawcza dodaje środek: procesy poznawcze, umysł i mózg, zmienne latentne."],
      items: [
        ["sytuacja → zachowanie", 0], ["liczy się tylko to, co da się zaobserwować", 0], ["zachowanie jako reakcja na sytuację", 0],
        ["„wywalił się” według wykładu", 0, "Tak wykład podsumował behawioryzm: bez zmiennych latentnych się nie dało."],
        ["sytuacja → procesy poznawcze → zachowanie", 1], ["zmienne latentne", 1],
        ["umysł i mózg (mind and brain)", 1], ["reprezentacje poznawcze", 1],
        ["analogia z ciemną materią", 1, "Analogia uzasadnia zakładanie niewidocznych procesów, czyli podejście poznawcze."],
        ["świadomość jako temat badań", 1, "Behawioryzm pomijał świadomość, a psychologia poznawcza ją bada."]] }
  ],

  minimum: [
    ["Czym zajmuje się psychologia poznawcza", "Umysłem, w trzech obszarach: <b>reprezentacje poznawcze</b> (stany umysłu niosące informację), <b>procesy poznawcze</b> (jak informacja jest przetwarzana w czasie), <b>świadomość</b> (kiedy to staje się treścią doświadczenia)."],
    ["Behawioryzm a psychologia poznawcza", "Behawioryzm: <b>sytuacja → zachowanie</b>. Psychologia poznawcza: <b>sytuacja → procesy poznawcze (umysł i mózg) → zachowanie</b>. Bez zmiennych latentnych się nie da."],
    ["Trzy główne problemy", "<b>Stymulacja</b> (co dociera) → <b>percepcja</b> (jak to interpretujemy) → <b>uwaga</b> (co dostaje priorytet)."],
    ["Rodzaje procesów poznawczych", "Percepcja i uwaga (najbardziej podstawowe), uczenie się, pamięć, język, myślenie, podejmowanie decyzji, kontrola poznawcza; obok świadomość. W górę rośnie złożoność i zakres integracji."],
    ["Po co percepcja", "Żeby <b>przeżyć i przekazać geny</b> → trzeba się <b>adaptować</b> → to wymaga <b>interakcji</b> → a ta <b>orientacji</b> i <b>rozpoznawania zagrożeń i możliwości</b>."],
    ["Problem odwrotny", "Mózg nie widzi świata, dostaje <b>impulsy elektryczne</b> i musi <b>wnioskować o ich przyczynach</b>. <b>Różne przyczyny dają ten sam sygnał</b> (duży i daleko = mały i blisko). Pomagają kontekst, wiedza, dodatkowe wskazówki."],
    ["Od bodźca do spostrzeżenia", "<b>1 bodziec fizyczny → 2 receptor → 3 transdukcja (w receptorze)</b>: od świata do sygnału. <b>4 kodowanie neuronalne → 5 organizacja percepcyjna → 6 rozpoznanie</b>: od sygnału do znaczenia. <b>Wpływy odgórne</b> (kontekst, cele, pamięć, oczekiwania) trafiają w etapy 4–6. <b>Pętla neuronalna</b>: strzałki wstecz 4 ⇄ 5 ⇄ 6. <b>Pętla sensoryczno-ruchowa</b>: z 5 i 6 do działania (także bez pełnego rozpoznania), które zmienia dostępną stymulację i wraca do etapu 1."],
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
    { q: "Dlaczego możesz zareagować, zanim wiesz na co?",
      a: "Na schemacie „od bodźca do spostrzeżenia” strzałka do działania wychodzi już z organizacji percepcyjnej (etap 5), a nie dopiero z rozpoznania (etap 6). Dlatego działanie może nastąpić „także bez pełnego świadomego rozpoznania”: łapiesz spadający kubek, zanim pomyślisz „kubek”. ★ Pasuje to do koncepcji Milnera i Goodale’a: w mózgu są dwie drogi wzrokowe, jedna służy rozpoznawaniu („co to jest”), druga sterowaniu ruchem („jak to złapać”).",
      link: "Możliwe, że wróci przy percepcji wzrokowej (wykłady 3–4)." },
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
    intro: "★ Pomoc pamięciowa spoza wykładu: pierwsze litery etapów to B-R-T-K-O-R. Pierwsze trzy słowa to droga od świata do sygnału, ostatnie trzy to praca mózgu.",
    ordered: true,
    items: [
      ["Bodziec fizyczny", "Babcia"], ["Receptor", "Robi"], ["Transdukcja", "Twarożek,"],
      ["Kodowanie neuronalne", "Kot"], ["Organizacja percepcyjna", "Ogląda"], ["Rozpoznanie", "Radośnie."]
    ]
  },

  table: {
    title: "Od bodźca do spostrzeżenia: ściąga",
    head: ["Etap", "Co się dzieje (slajd)", "Przykład: kubek"],
    rows: [
      ["1. Bodziec fizyczny", "energia lub zdarzenie dostępne dla zmysłu", "światło odbite od kubka leci do oka"],
      ["2. Receptor", "wyspecjalizowana komórka lub zakończenie nerwowe", "czopki i pręciki w siatkówce łapią to światło"],
      ["3. Transdukcja", "energia fizyczna → sygnał elektrochemiczny; zachodzi w receptorze", "światło zamienia się w „język” układu nerwowego"],
      ["4. Kodowanie neuronalne", "wzorce aktywności neuronów i populacji", "kubek zapisany jako wzór strzelających neuronów"],
      ["5. Organizacja percepcyjna", "cechy → powierzchnie, obiekty i zdarzenia", "„jest tu jeden okrągły przedmiot z uchem”"],
      ["6. Rozpoznanie", "kategoria, obiekt, osoba lub znaczenie", "„to mój kubek z herbatą”"]
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
      "<div class='plain'><p><b>W jednym zdaniu:</b> światło (albo dźwięk, zapach) trafia do wyspecjalizowanej komórki, ta tłumaczy je na sygnał elektrochemiczny, układ nerwowy zapisuje go jako wzór aktywności neuronów, składa z niego przedmioty i na końcu rozpoznaje, co to jest. Po drodze pomaga mu to, co już wiesz, a ty sam ruszasz się, żeby zobaczyć lepiej.</p></div>" +
      "<p>Slajd nazywa się „Od bodźca do spostrzeżenia. Etapy analizy oraz dwie pętle zwrotne: neuronalna i sensoryczno-ruchowa”. Najłatwiej podzielić go na dwie połowy po trzy etapy.</p>" +
      "<h3>Krok po kroku na jednym przykładzie</h3>" +
      "<p>Wchodzisz do kuchni, a na stole stoi kubek. <i>(Przykład z kubkiem to ilustracja, nazwy i opisy etapów są ze slajdu.)</i></p>" +
      "<p><b>Etapy 1–3: od świata do sygnału</b></p>" +
      "<ol class='walk'>" +
      "<li><b>Bodziec fizyczny</b><span class='where'>gdzie: w świecie</span><span>Slajd: <i>energia lub zdarzenie dostępne dla zmysłu</i>. Światło odbija się od kubka i leci do oka. W tobie jeszcze nic się nie dzieje.</span><span class='chk'>czy to już jest w tobie? Nie, to energia na zewnątrz.</span></li>" +
      "<li><b>Receptor</b><span class='where'>gdzie: w narządzie zmysłu</span><span>Slajd: <i>wyspecjalizowana komórka lub zakończenie nerwowe</i>. Światło pada na czopki i pręciki w siatkówce. Reagują na światło, ale nie na dźwięk: każdy receptor ma swój rodzaj energii.</span><span class='chk'>receptor to KTO czy CO? KTO: komórka.</span></li>" +
      "<li><b>Transdukcja</b><span class='where'>gdzie: w receptorze</span><span>Slajd: <i>energia fizyczna → sygnał elektrochemiczny, zachodzi w receptorze</i>. Czopki i pręciki zamieniają światło na sygnał. Od tej chwili informacja jest w „języku” układu nerwowego.</span><span class='chk'>gdzie zachodzi transdukcja? W receptorze, nie w mózgu.</span></li>" +
      "</ol>" +
      "<p><b>Etapy 4–6: od sygnału do znaczenia</b></p>" +
      "<ol class='walk' start='4' style='counter-reset: w 3'>" +
      "<li><b>Kodowanie neuronalne</b><span class='where'>gdzie: w neuronach</span><span>Slajd: <i>wzorce aktywności neuronów i populacji</i>. Kubek to teraz wzór: które neurony strzelają, jak często i w jakich grupach. „Kubka” jeszcze nie ma, jest kod.</span><span class='chk'>czy mózg już wie, że to kubek? Jeszcze nie.</span></li>" +
      "<li><b>Organizacja percepcyjna</b><span class='where'>gdzie: w mózgu</span><span>Slajd: <i>cechy → powierzchnie, obiekty i zdarzenia</i>. Z krawędzi, koloru i kształtu powstaje całość: jeden okrągły przedmiot z uchem, oddzielony od blatu. Wiesz, że coś tam jest, ale nie wiesz jeszcze co.</span><span class='chk'>co jest wejściem, a co wyjściem? Cechy wchodzą, obiekty wychodzą.</span></li>" +
      "<li><b>Rozpoznanie</b><span class='where'>gdzie: w mózgu, z pomocą pamięci</span><span>Slajd: <i>kategoria, obiekt, osoba lub znaczenie</i>. „To mój kubek z herbatą”: kategoria (kubek), konkretny obiekt (mój), znaczenie (można się napić, gorące).</span><span class='chk'>wymień cztery możliwe wyniki rozpoznania: kategoria, obiekt, osoba, znaczenie.</span></li>" +
      "</ol>" +
      "<h3>Co dzieje się z boku i wstecz</h3>" +
      "<div class='loops'>" +
      "<div class='lp-g'><p><b>Wpływy odgórne: kontekst, cele, pamięć, oczekiwania.</b> Na slajdzie to ramka nad schematem z przerywanymi strzałkami do <b>etapów 4, 5 i 6</b>. W kuchni spodziewasz się kubka (oczekiwania), znasz swój kubek (pamięć), chcesz się napić (cele), jesteś w kuchni, a nie w lesie (kontekst). To przyspiesza rozpoznanie, ale czasem prowadzi na manowce. Na etapy 1–3 strzałki odgórne nie idą: światło leci do oka tak samo, czego byś się nie spodziewał.</p></div>" +
      "<div><p><b>Pętla neuronalna: strzałki wstecz.</b> Między kodowaniem, organizacją i rozpoznaniem strzałki biegną w obie strony (4 ⇄ 5 ⇄ 6). Legenda slajdu: strzałki wstecz to sprzężenia neuronalne. Wyższe etapy odsyłają informację niższym, np. gdy już wiesz, że to twój kubek, łatwiej „domknąć” jego kształt, choć ucho zasłania ręka.</p></div>" +
      "<div><p><b>Pętla sensoryczno-ruchowa: działanie.</b> Z organizacji (5) i z rozpoznania (6) wychodzą strzałki do <b>działania</b>. Działanie <b>zmienia dostępną stymulację</b>, np. ruch oczu, podejście, dotknięcie przedmiotu, więc do zmysłów trafia nowy bodziec i proces startuje od etapu 1. Podchodzisz i bierzesz kubek do ręki, żeby sprawdzić, czy gorący.</p></div>" +
      "<div><p><b>Działanie także bez pełnego świadomego rozpoznania.</b> Skoro strzałka do działania wychodzi już z etapu 5, możesz zareagować, zanim wiesz, na co: odsuwasz rękę od czegoś, co się przewraca, zanim pomyślisz „to kubek”.</p></div>" +
      "</div>" +
      "<h3>Pary, które łatwo pomylić</h3>" +
      "<div class='pairs-x'>" +
      "<div><b>Receptor czy transdukcja?</b>Receptor to komórka (KTO). Transdukcja to zamiana energii na sygnał (CO ROBI). Transdukcja zachodzi w receptorze, ale na schemacie to dwa etapy: 2 i 3.</div>" +
      "<div><b>Kodowanie czy organizacja?</b>Kodowanie to zapis w aktywności neuronów, jeszcze bez „rzeczy”. Organizacja to składanie cech w powierzchnie, obiekty i zdarzenia.</div>" +
      "<div><b>Organizacja czy rozpoznanie?</b>Organizacja: „jest tu jakiś przedmiot”. Rozpoznanie: „to kubek”, „to mama”.</div>" +
      "<div><b>Pętla neuronalna czy sensoryczno-ruchowa?</b>Neuronalna dzieje się w układzie nerwowym (strzałki wstecz między 4, 5 i 6). Sensoryczno-ruchowa idzie przez ciało: działanie zmienia bodziec i wraca do etapu 1.</div>" +
      "<div><b>Wpływy odgórne czy pętla neuronalna?</b>Wpływy odgórne przychodzą z ramki nad schematem (kontekst, cele, pamięć, oczekiwania). Pętla neuronalna to strzałki wstecz między samymi etapami.</div>" +
      "</div>" +
      "<p>Pełna ściąga w tabeli niżej, a zdanie do zapamiętania kolejności w sekcji ★.</p>" },
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
