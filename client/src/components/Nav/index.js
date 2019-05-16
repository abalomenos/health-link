import React, { Component } from "react";
import { Navbar, NavItem, Modal, Button, TextInput, Icon} from 'react-materialize';

class Nav extends Component {
    state = {
      open: false,
      width: window.innerWidth
    };
  
    updateWidth = () => {
      const newState = { width: window.innerWidth };
  
      if (this.state.open && newState.width > 991) {
        newState.open = false;
      }
  
      this.setState(newState);
    };
  
    toggleNav = () => {
      this.setState({ open: !this.state.open });
    };
  
    componentDidMount() {
      window.addEventListener("resize", this.updateWidth);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWidth);
    }
  
    render() {
      return (
        <div>

        <Navbar brand={<a />} alignLinks="right">
          <Modal trigger={<NavItem href="">Login</NavItem>}>
            <TextInput email validate label="Email" />
            <TextInput password label="Password" />
          </Modal>
  
          <Modal trigger={<NavItem href="">Create Profile</NavItem>}>
            <TextInput label="First Name" />
            <TextInput email validate label="Email" />
            <TextInput password label="Password" />
            <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
          </Modal>
  
        </Navbar>
        
      </div>
      );
    }
  }
  
  export default Nav;
  