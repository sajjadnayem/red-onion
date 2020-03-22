import React, { useState } from "react";
import "./delivery-form.style.css";
import { connect } from "react-redux";
import { getDeliveryDetails } from "../../redux/cart/cart.action";

const DeliveryForm = ({ getDeliveryAddress }) => {
	const [formData, setFormData] = useState({
		houseName: "",
		roadNo: "",
		policeStation: "",
		city: ""
	});
	const handlerChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handlerSubmit = (e) => {
		getDeliveryAddress(formData);
		e.preventDefault();
	};

	return (
		<div className="delivery-form">
			<h1>Edit Delivery Details</h1>
			<hr />
			<form className="forms-wrapper" onSubmit={handlerSubmit}>
				<input
					type="text"
					name="houseName"
					placeholder="Delivery to door"
					onChange={handlerChange}
				/>
				<input
					type="text"
					name="roadNo"
					placeholder="Flat , suite of floor"
					onChange={handlerChange}
				/>
				<input
					type="text"
					name="policeStation"
					placeholder="Police Station"
					onChange={handlerChange}
				/>
				<input
					type="text"
					name="city"
					placeholder="City"
					onChange={handlerChange}
				/>
				<input type="submit" value="Save & Continue" />
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	getDeliveryAddress: (data) => dispatch(getDeliveryDetails(data))
});

export default connect(null, mapDispatchToProps)(DeliveryForm);
