import React from "react";
import { Outlet } from "react-router-dom";
import Componente from "./Componente";

function organizacion() {
	return (
		<>
			<Componente />
			<Outlet />
			<Componente />
		</>
	);
}

export default organizacion;
