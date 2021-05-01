import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
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

// export default App;
