import React from "react";
import { useEffect, useState } from "react";

export const Shuffle = () => {
  const [apod, setApod] = useState({});
  useEffect(async () => {
    const url = "https://api.nasa.gov/planetary/apod";
    const get = await fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "api_key": "L7O2NRCMwqrcobZqqbGMP7EsRlUx0HqZSoll8deG",
        "Content-Type": "application/json",
      },
    });
    const data = await get.json();
    setApod(data);
  }, []);
  return apod.map(
    <div className="container">
      <h1>{apod.title}</h1>
      {img ? <img src={apod.url} /> : <video src={apod.url} />}
      <p>{apod.description}</p>
    </div>
  );
};
