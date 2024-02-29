import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../scss/products-page/products-page.scss";
import DetailProducts from "./detailProducts/DetailProducts";
import productsData from "../data/products.json";
import IncludedWithMonogram from "./IncludedWithMonogram";

function ProductsPage() {
	const { id } = useParams();
	const product = productsData.find((p) => p.id.toString() === id);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	return (
		<div className="products-page h-100">
			{product ? (
				<>
					<DetailProducts product={product} />
					<IncludedWithMonogram />
				</>
			) : (
				<p className="product h-100 ms-5 text-uppercase text-center">
					Product not found
				</p>
			)}
		</div>
	);
}

export default ProductsPage;
