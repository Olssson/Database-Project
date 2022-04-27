CREATE TABLE Koszyk (
Id INT NOT NULL PRIMARY KEY REFERENCES Klient (KoszykId),
DataUtworzenia DATE NOT NULL,
IdZamowienia INT NOT NULL REFERENCES ProduktyKoszyk (ZamowienieId),
StatusZamowienia VARCHAR(10) CHECK(StatusZamowienia IN ('Przyjęte', 'Przygotowywane', 'Dostarczone')
)
