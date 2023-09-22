import React, { useState, useEffect } from "react";
import Navbar from '../component/navbar';
import { Footer } from "../component/footer";
// import { PostCard } from "../component/postCard";
import { PostModal } from "../component/postModal";



import "../../styles/posts.css";
import { Articles } from "../component/Articles";
import { AddArticle } from "../component/AddArticles";


export const PostSlide = () => {
    const picURL = "https://apod.nasa.gov/apod/image/1106/NGC3372_gendlerhannahoe.jpg";

    return (
        <div>
            <Navbar />
            <div className="container d-flex flex-row mb-3">
                {/* <div className="heading-1 p-2">
                    <a className="btn back-btn px-2" style={{color: "#ffffff",}}><i class="fa-solid fa-shuttle-space fa-rotate-180" style={{color: "#ffffff",}}></i> Back</a>
                </div> */}
                <div className="card-row1 grid p-2 gap-5 d-flex overflow-auto w-auto">
                    {/* <PostCard /> */}
                    <Articles />
                </div>
                <div className="col-md-4">
                    <AddArticle />
                </div>
            </div>
            {/* <PostModal /> */}

            <Footer />
        </div>
    );
};

//RMB