// Example friends
const friendsData = require("../data/friends");
// Friend Object Constructor
const Friend = require("./logic");

// Must be used with .reduce method
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

    // User input
    let current = req.body;
    console.log(friendsData)

    let diff = []
    const userFriend = new Friend(current.name, current.photo, current.scores);


    let parsed = userFriend.scores.map(function(x){
      return parseInt(x);
    })
    // console.log("dd", parsed)


    var all = [];
    for (let c = 0; c < friendsData.length; c++) {
      
      // Parses the scores for each example friend
      var parsedScores = friendsData[c].scores.map(function (x) {
        return parseInt(x);
       })
      //  console.log(parsedScores);
       friendsData[c].newd.push(parsedScores);
      //  console.log (friendsData[c]);
    }

    friendsData.forEach(function(example) {
      // console.log(example.newd[0]);
      var t = example.newArray(parsed);
      // console.log("differences:", t);

      var f = t.reduce(getSum);
      // console.log("Sum of differences: ", f);

      // example.bingbong(f);
      return example.total = f;

    })

    // let all = [];
  
    // friendsData.forEach(function(frend){

    //   var w = Math.min(frend.total);
    //   console.log("lowest", w);
    //   all.push(w);
    // });

    // console.log(all)
    // console.log(this.friendsData);
    // Find lowest score

    var friendName = [];
    var friendImage = [];


    // If it's less than 10
    for (let g = 0; g < friendsData.length; g++){
      if (friendsData[g].total < 10){
        friendName.push(friendsData[g].name);
        friendImage.push(friendsData[g].photo);
      }

      // else {
      //   // No friend message :(
      //   friendName.push("Whoops, try again.");
      //   friendImage.push(":(");
      // }

    }

    var e = friendName.pop();
    var i = friendImage.pop();
    console.log(i)

		// Add new user
    friendsData.push(current);

		// // Send response
    res.json({friendName: e, friendImg: i});

    });
}