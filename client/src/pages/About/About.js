import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Navbar, NavItem, Modal, Button} from 'react-materialize';

let img = "./assets/images/burger.jpg"


class About extends Component {
render() {
  return (
    <div>

      <Navbar brand={<a />} alignLinks="right">
        <Modal trigger={<NavItem href="">Login</NavItem>}>

        </Modal>

        <Modal trigger={<NavItem href="">Create Profile</NavItem>}>

        </Modal>

      </Navbar>
      <div className="background" style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "800px"}}>

      </div>

    </div>



  );
}
}

export default About;
