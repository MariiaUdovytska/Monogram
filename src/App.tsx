import React from "react";
import "./scss/style.scss";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import ShopPage from "./shop/ShopPage";
import ProductsPage from "./product-page/ProductsPage";

function App() {
	return (
		<div className="wrapper">
			<div className="page">
				<Menu />
				<main className="main">
					{/* <ShopPage /> */}
					<ProductsPage />
				</main>
				<footer className="main-footer">
					<Footer />
				</footer>
			</div>
		</div>
	);
}

export default App;
