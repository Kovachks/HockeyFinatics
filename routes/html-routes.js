var path = require("path");

var db = require("../models");

var express = require("express");

var router = express.Router();

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	})
};

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

module.exports = router;