// components/AuthButtons.js
import React from 'react';

export const useAuthButtons = (logout) => {
  if (!localStorage.getItem('auth_token')) {
    return (
      <li><i className="ti-power-off"></i><a href="/login">Login</a></li>
    );
  } else {
    return (
      <li><button type="button" onClick={logout} className="nav-link btn btn-danger btn-sm text-white">Logout</button></li>
    );
  };
};