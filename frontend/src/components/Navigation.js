import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navigation({ email }) {
  console.log(email);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

function mapStateToProps(state) {
  return { email: state.email };
}

export default connect(mapStateToProps)(Navigation);
