CREATE TABLE Koszyk (
DataUtworzenia DATE NOT NULL,
IdZamowienia INT NOT NULL, --Primary Key
StatusZamowienia VARCHAR(10) CHECK(StatusZamowienia IN ('Przyjête', 'Przygotowywane', 'Dostarczone')
)