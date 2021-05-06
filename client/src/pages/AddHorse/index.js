import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/AddHorseForm";
import Navbar from "../../components/Navbar";
import { HorsesList } from "../../components/HorsesList"
import HeaderImg from "../../assets/images/addhorse-header.jpg"

import "./style.css"

function AddHorsePage() {

    const [horses, setHorses] = useState([])
    const [formObject, setFormObject] = useState({})
  
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

// Handles updating component state when the user types into the input field
function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.name){
        API.saveHorse({
            name: formObject.name,
        })
            .then(res => loadHorses(res.data)
            )
            .catch(err => console.log(err));
        }
    };

  return (
    <div className="addHorsePage">
        <div className="wrapper">    
            <div id="content" className="d-flex">
                
                <Navbar/>

                <div className= "row">

                    <div className= "col-12 dashPg">
                        <img src={HeaderImg} alt="Horses in Desert" className="headerImg"></img>
                        <div className="currentPgHeader">
                            ADD A NEW HORSE
                        </div>
                    </div>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Name (required)"
                        />
                        <FormBtn
                            disabled={!(formObject.name)}
                            onClick={handleFormSubmit}
                        >
                            Submit Horse
                        </FormBtn>
                    </form>
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
)
}

export default AddHorsePage;

            

    