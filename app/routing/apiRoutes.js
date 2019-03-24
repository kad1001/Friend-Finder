// Friend compatability logic 



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
    const userFriend = new Friend(current.name, current.photo, current.scores);


    let parsed = userFriend.scores.map(function(x){
      return parseInt(x);
    })

    for (let c = 0; c < friendsData.length; c++) {
      
      // Parses the scores for each example friend
      friendsData[c].newd.push(friendsData[c].scores.map(function (x) {
        return parseInt(x);
       })
       )

    }
    console.log(friendsData)

    friendsData.forEach(function(example) {
      // console.log(example.newd[0]);
      var t = example.newArray(parsed);
      // console.log("differences:", t);

      var f = t.reduce(getSum);
      // console.log("Sum of differences: ", f);

      // example.bingbong(f);
      return example.total = f;

    })


    var scorese = [];

    // If the total differences of scores is less than 10
    for (let g = 0; g < friendsData.length; g++){
      // if (friendsData[g].total < 10){
      //   friendName.push(friendsData[g].name);
      //   friendImage.push(friendsData[g].photo);
      // }

      var minimum = Math.min(friendsData[g].total);
      console.log(minimum);

      scorese.push(minimum);
      // if (minimum) {
      // scorea.push(({score: minimum, friendName: friendsData[g].name, friendImage: friendsData[g].photo}));
      // }
      // scorea.push({totalscore: minimum, friend: friendsData[g]})
    }
// console.log(scorea)
console.log(scorese);

    var thismin = Math.min(...scorese);
    console.log(thismin)
    // console.log(friendsData)

    var resr = [];
    // console
    // const result = friendsData.total.filter(word => word.length > 6);
    // console.log(result)

    friendsData.forEach(function(friend){
      console.log(friend);
      console.log(friend.total)
      if (friend.total === thismin) {

        resr.push({friendName: friend.name, friendImage: friend.photo});
      }
    })
    console.log(resr)
    // var e = friendName.pop();
    // var i = friendImage.pop();
    // console.log(i)

		// Add new user
    // friendsData.push(current);

		// Send response to frontend in an object
    res.json(resr[0]);

    });
}