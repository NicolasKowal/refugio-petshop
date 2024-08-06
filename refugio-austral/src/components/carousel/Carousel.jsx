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
							src="https://thumbs.dreamstime.com/z/group-domestic-pets-over-white-banner-row-hanging-blank-image-sized-to-fit-popular-social-media-photo-placeholder-64552469.jpg"
							className="d-block w-100"
							alt="Group of domestic pets"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://as2.ftcdn.net/v2/jpg/04/82/63/77/1000_F_482637782_4CV39Ql60HFvdu8Na3ISyoBMe5Mk5Ld8.jpg"
							className="d-block w-100"
							alt="Various domestic pets"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://as1.ftcdn.net/v2/jpg/04/23/07/18/1000_F_423071856_JIf4hUWaBPP4Rzd3BUEQXgJntTsI1l4A.jpg"
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
