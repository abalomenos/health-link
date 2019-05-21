import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Updates a user in the database
  updateUser: function(id, data) {
    return axios.put("/api/users/" + id, data);
  },
  //signs up a user
  signUpUser: (email, password, name, age, weight, height, gender, activity, exercise_goal, BMI, water_goal, intake_goal) => {
    return axios.post("/api/users", 
    {
      email: email, 
      password: password, 
      name: name, 
      age: age, 
      weight: weight, 
      height: height,
      gender: gender,
      activity: activity,
      exercise_goal: exercise_goal,
      BMI: BMI,
      water_goal: water_goal,
      intake_goal: intake_goal
    });
  },

  getFoodInfo: (food) => {
    return axios.get("https://api.edamam.com/api/food-database/parser?ingr="+food+"&app_id=859c90a7&app_key=2dadfc5111c59d5760045dbc55fe3d59");
  }
 };
