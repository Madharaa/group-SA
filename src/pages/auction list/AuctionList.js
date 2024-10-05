import React from 'react';
import './AuctionList.css'; // Import the CSS
import { FaGavel } from 'react-icons/fa'; // Import gavel icon
import { FaArrowDown } from 'react-icons/fa'; // Import arrow down icon

const AuctionList = () => {
  return (
    <div className="auction-list-container">
      {/* Header Section */}
      <div className="auction-header">
        <div className="auction-title">
          <h1>Auction List</h1>
          <div className="breadcrumbs">
            <span>Home</span> &gt; <span>Auction List</span>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="decorative-elements">
          <FaGavel className="gavel-icon" /> {/* Gavel icon */}
          <div className="scroll-down">
            <FaArrowDown className="scroll-icon" />
            <span>Scroll Down</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionList;
