import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import { Doughnut, Bubble } from 'react-chartjs-2';


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

  data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
      label: "My First dataset",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  }

  data2 = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        "red", "green", "blue", "purple", "magenta"
      ]
    }],
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  };

  data3 = {
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [{x:10,y:20,r:5}]
      }
    ]
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
          data={this.data1}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false }}
        />
        <Doughnut
          data={this.data2}

        />

        <Bubble
          data={this.data3}

        />


      </div>



    );
  }
}

export default About;
