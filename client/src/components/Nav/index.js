import React, { Component } from "react";
import { Navbar, NavItem, Modal, Button, TextInput, Icon} from 'react-materialize';
import AuthService from '../AuthService';
import API from '../../utils/API';
import { withRouter } from 'react-router-dom';

class Nav extends Component {

  constructor() {
    super();
    this.Auth = new AuthService();
  }
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

    showNavigation = () => {
      if (this.Auth.loggedIn()) {
          return (
            <Navbar brand={<a />} alignLinks="right">
              <div>
                <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
              </div>
              </Navbar>
          );
      } else {
          return (
            <div>
              <Navbar brand={<a />} alignLinks="right">
              <Modal trigger={<NavItem href="">Login</NavItem>}>
                <form onSubmit={this.handleFormLoginSubmit}>
                  <TextInput email validate label="Email" name = "email" onChange = {this.handleChange}/>
                  <TextInput password label="Password" name = "password" onChange = {this.handleChange}/>
                  <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
                </form>
            </Modal>
    
            <Modal trigger={<NavItem href="">Create Profile</NavItem>}>
              <form onSubmit={this.handleFormSignupSubmit}>
                <TextInput label="Name" name = "name" onChange = {this.handleChange}/>
                <TextInput label="Age" name = "age" onChange = {this.handleChange}/>
                <TextInput label="Height (inches)" name = "height" onChange = {this.handleChange}/>
                <TextInput label="Weight (lbs)" name = "weight" onChange = {this.handleChange}/>
                <TextInput email validate label="Email" name = "email" onChange = {this.handleChange}/>
                <TextInput password label="Password" name = "password" onChange = {this.handleChange}/>
                <Button type="submit" waves="light">Submit<Icon right>send</Icon></Button>
              </form>
            </Modal>
            </Navbar>
          </div>
          );
      }
  };

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
        [name]: value
    });
    console.log(event.target);
    console.log(this.state);
  };

  signIn() {
    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their profile page
        this.props.history.replace(`/day`);
      })
      .catch(err => {
        alert(err.response.data.message)
      });
  }

  handleFormLoginSubmit = event => {
    event.preventDefault();
    this.signIn();
  }

  handleFormSignupSubmit = event => {
    event.preventDefault();
    API.signUpUser(this.state.email, this.state.password, this.state.name, this.state.age, this.state.weight, this.state.height)
      .then(res => {
        // once the user has signed up
        // log them in
        this.signIn();
      })
      .catch(err => alert(err));
  }
  
    toggleNav = () => {
      this.setState({ open: !this.state.open });
    };

    componentWillMount() {
      if (this.Auth.loggedIn() && this.props.history.location.pathname == '/') {
        this.props.history.replace('/day');
        console.log("history " + JSON.stringify(this.props.history));
      }
    }
  
    componentDidMount() {
      window.addEventListener("resize", this.updateWidth);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWidth);
    }
  
    render() {
      return (
        <div>
        {this.showNavigation()}
        
      </div>
      );
    }
  }
  
  export default withRouter(Nav);
