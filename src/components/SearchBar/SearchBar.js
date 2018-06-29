import React, { Component } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default class SearchBar extends Component {
  state = {
    term: '',
    location: '',
    sortBy: 'best_match',
  }

  getSortByClass = sortByOption => {
    return sortByOption == this.state.sortBy ? 'active' : '';
  }

  handleSortByChange = sortByOption => () => {
    this.setState({ sortBy: sortByOption });
  }

  handleInputChange = name => event => {
    this.setState({ [name]: event.target.value });
  }

  handleSearch = event => {
    const { term, location, sortBy } = this.state;
    this.props.searchYelp(term, location, sortBy);
    event.preventDefault();
  }

  renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li 
          key={ sortByOptionValue } 
          className={ this.getSortByClass(sortByOptionValue) }
          onClick={ this.handleSortByChange(sortByOptionValue) }>
            { sortByOption }
        </li>
      );
    });
  }

  render = () => (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          { this.renderSortByOptions() }
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" onChange={ this.handleInputChange('term') }/>
        <input placeholder="Where?" onChange={ this.handleInputChange('location') } />
      </div>
      <div className="SearchBar-submit">
        <a onClick={ this.handleSearch } >Let's Go</a>
      </div>
    </div>
  )
};