// components/Contact.js
import React, { useContext } from 'react';
import useForm from '../hooks/useForm';
import { FormContext } from './FormContext';
import Notification from './Notification';

const Contact = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const { notification } = useContext(FormContext);

  return (
    <section aria-label="Contact Section">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <Notification message={notification} />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input type="text" id="name" name="name" value={values.name} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input type="email" id="email" name="email" value={values.email} onChange={handleChange} className="border rounded-md px-4 py-2 w-full" />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea id="message" name="message" value={values.message} onChange={handleChange} className="border rounded-md px-4 py-2 w-full h-32"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Submit</button>
      </form>
    </section>
  );
};

export default Contact