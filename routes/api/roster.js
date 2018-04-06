const router = require("express").Router();
const mongoose = require("mongoose");
const auth = require("../auth");

router.get("/", function(req, res, next) {
  //this is where we'd query db, give all the roster names
  Roster.find()
    .limit(50)
    .exec()
    .then(results => {
      return res.json({
        roster: results
      });
    })
    .catch(next);
});

// return roster names
router.get("/:roster", auth.optional, function(req, res, next) {
  Promise.resolve(req.payload ? User.findById(req.payload.id) : null)
    .then(function(user) {
      return req.roster
        .populate({
          path: "comments",
          populate: {
            path: "author"
          },
          options: {
            sort: {
              createdAt: "desc"
            }
          }
        })
        .execPopulate()
        .then(function(article) {
          return res.json({
            comments: req.article.comments.map(function(comment) {
              return comment.toJSONFor();
            })
          });
        });
    })
    .catch(next);
});
