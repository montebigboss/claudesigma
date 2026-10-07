/* Przewodnik po zaliczeniu logiki: zasady egzaminu, pytania teoretyczne, kartki próbne.
 *
 * Źródła: „Zasady egzaminu z logiki” (zeszłoroczne, daty nieaktualne), lista
 * „Przykładowe pytania teoretyczne na egzamin”, plik „przykładowe zestawy pytań
 * praktycznych” oraz konspekt prowadzącej 2025/2026.
 *
 * Rozwiązania kartek są sprawdzone z konspektem. Pole fix opisuje, gdzie
 * odpowiedź krążąca w pliku z zestawami była błędna.
 *
 * theory[]: { q, mod (id modułu, gdy temat jest już w aplikacji), ks (rozdział konspektu), oral (szkielet odpowiedzi ustnej) }
 * sheets[]: { name, tasks: [{ q, topic, ks, mod?, a (html), steps?, fix?, unsure? }] }
 */
Wykuj.registerCourse({
  id: "lg",
  guide: {
    title: "Jak zdać logikę",
    rulesNote: "Zasady z ubiegłorocznego egzaminu (prowadząca podała wtedy daty w 2025 r.). Sprawdź aktualną wersję na Teams.",
    steps: [
      ["Zaliczone ćwiczenia", "Pozytywna ocena z ćwiczeń to warunek absolutny podejścia do egzaminu."],
      ["Test praktyczny", "Losujesz kartkę z 8 zadaniami z wykładu i ćwiczeń. Max 8 pkt, bez limitu czasu, sprawdzane od razu. <b>Do ustnego potrzebujesz co najmniej 4 pkt.</b>"],
      ["Część ustna", "Pytania o wyjaśnienie odpowiedzi z testu oraz pytania teoretyczne."]
    ],
    shortcuts: [
      "<b>Bdb z ćwiczeń:</b> możesz pominąć test i od razu iść na ustny. Dostajesz wtedy 3 pytania teoretyczne.",
      "<b>Test bezbłędny (8/8):</b> dostajesz 1 pytanie teoretyczne, a dobra odpowiedź daje ocenę bardzo dobrą.",
      "<b>Termin zerowy:</b> możliwy, jeśli zbierze się co najmniej 5 osób (lista wysyłana mailem przez jedną osobę)."
    ],

    theory: [
      { q: "Przedmiot formalny i materialny semiotyki logicznej", mod: "lg-w1", ks: "II",
        oral: "Najpierw ogólnie: przedmiot <b>materialny</b> to wyznaczony przedmiot badań wzięty w całym uposażeniu, przedmiot <b>formalny</b> to ten przedmiot rozpatrywany z pewnego punktu widzenia. Dla semiotyki: materialny to <b>język</b>, formalny to <b>język jako system znaków, będący narzędziem poznania i komunikowania się</b>. Na koniec dodaj, że wynika to z definicji semiotyki (ogólna, formalna teoria języka jako systemu znakowego)." },
      { q: "Omów działy semiotyki", mod: "lg-w1", ks: "II.6",
        oral: "Trzy działy według relacji: <b>syntaktyka</b> (znak–znak, język „od wewnątrz”; wynikanie, kategorie syntaktyczne, dowodzenie), <b>semantyka</b> (znak–świat pozajęzykowy; prawda wg Tarskiego 1933, oznaczanie, denotowanie, desygnowanie, supozycja, model), <b>pragmatyka</b> (znak–użytkownik: twórca, nadawca, odbiorca; znaczenie, rozumienie, wyrażanie, komunikowanie, asercja). Przykład na jednym zdaniu dobrze wypada: czy poprawnie zbudowane, czy prawdziwe, po co ktoś je powiedział." },
      { q: "Definicje: semiotyki, znaku, języka", mod: "lg-w1", ks: "II.4, III.1–2",
        oral: "<b>Semiotyka</b>: ogólna, formalna (logiczna) teoria języka rozumianego jako system znakowy, zajmująca się językiem w aspekcie jego racjonalności i sprawności w aktach poznania i komunikowania. <b>Znak</b>: coś podpadającego pod zmysły (z substratem materialnym), przy pomocy czego ktoś dochodzi do poznania czegoś innego niż ów znak; relacja trójczłonowa: coś jest znakiem czegoś dla kogoś. <b>Język</b>: zbiór znaków formalnych scharakteryzowanych możliwie jednoznacznie regułami używania, służący grupie ludzi do poznania i komunikowania się; J = {słownik, reguły}." },
      { q: "Definicje: zdania, nazwy, funktora, funktora prawdziwościowego, wynikania logicznego, prawa logiki, definicji klasycznej", ks: "IV, VII, IX" },
      { q: "Reguły używania znaków językowych (z przykładami)", mod: "lg-w1", ks: "III.5",
        oral: "<b>Syntaktyczne</b>: składania (jak budować wyrażenia złożone) i przekształcania (jak przekształcić wyrażenie poprawne, by wynik też był poprawny); przykład: „kot śpi” poprawne, „śpi kot się na” nie. <b>Semantyczne</b>: jak znaki odnoszą się do rzeczywistości pozajęzykowej; przykład: „kot” orzekamy o kotach, nie o psach. <b>Pragmatyczne</b>: jak używać wyrażeń w sytuacjach; przykład z konspektu: grzeczne zwracanie się do nieznajomych dorosłych. Bonus: <b>afektony</b> łamią reguły semantyczne, ale są pragmatycznie dopuszczalne, bo wyrażają emocje." },
      { q: "Funkcje języka (zwłaszcza funkcja performatywna)", mod: "lg-w1", ks: "III.6",
        oral: "Podział na <b>poznawczą</b> (deskryptywną: opis stanu rzeczy i stwierdzenie, że zachodzi; najważniejsza dla semiotyki logicznej) i <b>pozapoznawcze</b>: informatywna, ekspresywna, ewokatywna, perswazyjna, dyrektywna, performatywna, interrogatywna, estymatywna, terapeutyczna, ludyczna, fatyczna, integrująca/dzieląca. <b>Performatywna</b>: spowodowanie stanu rzeczy, o którym mówi wyrażenie, przez samo jego wypowiedzenie (np. „ogłaszam was mężem i żoną”, „otwieram posiedzenie”, „obiecuję”). Dodaj, że wyrażenie pełni zwykle kilka funkcji naraz, a gramatyka nie zawsze pokazuje funkcję („Jak mogłeś mi to zrobić?!”)." },
      { q: "Typy wyrażeń o szczególnym rodzaju znaczenia (synonimy, homonimy, okazjonalne, analogiczne, idiomy – z przykładami)", ks: "IV.1c" },
      { q: "Zdania analityczne i syntetyczne (przykłady)", ks: "IV.2b" },
      { q: "Zdania asertoryczne i modalne (przykłady)", ks: "IV.2b" },
      { q: "Definicja zdania w sensie logicznym, nazwy i funktora prawdziwościowego (z przykładami)", ks: "IV.2–4" },
      { q: "Funkcje semantyczne nazw", ks: "IV.3b" },
      { q: "Nazwy puste i ich funkcje semantyczne (przykłady)", ks: "IV.3c" },
      { q: "Nazwy jednostkowe (w tym indywidualne) i ich funkcje semantyczne", ks: "IV.3c" },
      { q: "Relacje między zakresami nazw", ks: "IV.3d" },
      { q: "Presupozycje i ich źródła (wyzwalacze)", ks: "V.b" },
      { q: "Reguły racjonalnej współpracy w konwersacji (maksymy Grice'a)", ks: "V.b" },
      { q: "Definicje równościowe (różne rodzaje)", ks: "VII" },
      { q: "Definicje nierównościowe (rodzaje)", ks: "VII" },
      { q: "Definicje perswazyjne (przykłady)", ks: "VII" },
      { q: "Rodzaje definicji ze względu na rolę w języku (sprawozdawcze, regulujące, projektujące)", ks: "VII" },
      { q: "Rodzaje pytań ze względu na partykułę (przykłady)", ks: "VIII" },
      { q: "Warunki racjonalnego stawiania pytań", ks: "VIII" },
      { q: "Pytania zamknięte i otwarte", ks: "VIII" },
      { q: "Rozumowania proste (wnioskowania)", ks: "IX" },
      { q: "Rodzaje wnioskowań niezawodnych", ks: "IX" },
      { q: "Rodzaje wnioskowań uprawdopodobniających", ks: "IX" },
      { q: "Błędy wnioskowań (przykłady i omówienie)", ks: "IX.4" },
      { q: "Logiczno-etyczne zasady racjonalnej dyskusji", ks: "X.3" },
      { q: "Typy dyskusji", ks: "X.2" },
      { q: "Chwyty erystyczne", ks: "X.6" }
    ],

    sheets: [
      { name: "Kartka A", tasks: [
        { q: "Jakie 3 funkcje spełnia wyrażenie: „Zupełnie się tego po tobie nie spodziewałam!”?", topic: "Funkcje języka", ks: "III.6", mod: "lg-w1",
          a: "Ekspresywną (wyraża emocje nadawcy), ewokatywną (ma wywołać przeżycie u odbiorcy) i informatywną (informuje, że nadawca się tego nie spodziewał).",
          steps: "Zadaj trzy pytania: co czuje mówiący? co ma poczuć słuchacz? jaką informację dostaje słuchacz?" },
        { q: "Jakie relacje zachodzą między nazwami: (a) artysta – student; (b) noga – kolano?", topic: "Relacje między zakresami nazw", ks: "IV.3d",
          a: "(a) <b>krzyżowanie</b>: są artyści-studenci, artyści, którzy nie studiują, i studenci, którzy nie są artystami. (b) <b>wykluczanie</b> (bez dopełniania): żadna noga nie jest kolanem i żadne kolano nie jest nogą.",
          steps: "Pytaj o desygnaty, nie o części: czy jakieś kolano JEST nogą? Nie. To, że kolano jest częścią nogi, nie robi z niego nogi." },
        { q: "Podaj przykład zdania (a) analitycznego; (b) asertorycznego.", topic: "Rodzaje zdań", ks: "IV.2b",
          a: "(a) „Każdy kawaler jest nieżonatym mężczyzną”: prawdziwość wynika z samych znaczeń słów. (b) „Warszawa jest stolicą Polski”: zwykłe stwierdzenie „S jest P”, bez „musi” ani „może”.",
          fix: "W pliku z zestawami jako analityczne podano „woda wrze w temperaturze 100 stopni”. To zdanie <b>syntetyczne</b>: jego prawdziwość znamy z doświadczenia, a nie ze znaczenia słów." },
        { q: "Wyprowadź 4 konsekwencje zdania: „Żaden egzamin nie jest miły”.", topic: "Kwadrat logiczny i wnioskowanie bezpośrednie", ks: "IV.2c",
          a: "To zdanie typu SeP (S = egzamin, P = miły). (1) Nieprawda, że niektóre egzaminy są miłe (~SiP, sprzeczność). (2) Niektóre egzaminy nie są miłe (SoP, podporządkowanie). (3) Nieprawda, że każdy egzamin jest miły (~SaP, przeciwieństwo). (4) Żadna miła rzecz nie jest egzaminem (PeS, konwersja prosta). Inne poprawne: Każdy egzamin jest niemiły (SaP', obwersja).",
          steps: "Rozpoznaj typ zdania (a, e, i, o), potem idź po kolei: sprzeczne, podporządkowane, przeciwne, konwersja, obwersja." },
        { q: "Sprawdź metodą 0-1, czy wniosek wynika logicznie z przesłanek: Jeżeli jesteś pracowity, to osiągniesz sukces. A nie jesteś pracowity. A więc nie osiągniesz sukcesu.", topic: "Rachunek zdań, metoda 0-1", ks: "IV.4c",
          a: "p – jesteś pracowity, q – osiągniesz sukces. Schemat: [(p → q) ∧ ~p] → ~q. Dla p = 0, q = 1: (0 → 1) = 1, ~p = 1, koniunkcja = 1, ~q = 0, całość 1 → 0 = <b>0</b>. Schemat nie jest prawem logiki, więc <b>wniosek nie wynika</b>. To błąd odrzucenia poprzednika.",
          steps: "Zapisz zdania literami, złóż schemat „(przesłanki) → wniosek” i szukaj wiersza, w którym wychodzi 0. Wystarczy jeden." },
        { q: "Jaki błąd popełniono w definicji: „Wynikaniem logicznym nazywamy zdanie o budowie p → q”?", topic: "Błędy definiowania", ks: "VII.3",
          a: "<b>Błąd przesunięcia kategorialnego</b>: wynikanie logiczne to związek (relacja) między zdaniami, a nie zdanie. Definicja myli też wynikanie z implikacją." },
        { q: "Wskaż błąd we wnioskowaniu: „Mysz gryzie książkę, mysz to sylaba, a więc sylaba gryzie książkę”.", topic: "Błędy w przekazywaniu myśli", ks: "V.a", mod: "lg-w1",
          a: "<b>Pomieszanie poziomów języka</b>: pierwsze zdanie mówi o zwierzęciu (język przedmiotowy), drugie o słowie „mysz” (metajęzyk)." },
        { q: "Jaki błąd popełniono, pytając: „Dlaczego nikt z Polaków nie otrzymał dotąd Nagrody Nobla z kosmetologii?”", topic: "Teoria pytań", ks: "VIII.4",
          a: "Pytanie jest <b>nietrafne</b>, czyli opiera się na <b>fałszywym założeniu</b>: zakłada, że istnieje Nagroda Nobla z kosmetologii. Na takie pytanie nie ma właściwej odpowiedzi; trzeba znieść fałszywe założenie." }
      ] },
      { name: "Kartka B", tasks: [
        { q: "Jakie relacje zachodzą między nazwami: (a) miasto – dzielnica; (b) pies – ssak?", topic: "Relacje między zakresami nazw", ks: "IV.3d",
          a: "(a) <b>wykluczanie</b>: żadne miasto nie jest dzielnicą i żadna dzielnica nie jest miastem. (b) <b>nadrzędność – podrzędność</b>: każdy pies jest ssakiem, ale nie każdy ssak jest psem (ssak nadrzędny, pies podrzędny).",
          fix: "W pliku z zestawami przy (a) podano nadrzędność–podrzędność. To błąd: dzielnica jest CZĘŚCIĄ miasta, a nie RODZAJEM miasta. Relacje zakresów pytają, czy desygnat jednej nazwy jest desygnatem drugiej." },
        { q: "Podaj przykład zdań, w których nazwa „akademik” wystąpi w supozycji (a) materialnej; (b) zwykłej (prostej).", topic: "Supozycja", ks: "IV.3b",
          a: "(a) Materialna (nazwa mówi o sobie samej): „„Akademik” jest rzeczownikiem”. (b) Zwykła (konkretny, jednostkowy przedmiot): „Ten akademik przy Radziszewskiego jest przepełniony”. Dla porównania supozycja formalna (powszechnik): „Akademik to dom studencki”." },
        { q: "Jaki błąd popełniono w definicji: „Muzyk jest to osoba grająca w orkiestrze symfonicznej”?", topic: "Błędy definiowania", ks: "VII.3",
          a: "<b>Nieadekwatność: definicja za wąska</b>. Zakres definiensa jest węższy niż definiendum, bo muzykami są też np. pianiści solowi, jazzmani czy gitarzyści rockowi.",
          fix: "W pliku z zestawami podano „aliowokację”. Aliowokacja to błąd wypowiedzi (mówi się co innego, niż się chciało), a nie błąd definicji." },
        { q: "Na czym polega podchwytliwy charakter pytania dziennikarza do „szarego człowieka”: „Czy jest możliwe, żeby redaktor największego tygodnika w Polsce, który jest zawsze na bieżąco ze wszystkimi wydarzeniami, nie wiedział o tej sprawie?”", topic: "Teoria pytań", ks: "VIII.4d",
          a: "Pytanie <b>podchwytliwe i sugestywne</b>. Przemyca założenie, że redaktor jest „zawsze na bieżąco ze wszystkim”, i sugeruje odpowiedź „nie, to niemożliwe”. Odpowiadając, zapytany przyjmuje to założenie, choć wcale go nie uznawał." },
        { q: "Jaki błąd popełniono w argumencie: „To świetny zespół, bo składa się ze świetnego gitarzysty, perkusisty i saksofonisty, a piosenkarz jest fenomenalny”?", topic: "Błędy wnioskowań", ks: "IX.4g",
          a: "<b>Błąd złożenia</b>: z cech części (świetni muzycy) wnioskuje się o całości (świetny zespół). Konspekt ma niemal identyczny przykład z najlepszą drużyną świata.",
          fix: "W pliku z zestawami podano „błędne koło”. Wniosek nie jest tu ukryty w przesłankach, więc to nie błędne koło." },
        { q: "Jaki chwyt erystyczny zastosowano: „Nie można zaakceptować twojej tezy! Jesteś ograniczonym umysłowo hipokrytą i zadajesz się z nieodpowiednimi ludźmi!”?", topic: "Chwyty erystyczne", ks: "X.6",
          a: "<b>Argumentum ad personam</b>: przypisanie przeciwnikowi wad, ośmieszanie go i osób z nim związanych, lżenie. Zawsze nielojalny.",
          fix: "W pliku z zestawami podano „ad hominem”. U tej prowadzącej ad hominem to odwołanie się do tez uznanych przez oponenta, a atak na osobę to <b>ad personam</b>. Na egzaminie używaj jej terminologii." },
        { q: "Wyprowadź 4 konsekwencje logiczne zdania: „Wszyscy biznesmeni są zamożni”.", topic: "Kwadrat logiczny i wnioskowanie bezpośrednie", ks: "IV.2c",
          a: "SaP (S = biznesmen, P = zamożny). (1) Nieprawda, że niektórzy biznesmeni nie są zamożni (~SoP). (2) Nieprawda, że żaden biznesmen nie jest zamożny (~SeP). (3) Niektórzy biznesmeni są zamożni (SiP). (4) Niektórzy zamożni są biznesmenami (PiS, konwersja ograniczona). Inne: Żaden biznesmen nie jest niezamożny (SeP', obwersja); Każdy niezamożny jest nie-biznesmenem (P'aS', kontrapozycja)." },
        { q: "Sprawdź metodą 0-1, czy wniosek wynika logicznie z przesłanek: Jan zna angielski i Jan nie zna angielskiego, a więc Jan jest bogaty.", topic: "Rachunek zdań, metoda 0-1", ks: "IV.4c",
          a: "p – Jan zna angielski, q – Jan jest bogaty. Schemat: (p ∧ ~p) → q. Koniunkcja p ∧ ~p jest zawsze 0, a implikacja z fałszywym poprzednikiem jest zawsze 1. Schemat jest prawem logiki, więc <b>wniosek wynika logicznie</b>. Ze sprzecznych przesłanek wynika cokolwiek; wnioskowanie jest poprawne formalnie, ale bezużyteczne." }
      ] },
      { name: "Kartka C", tasks: [
        { q: "Jakie funkcje pełni wyrażenie: „Mam cię serdecznie dość!”?", topic: "Funkcje języka", ks: "III.6", mod: "lg-w1",
          a: "Ekspresywną (emocje nadawcy), ewokatywną (ma poruszyć odbiorcę) i informatywną (informuje o stosunku nadawcy do odbiorcy)." },
        { q: "Jaki błąd popełniono w definicji: „Denotacja jest to relacja między nazwą a zbiorem desygnatów”?", topic: "Błędy definiowania", ks: "VII.3",
          a: "<b>Błąd przesunięcia kategorialnego</b>: denotacja to <b>zbiór</b> wszystkich desygnatów nazwy (jej zakres), a nie relacja. Relacją jest denotowanie." },
        { q: "Sprawdź metodą 0-1, czy wniosek wynika logicznie z przesłanek: Jeżeli pojadę własnym autem, to będę na miejscu już przed południem. Nie pojadę własnym autem, a więc nie będę na miejscu przed południem.", topic: "Rachunek zdań, metoda 0-1", ks: "IV.4c",
          a: "p – pojadę własnym autem, q – będę przed południem. Schemat: [(p → q) ∧ ~p] → ~q. Dla p = 0, q = 1 wychodzi 0 (można zdążyć np. pociągiem). <b>Wniosek nie wynika</b>: błąd odrzucenia poprzednika. Ta sama budowa co zadanie z pracowitością na kartce A." },
        { q: "Jaki błąd popełniono w argumencie: „Nie można się po niej spodziewać niczego dobrego! Cała jej rodzina narobiła mnóstwo kłopotów naszej gminie”?", topic: "Chwyty erystyczne i błędy wnioskowań", ks: "X.6, IX.4",
          a: "<b>Argumentum ad personam</b>: dyskredytacja osoby przez to, co zrobiły osoby z nią związane, zamiast oceny jej samej. Można dodać, że to nieuprawnione przeniesienie cech grupy (rodziny) na jednostkę.",
          fix: "W pliku z zestawami podano „przenoszenie winy / nieuprawnione uogólnienie”. To nie jest całkiem źle, ale w terminologii konspektu najtrafniejsze jest ad personam („ośmieszanie go i osób z nim związanych”)." },
        { q: "Na czym polega błąd wypowiedzi: „Po mordzie cara do władzy doszedł lud”?", topic: "Błędy w przekazywaniu myśli", ks: "V.a", unsure: true,
          a: "Na <b>dwuznaczności</b>: „po mordzie” to „po morderstwie” albo „po twarzy” (morda). Z listy błędów konspektu najlepiej pasuje <b>homonimia</b>: wieloznaczność mimo kontekstu.",
          fix: "W pliku z zestawami podano „aliowokację” (wypowiedź mówi co innego, niż autor chciał). To też da się obronić, bo zdanie niechcący brzmi zabawnie. Jeśli prowadząca na ćwiczeniach podała konkretną nazwę, trzymaj się jej." },
        { q: "Podaj przykład pytania: (a) dopełnienia prostego; (b) otwartego.", topic: "Rodzaje pytań", ks: "VIII.4",
          a: "(a) Dopełnienia prostego (kto? co? kiedy? gdzie?): „Kto jest autorem «Grażyny»?”. (b) Otwarte (wymaga obszernej odpowiedzi, nie wyznacza schematu): „Jak było na wakacjach?”.",
          fix: "W pliku z zestawami jako pytanie dopełnienia prostego podano „Czy padał deszcz?”. To pytanie <b>rozstrzygnięcia</b> (czy p?), a nie dopełnienia." },
        { q: "Wskaż implikaturę konwersacyjną: „Ciągle nie mamy czasu się spotkać, ale dobrze, że wynaleziono telefon!”", topic: "Implikatura konwersacyjna, maksymy Grice'a", ks: "V.b",
          a: "Zakładając, że mówiący trzyma się maksymy istotności, odczytujemy: <b>skoro nie możemy się spotkać, porozmawiajmy chociaż przez telefon</b> (a może i lekki wyrzut, że rozmówca nie dzwoni)." },
        { q: "Wyprowadź 4 konsekwencje logiczne zdania: „Wszyscy studenci są przerażeni sesją”.", topic: "Kwadrat logiczny i wnioskowanie bezpośrednie", ks: "IV.2c",
          a: "SaP. (1) Niektórzy studenci są przerażeni sesją (SiP). (2) Nieprawda, że niektórzy studenci nie są przerażeni sesją (~SoP). (3) Nieprawda, że żaden student nie jest przerażony sesją (~SeP). (4) Niektórzy przerażeni sesją są studentami (PiS). Inne: Żaden student nie jest nieprzerażony sesją (SeP')." }
      ] }
    ]
  }
});
