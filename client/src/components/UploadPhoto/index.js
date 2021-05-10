import React, { useState } from 'react';
import './style.css';
import DeleteBtn from '../DeleteBtn'


var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/sleepytomatoes/upload";
var CLOUDINARY_UPLOAD_PRESET = "soyjke0k";


function UploadPhoto({ setPictureUrl }) {
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const uploadImage = async e => {
    const files = e.target.files;
    const body = new FormData();
    body.append('file', files[0]);
    body.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    setIsLoading(true);

    const res = await fetch(CLOUDINARY_URL, { method: 'POST', body });

    const file = await res.json();

    setPreviewUrl(file.secure_url);
    setPictureUrl(file.secure_url)
    setIsLoading(false);
  }
  
  
  const clearPreview = e => {
        e.preventDefault();
        const uploadInput = document.querySelector('#uploadInput');
        uploadInput.value = '';
        setPreviewUrl('');
        setPictureUrl('');
  };



  return (
        <section id='uploadPictureSection'>
          {isLoading ? 
            (<h3>Loading ...</h3>) : 
            (previewUrl ?
              <article id='imgPreviewContainer'>
                <DeleteBtn id='removePreviewBtn' onClick={clearPreview} />
                <img id='imgPreview' src={previewUrl}/>
              </article> :
              '')}
          <input
            id='uploadInput'
            type='file'
            onChange={uploadImage}
          />
        </section>
      )
    }
    

export default UploadPhoto;