import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartProvider } from "./local-storage/CartContext";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<CartProvider>
			<App />
		</CartProvider>
	</React.StrictMode>
);

reportWebVitals();
