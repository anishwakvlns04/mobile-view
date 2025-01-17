import React from 'react';
import './ChallengesSection.css';
import aiIcon from './assets/ai.jpg'; // AI icon
import mlIcon from './assets/ml.jpg'; // Machine Learning icon
import dataIcon from './assets/dv.jpg'; // Data Visualization icon

function ChallengesSection() {
  const challenges = [
    { id: 1, icon: aiIcon, title: 'AI in Healthcare' },
    { id: 2, icon: mlIcon, title: 'Machine Learning Competition' },
    { id: 3, icon: dataIcon, title: 'Data Visualization' },
  ];

  return (
    <div className="challenges-section">
      <h3>Challenges</h3>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id} className="challenge-item">
            <div className="challenge-info">
              <img src={challenge.icon} alt={`${challenge.title} Icon`} className="challenge-icon" />
              <span>{challenge.title}</span>
            </div>
            <button className="view-more-btn">View More</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChallengesSection;
