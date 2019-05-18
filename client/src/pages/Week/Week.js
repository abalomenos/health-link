// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Bubble } from 'react-chartjs-2';

import React, { Component } from "react";
import { Bar } from 'react-chartjs-2';
import { Doughnut, Bubble } from 'react-chartjs-2';
import {Row, Col} from 'react-materialize';
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import moment from "moment";


class Week extends Component {
    state = {
      name: "",
      email: "",
      password: "",
      age: "",
      weight: ""
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
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
  
  
    
    render() {
      return (
        <div>
            <Row>
            <Col s={1} className="teal white-text">
            1
            </Col>
            <Col s={1} className="teal white-text">
            2
            </Col>
            <Col s={1} className="teal white-text">
            3
            </Col>
            <Col s={1} className="teal white-text">
            4
            </Col>
            <Col s={1} className="teal white-text">
            5
            </Col>
            <Col s={1} className="teal white-text">
            6
            </Col>
            <Col s={1} className="teal white-text">
            7
            </Col>
            <Col s={1} className="teal white-text">
            8
            </Col>
            <Col s={1} className="teal white-text">
            9
            </Col>
            <Col s={1} className="teal white-text">
            10
            </Col>
            <Col s={1} className="teal white-text">
            11
            </Col>
            <Col s={1} className="teal white-text">
            12
            </Col>
            </Row>
  
          <Bubble
          data={this.data3}
          />
          <Bubble
          data={this.data3}
          />
          <Bubble
          data={this.data3}
          />
          <Bubble
          data={this.data3}
          />
  
  
        </div>
        
      
  
      );
    }
  }
  


export default withAuth(Week);
