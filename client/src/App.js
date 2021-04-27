import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Navbar from "./components/Navbar";
import AddNewHorse from "./components/AddNewHorse";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            Login page here
          </Route>

          <Route exact path="/addnewhorse">
            <AddNewHorse />
          </Route>
        </Switch>
      </div>

      <LoginButton />
      <LogoutButton />
    </Router>
  );
}

export default App;
