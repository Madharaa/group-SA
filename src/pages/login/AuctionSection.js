import React from 'react';
import './App.css'; // Import your CSS

const AuctionSection = () => {
  return (
    <section className="auction-section">
      <div className="auction-header">
        <h1>Auction</h1>
        <h1> Drive Success</h1>
        <h1>Home</h1>
      </div>

      <div className="bid-section">
        <div className="email-bid-container">
          <p className="hello-text">Say Hello</p>
          <div className="email-bid-wrapper">
            <input type="text" placeholder="cruz@example.com" className="email-input" />
            <button className="bid-button">
              Place a bid
              <span className="arrow-icon">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionSection;
