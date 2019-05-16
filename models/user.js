const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  age: { type: Number, required: true},
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

userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordhash = await bcrypt.hash(this.password, salt);
    this.password = passwordhash;
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
