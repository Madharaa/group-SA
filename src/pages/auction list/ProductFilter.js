import React from 'react';
import './ProductFilter.css'; // Import the CSS
import { FaTh, FaBars } from 'react-icons/fa'; // Import grid and list icons

const ProductFilter = () => {
  return (
    <div className="product-filter-container">
      <div className="search-box">
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="result-info">
        <span>Showing 1–9 of 37 results</span>
      </div>

      <div className="sorting">
        <select>
          <option value="default">Default sorting</option>
          <option value="popularity">Sort by popularity</option>
          <option value="rating">Sort by rating</option>
          <option value="date">Sort by latest</option>
        </select>
      </div>

      <div className="view-toggle">
        <button className="grid-view active">
          <FaTh />
        </button>
        <button className="list-view">
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
