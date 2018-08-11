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


// app.get("/", function (req, res){
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
// });

// app.get("/survey", function (req, res){
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });

// app.get("/api/friends", function (req, res){
//     return res.json(path.join(__dirname, "app/routing/apiRoutes.js"));
// });


//Start the server listening
app.listen(PORT, function() {
    console.log("This app is listening on PORT " + PORT);
});