import React from "react";
import { connect } from "react-redux";
import { addItem, removeItem } from "../../redux/cart/cart.action";

const CartItem = ({ addToCart, minusItem, item }) => {
	const { name, imageUrl, price, quantity } = item;

	return (
		<div className="cart-item">
			<div className="cart-item-img">
				<img src={imageUrl} alt="" />
			</div>
			<div className="cart-item-info">
				<h6>{name}</h6>
				<h3>$ {price}</h3>
				<p>Delivery free</p>
			</div>
			<div className="cart-item-action">
				<button onClick={() => minusItem(item)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => addToCart(item)}>+</button>
			</div>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addToCart: (item) => dispatch(addItem(item)),
	minusItem: (item) => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CartItem);
