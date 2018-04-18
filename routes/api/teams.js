const router = require("express").Router();
const mongoose = require("mongoose");
const Team = mongoose.model("Team");
const User = mongoose.model("User");
const Player = mongoose.model("Player");
const Event = mongoose.model("Event");
const Article = mongoose.model("Article");
const auth = require("../auth");

//route parameter :team

router.param("team", function(req, res, next, _id) {
  Team.findOne({ _id: _id })
    .then(function(team) {
      if (!team) {
        return res.sendStatus(404);
      }
      req.team = team;

      return next();
    })
    .catch(next);
});

// route parameter :user

router.param("user", function(req, res, next, email) {
  User.findOne({ email: email })
    .then(function(user) {
      if (!user) {
        return res.sendStatus(404);
      }
      req.user = user;

      return next();
    })
    .catch(next);
});

//get all the teams in a request

router.get("/", function(req, res, next) {
  Team.find()
    .then(results => {
      res.json({
        teams: results
      });
    })
    .catch(next);
});

//get a specific team and populate

router.get("/:team", function(req, res, next) {
  Team.findById(req.team._id)
    .populate("articles")
    .populate("events")
    .populate("players")
    .then(results => {
      res.json({
        team: results
      });
    })
    .catch(next);
});

//post a team to a specific user

router.post("/:user", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      var team = new Team(req.body.team);
      team.user = req.user;
      //Once we have saved the new team, we push into the req.user the new team id
      team.save().then(function() {
        req.user.teams.push(team._id);
        req.user.save().then(function() {
          res.json({ user: req.user.toProfileJSONFor() });
        });
      });
    })
    .catch(next);
});

//Delete a team its players events and articles, and remove from user

router.delete("/:team", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      Promise.all([
        Promise.all(
          req.team.players.map(playerid =>
            Player.findById(playerid).then(player =>
              player
                .remove()
                .then(console.log("player deleted: " + player.name))
            )
          )
        ),
        Promise.all(
          req.team.events.map(eventid =>
            Event.findById(eventid).then(event =>
              event.remove().then(console.log("event deleted: " + event.title))
            )
          )
        ),
        Promise.all(
          req.team.articles.map(articleid =>
            Article.findById(articleid).then(article =>
              article
                .remove()
                .then(console.log("Article deleted: " + article.title))
            )
          )
        ),
        Team.findById(req.team._id).then(team =>
          team.remove().then(console.log("Team removed"))
        ),
        User.findById(req.team.user).then(user => {
          user.teams.splice(user.teams.indexOf(req.team._id), 1);
          user.save().then(console.log("Team removed from user"));
        })
      ]).then(function() {
        return res.sendStatus(204);
      });
    })
    .catch(next);
});

module.exports = router;
