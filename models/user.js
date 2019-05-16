const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true},
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  isMale: { type: Boolean, default: false, required: true },
  activity: { type: String, required: true },
  BMI: { type: Number, required: true },
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
  intake_goal: Number, 
  intake_progress: [
    {
    calories: { type: Number },
    protein: { type: Number },
    fat: { type: Number },
    carbs: { type: Number },
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
