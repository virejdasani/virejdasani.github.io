import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/virej" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
