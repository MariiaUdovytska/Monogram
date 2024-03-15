import React, { useState } from "react";
import { ProductInBag } from "../local-storage/LocalStorage";
import Form from "react-bootstrap/Form";
import { ReactComponent as X } from "../image/logo/different/x.svg";

export interface ProductListInfo {
	id: number;
	title?: string;
	image?: string;
	price: string;
	currency?: string;
	quantity: number;
}

interface SelectedProductProps {
	item: ProductListInfo;
}

function SelectedProduct(props: SelectedProductProps) {
	const data = props.item;
	const [quantityProduct, setQuantityProduct] = useState<number>(data.quantity);

	const handleQuantityChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setQuantityProduct(parseInt(event.target.value));
	};

	return (
		<li className="d-flex flex-row mb-3 pb-3">
			<img
				src={data.image}
				alt={data.title}
				className="product-list__list-img object-fit-cover"
			/>
			<div className="product-list__list-info ms-2">
				<a href="#" className="text-uppercase">
					{data.title}
				</a>
				<p>
					{data.currency}
					{data.price}
				</p>
				<Form.Select
					aria-label="Default select example"
					className="rounded-pill me-3"
					value={quantityProduct}
					onChange={handleQuantityChange}
				>
					<option>1</option>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
				</Form.Select>
			</div>
			<button type="button" className="product-list__list-cansel h-100 w-100">
				<X />
			</button>
		</li>
	);
}

export default SelectedProduct;
