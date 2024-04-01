import React, { useState } from "react";
import "../scss/bag/bag.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactComponent as ArrowLeft } from "../image/logo/different/arrow-left.svg";
import ProductList from "./ProductList";
import { ProductListInfo } from "./SelectedProduct";
import { getCartProducts } from "../local-storage/LocalStorage";
import productsData from "../data/products.json";

interface BagProps {
	show: boolean;
	onHide: () => void;
}

function Bag(props: BagProps) {
	let [discount, setDiscount] = useState(false);
	let itemsFromLocalStorage = getCartProducts();
	const items = itemsFromLocalStorage.map((item) => {
		const product = productsData.find((p) => p.id === item.id);
		const productInfo: ProductListInfo = {
			id: item.id,
			price: item.price,
			quantity: item.quantity,
			image: product?.image,
			title: product?.title,
			currency: product?.currency,
		};
		return productInfo;
	});

	const subtotal = items.reduce(
		(acc, item) => acc + parseFloat(item.price) * item.quantity,
		0
	);

	const currency = items.length > 0 ? items[0].currency : "";

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
			<div className="bag__product px-3 py-3 w-100">
				<ProductList items={items} />
			</div>
			<div className="bag__subtotal w-100 px-3 py-3 d-flex flex-column">
				<div className="bag__subtotal-price text-uppercase w-100 d-flex flex-row justify-content-between">
					<span>subtotal</span>
					<span>
						{currency}
						{subtotal.toFixed(2)}
					</span>
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
