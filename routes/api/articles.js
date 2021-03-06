const router = require("express").Router();
const mongoose = require("mongoose");
const Article = mongoose.model("Article");
const User = mongoose.model("User");
const Team = mongoose.model("Team");
const Comment = mongoose.model("Comment");
const auth = require("../auth");

// Preload article objects on routes with ':article'
router.param("article", function(req, res, next, slug) {
  Article.findOne({ slug: slug })
    .populate("author")
    .then(function(article) {
      if (!article) {
        return res.sendStatus(404);
      }
      req.article = article;

      return next();
    })
    .catch(next);
});

router.param("comment", function(req, res, next, id) {
  Comment.findById(id)
    .then(function(comment) {
      if (!comment) {
        return res.sendStatus(404);
      }
      req.comment = comment;

      return next();
    })
    .catch(next);
});

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

router.get("/", function(req, res, next) {
  //this is where we'd query db, give all the articles
  // get the results
  //and send them back
  //db.getCollection('articles').find({})
  Article.find()
    .exec()
    .then(results => {
      return res.json({
        articles: results
      });
    })
    .catch(next);
});

// return an article by slug-id
router.get("/:article", auth.optional, function(req, res, next) {
  Article.findOne({ slug: req.article.slug }).then(article => {
    res.json({ article: article.toJSONFor() });
  });
});

//return team's articles

router.get("/team/:team", function(req, res, next) {
  Team.findById(req.team._id)
    .then(results => {
      res.json({
        articles: results.articles
      });
    })
    .catch(next);
});

// return an article's comments
router.get("/:article/comments", auth.optional, function(req, res, next) {
  Promise.resolve(req.payload ? User.findById(req.payload.id) : null)
    .then(function(user) {
      return req.article
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

// create a new Article and post it to team,  auth required
router.post("/:team", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }
      var article = new Article(req.body.article);
      article.team = req.team._id;
      article.author = user._id;
      req.team.articles.push(article._id);
      Promise.all([
        article.save().then(function() {
          return res.json({ article: article.toJSONFor() });
        }),
        req.team.save().then(console.log("team saved"))
      ]).then(console.log("article posted to team"));
    })
    .catch(next);
});

// update article
router.put("/:article", auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user) {
    if (req.article.author._id.toString() === req.payload.id.toString()) {
      if (typeof req.body.article.title !== "undefined") {
        req.article.title = req.body.article.title;
      }

      if (typeof req.body.article.description !== "undefined") {
        req.article.description = req.body.article.description;
      }

      if (typeof req.body.article.body !== "undefined") {
        req.article.body = req.body.article.body;
      }

      if (typeof req.body.article.tagList !== "undefined") {
        req.article.tagList = req.body.article.tagList;
      }

      req.article
        .save()
        .then(function(article) {
          return res.json({ article: article.toJSONFor(user) });
        })
        .catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});

// delete article
router.delete("/:article", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }

      if (req.article.author._id.toString() === req.payload.id.toString()) {
        return req.article.remove().then(function() {
          return res.sendStatus(204);
        });
      } else {
        return res.sendStatus(403);
      }
    })
    .catch(next);
});

// create a new comment
router.post("/:article/comments", auth.required, function(req, res, next) {
  User.findById(req.payload.id)
    .then(function(user) {
      if (!user) {
        return res.sendStatus(401);
      }

      var comment = new Comment(req.body.comment);
      comment.article = req.article;
      comment.author = user;
      /*
      Save comment, on success, we want to add the newly created 
      comment Object_id to the comments property
      of that specific article, that is an array, so we use push
      */
      return comment.save().then(function() {
        req.article.comments.push(comment);

        /*
        Once that comment Object_id is added to the article 
        we need to save that.
        */
        return req.article.save().then(function(article) {
          res.json({ comment: comment.toJSONFor() });
        });
      });
    })
    .catch(next); //--> if any of our saves/querys fail it triggers the catch
});

module.exports = router;
