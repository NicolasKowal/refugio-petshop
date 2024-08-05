import React, { createContext, useState } from "react";

export const AExportar = createContext();

export const Provider = ({ children }) => {
	// declarar para exportar cositas aca, el provider va en la organizacion de rutas
	// se reemplaza el provider por AExportar
	// const lista = []
	return (
		<AExportar.Provider value={/*"lo declarado arriba" */ ""}>
			{children}
		</AExportar.Provider>
	);
};

/*
en los archivos que se va a usar se importa usecontext
const array = usecontext(AExportar)
tiene que estar en children
*/
