import React from "react";
import "../scss/bag/bag.scss";
import Form from "react-bootstrap/Form";
import TestFoto from "../image/workflows/Everyday-Bundle-Mocks-final_1366x911_crop_center.jpg.webp";
import { ReactComponent as Media } from "../image/logo/different/better_editing_guaranteed.svg";

function ProductList() {
	return (
		<div className="product-list d-flex flex-column">
			<div className="product-list__alert">
				You are ~ $99 away from Free&nbsp;Shipping
			</div>
			<ul className="product-list__list">
				<li>
					<img src={TestFoto} alt="test" />
					<div>
						<p>mini console</p>
						<p>$249</p>
						<Form.Select
							aria-label="Default select example"
							className="rounded-pill me-3"
						>
							<option>1</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="3">4</option>
							<option value="3">5</option>
							<option value="3">6</option>
						</Form.Select>
					</div>
				</li>
				<li>
					<img src={TestFoto} alt="test" />
					<div>
						<p>test console</p>
						<p>$249</p>
						<Form.Select
							aria-label="Default select example"
							className="rounded-pill me-3"
						>
							<option>1</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="3">4</option>
							<option value="3">5</option>
							<option value="3">6</option>
						</Form.Select>
					</div>
				</li>
			</ul>
			<div className="product-list__care">
				<h6> monogram care</h6>
				<p>
					For $39 you will have service and support from the people that know
					the product best.
				</p>
				<p>
					<button type="button">add to bag</button>
					<a href="#">Lern more</a>
				</p>
			</div>
			<div className="product-list__line"></div>
			<div className="product-list__media">
				<Media />
				<div>
					<h6>Monogram Better Editing Guarantee</h6>
					<p>
						Try Monogram Creative Console in your own workflow for 100 days. If
						it does not improve your editing experience, you can return it for a
						full refund.
					</p>
				</div>
			</div>
			<div className="product-list__payment">
				<h6>secure payment</h6>
				<ul>
					<li></li>
				</ul>
			</div>
		</div>
	);
}

export default ProductList;
