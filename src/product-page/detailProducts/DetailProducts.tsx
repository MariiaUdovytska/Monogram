import React, { useState } from "react";
import "../../scss/products-page/products-detail.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import DetailProductsInfo from "./DetailProductsInfo";

function DetailProducts() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<section className="product pb-4">
			<div className="container">
				<div className="product__body">
					<div className="product__body-main">
						<h1 className="product__body-main-title text-uppercase">
							Audio Console
							<span className="product__body-main-title-preorder ms-3 px-3">
								Pre&nbsp;-&nbsp;order
							</span>
						</h1>
						<div className="product__body-main-swiper">
							<Swiper
								style={{
									"--swiper-navigation-color": "#fff",
									"--swiper-pagination-color": "#fff",
								}}
								loop={true}
								spaceBetween={10}
								navigation={true}
								thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
								// thumbs={{ swiper: thumbsSwiper }}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper2"
							>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
								</SwiperSlide>
							</Swiper>
							<Swiper
								onSwiper={setThumbsSwiper}
								loop={true}
								spaceBetween={10}
								slidesPerView={3}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[FreeMode, Navigation, Thumbs]}
								className="mySwiper"
							>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-1.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-2.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-3.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-4.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-5.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-6.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-7.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-8.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-9.jpg" />
								</SwiperSlide>
								<SwiperSlide>
									<img src="https://swiperjs.com/demos/images/nature-10.jpg" />
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<DetailProductsInfo />
				</div>
			</div>
		</section>
	);
}

export default DetailProducts;
