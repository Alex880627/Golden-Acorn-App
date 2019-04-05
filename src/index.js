import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import GoldenAcornApp from "../src2/index";
import Navigation from "./navigation";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/SimpleApp" component={GoldenAcornApp} />
        <Route path="/Redux" component={App} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
