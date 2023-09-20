import React, { useEffect, useState } from "react";
import { useAuth, upload } from "../../../../src/firebase.js";
import { currentUser } from "firebase/auth";

import "../../styles/profileupload.css";

export const ProfilePicUpload = ({ onClose }) => {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState("https://theinfiniteexperience.world/files/common/Sans-titre-9.png");

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0])
    }
  }

  function handleClick() {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }

  }, [currentUser])


  return (
    <div className="input_style">
      <input className="hide_file" type="file" onChange={handleChange} placeholder="+" />
      <button className="choose-file-button" disabled={loading || !photo} onClick={handleClick}>Upload</button>
    </div>
  );

}


//RMB
