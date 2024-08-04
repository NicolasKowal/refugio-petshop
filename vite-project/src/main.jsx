import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBCeeul0iuroblYpkYkmwIBL20KxGLnsLM",
	authDomain: "refugio-austral.firebaseapp.com",
	projectId: "refugio-austral",
	storageBucket: "refugio-austral.appspot.com",
	messagingSenderId: "728068600841",
	appId: "1:728068600841:web:cf3973eb7106e1081db4d8",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<App />
	</>
);
