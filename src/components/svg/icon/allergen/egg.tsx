import React from 'react';
import { IconProps } from '@/types/element-prop';

const EggIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: '31px', height: '40px' }}
    >
      <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2678_13963)">
          <path d="M30.2299 17.53C27.4099 6.4 20.3099 0 15.4299 0C10.5499 0 3.44991 6.4 0.619913 17.53C-1.86009 27.32 3.11991 39.85 15.4299 39.85C27.7399 39.85 32.7099 27.32 30.2299 17.53ZM12.2899 34.9C11.9899 35.31 11.5199 35.52 11.0499 35.52C10.7299 35.52 10.3999 35.42 10.1299 35.21C1.31991 28.63 4.53991 17.21 4.67991 16.73C4.91991 15.91 5.76991 15.44 6.58991 15.68C7.40991 15.92 7.87991 16.77 7.63991 17.59C7.63991 17.62 6.91991 20.15 7.12991 23.3C7.40991 27.36 9.03991 30.54 11.9799 32.73C12.6599 33.24 12.7999 34.21 12.2899 34.89V34.9Z" fill="#323232"/>
        </g>
        <defs>
          <clipPath id="clip0_2678_13963">
            <rect width="30.85" height="39.85" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default EggIcon;
