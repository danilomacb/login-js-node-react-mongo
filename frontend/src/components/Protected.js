import React from "react";
import { connect } from "react-redux";

function Protected() {
  // const [email, setEmail] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   fetch(url + "protected", {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   }).then((response) => response.json().then((data) => setEmail(data.email)));
  // }, []);

  return <h1>You are logged </h1>;
}

// function mapStateToProps(state) {
//   return { email: state.email };
// }

export default connect()(Protected);
