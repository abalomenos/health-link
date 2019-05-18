import React, { Component } from "react";
import {Bar, Pie, Line} from 'react-chartjs-2';
import {Row, Col} from 'react-materialize';
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import moment from "moment";

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
//     window.location = '/'; //After successful login, user will be redirected to home.html
//   } 
// });

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
    API.getUser(this.props.user.id).then(res => {
      this.setState(
        {
          id: res.data._id,
          name: res.data.name,
          age: res.data.age,
          water_goal: res.data.water_goal,
          calorie_goal: res.data.calorie_goal,
          exercise_goal: res.data.exercise_goal,
          sleep_goal: res.data.sleep_goal,
        }
      )
      console.log("hello" + res.data.name);
      console.log(moment().subtract("days", 10).format("MM/DD/YYYY"));
    });
  };

 

  water = {
    labels: ["Water"],
    datasets: [{
      label: "Water Consumption",
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [5],
    }]
  }

  calories = {
    labels: ["Calories"],
    datasets: [{
      data: [800, 50, 600, 90, 20],
      backgroundColor : [
        "red", "green", "blue", "purple", "magenta"
      ]
  }],
  labels: [
      'Calories',
      'Protein',
      'Carbs',
      'Fat',
      'Fibre'
  ]
  }

  workout = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
  };

  

  render() {
    return (
      <div>
        {/* <h1>{this.state.name}</h1> */}
        <Row>
        <Col className="s2 offset-s3 white-text">
          <Bar
            data={this.water}
            width={100}
            height={100}
            options={{ maintainAspectRatio: true }}
          />
        </Col>
        <Col className="s2 offset-s2 white-text" >
          <Pie
            width={100}
            height={100}
            data={this.calories}
            options={{ maintainAspectRatio: true }}
          />
        </Col>
        </Row>
        <Row>
        <Col className="s2 offset-s3 white-text">
          <Line
            data={this.workout}
            width={100}
            height={100}
            options={{ maintainAspectRatio: true }}
          />
        </Col>
        </Row>
  
      </div>
  
  
  
    );
  }
}

export default withAuth(Day);

