// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
var express = require("express");
var path = require('path');

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// // ===============================================================================
// // ROUTING
// // ===============================================================================
var routes = function (app) {

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    // res.render("index", {f})
  });

  // If no matching route is found default to home
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}

module.exports = routes;