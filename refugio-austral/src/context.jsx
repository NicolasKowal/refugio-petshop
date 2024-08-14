import React, { createContext, useEffect, useState } from "react";

export const ShopList = createContext();

export const ShopListProvider = ({ children }) => {
	const [carrito, setCarrito] = useState([]);
	const [compraFinal, setCompraFinal] = useState({});
	const [shakeCarrito, setShakeCarrito] = useState(false);
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
			value={{
				carrito,
				setCarrito,
				compraFinal,
				setCompraFinal,
				shakeCarrito,
				setShakeCarrito,
			}}
		>
			{children}
		</ShopList.Provider>
	);
};
{
	/* se crea un contexto para poder usar el carrito y la animacion del carrito de compras, ademas de apenas entre a la pagina, obtener el localstorage */
}
