import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Beer, User } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import CartDropdown from '../cart/CartDropdown';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brown/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-amber-50 hover:text-amber-200 transition-colors"
        >
          <Beer className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tighter">Cassineira</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-amber-50 hover:text-amber-200 transition-colors ${
              location.pathname === '/' ? 'border-b-2 border-amber-300' : ''
            }`}
          >
            Início
          </Link>
          <Link 
            to="/products" 
            className={`text-amber-50 hover:text-amber-200 transition-colors ${
              location.pathname === '/products' ? 'border-b-2 border-amber-300' : ''
            }`}
          >
            Produtos
          </Link>
          <Link 
            to="/subscriptions" 
            className={`text-amber-50 hover:text-amber-200 transition-colors ${
              location.pathname === '/subscriptions' ? 'border-b-2 border-amber-300' : ''
            }`}
          >
            Assinaturas
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <Link
              to="/account"
              className="text-amber-50 hover:text-amber-200 transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-amber-50 hover:text-amber-200 transition-colors"
            >
              Entrar
            </Link>
          )}
          
          <button 
            className="relative text-amber-50 hover:text-amber-200 transition-colors"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <ShoppingCart className="h-6 w-6" />
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-500 text-amber-50 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </button>

          <button 
            className="md:hidden text-amber-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-brown/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className={`text-amber-50 hover:text-amber-200 transition-colors py-2 ${
                location.pathname === '/' ? 'border-l-4 border-amber-300 pl-2' : ''
              }`}
            >
              Início
            </Link>
            <Link 
              to="/products" 
              className={`text-amber-50 hover:text-amber-200 transition-colors py-2 ${
                location.pathname === '/products' ? 'border-l-4 border-amber-300 pl-2' : ''
              }`}
            >
              Produtos
            </Link>
            <Link 
              to="/subscriptions" 
              className={`text-amber-50 hover:text-amber-200 transition-colors py-2 ${
                location.pathname === '/subscriptions' ? 'border-l-4 border-amber-300 pl-2' : ''
              }`}
            >
              Assinaturas
            </Link>
          </nav>
        </div>
      )}

      {/* Cart Dropdown */}
      {isCartOpen && (
        <CartDropdown onClose={() => setIsCartOpen(false)} />
      )}
    </header>
  );
};

export default Header;