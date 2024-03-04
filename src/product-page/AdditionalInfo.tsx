import React from "react";
import "../scss/products-page/products-page.scss";

interface AdditionalProduct {
	id: number;
	additionalImg?: string;
	additionalName?: string;
	additionalP?: string;
}

interface AdditionalInfoProps {
	additional: AdditionalProduct;
}

function AdditionalInfo(data: AdditionalInfoProps) {
	let additionalInfo = data.additional;

	return (
		<section className="additional mt-4">
			<div className="container">
				<div className="position-relative">
					<img
						src={additionalInfo.additionalImg}
						alt="Monogram"
						className="additional__img w-100 object-fit-cover"
					/>
					<article className="additional__article position-absolute top-50 start-50 translate-middle text-center d-flex flex-column justify-content-between">
						<header className="text-uppercase">
							{additionalInfo.additionalName}
						</header>
						<p>{additionalInfo.additionalP}</p>
						<footer>
							<a
								href="#"
								className="d-inline text-uppercase px-4 py-1 rounded-pill"
							>
								Learn More
							</a>
						</footer>
					</article>
				</div>
			</div>
		</section>
	);
}

export default AdditionalInfo;
