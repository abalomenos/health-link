import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Navbar, NavItem, Modal, Button} from 'react-materialize';
// import Image from 'burger.jpg';

// import img from './assets/images/burger.jpg';
let img = "./assets/images/burger.jpg"
// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${Image})`
//   }
// };



class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

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

export default Books;
