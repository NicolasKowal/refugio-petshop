import React, { createContext, useState } from "react";
import customHookFirebase from "./customHookFirebase";

export const ShopList = createContext();

export const ShopListProvider = ({ children }) => {
	const { Productos, loading, error } = customHookFirebase("items");
	const [carrito, setCarrito] = useState([]);
	return (
		<ShopList.Provider
			value={{ carrito, setCarrito, Productos, loading, error }}
		>
			{children}
		</ShopList.Provider>
	);
};
