import React from 'react';
import './Footer.css'; // Import your CSS

const Footer = () => {
  return (
    <footer> {/* Images of Cars */}
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6">
            <div className="text-section">
              <h1>Auction <br /> Drive Success <br /> Home</h1>
              <div className="contact-section">
                <h6>Say Hello</h6>
                <a href="mailto:cruz@example.com" className="email-link">cruz@example.com</a>
                <div className="bid-button">
                  <a href="/" className="btn btn-bid">Place a bid <i className="fas fa-arrow-up-right"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Car Cards) */}
          <div className="col-md-6">
            <div className="cards-container">
              <div className="car-card yellow">
                <img src="./images/kawasaki.png" alt="Yellow Car" />
              </div>
              <div className="car-card green">
                <img src="./images/homecar.png" alt="White Car" />
                <div className="place-bid">
                  <a href="/">Place a bid <i className="fas fa-arrow-up-right"></i></a>
                </div>
              </div>
              <div className="car-card blue">
                <img src="./images/lambogreen.png"alt="Black Car" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
