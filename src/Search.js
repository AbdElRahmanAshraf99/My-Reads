import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as API from "./BooksAPI";
// import Book from "./Book";
import Shelf from "./Shelf";

class Search extends Component {
  state = {
    // query: "",
    books: [],
  };

  searchBooks = query => {
    API.search(query.trim()).then(books => {
      this.setState({
        books: books && (query === "" || books.error) ? [] : books,
      });
    });
  };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={event => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <Shelf
            onChangeShelf={this.props.onChangeShelf}
            books={this.state.books}
            viewedBooks={this.props.viewedBooks}
          />
        </div>
      </div>
    );
  }
}

export default Search;
