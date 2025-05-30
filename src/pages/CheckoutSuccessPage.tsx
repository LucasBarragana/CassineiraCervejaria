import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';

const CheckoutSuccessPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Pedido Confirmado | Cassineira Cerveja Artesanal';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-16 px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Pedido Confirmado!</h1>
        <p className="text-gray-600 mb-8">
          Obrigado pela sua compra! Você receberá um email com os detalhes do seu pedido em breve.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors"
        >
          <Home className="h-5 w-5" />
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;