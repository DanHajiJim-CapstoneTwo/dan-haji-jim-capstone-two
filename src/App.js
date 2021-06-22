import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import CreditCard from "./components/CreditCard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="./components/Checkout">Checkout</Link>
        <br />
        <Link to="./components/Checkout">CreditCard</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/components/CreditCard">
          <CreditCard />
        </Route>
        <Route path="/components/CreditCard">
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
