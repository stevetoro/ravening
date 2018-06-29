import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../utils/Yelp';
import './App.css';

export default class App extends Component {
  state = {
    businesses: []
  }

  searchYelp = async (term, location, sortBy) => {
    const businesses = await Yelp.search(term, location, sortBy);
    this.setState({ businesses });
  }

  render = () => (
    <div className="App">
      <h1>ravening</h1>
      <SearchBar searchYelp={ this.searchYelp } />
      <BusinessList businesses={ this.state.businesses } />
    </div>
  )
};