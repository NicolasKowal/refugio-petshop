import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopList } from "../../context";
import "./finalizarCompra.css";

function FinalizarCompra() {
	const { setCarrito, setCompraFinal, compraFinal } = useContext(ShopList);
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

	function handleClick() {
		setCarrito([]);
		setCompraFinal({});
		localStorage.removeItem("carrito");
		localStorage.removeItem("datoscompra");
	}
	return (
		<div className="datofinal">
			<br />
			<h1 className="titulo">Felicidades, ¡ya es tuyo!</h1>
			<h3 className="d-flex align-items-center justify-content-center">
				En breves te llegara un mail con el detalle de compra
			</h3>
			<br />
			<h2 className="titulo">Datos de facturacion</h2>
			<div className="datosUsuario container d-flex flex-column">
				<div className="row">
					<p className="col-6">Nombre</p>
					<p className="col-6">{datos.comprador.nombre}</p>
				</div>
				<div className="row">
					<p className="col-6">Apellido</p>
					<p className="col-6">{datos.comprador.apellido}</p>
				</div>
				<div className="row">
					<p className="col-6">Telefono</p>
					<p className="col-6">{datos.comprador.telefono}</p>
				</div>
				<div className="row">
					<p className="col-6">Email</p>
					<p className="col-6">{datos.comprador.mail}</p>
				</div>
			</div>
			<br />
			<h2 className="titulo">Tu compra</h2>
			<br />
			<div className="container">
				{datos.carrito.map((item) => (
					<div className="row" key={item.id}>
						<p className="col-6">{item.nombre}</p>
						<p className="col-6">${item.total}</p>
					</div>
				))}
			</div>
			<br />
			<h2 className="titulo">Total</h2>
			<h3 className="d-flex align-items-center justify-content-center">
				$ {datos.total}
			</h3>
			<div className="d-flex align-items-center justify-content-center ">
				<Link
					className="btn btn-dark btnFinalizar"
					to={"/"}
					onClick={handleClick}
				>
					Home
				</Link>
			</div>
			<br />
		</div>
	);
}

export default FinalizarCompra;
