//This is the Dashboard page, it shows up when the user is logged in and has been authenticated

import React from "react";
import { BrowserRouter as Link, Route, Switch } from 'react-router-dom';
import LogoutButton from "../LoginButtons/LogoutButton";
import Horse from "../Horse";
import HorsesList from "../HorsesList";
import AddHorse from "../AddHorse"


//import stylesheet
import "./style.css"

function Dashboard() {
    return (
        <body className="dashBoardBg">
            <div class="container d-flex">
                <h1>Dashboard page</h1>
                <LogoutButton />
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
                    <Route exact path={["/", "/horses"]} component={HorsesList} />
                    <Route exact path="/add" component={AddHorse} />
                    <Route path="/horse/:id" component={Horse} />
                </Switch>
            </div>
            </div>
            </div>
        </body>
    )
}

export default Dashboard;