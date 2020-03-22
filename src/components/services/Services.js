import React from "react";
import SERVICE_DATA from "../../assets/SERVICES_DATA";
import Service from "../service/Service";
import "./services.style.css";

const Services = () => {
	return (
		<div className="services-area">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="section-title">
							<h1>Why you choose us?</h1>
							<p>
								Barton waited twenty always repair in we do. An delighted
								offending curiosity my is dashwoods at. Boy prosperous
								increasing surrounded.
							</p>
						</div>
					</div>
				</div>
				<div className="services">
					<div className="row">
						{SERVICE_DATA.map((service, i) => (
							<div className="col-md-4" key={i}>
								<Service data={service} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
