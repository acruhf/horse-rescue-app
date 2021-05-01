//This is the Dashboard page, it shows up when the user is logged in and has been authenticated

import React from "react";
import LogoutButton from "../LoginButtons/LogoutButton";

//import stylesheet
import "./style.css"

function Dashboard() {
    return (
        <body className="dashBoardBg">
            <div class="container d-flex">
                <h1>Dashboard page</h1>
                <LogoutButton />
            </div>
        </body>
    )
}

export default Dashboard;