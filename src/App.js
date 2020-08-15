import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./components/welcome/Welcome";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="page">
            <Switch>
              <Route exact path="/" component={Welcome} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
