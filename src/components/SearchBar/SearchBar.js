import React, { useState } from 'react';
import SortByOptions from '../SortByOptions/SortByOptions';
import './SearchBar.css';

const SearchBar = ({ searchYelp }) => {
  const [search, setSearch] = useState({
    term: '',
    location: '',
    sortBy: 'best_match',
  })

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

  return (
    <div className="SearchBar">
      <SortByOptions active={ search.sortBy } onSortByChange={ handleSortByChange } />
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" name="term" onChange={ handleInputChange } />
        <input placeholder="Where? (required)" name="location" onChange={ handleInputChange } />
      </div>
      <div className="SearchBar-submit">
        <a onClick={ handleSearch } >Let's Go</a>
      </div>
    </div>
  )
};

export default SearchBar;