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



    function compare(arr1, arr2) {
      if (!arr1 || !arr2) return

      let result;
      arr1.forEach((e1, i) => arr2.forEach(e2 => {

        if (e1.length > 1 && e2.length) {
          result = compare(e1, e2);
        } else if (e1 !== e2) {
          result = false
        } else {
          result = true
        }
      }))

      return result

    }



    function difference(a, b) {
      console.log(a)
      console.log(parseInt(a))

      //  console.log(Math.abs(a - b))
      return Math.abs(a - b);
    }

    function getScores(item) {
      // puts the /api/friends body contents into an array for comparison
      var scores = item.scores;
      for (i = 0; i < scores.length; i++) {
        scores[i] = parseInt(scores[i])
      }
      return scores;
    }

    function mappin() {
      // finds the scores array in the friendsdata object
      var mapped = friendsData.map(getScores);
      console.log(mapped);

      console.log(compare(mapped[0], mapped[1]));
      // console.log()


      // all scores for q1
      // var positionOne = [];
      // var positionTwo = [];
      // for (i = 0; i < mapped.length; i++) {
      // var q1score = mapped[i].slice(0,1);
      // // console.log(q1score.join())
      // var q2score = mapped[i].slice(1,2);

      // positionOne.push(q1score);
      // positionTwo.push(q2score);
      // }

      // console.log("question 1 answers", positionOne[0]);

      // console.log("question 2 answers", positionTwo);

      // var r = positionOne.reduce(getSum);
      // console.log(r);

      return mapped
    }

    // by running this function the combined array is console logged
    mappin();





    //  console.log(compare([1,2,3],[1,2,3]));


    // var result = friendsData.map(function (x) {
    //     return parseInt(x);
    // });
    // console.log(result);


    // var result = friendsData.map(function (x) {
    //   return parseInt(x);
    //   console.log(parseInt(x));
    // });
    // console.log(result);
  })
};