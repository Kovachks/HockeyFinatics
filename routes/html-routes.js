var path = require("path");

var express = require("express")

var router = express.Router();

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	})
}

router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"))
})

router.get("/:team", function(req, res) {
	var team = req.params.team;
	console.log("test: " + team)
	res.render(team)
})

module.exports = router;