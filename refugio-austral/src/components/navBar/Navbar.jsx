import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import Cart from "../cart/Cart";
import customHookFirebase from "../../customHookFirebase";

import "bootstrap/dist/css/bootstrap.min.css";
import "./navBar.css";

function Navbar() {
	const { Productos, loading, error } = customHookFirebase("items");

	let categorias = Productos.map((p) => p.categoria);
	let categoriasFitradas = ["Todos"];
	categorias.forEach((categoria) => {
		if (!categoriasFitradas.includes(categoria)) {
			categoriasFitradas.push(categoria);
		}
	});
	const busqueda = useRef(null);
	const [valorBusqueda, setValorBusqueda] = useState("");
	const handleClick = () => {
		setValorBusqueda(busqueda.current.value);
	};
	if (error) {
		return <p>error</p>;
	}
	return (
		<nav>
			<div className="containerNav">
				<div className="pages">
					<Link to={"/"}>
						<img
							className="imgIco"
							src="https://cdn-icons-png.flaticon.com/128/16779/16779323.png"
							alt="img"
						/>
					</Link>
					<Link to="/">Home</Link>
					<Link to="/como-comprar">¿Como comprar?</Link>
					<Link to="contacto">Contacto</Link>
				</div>
				<div className="cuadroBusqueda">
					<input type="text" onChange={handleClick} ref={busqueda}></input>
					<Link to={`/busqueda/${valorBusqueda}`}>
						<button>🔎</button>
					</Link>
				</div>
				<Cart />
			</div>
			<div className="categorias">
				{categoriasFitradas.map((categoria) => (
					<Link key={categoria} to={`productos/${categoria}`}>
						{categoria}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
