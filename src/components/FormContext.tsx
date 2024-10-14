
// components/FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState('');

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const addNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000); // Clear notification after 3 seconds
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, errors, setErrors, notification, addNotification }}>
      {children}
    </FormContext.Provider>
  );
};
