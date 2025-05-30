import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you would send this data to a backend
    }
  };

  return (
    <section className="py-16 bg-amber-700 text-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block p-3 bg-amber-600 rounded-full mb-6">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">
              Inscreva-se para receber notícias, lançamentos exclusivos e promoções especiais
              diretamente em seu e-mail.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div 
              className="p-4 bg-amber-600 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-medium">
                Obrigado por se inscrever! Em breve você receberá nossas novidades.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                required
                className="flex-grow px-4 py-3 rounded-lg bg-amber-600 text-amber-50 placeholder-amber-200 border border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-amber-50 text-amber-800 font-medium rounded-lg hover:bg-amber-100 transition-colors"
              >
                Inscrever-se
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;