CREATE TABLE AdresWysylki (
Adres VARCHAR(25) NOT NULL CHECK(LEN(Adres) > 3),
NrDomu INT NOT NULL,
NrMieszkania INT,
Miasto VARCHAR(60) NOT NULL,
KodPocztowy INT,
)