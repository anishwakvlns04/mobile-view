
// src/components/TimelineSection.js
import React from 'react';
import './TimelineSection.css';

function TimelineSection() {
  return (
    <div className="timeline-section">
      <h3>Timeline</h3>
      <ul>
        <li>Registration: Jan 10 - Feb 10</li>
        <li>Idea Submission: Feb 15 - Feb 25</li>
        <li>Final Presentation: March 5</li>
      </ul>
    </div>
  );
}

export default TimelineSection;