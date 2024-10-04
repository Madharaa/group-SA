import React from 'react';
import './HeroSection.css'; // Styling for the hero section

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-text">
      <h1>Real-Time <span class="red-text">Car</span> </h1>
      <h2>Auctioning</h2>
        <p>Seize instant excitement:Bit,triumph, and swiftly own your<br></br>
          dream car through our real-time auction platform
        </p>
        <button>Start Exploring</button>
      </div>
      <div className="hero-image">
        <img src="./images/homecar.png" alt="Car" />
      </div>
    </section>
  );
}

export default HeroSection;
