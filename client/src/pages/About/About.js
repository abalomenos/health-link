import React, { Component } from "react";
import {Container, Row, Col} from 'react-materialize';

const backgroundImg ='./assets/images/background1.jpg'

class About extends Component {


  componentDidMount() {
    
  };


  render() {
    return (
      <div className="mainWrapper" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <Container className="containerAbout">
          <Row>
            <Col>
            
              
            
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
