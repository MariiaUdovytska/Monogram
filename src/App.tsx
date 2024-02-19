import React from "react";
import "./scss/style.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

import Menu from "./menu/Menu";
import Footer from "./footer/Footer";
import ShopHeader from "./header/ShopHeader";

function App() {
	return (
		<div className="wrapper">
			<div className="page">
				<Menu />
				<main className="main">
					<ShopHeader />
				</main>
				<footer>
					<Footer />
				</footer>
			</div>
		</div>
	);
}

export default App;
