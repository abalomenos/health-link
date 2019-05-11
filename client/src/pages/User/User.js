import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class User extends Component {
  state = {
    user: [],
    name: "",
    age: "",
    weight: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.age && this.state.weight) {
      API.saveUser({
        name: this.state.name,
        age: this.state.age,
        weight: this.state.weight
      })
        .then(res => console.log("user saved"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Enter User Info</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Full Name"
              />
              <Input
                value={this.state.age}
                onChange={this.handleInputChange}
                name="age"
                placeholder="Age"
              />
              <Input
                value={this.state.weight}
                onChange={this.handleInputChange}
                name="weight"
                placeholder="Weight"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.age && this.state.weight)}
                onClick={this.handleFormSubmit}
              >
                Create Profile!
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
