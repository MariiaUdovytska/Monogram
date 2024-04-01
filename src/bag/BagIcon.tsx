import React, { useState } from "react";
import "../scss/menu/menu.scss";
import { useCart } from "../local-storage/CartContext";
import Bag from "./Bag";

function BagIcon() {
	const { cartCount } = useCart();
	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
	};

	return (
		<>
			<i
				onClick={handleShow}
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
			<Bag show={show} onHide={handleClose} />
		</>
	);
}
export default BagIcon;
