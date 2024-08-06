import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { productos } from "./src/firebase/Productos.js";
const firebaseConfig = {
	apiKey: "AIzaSyBCeeul0iuroblYpkYkmwIBL20KxGLnsLM",
	authDomain: "refugio-austral.firebaseapp.com",
	projectId: "refugio-austral",
	storageBucket: "refugio-austral.appspot.com",
	messagingSenderId: "728068600841",
	appId: "1:728068600841:web:9b3c5b6fbafc62bb1db4d8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const uploadData = async () => {
	const collectionRef = collection(db, "items");

	try {
		for (let product of productos) {
			await addDoc(collectionRef, product);
		}
		console.log("Datos cargados exitosamente!");
	} catch (error) {
		console.error("Error al cargar los datos: ", error);
	}
};

uploadData();
