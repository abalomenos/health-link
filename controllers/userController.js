const db = require("../models");
const JWT = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_SECRET } = require('../config/index');

const signToken = (user => JWT.sign({
  iss: 'ApiAuth',
  sub: user.id,
  iat: new Date().getTime(),
  exp: new Date().setDate(new Date().getDate() + 1),
}, JWT_SECRET));

// Defining methods for the UserController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  signup: async (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    if (password === confirmPassword) {
      const foundUser = await User.findOne({ email }).catch(err => console.log(err));
      if (foundUser) {
        return res.status(403).json({ error: 'Email is already in use' });
      }
      const newUser = new User({ email, password });
      await newUser.save();

      const token = signToken(newUser);

      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Please enter password again.' });
    }
  },
  signin: async (req, res, next) => {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email }).catch(() => {
      res.status(404).json({ error: 'No user found with this email address' });
    });
    if (foundUser.isValidPassword(password)) {
      const token = signToken(req.user);
      res.status(200).json({ token });
    }
  },

  secret: async (req, res, next) => {
    res.json({ secret: 'resource' });
  }
};
