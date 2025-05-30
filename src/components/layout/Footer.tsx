import React from 'react';
import { Link } from 'react-router-dom';
import { Beer, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown text-amber-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Beer className="h-8 w-8" />
              <span className="text-xl font-bold tracking-tighter">Cassineira</span>
            </Link>
            <p className="text-amber-200/80 mb-4">
              Cerveja artesanal com paixão e tradição desde 2015. 
              Cada garrafa carrega nossa dedicação à qualidade e sabor autêntico.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Cervejas
                </Link>
              </li>
              <li>
                <Link to="/subscriptions" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Assinaturas
                </Link>
              </li>
              <li>
                <Link to="#" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=ipa" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  IPAs
                </Link>
              </li>
              <li>
                <Link to="/products?category=pilsen" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Pilsen
                </Link>
              </li>
              <li>
                <Link to="/products?category=stout" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Stouts
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-amber-200/80 hover:text-amber-300 transition-colors">
                  Ver todas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Contato</h3>
            <p className="text-amber-200/80 mb-4">
              Rua das Cervejas, 123<br />
              São Paulo, SP<br />
              CEP: 01234-567
            </p>
            <p className="flex items-center gap-2 text-amber-200/80">
              <Mail className="h-4 w-4" />
              <a href="mailto:contato@cassineira.com" className="hover:text-amber-300 transition-colors">
                contato@cassineira.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-200/80 text-sm">
              &copy; {new Date().getFullYear()} Cassineira Cerveja Artesanal. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-amber-200/80 text-sm hover:text-amber-300 transition-colors">
                Termos de Uso
              </Link>
              <Link to="#" className="text-amber-200/80 text-sm hover:text-amber-300 transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;