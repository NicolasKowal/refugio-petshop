import { BrowserRouter, Routes, Route } from "react-router-dom";

import Organizacion from "./Organizacion";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import NoPage from "./components/noPage/NoPage";
import ComoComprar from "./components/comoComprar/ComoComprar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ProductDetail from "./components/productDetail/ProductDetail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Organizacion />}>
					<Route index element={<Home />} />
					<Route path="/contacto" element={<Contact />} />
					<Route path="/como-comprar" element={<ComoComprar />} />
					<Route path="/Productos/:categoria" element={<ItemListContainer />} />
					<Route
						path="productos/:categoria/producto/:id"
						element={<ProductDetail />}
					/>
					<Route path="producto/:id" element={<ProductDetail />} />
					<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
