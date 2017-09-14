drop database if exists hockeyStats_db;

create database hockeyStats_db;

use hockeyStats_db;

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

select * from playerStats;

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
    mascot VARCHAR(30) NOT NULL,
    teamName VARCHAR(100) NOT NULL,
    primaryColor VARCHAR(10) NOT NULL,
    secondaryColor VARCHAR(10) NOT NULL,
    primary key(id)
);


