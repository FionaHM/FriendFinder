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
// found urlencoded extended must be true for nested arrays
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 



// link to apiRoutes file passing the app variable.
require('./app/routing/apiRoutes.js')(app);

// link to htmlRoutes file passing the app variable.
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT);