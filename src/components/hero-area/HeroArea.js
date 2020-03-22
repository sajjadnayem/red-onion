import React from "react";
import "./hero-area.style.css";

import heroBg from "../../assets/hero-bg.png";

const HeroArea = () => {
	return (
		<section
			className="hero-area"
			style={{ backgroundImage: `url(${heroBg})` }}>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="hero-content">
							<h1>Best food waiting for your belly</h1>
							<div className="search-box">
								<form>
									<input
										type="text"
										name="search"
										placeholder="Search food items"
									/>
									<input
										type="submit"
										value="Search"
										className="primary-btn searchBtn"
									/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroArea;
