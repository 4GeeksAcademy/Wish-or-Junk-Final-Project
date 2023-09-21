import React, { useState, useEffect } from "react";

import "../../styles/posts.css";

export const PostCard = () => {

    const picURL = "https://apod.nasa.gov/apod/image/1106/NGC3372_gendlerhannahoe.jpg";

    return (
        <div className="post">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img
                            src={picURL}
                            className="card-img-top"
                            alt="wtf?"
                            onError={e => e.target.src = "https://placehold.co/400x550"}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="button-group d-flex flex-row mb-3 pt-3">
                                <button className="btn me-3 btn-outline-success" style={{ color: "#ffffff", }}><i className="fa-solid fa-hand-spock fa-xl"></i> Wish</button>
                                <button className="btn me-3 btn-outline-danger" style={{ color: "#ffffff", }}><i className="fa-solid fa-cow fa-xl"></i> Junk</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// RMB




