import React, { useState, useEffect } from "react";
import { updateWishOrJunkCount, getWishAndJunkCount } from "../../firebase";
import "../../styles/posts.css";

export const PostCard = ({ postId }) => {
    const [wishCount, setWishCount] = useState(0);
    const [junkCount, setJunkCount] = useState(0);

    const handleWishClick = async () => {
        const newCount = await updateWishOrJunkCount(postId, 'wish');
        setWishCount(newCount);
    };

    const handleJunkClick = async () => {
        const newCount = await updateWishOrJunkCount(postId, 'junk');
        setJunkCount(newCount);
    };

    useEffect(() => {
        const fetchCounts = async () => {
            const { wish, junk } = await getWishAndJunkCount(postId);
            setWishCount(wish);
            setJunkCount(junk);
        };
        fetchCounts();
    }, [postId]);

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
                                <button className="btn me-3 btn-outline-success" onClick={handleWishClick}>
                                    <i className="fa-solid fa-hand-spock fa-xl"></i> Wish {wishCount}
                                </button>
                                <button className="btn me-3 btn-outline-danger" onClick={handleJunkClick}>
                                    <i className="fa-solid fa-cow fa-xl"></i> Junk {junkCount}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
// RMB




