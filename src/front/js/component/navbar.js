import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-transparent">
			<div className="container-fluid ms-0">
				<Link to="/">
					<span className="navbar-brand ms-1 btn text-white fw-bold project">Wish Or Junk</span>
				</Link>
				<div className="ml-auto">
				<Link to="/home">
						<button className="text-warning btn ">
							Home
						</button>
					</Link>
				<Link to="/about-us">
						<button className="text-warning btn">
							About Us
						</button>
					</Link>
				<Link to="/posts">
						<button className="text-warning btn">
							Posts
						</button>
					</Link>
					<Link to="/shuffle">
						<button className="text-warning btn"> 
							Shuffle
						</button>
					</Link>
					<Link to="/sign-up">
						<button className="btn links">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
