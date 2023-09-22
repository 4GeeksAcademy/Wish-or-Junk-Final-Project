import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from "../../firebase.js";

const PrivateRoute = ({ element, ...rest }) => {
  const currentUser = useAuth();

  return currentUser ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
