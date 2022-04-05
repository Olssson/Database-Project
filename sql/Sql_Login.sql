CREATE TABLE Klient (
Imie VARCHAR(30) NOT NULL CHECK(LEN(Imie) > 3),
Nazwisko VARCHAR(30) NOT NULL CHECK(LEN(Nazwisko) > 3),
Email VARCHAR(50) NOT NULL CHECK(LEN(Email) > 7),
DataUrodzenia DATE NOT NULL,
Haslo VARCHAR(25) NOT NULL CHECK(LEN(Haslo) > 8),
RodzajUzytkownika VARCHAR(7) NOT NULL CHECK(RodzajUzytkownika IN ('ADMIN', 'USER')),
)