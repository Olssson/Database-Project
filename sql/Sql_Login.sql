CREATE TABLE `login` ( `Id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(30) NOT NULL , `surname` VARCHAR(30) NOT NULL , `email` TEXT NOT NULL , `password` VARCHAR(50) NOT NULL , `BirthDate` DATE NOT NULL , `type` INT NOT NULL DEFAULT '0' , PRIMARY KEY (`Id`)) ENGINE = InnoDB; 