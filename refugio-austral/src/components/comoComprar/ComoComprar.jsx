import React from "react";
import "./comoComprar.css";

function ComoComprar() {
	window.scrollTo(0, 0);
	return (
		<div className="container-section">
			<h1 className="heading d-flex align-items-center justify-content-center mx-auto">
				¿Cómo Comprar en Nuestra Tienda?
			</h1>
			<div className="container-compra">
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
			</div>
			<section className="section mx-auto">
				<h3 className="subheading">Pago con Código QR</h3>
				<p className="text">
					1. Selecciona "Pago con QR".
					<br />
					2. Escanea el código QR de abajo con tu app de banco o billetera
					digital.
					<br />
					3. Sigue las instrucciones de la app para completar el pago.
				</p>
			</section>
			<br />
			<div className="qrImage mx-auto">
				<img src="../../../public/frame.png" alt="Código QR" />
			</div>
			<br />
			<section className="section mx-auto">
				<h3 className="subheading">¿Dudas?</h3>
				<p className="text">
					Si tienes alguna pregunta, escríbenos a [email@example.com] o llámanos
					al [Número de Teléfono]. ¡Estamos aquí para ayudarte!
				</p>
			</section>
			<br />
		</div>
	);
}

export default ComoComprar;
