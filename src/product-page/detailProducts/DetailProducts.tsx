import React from "react";
// import "../scss/products-page/products-page.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Pagination,
	EffectFade,
	Navigation,
	FreeMode,
	Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function DetailProducts() {
	return (
		<section className="product pb-4">
			<div className="container">
				<h1 className="">
					Audio Console
					<span>Pre-order</span>
				</h1>
			</div>
		</section>
	);
}

export default DetailProducts;
