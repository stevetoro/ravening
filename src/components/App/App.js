import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

import './App.css';

export default class App extends Component {
  render = () => (
    <div className="App">
      <h1>ravening</h1>
      <SearchBar />
      <BusinessList />
    </div>
  )
};