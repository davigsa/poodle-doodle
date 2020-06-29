import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

//import globalCSS
import { GlobalStyle } from "./styles/globalStyles";

//import store-redux
import store from "./redux/store";

//import pages
import Login from "./pages/login";
import Signup from "./pages/signup";
import Feed from "./pages/feed";
import User from "./pages/user";
import Error from "./pages/404";

axios.defaults.baseURL =
  "https://us-central1-functions-bbfa2.cloudfunctions.net/api";

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/feed">
            <Feed />
          </Route>
          <Route path="/user/:userHandle">
            <User />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
