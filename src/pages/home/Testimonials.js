import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css"; // Import CSS file

// Import images from the Images folder
// import image5 from './Images/image5.jpeg';
// import image6 from './Images/image6.jpeg';
// import image7 from './Images/image7.jpeg';

const TestimonialCard = ({ imgSrc, name, location, review, rating }) => {
  return (
    <div className="testimonial-card">
      <FontAwesomeIcon icon={faQuoteLeft} size="2x" className="quote-icon" />
      <p>{review}</p>
      <div className="testimonial-footer">
        <img src={imgSrc} alt={name} className="testimonial-image" />
        <div>
          <h4>{name}</h4>
          <p>{location}</p>
        </div>
      </div>
      <div className="stars">
        {Array(rating).fill().map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="intro-section">
        <h3>Auction Triumphs</h3>
        <h1>Triumphant Bidder Journeys</h1>
        <p>Effortless bids, unbeatable prices. My dream car, a reality. Best online car auction experience ever!</p>
      </div>

      <div className="testimonial-grid">
        <TestimonialCard
          imgSrc="./images/image5.jpeg" // Updated image path
          name="Malan David"
          location="China"
          review="What sets this auction site apart is the diverse selection. Whether you're into car classics, luxury, or everyday cars, you'll find something that suits your taste. A car lover’s paradise!"
          rating={5}
        />
        <TestimonialCard
          imgSrc="./images/image6.jpeg" // Updated image path
          name="Andrew Russel"
          location="Russia"
          review="Impressed with the speed and efficiency of this auction site. From placing a bid to winning the car, the process is quick. A great platform for anyone looking to buy or sell cars!"
          rating={5}
        />
        <TestimonialCard
          imgSrc="./images/image7.jpeg" // Updated image path
          name="Theresa Webb"
          location="China"
          review="What sets this auction site apart is the diverse selection. Whether you're into car classics, luxury, or everyday cars, you'll find something that suits your taste. A car lover’s paradise!"
          rating={5}
        />
      </div>
    </div>
  );
};

export default Testimonials;
