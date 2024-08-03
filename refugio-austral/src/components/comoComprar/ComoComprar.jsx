import React from "react";
import "./comoComprar.css";

function ComoComprar() {
	return (
		<div className="container">
			<h2 className="heading">¿Cómo Comprar en Nuestra Tienda?</h2>

			<section className="section">
				<h3 className="subheading">Paso 1: Elige tus Productos</h3>
				<p className="text">
					Recorre nuestra tienda y agrega al carrito todo lo que te guste.
					¡Tómate tu tiempo!
				</p>
			</section>

			<section className="section">
				<h3 className="subheading">Paso 2: Revisa tu Carrito</h3>
				<p className="text">
					Echa un vistazo a tu carrito para asegurarte de que todo esté bien.
					¡No queremos sorpresas!
				</p>
			</section>

			<section className="section">
				<h3 className="subheading">Paso 3: Datos de Envío</h3>
				<p className="text">
					Llena tus datos de envío: nombre, dirección y cómo podemos
					contactarte.
				</p>
			</section>

			<section className="section">
				<h3 className="subheading">Paso 4: Elige tu Forma de Pago</h3>
				<p className="text">
					Tenemos dos formas de pago: transferencia bancaria o pago con código
					QR. Elige la que más te guste.
				</p>
			</section>

			<section className="section">
				<h3 className="subheading">Pago por Transferencia Bancaria</h3>
				<p className="text">
					1. Selecciona "Transferencia Bancaria".
					<br />
					2. Haz la transferencia a nuestra cuenta:
					<ul className="list">
						<li>Banco: [Nombre del Banco]</li>
						<li>Cuenta: [Número de Cuenta]</li>
						<li>A nombre de: [Nombre del Titular]</li>
						<li>Referencia: [Tu Número de Pedido]</li>
					</ul>
					3. Envíanos una foto del comprobante a [email@example.com] para que
					confirmemos tu pago.
				</p>
			</section>

			<section className="section">
				<h3 className="subheading">Pago con Código QR</h3>
				<p className="text">
					1. Selecciona "Pago con QR".
					<br />
					2. Escanea el código QR de abajo con tu app de banco o billetera
					digital.
					<br />
					3. Sigue las instrucciones de la app para completar el pago.
				</p>
				<div className="qrCode">
					<img
						src="path_to_qr_code_image"
						alt="Código QR"
						className="qrImage"
					/>
				</div>
			</section>

			<section className="section">
				<h3 className="subheading">Confirmación del Pedido</h3>
				<p className="text">
					Cuando confirmemos tu pago, te mandamos un correo con los detalles del
					pedido y cuándo te llega.
				</p>
			</section>

			<section className="section">
				<h3 className="subheading">¿Dudas?</h3>
				<p className="text">
					Si tienes alguna pregunta, escríbenos a [email@example.com] o llámanos
					al [Número de Teléfono]. ¡Estamos aquí para ayudarte!
				</p>
			</section>
		</div>
	);
}

export default ComoComprar;
