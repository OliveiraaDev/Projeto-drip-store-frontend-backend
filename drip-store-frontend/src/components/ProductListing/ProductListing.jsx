import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductListing = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-drip-light-gray">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard 
          key={product.id || index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;

