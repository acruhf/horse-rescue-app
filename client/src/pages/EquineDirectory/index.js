//This is the Directory page, it shows up when the user is logged in and has been authenticated

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { HorsesList } from "../../components/HorsesList"
import HeaderImg from "../../assets/images/equinedirectory-header.jpg"
import API from '../../utils/API';
import VolunteerNav from '../../components/VolunteerNav'
import cardIcon from '../../assets/images/card-icon.png'

//import stylesheet
import "./style.css"

function Directory() {

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
        <div className="directoryPage">
            <div className="wrapper">    
                <div id="content" className="d-flex">
                    
                    <Navbar/>
                    <VolunteerNav/>


                    <div className= "row">

                        <div className= "col-12 dashPg">
                            <img src={HeaderImg} alt="Horses in Desert" className="headerImg"></img>
                            <div className="currentPgHeader">
                                EQUINE DIRECTORY
                            </div>
                        </div>

                        <div className="dashHorses">
                            <p className="addHorseBtn"><a href="/AddHorse">Add New Horse</a> </p>

                            {horses.length ? (
                                <HorsesList>
                                    {[...horses].map(horse => {
                                        return (
                                            <div className="card-columns">
                                                <div className="card">
                                                    <p class="card-title"><img src={cardIcon} alt="horse silhouette icon" className="cardIcon"></img><a href={"/horses/" + horse._id}>
                                                            {horse.name} 
                                                        </a></p>
                                                    <img class="card-img-top" src={horse.pictureUrl} alt="Card image cap"></img>
                                                    <div class="card-body">
                                                        
                                                        <p class="card-text">{horse.breed}</p>
                                                    </div>
                                                    {/* <div class="card-footer">
                                                        <small class="text-muted"></small>
                                                    </div> */}
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
    )
}

export default Directory;