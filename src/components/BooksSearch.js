import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

class BooksSearch extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.props.onChangeSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* Book */}
            {this.props.isFound
              ? this.props.booksResult.map((book) => (
                  <Book
                    key={book.id}
                    book={book}
                    onChangeShelf={this.props.onChangeShelf}
                  />
                ))
              : this.props.booksResult}
          </ol>
        </div>
      </div>
    );
  }
}

export default BooksSearch;
