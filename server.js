var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public'));

// express engrine vrrom vroom
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.text());
// pulls from "public" directory

// The below points our server to a series of "route" files.

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});