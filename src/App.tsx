import React, { useEffect } from "react";

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Login from "./routes/Login";
import Register from "./routes/Register";
import Wallet from "./routes/Wallet";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/wallet" component={Wallet} />
      </Switch>
    </Router>
  );
}

export default App;
