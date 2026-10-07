/* Moduł: Logika (praktyczna), wykład 1: Semiotyka i charakterystyka języka.
 *
 * Źródła: slajdy „Uwagi wprowadzające oraz definicja semiotyki” i „Semiotyczna
 * charakterystyka języka” oraz konspekt prowadzącej dla psychologów 2025/2026
 * (rozdziały I–III).
 *
 *   "S" slajd albo konspekt prowadzącej (domyślne, pomijane)
 *   "K" definicja do zapamiętania słowo w słowo (pada w pytaniach teoretycznych)
 *   "D" dopowiedzenie spoza materiałów (★). Egzamin próbny je pomija.
 *
 * Typ ćwiczenia "multi": zaznacz wszystkie poprawne. a[] = poprawne, o[] = pozostałe opcje.
 */
Wykuj.registerModule({
  id: "lg-w1",
  course: { id: "lg", name: "Logika", short: "LOG", theme: "teal", icon: "chat" },
  number: 1,
  title: "Semiotyka: język i znak",
  official: "Uwagi wprowadzające, semiotyka, semiotyczna charakterystyka języka",
  lecturer: "Agnieszka Lekka-Kowalik",
  term: "KUL · Katedra Metodologii Nauk · konspekt dla psychologii",
  passing: null,
  examNote: "Prawdziwy egzamin to 8 zadań praktycznych i część ustna (szczegóły w „Jak zdać logikę”). Ten test sprawdza teorię z wykładu 1.",
  passRatio: 0.5,
  sourceNames: { S: "slajdy i konspekt prowadzącej", K: "definicja słowo w słowo", D: "★ dopowiedzenie spoza materiałów" },

  sets: {
    dzial: { label: "Który dział semiotyki?", items: ["Syntaktyka", "Semantyka", "Pragmatyka"] },
    regula: { label: "Jaka to reguła?", items: ["Syntaktyczna", "Semantyczna", "Pragmatyczna"] },
    geneza: { label: "Jaki to znak?", items: ["Naturalny", "Konwencjonalny", "Ikoniczny"] },
    badania: { label: "Jakie to badania nad językiem?", items: ["Humanistyczne", "Formalne", "Filozoficzne", "Przyrodnicze"] },
    funkcja: { label: "Jaka to funkcja języka?", items: ["Poznawcza (deskryptywna)", "Ekspresywna", "Ewokatywna", "Perswazyjna", "Dyrektywna", "Performatywna", "Interrogatywna", "Estymatywna", "Fatyczna", "Ludyczna", "Integrująca / dzieląca"] },
    szczegolny: { label: "Jaki to szczególny typ znaku?", items: ["Symptom", "Oznaka", "Ślad", "Indeks", "Hasło"] },
    poziom: { label: "Na jakim poziomie mówimy?", items: ["Język przedmiotowy", "Metajęzyk"] }
  },

  units: [
    { id: "logika", title: "Po co ta logika?", sub: "Narzędzie, trzy działy, cele zajęć", icon: "spark" },
    { id: "przedmiot", title: "Przedmiot materialny i formalny", sub: "Co badamy i z jakiej strony", icon: "target" },
    { id: "badania", title: "Kto bada język?", sub: "Cztery typy badań, Cambridge i Oxford", icon: "split" },
    { id: "semiotyka", title: "Definicja semiotyki", sub: "Do wykucia, z objaśnieniem słowo po słowie", icon: "star" },
    { id: "dzialy", title: "Syntaktyka, semantyka, pragmatyka", sub: "Znak–znak, znak–świat, znak–człowiek", icon: "pairs" },
    { id: "jezyk", title: "Język i znak", sub: "Definicje i relacja trójczłonowa", icon: "chat" },
    { id: "znaki", title: "Rodzaje znaków", sub: "Naturalne, konwencjonalne, ikoniczne i inne", icon: "eye" },
    { id: "reguly", title: "Reguły używania znaków", sub: "Syntaktyczne, semantyczne, pragmatyczne", icon: "wall" },
    { id: "funkcje", title: "Funkcje języka", sub: "Zwłaszcza performatywna (pytanie z egzaminu)", icon: "bolt" },
    { id: "typy", title: "Typy języków", sub: "W tym język przedmiotowy i metajęzyk", icon: "book" },
    { id: "mix", title: "Rozpoznaj w praktyce", sub: "Zadania jak z kartki egzaminacyjnej", icon: "dice" },
    { id: "boss", title: "Test końcowy", sub: "Wszystko z wykładu 1, 15 pytań", icon: "crown", boss: true }
  ],

  concepts: [
    { id: "logika", u: "logika", term: "Logika",
      plain: "Narzędzie do porządnego myślenia i mówienia: żeby nie robić błędów i wyłapywać cudze, także manipulację.",
      def: "Logika jest narzędziem poprawnego myślenia i mówienia.", sh: "narzędzie poprawnego myślenia i mówienia" },
    { id: "dzialy-logiki", u: "logika", term: "Działy logiki ogólnej",
      plain: "Trzy części: o języku (semiotyka), o wynikaniu jednych zdań z drugich (logika formalna) i o tym, jak się robi naukę (metodologia).",
      def: "Tradycyjnie: semiotyka logiczna (teoria języka rozumianego jako system znaków), logika formalna (teoria wynikania), metodologia nauk (teoria procedur badawczych i ich wytworów).",
      sh: "semiotyka, logika formalna, metodologia nauk" },
    { id: "kultura", u: "logika", term: "Kultura logiczna",
      plain: "Znasz podstawowe pojęcia logiki i w praktyce myślisz jasno, argumentujesz, sprawdzasz cudze argumenty i widzisz manipulację.",
      def: "Cel zajęć: opanowanie podstawowej aparatury pojęciowej logiki ogólnej oraz sprawność w jasnym, ścisłym i uporządkowanym myśleniu i wypowiadaniu myśli, argumentowaniu, kontrolowaniu poprawności argumentów, dostrzeganiu zabiegów manipulacyjnych.",
      sh: "pojęcia logiki + sprawność myślenia i argumentacji" },
    { id: "p-materialny", u: "przedmiot", term: "Przedmiot materialny",
      plain: "CO badamy, wzięte w całości, ze wszystkim, co to ma.",
      def: "Wyznaczony przedmiot badań, wzięty w całym uposażeniu.", sh: "przedmiot badań wzięty w całości" },
    { id: "p-formalny", u: "przedmiot", term: "Przedmiot formalny",
      plain: "Z JAKIEJ STRONY to badamy. Ten sam człowiek to dla anatoma ciało, a dla psychologa psychika.",
      def: "Przedmiot materialny rozpatrywany z pewnego punktu widzenia.", sh: "przedmiot widziany z pewnego punktu widzenia" },
    { id: "problemy", u: "przedmiot", term: "Problem przedmiotowy i metaprzedmiotowy",
      plain: "Przedmiotowy pyta o świat („czy wieloryb jest ssakiem?”). Metaprzedmiotowy pyta o poglądy na świat („co Arystoteles sądził o wielorybach?”).",
      def: "Problem przedmiotowy dotyczy rzeczywistości (świata); metaprzedmiotowy dotyczy poglądów na rzeczywistość.",
      sh: "pytanie o świat / o poglądy na świat" },
    { id: "b-hum", u: "badania", term: "Badania humanistyczne nad językiem",
      plain: "Język jako coś, co ludzie stworzyli i czego używają. Tu mieści się też psychologia.",
      def: "Język jako twór człowieka: historia języka, lingwistyka, filologie, psychologia, socjologia, etnolingwistyka.",
      sh: "język jako twór człowieka" },
    { id: "b-form", u: "badania", term: "Badania formalne nad językiem",
      plain: "Język jak mechanizm: z jakich części się składa i jak one działają. Tu mieści się semiotyka.",
      def: "Język jako struktura: logika formalna, semiotyka, teoria informacji, teoria komunikacji, cybernetyka.",
      sh: "język jako struktura" },
    { id: "b-fil", u: "badania", term: "Badania filozoficzne nad językiem",
      plain: "Czym w ogóle jest język? Czy tylko opisuje świat (filozofia klasyczna), czy współtworzy to, jak go poznajemy (filozofia współczesna)?",
      def: "Język jako byt szczególnego rodzaju. Filozofia klasyczna: język bierny w poznaniu (Platon, Arystoteles, Krąpiec, Gilson). Filozofia współczesna: język współtworzy poznanie.",
      sh: "język jako byt szczególnego rodzaju" },
    { id: "b-przyr", u: "badania", term: "Badania przyrodnicze nad językiem",
      plain: "Język jako dźwięki i praca narządów mowy.",
      def: "Język jako zjawisko przyrodnicze: akustyka, fonetyka, fizjologia mowy, logopedia.",
      sh: "język jako zjawisko przyrodnicze" },
    { id: "szkoly", u: "badania", term: "Szkoła języka idealnego i potocznego",
      plain: "Cambridge chciała języka idealnego, precyzyjnego jak wzór. Oxford badała zwykły, codzienny język. Wittgenstein jest w obu: wczesny (I) w szkole języka idealnego, późny (II) w szkole języka potocznego.",
      def: "Szkoła języka idealnego (Cambridge): Frege, Russell, Wittgenstein I, Salamucha. Szkoła języka potocznego (Oxford): Ayer, Wittgenstein II, Strawson, Searle, Austin.",
      sh: "Cambridge: język idealny / Oxford: potoczny" },
    { id: "semiotyka", u: "semiotyka", s: "K", term: "Semiotyka",
      plain: "Logiczna teoria języka. Traktuje język jak system znaków i sprawdza, jak dobrze nadaje się do poznawania świata i porozumiewania się.",
      def: "Semiotyka to ogólna, formalna (logiczna) teoria języka rozumianego jako system znakowy, która zajmuje się językiem w aspekcie jego racjonalności i sprawności w aktach poznania i komunikowania.",
      sh: "ogólna, formalna teoria języka jako systemu znaków" },
    { id: "sem-elementy", u: "semiotyka", term: "Semiotyka: ogólna, formalna, teoria",
      plain: "Ogólna: szuka tego, co ma każdy język. Formalna: patrzy na budowę wyrażeń, nie na ich treść. Teoria: uporządkowany zbiór twierdzeń, który opisuje i wyjaśnia język.",
      def: "Ogólna: poszukuje konstytutywnych własności języka jako takiego. Formalna: nie interesuje się treścią wyrażeń, ale ich strukturą. Teoria: uporządkowany logicznie i rzeczowo zbiór twierdzeń opisujący i wyjaśniający język.",
      sh: "cechy każdego języka; budowa, nie treść" },
    { id: "sem-przedmiot", u: "semiotyka", s: "K", term: "Przedmiot materialny i formalny semiotyki",
      plain: "CO bada: język. JAK na niego patrzy: jak na system znaków, którym ludzie poznają świat i się porozumiewają.",
      def: "Przedmiot materialny: język. Przedmiot formalny: język jako system znaków, będący narzędziem poznania i komunikowania się.",
      sh: "język / język jako system znaków do poznania i komunikacji" },
    { id: "syntaktyka", u: "dzialy", term: "Syntaktyka",
      plain: "Znak ↔ znak. Bada język „od środka”: jak wyrażenia łączą się ze sobą i co z czego wynika.",
      def: "Bada język „od wewnątrz”: własności i funkcje elementów języka oraz relacje między nimi. Pojęcia: kategorie syntaktyczne, wynikanie, zastępowanie, dowodzenie, tekst, system.",
      sh: "relacje znak – znak" },
    { id: "semantyka", u: "dzialy", term: "Semantyka",
      plain: "Znak ↔ świat. O czym jest dane słowo i kiedy zdanie jest prawdziwe.",
      def: "Bada relacje między znakami językowymi a światem pozajęzykowym. Pojęcia: prawda (Tarski 1933), oznaczanie, denotowanie, desygnowanie, supozycja, model.",
      sh: "relacje znak – świat" },
    { id: "pragmatyka", u: "dzialy", term: "Pragmatyka",
      plain: "Znak ↔ człowiek. Kto mówi, do kogo, po co i jak to rozumie.",
      def: "Bada relacje między znakiem a użytkownikiem znaku (twórca, nadawca, odbiorca). Pojęcia: znaczenie, rozumienie, wyrażanie, komunikowanie, asercja.",
      sh: "relacje znak – użytkownik" },
    { id: "jezyk", u: "jezyk", s: "K", term: "Język (definicja semiotyczna)",
      plain: "Słownik plus reguły, jak go używać. Służy grupie ludzi do poznawania świata i porozumiewania się.",
      def: "Język jest zbiorem znaków formalnych scharakteryzowanych możliwie jednoznacznie za pomocą reguł używania i służącym grupie ludzi do poznania i komunikowania się.",
      sh: "znaki formalne + reguły, do poznania i komunikacji" },
    { id: "struktura", u: "jezyk", term: "Struktura formalna języka",
      plain: "Język = słownik + reguły.",
      def: "J = {zbiór znaków formalnych, czyli słownik; reguły użycia}.", sh: "J = {słownik, reguły}" },
    { id: "znak", u: "jezyk", s: "K", term: "Znak",
      plain: "Coś, co widzisz albo słyszysz, a co naprowadza cię na coś innego niż ono samo. Dym naprowadza na ogień.",
      def: "Znak to coś podpadającego pod zmysły (zawsze istnieje substrat materialny znaku), przy pomocy czego ktoś (użytkownik znaku) dochodzi do poznania czegoś innego niż ów znak (bytu oznaczanego przez znak).",
      sh: "coś zmysłowego, co prowadzi do poznania czegoś innego" },
    { id: "trojczlonowa", u: "jezyk", term: "Znak jako relacja trójczłonowa",
      plain: "Zawsze trzy elementy: znak, to, co oznacza, i ktoś, kto go odczytuje.",
      def: "Z punktu widzenia semiotyki znak to relacja trójczłonowa: coś jest znakiem czegoś dla kogoś.", sh: "coś – czegoś – dla kogoś" },
    { id: "naturalny", u: "znaki", term: "Znak naturalny",
      plain: "Nikt go nie ustalał, natura sama go „zrobiła”.",
      def: "Znak i przedmiot oznaczany są powiązane relacjami naturalnymi (przyczynowo-skutkowymi, współwystępowania), np. dym i ogień.",
      sh: "powiązany z przedmiotem naturalnie" },
    { id: "konwencjonalny", u: "znaki", term: "Znak konwencjonalny",
      plain: "Ludzie umówili się, że coś znaczy.",
      def: "Relację między znakiem a przedmiotem oznaczanym ustanawia ludzka interwencja, np. czarna opaska i śmierć bliskiej osoby.",
      sh: "znaczenie ustalone przez ludzi" },
    { id: "ikoniczny", u: "znaki", term: "Znak ikoniczny",
      plain: "Umowny, ale wygląda jak to, co oznacza.",
      def: "Ustanawiany jak konwencjonalny, ale konwencja opiera się na podobieństwie znaku do przedmiotu, np. makieta, mapa, zdjęcie.",
      sh: "umowny, oparty na podobieństwie" },
    { id: "instrumentalny", u: "znaki", term: "Znak instrumentalny",
      plain: "Najpierw musisz go zauważyć jako rzecz, dopiero potem odczytujesz, co znaczy. Ślad na śniegu.",
      def: "Pełni funkcję znaku, o ile sam zostanie poznany (np. ślady).", sh: "działa, gdy sam zostanie poznany" },
    { id: "formalny", u: "znaki", term: "Znak formalny",
      plain: "Nie zatrzymujesz się na nim, od razu myślisz o rzeczy. Czytając „kot”, myślisz o kocie, nie o literach.",
      def: "Odnosi użytkownika wprost do przedmiotu oznaczanego (znaki językowe).", sh: "prowadzi wprost do przedmiotu" },
    { id: "natura", u: "znaki", term: "Natura znaku językowego",
      plain: "Ma budowę jak każdy znak, ale jest przezroczysty (patrzysz przez niego na rzecz) i wielopostaciowy (to samo słowo powiedziane, napisane czy wystukane).",
      def: "(a) ma taką samą strukturę jak inne znaki (nośnik materialny, relacja trójczłonowa); (b) jest przezroczysty: odnosi do przedmiotu, nie zatrzymując uwagi na sobie; (c) jest wielopostaciowy: może mieć różny nośnik materialny bez zmiany znaczenia.",
      sh: "przezroczysty i wielopostaciowy" },
    { id: "symptom", u: "znaki", term: "Symptom",
      plain: "Kawałek samego zjawiska, który je zdradza.",
      def: "Znak naturalny, który jest częścią właściwą zjawiska, np. wysypka.", sh: "część zjawiska, np. wysypka" },
    { id: "oznaka", u: "znaki", term: "Oznaka",
      plain: "Skutek, po którym poznajesz przyczynę.",
      def: "Znak naturalny powiązany przyczynowo-skutkowo z czymś innym, np. zamarzanie wody i temperatura poniżej 0.", sh: "skutek wskazujący przyczynę" },
    { id: "slad", u: "znaki", term: "Ślad",
      plain: "To, co zostało po czymś, co już zadziałało: odcisk buta, rysa.",
      def: "Znak naturalny: pozostałość po zadziałaniu przyczyny.", sh: "pozostałość po zadziałaniu przyczyny" },
    { id: "indeks", u: "znaki", term: "Indeks",
      plain: "Pozwala coś rozpoznać, ale nic o tym nie mówi, jak numer na koszulce.",
      def: "Znak konwencjonalny: pozwala identyfikować, ale nie charakteryzuje.", sh: "identyfikuje, ale nie charakteryzuje" },
    { id: "haslo", u: "znaki", term: "Hasło",
      plain: "Umówione słowo albo znak, po którym „swoi” się rozpoznają.",
      def: "Umowny znak rozpoznawczy.", sh: "umowny znak rozpoznawczy" },
    { id: "r-synt", u: "reguly", term: "Reguły syntaktyczne",
      plain: "Jak poprawnie składać wyrażenia i jak je przerabiać, żeby dalej były poprawne.",
      def: "Reguły składania (konstrukcji): budowanie wyrażeń złożonych; reguły przekształcania (transformacji): jak przekształcić wyrażenie poprawne, by wynik też był poprawny. Ciąg zbudowany zgodnie z nimi to wyrażenie syntaktycznie spójne.",
      sh: "jak składać i przekształcać wyrażenia" },
    { id: "r-sem", u: "reguly", term: "Reguły semantyczne",
      plain: "Do czego w świecie odnosi się dane słowo.",
      def: "Rządzą odnoszeniem się znaków do rzeczywistości pozajęzykowej.", sh: "jak znaki odnoszą się do świata" },
    { id: "r-prag", u: "reguly", term: "Reguły pragmatyczne",
      plain: "Co wypada powiedzieć, komu i w jakiej sytuacji.",
      def: "Rządzą używaniem wyrażeń w określonych sytuacjach (kontekstach), np. reguły grzecznego zwracania się do nieznajomych dorosłych.",
      sh: "jak używać wyrażeń w sytuacjach" },
    { id: "afekton", u: "reguly", term: "Afekton",
      plain: "Dosłownie bez sensu, ale w porządku, bo wyraża emocje.",
      def: "Wyrażenie niezgodne z regułami semantycznymi, ale pragmatycznie dopuszczalne ze względu na wyrażenie emocji.",
      sh: "semantycznie błędne, pragmatycznie OK" },
    { id: "f-pozn", u: "funkcje", term: "Funkcja poznawcza (deskryptywna)",
      plain: "Mówisz, jak jest: „pada deszcz”. Dla semiotyki logicznej najważniejsza.",
      def: "Za pomocą języka opisuje się stan rzeczy i stwierdza jego zachodzenie lub niezachodzenie w świecie pozajęzykowym.",
      sh: "opisuje, jak jest" },
    { id: "f-ekspr", u: "funkcje", term: "Funkcja ekspresywna",
      plain: "Pokazujesz, co TY czujesz.", def: "Wyrażenie stanów psychicznych nadawcy znaku.", sh: "stany psychiczne nadawcy" },
    { id: "f-ewok", u: "funkcje", term: "Funkcja ewokatywna",
      plain: "Chcesz, żeby ODBIORCA coś poczuł.", def: "Wywołanie przeżycia emocjonalnego u odbiorcy znaku.", sh: "przeżycie emocjonalne u odbiorcy" },
    { id: "f-pers", u: "funkcje", term: "Funkcja perswazyjna",
      plain: "Przekonujesz do czegoś.", def: "Skłonienie do jakiegoś działania czy przyjęcia jakiegoś poglądu.", sh: "skłanianie do działania lub poglądu" },
    { id: "f-dyr", u: "funkcje", term: "Funkcja dyrektywna",
      plain: "Wydajesz polecenie: „zamknij okno”.", def: "Wydawanie poleceń.", sh: "wydawanie poleceń" },
    { id: "f-perf", u: "funkcje", term: "Funkcja performatywna",
      plain: "Mówiąc, robisz. „Ogłaszam was mężem i żoną”, „otwieram posiedzenie”, „obiecuję”: samo wypowiedzenie sprawia, że to się dzieje.",
      def: "Spowodowanie stanu rzeczy, o którym mówi wyrażenie, przez samo wypowiedzenie tego wyrażenia.", sh: "wypowiedzenie samo tworzy stan rzeczy" },
    { id: "f-inter", u: "funkcje", term: "Funkcja interrogatywna",
      plain: "Pytasz.", def: "Zadawanie pytań.", sh: "zadawanie pytań" },
    { id: "f-estym", u: "funkcje", term: "Funkcja estymatywna",
      plain: "Oceniasz: „to świetny film”.", def: "Formułowanie ocen.", sh: "formułowanie ocen" },
    { id: "f-fat", u: "funkcje", term: "Funkcja fatyczna",
      plain: "Podtrzymujesz kontakt: „no”, „mhm”, „halo, słyszysz mnie?”, rozmowa o pogodzie.",
      def: "Podtrzymywanie kontaktu.", sh: "podtrzymywanie kontaktu" },
    { id: "f-integr", u: "funkcje", term: "Funkcja integrująca / dzieląca",
      plain: "Językiem dzielisz ludzi na „swoich” i „obcych”, np. slangiem czy żargonem.",
      def: "Przy pomocy języka można „podzielić” zebranych na „swoich” i „obcych”.", sh: "„swoi” i „obcy”" },
    { id: "j-geneza", u: "typy", term: "Języki naturalne, sztuczne, mieszane",
      plain: "Naturalne wyrosły same (polski), sztuczne zaprojektowano (Python), mieszane łączą jedno i drugie (esperanto).",
      def: "Naturalne rozwinęły się spontanicznie (języki etniczne); sztuczne mają zaprojektowany słownik i reguły (np. języki komputerowe); mieszane (np. esperanto).",
      sh: "spontaniczne / zaprojektowane / mieszane" },
    { id: "j-jednostka", u: "typy", term: "Najmniejsza jednostka języka",
      plain: "Czym „pisze się” język: obrazkami, pojęciami, sylabami czy literami.",
      def: "Języki obrazkowe, pojęciowe, sylabiczne, literowe (głoskowe).", sh: "obrazkowe, pojęciowe, sylabiczne, literowe" },
    { id: "j-funktory", u: "typy", term: "Języki ekstensjonalne i intensjonalne",
      plain: "Podział według spójników (funktorów) w języku. Funktory będą na kolejnych wykładach, na razie wystarczy nazwa.",
      def: "Podział ze względu na obecne w języku spójniki (funktory).", sh: "podział ze względu na funktory" },
    { id: "metajezyk", u: "typy", term: "Język przedmiotowy i metajęzyk",
      plain: "Mówisz o świecie („kot ma cztery łapy”) albo o słowach („„kot” jest rzeczownikiem”). Cudzysłów to sygnał metajęzyka.",
      def: "Język przedmiotowy: wyrażenia odnoszą się do świata (kot ma cztery łapy). Metajęzyk: wyrażenia odnoszą się do wyrażeń języka przedmiotowego („kot” jest rzeczownikiem).",
      sh: "mówienie o świecie / o wyrażeniach" }
  ],

  exercises: [
    /* ---------- Po co logika ---------- */
    { u: "logika", t: "mcq", q: "Czym według prowadzącej jest logika?",
      a: ["Narzędziem poprawnego myślenia i mówienia", "Nauką o historii języków", "Działem psychologii poznawczej", "Teorią dobrego wychowania"] },
    { u: "logika", t: "mcq", q: "Jakie są tradycyjne działy logiki ogólnej?",
      a: ["Semiotyka logiczna, logika formalna, metodologia nauk", "Syntaktyka, semantyka, pragmatyka", "Retoryka, erystyka, dialektyka", "Logika zdań, logika nazw, logika pytań"],
      x: "Uwaga na pułapkę: syntaktyka, semantyka i pragmatyka to działy SEMIOTYKI, a nie logiki ogólnej." },
    { u: "logika", t: "match", pairs: [
      ["Semiotyka logiczna", "teoria języka jako systemu znaków"], ["Logika formalna", "teoria wynikania"],
      ["Metodologia nauk", "teoria procedur badawczych i ich wytworów"]] },
    { u: "logika", t: "mcq", q: "Który dział logiki ogólnej to teoria wynikania?", a: ["Logika formalna", "Semiotyka logiczna", "Metodologia nauk", "Pragmatyka"] },
    { u: "logika", t: "cloze", q: "Celem zajęć jest kształcenie kultury ___.", a: ["logicznej", "językowej", "osobistej", "naukowej"] },
    { u: "logika", t: "tf", q: "Jednym z celów zajęć jest dostrzeganie zabiegów manipulacyjnych i radzenie sobie z nimi.", a: true },
    { u: "logika", t: "mcq", q: "Ile godzin trwa wykład, a ile ćwiczenia?", a: ["Wykład 10 h, ćwiczenia 15 h", "Wykład 15 h, ćwiczenia 10 h", "Wykład 30 h, ćwiczenia 30 h", "Po 15 h"] },
    { u: "logika", t: "type", q: "Teoria procedur badawczych oraz ich wytworów to metodologia…", a: ["nauk"] },

    /* ---------- Przedmiot materialny i formalny ---------- */
    { u: "przedmiot", t: "mcq", q: "Czym jest przedmiot materialny dyscypliny naukowej?",
      a: ["Wyznaczony przedmiot badań, wzięty w całym uposażeniu", "Przedmiot rozpatrywany z pewnego punktu widzenia",
          "Zbiór metod, którymi posługuje się nauka", "Pogląd naukowców na badany przedmiot"] },
    { u: "przedmiot", t: "mcq", q: "Czym jest przedmiot formalny dyscypliny naukowej?",
      a: ["Przedmiot materialny rozpatrywany z pewnego punktu widzenia", "Przedmiot badań wzięty w całym uposażeniu",
          "Fizyczny przedmiot, który można zmierzyć", "Formalna definicja nauki w ustawie"] },
    { u: "przedmiot", t: "match", pairs: [["Przedmiot materialny", "CO badamy, w całości"], ["Przedmiot formalny", "Z JAKIEJ STRONY badamy"]] },
    { u: "przedmiot", t: "mcq", s: "D", q: "Anatom i psycholog badają człowieka. Co mają wspólne, a czym się różnią?",
      a: ["Wspólny przedmiot materialny, różny formalny", "Wspólny przedmiot formalny, różny materialny", "Różnią się oboma przedmiotami", "Mają oba przedmioty wspólne"] },
    { u: "przedmiot", t: "mcq", q: "Czego dotyczy problem metaprzedmiotowy?", a: ["Poglądów na rzeczywistość", "Samej rzeczywistości", "Przedmiotu materialnego", "Budowy języka"] },
    { u: "przedmiot", t: "mcq", s: "D", q: "Które pytanie jest problemem metaprzedmiotowym?",
      a: ["Co Arystoteles sądził o duszy?", "Czy wieloryb jest ssakiem?", "Ile waży ludzki mózg?", "Czy dziś pada deszcz?"] },
    { u: "przedmiot", t: "tf", q: "Problem przedmiotowy dotyczy rzeczywistości, czyli świata.", a: true },

    /* ---------- Kto bada język ---------- */
    { u: "badania", t: "which", set: "badania", q: "Język jako twór człowieka: lingwistyka, filologie, psychologia, socjologia.", a: 1 },
    { u: "badania", t: "which", set: "badania", q: "Język jako struktura: logika formalna, semiotyka, teoria informacji, cybernetyka.", a: 2 },
    { u: "badania", t: "which", set: "badania", q: "Język jako byt szczególnego rodzaju; spór, czy język jest bierny w poznaniu.", a: 3 },
    { u: "badania", t: "which", set: "badania", q: "Język jako zjawisko przyrodnicze: akustyka, fonetyka, logopedia.", a: 4 },
    { u: "badania", t: "which", set: "badania", q: "Do tej grupy należy psychologia.", a: 1 },
    { u: "badania", t: "which", set: "badania", q: "Do tej grupy należy semiotyka.", a: 2 },
    { u: "badania", t: "mcq", q: "Jak filozofia klasyczna traktuje język w poznaniu?", a: ["Jako bierny", "Jako współtworzący poznanie", "Jako jedyne źródło poznania", "Jako przeszkodę w poznaniu"] },
    { u: "badania", t: "mcq", q: "Jak filozofia współczesna traktuje język w poznaniu?", a: ["Jako współtworzący poznanie", "Jako bierny", "Jako zbędny", "Jako czysto biologiczny"] },
    { u: "badania", t: "mcq", q: "Z którym ośrodkiem związana jest szkoła języka idealnego?", a: ["Cambridge", "Oxford", "Lwów", "Wiedeń"] },
    { u: "badania", t: "sort", q: "Cambridge czy Oxford?", cats: ["Cambridge (język idealny)", "Oxford (język potoczny)"], items: [
      ["Frege", 0], ["Russell", 0], ["Wittgenstein I", 0], ["Salamucha", 0], ["Austin", 1], ["Searle", 1], ["Wittgenstein II", 1]] },
    { u: "badania", t: "mcq", q: "Który filozof występuje w obu szkołach (jako I i II)?", a: ["Wittgenstein", "Russell", "Austin", "Frege"] },

    /* ---------- Definicja semiotyki ---------- */
    { u: "semiotyka", t: "mcq", s: "K", q: "Która definicja semiotyki jest poprawna?",
      a: ["Ogólna, formalna teoria języka jako systemu znakowego, w aspekcie racjonalności i sprawności w poznaniu i komunikowaniu",
          "Nauka o historii i rozwoju języków etnicznych, w aspekcie ich zmian w czasie",
          "Teoria wynikania logicznego, w aspekcie poprawności formalnej wnioskowań",
          "Psychologiczna teoria rozumienia wypowiedzi, w aspekcie przeżyć nadawcy i odbiorcy"] },
    { u: "semiotyka", t: "cloze", s: "K", q: "Semiotyka to ogólna, formalna (logiczna) teoria języka rozumianego jako system ___.", a: ["znakowy", "dźwiękowy", "społeczny", "pojęciowy"] },
    { u: "semiotyka", t: "cloze", s: "K", q: "…która zajmuje się językiem w aspekcie jego racjonalności i ___ w aktach poznania i komunikowania.", a: ["sprawności", "piękna", "historii", "poprawności gramatycznej"] },
    { u: "semiotyka", t: "mcq", q: "Co znaczy, że semiotyka jest „formalna”?", a: ["Nie interesuje się treścią wyrażeń, ale ich strukturą", "Posługuje się wyłącznie wzorami matematycznymi", "Jest oficjalnie uznana przez uczelnie", "Bada tylko języki sztuczne"] },
    { u: "semiotyka", t: "mcq", q: "Co znaczy, że semiotyka jest „ogólna”?", a: ["Poszukuje konstytutywnych własności języka jako takiego", "Bada wszystkie języki świata po kolei", "Jest łatwa i dla wszystkich", "Nie ma ścisłej metody"] },
    { u: "semiotyka", t: "mcq", s: "K", q: "Co jest przedmiotem materialnym semiotyki?", a: ["Język", "Język jako system znaków", "Znak drogowy", "Mowa ciała"] },
    { u: "semiotyka", t: "mcq", s: "K", q: "Co jest przedmiotem formalnym semiotyki?",
      a: ["Język jako system znaków, będący narzędziem poznania i komunikowania się", "Język wzięty w całym uposażeniu",
          "Dźwięki mowy i praca narządów mowy", "Historia powstawania języków"] },
    { u: "semiotyka", t: "tf", q: "Semiotyka jest teorią, czyli uporządkowanym logicznie i rzeczowo zbiorem twierdzeń, który opisuje i wyjaśnia język.", a: true },
    { u: "semiotyka", t: "tf", q: "Semiotyka traktuje język jako coś uporządkowanego, w czym da się wskazać elementy i relacje między nimi.", a: true },
    { u: "semiotyka", t: "type", q: "Ogólna, formalna teoria języka jako systemu znakowego to…", a: ["semiotyka"] },

    /* ---------- Działy semiotyki ---------- */
    { u: "dzialy", t: "match", pairs: [["Syntaktyka", "znak – znak"], ["Semantyka", "znak – świat"], ["Pragmatyka", "znak – użytkownik"]] },
    { u: "dzialy", t: "which", set: "dzial", q: "Bada język „od wewnątrz”: elementy języka i relacje między nimi.", a: 1 },
    { u: "dzialy", t: "which", set: "dzial", q: "Bada relacje między znakami a światem pozajęzykowym.", a: 2 },
    { u: "dzialy", t: "which", set: "dzial", q: "Bada relacje między znakiem a twórcą, nadawcą i odbiorcą.", a: 3 },
    { u: "dzialy", t: "which", set: "dzial", q: "Główne pojęcia: prawda, oznaczanie, denotowanie, desygnowanie, supozycja, model.", a: 2 },
    { u: "dzialy", t: "which", set: "dzial", q: "Główne pojęcia: znaczenie, rozumienie, wyrażanie, komunikowanie, asercja.", a: 3 },
    { u: "dzialy", t: "which", set: "dzial", q: "Główne pojęcia: kategorie syntaktyczne, wynikanie, zastępowanie, dowodzenie.", a: 1 },
    { u: "dzialy", t: "which", set: "dzial", q: "Do tego działu należy pojęcie prawdy (Tarski 1933).", a: 2 },
    { u: "dzialy", t: "which", set: "dzial", q: "Do tego działu należy wynikanie.", a: 1 },
    { u: "dzialy", t: "which", set: "dzial", q: "Do tego działu należy znaczenie.", a: 3,
      x: "Pułapka: intuicja podpowiada semantykę, ale w konspekcie „znaczenie” to główne pojęcie pragmatyki." },
    { u: "dzialy", t: "mcq", q: "Kto i kiedy sformułował pojęcie prawdy wymieniane w semantyce?", a: ["Tarski, 1933", "Frege, 1892", "Arystoteles, IV w. p.n.e.", "Austin, 1962"] },
    { u: "dzialy", t: "tf", q: "Syntaktyka, semantyka i pragmatyka to działy logiki ogólnej.", a: false,
      x: "To działy semiotyki. Działy logiki ogólnej to semiotyka logiczna, logika formalna i metodologia nauk." },

    /* ---------- Język i znak ---------- */
    { u: "jezyk", t: "mcq", s: "K", q: "Jak brzmi semiotyczna definicja języka?",
      a: ["Zbiór znaków formalnych scharakteryzowanych możliwie jednoznacznie regułami używania, służący grupie ludzi do poznania i komunikowania się",
          "Zbiór dźwięków wydawanych przez narządy mowy, służący jednostce do wyrażania emocji",
          "Zbiór wszystkich słów zapisanych w słowniku danego narodu, bez względu na reguły ich użycia",
          "Zbiór znaków naturalnych, którymi przyroda informuje człowieka o swoich stanach"] },
    { u: "jezyk", t: "mcq", q: "Jak zapisuje się formalną strukturę języka?", a: ["J = {słownik (zbiór znaków formalnych), reguły użycia}", "J = {nadawca, odbiorca}", "J = {dźwięki, litery}", "J = {syntaktyka, semantyka}"] },
    { u: "jezyk", t: "cloze", s: "K", q: "Język jest zbiorem znaków ___ scharakteryzowanych możliwie jednoznacznie za pomocą reguł używania.", a: ["formalnych", "naturalnych", "ikonicznych", "instrumentalnych"] },
    { u: "jezyk", t: "mcq", s: "K", q: "Jak brzmi definicja znaku?",
      a: ["Coś podpadającego pod zmysły, przy pomocy czego ktoś dochodzi do poznania czegoś innego niż ów znak",
          "Coś niematerialnego, co istnieje tylko w umyśle użytkownika języka",
          "Każdy dźwięk wydany przez człowieka, niezależnie od tego, czy coś oznacza",
          "Umowny symbol ustalony przez autorytet, obowiązujący wszystkich ludzi"] },
    { u: "jezyk", t: "tf", q: "Każdy znak ma substrat (nośnik) materialny.", a: true },
    { u: "jezyk", t: "type", q: "Z punktu widzenia semiotyki znak to relacja…", a: ["trójczłonowa", "trojczlonowa"] },
    { u: "jezyk", t: "cloze", q: "Znak to relacja trójczłonowa: coś jest znakiem czegoś ___.", a: ["dla kogoś", "zawsze", "w świecie", "przez coś"] },
    { u: "jezyk", t: "mcq", q: "Kto w definicji znaku „dochodzi do poznania czegoś innego”?", a: ["Użytkownik znaku", "Przedmiot oznaczany", "Nośnik materialny", "Autor słownika"] },

    /* ---------- Rodzaje znaków ---------- */
    { u: "znaki", t: "which", set: "geneza", q: "Dym jako znak ognia.", a: 1 },
    { u: "znaki", t: "which", set: "geneza", q: "Czarna opaska jako znak żałoby.", a: 2 },
    { u: "znaki", t: "which", set: "geneza", q: "Mapa, makieta, zdjęcie.", a: 3 },
    { u: "znaki", t: "which", set: "geneza", q: "Związek ze znaczonym przedmiotem jest przyczynowo-skutkowy albo polega na współwystępowaniu.", a: 1 },
    { u: "znaki", t: "which", set: "geneza", q: "Ustanowiony jak konwencjonalny, ale oparty na podobieństwie.", a: 3 },
    { u: "znaki", t: "mcq", q: "Ze względu na co dzielimy znaki na naturalne, konwencjonalne i ikoniczne?", a: ["Na genezę", "Na stosunek do świadomości użytkownika", "Na najmniejszą jednostkę", "Na poziom mówienia"] },
    { u: "znaki", t: "mcq", q: "Ze względu na co dzielimy znaki na instrumentalne i formalne?", a: ["Na stosunek znaku do świadomości użytkownika", "Na genezę", "Na liczbę użytkowników", "Na rodzaj nośnika"] },
    { u: "znaki", t: "mcq", q: "Znak, który pełni funkcję znaku, o ile sam zostanie poznany, to znak…", a: ["instrumentalny", "formalny", "ikoniczny", "przezroczysty"] },
    { u: "znaki", t: "mcq", q: "Do jakiej grupy należą znaki językowe?", a: ["Formalnych", "Instrumentalnych", "Naturalnych", "Ikonicznych"] },
    { u: "znaki", t: "mcq", q: "Co znaczy, że znak językowy jest „przezroczysty”?",
      a: ["Odnosi do przedmiotu, nie zatrzymując uwagi na sobie", "Ma jedno, jasne znaczenie", "Jest niewidoczny", "Każdy go rozumie"] },
    { u: "znaki", t: "mcq", q: "Co znaczy, że znak językowy jest „wielopostaciowy”?",
      a: ["Może mieć różny nośnik materialny bez zmiany znaczenia", "Ma wiele znaczeń naraz", "Występuje w wielu językach", "Zmienia znaczenie w zależności od nastroju"] },
    { u: "znaki", t: "which", set: "szczegolny", q: "Wysypka jako część choroby.", a: 1 },
    { u: "znaki", t: "which", set: "szczegolny", q: "Zamarzanie wody jako znak temperatury poniżej zera.", a: 2 },
    { u: "znaki", t: "which", set: "szczegolny", q: "Pozostałość po zadziałaniu przyczyny.", a: 3 },
    { u: "znaki", t: "which", set: "szczegolny", q: "Znak konwencjonalny, który pozwala identyfikować, ale nie charakteryzuje.", a: 4 },
    { u: "znaki", t: "which", set: "szczegolny", q: "Umowny znak rozpoznawczy.", a: 5 },
    { u: "znaki", t: "match", pairs: [["Symptom", "część zjawiska (wysypka)"], ["Oznaka", "skutek wskazujący przyczynę"], ["Ślad", "pozostałość po przyczynie"], ["Indeks", "identyfikuje, nie opisuje"]] },

    /* ---------- Reguły ---------- */
    { u: "reguly", t: "which", set: "regula", q: "Mówi, jak budować wyrażenia złożone.", a: 1 },
    { u: "reguly", t: "which", set: "regula", q: "Mówi, jak przekształcić wyrażenie poprawne, żeby wynik też był poprawny.", a: 1 },
    { u: "reguly", t: "which", set: "regula", q: "Rządzi odnoszeniem się znaków do rzeczywistości pozajęzykowej.", a: 2 },
    { u: "reguly", t: "which", set: "regula", q: "Rządzi używaniem wyrażeń w określonych sytuacjach.", a: 3 },
    { u: "reguly", t: "which", set: "regula", q: "Do nieznajomej dorosłej osoby mówimy „proszę pani”, a nie „ty”.", a: 3 },
    { u: "reguly", t: "which", set: "regula", s: "D", q: "Słowa „kot” używamy na zwierzęta pewnego gatunku, a nie na psy.", a: 2 },
    { u: "reguly", t: "which", set: "regula", s: "D", q: "„Kot śpi” jest poprawne, a „śpi kot się na” już nie.", a: 1 },
    { u: "reguly", t: "mcq", q: "Jakie dwa rodzaje reguł syntaktycznych wyróżnia się?", a: ["Składania (konstrukcji) i przekształcania (transformacji)", "Znaczenia i użycia", "Pisania i mówienia", "Nadawania i odbioru"] },
    { u: "reguly", t: "type", q: "Ciąg znaków zbudowany zgodnie z regułami syntaktycznymi to wyrażenie syntaktycznie…", a: ["spójne"] },
    { u: "reguly", t: "mcq", q: "Czym jest afekton?",
      a: ["Wyrażeniem niezgodnym z regułami semantycznymi, ale pragmatycznie dopuszczalnym, bo wyraża emocje",
          "Wyrażeniem zgodnym z regułami semantycznymi, ale niegrzecznym w danej sytuacji",
          "Błędem składniowym, który zmienia sens całego zdania",
          "Znakiem naturalnym, który wywołuje silne emocje"] },
    { u: "reguly", t: "tf", s: "D", q: "„Zabiję cię, jak jeszcze raz się spóźnisz!” powiedziane do przyjaciela może być afektonem.", a: true,
      x: "Dosłownie to groźba, ale w tej sytuacji wyraża tylko emocje: semantycznie „nie tak”, pragmatycznie dopuszczalne." },
    { u: "reguly", t: "multi", q: "Jakie są rodzaje reguł używania znaków językowych?", a: ["syntaktyczne", "semantyczne", "pragmatyczne"], o: ["performatywne", "ikoniczne", "metajęzykowe"] },

    /* ---------- Funkcje języka ---------- */
    { u: "funkcje", t: "which", set: "funkcja", q: "„Ogłaszam was mężem i żoną.”", a: 6 },
    { u: "funkcje", t: "which", set: "funkcja", q: "„Otwieram posiedzenie rady wydziału.”", a: 6 },
    { u: "funkcje", t: "which", set: "funkcja", q: "„Zamknij okno.”", a: 5 },
    { u: "funkcje", t: "which", set: "funkcja", q: "„Lublin leży nad Bystrzycą.”", a: 1 },
    { u: "funkcje", t: "which", set: "funkcja", q: "„Kup u nas, nie pożałujesz!”", a: 4 },
    { u: "funkcje", t: "which", set: "funkcja", q: "„Mhm… no… słyszysz mnie jeszcze?”", a: 9 },
    { u: "funkcje", t: "which", set: "funkcja", q: "„To najlepszy film tego roku.”", a: 8 },
    { u: "funkcje", t: "which", set: "funkcja", q: "„Która jest godzina?”", a: 7 },
    { u: "funkcje", t: "which", set: "funkcja", q: "Wyrażenie stanów psychicznych nadawcy.", a: 2 },
    { u: "funkcje", t: "which", set: "funkcja", q: "Wywołanie przeżycia emocjonalnego u odbiorcy.", a: 3 },
    { u: "funkcje", t: "which", set: "funkcja", q: "Spowodowanie stanu rzeczy przez samo wypowiedzenie wyrażenia.", a: 6 },
    { u: "funkcje", t: "which", set: "funkcja", q: "Podział zebranych na „swoich” i „obcych”.", a: 11 },
    { u: "funkcje", t: "mcq", q: "Która funkcja języka jest najważniejsza z punktu widzenia semiotyki logicznej?",
      a: ["Poznawcza", "Ekspresywna", "Performatywna", "Perswazyjna"],
      x: "Bo semiotyka to teoria języka jako narzędzia poznania i komunikowania wyników poznawczych." },
    { u: "funkcje", t: "mcq", q: "„Jak mogłeś mi to zrobić?!” wygląda jak pytanie. Jakiej funkcji NIE pełni?",
      a: ["Interrogatywnej (to nie jest prawdziwe pytanie)", "Ekspresywnej", "Oceniającej", "Emotywnej"],
      x: "Slajd: gramatycznie to pytanie, ale funkcjonalnie wyraża emocje i ocenę. Struktura gramatyczna nie zawsze odzwierciedla funkcję." },
    { u: "funkcje", t: "tf", q: "Wyrażenie często pełni więcej niż jedną funkcję naraz.", a: true },
    { u: "funkcje", t: "tf", q: "Struktura gramatyczna wyrażenia zawsze pokazuje jego funkcję.", a: false, x: "Slajd: struktura gramatyczna nie zawsze odzwierciedla funkcje." },
    { u: "funkcje", t: "multi", q: "Jakie 3 funkcje pełni wyrażenie: „Zupełnie się tego po tobie nie spodziewałam!”?",
      a: ["ekspresywna", "ewokatywna", "informatywna"], o: ["performatywna", "dyrektywna", "fatyczna"],
      x: "Wyraża stan nadawcy (ekspresywna), ma poruszyć odbiorcę (ewokatywna) i informuje, że nadawca się tego nie spodziewał (informatywna). Zadanie z przykładowej kartki." },
    { u: "funkcje", t: "multi", q: "Jakie funkcje pełni wyrażenie: „Mam cię serdecznie dość!”?",
      a: ["ekspresywna", "ewokatywna", "informatywna"], o: ["performatywna", "interrogatywna", "ludyczna"],
      x: "Zadanie z przykładowej kartki. Wyrażenie pokazuje emocje nadawcy, ma wywołać reakcję odbiorcy i niesie informację o stosunku nadawcy." },
    { u: "funkcje", t: "mcq", s: "D", q: "Które wyrażenie pełni funkcję performatywną?",
      a: ["„Obiecuję, że jutro oddam ci książkę.”", "„Wczoraj obiecałem, że oddam książkę.”", "„Czy oddasz mi książkę?”", "„Ta książka jest świetna.”"],
      x: "„Obiecuję” w 1. osobie czasu teraźniejszego samo jest aktem obietnicy. Relacja „obiecałem” już tylko opisuje." },
    { u: "funkcje", t: "cloze", q: "Funkcja ___ to wywołanie przeżycia emocjonalnego u odbiorcy.", a: ["ewokatywna", "ekspresywna", "estymatywna", "fatyczna"] },
    { u: "funkcje", t: "cloze", q: "Funkcja ___ to wyrażenie stanów psychicznych nadawcy.", a: ["ekspresywna", "ewokatywna", "dyrektywna", "perswazyjna"] },

    /* ---------- Typy języków ---------- */
    { u: "typy", t: "mcq", q: "Jak dzielimy języki ze względu na genezę?", a: ["Naturalne, sztuczne, mieszane", "Przedmiotowe i metajęzyki", "Ekstensjonalne i intensjonalne", "Obrazkowe i literowe"] },
    { u: "typy", t: "mcq", q: "Języki komputerowe to języki…", a: ["sztuczne", "naturalne", "mieszane", "obrazkowe"] },
    { u: "typy", t: "mcq", q: "Według slajdu przykładem języka mieszanego jest…", a: ["esperanto", "łacina", "Python", "polski język migowy"] },
    { u: "typy", t: "mcq", q: "Ze względu na co dzielimy języki na ekstensjonalne i intensjonalne?", a: ["Na obecne w języku spójniki (funktory)", "Na genezę", "Na najmniejszą jednostkę", "Na liczbę użytkowników"] },
    { u: "typy", t: "multi", q: "Jakie typy języków wyróżnia się ze względu na najmniejszą jednostkę językową?", a: ["obrazkowe", "pojęciowe", "sylabiczne", "literowe"], o: ["intensjonalne", "mieszane"] },
    { u: "typy", t: "which", set: "poziom", q: "Kot ma cztery łapy.", a: 1 },
    { u: "typy", t: "which", set: "poziom", q: "„Kot” jest rzeczownikiem.", a: 2 },
    { u: "typy", t: "which", set: "poziom", q: "„Mysz” to sylaba.", a: 2 },
    { u: "typy", t: "which", set: "poziom", q: "Zdanie „pada deszcz” jest prawdziwe.", a: 2, x: "Mówimy o zdaniu (wyrażeniu), a nie o deszczu, więc to metajęzyk." },
    { u: "typy", t: "mcq", q: "Jaki błąd popełniono: „Mysz gryzie książkę, mysz to sylaba, a więc sylaba gryzie książkę”?",
      a: ["Pomieszanie poziomów języka", "Błędne koło", "Ekwiwokacja", "Fałszywy dylemat"],
      x: "Pierwsze zdanie mówi o zwierzęciu (język przedmiotowy), drugie o słowie „mysz” (metajęzyk). Zadanie z przykładowej kartki." },
    { u: "typy", t: "type", q: "Język, w którym mówimy o wyrażeniach innego języka, to…", a: ["metajęzyk", "metajezyk"] },

    /* ---------- Rozpoznaj w praktyce ---------- */
    { u: "mix", t: "which", set: "dzial", q: "Sprawdzasz, czy zdanie „Wieloryb jest rybą” jest prawdziwe.", a: 2 },
    { u: "mix", t: "which", set: "dzial", q: "Zastanawiasz się, dlaczego szef powiedział „ciekawy pomysł” takim tonem.", a: 3 },
    { u: "mix", t: "which", set: "dzial", q: "Sprawdzasz, czy z dwóch przesłanek wynika wniosek.", a: 1 },
    { u: "mix", t: "which", set: "geneza", q: "Czerwone światło na skrzyżowaniu.", a: 2 },
    { u: "mix", t: "which", set: "geneza", q: "Gorączka jako znak infekcji.", a: 1 },
    { u: "mix", t: "which", set: "geneza", q: "Ikona kosza na pulpicie komputera.", a: 3 },
    { u: "mix", t: "which", set: "funkcja", q: "Kapitan: „Nadaję temu statkowi imię «Dar Pomorza».”", a: 6 },
    { u: "mix", t: "which", set: "funkcja", q: "Dowcip opowiedziany na imprezie dla rozbawienia znajomych.", a: 10 },
    { u: "mix", t: "which", set: "funkcja", q: "Uczniowie mówią swoim slangiem, żeby nauczyciel ich nie zrozumiał.", a: 11 },
    { u: "mix", t: "which", set: "badania", q: "Logopeda bada, jak dziecko wymawia głoskę „r”.", a: 4 },
    { u: "mix", t: "which", set: "badania", q: "Psycholog bada, jak dzieci uczą się mówić.", a: 1 },
    { u: "mix", t: "mcq", q: "Czy w zdaniu „„Ogień” jest rzeczownikiem” słowo „ogień” coś parzy?",
      a: ["Nie: tu mówimy o słowie, nie o ogniu (metajęzyk)", "Tak: ogień zawsze parzy", "Tylko w języku naturalnym", "To zależy od kontekstu pragmatycznego"] }
  ],

  sortDecks: [
    { id: "poziom", title: "O świecie czy o słowach?", sub: "Język przedmiotowy czy metajęzyk",
      cats: ["Język przedmiotowy", "Metajęzyk"], items: [
        ["Kot ma cztery łapy.", 0], ["„Kot” jest rzeczownikiem.", 1], ["„Kot” ma trzy litery.", 1], ["Warszawa leży nad Wisłą.", 0],
        ["„Warszawa” zaczyna się na W.", 1], ["Mysz gryzie książkę.", 0], ["„Mysz” to sylaba.", 1], ["Słowo „logika” pochodzi z greki.", 1],
        ["Logika jest narzędziem poprawnego myślenia.", 0], ["Ogień parzy.", 0], ["„Ogień” jest rodzaju męskiego.", 1],
        ["Zdanie „pada deszcz” jest prawdziwe.", 1], ["Pada deszcz.", 0], ["Wyraz „zamek” jest wieloznaczny.", 1]] },
    { id: "geneza", title: "Naturalny czy konwencjonalny?", sub: "Znaki według genezy (ikoniczne pomijamy)",
      cats: ["Naturalny", "Konwencjonalny"], items: [
        ["dym jako znak ognia", 0], ["czarna opaska jako znak żałoby", 1], ["wysypka przy chorobie", 0], ["ślady na śniegu", 0],
        ["czerwone światło na skrzyżowaniu", 1], ["gorączka przy infekcji", 0], ["obrączka na palcu", 1], ["zamarzanie wody", 0],
        ["flaga państwowa", 1], ["umówione hasło", 1], ["numer na koszulce zawodnika", 1], ["ciemne chmury przed burzą", 0],
        ["skinienie głową na „tak”", 1], ["mokry asfalt po deszczu", 0]] },
    { id: "funkcja", title: "Poznawcza czy pozapoznawcza?", sub: "Czy wyrażenie po prostu opisuje świat?",
      cats: ["Poznawcza", "Pozapoznawcza"], items: [
        ["Woda wrze w 100°C pod normalnym ciśnieniem.", 0], ["Ogłaszam przerwę.", 1], ["Zamknij drzwi!", 1], ["Dzień dobry, co słychać?", 1],
        ["Lublin leży nad Bystrzycą.", 0], ["Ale piękny zachód słońca!", 1], ["Kot śpi na kanapie.", 0], ["Kupuj tylko u nas!", 1],
        ["Która godzina?", 1], ["Obiecuję, że oddam.", 1], ["Ziemia krąży wokół Słońca.", 0], ["Jesteś najlepsza!", 1],
        ["W sali siedzi 30 osób.", 0], ["Jak mogłeś mi to zrobić?!", 1]] }
  ],

  minimum: [
    ["Czym jest logika i jakie ma działy", "Logika to <b>narzędzie poprawnego myślenia i mówienia</b>. Działy logiki ogólnej: <b>semiotyka logiczna</b> (język), <b>logika formalna</b> (wynikanie), <b>metodologia nauk</b> (procedury badawcze)."],
    ["Przedmiot materialny i formalny", "<b>Materialny</b>: przedmiot badań wzięty w całym uposażeniu (CO). <b>Formalny</b>: ten przedmiot z pewnego punktu widzenia (JAK). Semiotyka: materialny to <b>język</b>, formalny to <b>język jako system znaków, narzędzie poznania i komunikowania</b>. To pytanie teoretyczne z listy."],
    ["Definicja semiotyki (do wykucia)", "<b>Ogólna, formalna (logiczna) teoria języka rozumianego jako system znakowy</b>, zajmująca się językiem w aspekcie jego <b>racjonalności i sprawności</b> w aktach poznania i komunikowania."],
    ["Działy semiotyki", "<b>Syntaktyka</b>: znak–znak (wynikanie, kategorie syntaktyczne). <b>Semantyka</b>: znak–świat (prawda, oznaczanie, denotowanie, supozycja). <b>Pragmatyka</b>: znak–użytkownik (znaczenie, rozumienie, asercja). Uwaga: „znaczenie” jest w pragmatyce."],
    ["Definicja języka", "<b>Zbiór znaków formalnych</b> scharakteryzowanych możliwie jednoznacznie <b>regułami używania</b>, służący grupie ludzi <b>do poznania i komunikowania się</b>. Skrót: J = {słownik, reguły}."],
    ["Definicja znaku", "<b>Coś podpadającego pod zmysły</b> (zawsze z nośnikiem materialnym), przy pomocy czego <b>ktoś dochodzi do poznania czegoś innego</b>. Relacja trójczłonowa: <b>coś jest znakiem czegoś dla kogoś</b>."],
    ["Rodzaje znaków", "Geneza: <b>naturalne</b> (dym–ogień), <b>konwencjonalne</b> (czarna opaska), <b>ikoniczne</b> (mapa, zdjęcie). Stosunek do świadomości: <b>instrumentalne</b> (ślady) i <b>formalne</b> (słowa). Znak językowy jest <b>przezroczysty i wielopostaciowy</b>."],
    ["Reguły używania znaków (z przykładami!)", "<b>Syntaktyczne</b>: składania i przekształcania. <b>Semantyczne</b>: odnoszenie znaków do świata. <b>Pragmatyczne</b>: użycie w sytuacji (grzeczne zwracanie się do nieznajomych). Afekton: łamie semantykę, ale pragmatycznie OK. To pytanie teoretyczne z listy."],
    ["Funkcje języka (zwłaszcza performatywna)", "<b>Poznawcza</b> (opis świata, najważniejsza dla logiki) i <b>pozapoznawcze</b>: ekspresywna (nadawca), ewokatywna (odbiorca), perswazyjna, dyrektywna, <b>performatywna</b> (wypowiedzenie samo tworzy stan rzeczy: „ogłaszam”, „obiecuję”), interrogatywna, estymatywna, fatyczna, ludyczna, integrująca. Wyrażenie zwykle pełni kilka funkcji naraz."],
    ["Język przedmiotowy a metajęzyk", "Przedmiotowy mówi o świecie (kot ma cztery łapy), metajęzyk o wyrażeniach („kot” jest rzeczownikiem). Pomylenie poziomów to błąd: „mysz to sylaba, więc sylaba gryzie książkę”."]
  ],

  story: {
    title: "Ściąga: trzy działy semiotyki na jednym przykładzie",
    intro: "★ Pomoc pamięciowa spoza materiałów. Jedno zdanie, trzy pytania:",
    ordered: true,
    items: [
      ["Syntaktyka", "„Ala ma kota” jest poprawnie zbudowane, a „kota Ala ma ma” nie. Znak ↔ znak."],
      ["Semantyka", "Zdanie „Ala ma kota” jest prawdziwe, jeśli Ala naprawdę ma kota. Znak ↔ świat."],
      ["Pragmatyka", "Ala mówi to sąsiadce, która właśnie pyta o myszy w piwnicy, i chodzi jej o to, że myszy zaraz znikną. Znak ↔ człowiek."]
    ]
  },

  table: {
    title: "Rodzaje znaków w pigułce",
    head: ["Podział", "Rodzaj", "Na czym polega", "Przykład z materiałów"],
    rows: [
      ["geneza", "naturalny", "związek przyczynowo-skutkowy lub współwystępowanie", "dym – ogień"],
      ["geneza", "konwencjonalny", "związek ustanowiony przez ludzi", "czarna opaska – żałoba"],
      ["geneza", "ikoniczny", "konwencja oparta na podobieństwie", "makieta, mapa, zdjęcie"],
      ["stosunek do świadomości", "instrumentalny", "działa, o ile sam zostanie poznany", "ślady"],
      ["stosunek do świadomości", "formalny", "odsyła wprost do przedmiotu", "znaki językowe"],
      ["szczególny", "symptom", "część właściwa zjawiska", "wysypka"],
      ["szczególny", "oznaka", "związek przyczynowo-skutkowy", "zamarzanie wody – mróz"],
      ["szczególny", "ślad", "pozostałość po zadziałaniu przyczyny", "odcisk"],
      ["szczególny", "indeks", "identyfikuje, nie charakteryzuje", "(konwencjonalny)"],
      ["szczególny", "hasło", "umowny znak rozpoznawczy", "—"]
    ]
  },

  notes: [
    { id: "l1", n: 1, title: "Po co logika", html:
      "<div class='plain'><p>Logika to skrzynka z narzędziami do myślenia i mówienia. Na tym kursie ma się przydać w praktyce: jasno mówić, dobrze argumentować i nie dać się zmanipulować.</p></div>" +
      "<p>Logika jest <b>narzędziem poprawnego myślenia i mówienia</b>.</p>" +
      "<p><b>Działy logiki ogólnej</b> (tradycyjnie):</p><ul><li><b>semiotyka logiczna</b>: teoria języka rozumianego jako system znaków,</li>" +
      "<li><b>logika formalna</b>: teoria wynikania,</li><li><b>metodologia nauk</b>: teoria procedur badawczych i ich wytworów.</li></ul>" +
      "<p><b>Cele zajęć:</b> kultura logiczna (podstawowa aparatura pojęciowa logiki ogólnej), jasne, ścisłe i uporządkowane myślenie i mówienie, argumentowanie, kontrola poprawności argumentów, dostrzeganie manipulacji i radzenie sobie z nią.</p>" +
      "<p>Kurs: wykład 10 h + ćwiczenia 15 h.</p>" },
    { id: "l2", n: 2, title: "Przedmiot materialny i formalny", html:
      "<div class='plain'><p>Każda nauka ma CO bada (przedmiot materialny) i Z JAKIEJ STRONY to bada (przedmiot formalny). Anatom i psycholog badają tego samego człowieka, ale każdy od innej strony.</p></div>" +
      "<ul><li><b>Materialny</b>: wyznaczony przedmiot badań, wzięty w całym uposażeniu.</li><li><b>Formalny</b>: przedmiot materialny rozpatrywany z pewnego punktu widzenia.</li></ul>" +
      "<p><b>Problem przedmiotowy</b> dotyczy rzeczywistości (świata); <b>metaprzedmiotowy</b> dotyczy poglądów na rzeczywistość.</p>" },
    { id: "l3", n: 3, title: "Kto bada język", html:
      "<div class='plain'><p>Język badają cztery rodziny nauk, każda patrzy na niego inaczej. Logika i semiotyka są wśród badań formalnych.</p></div>" +
      "<ul><li><b>humanistyczne</b> (język jako twór człowieka): historia języka, lingwistyka, filologie, psychologia, socjologia, etnolingwistyka;</li>" +
      "<li><b>formalne</b> (język jako struktura): logika formalna, semiotyka, teoria informacji, teoria komunikacji, cybernetyka;</li>" +
      "<li><b>filozoficzne</b> (język jako byt szczególnego rodzaju): filozofia klasyczna uważa język za <b>bierny</b> w poznaniu (Platon, Arystoteles, Krąpiec, Gilson); filozofia współczesna za <b>współtworzący</b> poznanie: szkoła języka idealnego (Cambridge: Frege, Russell, Wittgenstein I, Salamucha) i szkoła języka potocznego (Oxford: Ayer, Wittgenstein II, Strawson, Searle, Austin);</li>" +
      "<li><b>przyrodnicze</b> (język jako zjawisko przyrodnicze): akustyka, fonetyka, fizjologia mowy, logopedia.</li></ul>" },
    { id: "l4", n: 4, title: "Definicja semiotyki", html:
      "<div class='plain'><p>Semiotyka to logiczna teoria języka. Patrzy na język jak na system znaków i sprawdza, jak dobrze służy do poznawania świata i porozumiewania się.</p></div>" +
      "<div class='key'><p>Semiotyka to ogólna, formalna (logiczna) teoria języka rozumianego jako system znakowy, która zajmuje się językiem w aspekcie jego racjonalności i sprawności w aktach poznania i komunikowania.</p></div>" +
      "<p><b>Słowo po słowie:</b></p><ul><li><b>ogólna</b>: poszukuje konstytutywnych własności języka jako takiego;</li>" +
      "<li><b>formalna</b>: nie interesuje się treścią wyrażeń, tylko ich strukturą;</li>" +
      "<li><b>język jako system znakowy</b>: coś uporządkowanego, w czym wskażemy elementy i relacje między nimi oraz między systemem a otoczeniem;</li>" +
      "<li><b>teoria</b>: uporządkowany logicznie i rzeczowo zbiór twierdzeń, który opisuje i wyjaśnia język;</li>" +
      "<li><b>racjonalność i sprawność w poznaniu i komunikowaniu</b>: język jako narzędzie.</li></ul>" +
      "<div class='key'><p>Przedmiot materialny semiotyki: język. Przedmiot formalny: język jako system znaków, będący narzędziem poznania i komunikowania się.</p></div>" },
    { id: "l5", n: 5, title: "Działy semiotyki", html:
      "<div class='plain'><p>Trzy relacje, trzy działy: jak znaki łączą się ze sobą, jak odnoszą się do świata i jak używają ich ludzie.</p></div>" +
      "<div class='tscroll'><table><thead><tr><th>Dział</th><th>Bada relację</th><th>Główne pojęcia</th></tr></thead><tbody>" +
      "<tr><th>Syntaktyka</th><td>znak – znak („od wewnątrz”): własności, funkcje elementów języka, relacje między nimi</td><td>kategorie syntaktyczne, wynikanie, zastępowanie, dowodzenie, tekst, system</td></tr>" +
      "<tr><th>Semantyka</th><td>znak – świat pozajęzykowy</td><td>prawda (Tarski 1933), oznaczanie, denotowanie, desygnowanie, supozycja, model</td></tr>" +
      "<tr><th>Pragmatyka</th><td>znak – użytkownik (twórca, nadawca, odbiorca)</td><td>znaczenie, rozumienie, wyrażanie, komunikowanie, asercja</td></tr>" +
      "</tbody></table></div>" },
    { id: "l6", n: 6, title: "Język i znak", html:
      "<div class='plain'><p>Język to słownik i reguły. Znak to coś, co widzisz lub słyszysz, a co naprowadza cię na coś innego. Zawsze ktoś musi go odczytać, dlatego znak ma trzy człony.</p></div>" +
      "<div class='key'><p>Język jest zbiorem znaków formalnych scharakteryzowanych możliwie jednoznacznie za pomocą reguł używania i służącym grupie ludzi do poznania i komunikowania się.</p></div>" +
      "<p>Struktura formalna: <b>J = {zbiór znaków formalnych, czyli słownik; reguły użycia}</b>.</p>" +
      "<div class='key'><p>Znak to coś podpadającego pod zmysły (zawsze istnieje substrat materialny znaku), przy pomocy czego ktoś (użytkownik znaku) dochodzi do poznania czegoś innego niż ów znak (bytu oznaczanego przez znak).</p></div>" +
      "<p>Dla semiotyki znak to <b>relacja trójczłonowa</b>: <b>coś jest znakiem czegoś dla kogoś</b>.</p>" },
    { id: "l7", n: 7, title: "Rodzaje znaków", html:
      "<div class='plain'><p>Znaki dzielimy na dwa sposoby: skąd się wzięły (natura czy umowa) i czy najpierw zauważasz sam znak, czy od razu rzecz. Słowa to znaki „przezroczyste”: czytając „kot”, myślisz o kocie, nie o literach.</p></div>" +
      "<p><b>Ze względu na genezę:</b> <b>naturalne</b> (związek przyczynowo-skutkowy lub współwystępowanie: dym i ogień), <b>konwencjonalne</b> (ustanowione przez ludzi: czarna opaska i śmierć bliskiej osoby), <b>ikoniczne</b> (ustanowione jak konwencjonalne, ale oparte na podobieństwie: makieta, mapa, zdjęcie).</p>" +
      "<p><b>Ze względu na stosunek do świadomości użytkownika:</b> <b>instrumentalne</b> (działają, o ile same zostaną poznane: ślady) i <b>formalne</b> (odsyłają wprost do przedmiotu: znaki językowe).</p>" +
      "<p><b>Natura znaku językowego:</b> (a) taka sama struktura jak inne znaki (nośnik materialny, relacja trójczłonowa); (b) <b>przezroczysty</b>; (c) <b>wielopostaciowy</b> (różne nośniki bez zmiany znaczenia).</p>" +
      "<p><b>Szczególne typy:</b> symptom (część zjawiska: wysypka), wskaźnik (współwystępuje, pozwala coś odkryć), oznaka (przyczynowo-skutkowo: zamarzanie wody i mróz), indeks (konwencjonalny, identyfikuje, nie charakteryzuje), hasło (umowny znak rozpoznawczy), ślad (pozostałość po zadziałaniu przyczyny), symbol. Konspekt wymienia też kod i sygnał.</p>" },
    { id: "l8", n: 8, title: "Reguły używania znaków", html:
      "<div class='plain'><p>Żeby porozumieć się językiem, trzeba znać trzy rodzaje reguł: jak składać słowa, do czego się odnoszą i co wypada powiedzieć w danej sytuacji. Na egzaminie to pytanie teoretyczne, więc przygotuj własne przykłady.</p></div>" +
      "<ul><li><b>syntaktyczne</b>: <b>składania</b> (konstrukcji: budowanie wyrażeń złożonych) i <b>przekształcania</b> (transformacji: jak przekształcić wyrażenie poprawne, by wynik też był poprawny). Ciąg zbudowany zgodnie z nimi to <b>wyrażenie syntaktycznie spójne</b>;</li>" +
      "<li><b>semantyczne</b>: rządzą odnoszeniem się znaków do rzeczywistości pozajęzykowej;</li>" +
      "<li><b>pragmatyczne</b>: rządzą używaniem wyrażeń w określonych sytuacjach, np. grzeczne zwracanie się do nieznajomych dorosłych.</li></ul>" +
      "<p><b>Afektony</b>: wyrażenia niezgodne z regułami semantycznymi, ale pragmatycznie dopuszczalne, bo wyrażają emocje.</p>" +
      "<aside class='extra'><p>Gotowe przykłady na ustny: syntaktyczna: „kot śpi” jest poprawne, „śpi kot się na” nie; semantyczna: „kot” nazywa koty, nie psy; pragmatyczna: do profesora „Dzień dobry, panie profesorze”, a nie „siema”; afekton: „zabiję cię, jak się spóźnisz” powiedziane do przyjaciela.</p></aside>" },
    { id: "l9", n: 9, title: "Funkcje języka", html:
      "<div class='plain'><p>Językiem nie tylko opisujemy świat. Wyrażamy uczucia, wydajemy polecenia, pytamy, oceniamy, a czasem samym mówieniem coś robimy („ogłaszam”, „obiecuję”). Jedno zdanie zwykle robi kilka z tych rzeczy naraz.</p></div>" +
      "<p><b>Poznawcza (deskryptywna)</b>: opis stanu rzeczy i stwierdzenie, że zachodzi lub nie. Z punktu widzenia semiotyki logicznej <b>najważniejsza</b>.</p>" +
      "<p><b>Pozapoznawcze</b>, np.: informatywna; <b>ekspresywna</b> (stany psychiczne nadawcy); <b>ewokatywna</b> (przeżycie emocjonalne u odbiorcy); <b>perswazyjna</b> (skłonienie do działania lub poglądu); <b>dyrektywna</b> (polecenia); <mark>performatywna</mark> (spowodowanie stanu rzeczy, o którym mówi wyrażenie, przez samo jego wypowiedzenie); <b>interrogatywna</b> (pytania); <b>estymatywna</b> (oceny); terapeutyczna; <b>ludyczna</b> (zabawianie); <b>fatyczna</b> (podtrzymywanie kontaktu); <b>integrująca/dzieląca</b> („swoi” i „obcy”).</p>" +
      "<p>Wyrażenia często pełnią <b>więcej niż jedną funkcję</b>, a <b>struktura gramatyczna nie zawsze odzwierciedla funkcję</b>: „Jak mogłeś mi to zrobić?!” wygląda jak pytanie, ale pełni funkcję ekspresywną, emotywną i oceniającą.</p>" +
      "<aside class='extra'><p>Performatyw rozpoznasz po tym, że zwykle jest w 1. osobie czasu teraźniejszego i da się dodać „niniejszym”: „niniejszym ogłaszam”, „niniejszym przepraszam”. „Obiecałem” to już tylko relacja, a nie performatyw.</p></aside>" },
    { id: "l10", n: 10, title: "Typy języków", html:
      "<div class='plain'><p>Języki dzielimy na cztery sposoby. Najważniejszy praktycznie jest ostatni: czy mówimy o świecie, czy o słowach. Pomylenie tych poziomów to klasyczne zadanie z kartki („mysz to sylaba”).</p></div>" +
      "<ul><li><b>geneza</b>: naturalne (spontaniczne, etniczne), sztuczne (zaprojektowane, np. komputerowe), mieszane (esperanto);</li>" +
      "<li><b>najmniejsza jednostka</b>: obrazkowe, pojęciowe, sylabiczne, literowe/głoskowe;</li>" +
      "<li><b>spójniki (funktory)</b>: ekstensjonalne i intensjonalne;</li>" +
      "<li><b>poziom mówienia</b>: <b>język przedmiotowy</b> (o świecie: kot ma cztery łapy) i <b>metajęzyk</b> (o wyrażeniach: „kot” jest rzeczownikiem).</li></ul>" +
      "<p>Konspekt przypomina też, że języki wymierają: Sercquiais z wyspy Sark ma już tylko trzech rodzimych użytkowników.</p>" }
  ]
});
