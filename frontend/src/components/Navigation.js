import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/class">Class</Link>
          <Link to="/function">Function</Link>
          <Link to="/private">Private</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
