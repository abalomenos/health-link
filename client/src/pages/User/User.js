import React, { Component } from "react";
import { Container, Row, Col, Button, TextInput, Icon, Select } from "react-materialize";
import API from "../../utils/API";
import withAuth from './../../components/withAuth';
import helper from '../../helpers/calculations';
import moment from "moment";

import './User.css';

const health = require("healthstats");

// Images
const backgroundImg ='./assets/images/background1.jpg';


class User extends Component {
  state = {
    user: [],
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    feet: "",
    inches: "",
    activity: "",
    exercise: "",
    sleep: "",
    gender: "",
    activity: "",
    gender: ""
  };

  activityToExercise = {
    "Sedentary": 0,
    "Light": 1,
    "Moderate": 2,
    "Very Active": 3,
    "Extremely Active": 4
  };

  componentDidMount() {
    API.getUser(this.props.user.id).then(res => {
      this.setState(
        {
          id: res.data._id,
          name: res.data.name,
          age: res.data.age,
          weight: res.data.weight,
          height: res.data.height,
          gender: res.data.gender,
          activity: res.data.activity
        }
      );
      console.log(res.data);
      console.log(moment().subtract(10,"days").format("YYYY-MMDD"));
      console.log(this.state);
    });
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelectChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const BMI = Math.round(helper.calculateBMI(this.state.height, this.state.weight)*10)/10;
    const water_goal = Math.round(helper.calculateWaterGoal(this.state.weight));
    const intake_goal =  Math.round(helper.calculateCalorieRec(this.state.weight, this.state.height, this.state.age, this.state.gender, this.state.activity));

    API.updateUser(this.props.user.id, {
      email: this.state.email, 
      name: this.state.name, 
      age: this.state.age, 
      weight: this.state.weight, 
      height: this.state.height, 
      gender: this.state.gender, 
      activity: this.state.activity, 
      exercise_goal: this.activityToExercise[this.state.activity],
      BMI: BMI, 
      water_goal: water_goal, 
      intake_goal: intake_goal
    })
    .then(res => {
      this.props.history.replace('/day');
    });
  };

  render() {
    return (
      <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Container className="containerUser">
          <Row>
            <Col className="s8 offset-s2 black-text center-align">
              Update Profile
              <hr/>
            </Col>
          </Row>
          <form className="userForm">
          <Row className="userFormSection">
            <Col className="s12 center-align">
                <TextInput 
                  m={12} 
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  label="Name"
                />
              </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <TextInput
                  m={12} 
                  value={this.state.age}
                  onChange={this.handleInputChange}
                  name="age"
                  label="Age"
                />
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <TextInput
                  m={12} 
                  value={this.state.weight}
                  onChange={this.handleInputChange}
                  name="weight"
                  label="Weight (lbs)"
                />
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <TextInput
                  m={12} 
                  value={this.state.height}
                  onChange={this.handleInputChange}
                  name="height"
                  label="Height (inches)"
                />
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <Select m={12} value={this.state.activity} onChange={this.handleSelectChange} label="Activity Level" name = "activity">
                  <option value="sSedentary">Sedentary</option>
                  <option value="Light">Light</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Very Active">Very Active</option>
                  <option value="Extremely Active">Extremely Active</option>
                </Select>
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <Select m={12} value={this.state.gender} onChange={this.handleSelectChange} label="Gender" name="gender">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <Button type="submit" waves="light" onClick={this.handleFormSubmit}>
                  Update<Icon right>send</Icon>
                </Button>
              
            </Col>
          </Row>
          </form>
        </Container>
      </div>
    );
  }
}

export default withAuth(User);
