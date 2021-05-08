import React, { useState, useContext } from 'react';
import './style.css';


var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/sleepytomatoes/upload";
var CLOUDINARY_UPLOAD_PRESET = "soyjke0k";


function UploadPhoto({ setFormObject, formObject }) {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setLoading(true);

    const res = await fetch(CLOUDINARY_URL,
      {
        method: 'POST',
        body: data
      }
    );

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
    const newObject = {picture: file.secure_url}
    console.log({newObject})
    setFormObject({...formObject, picture: image })
    console.log({formObject})
  }

  const handleSavePicture = (image) => {

    if (!image) return
    console.log({formObject})

    // send the books data to our api
//     savePicture({ image })
//       .then(() => {
//         console.log("success")
//       })
//       .catch((err) => console.log(err));
  };



  return (
    <>
       {loading
          ? (<h3>Loading ...</h3>)
          : (<img src={image} style={{ width: '300px' }} />)
        }
        <input
          type="file"
          label="Add an image.."
          onChange={uploadImage}
        >
        </input>
        <button
          onClick={() => handleSavePicture(image)}>UPLOAD
        </button>
      </>
  )
}

export default UploadPhoto;