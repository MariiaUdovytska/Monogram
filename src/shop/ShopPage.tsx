import React, { useRef, useEffect } from "react";
import ShopHeader from "./header/ShopHeader";
import CoverPart from "./coverPart/CoverPart";
import Workflows from "./workflows/Workflows";
import productsData from "../data/products.json";

function ShopPage() {
	const products = productsData;
	const workflowsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	const scrollToWorkflows = () => {
		if (workflowsRef.current) {
			workflowsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="shop">
			<ShopHeader scrollToWorkflows={scrollToWorkflows} />
			<div ref={workflowsRef}>
				<Workflows products={products.slice(0, 4)} column={"md"} />
			</div>
			<CoverPart />
			<Workflows products={products.slice(4)} column={"xl"} />
		</div>
	);
}

export default ShopPage;
