import React, { useState } from "react";
import UploadPhoto from '../UploadPhoto'

function AddHorseForm() {
  const [input, setInput] = useState({
    name: "",
    // breed: "",
    // age: "",
    // height: "",
    // intakeDate: "",
    // activeStatus: "",
    // lastVetAppt: "",
    // farrier: "",
    // farrierCycle: "",
    // deworming: "",
    // dewormingCycle: "",
    imageUrl: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            name="name"
            value={input.name}
            autoComplete="off"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="breed"
            value={input.breed}
            autoComplete="off"
            placeholder="Breed"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="age"
            value={input.age}
            autoComplete="off"
            placeholder="Age"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="height"
            value={input.height}
            autoComplete="off"
            placeholder="Height"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="intakeDate"
            value={input.intakeDate}
            autoComplete="off"
            placeholder="Intake Date"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="activeStatus"
            value={input.activeStatus}
            autoComplete="off"
            placeholder="Active Status"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="lastVetAppt"
            value={input.lastVetAppt}
            autoComplete="off"
            placeholder="Last Vet Appt"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="farrier"
            value={input.farrier}
            autoComplete="off"
            placeholder="Farrier"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="farrierCycle"
            value={input.farrierCycle}
            autoComplete="off"
            placeholder="Farrier Cycle"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="deworming"
            value={input.deworming}
            autoComplete="off"
            placeholder="Deworming"
          />
        </div>

        <div>
          <input
            onChange={handleChange}
            name="dewormingCycle"
            value={input.dewormingCycle}
            autoComplete="off"
            placeholder="Deworming Cycle"
          />
        </div>

        <div>
          <h3>Add Image</h3>
          <div className="file-field input-field">
            <div className="btn">
              <span>Browse</span>
              <input type="file" name="image" onChange={input.imageUrl} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" />
            </div>
          </div>
        </div>
        <div className='center'>
        <button onClick={UploadPhoto} className='btn center'>
          upload
        </button>
      </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddHorseForm;
