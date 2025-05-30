import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Subscription } from '../../types';
import { formatCurrency } from '../../utils/format';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import toast from 'react-hot-toast';

interface SubscriptionCardProps {
  subscription: Subscription;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ subscription }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!user) {
      navigate('/login', { state: { from: window.location.pathname } });
      return;
    }

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
          price_id: subscription.priceId,
          success_url: `${window.location.origin}/checkout/success`,
          cancel_url: window.location.origin,
          mode: 'subscription'
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error: any) {
      console.error('Subscription error:', error);
      toast.error('Erro ao processar assinatura. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className={`bg-white rounded-xl overflow-hidden shadow-lg ${
        subscription.recommended ? 'border-2 border-amber-500 ring-2 ring-amber-500/30' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      {subscription.recommended && (
        <div className="bg-amber-500 text-white py-2 text-center font-medium">
          Mais popular
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">{subscription.name}</h3>
            <p className="text-gray-600">{subscription.description}</p>
          </div>
          <img 
            src={subscription.image} 
            alt={subscription.name} 
            className="w-16 h-16 object-cover rounded-full border-2 border-amber-100"
          />
        </div>

        <div className="mb-6">
          <span className="text-3xl font-bold text-amber-600">{formatCurrency(subscription.price)}</span>
          <span className="text-gray-500 ml-1">/mês</span>
        </div>

        <ul className="space-y-3 mb-6">
          {subscription.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button 
          onClick={handleSubscribe}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium transition-colors ${
            subscription.recommended 
              ? 'bg-amber-600 text-white hover:bg-amber-700'
              : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
          } ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Processando...' : 'Assinar agora'}
        </button>
      </div>
    </motion.div>
  );
};

export default SubscriptionCard