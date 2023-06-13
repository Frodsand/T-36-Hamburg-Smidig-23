import React from 'react';
import '../styling/LecturePlanStyle.css';

const LearningOutcomeComponent = ({ learningOutcome }) => {

const splitLearningOutcome = learningOutcome.split('\n');

  return (
    <div>
      <h3 className="learningoutcometitle">Læringsmål</h3>
      {splitLearningOutcome.map((outcome, index) => (
        <p key={index}>{outcome}</p>
      ))}
    </div>
  );
};

export default LearningOutcomeComponent;
