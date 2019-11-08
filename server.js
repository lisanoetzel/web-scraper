//Requiring dependencies
var express = require("express");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");

//Establishing Heroku's assigned port or 3000
var PORT = process.env.PORT || 3000;

//Instantiating Express Object App
var app = express();

//Establishing Express Router
var router = express.Router();

//Making public folder a static directory
app.use(express.static(__dirname + "/public"));

//Connecting expressHandlebars to Express App
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Establishing body-parser 
app.use(bodyParser.urlencoded({
    extended: false
}));

//Passing all requests through the Router Middleware
app.use(router);

//Listening on etsablished ports
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});


