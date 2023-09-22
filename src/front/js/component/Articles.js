import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase.js";

import "../../styles/articles.css";


export const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
           const articles = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
           }));
           setArticles(articles);
           console.log(articles);
        });
    }, []); //empty array to stop the continuous loop
    return (
        <div>
            {articles && (
                    articles.map(({id,title,description,imageUrl,createdAt}) => (
                        <div className="article-card mt-3 p-3" key={id}>
                            <div className="row">
                                <div className="col-3">
                                    <img src ={imageUrl} alt = "title"  style={{height: 180, width: 220}}/>
                                </div>
                                <div className="article-content col-6">
                                    <h2>{title}</h2>
                                    <p>{createdAt.toDate().toDateString()}</p>
                                    <h4>{description}</h4>
                                </div>
                            </div>    
                        </div>
                    ))

                )}

        </div>
    )
}

