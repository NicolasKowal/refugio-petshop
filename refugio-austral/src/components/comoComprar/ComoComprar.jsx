import React from "react";
import "./comoComprar.css";

function ComoComprar() {
	return (
		<div className="container-compra">
			<h1 className="heading d-flex align-items-center justify-content-center mx-auto">
				¿Cómo Comprar en Nuestra Tienda?
			</h1>

			<section className="section">
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					Paso 1: Elige tus Productos
				</h3>
				<p className="text mx-auto d-flex justify-content-center">
					Recorre nuestra tienda y agrega al carrito todo lo que te guste.
					¡Tómate tu tiempo!
				</p>
			</section>

			<section className="section">
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					Paso 2: Revisa tu Carrito
				</h3>
				<p className="text mx-auto d-flex justify-content-center">
					Echa un vistazo a tu carrito para asegurarte de que todo esté bien.
					¡No queremos sorpresas!
				</p>
			</section>

			<section className="section">
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					Paso 3: Datos de Envío
				</h3>
				<p className="text mx-auto d-flex justify-content-center">
					Llena tus datos de envío: nombre, dirección y cómo podemos
					contactarte.
				</p>
			</section>

			<section className="section">
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					Paso 4: Elige tu Forma de Pago
				</h3>
				<p className="text mx-auto d-flex justify-content-center">
					Tenemos dos formas de pago: transferencia bancaria o pago con código
					QR. Elige la que más te guste.
				</p>
			</section>

			<section className="section">
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					Pago por Transferencia Bancaria
				</h3>
				<br />
				<br />
				<br />
				<p className="text mx-auto d-flex align-items-center justify-content-center flex-column">
					1. Selecciona "Transferencia Bancaria".
					<br />
					2. Haz la transferencia a nuestra cuenta:
					<ul className="list d-flex flex-column">
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
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					Pago con Código QR
				</h3>
				<p className="text mx-auto d-flex justify-content-center">
					1. Selecciona "Pago con QR".
					<br />
					2. Escanea el código QR de abajo con tu app de banco o billetera
					digital.
					<br />
					3. Sigue las instrucciones de la app para completar el pago.
				</p>
				<div className="qrCode">
					<img
						src="../../../public/frame.png"
						alt="Código QR"
						className="d-flex mx-auto"
					/>
				</div>
			</section>

			<section className="section">
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					Confirmación del Pedido
				</h3>
				<p className="text mx-auto d-flex justify-content-center">
					Cuando confirmemos tu pago, te mandamos un correo con los detalles del
					pedido y cuándo te llega.
				</p>
			</section>

			<section className="section">
				<h3 className="mx-auto subheading d-flex align-items-center justify-content-center">
					¿Dudas?
				</h3>
				<p className="text mx-auto d-flex justify-content-center">
					Si tienes alguna pregunta, escríbenos a [email@example.com] o llámanos
					al [Número de Teléfono]. ¡Estamos aquí para ayudarte!
				</p>
			</section>
		</div>
	);
}

export default ComoComprar;
