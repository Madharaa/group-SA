import React from "react";
import "./TermsService.css";  

const TermsService = () => {
  return (
    <div className="terms-container">
      <div className="terms-header">
        <h1>Terms & Service</h1>
        <p>Welcome to Nilamex These Terms of Service govern your use of our website and services.</p>
        <p>By accesssing or using our website, you agree to comply with these terms</p>
      </div>

      <div className="terms-body">
         
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. </p>
        
        <h3>2. Eligibility</h3>
        <p>You must be at least 18 years old to use our website or participate in auctions. By using our website, you represent and warrant that you are at least 18 years old.</p>
        
        <h3>3. Registration</h3>
        <p>To participate in auctions, you may be required to register an account with us. You agree to provide accurate and complete information during the registration process and to keep your account information up to date.</p>
        
        <h3>4. Bidding and Purchases</h3>
        <p>Bidding on items in our auctions constitutes a binding contract to purchase the item if you are the winning bidder. All sales are final, and bids cannot be retracted once placed.</p>
        
        <h3>5. Payment</h3>
        <p>Winning bidders are required to make payment for their purchases within the specified timeframe. Failure to make timely payment may result in cancellation of the transaction and suspension of your account.</p>
        
        <h3>6. Shipping and Pickup</h3>
        <p>Buyers are responsible for arranging shipping or pickup of their purchases. We may provide assistance in coordinating shipping, but ultimately, it is the buyer's responsibility to ensure their items are received.</p>
        
        <h3>7. Prohibited Conduct</h3>
        <p>You agree not to engage in any conduct that violates these Terms of Service or any applicable laws or regulations. This includes but is not limited to
        <b><ul><li>Using our website for any unlawful purpose</li>
        <li>Interfering with the operation of our website</li>
        <li>Posting or transmitting unauthorized content</li>
        <li>Impersonating another person or entity</li></ul></b>
       </p>
        
        <h3>8. Intellectual Property</h3>
        <p>All content on our website, including text, graphics, logos, and images, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or transmit any content from our website without our prior written consent.</p>
      </div>

    </div>
  );
};

export default TermsService;
