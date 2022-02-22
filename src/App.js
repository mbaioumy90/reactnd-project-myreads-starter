import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import BooksSearch from "./components/BooksSearch";

class App extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: true,
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
    debugger;
    await BooksAPI.update(book, shelf);
    await BooksAPI.getAll().then((res) => {
      this.setState({
        books: res,
      });
    });
    this.getSearchedBooks(this.state.search);
  };

  onChangeSearch = async (event) => {
    debugger;
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
    }); // then
    console.log("Search");
    console.log(this.state.BooksSearch);
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
        </Routes>
      </div>
    );
  }
}

export default App;
