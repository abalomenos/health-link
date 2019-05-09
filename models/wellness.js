const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wellnessSchema = new Schema({
  name: { type: Number, required: true },
  age: { body: String, date: Date },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
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

const Wellness = mongoose.model("Wellness", wellnessSchema);

module.exports = Wellness;
