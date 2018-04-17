const router = require("express").Router();
const mongoose = require("mongoose");
const Team = mongoose.model("Team");
const User = mongoose.model("User");
const Player = mongoose.model("Player");
const Event = mongoose.model("Event");
const auth = require("../auth");

//route parameter :team

router.param("team", function(req, res, next, teamid) {
  Team.findOne({ _id: teamid })
    .then(function(team) {
      if (!team) {
        return res.sendStatus(404);
      }
      req.team = team;

      return next();
    })
    .catch(next);
});

// route parameter :player

router.param("player", function(req, res, next, playerid) {
  Player.findOne({ _id: playerid })
    .then(function(player) {
      if (!player) {
        return res.sendStatus(404);
      }
      req.player = player;

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

//get a specific team

router.get("/:team", function(req, res, next) {
  Team.findById(req.team._id)
    .then(results => {
      res.json({
        team: results
      });
    })
    .catch(next);
});

//post a new team to the database

router.post("/", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      var team = new Team(req.body.team);
      team.save().then(function() {
        return res.json({ team: team.toJSONFor() });
      });
    })
    .catch(next);
});

//Delete a team its players and events

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
        Team.findById(req.team._id).then(team => team.remove().then())
      ]).then(function() {
        return res.sendStatus(204);
      });
    })
    .catch(next);
});

module.exports = router;
