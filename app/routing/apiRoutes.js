// Friend compatability logic 

// Get example friends
const friendsData = require("../data/friends");

// In order for the user to have the same object methods as exisiting friends --
const Friend = require('./logic')
// (random global function)
// Must be used with .reduce method
function getSum(total, num) {
  return total + num;
}

// ===============================================================================
// ROUTING
module.exports = function (app) {
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {

    res.json(friendsData);

  });

  // ---------------------------------------------------------------------------
  // A POST routes /api/friends
  app.post("/api/friends", function (req, res) {

    // Capture user input
    let current = req.body;


    let cScores = current.scores;

    // Parse the current user's scores - return an array
    let parsed = cScores.map(function (x) {
      return parseInt(x);
    })


    for (let c = 0; c < friendsData.length; c++) {
      // Parses the scores for each example friend
      friendsData[c].newd.push(friendsData[c].scores.map(function (x) {
        return parseInt(x);
      }))
    }


    friendsData.forEach(function (example) {

      // Feeds the parsed scores into an object method that returns each scores differences
      var t = example.newArray(parsed);

      // Get the sum of this
      var f = t.reduce(getSum);

      // Save in Friend object
      return example.total = f;
    })


    // Holds the added scores in an array
    var scorese = [];

    // Matches the lowest total out of the array of friend objects
    for (let g = 0; g < friendsData.length; g++) {

      var minimum = Math.min(friendsData[g].total);
      console.log(minimum);

      scorese.push(minimum);

    }

    // get the minimum out of this array
    var thismin = Math.min(...scorese);
    console.log("lowest total difference of scores:", thismin)


    // This is the array that gets sent to front end
    var resr = [];

    friendsData.forEach(function (friend) {

      // See if the friend's total is the lowest

      if (friend.total === thismin) {

        // Globalize winner winner chicken dinner friend
        resr.push({
          friendName: friend.name,
          friendImage: friend.photo
        });
      }

    })

    console.log("closest match:", resr)

    // Add new user
    friendsData.push(new Friend (current.name, current.photo, cScores));

    // Send response to frontend -- if there are more than one match then it will only display the first one
    res.json(resr[0]);

  });
}