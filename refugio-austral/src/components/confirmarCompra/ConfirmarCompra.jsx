import React, { useContext, useRef, useState } from "react";
import { ShopList } from "../../context";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./confirmarCompra.css";

function ConfirmarCompra() {
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

	const handleChange = () => {};

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
		<div className="containerCompra">
			<br />
			<Link to="/" className="d-flex justify-content-right">
				<button className="btn btn-dark">Volver</button>
			</Link>
			<br />
			<h2 className="titulo">Tu compra</h2>
			<br />
			<div className="productos">
				<div className="container encabezado">
					<div className="row">
						<h3 className="col-4">Cantidad</h3>
						<h3 className="col-4">Producto</h3>
						<h3 className="col-4">Subtotal</h3>
					</div>
				</div>
				{carrito.map((elemento) => (
					<div key={elemento.id} className="container">
						<div className="row">
							<p className="col-1">{elemento.cantidad}</p>
							<p className="col-9">{elemento.nombre}</p>
							<p className="col-2">$ {elemento.total}</p>
						</div>
					</div>
				))}
			</div>
			<div className="total d-flex justify-content-end align-items-center">
				<h3 className="d-flex justify-content-end align-items-center justify-content-center">
					Total: ${precioFinal}
				</h3>
			</div>
			<br />
			<h2 className="titulo">Datos para la factura</h2>
			<br />
			<form className="formDatos d-flex flex-column align-items-center">
				<div className="d-flex align-items-center justify-content-around">
					<legend>Nombre</legend>
					<input
						onChange={handleChange}
						type="text"
						name="name"
						placeholder="Nombre"
						ref={nombre}
					/>
				</div>
				<div className="d-flex align-items-center justify-content-around">
					<legend>Apellido</legend>
					<input
						onChange={handleChange}
						name="last_name"
						type="text"
						placeholder="Apellido"
						ref={apellido}
					/>
				</div>
				<div className="d-flex align-items-center justify-content-around">
					<legend>E-Mail</legend>
					<input
						onChange={handleChange}
						type="text"
						name="email"
						placeholder="Email"
						ref={email}
					/>
				</div>
				<div className="d-flex align-items-center justify-content-around">
					<legend>Telefono</legend>
					<input
						onChange={handleChange}
						name="phone"
						type="text"
						placeholder="Telefono"
						ref={telefono}
					/>
				</div>
			</form>
			<br />
			<button onClick={cargarCompra} className="btn btn-dark">
				Siguiente
			</button>
			<br />
		</div>
	);
}

export default ConfirmarCompra;
