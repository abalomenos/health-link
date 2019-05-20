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
  updateUser: function(id) {
    return axios.put("/api/users", + id);
  },
  //signs up a user
  signUpUser: (email, password, name, age, weight, height, gender, activity, BMI, water_goal, intake_goal) => {
    return axios.post('/api/users', 
    {
      email: email, 
      password: password, 
      name: name, 
      age: age, 
      weight: weight, 
      height: height,
      gender: gender,
      activity: activity,
      BMI: BMI,
      water_goal: water_goal,
      intake_goal: intake_goal
    });
  }
};
