import React, { useState, useEffect, Component } from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateFunction({ Component: component, ...rest }) {
  let mounted = false;
  const [id, setId] = useState();

  useEffect(() => {
    getID();
  }, []);

  function getID() {
    const token = localStorage.getItem("token");

    if (!token) {
      mounted = true;
      return;
    }

    const url = "http://localhost:3001/";

    fetch(url + "protected", {
      headers: {
        Authorization: "Bearer " + token,
      },
    }).then((response) => {
      response.json().then((data) => {
        setId(data.id);
        mounted = true;
      });
    });
  }

  return (
    <>
      {id ? <Route {...rest} render={(props) => <Component {...props} />} /> : <Redirect to="/" />}
    </>
  );
}

export default PrivateFunction;
