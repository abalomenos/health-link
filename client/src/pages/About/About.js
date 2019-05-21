import React, { Component } from "react";
import { Container, Row, Col, Slide, Slider, Caption } from 'react-materialize';
import { Carousel } from 'react-responsive-carousel';

// CSS
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './About.css';

// Images
const backgroundImg = './assets/images/nutrition5.jpg'
const first = './assets/images/workout1.jpg'
const second = './assets/images/water1.jpg'
const third = './assets/images/sleep2.jpg'
const fourth = './assets/images/health.jpg'

class About extends Component {

  componentDidMount() {

  };


  render() {
    return (


      <div className="mainWrapper" >
        <Slider className="slider">
          <Slide image={<img src={first} />}>
            <Caption>
              <h3>
                Welcome to Health Link!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                Your portal to a healthier life.
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src={backgroundImg} />}>
            <Caption placement="left">
              <h3>
                Eat healthier!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                We count the calories for you!
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src={second} />}>
            <Caption placement="right">
              <h3 className="light teal-text text-darken-4">
                60% of your body is water.
              </h3>
              <h5 className="light teal-text text-darken-4">
                We help you remember to drink!
              </h5>
            </Caption>
          </Slide>
          <Slide image={<img src={third} />}>
            <Caption>
              <h3>
                But a healthier life includes sleep too!
              </h3>
              <h5 className="light grey-text text-lighten-3">
                We also take this into account.
              </h5>
            </Caption>
          </Slide>
        </Slider>
        

        <Container>
          <Row className="info">
            <Col className="s12">
              <h5>
                A healthy life is a combination of things, not just "vegetables."
              </h5>
              <p>
                Come see how we can use your data to help you achieve your goals!
              </p>
              <p>               -The Health Link team</p>
            </Col>
          </Row>
          <Row className="health"> 
            
            <img src={fourth} />

          </Row>
        </Container>





       
      </div>
    );
  }
}

export default About;
