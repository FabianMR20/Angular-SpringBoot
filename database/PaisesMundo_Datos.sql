
-- -----------------------------------------------------
-- Table `paisesmundo`.`continente`
-- -----------------------------------------------------

INSERT INTO `paisesmundo`.`continente`(`idcontinente`,`nombre`) VALUES(1,"América"), (2,"Asia"),(3,"África"), (4,"Antártica"),(5,"Europa"),(6,"Oceania");


-- -----------------------------------------------------
-- Table `paisesmundo`.`pais`
-- -----------------------------------------------------


INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Australia','Australia','Australie','Camberra','61','AU','AUS',1);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Nueva Zelanda','New Zealand','Nouvelle-Zélande','Wellington','64','NZ','NZL',2);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Papúa Nueva Guinea','Papua New Guinea','Papouasie-Nouvelle-Guinée','Port Moresby','675','PG','PNG',3);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Fiyi','Fiji','Fidji','Suva','679','FJ','FJI',4);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Islas Marshall','Marshall Islands','Iles Marshall','Majuro','692','MH','MHL',5);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Islas Salomón','Solomon Islands','Iles Salomon','Honiara','677','SB','SLB',6);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Kiribati','Kiribati','Kiribati','Tarawa','686','KI','KIR',7);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Tonga','Tonga','Tonga','Nuku''alofa','676','TO','TON',8);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Samoa','Samoa','Samoa','Apia','685','WS','WSM',9);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Tuvalu','Tuvalu','Tuvalu','Funafuti','688','TV','TUV',10);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Vanuatu','Vanuatu','Vanuatu','Port Vila','678','VU','VUT',11);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Micronesia','Micronesia','Micronesia','Palikir','691','FM','FSM',12);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Nauru','Nauru','Nauru','Yaren','674','NR','NRU',13);
INSERT INTO Oceania(nombre,name,nom,cap,phone_code,i2,i3,id) VALUES ('Palau','Palau','Palau','Melekeok','680','PW','PLW',14);


-- -----------------------------------------------------
-- Table `paisesmundo`.`continente`
-- -----------------------------------------------------


INSERT INTO Users(id, name,password,language) VALUES (1,'adminEn','admin','en');
INSERT INTO Users(id,name,password,language) VALUES (2,'adminEs','admin','es');
INSERT INTO Users(id,name,password,language) VALUES (3,'adminFr','admin','fr');

INSERT INTO Users(id,name,password,language) VALUES (4,'userEn','user','en');
INSERT INTO Users(id,name,password,language) VALUES (5,'userEs','user','es');
INSERT INTO Users(id,name,password,language) VALUES (6,'userFr','user','fr');