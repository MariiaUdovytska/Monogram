import React, { useState } from "react";
import {
	updateProductQuantity,
	removeProductFromCart,
} from "../local-storage/LocalStorage";
import Form from "react-bootstrap/Form";
import { ReactComponent as X } from "../image/logo/different/x.svg";
import { useCart } from "../local-storage/CartContext";

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
	const { updateCartCount } = useCart();

	const handleQuantityChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const newQuantity = parseInt(event.target.value);
		setQuantityProduct(newQuantity);
		updateProductQuantity(data.id, newQuantity);
		updateCartCount();
	};

	const handleDeleteProduct = () => {
		removeProductFromCart(data.id);
		updateCartCount(); // Оновлюємо лічильник корзини, якщо він є
	};

	const optionsLength = Math.max(6, quantityProduct);
	const options = Array.from({ length: optionsLength }, (_, i) => i + 1).map(
		(number) => (
			<option key={number} value={number}>
				{number}
			</option>
		)
	);

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
					{options}
				</Form.Select>
			</div>
			<button
				type="button"
				onClick={handleDeleteProduct}
				className="product-list__list-cansel h-100 w-100"
			>
				<X />
			</button>
		</li>
	);
}

export default SelectedProduct;
