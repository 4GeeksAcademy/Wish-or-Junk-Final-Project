import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/sitemap.css'

export const Sitemap = () => {
    return (
        <div className='map d-flex flex-column'>
            <span className="display-1 fw-bold">
                <strong className="text-warning text-gradient">Wish</strong>{" "}
                <span className="skewed text-white">Or</span>{" "}
                <i className="text-secondary text-gradient">Junk</i>{" "}
            </span>
            <div className="card px-1 py-1 w-40 align-items-center bg-dark">
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/">
                        Landing
                    </Link>
                </button>
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/login">
                        Login
                    </Link>
                </button>
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </button >
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/profile">
                        Profile
                    </Link>
                </button>
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/edit-profile">
                        Edit Profile
                    </Link>
                </button>
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/posts">
                        Posts
                    </Link>
                </button>
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/shuffle">
                        Shuffle
                    </Link>
                </button>
                <button className='btn btn-secondary mb-2 fw-semibold'>
                    <Link to="/about-us">
                        About Us
                    </Link>
                </button>
            </div>
        </div>
    );
}