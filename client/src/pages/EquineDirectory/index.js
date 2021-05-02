//This is the Directory page, it shows up when the user is logged in and has been authenticated

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { HorsesList, ListItem } from "../../components/HorsesList"
import HeaderImg from "../../assets/images/dash-header.jpg"
import API from '../../utils/API';

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

                    <div className= "row">

                        <div className= "col-12 dashPg">
                            <img src={HeaderImg} alt="Horses in Desert" className="headerImg"></img>
                            <div className="currentPgHeader">
                                <a href="/AddHorse">ADD NEW HORSE</a> 
                            </div>
                        </div>

                        {horses.length ? (
                        <HorsesList>
                            {[...horses].map(horse => {
                                return (
                                    
                                    <ListItem key={horses._id}>
                                        <a href={"/horses/" + horse._id}>
                                            name: {horse.name} 
                                        </a>
                                    </ListItem>
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