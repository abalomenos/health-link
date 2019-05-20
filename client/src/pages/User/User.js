import React, { Component } from "react";
import { Container, Row, Col, Button, TextInput, Icon, Select } from "react-materialize";
import API from "../../utils/API";
import withAuth from './../../components/withAuth';

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
    gender: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSelectChange(event) {
    this.setState({value: event.target.value});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.name &&
      this.state.age &&
      this.state.weight &&
      this.state.gender &&
      this.state.feet &&
      this.state.inches &&
      this.state.activity
    ) {
      // Define variables for calculations
      let height = this.convertHeight();
      let weight = this.state.weight;
      let age = this.state.age;

      API.saveUser({
        name: this.state.name,
        age: age,
        weight: weight,
        height: height,
        BMI: this.calculateBMI(height).toFixed(1),
        water_goal: this.calculateWaterGoal(),
        exercise_goal: this.state.exercise,
        intake_goal: this.calculateCalorieRec(weight, height, age),
        sleep_goal: this.state.sleep,
        gender: this.state.gender
      })
        .then(res => console.log("user saved"))
        .catch(err => console.log(err));
    } else {
      alert("Please make sure you answer all the questions!");
    }
  };

  // Converts feet to inches
  convertHeight = () => {
    return parseInt(this.state.feet) * 12 + parseInt(this.state.inches);
  };

  // Calculates BMI using weight in pounds and height in inches
  calculateBMI = h => {
    return (parseInt(this.state.weight) / h / h) * 703;
  };

  // Calculates water intake recommendation in ounces based on weight in pounds
  calculateWaterGoal = weight => {
    return parseInt(this.state.weight) / 16;
  };

  // Calculates recommended caloric intake
  calculateCalorieRec = (weight, height, age) => {
    let male_BMR = health.male.BMR(weight, height, age);
    let female_BMR = health.female_BMR(weight, height, age);

    //Sedentary
    if (this.state.gender === "male" && this.state.activity === "sedentary") {
      health.male.noActivity(male_BMR);
    } else if (this.state.gender === "female" && this.state.activity === "sedentary") {
      health.female.noActivity(female_BMR);
    }
    //Light Activity
    else if (this.state.gender && this.state.activity === "light") {
      health.male.lightActivity(male_BMR);
    } else if (!this.state.gender && this.state.activity === "light") {
      health.female.lightActivity(female_BMR);
    }
    //Moderate Activity
    else if (this.state.gender && this.state.activity === "moderate") {
      health.male.moderateActivity(male_BMR);
    } else if (!this.state.gender && this.state.activity === "moderate") {
      health.female.moderateActivity(female_BMR);
    }
    //Very Active
    else if (this.state.gender && this.state.activity === "veryActive") {
      health.male.veryActive(male_BMR);
    } else if (!this.state.gender && this.state.activity === "veryActive") {
      health.female.veryActive(female_BMR);
    }
    //Extremely Active
    else if (this.state.gender && this.state.activity === "extremelyActive") {
      health.male.extremelyActive(male_BMR);
    } else if (
      !this.state.gender &&
      this.state.activity === "extremelyActive"
    ) {
      health.female.extremelyActive(female_BMR);
    }
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
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  label="First Name"
                />
              </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                
                <TextInput
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  label="Last Name"
                />
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <TextInput
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
                  value={this.state.weight}
                  onChange={this.handleInputChange}
                  name="weight"
                  label="Weight"
                />
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <TextInput
                  value={this.state.feet}
                  onChange={this.handleInputChange}
                  name="feet"
                  label="Feet"
                />
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <TextInput
                  value={this.state.inches}
                  onChange={this.handleInputChange}
                  name="inches"
                  label="Inches"
                />
                </Col>
            </Row>
            <Row>
              <Col className="s12 center-align">
                <Select value={this.state.activity} onChange={this.handleSelectChange} label="Activity Level">
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="veryActive">Very Active</option>
                  <option value="extremelyActive">Extremely Active</option>
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

export default User;
