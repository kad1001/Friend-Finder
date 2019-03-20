var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The below points our server to a series of "route" files.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// server listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});