import React from 'react';
import { LogoProps } from '@/types/element-prop';

const HamburgerMenuLogo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={`relative inline-block ${className || ''}`}
      style={{ 
        width: '30px', 
        height: '22.8px',
        cursor: 'pointer',
      }}
    >
      <svg width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0424805 2.71852L0.191692 0.414555L6.02159 0.350777L11.99 0.0956666L17.9691 0L23.9482 0.231194L29.8847 0.279027L30.0766 2.88594L23.9589 2.47936L17.9905 2.52719L12.0113 2.56705H6.03224L0.0424805 2.71852Z" fill="#EE0026"/>
        <path d="M0.0746228 12.723L0.0639648 10.2994L6.02175 10.3552L11.9902 10.3154L17.9693 10.1719L23.9484 10.4429L29.9382 10.2596L29.9595 12.7947L23.9591 12.8585L17.9906 12.7549L12.0115 12.8984L6.03241 12.6034L0.0746228 12.723Z" fill="#FFA600"/>
        <path d="M0.127895 22.7202L0 20.2648L6.02174 20.3206L11.9902 20.488L17.9693 20.2249L23.9484 20.1133L29.9062 20.3604L29.8103 22.6484L23.9591 22.9195L17.9906 22.6803L12.0115 22.9992L6.03239 22.6006L0.127895 22.7202Z" fill="#EE0026"/>
      </svg>
    </div>
  );
};

export default HamburgerMenuLogo;
