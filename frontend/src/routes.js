import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import isAuthenticated from "./auth";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";

function PrivateRoute({ component: Component, ...rest }) {
  const authenticated = isAuthenticated();
  console.log(authenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/protected" component={Protected} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
