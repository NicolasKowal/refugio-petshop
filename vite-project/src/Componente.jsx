import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function Componente() {
	const [product, setProduct] = useState({});
	useEffect(() => {
		const db = getFirestore();
		const biciRef = doc(db, "items", "0P9aEkP6y2hMugO2dKyo");
		getDoc(biciRef).then((snapshot) => {
			if (snapshot.exists()) {
				setProduct({ id: snapshot.id, ...snapshot.data() });
			}
		});
	}, []);
	console.log(product);

	return <div>Componente</div>;
}

export default Componente;
