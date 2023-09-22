import React from "react";
import { Link } from "react-router-dom";
import { useAuth, logout } from "../../firebase.js";
import logo from "../../img/wish_or_junk_logo.png"

const Navbar = ({ openSignupModal, openLoginModal }) => {
    const currentUser = useAuth();

    const handleLogout = async () => {
        try {
            await logout();

        } catch (error) {
            console.error("Error logging out: ", error.message);

        }
    };

    return (
        <nav className="navbar bg-transparent font-monospace">
            <div className="container-fluid">
                <Link to="/">
                    <span className="navbar-brand ms-0 btn fw-bold fs-1 project">
                        <img className="me-1 mb-3" src={logo} height={50} width={50} />
                        <strong className="text-warning text-gradient">Wish</strong>{" "}
                        <span className="skewed text-white">Or</span>{" "}
                        <i className="text-secondary text-gradient">Junk</i>{" "}
                    </span>
                </Link>
                <div className="ml-auto">
                    <Link to="/">

                        <button className="text-warning btn ">Home</button>
                    </Link>
                    <Link to="/posts">
                        <button className="text-warning btn">Posts</button>
                    </Link>
                    <Link to="/shuffle">
                        <button className="text-warning btn">Shuffle</button>
                    </Link>

                    <Link to="/about-us">
                        <button className="text-warning btn">About Us</button>
                    </Link>

                    {currentUser ? (
                        <>
                            <strong className="me-3 text-white fw-bold">{currentUser.email}</strong>
                            <button className="btn links fw-bold me-2" onClick={handleLogout}>
                                Logout
                            </button>
                        </>

                    ) : (
                        <>
                            <button className="btn links fw-bold me-2" onClick={openLoginModal}>
                                Log In
                            </button>
                            <button className="btn links fw-bold" onClick={openSignupModal}>
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

