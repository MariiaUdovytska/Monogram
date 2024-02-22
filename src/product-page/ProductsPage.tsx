import React from "react";
import "../scss/products-page/products-page.scss";
import DetailProducts from "./detailProducts/DetailProducts";

function ProductsPage() {
	return (
		<div className="products-page h-100">
			<DetailProducts />
		</div>
	);
}

export default ProductsPage;
