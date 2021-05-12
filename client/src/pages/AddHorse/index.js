import React, { useState } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/AddHorseForm";
import Navbar from "../../components/Navbar";
import UploadPhoto from "../../components/UploadPhoto";
import HeaderImg from "../../assets/images/addhorse-header.jpg";
import VolunteerNav from "../../components/VolunteerNav"
import "./style.css";


function AddHorsePage() {

  const [formObject, setFormObject] = useState({});
  const [previewUrl, setPreviewUrl] = useState("");

 
 

    // Deletes a horse from the database with a given id, then reloads horses from the db
  

//   Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value })
  };

  function clearPreview() {
    setPictureUrl('')
    setPreviewUrl('')
    // setFormObject('')
    const uploadInput = document.querySelector('#uploadInput');
    if (uploadInput) {
    uploadInput.value = ''
  }
};

function handleFormSubmit(event) {
    event.preventDefault();
    clearPreview()
    if (formObject.name) {
      API.saveHorse(formObject)
        .catch(err => console.log(err))
        }

    }



const setPictureUrl = pictureUrl => setFormObject({...formObject, pictureUrl});

  return (
    <div className="addHorsePage">
      <div className="wrapper">
        <div id="content" className="d-flex">
          <Navbar />
          <VolunteerNav/>

          <div className="row">
            <div className="col-12 dashPg">
              <img
                src={HeaderImg}
                alt="Horses in Desert"
                className="headerImg"
              ></img>
              <div className="currentPgHeader">ADD A NEW HORSE</div>
            </div>
            <form className="addHorseForm">
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name"
              />
              <Input
                onChange={handleInputChange}
                name="breed"
                placeholder="Breed"
              />
              <Input
                onChange={handleInputChange}
                name="age"
                placeholder="Age"
              />
              <Input
                onChange={handleInputChange}
                name="height"
                placeholder="Height"
              />
              <Input
                onChange={handleInputChange}
                name="lastVetAppt"
                placeholder="Last Vet Appt"
              />
              <Input
                onChange={handleInputChange}
                name="farrierDate"
                placeholder="Last Farrier Date"
              />
              <Input
                onChange={handleInputChange}
                name="farrierCycle"
                placeholder="Farrier Cycle"
              />
              <Input
                onChange={handleInputChange}
                name="deworming"
                placeholder="Last Deworming"
              />
              <Input
                onChange={handleInputChange}
                name="dewormingCycle"
                placeholder="Deworming Cycle"
              />
              <UploadPhoto 
                setPictureUrl={setPictureUrl}
                previewUrl={previewUrl}
                setPreviewUrl={setPreviewUrl}
              />
              <FormBtn disabled={!formObject.name} onClick={handleFormSubmit}>
                Submit Horse
              </FormBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddHorsePage;
