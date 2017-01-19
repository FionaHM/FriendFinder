#Friend Finder
GitHub: https://github.com/FionaHM/FriendFinder
Heroku: https://murmuring-ravine-51678.herokuapp.com

## About this application

This application matches friends based on answers to 10 survey questions. The best match is the friend with the smallest difference between answers overall, each question being looked at individually and the score totalled over the 10 questions.

## Usage
The application is started on the commandline as follows:
######`> node server.js`

This will bring run a server instance listening on port 8080 locally or whatever port is used by the Heroku environment.

>The application is structured as follows:
>![Image of screen1.png]
(readme_images/screen1.png)


> The data in this appliation is transient, it is stored in memory in an array, and will be lost when the server is restarted. 

#  Files

## Application Entry:

### server.js 	-	this is the server side process. It is a node application, specifically express.js.  When this file is started up on the command line it starts an express.js server that listens on a predefined port for client connections. It then routes the connections based on the configuration data set in the htmlRoutes.js and apiRoutes.js files.  This file also contains middleware information, in the form of the library body-parser, that parses incoming data to the required format.

###  htmlRoutes.js 

This contains routing information for html files.

* GET Requests are routed as follows: 
The path "/survey" is routed to the file survey.html.
	
"/image/:name?"
			"../../app/data/images/" + friendImage;
The path "/image/:name?", the request paramters are parsed and matched to a file name in the images directory. The correct file is then served. 
			
"/css",../public/css/style.css"
As the style.css now lives on the server, there needs to be a path so that the client html file can find it.

* USE:
A use request is set to that any url that does not have a pre-specified route will result in the home page being served.
 "../../app/public/home.html"


### apiRoutes.js
This contains routing information for api calls. It has one GET and one POST route.

* GET:
"/api/friends" - when called this route displays all the friends data in JSON format.

* POST:
"/api/friends"  - this is used to update friends array on the server and then find a friend match, the results are send in JSON format back to the client where they can be displayed on the html page.

##   Data: 
friends.js  -	This file contains an array of JSON objects that are used as seed data.


##   Other:
node_modules                -	folder that contains relevant node modules
package.json                - 	created when command ‘npm init’ is run.  Can be modified manually to include dependencies data or automatically when ‘npm install <library> --save’ is run e.g. ‘npm install inquirer --save’
README.md                   - 	this file containing relevant operational information.


##  Integration with other libraries

The following libraries were used and those that are not native to node should be included in package.json.

###  Inquirer
var inquirer = require('inquirer');

Used to present options and to grab user input from the command line. Needs to be added as a dependency in package.json so that it will be installed into  
node_modules folder when npm install is run.

package.json should include:

#####`"dependencies": {`
#####`"inquirer": "^2.0.0"`
#####`}`


### body-parser

This library parses incoming request bodies in a middleware, available under the req.body property. Contains modules for JSON, text and URL encoded form.

### express

This is a web framework for node.js.  



#  License
FriendFinder is released under the MIT license.
