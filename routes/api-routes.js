var db = require("../models");

module.exports = function(app) {
	app.get("/api/forum/", function(req, res) {
		db.Topic.findAll({})
		.then(function(dbTopic) {
			res.json(dbTopic);
		});
	});
 	app.post("/registration/login/submit", function(req, res) {
 		console.log("registration")
	    db.user.create(req.body).then(function(dbPost) {
	      res.json(dbPost);
	    });
  	});
	app.post("/api/forum/team/:team", function(req, res) {
		console.log(req.body);
		db.Topic.findAll ({
			where: {
				team: req.params.team
			}
		})
		.then(function(dbTopic) {
			res.json(dbTopic);
		});
	});

	app.get("/api/forum/:id", function(req, res) {
    db.Topic.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbTopic) {
      res.json(dbTopic);
    });
	});

	app.get("/api/forum/:user", function(req, res) {
    db.Topic.findOne({
      where: {
        user: req.params.user
      }
    })
    .then(function(dbTopic) {
      res.json(dbTopic);
    });
	});
	
	app.post("/api/forum", function(req, res) {
		console.log(req.body);
		db.Topic.create ({
			user: req.body.user,
		  subject: req.body.subject,
		  content: req.body.content
		})
		.then(function(dbTopic) {
			res.json(dbTopic);
		});
	});
		  
	app.delete("/api/forum/:id", function(req, res) {
		db.Topic.destroy ({
			where: {
				id: req.params.id
			}
		})
		.then(function(dbTopic) {
			res.json(dbTopic);
		});
	});
};