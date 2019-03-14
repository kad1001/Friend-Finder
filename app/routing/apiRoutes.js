// LOAD DATA
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING
module.exports = function (app) {
  // Below code handles when users "visit" a page.

  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });


  // ---------------------------------------------------------------------------
  // A POST routes /api/friends. This will be used to handle incoming survey results. 
  // This route will also be used to handle the compatibility logic.
  app.post("/api/friends", function (req, res) {
    friendsData.push(req.body);
    // console.log(req.body.scores);
    var current = req.body;

    function difference(a, b) {
      return Math.abs(a - b);
    }

    function getMin(a){
      return Math.min(...a)
    }

    function getScores(item) {
      // puts the /api/friends body contents into an array for comparison
      var scores = item.scores;
      for (i = 0; i < scores.length; i++) {
        scores[i] = parseInt(scores[i])
      }
      return scores;
    }

    // main function
    function mappin() {
      // finds the scores array in the friendsdata object
      var mapped = friendsData.map(getScores);
      console.log("all data", mapped);
      // removes current answer from answers to compare to
      mapped.pop();

      var x = getScores(current);

      // EXTRACT SPECIFIC SCORES FROM CURRENT ANSWERS TO COMpare with each sepcific score in other answers
      var a = x.slice(0,1);
      // console.log(a);
      var b = x.slice(1,2);
      // console.log(b);
      var c = x.slice(2,3);
      var d = x.slice(3,4);

      var diffOne = [];
      var diffTwo = [];
      var diffThree = [];
      var diffFour = [];

      mapped.forEach(function(score){
        var ea = score.slice(0,1);
        var eb = score.slice(1,2);
        var ec = score.slice(2,3);
        var ed = score.slice(3,4);
        // console.log("diff between each first score", difference(ea, a));
        diffOne.push(difference(ea, a));
        diffTwo.push(difference(eb, b));
        diffThree.push(difference(ec, c));
        diffFour.push(difference(ed, d));

      })

      console.log("differences in scores for question 1", diffOne);
      console.log("lowest difference in scores q1:", getMin(diffOne));
      console.log("differences in scores for question 2", diffTwo);
      console.log("lowest difference in scores q2:", Math.min(...diffTwo))
      console.log("lowest difference in scores q3:", Math.min(...diffThree))
      console.log("lowest difference in scores q4:", Math.min(...diffFour))

      // var summed = diffOne + diffTwo + diffThree + diffFour;
      // console.log("total differences", summed)

      return mapped
    }

    // by running this function the combined array is console logged
    mappin();

    console.log(res.body)

  })
};