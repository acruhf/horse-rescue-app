//This is the Public page, should appear if user is not signed in initially and offers the ability to sign up for ponyexpress

import React from "react";
import LoginButton from "../LoginButtons/LoginButton";


//import stylesheet
import "./style.css"



function PublicPage() {
    return (
        <body id="publicPage">
            <div  className="loginPage container d-flex justify-content-center">
                <span class="appName">pony<span id="appName2"><i>express</i></span></span>
                <LoginButton />
            </div>

        </body>
    )
}

export default PublicPage;