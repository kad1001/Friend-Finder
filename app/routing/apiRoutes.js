// LOAD DATA
var friendsData = require("../data/friends");
console.log(friendsData);

function Friend(name, photo, scores){
  this.name = name;
  this.photo = photo;
  this.scores = scores;
};
// ===============================================================================
// ROUTING
module.exports = function (app) {
  // Below code handles when users "visit" a page.

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
    // res.send("hi");

    // console.log(res.json({ "name": "Aladdin"}));
  
    console.log(req.body.scores);

    console.log(friendsData);
    // console.

    var current = req.body;
    var bing = [];

    function difference(a, b) {
      return Math.abs(a - b);
    }

    function getMin(a){
      return Math.min(...a)
    }


    // function getArr(a){
      // var all = [];
      // for (i = 0; i < a.length; i++){
      // console.log((a.slice(0,4));
      // a.forEach(element => {
        // return a.slice(0,element+4)
      // });
      // for (i=0; i < 4; i++){
      // new Array 
      // var newA = [a[i]];
      // return a.
      // console.log(element)

      // for (e = 0; e<a.length; e++){
      //   console.log(newA)
      // }
      // return all
    // }
    

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
      // console.log("all data", mapped);
      // removes current answer from answers to compare to
      // mapped.pop();

      var x = getScores(current);

      // EXTRACT SPECIFIC SCORES FROM CURRENT ANSWERS TO COMpare with each sepcific score in other answers
      var allf = [];
      for (let c = 0; c<friendsData.length; c++) {
        var fArr = getScores(friendsData[c]);
        allf.push(fArr);
      }
      console.log(allf)

      var lowest = [];

      allf.forEach(function(element){
        // console.log(element)
        for (let i = 0; i < element.length; i++){
          array = [];
          // console.log(element[i]);
        var differences = difference(x[i],element[i]);
        // console.log($(differences));
        // console.log(differences[i])
          array.push(differences);
          // return array

          // if (array < 5) {
            // console.log(array)
          // }
        }
        console.log(array)
        lowest.push(array)
        // return array
      })
      console.log("Differences between all user scores:", lowest)

      lowest.forEach(function(num){
        console.log(num)
        // console.log()
        // return num < 
      })
        // array.pop();
        // console.log(array);

        // console.log(getMin(array));
      // )
        // console.log(fArr)
      //   var x = getScores(current);
      //   // console.log(x);

      //   for(let r = 0; r < allf.length; r++){
      // for (let i = 0; i<x.length; i++){
      //   // console.log(x[i]);
      //   var eacha = allf[i];
      //   // console.lo
      //   var diffOne = difference(eacha[i],x[i]);
      //   console.log(diffOne)
      //   bing.push(diffOne);
      // }
        // console.log(bing[i]);
        // console.log(x);
      // mapped.forEach(function(score){

        // var ea = score.slice(0,1);
        // var eb = score.slice(1,2);
        // var ec = score.slice(2,3);
        // var ed = score.slice(3,4);
        // console.log()
        // returns an array of differences between scores
        // console.log(Math.abs( - b));

        // diffOne.push(difference(ea, a));
        // diffTwo.push(difference(eb, b));
        // diffThree.push(difference(ec, c));
        // diffFour.push(difference(ed, d));
        // console.log(score);

      // })
      // }
    // }
    // console.log(bing)


      return mapped
    }

    // by running this function the combined array is console logged
    mappin();
  })
};