import React from "react";
import "../../scss/products-page/products-detail.scss";
import { ReactComponent as Sezzle } from "../../image/logo/different/sezzle.svg";
import { ReactComponent as Info } from "../../image/logo/different/info.svg";
import { ReactComponent as Star } from "../../image/logo/different/star.svg";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";

function DetailProductsInfo() {
	return (
		<div className="product__body-info">
			<h1 className="product__body-main-titleT">
				Audio Console
				<span>Pre-order </span>
			</h1>
			<p>
				<div>
					<span>$499</span>
					<span>$579</span>
				</div>
				<div>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
					<a href="#">83</a>
				</div>
			</p>
			<p>
				or 4 interest-free payments of $124.75 with <Sezzle />
				&nbsp;
				<Info />
			</p>
			<p>
				<Form.Select aria-label="Default select example">
					<option>1</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="3">4</option>
					<option value="3">5</option>
					<option value="3">6</option>
				</Form.Select>
				<button type="button">add to bag</button>
			</p>
			<p>
				<span>**PRE-ORDER ITEM: </span>
				<span>Estimated to ship in </span>
				<span>APRIL**</span>
			</p>
			<p>
				<Accordion flush>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Product Description</Accordion.Header>
						<Accordion.Body>test</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Our Better Editing Guarantee</Accordion.Header>
						<Accordion.Body>
							We stand by our products and our promises and we understand that
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Build Quality and Materials</Accordion.Header>
						<Accordion.Body>
							We take great pride and care in building our prod
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Shipping Information</Accordion.Header>
						<Accordion.Body>
							Free shipping to most region<br></br>Included with your Monogram
							hardw
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Warranty</Accordion.Header>
						<Accordion.Body>
							Included with your Monogram hardw<br></br>Free shipping to most
							regions
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</p>
		</div>
	);
}

export default DetailProductsInfo;
