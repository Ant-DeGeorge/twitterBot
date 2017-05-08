console.log("TH3 80T 15 5TART1NG");

var Twit = require('twit');

var config = require('./config');
console.log(config);

var T = new Twit(config);
//this is the code to make the bot tweet in intervals not working
setInterval(tweetIt, 1000*20)

function tweetIt() {

    var r = Math.floor(Math.random()*100);

    var tweet = {
      status: 'write down the number' + r + 'so says my twitbot who is AL1V3'
    }

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, responce) {
  if (err) {
    console.log("Something went wrong you have failed me master!");
  } else {
    console.log("You didnt F up the code! It Worked!");
  }
}
