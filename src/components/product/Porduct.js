import React from "react";
import { connect } from "react-redux";

import "./product.style.css";
import { Link } from "react-router-dom";
import autocratIcn from "../../assets/addtocart.svg";
import { addItem } from "../../redux/cart/cart.action";

const Porduct = ({ item, addToCart }) => {
	const { id, name, imageUrl, price, title } = item;

	return (
		<div className="product">
			<div className="product-thumbnail">
				<Link to={`/item/${id}`}>
					<img src={imageUrl} alt="" />
				</Link>
				<div className="hover-content">
					<button onClick={() => addToCart(item)}>
						<img src={autocratIcn} alt="" />
					</button>
				</div>
			</div>
			<Link to={`/item/${id}`}>
				<div className="product-info">
					<h5 className="name">{name}</h5>
					<p className="title">{title}</p>
					<h3 className="price">$ {price}</h3>
				</div>
			</Link>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addToCart: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Porduct);
