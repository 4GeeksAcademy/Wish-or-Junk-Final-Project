import { Timestamp, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable, upload } from "firebase/storage";
import { db, storage } from "../../firebase.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "../../styles/articles.css";


export const AddArticle = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: Timestamp.now().toDate(),
    });

    const [progress, setProgress] = useState(0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });

    };

    const handlePublish = () => {
        if (!formData.title || !formData.description || !formData.image) {
            alert("Please fill all the fields");
            return;
        };

        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);

        const uploadImage = uploadBytesResumable(storageRef, formData.image);

        uploadImage.on("state_changed",
            (snapshot) => {
                const progressPercent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progressPercent);
            },
            (err) => {
                console.log(err);
            },
            () => {
                setFormData({
                    title: "",
                    description: "",
                    image: "",
                });

                getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                    const articleRef = collection(db, "Articles");
                    addDoc(articleRef, {
                        title: formData.title,
                        description: formData.description,
                        imageUrl: url,
                        createdAt: Timestamp.now().toDate(),
                    })
                        .then(() => {
                            toast("Article added successfully", { type: "success" });
                            setProgress(0);
                        })
                        .catch((err) => {
                            toast("Error adding article", { type: "error" });
                        });
                });
            }
        );
    };
    return (

        <div className="create-article-card p-3 mt-4 mx-2" style={{ position: "fixed", color: "white" }}>
            <>
                <h2>Create article</h2>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control mb-3"
                        value={formData.title}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                {/* description */}
                <label htmlFor="">Description</label>
                <textarea
                    name="description"
                    className="form-control mb-4"
                    value={formData.description}
                    onChange={(e) => handleChange(e)}
                    style={{height: 200}}
                />

                {/* image */}
                <label htmlFor="">Image</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control"
                    onChange={(e) => handleImageChange(e)}
                    
                />

                {progress === 0 ? null : (
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped mt-2"
                            style={{ width: `${progress}%` }}
                        >
                            {`uploading image ${progress}%`}
                        </div>
                    </div>
                )}
                <button
                    className="form-control btn bg-warning mt-2"
                    onClick={handlePublish}
                    style={{color: "black"}}
                >
                    Publish
                </button>
            </>
        </div>
    );
}