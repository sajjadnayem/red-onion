import React, { useState } from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";
import authBG from "../../assets/auth-bg.jpg";
import homeLogo from "../../assets/logo2.png";
import "./auth-page.style.css";
import icnGoogle from "../../assets/google.png";
import { signInwithGoogle } from "../../firebase/firebase.utils";

const AuthPage = () => {
	const [toggle, setToggle] = useState(true);
	///TOGGLE HANDLER
	const toggleHandler = () => {
		setToggle(!toggle);
	};
	return (
		<div className="auth-area" style={{ backgroundImage: `url(${authBG})` }}>
			<div className="auth-page-content">
				<div className="auth-page-logo">
					<img src={homeLogo} alt="" />
					<button onClick={signInwithGoogle}>
						<img src={icnGoogle} alt="" />
					</button>
				</div>
				{toggle ? (
					<SignIn toggleHandler={toggleHandler} />
				) : (
					<SignUp toggleHandler={toggleHandler} />
				)}
			</div>
		</div>
	);
};

export default AuthPage;
