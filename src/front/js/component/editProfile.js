import React, { useState, useEffect } from "react";
import Navbar from '../component/navbar';
import { Footer } from "../component/footer";
import { Link } from "react-router-dom";

import "../../styles/editprofile.css";

export const EditProfile = () => {
  return (
    <div>
      <Navbar />
      {/* <UploadImages /> */}
      <div className="profile-body d-flex justify-content-center">
        <div className="profile-card">
          <div className="card-top d-flex">
            <div className="profile-edit-group">
              <p className="profile-heading">Profile</p>
              <Link to="/profile">
                <a type="button" className="profile-edit">
                  Save<i className="fa-regular fa-floppy-disk ms-2"></i>
                </a>
              </Link>
            </div>
            <div className="profile-pic-group-2">
              <div className="profile-pic-orbit-2">
                <div className="profile-pic-2">
                  <i
                    type="button"
                    className="add-pic-icon fa-solid fa-circle-plus fa-2xl"
                    style={{ color: "blue" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-mid d-flex">
            <div className="settings">
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm "
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm "
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm "
                />
              </div>
              <div className="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm "
                />
              </div>
            </div>
            <div className="mission-statement-2 text-wrap px-3 pt-3">
              <h5>Mission Statement</h5>
              <div class="mb-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="4"
                ></textarea>
              </div>
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
