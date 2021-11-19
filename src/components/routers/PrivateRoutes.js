import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";

export const PrivateRoutes = ({ isAuth, component: Component, ...rest }) => {
  console.log(rest.location.pathname);
  localStorage.setItem("lastPath", rest.location.pathname);

  return (
    //Con el rest se recibe el resto de propiedades (exact, path, etc)
    <Route
      {...rest}
      // El callback seria como en el useState para acceder al estado anterior
      // setState(prev=> prev)
      component={(props) => {
        console.log(props);
        return isAuth ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

PrivateRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  //func por Functional component
};
