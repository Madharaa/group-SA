import React, { useState } from 'react';
import './navbar.css'; // Import your CSS

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    auctions: false,
    pages: false,
  });

  const toggleDropdown = (section) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" /> {/* Replace with your actual image URL */}
      </div>
      <div className="burger" onClick={() => toggleDropdown('menu')}>
        <span className="burger-icon">&#9776;</span>
      </div>
      <nav className={`nav-links ${isDropdownOpen.menu ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <div className="dropdown" onClick={() => toggleDropdown('auctions')}>
          <a href="#" className="dropdown-link">Auction</a>
          {isDropdownOpen.auctions && (
            <div className="dropdown-content">
              <a href="/Auction-List"> Auction List</a>
              <a href="#">Auction Grid </a>
              <a href="#">Auction Details </a>
            </div>
          )}
        </div>
        <div className="dropdown" onClick={() => toggleDropdown('pages')}>
          <a href="#" className="dropdown-link">Pages</a>
          {isDropdownOpen.pages && (
            <div className="dropdown-content">
              <a href="/FAQ">FAQ</a>
              <a href="#">Page 2</a>
              <a href="#">Page 3</a>
            </div>
          )}
        </div>
        <a href="/ContactUs">Contact</a>
      </nav>
      <div className="icons">
        <a href="#" className="cart-icon">&#128722;</a>
        <a href="/login" className="user-icon">&#128100;</a>
      </div>
    </header>
  );
};

export default Header;
