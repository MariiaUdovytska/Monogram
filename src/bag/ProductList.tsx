import React from "react";
import "../scss/bag/product-list.scss";

import { ReactComponent as Media } from "../image/logo/different/better_editing_guaranteed.svg";

import { ReactComponent as Amex } from "../image/logo/payment/amex.svg";
import { ReactComponent as Mastercard } from "../image/logo/payment/mastercard.svg";
import { ReactComponent as Visa } from "../image/logo/payment/visa.svg";
import { ReactComponent as Appay } from "../image/logo/payment/appay.svg";
import { ReactComponent as Gpay } from "../image/logo/payment/gpay.svg";
import { ReactComponent as Shoppay } from "../image/logo/payment/shoppay.svg";
import SelectedProduct, { ProductListInfo } from "./SelectedProduct";

interface ProductListProps {
	items: ProductListInfo[];
}

function ProductList(props: ProductListProps) {
	return (
		<div className="product-list d-flex flex-column">
			<div className="product-list__alert px-5 py-3 text-center mb-3">
				You are ~ $99 away from Free&nbsp;Shipping
			</div>
			<ul className="product-list__list">
				{props.items.map((item) => (
					<SelectedProduct item={item} />
				))}
			</ul>
			<div className="product-list__care px-3 py-3 mb-3">
				<h6 className="text-uppercase"> monogram care</h6>
				<p className="product-list__care-p">
					For $39 you will have service and support from the people that know
					the product best.
				</p>
				<p className="product-list__care-btns">
					<button
						type="button"
						className="rounded-pill py-1 px-4 text-uppercase me-2"
					>
						add to bag
					</button>
					<a href="#">Lern more</a>
				</p>
			</div>
			<div className="product-list__line">
				<hr className="w-100" />
			</div>
			<div className="product-list__media d-flex flex-row mb-3">
				<Media className="me-1" />
				<div>
					<h6 className="text-uppercase">Monogram Better Editing Guarantee</h6>
					<p>
						Try Monogram Creative Console in your own workflow for 100 days. If
						it does not improve your editing experience, you can return it for a
						full refund.
					</p>
				</div>
			</div>
			<div className="product-list__payment d-flex flex-column align-items-center mb-3">
				<h6 className="text-uppercase">secure payment</h6>
				<ul className="d-flex flex-row">
					<li>
						<Amex />
					</li>
					<li>
						<Mastercard />
					</li>
					<li>
						<Visa />
					</li>
					<li>
						<Appay />
					</li>
					<li>
						<Gpay />
					</li>
					<li>
						<Shoppay />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default ProductList;
