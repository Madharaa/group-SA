import React from 'react';
import './Stats.css'; // Import the corresponding CSS file

const Stats = () => {
  return (
    <div className="stats-section">
      <div className="stat-circle">
        <h3>25K+</h3>
        <p>Items Auctioned</p>
      </div>
      <div className="stat-circle">
        <h3>7K+</h3>
        <p>Products on Our Site</p>
      </div>
      <div className="stat-circle">
        <h3>5K+</h3>
        <p>Auction Experts</p>
      </div>
      <div className="stat-circle">
        <h3>240K+</h3>
        <p>In Secure Bids</p>
      </div>
    </div>
  );
};

export default Stats;
