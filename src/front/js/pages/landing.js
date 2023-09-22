import React, { useState } from 'react';
import Navbar from '../component/navbar';
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
    <div className="">
      <Navbar openSignupModal={openSignupModal} openLoginModal={openLoginModal} />
      <div className="container-fluid d-flex text-light mission main mt-2 mb-2 border border-4 rounded-3">
        <div className="mt-4 mx-auto">
          <h4 className="mt-2 ms-1 py-2">
            Have you wished upon a shooting star? Maybe not as often as you think!
          </h4>
          <h3 className="ms-1 py-2 w-75">
            In any 15-minute interval, there's a 20% probability of observing at least one fireball in the sky. What many think are shooting stars though turn out to be satellites, space crafts, and other human-made debris, posing as comets and meteors in the night sky.
          </h3>
          <h5 className="ms-1 py-2">
            Our site is here to help you confirm what you saw and help you determine if your wish will be coming true. Explore our posts and sign up now!
          </h5>
          <Link to="/sign-up">
            <button className="btn links fw-bold mt-4 ms-2">
              Explore Here!
            </button>
          </Link>
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