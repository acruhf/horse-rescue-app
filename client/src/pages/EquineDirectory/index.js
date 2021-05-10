//This is the Directory page, it shows up when the user is logged in and has been authenticated

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { HorsesList } from "../../components/HorsesList"
import HeaderImg from "../../assets/images/equinedirectory-header.jpg"
import API from '../../utils/API';
import VolunteerNav from '../../components/VolunteerNav'

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
                                <a href="/AddHorse">ADD NEW HORSE</a> 
                            </div>
                        </div>

                        {horses.length ? (
                        <HorsesList>
                            {horses.map(horse => {
                                return (
                                    
                                    // <ListItem key={horses._id}>
                                        <a href={"/horses/" + horse._id}>
                                            {horse.name}, {horse.breed}, {horse.age} yrs, {horse.height}hh
                                            <img src={horse.pictureUrl} style={{ width: '100px' }}></img>
                                        </a>
                                        
                                    //</* </ListItem> */>
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
    )
}

export default Directory;