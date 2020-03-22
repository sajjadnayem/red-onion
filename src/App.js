import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import ProductDetail from "./pages/product-detail-page/ProductDetail";
import Header from "./components/headers/Header";
import AuthPage from "./pages/auth-page/AuthPage";
import CartPage from "./pages/cart-Page/CartPage";
import NotFound from "./pages/404-not-found/NotFound";
import OrderSummery from "./pages/OrderSummery/OrderSummery";
import { auth, createProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";
import PrivateRoute from "./components/utilis/PrivateRoute";

import { useHistory } from "react-router-dom";

function App({ setCurrentUser, currentUser }) {
	let history = useHistory();

	useEffect(() => {
		auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
		});
	}, [setCurrentUser]);

	return (
		<Fragment>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/cart" component={CartPage} />

				<Route path="/item/:productID" component={ProductDetail} />
				<Route
					path="/auth"
					render={() =>
						currentUser ? <Redirect to={history.goBack()} /> : <AuthPage />
					}
				/>
				<PrivateRoute path="/order-summery">
					<OrderSummery />
				</PrivateRoute>
				<Route path="*" component={NotFound} />
			</Switch>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
