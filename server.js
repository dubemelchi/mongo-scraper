// set our dependencies to variable so we can require them for use in server.js file - Mel
const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");

// setup up our port to use host's designation or the local ie 3000 - Mel Again 
const PORT = process.env.PORT || 3000;

// initialize our exp app
const app = express();

// var to bring in routes from the routes folder
const routes = require("./routes");

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set the public folder to static so it can be used by handlebars
app.use(express.static("public"));

// connection to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// setting our view engine to handlebars
app.set("view engine", "handlebars");

// directing requests to use the middleware
app.use(routes);

// directing app to used deployed database otherwise use the local mongoHeadline database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// direction to connect to Mongo db 
mongoose.connect(MONGODB_URI);

// app to listen on this port and the message to notify us the server is running
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
