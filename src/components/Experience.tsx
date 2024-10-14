// components/Experience.js
import React from 'react';

const Experience = () => (
  <section className="mb-8" aria-label="Experience Section">
    <h2 className="text-2xl font-bold mb-4">Experience</h2>
    <ul className="space-y-4">
      <li>
        <h3 className="text-lg font-bold">Web Developer</h3>
        <p className="text-gray-600">ABC Company, 2018 - Present</p>
        <p>I am responsible for developing and maintaining web applications using modern technologies.</p>
      </li>
      <li>
        <h3 className="text-lg font-bold">Frontend Developer</h3>
        <p className="text-gray-600">XYZ Agency, 2015 - 2018</p>
        <p>I worked on various projects, creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript.</p>
      </li>
    </ul>
  </section>
);

export default Experience;