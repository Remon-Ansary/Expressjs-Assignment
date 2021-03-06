var express = require("express");
var router = express.Router();
var axios = require("axios");
var app = express();
const fs = require("fs");
("use strict");
router.get("/all/:country/:city/:date", function (req, res, next) {
  var country = req.params.country;
  var city = req.params.city;
  var date = req.params.date;
  axios
    .get(
      "http://api.weatherapi.com/v1/history.json?key=2990633566b04f7aac194136212912&q=" +
        country +
        "&q=" +
        city +
        "&dt=" +
        date
    )
    .then((response) => {
      var jsonObject = JSON.stringify(response.data);
      var object = JSON.parse(jsonObject);
      console.log(object.forecast.forecastday[0].date);

      var location = object.location;
      console.log(location);
      var forecast = object.forecast.forecastday;
      console.log(forecast);

      let tc1 = (tc2 = tc3 = tc4 = tc4 = tf1 = tf2 = tf3 = tf4 = []);

      for (var i = 0; i < 24; i++) {
        console.log(forecast[0].hour[i].temp_c);

        if (i >= 0 && i < 6) {
          tc1 = [...tc1, forecast[0].hour[i].temp_c];
          tf1 = [...tf1, forecast[0].hour[i].temp_f];
        } else if (i >= 6 && i < 12) {
          tc2 = [...tc2, forecast[0].hour[i].temp_c];
          tf2 = [...tf2, forecast[0].hour[i].temp_f];
        } else if (i >= 12 && i < 18) {
          tc3 = [...tc3, forecast[0].hour[i].temp_c];
          tf3 = [...tf3, forecast[0].hour[i].temp_f];
        } else if (i >= 18 && i < 24) {
          tc4 = [...tc4, forecast[0].hour[i].temp_c];
          tf4 = [...tf4, forecast[0].hour[i].temp_f];
        }
      }
      //celcious max-min
      let max_tc1 = Math.max(...tc1);
      let min_tc1 = Math.min(...tc1);
      let max_tc2 = Math.max(...tc2);
      let min_tc2 = Math.min(...tc2);
      let max_tc3 = Math.max(...tc3);
      let min_tc3 = Math.min(...tc3);
      let max_tc4 = Math.max(...tc4);
      let min_tc4 = Math.min(...tc4);
      //farenhite max-min
      let max_tf1 = Math.max(...tf1);
      let min_tf1 = Math.min(...tf1);
      let max_tf2 = Math.max(...tf2);
      let min_tf2 = Math.min(...tf2);
      let max_tf3 = Math.max(...tf3);
      let min_tf3 = Math.min(...tf3);
      let max_tf4 = Math.max(...tf4);
      let min_tf4 = Math.min(...tf4);

      //console
      console.log("max1 " + max_tc1);
      console.log("min1 " + min_tc1);
      console.log("max2 " + max_tc2);
      console.log("min2 " + min_tc2);

      res.render("index", {
        //render celcious
        first_max_c: max_tc1,
        first_min_c: min_tc1,
        second_max_c: max_tc2,
        second_min_c: min_tc2,
        third_max_c: max_tc3,
        third_min_c: min_tc3,
        fourth_max_C: max_tc4,
        fourth_min_c: min_tc4,
        //render farenhite
        first_max_f: max_tf1,
        first_min_f: min_tf1,
        second_max_f: max_tf2,
        second_min_f: min_tf2,
        third_max_f: max_tf3,
        third_min_f: min_tf3,
        fourth_max_f: max_tf4,
        fourth_min_f: min_tf4,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
// module.exports = app;
module.exports = router;
