import React from "react";
import { useEffect, useState } from "react";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import "../../styles/shuffle.css";

export const Shuffle = () => {
  const [apod, setApod] = useState({});
  useEffect(() => {
    async function apodData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_KEY}`;
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      setApod(data);
    }
    apodData();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <div className="card shuffle bg-dark text-white mx-3">
        <div className="card-header">
          <h1 className="mt-2 mb-0 display-4">{apod.title}</h1>
          <h4 className="mb-2 text-end">{apod.date}</h4>
        </div>
        <div className="card-body">
          <div className="body text-center">
            {apod.media_type === "image" ? (
              <img src={apod.url} className="img-fluid vx-50 rounded-2" />
            ) : (
              <video>
                <source src={apod.url} />
              </video>
            )}
            <div className="card-footer">
              <p className="border border-secondary-emphasis rounded-2 p-3 text-start mt-2">
                {apod.explanation}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
