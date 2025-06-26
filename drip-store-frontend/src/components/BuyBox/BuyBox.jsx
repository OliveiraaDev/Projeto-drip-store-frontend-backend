import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import ProductOptions from '../ProductOptions/ProductOptions';

const BuyBox = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  const finalPrice = product.priceDiscount || product.price;
  const hasDiscount = product.priceDiscount && product.priceDiscount < product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.price - product.priceDiscount) / product.price) * 100)
    : 0;

  return (
    <div className="bg-drip-white p-6 rounded-lg shadow-sm">
      {/* Título e avaliação */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-drip-dark-gray-2 mb-2">{product.name}</h1>
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-drip-light-gray">Casual | Nike | REF:38416711</span>
        </div>
        {product.rating && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img 
                  key={i}
                  src="/star-icon.svg" 
                  alt="Star"
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'opacity-100' : 'opacity-30'}`}
                />
              ))}
            </div>
            <span className="text-drip-light-gray">({product.rating}) | 90 avaliações</span>
          </div>
        )}
      </div>

      {/* Preços */}
      <div className="mb-6">
        <div className="flex items-center space-x-3">
          {hasDiscount && (
            <>
              <span className="text-drip-light-gray line-through text-lg">
                R$ {product.price.toFixed(2)}
              </span>
              <span className="bg-drip-warning text-drip-white px-2 py-1 rounded text-sm font-bold">
                {discountPercentage}% OFF
              </span>
            </>
          )}
        </div>
        <div className="text-3xl font-bold text-drip-dark-gray-2 mt-1">
          R$ {finalPrice.toFixed(2)}
        </div>
      </div>

      {/* Descrição */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-drip-dark-gray-2 mb-2">Descrição do produto</h3>
        <p className="text-drip-dark-gray-3 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Opções de cor */}
      {product.colors && (
        <ProductOptions
          options={product.colors}
          type="color"
          selectedOption={selectedColor}
          onOptionChange={setSelectedColor}
        />
      )}

      {/* Opções de tamanho */}
      {product.sizes && (
        <ProductOptions
          options={product.sizes}
          type="size"
          selectedOption={selectedSize}
          onOptionChange={setSelectedSize}
        />
      )}

      {/* Quantidade */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-drip-dark-gray-2 mb-3">Quantidade</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-drip-light-gray-2 rounded">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="p-2 hover:bg-drip-light-gray-3 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="p-2 hover:bg-drip-light-gray-3 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Botão de compra */}
      <button className="w-full bg-drip-warning text-drip-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors">
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;

