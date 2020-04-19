import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route path="/" exact component={Landing} />
      <section className="container">
        <switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
