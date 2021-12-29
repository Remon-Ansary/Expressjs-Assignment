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
      // console.log(response.data);
      var jsonObject = JSON.stringify(response.data);
      // console.log(jsonObject);
      var object = JSON.parse(jsonObject);
      // console.log(object);
      var location = object.location;
      console.log(location);
      var forecast = object.forecast.forecastday;
      console.log(forecast);

      let temp_c_1 =
        (temp_c_2 =
        temp_c_3 =
        temp_c_4 =
        temp_c_4 =
        temp_f_1 =
        temp_f_2 =
        temp_f_3 =
        temp_f_4 =
          []);

      for (var i = 0; i < 24; i++) {
        console.log(forecast[0].hour[i].temp_c);
        //sum= sum+forecast[0].hour[i].temp_c;

        if (i >= 0 && i < 6) {
          temp_c_1 = [...temp_c_1, forecast[0].hour[i].temp_c];
          temp_f_1 = [...temp_f_1, forecast[0].hour[i].temp_f];
        } else if (i >= 6 && i < 12) {
          temp_c_2 = [...temp_c_2, forecast[0].hour[i].temp_c];
          temp_f_2 = [...temp_f_2, forecast[0].hour[i].temp_f];
        } else if (i >= 12 && i < 18) {
          temp_c_3 = [...temp_c_3, forecast[0].hour[i].temp_c];
          temp_f_3 = [...temp_f_3, forecast[0].hour[i].temp_f];
        } else if (i >= 18 && i < 24) {
          temp_c_4 = [...temp_c_4, forecast[0].hour[i].temp_c];
          temp_f_4 = [...temp_f_4, forecast[0].hour[i].temp_f];
        }
      }
      let max_temp_c_1 = Math.max(...temp_c_1);

      let min_temp_c_1 = Math.min(...temp_c_1);

      let max_temp_c_2 = Math.max(...temp_c_2);

      let min_temp_c_2 = Math.min(...temp_c_2);
      let max_temp_c_3 = Math.max(...temp_c_3);
      let min_temp_c_3 = Math.min(...temp_c_3);
      let max_temp_c_4 = Math.max(...temp_c_4);
      let min_temp_c_4 = Math.min(...temp_c_4);

      console.log("max1 " + max_temp_c_1);
      console.log("min1 " + min_temp_c_1);
      console.log("max2 " + max_temp_c_2);
      console.log("min2 " + min_temp_c_2);

      res.render("index", {
        first_max: max_temp_c_1,
        first_min: min_temp_c_1,
        second_max: max_temp_c_2,
        second_min: min_temp_c_2,
        third_max: max_temp_c_3,
        third_min: min_temp_c_3,
        fourth_max: max_temp_c_4,
        fourth_min: min_temp_c_4,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
// module.exports = app;
module.exports = router;
