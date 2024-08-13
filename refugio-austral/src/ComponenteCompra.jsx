import React from "react";
import { Outlet } from "react-router-dom";
import { ShopListProvider } from "./context";

function ComponenteCompra() {
	return (
		<ShopListProvider>
			<Outlet />
		</ShopListProvider>
	);
}

export default ComponenteCompra;
