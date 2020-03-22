import React from "react";
import rightArrowIco from "../../assets/right-arrow.svg";
import "./service.style.css";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
	const { title, imageUrl, info, route } = data;
	return (
		<div className={`service`}>
			<div className="service-thumbnail">
				<img src={imageUrl} alt="" />
			</div>
			<div className="service-content">
				<h5>{title}</h5>
				<p>{info}</p>
				<Link to={route}>
					See more <img src={rightArrowIco} alt="" />
				</Link>
			</div>
		</div>
	);
};

export default Service;
