import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackBtnsStyle } from './FeedbackBtns.styled';

const FeedbackBtns = ({ options, onLeaveFeedback }) => (
  <FeedbackBtnsStyle>
    {options.map(option => (
      <button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </FeedbackBtnsStyle>
);

export default FeedbackBtns;

FeedbackBtns.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};