import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { LoginScreen } from "../login/LoginScreen";

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            exact
            component={LoginScreen}
            isAuth={user.logged}
          />
          <PrivateRoutes
            path="/"
            component={DashboardRoutes}
            isAuth={user.logged}
          />
        </Switch>
      </div>
    </Router>
  );
};
