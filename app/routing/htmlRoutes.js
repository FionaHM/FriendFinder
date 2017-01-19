var path = require("path");

module.exports = function(app){
	// navigate to the survey.html page
	app.get("/survey", function (req, res) {
	   res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
	})
	// this is required for the stored image data to be located on the server for the appropriate friend
	app.get("/image/:name?", function (req, res) {
		var friendImage = req.params.name;
		if (friendImage){
			var imagePath = "../../app/data/images/" + friendImage;
			res.sendFile(path.join(__dirname, imagePath));
		} else {
			res.json(false);
		}
	})
	// this is required in order for the style.css to be located on the server
	app.get("/css", function (req, res) {
	   res.sendFile(path.join(__dirname, "../public/css/style.css"));
	})
	// navigate to the home.html page
	app.use(function (req, res) {
		// if the user types in any path that does not have a get or post
		// they will be directed to the home page
	   res.sendFile(path.join(__dirname, "../../app/public/home.html"));
	})
}

 