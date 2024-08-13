import React, { useContext, useEffect, useState } from "react";
import { ShopList } from "../../context";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./confirmarCompra.css";
import { Button } from "bootstrap";

const GuardarStorage = (array, nombre) => {
	const listaJSON = JSON.stringify(array);
	localStorage.setItem(nombre, listaJSON);
};

function ConfirmarCompra() {
	const { carrito, setCarrito } = useContext(ShopList);
	const { compraFinal, setCompraFinal } = useContext(ShopList);

	const precioFinal = carrito.reduce(
		(accumulator, elemento) => accumulator + elemento.total,
		0
	);
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [phone, setPhone] = useState("");
	const [mail, setMail] = useState("");
	const [datosDeUsuario, setDatosDeUsuario] = useState({});
	const [orderId, setOrderId] = useState("");

	const [habilitarBoton, setHabilitarBoton] = useState(true);

	useEffect(() => {
		const emailRegex = /\S+@\S+\.\S+/;
		const phoneValid = phone.trim().length > 0 && !isNaN(phone);
		const camposLlenos =
			name.trim() !== "" &&
			lastname.trim() !== "" &&
			emailRegex.test(mail) &&
			phoneValid;
		setHabilitarBoton(!camposLlenos);
	}, [name, lastname, mail, phone]);

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleLastName = (e) => {
		setLastname(e.target.value);
	};
	const handleMail = (e) => {
		setMail(e.target.value);
	};
	const handleTelefono = (e) => {
		setPhone(e.target.value);
	};

	const cargarCompra = () => {
		const datosDeUsuarioACargar = {
			nombre: name,
			apellido: lastname,
			telefono: phone,
			mail: mail,
		};

		const compraFinalACargar = {
			comprador: datosDeUsuarioACargar,
			carrito: carrito,
			total: precioFinal,
		};
		setDatosDeUsuario(datosDeUsuarioACargar);
		setCompraFinal(compraFinalACargar);

		GuardarStorage(compraFinalACargar, "datoscompra");

		const db = getFirestore();
		const orderCollection = collection(db, "ordenes");
		addDoc(orderCollection, compraFinalACargar).then(({ id }) =>
			setOrderId(id)
		);
	};
	return (
		<div className="containerCompra">
			<br />
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
						onChange={handleName}
						type="text"
						name="name"
						placeholder="Nombre"
						required
					/>
				</div>
				<div className="d-flex align-items-center justify-content-around">
					<legend>Apellido</legend>
					<input
						onChange={handleLastName}
						name="last_name"
						type="text"
						placeholder="Apellido"
						required
					/>
				</div>
				<div className="d-flex align-items-center justify-content-around">
					<legend>E-Mail</legend>
					<input
						onChange={handleMail}
						type="email"
						name="email"
						placeholder="Email"
						required
					/>
				</div>
				<div className="d-flex align-items-center justify-content-around">
					<legend>Telefono</legend>
					<input
						onChange={handleTelefono}
						name="phone"
						type="text"
						placeholder="Telefono"
						required
					/>
				</div>
			</form>
			<br />
			<div className="d-flex justify-content-between mx-auto divBoton">
				<Link to="/" className="btn btn-dark botonConformarCompra">
					Volver
				</Link>

				{habilitarBoton == false ? (
					<Link
						type="submit"
						onClick={cargarCompra}
						className="btn btn-dark botonConformarCompra"
						to={`/compra-finalizada`}
					>
						Siguiente
					</Link>
				) : (
					<button className="btn btn-secondary disabled">Siguiente</button>
				)}
			</div>
			<br />
		</div>
	);
}

export default ConfirmarCompra;
