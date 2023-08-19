import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleFeedback = event => {
    if (event.target.textContent === 'good') {
      setFeedbacks(prev => ({ ...prev, good: prev.good + 1 }));
    }
    if (event.target.textContent === 'neutral') {
      setFeedbacks(prev => ({ ...prev, neutral: prev.neutral + 1 }));
    }
    if (event.target.textContent === 'bad') {
      setFeedbacks(prev => ({ ...prev, bad: prev.bad + 1 }));
    }
  };
  const countTotalFeedback = () => {
    return feedbacks.good + feedbacks.neutral + feedbacks.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return ((feedbacks.good / countTotalFeedback()) * 100).toFixed(2);
  };
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbacks)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {!feedbacks.good && !feedbacks.neutral && !feedbacks.bad ? (
          <Notification message="There is no Feedback" />
        ) : (
          <Statistics
            feedbacks={feedbacks}
            total={countTotalFeedback()}
            positiveFeedbacks={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
