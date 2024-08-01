import React, { useEffect, useState } from "react";
import { Productos } from "../../Productos";

import "bootstrap/dist/css/bootstrap.min.css";

import Item from "../item/Item";
import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemList() {
	const [prod, setProd] = useState([]);
	useEffect(() => {
		const dv = getFirestore();
		const docId = "AIzaSyBCeeul0iuroblYpkYkmwIBL20KxGLnsLM";

		const biciRef = doc(dv, "item", docId);
		getDoc(biciRef).then((snapshot) =>
			snapshot.exists()
				? setProd(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data })))
				: ""
		);
	}, []);
	console.log(prod);

	const { categoria } = useParams();
	const { animal } = useParams();
	const { busqueda } = useParams();

	let ProductosAMostrar = [];
	if (categoria === "Todos") {
		ProductosAMostrar = [...Productos];
	} else if (!categoria && !animal) {
		ProductosAMostrar = Productos.filter((producto) =>
			producto.tags.includes(busqueda)
		);
		if (ProductosAMostrar.length === 0) {
			return (
				<div className="typeOfError">
					<img src="https://http.dog/498.jpg" alt="not-found" />
				</div>
			);
		}
	} else if (!categoria && !busqueda) {
		ProductosAMostrar = Productos.filter((producto) =>
			producto.tags.includes(animal)
		);
	} else if (!animal && !busqueda) {
		ProductosAMostrar = Productos.filter(
			(producto) => producto.categoria === categoria
		);
	}
	return (
		<div className="grid-container">
			{ProductosAMostrar.map((producto) => (
				<div key={producto.id}>
					<Item
						nombre={producto.nombre}
						descripcion={producto.descripcion}
						precio={producto.precio}
						imagen={producto.imagen}
						categoria={producto.categoria}
						stock={producto.stock}
						id={producto.id}
					/>
				</div>
			))}
		</div>
	);
}

export default ItemList;
