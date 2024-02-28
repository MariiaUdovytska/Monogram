import React, { useState } from "react";
import "../../scss/products-page/products-detail.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import DetailProductsInfo from "./DetailProductsInfo";

interface Product {
	id: number;
	title: string;
	image: string;
	image2: string;
	images: string[];
}

interface ProductsProps {
	product: Product;
}

function DetailProducts(data: ProductsProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

	let productData = data.product;

	let slidesMain = productData.images.map((image, index) => (
		<SwiperSlide key={index}>
			<img src={image} alt={productData.title} />
		</SwiperSlide>
	));

	return (
		<section className="product pb-4">
			<div className="container">
				<div className="product__body">
					<div className="product__body-main">
						<h1 className="product__body-main-title text-uppercase">
							{productData.title}
							<span className="product__body-main-title-preorder ms-3 px-3">
								Pre&nbsp;-&nbsp;order
							</span>
						</h1>
						{productData.images.length !== 0 ? (
							<div className="product__body-main-swiper">
								<Swiper
									loop={true}
									spaceBetween={10}
									onSwiper={(swiper: SwiperClass) => setThumbsSwiper(swiper)}
									modules={[FreeMode, Navigation, Thumbs]}
									className="mySwiper2"
								>
									{slidesMain}
								</Swiper>
								<Swiper
									loop={true}
									spaceBetween={10}
									slidesPerView={3}
									freeMode={true}
									watchSlidesProgress={true}
									navigation={true}
									modules={[FreeMode, Navigation, Thumbs]}
									thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
									className="mySwiper"
								>
									{slidesMain}
								</Swiper>
							</div>
						) : (
							<div className="product__body-main-img">
								<img
									src={productData.image}
									alt={productData.title}
									className="w-100"
								/>
							</div>
						)}
					</div>
					<DetailProductsInfo />
				</div>
			</div>
		</section>
	);
}

export default DetailProducts;
