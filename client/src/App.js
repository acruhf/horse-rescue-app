// export default App;
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import PublicPage from "./components/PublicPage";
import Dashboard from "./pages/Dashboard";
import EquineDirectory from "./pages/EquineDirectory";
import Detail from "./pages/Detail";
import VolunteerDirectory from "./pages/VolunteerDirectory";
import EquineCalendar from "./pages/EquineCalendar";
import VolunteerCalendar from "./pages/VolunteerCalendar";


//importing stylesheet
import "./App.css";
import AddHorse from "./pages/AddHorse";

//App function

function App() {
  return (
    <Router>
      <Wrapper>
        <div>
          <Route exact path={["/", "/home"]}  component={PublicPage} />
          <Route path='/dashboard'  component={ Dashboard } />
          <Route path='/AddHorse'  component={ AddHorse } />
          <Route path='/EquineDirectory' component={ EquineDirectory } />
          <Route path='/EquineCalendar' component={ EquineCalendar } />
          <Route path="/horses/:id">
            <Detail />
          </Route>
          <Route path="/VolunteerDirectory" component={ VolunteerDirectory } />
          <Route path="/VolunteerCalendar" component={ VolunteerCalendar } />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;


