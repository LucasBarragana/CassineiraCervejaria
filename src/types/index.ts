export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  abv: number; // Alcohol by volume percentage
  ibu: number; // International Bitterness Units
  featured: boolean;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Subscription {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  interval: 'monthly' | 'quarterly' | 'bimonthly';
  features: string[];
  recommended?: boolean;
}

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
};