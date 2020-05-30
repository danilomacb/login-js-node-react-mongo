import React from "react";

import Form from "../containers/Form";

function Login() {
  const url = "http://localhost:3001/";

  const formElement = React.createRef();

  const submit = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return <Form ref={formElement} submit={submit} />;
}

export default Login;
