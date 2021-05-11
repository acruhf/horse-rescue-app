import React from 'react'
import horseshoeLogo from '../../assets/images/horseshoe-logo.png'
import amandaIcon from '../../assets/images/amanda-icon.png'
import austinIcon from '../../assets/images/austin-icon.png'
import shaunaIcon from '../../assets/images/shauna-icon.png'

import './style.css'

function VolunteerNav() {
    return(
    <div className="stickyvolnav volbar justify-content center">
        <img src={horseshoeLogo} className="horseshoeLogo" alt="horseshoe icon"></img><p className="volunteerNavHead">Volunteer<br></br>Corral</p>
        <p className="volunteerDirectoryLink">Volunteer Directory</p>
        <p className="volunteerCalendarLink">Volunteer Calendar</p>
        <p className="scheduledVolunteers"><strong>Volunteers on<br></br>Upcoming Shift</strong></p>
        <p className="volunteerList">
            <img src={amandaIcon} alt="icon of Amanda Wiehrs" className="volicon"></img> Amanda Wiehrs<br></br>
            <img src={shaunaIcon} alt="icon of Shauna Dunn" className="volicon"></img> Shauna Dunn<br></br>
            <img src={austinIcon} alt="icon of Austin Ruhf" className="volicon"></img> Austin Ruhf
        </p>
    </div>
    )
}

export default VolunteerNav