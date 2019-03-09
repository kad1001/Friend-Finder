var express = require("express");
var path = require("path");

var app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
// DATA
// var friends = [
//     {
//         routeName: "therock",
//         photo: "http://asportsplayers.com/wp-content/uploads/2018/04/Dwayne-Johnson-Images.jpg",
//         scores: [2, 3, 5, 1]
//     }
// ]