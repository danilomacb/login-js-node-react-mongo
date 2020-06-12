import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import PrivateClass from "./components/PrivateClass";
import PrivateFunction from "./components/PrivateFunction";

function PrivateRoute({ component: Component, ...rest }) {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

function Routes() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateClass path="/class" component={Protected} />
        <PrivateFunction path="/function" component={Protected} />
        <PrivateRoute path="/private" component={Protected} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
