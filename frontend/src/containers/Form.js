import React from "react";

const Form = React.forwardRef(({ submit }, formElement) => {
  return (
    <div className="container">
      <form onSubmit={submit} ref={formElement}>
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
});

export default Form;
