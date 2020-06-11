import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import PrivateRoute from "./components/PrivateRoute";

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
