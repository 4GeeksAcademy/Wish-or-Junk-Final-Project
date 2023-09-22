import React from "react";
import { useState, useEffect } from 'react';
import { useAuth, upload }  from  "../../firebase.js";
import "../../styles/postmodal.css";

export const PostModal = () => {
    const [newPost, setNewPost] = useState(" ")
    const [posts, setPosts] = useState([]) //empty array for posts

    const handleSubmit = (e) => {
        e.preventDefault()
        setPosts([...posts, { id: crypto.randomUUID(), title: newPost, completed: false }])
        setNewPost("")
    }

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

    const picURL = "https://star-name-registry.com/blog/images/d/0/1/f/a/d01faec7ef04415eec34c1bfe61913e167fb26c7-snr-blog-37-resized.jpg";

    return (
        <div className="container d-flex justify-content-center col-6">
            <button type="button" className="btn btn-warning d-grid col-6"
                data-bs-toggle="modal" data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap">CREATE POST
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="post-modal-content modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <form className="post-form" onSubmit={handleSubmit} >
                                <div className="mb-3">
                                    <img
                                        src={picURL}
                                        className="post-img-top"
                                        alt="wtf?"
                                        onError={e => e.target.src = "https://placehold.co/400x550"}
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="input_style">
                                        <input className="hide_file" type="file" onChange={handleChange} placeholder="" />
                                        <button className="choose-file-button" disabled={loading || !photo} onClick={handleClick}>Upload</button>
                                    </div>
                                    <label htmlFor="message-text" className="col-form-label">Title:</label>
                                    <input
                                        value={newPost}
                                        onChange={e => setNewPost(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="message-text"
                                        rows="5">
                                    </input>
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea
                                        value={newPost}
                                        onChange={e => setNewPost(e.target.value)}
                                        type="text"
                                        className="form-control"
                                        id="message-text"
                                        rows="5">
                                    </textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <div>
                                <input className="d-none" type="file" />
                                <a type="button"><i className="fa-solid fa-upload fa-lg p-2" style={{ color: "#0063D7", }}></i></a>
                                <a type="button"><i className="fa-solid fa-camera fa-xl" style={{ color: "#0063D7", }}></i></a>
                            </div>
                            <div>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-warning ms-2">Submit Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
