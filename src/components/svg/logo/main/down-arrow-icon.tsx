import React from 'react';
import { IconProps } from '@/types/element-prop';

const DownArrowIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '14px', height: '9px' }}
    >
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2.00125L7 6.8125L12 2.00125" stroke="#323232" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default DownArrowIcon;
