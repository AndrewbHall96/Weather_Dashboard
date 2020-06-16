
// Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(giffy) {
  console.log(giffy.data[1].images.fixed_height.url);
  var img = $("<img/>");
  img.attr("src", giffy.data[1].images.fixed_height.url);
  $( "body" ).append(img);


  //js reference below
  // var img = document.createElement('img');
  // img.src = giffy.data[1].images.fixed_height.url;
  // document.getElementsByTagName('body').appendChild(img);
});
