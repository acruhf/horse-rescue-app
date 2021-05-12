//This is the Directory page, it shows up when the user is logged in and has been authenticated

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import HeaderImg from "../../assets/images/volunteercalendar-header.jpg"
import VolunteerNav from '../../components/VolunteerNav'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

//import stylesheet
import "./style.css"

function VolunteerCalendar() {

    const [value, onChange] = useState(new Date());

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
                                Volunteer Schedule
                            </div>
                        </div>

                        <div className="equineCalendar">
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VolunteerCalendar;