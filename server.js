var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
// setting the env variable allows this to be deployed easily to Heroku 
var PORT = process.env.PORT || 8080; 
// Sets up the Express app to handle data parsing
// parse application/json 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 

// navigate to the survey.html page
app.get("/survey", function (req, res) {
   res.sendFile(path.join(__dirname, "./app/public/survey.html"));
})
 
app.use(function (req, res) {
	// if the user types in any path that does not have a get or post
	// they will be directed to the home page
   res.sendFile(path.join(__dirname, "./app/public/home.html"));
})
 
app.listen(PORT);