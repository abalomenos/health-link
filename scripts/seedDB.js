const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sampleusers"
);

const userSeed = [
  {
    name: "Jane Doe",
    age: 28,
    weight: 120,
    height: "5'3",
    water_goal: 60,
    exercise_goal: 3,
    calories_goal: 2200,
    sleep_goal: 8
  },
  {
    name: "Bob Ross",
    age: 60,
    weight: 160,
    height: "5'11",
    water_goal: 80,
    exercise_goal: 4,
    calories_goal: 2500,
    sleep_goal: 7
  }
 ];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
