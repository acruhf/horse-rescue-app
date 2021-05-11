//This is the Dashboard page, it shows up when the user is logged in and has been authenticated

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import VolunteerNav from "../../components/VolunteerNav"
import { HorsesList } from "../../components/HorsesList"
import HeaderImg from "../../assets/images/dash-header.jpg"
import API from '../../utils/API';
import Moment from 'react-moment';
import cardIcon from '../../assets/images/card-icon.png'



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
                        
                        <p className="currentDay">
                            <Moment format='dddd[ - ] MMMM Do[,] YYYY'>{date}</Moment>
                        </p>

                        <div className= "col-12 dashPg">
                            <img src={HeaderImg} alt="Horses in Desert" className="headerImg"></img>
                            <div className="currentPgHeader">
                                YOUR HORSES
                            </div>
                            
                            <div className="dashHorses card-columns">
                            {horses.length ? (
                                <HorsesList>
                                    {[...horses].map(horse => {
                                        return (
                                            <div className="card-columns" key={horse._id}>
                                                <div className="card h-100">
                                                    <p className="card-title"><img src={cardIcon} alt="horse silhouette icon" className="cardIcon"></img><a href={"/horses/" + horse._id}>
                                                            {horse.name} 
                                                        </a></p>
                                                    <img className="card-img-top" src={horse.pictureUrl} alt="Card cap"></img>
                                                    <div className="card-body">
                                                        
                                                        <p className="card-text">{horse.breed}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <small className="text-muted"></small>
                                                    </div>
                                                </div>
                                            </div>
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
        </div>
    )
}

export default Dashboard;