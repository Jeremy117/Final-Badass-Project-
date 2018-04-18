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

//route parameter :event

router.param("event", function(req, res, next, eventid) {
  Event.findOne({ _id: eventid })
    .then(function(event) {
      if (!event) {
        return res.sendStatus(404);
      }
      req.event = event;

      return next();
    })
    .catch(next);
});

//get all the events in a request

router.get("/", function(req, res, next) {
  Event.find()
    .then(results => {
      res.json({
        events: results
      });
    })
    .catch(next);
});

//get a specific event

router.get("/:event", function(req, res, next) {
  Event.findById(req.event._id)
    .then(results => {
      res.json({
        event: results
      });
    })
    .catch(next);
});

//get all the events for a specific team

router.get("/team/:team", function(req, res, next) {
  Team.findById(req.team._id)
    .then(results => {
      res.json({
        events: results.events
      });
    })
    .catch(next);
});

//post a new event to the team

router.post("/:team", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      var event = new Event(req.body.event);
      event.team = req.team._id;
      /*
          Save event on success, we want to add the newly created 
          event Object_id to the events property
          of that specific Team, that is an array, so we use push
          */

      return event.save().then(function() {
        req.team.events.push(event._id);
        /*
          Once that event Object_id is added to the team events
          we need to save the team.
          */
        return req.team.save().then(function() {
          res.json({ event: event.toJSONFor() });
        });
      });
    })
    .catch(next);
});

router.delete("/:team/:event", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      var index = req.team.events.indexOf(req.event._id.toString());
      req.team.events.splice(index, 1);
      Promise.all([
        req.team.save().then(function() {
          console.log("event removed from team");
        }),
        req.event.remove().then(function() {
          console.log("event removed from database");
        })
      ]).then(function() {
        return res.sendStatus(204);
      });
    })
    .catch(next);
});

module.exports = router;
