var express = require("express");
var router = express.Router();
var axios = require("axios");
var app = express();

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
      var sum1 = 0;
      var sum2 = 0;
      var sum3 = 0;
      var sum4 = 0;
      var sum1_f = 0;

      var sum2_f = 0;
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
      var sum3_f = 0;
      var sum4_f = 0;
      var max1 = forecast[0].hour[0].temp_c;
      var min1 = forecast[0].hour[0].temp_c;
      var max2 = forecast[0].hour[0].temp_c;
      for (var i = 0; i < 24; i++) {
        console.log(forecast[0].hour[i].temp_c);
        //sum= sum+forecast[0].hour[i].temp_c;

        if (i >= 0 && i < 6) {
          temp_c_1 = [...temp_c_1, forecast[0].hour[i].temp_c];
          temp_f_1 = [...temp_f_1, forecast[0].hour[i].temp_f];

          // sum1 = sum1 + forecast[0].hour[i].temp_c;
          // sum1_f = sum1_f + forecast[0].hour[i].temp_f;
        } else if (i >= 6 && i < 12) {
          temp_c_2 = [...temp_c_2, forecast[0].hour[i].temp_c];
          temp_f_2 = [...temp_f_2, forecast[0].hour[i].temp_f];

          // sum2 = sum2 + forecast[0].hour[i].temp_c;
          // sum2_f = sum2_f + forecast[0].hour[i].temp_f;
        } else if (i >= 12 && i < 18) {
          temp_c_3 = [...temp_c_3, forecast[0].hour[i].temp_c];
          temp_f_3 = [...temp_f_3, forecast[0].hour[i].temp_f];
          // sum3 = sum3 + forecast[0].hour[i].temp_c;
          // sum3_f = sum3_f + forecast[0].hour[i].temp_f;
        } else if (i >= 18 && i < 24) {
          temp_c_4 = [...temp_c_4, forecast[0].hour[i].temp_c];
          temp_f_4 = [...temp_f_4, forecast[0].hour[i].temp_f];
          // sum4 = sum4 + forecast[0].hour[i].temp_c;
          // sum4_f = sum4_f + forecast[0].hour[i].temp_f;
        }
      }
      let max_temp_c_1 = Math.max(...temp_c_1);

      let min_temp_c_1 = Math.min(...temp_c_1);

      let max_temp_c_2 = Math.max(...temp_c_2);

      let min_temp_c_2 = Math.min(...temp_c_2);

      // console.log(temp_c_1);

      console.log("max" + max_temp_c_1);

      // console.log(temp_c_1);

      console.log("min" + min_temp_c_1);

      res.render("index", {
        first_max: max_temp_c_1,
        second_max: max_temp_c_2,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
// module.exports = app;
module.exports = router;
