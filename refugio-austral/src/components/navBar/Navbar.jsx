import React from "react";
import { Link } from "react-router-dom";
import { Productos } from "../../Productos";
import Cart from "../cart/Cart";

function Navbar() {
	let categorias = Productos.map((p) => p.categoria);
	let categoriasFitradas = ["Todos"];
	categorias.forEach((categoria) => {
		if (!categoriasFitradas.includes(categoria)) {
			categoriasFitradas.push(categoria);
		}
	});
	return (
		<div>
			<Link to="/como-comprar">como comprar</Link>
			<Link to="/">Home</Link>
			<Link to="contacto">contacto</Link>
			{categoriasFitradas.map((categoria) => (
				<Link key={categoria} to={`productos/${categoria}`}>
					{categoria}
				</Link>
			))}
			<Cart />
		</div>
	);
}

export default Navbar;
