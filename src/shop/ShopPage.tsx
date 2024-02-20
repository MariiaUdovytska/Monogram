import React from "react";
import ShopHeader from "./header/ShopHeader";
import CoverPart from "./coverPart/CoverPart";
import Workflows from "./workflows/Workflows";

function ShopPage() {
	return (
		<div className="shop">
			<ShopHeader />
			<Workflows />
			<CoverPart />
		</div>
	);
}

export default ShopPage;
