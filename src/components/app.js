import React, { Component } from 'react';
import BookList from './BookList';
import FilterBook from './FilterBook';
import Paginator from './Paginator';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
            <FilterBook />
            <BookList />
            <Paginator />
        </div>
      </div>
    );
  }
}
