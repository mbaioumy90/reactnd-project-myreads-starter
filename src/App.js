import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import BooksSearch from "./components/BooksSearch";
import NotFound from './NotFound';

class App extends Component {
  state = {
    books: [],
    booksResult: [],
    search: "",
    isFound: false,
  };
  /* load books on load page */
  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
  }

  /* update book in new shelf */
  onChangeShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
    this.getSearchedBooks(this.state.search);
  };

  onChangeSearch = async (event) => {
    await this.setState({
      search: event.target.value,
    });
    console.log(this.state.search);
    this.getSearchedBooks(this.state.search);
  };
  getSearchedBooks = async (search) => {
    await BooksAPI.search(search).then((res) => {
      if (res && !res.error) {
        this.setState({
          booksResult: res.map((booksSearch) => {
            this.state.books.forEach((book) => {
              if (booksSearch.id === book.id) booksSearch.shelf = book.shelf;
            });
            return booksSearch;
          }),
          isFound: true,
        });
      } else {
        this.setState({
          booksResult: `No result for: " ${this.state.search} "`,
          isFound: false,
        });
      }
    }); 
  };

  render() {
    return (
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <BooksList
                books={this.state.books}
                onChangeShelf={this.onChangeShelf}
              />
            }
          />
          <Route
            path="/search"
            element={
              <BooksSearch
                onChangeSearch={this.onChangeSearch}
                search={this.state.search}
                booksResult={this.state.booksResult}
                onChangeShelf={this.onChangeShelf}
                isFound={this.state.isFound}
              />
            }
          />
          <Route  path='*' exact={true} element={<NotFound />} /> 
        </Routes>
      </div>
    );
  }
}
App.propTypes = {
  books: PropTypes.array,
  booksResult: PropTypes.array,
  search: PropTypes.string,
  isFound: PropTypes.bool,
};
export default App;
