
// Example queryURL for Giphy API

var cityName = '';
//var stateCode = 'US-OH';
var apiKey = 'de4b0f913f8fa17d4d22986f83ad6fb3';

//redined URL on line 23. It needs to be after cityName change.
//var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

var userInputCity = []
//Need to define new variable

$("#searchBtn").on("click", function (e) {
  e.preventDefault();
  $("#forecastRow").empty();
  var searchText = $("#searchBar").val();
  var listItem = $("<li>") //.text(searchText);
  userInputCity.push(listItem);
  console.log(userInputCity);
  $("#userInputCity").prepend(`<li>${searchText}</li>`);
  cityName = searchText;

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;

  //city name  must appear in the h2
    // e.preventDefault();
    // var searchText = $("#searchbar").val();
    // var presentDayCity = $("<li>") //.text(searchText);
    // userInputCity.push(listItem);
    // console.log(userInputCity);
    // $("#userInputCity").append(`<li>${searchText}</li>`);

  var queryURL2 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    $.ajax({
      url: queryURL2,
      method: "GET"
  
    }).then(function (currentWeather) {
      console.log("currentWeather", currentWeather);

      var tempF = (currentWeather.main.temp - 273.15) * 1.80 + 32;
      var foreCastCard = $("<div>");
      var date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toLocaleDateString();
      var foreCastH1 = $("<h2>").text(date);
      var foreCastTemp = $("<h2>").text(tempF.toFixed(2));
      var foreCastHum = $("<h2>").text(currentWeather.main.humidity);
      var currentWind = $("<h2>").text(currentWeather.wind.speed);
      foreCastCard.append(foreCastH1);
      foreCastCard.append(foreCastTemp);
      foreCastCard.append(foreCastHum);
      foreCastCard.append(currentWind)
      $("#presentDay").append(foreCastCard)
    })

  $.ajax({
    url: queryURL,
    method: "GET"

    //naming the information coming in as "weatherResponse"
  }).then(function (weatherResponse) {
    // console.log(weatherResponse)

    for (var index = 3; index < weatherResponse.list.length; index = index + 8) {

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
  })
})


