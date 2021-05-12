import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import VolunteerNav from "../../components/VolunteerNav"
import HeaderImg from "../../assets/images/dash-header.jpg"

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
                            <div className="currentPgHeader">
                                Horse Details
                            </div>
                            
                            <h1>
                                {horse.name}
                            </h1>
                            <p>
                                {horse.breed},
                                <br></br>
                                {horse.age} yrs,
                                <br></br>
                                {horse.height} hh,
                                <br></br>
                                Last Vet Appt: {horse.lastVetAppt},
                                <br></br>
                                Last Farrier Appt: {horse.farrierDate},
                                <br></br>
                                Farrier Cycle: {horse.farrierCycle},
                                <br></br>
                                Last Deworming: {horse.deworming},
                                <br></br>
                                Deworming Cycle: {horse.dewormingCycle},
                            </p>
                        </div>
                    </div>                  
                </div>
            </div>
        </div>
    )
}



export default Detail;
