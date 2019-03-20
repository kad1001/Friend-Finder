// // LOAD DATA
var friendsData = require("../data/friends");

// router to export at the end
var friends = [];

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
      //   Difference between this.scores and req.body scores
      var diff = Math.abs(w[i] - current[i]);
      // Globalize
      differences.push(diff);
    }
    this.newd.push(differences);
  };
}

function difference(a, b) {
  return Math.abs(a - b);
}

function getSum(total, num) {
  return total + num;
}

// ===============================================================================
// ROUTING
module.exports = function (app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    // appends each of the friends data to the friends
    res.json(friendsData);
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
    Friend.prototype.bingbong = function (q) {
      this.total = q;
      return this.total
    };


    friends.forEach(function (entry) {
      console.log(entry.newArray(cScore));


      // added differences between scores
      var total = entry.newd[0].reduce(getSum);

      console.log("the magic number:", total);

      // calculate total for each entry
      entry.bingbong(total);

    });
    console.log(friends);

  });

  app.get("/api/friends/:name", function(req, res){
    let name = req.params.name;
    
  })


}