import React from "react";
import { useEffect, useState } from "react";
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
    <div className="shuffy d-flex flex-column text-light">
      <h1 className="display-1">{apod.title}</h1>
      <h3>{apod.date}</h3>
      {/* I know this looks bad but hear me out. it works */}
      {apod.media_type === "image" ? (
        <img src={apod.url} />
      ) : (
        <video className="">
          <source src={apod.url} />
        </video>
      )}
      <p className="">{apod.explanation}</p>
    </div>
  );
};
