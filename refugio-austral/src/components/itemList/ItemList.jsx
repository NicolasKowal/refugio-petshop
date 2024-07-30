import React from "react";
import { Productos } from "../../Productos";

import "bootstrap/dist/css/bootstrap.min.css";

import Item from "../item/Item";
import { useParams } from "react-router-dom";

function ItemList() {
	const { categoria } = useParams();
	const { animal } = useParams();
	const { busqueda } = useParams();

	let ProductosAMostrar = [];

	if (!categoria && !animal) {
		ProductosAMostrar = Productos.filter((producto) =>
			producto.tags.includes(busqueda)
		);
		if (ProductosAMostrar.length === 0) {
			console.log(ProductosAMostrar);
			return (
				<div className="typeOfError">
					<img src="https://http.dog/498.jpg" alt="not-found" />
				</div>
			);
		} else if (!categoria && !busqueda) {
			ProductosAMostrar = Productos.filter((producto) =>
				producto.tags.includes(animal)
			);
		} else if (!animal && !busqueda) {
			ProductosAMostrar = Productos.filter(
				(producto) => producto.categoria === categoria
			);
		}
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
