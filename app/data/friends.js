console.log("working");

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./apiRoutes")(app);
// require("./routing/htmlRoutes")(app);



var friendsInfo = [
    {
    name: "Richard Nixon",
    photo: "https://www.theatlantic.com/politics/archive/2013/01/the-operatic-life-of-richard-nixon/266963/",
    scores: [5,5,5,5,5,5,5,5,5,5,]

},

{
name: "John Daly",
    photo: "https://www.google.com/search?q=john+daly&source=lnms&tbm=isch&sa=X&ved=0ahUKEwitqZeB5d3iAhWQmeAKHfUUB04Q_AUIESgC&biw=1540&bih=718#imgrc=ZGjeRrUa1wvZPM:",
    scores: [5,3,4,5,5,1,5,5,1,5,]
},
{
name: "Captain Planet",
    photo: "https://www.google.com/search?q=captain+planet&source=lnms&tbm=isch&sa=X&ved=0ahUKEwii4Zevgt7iAhUIEawKHYnLAlQQ_AUIESgC&biw=1263&bih=718#imgrc=QZxN8YuyqlcsiM:",
    scores: [1,1,1,1,1,1,1,1,1,1,]

},
{
    name: "Bob The Builder",
    photo: "https://www.google.com/search?q=bob+the+builder&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjuv9iYg97iAhVBmeAKHSH0BIYQ_AUIECgB&biw=1263&bih=718#imgrc=mrKBQxMKoO6pFM:",
    scores: [3,1,5,4,2,3,1,2,4,5,]
},

{
    name: "Alex Trebek",
    photo: "https://www.google.com/search?q=alex+trebek&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj0_Mn9gt7iAhVtleAKHYk9B78Q_AUIESgC&biw=1263&bih=718&dpr=1.25#imgrc=aq4VhwCaVesrWM:",
    scores: [3,3,3,3,3,3,3,3,3,3,]
},
{
    name: "Drew Carey",
    photo: "https://www.google.com/search?q=drew+carey&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjA3_Pug97iAhXvguAKHWHVDTQQ_AUIESgC&biw=1263&bih=718#imgrc=-2ltDhEcFX2TBM:",
    scores: [2,2,2,2,2,2,2,2,2,2,]
},

{
    name: "Yokozuna",
    photo: "https://www.google.com/search?q=yokozuna&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi-hPXThd7iAhWjc98KHWvoAhsQ_AUIECgB&biw=1263&bih=718#imgrc=e-sMA4J5rwRblM:",
    scores: [4,4,4,4,4,4,4,4,4,4,]
}


];
console.log(friendsInfo);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  app.get("/api/friends/:friends", function(req, res) {
    var chosen = req.params.friendsInfo;
  
    console.log(chosen);
  
    for (var i = 0; i < friendsInfo.length; i++) {
      if (chosen === friendsInfo[i].routeName) {
        return res.json(friendsInfo[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriends = req.body;

    console.log(newFriends);

  characters.push(newFriends);

  res.json(newFriends);
});

module.exports = friendsInfo;