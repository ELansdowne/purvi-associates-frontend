import React, { Component } from "react";
import { Route } from "react-router";
import "./App.css";
import Aux from "./hoc/Auxi";
import Dashboard from "./containers/dashboard/dashboard";
import Login from "./containers/login/login";

class App extends Component {
  render() {
    return (
      <Aux>
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/login"} component={Login} />
      </Aux>
    );
  }
}

export default App;
