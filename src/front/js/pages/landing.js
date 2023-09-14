import React, { useState } from 'react';
import { Navbar } from '../component/navbar';
import { Footer } from '../component/footer';
import { Link } from 'react-router-dom';
import { Login } from '../pages/login';
import { Signup } from '../pages/signup';
import '../../styles/home.css';

export const Landing = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeModals = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
  };

  return (
    <div className="main mx-4 mt-5 mb-5 border border-4 rounded-3">
     <Navbar openSignupModal={openSignupModal} />
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
          <button
            className="btn links fw-bold mt-4 ms-2"
            onClick={openLoginModal}
          >
            Log In
          </button>
          <button
            className="btn links fw-bold mt-4 ms-2"
            onClick={openSignupModal}
          >
            Sign Up
          </button>
        </div>
      </div>

      {isLoginModalOpen && (
        <div className="modal-container">
          <div className="modal-background" onClick={closeModals}></div>
          <div className="auth-modal-content">
            <Login />
          </div>
        </div>
      )}
      {isSignupModalOpen && (
        <div className="modal-container">
          <div className="modal-background" onClick={closeModals}></div>
          <div className="auth-modal-content">
            <Signup />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};