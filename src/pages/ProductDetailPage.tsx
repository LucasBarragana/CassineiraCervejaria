import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Minus, Plus, ShoppingCart } from 'lucide-react';
import { getProductById, getProductsByCategory } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/format';
import ProductCard from '../components/product/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const product = id ? getProductById(id) : null;

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!product) {
      navigate('/not-found');
      return;
    }

    document.title = `${product.name} | Cassineira Cerveja Artesanal`;

    // Get related products (same category, excluding current product)
    const related = getProductsByCategory(product.category)
      .filter(p => p.id !== product.id)
      .slice(0, 4);
    
    setRelatedProducts(related);
  }, [product, id, navigate]);

  if (!product) {
    return null; // Navigate will handle redirection
  }

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    if (value > product.stock) return;
    setQuantity(value);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-cream">
      <div className="container mx-auto px-4">
        <Link 
          to="/products" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para produtos
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                  {product.featured && (
                    <span className="text-xs px-2 py-1 bg-amber-100 rounded-full text-amber-700">
                      Destaque
                    </span>
                  )}
                  {product.stock < 10 && (
                    <span className="text-xs px-2 py-1 bg-red-100 rounded-full text-red-700">
                      Estoque baixo
                    </span>
                  )}
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-2xl font-bold text-amber-600 mb-4">{formatCurrency(product.price)}</p>

                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">ABV:</span>
                    <span className="text-gray-900">{product.abv}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">IBU:</span>
                    <span className="text-gray-900">{product.ibu}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">Estoque:</span>
                    <span className="text-gray-900">{product.stock} unidades</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h2>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-gray-700">Quantidade:</span>
                  <div className="flex items-center">
                    <button 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-l text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 h-8 flex items-center justify-center bg-gray-50 text-gray-800 font-medium">
                      {quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-r text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="w-full py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Você também pode gostar</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;