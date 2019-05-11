import React from "react";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
    </div>
  );
}

state = {
  users: [],
  query: "",
};

handleInputChange = event => {
  const { value } = event.target;
  this.setState({
    query: value
  });
};

searchBook = () => {
  API.getBook(this.state.query)
    .then(res => this.setState({ books: res.data.items }))
    .catch(() =>
      this.setState({
        books: [],
        message: "No New Books Found, Try a Different Query"
      })
    );
};

handleFormSubmit = event => {
  event.preventDefault();
  this.searchBook();
};

handleBookSave = id => {
  const book = this.state.books.find(book => book.id === id);
  API.saveBook({
    key: book.id,
    title: book.volumeInfo.title,
    link: book.volumeInfo.infoLink,
    authors: book.volumeInfo.authors.join(", "),
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail
  }).then(alert("Book Saved!"));
};
export default About;
