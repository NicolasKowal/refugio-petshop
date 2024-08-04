import React, { useContext, useRef, useState } from "react";
import { ShopList } from "../../context";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import "bootstrap/dist/css/bootstrap.min.css";

function FinalizarCompra() {
	const nombre = useRef();
	const apellido = useRef();
	const email = useRef();
	const telefono = useRef();

	const [name, setName] = useState("n");
	const [lastname, setLastname] = useState("l");
	const [phone, setPhone] = useState(0);
	const [mail, setMail] = useState("n");

	const [datosDeUsuario, setDatosDeUsuario] = useState({});
	const [compraFinal, setCompraFinal] = useState({});

	const { carrito, setCarrito } = useContext(ShopList);
	const precioFinal = carrito.reduce(
		(accumulator, elemento) => accumulator + elemento.total,
		0
	);

	const handleChange = () => {
		setName(nombre.current.value);
		setLastname(apellido.current.value);
		setPhone(telefono.current.value);
		setMail(email.current.value);
	};

	const cargarCompra = () => {
		setDatosDeUsuario({
			nombre: nombre.current.value,
			apellido: apellido.current.value,
			telefono: telefono.current.value,
			mail: email.current.value,
		});
		setCompraFinal({
			comprador: datosDeUsuario,
			carrito: carrito,
			total: precioFinal,
		});

		const db = getFirestore();
		const orderCollection = collection(db, "ordenes");
		addDoc(orderCollection, compraFinal).then(({ id }) => setOrderId(id));
	};

	return (
		<>
			<br />
			<Link to="/" className="d-flex justify-content-right">
				<button className="btn btn-dark">Volver</button>
			</Link>
			<h2>Tu compra</h2>
			<br />
			<div className="d-flex justify-content-around align-items-center">
				<h3>Cantidad</h3>
				<h3>Producto</h3>
				<h3>Subtotal</h3>
			</div>
			{carrito.map((elemento) => (
				<div key={elemento.id} className="container">
					<div className="row">
						<p className="col-1">{elemento.cantidad}</p>
						<p className="col-10 text-left">{elemento.nombre}</p>
						<p className="col-1">{elemento.total}</p>
					</div>
				</div>
			))}
			<h3 className="d-flex justify-content-right">Total: {precioFinal}</h3>
			<br />
			<h2>Datos para la factura</h2>
			<br />
			<form className="d-flex flex-column align-items-center">
				<legend>Nombre</legend>
				<input
					onChange={handleChange}
					type="text"
					name="name"
					placeholder="nombre"
					ref={nombre}
				/>
				<legend>Apellido</legend>
				<input
					onChange={handleChange}
					name="last_name"
					type="text"
					placeholder="apellido"
					ref={apellido}
				/>{" "}
				<legend>E-Mail</legend>
				<input
					onChange={handleChange}
					type="text"
					name="email"
					placeholder="mail"
					ref={email}
				/>
				<legend>Telefono</legend>
				<input
					onChange={handleChange}
					name="phone"
					type="text"
					placeholder="celular"
					ref={telefono}
				/>
			</form>
			<button onClick={cargarCompra} className="btn btn-dark">
				Finalizar Compra
			</button>
		</>
	);
}

export default FinalizarCompra;
