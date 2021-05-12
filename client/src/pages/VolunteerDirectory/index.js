//This is the Directory page, it shows up when the user is logged in and has been authenticated

import React from "react";
import Navbar from "../../components/Navbar";
import HeaderImg from "../../assets/images/volunteerdirectory-header.jpg"
import VolunteerNav from '../../components/VolunteerNav'


//import stylesheet
import "./style.css"

function VolunteerDirectory() {

    return (
        <div className="directoryPage">
            <div className="wrapper">
                <div id="content" className="d-flex">

                    <Navbar />
                    <VolunteerNav />

                    <div className="row">

                        <div className="col-12 dashPg">
                            <img src={HeaderImg} alt="Horses in Desert" className="headerImg"></img>
                            <div className="currentPgHeader">
                                Volunteer DIRECTORY
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteerDirectory;