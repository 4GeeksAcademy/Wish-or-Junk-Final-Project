import React from "react";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "../../styles/profile.css";

export const Profile = () => {

    return (
        <div>
            <Navbar />
            
            <div className="profile-body d-flex justify-content-center">
                <div className="profile-card">
                    <div className="card-top d-flex">
                        <p className="profile-heading">Profile</p>
                        <div className="">
                            <div className="profile-pic-orbit">
                            <div className="profile-pic">
                                <i className="add-pic-icon fa-solid fa-circle-plus fa-2xl" style={{color: "blue",}}></i>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-mid d-flex">
                        <div className="settings">
                            <p>Name</p>
                            <p>email</p>
                            <p>Username</p>
                            <p>Number of posts</p>
                        </div>
                        <div className="mission-statement text-wrap px-3 pt-3">
                            <h5>Mission Statement</h5>
                            <p>I will seek to learn, for learning is the basis for 
                                growth and growing is the key to living. I will 
                                seek first to understand, for understanding is 
                                the key to finding value and value is the basis 
                                for respect, decisions and action.</p>
                        </div>
                    </div>
                    <div className="social-media d-flex justify-content-end">
                        <a type="button" className="btn"><i className="fa-brands fa-instagram fa-xl"/></a>   
                        <a type="button" className="btn"><i className="fa-brands fa-twitter fa-xl"/></a>
                        <a type="button" className="btn"><i className="fa-brands fa-facebook-f fa-xl px-3"/></a>
                        <a type="button" className="btn"><i className="lin fa-brands fa-linkedin-in fa-xl"/></a>
                    </div>    
                </div>
            </div>
            <Footer />
        </div>
    );
};