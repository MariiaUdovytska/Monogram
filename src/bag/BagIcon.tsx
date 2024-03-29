import React from "react";
import "../scss/menu/menu.scss";
import { useCart } from "../local-storage/CartContext";

function BagIcon() {
	const { cartCount } = useCart();
	return (
		<i
			className="bag-icon bi bi-bag position-relative"
			style={{ fontSize: "25px", color: "#efc2b3" }}
		>
			<span
				style={{
					fontSize: "12px",
					fontWeight: "600",
					marginTop: "2px",
					fontStyle: "normal",
				}}
				className="position-absolute top-50 start-50 translate-middle"
			>
				{cartCount === 0 ? "" : cartCount}
			</span>
		</i>
	);
}
export default BagIcon;
