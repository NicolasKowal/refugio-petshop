import React, { useEffect, useRef, useState } from "react";
import "./navBar.css";
import { Link } from "react-router-dom";
import Cart from "../cart/Cart";
import { db } from "../../main";

import { collection, getDocs } from "firebase/firestore";

function Navbar() {
	const [Productos, setProductos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const itemCollection = collection(db, "items");
			const itemSnapshot = await getDocs(itemCollection);
			const itemList = itemSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProductos(itemList);
		};

		fetchData();
	}, []);

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
						<button className="">🔎</button>
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
