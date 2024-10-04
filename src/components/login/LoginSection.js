import React from 'react';
import './login.css'; // Import your CSS

const LoginSection = () => {
  return (
    <section className="login-section">
      <div className="image-container">
        <img src="https://via.placeholder.com/1200x400" alt="Cover" className="image" /> {/* Replace with your actual image */}
        <div className="overlay-text">
          <h1>Login</h1>
          <a href="#" className="home-img">Home</a>
          <a href="#" className="login-img">Login</a>
        </div>
      </div>

      <div className="login-container">
        <h2>Create an account</h2>
        <p>Let's get started with your 30 days free trial</p>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />

          <div className="remember-forgot">
            <label className="checkbox1"><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="or-signin">Or sign in with</p>
        <div className="social-login">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
        </div>
        <p className="register-link">Don’t have an account? <a href="#">Register Here</a></p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="Car" />
        <p>Join over 25K+ Customers</p>
      </div>
    </section>
  );
};

export default LoginSection;
