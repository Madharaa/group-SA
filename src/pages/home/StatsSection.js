import React from 'react';
import './StatsSection.css'; // CSS file for styling

function StatsSection() {
  return (
    <div className="stats-container-all">
    <div className="stats-container">
      <div className="stat-item">
        <i className="fas fa-users"></i>
        <p><strong>5,600+</strong></p>
        <p>Happy Customer</p>
      </div>
      <div className="stat-item">
        <i className="fas fa-comments"></i>
        <p><strong>1,3750+</strong></p>
        <p>Good Reviews</p>
      </div>
      <div className="stat-item">
        <i className="fas fa-smile"></i>
        <p><strong>4,690+</strong></p>
        <p>Winner Customer</p>
      </div>
      <div className="stat-item">
        <i className="fas fa-comment-alt"></i>
        <p><strong>790+</strong></p>
        <p>New Comments</p>
      </div>
    </div>
    </div>
  );
}


export default StatsSection;
