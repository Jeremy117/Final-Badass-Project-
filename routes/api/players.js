const router = require("express").Router();
const mongoose = require("mongoose");
const Team = mongoose.model("Team");
const User = mongoose.model("User");
const Player = mongoose.model("Player");
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

// route parameter :player

router.param("player", function(req, res, next, _id) {
  Player.findOne({ _id: _id })
    .then(function(player) {
      if (!player) {
        return res.sendStatus(404);
      }
      req.player = player;

      return next();
    })
    .catch(next);
});

//get all the players in a request

router.get("/", function(req, res, next) {
  Player.find()
    .then(results => {
      res.json({
        players: results
      });
    })
    .catch(next);
});

//get a specific player

router.get("/:player", function(req, res, next) {
  Player.findById(req.player._id)
    .then(results => {
      res.json({ player: results });
    })
    .catch(next);
});

//get all the players for a specific team

router.get("/team/:team", function(req, res, next) {
  Team.findById(req.team._id)
    .then(results => {
      res.json({
        players: results.players
      });
    })
    .catch(next);
});

//post a new player to the team

router.post("/:team", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      var player = new Player(req.body.player);
      player.team = req.team._id;
      /*
        Save player on success, we want to add the newly created 
        player Object_id to the playes property
        of that specific Team, that is an array, so we use push
        */

      return player.save().then(function() {
        req.team.players.push(player._id);
        /*
        Once that player Object_id is added to the team players 
        we need to save the team.
        */
        return req.team.save().then(function() {
          res.json({ player: player.toJSONFor() });
        });
      });
    })
    .catch(next);
});

//delete a player from a team, and then delete the player from the players database

router.delete("/:team/:player", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      var index = req.team.players.indexOf(req.player._id.toString());
      req.team.players.splice(index, 1);
      Promise.all([
        req.team.save().then(function() {
          console.log("player removed from team");
        }),
        req.player.remove().then(function() {
          console.log("player removed from database");
        })
      ]).then(function() {
        return res.sendStatus(204);
      });
    })
    .catch(next);
});

module.exports = router;
