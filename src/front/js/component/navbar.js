import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ openSignupModal }) => {
  return (
    <nav className="navbar bg-transparent font-monospace">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand ms-0 btn fw-bold fs-1 project">
            <strong className="text-warning text-gradient">Wish</strong> Or{" "}
            <i className="text-secondary text-gradient">Junk</i>{" "}
          </span>
        </Link>
        <div className="ml-auto">
          <Link to="/home">
            <button className="text-warning btn ">Home</button>
          </Link>
          <Link to="/about-us">
            <button className="text-warning btn">About Us</button>
          </Link>
          <Link to="/posts">
            <button className="text-warning btn">Posts</button>
          </Link>
          <Link to="/shuffle">
            <button className="text-warning btn">Shuffle</button>
          </Link>
          <button className="btn links" onClick={openSignupModal}>
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
