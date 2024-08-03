import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../main";
import { Link } from "react-router-dom";
import Item from "../item/Item";
import Carousel from "../carousel/Carousel";
import "./home.css";

function Home() {
	const [Productos, setProductos] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const itemCollection = collection(db, "items");
			const itemSnapshot = await getDocs(itemCollection);
			const itemList = itemSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setProductos(itemList);
			setLoading(false);
		};
		fetchData();
	}, []);

	let productosV = Productos.filter((producto) => producto.stock < 20);
	productosV = productosV.slice(5, productosV.length - 1);
	return (
		<main>
			<br />
			<Carousel />
			<br />
			<h3 className="titulo">Todo lo que tu mascota necesite</h3>
			<br />
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
			<br />
			<h3 className="titulo">Lo mas vendido</h3>
			<br />
			{loading ? <span className="loader" /> : ""}
			<div className="productosMasVendidos d-flex align-items-center justify-content-around w-90 mx-auto">
				{productosV.map((elemento) => (
					<Item
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
				<div className="d-flex align-items-center justify-content-start">
					<input type="text" className="text" />
					<button type="submit" className="btn btn-dark">
						Suscribirse
					</button>
				</div>
			</div>
		</main>
	);
}

export default Home;
