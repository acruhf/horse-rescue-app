import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success">
      {props.children}
    </button>
  );
}



// import React, {useState} from 'react'
// import API from "../../utils/API"

// const AddHorseForm = () => {
//     const [horse, setHorse] = useState({
//         name: '',
//         breed: '',
//         age: '',
//         height: '',
//         intakeDate: '',
//         activeStatus: '',
//         lastVetAppt: '',
//         farrier: '',
//         farrierCycle: '',
//         deworming: '',
//         dewormingCycle: ''
//     })

//     function handleChange(event) {
//         const { name, value } = event.target;

//         setHorse(prevhorsesetHorse => {
//             return {
//                 ...prevhorsesetHorse,
//                 [name]: value
//             }
//         })
//     }

//     function handleSubmit(event) {
//         event.preventDefault();
//         const newHorse = {
//             name: horse.name,
//         }

//         console.log(horse)
//         API.saveHorse(newHorse)
//             .then(res =>
//                 setHorse(res.data))
//             .catch(err => console.log(err)
//             )
//     }

    
//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <input onChange={handleChange} name="name" value={horse.name} autoComplete="off" placeholder="Name" />
//                 </div>
                
//                 <div>
//                     <input onChange={handleChange} name="breed" value={input.breed} autoComplete="off" placeholder="Breed" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="age" value={input.age} autoComplete="off" placeholder="Age" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="height" value={input.height} autoComplete="off" placeholder="Height" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="intakeDate" value={input.intakeDate} autoComplete="off" placeholder="Intake Date" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="activeStatus" value={input.activeStatus} autoComplete="off" placeholder="Active Status" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="lastVetAppt" value={input.lastVetAppt} autoComplete="off" placeholder="Last Vet Appt" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="farrier" value={input.farrier} autoComplete="off" placeholder="Farrier" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="farrierCycle" value={input.farrierCycle} autoComplete="off" placeholder="Farrier Cycle" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="deworming" value={input.deworming} autoComplete="off" placeholder="Deworming" />
//                 </div>

//                 <div>
//                     <input onChange={handleChange} name="dewormingCycle" value={input.dewormingCycle} autoComplete="off" placeholder="Deworming Cycle" />
//                 </div> 

//                 <div>
//                     <input type="submit" value="Submit" />
//                 </div>
//                 <button onClick={handleSubmit} className="btn btn-info">Submit</button>
//             </form>
//         </div>
//     )
// }



