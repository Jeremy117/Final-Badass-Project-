const router = require("express").Router();

router.use("/articles", require("./articles"));

router.use(function(err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key) {
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;

// previous routes/api/index.js
// const router = require("express").Router();

// router.use("/", require("./users"));
// router.use("/articles", require("./articles"));

// module.exports = router;
