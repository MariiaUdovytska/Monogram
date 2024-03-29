export interface ProductInBag {
	id: number;
	price: string;
	quantity: number;
}

export function addToBag(product: ProductInBag) {
	const cart: ProductInBag[] = JSON.parse(localStorage.getItem("cart") || "[]");
	cart.push(product);
	localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartProducts(): ProductInBag[] {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	return cart;
}
