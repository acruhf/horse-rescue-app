import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../../components/Navbar";
import VolunteerNav from "../../components/VolunteerNav"
import HeaderImg from "../../assets/images/dash-header.jpg"
import Moment from 'react-moment';

//import stylesheet
import "./style.css"

function Detail(props) {
    const [horse, setHorse] = useState({})
  
    const {id} = useParams()
    useEffect(() => {
      API.getHorse(id)
        .then(res => setHorse(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className="detailsPage">
            <div className="wrapper">    
                <div id="content" className="d-flex">
                    <Navbar/>
                    <VolunteerNav/>
                    <div className= "row">

                        <div className= "col-12 dashPg">
                            <img src={HeaderImg} alt="Horses in Desert" className="headerImg"></img>
                            <div className="currentPgHeader">
                                Horse Details
                            </div>
                            <p className="currentDay"> <Moment format='dddd[ - ] MMMM Do[,] YYYY'>{date}</Moment></p>
                        </div>
                    </div>  
                    <div className= "row">
                        <div className= "col-12">
                            <h1>
                                {horse.name}
                            </h1>
                            <p>
                                {horse.breed},
                                {horse.age} yrs,
                                {horse.height} hh,
                                {horse.lastVetAppt},
                                {horse.farrierDate},
                                {horse.farrierCycle},
                                {horse.deworming},
                                {horse.dewormingCycle},
                            </p>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    )
}



export default Detail;
