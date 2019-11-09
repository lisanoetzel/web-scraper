//Requiring dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");

//Establishing Heroku's assigned port or 3000
var PORT = process.env.PORT || 3000;

//Instantiating Express Object App
var app = express();

//Establishing Express Router
var router = express.Router();

//Requiring routes file to pass the router object
require("./config/routes")(router);

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

//Deploying to remote database or local database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper";

//Connecting mongoose to DB
mongoose.connect(db, function(error){
    //Log connection errors
    if (error) {
        console.log(error);
    }
    else {
        console.log("Mongoose connection works");
    }
    });

//Listening on established ports
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});


