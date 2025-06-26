import React from 'react';
import { Search } from 'lucide-react';
import Logo from '../Logo/Logo';

const Header = () => {
  return (
    <header className="bg-drip-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Logo variant="header" />
          
          {/* Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full px-4 py-2 pr-10 border border-drip-light-gray-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-drip-primary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-drip-light-gray w-4 h-4" />
            </div>
          </div>
          
          {/* User actions */}
          <div className="flex items-center space-x-4">
            <a 
              href="/register" 
              className="text-drip-dark-gray-2 text-base underline hover:text-drip-primary transition-colors"
            >
              Cadastre-se
            </a>
            <a 
              href="/login" 
              className="bg-drip-primary text-drip-white px-6 py-2 rounded font-bold text-sm hover:bg-drip-tertiary transition-colors w-[114px] h-[40px] flex items-center justify-center"
            >
              Entrar
            </a>
            <button className="relative text-drip-dark-gray-2 hover:text-drip-primary transition-colors">
              <img src="/mini-cart.svg" alt="Carrinho" className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="border-t border-drip-light-gray-3 py-4">
          <ul className="flex space-x-8">
            <li>
              <a href="/" className="text-drip-dark-gray-2 hover:text-drip-primary transition-colors font-medium border-b-2 border-transparent hover:border-drip-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/produtos" className="text-drip-dark-gray-2 hover:text-drip-primary transition-colors font-medium border-b-2 border-transparent hover:border-drip-primary">
                Produtos
              </a>
            </li>
            <li>
              <a href="/categorias" className="text-drip-dark-gray-2 hover:text-drip-primary transition-colors font-medium border-b-2 border-transparent hover:border-drip-primary">
                Categorias
              </a>
            </li>
            <li>
              <a href="/meus-pedidos" className="text-drip-dark-gray-2 hover:text-drip-primary transition-colors font-medium border-b-2 border-transparent hover:border-drip-primary">
                Meus Pedidos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

