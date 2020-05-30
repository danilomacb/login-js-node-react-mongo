import React from "react";

import Form from "../containers/Form";

function Login() {
  const url = "http://localhost:3001/";

  const formElement = React.createRef();

  const submit = async (event) => {
    event.preventDefault();

    try {
      let response = await fetch(url + "auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formElement.current[0].value,
          password: formElement.current[1].value,
        }),
      });

      formElement.current[0].value = "";
      formElement.current[1].value = "";

      response = await response.text();

      return alert(response);
    } catch (err) {
      alert("Error on login");
      return console.error("Error on login: ", err);
    }
  };

  return <Form ref={formElement} submit={submit} />;
}

export default Login;
