// components/AboutMe.js
import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({ description }) => (
  <section className="mb-8" aria-label="About Me Section">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <p>{description}</p>
  </section>
);

AboutMe.propTypes = {
  description: PropTypes.string,
};

AboutMe.defaultProps = {
  description: 'I am a web developer passionate about creating clean and modern websites.',
};

export default AboutMe;