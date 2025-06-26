import React from 'react';
import Gallery from '../Gallery/Gallery';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Galeria de imagens */}
      <div>
        <Gallery
          images={product.images?.map(src => ({ src })) || [{ src: product.image }]}
          width="700"
          height="570"
          radius="4px"
          showThumbs={true}
        />
      </div>

      {/* Informações do produto */}
      <div>
        {/* Especificações */}
        {product.specifications && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-drip-dark-gray-2 mb-4">Especificações</h3>
            <div className="bg-drip-light-gray-3 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-drip-dark-gray-3 font-medium">{key}:</span>
                    <span className="text-drip-dark-gray-2">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Avaliações */}
        {product.reviews && product.reviews.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-drip-dark-gray-2 mb-4">Avaliações dos clientes</h3>
            <div className="space-y-4">
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b border-drip-light-gray-3 pb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-drip-dark-gray-2">{review.author}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <img 
                          key={i}
                          src="/star-icon.svg" 
                          alt="Star"
                          className={`w-4 h-4 ${i < review.rating ? 'opacity-100' : 'opacity-30'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-drip-dark-gray-3">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

