import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function raiz() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Componente />} />
				<Route path="/asd" element={<ComponenteHijo />} />
				<Route path="/asd:algo" element={<ComponenteHijo />} />
				{/* el algo se pasa como useparams */}
				{/* const {algo} = useparams() */}
				{/* <Link> to={`/a-donde/${algo}`}</Link> */}
			</Routes>
		</BrowserRouter>
	);
}

export default raiz;
