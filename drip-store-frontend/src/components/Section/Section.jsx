import React from 'react';

const Section = ({ title, titleAlign = 'left', link, children, className = '' }) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="flex items-center justify-between mb-8">
            <h2 className={`text-2xl font-bold text-drip-dark-gray-2 text-${titleAlign}`}>
              {title}
            </h2>
            {link && (
              <a 
                href={link.href} 
                className="text-lg text-drip-primary hover:underline"
              >
                {link.text}
              </a>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

