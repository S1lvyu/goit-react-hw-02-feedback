import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul onClick={onLeaveFeedback} className={styles.list}>
      {options.map((el, index) => {
        return (
          <li key={index} className={styles.list__element}>
            <button type="button" className={styles.button}>
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
FeedbackOptions.prototype = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
