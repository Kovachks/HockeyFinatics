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

<<<<<<< HEAD
=======
// router.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname, "../public/index.html"))
// });

>>>>>>> b6685613f5e70cba8c5a971d3c721a9f3328b0ce
router.get("/:team", function(req, res) {
	var team = req.params.team;
	// console.log(JSON.stringify(db))
	db.teaminfo.findOne({
		where: {
			teamMascot: team
		}
	}).then(function(result) {
	res.render("team", {team:result})
	console.log(JSON.stringify(result))	
	});
});
// LOGIN PAGE



module.exports = router;