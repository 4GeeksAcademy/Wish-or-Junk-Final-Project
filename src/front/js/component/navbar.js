import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-warning bg-gradient">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand ms-0">Wish Or Junk</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
