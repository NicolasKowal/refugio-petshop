import React, { useContext, useEffect, useState } from "react";
import { ShopList } from "../../context";
import "./finalizarCompra.css";

function FinalizarCompra() {
	const { compraFinal } = useContext(ShopList);
	const [datos, setDatos] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (compraFinal && Object.keys(compraFinal).length > 0) {
			setDatos(compraFinal);
			setLoading(false);
		} else {
			setLoading(false);
		}
	}, [compraFinal]);

	if (loading) {
		return <div>Cargando...</div>;
	}

	if (!datos || !datos.comprador || !datos.carrito) {
		return <div>No hay datos disponibles para mostrar.</div>;
	}

	return (
		<div>
			<h2 className="d-flex justify-content-center">Datos de facturacion</h2>
			<div className="datosUsuario container">
				<div className="row">
					<legend className="col-2">Nombre</legend>
					<p className="col-10">{datos.comprador.nombre}</p>
				</div>
				<div className="row">
					<legend className="col-2">Apellido</legend>
					<p className="col-10">{datos.comprador.apellido}</p>
				</div>
				<div className="row">
					<legend className="col-2">Telefono</legend>
					<p className="col-10">{datos.comprador.telefono}</p>
				</div>
				<div className="row">
					<legend className="col-2">Email</legend>
					<p className="col-10">{datos.comprador.mail}</p>
				</div>
			</div>
			<h2 className="d-flex justify-content-center">Tu carrito</h2>
			<div className="container">
				{datos.carrito.map((item) => (
					<div className="row" key={item.id}>
						<p className="col-6">{item.nombre}</p>
						<p className="col-6">${item.total}</p>
					</div>
				))}
			</div>
			<h2 className="d-flex justify-content-center">Total</h2>
			<h3 className="total">$ {datos.total}</h3>
		</div>
	);
}

export default FinalizarCompra;
