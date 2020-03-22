import React from "react";
import "./OrderSummery-page.style.css";
import maps from "../../assets/maps.png";
import deliveryman from "../../assets/diliveryman.png";
import { connect } from "react-redux";

const OrderSummery = ({ currentUser }) => {
	const { displayName, email, photoURL } = currentUser;

	return (
		<div className="order-summery-page">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="map">
							<img src={maps} alt="" />
						</div>
					</div>
					<div className="col-md-5">
						<div className="order-summery">
							<div className="delivery-man-icon">
								<img src={deliveryman} alt="" />
							</div>
							<div className="order-address">
								<div className="client-location">
									<h5>
										Your Location <span>107 Rd no 8</span>
									</h5>
								</div>
								<div className="shop-location">
									<h5>
										Shop Location <span>Gulistan Rd no 8</span>
									</h5>
								</div>
							</div>
							<div className="delivery-time">
								<h1>09.30</h1>
								<p>Estimate delivery time</p>
							</div>
							<div className="client-profile">
								<img
									src={photoURL ? photoURL : "https://placehold.it/50x50"}
									alt=""
								/>
								<h4>
									{displayName} <span>{email}</span>
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(OrderSummery);
