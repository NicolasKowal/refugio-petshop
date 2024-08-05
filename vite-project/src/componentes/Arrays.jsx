import React from "react";

function arrays() {
	const items = [
		{
			id: 1,
			name: "Item 1",
			description: "Descripción del item 1",
			price: 10.0,
			inStock: true,
		},
		{
			id: 2,
			name: "Item 2",
			description: "Descripción del item 2",
			price: 20.0,
			inStock: false,
		},
		{
			id: 3,
			name: "Item 3",
			description: "Descripción del item 3",
			price: 30.0,
			inStock: true,
		},
	];
	const total = items.reduce((acum, elemento) => elemento.price + acum, 0);
	const filtrado = items.filter((elemento) => elemento.price === 20);
	const encontrar = items.find((elemento) => elemento.name === "algo");
	const indice = items.findIndex((elemento) => elemento.name === "algo");
	const recortar = items.slice(0, 5);
	const ordenar = items.slice().sort((a, b) => a.price - b.price);
	const alReves = items.slice().reverse();

	return (
		<>
			{items.map((item) => (
				<p key={item.id}>{item.name}</p>
			))}
		</>
	);
}

export default arrays;
