import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Ameal from "./components/Ameal";

function App() {
  const [signedin, setSignedin] = useState(false);

  function handleChange(update) {
    setSignedin(update);
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Homepage name={signedin} onChange={handleChange} />
            )}
          />
          {signedin === true ? (
            <Route path="/ameal" exact component={Ameal} />
          ) : (
            console.log("not workoing")
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
