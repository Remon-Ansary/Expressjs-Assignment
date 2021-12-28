var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var axios = require("axios");
var fetch = require("fetch");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

var country = "Bangladesh";
var city = "Dhaka";

// fetch(
//   "http://api.weatherapi.com/v1/history.json?24fd1c53215c4f9dbc195356212812=&q=London&dt=2010-01-"
// )
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// axios
//   .get(
//     "http://api.weatherapi.com/v1/history.json?24fd1c53215c4f9dbc195356212812=&q=London&dt=2010-01-"
//   )
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// axios
//   .get(
//     "http://api.weatherapi.com/v1/current.json?key=24fd1c53215c4f9dbc195356212812&q=" + country + "&q=" + city + "&aqi=no"
//   )
//   .then((response) => {
//     console.log(response.data);
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

module.exports = app;
