import React from 'react';
import './Footer.css'; // Import your CSS

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <div className="footer-nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Blog</a>
          <a href="#">Auction</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fas fa-gamepad"></i></a>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="footer-terms">
          <a href="#">Terms & Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-copyright">
          <span>Copyright © 2024 Nilamex | Designed By Autworks</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
