import React from "react";
import "../../scss/products-page/products-page.scss";
import ReviewsArray from "../../data/reviews.json"; //use json as moq of server responce
import Reviews from "./Reviews";

function ReviewsWrapper() {
	const reviews = ReviewsArray;

	return (
		<section className="reviews mb-2">
			<div className="container ">
				<div className="reviews__body text-uppercase d-flex flex-row justify-content-between">
					<div className="reviews__body-counter">
						Reviews
						<span className="ms-2 rounded-pill px-3">{reviews.length}</span>
					</div>
					<div className="reviews__body-whrite">
						<button className="text-uppercase rounded-pill py-1 px-4">
							Write a Review
						</button>
					</div>
				</div>
				<Reviews reviews={reviews} />
			</div>
		</section>
	);
}

export default ReviewsWrapper;
