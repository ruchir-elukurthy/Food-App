import React from "react";
import "./App.css";

function Homepage() {
  return (
    <div className="form_layout">
      <form className="form_interior">
        <h2 className="head">Login page</h2>
        <br />
        <input type="text" placeholder="Username" className="username" />
        <br />
        <input type="password" placeholder="Password" className="username" />
        <br /> <br />
        <button className="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Homepage;
