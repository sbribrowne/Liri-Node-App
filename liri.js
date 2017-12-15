//dependencies
var keys = require(keys.js);
var Twitter = require("twitter");
var client = newTwitter(keys.twitterKeys);
var Spotify = require("node-spotify-api");
var Request = require("request");


var userInput = process.argv[2];

//set up the different commands
switch (userInput) {
    case "my-tweets":
        showTweets();
        break;

    case "spotify-this-song":
        showSong(userInput);
        break;

    case "movie-this":
        showMovie(userInput);
        break;

    case "do-what-it-says":
        doSomething();
        break;
};

//twitter function
function showTweets(argument) {

	    client.get('statuses/user_timeline', params, function (error, tweets, response) {
	    	if(error) throw error;

        	for (var i = 0; i<tweets.length; i++) {

                console.log(tweets[i].text + " Created: " + tweets[i].created_at);
        	} 

        };

};

//spotify function
function showSong() {

	var spotify = new Spotify({
	id: <your spotify client id>,
	secret: <your spotify client secret>
	});
 
spotify
  .search({ type: 'track', query: userInput })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
}

//omdb function
function showMovie(argument) {
	request('http://www.google.com', function (error, response, body) {
  		console.log('error:', error); // Print the error if one occurred
  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  		console.log('body:', body); // Print the HTML for the Google homepage.
	});
}

//do what it says function
function doSomething(argument) {
	//capture text in random.txt file
	//insert that text into the showSong() function
}