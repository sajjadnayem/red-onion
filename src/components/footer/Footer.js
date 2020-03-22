import React from "react";
import homeLogo from "../../assets/logo2.png";
import "./footer.style.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer-area">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="footer-logo">
							<img src={homeLogo} alt="" />
						</div>
					</div>
					<div className="col-md-6">
						<div className="footer-content">
							<div className="footer-options">
								<div className="footer-option">
									<Link to="/about">About Online food</Link>
								</div>
								<div className="footer-option">
									<Link to="/read">Read our blog</Link>
								</div>
								<div className="footer-option">
									<Link to="/sign">Sign up to deliver</Link>
								</div>
								<div className="footer-option">
									<Link to="/add">Add your restaurant</Link>
								</div>
							</div>
							<div className="footer-options">
								<div className="footer-option">
									<Link to="/get">Get Help</Link>
								</div>
								<div className="footer-option">
									<Link to="/read">Read FAQs</Link>
								</div>
								<div className="footer-option">
									<Link to="/view">View all cities</Link>
								</div>
								<div className="footer-option">
									<Link to="/restaurants">Restaurants near me</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="footer-bottom">
					<div className="row">
						<div className="col-md-6">
							<p>
								Copyright 2020 Red Onion food deliver System{" "}
								<Link>
									
								</Link>
							</p>
						</div>
						<div className="our-links">
							<Link to="/privacy">Privacy Policy</Link>
							<Link to="/terms">Terms of Use</Link>
							<Link to="/pricing">Pricing</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
