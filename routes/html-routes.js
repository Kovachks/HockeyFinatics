var path = require("path");

var util = require('util')

var db = require("../models");

var express = require("express");

var router = express.Router();

var passport = require('passport')

var session = require('express-session')

var bodyParser = require('body-parser')

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
	// LOG IN HTML ROUTE
	app.get("/login/loginPage", function(req, res) {
		res.send('Welcome to Passport')
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
	console.log(util.inspect(db.teaminfo, {showHidden: false, depth: null}))
	db.playerStats.findAll({
		where: {
			mascot: team
		},
		include: [
		{
			model: db.teaminfo,
		}]
	}).then(function(result) {
	console.log("Result: " + JSON.stringify({result}))	
	res.render("team", {team:result})
	});
});

 	router.post("/registration/login/submit", function(req, res) {
 		console.log("registration")
	    db.user.create(req.body).then(function(dbPost) {
	      res.json(dbPost);
	    });
  	});

router.get("/:team/schedule", function(req, res) {
	var team = req.params.team;
	db.gameSchedule.findAll({
		
		where: {
			mascot: team
		},
		include: [
		{
			model: db.teaminfo,
		}]
	}).then(function(result) {
		console.log("Schedule Result: " + JSON.stringify({result}))
		res.render("schedule", {team:result})
	});
});
router.get("/request/register", function(reg, res) {
	res.render("registration")
})
router.get("/request/login", function(reg, res) {
	res.render("login")
})
router.route("/request/register").post(function(req, res) {
 	console.log("registration")
	db.user.create(req.body).then(function(dbPost) {
		res.json(dbPost);
	});
	res.render('team')
});

module.exports = router;