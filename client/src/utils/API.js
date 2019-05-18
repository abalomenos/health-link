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
  signUpUser: (email, password, name, age, weight, height) => {
    return axios.post('/api/users', {email: email, password: password, name: name, age: age, weight: weight, height: height});
  },

  // login: (email, password) => {
  //   return axios.post('/api/users/login', {email: email, password: password});
  // }
};
