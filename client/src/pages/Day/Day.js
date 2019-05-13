import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";

const firebaseConfig = {
  apiKey: "AIzaSyCCez8DBQCibI7u56xLHXEXeds8HYtKyNU",
  authDomain: "health-dashboard-7721d.firebaseapp.com",
  databaseURL: "https://health-dashboard-7721d.firebaseio.com",
  projectId: "health-dashboard-7721d",
  storageBucket: "health-dashboard-7721d.appspot.com",
  messagingSenderId: "884846492477",
  appId: "1:884846492477:web:cdba4940c036659d"
};

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = '/'; //After successful login, user will be redirected to home.html
  } 
});

class Day extends Component {
  state = {
    name: "",
    id: "",
    date: Date.now(),
    water_goal: "",
    calorie_goal: "",
    exercise_goal: "",
    sleep_goal: ""
  };
  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    this.getUser();
  };

  getUser() {
    API.getUser(firebase.auth().currentUser.uid)
      .then(res =>
        this.setState({
          name: res.data.name,
          id: firebase.auth().currentUser.uid,
          date: Date.now(),
          water_goal: res.data.water_goal,
          calorie_goal: res.data.calorie_goal,
          exercise_goal: res.data.exercise_goal,
          sleep_goal: res.data.sleep_goal
        })
        )
  }
  signOut () {
    firebase.auth().signOut().then(function(){}).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      alert(error.Message);

    });
  }
  render() {
    return (
      <div>
        {/* <canvas id="myChart"></canvas> */}
  
      </div>
  
  
  
    );
  }
}

export default Day;
