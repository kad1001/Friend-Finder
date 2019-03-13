// LOAD DATA
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
module.exports = function (app) {
  // Below code handles when users "visit" a page.

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // ---------------------------------------------------------------------------
  // A POST routes /api/friends. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
    // var scores = friendsData.forEach()

    var result = friendsData.map(function (x) {
      return parseInt(x);
    });
  //   return parseInt(friendsData[i]);
  // }
  console.log(result);
  });
};