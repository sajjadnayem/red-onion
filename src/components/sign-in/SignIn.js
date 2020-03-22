import React, { useState } from "react";

import "./signIn.style.css";
import { signinwithemailpassword } from "../../firebase/firebase.utils";

const SignIn = ({ toggleHandler }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});
	const { email, password } = formData;
	const handleSubmit = async (e) => {
		signinwithemailpassword(email, password);
		e.preventDefault();
		setFormData({
			email: "",
			password: ""
		});
	};

	return (
		<div className="sign-in">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="sign-in-content">
							<div className="forms-wrapper">
								<form onSubmit={handleSubmit}>
									<input
										type="email"
										name="email"
										// value="email"
										placeholder="Email"
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
									/>
									<input
										type="password"
										name="password"
										// value="password"
										placeholder="Password"
										onChange={(e) =>
											setFormData({ ...formData, password: e.target.value })
										}
									/>
									<input type="submit" value="Sign In" />
								</form>
								<button className="toggleBtn" onClick={() => toggleHandler()}>
									Create an Account ?
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
