import React, { useState, useEffect } from "react";
import Navbar from '../component/navbar';
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";
import { useAuth, upload } from  "../../firebase.js";
import { BucketTest } from "../component/bucketTest";


import "../../styles/profile.css";

export const Profile = () => {
  const currentUser = useAuth();
  const [photoURL, setPhotoURL] = useState("https://achievebh.org/wp-content/uploads/2023/02/avatar_placeholder.png");
  
  useEffect(() => {
    if(currentUser?.photoURL) {
       setPhotoURL(currentUser.photoURL);
    }
   
  }, [currentUser])
  
  return (
    <div>
      <Navbar />
      <BucketTest />
      <div className="profile-body d-flex justify-content-center">
        <div className="profile-card">
          <div className="card-top d-flex">
            <div className="profile-edit-group">
              <p className="profile-heading">Profile</p>
              <Link to="/edit-profile">
                <span type="button" className="profile-edit">
                  Edit<i className="fa-regular fa-pen-to-square ms-2"></i>
                </span>
              </Link>
            </div>
            <div className="profile-pic-group">
              <div className="profile-pic-orbit">
              <img src={photoURL} alt="Avatar" className="profile-pic" />
                  {/* <i
                    type="button"
                    className="add-pic-icon fa-solid fa-circle-plus fa-2xl"
                    style={{ color: "blue" }}
                  ></i>  */}
              </div>
            </div>
          </div>
          <div className="card-mid d-flex">
            <div className="settings">
              <p className="settings-title text-wrap">Name</p>
              <p className="settings-title text-wrap">Email</p>
            </div>
            <div className="mission-statement text-wrap px-3 pt-3">
              <h5>Mission Statement</h5>
              <p>
                I will seek to learn, for learning is the basis for growth and
                growing is the key to living. I will seek first to understand,
                for understanding is the key to finding value and value is the
                basis for respect, decisions and action.
              </p>
            </div>
          </div>
          <div className="social-media d-flex justify-content-end">
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
      <Footer />
    </div>
  );
};


//RMB