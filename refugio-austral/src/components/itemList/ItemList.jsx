import React from "react";
import { Productos } from "../../Productos";
import { useParams } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Item from "../item/Item";

function ItemList({ id, nombre, precio, imagen, stock }) {
	const { categoria } = useParams();
	let productosFiltrados = [];
	if (categoria != "Todos") {
		productosFiltrados = Productos.filter(
			(prod) => prod.categoria === categoria
		);
	} else {
		productosFiltrados = Productos;
	}
	return (
		<div className="grid-container">
			{productosFiltrados.map((producto) => (
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
