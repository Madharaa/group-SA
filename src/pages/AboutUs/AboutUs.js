import React from 'react';
import './AboutUs.css'; // Import the CSS
import { FaArrowRight } from 'react-icons/fa'; // Import icon
import image from './Images/image.png';
 
const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header Section */}
      <div className="header">
        <h1>About Us</h1>
        <div className="breadcrumbs">
          
          <span>Home </span> &gt; <span>About Us</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Images and Text */}
        <div className="image-section">
        <img src={image} alt="Team Meeting" className="image-one" />

         
        </div>

        {/* Information Text */}
        <div className="text-section">
          <h2>Corporate Social Responsibility</h2>
          <p>
            Our mission is to redefine the auction experience, offering a seamless and exciting platform
            that connects bidders with extraordinary opportunities. Whether you're seeking rare collectibles,
            we provide a reliable and secure environment for both buyers and sellers.
          </p>
          <h3>Online Bidding</h3>
          <p>
            Join our growing community of passionate bidders and sellers who have auctions. Explore, bid, and experience
            the excitement of winning at Delorin. Your next great find awaits!
          </p>
          <button className="more-button">
            <FaArrowRight /> About More
          </button>
        </div>

        {/* Experience Section */}
        <div className="experience">
          <span>45+<br />Years Experience</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
