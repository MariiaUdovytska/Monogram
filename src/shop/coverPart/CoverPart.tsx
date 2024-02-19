import React from "react";
import "../../scss/cover-part/cover-part.scss";
import coverPart from "../../image/cover-part/shop-banner-module.webp";

function CoverPart() {
	return (
		<section className="cover-part position-relative">
			<img src={coverPart} alt="Monogram" />
			<div className="cover-part__title text-center position-absolute start-50 translate-middle">
				<h2 className="text-uppercase">Create Your Own Console</h2>
				<p>Add-on to make it perfect.</p>
			</div>
		</section>
	);
}

export default CoverPart;
