import React, { useState, useContext, useEffect } from "react";

import { ImCart } from "react-icons/im";
import { ShopList } from "../../context";

import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cart.css";
import { Link } from "react-router-dom";

const GuardarStorage = (array, nombre) => {
	//se crea una fucnion para actualizar el storage
	const listaJSON = JSON.stringify(array);
	localStorage.setItem(nombre, listaJSON);
};

function Cart() {
	const { carrito, setCarrito } = useContext(ShopList); //se importa el contexto
	const { shakeCarrito, setShakeCarrito } = useContext(ShopList); //se importa el contexto

	useEffect(() => {
		if (shakeCarrito) {
			const timer = setTimeout(() => {
				setShakeCarrito(false); // Remove the shake effect after 1 second
			}, 1000);

			return () => clearTimeout(timer); // Cleanup the timer on unmount
		}
	}, [shakeCarrito]);

	const [xButton, setButton] = useState(false);
	const [estilo, setEstilo] = useState({ display: "none" }); //se va a usar para setear el carrito, si se ve o no

	const confirmacion = () => {
		//
		Swal.fire({
			//se crea una ventana emergente para chequear que no se elimino sin querer
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
		//se elimina un item del carrito pisando el carrito original pero filtrando que no tenga el id
		const carritoActualizado = carrito.filter((elemento) => elemento.id !== id);
		setCarrito(carritoActualizado);
		GuardarStorage(carritoActualizado, "carrito");
	};

	const compra = {
		//cambia el color del numero del carrito cuando es mayor a 0
		background: "var(--color-quinto)",
		color: "black",
	};
	return (
		<>
			<div
				className={shakeCarrito ? "shake carro" : "carro"}
				onClick={handleClick}
			>
				<ImCart size="30px" />
				{carrito.length != 0 ? (
					<p style={compra}>{carrito.length}</p>
				) : (
					<p>{carrito.length}</p>
				)}
			</div>
			<div style={estilo} className="sombra" onClick={handleClick}></div>
			<div style={estilo} className={estilo ? "swipeLeft compra" : "compra"}>
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
						<button disabled>Finalizar compra</button> //deshabilita el oton si el contador esta en 0
					) : (
						<Link
							style={estilo}
							onClick={handleClick}
							className="btn btn-dark"
							to="confirmar-compra"
						>
							Finalizar compra
						</Link>
					)}
					{carrito.length > 0 ? ( //el boton se va a mostrar solo si hay items
						<button
							style={estilo}
							onClick={() => {
								handleClick();
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
