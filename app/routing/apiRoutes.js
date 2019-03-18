// // LOAD DATA
var friendsData = require("../data/friends");
var friends = [];
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
      Friend.prototype.bingbong = function(q){
        this.total = q;
        return this.total
    };

  
    var winners = [];

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

  app.get("/result", function(req, res){
    res.json(friends);
  })
    // Lists all friends entered
    app.get("/", function (req, res) {
        // Appends each Friend from friends Data to Handlebars template
        res.render("index", { friend: friendsData})
      });
    
      // app.get("/survey", function(req, res){
      //   //   Recieves incoming user data from /survey
      //   //   friendsData.push(req.body);
      //     console.log(req.body);
      //     console.log(req.body.name);
      // });

    
      // app.post("/", function(req, res){
      //   console.log(req.body);
      //   friendsData.push(req.body);
      //   // res.redirect("/")
      // });
    }

      

        // friendsData.forEach(function(f) {
        //   var c = new Friend(f.name, f.photo, f.scores);
        //   friends.push(c);
        // })
    
        // // current score array
        // var cScore = req.body.scores;
    
        // Friend.prototype.bingbong = function(q) {
        //   this.total = q;
        //   return this.total;
        // };
    
        // var winners = [];
    
        // friends.forEach(function(entry) {
        //   console.log(entry.newArray(cScore));
        //   var total = entry.newd[0].reduce(getSum);
        //   console.log("the magic number:", total);
        //   entry.bingbong(total);
        //   winners.push(entry.total);
        //   // console.log(entry.total)
        // });
        // console.log(winners);
        // console.log(friendsData)
    
        // res.render("index", {friends: friendsData});
    //   });
    
    // server listener
    // app.listen(PORT, function() {
    //   console.log("App listening on PORT: " + PORT);
    // });
// var friends = [];
// function difference(a, b) {
//   return Math.abs(a - b);
// }

// function getSum(total, num) {
//   return total + num;
// }

// function Friend(name, photo, scores) {
//   this.name = name;
//   this.photo = photo;
//   this.scores = scores;
//   this.newd = [];
//   this.total = 0;

//   this.newArray = function(current) {
//     var differences = [];
//     var w = this.scores;

//     for (let i = 0; i < this.scores.length; i++) {
//       var diff = difference(w[i], current[i]);
//       differences.push(diff);
//     }
//     this.newd.push(differences);
//   };
// }

// // ===============================================================================
// // ROUTING
// module.exports = function(app) {

//   // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//   app.get("/api/friends", function(req, res) {
//     res.render("index", friendsData);
//   });
//   app.get("/results", function(req, res) {
//     res.render("index", friendsData);
//   });

//   // ---------------------------------------------------------------------------
//   // A POST routes /api/friends. This will be used to handle incoming survey results.
//   // This route will also be used to handle the compatibility logic.
//   // app.post("/api/friends", function(req, res) {
//   //   friendsData.push(req.body);

//   //   console.log(friendsData);
//   //   // friendsData.forEach(function(f) {
//   //   //   var c = new Friend(f.name, f.photo, f.scores);
//   //   //   friends.push(c);
//   //   // });

//   //   // current score array
//   //   // var cScore = req.body.scores;

//   //   Friend.prototype.bingbong = function(q) {
//   //     this.total = q;
//   //     return this.total;
//   //   };

//   //   var winners = [];

//   //   friends.forEach(function(entry) {
//   //     console.log(entry.newArray(cScore));

//   //     var total = entry.newd[0].reduce(getSum);
//   //     console.log("the magic number:", total);
//   //     entry.bingbong(total);
//   //     winners.push(entry.total);
//   //     // console.log(entry.total)
//   //   });
//   //   console.log(winners);
//   //   console.log(friendsData)

//   //   res.render(friends)
//   // });

//   // app.get("/results", function(req, res) {
//   //   var data = {
//   //     friends: []
//   //   };

//   //   data.friends.push(friendsData);

//   //   // for (var i = 0; i < friends.length; i+=1){
//   //   //   var current = friends[i];
//   //   //   data.friends.push(current);
//   //   // }
//   //   console.log(data)
//   //   // res.render("index", data);
//   // });
// };
