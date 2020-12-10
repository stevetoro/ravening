import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../utils/Yelp';
import './App.css';

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    setBusinesses(businesses);
  }

  return (
    <div className="App">
      <h1>ravening</h1>
      <SearchBar searchYelp={ searchYelp } />
      <BusinessList businesses={ businesses } />
    </div>
  )
};

export default App;