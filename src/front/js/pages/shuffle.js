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
      const response = await fetch(url, { method: "Get" });
      const data = await response.json();
      setApod(data);
    }
    apodData();
  }, []);
  return (
    <div className="shuffle container bg-dark bg-gradient text-light">
      <Navbar />
      <div className="header">
        <h1 className="ms-1 display-4">{apod.title}</h1>
        <h4 className="ml-5">{apod.date}</h4>
      </div>
      <div className="body text-center">
        {apod.media_type === "image" ? (
          <img src={apod.url} className="img-fluid vx-50" />
        ) : (
          <video>
            <source src={apod.url} />
          </video>
        )}
        <p className="border border-secondary-emphasis rounded-2 px-3 text-start mt-2">
          {apod.explanation}
        </p>
      </div>
      <Footer />
    </div>
  );
};
