import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";

function Carousel() {
	return (
		<>
			<div
				id="carouselExampleAutoplaying"
				className="carousel slide"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://img.freepik.com/vector-gratis/coleccion-personas-dibujadas-mano-mascotas_23-2148970589.jpg?t=st=1723332592~exp=1723336192~hmac=ffb316fce8f80bdcb08e7c5576ee3dec95b819e6699739eefd06431287564808&w=1480"
							className="d-block w-100"
							alt="Group of domestic pets"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://img.freepik.com/vector-gratis/portada-facebook-mascota-sentada-dibujada-mano_23-2149776410.jpg?t=st=1723332537~exp=1723336137~hmac=65ff717d6c35413cf2e4b70a6cf946adcb7eb1282cc563233d0ea5a22a425b1a&w=1480"
							className="d-block w-100"
							alt="Various domestic pets"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://img.freepik.com/psd-gratis/retrato-grupo-adorables-cachorros_53876-73962.jpg?w=1800&t=st=1723332573~exp=1723333173~hmac=79f27b1bce1cc7eb5b26d8223159eb0aab0d9b82cbfb4d0f54f0b7fb7111c897"
							className="d-block w-100"
							alt="Pets with a white background"
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleAutoplaying"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}

export default Carousel;
