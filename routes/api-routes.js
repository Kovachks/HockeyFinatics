var db = require("../models");

module.exports = function(app) {
	app.get("/:team", function(req, res){
		db.teamInfo
	})
}