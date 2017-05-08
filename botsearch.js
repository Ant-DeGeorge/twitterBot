console.log("TH3 80T 15 5TART1NG");

var Twit = require('twit');

var config = require('./config');
console.log(config);

var T = new Twit(config);

//This section is the search query paramiters
//https://dev.twitter.com/ to find more param examples
var params = {
 q: 'virtual reality',
  count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, responce) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++)
  console.log(tweets[i].text);
};
