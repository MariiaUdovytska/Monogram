import React from "react";
import "./scss/style.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import ShopPage from "./shop/ShopPage";

function App() {
	return (
		<div className="wrapper">
			<div className="page">
				<Menu />
				<main className="main">
					<ShopPage />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
}

export default App;
