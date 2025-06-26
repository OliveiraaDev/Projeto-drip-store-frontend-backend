import React from 'react';

const Logo = ({ variant = 'header' }) => {
  const logoSrc = variant === 'footer' ? '/logo-footer.svg' : '/logo-header.svg';
  
  return (
    <div className="flex items-center">
      <img 
        src={logoSrc} 
        alt="Digital Store" 
        className="w-[253px] h-[44px]"
      />
    </div>
  );
};

export default Logo;

