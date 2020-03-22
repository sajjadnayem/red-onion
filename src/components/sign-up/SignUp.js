import React, { useState } from "react";
import "./signup.style.css";
import { signUpNewUser } from "../../firebase/firebase.utils";

const SignUp = ({ toggleHandler }) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password1: "",
		password2: ""
	});
	const { name, email, password1, password2 } = formData;
	//Change Handler
	const handlerChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	//handlerSubmit
	const handlerSubmit = (e) => {
		e.preventDefault();
		if (password1 !== password2) {
			alert("Password Does not match");
		}
		signUpNewUser(email, password1, name);
		setFormData({
			name: "",
			email: "",
			password1: "",
			password2: ""
		});
	};

	return (
		<div className="sign-up">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="sign-in-content">
							<div className="auth-form">
								<form onSubmit={handlerSubmit}>
									<input
										type="name"
										name="name"
										value={name}
										placeholder="Name"
										onChange={handlerChange}
									/>
									<input
										type="email"
										name="email"
										value={email}
										placeholder="Email"
										onChange={handlerChange}
									/>
									<input
										type="password"
										name="password1"
										value={password1}
										placeholder="Password"
										onChange={handlerChange}
									/>
									<input
										type="password"
										name="password2"
										value={password2}
										placeholder="Password"
										onChange={handlerChange}
									/>
									<input type="submit" value="Sign Up" />
								</form>

								<button className="toggleBtn" onClick={() => toggleHandler()}>
									Already have an Account ?
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
