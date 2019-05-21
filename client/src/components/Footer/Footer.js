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
                            <hr/>
                            <li>
                                <ul>
                                    <li className="teamMember">
                                        Argiris Balomenos
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/argirisbalomenos" target="_blank" title="Connect with me on LinkedIn">
                                            <i class="fab fa-linkedin-in"></i>
                                            <br/>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://github.com/abalomenos" target="_blank" title="View more Projects on GitHub">
                                            <i class="fab fa-github"></i>
                                            <br/>
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="teamMember">
                                        Charlie Glass
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/charles-glass-57512412a/" target="_blank" title="Connect with me on LinkedIn">
                                            <i class="fab fa-linkedin-in"></i>
                                            <br/>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://github.com/charliedglass" target="_blank" title="View more Projects on GitHub">
                                            <i class="fab fa-github"></i>
                                            <br/>
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="teamMember">
                                        Annie Jackson
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/annie-jackson-750/" target="_blank" title="Connect with me on LinkedIn">
                                            <i class="fab fa-linkedin-in"></i>
                                            <br/>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://github.com/jacksona750" target="_blank" title="View more Projects on GitHub">
                                            <i class="fab fa-github"></i>
                                            <br/>
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li className="teamMember">
                                        Irene Villafane
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/irene-villafane-868181130/" target="_blank" title="Connect with me on LinkedIn">
                                            <i class="fab fa-linkedin-in"></i>
                                            <br/>
                                            LinkedIn
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="https://github.com/ivillafanesanz" target="_blank" title="View more Projects on GitHub">
                                            <i class="fab fa-github"></i>
                                            <br/>
                                            GitHub
                                        </a>
                                    </li>
                                </ul>
                            </li>
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
  