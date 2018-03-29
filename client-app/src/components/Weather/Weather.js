import ReactWeather from "react-open-weather";
//Optional include of the default css styles
import "react-open-weather/lib/css/ReactWeather.css";

class Weather extends components {
  renderWeather() {
    app.get("/", function(req, res) {
      var html =
        "<link href='https://jmtfq3yszfe3sxruh21qbikk-wpengine.netdna-ssl.com/main.css' rel='stylesheet' type='text/css'/>";
      request(requestUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
          // parse the json result
          var result = JSON.parse(body);
          var currentWeather = result.data.current_condition;
          var weeklyWeather = result.data.weather;

          html += '<div class="weather-widget">';

          html += createCurrentWeatherHTML(
            currentWeather,
            result.data.request[0].query
          );

          weeklyWeather.forEach(function(day) {
            html += createDaySummaryHTML(day);
          });

          html += "</div>";

          res.send(html);
        } else {
          console.log(error, response.statusCode, body);
        }
        res.end("");
      });
    });
  }
}

<ReactWeather
  forecast="5days"
  apikey="a1d834f08b85c9cc45b21201c028ac0a"
  type="city"
  city="Phoenix"
/>;

export default Weather;
