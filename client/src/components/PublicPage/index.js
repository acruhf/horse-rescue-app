//This is the Public page, should appear if user is not signed in initially and offers the ability to log in

import React from "react";

//import Login Button
import LoginButton from "../LoginButtons/LoginButton";

//import stylesheet
import "./style.css"

function PublicPage() {
    return (
        <body id="publicPage">
            <div  className="loginPage container d-flex justify-content-center">
                <span class="appName">pony<span id="appName2"><i>express</i></span></span>
            </div>
            <div className="loginButton d-flex justify-content-center">
                <LoginButton />
            </div>
            <div className="loginDesc d-flex justify-content-center">
                Equine Rescue Management
            </div>

        </body>
    )
}

export default PublicPage;