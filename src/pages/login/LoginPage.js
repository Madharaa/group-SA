import React from 'react';
import './login.css';

const LoginPage = () => {
  return (
    <div className="login-page-container">  {/* Unique class for container */}
      <div className="login-section">
        <h2 className="login-title">Create an account</h2>  {/* Unique class */}
        <p className="login-subtitle">Let’s get started with your 30 days free trial</p>  {/* Unique class */}
        
        <form className="login-form">
          <input type="text" placeholder="Username" className="login-input" />  {/* Unique class */}
          <input type="password" placeholder="Password" className="login-input" />  {/* Unique class */}
          
          <div className="login-options">  {/* Unique class */}
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forget Password?</a>  {/* Unique class */}
          </div>
          
          <button type="submit" className="login-btn">Login</button>
          
          <div className="login-divider">Or sign in with</div>  {/* Unique class */}
          
          <div className="social-login">
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>
          
          <p className="register-text">
            Don't have an account? <a href="/Signup" className="register-link">Sign Up</a>  {/* Unique class */}
          </p>
        </form>
      </div>

      <div className="promo-section">  {/* Unique class */}
        <div className="promo-text">Bids & Auctions Your Premier Destination</div>
        <img src="./images/loginpagebackground.jpg" alt="Car" className="car-image" />  {/* Unique class */}
        <div className="customer-info">
          <img src="./images/image7.jpeg" alt="Customers" className="customer-icons" />  {/* Unique class */}
          <p>Join over <span>25k+</span> Customers</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
