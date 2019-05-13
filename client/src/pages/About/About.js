import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';

let img = "./assets/images/burger.jpg";

// const firebaseConfig = {
//   apiKey: "AIzaSyCCez8DBQCibI7u56xLHXEXeds8HYtKyNU",
//   authDomain: "health-dashboard-7721d.firebaseapp.com",
//   databaseURL: "https://health-dashboard-7721d.firebaseio.com",
//   projectId: "health-dashboard-7721d",
//   storageBucket: "health-dashboard-7721d.appspot.com",
//   messagingSenderId: "884846492477",
//   appId: "1:884846492477:web:cdba4940c036659d"
// };

// firebase.auth().onAuthStateChanged(user => {
//   if(user) {
//     window.location = '/day'; //After successful login, user will be redirected to home.html
//   } 
// });



class About extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    age: "",
    weight: ""
  };

  data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  }

  componentDidMount() {
    // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // signIn() { //function used for submit button on sign in page
  //   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     alert(error.Message);
  
  //   });
  // };

  // signUp() {
  //   firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     alert(error.message);
  //   });
  // };


  
  render() {
    return (
      <div>
        {/* <div className="background" style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "800px"}}></div> */}
        <Bar
          data={this.data}
          width={200}
          height={150}
          options={{ maintainAspectRatio: false }}
        />



      </div>
      
    

    );
  }
}

export default About;
