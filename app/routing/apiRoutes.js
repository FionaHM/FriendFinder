var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app){
	app.get("/api/friends", function (req, res) {
	  // // We then display the JSON to the caller
	  res.json(friends);
	})

	// will use this later...
	// app.post("/api/friends", newFriend, function (data) {
	//   // // We then display the JSON to the caller
	//   friends.push(newFriend);
	//   res.json(true);
	// })
}