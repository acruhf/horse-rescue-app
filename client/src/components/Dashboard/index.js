//This is the Dashboard page, it shows up when the user is logged in and has been authenticated

import React from "react";
import { BrowserRouter as Link, Route, Switch } from 'react-router-dom';
import LogoutButton from "../LoginButtons/LogoutButton";
import Tutorial from "../Tutorial";
import TutorialsList from "../TutorialsList";
import AddTutorial from "../AddTutorial";
import HorsesList from "../HorsesList"

//import stylesheet
import "./style.css"

function Dashboard() {
    return (
        <body className="dashBoardBg">
            <div className="container d-flex">
                <h1>Dashboard page</h1>
                <LogoutButton />
                <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/HorsesList" className="navbar-brand">
                Horses List
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
        </body>
    )
}

export default Dashboard;