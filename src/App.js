import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
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
    showSearchPage: true,
  };

  render() {
    return (
      <div className="App">      
          <Routes>
            <Route exact path="/" element={<BooksList />} />
            <Route path="/search" element={<BooksSearch />} />
          </Routes>
      </div>
    );
  }
}

export default App;
