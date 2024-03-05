import React from "react";
import "../scss/products-page/products-detail.scss";
import { ReactComponent as Star } from "../image/logo/different/star.svg";

interface CountProps {
	count: number;
}

function Stars(data: CountProps) {
	let starsArray = [];

	for (let i = 0; i < 5; i++) {
		starsArray.push(
			<Star
				key={i}
				style={
					data.count > i
						? { color: "rgb(26, 36, 86)" }
						: { color: "rgb(60 65 92 / 10%)" }
				}
			/>
		);
	}
	return <div className="star d-flex flex-row">{starsArray}</div>;
}

export default Stars;
