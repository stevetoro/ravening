import React from 'react';
import './Business.css';

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

const Business = () => (
  <div className="Business">
    <div className="image-container">
      <img src={ business.imageSrc } alt=''/>
    </div>
    <h2>{ business.name }</h2>
    <div className="Business-information">
      <div className="Business-address">
        <p>{ business.address }</p>
        <p>{ business.city }</p>
        <p>{ business.state } { business.zipCode }</p>
      </div>
      <div className="Business-reviews">
        <h3>{ business.category }</h3>
        <h3 className="rating">{ business.rating } stars</h3>
        <p>{ business.reviewCount } reviews</p>
      </div>
    </div>
  </div>
);

export default Business;