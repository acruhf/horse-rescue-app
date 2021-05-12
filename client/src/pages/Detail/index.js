import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import VolunteerNav from "../../components/VolunteerNav"
import HeaderImg from "../../assets/images/details-header.jpg"
import './style.css'

  // When this component mounts, grab the horse with the _id of props.match.params.id
  // e.g. localhost:3000/horses/599dcb67f0f16317844583fc

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
                            <div className="detailsPgHeader">
                                {horse.name}
                            </div>
                            <div className="horseStats">
                                <img src={horse.pictureUrl} alt="Horse" className="horsePic"></img>
                                <p className="horseDetails">
                                    
                                    {horse.breed}
                                    <br></br>
                                    {horse.age}yrs old
                                    <br></br>
                                    {horse.height} hh
                                    <br></br>
                                    Last Vet Appt: {horse.lastVetAppt}
                                    <br></br>
                                    Last Farrier Appt: {horse.farrierDate}
                                    <br></br>
                                    Farrier Cycle: {horse.farrierCycle}
                                    <br></br>
                                    Last Deworming: {horse.deworming}
                                    <br></br>
                                    Deworming Cycle: {horse.dewormingCycle}
                                    <br></br>
                                    <br></br>
                                    <button className="updateButton">Update Info</button>
                                </p>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    )
}



export default Detail;
