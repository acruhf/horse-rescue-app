import React, { useState, useEffect } from "react";
import axios from "axios";

function UploadPhoto() {
  const ClOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dxrhczeo9/image/upload/";
  const CLOUDINARY_UPLOAD_PRESET = "uflnjq77";
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    try {
      setLoading(true);
      const res = await axios.post(ClOUDINARY_URL, formData);
      const imageUrl = res.data.secure_url;
      const image = await axios.post("http://localhost:3000/upload", {
        imageUrl,
      });
      setLoading(false);
      setImage(image.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function fetchImage() {
      const image = await axios.get("http://localhost:3000/getLatest");
      setImage(image.data);
    }
    fetchImage();
    // eslint-disable-next-line
  }, []);
}

export default UploadPhoto;
