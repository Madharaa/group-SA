import React, { useState } from 'react';
import './signup.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <div className="form-card">
          <h2>Create an account</h2>
          <p>Let's get started with your 30 days free trial</p>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="form-options">
              <label>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="signup-button">Sign up</button>
          </form>
          
          <div className="divider">Or sign in with</div>
          
          <div className="social-buttons">
            <button className="google-button">
              <span className="icon">G</span> Google
            </button>
            <button className="facebook-button">
              <span className="icon">f</span> Facebook
            </button>
          </div>
          
          <p className="login-link">
            Don't have an account? <a href="#">Register here</a>
          </p>
        </div>
      </div>
      
      <div className="image-container">
        <div className="image-header">
          <p>Bids & Auctions Your Premier Destination</p>
        </div>
        <div className="main-image">
          <img src="/path-to-your-car-image.jpg" alt="Luxury car on mountain road" />
          <div className="user-count">
            <div className="user-avatars">
              <img src="/avatar1.jpg" alt="User 1" />
              <img src="/avatar2.jpg" alt="User 2" />
              <img src="/avatar3.jpg" alt="User 3" />
              <img src="/avatar4.jpg" alt="User 4" />
              <img src="/avatar5.jpg" alt="User 5" />
            </div>
            <span>Join over <strong>25k+</strong> Customer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;