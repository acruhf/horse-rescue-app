import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        <Route exact path={["/", "/home"]}  component={PublicPage} />
        <Route path='/dashboard'  component={ Dashboard } />
       
      </div>
      </Wrapper>
    </Router>
  );
}

export default App;
