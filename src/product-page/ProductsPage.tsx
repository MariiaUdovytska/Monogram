import React from "react";
import "../scss/products-page/products-page.scss";
import DetailProducts from "./detailProducts/DetailProducts";
import productsData from "../data/products.json";

function ProductsPage() {
	const product = productsData[9];
	return (
		<div className="products-page h-100">
			<DetailProducts product={product} />
		</div>
	);
}

export default ProductsPage;
