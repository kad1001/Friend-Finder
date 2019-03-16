var express = require("express");
// body parser for handling data parsing
var bodyParser = require('body-parser');
var path = require('path');
// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing using bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// The below points our server to a series of "route" files.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});