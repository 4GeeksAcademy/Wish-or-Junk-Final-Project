import React, { useState, useEffect } from "react";
import Navbar from '../component/navbar';
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import { ProfilePicUpload } from "../component/profilePicUpload";
// import { BucketTest } from "./bucketTest";
import { useAuth, upload } from "../../firebase.js";
import "../../styles/editprofile.css";

// import { Survey } from "./survey";


export const EditProfile = props => {
  const currentUser = useAuth();
  const [photoURL, setPhotoURL] = useState("https://achievebh.org/wp-content/uploads/2023/02/avatar_placeholder.png");
  const saveAnswer = (e) => {
    e.preventDefault();

    const elementsArray = [...e.target.elements];

    console.log(elementsArray);
    const formData = elementsArray.reduce((accumulator, currentValue) => {
      if (currentValue.id) {
        accumulator[currentValue.id] = currentValue.value;
      }

      return accumulator;
    }, {});

    db.collection("profiledata").add(formData);
  };

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }

  }, [currentUser])

  return (
    <div>
      <Navbar />
      {/* <BucketTest /> */}

      <div className="edit-profile-body d-flex justify-content-center">
        <div className="edit-profile-card">
          <div className="card-top d-flex">
            <div className="profile-edit-group">
              <p className="profile-heading">Profile</p>
              <Link to="/profile">
                <span type="button" className="profile-edit">
                  Save<i className="fa-regular fa-floppy-disk ms-2"></i>
                </span>
              </Link>
            </div>
            <div className="profile-pic-group-2">
              <div className="profile-pic-orbit-2">
                <img src={photoURL} alt="Avatar" className="profile-pic-2" />
                {/* <i
                  type="button"
                  className="add-pic-icon fa-solid fa-circle-plus fa-2xl"
                  style={{ color: "blue" }}
                ></i> */}
              </div>
            </div>
          </div>
          <div className="file-upload position-absolute top-50 start-50 translate-middle">
            <ProfilePicUpload />
          </div>
          <div className="card-mid d-flex">
            <form className="settings" onSubmit={saveAnswer}>

              <input
                type="text"
                id="Name"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm "
                placeholder="Ron Jon"
              />
              <input
                type="text"
                id="e-email"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm "
                placeholder="ronjon@bluemail.com"
              />

              {/* social media handles */}
              <input
                type="text"
                id="facebook"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm "
                placeholder="https://www.instagram.com/"
              />
              <input
                type="text"
                id="instagram"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm "
                placeholder="https://twitter.com/?lang=en"
              />
              <input
                type="text"
                id="linkedin"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm "
                placeholder="https://www.facebook.com/"
              />
              <input
                type="text"
                id="twitter"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm "
                placeholder="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
              />

              <button className="btn" disabled>Submit</button>
            </form>
            <div className="mission-social d-flex flex-column mb-3 justify-content-center">
              <div className="mission-statement-2 text-wrap px-3 pt-3">
                <h5>Mission Statement</h5>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="missionstatement"
                    rows="4"
                    placeholder="I will seek to learn, for learning is the basis for growth and
                    growing is the key to living. I will seek first to understand,
                    for understanding is the key to finding value and value is the
                    basis for respect, decisions and action."
                  ></textarea>
                </div>
              </div>
              {/* social media icon buttons */}
              <div className="social-media-2 d-flex">
                <a type="button" href="https://www.instagram.com/" className="btn">
                  <i className="fa-brands fa-instagram fa-xl" />
                </a>
                <a
                  type="button"
                  href="https://twitter.com/?lang=en"
                  className="btn"
                >
                  <i className="fa-brands fa-twitter fa-xl" />
                </a>
                <a type="button" href="https://www.facebook.com/" className="btn">
                  <i className="fa-brands fa-facebook-f fa-xl px-3" />
                </a>
                <a
                  type="button"
                  href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
                  className="btn"
                >
                  <i className="lin fa-brands fa-linkedin-in fa-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// RMB
