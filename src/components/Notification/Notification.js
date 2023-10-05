import React from 'react';
import PropTypes from 'prop-types';
import { NotificationStyle } from './Notification.styled';

const Notification = ({ message }) => (
  <NotificationStyle>{message}</NotificationStyle>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};