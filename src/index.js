import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
=======
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
>>>>>>> 945d1676516f7979cdd671d91a65f895a8f7b4a0
  document.getElementById("root")
);
