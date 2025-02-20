# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Zadanie rekrutacyjne - CodersLab - kurs FER

## Wstęp

Prezentowane zadanie, jest okazją by zaprezentować Twoje dotychczasowe doświadczenie, Twój styl oraz Twój sposób pracy - i zaprezentować swoję umiejętności, wiedzę oraz znajomość narzędzi i technologii zdobytą w trakcie kursu.

W ramach prezentowanego zadania będziesz miał/miała okazję zaprezentować swoje umiejętności w następujących obszarach:

- HTML i CSS,
- SASS,
- JavaScript (ES6+),
- React (React Router),
- wzorce UI i UX,
- najlepsze praktyki.

## Wprowadzenie

Twoim celem jest stworzenie aplikacji opartej o bibliotekę **React**.

![home](images/strona_g%C5%82%C3%B3wna_wyniki_wyszukiwania.png)
\*Widok strony głównej - wynik wyszukiwania dla frazy **React\***.

Aplikacja powinna w sposób dynamiczny, za pomocą **tabeli** prezentować najważniejsze **informacje** dotyczące wyszukiwanych repozytoriów, wraz z możliwością oznaczenia wskazanych repozytoriów jako **ulubionych**. Dane powinny zostać pozyskane z publicznego API **GitHub**.

### API

Do API wysyłane jest żądanie zawierające frazę wprowadzoną przez użytkownika w pole tekstowe.

Żądanie typu **GET** powinno zostać wysłane pod adres: https://api.github.com/search/repositories?q=${query}

Dokumentacja API (dla endpointu _**/search**_) https://docs.github.com/en/rest/reference/search

> UWAGA: Ograniczenie API (dla nieautoryzowanych request-ów) **10** zapytań / minutę.

### Strona Główna

> Ścieżka **/**

Wiersz tabeli powinien zawierać następujące dane:

| ID       | Nazwa repozytorium | Właściciel | Ilość gwiazdek | Data utworzenia | Ulubione     |
| -------- | ------------------ | ---------- | -------------- | --------------- | ------------ |
| 10270250 | react              | facebook   | 184992         | 24.05.2013      | Dodaj / Usuń |

![table](images/strona_główna_brak_wyników_wyszukiwania.png)
_Widok strony głównej - brak wyników wyszukiwania_

![table](images/strona_główna_wyniki_wyszukiwania.png)
\*Widok strony głównej - wynik wyszukiwania dla frazy **React\***

![details](images/strona_główna_wyniki_wyszukiwania_sortowanie_malejąco.png)
_Widok strony głównej - wynik wyszukiwania dla frazy **React**, sortowanie kolumny malejąco_

![details](images/strona_główna_wyniki_wyszukiwania_sortowanie_rosnąco.png)
_Widok strony głównej - wynik wyszukiwania dla frazy **React**, sortowanie kolumny rosnąco_

### Ulubione

#### Lista ulubionych

> Ścieżka **/favourites**

![favs](images/ulubione_widok_listy.png)
_Widok listy ulubionych_

#### Widok szczegółowy

> Ścieżka **/favourites/:id**

![details](images/ulubione_widok_szczegółowy.png)
_Widok szczegółowy repozytorium_

#### 404 - Nie znaleziono

> Ścieżka **/404** (przekierowanie dla wszystkich nieprawidłowych adresów)
> ![not found](images/nie_znaleziono_404.png) > \*Widok strony **404 (Nie znaleziono)\***

---

> Kwestie interfejsu użytkownika (UI) i związanych z nim doświadczeń (UX) pozostawiamy Tobie (w tym RWD).

---

## Check-lista

### Zadania obowiązkowe

- [x] Aplikacja oparta o `React`, wykorzystująca bibliotekę `React Router` oraz stylowanie oparte o `SASS`.
- [x] Struktura routingu, umożliwia użytkownikowi swobodne przechodzenie pomiędzy widokami:
  - Nawigacja, zawierająca linki umożliwiające poruszanie się po aplikacji (dostępna w całej aplikacji),
  - Strona główna (`/`),
  - Ulubione (`/favourites`),
  - Widok szczegółowy (`/favourites/:id`),
  - Nie znaleziono (`/404`) (przekierowanie pod **/404** dla wszystkich nieprawidłowych adresów).
- [x] Aplikacja renderuje elementy pozwalające na wyszukiwanie repozytoriów na podstawie wprowadzonej nazwy.
- [ ] Aplikacja cache-uje ostatnie wyszukiwania (na bazie Twojej **prostej** implementacji) - celem jest uniknięcie wykonywania zapytań do API jeżeli wyszukiwanie takie było wykonywane w ramach poprzednich wyszukiwań.

  > Cache powinien być bardzo uproszczony i działać _per sesja_ (odświeżenie aplikacji zeruje state związany z cache-m).

- [x] Aplikacja renderuje tabelę zawierającą dane, zgodnie ze wskazaną strukturą.
- [ ] Renderowana tabela umożliwia sortowanie kolumn (rosnąco / malejąco).
- [x] Implementacja paginacji (**lokalnie**, nie za pomocą zapytań do API):
  - Kontrola ilośći wyświetlanych wierszy (5, 10 - **domyślnie**, 15, 30).
- [ ] Zapis ulubionych repozytoriów do `localStorage`.
- [ ] Aplikacja renderuje listę repozytoriów dodanych do ulubionych (dane pobierane z `localStorage`).
- [ ] Aplikacja renderuje widok szczegółowy dla ulubionych repozytoriów (dane pobierane z `localStorage`).

## Uwagi końcowe

- Możesz użyć pliku README do zapisania swoich uwag i spotrzeżeń dotyczących wykonywanego zadania. Możesz również wykorzystać ten plik do zaprezentowania swojego punktu widzenia dotyczącego procesu realizacji zadania.

- Upewnij się, że w Twoim kodzie nie ma błędów (generujących ostrzeżenia lub błędy w konsoli). Lepiej gdy, któryś z punktów nie zostanie dostarczony, aniżeli dostarczysz go zaimplementowanego nieprawidłowo.

## Materiały pomocnicze

- [React](https://pl.reactjs.org/)
- [React Router](https://reactrouter.com/)

- [Create React App](https://create-react-app.dev/)
- [Create React App - integracja SASS](https://create-react-app.dev/docs/adding-a-sass-stylesheet/)

- [GitHub API - Dokumentacja](https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api)
- [GitHub API - Dokumentacja /search](https://docs.github.com/en/rest/reference/search)

- [localStorage - dokumentacja](https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage)
- [localStorage - tutorial](https://blog.logrocket.com/localstorage-javascript-complete-guide/)

- [simple.css - Biblioteka UI](https://simplecss.org/)
- [Material UI - Biblioteka UI](https://mui.com/)
- [Mantine UI - Biblioteka UI](https://mantine.dev/)

- [Filozofia React](https://github.com/mithi/react-philosophies)
- [Najlepsze praktyki](https://github.com/alan2207/bulletproof-react)
- [Najlepsze praktyki](https://github.com/kudos-dude/react-best-practices)
- [Wzorce projektowe](https://www.patterns.dev/)

## Uwagi końcowe

> W implementacji przykładów (obrazków) użytych w powyższej dokumentacji wykorzystano dla celów przygotowania interfejsu użytkownika bibliotekę UI [simple.css](https://simplecss.org/) oraz wbudowane w system MacOS `emojis`.
