// Example friends
var friendsData = require("../data/friends");
// Friend Object Constructor
// const Friend = require("./logic");

// router to export at the end
var friends = [];
// ?? Do I need this ?



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
    // // add all friends to friends data
    // friendsData.push(req.body);

    // // console.log(friendsData);


    // // objectify 
    // friendsData.forEach(function (f) {

    //   var c = new Friend(f.name, f.photo, f.scores);
    //   friends.push(c);
    // });


    // // current score array
    // var cScore = req.body.scores;

    // Friend.prototype.bingbong = function (q) {

    //   this.total = q;
    //   return this.total
    // };


    // // object method finds scores for the friend
    // friends.forEach(function (entry) {
    //   console.log(entry.newArray(cScore));

    //   // added differences between scores
    //   var total = entry.newd[0].reduce(getSum);

    //   console.log("the magic number:", total);

    //   // calculate total for each entry
    //   entry.bingbong(total);
    // Capture the user input object
		var userInput = req.body;
		// console.log('userInput = ' + JSON.stringify(userInput));

    var userResponses = userInput.scores
		// console.log('userResponses = ' + userResponses);

		// Compute best friend match
		var matchName = '';
		var matchImage = '';

		// Examine all existing friends in the list
		for (var i = 0; i < friendsData.length; i++) {


			// Compute differenes for each question
		  var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
      }
      console.log(diff);
			// console.log('diff = ' + diff);


				console.log('Closest match found = ' + diff);
				console.log('Friend name = ' + friendsData[i].name);
				console.log('Friend image = ' + friendsData[i].photo);

				totalDifference = diff;
				friendName = friendsData[i].name;
				friendImage = friendsData[i].photo;
			// }
		}

		// Add new user
    friendsData.push(userInput);
  
    

		// Send appropriate response
    res.json({status: 'OK', friendName: friendName, friendImg: friendImage});

    });
}