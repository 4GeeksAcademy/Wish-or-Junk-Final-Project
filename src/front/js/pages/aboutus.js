import React from "react";
import "../../styles/aboutus.css";

export const Aboutus = () => {
  return (
    <div className="container">
      <div className="aboutus-container">
        <div className="aboutus-info">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercrafter.com%2F579415-night-sky-gemini-meteor-shower-stars-landscape-trees.html&psig=AOvVaw2XUfFobMhnT8x-qMfhEjom&ust=1694126932274000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCMC0_uGIl4EDFQAAAAAdAAAAABAR" />
        </div>
        <div>
          <h3>Who we are</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="button-container">
            <button>
              <strong>Learn More</strong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
