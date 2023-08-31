import React from "react";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Landing = () => {

  return (
    <div className="main mx-4 mt-5 mb-5 border border-4 rounded-3">
      <Navbar />
      <div className="container-fluid mx-3 d-flex overflow-y-auto text-light mission">
        <div className="mt-4 mx-auto">
          <h3 className="mt-2 ms-1 py-2 fs-4">
            THINK YOU WITNESSED A SHOOTING STAR?
          </h3>
          <h1 className="ms-1 py-2 w-75">
            In any 15-minute interval, there's a 20% probability of observing at
            least one shooting star.
          </h1>
          <h3 className="ms-1 py-2 fs-4">
            WE CAN HELP YOU VERIFY THAT FIREBALL, SIGN UP AND FIND OUT.
          </h3>
          <Link to="/sign-up">
            <button className="btn links fw-bold mt-4 ms-2">
              Explore Here!
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
