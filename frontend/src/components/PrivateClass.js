import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateClass extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = { id: undefined };
  }

  componentWillMount() {
    this._isMounted = true;
    this.isAuthenticated();
  }

  // componentDidMount() {
  //   this._isMounted = true;
  //   this.isAuthenticated();
  // }

  isAuthenticated() {
    const token = localStorage.getItem("token");

    if (!token) return;

    const url = "http://localhost:3001/";

    fetch(url + "protected", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      response.json().then((data) => {
        if (this._isMounted) {
          this.setState({ id: data.id });
        }
      });
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log(this.state.id);
    return (
      <Route render={(props) => (this.state.id ? <props.component /> : <Redirect to="/" />)} />
    );
  }
}

export default PrivateClass;
