var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var isProduction = process.env.NODE_ENV === "production";

var app = express();

// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//connect to our database monogo
if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(
    "mongodb://admin:admin@ds213199.mlab.com:13199/heroku_57qw8z8r",
    function(err) {
      if (err) return console.error(err);
      console.log("THE DB, mongo, is connected, and I ROCK");
    }
  );
  mongoose.set("debug", true);
}

//import models as soon as we are connected!!!!!!
require("./models/Article");
app.use(require("./routes"));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api", function(req, res, next) {
  res.send("API all good in the hood!");
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client-app/build/index.html"));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

// var express = require("express");
// var path = require("path");
// var favicon = require("serve-favicon");
// var logger = require("morgan");
// var cookieParser = require("cookie-parser");
// var bodyParser = require("body-parser");
// var mongoose = require("mongoose");

// // var index = require("./routes/index");
// // var users = require("./routes/users");

// var app = express();

// var isProduction = process.env.NODE_ENV === "production";

// // view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "jade");

// //connect to our database Heroku
// if (isProduction) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect(
//     "mongodb://admin:admin@ds213199.mlab.com:13199/heroku_57qw8z8r",
//     function(err) {
//       if (err) return console.error(err);
//       console.log("THE DB, mongo, is connected, and Team Huddle Rules");
//     }
//   );
//   mongoose.set("debug", true);
// }

// //import models as soon as we are connected!!!!!!
// require("./models/Article");

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger("dev"));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// // app.use("/", index);
// // app.use("/users", users);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;
