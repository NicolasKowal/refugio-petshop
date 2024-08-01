import React from "react";
import NavBar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import { ShopListProvider } from "./context";

import { Outlet } from "react-router-dom";

function Organizacion() {
	return (
		<ShopListProvider>
			<NavBar />
			<Outlet />
			<Footer />
		</ShopListProvider>
	);
}

export default Organizacion;
