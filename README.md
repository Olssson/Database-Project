# Database-Project
Aplikacja – Sklep

BUSINESS REQUIREMENTS:
- Projektem będzie sklep spożywczy z produktami 18+ (alkohole i papierosy) i bez ograniczeń.

FUNCTIONAL REQUIREMENTS:
- Użytkownik będzie mógł założyć konto w module “logowanie”:
o Obszar, w który będzie musiał wprowadzić adres e-mail
o Obszar, w którym będzie musiał wprowadzić swoje hasło oraz będzie musiał je
powtórzyć dla bezpieczeństwa i zapobiegnięciu błędom (np. przypadkowym
literówką)
o Obszar, w którym od użytkownika będzie wymagane podanie wieku
- Konto
o W koncie będą zawarte informacje o adresie wysyłkowym, wieku i danych logowania
użytkownika
o Użytkownik nie będzie w stanie kupić żadnego produktu bez założenia konta
- Koszyk w sklepie
o Ograniczona ilość wybranych produktów (zależnie od bazy danych)
o Użytkownik będzie musiał podać swoje dane wysyłkowe przy każdym zakupie
- Ograniczenia wiekowe
o Zależnie od podanej daty urodzenia
o Użytkownik niepełnoletni nie będzie miał możliwości dodania do koszyka produktu z
zakresu wiekowego 18+
o Z każdym wejściem na platformę przez użytkownika baza danych będzie sprawdzała
jego datę urodzenia z aktualną datą i w zależności od tego czy ma już skończone 18
lat czy też nie, będzie przyznawała mu uprawnienia do dodawania do koszyka
produktów z ograniczeniami wiekowymi

- Bazy danych
o W bazie danych będą zawarte informacje o użytkownikach i ich danych (logowania,
wysyłkowych i danych odnoście wieku użytkownika)

Funkcje które mogą działać
- Działające płatności internetowe
o Paypal
Funkcje Admina
 Może widzieć jaki użytkownik zamówił produkty ile oraz gdzie
 Informacje o kątach
