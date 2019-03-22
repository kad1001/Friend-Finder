var express = require("express");
var app = express();

var path = require('path');

// Set up Express app, no middleware
var PORT = process.env.PORT || 3000;

// pulls from "public" directory
app.use(express.static(process.cwd() + '/public'));

// express engrine vrrom vroom
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routing
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});