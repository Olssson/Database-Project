CREATE TABLE Produkty(
Id INT NOT NULL PRIMARY KEY REFERENCES ProduktyKoszyk (ProduktId),
Nazwa VARCHAR(30) NOT NULL,
Cena INT NOT NULL,
OgraniczenieWiekowe CHAR(3) CHECK(OgraniczenieWiekowe IN ('Tak', 'Nie')),
Rodzaj VARCHAR(20) NOT NULL
)
