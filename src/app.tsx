import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

// Context
const FormContext = createContext();

// Custom Hook for Form Handling
const useForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = useCallback((e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.id]: '' }); // Clear error on input change
  }, [formData, formErrors]);


  const validateForm = useCallback(() => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.message) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);


  return { formData, formErrors, handleInputChange, validateForm };
};

// Error Handling Component (Modal or Notification)
const ErrorModal = ({ errorMessage, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <p className="text-red-500 font-bold mb-4">{errorMessage}</p>
      <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Close
      </button>
    </div>
  </div>
);


ErrorModal.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};


// Higher-Order Component (HOC) for Shared Layout
const withLayout = (WrappedComponent) => {
  const WithLayoutComponent = (props) => {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <main className="container mx-auto py-8 px-8">
          <WrappedComponent {...props} />
        </main>
        <Footer />
      </div>
    );
  };
  WithLayoutComponent.displayName = `withLayout(${WrappedComponent.displayName || WrappedComponent.name})`;
  return WithLayoutComponent;
};

// Header Component
const Header = () => (
  <header className="bg-gray-800 text-white" role="banner">
    {/* Add appropriate ARIA attributes for menu here */}
    <div className="container mx-auto py-4 px-8 flex justify-between items-center">
      <h1 className="text-4xl font-bold">My Portfolio</h1>
      <nav>
      {/* Add appropriate ARIA attributes for navigation links here */}
        <ul className="flex space-x-4">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);


// Footer Component
const Footer = () => (

  <footer className="bg-gray-800 py-4 text-white" role="contentinfo">
    <div className="container mx-auto px-8 flex justify-center items-center">
    {/* Appropriate ARIA roles and attributes added to ensure accessibility. */}
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 mx-2" aria-label="LinkedIn Profile">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 mx-2" aria-label="GitHub Profile">
        <FaGithub size={24} />
      </a>
      <a href="mailto:example@example.com" className="hover:text-gray-300 mx-2" aria-label="Email Address">
        <FaEnvelope size={24} />
      </a>
      <a href="tel:+1234567890" className="hover:text-gray-300 mx-2" aria-label="Phone Number">
        <FaPhone size={24} />
      </a>
    </div>
  </footer>
);

// AboutMe Component
const AboutMe = () => (
  <section id="about" className="mb-8" aria-labelledby ="about-heading">
    <h2 id="about-heading" className="text-2xl font-bold mb-4" tabIndex="0">About Me</h2>
    {/* role="list" is not ideal here.  Using <ul> or <nav> would be better options semantically. */}
    <div className="flex items-center mb-4" role="list"> 
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-2" aria-label="LinkedIn Profile"><FaLinkedin size={24} /></a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mr-2" aria-label="GitHub Profile"><FaGithub size={24} /></a>
      <a href="mailto:example@example.com" className="mr-2" aria-label="Email Address"><FaEnvelope size={24} /></a>
      <a href="tel:+1234567890" className="mr-2" aria-label="Phone Number"><FaPhone size={24} /></a>

    </div>
    <p>Welcome to my portfolio website! I am Vincent C K Wong, a web developer passionate about creating clean and modern websites.</p>
  </section>
);

// Experience Component
const Experience = () => (
  <section id="experience" className="mb-8" aria-labelledby="experience-heading">
    <h2 id="experience-heading" className="text-2xl font-bold mb-4" tabIndex="0">Experience</h2>
    <ul className="space-y-4" role="list">
      <li>
        <h3 className="text-lg font-bold">Web Developer</h3>
        <p className="text-gray-600">ABC Company, 2018 - Present</p>
        <p>I am responsible for developing and maintaining web applications using modern technologies.</p>
      </li>
      {/* Removed duplicate list item for brevity of example  */}
    </ul>
  </section>
);


// Projects Component
const Projects = React.memo(() => (
  // Using React.memo to prevent unnecessary re-renders if props haven't changed.
  <section id="projects" className="mb-8" aria-labelledby="projects-heading">
    <h2 id="projects-heading" className="text-2xl font-bold mb-4" tabIndex="0">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
      {/* Add more semantic meaning by changing to article or section elements and using appropriate ARIA labels  */}
        <h3 className="text-lg font-bold mb-2">Project 1</h3>
        <p className="text-gray-600">Description of project 1.</p>
      </div>
      {/* Removed duplicate divs for brevity */}
    </div>
  </section>
));



// Contact Component
const Contact = () => {
  const { formData, formErrors, handleInputChange, validateForm } = useForm();
  const [showErrorModal, setShowErrorModal] = useState(false);
const [submitting, setSubmitting] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);


    if (!validateForm()) {
      setShowErrorModal(true);
      setSubmitting(false);

      return;
    }


    try {
      // Simulate API call
      const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ status: 200 }), 1000);
      });

      if (response.status !== 200) {
        throw new Error('Failed to submit form');
      }

      // Clear the form or update the UI as needed
      setFormData({ name: '', email: '', message: '' });
      setSubmitting(false);
      alert('Form submitted successfully!');

    } catch (error) {
        setShowErrorModal(true);
        setSubmitting(false);

    }

  };




  const handleCloseModal = useCallback(() => setShowErrorModal(false), []);


  return (
    <FormContext.Provider value={{ formData, formErrors }}>
    <section id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-2xl font-bold mb-4" tabIndex="0">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
            <p className="text-gray-600">I'd love to hear from you! Send me a message, and I'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
                <input
                  type="text"
                  id="name"
                  aria-required="true"  aria-label="Your Name"
                  className={`border rounded-md px-4 py-2 w-full ${formErrors.name ? 'border-red-500' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}


              </div>
              {/* other form inputs and proper accessibility elements */}
              {/* Ensure sufficient color contrast for labels and input text*/}
              <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                  <input
                    type="email"
                    id="email"
                    aria-required="true" aria-label="Email Address"
                    className={`border rounded-md px-4 py-2 w-full ${formErrors.email ? 'border-red-500' : ''}`}
                    value={formData.email}
                    onChange={handleInputChange}

                  />
                    {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}

                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
                  <textarea
                    id="message"
                    aria-required="true" aria-label="Your Message"
                    className={`border rounded-md px-4 py-2 w-full h-32 ${formErrors.message ? 'border-red-500' : ''}`}
                    value={formData.message}
                    onChange={handleInputChange}

                  ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}

                </div>
              <button type="submit" disabled={submitting} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
  {submitting ? 'Submitting…' : 'Submit'}
</button>


            </form>
          </div>
          <div>
          {/* Removed duplicate div for brevity */}
          </div>
        </div>
      {showErrorModal && (
      <ErrorModal errorMessage="Please fill in all fields correctly." onClose={handleCloseModal} />
      )}
     </section>

    </FormContext.Provider>
  );
};






// App Component
const App = () => {


  return (
    <div>
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};




export default withLayout(App);