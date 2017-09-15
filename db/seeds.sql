use hockeystats_db;
SELECT `teaminfo`.*, `playerStats`.`id` AS `playerStats.id`, `playerStats`.`name` AS `playerStats.name`, `playerStats`.`age` AS `playerStats.age`, `playerStats`.`nationality` AS `playerStats.nationality`, `playerStats`.`team` AS `playerStats.team`, `playerStats`.`mascot` AS `playerStats.mascot`, `playerStats`.`position` AS `playerStats.position`, `playerStats`.`games_played` AS `playerStats.games_played`, `playerStats`.`goals` AS `playerStats.goals`, `playerStats`.`assists` AS `playerStats.assists`, `playerStats`.`points` AS `playerStats.points`, `gameSchedules`.`id` AS `gameSchedules.id`, `gameSchedules`.`vs` AS `gameSchedules.vs`, `gameSchedules`.`opponent` AS `gameSchedules.opponent`, `gameSchedules`.`mascot` AS `gameSchedules.mascot`, `gameSchedules`.`date` AS `gameSchedules.date`, `gameSchedules`.`time` AS `gameSchedules.time`, `gameSchedules`.`timezone` AS `gameSchedules.timezone`, `gameSchedules`.`chanceToWin` AS `gameSchedules.chanceToWin` FROM (SELECT `teaminfo`.`id`, `teaminfo`.`mascot`, `teaminfo`.`teamName`, `teaminfo`.`primaryColor`, `teaminfo`.`secondaryColor` FROM `teaminfos` AS `teaminfo` WHERE `teaminfo`.`mascot` = 'bluejackets' LIMIT 1) AS `teaminfo` LEFT OUTER JOIN `playerStats` AS `playerStats` ON `teaminfo`.`mascot` = `playerStats`.`mascot` LEFT OUTER JOIN `gameSchedules` AS `gameSchedules` ON `teaminfo`.`mascot` = `gameSchedules`.`mascot`;

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("mapleleafs", "Toronto Maple Leafs", "#013e7f", "#ffffff");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("avalanche", "Colorado Avalanche", "#236192", "#6f263d");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("ducks","Anaheim Ducks", "#85714d", "#fc4c02");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("coyotes","Phoenix Coyotes", "#862633", "#ddcba4");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("bruins","Boston Bruins", "#ffb81c", "#010101");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("sabres","Buffalo Sabres", "#041e42", "#ffb81c");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("flames","Calgary Flames", "#c8102e", "#f1be48");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("hurricanes","Carolina Hurricanes", "#c8102e", "#010101");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("blackhawks","Chicago Blackhawks", "#c8102e", "#010101");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("bluejackets","Columbus Blue Jackets", "#041e42", "#c8102e");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("stars","Dallas Stars", "#006341", "#8a8d8f");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("redwings","Detroit Redwings", "#c8102e", "#f2f5f9");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("oilers","Edmonton Oilers", "#00205b", "#cf4520");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("panthers","Florida Panthers", "#041e42", "#b9957b");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("kings","LA Kings", "#010101", "#a2aaad");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("wild","Minnesota Wild", "#154734", "#ddcba4");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("canadians","Montreal Canadians", "#001e62", "#a6192e");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("predators","Nashville Predators", "#041e42", "#ffb81c");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("devils","New Jersey Devils", "#c8102e", "#010101");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("islanders","New York Islanders", "#003087", "#fcfc02");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("rangers","New York Rangers", "#0033a0", "#c8102e");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("senators","Ottowa Senators", "#c8102e", "#c69214");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("flyers","Philadelphia Flyers", "#010101", "#fa4616");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("penguins","Pittsburgh Penguins", "#ffb81c", "#010101");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("sharks","San Jose Sharks", "#006272", "#e57200");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("blues","St. Louis Blues", "#003087", "#ffb81c");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("lightning","Tampa Bay Lightning", "#00205b", "#f2f5f9");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("canucks","Vancouver Canucks", "#00205b", "#97999b");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("goldenknights","Las Vegas Golden Knights", "#010101", "#b4957a");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("capitals","Washington Capitals", "#041e42", "#a6192e");

insert into teaminfos (mascot, teamName, primaryColor, secondaryColor)
values("jets","Winnipeg Jets", "#041e42", "#c8102e");