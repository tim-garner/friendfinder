console.log("working");

var path= require("path");

var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("../api/friends", function(req, res) {
		res.json(friends);
    });
}

//need for loop to find data
for (var i=0; friends.length;i++) {
	 console.log(friends[i].name);
}

