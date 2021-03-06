var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends", function (req, res) {
	  //display the results in JSON format
	  res.json(friends);
	})

	// post data - update friends array and find match
	app.post("/api/friends", function (req, res) {

	  	// display the results in JSON format
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
			// add to scores array
			// do comparison on scores to find the lowest
			scoreArr.push(parseInt(score));
			if (i > 0) {
				if (scoreArr[minScoreIndex] > scoreArr[i]){
					minScoreIndex = i;
				}
			}

		}
		// get the friend at minScoreIndex from friends array 
		// send as response to be displayed on client
		res.json(friends[minScoreIndex]);
		// lastly push new friend to the storage array
		friends.push(newFriend);
	})
}