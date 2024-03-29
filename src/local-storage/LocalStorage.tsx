export interface ProductInBag {
	id: number;
	price: string;
	quantity: number;
}

export function addToBag(product: ProductInBag) {
	const cart: ProductInBag[] = JSON.parse(localStorage.getItem("cart") || "[]");
	const existingProductIndex = cart.findIndex((p) => p.id === product.id);

	if (existingProductIndex !== -1) {
		cart[existingProductIndex].quantity += product.quantity;
	} else {
		cart.push(product);
	}
	localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCartProducts(): ProductInBag[] {
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	return cart;
}

export function updateProductQuantity(productId: number, quantity: number) {
	const cart: ProductInBag[] = JSON.parse(localStorage.getItem("cart") || "[]");
	const productIndex = cart.findIndex((product) => product.id === productId);

	if (productIndex !== -1) {
		if (quantity === 0) {
			cart.splice(productIndex, 1);
		} else {
			cart[productIndex].quantity = quantity;
		}
		localStorage.setItem("cart", JSON.stringify(cart));
	} else {
		console.error("Product not found in the cart.");
	}
}
