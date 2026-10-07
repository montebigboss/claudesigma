# Wykuj

Aplikacja do nauki materiału z wykładów. Każdy wykład to osobny moduł, a każdy
moduł ma te same tryby nauki:

| Tryb | Na czym polega |
| --- | --- |
| Ścieżka | Lekcje jak w Duolingo: 3 serca, błędne pytania wracają na koniec lekcji, gwiazdki za trafność, kolejna lekcja odblokowuje się po poprzedniej. Na końcu test końcowy. |
| Fiszki | Pudełka Leitnera (0–5). „Umiem” przesuwa kartę dalej i rzadziej ją pokazuje, „Nie pamiętam” wraca ją na początek. Można odwrócić kierunek: opis → pojęcie. |
| Quiz na czas | Jak Kahoot: 4 kolorowe kafelki, 20 s na pytanie, więcej punktów za szybkość i serię. |
| Pary | Pojęcie do znaczenia, 3 rundy na czas, błąd to +3 s. |
| Sortownia | Przesuwanie kart w lewo albo w prawo: dzieci czy młodzież, zielony czy czerwony ołówek, kontrola wewnętrzna czy zewnętrzna. |
| Egzamin próbny | 20 pytań zamkniętych bez podpowiedzi, próg jak na prawdziwym teście (więcej niż 50%), omówienie błędów po oddaniu. |
| Do poprawki | Pytania, na których ostatnio się pomyliłeś, aż odpowiesz dobrze. |
| Notatki | Cały wykład z oznaczeniem źródła, tabela, scenka pamięciowa do 10 zasad i słowniczek z wyszukiwarką. |

Pytania częściej losują to, czego nie umiesz. Za naukę są XP, seria dni,
dzienny cel, rangi (od Świeżaka do Profesora) i odznaki.

Każda pozycja ma źródło: slajd lub skrypt, powiedziane ustnie, definicja do
zapamiętania słowo w słowo albo ★ dopowiedzenie spoza materiałów prowadzącego.
Dopowiedzenia można wyłączyć w profilu, a egzamin próbny zawsze je pomija.

## Przedmioty

| Przedmiot | Moduły |
| --- | --- |
| Metody pracy twórczej z dziećmi i młodzieżą (MPT) | Wykład 1: Specyfika |
| Antropologia filozoficzna (AF) | Wykład 1: Czym jest antropologia filozoficzna |
| Logika (LOG) | Wykład 1: Semiotyka: język i znak + przewodnik „Jak zdać logikę” |
| Procesy poznawcze: percepcja i uwaga (PP) | Wykład 1: Wprowadzenie do percepcji i uwagi |

Każdy przedmiot ma własny kolor i ikonę. Ekran startowy grupuje wykłady pod
przedmiotami i ma filtr przedmiotów, a „Dalej” prowadzi do ostatnio otwartego wykładu.

Przedmiot może mieć przewodnik po zaliczeniu (`Wykuj.registerCourse`, np.
`modules/lg-kurs.js`): zasady egzaminu, listę pytań teoretycznych z szkieletami
odpowiedzi ustnych i kartki próbne, które rozwiązuje się na brudno, odsłania
rozwiązanie i ocenia samemu. Przy zadaniach, w których krążąca odpowiedź była
błędna, jest osobna uwaga.

Moduły z Antropologii i Logiki są pisane „po ludzku”: każde pojęcie ma wyjaśnienie bez
żargonu i obok dokładne sformułowanie z materiałów, a notatki zaczynają się od
„Minimum na zaliczenie” i mają słowniczek z filozoficznego na zwykły polski.

## Uruchomienie

Otwórz `index.html` w przeglądarce. Wersja w jednym pliku:

```
python3 tools/bundle.py   # → dist/wykuj.html oraz dist/wykuj.artifact.html
```

Postępy zapisują się w przeglądarce. Opublikowana na claude.ai zapisuje je też
na koncie, więc działa na telefonie i komputerze.

## Nowy wykład

1. Skopiuj moduł z tego samego przedmiotu (np. `modules/af-w1.js` jako `modules/af-w2.js`)
   i podmień treść. Format ćwiczeń jest opisany w komentarzu na górze pliku.
2. Dodaj `<script src="modules/mpt-w2.js"></script>` w `index.html` obok pierwszego modułu.
3. Uruchom `python3 tools/bundle.py`.

Moduły z tym samym `course.id` grupują się pod jednym przedmiotem na ekranie startowym.
Nowy przedmiot to nowe `course.id`, skrót, `theme` (kolor: `green`, `indigo`, `teal` albo `plum`;
kolejne dodaje się w `app.css`) i `icon`.

Opcjonalne pola modułu: `plain` przy pojęciach (wyjaśnienie po ludzku), `minimum`
(lista „na zaliczenie”), `sets` (własne listy dla pytań „która to…?”), `story`, `table`,
`examNote` (gdy prowadzący nie podał progu), `sourceNames` (legenda źródeł) i `deep`
(wątki „do przemyślenia” z wykładu, pokazywane w notatkach jako rozwijane pytania).

Typy ćwiczeń: `mcq`, `tf`, `cloze`, `type`, `which`, `match`, `sort`, `multi`
(zaznacz wszystkie poprawne) i `order` (ułóż w kolejności).

## Struktura

```
index.html          wejście, ładuje skrypty po kolei
app.css             wygląd (jasny i ciemny motyw)
js/core.js          rejestr modułów, stan, XP, serie, fiszki, synchronizacja
js/icons.js         ikony SVG
js/fx.js            dźwięki, konfetti, powiadomienia
js/exercises.js     typy ćwiczeń i składanie lekcji
js/session.js       przebieg lekcji i ekran wyniku
js/games.js         fiszki, quiz na czas, pary, sortownia, egzamin
js/screens.js       start, moduł, ścieżka, notatki, profil
js/guide.js         przewodnik „Jak zdać” i trener kartek egzaminacyjnych
js/app.js           router
modules/            jeden plik na wykład
tools/bundle.py     składa wszystko w jeden plik HTML
```
