import React from 'react';
import { Route } from 'react-router-dom';
import withAuth from './withAuth'; 

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <withAuth {...props} Component={Component} />} />
);

export default ProtectedRoute;
