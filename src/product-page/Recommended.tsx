import React from "react";
import "../scss/products-page/products-page.scss";
import Workflows from "../shop/workflows/Workflows";
import ProductsArray from "../data/products.json";

interface Product {
	id: number;
	title: string;
	shortInfo: string;
	price: string;
	currency: string;
	cod: string;
	image: string;
	image2: string;
	images: string[];
}

function shuffleArray(array: Product[]) {
	let currentIndex = array.length,
		randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
function Recommended() {
	let shuffledProducts = shuffleArray([...ProductsArray]);

	return (
		<div className="recommended my-4">
			<Workflows products={shuffledProducts.slice(0, 3)} column={"xl"} />
		</div>
	);
}

export default Recommended;
