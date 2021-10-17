import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { volunteerNetwork } from '../../../App';

const PrivateRoute = ({children, ...rest }) => {
  const {logInUser}= useContext(volunteerNetwork);
  const email = localStorage.getItem('info');
    return (
        <Route
        {...rest}
        render={({ location }) =>
        logInUser || email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;