var db = require("../models");

module.exports = function(app) {
	app.get("/:team", function(req, res){
		var team = req.params.team;
		console.log(db.TeamInfo.team)
	});

	app.post("/api/forum", function(req, res) {
		console.log(req.body);
		db.Topic.create ({
		  opAuthor: req.body.opAuthor,
		  subject: req.body.subject,
		  content: req.body.content
		})
		.then(function(dbTopic) {
		  res.json(dbTopic);
		});
		
		console.log(req.body);
		db.Reply.create ({
		 author: req.body.author,
		 create_at: req.body.create_at,
		 content: req.body.content
		})
		.then(function(dbReply) {
		  res.json(dbReply);
		});
	});
}