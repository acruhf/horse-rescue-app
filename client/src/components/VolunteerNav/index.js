import React from 'react'
import horseshoeLogo from '../../assets/images/horseshoe-logo.png'
import amandaIcon from '../../assets/images/amanda-icon.png'
import austinIcon from '../../assets/images/austin-icon.png'
import shaunaIcon from '../../assets/images/shauna-icon.png'
import barnIcon from '../../assets/images/barn-icon.png'

import './style.css'

function VolunteerNav() {
    return(
    <div className="stickyvolnav volbar justify-content center">
        <img src={horseshoeLogo} className="horseshoeLogo" alt="horseshoe icon"></img><br></br>
        <button className="volunteerNavHead">Volunteer<br></br>Corral</button><br></br>
        <a href="/VolunteerDirectory" id="volunteerDirectoryLink">Volunteer Directory</a><br></br>
        <a href="/VolunteerCalendar" id="volunteerCalendarLink">Volunteer Calendar</a>
        <hr></hr>
        <p className="scheduledVolunteers">
            <strong>Volunteers on<br></br>Upcoming Shift</strong>
        </p>
        <p className="volunteerList">
            <img src={shaunaIcon} alt="icon of Shauna Dunn" className="volicon"></img> Shauna Dunn<br></br>
            <img src={austinIcon} alt="icon of Austin Ruhf" className="volicon"></img> Austin Ruhf<br></br>
            <img src={amandaIcon} alt="icon of Amanda Wiehrs" className="volicon"></img> Amanda Wiehrs<br></br>
        </p>
        <hr></hr>
        <div className="notesWidget">
            <img src={barnIcon} alr="icon of Barn" className="barnIcon"></img><br></br>
            <p className="notesText">
                <h5>Latest Notes</h5>
                <ul>
                    <li>Low Supply: Fly Spray</li>
                    <li>Sawdust delivery scheduled 5/16</li>
                    <li>Crab is suffering from allergies</li>
                    <li>Lil' Sebastian's birthday today!</li>
                </ul>
            </p>
        </div>
    </div>
    )
}

export default VolunteerNav