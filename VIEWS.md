# Dashboard
- '/'
  - statystyki dzisiejszych zamównień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie
- '/login'
  - pola na login i hasło
  - guzik do zalogowania  )(link do dashboardu)

# Widok dostępności stolików
- '/tables'
  - wybor daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumach zamias dni są stoliki
    - Po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- '/tables/booking/:id'
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian
- '/tables/booking/new'
  - Umożliwia edycję i zapisanie zmian
- '/tables/events/:id'
  - zawiera wszystkie informacje dotyczące eventów
  - umożliwia edycję i zapisanie zmian
- '/tables/events/new'
  - umożliwia edycję i zapisanie zmian

# Widok kelnera
- '/waiter'
  - tabela
    - w wierszach stoliki
    - w kolumnach status, czas od ostatniej aktywności, dostępne akcje dla danego stolika
- '/waiter/order/new'
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia
- '/waiter/order/:id'
  - jak powyższa

# Widok kuchni
- '/kitchen'
  - wyświetla listę zamówień w kolejności ich złożenia
    - lista musi zawierać numer stolika (lub zamówienia zdalnego) oraz pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
