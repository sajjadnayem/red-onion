import React from "react";
import DeliveryForm from "../../components/delivery-form/DeliveryForm";
import Cart from "../../components/cart/Cart";
import "./cart-page.style.css";

const CartPage = () => {
	return (
		<div className="cart-page">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<DeliveryForm />
					</div>
					<div className="col-md-5">
						<Cart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
