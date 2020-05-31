import React from "react";
import { connect } from "react-redux";

import { setEmail } from "../state/actions";
import Form from "../containers/Form";

function Login({ dispatch }) {
  const url = "http://localhost:3001/";

  const formElement = React.createRef();

  const submit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url + "auth", {
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

      const { message, token, email } = await response.json();

      localStorage.setItem("token", token);

      dispatch(setEmail(email));

      return alert(message);
    } catch (err) {
      alert("Error on login");
      return console.error("Error on login: ", err);
    }
  };

  return <Form ref={formElement} submit={submit} />;
}

export default connect()(Login);
