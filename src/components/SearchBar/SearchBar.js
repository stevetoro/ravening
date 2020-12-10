import React, { useState } from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SearchBar = ({ searchYelp }) => {
  const [search, setSearch] = useState({
    term: '',
    location: '',
    sortBy: 'best_match',
  })

  const getSortByClass = sortByOption => {
    return sortByOption == search.sortBy ? 'active' : '';
  }

  const handleSortByChange = sortByOption => () => {
    setSearch(prevSearch => ({
      ...prevSearch,
      sortBy: sortByOption
    }))
  }

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    setSearch(prevSearch => ({
      ...prevSearch,
      [name]: value
    }))
  }

  const handleSearch = event => {
    const { term, location, sortBy } = search;
    searchYelp(term, location, sortBy);
    event.preventDefault();
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li 
          key={ sortByOptionValue } 
          className={ getSortByClass(sortByOptionValue) }
          onClick={ handleSortByChange(sortByOptionValue) }>
            { sortByOption }
        </li>
      );
    });
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          { renderSortByOptions() }
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" name="term" onChange={ handleInputChange } />
        <input placeholder="Where?" name="location" onChange={ handleInputChange } />
      </div>
      <div className="SearchBar-submit">
        <a onClick={ handleSearch } >Let's Go</a>
      </div>
    </div>
  )
};

export default SearchBar;