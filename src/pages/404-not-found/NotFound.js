import React from "react";
import { Link } from "react-router-dom";
import "./notfound.style.css";
import authBG from "../../assets/auth-bg.jpg";

const NotFound = () => {
	return (
		<div className="not-found" style={{ backgroundImage: `url(${authBG})` }}>
			<h1>404</h1>
			<p>Under maintains</p>
			<Link to="/">Back to Home</Link>
		</div>
	);
};

export default NotFound;
