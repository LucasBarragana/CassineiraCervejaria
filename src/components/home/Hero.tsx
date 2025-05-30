import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-brown to-amber-900">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-50 mb-4 leading-tight">
              Cerveja artesanal com <span className="text-amber-300">paixão e tradição</span>
            </h1>
            <p className="text-xl text-amber-200/90 mb-8 max-w-lg">
              Descubra sabores únicos e autênticos criados com os melhores ingredientes
              e técnicas tradicionais de fermentação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="px-6 py-3 bg-amber-500 text-amber-50 font-medium rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 group"
              >
                Comprar agora
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/subscriptions" 
                className="px-6 py-3 bg-transparent border-2 border-amber-400 text-amber-100 font-medium rounded-lg hover:bg-amber-400/10 transition-colors flex items-center justify-center"
              >
                Conheça nossas assinaturas
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/5530410/pexels-photo-5530410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Cerveja Cassineira" 
              className="w-full h-auto max-w-md mx-auto rounded-xl shadow-2xl transform -rotate-3"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;