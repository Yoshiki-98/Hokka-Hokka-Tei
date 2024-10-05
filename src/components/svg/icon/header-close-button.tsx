import React from 'react';
import { LogoProps } from '@/types/element-prop';

const HeaderCloseButton: React.FC<LogoProps> = ({ onClick, disabled, className }) => {

  return (
    <svg width="30" height="22" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.15407 1.65159L1.64446 0.342507L5.22506 3.84561L9.00608 7.31665L12.6967 10.891L16.1887 14.664L19.7663 18.2997L18.2991 20L14.8294 16.0363L11.1743 12.4393L7.51758 8.83105L3.88507 5.19855L0.15407 1.65159Z" fill="#EE0026"/>
      <path d="M1.66149 19.7131L0.0920246 18.2991L3.78433 14.6746L7.51207 11.1502L10.9847 7.3579L14.5494 3.65759L18.3191 0.188183L19.6509 1.63651L16.2608 5.35599L12.4895 8.83672L9.05069 12.663L5.17602 16.0533L1.66149 19.7131Z" fill="#EE0026"/>
    </svg>
  );
};

export default HeaderCloseButton;
