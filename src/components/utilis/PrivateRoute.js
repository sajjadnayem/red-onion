import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component, currentUser, children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				currentUser ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/auth",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(PrivateRoute);
