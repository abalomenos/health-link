import React, { Component } from "react";
import {Bar, Pie, Line} from 'react-chartjs-2';
import {Row, Col} from 'react-materialize';
import API from "../../utils/API";



class Day extends Component {

  addOne = this.addOne.bind(this);
  subOne = this.subOne.bind(this);
  addOneWater = this.addOneWater.bind(this);
  subOneWater = this.subOneWater.bind(this);

  state = {
    sleepCounter: 8,
    waterCounter: 1,
    proteinCounter: 90,
    carbsCounter: 50,
    fatCounter: 40,
    caloriesCounter: 1500
  };

  componentDidMount() {

  };
// ****************** Test data ***************

  nutrition = {
    
  }

  calories = 1500;

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
  // ****************** Test data End ***************

  addOne() {
    this.setState((prevState) => {
      return {
        sleepCounter : prevState.sleepCounter + 1
        };
     });
  }

   subOne() {

    this.setState((prevState) => {
      return {
        sleepCounter: prevState.sleepCounter == 0 ? prevState.sleepCounter: prevState.sleepCounter - 1
        };
     });
  }

  addOneWater() {
    this.setState((prevState) => {
      console.log(this.state.waterCounter);
      return {
        waterCounter : prevState.waterCounter + 1
        };
        
     });
  }

   subOneWater() {

    this.setState((prevState) => {
      return {
        waterCounter: prevState.waterCounter == 0 ? prevState.waterCounter: prevState.waterCounter - 1
        };
     });
  }

  render() {
    return (
      <div>
        <Row>
          <Col className="s2 offset-s7 black-text center-align">
            Calories: {this.calories}
          </Col>
        </Row>
        <Row>
        <Col className="s2 offset-s3 white-text center-align">
          <Bar
            data={{
              labels: ["Cups (1 cup = 8 fl. oz.)"],
              datasets: [{
                label: "Water Consumption",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [this.state.waterCounter]
              }]
            }}
            width={100}
            height={100}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        min: 0,
                        max: 8   
                    }
                  }]
               }
            }}
          />
          <br/>
          <input type='button' onClick={this.addOneWater} value='Inc'/>
          <input type='button' onClick={this.subOneWater} value='Dec'/>
        </Col>
        <Col className="s2 offset-s2 white-text center-align" >
          <Pie
            width={100}
            height={100}
            data={{
              labels: ["Calories"],
              datasets: [{
                data: [this.state.proteinCounter, this.state.carbsCounter, this.state.fatCounter],
                backgroundColor : [
                  "red", "green", "blue"
                ]
              }],
              labels: [
                  'Protein',
                  'Carbs',
                  'Fat'
              ]
            }}
            options={{ maintainAspectRatio: true }}
          />
        </Col>
        </Row>
        <Row>
        <Col className="s2 offset-s3 black-text center-align">
          <label>
            <input type="checkbox" class="filled-in" />
            <span>Workout</span>
          </label>
        </Col>
        <Col className="s2 offset-s2 black-text center-align">
          <Bar
            data={{
              labels: ["Hours"],
              datasets: [{
                label: "Sleep Last Night",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [this.state.sleepCounter]
              }]
            }}
            width={100}
            height={100}
            options={{
              maintainAspectRatio: true,
              scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        min: 0,
                        max: 10    
                    }
                  }]
               }
            }}
          />
          <br/>
          <input type='button' onClick={this.addOne} value='Inc'/>
          <input type='button' onClick={this.subOne} value='Dec'/>
        </Col>
        </Row>
  
      </div>
  
  
  
    );
  }
}

export default Day;
