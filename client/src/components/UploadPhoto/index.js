import React, { useState, useContext } from 'react';
import './style.css';


var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/sleepytomatoes/upload";
var CLOUDINARY_UPLOAD_PRESET = "soyjke0k";


function UploadPhoto({ setPictureUrl }) {
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const uploadImage = async e => {
    const files = e.target.files;
    const body = new FormData();
    body.append('file', files[0]);
    body.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setLoading(true);

    const res = await fetch(CLOUDINARY_URL, { method: 'POST', body });

    const file = await res.json();

    setPreviewUrl(file.secure_url);
    setPictureUrl(file.secure_url)
    setLoading(false);
  }


//   const handleSavePicture = (image) => {

//     if (!image) return
//     console.log({formObject})

    // send the books data to our api
//     savePicture({ image })
//       .then(() => {
//         console.log("success")
//       })
//       .catch((err) => console.log(err));
//   };



  return (
    <>
       {loading
          ? (<h3>Loading ...</h3>)
          : (<img src={previewUrl} style={{ width: '100px' }} />)
        }
        <input
          type="file"
          label="Add an image.."
          onChange={uploadImage}
        >
        </input>
        {/* <button
          onClick={() => handleSavePicture(pictureUrl)}>UPLOAD
        </button> */}
      </>
  )
}

export default UploadPhoto;