import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const withAuth = (Component) => {
  return (props) => {
    const token = Cookies.get('jwtToken'); // Check for JWT token in cookie
    if (!token) {
      // Redirect to login page if not authenticated
      return <Navigate to="/login" replace />;
    }

    // Pass props on to the wrapped component
    return <Component {...props} />;
  };
};

export default withAuth;
