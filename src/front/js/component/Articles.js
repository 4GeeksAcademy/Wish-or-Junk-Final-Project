// Articles.js
import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase.js";
import { updateWishOrJunkCount, getWishAndJunkCount } from "../../firebase";
import "../../styles/articles.css";

export const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [wishCounts, setWishCounts] = useState({});
    const [junkCounts, setJunkCounts] = useState({});

    const handleWishClick = async (articleId) => {
        const newCount = await updateWishOrJunkCount(articleId, 'wish');
        setWishCounts(prev => ({ ...prev, [articleId]: newCount }));
    };

    const handleJunkClick = async (articleId) => {
        const newCount = await updateWishOrJunkCount(articleId, 'junk');
        setJunkCounts(prev => ({ ...prev, [articleId]: newCount }));
    };

    useEffect(() => {
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const articles = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setArticles(articles);
        });

        articles.forEach(async article => {
            const { wish, junk } = await getWishAndJunkCount(article.id);
            setWishCounts(prev => ({ ...prev, [article.id]: wish }));
            setJunkCounts(prev => ({ ...prev, [article.id]: junk }));
        });
    }, [articles]);

    return (
        <div>
            {articles.map(({ id, title, description, imageUrl, createdAt }) => (
                <div className="article-card mt-3 p-3" key={id}>
                    <div className="row">
                        <div className="col-3">
                            <img src={imageUrl} alt="title" style={{ height: 180, width: 220 }} />
                        </div>
                        <div className="article-content col-6">
                            <h2 className="post-title" style={{ fontSize: "18px" }}>{title}</h2>
                            <p className="post-date" style={{ fontSize: "12px" }}>Post Date: {createdAt.toDate().toDateString()}</p>
                            <h4  className="post-comments" style={{ fontSize: "14px" }}>{description}</h4>
                            <label className="comment-label mb-2">Comment:</label>
                            <div className="button-group d-flex flex-row mb-3 pt-3">
                                <button className="btn me-3 btn-outline-success" onClick={() => handleWishClick(id)}>
                                    <i className="fa-solid fa-hand-spock fa-xl"></i> Wish {wishCounts[id] || 0}
                                </button>
                                <button className="btn me-3 btn-outline-danger" onClick={() => handleJunkClick(id)}>
                                    <i className="fa-solid fa-cow fa-xl"></i> Junk {junkCounts[id] || 0}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

