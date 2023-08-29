import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import spacePicture from "../../img/Laser_broom_(artistic).jpeg";

// style={{color: 'red', background:`url('${spacePicture}')`, minHeight:'100vh'}}>

export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<div className="container-fluid d-flex overflow-y-auto text-light" >
			<h1 className="mx-auto">Welcome, Stargazer</h1>
			<p className="mx-auto">
				Discuss whats out there from shooting stars to space debris or UFOs. We wont Judge.
			</p>
		</div>
	);
};
