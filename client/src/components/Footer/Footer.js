import React, { Component } from "react";
import {Footer, Row, Col, Container} from 'react-materialize';

import './Footer.css';

class Foot extends Component {
  
    render() {
        return (
            <div>
                <Footer
                    copyrights= {
                        `Health Link \u00A9 2019`
                    }
                    // moreLinks={<a />}
                    links={
                        <ul>
                            <p className="center-align">
                                Team
                            </p>
                            <li><a className="text-lighten-1" href="#!">Argiris Balomenos</a></li>
                            <li><a className="text-lighten-1" href="#!">Charlie Glass</a></li>
                            <li><a className="text-lighten-1" href="#!">Anne Jackson</a></li>
                            <li><a className="text-lighten-1" href="#!">Irene Villafane</a></li>
                        </ul>
                    }
                    className="footer"
                    >
                    <Container>
                        <Row>
                            <Col  className="s12">
                                <h5>
                                    Health Link
                                </h5>
                                <p>
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
  