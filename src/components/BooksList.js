import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import Header from "./Header";

class BooksList extends Component {
  render() {
    const books = this.props.books;
    const onChangeShelf = this.props.onChangeShelf;
    return (
      <div className="list-books">
        <Header />
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
          <Link to="/search" className="open-search-link">
            Search
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
