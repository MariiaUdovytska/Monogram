import React from "react";
import "./scss/style.scss";
import Menu from "./menu/Menu";
import Footer from "./footer/Footer";

function App() {
	return (
		<div className="wrapper">
			<div className="page">
				<Menu />
				<main className="main"></main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
