import React, { useState } from "react";
import "./App.css";

function Homepage() {
  const [signedin, setSignedin] = useState(false);

  return (
    <div className="form_layout">
      <form className="form_interior">
        <h2 className="head">Login page</h2>
        <br />
        <input type="text" placeholder="Username" className="username" />
        <br />
        <input type="password" placeholder="Password" className="username" />
        <br /> <br />
        <button
          className="submit"
          onClick={(e) => {
            e.preventDefault();
            setSignedin(true);
          }}
        >
          Sign In
        </button>
        {console.log(signedin)}
      </form>
    </div>
  );
}

export default Homepage;
