var path = require("path");

module.exports = function(app){
		// navigate to the survey.html page
	app.get("/survey", function (req, res) {
	   res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
	})

	app.get("/image/:name?", function (req, res) {
		var friendImage = req.params.name;
		if (friendImage){
			var imagePath = "../../app/data/images/" + friendImage;
			res.sendFile(path.join(__dirname, imagePath));
		} else {
			res.json(false);
		}
	})

	app.get("/css", function (req, res) {
	   res.sendFile(path.join(__dirname, "../public/css/style.css"));
	})

// app.get("/api/:characters?", function(req, res) {
//   var chosen = req.params.characters;

//   if (chosen) {
//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         res.json(characters[i]);
//         return;
//       }
//     }

//     res.json(false);
//   }
//   else {
//     res.json(characters);
//   }
// });
	// navigate to the home.html page
	app.use(function (req, res) {
		// if the user types in any path that does not have a get or post
		// they will be directed to the home page
	   res.sendFile(path.join(__dirname, "../../app/public/home.html"));
	})
}

 