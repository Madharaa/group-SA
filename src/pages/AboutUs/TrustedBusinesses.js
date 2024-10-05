import React from "react";
import "./TrustedBusinesses.css"; // Import the CSS file
import image8 from './Images/image8.png'; // Correct path to image

const TrustedBusinesses = () => {
  return (
    <div className="trusted-container">
      <h3>Your Partner in Success.</h3>
      <h1>Trusted By 750+ Businesses.</h1>
      <div className="logo-grid">
        <img src={image8} alt="Company Logo 1" /> {/* Updated image path */}
      </div>
    </div>
  );
};

export default TrustedBusinesses;
