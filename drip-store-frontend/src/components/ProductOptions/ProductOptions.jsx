import React, { useState } from 'react';

const ProductOptions = ({ options, type = 'color', selectedOption, onOptionChange }) => {
  const isColorType = type === 'color';
  
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-drip-dark-gray-2 mb-3">
        {isColorType ? 'Cor' : 'Tamanho'}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onOptionChange(option)}
            className={`
              ${isColorType 
                ? 'w-8 h-8 rounded-full border-2 transition-all' 
                : 'px-4 py-2 border-2 rounded transition-all min-w-[40px]'
              }
              ${selectedOption?.id === option.id
                ? isColorType 
                  ? 'border-drip-primary ring-2 ring-drip-primary ring-offset-2'
                  : 'border-drip-primary bg-drip-primary text-drip-white'
                : isColorType
                  ? 'border-drip-light-gray-2 hover:border-drip-primary'
                  : 'border-drip-light-gray-2 text-drip-dark-gray-3 hover:border-drip-primary'
              }
            `}
            style={isColorType ? { backgroundColor: option.value } : {}}
            title={isColorType ? option.label : undefined}
          >
            {!isColorType && option.label}
          </button>
        ))}
      </div>
      
      {selectedOption && (
        <p className="text-sm text-drip-light-gray mt-2">
          Selecionado: {selectedOption.label}
        </p>
      )}
    </div>
  );
};

export default ProductOptions;

