/* Ćwiczenia: Podstawy psychologii i historii myśli psychologicznej (mgr Natalia Wójcicka).
 * Zajęcia 5: lektura R. Hock, „40 prac badawczych…”, rozdz. 6 „Emocje i motywacja”
 * (s. 196–233): Masters i Johnson, Ekman i Friesen, Holmes i Rahe, Festinger i Carlsmith.
 * Na razie bez prezentacji z zajęć.
 *
 *   "S" lektura (domyślne)
 *   "D" dopowiedzenie spoza lektury (★). Kartkówka próbna je pomija.
 */
Wykuj.registerModule({
  id: "wj-z5",
  kind: "reading",
  course: { id: "wojcicka", name: "mgr Natalia Wójcicka", short: "Ćw. Wójcicka", groups: "Podstawy psychologii i historii myśli psychologicznej", theme: "rose", icon: "bulb", section: "cw" },
  shelf: "Zajęcia i lektury",
  nouns: { gen: "lektury", nom: "lektura", all: "całego rozdziału 6" },
  notesClass: "zaj",
  ghost: ["Zajęcia", "Kolejne zajęcia", "Wrzuć prezentację i rozdział z Hocka, a pojawią się tu streszczenie i ćwiczenia."],
  number: 5,
  label: "Zajęcia 5",
  title: "Emocje i motywacja",
  byline: "Lektura na zajęcia: Hock, rozdz. 6 (s. 196–233)",
  sources: ["R. Hock, „40 prac badawczych, które zmieniły oblicze psychologii”, rozdz. 6 „Emocje i motywacja”, s. 196–233"],
  term: "Ćwiczenia · lektura na zajęcia 5",
  passing: null,
  passRatio: 0.6,
  examNote: "Moduł powstał z samej lektury, bez prezentacji z zajęć. Próg 60% to punkt odniesienia.",
  minimumTitle: "Najważniejsze w 5 minut",
  sourceNames: { S: "lektura (Hock, rozdz. 6)", D: "★ dopowiedzenie spoza lektury" },

  sets: {
    badanie: { label: "Które badanie z rozdziału 6?", numbered: true,
      items: ["Masters i Johnson (reakcje seksualne)", "Ekman i Friesen (mimika emocji)", "Holmes i Rahe (stres i choroby)", "Festinger i Carlsmith (dysonans poznawczy)"],
      why: ["obserwacja i pomiary fizjologiczne ok. 10 000 cykli reakcji seksualnych; cztery fazy cyklu",
            "plemię Fore z Nowej Gwinei rozpoznaje te same wyrazy twarzy co ludzie Zachodu",
            "Skala Ponownego Przystosowania Społecznego (SRRS): zmiany życiowe a ryzyko choroby",
            "za kłamstwo płacono 1 albo 20 dolarów; mniejsza zapłata dała większą zmianę postaw"] },
    faza: { label: "Która faza cyklu reakcji seksualnych?", numbered: true,
      items: ["Faza pobudzenia", "Faza plateau", "Orgazm", "Faza odprężenia"],
      why: ["pierwsze oznaki: zwilgotnienie pochwy, wzwód członka",
            "pełny wzwód, obrzmienie zewnętrznej jednej trzeciej pochwy, rośnie napięcie mięśni i ciśnienie",
            "rytmiczne skurcze mięśni co 0,8 sekundy",
            "narządy wracają do stanu sprzed pobudzenia; u mężczyzn okres refrakcji"] },
    emocja: { label: "Którą emocję opisuje historyjka Ekmana?", numbered: true,
      items: ["Zadowolenie", "Smutek", "Gniew", "Zaskoczenie", "Obrzydzenie", "Strach"],
      why: ["przybyli jego (jej) znajomi",
            "jego (jej) dziecko lub matka zmarło",
            "jest zagniewany i zaraz będzie walczył",
            "patrzy na coś nowego i nieoczekiwanego",
            "patrzy na coś, czego nie lubi, albo na coś, co cuchnie",
            "sam w domu, bez broni, a w drzwiach stoi dzika świnia"] },
    grupa: { label: "Która grupa Festingera i Carlsmitha?", numbered: true,
      items: ["Grupa 1 dolar", "Grupa 20 dolarów", "Grupa kontrolna"],
      why: ["kłamali za małą zapłatę: za mało uzasadnienia, duży dysonans, największa zmiana postaw",
            "kłamali za dużą zapłatę: mocne uzasadnienie, mały dysonans, postawy prawie bez zmian",
            "nie kłamali i nie dostali pieniędzy; po zadaniach od razu szli na rozmowę"] }
  },

  units: [
    { id: "wstep", title: "Emocje i motywacja: wstęp", sub: "Cztery prace rozdziału 6", icon: "heart" },
    { id: "mj-tlo", title: "Masters i Johnson: skąd to badanie", sub: "Kinsey, rewolucja seksualna, cel terapeutyczny", icon: "book" },
    { id: "mj-metoda", title: "Badani i procedura", sub: "Tab. 6.1, adaptacja, 10 000 cykli", icon: "user" },
    { id: "mj-cykl", title: "Cykl reakcji seksualnych", sub: "Cztery fazy (tab. 6.2)", icon: "pulse", seq: true,
      teach: "<p>Masters i Johnson podzielili reakcję seksualną na <b>cztery fazy</b>: <b>pobudzenie</b>, <b>plateau</b>, <b>orgazm</b> i <b>odprężenie</b>. Sami przyznali, że ten podział jest arbitralny, ale ułatwia rozmowę o reakcjach.</p>" +
        "<p>Obie płcie przechodzą te same fazy. Różnica jest po orgazmie: mężczyźni mają <b>okres refrakcji</b>, kobiety go nie mają i mogą mieć kolejne orgazmy.</p>" },
    { id: "mj-mity", title: "Mit falliczny i różnice płci", sub: "Rozmiar penisa, refrakcja, wielokrotne orgazmy", icon: "split" },
    { id: "mj-krytyka", title: "Krytyka i dalsze badania", sub: "Model Kaplan, osoby starsze, uszkodzenia rdzenia", icon: "target" },
    { id: "ek-tlo", title: "Ekman i Friesen: czy mimika jest uniwersalna?", sub: "Dlaczego plemię Fore", icon: "eye" },
    { id: "ek-metoda", title: "Historyjki i fotografie", sub: "Procedura badania (tab. 6.3)", icon: "cards", seq: true,
      teach: "<p>Badany słuchał krótkiej <b>historyjki</b> (np. „zmarło mu dziecko”) i wybierał jedną z <b>trzech fotografii</b> twarzy (dzieci: z dwóch). Tylko jedna pasowała do emocji z historyjki.</p>" +
        "<p>Tłumacz z plemienia Fore opowiadał historyjkę, a badacz z Zachodu tylko zapisywał odpowiedź i <b>nie patrzył na badanych</b>, żeby niechcący nie podpowiadać.</p>" },
    { id: "ek-wyniki", title: "Wyniki i omówienie", sub: "Tab. 6.4 i 6.5, strach i zaskoczenie", icon: "check", table: true },
    { id: "ek-ewolucja", title: "Natura, ewolucja i dalsze badania", sub: "Darwin, twarz w tłumie, sprzężenie zwrotne", icon: "spark" },
    { id: "hr-tlo", title: "Holmes i Rahe: stres i choroby", sub: "Choroby psychosomatyczne, stres życiowy", icon: "flame" },
    { id: "hr-skala", title: "Skala SRRS", sub: "43 wydarzenia, ślub = 500, tab. 6.6", icon: "column", seq: true,
      teach: "<p>Holmes i Rahe dali 394 osobom listę <b>43 wydarzeń życiowych</b>. Zawarcie małżeństwa miało z góry <b>500 punktów</b>; resztę badani oceniali w porównaniu ze ślubem. Średnie podzielono przez 10.</p>" +
        "<p>Na górze listy jest <b>śmierć współmałżonka (100)</b>, na dole <b>drobne naruszenie prawa (11)</b>. Na liście są też wydarzenia przyjemne, bo stres to tu <b>potrzeba przystosowania się</b>, a nie przykre uczucie.</p>" },
    { id: "hr-lcu", title: "Jednostki zmian w życiu (LCU)", sub: "LCU a choroby, marynarka", icon: "dice" },
    { id: "hr-krytyka", title: "Krytyka i nowsze badania SRRS", sub: "10% wariancji, kultura, Rahe: cztery czynniki", icon: "wall" },
    { id: "fc-teoria", title: "Dysonans poznawczy", sub: "Festinger: teoria i trzęsienie ziemi w Indiach", icon: "spiral", seq: true,
      teach: "<p><b>Dysonans poznawczy</b> to przykre napięcie, gdy wiemy o sobie dwie niezgodne rzeczy, np. „uważam X” i „powiedziałem nie-X”.</p>" +
        "<p>Zachowania nie da się cofnąć, więc zmieniamy <b>postawę</b>. Im <b>słabsze uzasadnienie</b> zachowania (mała nagroda, wolny wybór), tym większy dysonans i większa zmiana poglądów.</p>" },
    { id: "fc-eksperyment", title: "Szpulki, kołki i 1 dolar", sub: "Procedura i wyniki (tab. 6.7)", icon: "lock", seq: true },
    { id: "fc-krytyka", title: "Warunki dysonansu i zastosowania", sub: "Cooper i Fazio, Aronson, kierowcy", icon: "redo" },
    { id: "mix", title: "Rozpoznaj w życiu", sub: "Sytuacje z życia i porównania badań", icon: "pairs" },
    { id: "boss", title: "Test z całego rozdziału 6", sub: "15 pytań ze wszystkich lekcji", icon: "crown", boss: true }
  ],

  concepts: [
    /* ---------- wstęp ---------- */
    { id: "emocje-motywacja", u: "wstep", term: "Emocje i motywacja",
      plain: "Wewnętrzne doświadczenia, które pchają nas do działania. Nie są czymś, co „po prostu się zdarza”: da się je badać naukowo.",
      def: "Rozdział jest poświęcony wewnętrznym doświadczeniom: emocjom i motywacji. Panuje przekonanie, że nie mamy nad nimi kontroli i że są „standardowym wyposażeniem”, ale psychologów zawsze frapowało, skąd się biorą i dlaczego postępujemy tak, a nie inaczej. Mają podstawowy i potężny wpływ na zachowanie (Hock, s. 196).",
      sh: "wewnętrzne siły napędzające zachowanie" },
    { id: "cztery-prace", u: "wstep", term: "Cztery prace rozdziału 6",
      plain: "Seks, twarz, stres i kłamstwo za dolara: Masters i Johnson, Ekman i Friesen, Holmes i Rahe, Festinger i Carlsmith.",
      def: "(1) Masters i Johnson (1966): reakcje seksualne człowieka; (2) Ekman i Friesen (1971): uniwersalność mimiki emocji; (3) Holmes i Rahe (1967): stres życiowy a zdrowie; (4) Festinger i Carlsmith (1959): dysonans poznawczy, jeden z najsłynniejszych eksperymentów w dziedzinie motywacji.",
      sh: "seksualność, mimika, stres, dysonans" },

    /* ---------- Masters i Johnson: tło ---------- */
    { id: "seks-psychika", u: "mj-tlo", term: "Psychologiczny wymiar seksualności",
      plain: "Seks to nie tylko biologia. Pożądanie i problemy seksualne u ludzi w dużej mierze zależą od psychiki.",
      def: "U zwierząt zachowania seksualne są ściśle związane z biologią, ale u ludzi to wyraźnie zjawisko psychiczne: przyciąganie, pożądanie i funkcjonowanie zależą od psychiki; większość ludzi współżyje z innych powodów niż prokreacja. Ludzie są (prawdopodobnie) jedynym gatunkiem, który ma problemy seksualne, zazwyczaj o podłożu psychicznym.",
      sh: "seksualność człowieka zależy od psychiki" },
    { id: "kinsey", u: "mj-tlo", term: "Raporty Kinseya",
      plain: "Wielkie ankiety z lat 40. i 50. o tym, co ludzie robią w łóżku. Ludzie mogli jednak koloryzować, a ankieta nie mówi, co się dzieje w ciele.",
      def: "Przed 1960 r. najważniejsza praca o zachowaniach seksualnych: badania sondażowe Alfreda Kinseya wśród tysięcy Amerykanów (koniec lat 40. i początek 50.). Dane z samoopisu trzeba interpretować ostrożnie (odpowiedzi społecznie akceptowalne); informują tylko, co ludzie robią, a nie co się z nimi dzieje podczas aktywności seksualnej.",
      sh: "ankiety: co ludzie robią, nie co dzieje się w ciele" },
    { id: "rewolucja", u: "mj-tlo", term: "Rewolucja seksualna lat 60.",
      plain: "Dopiero gdy społeczeństwo przestało ukrywać seks, takie badania stały się możliwe, a nawet pożądane.",
      def: "Do lat 60. poglądy wiktoriańskie uniemożliwiłyby jakiekolwiek poparcie finansowe i społeczne. Gdy ludzie zaczęli otwarcie uznawać, że są istotami seksualnymi, powstał klimat, w którym badania Mastersa i Johnson były akceptowane, a nawet pożądane.",
      sh: "zmiana klimatu społecznego umożliwiła badania" },
    { id: "cel-mj", u: "mj-tlo", term: "Cel Mastersa i Johnson",
      plain: "Pomóc ludziom z problemami seksualnymi. Żeby to zrobić, trzeba najpierw wiedzieć, jak ciało naprawdę reaguje.",
      def: "Teoria miała cel terapeutyczny: pomóc ludziom pokonać problemy seksualne. Trzeba odpowiedzieć na dwa pytania: jakie są fizyczne reakcje mężczyzn i kobiet na skuteczną stymulację seksualną i dlaczego reagują tak, a nie inaczej (s. 4). Jedyna metoda: pomiary fizjologiczne i bezpośrednia, systematyczna obserwacja we wszystkich fazach.",
      sh: "terapia przez poznanie fizjologii reakcji" },

    /* ---------- metoda ---------- */
    { id: "prostytutki", u: "mj-metoda", term: "Pierwsi badani: prostytutki",
      plain: "Na początku badali osoby świadczące usługi seksualne. Pomogły dopracować metody, ale nie były typowe dla ogółu.",
      def: "W początkowej fazie zatrudniono osiem kobiet i trzech mężczyzn uprawiających prostytucję (przez prawie dwa lata), zakładając, że osoby o typowym stylu życia nie zgodzą się na udział. Wnieśli wkład w opracowanie metod, ale nie byli reprezentatywni, więc wyników nie można było uogólniać.",
      sh: "pomogli opracować metody, ale niereprezentatywni" },
    { id: "ochotnicy", u: "mj-metoda", term: "Ochotnicy z dużego miasta",
      plain: "Potem zgłosiło się wielu zwykłych ludzi z różnych środowisk: 382 mężczyzn i 312 kobiet w wieku 18–89 lat.",
      def: "Dzięki kontaktom w kręgach akademickich, medycznych i terapeutycznych zebrano dużą grupę ochotników z różnych środowisk społeczno-ekonomicznych i o różnym wykształceniu: 382 mężczyzn i 312 kobiet (tab. 6.1). Przeprowadzono wywiady (motywy, umiejętność mówienia o reakcjach) i badania lekarskie (normalność pod względem reprodukcyjnym).",
      sh: "382 mężczyzn, 312 kobiet, 18–89 lat" },
    { id: "procedura-mj", u: "mj-metoda", term: "Procedura pomiarów",
      plain: "Mierzono tętno, ciśnienie i oddech, a reakcje obserwowano przy różnych formach aktywności, także ze specjalnym przezroczystym urządzeniem.",
      def: "Standardowe pomiary fizjologiczne (tętno, ciśnienie krwi, tempo oddychania) oraz obserwacja reakcji przy manipulacjach ręcznych i mechanicznych, stosunku w różnych pozycjach i stosunku sztucznym. Przyrządy z przezroczystego plastiku zaprojektowane przez fizyków umożliwiały obserwację wnętrza pochwy.",
      sh: "tętno, ciśnienie, oddech + obserwacja" },
    { id: "adaptacja", u: "mj-metoda", term: "Adaptacja i poczucie bezpieczeństwa",
      plain: "Badani najpierw ćwiczyli w laboratorium sami, potem przy zespole. Niczego nie mierzono, dopóki nie poczuli się swobodnie.",
      def: "Badanych zachęcano do aktywności w laboratorium bez personelu, potem w obecności zespołu, aż poczuli się swobodnie. Nie rejestrowano reakcji, dopóki nie poczuli się bezpiecznie. Ten okres zbudował zaufanie do badaczy i ich naukowego zainteresowania oraz całkowitą anonimowość (s. 22–23).",
      sh: "najpierw oswojenie, potem pomiary" },
    { id: "10000-cykli", u: "mj-metoda", term: "Ok. 10 000 cykli reakcji",
      plain: "Przeanalizowano mniej więcej 10 000 pełnych reakcji, z czego trzy czwarte u kobiet.",
      def: "Niektórzy badani wzięli udział w jednej sesji, inni przez wiele lat. Masters i Johnson przeanalizowali ok. 10 000 całkowitych cykli reakcji seksualnych, w proporcji kobiet do mężczyzn 3:1: co najmniej 7500 cykli kobiet wobec 2500 wytrysków mężczyzn (s. 15).",
      sh: "10 000 cykli, kobiety : mężczyźni = 3 : 1" },

    /* ---------- cykl ---------- */
    { id: "cykl", u: "mj-cykl", term: "Cykl reakcji seksualnych",
      plain: "Cztery fazy: pobudzenie, plateau, orgazm i odprężenie. Takie same u kobiet i mężczyzn, choć z pewnymi różnicami.",
      def: "Po analizie ok. 10 000 zdarzeń seksualnych Masters i Johnson podzielili reakcję seksualną na cztery fazy: pobudzenia, plateau, orgazm i odprężenia (tab. 6.2). Przyznali, że podział jest arbitralny, ale ułatwia omawianie reakcji. Reakcje fizjologiczne na stymulację są u każdego takie same.",
      sh: "pobudzenie, plateau, orgazm, odprężenie" },
    { id: "pobudzenie", u: "mj-cykl", term: "Faza pobudzenia",
      plain: "Ciało zaczyna reagować: u kobiet pierwszą oznaką jest zwilgotnienie pochwy, u mężczyzn wzwód.",
      def: "Kobiety: pierwsza oznaka to zwilgotnienie pochwy; erekcja łechtaczki i brodawek, powiększenie piersi, pochwa się wydłuża. Mężczyźni: pierwsza oznaka to wzwód członka; czas zależy od osoby, wieku, alkoholu, zmęczenia, stresu; wzwód może zaniknąć przy rozproszeniu uwagi.",
      sh: "zwilgotnienie pochwy, wzwód" },
    { id: "plateau", u: "mj-cykl", term: "Faza plateau",
      plain: "Pobudzenie rośnie do szczytowego poziomu tuż przed orgazmem: rośnie napięcie mięśni, tętno i ciśnienie.",
      def: "Kobiety: zewnętrzna jedna trzecia pochwy obrzmiewa, a jej otwarcie zmniejsza się do 50%; wewnętrzne dwie trzecie się „nadymają”; łechtaczka chowa się pod napletkiem. Mężczyźni: pełny wzwód, który nie zanika przy rozproszeniu; gruczoły Cowpera wydzielają płyn przedejakulacyjny. U obu płci rośnie napięcie mięśni i ciśnienie krwi.",
      sh: "szczyt pobudzenia tuż przed orgazmem" },
    { id: "orgazm", u: "mj-cykl", term: "Orgazm",
      plain: "Rytmiczne skurcze mięśni co 0,8 sekundy, u obu płci. U mężczyzn wytrysk w dwóch etapach.",
      def: "Kobiety: rytmiczne skurcze mięśni w okolicy miednicy co 0,8 sekundy; czas trwania od 7,4 do 104,6 sekundy; odczuwana intensywność nie zależy od czasu trwania. Mężczyźni: skurcze co 0,8 sekundy, ejakulacja w dwóch etapach: wydzielenie (nasienie gromadzi się w cewce, uczucie nieuchronności) i wytrysk.",
      sh: "skurcze co 0,8 s" },
    { id: "odprezenie", u: "mj-cykl", term: "Faza odprężenia",
      plain: "Ciało wraca do stanu sprzed pobudzenia. U mężczyzn połowa wzwodu znika w ciągu minuty.",
      def: "Kobiety: łechtaczka, macica, pochwa i brodawki wracają do stanu sprzed pobudzenia; łechtaczka w niecałą minutę; bez orgazmu proces może trwać kilka godzin. Mężczyźni: ok. 50% utraty wzwodu w ciągu pierwszej minuty, potem powolny powrót; spada napięcie seksualne.",
      sh: "powrót do stanu sprzed pobudzenia" },

    /* ---------- mity ---------- */
    { id: "mit-falliczny", u: "mj-mity", term: "Mit falliczny",
      plain: "Dwa męskie lęki: że większy penis lepiej zadowala partnerkę i że własny jest za mały. Masters i Johnson wykazali, że oba są bezpodstawne.",
      def: "Mężczyźni obawiali się, że (1) większe penisy skuteczniej stymulują kobietę i (2) ich własne są za małe. Masters i Johnson nazwali to „mitem fallicznym” i obalili obie obawy pomiarami rozmiarów penisa w spoczynku i we wzwodzie.",
      sh: "większy = lepszy; mój za mały (oba fałszywe)" },
    { id: "pomiary-penisa", u: "mj-mity", term: "Pomiary rozmiaru penisa",
      plain: "W spoczynku 7,1–10,9 cm (średnio 7,5), we wzwodzie średnio ok. 15 cm. Mniejsze w spoczynku rosną bardziej.",
      def: "W grupie 80 mężczyzn długość w spoczynku 7,1–10,9 cm (średnio ok. 7,5 cm), we wzwodzie 14–17,8 cm (średnio ok. 15 cm). Większa długość w spoczynku nie oznacza większej we wzwodzie: penis 7,1 cm urósł o 8,4 cm do 15,5 cm, a penis 10,2 cm tylko o 5,3 cm, też do 15,5 cm.",
      sh: "mniejsze w spoczynku rosną bardziej" },
    { id: "elastycznosc", u: "mj-mity", term: "Elastyczność pochwy",
      plain: "Pochwa dopasowuje się do penisa każdej wielkości, więc rozmiar ma małe znaczenie dla przyjemności partnerki.",
      def: "Pochwa jest niezwykle elastyczna: „pełne dostosowanie następuje podczas pierwszych kilku pchnięć penisa, niezależnie od jego wielkości” (s. 194); w fazie plateau ściany pochwy obrzmiewają i obejmują penisa każdej wielkości. Wniosek: wielkość penisa jest mało istotnym czynnikiem stymulacji partnerki (s. 195).",
      sh: "dopasowuje się do każdego rozmiaru" },
    { id: "refrakcja", u: "mj-mity", term: "Okres refrakcji",
      plain: "Czas po orgazmie, gdy mężczyzna nie może mieć kolejnego. Trwa od minut do godzin i wydłuża się z wiekiem.",
      def: "Po orgazmie mężczyźni przechodzą okres refrakcji, kiedy są fizycznie niezdolni do kolejnego orgazmu niezależnie od stymulacji. Może trwać od kilku minut do kilku godzin, a nawet cały dzień, i wydłuża się z wiekiem.",
      sh: "męska przerwa po orgazmie" },
    { id: "wielokrotne", u: "mj-mity", term: "Wielokrotne orgazmy u kobiet",
      plain: "Kobiety nie mają okresu refrakcji, więc mogą mieć kolejne orgazmy. Wcześniej sądzono, że to mężczyźni mają większe możliwości.",
      def: "Kobiety, jak się zdaje, nie mają okresu refrakcji; skuteczna stymulacja może prowadzić do kolejnych orgazmów bez utraty pobudzenia, a doświadczenie orgazmu może trwać stosunkowo długo (s. 131). Wcześniej uważano, że mężczyźni mają większe możliwości. Nie wszystkie kobiety dążą do wielokrotnych orgazmów; ludzie różnią się tym, co daje im satysfakcję.",
      sh: "kobiety: brak refrakcji, możliwe kolejne orgazmy" },

    /* ---------- krytyka ---------- */
    { id: "krytyka-mj", u: "mj-krytyka", term: "Krytyka Mastersa i Johnson",
      plain: "Zarzuty: podział na cztery fazy jest umowny, a badacze pominęli myśli i uczucia.",
      def: "Większość zarzutów dotyczy (1) arbitralności podziału na cztery fazy i (2) zbyt małej uwagi poświęconej poznawczym i emocjonalnym aspektom seksualności. Masters i Johnson odpowiedzieli od początku: podział był pomocniczy, a fizjologia była warunkiem wstępnym; o psychologii pisali w kolejnych książkach.",
      sh: "umowne fazy, pominięte myśli i emocje" },
    { id: "kaplan", u: "mj-krytyka", term: "Model trzyfazowy Helen Singer Kaplan",
      plain: "Kaplan zaczyna od pożądania, czyli od tego, co dzieje się w głowie przed pobudzeniem.",
      def: "Helen Singer Kaplan zaproponowała trzy fazy: pożądanie, ukrwienie naczyń (przekrwienie genitaliów) i skurcze mięśni (orgazm). Analiza powinna zaczynać się od pożądania, etapu wcześniejszego niż pobudzenie; nie rozgraniczała pobudzenia od plateau. Koncentracja na pożądaniu to druga linia krytyki: pominięcie czynników psychologicznych.",
      sh: "pożądanie, ukrwienie, skurcze" },
    { id: "uniwersalnosc-mj", u: "mj-krytyka", term: "Wątpliwości co do uniwersalności",
      plain: "Później okazało się, że niektóre kobiety mają okres refrakcji, a niektórzy mężczyźni mogą mieć kilka orgazmów.",
      def: "W ciągu 30 lat badania podały w wątpliwość uniwersalność niektórych odkryć: niewielka część kobiet doświadcza okresu refrakcji, niewielka część mężczyzn przeżywa wielokrotne orgazmy z krótkim albo bez okresu refrakcji; istnieją wstępne, kontrowersyjne dowody, że niektóre kobiety mają wytrysk (Strong, DeVault, 1997).",
      sh: "wyjątki od reguł płci" },
    { id: "terapia-seks", u: "mj-krytyka", term: "Znaczenie dla terapii seksualnej",
      plain: "Ich badania są podstawą prawie każdej terapii seksualnej.",
      def: "Badania Mastersa i Johnson są podstawą prawie każdej terapii seksualnej: problemy ze wzwodem, zahamowanie orgazmu, przedwczesny wytrysk, kłopoty z pobudzeniem. Cztery lata później wydali „Human Sexual Inadequacy” (1970), stosując wyniki do rozwiązywania problemów; badania kontynuowali przez prawie 30 lat.",
      sh: "fundament terapii zaburzeń seksualnych" },
    { id: "starsi", u: "mj-krytyka", term: "Seksualność osób starszych",
      plain: "Starsi ludzie też są istotami seksualnymi: większość szwedzkich mężczyzn po pięćdziesiątce uważała seks za ważny.",
      def: "Szwecja (Helgason i in., 1996): 319 mężczyzn w wieku 50–80 lat; ponad 80% uważa seks za ważną część życia, prawie 75% nadal osiąga erekcję i orgazm. Gelfand (2000): średnia długość życia kobiet 79 lat; życie płciowe jest integralną częścią jakości życia starszych kobiet. Wniosek dla lekarzy: nie lekceważyć życia płciowego pacjentów niezależnie od wieku.",
      sh: "seks ważny także po 50. roku życia" },
    { id: "rdzen", u: "mj-krytyka", term: "Kobiety z uszkodzeniami rdzenia kręgowego",
      plain: "Wcześniej sądzono, że nie mogą mieć orgazmu. Okazało się, że mogą, a nawet częściej niż kobiety bez uszkodzeń.",
      def: "Whipple, Gerdes, Komisaruk (1996): porównanie reakcji kobiet z uszkodzeniami rdzenia i bez (pomiary fizjologiczne, samoopis) przy autostymulacji. Kobiety z uszkodzeniami były pobudzone, kilka stwierdziło orgazm; więcej z nich doświadczyło orgazmu niż kobiet bez uszkodzeń. Być może ludzie potrafią przenieść źródło przyjemności w inne miejsca ciała.",
      sh: "orgazm możliwy mimo uszkodzenia rdzenia" },

    /* ---------- Ekman: tło ---------- */
    { id: "uniwersalnosc", u: "ek-tlo", term: "Uniwersalność wyrazów twarzy",
      plain: "Czy uśmiech znaczy to samo w Polsce, na Sumatrze i w Mongolii? Ekman twierdził, że tak.",
      def: "Teoria, zgodnie z którą określone wyrazy twarzy odpowiadające podstawowym emocjom są uniwersalne. Byłoby zaskakujące, gdyby przy tylu różnicach kulturowych (gesty, przestrzeń osobista, etykieta) wyrażanie emocji było wszędzie identyczne. Paul Ekman to wiodący badacz mimicznego wyrażania emocji.",
      sh: "te same miny dla tych samych emocji wszędzie" },
    { id: "wczesniejsze-ekman", u: "ek-tlo", term: "Wcześniejsze badania Ekmana",
      plain: "Ludzie z pięciu krajów rozpoznali te same emocje, ale wszyscy oglądali filmy i telewizję, więc mogli się ich nauczyć.",
      def: "Ekman i Friesen pokazywali zdjęcia twarzy osobom z wyższym wykształceniem w Argentynie, Brazylii, Chile, Japonii i USA; wszyscy uznali te same wyrazy za odpowiadające tym samym emocjom. Wyniki łatwo było jednak podważyć: badani mieli kontakt z międzynarodowymi mass mediami (filmy, czasopisma, telewizja).",
      sh: "5 krajów, ale wszyscy znali media" },
    { id: "fore", u: "ek-tlo", term: "Lud Fore z Nowej Gwinei",
      plain: "Odizolowane plemię, które nie znało filmów ani ludzi z Zachodu. Mogło znać tylko mimikę swojej kultury.",
      def: "Ekman i Friesen wybrali się na Southeast Highlands w Nowej Gwinei, gdzie mieszkał lud Fore, wyizolowane społeczeństwo jak z epoki kamiennej. Wielu jego członków nie miało kontaktu z kulturą Zachodu i Wschodu, więc nie zetknęli się z mimiką inną niż we własnej kulturze.",
      sh: "plemię bez kontaktu z Zachodem" },
    { id: "hipoteza-ekman", u: "ek-tlo", term: "Hipoteza Ekmana i Friesena",
      plain: "Ludzie z kultury bez pisma i mediów połączą te same emocje z tymi samymi minami co ludzie z Zachodu i Wschodu.",
      def: "„Celem tej pracy jest sprawdzenie hipotezy, że członkowie kultur przedpiśmiennych, wybrani tak, aby byli możliwie najbardziej wizualnie odizolowani od kultur, w których pismo jest znane, kojarzą te same emocje z tymi samymi wyrazami twarzy w taki sam sposób jak członkowie piśmiennych kultur Wschodu i Zachodu” (s. 125).",
      sh: "kultura przedpiśmienna = te same skojarzenia" },

    /* ---------- Ekman: metoda ---------- */
    { id: "badani-fore", u: "ek-metoda", term: "Badani z Fore z Południa",
      plain: "189 dorosłych i 130 dzieci, którzy nie oglądali filmów, nie znali angielskiego i nie pracowali dla ludzi z Zachodu.",
      def: "Najbardziej wyizolowani: Fore z Południa. Badani nie oglądali filmów, nie znali angielskiego ani pidżynu, nigdy nie pracowali dla osoby z Zachodu i nie mieszkali w osadach ludzi z Zachodu. Z 11-tysięcznej populacji wybrano 189 dorosłych i 130 dzieci; dla porównania 23 dorosłych z dużym kontaktem z Zachodem (filmy, osady, szkoły misyjne).",
      sh: "189 dorosłych + 130 dzieci" },
    { id: "historyjki", u: "ek-metoda", term: "Historyjki i trzy fotografie",
      plain: "Badany słyszał krótką historię i wskazywał zdjęcie twarzy, które do niej pasuje.",
      def: "Metodą prób i błędów ustalono, że najskuteczniej jest przedstawić trzy fotografie różnych wyrazów twarzy i przeczytać krótką historyjkę wywołującą emocję; badany wskazuje pasujący wyraz. Historyjki dobrano tak, by każda była związana tylko z jedną emocją i rozpoznawalna dla Fore (tab. 6.3).",
      sh: "historia + wybór jednej z trzech twarzy" },
    { id: "historyjka-strach", u: "ek-metoda", term: "Dłuższa historyjka o strachu",
      plain: "Historia o strachu (dzika świnia w drzwiach) była dłuższa, żeby nie pomylić strachu z zaskoczeniem albo gniewem.",
      def: "„Siedzi sam w domu, w wiosce nikogo nie ma, nie ma noża, siekiery ani łuku. W drzwiach stoi dzika świnia, osoba patrzy na nią i się boi; świnia nie chce się ruszyć, a osoba boi się, że ją pogryzie”. Opowiadanie o strachu musiało być dłuższe, żeby nie pomylono strachu z zaskoczeniem lub złością.",
      sh: "świnia w drzwiach, żeby nie mylić ze zdziwieniem" },
    { id: "zdjecia", u: "ek-metoda", term: "40 fotografii 24 osób",
      plain: "Zdjęcia mężczyzn, kobiet i dzieci, każde wcześniej uznane przez większość ludzi z Zachodu i Wschodu za typowe dla danej emocji.",
      def: "Wykorzystano 40 fotografii 24 różnych osób (mężczyzn, kobiet, chłopców, dziewczynek), przedstawiających twarze ludzi Zachodu. Każde zdjęcie zostało ocenione przez co najmniej 70% oglądających z co najmniej dwóch piśmiennych kultur jako reprezentatywne dla emocji.",
      sh: "każde uznane przez ≥70% ludzi z dwóch kultur" },
    { id: "procedura-ekman", u: "ek-metoda", term: "Jak unikano podpowiadania",
      plain: "Tłumacze nie mogli niczego sugerować, a badacz z Zachodu nawet nie patrzył na badanych.",
      def: "Eksperyment w grupach: jeden członek zespołu i jeden członek Fore jako tłumacz. Dorośli wybierali spośród trzech fotografii, dzieci spośród dwóch; zestawy były różne, żeby żadne zdjęcie nie pojawiło się dwukrotnie. Tłumaczy przeszkolono, by nie wpływali na badanych i nie upiększali historyjek; badacz z Zachodu unikał patrzenia na badanych i tylko zapisywał odpowiedzi.",
      sh: "tłumacz nie sugeruje, badacz nie patrzy" },

    /* ---------- Ekman: wyniki ---------- */
    { id: "brak-roznic", u: "ek-wyniki", term: "Brak różnic płci i wieku",
      plain: "Kobiety i mężczyźni oraz dorośli i dzieci rozpoznawali emocje tak samo dobrze.",
      def: "Nie wykazano istotnych różnic między mężczyznami i kobietami (choć kobiety miały mniej kontaktów z Zachodem i bardziej się wahały) ani między dorosłymi z kontaktem z Zachodem i bez niego, ani między młodszymi i starszymi dziećmi.",
      sh: "płeć, wiek i kontakt bez znaczenia" },
    { id: "wyniki-ekman", u: "ek-wyniki", term: "Wyniki: 68–98% trafień",
      plain: "Przypadek dawał 33% u dorosłych i 50% u dzieci, a Fore trafiali zwykle w 80–90% przypadków.",
      def: "Dorośli (tab. 6.4): zadowolenie 92,3%, gniew 85,3%, obrzydzenie 83,0%, strach 80,5%, smutek 79,0%, zaskoczenie 68,0%; strach odróżniany od zaskoczenia tylko w 42,7%. Dzieci (tab. 6.5): od 81,5% (smutek) do 98,3% (zaskoczenie). Prawdopodobieństwo trafienia na chybił trafił: 33% u dorosłych, 50% u dzieci. Wszystkie wyniki istotne statystycznie poza odróżnianiem strachu od zaskoczenia.",
      sh: "wszystkie istotne poza strachem vs zaskoczeniem" },
    { id: "dzieci-lepiej", u: "ek-wyniki", term: "Dlaczego dzieci miały lepsze wyniki",
      plain: "Dzieci wybierały z dwóch zdjęć, a nie z trzech, więc było im łatwiej.",
      def: "Dzieci miały lepsze wyniki niż dorośli, ale zdaniem Ekmana i Friesena wynikało to z faktu, że miały do wyboru dwie, a nie trzy fotografie.",
      sh: "dwie fotografie zamiast trzech" },
    { id: "strach-zaskoczenie", u: "ek-wyniki", term: "Strach mylony z zaskoczeniem",
      plain: "Jedyny wyjątek: Fore mylili strach ze zdziwieniem, bo u nich groźne rzeczy zwykle pojawiają się nagle.",
      def: "Jedna grupa wybrała zaskoczenie w 67%, gdy historyjka opisywała strach. Wyjaśnienie autorów: „w tej kulturze przerażające wydarzenia są zarazem prawie zawsze zaskakujące, na przykład nagłe pojawienie się wroga z innej wioski, nieoczekiwane spotkanie z duchem lub czarownikiem” (s. 129). Wyjątek nie umniejsza przeważających dowodów.",
      sh: "groźne = nagłe w kulturze Fore" },
    { id: "nagrania-fore", u: "ek-wyniki", term: "Nagrania Fore pokazane studentom",
      plain: "Działa też w drugą stronę: amerykańscy studenci rozpoznali emocje na nagranych twarzach ludzi Fore.",
      def: "Badacze nagrali na wideo członków Fore wyrażających mimicznie sześć emocji i pokazali taśmy studentom w USA; studenci prawidłowo rozpoznali wyrazy twarzy. Wniosek: dowody „zaprzeczają poglądom, że mimika twarzy kojarzona z emocjami jest specyficzna w każdej kulturze” (s. 128).",
      sh: "Amerykanie rozpoznali miny Fore" },

    /* ---------- Ekman: ewolucja ---------- */
    { id: "wrodzone", u: "ek-ewolucja", term: "Mimika jest wrodzona",
      plain: "Skoro wyrazy twarzy są takie same w różnych kulturach, to raczej się z nimi rodzimy, niż się ich uczymy.",
      def: "Spór „natura czy wychowanie”: skoro wyrazy twarzy sześciu emocji w niewielkim stopniu zależą od różnic kulturowych, muszą być wrodzone, czyli biologicznie zdeterminowane już w chwili narodzin.",
      sh: "biologicznie zdeterminowane od urodzenia" },
    { id: "szesc-emocji", u: "ek-ewolucja", term: "Sześć emocji podstawowych",
      plain: "Zadowolenie, gniew, smutek, zaskoczenie, obrzydzenie i strach. Inne emocje to ich odmiany i połączenia.",
      def: "Zadowolenie, gniew, smutek, zaskoczenie, obrzydzenie i strach to jedyne emocje, których uniwersalność wykazano konsekwentnie; większość uczonych uznaje je za podstawowe. Inne emocje to ich połączenia albo odmiany o różnej intensywności: radość to skrajne zadowolenie, a zaskoczenie z smutkiem naraz może wywołać szok.",
      sh: "6 podstawowych, reszta to odmiany" },
    { id: "darwin", u: "ek-ewolucja", term: "Darwin: mimika jako adaptacja",
      plain: "Darwin: miny pomagały przetrwać, bo ostrzegały innych o niebezpieczeństwie.",
      def: "W 1872 r. Darwin opublikował „O wyrazie uczuć u człowieka i zwierząt”: wyrazy twarzy były mechanizmami adaptacyjnymi, zwiększającymi szanse przetrwania gatunku. Strach to cichy sygnał ostrzegawczy przed drapieżnikiem, gniew ostrzega słabszych, żeby trzymali się z daleka, a obrzydzenie mówi „Fuj! Nie jedzcie tego”, chroniąc przed zatruciem.",
      sh: "miny jako sygnały zwiększające przetrwanie" },
    { id: "twarz-tlum", u: "ek-ewolucja", term: "Gniewna twarz w tłumie (Hansen, Hansen, 1988)",
      plain: "Jedną zagniewaną twarz w tłumie zadowolonych znajdujemy szybciej niż odwrotnie.",
      def: "Badani szukali twarzy różniącej się od reszty tłumu. Średni czas znalezienia zadowolonej twarzy wśród zagniewanych: 1,45 s; zagniewanej wśród zadowolonych: 0,91 s. Gdy tłum rósł, czas szukania zadowolonej twarzy rósł, a zagniewanej nie zmieniał się istotnie. Być może jesteśmy biologicznie zaprogramowani, by szybko reagować na sygnały groźby.",
      sh: "gniew 0,91 s, zadowolenie 1,45 s" },
    { id: "adhd-ekman", u: "ek-ewolucja", term: "Mimika u dzieci z ADHD",
      plain: "Dzieci z ADHD gorzej rozpoznają sześć podstawowych emocji, co może tłumaczyć część trudności społecznych.",
      def: "Singh i in. (1998): dzieci i nastolatki z zespołem nadpobudliwości psychoruchowej z deficytem uwagi istotnie gorzej rozpoznają sześć podstawowych wyrazów twarzy Ekmana; to rzuca światło na ich trudności społeczne i może poprawić leczenie.",
      sh: "gorsze rozpoznawanie emocji" },
    { id: "hollywood", u: "ek-ewolucja", term: "Aktorzy z Hollywood (Carroll, Russell, 1997)",
      plain: "Aktorzy pokazywali pełny uśmiech, ale inne emocje tylko jednym albo dwoma elementami twarzy, i widzowie i tak rozumieli.",
      def: "Analiza czterech filmów (m.in. „Stowarzyszenie Umarłych Poetów”, „Sprawa Kramerów”): uśmiechnięta twarz ze wszystkimi cechami Ekmana była odbierana jako zadowolenie, ale gniew, strach, smutek czy zaskoczenie aktorzy pokazywali jedną lub dwiema cechami. Może rozpoznajemy emocje lepiej, niż sądził Ekman: wystarczą uniesione brwi albo lekko wykrzywione usta.",
      sh: "jeden element twarzy wystarcza" },
    { id: "sprzezenie", u: "ek-ewolucja", term: "Teoria sprzężenia zwrotnego mimiki",
      plain: "Twoja mina sama mówi mózgowi, co czujesz. Gdy ktoś ułoży twarz jak do strachu, ciało reaguje jak przy strachu.",
      def: "Wyraz twarzy wysyła do mózgu informację zwrotną, która pomaga interpretować doświadczaną emocję. Ekman polecał badanym napinać określone mięśnie twarzy, tworząc wyraz danej emocji; reakcje fizjologiczne odpowiadały właściwym emocjom wynikającym wyłącznie z wyrazu twarzy (Ekman, Levenson, Friesen, 1983).",
      sh: "mina wpływa na odczuwaną emocję" },
    { id: "klamstwo-cialo", u: "ek-ewolucja", term: "Kłamstwo: twarz czy ciało?",
      plain: "Kłamstwo trochę lepiej niż przypadkiem odczytamy z twarzy, ale dużo lepiej, gdy widzimy całe ciało.",
      def: "Ekman wykazał, że ludzie nieco lepiej niż na poziomie przypadku oceniają, czy ktoś kłamie, obserwując twarz. Gdy można było obserwować całe ciało, badani znacznie częściej wykrywali kłamstwa: ciało jest lepszym źródłem informacji o stanach umysłu niż twarz („Unmasking the Face”, 1975).",
      sh: "ciało zdradza więcej niż twarz" },

    /* ---------- Holmes i Rahe: tło ---------- */
    { id: "stres", u: "hr-tlo", term: "Stres jako skrajna emocja",
      plain: "Stres może wywołać każda emocja, jeśli jest bardzo silna, nawet radość.",
      def: "Stres trudno zdefiniować. Jedno z podejść: stres to każda emocja w skrajnej formie. W tym ujęciu źródłem stresu może być strach, gniew, smutek, a nawet zadowolenie.",
      sh: "każda emocja w skrajnej formie" },
    { id: "psychosomatyczne", u: "hr-tlo", term: "Choroby psychosomatyczne",
      plain: "Prawdziwe choroby z prawdziwym bólem, ale wywołane głównie przez psychikę.",
      def: "Problemy zdrowotne spowodowane głównie czynnikami psychologicznymi, a nie fizycznymi. To prawdziwe choroby: ból i cierpienie mają wymiar medyczny. Zajmują się nimi psycholodzy zdrowia.",
      sh: "prawdziwa choroba z przyczyn psychicznych" },
    { id: "hipochondria", u: "hr-tlo", term: "Hipochondria",
      plain: "Ktoś wyobraża sobie albo przesadza z chorobami. Nie wolno jej mylić z chorobami psychosomatycznymi.",
      def: "Osób cierpiących z powodu problemów psychosomatycznych nie należy mylić z hipochondrykami, których choroby są wyimaginowane lub przesadzone.",
      sh: "choroby wyimaginowane lub przesadzone" },
    { id: "stres-zyciowy", u: "hr-tlo", term: "Stres życiowy",
      plain: "Kiedy w życiu zachodzą zmiany wymagające dużego przystosowania, częściej chorujemy.",
      def: "Psycholodzy zdrowia ustalili, że gdy w życiu zachodzą zewnętrzne zmiany wymagające poważnego wewnętrznego przystosowania psychicznego, pojawia się tendencja do częstszego zapadania na choroby. Te zmiany to stres życiowy. Jego natężenie zmienia się w czasie i jest różne u różnych osób.",
      sh: "zmiany wymagające przystosowania" },
    { id: "pomiar-stresu", u: "hr-tlo", term: "Jak zmierzyć stres życiowy?",
      plain: "Nie można zamknąć ludzi w laboratorium i stresować ich, dopóki nie zachorują. Trzeba było wymyślić skalę.",
      def: "Badacze nie mogą narazić ludzi na stres w laboratorium i czekać na chorobę: byłoby to nieetyczne i nie odzwierciedlałoby prawdziwego życia. Wcześniejsze próby ograniczały się do liczby i rodzaju wydarzeń; Holmes i Rahe zaproponowali pomiar wielkości lub znaczenia zdarzeń.",
      sh: "nieetycznie w laboratorium, więc skala" },

    /* ---------- skala ---------- */
    { id: "43-wydarzenia", u: "hr-skala", term: "43 wydarzenia życiowe",
      plain: "Lista zdarzeń, które według doświadczeń klinicznych wymagają przystosowania się. Oceniło ją 394 badanych.",
      def: "Na podstawie doświadczeń klinicznych Holmes i Rahe sporządzili listę 43 wydarzeń, które zwykle odczuwa się jako stresujące, czyli wymagające psychicznego przystosowania. Listę oceniło 394 badanych pod względem wielkości stresu spowodowanego przez zdarzenie.",
      sh: "lista 43 zdarzeń, 394 oceniających" },
    { id: "slub-500", u: "hr-skala", term: "Ślub = 500 punktów",
      plain: "Ślub dostał z góry 500 punktów. Resztę zdarzeń oceniano jako większe albo mniejsze od ślubu.",
      def: "„Zawarciu związku małżeńskiego” przyznano arbitralną wartość 500. Badani oceniali, czy dane zdarzenie wymaga większego czy mniejszego przystosowania niż ślub i czy przystosowanie potrwa dłużej czy krócej. Oceny uśredniono i podzielono przez 10, przypisując każdemu zdarzeniu wagę (ślub ma więc 50).",
      sh: "punkt odniesienia; średnie / 10" },
    { id: "srrs", u: "hr-skala", term: "SRRS",
      plain: "Skala Ponownego Przystosowania Społecznego: lista 43 zdarzeń z punktami.",
      def: "Skala Ponownego Przystosowania Społecznego (Social Readjustment Rating Scale, SRRS). Znaczenie pracy Holmesa i Rahe’a tkwi w wynikach i w tym narzędziu. Polską adaptację przygotowali A. Sobolewski, J. Strelau i B. Zawadzki.",
      sh: "Social Readjustment Rating Scale" },
    { id: "gora-listy", u: "hr-skala", term: "Na górze listy",
      plain: "Śmierć współmałżonka 100, rozwód 73, separacja 65, więzienie i śmierć bliskiego 63.",
      def: "Najbardziej stresujące (tab. 6.6): 1. śmierć współmałżonka (100), 2. rozwód (73), 3. separacja małżonków (65), 4. kara więzienia (63), 5. śmierć członka bliskiej rodziny (63), 6. własna choroba lub uszkodzenie ciała (53), 7. zawarcie związku małżeńskiego (50), 8. zwolnienie z pracy (47).",
      sh: "śmierć współmałżonka 100, rozwód 73" },
    { id: "dol-listy", u: "hr-skala", term: "Na dole listy",
      plain: "Wakacje 13, Boże Narodzenie 12, drobne naruszenie prawa 11.",
      def: "Najmniej stresujące: zmiana nawyków żywieniowych (15), wakacje (13), Święta Bożego Narodzenia (12), drobne naruszenie prawa (11). Dwie pozycje wymagają aktualizacji przez zmiany ekonomiczne od 1967 r.: kredyt hipoteczny powyżej i poniżej 10 000 dolarów.",
      sh: "wakacje 13, święta 12, mandat 11" },
    { id: "pozytywne", u: "hr-skala", term: "Wydarzenia pozytywne na liście",
      plain: "Ślub, wakacje i święta też stresują, bo wymagają zmiany i przystosowania.",
      def: "Nie wszystkie pozycje są negatywne: Święta Bożego Narodzenia, ślub, a nawet wakacje mogą być stresujące zgodnie z definicją Holmesa i Rahe’a: stres to potrzeba psychicznego przystosowania się do wydarzenia.",
      sh: "stres = potrzeba przystosowania" },
    { id: "zgodnosc", u: "hr-skala", term: "Zgodność ocen w podgrupach",
      plain: "Mężczyźni i kobiety, młodzi i starzy, biali i czarni oceniali zdarzenia bardzo podobnie, więc skala pasuje do wszystkich.",
      def: "Badanych podzielono na podgrupy (mężczyźni / kobiety, samotni / w związku, z wyższym wykształceniem / bez, biali / czarni, młodsi / starsi, wyższa / niższa pozycja społeczno-ekonomiczna, religijni / niereligijni) i skorelowano ich oceny. Korelacje były bardzo wysokie, więc skalę można stosować do wszystkich ludzi z podobną dokładnością.",
      sh: "wysokie korelacje między grupami" },
    { id: "zmiana-stanu", u: "hr-skala", term: "Wspólna cecha: zmiana",
      plain: "Wszystkie zdarzenia łączy jedno: wymagają zmiany. Nie liczy się, czy są przyjemne.",
      def: "Każde zdarzenie wymaga adaptacji, zmiany lub radzenia sobie. „Nacisk kładzie się na zmianę istniejącego stabilnego stanu, a nie na znaczenie psychologiczne zdarzenie, wywoływane przez nie emocje czy pożądanie społeczne” (s. 217). Dlatego zdarzenia pozytywne i negatywne oba wywołują stres.",
      sh: "zmiana stabilnego stanu, nie emocja" },

    /* ---------- LCU ---------- */
    { id: "lcu", u: "hr-lcu", term: "Jednostki zmian w życiu (LCU)",
      plain: "Punkty z SRRS za zdarzenia z ostatniego roku. Suma to przybliżona ilość stresu życiowego.",
      def: "Do każdej zmiany jest przypisana liczba punktów, zwanych jednostkami zmian w życiu (life change units, LCU). Suma LCU z ostatnich dwunastu miesięcy daje przybliżoną ilość stresu życiowego. Holmes i Rahe badali związek wyniku z prawdopodobieństwem zachorowania.",
      sh: "suma punktów z ostatnich 12 miesięcy" },
    { id: "lcu-choroby", u: "hr-lcu", term: "LCU a poważne zmiany zdrowia",
      plain: "Im więcej punktów, tym więcej osób poważnie chorowało: 150–199 punktów ok. 37%, ponad 300 ok. 79%.",
      def: "Kilka tysięcy osób wypełniło SRRS i podało historię chorób (ryc. 6.1; Holmes, Masuda, 1974). Odsetek poważnych zmian stanu zdrowia rósł z liczbą LCU w ostatnim roku: 150–199 LCU ok. 37%, 200–299 ok. 51%, ponad 300 ok. 79% (wartości odczytane z wykresu w przybliżeniu).",
      sh: "więcej LCU, więcej chorób" },
    { id: "marynarka", u: "hr-lcu", term: "Badanie marynarzy",
      plain: "2500 marynarzy: im więcej LCU przed rejsem, tym częściej chorowali podczas służby.",
      def: "SRRS wykorzystano w badaniu 2500 pracowników marynarki wojennej: LCU za 6 miesięcy przed służbą na okręcie. W trakcie sześciu miesięcy służby osoby z wynikiem poniżej 100 LCU chorowały średnio 1,4 razy, z wynikiem 300–400 średnio 1,9 razy, a 500–600 LCU 2,1 razy (Rahe, Mahan, Arthur, 1970).",
      sh: "<100 LCU: 1,4; 500–600: 2,1 choroby" },

    /* ---------- krytyka SRRS ---------- */
    { id: "krytyka-srrs", u: "hr-krytyka", term: "Krytyka: wszystko w jednym worku",
      plain: "Skala liczy tak samo zdarzenia dobre i złe, wybrane i niezależne od nas. A to nagłe, złe i niezależne najbardziej szkodzą.",
      def: "Najczęstszy zarzut: uwzględnienie na jednej skali zdarzeń pozytywnych i negatywnych oraz zależnych od nas (z wyboru, np. ślub) i niezależnych (śmierć przyjaciela). Badania wykazały, że zdarzenia nagłe, negatywne i niezależne od nas w większym stopniu zwiastują choroby niż pozytywne i zależne (Taylor, 1999).",
      sh: "miesza dobre/złe i zależne/niezależne" },
    { id: "interpretacja", u: "hr-krytyka", term: "Pominięta interpretacja zdarzenia",
      plain: "Emerytura dla jednego to koniec kariery, dla drugiego wolność. Skala daje obu tyle samo punktów.",
      def: "Słabością skali jest to, że nie bierze pod uwagę interpretacji danego zdarzenia: przejście na emeryturę dla jednej osoby może oznaczać koniec kariery i „wyrzucenie na zieloną trawkę”, a dla innej uwolnienie od harówki. Cohen (1983) opracował Skalę Postrzeganego Stresu (Perceived Stress Scale).",
      sh: "to samo zdarzenie, różne znaczenie" },
    { id: "10-procent", u: "hr-krytyka", term: "LCU wyjaśnia ok. 10% chorób",
      plain: "Związek jest prawdziwy, ale słaby: znając czyjś wynik, przewidzisz chorobę tylko trochę lepiej niż na ślepo.",
      def: "Dokładna analiza statystyczna wykazała niewielki związek: wynik LCU tłumaczy zaledwie ok. 10% całkowitej zmienności poziomu zdrowia. Korelacja jest istotna statystycznie, ale zdolność prognozowania nie jest duża: znając czyjś wynik LCU, przewidzisz przyszłość nieco lepiej niż bez niego.",
      sh: "istotny, ale słaby związek" },
    { id: "popularnosc", u: "hr-krytyka", term: "Popularność SRRS",
      plain: "Mimo krytyki skala jest wciąż często używana: w ciągu 3,5 roku cytowało ją 367 artykułów.",
      def: "Między 1997 a połową 2000 r. liczba artykułów powołujących się na skalę wyniosła 367; tylko jeden tekst z książki był cytowany częściej (praca Rottera). SRRS, pomimo ograniczeń, od ponad 30 lat jest popularnym narzędziem badania stresu.",
      sh: "367 cytowań w 3,5 roku" },
    { id: "zlamania", u: "hr-krytyka", term: "Stres a złamania biodra",
      plain: "U starszych osób więcej zmian w życiu wiązało się z częstszym złamaniem biodra. Stres sprzyja też urazom.",
      def: "Peterson i in. (2000): 111 pacjentów ze złamaniem biodra porównano z grupą starszych osób bez złamań. Wyniki wskazują na wyraźną zależność między liczbą zmian w życiu a złamaniami biodra: stres może prognozować nie tylko choroby, ale też urazy i obrażenia.",
      sh: "więcej zmian, więcej złamań" },
    { id: "quebec", u: "hr-krytyka", term: "Stres w pracy a narkotyki (Quebec)",
      plain: "Wśród 2700 urzędników stres w pracy wiązał się z używaniem narkotyków.",
      def: "Bourbonnais i in. (1999): 2700 pracowników państwowych w Quebecu. Wśród pracowników umysłowych znaleziono statystycznie istotny związek między używaniem narkotyków (marihuana, kokaina) a stresem w pracy, nawet po kontroli innych czynników (wsparcie, wiek, płeć, wykształcenie, dochody, alkohol, aktywność fizyczna).",
      sh: "stres w pracy ↔ narkotyki" },
    { id: "kultura-stres", u: "hr-krytyka", term: "Stres w innych kulturach",
      plain: "W Indiach trudno nawet przetłumaczyć słowo „stres”. Zachodnia skala nie pasuje wszędzie.",
      def: "Laungani (1996): samo słowo „stres” trudno przetłumaczyć na inne języki; zachodnie koncepcje stresu mogą nie oddawać doświadczania stresu w dużej części świata. W kulturach kolektywistycznych (Indie, Japonia, Izrael) dobro grupy ma pierwszeństwo, więc stresujące mogą być inne zdarzenia niż w kulturach indywidualistycznych, takich jak USA, gdzie powstała SRRS.",
      sh: "kolektywizm zmienia, co stresuje" },
    { id: "rahe-czynniki", u: "hr-krytyka", term: "Cztery dodatkowe czynniki Rahe’a",
      plain: "Poza samym wynikiem LCU liczy się: doświadczenie, radzenie sobie, odporność organizmu i to, jak dbasz o siebie w chorobie.",
      def: "Rahe zaproponował, by przy prognozowaniu chorób brać pod uwagę: (1) doświadczenie ze stresującymi zdarzeniami w przeszłości; (2) zdolność radzenia sobie (obrony psychiczne); (3) wytrzymałość systemów fizjologicznych (np. odpornościowego); (4) sposób radzenia sobie z chorobą (szukanie pomocy, zachowania przyspieszające powrót do zdrowia). Leczenie musi uwzględniać całą osobę: umysł i ciało.",
      sh: "doświadczenie, coping, odporność, leczenie" },

    /* ---------- Festinger: teoria ---------- */
    { id: "wymuszona-ulegosc", u: "fc-teoria", term: "Zachowanie sprzeczne z postawą",
      plain: "Jeśli robisz coś niezgodnego ze swoimi poglądami, poglądy mogą się dopasować do tego, co zrobiłeś.",
      def: "W niektórych przypadkach, gdy zachowanie jest sprzeczne z postawami, to postawy zmieniają się tak, aby pasowały do zachowania. Gdy ktoś zmusza osobę, by wygłosiła mowę sprzeczną z jej poglądami, jej postawy zmieniają się w kierunku tego, co powiedziała.",
      sh: "postawy dopasowują się do czynów" },
    { id: "nagroda-paradoks", u: "fc-teoria", term: "Paradoks nagrody",
      plain: "Oczekiwano, że większa zapłata za mowę wbrew poglądom bardziej zmieni poglądy. Stało się odwrotnie.",
      def: "Wcześniejsze teorie tłumaczyły zmianę przekonań ćwiczeniem mowy w myśli i wymyślaniem argumentów. Gdy oferowano nagrodę pieniężną za mowę wbrew poglądom, oczekiwano większej zmiany przy większej nagrodzie. Wyższe nagrody spowodowały jednak mniejszą zmianę niż nagrody niewielkie, czego nie wyjaśniały teorie uczenia się (warunkowanie, wzmocnienia).",
      sh: "mniejsza nagroda, większa zmiana" },
    { id: "dysonans", u: "fc-teoria", term: "Dysonans poznawczy",
      plain: "Przykre napięcie, gdy wiesz o sobie dwie rzeczy, które do siebie nie pasują.",
      def: "Leon Festinger (Stanford). „Poznawczy” odnosi się do procesów umysłowych (myśli, idee, wiedza, postawy, przekonania), „dysonans” oznacza sprzeczność. Dysonans pojawia się, gdy uświadomimy sobie wzajemnie niespójne informacje; powstaje dyskomfort psychiczny o natężeniu zależnym od wagi sprawy, który motywuje do jego zmniejszenia. Skoro zachowania nie można zmienić, zmieniają się postawy.",
      sh: "napięcie z niespójnych poznań" },
    { id: "trzesienie", u: "fc-teoria", term: "Pogłoski po trzęsieniu ziemi w Indiach",
      plain: "Ludzie bali się, choć byli bezpieczni. Plotki o kolejnych trzęsieniach usprawiedliwiały ich strach.",
      def: "Teoria powstała z relacji o pogłoskach w Indiach po trzęsieniu ziemi w 1934 r. Poza strefą katastrofy rozeszły się plotki o jeszcze silniejszych wstrząsach. Pogłoski nie zwiększały lęku, lecz go uzasadniały: ludzie byli przerażeni, choć mieszkali w bezpiecznym obszarze (dysonans), a plotki zmniejszały ten dysonans.",
      sh: "plotki uzasadniały lęk" },
    { id: "konsonans", u: "fc-teoria", term: "Konsonans",
      plain: "Stan zgodności między poglądami a zachowaniem. Dysonans próbujemy zamienić w konsonans.",
      def: "Jednym ze sposobów zmniejszenia dysonansu jest zmiana własnych opinii, tak aby zgadzały się z zachowaniem; wtedy między opiniami a zachowaniem istnieje konsonans. Zmiany postaw są największe, gdy dysonans jest duży.",
      sh: "zgodność opinii z zachowaniem" },
    { id: "uzasadnienie", u: "fc-teoria", term: "Uzasadnienie zachowania",
      plain: "Jeśli masz dobry powód, by powiedzieć coś wbrew sobie (presja, duża zapłata), dysonans jest mały.",
      def: "Jeśli wiesz, że istnieją uzasadnione przyczyny, dla których mówisz „nie X” (presja, obietnica nagrody, groźba kary), dysonans będzie mniejszy lub zniknie. Dysonans jest tym większy, im bardziej uważasz swoje niespójne zachowanie za rezultat dokonanego wyboru.",
      sh: "mocny powód zmniejsza dysonans" },

    /* ---------- eksperyment ---------- */
    { id: "badani-fc", u: "fc-eksperyment", term: "Badani i przykrywka",
      plain: "71 studentów psychologii, którzy myśleli, że biorą udział w badaniu „pomiaru wyników działania”.",
      def: "Badani: 71 mężczyzn, studentów niższych lat psychologii, zobowiązanych do udziału w eksperymentach przez 3 godziny w semestrze. Zapisali się na badanie „pomiaru wyników działania”; prawdziwy cel ukryto, żeby nie wpłynąć na reakcje. Powiedziano im, że po eksperymencie wydział przeprowadzi z nimi rozmowę o ich doświadczeniach.",
      sh: "71 studentów, „pomiar wyników działania”" },
    { id: "nudne-zadania", u: "fc-eksperyment", term: "Nudne zadania",
      plain: "Pół godziny przekładania szpulek i pół godziny obracania kołków. Celowo bardzo nudne.",
      def: "Taca z 12 szpulkami: zdjąć, położyć na stole, odłożyć, jedną ręką, przez ponad 30 minut, pod okiem prowadzącego ze stoperem. Potem tablica z 48 kwadratowymi klockami: obracać każdy o ćwierć obrotu zgodnie z ruchem wskazówek zegara, przez 30 minut. Cel: „sprawienie, aby każdy z badanych doświadczył czegoś, na temat czego miałby nieco negatywną opinię”.",
      sh: "szpulki i kołki, celowo nudne" },
    { id: "trzy-grupy", u: "fc-eksperyment", term: "Trzy grupy",
      plain: "Grupa kontrolna nie kłamała. Pozostali za 1 albo 20 dolarów mówili kolejnej osobie, że zadania były super.",
      def: "Losowy przydział do trzech grup: (1) 1 dolar za kłamstwo, (2) 20 dolarów za kłamstwo, (3) kontrolna: bez kłamstwa i bez pieniędzy, po zadaniach od razu na rozmowę. Z analizy wykluczono 11 badanych z powodu błędów proceduralnych, więc w każdej grupie było 20 osób.",
      sh: "1 $, 20 $, kontrolna" },
    { id: "wymysl", u: "fc-eksperyment", term: "Wymysł z grupą B",
      plain: "Badanemu mówiono, że następna osoba ma dostać informację, że zadania są ciekawe, a pomocnik zachorował. Czy mógłby go zastąpić?",
      def: "Badanemu mówiono, że był w grupie A (bez wcześniejszej informacji), a grupa B dowiaduje się od studenta, że zadania są przyjemne i ciekawe. Prowadzący wracał zakłopotany: student, który zwykle to robi, jest chory, a badany z grupy B czeka. Proszono badanego o przekazanie informacji za 1 lub 20 dolarów; dostawał kartkę „Dla Grupy B”: „To było bardzo przyjemne, miałem świetną zabawę… intrygujące, ekscytujące”. „Badany z grupy B” był pomocnikiem eksperymentatora.",
      sh: "zastępstwo za „chorego” pomocnika" },
    { id: "pytania-fc", u: "fc-eksperyment", term: "Cztery pytania w rozmowie końcowej",
      plain: "Czy zadania były ciekawe? Czy dużo się dowiedziałeś? Czy to ważne dla nauki? Czy wziąłbyś udział znowu?",
      def: "(1) Czy zadania były interesujące i przyjemne (−5 do +5)? (2) Jak wiele się dowiedziałeś o swojej zdolności wykonywania takich zadań (0–10)? (3) Czy eksperyment mierzył coś ważnego (0–10)? (4) Czy chciałbyś wziąć udział w podobnym eksperymencie (−5 do +5)? Pytania 1 i 4 sprawdzały teorię dysonansu.",
      sh: "pytania 1 i 4 testowały teorię" },
    { id: "wyniki-fc", u: "fc-eksperyment", term: "Wyniki: 1 dolar lubił zadania najbardziej",
      plain: "Ci, którzy dostali dolara, ocenili nudne zadania jako najprzyjemniejsze i najchętniej wzięliby udział znowu.",
      def: "Tab. 6.7, pytanie 1 (przyjemność): kontrolna −0,45, grupa 1 $ +1,35, grupa 20 $ −0,05. Pytanie 4 (chęć udziału): −0,62, +1,20, −0,25. Różnice były istotne. Wbrew zdrowemu rozsądkowi badani, którym zapłacono dolara, twierdzili, że zadania podobały im się bardziej niż tym za 20 dolarów i tym, którzy nie kłamali.",
      sh: "1 $: +1,35; 20 $: −0,05; kontrolna: −0,45" },
    { id: "wniosek-festinger", u: "fc-eksperyment", term: "Dwa wnioski Festingera",
      plain: "Jeśli zrobisz coś wbrew sobie, zmienisz poglądy. Im silniej cię do tego zmuszono, tym mniej je zmienisz.",
      def: "(1) Jeżeli jakąś osobę nakłoni się, by zrobiła lub powiedziała coś sprzecznego z jej prywatnymi poglądami, wystąpi tendencja do zmiany poglądów, aby współbrzmiały z tym, co zrobiła. (2) Im większą presję się wywiera, aby wywołać takie zachowanie, tym słabsza jest powyższa tendencja.",
      sh: "zmiana poglądów, słabsza przy dużej presji" },
    { id: "wyjasnienie-fc", u: "fc-eksperyment", term: "Dlaczego 1 dolar zadziałał",
      plain: "20 dolarów to dobry powód, żeby skłamać, więc nie trzeba zmieniać zdania. Dolar to za mało, więc w głowie zaczyna się „może to jednak było ciekawe”.",
      def: "Grupa 20 $: mocne uzasadnienie kłamstwa, mały dysonans, brak motywacji do zmiany opinii. Grupa 1 $: niewystarczające uzasadnienie, większy dysonans, więc badani zmieniali zdanie po to, aby zmniejszyć dyskomfort. Schemat: zachowanie sprzeczne z postawami + wystarczające uzasadnienie → mały dysonans → mała zmiana postaw; niewystarczające uzasadnienie → duży dysonans → duża zmiana.",
      sh: "za mało uzasadnienia, więc zmiana postawy" },

    /* ---------- krytyka i zastosowania ---------- */
    { id: "alternatywy", u: "fc-krytyka", term: "Sprawdzenie innych wyjaśnień",
      plain: "Może grupa za dolara po prostu lepiej kłamała? Nie: niezależni sędziowie nie znaleźli różnic w kłamstwach.",
      def: "Festinger przewidywał alternatywne wyjaśnienia (ćwiczenie w myśli, szukanie lepszych argumentów). Nagrano sesje, w których badani kłamali; dwie niezależne, niepoinformowane osoby oceniły treść i siłę przekonywania kłamstw. Między grupami nie było różnic, więc jedynym wyjaśnieniem był dysonans poznawczy.",
      sh: "kłamstwa w grupach były podobne" },
    { id: "cooper-fazio", u: "fc-krytyka", term: "Cztery warunki dysonansu (Cooper, Fazio, 1984)",
      plain: "Dysonans zmienia postawy, gdy: są złe skutki, czujesz się za nie odpowiedzialny, ciało jest pobudzone i wiesz, że to przez twoje zachowanie.",
      def: "(1) Zachowanie sprzeczne z postawami musi mieć negatywne konsekwencje (okłamanie kolegi). (2) Osobista odpowiedzialność za te konsekwencje: wolny wybór; jeśli ktoś cię zmusi, dysonans nie powstaje. (3) Pobudzenie fizjologiczne. (4) Świadomość, że pobudzenie wynika z niezgodnego zachowania.",
      sh: "skutki, odpowiedzialność, pobudzenie, świadomość" },
    { id: "komplement", u: "fc-krytyka", term: "Komplement o kapeluszu",
      plain: "Mówisz komuś, że ładny kapelusz, choć uważasz, że brzydki. Nikomu to nie szkodzi, więc twoje zdanie się nie zmienia.",
      def: "Pierwszy warunek (negatywne konsekwencje) wyjaśnia, dlaczego gdy mówisz komuś komplement na temat jego stroju, choć wydaje ci się okropny, twoje poglądy na jego temat się nie zmieniają: zachowanie nie ma negatywnych skutków.",
      sh: "kłamstwo bez szkody nie zmienia poglądów" },
    { id: "wolny-wybor", u: "fc-krytyka", term: "Wolny wybór mimo „wymuszonej uległości”",
      plain: "Tytuł mówi o wymuszeniu, ale badani czuli, że sami zdecydowali się skłamać. To właśnie było ważne.",
      def: "Choć w tytule pracy Festingera i Carlsmitha pojawia się „wymuszona uległość” (forced compliance), badani w rzeczywistości byli przeświadczeni, że ich działania były dobrowolne. Gdyby ktoś ich zmusił, dysonans by nie powstał.",
      sh: "badani czuli, że decydują sami" },
    { id: "perswazja", u: "fc-krytyka", term: "Dwie drogi zmiany postaw",
      plain: "Poglądy zmieniamy, bo ktoś nas przekonał albo przez dysonans.",
      def: "Teoria dysonansu jest powszechnie akceptowana i dobrze udokumentowana. Większość psychologów zgadza się, że opinie i postawy zmieniają się w wyniku dwóch procesów: perswazji (inni ludzie aktywnie próbują nas przekonać) i dysonansu poznawczego.",
      sh: "perswazja i dysonans" },
    { id: "albarracin", u: "fc-krytyka", term: "Postrzegane zachowania (Albarracín, Wyer, 2000)",
      plain: "Wystarczyło wmówić studentom, że kiedyś poparli jakiś pomysł, by zmienić ich poglądy na ten temat.",
      def: "Studentom wmówiono, że w przeszłości wyrazili opinię popierającą (lub przeciwną) ideę egzaminów całościowych na koniec studiów. Niezależnie od aktualnych przekonań ta informacja wpływała na ich przyszłe poglądy i zachowania: aby uniknąć dysonansu, zachowywali się zgodnie z postrzeganymi postawami.",
      sh: "fałszywa informacja o dawnej opinii" },
    { id: "kierowcy", u: "fc-krytyka", term: "Kierowcy pod wpływem narkotyków",
      plain: "Ci, którzy nadal brali narkotyki, twierdzili, że szkodzi tylko alkohol. Tak bronili się przed dysonansem.",
      def: "Albery i in. (2000): po programie leczenia dla osób, które prowadziły auto pod wpływem narkotyków, ci, którzy przestali je brać, uważali, że narkotyki upośledzają jazdę; ci, którzy nadal brali i jeździli, uważali, że tylko alkohol zwiększa ryzyko. Dalsze jeżdżenie po długim programie wywołałoby dysonans, któremu zapobiegali zaprzeczaniem.",
      sh: "zaprzeczanie chroni przed dysonansem" },
    { id: "aronson", u: "fc-krytyka", term: "Obłuda i prezerwatywy (Aronson)",
      plain: "Studenci, którzy nagrali apel o prezerwatywy i musieli przyznać, że sami ich nie używają, potem częściej ich używali.",
      def: "Elliot Aronson (UC Santa Cruz; Shea, 1997): studenci nagrywali wideo o tym, że prezerwatywy zmniejszają ryzyko HIV. Połowa musiała potem przyznać w grupie, że sama nie zawsze ich używa (stanąć twarzą w twarz z obłudą). Ta grupa częściej kupowała prezerwatywy, a po trzech miesiącach 92% deklarowało, że zawsze ich używa, wobec 55% w grupie tylko nagrywającej.",
      sh: "obłuda: 92% vs 55%" }
  ],

  exercises: [
    /* ---------- wstęp ---------- */
    { u: "wstep", t: "which", set: "badanie", q: "Plemię z Nowej Gwinei wskazuje twarze pasujące do historyjek.", a: 2, x: "Ekman i Friesen, 1971." },
    { u: "wstep", t: "which", set: "badanie", q: "Za nudne zadania i kłamstwo płacono jednym badanym dolara, innym dwadzieścia.", a: 4, x: "Festinger i Carlsmith, 1959." },
    { u: "wstep", t: "which", set: "badanie", q: "Lista 43 wydarzeń życiowych z przypisanymi punktami.", a: 3, x: "Holmes i Rahe, 1967." },
    { u: "wstep", t: "which", set: "badanie", q: "Pomiary tętna i ciśnienia oraz obserwacja w laboratorium ok. 10 000 cykli reakcji.", a: 1, x: "Masters i Johnson, 1966." },
    { u: "wstep", t: "tf", q: "Według Hocka emocje i motywacja to coś, co „po prostu się zdarza” i czego nie da się badać naukowo.", a: false,
      x: "Fałsz. To powszechne przekonanie, ale psychologowie przeprowadzili wiele badań, żeby je poznać." },
    { u: "wstep", t: "match", pairs: [["Masters i Johnson", "1966"], ["Holmes i Rahe", "1967"], ["Ekman i Friesen", "1971"], ["Festinger i Carlsmith", "1959"]],
      x: "Daty publikacji czterech prac rozdziału." },

    /* ---------- MJ tło ---------- */
    { u: "mj-tlo", t: "mcq", q: "Dlaczego Hock umieścił badania nad seksualnością w rozdziale o emocjach?",
      a: ["Bo emocje mocno wpływają na zachowania seksualne", "Bo seksualność to wyłącznie fizjologia", "Bo Masters i Johnson byli psychologami", "Bo badania dotyczyły tylko zwierząt"],
      x: "Emocje mają ogromny wpływ na uczucia i zachowania seksualne, a te są potężnymi siłami motywacyjnymi.",
      w: ["Hock podkreśla, że u ludzi seksualność jest zjawiskiem psychicznym.", "Nie o to chodzi.", "Badano ludzi."] },
    { u: "mj-tlo", t: "mcq", q: "Jaka była główna słabość raportów Kinseya?",
      a: ["Opierały się na samoopisie i nie badały reakcji ciała", "Objęły zbyt mało osób, żeby coś z nich wynikało", "Badały wyłącznie osoby homoseksualne", "Powstały dopiero w latach 70."],
      x: "Samoopis (odpowiedzi społecznie akceptowalne) i tylko to, co ludzie robią, a nie co się dzieje w ciele.",
      w: ["Objęły tysiące osób.", "Nie.", "Koniec lat 40. i początek 50."] },
    { u: "mj-tlo", t: "mcq", q: "Co umożliwiło badania Mastersa i Johnson w latach 60.?",
      a: ["Rewolucja seksualna i zmiana klimatu społecznego", "Nowe przepisy wymagające badań nad seksem", "Zakończenie badań Kinseya z nakazu sądu", "Wynalezienie aparatury EEG"],
      x: "Wcześniej poglądy wiktoriańskie uniemożliwiały poparcie finansowe i społeczne.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "mj-tlo", t: "mcq", q: "Jaki był główny cel badań Mastersa i Johnson?",
      a: ["Pomoc w leczeniu problemów seksualnych", "Opis postaw moralnych wobec seksu", "Policzenie, jak często ludzie współżyją", "Porównanie ludzi z innymi gatunkami"],
      x: "Cel terapeutyczny: żeby leczyć zaburzenia, trzeba znać fizjologię reakcji.",
      w: ["Tym się nie zajmowali.", "To raczej Kinsey.", "Nie."] },
    { u: "mj-tlo", t: "tf", q: "Według Hocka ludzie są prawdopodobnie jedynym gatunkiem, który ma problemy seksualne o podłożu psychicznym.", a: true,
      x: "Tak: zahamowanie pożądania, anorgazmia, zaburzenia erekcji itd." },

    /* ---------- MJ metoda ---------- */
    { u: "mj-metoda", t: "mcq", q: "Dlaczego wyników z pierwszymi badanymi (prostytutkami) nie można było uogólniać?",
      a: ["Bo nie byli reprezentatywni dla całej populacji", "Bo odmówili poddania się badaniom lekarskim", "Bo badania z nimi trwały tylko jeden dzień", "Bo nie znali języka angielskiego"],
      x: "Ich styl życia i doświadczenia nie były typowe; pomogli jednak opracować metody.",
      w: ["Nie.", "Prawie dwa lata.", "Nie."] },
    { u: "mj-metoda", t: "mcq", q: "Ilu ochotników objęła tab. 6.1?",
      a: ["382 mężczyzn i 312 kobiet", "80 mężczyzn i 80 kobiet", "8 kobiet i 3 mężczyzn", "Tysiące osób z ankiet"],
      x: "W wieku od 18 do 89 lat.",
      w: ["80 mężczyzn to grupa z pomiarów penisa.", "To pierwsi badani.", "To Kinsey."] },
    { u: "mj-metoda", t: "mcq", q: "Jak badaczom udało się, że badani czuli się swobodnie?",
      a: ["Mierzyli dopiero, gdy badani czuli się bezpiecznie", "Płacili badanym bardzo wysokie wynagrodzenie", "Badali ich wyłącznie w domach", "Podawali badanym środki uspokajające przed sesją"],
      x: "Najpierw aktywność bez personelu, potem przy zespole; zaufanie i anonimowość.",
      w: ["Nie ma o tym mowy.", "Badania odbywały się w laboratorium.", "Nie."] },
    { u: "mj-metoda", t: "mcq", q: "Ile cykli reakcji seksualnych przeanalizowano?",
      a: ["Ok. 10 000", "Ok. 1000", "Ok. 382", "Ok. 100 000"],
      x: "W proporcji kobiet do mężczyzn 3:1.",
      w: ["Za mało.", "To liczba mężczyzn.", "Za dużo."] },
    { u: "mj-metoda", t: "multi", q: "Co mierzono podczas aktywności seksualnej?",
      a: ["tętno", "ciśnienie krwi", "tempo oddychania"], o: ["fale mózgowe EEG", "poziom hormonów we krwi"],
      x: "Standardowe pomiary fizjologiczne plus obserwacja reakcji.",
      w: ["Nie wymieniono.", "Nie wymieniono."] },
    { u: "mj-metoda", t: "tf", q: "Ochotników poddano badaniom lekarskim, żeby sprawdzić stopień normalności pod względem reprodukcyjnym.", a: true, x: "Tak." },

    /* ---------- MJ cykl ---------- */
    { u: "mj-cykl", t: "order", q: "Ułóż fazy cyklu reakcji seksualnych.",
      a: ["Pobudzenie", "Plateau", "Orgazm", "Odprężenie"], x: "Tab. 6.2." },
    { u: "mj-cykl", t: "which", set: "faza", q: "Pierwsza oznaka u kobiet: zwilgotnienie pochwy.", a: 1, x: "Faza pobudzenia." },
    { u: "mj-cykl", t: "which", set: "faza", q: "Pełny wzwód, który nie zanika przy rozproszeniu uwagi; gruczoły Cowpera wydzielają płyn.", a: 2, x: "Faza plateau." },
    { u: "mj-cykl", t: "which", set: "faza", q: "Rytmiczne skurcze mięśni co 0,8 sekundy.", a: 3, x: "Orgazm." },
    { u: "mj-cykl", t: "which", set: "faza", q: "Ok. 50% utraty wzwodu w ciągu pierwszej minuty.", a: 4, x: "Faza odprężenia." },
    { u: "mj-cykl", t: "which", set: "faza", q: "Otwarcie pochwy zmniejsza się do 50%, a jej zewnętrzna jedna trzecia obrzmiewa.", a: 2, x: "Faza plateau." },
    { u: "mj-cykl", t: "mcq", q: "Co Masters i Johnson sami powiedzieli o podziale na cztery fazy?",
      a: ["Że jest arbitralny, ale ułatwia omawianie", "Że jest jedynym możliwym podziałem", "Że dotyczy tylko kobiet", "Że jest kulturowo uwarunkowany"],
      x: "Podział był pomocniczy; dziś w rozmowach o reakcjach wciąż się do niego nawiązuje.",
      w: ["Przyznali coś odwrotnego.", "Obie płcie przechodzą te same fazy.", "Nie."] },
    { u: "mj-cykl", t: "mcq", q: "Jak długo trwał orgazm u kobiet w badaniach?",
      a: ["Od 7,4 do 104,6 sekundy", "Zawsze ok. 0,8 sekundy", "Od 1 do 5 minut", "Ok. 10 sekund u wszystkich"],
      x: "Odczuwana intensywność nie zależy od czasu trwania.",
      w: ["0,8 s to odstęp między skurczami.", "Nie.", "Nie."] },
    { u: "mj-cykl", t: "tf", q: "Wyniki Mastersa i Johnson dotyczą nie tylko badanych, ale prawie każdego z nas.", a: true,
      x: "Tak: reakcje fizjologiczne na stymulację są u każdego takie same, choć zdarzają się wyjątki." },

    /* ---------- MJ mity ---------- */
    { u: "mj-mity", t: "mcq", q: "Czym jest „mit falliczny”?",
      a: ["Obawa, że większy penis lepiej stymuluje partnerkę", "Przekonanie, że kobiety nie mają orgazmów", "Teoria Freuda o zazdrości o penisa", "Przekonanie o braku refrakcji u mężczyzn"],
      x: "Plus druga obawa: że własny penis jest za mały.",
      w: ["Nie.", "To Freud, nie Masters i Johnson.", "Nie."] },
    { u: "mj-mity", t: "mcq", q: "Jaką średnią długość wzwiedzionego penisa podali badacze?",
      a: ["Ok. 15 cm", "Ok. 7,5 cm", "Ok. 20 cm", "Ok. 10 cm"],
      x: "W spoczynku średnio ok. 7,5 cm, we wzwodzie ok. 15 cm.",
      w: ["To średnia w spoczynku.", "Za dużo.", "Nie."] },
    { u: "mj-mity", t: "mcq", q: "Co się okazało przy porównaniu penisów w spoczynku i we wzwodzie?",
      a: ["Mniejsze w spoczynku powiększały się bardziej", "Większe w spoczynku rosły bardziej", "Wszystkie rosły o tyle samo", "Rozmiar w spoczynku przewidywał rozmiar we wzwodzie"],
      x: "Np. 7,1 cm urósł o 8,4 cm, a 10,2 cm tylko o 5,3 cm; oba do 15,5 cm.",
      w: ["Odwrotnie.", "Nie.", "Właśnie nie."] },
    { u: "mj-mity", t: "mcq", q: "Jaki wniosek o wielkości penisa wyciągnęli Masters i Johnson?",
      a: ["Jest mało istotna dla stymulacji partnerki", "Decyduje o satysfakcji partnerki", "Zależy wyłącznie od wieku mężczyzny", "Wpływa na długość fazy plateau"],
      x: "Pochwa jest elastyczna i w fazie plateau obejmuje penisa każdej wielkości (s. 195).",
      w: ["Właśnie to obalili.", "Nie.", "Nie."] },
    { u: "mj-mity", t: "sort", q: "Kobiety czy mężczyźni (według Mastersa i Johnson)?", cats: ["Kobiety", "Mężczyźni"],
      why: ["Brak refrakcji, możliwe kolejne orgazmy.", "Okres refrakcji, wydłuża się z wiekiem."],
      items: [["brak okresu refrakcji", 0], ["możliwe kolejne orgazmy przy dalszej stymulacji", 0], ["orgazm może trwać stosunkowo długo", 0],
        ["okres refrakcji od minut do godzin", 1], ["refrakcja wydłuża się z wiekiem", 1], ["ejakulacja w dwóch etapach", 1]],
      x: "Różnice w orgazmie i fazie odprężenia." },
    { u: "mj-mity", t: "tf", q: "Przed badaniami Mastersa i Johnson powszechnie uważano, że to kobiety mają większe możliwości doświadczania orgazmów.", a: false,
      x: "Fałsz: uważano, że mężczyźni. Odkrycie zmieniło postawy wobec męskiej i kobiecej seksualności." },
    { u: "mj-mity", t: "tf", q: "Według Mastersa i Johnson wszystkie kobiety dążą do wielokrotnych orgazmów.", a: false,
      x: "Fałsz: wiele kobiet nigdy ich nie doświadczyło i jest w pełni zadowolonych; ludzie różnią się tym, co daje im satysfakcję." },

    /* ---------- MJ krytyka ---------- */
    { u: "mj-krytyka", t: "multi", q: "Jakie dwa główne zarzuty stawiano Mastersowi i Johnson?",
      a: ["arbitralny podział na cztery fazy", "pominięcie aspektów poznawczych i emocjonalnych"], o: ["zbyt mała liczba badanych", "badanie tylko mężczyzn", "brak pomiarów fizjologicznych"],
      x: "Obydwie linie krytyki są nietrafne: autorzy odpowiedzieli na nie od początku.",
      w: ["Badanych było kilkuset.", "Badano obie płcie.", "Pomiary były podstawą metody."] },
    { u: "mj-krytyka", t: "mcq", q: "Od czego według Helen Singer Kaplan powinna zaczynać się analiza reakcji seksualnych?",
      a: ["Od pożądania", "Od orgazmu", "Od fazy plateau", "Od odprężenia"],
      x: "Model trzyfazowy: pożądanie, ukrwienie naczyń, skurcze mięśni.",
      w: ["Nie.", "Kaplan nie oddzielała plateau od pobudzenia.", "Nie."] },
    { u: "mj-krytyka", t: "order", q: "Ułóż fazy modelu Helen Singer Kaplan.",
      a: ["Pożądanie", "Ukrwienie naczyń (przekrwienie genitaliów)", "Skurcze mięśni (orgazm)"], x: "Trzy fazy zamiast czterech." },
    { u: "mj-krytyka", t: "mcq", q: "Co wykazało szwedzkie badanie 319 mężczyzn w wieku 50–80 lat?",
      a: ["Ponad 80% uważało seks za ważną część życia", "Większość straciła zainteresowanie seksem", "Tylko 10% osiągało jeszcze erekcję", "Seks był ważny tylko dla żonatych"],
      x: "Prawie 75% wciąż osiągało erekcję i orgazm (Helgason i in., 1996).",
      w: ["Odwrotnie.", "Prawie 75%.", "Nie ma o tym mowy."] },
    { u: "mj-krytyka", t: "mcq", q: "Co pokazało badanie kobiet z uszkodzeniami rdzenia kręgowego?",
      a: ["Wiele z nich doświadczyło orgazmu", "Żadna nie mogła być pobudzona", "Reagowały tylko na leki", "Orgazm był możliwy tylko w fazie plateau"],
      x: "Więcej z nich doświadczyło orgazmu niż kobiet bez uszkodzeń (Whipple i in., 1996).",
      w: ["Właśnie to obalono.", "Nie.", "Nie."] },
    { u: "mj-krytyka", t: "tf", q: "Badania Mastersa i Johnson są podstawą prawie każdej terapii seksualnej.", a: true, x: "Tak." },
    { u: "mj-krytyka", t: "tf", q: "Późniejsze badania potwierdziły, że żaden mężczyzna nie może mieć wielokrotnych orgazmów.", a: false,
      x: "Fałsz: niewielka część mężczyzn je przeżywa, z krótkim albo bez okresu refrakcji." },

    /* ---------- Ekman tło ---------- */
    { u: "ek-tlo", t: "mcq", q: "Dlaczego wcześniejsze wyniki Ekmana z pięciu krajów można było podważyć?",
      a: ["Badani znali mimikę z filmów i telewizji", "Badano za mało osób z każdego kraju", "Zdjęcia były złej jakości", "Badani nie znali języka badaczy"],
      x: "Kontakt z międzynarodowymi mass mediami mógł nauczyć ich tych samych wyrazów twarzy.",
      w: ["Nie o to chodziło.", "Nie.", "Nie."] },
    { u: "ek-tlo", t: "mcq", q: "Gdzie Ekman i Friesen znaleźli kulturę bez kontaktu z mediami?",
      a: ["W Nowej Gwinei", "W Mongolii", "Na Sumatrze", "W Rumunii"],
      x: "Lud Fore w Southeast Highlands.",
      w: ["To przykład z wstępu Hocka.", "To przykład z wstępu Hocka.", "To przykład z wstępu Hocka."] },
    { u: "ek-tlo", t: "mcq", q: "Co sprawdzała hipoteza Ekmana i Friesena?",
      a: ["Czy kultura bez pisma łączy te same miny z emocjami", "Czy ludzie Zachodu lepiej rozpoznają emocje", "Czy dzieci uczą się mimiki wyłącznie od rodziców", "Czy emocje zależą od języka"],
      x: "Badani mieli być maksymalnie wizualnie odizolowani od kultur piśmiennych (s. 125).",
      w: ["Nie.", "Nie wprost.", "Nie."] },
    { u: "ek-tlo", t: "tf", q: "Paul Ekman jest uważany za wiodącego badacza mimicznego wyrażania emocji.", a: true, x: "Tak." },

    /* ---------- Ekman metoda ---------- */
    { u: "ek-metoda", t: "which", set: "emocja", q: "„Przybyli jego znajomi i jest zadowolony.”", a: 1, x: "Zadowolenie." },
    { u: "ek-metoda", t: "which", set: "emocja", q: "„Jego dziecko zmarło i jest bardzo smutny.”", a: 2, x: "Smutek." },
    { u: "ek-metoda", t: "which", set: "emocja", q: "„Jest zagniewany i zaraz będzie walczył.”", a: 3, x: "Gniew." },
    { u: "ek-metoda", t: "which", set: "emocja", q: "„Patrzy na coś nowego i nieoczekiwanego.”", a: 4, x: "Zaskoczenie." },
    { u: "ek-metoda", t: "which", set: "emocja", q: "„Patrzy na coś, co cuchnie.”", a: 5, x: "Obrzydzenie." },
    { u: "ek-metoda", t: "which", set: "emocja", q: "„Sam w domu, bez noża i łuku, a w drzwiach stoi dzika świnia.”", a: 6, x: "Strach." },
    { u: "ek-metoda", t: "mcq", q: "Dlaczego historyjka o strachu była dłuższa od pozostałych?",
      a: ["Żeby nie pomylić go z zaskoczeniem lub gniewem", "Bo w języku Fore nie ma słowa „strach”", "Bo była przeznaczona tylko dla dzieci", "Bo czytano ją badanym dwukrotnie"],
      x: "Autorzy tak to tłumaczą.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "ek-metoda", t: "mcq", q: "Ilu członków ludu Fore z Południa zbadano (bez grupy z kontaktem z Zachodem)?",
      a: ["189 dorosłych i 130 dzieci", "23 dorosłych", "11 000 osób", "40 dorosłych i 24 dzieci"],
      x: "Z 11-tysięcznej populacji.",
      w: ["To grupa z kontaktem z Zachodem.", "To cała populacja.", "40 i 24 to zdjęcia i osoby na zdjęciach."] },
    { u: "ek-metoda", t: "mcq", q: "Spośród ilu fotografii wybierali dorośli, a spośród ilu dzieci?",
      a: ["Dorośli z trzech, dzieci z dwóch", "Dorośli z dwóch, dzieci z trzech", "Wszyscy z sześciu", "Wszyscy z trzech"],
      x: "Jedna fotografia była prawidłowa.",
      w: ["Odwrotnie.", "Nie.", "Dzieci miały dwie."] },
    { u: "ek-metoda", t: "mcq", q: "Dlaczego badacz z Zachodu nie patrzył na badanych?",
      a: ["Żeby niechcący im nie podpowiadać", "Bo tak nakazywał obyczaj Fore", "Bo nie znał ich języka", "Bo nagrywał ich kamerą"],
      x: "Unikał mimowolnego podpowiadania i tylko zapisywał odpowiedzi.",
      w: ["Nie.", "Od tego był tłumacz.", "Nie."] },
    { u: "ek-metoda", t: "multi", q: "Jakie warunki spełniali badani Fore?",
      a: ["nie oglądali filmów", "nie znali angielskiego ani pidżynu", "nie pracowali dla osoby z Zachodu"], o: ["chodzili do szkół misyjnych", "mieszkali w osadach ludzi Zachodu"],
      x: "Szkoły misyjne i osady dotyczyły porównawczej grupy 23 dorosłych.",
      w: ["To grupa z kontaktem.", "To grupa z kontaktem."] },
    { u: "ek-metoda", t: "tf", q: "Zdjęcia przedstawiały twarze ludzi z plemienia Fore.", a: false,
      x: "Fałsz: twarze ludzi Zachodu, których Fore być może nigdy wcześniej nie widzieli." },

    /* ---------- Ekman wyniki ---------- */
    { u: "ek-wyniki", t: "mcq", q: "Którą emocję dorośli Fore rozpoznawali najlepiej?",
      a: ["Zadowolenie (92,3%)", "Zaskoczenie (68,0%)", "Strach (80,5%)", "Smutek (79,0%)"],
      x: "Tab. 6.4.",
      w: ["Najgorzej.", "Nie.", "Nie."] },
    { u: "ek-wyniki", t: "mcq", q: "Ile wynosiło prawdopodobieństwo trafienia na chybił trafił u dorosłych?",
      a: ["33%", "50%", "17%", "70%"],
      x: "Trzy fotografie; u dzieci 50%, bo dwie.",
      w: ["To u dzieci.", "Nie.", "Nie."] },
    { u: "ek-wyniki", t: "mcq", q: "Których emocji Fore nie potrafili dobrze od siebie odróżnić?",
      a: ["Strachu i zaskoczenia", "Gniewu i smutku", "Zadowolenia i zaskoczenia", "Obrzydzenia i gniewu"],
      x: "Tylko 42,7% odróżniało strach od zaskoczenia.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "ek-wyniki", t: "mcq", q: "Jak autorzy wyjaśnili mylenie strachu z zaskoczeniem?",
      a: ["W tej kulturze groźne zdarzenia są zwykle nagłe", "Fore nie odczuwali strachu", "Zdjęcia strachu były źle wykonane", "Tłumacze źle przełożyli historyjkę o strachu"],
      x: "Np. nagłe pojawienie się wroga, ducha lub czarownika (s. 129).",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "ek-wyniki", t: "mcq", q: "Dlaczego dzieci miały lepsze wyniki niż dorośli?",
      a: ["Bo wybierały z dwóch zdjęć zamiast z trzech", "Bo częściej oglądały twarze obcych", "Bo lepiej rozumiały historyjki", "Bo badali je inni badacze"],
      x: "Takie jest wyjaśnienie Ekmana i Friesena.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "ek-wyniki", t: "tf", q: "Dorośli Fore z kontaktem z Zachodem rozpoznawali emocje istotnie lepiej niż ci bez kontaktu.", a: false,
      x: "Fałsz: nie znaleziono istotnej różnicy." },
    { u: "ek-wyniki", t: "tf", q: "Studenci w USA prawidłowo rozpoznali emocje na nagraniach twarzy członków Fore.", a: true,
      x: "Tak: zgodność działała w obie strony." },

    /* ---------- Ekman ewolucja ---------- */
    { u: "ek-ewolucja", t: "multi", q: "Które emocje są podstawowe (uniwersalne) według Ekmana?",
      a: ["obrzydzenie", "zaskoczenie", "gniew"], o: ["wstyd", "zazdrość", "radość"],
      x: "Sześć: zadowolenie, gniew, smutek, zaskoczenie, obrzydzenie, strach. Radość to skrajna forma zadowolenia.",
      w: ["Nie ma go na liście.", "Nie ma jej na liście.", "To odmiana zadowolenia."] },
    { u: "ek-ewolucja", t: "mcq", q: "Co wynika z uniwersalności mimiki dla sporu „natura czy wychowanie”?",
      a: ["Że wyrazy twarzy są wrodzone", "Że uczymy się ich od rodziców", "Że zależą od języka", "Że zależą od klimatu"],
      x: "Są biologicznie zdeterminowane już w chwili narodzin.",
      w: ["Odwrotnie.", "Nie.", "Nie."] },
    { u: "ek-ewolucja", t: "match", pairs: [["strach", "cichy sygnał przed drapieżnikiem"], ["gniew", "ostrzega słabszych, by trzymali się z dala"], ["obrzydzenie", "„Fuj! Nie jedzcie tego”"]],
      x: "Darwin (1872): wyrazy twarzy jako mechanizmy adaptacyjne." },
    { u: "ek-ewolucja", t: "mcq", q: "Kogo szybciej znajdujemy w tłumie (Hansen, Hansen, 1988)?",
      a: ["Zagniewaną twarz wśród zadowolonych", "Zadowoloną twarz wśród zagniewanych", "Obie tak samo szybko", "Smutną twarz wśród zadowolonych"],
      x: "Średnio 0,91 s wobec 1,45 s.",
      w: ["To trwało dłużej: 1,45 s.", "Nie.", "Nie badano."] },
    { u: "ek-ewolucja", t: "mcq", q: "Na czym polega teoria sprzężenia zwrotnego mimiki?",
      a: ["Wyraz twarzy wpływa na odczuwaną emocję", "Emocje są zawsze widoczne na twarzy", "Mimikę kopiujemy od innych", "Twarz zdradza kłamstwo lepiej niż ciało"],
      x: "Napięcie mięśni twarzy wywoływało reakcje fizjologiczne właściwe dla emocji (Ekman i in., 1983).",
      w: ["Nie o to chodzi.", "Nie.", "Odwrotnie: ciało zdradza więcej."] },
    { u: "ek-ewolucja", t: "mcq", q: "Co odkryto, analizując aktorów w filmach z Hollywood?",
      a: ["Poza uśmiechem wystarczał jeden lub dwa elementy twarzy", "Aktorzy zawsze pokazywali pełny zestaw cech", "Widzowie nie rozpoznawali emocji aktorów", "Aktorzy w ogóle nie okazywali gniewu"],
      x: "Carroll i Russell (1997): uniesione brwi czy lekko wykrzywione usta wystarczają.",
      w: ["Tylko przy zadowoleniu.", "Nie.", "Nie."] },
    { u: "ek-ewolucja", t: "tf", q: "Ekman wykazał, że kłamstwo łatwiej wykryć, obserwując całe ciało niż samą twarz.", a: true, x: "Tak." },
    { u: "ek-ewolucja", t: "tf", q: "Dzieci z ADHD rozpoznają sześć podstawowych emocji lepiej niż ich rówieśnicy.", a: false,
      x: "Fałsz: istotnie gorzej (Singh i in., 1998)." },

    /* ---------- HR tło ---------- */
    { u: "hr-tlo", t: "mcq", q: "Czym różnią się choroby psychosomatyczne od hipochondrii?",
      a: ["Pierwsze są prawdziwe, hipochondria wyimaginowana", "Psychosomatyczne są wyimaginowane", "Hipochondria ma wyłącznie przyczyny fizyczne", "Niczym, to synonimy"],
      x: "Choroby psychosomatyczne: prawdziwe objawy i ból, przyczyny głównie psychiczne.",
      w: ["Odwrotnie.", "Nie.", "Nie wolno ich mylić."] },
    { u: "hr-tlo", t: "mcq", q: "Dlaczego nie bada się stresu w laboratorium?",
      a: ["Byłoby to nieetyczne i nie oddawałoby życia", "Bo stres nie istnieje w laboratorium", "Bo ludzie odmawiają udziału", "Bo nie ma aparatury do pomiaru"],
      x: "Stąd pomysł skali do pomiaru stresu życiowego.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "hr-tlo", t: "mcq", q: "Co według jednego z podejść opisanych przez Hocka jest stresem?",
      a: ["Każda emocja w skrajnej formie", "Tylko strach i gniew", "Wyłącznie zdarzenia negatywne", "Choroba psychosomatyczna"],
      x: "Nawet zadowolenie może być źródłem stresu.",
      w: ["Także inne emocje.", "Nie.", "To skutek, nie stres."] },
    { u: "hr-tlo", t: "tf", q: "Holmes i Rahe chcieli mierzyć nie tylko liczbę, ale też wielkość lub znaczenie stresujących wydarzeń.", a: true, x: "Tak." },

    /* ---------- HR skala ---------- */
    { u: "hr-skala", t: "mcq", q: "Które wydarzenie otrzymało arbitralną wartość 500 punktów?",
      a: ["Zawarcie związku małżeńskiego", "Śmierć współmałżonka", "Rozwód małżonków", "Zwolnienie z pracy zawodowej"],
      x: "Pozostałe zdarzenia oceniano w porównaniu ze ślubem.",
      w: ["Na skali ma 100.", "Na skali ma 73.", "Na skali ma 47."] },
    { u: "hr-skala", t: "mcq", q: "Które wydarzenie znalazło się na pierwszym miejscu SRRS?",
      a: ["Śmierć współmałżonka", "Rozwód", "Kara pozbawienia wolności", "Własna poważna choroba"],
      x: "100 punktów.",
      w: ["73.", "63.", "53."] },
    { u: "hr-skala", t: "mcq", q: "Które wydarzenie uznano za najmniej stresujące?",
      a: ["Drobne naruszenie prawa", "Wakacje", "Boże Narodzenie", "Zmiana nawyków żywieniowych"],
      x: "11 punktów.",
      w: ["13.", "12.", "15."] },
    { u: "hr-skala", t: "mcq", q: "Dlaczego na liście są też wydarzenia przyjemne, np. wakacje?",
      a: ["Bo stres to potrzeba przystosowania się", "Bo badani byli nastawieni pesymistycznie", "Bo to błąd w konstrukcji skali", "Bo dotyczą tylko osób chorych"],
      x: "Liczy się zmiana stabilnego stanu, a nie emocje (s. 217).",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "hr-skala", t: "mcq", q: "Co pokazały korelacje ocen w podgrupach (płeć, wiek, wykształcenie)?",
      a: ["Bardzo wysoką zgodność, więc skala pasuje do wszystkich", "Duże różnice między kobietami a mężczyznami", "Że skala działa tylko dla białych", "Że młodzi oceniali stres dużo wyżej"],
      x: "Skalę można stosować do wszystkich z podobną dokładnością.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "hr-skala", t: "match", pairs: [["śmierć współmałżonka", "100"], ["rozwód", "73"], ["zawarcie małżeństwa", "50"], ["Boże Narodzenie", "12"]],
      x: "Tab. 6.6." },
    { u: "hr-skala", t: "order", q: "Ułóż od najbardziej do najmniej stresującego (SRRS).",
      a: ["Śmierć współmałżonka", "Rozwód", "Zawarcie związku małżeńskiego", "Przejście na emeryturę", "Wakacje"],
      x: "100, 73, 50, 45, 13." },
    { u: "hr-skala", t: "tf", q: "Dwie pozycje SRRS wymagają aktualizacji z powodu zmian ekonomicznych od 1967 roku: kredyty powyżej i poniżej 10 000 dolarów.", a: true, x: "Tak." },

    /* ---------- HR LCU ---------- */
    { u: "hr-lcu", t: "mcq", q: "Czym są jednostki LCU?",
      a: ["Punktami za zmiany życiowe z ostatniego roku", "Liczbą przebytych chorób w ciągu roku", "Wynikiem testu inteligencji ogólnej", "Jednostką pomiaru ciśnienia krwi"],
      x: "Life change units; suma daje przybliżoną ilość stresu życiowego.",
      w: ["To skutek, który się prognozuje.", "Nie.", "Nie."] },
    { u: "hr-lcu", t: "mcq", q: "Jaki odsetek osób z wynikiem ponad 300 LCU miał poważne zmiany zdrowia (ryc. 6.1)?",
      a: ["Ok. 80%", "Ok. 37%", "Ok. 51%", "Ok. 10%"],
      x: "Z wykresu: 150–199 ok. 37%, 200–299 ok. 51%, ponad 300 ok. 79%.",
      w: ["To przy 150–199.", "To przy 200–299.", "10% to część wyjaśnianej zmienności."] },
    { u: "hr-lcu", t: "mcq", q: "Ile razy średnio chorowali marynarze z wynikiem 500–600 LCU?",
      a: ["2,1 razy", "1,4 razy", "1,9 razy", "3,5 razy"],
      x: "Rahe, Mahan, Arthur (1970).",
      w: ["Poniżej 100 LCU.", "300–400 LCU.", "Nie."] },
    { u: "hr-lcu", t: "tf", q: "Im więcej LCU, tym większe prawdopodobieństwo choroby w najbliższym czasie.", a: true,
      x: "Tak, choć związek jest słaby (ok. 10% zmienności)." },

    /* ---------- HR krytyka ---------- */
    { u: "hr-krytyka", t: "mcq", q: "Jakie zdarzenia najsilniej zwiastują choroby według późniejszych badań?",
      a: ["Nagłe, negatywne i niezależne od nas", "Pozytywne i wybrane przez nas", "Wszystkie w tym samym stopniu", "Tylko zdarzenia z dzieciństwa"],
      x: "Dlatego krytykuje się wrzucenie wszystkich zdarzeń na jedną skalę.",
      w: ["Odwrotnie.", "Nie.", "Nie."] },
    { u: "hr-krytyka", t: "mcq", q: "Ile zmienności stanu zdrowia wyjaśnia wynik LCU?",
      a: ["Ok. 10%", "Ok. 50%", "Ok. 80%", "Ok. 1%"],
      x: "Związek istotny statystycznie, ale słaby.",
      w: ["Za dużo.", "Za dużo.", "Za mało."] },
    { u: "hr-krytyka", t: "mcq", q: "Przykład emerytury ilustruje, że SRRS pomija…",
      a: ["interpretację zdarzenia przez osobę", "zdarzenia z pracy zawodowej", "osoby starsze", "zdarzenia pozytywne"],
      x: "Dla jednych koniec kariery, dla innych uwolnienie od harówki.",
      w: ["Są na liście.", "Nie.", "Są na liście."] },
    { u: "hr-krytyka", t: "mcq", q: "Jakie narzędzie zaproponował Cohen (1983)?",
      a: ["Skalę Postrzeganego Stresu", "Skalę Ponownego Przystosowania", "Test historyjek i fotografii", "Kwestionariusz LCU dla marynarzy"],
      x: "Uwzględnia ocenę powagi zdarzenia przez osobę.",
      w: ["To SRRS Holmesa i Rahe’a.", "To Ekman.", "Nie."] },
    { u: "hr-krytyka", t: "multi", q: "Które czynniki Rahe kazał brać pod uwagę oprócz wyniku LCU?",
      a: ["doświadczenie ze stresem w przeszłości", "zdolność radzenia sobie", "wytrzymałość systemów fizjologicznych"], o: ["iloraz inteligencji", "kolor skóry"],
      x: "Czwarty: sposób radzenia sobie z chorobą.",
      w: ["Nie.", "Oceny w grupach były zgodne."] },
    { u: "hr-krytyka", t: "mcq", q: "Co pokazały badania Launganiego (1996) w Indiach?",
      a: ["Zachodnia koncepcja stresu nie pasuje wszędzie", "Mieszkańcy Indii przeżywają mniej stresu", "SRRS działa w Indiach idealnie", "Stres w ogóle nie wpływa tam na zdrowie"],
      x: "Nawet słowo „stres” trudno przetłumaczyć; w kulturach kolektywistycznych stresują inne zdarzenia.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "hr-krytyka", t: "tf", q: "Między 1997 a połową 2000 roku SRRS cytowano w 367 artykułach.", a: true,
      x: "Tak; tylko praca Rottera była cytowana częściej." },
    { u: "hr-krytyka", t: "tf", q: "Badanie pacjentów ze złamaniem biodra nie wykazało związku ze zmianami w życiu.", a: false,
      x: "Fałsz: wyraźny związek (Peterson i in., 2000)." },

    /* ---------- FC teoria ---------- */
    { u: "fc-teoria", t: "mcq", q: "Czym jest dysonans poznawczy?",
      a: ["Napięciem wywołanym niespójnymi poznaniami", "Brakiem zdolności do logicznego myślenia", "Zgodą między poglądami a zachowaniem", "Kłamaniem dla pieniędzy"],
      x: "„Poznawczy” = procesy umysłowe, „dysonans” = sprzeczność.",
      w: ["Nie.", "To konsonans.", "To tylko sytuacja w eksperymencie."] },
    { u: "fc-teoria", t: "mcq", q: "Co według Festingera zmienia się, gdy zachowania nie da się już cofnąć?",
      a: ["Postawy", "Pamięć zdarzenia", "Osobowość", "Inteligencja"],
      x: "Zmiana opinii przywraca konsonans.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "fc-teoria", t: "mcq", q: "Jak Festinger wyjaśnił pogłoski po trzęsieniu ziemi w Indiach?",
      a: ["Pogłoski uzasadniały lęk i zmniejszały dysonans", "Pogłoski zwiększały lęk mieszkańców", "Ludzie chcieli w ten sposób opuścić region", "Pogłoski okazały się po prostu prawdziwe"],
      x: "Ludzie bali się, choć byli bezpieczni; plotki usprawiedliwiały strach.",
      w: ["Nie zwiększały, tylko uzasadniały.", "Nie.", "Nie miały naukowego uzasadnienia."] },
    { u: "fc-teoria", t: "mcq", q: "Kiedy według teorii dysonans jest największy?",
      a: ["Gdy uważamy zachowanie za wolny wybór", "Gdy dostajemy za to dużą nagrodę", "Gdy za odmowę grozi nam kara", "Gdy ktoś nas do tego zmusza"],
      x: "Presja, nagroda czy kara dają uzasadnienie i zmniejszają dysonans.",
      w: ["Duża nagroda zmniejsza dysonans.", "Kara to uzasadnienie.", "Przymus to uzasadnienie."] },
    { u: "fc-teoria", t: "mcq", q: "Dlaczego wyników z nagrodami nie wyjaśniały teorie uczenia się?",
      a: ["Bo większa nagroda dawała mniejszą zmianę", "Bo nagrody w ogóle nie działały", "Bo badano tylko zwierzęta", "Bo nagrody były przed badanymi ukryte"],
      x: "Wzmocnienie powinno działać tym silniej, im większe.",
      w: ["Działały, tylko odwrotnie.", "Nie.", "Nie."] },
    { u: "fc-teoria", t: "tf", q: "Stan zgodności między opiniami a zachowaniem to konsonans.", a: true, x: "Tak." },

    /* ---------- FC eksperyment ---------- */
    { u: "fc-eksperyment", t: "order", q: "Ułóż etapy eksperymentu (grupy 1 $ i 20 $).",
      a: ["Nudne zadania ze szpulkami i kołkami", "Prośba o zastąpienie „chorego” pomocnika", "Powiedzenie czekającej osobie, że zadania były ciekawe", "Rozmowa i ocena zadań"],
      x: "Grupa kontrolna szła od razu na rozmowę." },
    { u: "fc-eksperyment", t: "which", set: "grupa", q: "Kłamali za małą zapłatę i potem ocenili zadania najwyżej.", a: 1, x: "Grupa 1 dolar: +1,35." },
    { u: "fc-eksperyment", t: "which", set: "grupa", q: "Kłamali, ale mieli mocne uzasadnienie, więc prawie nie zmienili zdania.", a: 2, x: "Grupa 20 dolarów: −0,05." },
    { u: "fc-eksperyment", t: "which", set: "grupa", q: "Nie kłamali i nie dostali pieniędzy.", a: 3, x: "Grupa kontrolna: −0,45." },
    { u: "fc-eksperyment", t: "mcq", q: "Jak oceniła przyjemność zadań grupa 1 dolara (pytanie 1)?",
      a: ["+1,35", "−0,05", "−0,45", "+5,00"],
      x: "Najwyżej ze wszystkich grup.",
      w: ["To grupa 20 $.", "To grupa kontrolna.", "Nie."] },
    { u: "fc-eksperyment", t: "mcq", q: "Które pytania sprawdzały teorię dysonansu?",
      a: ["1 i 4", "2 i 3", "Tylko 3", "Wszystkie cztery"],
      x: "Przyjemność zadań i chęć ponownego udziału.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "fc-eksperyment", t: "mcq", q: "Kim był „badany z grupy B”?",
      a: ["Pomocnikiem eksperymentatora", "Prawdziwym badanym", "Profesorem psychologii", "Tłumaczem"],
      x: "Udawał badanego, któremu trzeba przekazać informację.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "fc-eksperyment", t: "mcq", q: "Po co przez godzinę przekładano szpulki i obracano kołki?",
      a: ["Żeby badani mieli o zadaniach negatywną opinię", "Żeby zmierzyć sprawność manualną rąk", "Żeby zmęczyć badanych przed testem", "Żeby sprawdzić cierpliwość badanych"],
      x: "Wtedy mówienie, że zadania były ciekawe, było kłamstwem.",
      w: ["To była przykrywka.", "Nie.", "Nie."] },
    { u: "fc-eksperyment", t: "mcq", q: "Dlaczego grupa 20 dolarów nie zmieniła zdania o zadaniach?",
      a: ["Bo miała mocne uzasadnienie kłamstwa", "Bo zadania jej się podobały", "Bo nie musiała kłamać", "Bo nie zrozumiała pytań w rozmowie"],
      x: "Mały dysonans, brak motywacji do zmiany opinii.",
      w: ["Oceniła je ok. 0.", "Kłamała.", "Nie."] },
    { u: "fc-eksperyment", t: "tf", q: "Wbrew zdrowemu rozsądkowi badani za dolara twierdzili, że zadania podobały im się bardziej niż badanym za 20 dolarów.", a: true, x: "Tak." },
    { u: "fc-eksperyment", t: "tf", q: "Według drugiego wniosku Festingera im większa presja, tym większa zmiana poglądów.", a: false,
      x: "Fałsz: im większa presja, tym słabsza tendencja do zmiany." },

    /* ---------- FC krytyka ---------- */
    { u: "fc-krytyka", t: "mcq", q: "Jak sprawdzono, czy grupa 1 $ po prostu lepiej kłamała?",
      a: ["Niezależni sędziowie ocenili nagrania kłamstw", "Zapytano badanych o ich motywy", "Powtórzono całe badanie z udziałem dzieci", "Zmierzono tętno badanych podczas kłamstwa"],
      x: "Nie było różnic w treści ani sile przekonywania.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "fc-krytyka", t: "multi", q: "Jakie warunki dysonansu podali Cooper i Fazio (1984)?",
      a: ["negatywne konsekwencje zachowania", "osobista odpowiedzialność", "pobudzenie fizjologiczne"], o: ["wysoka nagroda", "obecność świadków"],
      x: "Czwarty: świadomość, że pobudzenie wynika z niezgodnego zachowania.",
      w: ["Wysoka nagroda zmniejsza dysonans.", "Nie wymieniono."] },
    { u: "fc-krytyka", t: "mcq", q: "Dlaczego komplement o brzydkim kapeluszu nie zmienia naszych poglądów?",
      a: ["Bo kłamstwo nie ma negatywnych konsekwencji", "Bo kapelusze są dla nas zupełnie nieważne", "Bo kłamiemy pod przymusem", "Bo w ogóle nie czujemy przy tym pobudzenia"],
      x: "Pierwszy warunek Coopera i Fazio.",
      w: ["Nie o to chodzi.", "Nie.", "Główny powód to brak złych skutków."] },
    { u: "fc-krytyka", t: "mcq", q: "Jak badani Festingera postrzegali swoje kłamstwo, mimo tytułu „wymuszona uległość”?",
      a: ["Jako dobrowolną decyzję", "Jako przymus", "Jako żart", "Jako zadanie naukowe"],
      x: "Gdyby czuli przymus, dysonans by nie powstał.",
      w: ["Właśnie nie.", "Nie.", "Nie."] },
    { u: "fc-krytyka", t: "mcq", q: "Jakie dwa procesy zmieniają postawy według większości psychologów?",
      a: ["Perswazja i dysonans poznawczy", "Warunkowanie i torowanie", "Kara i nagroda", "Hipnoza i sugestia"],
      x: "Inni nas przekonują albo sami zmniejszamy dysonans.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "fc-krytyka", t: "mcq", q: "Jak kierowcy, którzy wciąż brali narkotyki, chronili się przed dysonansem?",
      a: ["Twierdzili, że tylko alkohol zwiększa ryzyko", "Całkowicie przestali prowadzić samochód", "Zmienili zdanie o narkotykach", "Unikali udziału w programie leczenia"],
      x: "Zaprzeczanie (Albery i in., 2000).",
      w: ["Prowadzili dalej.", "To zrobili ci, którzy rzucili.", "Ukończyli program."] },
    { u: "fc-krytyka", t: "mcq", q: "Ile studentów z grupy „obłudnej” Aronsona po trzech miesiącach deklarowało, że zawsze używa prezerwatyw?",
      a: ["92%", "55%", "75%", "33%"],
      x: "Wobec 55% w grupie, która tylko nagrywała kasetę.",
      w: ["To grupa nagrywająca.", "Nie.", "Nie."] },
    { u: "fc-krytyka", t: "tf", q: "Albarracín i Wyer pokazali, że wystarczy wmówić komuś dawną opinię, by wpłynąć na jego przyszłe poglądy.", a: true,
      x: "Tak: badani zachowywali się zgodnie z postrzeganymi postawami." },

    /* ---------- mix ---------- */
    { u: "mix", t: "which", set: "badanie", q: "Ktoś kupił drogi telefon, a potem przekonuje wszystkich, że to najlepszy model na rynku.", a: 4, x: "Dysonans po decyzji, zmiana postawy.", s: "D" },
    { u: "mix", t: "which", set: "badanie", q: "Przyjaciółka w ciągu roku wzięła ślub, przeprowadziła się i zmieniła pracę. Teraz często choruje.", a: 3, x: "Dużo LCU, większe ryzyko choroby." },
    { u: "mix", t: "which", set: "badanie", q: "Turysta w obcym kraju bez trudu rozpoznaje, że sprzedawca jest zły.", a: 2, x: "Uniwersalność mimiki." },
    { u: "mix", t: "mcq", q: "Uczeń za kanapkę wypisał koledze pozytywną recenzję słabego filmu i potem zaczął film bronić. Co działa?",
      a: ["Dysonans przy słabym uzasadnieniu", "Warunkowanie klasyczne", "Teoria sprzężenia zwrotnego mimiki", "Stres życiowy"],
      x: "Mała nagroda nie wystarcza jako uzasadnienie, więc zmienia się postawa.",
      w: ["Nie.", "Nie.", "Nie."] },
    { u: "mix", t: "mcq", q: "Kolega uzbierał w tym roku ponad 400 LCU. Co poza samym wynikiem kazałby wziąć pod uwagę Rahe?",
      a: ["Wziąć pod uwagę też odporność i radzenie sobie", "Patrzeć wyłącznie na wynik LCU", "Unikać od teraz wszystkich zmian w życiu", "Liczyć tylko zdarzenia negatywne z listy"],
      x: "Cztery dodatkowe czynniki Rahe’a.",
      w: ["Rahe uważał to za za mało.", "Nie.", "Nie."], s: "D" },
    { u: "mix", t: "tf", q: "Ślub, wakacje i Boże Narodzenie mogą zwiększać ryzyko choroby według logiki SRRS.", a: true,
      x: "Tak: każde wymaga przystosowania." },
    { u: "mix", t: "mcq", q: "Co łączy pracę Ekmana i Holmesa z Rahe’em w kwestii kultury?",
      a: ["Obie sprawdzano w innych kulturach", "Obie powstały w Nowej Gwinei", "Obie badały tylko dzieci", "Obie dotyczyły seksualności"],
      x: "Ekman: Fore; SRRS: krytyka Launganiego i różnice kolektywizm/indywidualizm.",
      w: ["Tylko Ekman.", "Nie.", "Nie."] }
  ],

  sortDecks: [
    { id: "dysonans", title: "Duży czy mały dysonans?", sub: "Festinger i Carlsmith, Cooper i Fazio", cats: ["Duży dysonans", "Mały dysonans"],
      why: ["Słabe uzasadnienie, wolny wybór, złe skutki.", "Mocne uzasadnienie: nagroda, przymus, brak szkody."],
      items: [["kłamstwo za 1 dolara", 0], ["sam zdecydowałem się skłamać", 0], ["okłamałem kolegę, który teraz się nudzi", 0], ["poparłem coś publicznie bez powodu", 0],
        ["kłamstwo za 20 dolarów", 1], ["szef kazał mi to powiedzieć", 1], ["komplement o brzydkim kapeluszu", 1], ["groziła mi kara", 1]] },
    { id: "srrs", title: "Wysoko czy nisko w SRRS?", sub: "Powyżej czy poniżej 40 punktów", cats: ["40 punktów i więcej", "Poniżej 40"],
      why: ["Górna część tab. 6.6.", "Dolna część tab. 6.6."],
      items: [["śmierć współmałżonka", 0], ["rozwód", 0], ["kara więzienia", 0], ["zawarcie małżeństwa", 0], ["zwolnienie z pracy", 0], ["ciąża", 0],
        ["zmiana miejsca zamieszkania", 1], ["kłopoty z szefem", 1], ["wakacje", 1], ["Boże Narodzenie", 1], ["drobne naruszenie prawa", 1], ["śmierć bliskiego przyjaciela", 1]] },
    { id: "badanie", title: "Ekman czy Festinger?", sub: "Pojęcia z dwóch prac", cats: ["Ekman i Friesen", "Festinger i Carlsmith"],
      why: ["Mimika, emocje, kultura.", "Dysonans, postawy, kłamstwo."],
      items: [["lud Fore", 0], ["historyjka o dzikiej świni", 0], ["sześć emocji podstawowych", 0], ["sprzężenie zwrotne mimiki", 0], ["Darwin, 1872", 0],
        ["szpulki i kołki", 1], ["grupa B", 1], ["konsonans", 1], ["trzęsienie ziemi w Indiach", 1], ["wymuszona uległość", 1]] }
  ],

  minimum: [
    ["Masters i Johnson (1966)", "Obserwacja i pomiary fizjologiczne (tętno, ciśnienie, oddech) ok. <b>10 000 cykli</b>; 382 mężczyzn i 312 kobiet. Cel terapeutyczny. <b>Cztery fazy</b>: pobudzenie, plateau, orgazm (skurcze co 0,8 s), odprężenie; podział arbitralny."],
    ["Odkrycia MJ", "<b>Mit falliczny</b> obalony: mniejsze penisy rosną bardziej, pochwa jest elastyczna, rozmiar mało istotny. Mężczyźni mają <b>okres refrakcji</b>, kobiety nie, więc możliwe <b>wielokrotne orgazmy</b>. Krytyka: arbitralne fazy, brak aspektów psychologicznych; <b>Kaplan</b>: pożądanie, ukrwienie, skurcze."],
    ["Ekman i Friesen (1971)", "Lud <b>Fore</b> (Nowa Gwinea) bez kontaktu z Zachodem. <b>Historyjka + trzy fotografie</b> (dzieci dwie). Trafienia 68–98% przy 33% przypadku. Wyjątek: <b>strach mylony z zaskoczeniem</b> (groźne = nagłe). Mimika <b>uniwersalna i wrodzona</b>."],
    ["Po Ekmanie", "<b>Sześć emocji</b>: zadowolenie, gniew, smutek, zaskoczenie, obrzydzenie, strach. <b>Darwin</b>: mimika jako adaptacja. Gniewną twarz w tłumie znajdujemy szybciej (0,91 s vs 1,45 s). <b>Sprzężenie zwrotne mimiki</b>. Kłamstwo lepiej widać w ciele niż na twarzy."],
    ["Holmes i Rahe (1967)", "<b>SRRS</b>: 43 wydarzenia, ślub = 500, średnie / 10. Śmierć współmałżonka <b>100</b>, rozwód 73, ślub 50, wakacje 13, drobne naruszenie prawa 11. Stres = <b>potrzeba przystosowania</b>, więc też zdarzenia przyjemne. Choroby <b>psychosomatyczne</b> ≠ hipochondria."],
    ["LCU i krytyka", "<b>LCU</b> z 12 miesięcy: więcej punktów, więcej chorób (ok. 37% → 79%). Krytyka: miesza zdarzenia dobre i złe, pomija interpretację, wyjaśnia tylko <b>ok. 10%</b> zmienności; kultura. Rahe: doświadczenie, radzenie sobie, odporność, dbanie o siebie w chorobie."],
    ["Festinger i Carlsmith (1959)", "<b>Dysonans poznawczy</b>: napięcie z niespójnych poznań; zmieniamy <b>postawę</b>. Nudne zadania, kłamstwo za <b>1 $ lub 20 $</b>. Grupa 1 $ oceniła zadania najwyżej (+1,35), bo miała <b>za mało uzasadnienia</b>. Im większa presja, tym mniejsza zmiana."],
    ["Warunki i zastosowania", "<b>Cooper i Fazio</b>: negatywne skutki, osobista odpowiedzialność, pobudzenie, świadomość jego źródła. Postawy zmienia perswazja albo dysonans. <b>Aronson</b>: obłuda, 92% vs 55%. Kierowcy: zaprzeczanie."]
  ],

  deep: [
    { q: "Czy wyniki Masters i Johnson dotyczą wszystkich?",
      a: "Autorzy twierdzili, że reakcje fizjologiczne są u wszystkich takie same, ale nie zajmowali się emocjami, wartościami ani preferencjami. Późniejsze badania znalazły wyjątki (refrakcja u części kobiet, wielokrotne orgazmy u części mężczyzn). Dobry przykład, że nawet przełomowe uogólnienia wymagają weryfikacji.",
      link: "Por. zajęcia 1: reprezentatywność próby i uogólnianie wyników." },
    { q: "Natura czy kultura?",
      a: "Ekman pokazuje, że mimika podstawowych emocji jest wrodzona. Laungani pokazuje, że to, co stresuje, zależy od kultury. W rozdziale 2 (Turnbull) stałość wielkości zależała od doświadczenia. Biologia daje wspólne mechanizmy, a kultura decyduje, co je uruchamia.",
      link: "Wątek „natura czy kultura” wraca w wielu tekstach Hocka." },
    { q: "Dlaczego mała nagroda działa mocniej?",
      a: "To najbardziej zaskakujący wynik rozdziału: teorie uczenia się przewidywały odwrotnie. Gdy zewnętrzny powód jest słaby, szukamy wewnętrznego: „widocznie mi się podobało”. Dlatego przekupywanie dzieci dużymi nagrodami może nie zmieniać ich postaw.",
      link: "Por. zajęcia 2: warunkowanie i wzmocnienia." }
  ],

  talk: [
    { q: "Opisz metodę i najważniejsze odkrycia Mastersa i Johnson.",
      a: "<p>Badacze chcieli pomóc ludziom z problemami seksualnymi, więc zbadali fizjologię reakcji: <b>pomiary</b> (tętno, ciśnienie, oddech) i <b>bezpośrednią obserwację</b> ok. 10 000 cykli u 382 mężczyzn i 312 kobiet, po okresie adaptacji w laboratorium. Wyróżnili <b>cztery fazy</b>: pobudzenie, plateau, orgazm i odprężenie. Obalili <b>mit falliczny</b> i wykazali, że mężczyźni mają <b>okres refrakcji</b>, a kobiety mogą mieć wielokrotne orgazmy.</p>",
      keys: ["cel terapeutyczny", "pomiary + obserwacja", "cztery fazy", "mit falliczny", "refrakcja"], src: "Hock, s. 196–205" },
    { q: "Jakie zarzuty postawiono Mastersowi i Johnson i jakie były dalsze badania?",
      a: "<p>Zarzucano im <b>arbitralny podział</b> na fazy i <b>pominięcie aspektów poznawczych i emocjonalnych</b>. <b>Helen Singer Kaplan</b> zaproponowała model trzyfazowy zaczynający się od pożądania. Późniejsze badania znalazły wyjątki od reguł płci. Ich praca stała się podstawą <b>terapii seksualnej</b>; nowsze badania dotyczyły seksualności osób starszych i kobiet z uszkodzeniami rdzenia kręgowego.</p>",
      keys: ["arbitralne fazy", "brak psychologii", "Kaplan", "terapia", "osoby starsze"], src: "Hock, s. 204–207" },
    { q: "Jak Ekman i Friesen sprawdzili, czy mimika emocji jest uniwersalna?",
      a: "<p>Wcześniejsze badania można było podważyć wpływem mediów, więc wybrali <b>lud Fore</b> z Nowej Gwinei bez kontaktu z Zachodem (189 dorosłych, 130 dzieci). Badany słuchał <b>historyjki</b> i wybierał jedną z <b>trzech fotografii</b> twarzy ludzi Zachodu (dzieci z dwóch); badacz nie patrzył na badanych. Trafienia sięgały 68–98% przy 33% przypadku; jedynie <b>strach mylono z zaskoczeniem</b>.</p>",
      keys: ["lud Fore", "historyjka + fotografie", "unikanie podpowiedzi", "wyniki powyżej przypadku", "strach vs zaskoczenie"], src: "Hock, s. 207–212" },
    { q: "Jakie znaczenie ma odkrycie Ekmana? Odnieś się do ewolucji.",
      a: "<p>Mimika <b>sześciu emocji</b> jest uniwersalna, więc prawdopodobnie <b>wrodzona</b>. Już <b>Darwin</b> (1872) uważał wyrazy twarzy za mechanizmy adaptacyjne: strach i gniew ostrzegały, obrzydzenie chroniło przed zatruciem. Pozostałością jest szybsze wykrywanie <b>gniewnej twarzy w tłumie</b>. Ekman badał też <b>sprzężenie zwrotne mimiki</b> i wykrywanie kłamstw.</p>",
      keys: ["sześć emocji", "wrodzone", "Darwin", "twarz w tłumie", "sprzężenie zwrotne"], src: "Hock, s. 212–215" },
    { q: "Opisz Skalę Ponownego Przystosowania Społecznego (SRRS).",
      a: "<p>Holmes i Rahe sporządzili listę <b>43 wydarzeń</b>, które oceniło 394 badanych w porównaniu ze <b>ślubem (500 punktów)</b>; średnie podzielono przez 10. Na górze jest śmierć współmałżonka (100), na dole drobne naruszenie prawa (11). Są też zdarzenia pozytywne, bo stres to <b>potrzeba przystosowania się do zmiany</b>. Oceny różnych grup były bardzo zgodne.</p>",
      keys: ["43 wydarzenia", "ślub = 500", "100 i 11", "zmiana, nie emocja", "zgodność grup"], src: "Hock, s. 216–220" },
    { q: "Jak SRRS łączy się z chorobami i jakie ma ograniczenia?",
      a: "<p>Suma <b>LCU</b> z roku wiązała się z ryzykiem choroby: im więcej punktów, tym więcej poważnych zmian zdrowia; podobnie u marynarzy. Krytyka: skala <b>miesza zdarzenia dobre i złe</b>, zależne i niezależne, <b>pomija interpretację</b> (emerytura) i wyjaśnia tylko <b>ok. 10%</b> zmienności zdrowia. Nie pasuje też do wszystkich kultur. Rahe dodał cztery czynniki: doświadczenie, radzenie sobie, odporność, sposób radzenia sobie z chorobą.</p>",
      keys: ["LCU", "marynarze", "miesza zdarzenia", "10%", "kultura", "Rahe"], src: "Hock, s. 220–224" },
    { q: "Wyjaśnij teorię dysonansu poznawczego.",
      a: "<p>Dysonans to dyskomfort, gdy uświadamiamy sobie <b>niespójne poznania</b>, np. myślimy X, a powiedzieliśmy nie-X. Motywuje do jego zmniejszenia; skoro zachowania nie można cofnąć, zmienia się <b>postawa</b>. Dysonans jest mniejszy, gdy mamy <b>uzasadnienie</b> (nagroda, presja, kara), i większy, gdy zachowanie uważamy za <b>wolny wybór</b>. Teoria wyrosła z obserwacji pogłosek po trzęsieniu ziemi w Indiach.</p>",
      keys: ["niespójne poznania", "zmiana postawy", "uzasadnienie", "wolny wybór", "trzęsienie ziemi"], src: "Hock, s. 225–226" },
    { q: "Opisz eksperyment Festingera i Carlsmitha i jego wyniki.",
      a: "<p>71 studentów wykonywało <b>nudne zadania</b> (szpulki, kołki). Potem proszono ich, by powiedzieli czekającej osobie (pomocnikowi), że zadania były ciekawe, za <b>1 $ albo 20 $</b>; grupa kontrolna nie kłamała. Grupa <b>1 $</b> oceniła zadania najwyżej (+1,35) i najchętniej wzięłaby udział znowu. Mała zapłata to <b>niewystarczające uzasadnienie</b>, więc duży dysonans i zmiana postawy; 20 $ to mocne uzasadnienie.</p>",
      keys: ["nudne zadania", "1 $ vs 20 $", "grupa kontrolna", "+1,35", "uzasadnienie"], src: "Hock, s. 227–230" },
    { q: "Jakie warunki musi spełniać dysonans, żeby zmienić postawy? Podaj przykłady zastosowań.",
      a: "<p><b>Cooper i Fazio</b>: (1) negatywne konsekwencje zachowania, (2) osobista odpowiedzialność (wolny wybór), (3) pobudzenie fizjologiczne, (4) świadomość, że pobudzenie wynika z zachowania. Zastosowania: <b>Aronson</b> – studenci skonfrontowani z obłudą częściej używali prezerwatyw (92% vs 55%); kierowcy biorący narkotyki <b>zaprzeczali</b> ich szkodliwości; Albarracín i Wyer – postrzegane dawne opinie.</p>",
      keys: ["cztery warunki", "wolny wybór", "Aronson", "zaprzeczanie", "postrzegane postawy"], src: "Hock, s. 230–233" }
  ],

  table: {
    title: "Cztery prace rozdziału 6",
    head: ["Badanie", "Pytanie", "Metoda", "Główny wynik"],
    rows: [
      ["Masters i Johnson (1966)", "Jak ciało reaguje na stymulację seksualną?", "pomiary fizjologiczne i obserwacja ok. 10 000 cykli", "cztery fazy; mit falliczny obalony; refrakcja u mężczyzn"],
      ["Ekman i Friesen (1971)", "Czy mimika emocji jest uniwersalna?", "lud Fore: historyjka + wybór fotografii", "te same miny w izolowanej kulturze; sześć emocji podstawowych"],
      ["Holmes i Rahe (1967)", "Jak zmierzyć stres życiowy?", "394 osoby oceniły 43 wydarzenia (ślub = 500)", "SRRS; więcej LCU = większe ryzyko choroby"],
      ["Festinger i Carlsmith (1959)", "Co się dzieje, gdy zachowanie jest sprzeczne z postawą?", "nudne zadania, kłamstwo za 1 $ lub 20 $", "mała nagroda = większa zmiana postawy (dysonans)"]
    ]
  },

  notes: [
    { id: "s1", n: 1, title: "Wstęp: emocje i motywacja", html:
      "<div class='plain'><p>Emocje i motywacja wydają się czymś, co „po prostu się dzieje”. Hock pokazuje cztery badania, które dowodzą, że da się je mierzyć i wyjaśniać.</p></div>" +
      "<p class='srcline'>Hock, s. 196</p>" +
      "<ol><li><b>Masters i Johnson</b> (1966): fizjologia reakcji seksualnych. Emocje mają ogromny wpływ na uczucia i zachowania seksualne, a te są potężnymi siłami motywacyjnymi.</li>" +
      "<li><b>Ekman i Friesen</b> (1971): wyrazy twarzy podstawowych emocji są takie same we wszystkich kulturach.</li>" +
      "<li><b>Holmes i Rahe</b> (1967): jak skrajne emocje, czyli stres, wpływają na zdrowie.</li>" +
      "<li><b>Festinger i Carlsmith</b> (1959): <b>dysonans poznawczy</b>, jeden z najsłynniejszych eksperymentów w dziedzinie motywacji.</li></ol>" },
    { id: "s2", n: 2, title: "Masters i Johnson: tło i metoda", html:
      "<div class='plain'><p>Przed nimi wiedziano tylko, co ludzie deklarują w ankietach. Masters i Johnson jako pierwsi zmierzyli, co dzieje się w ciele.</p></div>" +
      "<p class='srcline'>Hock, s. 196–201</p>" +
      "<ul><li>U ludzi seksualność jest wyraźnie <b>zjawiskiem psychicznym</b>; ludzie są (prawdopodobnie) jedynym gatunkiem z problemami seksualnymi, zwykle o podłożu psychicznym.</li>" +
      "<li><b>Raporty Kinseya</b> (koniec lat 40., początek 50.): sondaże wśród tysięcy Amerykanów. Samoopis (odpowiedzi społecznie akceptowalne); mówią, co ludzie robią, a nie co się z nimi dzieje.</li>" +
      "<li>Badania umożliwiła <b>rewolucja seksualna</b> lat 60. Cel <b>terapeutyczny</b>: dwa pytania o fizyczne reakcje na skuteczną stymulację i ich przyczyny (s. 4).</li>" +
      "<li><b>Badani</b>: najpierw 8 kobiet i 3 mężczyzn uprawiających prostytucję (pomogli opracować metody, ale niereprezentatywni); potem ochotnicy z dużego miasta: <b>382 mężczyzn i 312 kobiet</b>, 18–89 lat (tab. 6.1); wywiady i badania lekarskie.</li>" +
      "<li><b>Procedura</b>: tętno, ciśnienie, oddech; obserwacja przy różnych formach aktywności, także z przezroczystym urządzeniem zaprojektowanym przez fizyków.</li>" +
      "<li><b>Adaptacja</b>: najpierw aktywność w laboratorium bez personelu, potem przy zespole; nic nie rejestrowano, dopóki badani nie czuli się bezpiecznie; zaufanie i anonimowość.</li>" +
      "<li>Ok. <b>10 000 cykli</b>, kobiety : mężczyźni = 3 : 1 (7500 vs 2500).</li></ul>" },
    { id: "s3", n: 3, title: "Cykl reakcji seksualnych i różnice płci", html:
      "<div class='plain'><p>Cztery fazy, przez które przechodzą obie płcie. Najważniejsze różnice pojawiają się po orgazmie.</p></div>" +
      "<p class='srcline'>Hock, s. 201–204</p>" +
      "<!--fig:cykl-->" +
      "<div class='tscroll'><table><thead><tr><th>Faza</th><th>Kobiety</th><th>Mężczyźni</th></tr></thead><tbody>" +
      "<tr><th>Pobudzenie</th><td>pierwsza oznaka: zwilgotnienie pochwy; erekcja łechtaczki i brodawek</td><td>pierwsza oznaka: wzwód; może zaniknąć przy rozproszeniu uwagi</td></tr>" +
      "<tr><th>Plateau</th><td>zewnętrzna 1/3 pochwy obrzmiewa, otwarcie do 50%; rośnie napięcie mięśni i ciśnienie</td><td>pełny wzwód; gruczoły Cowpera wydzielają płyn; rośnie napięcie i ciśnienie</td></tr>" +
      "<tr><th>Orgazm</th><td>skurcze co 0,8 s; trwa 7,4–104,6 s; intensywność nie zależy od czasu</td><td>skurcze co 0,8 s; wydzielenie i wytrysk</td></tr>" +
      "<tr><th>Odprężenie</th><td>powrót do stanu sprzed pobudzenia; bez orgazmu może trwać godziny</td><td>ok. 50% utraty wzwodu w pierwszej minucie</td></tr></tbody></table></div>" +
      "<ul><li>Podział na fazy jest, jak przyznali autorzy, <b>arbitralny</b>, ale ułatwia omawianie reakcji.</li>" +
      "<li><b>Mit falliczny</b>: obawy, że większy penis lepiej stymuluje i że własny jest za mały. Pomiary 80 mężczyzn: w spoczynku 7,1–10,9 cm (średnio 7,5), we wzwodzie 14–17,8 cm (średnio 15). Mniejsze w spoczynku rosną bardziej (7,1 cm → 15,5 cm; 10,2 cm → 15,5 cm). Pochwa jest niezwykle <b>elastyczna</b>; wielkość penisa jest mało istotna (s. 195).</li>" +
      "<li><b>Okres refrakcji</b> u mężczyzn: od minut do godzin, wydłuża się z wiekiem. Kobiety go nie mają: możliwe <b>wielokrotne orgazmy</b>. Wcześniej uważano, że to mężczyźni mają większe możliwości. Nie wszystkie kobiety do nich dążą.</li></ul>" },
    { id: "s4", n: 4, title: "Masters i Johnson: krytyka i dalsze badania", html:
      "<div class='plain'><p>Zarzucano im pominięcie psychiki, a potem znaleziono wyjątki od ich reguł. Mimo to ich praca jest fundamentem terapii seksualnej.</p></div>" +
      "<p class='srcline'>Hock, s. 204–207</p>" +
      "<ul><li>Zarzuty: <b>arbitralny podział</b> na cztery fazy i <b>zbyt mało uwagi</b> dla aspektów poznawczych i emocjonalnych. Autorzy odpowiedzieli od początku: fizjologia to warunek wstępny.</li>" +
      "<li><b>Helen Singer Kaplan</b>: trzy fazy, czyli pożądanie, ukrwienie naczyń, skurcze mięśni; analiza zaczyna się od pożądania.</li>" +
      "<li>Wyjątki: część kobiet ma okres refrakcji, część mężczyzn wielokrotne orgazmy; kontrowersyjne dowody na wytrysk u niektórych kobiet (Strong, DeVault, 1997).</li>" +
      "<li>Podstawa prawie każdej <b>terapii seksualnej</b>; „Human Sexual Inadequacy” (1970).</li>" +
      "<li><b>Starsi</b>: Szwecja, 319 mężczyzn 50–80 lat: ponad 80% uważa seks za ważny, prawie 75% osiąga erekcję i orgazm (Helgason i in., 1996); Gelfand (2000): życie płciowe częścią jakości życia starszych kobiet.</li>" +
      "<li><b>Uszkodzenia rdzenia</b> (Whipple i in., 1996): kobiety z uszkodzeniami częściej doświadczały orgazmu niż kobiety bez uszkodzeń; być może źródło przyjemności przenosi się w inne miejsca ciała.</li></ul>" },
    { id: "s5", n: 5, title: "Ekman i Friesen: metoda", html:
      "<div class='plain'><p>Żeby sprawdzić, czy mimika jest wrodzona, trzeba było znaleźć ludzi, którzy nigdy nie widzieli filmów ani twarzy z Zachodu.</p></div>" +
      "<p class='srcline'>Hock, s. 207–210</p>" +
      "<ul><li>Wcześniej: zdjęcia twarzy pokazywane w Argentynie, Brazylii, Chile, Japonii i USA; wszyscy zgodni, ale wszyscy znali <b>mass media</b>.</li>" +
      "<li><b>Lud Fore</b>, Southeast Highlands w Nowej Gwinei: społeczeństwo jak z epoki kamiennej.</li>" +
      "<li><b>Hipoteza</b> (s. 125): członkowie kultur przedpiśmiennych kojarzą te same emocje z tymi samymi wyrazami twarzy co członkowie piśmiennych kultur Wschodu i Zachodu.</li>" +
      "<li><b>Badani</b>: Fore z Południa bez filmów, angielskiego, pidżynu i pracy dla ludzi Zachodu; <b>189 dorosłych i 130 dzieci</b> z 11 000; plus 23 dorosłych z kontaktem z Zachodem.</li>" +
      "<li><b>Procedura</b>: historyjka + <b>trzy fotografie</b> (dzieci dwie), jedna prawidłowa. 40 zdjęć 24 osób z Zachodu, każde uznane przez ≥70% ludzi z dwóch kultur. Zestawy się nie powtarzały.</li>" +
      "<li>Tłumacze nie mogli upiększać ani sugerować; badacz z Zachodu <b>nie patrzył</b> na badanych, tylko zapisywał odpowiedzi.</li></ul>" +
      "<div class='tscroll'><table><thead><tr><th>Emocja</th><th>Historyjka (tab. 6.3)</th></tr></thead><tbody>" +
      "<tr><td>zadowolenie</td><td>przybyli jego (jej) znajomi</td></tr><tr><td>smutek</td><td>jego (jej) dziecko (matka) zmarło</td></tr>" +
      "<tr><td>gniew</td><td>jest zagniewany i zaraz będzie walczył</td></tr><tr><td>zaskoczenie</td><td>patrzy na coś nowego i nieoczekiwanego</td></tr>" +
      "<tr><td>obrzydzenie</td><td>patrzy na coś, czego nie lubi, albo na coś, co cuchnie</td></tr>" +
      "<tr><td>strach</td><td>sam w domu, bez noża, siekiery i łuku; w drzwiach stoi dzika świnia i nie chce odejść (dłuższa, by nie mylić ze zdziwieniem i gniewem)</td></tr></tbody></table></div>" },
    { id: "s6", n: 6, title: "Ekman i Friesen: wyniki i znaczenie", html:
      "<div class='plain'><p>Fore rozpoznawali emocje na twarzach obcych ludzi tak dobrze jak ludzie z Zachodu. Jedyny kłopot: strach i zdziwienie.</p></div>" +
      "<p class='srcline'>Hock, s. 210–215</p>" +
      "<!--fig:ekman-->" +
      "<ul><li>Brak istotnych różnic: płeć, wiek, kontakt z Zachodem. Wszystkie wyniki istotne poza odróżnianiem <b>strachu od zaskoczenia</b> (42,7%; jedna grupa wybrała zaskoczenie w 67%). Wyjaśnienie: u Fore groźne zdarzenia są zwykle nagłe (wróg, duch, czarownik; s. 129).</li>" +
      "<li>Dzieci lepiej, bo wybierały z dwóch zdjęć. Studenci w USA rozpoznali emocje na nagraniach twarzy Fore.</li>" +
      "<li>Wniosek: mimika emocji jest <b>uniwersalna</b> i <b>wrodzona</b>. <b>Sześć emocji podstawowych</b>: zadowolenie, gniew, smutek, zaskoczenie, obrzydzenie, strach.</li>" +
      "<li><b>Darwin</b> (1872): wyrazy twarzy to mechanizmy adaptacyjne (strach ostrzega, gniew odstrasza, obrzydzenie: „Fuj!”).</li>" +
      "<li><b>Twarz w tłumie</b> (Hansen, Hansen, 1988): zagniewana 0,91 s, zadowolona 1,45 s.</li>" +
      "<li>ADHD: gorsze rozpoznawanie emocji (Singh i in., 1998). Matsumoto: badania międzykulturowe. Internet (Senior i in., 1999). <b>Hollywood</b> (Carroll, Russell, 1997): poza uśmiechem wystarczał jeden lub dwa elementy twarzy.</li>" +
      "<li><b>Sprzężenie zwrotne mimiki</b>: napinanie mięśni twarzy wywołuje reakcje fizjologiczne danej emocji (Ekman, Levenson, Friesen, 1983). Kłamstwo lepiej widać w <b>całym ciele</b> niż na twarzy.</li></ul>" },
    { id: "s7", n: 7, title: "Holmes i Rahe: Skala Ponownego Przystosowania", html:
      "<div class='plain'><p>Stres to nie tylko przykre uczucie. Według Holmesa i Rahe’a to każda zmiana, do której trzeba się przystosować, nawet ślub czy wakacje.</p></div>" +
      "<p class='srcline'>Hock, s. 216–220</p>" +
      "<ul><li>Stres jako <b>każda emocja w skrajnej formie</b>. <b>Choroby psychosomatyczne</b>: prawdziwe, ale wywołane głównie przez psychikę; nie mylić z <b>hipochondrią</b>.</li>" +
      "<li><b>Stres życiowy</b>: zmiany wymagające przystosowania zwiększają ryzyko choroby. Nie da się go badać w laboratorium (nieetyczne, nierealistyczne).</li>" +
      "<li><b>Metoda</b>: 43 wydarzenia, 394 badanych; <b>ślub = 500</b>; oceny względem ślubu, średnie podzielone przez 10. <b>SRRS</b>; polska adaptacja: Sobolewski, Strelau, Zawadzki.</li></ul>" +
      "<div class='tscroll'><table><thead><tr><th>Wydarzenie (wybór z tab. 6.6)</th><th>Punkty</th></tr></thead><tbody>" +
      "<tr><td>śmierć współmałżonka</td><td>100</td></tr><tr><td>rozwód</td><td>73</td></tr><tr><td>separacja małżonków</td><td>65</td></tr>" +
      "<tr><td>kara więzienia</td><td>63</td></tr><tr><td>śmierć członka bliskiej rodziny</td><td>63</td></tr><tr><td>własna choroba lub uszkodzenie ciała</td><td>53</td></tr>" +
      "<tr><td>zawarcie związku małżeńskiego</td><td>50</td></tr><tr><td>zwolnienie z pracy</td><td>47</td></tr><tr><td>pogodzenie się małżonków; przejście na emeryturę</td><td>45</td></tr>" +
      "<tr><td>ciąża</td><td>40</td></tr><tr><td>śmierć bliskiego przyjaciela</td><td>37</td></tr><tr><td>wybitne osiągnięcie osobiste</td><td>28</td></tr>" +
      "<tr><td>kłopoty z szefem</td><td>23</td></tr><tr><td>zmiana miejsca zamieszkania; zmiana szkoły</td><td>20</td></tr>" +
      "<tr><td>wakacje</td><td>13</td></tr><tr><td>Święta Bożego Narodzenia</td><td>12</td></tr><tr><td>drobne naruszenie prawa</td><td>11</td></tr></tbody></table></div>" +
      "<ul><li>Zdarzenia pozytywne też są na liście: stres = <b>potrzeba przystosowania</b>. „Nacisk kładzie się na zmianę istniejącego stabilnego stanu, a nie na znaczenie psychologiczne, emocje czy pożądanie społeczne” (s. 217).</li>" +
      "<li>Bardzo wysoka zgodność ocen w podgrupach (płeć, stan cywilny, wykształcenie, rasa, wiek, pozycja, religijność).</li></ul>" },
    { id: "s8", n: 8, title: "LCU, choroby i krytyka SRRS", html:
      "<div class='plain'><p>Więcej punktów z ostatniego roku oznacza większe ryzyko choroby. Ale związek jest słaby i skala ma wyraźne ograniczenia.</p></div>" +
      "<p class='srcline'>Hock, s. 220–224</p>" +
      "<ul><li><b>LCU</b> (life change units): suma punktów z ostatnich 12 miesięcy.</li></ul>" +
      "<!--fig:lcu-->" +
      "<ul><li>Marynarka (2500 osób, LCU za 6 miesięcy przed służbą): poniżej 100 LCU średnio 1,4 choroby, 300–400 LCU 1,9, 500–600 LCU 2,1 (Rahe, Mahan, Arthur, 1970).</li>" +
      "<li><b>Krytyka</b> (Taylor, 1999): skala miesza zdarzenia pozytywne i negatywne, zależne i niezależne; to nagłe, negatywne i niezależne najsilniej zwiastują choroby. Pomija <b>interpretację</b> (emerytura: „zielona trawka” czy uwolnienie od harówki). Cohen (1983): Skala Postrzeganego Stresu.</li>" +
      "<li>LCU wyjaśnia ok. <b>10%</b> zmienności zdrowia: istotnie, ale słabo.</li>" +
      "<li>Popularność: 367 cytowań w latach 1997–2000. Złamania biodra (Peterson i in., 2000), narkotyki a stres w pracy w Quebecu (Bourbonnais i in., 1999).</li>" +
      "<li><b>Kultura</b> (Laungani, 1996): „stres” trudno przetłumaczyć; w kulturach <b>kolektywistycznych</b> (Indie, Japonia, Izrael) stresują inne zdarzenia niż w <b>indywidualistycznych</b> (USA).</li>" +
      "<li><b>Rahe</b>: brać pod uwagę (1) doświadczenie ze stresem, (2) radzenie sobie, (3) odporność organizmu, (4) radzenie sobie z chorobą. Leczyć całą osobę: umysł i ciało.</li></ul>" },
    { id: "s9", n: 9, title: "Festinger i Carlsmith: teoria dysonansu", html:
      "<div class='plain'><p>Gdy robimy coś niezgodnego z przekonaniami, czujemy dyskomfort. Najprostszym wyjściem bywa zmiana przekonań.</p></div>" +
      "<p class='srcline'>Hock, s. 225–226</p>" +
      "<ul><li>Postawy mogą się zmieniać tak, aby pasowały do zachowania. Wcześniej: ćwiczenie mowy w myśli i wymyślanie argumentów. Paradoks: <b>wyższe nagrody dawały mniejszą zmianę</b> niż niewielkie; teorie uczenia się tego nie wyjaśniały.</li>" +
      "<li><b>Dysonans poznawczy</b> (Festinger, Stanford): niespójne poznania wywołują dyskomfort, który motywuje do jego zmniejszenia; skoro zachowania nie da się zmienić, zmienia się postawa.</li>" +
      "<li>Źródło teorii: pogłoski w Indiach po trzęsieniu ziemi w 1934 r. Plotki nie zwiększały lęku, lecz go <b>uzasadniały</b>.</li>" +
      "<li>Uzasadnienie (presja, nagroda, kara) zmniejsza dysonans. Dysonans jest tym większy, im bardziej zachowanie uważamy za <b>wolny wybór</b>. Zmiana opinii daje <b>konsonans</b>.</li></ul>" },
    { id: "s10", n: 10, title: "Eksperyment: 1 dolar czy 20 dolarów", html:
      "<div class='plain'><p>Kto za kłamstwo dostał tylko dolara, później naprawdę uważał, że nudne zadania były ciekawe.</p></div>" +
      "<p class='srcline'>Hock, s. 227–230</p>" +
      "<ul><li><b>Badani</b>: 71 mężczyzn, studentów psychologii; przykrywka: „pomiar wyników działania”.</li>" +
      "<li><b>Zadania</b>: 30 minut zdejmowania i odkładania 12 szpulek, potem 30 minut obracania 48 kołków o ćwierć obrotu. Cel: negatywna opinia o zadaniach.</li>" +
      "<li><b>Wymysł</b>: badany był niby w grupie A; grupa B ma się dowiedzieć, że zadania są ciekawe, ale pomocnik „zachorował”. Za 1 $ lub 20 $ badany mówi czekającej osobie (pomocnikowi): „bardzo przyjemne… intrygujące, ekscytujące”.</li>" +
      "<li>Trzy grupy po 20 osób: <b>1 $, 20 $, kontrolna</b> (11 wykluczono za błędy proceduralne).</li></ul>" +
      "<div class='tscroll'><table><thead><tr><th>Pytanie (tab. 6.7)</th><th>Kontrolna</th><th>1 $</th><th>20 $</th></tr></thead><tbody>" +
      "<tr><td>1. Czy zadania były przyjemne? (−5 do +5)*</td><td>−0,45</td><td><b>+1,35</b></td><td>−0,05</td></tr>" +
      "<tr><td>2. Ile się dowiedziałeś? (0–10)</td><td>3,08</td><td>2,80</td><td>3,15</td></tr>" +
      "<tr><td>3. Znaczenie dla nauki (0–10)</td><td>5,60</td><td>6,45</td><td>5,18</td></tr>" +
      "<tr><td>4. Chęć udziału w podobnym badaniu (−5 do +5)*</td><td>−0,62</td><td><b>+1,20</b></td><td>−0,25</td></tr></tbody></table></div>" +
      "<p>* pytania związane z hipotezą Festingera i Carlsmitha.</p>" +
      "<ul><li><b>Wnioski Festingera</b>: (1) nakłoniony do zachowania sprzecznego z poglądami zmienia poglądy; (2) im większa presja, tym słabsza ta tendencja.</li></ul>" +
      "<!--fig:dysonans-->" },
    { id: "s11", n: 11, title: "Krytyka, warunki dysonansu i zastosowania", html:
      "<div class='plain'><p>Dysonans nie działa zawsze. Potrzebne są złe skutki, poczucie odpowiedzialności i świadomość, skąd bierze się napięcie.</p></div>" +
      "<p class='srcline'>Hock, s. 230–233</p>" +
      "<ul><li>Inne wyjaśnienia (lepsze kłamstwa) wykluczono: niezależni sędziowie nie znaleźli różnic w nagranych kłamstwach.</li>" +
      "<li><b>Cooper i Fazio</b> (1984): (1) negatywne konsekwencje (komplement o kapeluszu nie zmienia poglądów), (2) osobista odpowiedzialność, czyli wolny wybór (badani czuli, że decydowali sami, mimo „wymuszonej uległości”), (3) pobudzenie fizjologiczne, (4) świadomość, że pobudzenie wynika z niezgodnego zachowania.</li>" +
      "<li>Postawy zmieniają się przez <b>perswazję</b> albo <b>dysonans</b>.</li>" +
      "<li><b>Albarracín i Wyer</b> (2000): wmówiona dawna opinia o egzaminach całościowych zmieniała przyszłe poglądy.</li>" +
      "<li><b>Albery i in.</b> (2000): kierowcy, którzy nadal brali narkotyki, twierdzili, że tylko alkohol zwiększa ryzyko (zaprzeczanie).</li>" +
      "<li><b>Aronson</b> (Shea, 1997): studenci skonfrontowani z własną obłudą częściej kupowali prezerwatywy; po 3 miesiącach 92% vs 55% deklarowało, że zawsze ich używa. „Większość z nas ciągle zachowuje się obłudnie, ponieważ możemy na to przymknąć oko”.</li></ul>" }
  ]
});
