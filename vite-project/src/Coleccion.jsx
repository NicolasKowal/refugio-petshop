import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function Coleccion() {
	const [product, setProduct] = useState({});
	useEffect(() => {
		const db = getFirestore();
		const itemsCollection = collection(db, "items");
		getDocs(itemsCollection).then((snapshot) => {
			snapshot.size === 0
				? console.log("No hay nada")
				: setProduct(
						snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				  );
		});
	}, []);
	console.log(product);

	return <div>Coleccion</div>;
}

export default Coleccion;
