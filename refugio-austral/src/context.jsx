import React, { createContext, useEffect, useState } from "react";

export const ShopList = createContext();

export const ShopListProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const [compraFinal, setCompraFinal] = useState({});
	useEffect(() => {
		const arrayJSON = localStorage.getItem("carrito");
		if (arrayJSON) {
			const array = JSON.parse(arrayJSON);
			setCarrito(array);
		}

		const datosCompraJSON = localStorage.getItem("datoscompra");
		if (datosCompraJSON) {
			const datosCompra = JSON.parse(datosCompraJSON);
			setCompraFinal(datosCompra);
		}
	}, []);

	return (
		<ShopList.Provider
			value={{ carrito, setCarrito, compraFinal, setCompraFinal }}
		>
			{children}
		</ShopList.Provider>
	);
};
