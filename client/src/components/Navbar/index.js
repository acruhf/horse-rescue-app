import React from "react";
import './style.css'
import LogoutButton from '../LoginButtons/LogoutButton.js'
import logoImg from '../../assets/images/logo.png'
import hayIcon from '../../assets/images/hay-icon.png'

function Navbar() {
    return (
        
             <nav id="sidebar">

                     <div className="sidebarHeader">
                         pony<span className="appNamesidebar2">express</span>
                     </div>
                    
                    <div className="logo">
                        <img src={logoImg} className="logoImg" alt="rescue logo"/>
                    </div>

                     <ul className="list-unstyled components">
                         <p className="rescueName">your rescue</p>
                             <li className="active">
                                 <a href="/dashboard" >Home</a>
                             </li>

                         <li>
                             <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Equine Management</a>
                                 <ul className="collapse list-unstyled" id="pageSubmenu">
                                     <li>
                                         <a href="/EquineDirectory">Equine Directory</a>
                                     </li>
                                     <li>
                                         <a href="/EquineCalendar">Equine Calendar</a>
                                     </li>
                                 </ul>
                         </li>
                         <li>
                             Account Settings
                         </li>
                        
                        <li>
                        <hr></hr>

                        <div className="logo">
                        <img src={hayIcon} alt="hay icon" className="hayIcon"></img><br></br>
                        <p className="fieldStatus" id="fieldText">
                            Paddock: <i>Closed</i><br></br>
                            Pasture 1: Mares <small><br></br><i>since 05/20/2021</i></small><br></br>
                            Pasture 2: Geldings <br></br><small><i>since 05/20/2021</i></small>
                        </p>
                        </div>
                        <hr></hr>
                        <LogoutButton />
                        </li>
                     </ul>

            </nav>  
    )
}

export default Navbar