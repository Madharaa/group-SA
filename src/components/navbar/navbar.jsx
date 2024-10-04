import React from 'react';
import './navbar.css'; // Import your CSS

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="./images/logo.png" alt="Logo" /> {/* Replace with your actual image URL */}
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="#">Auction</a>
        <a href="#">Pages</a>
        <a href="#">Contact</a>
      </nav>
      <div className="icons">
        <a href="#" className="cart-icon">&#128722;</a>
        <a href="/login" className="user-icon">&#128100;</a>
      </div>
    </header>
  );
};

export default Header;
