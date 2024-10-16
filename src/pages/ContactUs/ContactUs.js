import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <div className="info-item">
          <div className="icon address-icon"></div>
          <h3>ADDRESS LINK</h3>
          <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
        </div>
        <div className="info-item purple">
          <div className="icon phone-icon"></div>
          <h3>PHONE NUMBER</h3>
          <p>(201) 555-0124</p>
        </div>
        <div className="info-item">
          <div className="icon mail-icon"></div>
          <h3>MAIL ADDRESS</h3>
          <p>dolores.chambers@example.com</p>
        </div>
      </div>

      <div className="content-section">
        <div className="image-container">
          <img src="/path-to-your-gavel-image.jpg" alt="Gavel" />
        </div>
        <div className="form-container">
          <h2>Our Contact</h2>
          <h1>Get in Touch</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Your Address"
              value={formData.address}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Type Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        {/* Replace this with an actual map component */}
        <div className="placeholder-map">Map of Bangladesh</div>
      </div>
    </div>
  );
};

export default ContactPage;