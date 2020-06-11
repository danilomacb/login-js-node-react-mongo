import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
  }

  isAuthenticated() {
    const token = localStorage.getItem("token");

    if (token) {
      this.setState({ authenticated: true });
    }
  }

  render() {
    return (
      <>
        {console.log(this.authenticated)}
        <Route
          {...this.rest}
          render={(props) => (this.authenticated ? <Redirect to="/" /> : <div>foi</div>)}
        />
      </>
    );
  }
}

export default PrivateRoute;
