import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsStyle, StatisticsP } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatisticsStyle>
    <StatisticsP>Good: {good}</StatisticsP>
    <StatisticsP>Neutral: {neutral}</StatisticsP>
    <StatisticsP>Bad: {bad}</StatisticsP>
    <StatisticsP>Total: {total}</StatisticsP>
    <StatisticsP>Positive feedback: {positivePercentage}%</StatisticsP>
  </StatisticsStyle>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};