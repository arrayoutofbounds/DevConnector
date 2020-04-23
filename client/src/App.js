import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import setAuthToken from "./utils/setAuthToken";

//Redux
import { Provider } from "react-redux"; // connects react to redux
import store from "./store";

import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token); // sets header for all axios requests
}

const App = () => {
  // component did mount kind of functionality
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route path="/" exact component={Landing} />
          <section className="container">
            <Alert />
            <switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
