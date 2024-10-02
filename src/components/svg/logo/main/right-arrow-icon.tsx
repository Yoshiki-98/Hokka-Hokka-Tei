import React from 'react';
import { IconProps } from '@/types/element-prop';

const RightArrowIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '8px', height: '13px' }}
    >
      <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.49929 11.5L6.31055 6.5L1.49929 1.5" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default RightArrowIcon;
