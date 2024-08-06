import React from "react";
import { useParams } from "react-router-dom";

import Item from "../item/Item";
import customHookFirebase from "../../customHookFirebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "./itemList.css";

function ItemList() {
	const { categoria } = useParams();
	const { animal } = useParams();
	const { busqueda } = useParams();

	const { Productos, loading, error } = customHookFirebase("items");

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
		ProductosAMostrar = Productos.filter(
			(producto) => producto.tags && producto.tags.includes(animal)
		);
	} else if (!animal && !busqueda) {
		ProductosAMostrar = Productos.filter(
			(producto) => producto.categoria === categoria
		);
	}
	if (loading) {
		return <span className="loader" />;
	}
	if (error) {
		return <p>error</p>;
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
