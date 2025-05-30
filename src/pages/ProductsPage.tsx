import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import { getProductsByCategory, categories } from '../data/products';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [products, setProducts] = useState(getProductsByCategory(activeCategory));

  useEffect(() => {
    const category = queryParams.get('category') || 'all';
    setActiveCategory(category);
    setProducts(getProductsByCategory(category));
  }, [location.search]);

  useEffect(() => {
    document.title = 'Nossos Produtos | Cassineira Cerveja Artesanal';
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setProducts(getProductsByCategory(categoryId));
    
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (categoryId === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', categoryId);
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossas Cervejas</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore nossa variedade de cervejas artesanais, cuidadosamente produzidas 
            com ingredientes selecionados e técnicas tradicionais.
          </p>
        </div>

        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex gap-2 md:justify-center min-w-max">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhum produto encontrado nesta categoria.</p>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;