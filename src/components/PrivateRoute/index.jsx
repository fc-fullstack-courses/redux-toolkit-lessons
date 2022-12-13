import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute(props) {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
}

export default PrivateRoute;
