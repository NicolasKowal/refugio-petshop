import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import customHookFirebase from "../../customHookFirebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "./productDetail.css";

function ProductDetail() {
	const { Productos, loading, error } = customHookFirebase("items");

	const { id } = useParams();
	const producto = Productos.find((elemento) => elemento.id === parseInt(id));

	if (!producto) {
		return (
			<div className="typeOfError">
				<img src="https://http.dog/204.jpg" alt="https://http.dog/204.jpg" />
			</div>
		);
	}
	if (loading) {
		return <span className="loader" />;
	}
	return (
		<>
			<div className="container-producto">
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
			</div>
			<div className="p-3 d-flex align-items-center justify-content-end w-75">
				<Link to={"/productos/"}>
					<button className="btn btn-secondary">Volver</button>
				</Link>
			</div>
		</>
	);
}

export default ProductDetail;
