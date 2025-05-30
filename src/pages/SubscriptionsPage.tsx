import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubscriptionCard from '../components/subscription/SubscriptionCard';
import { subscriptions } from '../data/subscriptions';
import Newsletter from '../components/home/Newsletter';

const SubscriptionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Assinaturas | Cassineira Cerveja Artesanal';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-cream">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Nossas Assinaturas</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Assine e receba uma seleção exclusiva de cervejas artesanais todo mês na sua casa.
            Descubra novos sabores e amplie seu conhecimento sobre o mundo cervejeiro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {subscriptions.map((subscription, index) => (
            <motion.div
              key={subscription.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SubscriptionCard subscription={subscription} />
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Como funciona</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-amber-100 w-8 h-8 rounded-full text-amber-700 font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Escolha seu plano</h3>
                    <p className="text-gray-600">
                      Selecione o plano que melhor se adapta às suas preferências e orçamento.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-amber-100 w-8 h-8 rounded-full text-amber-700 font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Receba em casa</h3>
                    <p className="text-gray-600">
                      Sua caixa será enviada no início de cada mês diretamente para seu endereço.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-amber-100 w-8 h-8 rounded-full text-amber-700 font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Desfrute e aprenda</h3>
                    <p className="text-gray-600">
                      Cada caixa vem com um guia de degustação e informações sobre as cervejas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center bg-amber-100 w-8 h-8 rounded-full text-amber-700 font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Cancele quando quiser</h3>
                    <p className="text-gray-600">
                      Sem contratos de fidelidade, você pode cancelar sua assinatura a qualquer momento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.pexels.com/photos/5618825/pexels-photo-5618825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Caixa de assinatura" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-4 shadow-sm">
              <summary className="font-medium text-gray-800 cursor-pointer">
                Quando minha caixa será enviada?
              </summary>
              <p className="mt-3 text-gray-600 pl-4">
                As caixas são enviadas no primeiro dia útil de cada mês. Após o envio, 
                o prazo de entrega varia de acordo com a sua localização.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 shadow-sm">
              <summary className="font-medium text-gray-800 cursor-pointer">
                Posso escolher as cervejas da minha caixa?
              </summary>
              <p className="mt-3 text-gray-600 pl-4">
                As cervejas são selecionadas mensalmente pela nossa equipe de especialistas. 
                No entanto, assinantes do plano Connoisseur podem personalizar parcialmente sua seleção.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 shadow-sm">
              <summary className="font-medium text-gray-800 cursor-pointer">
                Como funciona o pagamento?
              </summary>
              <p className="mt-3 text-gray-600 pl-4">
                O pagamento é mensal e automático, realizado através de cartão de crédito.
                A cobrança ocorre sempre no dia 25 do mês anterior ao envio da caixa.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 shadow-sm">
              <summary className="font-medium text-gray-800 cursor-pointer">
                Posso trocar de plano?
              </summary>
              <p className="mt-3 text-gray-600 pl-4">
                Sim, você pode alterar seu plano a qualquer momento através da sua conta. 
                A alteração será aplicada na próxima cobrança.
              </p>
            </details>
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  );
};

export default SubscriptionsPage;