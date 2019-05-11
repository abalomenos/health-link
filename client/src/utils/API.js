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
  // Saves a user to the database
  saveUser: function(userInfo) {
    return axios.post("/api/users", userInfo);
  },
  // Updates a user in the database
  updateUser: function(id) {
    return axios.put("/api/users", + id);
  }
};
