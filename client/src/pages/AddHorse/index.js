import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/AddHorseForm";
import Navbar from "../../components/Navbar";
import { HorsesList, ListItem } from "../../components/HorsesList";
import { AddImageBtn, UploadPhoto } from "../../components/UploadPhoto";
import HeaderImg from "../../assets/images/addhorse-header.jpg";

import "./style.css";


function AddHorsePage() {
  const [horses, setHorses] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [imageObject, setImageObject] = useState([]);

  useEffect(() => {
    loadHorses();
  }, []);

  function loadHorses() {
    API.getHorses()
      .then(res => setHorses(res.data))
      .catch(err => console.log(err));
  };

//   Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value })
  };

function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.name) {
      API.saveHorse({
        name: formObject.name,
        breed: formObject.breed,
        age: formObject.age,
        height: formObject.height,
        lastVetAppt:  formObject.lastVetAppt,
        farrierDate:  formObject.farrierDate,
        farrierCycle: formObject.farrierCycle,
        deworming:  formObject.deworming,
        dewormingCycle: formObject.dewormingCycle,
    })
        .then(res => loadHorses(res.data))
        .catch(err => console.log(err));
    }
};

//   function handleFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("file", imageObject);
//     formData.append("upload_preset", "uflnjq77");
//     API.imageUpload({
//         image: imageObject.image,
//     }) 
//     .then((res) => setImageObject(res.data))
    
//     if (formObject.name) {
//       API.saveHorse({
//         name: formObject.name,
//       })
//         .then((res) => loadHorses(res.data))
//         .catch((err) => console.log(err));
//     }
//   }

  function handleImgInputChange(event) {
    const { image, value } = event.target;
    setImageObject({ ...imageObject, [image]: value });
  }

//   const uploadImage = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("file", imageObject);
//     formData.append("upload_preset", "uflnjq77");
//     API.imageUpload({
//       image: imageObject.image,
//     })
//       .then((res) => setImageObject(res.data))
//       .catch((err) => console.log(err));
//   };


  return (
    <div className="addHorsePage">
      <div className="wrapper">
        <div id="content" className="d-flex">
          <Navbar />
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
                onChange={handleImgInputChange}
                name="image"
                placeholder="Add an image..."
              />
              {/* <AddImageBtn onClick={uploadImage} /><br></br> */}
              <FormBtn disabled={!formObject.name} onClick={handleFormSubmit}>
                Submit Horse
              </FormBtn>
            </form>
            {horses.length ? (
              <HorsesList>
                {[...horses].map((horse) => {
                  return (
                    <ListItem key={horses._id}>
                      <a href={"/horses/" + horse._id}>{horse.name}, {horse.breed}, {horse.age} yrs, {horse.height}hh</a>
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
