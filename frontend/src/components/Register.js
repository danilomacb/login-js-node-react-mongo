import React from "react";

import Form from "../containers/Form";

function Register() {
  const url = "http://localhost:3001/";

  const formElement = React.createRef();

  const submit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url + "user", {
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

      const { message } = await response.json();

      return alert(message);
    } catch (err) {
      alert("Error on register");
      return console.error("Error on register: ", err);
    }
  };

  return <Form ref={formElement} submit={submit} />;
}

export default Register;
