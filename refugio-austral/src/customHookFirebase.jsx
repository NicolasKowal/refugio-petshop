import { useEffect } from "react";

import { useState } from "react";
import { db } from "./main";
import { collection, getDocs } from "firebase/firestore";

function customHookFirebase(coleccion) {
	const [Productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const itemCollection = collection(db, "items");
				const itemSnapshot = await getDocs(itemCollection);
				const itemList = itemSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setProductos(itemList);
				setLoading(false);
			} catch (error) {
				setError(error.message);
				setLoading(false);
			}
		};
		fetchData();
	}, [coleccion]);

	return { Productos, loading, error };
}

export default customHookFirebase;
/* el hook devuelve un array un estado de loading y un error */
