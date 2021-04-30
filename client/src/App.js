import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LoginButton from "./components/LoginButtons/LoginButton";
import LogoutButton from "./components/LoginButtons/LogoutButton";
//import Navbar from "./components/Navbar";
//import AddNewHorse from "./components/AddNewHorse";

import Wrapper from "./components/Wrapper";
import PublicPage from "./components/PublicPage";
import Dashboard from "./components/Dashboard"

//importing stylesheet
import "./App.css";

//App function

function App() {
  return (
    <Router>
      <Wrapper>
      <div>
        <Switch>
          <Route path='/callback' component={Dashboard} />
        </Switch>
      </div>
      </Wrapper>
      <Route path='/' component={PublicPage} />
      <LoginButton />
      <LogoutButton />
    </Router>
  );
}

export default App;
