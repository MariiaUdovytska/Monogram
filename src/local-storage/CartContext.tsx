import React, {
	createContext,
	useState,
	useContext,
	useEffect,
	ReactNode,
} from "react";
import { getCartProducts } from "./LocalStorage";

interface CartContextType {
	cartCount: number;
	updateCartCount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
};

interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		setCartCount(calculateSummCount());
	}, []);

	const updateCartCount = () => {
		setCartCount(calculateSummCount());
	};

	function calculateSummCount() {
		let summ = 0;
		let products = getCartProducts();
		products.forEach((element) => {
			summ += element.quantity;
		});
		return summ;
	}

	return (
		<CartContext.Provider value={{ cartCount, updateCartCount }}>
			{children}
		</CartContext.Provider>
	);
};
