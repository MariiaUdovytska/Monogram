import React from "react";
import ShopHeader from "./header/ShopHeader";
import CoverPart from "./coverPart/CoverPart";
import Workflows from "./workflows/Workflows";
import productsData from "../data/products.json";

function ShopPage() {
	const products = productsData;

	return (
		<div className="shop">
			<ShopHeader />
			<Workflows products={products.slice(0, 4)} column={"md"} />
			<CoverPart />
			<Workflows products={products.slice(4)} column={"xl"} />
		</div>
	);
}

export default ShopPage;
