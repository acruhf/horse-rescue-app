//This is the Dashboard page, it shows up when the user is logged in and has been authenticated

import React from "react";
import { BrowserRouter as Link, Route, Switch } from 'react-router-dom';
import Tutorial from "../Tutorial";
import TutorialsList from "../TutorialsList";
import AddTutorial from "../AddTutorial"
import Navbar from "../Navbar"

//import stylesheet
import "./style.css"

function Dashboard() {
    return (
        <body className="dashboardPage">
            <div className="wrapper">
                
                        <div id="content">
                            <div class="d-flex">
                            <Navbar />
                                <h1>Dashboard page</h1>
                                <div>
                                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                                        <a href="/tutorials" className="navbar-brand">
                                        pony-express
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
                                            <Route exact path={["/", "/Tutorial"]} component={TutorialsList} />
                                            <Route exact path="/add" component={AddTutorial} />
                                            <Route path="/Tutorial/:id" component={Tutorial} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </body>
    )
}

export default Dashboard;