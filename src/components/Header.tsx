// components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white" role="banner">
    <div className="container mx-auto py-4 px-8 flex justify-between items-center">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Projects</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;