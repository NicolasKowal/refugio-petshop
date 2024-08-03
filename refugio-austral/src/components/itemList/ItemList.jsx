import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../main";

import Item from "../item/Item";

import "bootstrap/dist/css/bootstrap.min.css";
import "./itemList.css";

function ItemList() {
	const { categoria } = useParams();
	const { animal } = useParams();
	const { busqueda } = useParams();
	const [Productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const itemCollection = collection(db, "items");
			const itemSnapshot = await getDocs(itemCollection);
			const itemList = itemSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProductos(itemList);
			setLoading(false);
		};
		fetchData();
	}, []);

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
	if (loading) {
		return <span className="loader" />;
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
