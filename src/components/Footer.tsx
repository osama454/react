// components/Footer.js
import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 py-4 text-white" role="contentinfo">
    <div className="container mx-auto px-8 flex justify-center items-center">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-gray-300 mx-2">LinkedIn</a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:text-gray-300 mx-2">GitHub</a>
      <a href="mailto:example@example.com" aria-label="Email" className="text-white hover:text-gray-300 mx-2">Email</a>
      <a href="tel:+1234567890" aria-label="Phone" className="text-white hover:text-gray-300 mx-2">Phone</a>
    </div>
  </footer>
);

export default Footer;