import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import ShopPage from "./shop/ShopPage";
import ProductsPage from "./product-page/ProductsPage";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<div className="page">
					<Menu />
					<main className="main">
						<Routes>
							<Route path="/shop" element={<ShopPage />} />
							<Route path="/shop" element={<ShopPage />} />
							<Route path="/products/:id" element={<ProductsPage />} />
						</Routes>
					</main>
					<footer className="main-footer">
						<Footer />
					</footer>
				</div>
			</div>
		</Router>
	);
}

export default App;
