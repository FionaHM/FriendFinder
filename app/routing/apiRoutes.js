var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends", function (req, res) {
	  // // We then display the JSON to the caller
	  res.json(friends);
	})

	// will use this later...
	app.post("/api/friends", function (req, res) {

	  // // We then display the JSON to the caller
		var newFriend = req.body;
		var newFriendScore = 0;
		var scoreArr = [];

		for (var i = 0; i < newFriend.scores.length; i++){
			// for the first friend get the score
			// make sure the scores  are numbers not strings
			newFriend.scores[i] =  parseInt(newFriend.scores[i]);
		}

		// compare scores and find a friend
		var minScoreIndex = 0;
		for (var i = 0; i < friends.length; i++){
			var score = 0;
			for (var j = 0; j < friends[i].scores.length; j++){
				// for the first friend get the score
				score += Math.abs((parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j])));
			}
			scoreArr.push(parseInt(score));

			if (i > 1) {
				if (scoreArr[i] < scoreArr[i-1]){
					minScoreIndex = i;
				}
			}

		}
		console.log("scoreArr", scoreArr);
		// var minScore = Math.min(scoreArr);
		// console.log("minScore", minScore);
		// var indexOfFriend = scoreArr.indexOf(minScore);
		// get min score from array 
		console.log(minScoreIndex);
		res.json(friends[minScoreIndex]);
		// console.log("index",indexOfFriend);
		// lastly push new friend to the array
		friends.push(newFriend);

	})

}