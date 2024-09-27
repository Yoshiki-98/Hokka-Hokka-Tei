import React from 'react';
import { TriggerProps } from '@/types/element-prop';

const Pointer: React.FC<TriggerProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '30px', height: '15px' }}
    >
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7.5" cy="7.5" r="7.5" fill="#D9D9D9"/>
      </svg>
    </button>
  );
};

export default Pointer;
