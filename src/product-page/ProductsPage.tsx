import React from "react";
import { useParams } from "react-router-dom";
import "../scss/products-page/products-page.scss";
import DetailProducts from "./detailProducts/DetailProducts";
import productsData from "../data/products.json";

function ProductsPage() {
	const { id } = useParams();
	const product = productsData.find((p) => p.id.toString() === id);
	return (
		<div className="products-page h-100">
			{product ? (
				<DetailProducts product={product} />
			) : (
				<p className="product h-100 ms-5 text-uppercase text-center">
					Product not found
				</p>
			)}
		</div>
	);
}

export default ProductsPage;
