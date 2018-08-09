// Dependencies 

var path = require("path");

var friends = require("../data/friends.js");


//GET route
app.get("/api/friends", function (req,res){
    res.send("FriendFinder API")
    return res.json(friends.friendOne)
});


//POST route

app.post("/api/friends", function(reg, res){


});