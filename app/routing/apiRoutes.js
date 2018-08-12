//Dependencies

var friends = require("../data/friends.js");
// Routes 

module.exports = function(app){
    app.get("/api/friends", function (req, res){
        res.json(friends);
    });

    app.post("/api/friends", function (req,res){
        // friends.push(req.body);
        // res.json(true);

        var userInput = req.body;
        var userScores = userInput.scores;

        var bestFriendName = "";
        var bestFriendImg = "";

        var totalDifference = 1000;

        for (var i =0; i < friends.length; i++){
            console.log(friends[i]);
            //difference starts at 0 before comparing to a total
            var diff = 0;
            for(var j = 0; j<userScores.length;j++){
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            };

            if (diff < totalDifference) { 
                totalDifference = diff;
                bestFriendName = friends[i].name;
                bestFriendImg = friends[i].photo;
            };
        };

        friends.push(userInput);
        res.json({name:bestFriendName, photo:bestFriendImg});

    });
};