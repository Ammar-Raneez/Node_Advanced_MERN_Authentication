
import { Redirect, Route } from 'react-router-dom';
import React from 'react';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        (props) => (
          localStorage.getItem('authToken') ? (
            <Component {...props} />
          ) : (
            <Redirect to='/login' />
          )
        )
      }
    />
  )
}

export default PrivateRoute