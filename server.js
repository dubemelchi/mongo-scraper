// require dependencies
const express = require('express');

// setup port to host's or 3000;
const PORT = process.env.PORT || 3000;

// initialize express app
const app = express();

// setup express router
const router = express.Router();

// designated public folder
app.use(express.static(__dirname + "/public"));

// router for middleware
app.use(router);

// listen 
app.listen(PORT, function() {
  console.log("listening on port: " + PORT);
});

