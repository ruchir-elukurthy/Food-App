import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="form_layout">
      <form className="form_interior">
        <h2 className="login">Login page</h2>
        <br />
        <input type="text" placeholder="Username" className="username" />
        <br />
        <input type="password" placeholder="Password" className="username" />
        <br /> <br />
        <ul>
          <Link to="/rooms" className="submit">
            Sign In
          </Link>
        </ul>
      </form>
    </div>
  );
}

export default Homepage;
