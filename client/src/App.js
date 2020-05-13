import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import setAuthToken from "./utils/setAuthToken";
import Routes from "./components/routing/Routes";

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
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
