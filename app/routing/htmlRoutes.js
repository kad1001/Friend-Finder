// // DEPENDENCIES
// // We need to include the path package to get the correct file path for our html
var express = require("express");
var path = require('path');

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // ===============================================================================
// // ROUTING
// // ===============================================================================
module.exports = function (app) {

app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
    // res.render("index", {f})
  });

//   // If no matching route is found default to home
  // app.get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/home.html"));
  // });
}