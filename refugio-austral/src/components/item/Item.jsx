import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopList } from "../../context";
import "./item.css";

const GuardarStorage = (array, nombre) => {
	const listaJSON = JSON.stringify(array);
	localStorage.setItem(nombre, listaJSON);
};

function Item({ id, nombre, precio, imagen, stock }) {
	const [cantidad, setCantidad] = useState(0);
	const { carrito, setCarrito } = useContext(ShopList);
	const [texto, setTexto] = useState("Agregar al carrito");
	const [estilo, setEstilo] = useState({});

	const HandleClick = (nombre, cantidad) => {
		if (cantidad !== 0) {
			setTexto("Agregado correctamente");
			setEstilo({ background: "green" });
			let buscarEnArray = carrito.findIndex((x) => x.id === id);
			if (buscarEnArray === -1) {
				const total = cantidad * precio;
				const newCartItem = { id, nombre, cantidad, total };
				const newCart = [...carrito, newCartItem];
				setCarrito(newCart);
				GuardarStorage(newCart, "carrito");
			} else {
				const actualizarCarro = [...carrito];
				actualizarCarro[buscarEnArray].cantidad += cantidad;
				actualizarCarro[buscarEnArray].total += cantidad * precio;
				setCarrito(actualizarCarro);
				GuardarStorage(actualizarCarro, "carrito");
			}
		}
	};
	return (
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
							className="btn"
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
							className="btn"
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
							style={estilo}
							className="btn btn-dark"
							onClick={() => {
								HandleClick(nombre, cantidad);
							}}
						>
							{texto}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Item;
