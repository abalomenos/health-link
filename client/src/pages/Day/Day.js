import React, { Component } from "react";
import {Bar, Pie} from 'react-chartjs-2';
import {Container, Row, Col, Modal, TextInput, Button, Icon} from 'react-materialize';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './Day.css';

// import API from "../../utils/API";

let workoutImg = "./assets/images/workout1.jpg";
const backgroundImg ='./assets/images/background1.jpg'

class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      sleepCounter: 8,
      waterCounter: 1,
      proteinCounter: 90,
      carbsCounter: 50,
      fatCounter: 40,
      caloriesCounter: 1500,
      maxCalories:  2000
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.addOneHour = this.addOneHour.bind(this);
    this.subOneHour = this.subOneHour.bind(this);
    this.addOneWater = this.addOneWater.bind(this);
    this.subOneWater = this.subOneWater.bind(this);
  }

  componentDidMount() {

  };

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  addOneHour() {
    this.setState((prevState) => {
      return {
        sleepCounter : prevState.sleepCounter + 1
        };
     });
  }

  subOneHour() {
    this.setState((prevState) => {
      return {
        sleepCounter: prevState.sleepCounter === 0 ? prevState.sleepCounter: prevState.sleepCounter - 1
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
        waterCounter: prevState.waterCounter === 0 ? prevState.waterCounter: prevState.waterCounter - 1
        };
     });
  }
  

  render() {
    return (
      <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Container className="containerDay">
          <Row>
          
            <Col className="s4 offset-s1 black-text center-align">
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleDateChange}
              />
            </Col>
            <Col className="s4 offset-s2 black-text center-align">
              Calories
              <br/>
              {this.state.caloriesCounter} / {this.state.maxCalories}
            </Col>
            
          </Row>
          <div className="divider"></div>
          <Row>
          <Col className="m4 offset-m1 s10 offset-s1 black-text center-align">
            <div className="divider"></div>
            <Bar
              data={{
                labels: ["Cups (1 cup = 8 oz.)"],
                datasets: [{
                  label: "Water Consumption",
                  backgroundColor: 'rgb(0, 119, 190)',
                  borderColor: 'rgb(0, 119, 190)',
                  data: [this.state.waterCounter]
                }]
              }}
              width={100}
              height={100}
              options={{
                maintainAspectRatio: true,
                legend: {
                  labels: {
                      fontColor: "black",
                      fontSize: 16
                  }
                },
                tooltips: {
                  backgroundColor: "black",
                  bodyFontColor: "white"
                },
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true,
                          min: 0,
                          max: 8,
                          fontColor: 'Black'
                      }
                    }]
                }
              }}
            />
            <br/>
            <div className="btn red waves-effect" onClick={this.subOneWater}>-</div>
            <div className="btn green waves-effect" onClick={this.addOneWater}>+</div>
          </Col>
          <Col className="m4 offset-m2 s10 offset-s1 black-text center-align">
            <div className="divider"></div>
            <Pie
              width={100}
              height={100}
              data={{
                labels: ["Protein", "Carbs", "Fat"],
                datasets: [{
                  data: [this.state.proteinCounter, this.state.carbsCounter, this.state.fatCounter],
                  backgroundColor : [
                    "rgb(246,148,33)", "rgb(169,168,173)", "rgb(238,30,37)"
                  ]
                }]
              }}
              options={{
                maintainAspectRatio: true,
                legend: {
                  labels: {
                      fontColor: "black",
                      fontSize: 16
                  }
                },
                tooltips: {
                  backgroundColor: "black",
                  bodyFontColor: "white"
                }
              }}
            />
            <br/>
            <Modal trigger={<div className="btn green waves-effect">Add Meal</div>}>
              <TextInput meal validate label="Meal" />
              <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
            </Modal>
          </Col>
          </Row>
          <Row>
          <Col className="m4 offset-m1 s10 offset-s1 black-text center-align workoutContainer">
            <div className="divider"></div>
            
            <div className="section">
              Workout
              <img src={workoutImg} alt="Workout" />
            </div>
            <div className="section">
            <br/>
            <label>
              <input type="checkbox" className="filled-in" />
              <span>Yes</span>
            </label>
            </div>
          </Col>
          <Col className="m4 offset-m2 s10 offset-s1 black-text center-align infoSection">
            <div className="divider"></div>
            <Bar
              data={{
                labels: ["Hours"],
                datasets: [{
                  label: "Sleep Last Night",
                  backgroundColor: 'rgb(0, 200, 100)',
                  borderColor: 'rgb(0, 200, 100)',
                  data: [this.state.sleepCounter]
                }]
              }}
              width={1}
              height={1}
              options={{
                maintainAspectRatio: true,
                legend: {
                  labels: {
                      fontColor: "black",
                      fontSize: 16
                  }
                },
                tooltips: {
                  backgroundColor: "black",
                  bodyFontColor: "white"
                },
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true,
                          min: 0,
                          max: 10,
                          fontColor: 'black'
                      }
                    }]
                }
              }}
            />
            <br/>
            <div className="btn red waves-effect" onClick={this.subOneHour}>-</div>
            <div className="btn green waves-effect" onClick={this.addOneHour}>+</div>
          </Col>
          </Row>
          <div className="btn green waves-effect prev leftArrow">{'<'}</div>
          <div className="btn green waves-effect next rightArrow">{'>'}</div>
        </Container>
      </div>
  
    );
  }
}

export default Day;
