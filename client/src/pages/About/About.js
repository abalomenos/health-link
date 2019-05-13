import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Navbar, NavItem, Modal, Button} from 'react-materialize';

let img = "./assets/images/burger.jpg";

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
    window.location = '/day'; //After successful login, user will be redirected to home.html
  } 
});

class About extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    age: "",
    weight: ""
  };

  componentDidMount() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  signIn() { //function used for submit button on sign in page
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      alert(error.Message);
  
    });
  };

  signUp() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      alert(error.message);
    });
  };

  render() {
    return (
      <div>

        <Navbar brand={<a />} alignLinks="right">
          <Modal trigger={<NavItem href="">Login</NavItem>}>

          </Modal>

          <Modal trigger={<NavItem href="">Create Profile</NavItem>}>

          </Modal>

        </Navbar>
        <div className="background" style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "800px"}}>

        </div>

      </div>



    );
  }
}

export default About;
