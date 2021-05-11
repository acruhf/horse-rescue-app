import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/AddHorseForm";
import Navbar from "../../components/Navbar";
import DeleteBtn from "../../components/DeleteBtn";
import { HorsesList, ListItem } from "../../components/HorsesList";
import UploadPhoto from "../../components/UploadPhoto";
import HeaderImg from "../../assets/images/addhorse-header.jpg";
import VolunteerNav from "../../components/VolunteerNav"
import "./style.css";


function AddHorsePage() {
  const [horses, setHorses] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    loadHorses();
  }, []);

  function loadHorses() {
    API.getHorses()
      .then(res => setHorses(res.data))
      .catch(err => console.log(err));
  };

    // Deletes a horse from the database with a given id, then reloads horses from the db
  function deleteHorse(id) {
      API.deleteHorse(id)
        .then(res => loadHorses())
        .catch(err => console.log(err));
    }

//   Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value })
  };

  function clearPreview() {
    setPictureUrl('')
    setPreviewUrl('')
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
        .then(res => loadHorses(res.data))
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
            <form>
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
            {horses.length ? (
              <HorsesList>
                {horses.map(horse => {
                  return (
                    <ListItem key={horses._id}>
                      <a href={"/horses/" + horse._id}>
                          <img src={horse.pictureUrl} style={{ width: '100px' }}></img>
                          {horse.name}, {horse.breed}, {horse.age} yrs, {horse.height}hh
                     </a>
                      <DeleteBtn onClick={() => deleteHorse(horse._id)} />
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
  );
}

export default AddHorsePage;
