// src/components/CarListing.js
import React from 'react';
import './CarListing.css';

const CarListing = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h2>{car.name}</h2>
        <p><strong>Listing ID:</strong> {car.listingId}</p>
        <p><strong>Item#:</strong> {car.itemId}</p>
        <div className="car-info">
          <p>🕒 Closes in: {car.closesIn}</p>
          <p>📊 Bids: {car.bids}</p>
        </div>
        <div className="car-price">
          <h3>${car.price}</h3>
          <button className="bid-button">Place a bid</button>
        </div>
      </div>
    </div>
  );
};

export default CarListing;
