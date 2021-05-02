// export default App;
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import Navbar from "./components/Navbar";
//import AddNewHorse from "./components/AddNewHorse";

import Wrapper from "./components/Wrapper";
import PublicPage from "./components/PublicPage";
import Dashboard from "./components/Dashboard"

//importing stylesheet
import "./App.css";
import AddNewHorse from "./components/AddNewHorse";

//App function

function App() {
  return (
    <Router>
      <Wrapper>
      <div>
        <Route exact path={["/", "/home"]}  component={PublicPage} />
        <Route path='/dashboard'  component={ Dashboard } />
        <Route path='/AddNewHorse'  component={ AddNewHorse } />
      </div>
      </Wrapper>
    </Router>
  );
}

export default App;

// import React from "react";
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import "./App.css";
// import LoginButton from "./components/LoginButtons/LoginButton";
// import LogoutButton from "./components/LoginButtons/LogoutButton";
// import Navbar from "./components/Navbar";
// import AddNewHorse from "./components/AddNewHorse";
// import LoginPage from "./components/LoginPage";
// import Home from "./components/Home";
// import Wrapper from "./components/Wrapper";

// // function App() {
// //   return (
// //     <HashRouter basename="/">
// //       <Switch>
// //       <div id="bg-wrapper">
// //         <Wrapper>
// //           <Route exact path={["/", "/home"]} component={Home} />
// //         </Wrapper>
// //       </div>
// //     </HashRouter>
// //   );
// // }


// function App() {
//   return (
//     <Router>
//       <Wrapper>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//         </Switch>
//       </div>
//       </Wrapper>
//       <LoginPage />
//       <LoginButton />
//       <LogoutButton />
//     </Router>
//   );
// }


