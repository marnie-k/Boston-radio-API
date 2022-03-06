CREATE DATABASE radio;

CREATE USER 'listener'@'localhost' IDENTIFIED WITH mysql_native_password BY 'IamListening';

GRANT ALL ON radio.* TO 'listener'@'IamListening';

USE radio;

CREATE TABLE stations(
id INT auto_increment,
frequency INT NOT NULL,
callLetters VARCHAR(255) NOT NULL,
market VARCHAR(255) NOT NULL,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE programming(
stationId INT,
id INT auto_increment,
programming VARCHAR(225) NOT NULL,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id),
FOREIGN KEY(stationId) REFERENCES stations(id)
);

INSERT INTO stations (frequency, callLetters, market) VALUES ('88.1', 'WMBR', 'college');
INSERT INTO stations (frequency, callLetters, market) VALUES ('88.9', 'WERS', 'college');
INSERT INTO stations (frequency, callLetters, market) VALUES ('90.3', 'WZBC', 'college');
INSERT INTO stations (frequency, callLetters, market) VALUES ('90.9', 'WBUR', 'college');
INSERT INTO stations (frequency, callLetters, market) VALUES ('91.5', 'WMFO', 'college');
INSERT INTO stations (frequency, callLetters, market) VALUES ('91.9', 'WUMB', 'college');
INSERT INTO stations (frequency, callLetters, market) VALUES ('95.3', 'WHRB', 'college');
INSERT INTO stations (frequency, callLetters, market) VALUES ('92.5', 'WXRV', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('92.9', 'WBOS', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('93.7', 'WEEI', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('105.7','WROR', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('106.7','WMJX', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('96.9', 'WBQT', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('100.7', 'WZLX' 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('104.1','WWBX', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('94.5', 'WJMN', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('98.5', 'WBZ', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('97.7', 'WZRM', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('101.7','WBWL', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('102.5','WKLB', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('107.3','WAAF', 'commercial');
INSERT INTO stations (frequency, callLetters, market) VALUES ('89.7', 'WGBH' 'public');
INSERT INTO stations (frequency, callLetters, market) VALUES ('99.5', 'WCRB' 'commercial');

INSERT INTO programming (stationId, programming) VALUES (2,'Variety');
INSERT INTO programming (stationId, programming) VALUES (2,'Variety');
INSERT INTO programming (stationId, programming) VALUES (2,'Variety');
INSERT INTO programming (stationId, programming) VALUES (9,'NPR');
INSERT INTO programming (stationId, programming) VALUES (2,'Variety');
INSERT INTO programming (stationId, programming) VALUES (2,'Variety');
INSERT INTO programming (stationId, programming) VALUES (2,'Variety');
INSERT INTO programming (stationId, programming) VALUES (2,'Variety');
INSERT INTO programming (stationId, programming) VALUES (3,'Classic Rock');
INSERT INTO programming (stationId, programming) VALUES (12, 'Sports');
INSERT INTO programming (stationId, programming) VALUES (3,'Classic Rock');
INSERT INTO programming (stationId, programming) VALUES (10,'Soft Rock');
INSERT INTO programming (stationId, programming) VALUES (7,'Hip Hop' );
INSERT INTO programming (stationId, programming) VALUES (3,'Classic Rock');
INSERT INTO programming (stationId, programming) VALUES (1,'Adult Contemporary');
INSERT INTO programming (stationId, programming) VALUES (13, 'Top 40');
INSERT INTO programming (stationId, programming) VALUES (8, 'News' );
INSERT INTO programming (stationId, programming) VALUES (11, 'Spanish');
INSERT INTO programming (stationId, programming) VALUES (5,'Country');
INSERT INTO programming (stationId, programming) VALUES (5,'Country');
INSERT INTO programming (stationId, programming) VALUES (6,'Hard Rock');
INSERT INTO programming (stationId, programming) VALUES (9, 'NPR');
INSERT INTO programming (stationId, programming) VALUES (4, 'Classical');