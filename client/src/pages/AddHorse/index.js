import React, { useState, useEffect, useCallback } from "react";
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
        picture: formObject.picture
    })
        .then(res => loadHorses(res.data))
        .catch(err => console.log(err));
    }
};

// const setFormObjectPicture = useCallback(
//     () => {
//       doSomething(a, b);
//     },
//     [a, b],
//   );

  // trying to use callback to change formObject 
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

//   function handleImgInputChange(event) {
//     const { image, value } = event.target;
//     setImageObject({ ...imageObject, [image]: value });
//   }

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
                setFormObject={setFormObject}
                formObject={formObject}
                name="picture"
              />
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
