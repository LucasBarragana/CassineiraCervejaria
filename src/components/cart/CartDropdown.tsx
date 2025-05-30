import React, { useState } from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { formatCurrency } from '../../utils/format';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        throw new Error('No active session');
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            price_id: item.product.priceId,
            quantity: item.quantity
          })),
          success_url: `${window.location.origin}/checkout/success`,
          cancel_url: window.location.origin,
          mode: 'payment'
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error: any) {
      console.error('Checkout error:', error);
      toast.error('Erro ao processar pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
    toast.success('Produto removido do carrinho');
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
    toast.success('Quantidade atualizada');
  };

  return (
    <div className="absolute top-full right-0 mt-2 w-full md:w-96 bg-white shadow-lg rounded-lg overflow-hidden z-50">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          Meu Carrinho
        </h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="max-h-96 overflow-y-auto p-4">
        {cartItems.length === 0 ? (
          <div className="py-6 text-center text-gray-500">
            <ShoppingBag className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p>Seu carrinho está vazio</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div 
                key={item.product.id} 
                className="flex items-center gap-3 pb-3 border-b border-gray-100"
              >
                <img 
                  src={item.product.image} 
                  alt={item.product.name} 
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-800 truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-amber-600 font-medium">
                    {formatCurrency(item.product.price)}
                  </p>
                  <div className="flex items-center mt-1">
                    <button 
                      onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-l text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 h-6 flex items-center justify-center bg-gray-50 text-sm">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-r text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => handleRemoveFromCart(item.product.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal:</span>
            <span className="text-lg font-semibold text-gray-800">
              {formatCurrency(getCartTotal())}
            </span>
          </div>
          <button 
            onClick={handleCheckout}
            disabled={loading}
            className={`w-full py-2 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition-colors ${
              loading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Processando...' : 'Finalizar Compra'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown