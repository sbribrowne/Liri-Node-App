//dependencies
var keys = require("./keys.js");
var Twitter = require("twitter");
//var client = newTwitter(keys.twitterKeys);
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
function showTweets() {

    var client = new Twitter({
        consumer_key: 'wb3XHtu3eRM1MDf6fqH7lLyRz',
        consumer_secret: 'aEGdlGMUBHpbYShctAQDcRxVDWBuqmCKa6LSkDiHiubluPcIFt',
        access_token_key: '912253671592939520-SNzMX9xqhc3TfFYHZF5vtXwaYrgdIpk',
        access_token_secret: 'rdfzuvESuhCYZf0RlSdW0TfVsptf4ZTXx5pD99iwKWx8E'
    });

    var params = {
        screen_name: 'codebrittany',
        count: 20,
    };

	    client.get('statuses/user_timeline', params, function (error, tweets, response) {
	    	if(error) throw error;

        	for (var i = 0; i<tweets.length; i++) {

                console.log(tweets[i].text + " Created: " + tweets[i].created_at);
        	} 

      });

};

//spotify function
function showSong() {

	var spotify = new Spotify({
	id: "2b2c3c6cb1b94c5a9aecb388f1e238b4",
	secret: "90bfab24ba324f77af08b3f7fdd31661"
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
	 fs.readFile("random.txt", "UTF8", function(error,data) {
    var dataArr = data.split(",");
        var command = dataArr[0];
        var choice = dataArr[1];

    if (command === "spotify-this-song") {
            userChoice = choice;
            spotifySong(userChoice);
        }
  });
}