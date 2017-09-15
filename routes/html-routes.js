var path = require("path");

var db = require("../models");

var express = require("express");

var router = express.Router();

var Sequelize = require("sequelize");

var sequelize = new Sequelize("hockeyStats_db", "root", "Kihkvc90!", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
	// LOG IN HTML ROUTE
	app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
	});
	// REGISTER HTML ROUTE
		app.get("/registration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
	});
	// FORGOT PASSWORD ROUTE
		app.get("/forgot-password", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/forgot-password.html"));
		});
			app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
      });
};

router.get("/:team", function(req, res) {
	var team = req.params.team;
	// db.playerStats.findAll({
	// 	where: {
	// 		mascot: team
	// 	},
	// 	include: [
	// 	{
	// 		model: db.teaminfo,
	// 	}
	// 	,{
	// 		model: db.gameSchedule,
	// 	}]
	sequelize.query("SELECT `teaminfo`.*, `playerStats`.`id` AS `playerStats.id`, `playerStats`.`name` AS `playerStats.name`, `playerStats`.`age` AS `playerStats.age`, `playerStats`.`nationality` AS `playerStats.nationality`, `playerStats`.`team` AS `playerStats.team`, `playerStats`.`mascot` AS `playerStats.mascot`, `playerStats`.`position` AS `playerStats.position`, `playerStats`.`games_played` AS `playerStats.games_played`, `playerStats`.`goals` AS `playerStats.goals`, `playerStats`.`assists` AS `playerStats.assists`, `playerStats`.`points` AS `playerStats.points`, `gameSchedules`.`id` AS `gameSchedules.id`, `gameSchedules`.`vs` AS `gameSchedules.vs`, `gameSchedules`.`opponent` AS `gameSchedules.opponent`, `gameSchedules`.`mascot` AS `gameSchedules.mascot`, `gameSchedules`.`date` AS `gameSchedules.date`, `gameSchedules`.`time` AS `gameSchedules.time`, `gameSchedules`.`timezone` AS `gameSchedules.timezone`, `gameSchedules`.`chanceToWin` AS `gameSchedules.chanceToWin` FROM (SELECT `teaminfo`.`id`, `teaminfo`.`mascot`, `teaminfo`.`teamName`, `teaminfo`.`primaryColor`, `teaminfo`.`secondaryColor` FROM `teaminfos` AS `teaminfo` WHERE `teaminfo`.`mascot` = 'bluejackets' LIMIT 1) AS `teaminfo` LEFT OUTER JOIN `playerStats` AS `playerStats` ON `teaminfo`.`mascot` = `playerStats`.`mascot` LEFT OUTER JOIN `gameSchedules` AS `gameSchedules` ON `teaminfo`.`mascot` = `gameSchedules`.`mascot`;"
	).then(function(result) {
	console.log("Result: " + JSON.stringify({result}))	
	res.render("team", {team:result})
	});
});
router.get("/registration", function(reg, res) {
	res.render(registration)
})

module.exports = router;