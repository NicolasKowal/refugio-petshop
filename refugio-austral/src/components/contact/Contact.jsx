import React from "react";

import "./contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Contacto() {
	window.scrollTo(0, 0);
	return (
		<div className="contacto">
			<br />
			<h3 className="titulo">
				Envianos un mensaje y nos pondremos en contacto con vos
			</h3>
			<br />
			<form className="formulario">
				<div className="fila">
					<legend className="form-label fw-light">Nombre</legend>
					<input
						type="first_name"
						name="first_name"
						className="form-control"
						id=""
						placeholder=" Nombre"
					/>
				</div>
				<div className="fila">
					<legend className="form-label fw-light">Apellido</legend>
					<input
						type="last_name"
						name="last_name"
						className="form-control"
						id=""
						placeholder=" Apellido"
					/>
				</div>
				<div className="fila">
					<legend className="form-label fw-light">Telefono</legend>
					<input
						type="phone"
						name="phone"
						className="form-control"
						id=""
						placeholder=" 011 - 1234 - 5678"
					/>
				</div>
				<div className="fila">
					<legend className="form-label fw-light">Mail</legend>
					<input
						type="email"
						className="form-control"
						name="email"
						id=""
						placeholder=" nombre@mail.com"
					/>
				</div>
				<div className="mensaje">
					<textarea
						className="form-control"
						name="text"
						id=""
						placeholder="Escribe tu mensaje aca"
					></textarea>
				</div>
				<div className="d-flex justify-content-around align-items-center botonera">
					<button className="btn btn-dark" type="submit">
						Enviar
					</button>
					<button className="btn btn-dark" type="reset">
						Resetear
					</button>
				</div>
			</form>
			<br />
			<h3 className="titulo">Tambien encontranos en nuestras redes sociales</h3>
			<br />
			<div className="container-redes">
				<a href="">
					<img
						src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
						alt=""
					/>
				</a>
				<a href="">
					<img
						src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png"
						alt=""
					/>
				</a>
				<a href="">
					<img
						src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
						alt=""
					/>
				</a>
			</div>
			<div className="d-flex flex-column">
				<br />
				<h3 className="titulo">Nuestro local</h3>
				<br />
				<iframe
					className="mapa"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24397.631646320388!2d-71.3335256!3d-40.1488777!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96110e743605d0c7%3A0x71c43ffb1c66bc3a!2sSan%20Mart%C3%ADn%20de%20los%20Andes%2C%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1722454007905!5m2!1ses-419!2sar"
				/>
				<br />
			</div>
		</div>
	);
}

export default Contacto;
