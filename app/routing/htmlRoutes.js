var path = require("path");

module.exports = function(app){
		// navigate to the survey.html page
	app.get("/survey", function (req, res) {
	   res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
	})

	// navigate to the home.html page
	app.use(function (req, res) {
		// if the user types in any path that does not have a get or post
		// they will be directed to the home page
	   res.sendFile(path.join(__dirname, "../../app/public/home.html"));
	})
}

 