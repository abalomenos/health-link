import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';
import {Container, Row, Col} from 'react-materialize';
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import moment from "moment";

import './Week.css';


const backgroundImg ='./assets/images/background1.jpg';

class Week extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sleepCounter: [8, 7, 7, 6, 8, 9, 5],
            waterCounter: [2, 3, 4, 5, 5, 6, 4],
            workoutConter: [4, 0, 2, 1, 0, 2, 0],
            caloriesCounter: [1500, 1600, 1650, 1800, 2000, 1650, 1500]
        };
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
          console.log("hello" + res.data.name);
          console.log(moment().subtract(10,"days").format("MM/DD/YYYY"));
        });
      };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    
    
    render() {
        return (
            <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
                    <Container className="containerWeek">
                        <Row>
                            <Col className="s2 offset-s5 black-text center-align">
                            Weekly Stats
                            <hr/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="s10 offset-s1 black-text center-align">
                                <Bar
                                    data={{
                                        datasets: [
                                            {
                                                label: "Workout",
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: '#00C864',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: '#00FF80',
                                                yAxisID: 'y-axis-1',
                                                data: [this.state.workoutConter[0], this.state.workoutConter[1], this.state.workoutConter[2], this.state.workoutConter[3], this.state.workoutConter[4], this.state.workoutConter[5], this.state.workoutConter[6]]
                                            },
                                            {
                                                label: "Water",
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: '#0077BE',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: '#4DBEFF',
                                                yAxisID: 'y-axis-1',
                                                data: [this.state.waterCounter[0], this.state.waterCounter[1], this.state.waterCounter[2], this.state.waterCounter[3], this.state.waterCounter[4], this.state.waterCounter[5], this.state.waterCounter[6]]
                                            },
                                            {
                                                label: "Sleep",
                                                type: 'bar',
                                                fill: false,
                                                borderColor: '#bebebe',
                                                backgroundColor: '#5f6b7f',
                                                hoverBorderColor: '#bebebe',
                                                hoverBackgroundColor: '#BFD8FF',
                                                yAxisID: 'y-axis-1',
                                                data: [this.state.sleepCounter[0], this.state.sleepCounter[1], this.state.sleepCounter[2], this.state.sleepCounter[3], this.state.sleepCounter[4], this.state.sleepCounter[5], this.state.sleepCounter[6]]
                                            },
                                            {
                                                label: "Calories",
                                                data: [this.state.caloriesCounter[0], this.state.caloriesCounter[1], this.state.caloriesCounter[2], this.state.caloriesCounter[3], this.state.caloriesCounter[4], this.state.caloriesCounter[5], this.state.caloriesCounter[6]],
                                                type: 'line',
                                                fill: false,
                                                borderWidth: 2,
                                                borderColor: '#E0A765',
                                                backgroundColor: '#E0A765',
                                                pointBorderColor: '#805F39',
                                                pointBackgroundColor: '#805F39',
                                                pointHoverBorderColor: '#CC985C',
                                                pointHoverBackgroundColor: '#CC985C',
                                                yAxisID: 'y-axis-2'
                                            }
                                        ]
                                    }}
                                    width={100}
                                    height={60}
                                    options={{
                                        maintainAspectRatio: true,
                                        legend: {
                                            display: true,
                                            position: 'right',
                                            labels: {
                                                boxWidth: 20,
                                                padding:  10,
                                                fontColor: "black",
                                                fontSize: 16
                                            }
                                        },
                                        labels: ["Monday", "Tuesday", "Wednesdday", "Thursday", "Friday", "Saturday", "Sundsay"],
                                        responsive: true,
                                        tooltips: {
                                            mode: 'label'
                                        },
                                        elements: {
                                            line: {
                                            fill: false
                                            }
                                        },
                                        scales: {
                                            xAxes: [
                                            {
                                                display: true,
                                                gridLines: {
                                                    display: true
                                                },
                                                labels: ["Monday", "Tuesday", "Wednesdday", "Thursday", "Friday", "Saturday", "Sundsay"],
                                            }
                                            ],
                                            yAxes: [
                                            {
                                                type: 'linear',
                                                display: true,
                                                position: 'left',
                                                id: 'y-axis-1',
                                                gridLines: {
                                                    display: false
                                                },
                                                labels: {
                                                    show: true
                                                },
                                                ticks: {
                                                    beginAtZero:true,
                                                    min: 0,
                                                    max: 14,
                                                    fontColor: 'Black'
                                                }
                                            },
                                            {
                                                type: 'linear',
                                                display: true,
                                                position: 'right',
                                                id: 'y-axis-2',
                                                gridLines: {
                                                    display: false
                                                },
                                                labels: {
                                                    show: true
                                                },
                                                ticks: {
                                                    suggestedMin: 0,
                                                    suggestedMax: 2200,
                                                    fontColor: 'Black'
                                                }
                                            }
                                            // ,
                                            // {
                                            //     type: 'linear',
                                            //     display: true,
                                            //     position: 'left',
                                            //     id: 'y-axis-3',
                                            //     gridLines: {
                                            //         display: false
                                            //     },
                                            //     labels: {
                                            //         show: true
                                            //     },
                                            //     ticks: {
                                            //         beginAtZero: false,
                                            //         suggestedMin: 0,
                                            //         suggestedMax: 6,
                                            //         fontColor: 'Black'
                                            //     }
                                            // }
                                            ]
                                        },
                                        plugins: {
                                          datalabels: {
                                            display: true,
                                            clamp: false,
                                            anchor: 'end',
                                            align: 'end',
                                            offset: 2,
                                            color: 'black'
                                         },
                                        }
                                    }}
                                    plugins={{
                                        afterDraw: (chartInstance, easing) => {
                                            const ctx = chartInstance.chart.ctx;
                                            ctx.fillText("Weekly Stats", 920, 200);
                                        }
                                    }}
                                />
                            </Col>
                        </Row>
                    </Container>
              </div>
          );
      }
  }
  


export default withAuth(Week);
