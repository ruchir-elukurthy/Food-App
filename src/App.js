import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Error from "./components/Error";
import Rooms from "./components/Rooms";
import Navbar from "./components/Navbar";
import SingleRoom from "./components/SingleRoom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:slug" exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
