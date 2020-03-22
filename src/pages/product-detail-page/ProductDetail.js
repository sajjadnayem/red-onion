import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./product-detail.style.css";
import { useParams } from "react-router-dom";
import PRODUCTS_DATA from "../../assets/PRODUCTS_DATA";
import { addItem, removeItem } from "../../redux/cart/cart.action";

const ProductDetail = ({ cart, addToCart, minusItem }) => {
	const { productID } = useParams();
	const [product, setProduct] = useState([]);

	//GET TARGET ITEM
	useEffect(() => {
		const tempArray = [];
		PRODUCTS_DATA.map((x) => {
			return x.items.forEach((j) => tempArray.push(j));
		});
		const targetProduct = tempArray.find(
			(itemID) => itemID.id.toString() === productID.toString()
		);
		setProduct(targetProduct);
	}, [productID]);

	const updateQty = cart.find((x) => x.id.toString() === productID.toString());

	const { name, imageUrl, description, price } = product;

	return (
		<div className="product-details-page">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="product-detail-content">
							<h1>{name}</h1>
							<p>{description}</p>
							<div className="product-detail-price">
								<h2>
									$ <span>{price}</span>
								</h2>
								<div className="product-detail-qty">
									<button
										onClick={() => minusItem(product)}
										disabled={!updateQty ? true : false}>
										-
									</button>
									<span>
										{updateQty && updateQty.quantity ? updateQty.quantity : 0}
									</span>
									<button onClick={() => addToCart(product)}>+</button>
								</div>
							</div>
							<div className="add-cart">
								<button onClick={() => addToCart(product)}>Add to Cart</button>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="product-detail-thumbnail">
							<img src={imageUrl} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cart: state.cart.cartItems
});

const mapDispatchToProps = (dispatch) => ({
	addToCart: (item) => dispatch(addItem(item)),
	minusItem: (item) => dispatch(removeItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
