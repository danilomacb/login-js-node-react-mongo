import React from "react";
import { connect } from "react-redux";

function Protected({ email }) {
  return <h1>You are logged {email}</h1>;
}

function mapStateToProps(state) {
  return { email: state.email };
}

export default connect(mapStateToProps)(Protected);
