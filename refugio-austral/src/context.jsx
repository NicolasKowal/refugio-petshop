import React, { createContext, useState } from "react";

export const ShopList = createContext();

export const ShopListProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	return (
		<ShopList.Provider value={{ carrito, setCarrito }}>
			{children}
		</ShopList.Provider>
	);
};
