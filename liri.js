//dependencies
var keys = require(keys.js);
var Twitter = require("twitter");
var client = newTwitter(keys.twitterKeys);
var Spotify = require("node-spotify-api");
var Request = require("request");


var userInput = process.argv[2];
var userChoice = process.argv.slice(3).join(" ");

//set up the different commands
switch (userInput) {
    case "my-tweets":
        showTweets();
        break;

    case "spotify-this-song":
        showSong(userChoice);
        break;

    case "movie-this":
        showMovie(userChoice);
        break;

    case "do-what-it-says":
        doSomething();
        break;
};

//twitter function
function showTweets(argument) {
	// body...
}

//spotify function
function showSong() {

}

//omdb function
function showMovie(argument) {
	// body...
}

//do what it says function
function doSomething(argument) {
	// body...
}