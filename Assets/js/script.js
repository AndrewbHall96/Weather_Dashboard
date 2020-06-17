
// Example queryURL for Giphy API


var cityName = 'Columbus';
var stateCode = 'US-OH';
var apiKey = 'de4b0f913f8fa17d4d22986f83ad6fb3';

var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateCode}&appid=${apiKey}`;

$.ajax({
  url: queryURL,
  method: "GET"

  //naming the information coming in as "weatherResponse"
}).then(function (weatherResponse) {
  console.log(weatherResponse)

  for (var index = 3; index < weatherResponse.list.length; index = index+8) {

    var weatherInfo = weatherResponse.list[index]
    console.log(weatherInfo)
    console.log(weatherInfo.dt_txt)
    // Convert the temp to fahrenheit
    var tempF = (weatherInfo.main.temp - 273.15) * 1.80 + 32;
    console.log(tempF)
    console.log(weatherInfo.main.humidity)

  var foreCastCard = $("<div>");
  var foreCastH1 = $("<h1>").text(weatherInfo.dt_txt);
  var foreCastTemp = $("<h3>").text(tempF.toFixed(2));
  var foreCastHum = $("<h3>").text(weatherInfo.main.humidity);
  foreCastCard.append(foreCastH1);
  foreCastCard.append(foreCastTemp);
  foreCastCard.append(foreCastHum);
  $("#forecastRow").append(foreCastCard)
  



  }
  localStorage.setItem("weatherInfo", weatherResponse);
}).then()


