import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/posts.css";

export const PostCard = () => {
    const picURL = "https://apod.nasa.gov/apod/image/1106/NGC3372_gendlerhannahoe.jpg";

    return (
        <div className="post">
            <div className="">
                <div className="card">
                    <img
                        src={picURL}
                        className="card-img-top"
                        alt="wtf?"
                        onError={e => e.target.src = "https://placehold.co/400x550"}
                    />
                    <div className="card-body">
                        <h5 className="card-title">My first post</h5>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi</p>
                    </div>
                </div>
                <div className="button-group d-flex flex-row mb-3 pt-3">
                    <button className="btn me-3" style={{color: "#ffffff",}}><i className="fa-solid fa-hand-spock fa-xl"></i> Like</button>
                    <button className="btn me-3" style={{color: "#ffffff",}}><i className="fa-solid fa-cow fa-xl"></i> Dislike</button>
                </div>
            </div>
        </div>
    );
};
