var input = process.argv;
var fs = require('fs');
var instructions = input[2];
var num = input[3];
var num1 = input[4];

var fs = require('fs');



//spotify
	var artist = ""
	var songname = ""
	var album = ""
	var link = ""
//Movie
	var title = ""
	var year = 0
	var imdb = 0
	var country = ""
	var language = ""
	var plot = ""
	var actors = ""
	var rottenRate = ""
	var rottenUrl = ""
//Node instructions
function myTweets() {
	var twitKeys = require('./keys.js');
	var settings = {
		screen_name: 'DevmaniKaiten',
		trim_user: true,
		count: 20
	};
	var twit = require('twitter');
	var user = new Twitter({
		consumer_key: 'JXZ5rfR82dRJfVlKpcZDPCcxT',
  consumer_secret: '	RDxn6E9QCEt4RNhkC6mL4QvhkVxXr22kwK4Uyp7B1Ar4u1ZUR1',
  access_token_key: '	65713670-NwURojkQjbeJr4uFMuo1UHTGur4tBL3MjnGvlNrCi',
  access_token_secret: '	mb8R4Wb7wgL2FP71pSrk5mSa2PsnXTtTaaJCxGXmz7IbI',
});
	    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (i = 0; i < 20; i++) {
                var returnItems = ('Number: ' + (i + 1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
                console.log(returnItems);
                fs.appendFile('files/log.txt', returnItems, 'utf-8', function(error) {
                    if (error) {
                        throw error
                    };
                })
            }
        };
    });
}



// function spotify () {
// 	var spotifyWa = require('spotify-web-api-node');
// 	var spotifyApi = new spotifyWa();

// }