import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

//import globalCSS
import { GlobalStyle } from "./styles/globalStyles";

//import store-redux
import store from "./redux/store";

//import pages
import login from "./pages/login";
import signup from "./pages/signup";
import feed from "./pages/feed";
import user from "./pages/user";
import Error from "./pages/404";

axios.defaults.baseURL =
  "https://us-central1-functions-bbfa2.cloudfunctions.net/api";

function Routes() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={login} />
          <Route path="/signup" component={signup} />
          <Route path="/feed" component={feed} />
          <Route path="/user/:userHandle" component={user} />
          <Route path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Routes;
