var express = require("express");
var path = require('path');
// var router = express.Router();

var app = express();

var PORT = process.env.PORT || 3000;

// app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// The below points our server to a series of "route" files.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// LOAD DATA
// var friendsData = require("./app/data/friends");
// console.log(friendsData)



//   // ---------------------------------------------------------------------------
//   // A POST routes /api/friends. This will be used to handle incoming survey results.
//   // This route will also be used to handle the compatibility logic.
//   // app.post("/api/friends", function(req, res) {
//   //   friendsData.push(req.body);

//   //   console.log(friendsData);
//   //   // friendsData.forEach(function(f) {
//   //   //   var c = new Friend(f.name, f.photo, f.scores);
//   //   //   friends.push(c);
//   //   // });

//   //   // current score array
//   //   // var cScore = req.body.scores;

//   //   Friend.prototype.bingbong = function(q) {
//   //     this.total = q;
//   //     return this.total;
//   //   };

//   //   var winners = [];

//   //   friends.forEach(function(entry) {
//   //     console.log(entry.newArray(cScore));

//   //     var total = entry.newd[0].reduce(getSum);
//   //     console.log("the magic number:", total);
//   //     entry.bingbong(total);
//   //     winners.push(entry.total);
//   //     // console.log(entry.total)
//   //   });
//   //   console.log(winners);
//   //   console.log(friendsData)

//   //   res.render(friends)
//   // });

//   // app.get("/results", function(req, res) {
//   //   var data = {
//   //     friends: []
//   //   };

//   //   data.friends.push(friendsData);

//   //   // for (var i = 0; i < friends.length; i+=1){
//   //   //   var current = friends[i];
//   //   //   data.friends.push(current);
//   //   // }
//   //   console.log(data)
//   //   // res.render("index", data);
//   // });
// // };

// server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});