//Requiring dependencies
var express = require("express");

//Establishing Heroku's assigned port or 3000
var PORT = process.env.PORT || 3000;

//Instantiating Express Object App
var app = express();

//Establishing Express Router
var router = express.Router();

//Making public folder a static directory
app.use(express.static(__dirname + "/public"));

//Passing all requests through the Router Middleware
app.use(router);

//Listening on etsablished ports
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});


