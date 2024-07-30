import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopList } from "../../context";
import "./item.css";

function Item({ id, nombre, precio, imagen, stock }) {
	const [cantidad, setCantidad] = useState(0);
	const { listaCarrito, setListaCarrito } = useContext(ShopList);

	const HandleClick = (nombre, cantidad) => {
		if (cantidad !== 0) {
			let buscarEnArray = listaCarrito.findIndex((x) => x.id === id);
			if (buscarEnArray === -1) {
				const total = cantidad * precio;
				const newCartItem = { id, nombre, cantidad, total };
				setListaCarrito([...listaCarrito, newCartItem]);
			} else {
				const actualizarCarro = [...listaCarrito];
				actualizarCarro[buscarEnArray].cantidad += cantidad;
				actualizarCarro[buscarEnArray].total += cantidad * precio;
				setListaCarrito(actualizarCarro);
			}
		}
	};
	return (
		<>
			<div className="card">
				<Link className="img-contenedor" to={`producto/${id}`}>
					<img className="prod-img" src={imagen} alt={imagen} />
				</Link>
				<div className="card-body">
					<h5 className="card-title">{nombre}</h5>
					<p className="precio">${precio}</p>
				</div>
				<div className="divCompra">
					<button
						className="btn btn-dark"
						onClick={() => {
							if (cantidad !== 0) {
								setCantidad(cantidad - 1);
							}
						}}
					>
						-
					</button>
					<p className="d-flex align-items-center">{cantidad}</p>
					<button
						className="btn btn-dark"
						onClick={() => {
							if (cantidad < stock) {
								setCantidad(cantidad + 1);
							}
						}}
					>
						+
					</button>
				</div>
				<button
					className="btn btn-dark"
					onClick={() => {
						HandleClick(nombre, cantidad);
					}}
				>
					Agregar al carrito
				</button>
			</div>
		</>
	);
}

export default Item;
