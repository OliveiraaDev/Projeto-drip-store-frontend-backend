import React, { useState } from 'react';

const Gallery = ({ 
  className = '', 
  width = '1440', 
  height = '681', 
  radius = '4px', 
  showThumbs = false, 
  images = [] 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      {/* Imagem principal */}
      <div 
        className="relative overflow-hidden"
        style={{ 
          width: `${width}px`, 
          height: `${height}px`,
          borderRadius: radius 
        }}
      >
        <img
          src={images[currentImageIndex]?.src}
          alt={`Slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
          style={{ borderRadius: radius }}
        />
        
        {/* Setas de navegação */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              disabled={currentImageIndex === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all ${
                currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <img src="/arrow-left.svg" alt="Anterior" className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              disabled={currentImageIndex === images.length - 1}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all ${
                currentImageIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <img src="/arrow-right.svg" alt="Próximo" className="w-6 h-6" />
            </button>
          </>
        )}
      </div>
      
      {/* Miniaturas */}
      {showThumbs && images.length > 1 && (
        <div className="flex space-x-2 mt-4 overflow-x-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => selectImage(index)}
              className={`flex-shrink-0 overflow-hidden border-2 transition-all ${
                index === currentImageIndex
                  ? 'border-drip-primary'
                  : 'border-transparent hover:border-drip-primary'
              }`}
              style={{ 
                width: '117px', 
                height: '95px',
                borderRadius: radius 
              }}
            >
              <img
                src={image.src}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ borderRadius: radius }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;

