import React, { Component } from "react";
import {Container, Row, Col} from 'react-materialize';
import { Carousel } from 'react-responsive-carousel';

// CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './About.css';

// Images
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
              <Carousel axis="horizontal" dynamicHeight={true} showArrows={true} infiniteLoop={true} autoPlay={true} stopOnHover={true} transitionTime={500} interval={3000}>
                  <div>
                      <img src="./assets/images/demo1.png" />
                      {/* <p className="legend">Daily Stats</p> */}
                  </div>
                  <div>
                  <img src="./assets/images/demo2.png" />
                      {/* <p className="legend">Weekly Stats</p> */}
                  </div>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
