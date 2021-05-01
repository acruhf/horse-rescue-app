import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-atnvgqyo.us.auth0.com"
    clientId="y9zWm7KJPRo3m6ZTJItoQ3SqnLmtS2Ip"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);


import * as serviceWorker from "./serviceWorker";
serviceWorker.unregister();
