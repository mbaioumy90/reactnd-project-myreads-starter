import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class BooksList extends Component {
  render() {
    const books = this.props.books;
    const onChangeShelf = this.props.onChangeShelf;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* add shelf component */}
            <Shelf
              section="Currently Reading"
              books={books}
              category="currentlyReading"
              onChangeShelf={onChangeShelf}
            />
            <Shelf
              section="Want to Read"
              books={books}
              category="wantToRead"
              onChangeShelf={onChangeShelf}
            />
            <Shelf
              section="Read"
              books={books}
              category="read"
              onChangeShelf={onChangeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          {/* <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button> */}
          <Link to="/search" className="open-search-link">
            {" "}
            Close
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
