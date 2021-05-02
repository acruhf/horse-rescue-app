import React from "react";
import './style.css'
import LogoutButton from '../LoginButtons/LogoutButton.js'
import logoImg from '../../assets/images/logo.png'

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
                             <a href="/about">About</a>
                         </li>

                         <li>
                             <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Equine Management</a>
                                 <ul className="collapse list-unstyled" id="pageSubmenu">
                                     <li>
                                         <a href="/EquineDirectory">Equine Directory</a>
                                     </li>
                                     <li>
                                         <a href="/EquineCalendar">Calendar</a>
                                     </li>
                                     <li>
                                         <a href="#">Page 3</a>
                                     </li>
                                 </ul>
                         </li>
                        
                        <li>
                        <LogoutButton />
                        </li>
                     </ul>

            </nav>  
       

        
        
        
    )
}


//  // open or close navbar
//  $('#sidebar').toggleClass('active');
//  // close dropdowns
//  $('.collapse.in').toggleClass('in');
//  // and also adjust aria-expanded attributes we use for the open/closed arrows
//  // in our CSS
//  $('a[aria-expanded=true]').attr('aria-expanded', 'false');

export default Navbar