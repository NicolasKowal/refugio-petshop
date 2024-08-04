import React from "react";
import { doc, updateDoc, getFirestore } from "firebase/firestore";

function Modificar() {
	const Actualizar = () => {
		const db = getFirestore();
		const orderDoc = doc(db, "items", "0P9aEkP6y2hMugO2dKyo");
		updateDoc(orderDoc, { stock: 20 });
	};
	Actualizar();
	return <div>Creacion</div>;
}

export default Modificar;
