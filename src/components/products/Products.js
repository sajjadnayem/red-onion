import React, { useState, useEffect } from "react";
import "./products.style.css";
import { connect } from "react-redux";

import FAKE_DATA from "../../assets/PRODUCTS_DATA";
import Product from "../product/Porduct";
import { Link } from "react-router-dom";

const Products = ({ cart }) => {
	//State
	const [data, setData] = useState([]);
	const [activeEle, setActiveEle] = useState("breakfast");

	//Category Handler
	const catHandle = (categoryName) => {
		const getFilterData = FAKE_DATA.find((cat) => cat.title === categoryName);
		setData([...getFilterData.items]);
		setActiveEle(categoryName);
	};

	//Default Data load
	useEffect(() => {
		setData([...FAKE_DATA[0].items]);
	}, []);

	return (
		<div className="products-section">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="products-cat-title">
							<ul>
								<li onClick={() => catHandle("breakfast")}>
									<span
										className={`${activeEle === "breakfast" ? "active" : " "}`}>
										Breakfast
									</span>
								</li>
								<li onClick={() => catHandle("lunch")}>
									<span className={`${activeEle === "lunch" ? "active" : " "}`}>
										Lunch
									</span>
								</li>
								<li onClick={() => catHandle("dinner")}>
									<span
										className={`${activeEle === "dinner" ? "active" : " "}`}>
										Dinner
									</span>
								</li>
							</ul>
						</div>
						<div className="products">
							<div className="row">
								{data.map((item, i) => (
									<div className="col-md-4" key={i}>
										<Product key={i} item={item} />
									</div>
								))}
							</div>
						</div>
						<div className="checkout-btn-box">
							<Link
								to="/cart"
								className={`${
									cart.length && cart.length > 0
										? "inCartActive"
										: "inCartEmpty"
								}`}>
								<span>Checkout Your Food</span>
							</Link>
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

export default connect(mapStateToProps)(Products);
