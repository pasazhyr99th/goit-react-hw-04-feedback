import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionStyle>
    <h2>{title}</h2>
    {children}
  </SectionStyle>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string, // можливо тут теж потрібно isRequired, але наче знаю, що title не є обовʼязковим
  children: PropTypes.element.isRequired, // а тут можливо node, а не element :)
};