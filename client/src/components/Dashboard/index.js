//This is the Dashboard page, it shows up when the user is logged in and has been authenticated

import React from "react";
import Navbar from "../Navbar";
import HorsesList from "../HorsesList"

//import stylesheet
import "./style.css"

function Dashboard() {
    return (
        <body className="dashboardPage">
            <div className="wrapper">    
                <div id="content" class="d-flex">
                    <Navbar/>
                    <div className= "row">
                        <div className= "col-12 dashPg">
                            <h1>Dashboard page</h1>
                        </div>
                        <HorsesList/>
                    </div>          
                                
                </div>
            </div>
        </body>
    )
}

export default Dashboard;