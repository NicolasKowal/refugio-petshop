import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopList } from "../../context";
import "./item.css";

function Item({ id, nombre, precio, imagen, stock }) {
	const [cantidad, setCantidad] = useState(0);
	const { carrito, setCarrito } = useContext(ShopList);

	const HandleClick = (nombre, cantidad) => {
		if (cantidad !== 0) {
			let buscarEnArray = carrito.findIndex((x) => x.id === id);
			if (buscarEnArray === -1) {
				const total = cantidad * precio;
				const newCartItem = { id, nombre, cantidad, total };
				setCarrito([...carrito, newCartItem]);
			} else {
				const actualizarCarro = [...carrito];
				actualizarCarro[buscarEnArray].cantidad += cantidad;
				actualizarCarro[buscarEnArray].total += cantidad * precio;
				setCarrito(actualizarCarro);
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
					<h5>{nombre}</h5>
					<p>${precio}</p>
					<div className="divCompra">
						<div className="selectorCantidad">
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
						<div className="agregarAlCarrito">
							<button
								className="btn btn-dark"
								onClick={() => {
									HandleClick(nombre, cantidad);
								}}
							>
								Agregar al carrito
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Item;
