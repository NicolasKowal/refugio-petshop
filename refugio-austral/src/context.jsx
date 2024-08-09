import React, { createContext, useEffect, useState } from "react";

export const ShopList = createContext();

export const ShopListProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	useEffect(() => {
		const arrayJSON = localStorage.getItem("carrito");
		if (arrayJSON) {
			const array = JSON.parse(arrayJSON);
			setCarrito(array);
		}
	}, []);

	return (
		<ShopList.Provider value={{ carrito, setCarrito }}>
			{children}
		</ShopList.Provider>
	);
};
