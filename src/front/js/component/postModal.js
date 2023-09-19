import React from "react";
import { UploadImages } from "./uploadImages";
import "../../styles/postmodal.css";


export const PostModal = () => {

    const picURL = "https://star-name-registry.com/blog/images/d/0/1/f/a/d01faec7ef04415eec34c1bfe61913e167fb26c7-snr-blog-37-resized.jpg";
    return (
        <div>
            <div className="container d-flex justify-content-center col-6">
                <button type="button" className="btn btn-warning d-grid col-6"
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@getbootstrap">CREATE POST
                </button>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
                <div className="modal-dialog">
                    <div className="post-modal-content modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New Post</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <img
                                        src={picURL}
                                        className="post-img-top"
                                        alt="wtf?"
                                        onError={e => e.target.src = "https://placehold.co/400x550"}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer d-flex justify-content-between">
                                <div>
                                    <input className="d-none" type="file" />
                                    {/* <UploadImages /> */}
                                    <a type="button"><i className="fa-solid fa-upload fa-lg p-2" style={{ color: "#0063D7", }}></i></a>
                                    <a type="button"><i className="fa-solid fa-camera fa-xl" style={{ color: "#0063D7", }}></i></a>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-warning ms-2">Submit Post</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};