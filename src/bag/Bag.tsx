import React from "react";
import "../scss/bag/bag.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactComponent as ArrowLeft } from "../image/logo/different/arrow-left.svg";

interface BagProps {
	show: boolean;
	onHide: () => void;
}

function Bag(props: BagProps) {
	return (
		<Offcanvas
			show={props.show}
			onHide={props.onHide}
			className="bag"
			placement="end"
		>
			<Offcanvas.Header>
				<div onClick={props.onHide}>
					<ArrowLeft />
					Continue Shopping
				</div>
			</Offcanvas.Header>
			<div className="bag__product px-3 py-3">
				Some text as placeholder. In real life you can have the elements you
				have chosen. Like, text, images, lists, etc.
			</div>
			<div className="bag__subtotal w-100 px-3 py-3 d-flex flex-column">
				<div className="bag__subtotal-price w-100 d-flex flex-row justify-content-between">
					<span>subtotal</span>
					<span>555</span>
				</div>
				<button type="button" className="w-100 py-2 my-4 rounded-pill">
					Checkout
				</button>
				<span>Gift Card or Discount Code</span>
			</div>
		</Offcanvas>
	);
}

export default Bag;
