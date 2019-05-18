import React, { Component } from "react";
import {Footer, Row, Col, Container} from 'react-materialize';

import './Footer.css';

class Foot extends Component {
  
    render() {
        return (
            <div>
                <Footer
                    copyrights= {
                        <div className="black-text">
                            Health Link {'\u00A9'} 2019
                        </div>
                    }
                    moreLinks={<a />}
                    links={
                        <ul>
                            <p className="black-text center-align">
                                Team
                            </p>
                            <li><a className="black-text text-lighten-1" href="#!">Argiris Balomenos</a></li>
                            <li><a className="black-text text-lighten-1" href="#!">Charlie Glass</a></li>
                            <li><a className="black-text text-lighten-1" href="#!">Anne Jackson</a></li>
                            <li><a className="black-text text-lighten-1" href="#!">Irene Villafane</a></li>
                        </ul>
                    }
                    className="footer"
                    >
                    <Container>
                        <Row>
                            <Col  className="s12">
                                <h5 className="black-text">
                                    Health Link
                                </h5>
                                <p className="black-text">
                                    Your one stop for Health and Fitness
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Footer>
            </div>
        );
    }
}
  
export default Foot;
  