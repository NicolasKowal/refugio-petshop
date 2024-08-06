import React, { createContext, useEffect, useState } from "react";

export const ShopList = createContext();

export const ShopListProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	useEffect(() => {
		const CantidadJSON = localStorage.getItem("carrito");
		if (CantidadJSON) {
			const Cantidad = JSON.parse(CantidadJSON);
			setCarrito(Cantidad);
		}
	}, []);

	return (
		<ShopList.Provider value={{ carrito, setCarrito }}>
			{children}
		</ShopList.Provider>
	);
};
