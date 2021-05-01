//This is the Public page, should appear if user is not signed in initially and offers the ability to sign up for ponyexpress

import React from "react";
import LoginButton from "../LoginButtons/LoginButton";
import LogoutButton from "../LoginButtons/LogoutButton";

//import stylesheet
import "./style.css"



function PublicPage() {
    return (
        <body id="publicPage">
            <div  className="loginPage">
            <LoginButton />
            <LogoutButton />
            </div>
        </body>
    )
}

export default PublicPage;