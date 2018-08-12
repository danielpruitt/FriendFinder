//dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express Setup

var app = express();
var PORT = process.env.PORT || 3010;

//body parsing

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start the server listening
app.listen(PORT, function() {
    console.log("This app is listening on PORT " + PORT);
});