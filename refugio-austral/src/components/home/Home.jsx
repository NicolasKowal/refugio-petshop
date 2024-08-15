import React from "react";
import { Link } from "react-router-dom";

import Item from "../item/Item";
import Carousel from "../carousel/Carousel";
import customHookFirebase from "../../customHookFirebase";

import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
	window.scrollTo(0, 0);
	const { Productos, loading, error } = customHookFirebase("items");

	let productosV = Productos.filter((producto) => producto.stock < 20);

	return (
		<main>
			<br />
			<Carousel />
			<br />
			<h3 className="titulo">Todo lo que tu mascota necesite</h3>
			<br />
			<div className="container-img d-flex align-items-center justify-content-around mx-auto">
				<Link
					className="d-flex flex-column justify-content-center align-items-center"
					to={`/perro`}
				>
					<img
						className="p-3"
						src="https://img.freepik.com/foto-gratis/disparo-vertical-hermoso-cachorro-labrador-chocolate-pared-blanca_181624-44209.jpg?semt=sph"
						alt="perro"
					/>
					<h4 className="p-3">Perros</h4>
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
					<h4 className="p-3">Gatos</h4>
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
					<h4 className="p-3">Aves</h4>
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
					<h4 className="p-3">Reptiles</h4>
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
					<h4 className="p-3">Conejo</h4>
				</Link>
			</div>
			<br />
			<h3 className="titulo">Lo mas vendido</h3>
			<br />
			{loading ? <span className="loader" /> : ""}
			<div className="productosMasVendidos d-flex align-items-center justify-content-around w-90 mx-auto">
				{productosV.map((elemento) => (
					<Item
						key={elemento.id}
						nombre={elemento.nombre}
						precio={elemento.precio}
						imagen={elemento.imagen}
						stock={elemento.stock}
						id={elemento.id}
					/>
				))}
			</div>
			<br />
			<div className="suscribe d-flex mx-0">
				<div className="d-flex align-items-center">
					<img
						src="https://i.postimg.cc/R0KpBtNy/gratis-png-golden-retriever-cachorros-ninos-y-perros-una-guia-profesional-para-ayudar-a-las-familias.png"
						alt="perro"
					/>
					<h3 className="d-flex align-items-center">
						Suscribite para recibir todos los descuentos y sorteos
					</h3>
				</div>
				<div className="d-flex align-items-center justify-content-center">
					<input type="text" placeholder="Escribi tu mail aca!" />
					<button type="submit" className="btn btn-secondary btnSombra">
						Suscribirse
					</button>
				</div>
			</div>
		</main>
	);
}
export default Home;
