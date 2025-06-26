import React from 'react';

const ProductCard = ({ image, name, price, priceDiscount }) => {
  const hasDiscount = priceDiscount && priceDiscount < price;

  return (
    <div className="bg-drip-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
      {/* Imagem do produto */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-[292px] h-[321px] object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Conteúdo do card */}
      <div className="p-4">
        {/* Nome do produto */}
        <h3 className="text-drip-dark-gray font-medium mb-2 line-clamp-2 hover:text-drip-primary transition-colors">
          {name}
        </h3>
        
        {/* Preços */}
        <div className="flex items-center space-x-2">
          {hasDiscount && (
            <span className="text-drip-light-gray line-through text-lg">
              R$ {price.toFixed(2)}
            </span>
          )}
          <span className="text-drip-dark-gray font-bold text-2xl">
            R$ {(priceDiscount || price).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

