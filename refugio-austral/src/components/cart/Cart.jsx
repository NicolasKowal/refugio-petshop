import React, { useState, useContext } from "react";

import { ImCart } from "react-icons/im";
import { ShopList } from "../../context";

import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import { Link } from "react-router-dom";

const GuardarStorage = (array, nombre) => {
	const listaJSON = JSON.stringify(array);
	localStorage.setItem(nombre, listaJSON);
};

function Cart() {
	const estiloSwal = { zIndex: 100000 };
	const [xButton, setButton] = useState(false);
	const [estilo, setEstilo] = useState({ display: "none" });
	const { carrito, setCarrito } = useContext(ShopList);
	const confirmacion = () => {
		Swal.fire({
			title: "¿Vaciar carrito de compras?",
			icon: "question",
			confirmButtonText: "Vaciar",
			showCancelButton: "true",
			cancelButtonText: "No vaciar",
		}).then((response) => {
			response.isConfirmed
				? setCarrito([])
				: Swal.fire("Mantendremos tu lista de compras intacta", "", "success");
		});
	};

	const handleClick = () => {
		setEstilo(xButton ? { display: "none" } : { display: "flex" });
		setButton(!xButton);
	};

	const deleteHandleClick = (id) => {
		setCarrito(carrito.filter((elemento) => elemento.id !== id));
		GuardarStorage(carrito, "carrito");
	};

	const compra = {
		background: "var(--color-quinto",
		color: "black",
	};
	return (
		<>
			<div className="carro" onClick={handleClick}>
				<ImCart size="30px" />
				{carrito.length != 0 ? (
					<p style={compra}>{carrito.length}</p>
				) : (
					<p>{carrito.length}</p>
				)}
			</div>
			<div style={estilo} className="sombra" onClick={handleClick}></div>
			<div style={estilo} className="compra">
				<div className="closeBar">
					<button className="btn btn-dark" onClick={handleClick}>
						X
					</button>
				</div>
				<div>
					<ul className="listaS d-flex align-items-center justify-content-center flex-column">
						{carrito.map((elemento) => (
							<li
								className="row-12 d-flex align-items-center justify-content-center"
								key={elemento.id}
							>
								<p className="col-1">{elemento.cantidad}</p>
								<p className="col-6">{elemento.nombre}</p>
								<p className="col-3">$ {elemento.total}</p>
								<button
									className="col-2 btn btn-dark d-flex align-items-center justify-content-center m-0"
									onClick={() => {
										deleteHandleClick(elemento.id);
									}}
								>
									&#128465;
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="finalizarCompra d-flex align-items-center justify-content-around">
					{carrito.length === 0 ? (
						<button disabled>Finalizar compra</button>
					) : (
						<Link to="finalizar-compra">
							<button className="btn btn-dark">Finalizar compra</button>
						</Link>
					)}
					{carrito.length > 0 ? (
						<button
							onClick={() => {
								confirmacion();
							}}
							className="btn btn-dark"
						>
							Limpiar carrito
						</button>
					) : (
						""
					)}
				</div>
			</div>
		</>
	);
}

export default Cart;
