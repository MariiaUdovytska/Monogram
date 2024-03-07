import React, { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../scss/products-page/products-page.scss";
import DetailProducts from "./detailProducts/DetailProducts";
import productsData from "../data/products.json";
import IncludedWithMonogram from "./IncludedWithMonogram";
import Recommended from "./Recommended";
import AdditionalInfo from "./AdditionalInfo";
import ReviewsWrapper from "./reviews/ReviewsWrapper";

function ProductsPage() {
	const { id } = useParams();
	const product = productsData.find((p) => p.id.toString() === id);
	const reviewsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	const scrollToReviews = () => {
		if (reviewsRef.current) {
			reviewsRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div className="products-page h-100">
			{product ? (
				<>
					<DetailProducts product={product} scrollToReviews={scrollToReviews} />
					<IncludedWithMonogram />
					<AdditionalInfo additional={product} />
					<Recommended />
					<div ref={reviewsRef}>
						<ReviewsWrapper />
					</div>
				</>
			) : (
				<p className="product ms-5 text-uppercase text-center">
					Product not found
				</p>
			)}
			<nav className="products-page__back container mb-5">
				<Link className="router-link" to="/shop">
					← Back to Shop
				</Link>
			</nav>
		</div>
	);
}

export default ProductsPage;
