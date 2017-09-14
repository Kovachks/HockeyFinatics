var path = require("path");

var db = require("../models");

var express = require("express");

var router = express.Router();

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
	db.playerStats.findAll({
		where: {
			mascot: team
		},
		include: [
		{
			model: db.teaminfo,
		}]
	}).then(function(result) {
	console.log("Result: " + JSON.stringify({team:result}))		
	res.render("team", {team:result})
	});
});
router.get("/registration", function(reg, res) {
	res.render(registration)
})

module.exports = router;