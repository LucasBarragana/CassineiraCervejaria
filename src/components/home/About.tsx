import React from 'react';
import { motion } from 'framer-motion';
import { Award, Droplets, Leaf } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sobre a Cassineira</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fundada em 2015 com a missão de trazer cervejas artesanais de qualidade para os apreciadores mais exigentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/5468049/pexels-photo-5468049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Processo de fabricação" 
              className="w-full h-80 rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-500"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg text-amber-700">
                  <Droplets className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Ingredientes selecionados</h3>
                  <p className="text-gray-600">
                    Utilizamos apenas os melhores maltes, lúpulos e leveduras para garantir o sabor excepcional de nossas cervejas.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-500"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg text-amber-700">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualidade premiada</h3>
                  <p className="text-gray-600">
                    Nossas cervejas são premiadas em concursos nacionais e internacionais, 
                    reconhecidas pela excelência e inovação.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="p-6 bg-white rounded-lg shadow-md border-l-4 border-amber-500"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-lg text-amber-700">
                  <Leaf className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Produção responsável</h3>
                  <p className="text-gray-600">
                    Comprometidos com a sustentabilidade, buscamos minimizar nosso impacto ambiental 
                    em todas as etapas de produção.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;