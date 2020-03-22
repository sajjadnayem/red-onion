import React from "react";
import "./header.style.css";
import logo from "../../assets/logo2.png";
import cartIcon from "../../assets/shopping-cart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.action";

const Header = ({ currentUser, setCurrentUser, cart }) => {
	const handlerSignOut = () => {
		auth.signOut();
		setCurrentUser(null);
	};

	const getQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
	return (
		<div
			className="header-section"
			style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff" }}>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="home-logo">
							<Link to="/">
								<img src={logo} alt="" />
							</Link>
						</div>
					</div>
					<div className="col-md-8">
						<div className="options">
							<div className="option">
								<Link to="/cart" className="cart-icon">
									<img src={cartIcon} alt="" />
									<span className="cartItemCount">{getQuantity}</span>
								</Link>
							</div>
							<div className="option">
								{currentUser ? (
									<button onClick={handlerSignOut}>Log Out</button>
								) : (
									<Link to="/auth">login</Link>
								)}
							</div>
							<div className="option">
								{currentUser ? (
									<Link to="/my-account" className="primary-btn">
										My Account
									</Link>
								) : (
									<Link to="/auth" className="primary-btn">
										{" "}
										Sign Up
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	cart: state.cart.cartItems
});

const maspDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, maspDispatchToProps)(Header);
