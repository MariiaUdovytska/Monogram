import React from "react";
import "../../scss/products-page/products-page.scss";
import Stars from "../../stars/Stars";

interface ReviewsProd {
	id: string;
	name: string;
	icon: string;
	status: string;
	data: string;
	star: number;
	mainText: string;
	text: string;
}
interface ReviewsProps {
	reviews: ReviewsProd[];
}

function Reviews(data: ReviewsProps) {
	let reviews = data.reviews;

	let reviewsArrayLi = reviews.map(function (review) {
		return (
			<li key={review.id} className="review__ul-li mb-5">
				<article className="review__ul-li-art d-flex flex-row">
					<img
						className="rounded-circle me-3"
						src={review.icon}
						alt={review.name}
					></img>
					<div>
						<div className="d-flex flex-row align-items-center mb-2">
							<h4 className="mb-0">{review.name}</h4>
							<span className="ms-2">{review.status}</span>
						</div>
						<div className="d-flex flex-row justify-content-between mb-2">
							<div className="product__body-info-price-star">
								<Stars count={review.star} />
							</div>
							<div>{review.data}</div>
						</div>
						<h5>{review.mainText}</h5>
						<div
							className="review__ul-li-art-text"
							dangerouslySetInnerHTML={{ __html: review.text }}
						></div>
					</div>
				</article>
			</li>
		);
	});

	return (
		<div className="review">
			<ul className="review__ul mt-4">{reviewsArrayLi}</ul>
		</div>
	);
}

export default Reviews;
