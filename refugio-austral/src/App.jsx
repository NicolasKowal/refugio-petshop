import { BrowserRouter, Routes, Route } from "react-router-dom";
import scrollToTop from "./scrollToTop";

import Organizacion from "./Organizacion";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import NoPage from "./components/noPage/NoPage";
import ComoComprar from "./components/comoComprar/ComoComprar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ProductDetail from "./components/productDetail/ProductDetail";
import ConfirmarCompra from "./components/confirmarCompra/ConfirmarCompra";
import FinalizarCompra from "./components/finalizarCompra/FinalizarCompra";

function App() {
	return (
		<BrowserRouter>
			<scrollToTop>
				<Routes>
					<Route exact path="/" element={<Organizacion />}>
						<Route index element={<Home />} />
						<Route path="/contacto" element={<Contact />} />
						<Route path="/como-comprar" element={<ComoComprar />} />
						<Route
							path="/Productos/:categoria"
							element={<ItemListContainer />}
						/>
						<Route path="/busqueda/:busqueda" element={<ItemListContainer />} />
						<Route path="/:animal" element={<ItemListContainer />} />
						<Route
							path="productos/:categoria/producto/:id"
							element={<ProductDetail />}
						/>
						<Route path="producto/:id" element={<ProductDetail />} />
						<Route path=":animal/producto/:id" element={<ProductDetail />} />
						<Route
							path="busqueda/:busqueda/producto/:id"
							element={<ProductDetail />}
						/>
						<Route path="*" element={<NoPage />} />
						<Route path="/confirmar-compra" element={<ConfirmarCompra />} />
						<Route path="/compra-finalizada" element={<FinalizarCompra />} />
					</Route>
				</Routes>
			</scrollToTop>
		</BrowserRouter>
	);
}

export default App;
