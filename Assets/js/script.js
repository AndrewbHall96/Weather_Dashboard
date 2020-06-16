
// Example queryURL for Giphy API

  var queryURL = "api.openweathermap.org/data/2.5/forecast?q=Columbus,US-OH&appid=de4b0f913f8fa17d4d22986f83ad6fb3";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(weatherResponse) {
      console.log(weatherResponse)
  
  });
