import React from "react";
import "../../scss/products-page/products-detail.scss";
import { ReactComponent as Sezzle } from "../../image/logo/different/sezzle.svg";
import { ReactComponent as Info } from "../../image/logo/different/info.svg";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import ReviewsArray from "../../data/reviews.json";
import Stars from "../../stars/Stars";

interface Product {
	id: number;
	title: string;
	shortInfo: string;
	price: string;
	priceOld: string;
	currency: string;
	reviews: string;
	installmentPlan: string;
	cod: string;
	stars: number;
	waiting: string;
	info: string;
	description: string;
	guarantee?: string;
	quality?: string;
	shipping?: string;
	shipping2?: string;
	shipping3?: string;
	Warranty?: string;
	Warranty2?: string;
}

interface ProductsProps {
	product: Product;
}

function DetailProductsInfo(data: ProductsProps) {
	let productData = data.product;
	let reviewsCount = ReviewsArray;
	return (
		<div className="product__body-info">
			<h1 className="product__body-info-titleT text-uppercase">
				{productData.title}
				<span className="product__body-info-titleT-preorder mx-3 px-3">
					Pre&nbsp;-&nbsp;order
				</span>
			</h1>
			<div className="product__body-info-price d-flex flex-row justify-content-between ">
				{productData.priceOld === "" ? (
					<div className="product__body-info-price-all">
						<span className="product__body-info-price-now">
							{productData.currency}
							{productData.price}
						</span>
					</div>
				) : (
					<div className="product__body-info-price-all">
						<span className="product__body-info-price-now">
							{productData.currency}
							{productData.price}
						</span>
						<span className="product__body-info-price-old ms-1">
							{productData.currency}
							{productData.priceOld}
						</span>
					</div>
				)}
				<div className="product__body-info-price-star d-flex flex-row">
					<Stars count={productData.stars} />
					<a href="#" className="px-2 rounded-pill d-flex align-items-center">
						{reviewsCount.length}
					</a>
				</div>
			</div>
			<div className="mt-4">
				or 4 interest-free payments of {productData.currency}
				{(parseFloat(productData.price) / 4).toFixed(2)} with <Sezzle />
				&nbsp;
				<Info />
			</div>
			<div className="product__body-info-select mt-3 d-flex flex-row ">
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
				<button
					type="button"
					className="product__body-info-btn rounded-pill py-2 px-4 text-uppercase"
				>
					add to bag
				</button>
			</div>
			<div className="product__body-info-estimated mt-4">
				<span>**PRE-ORDER ITEM: </span>
				<span>Estimated to ship in </span>
				<span>APRIL**</span>
			</div>
			<div className="mt-3">{productData.info}</div>
			<div className="product__body-info-accordion mt-4">
				<Accordion flush>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Product Description</Accordion.Header>
						<Accordion.Body>
							<div
								className="product__body-info-accordion-deskription"
								dangerouslySetInnerHTML={{ __html: productData.description }}
							/>
							<p>
								Learn more about our pre-order status{" "}
								<a href="#" className="product__body-info-accordion-link">
									here
								</a>
							</p>
						</Accordion.Body>
					</Accordion.Item>
					{productData.guarantee === undefined ? (
						""
					) : (
						<Accordion.Item eventKey="2">
							<Accordion.Header>Our Better Editing Guarantee</Accordion.Header>
							<Accordion.Body>{productData.guarantee}</Accordion.Body>
						</Accordion.Item>
					)}
					{productData.quality === undefined ? (
						""
					) : (
						<Accordion.Item eventKey="3">
							<Accordion.Header>Build Quality and Materials</Accordion.Header>
							<Accordion.Body>
								{productData.quality}
								<ul className="product__body-info-accordion-quality mt-3">
									<li>Precision CNC-machined from solid aerospace aluminium</li>
									<li>
										Aluminum sandblasted surface for a premium textured finish
									</li>
									<li>
										Anodized aluminum coating for durability and scratch
										resistance
									</li>
									<li>
										Strong neodymium magnetic connectors allow for quick and
										secure attachment
									</li>
									<li>Micro spring-loaded electrical contacts</li>
									<li>Soft-touch ABS plastic underside</li>
									<li>
										Grip ring on underside prevents unwanted slipping on table
										tops
									</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					)}
					{productData.shipping === undefined ? (
						""
					) : (
						<Accordion.Item eventKey="4">
							<Accordion.Header>Shipping Information</Accordion.Header>
							<Accordion.Body>
								<p>{productData.shipping}</p>
								<p>
									{productData.shipping2}
									<a href="#" className="product__body-info-accordion-link">
										{" "}
										Shipping & Sales FAQ
									</a>
									{productData.shipping3}
								</p>
							</Accordion.Body>
						</Accordion.Item>
					)}
					{productData.Warranty === undefined ? (
						""
					) : (
						<Accordion.Item eventKey="5">
							<Accordion.Header>Warranty</Accordion.Header>
							<Accordion.Body>
								<p>{productData.Warranty}</p>
								<p>
									{productData.Warranty2}
									<a href="#" className="product__body-info-accordion-link">
										Learn more here.
									</a>
								</p>
							</Accordion.Body>
						</Accordion.Item>
					)}
				</Accordion>
			</div>
		</div>
	);
}

export default DetailProductsInfo;
