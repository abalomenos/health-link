import React, { Component } from "react";
import {Container, Row, Col, Modal, TextInput, Button, Icon} from 'react-materialize';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './User.css';

// import API from "../../utils/API";

const backgroundImg ='./assets/images/background1.jpg'

// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";

// import { List, ListItem } from "../../components/List";
// import { Input, FormBtn } from "../../components/Form";
const health = require('healthstats');

class User extends Component {
  state = {
    user: [],
    name: "",
    age: "",
    weight: "",
    feet: "",
    inches: "",
    activity: "",
    exercise: "",
    sleep: "",
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.age && this.state.weight && this.state.isMale && this.state.feet && this.state.inches && this.state.activityLevel) {
  //     // Define variables for calculations
  //     let height = this.convertHeight();
  //     let weight = this.state.weight;
  //     let age = this.state.age;
      
  //     API.saveUser({
  //       name: this.state.name,
  //       age: age,
  //       weight: weight,
  //       height: height,
  //       BMI: this.calculateBMI(height).toFixed(1),
  //       water_goal: this.calculateWaterGoal(),
  //       exercise_goal: this.state.exercise,
  //       intake_goal: this.calculateCalorieRec(weight, height, age),
  //       sleep_goal: this.state.sleep
  //     }) 
  //       .then(res => console.log("user saved"))
  //       .catch(err => console.log(err));
  //   } else {
  //     alert("Please make sure you answer all the questions!")
  //   }
  // };

  // // Converts feet to inches
  // convertHeight = () => {
  //   return ((parseInt(this.state.feet) * 12) + parseInt(this.state.inches));
  // };

  // // Calculates BMI using weight in pounds and height in inches
  // calculateBMI = (h) => {
  //   return ((parseInt(this.state.weight) / h / h) * 703);
  // };

  // // Calculates water intake recommendation in ounces based on weight in pounds
  // calculateWaterGoal = () => {
  //   return ((parseInt(this.state.weight) / 2));
  // };

  // // Calculates recommended caloric intake
  // calculateCalorieRec = (weight, height, age) => {
  //   let male_BMR = health.male.BMR(weight, height, age);
  //   let female_BMR = health.female_BMR(weight, height, age);

  //   //Sedentary 
  //   if (isMale && this.state.activity === "sedentary") {
  //     health.male.noActivity(male_BMR);
  //   } 
  //   else if (!isMale && this.state.activity === "sedentary") {
  //     health.female.noActivity(female_BMR);
  //   } 
  //   //Light Activity 
  //   else if (isMale && this.state.activity === "light") {
  //     health.male.lightActivity(male_BMR);
  //   } 
  //   else if (!isMale && this.state.activity === "light") {
  //     health.female.lightActivity(female_BMR);
  //   }  
  //   //Moderate Activity 
  //   else if (isMale && this.state.activity === "moderate") {
  //     health.male.moderateActivity(male_BMR);
  //   } 
  //   else if (!isMale && this.state.activity === "moderate") {
  //     health.female.moderateActivity(female_BMR);
  //   }
  //   //Very Active
  //   else if (isMale && this.state.activity === "veryActive") {
  //     health.male.veryActive(male_BMR);
  //   } 
  //   else if (!isMale && this.state.activity === "veryActive") {
  //     health.female.veryActive(female_BMR);
  //   }
  //   //Extremely Active
  //   else if (isMale && this.state.activity === extremelyActive) {
  //     health.male.extremelyActive(male_BMR);
  //   } 
  //   else if (!isMale && this.state.activity === extremelyActive) {
  //     health.female.extremelyActive(female_BMR);
  //   }
  // }
  render() {
    return (
      <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Container className="containerDay">
        <TextInput label="First Name" 
        value={this.state.name}
        onChange={this.handleInputChange}
        name="name"
        />
        <TextInput label="Age" 
        value={this.state.age}
        onChange={this.handleInputChange}
        name="age"
        />
        <TextInput label="Weight in lbs" 
        value={this.state.weight}
        onChange={this.handleInputChange}
        name="weight"
        />
        <Row>
        <TextInput label="Height Feet" 
        value={this.state.feet}
        onChange={this.handleInputChange}
        name="feet"
        />
        <TextInput label="Inches" 
        value={this.state.inches}
        onChange={this.handleInputChange}
        name="inches"
        />
        </Row>
        <TextInput label="Target Water Consumption" 
        value={this.state.water}
        onChange={this.handleInputChange}
        name="water"
        />
        <TextInput label="Target Weekly Exercise" 
        value={this.state.exercise}
        onChange={this.handleInputChange}
        name="exercise"
        />
        <TextInput label="Target hours of sleep" 
        value={this.state.sleep}
        onChange={this.handleInputChange}
        name="sleep"
        />
        <TextInput label="Target Calories" 
        value={this.state.calories}
        onChange={this.handleInputChange}
        name="calories"
        />
        <Button className="submit" type="submit" waves="light">
            Create Profile!
          <Icon right>
           send
          </Icon>
        </Button>
        </Container>
      </div>
  
    );
  }

  // render() {
  //   return (
  //     <Container fluid>
  //       <Row>
  //         <Col size="md-12">
  //           <Jumbotron>
  //             <h1>Enter User Info</h1>
  //           </Jumbotron>
  //           <form>
  //             <Input
  //               value={this.state.name}
  //               onChange={this.handleInputChange}
  //               name="name"
  //               placeholder="Full Name"
  //             />
  //             <Input
  //               value={this.state.age}
  //               onChange={this.handleInputChange}
  //               name="age"
  //               placeholder="Age"
  //             />
  //             <Input
  //               value={this.state.weight}
  //               onChange={this.handleInputChange}
  //               name="weight"
  //               placeholder="Weight"
  //             />
  //             <Input
  //               value={this.state.feet}
  //               onChange={this.handleInputChange}
  //               name="feet"
  //               placeholder="Feet"
  //             />
  //             <Input
  //               value={this.state.inches}
  //               onChange={this.handleInputChange}
  //               name="inches"
  //               placeholder="Inches"
  //             />
  //             <FormBtn
  //               disabled={!(this.state.name && this.state.age && this.state.weight)}
  //               onClick={this.handleFormSubmit}
  //             >
  //               Create Profile!
  //             </FormBtn>
  //           </form>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
  // }
}

export default User;
