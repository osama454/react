// components/Projects.js
import React from 'react';

const Projects = React.memo(() => (
  <section className="mb-8" aria-label="Projects Section">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-2">Project 1</h3>
        <p className="text-gray-600">Description of project 1.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-2">Project 2</h3>
        <p className="text-gray-600">Description of project 2.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-2">Project 3</h3>
        <p className="text-gray-600">Description of project 3.</p>
      </div>
    </div>
  </section>
));

export default Projects;
