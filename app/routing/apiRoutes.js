//require the friends.js since the friends are stored in the object there.

var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function (req, res){
        res.json(friends);
    });

    app.post("/api/friends", function (req,res){
        var userInput = req.body;
        var userScores = userInput.scores;

        var bestFriendName = "";
        var bestFriendImg = "";

        var totalDifference = 1000;

        // for loop that will loop through each friend in the object
        for (var i = 0; i < friends.length; i++){
            console.log(friends[i]);
            //difference starts at 0 before comparing to a total
            var diff = 0;
            // this loop will do the math between the scores of the new user gave and the friend that is already in the object
            for(var j = 0; j < userScores.length;j++){
                //Math.abs was utilized so that the difference is the absolute value between userScores and the friends.scores
                diff += Math.abs(friends[i].scores[j] - userScores[j]);
            };

            // diff is less than total difference of each friend in the object to determine the best friend, which is then put into the modal.
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