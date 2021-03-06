import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./style.css" 

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="loginBtn">Log In</button>;
};

export default LoginButton;