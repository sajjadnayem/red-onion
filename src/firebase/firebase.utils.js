import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "../config/secret.config";

//Init APP
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const firestore = firebase.firestore();

//Sign in with GOOGLE popup
const provider = new firebase.auth.GoogleAuthProvider();
export const signInwithGoogle = () => auth.signInWithPopup(provider);

//Sign in with email and password
export const signinwithemailpassword = (email, password) => {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((res) => {})
		.catch((e) => {
			console.log(e.message);
		});
};

//Create User with Email and Password
export const signUpNewUser = async (email, password, name) => {
	try {
		const res = await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password);
		const newUser = {
			...res.user,
			displayName: name
		};
		createProfileDocument(newUser);
	} catch (err) {
		console.log(err.message);
		return err.message;
	}
};

// Store To Database
export const createProfileDocument = async (userAuth) => {
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email, photoURL } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				photoURL,
				createdAt
			});
		} catch (error) {
			console.log(error.message);
		}
	}
	return userRef;
};

export default firebase;
