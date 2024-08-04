import React, { useEffect, useState } from "react";
import {
	collection,
	getDocs,
	getFirestore,
	limit,
	query,
	where,
} from "firebase/firestore";

function Query() {
	const [product, setProduct] = useState({});
	useEffect(() => {
		const db = getFirestore();

		const q = query(
			collection(db, "items"),
			where("categoria", "==", "Alimentos"),
			limit(5)
		);
		getDocs(q).then((snapshot) => {
			snapshot.size === 0
				? console.log("No hay nada")
				: setProduct(
						snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
				  );
		});
	}, []);
	console.log(product);

	return <div>Query</div>;
}

export default Query;
