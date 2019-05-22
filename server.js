const express = require("express");
const db = require('./models');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

const isAuthenticated = require("./config/isAuthenticated");
const auth = require("./config/auth");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});


// Connect to the Mongo DB - try Heroku first
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/sampleusers";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// LOGIN ROUTE
app.post('/api/users/login', (req, res) => {
  auth
    .logUserIn(req.body.email, req.body.password)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
});

app.post('/api/users', (req, res) => {
  db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});

app.get('/api/users/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if(data) {
      res.json(data);
    } else {
      res.status(404).send({success: false, message: 'No user found'});
    }
  }).catch(err => res.status(400).send(err));
});

app.put('/api/users/:id', (req, res) => {
  db.User
      .findOneAndUpdate({ _id: req.params.id }, {$set: req.body})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  console.log(__dirname);
});

module.exports = app;