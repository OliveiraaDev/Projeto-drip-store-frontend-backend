import React from 'react';
import Logo from '../Logo/Logo';

const InformationSection = ({ title, informations }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4 text-drip-white">{title}</h3>
      <ul className="space-y-2">
        {informations.map((info, index) => (
          <li key={index}>
            <a 
              href={info.link} 
              className="text-drip-light-gray hover:text-drip-primary transition-colors"
            >
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const informationData = [
    { text: 'Sobre Drip Store', link: '/about' },
    { text: 'Segurança', link: '/security' },
    { text: 'Wishlist', link: '/wishlist' },
    { text: 'Blog', link: '/blog' },
    { text: 'Trabalhe conosco', link: '/careers' },
    { text: 'Meus Pedidos', link: '/orders' },
  ];

  const categoriesData = [
    { text: 'Camisetas', link: '/produtos?categoria=camisetas' },
    { text: 'Calças', link: '/produtos?categoria=calcas' },
    { text: 'Bonés', link: '/produtos?categoria=bones' },
    { text: 'Headphones', link: '/produtos?categoria=headphones' },
    { text: 'Tênis', link: '/produtos?categoria=tenis' },
  ];

  return (
    <footer className="bg-drip-dark-gray text-drip-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-drip-light-gray mb-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-drip-light-gray hover:text-drip-primary transition-colors">
                <img src="/facebook.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="text-drip-light-gray hover:text-drip-primary transition-colors">
                <img src="/instagram.svg" alt="Instagram" className="w-6 h-6" />
              </a>
              <a href="#" className="text-drip-light-gray hover:text-drip-primary transition-colors">
                <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Informação */}
          <InformationSection 
            title="Informação" 
            informations={informationData} 
          />
          
          {/* Categorias */}
          <InformationSection 
            title="Categorias" 
            informations={categoriesData} 
          />
        </div>
        
        {/* Copyright */}
        <hr className="border-drip-dark-gray-2 mt-8 mb-4" />
        <div className="text-center">
          <p className="text-drip-light-gray">
            © 2024 Digital Store. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

