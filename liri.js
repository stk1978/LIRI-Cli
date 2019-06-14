require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");


var fs = require("fs");

// Take two arguments.
// The first will be the action (i.e. "command", "option", etc.)

var action = process.argv[2];
var value = process.argv[3];

// We will then create a switch-case statement (if-else would also work).
// The switch-case will direct which function gets run.
switch (action) {
case "total":
  total();
  break;

case "bands":
  bands();
  break;

case "spotify":
  spotify();
  break;

case "movie":
  movie();
  break;

  case "doit":
  odit();
  break;
}

function total() {




}







function movie(){

// Request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&plot=full&apikey=46375a92";

// http://www.omdbapi.com/?t= + movieName + &plot=full&apikey=46375a92


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("Release Year: " + response.data.imdbRating);
    console.log("Release Year: " + response.data.Ratings[1]);
    console.log("Release Year: " + response.data.Country);
    console.log("Release Year: " + response.data.Language);
    console.log("Release Year: " + response.data.Plot);
    console.log("Release Year: " + response.data.Actors);
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}