import React from "react";

function Register() {
  const url = "http://localhost:3001/";

  let formElement;

  const submit = async (event) => {
    event.preventDefault();

    try {
      let response = await fetch(url + "user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formElement[0].value, password: formElement[1].value }),
      });

      formElement[0].value = "";
      formElement[1].value = "";

      response = await response.text();

      alert(response);
    } catch (err) {
      alert("Error on register");
      console.error("Error on register: ", err);
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={submit}
        ref={(element) => {
          formElement = element;
        }}
      >
        <div className="field">
          <label>Email: </label>
          <input type="email" />
        </div>
        <div className="field">
          <label>Password: </label>
          <input type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
