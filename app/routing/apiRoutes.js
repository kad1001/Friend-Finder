// LOAD DATA
var friendsData = require("../data/friends");
var showTopMatches = [];

var display = [];
var friends = [];
function difference(a, b) {
  return Math.abs(a - b);
}

function getSum(total, num) {
  return total + num;
}

function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
  this.newd = [];
  this.total = 0;

  this.newArray = function (current) {
    var differences = [];
    var w = this.scores;

    for (let i = 0; i < this.scores.length; i++) {
      var diff = difference(w[i], current[i]);
      differences.push(diff);
    }
    this.newd.push(differences);
  };
};

// ===============================================================================
// ROUTING
module.exports = function (app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);

    // console.log(res);
  });




  // ---------------------------------------------------------------------------
  // A POST routes /api/friends. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function (req, res) {

    friendsData.push(req.body);

    console.log(friendsData);
    friendsData.forEach(function (f) {
      var c = new Friend(f.name, f.photo, f.scores);
      friends.push(c);
    });

    // current score array
    var cScore = req.body.scores;


      Friend.prototype.bingbong = function(q){
        this.total = q;
        return this.total
    };

  
    var winners = [];

    friends.forEach(function (entry) {
      console.log(entry.newArray(cScore));


      var total = entry.newd[0].reduce(getSum);
      console.log("the magic number:", total)
      entry.bingbong(total);
      winners.push(entry.total)
      // console.log(entry.total)
    });
    console.log(winners);
    winners.sort();
    // winners.pop();

    console.log(winners)

    showTopMatches.push(winners);


  });

  app.get("/result", function(req, res){
    res.json(friends);

  })


// app.post("/result", function(req, res){
//   display.push(req.body);
//   console.log(display)
// })
};