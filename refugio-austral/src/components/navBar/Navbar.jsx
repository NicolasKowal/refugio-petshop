import React, { useRef, useState } from "react";
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
	const busqueda = useRef(null);
	const [valorBusqueda, setValorBusqueda] = useState("");
	const handleClick = () => {
		setValorBusqueda(busqueda.current.value);
	};

	return (
		<div>
			<Link to="/como-comprar">como comprar</Link>
			<Link to="/">Home</Link>
			<Link to="contacto">contacto</Link>
			<div>
				<input type="text" onChange={handleClick} ref={busqueda}></input>
				<Link to={`/busqueda/${valorBusqueda}`}>
					<button>S</button>
				</Link>
			</div>
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
