import React from "react";
import "./home.css";

import { Productos } from "../../Productos";

import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";

function Home() {
	let productosV = Productos.filter((producto) => producto.stock < 20);
	productosV = productosV.slice(5, productosV.length - 1);

	return (
		<>
			<Carousel />
			<div className="container-img">
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/perro`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/disparo-vertical-hermoso-cachorro-labrador-chocolate-pared-blanca_181624-44209.jpg?semt=sph"
						alt="perro"
					/>
					<h5 className="p-3">Perros</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/gato`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/closeup-foto-hermoso-gatito-domestico-jengibre-sentado-sobre-superficie-blanca_181624-35913.jpg?semt=sph"
						alt="gato"
					/>
					<h5 className="p-3">Gatos</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/pájaros`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/vector-gratis/hermoso-colibri-volando-elemento-diseno-pancartas-carteles-folletos-folletos_1262-13457.jpg?semt=sph"
						alt="pajaro"
					/>
					<h5 className="p-3">Aves</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/reptiles`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/lagarto-gecko-naranja-sobre-fondo-blanco_488145-1992.jpg?semt=sph"
						alt="reptil"
					/>
					<h5 className="p-3">Reptiles</h5>
				</Link>
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/conejo`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/conejo-adorable-fondo-blanco_1232-462.jpg?semt=sph"
						alt="conejo"
					/>
					<h5 className="p-3">Conejo</h5>
				</Link>
			</div>
			<div>
				{productosV.map((elemento) => (
					<div key={elemento.id}>
						<h2>{elemento.nombre}</h2>
						<img src={elemento.imagen} alt="" />
					</div>
				))}
			</div>
		</>
	);
}

export default Home;
