import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center text-warning">
    <p>
      Made with <i className="fa-solid fa-wand-magic-sparkles text-success"></i>{" "}
      by
      <Link to="/about-us">
        <button className="btn text-warning gradient mb-1">The Wish Or Junk Team</button>
      </Link>
    </p>
  </footer>
);
