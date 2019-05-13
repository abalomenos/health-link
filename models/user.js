const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true},
  weight: { type: Number, required: true },
  height: { type: Number, required: false },
  water_goal: Number, 
  water_progress: [
    {
    metric: { type: Number },
    date: {type: Date}
    }
  ],
  exercise_goal: Number, 
  exercise_progress: [
    {
    metric: { type: Number },
    date: {type: Date}
    }
  ],
  calories_goal: Number, 
  calories_progress: [
    {
    metric: { type: Number },
    date: {type: Date}
    }
  ],
  sleep_goal: Number, 
  sleep_progress: [
    {
    metric: { type: Number },
    date: {type: Date}
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
