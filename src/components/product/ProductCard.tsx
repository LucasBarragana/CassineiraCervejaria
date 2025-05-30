import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { formatCurrency } from '../../utils/format';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    toast.success('Produto adicionado ao carrinho!');
  };

  return (
    <motion.div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.featured && (
            <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Destaque
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-amber-600 font-bold">{formatCurrency(product.price)}</span>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>{product.abv}% ABV</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <span>{product.ibu} IBU</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
          
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
            {product.stock < 10 && (
              <span className="text-xs px-2 py-1 bg-red-100 rounded-full text-red-700">
                Estoque baixo
              </span>
            )}
          </div>
        </div>
      </Link>

      <motion.button
        className="absolute bottom-4 right-4 p-2 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-700 transition-colors"
        onClick={handleAddToCart}
        whileTap={{ scale: 0.9 }}
      >
        <ShoppingCart className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
};

export default ProductCard