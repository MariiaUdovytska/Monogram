import React, { useState } from "react";
import "../scss/bag/bag.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactComponent as ArrowLeft } from "../image/logo/different/arrow-left.svg";

interface BagProps {
	show: boolean;
	onHide: () => void;
}

function Bag(props: BagProps) {
	let [discount, setDiscount] = useState(false);

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
				<div className="bag__subtotal-price text-uppercase w-100 d-flex flex-row justify-content-between">
					<span>subtotal</span>
					<span>555</span>
				</div>
				{discount ? (
					<form className="d-flex flex-column align-items-center">
						<input
							className="text-uppercase w-100 py-3 my-4 rounded-pill"
							type="text"
							name="discount"
							placeholder="Enter gift card or discount code"
						/>
						<p className="bag__subtotal-discount-p w-75 text-uppercase d-flex flex-row justify-content-between">
							<button type="submit" className="ml-2 text-uppercase">
								Apply Code
							</button>
							<button
								type="button"
								className="mr-2 text-uppercase"
								onClick={() => setDiscount(false)}
							>
								Cancel
							</button>
						</p>
					</form>
				) : (
					<form className="d-flex flex-column align-items-center">
						<button
							type="button"
							className="bag__subtotal-btn text-uppercase w-100 py-3 my-4 rounded-pill"
						>
							Checkout
						</button>
						<button
							onClick={() => setDiscount(true)}
							className="bag__subtotal-discount text-uppercase d-flex flex-column justify-content-center"
						>
							Gift Card or Discount Code
						</button>
					</form>
				)}
			</div>
		</Offcanvas>
	);
}

export default Bag;
