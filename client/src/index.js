import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const uri='http://localhost:3000/dashboard';

ReactDOM.render(
  <Auth0Provider
    domain="dev-atnvgqyo.us.auth0.com"
    clientId="y9zWm7KJPRo3m6ZTJItoQ3SqnLmtS2Ip"
    redirectUri={uri}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);



