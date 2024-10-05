import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Team.css'; // Import the CSS

// Import images from the Images folder
import image1 from './Images/image1.jpeg';
import image2 from './Images/image2.jpeg';
import image3 from './Images/image3.jpeg';
import image4 from './Images/image4.jpeg';

const teamMembers = [
  {
    name: 'Robert Fox',
    role: 'VP Of Security',
    image: image1, // Updated image
    isFounder: true,
  },
  {
    name: 'Courtney Henry',
    role: 'CEO & Founder',
    image: image2, // Updated image
    isFounder: true,
  },
  {
    name: 'Dianne Russell',
    role: 'VP Of Design',
    image: image3, // Updated image
    isFounder: true,
  },
  {
    name: 'Brooklyn Simmons',
    role: 'CEO & Founder',
    image: image4, // Updated image
    isFounder: true,
  },
];

const Team = () => {
  const [visibleMemberIndex, setVisibleMemberIndex] = useState(null);

  const toggleIcons = (index) => {
    setVisibleMemberIndex(visibleMemberIndex === index ? null : index);
  };

  return (
    <div className="team-container">
      <h2 className="team-header">Introducing Our Team</h2>
      <p className="team-description">If so, could you please provide more details or specify what type of content you're looking for regarding your team?</p>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className={member.isFounder ? 'founder-role' : 'role'}>{member.role}</p>
            </div>
            {member.isFounder && (
              <div className="action-buttons">
                <button className="action-icon" onClick={() => toggleIcons(index)}>
                  {visibleMemberIndex === index ? '-' : '+'}
                </button>
                {visibleMemberIndex === index && (
                  <div className="social-icons">
                    <div className="icon-box">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="social-icon" />
                      </a>
                    </div>
                    <div className="icon-box">
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="social-icon" />
                      </a>
                    </div>
                    <div className="icon-box">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
