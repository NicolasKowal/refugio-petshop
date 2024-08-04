import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function Creacion() {
	const EnviarOrden = () => {
		const order = {
			buyer: { name: "Agustin" },
			items: [{ name: "perro", precio: 100 }],
			total: 100,
		};
		const db = getFirestore();
		const orderCollection = collection(db, "ordenes");

		addDoc(orderCollection, order).then(({ id }) => setOrderId(id));
	};
	EnviarOrden();
	return <div>Creacion</div>;
}

export default Creacion;
