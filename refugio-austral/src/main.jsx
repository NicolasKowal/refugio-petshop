import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const KEY = import.meta.env.VITE_KEY;

const firebaseConfig = {
	apiKey: KEY,
	authDomain: "refugio-austral.firebaseapp.com",
	projectId: "refugio-austral",
	storageBucket: "refugio-austral.appspot.com",
	messagingSenderId: "728068600841",
	appId: "1:728068600841:web:9b3c5b6fbafc62bb1db4d8",
};

const productos = initializeApp(firebaseConfig);
const db = getFirestore(productos);

export { db };

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<App />
	</>
);
