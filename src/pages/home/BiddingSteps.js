import React from 'react';
import './BiddingSteps.css'; // External CSS for styling

const BiddingSteps = () => {
  return (
    <div className="bidding-steps-container">
      {/* Header Section */}
      <div className="bidding-header">
        <h5>How It’s Works</h5>
        <h1>How Bidding <br></br> Works</h1>
        <div className="browsing-button">
          <button>
            Start Browsing <span>➔</span>
          </button>
          <p>Simply place your bids online and bid for top used <br/>
          cars at Surplex</p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <div className="step-icon">
            <img src="./images/sport-car.png" alt="Find the right item" />
          </div>
          <h3>Find the right item</h3>
          <p>Browse or use our search agent. Surplex has numerous used cars on offer.</p>
        </div>

        <div className="step">
          <div className="step-number">2</div>
          <div className="step-icon">
            <img src="./images/bidding.png" alt="Place a bid" />
          </div>
          <h3>Place a bid</h3>
          <p>Place a direct bid or use our bidding agent to achieve the best price for an item.</p>
        </div>

        <div className="step">
          <div className="step-number">3</div>
          <div className="step-icon">
            <img src="./images/pay-card.png" alt="Pay & receive your item" />
          </div>
          <h3>Pay & receive your item</h3>
          <p>Winners receive invoices, pick payment options, and coordinate pickup with our service.</p>
        </div>
      </div>
    </div>
  );
};

export default BiddingSteps;
