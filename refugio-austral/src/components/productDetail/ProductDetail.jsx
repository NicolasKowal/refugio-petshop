import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import customHookFirebase from "../../customHookFirebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "./productDetail.css";

function ProductDetail() {
	const { Productos, loading, error } = customHookFirebase("items");

	const { id } = useParams();
	const producto = Productos.find((elemento) => elemento.id === id);
	const estilo = { minWidth: "100vh" };

	if (loading) {
		return <span style={estilo} className="loader" />;
	}

	if (error) {
		return (
			<div className="typeOfError">
				<img src="https://http.dog/204.jpg" alt="https://http.dog/204.jpg" />
			</div>
		);
	}

	return (
		<div className="container-producto">
			<br />
			<div className="detalleProducto">
				<h2 className="d-flex align-items-center justify-content-center text-center">
					{producto.nombre}
				</h2>
				<img src={producto.imagen} alt={producto.imagen} />
				<h3 className="d-flex align-items-center justify-content-center text-center">
					${producto.precio}
				</h3>
				<p className="d-flex align-items-center justify-content-center text-center p-2">
					{producto.descripcion}
				</p>
			</div>
			<div className="p-3 d-flex align-items-center justify-content-center">
				<Link to={"/productos/Todos"}>
					<button className="btn btn-secondary">Volver</button>
				</Link>
			</div>
		</div>
	);
}

export default ProductDetail;
