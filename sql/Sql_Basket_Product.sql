CREATE TABLE ProduktyKoszyk(
ProduktId INT NOT NULL PRIMARY KEY REFERENCES Produkty (Id),
Ilosc INT NOT NULL,
ZamowienieId INT NOT NULL REFERENCES Koszyk (IdZamowienia),
)
