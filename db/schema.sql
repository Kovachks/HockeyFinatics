create database if not exists hockeyStats_db;


set foreign_key_checks=0;


use hockeyStats_db;

CREATE TABLE IF NOT EXISTS `teaminfos` (`mascot` VARCHAR(255), `teamName` VARCHAR(255), `primaryColor` VARCHAR(255), `secondaryColor` VARCHAR(255), PRIMARY KEY (`mascot`)) ENGINE=InnoDB;

CREATE TABLE `gameSchedules` (`id` INTEGER NOT NULL auto_increment , `vs` VARCHAR(255), `opponent` VARCHAR(255), `mascot` VARCHAR(255), `gameDate` DATE, `time` VARCHAR(255), `timezone` VARCHAR(255), `chanceToWin` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`mascot`) REFERENCES `teaminfos` (`mascot`) ON DELETE NO ACTION ON UPDATE CASCADE) ENGINE=InnoDB;



create table userdata (
id integer(5) auto_increment not null,
userName varchar(15) not null,
password varchar(15) not null, 
email varchar(50) not null,
favTeams varchar(60) not null,
primary key (id)
);

create table teamStats (
    id integer(5) auto_increment not null,
    teamName varchar(35) not null,
    location varchar(35) not null,
    homeWins integer(10) not null,
    homeLosses integer(10) not null,
    awayWins integer(10) not null,
    awayLosses integer(10) not null,
    primary key (id)
);

use hockeyStats_db;

create table playerStats (
    id integer(5) auto_increment not null,
    name varchar(35) not null,
    age integer(3) not null,
    nationality varchar(35) not null,
    team varchar(35) not null,
    mascot varchar(35) not null,
    position varchar(35) not null,
    games_played integer(5) not null,
    goals integer(3) not null,
    assists integer(3) not null,
    points integer(3) not null,
    primary key(id)
);

use hockeyStats_db;

create table teaminfos (
	id integer(5) Auto_Increment NOT NULL,
    mascot VARCHAR(255) NOT NULL,
    teamName VARCHAR(255) NOT NULL,
    primaryColor VARCHAR(255) NOT NULL,
    secondaryColor VARCHAR(255) NOT NULL,
    primary key(id)
);

use hockeyStats_db;

create table gameSchedules(
	id integer(5) auto_increment NOT NULL,
	mascot VARCHAR(255) NOT NULL,
    vs VARCHAR(255) NOT NULL,
    opponent VARCHAR(255) NOT NULL,
    gameDate date NOT NULL,
    time VARCHAR(255) NOT NULL,
    timezone VARCHAR(255) NOT NULL,
    chanceToWin INTEGER(4) NOT NULL,
    primary key(id)
);