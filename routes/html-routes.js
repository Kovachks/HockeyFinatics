var path = require("path");

module.exports = function(app) {
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	})

	app.get("/:team", function(req, res) {
		var team = req.params.team;
		console.log("test: " + team)
		res.sendFile(path.join(__dirname, "../public/" + req.params.team + ".html"))
	})
}