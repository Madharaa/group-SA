// Accordion.js
import React, { useState } from 'react';
import './Accordion.css';

const sections = {
  "For Companies": [
    { question: "How do I participate in the car auctions?", answer: "To participate, sign up on our platform, browse available cars, and place your bids." },
    { question: "What types of cars are available for bidding?", answer: "Various types of cars including sedans, SUVs, trucks, and more." },
    { question: "What happens if I win an auction?", answer: "Congratulations! You'll receive an invoice. Choose a payment method, settle the amount, and coordinate pickup details with our team." },
    { question: "What payment methods are accepted?", answer: "We accept credit cards, bank transfers, and other secure payment methods." },
    { question: "Is there a minimum age requirement to participate?", answer: "Yes, participants must be at least 18 years old." },
  ],
  "Auction Purchasing": [
    { question: "How do I make a purchase?", answer: "After winning an auction, follow the payment instructions and arrange for pickup." },
    { question: "Can I cancel a purchase?", answer: "Purchases cannot be canceled once confirmed." }
  ],
  "Draw & Winners": [
    { question: "How are winners chosen?", answer: "Winners are chosen through a transparent auction process." },
    { question: "How do I know if I won?", answer: "You will receive a notification and invoice via email." }
  ],
  "Technical Support": [
    { question: "How do I contact support?", answer: "You can reach support through our contact page or by calling our hotline." }
  ],
};

const Accordion = () => {
  const [selectedSection, setSelectedSection] = useState("For Companies");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setExpandedQuestion(null); // Collapse any open answers when switching sections
  };

  const toggleAnswer = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-sidebar">
        {Object.keys(sections).map((section, index) => (
          <button
            key={index}
            className={`accordion-sidebar-button ${selectedSection === section ? 'active' : ''}`}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="accordion-content">
        {sections[selectedSection].map((item, index) => (
          <div key={index} className="accordion-question-item">
            <div className="accordion-question" onClick={() => toggleAnswer(index)}>
              {item.question}
              <span className="accordion-toggle-icon">{expandedQuestion === index ? '−' : '+'}</span>
            </div>
            {expandedQuestion === index && <div className="accordion-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
