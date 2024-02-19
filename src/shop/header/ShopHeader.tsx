import React from "react";
import "../../scss/shop-header/shop-header.scss";
import shopHeader from "../../image/shop-header/shop_cta_xl_896f6b8270.webp";

function ShopHeader() {
	return (
		<section className="shop-header">
			<div className="shop-header__body position-relative">
				<img src={shopHeader} alt="Shop Monogram" />
				<div className="shop-header__body-title text-center position-absolute top-50 start-50 translate-middle">
					<h1 className="text-uppercase">
						A Console for<br></br> Every Workflow
					</h1>
					<p>Discover the perfect console for yours.</p>
				</div>
				<button
					className="shop-header__body-btn position-absolute start-50 translate-middle"
					type="button"
				></button>
			</div>
		</section>
	);
}

export default ShopHeader;
