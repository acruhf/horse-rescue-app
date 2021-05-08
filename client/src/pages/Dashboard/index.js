//This is the Dashboard page, it shows up when the user is logged in and has been authenticated

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import VolunteerNav from "../../components/VolunteerNav"
import { HorsesList } from "../../components/HorsesList"
import HeaderImg from "../../assets/images/dash-header.jpg"
import API from '../../utils/API';
import Moment from 'react-moment';
import weather from 'weather-js';

//import stylesheet
import "./style.css"

function Dashboard() {
  
    const date = new Date();
    const [horses, setHorses] = useState([])
  
    useEffect(() => {
        loadHorses()
    }, [])

    function loadHorses() {
        API.getHorses()
            .then(res =>
                setHorses(res.data)
            )
            .catch(err => console.log(err));
    };
            

    return (
        <div className="dashboardPage">
            <div className="wrapper">    
                <div id="content" className="d-flex">
                    
                    <Navbar/>
                    <VolunteerNav/>

                    <div className= "row">

                        <div className= "col-12 dashPg">
                            <img src={HeaderImg} alt="Horses in Desert" className="headerImg"></img>
                            <div className="currentPgHeader">
                                YOUR HORSES
                            </div>
                            <p className="currentDay"> <Moment format='dddd[ - ] MMMM Do[,] YYYY'>{date}</Moment></p>
                        </div>
                        
                        <div className="dashboardHorses">
                            {horses.length ? (
                            <HorsesList>
                                {[...horses].map(horse => {
                                    return (
                                        
                                        // <ListItem key={horses._id}>
                                            <a href={"/horses/" + horse._id}>
                                                name: {horse.name} 
                                            </a>
                                        // </ListItem>
                                    );
                                })}
                            </HorsesList>
                            ) : (
                                <h1> No Horses to Display</h1>
                            )}
                        </div>

                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Dashboard;