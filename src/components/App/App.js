import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import './App.css';

const business = {
  imageSrc: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burgerbear-077-1515519914.jpg',
  name: 'Stokey Bears',
  address: '129 Stoke Newington High St',
  city: 'London',
  state: 'UK',
  zipCode: 'N16 0PH',
  category: 'Burgers',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
]

export default class App extends Component {

  searchYelp = (item, location, sortBy) => {
    console.log(`Searching Yelp with ${item}, ${location}, ${sortBy}.`);
  }

  render = () => (
    <div className="App">
      <h1>ravening</h1>
      <SearchBar searchYelp={ this.searchYelp } />
      <BusinessList businesses={ businesses } />
    </div>
  )
};