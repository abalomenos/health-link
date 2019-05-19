import React, { Component } from "react";
import {Bar, Pie} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {Container, Row, Col, Modal, TextInput, Button, Icon} from 'react-materialize';
import DatePicker from "react-datepicker";
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import moment from "moment";


import "react-datepicker/dist/react-datepicker.css";
import './Day.css';

// Images
const workoutImg = "./assets/images/workout1.jpg";
const waterImg = "./assets/images/water1.jpg";
const sleepImg = "./assets/images/sleep1.jpg";
const nutritionImg = "./assets/images/nutrition1.jpg";
const backgroundImg ='./assets/images/background1.jpg';


class Day extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      sleepCounter: 8,
      workoutCounter: 2,
      waterCounter: 1,
      proteinCounter: 90,
      carbsCounter: 50,
      fatCounter: 40,
      caloriesCounter: 1500,
      maxCalories:  2000,
      name: "",
      id: "",
      date: Date.now(),
      water_goal: "",
      calorie_goal: "",
      exercise_goal: "",
      sleep_goal: ""
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.addOneHourS = this.addOneHourS.bind(this);
    this.subOneHourS = this.subOneHourS.bind(this);
    this.addOneHourW = this.addOneHourW.bind(this);
    this.subOneHourW = this.subOneHourW.bind(this);
    this.addOneWater = this.addOneWater.bind(this);
    this.subOneWater = this.subOneWater.bind(this);
  }

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
      );
      console.log(res.data);
      console.log(moment().subtract(10,"days").format("MM/DD/YYYY"));
    });
  };

 

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  addOneHourS() {
    this.setState((prevState) => {
      return {
        sleepCounter : prevState.sleepCounter + 1
        };
     });
  }

  subOneHourS() {
    this.setState((prevState) => {
      return {
        sleepCounter: prevState.sleepCounter === 0 ? prevState.sleepCounter: prevState.sleepCounter - 1
        };
     });
  }

  addOneHourW() {
    this.setState((prevState) => {
      return {
        workoutCounter : prevState.workoutCounter + 1
        };
     });
  }

  subOneHourW() {
    this.setState((prevState) => {
      return {
        workoutCounter: prevState.workoutCounter === 0 ? prevState.workoutCounter: prevState.workoutCounter - 1
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
            <Col className="s2 offset-s5 black-text center-align">
              Daily Stats
              <hr/>
            </Col>
          </Row>
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
          
          <Row>
          <hr/>
          
          <Col className="m4 offset-m1 s10 offset-s1 black-text center-align graphContainer">
            <div className="sectionBG">
              <img src={waterImg} alt="Water" />
            </div>
            <div className="sectionData">
            <Bar
              data={{
                labels: ["Cups (1 cup = 8 oz.)"],
                datasets: [{
                  label: "Water Consumption",
                  borderColor: '#bebebe',
                  backgroundColor: '#0077BE',
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
                  xAxes: [{
                    display: true,
                    gridLines: {
                      display: false
                    }
                  }],
                  yAxes: [{
                      display: false,
                        gridLines: {
                          display: false
                      },
                      ticks: {
                          beginAtZero:true,
                          min: 0,
                          max: 8,
                          fontColor: 'Black'
                      }
                    }]
                },
                plugins: {
                  datalabels: {
                    display: true,
                    color: '#193f55'
                 }
                }
              }}
            />
            <br/>
            <div className="btn red waves-effect" onClick={this.subOneWater}>-</div>
            <div className="btn green waves-effect" onClick={this.addOneWater}>+</div>
            </div>
          </Col>
          <Col className="m4 offset-m2 s10 offset-s1 black-text center-align graphContainer">
            <div className="sectionBG pieBG">
              <img src={nutritionImg} alt="Nutrition" />
            </div>
            <div className="sectionData">
              <div className="chartTitle">
                Nutrition Facts
              </div>
              <Pie
                data={{
                  labels: ["Protein", "Carbs", "Fat"],
                  datasets: [{
                    data: [this.state.proteinCounter, this.state.carbsCounter, this.state.fatCounter],
                    borderColor: '#bebebe',
                    backgroundColor : ["#F69421", "#A9A9AA", "#FF6E70"]
                  }]
                }}
                width={100}
                height={100}
                options={{
                  maintainAspectRatio: true,
                  legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        boxWidth: 10,
                        padding:  10,
                        fontColor: "black",
                        fontSize: 14
                    }
                  },
                  tooltips: {
                    backgroundColor: "black",
                    bodyFontColor: "white"
                  },
                  scales: {
                    xAxes: [{
                      display: false,
                      gridLines: {
                        display: false
                      }
                    }],
                    yAxes: [{
                        display: false,
                          gridLines: {
                            display: false
                        }
                      }]
                  },
                  plugins: {
                    datalabels: {
                      display: true,
                      color: 'white'
                  }
                  }
                }}
              />
              
              <br/>
              <div className="nutritionMenu">
                <Modal trigger={<div className="btn green waves-effect">Add Meal</div>}>
                  <TextInput label="Meal" />
                  <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
                </Modal>
              </div>
            </div>
          </Col>
          </Row>
          <Row>
          <Col className="m4 offset-m1 s10 offset-s1 black-text center-align graphContainer">
            
            <div className="sectionBG">
              <img src={workoutImg} alt="Workout" />
            </div>
            <div className="sectionData">
              <Bar
                data={{
                  labels: ["Hours"],
                  datasets: [{
                    label: "Workout Time",
                    borderColor: '#bebebe',
                    backgroundColor: '#00C864',
                    data: [this.state.workoutCounter]
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
                    xAxes: [{
                      display: true,
                      gridLines: {
                        display: false
                      }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: {
                          display: false
                        },
                        ticks: {
                            beginAtZero:true,
                            suggestedMin: 0,
                            suggestedMax: 6,
                            fontColor: 'black'
                        }
                      }]
                  },
                  plugins: {
                    datalabels: {
                      display: true,
                      color: '#195738'
                  }
                  }
                }}
              />
            <br/>
              <div className="btn red waves-effect" onClick={this.subOneHourW}>-</div>
              <div className="btn green waves-effect" onClick={this.addOneHourW}>+</div>
            </div>
          </Col>
          <Col className="m4 offset-m2 s10 offset-s1 black-text center-align graphContainer">
            <div className="sectionBG">
              <img src={sleepImg} alt="Sleep" />
            </div>
            <div className="sectionData">
              <Bar
                data={{
                  labels: ["Hours"],
                  datasets: [{
                    label: "Sleep Last Night",
                    borderColor: '#bebebe',
                    backgroundColor: '#5f6b7f',
                    data: [this.state.sleepCounter]
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
                    xAxes: [{
                      display: true,
                      gridLines: {
                        display: false
                      }
                    }],
                    yAxes: [{
                        display: false,
                          gridLines: {
                            display: false
                        },
                        ticks: {
                            beginAtZero:true,
                            min: 0,
                            max: 10,
                            fontColor: 'black'
                        }
                      }]
                  },
                  plugins: {
                    datalabels: {
                      display: true,
                      color: '#171A1F'
                  }
                  }
                }}
              />
              <br/>
              <div className="btn red waves-effect" onClick={this.subOneHourS}>-</div>
              <div className="btn green waves-effect" onClick={this.addOneHourS}>+</div>
            </div>
          </Col>
          </Row>
          <div className="btn green waves-effect prev leftArrow">{'<'}</div>
          <div className="btn green waves-effect next rightArrow">{'>'}</div>
        </Container>
      </div>
  
    );
  }
}

export default withAuth(Day);

