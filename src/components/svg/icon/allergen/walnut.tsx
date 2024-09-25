import React from 'react';
import { IconProps } from '@/types/element-prop';
import {
  useMediaQuery,
  useTheme
} from '@mui/material';

const WalnutIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const width = isLgUp ? '42' : isMdUp ? '39' : isSmUp ? '36' : '33';
  const height = isLgUp ? '42' : isMdUp ? '39' : isSmUp ? '36' : '33';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={
        { width: 'auto', height: '40px' }
      }
    >
      <svg width={width} height={height} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2678_13942)">
          <path d="M35.2 6.84C28.94 2.39 25.45 2.93 22.67 0C19.73 2.43 16.11 1.41 9.24005 4.86C1.36005 8.84 -1.67995 20.79 0.890046 28.15C3.65005 36.04 11.02 37.68 15.06 39.49C17.41 40.54 17.52 41.28 19.51 41.43C21.5 41.58 21.84 40.77 24.2 40.18C28.5 39.12 36.01 38.5 39.93 31.12C43.58 24.24 42.39 11.96 35.2 6.84ZM8.45005 20.8C8.41005 21.37 7.91005 21.8 7.33005 21.76C6.76005 21.72 6.33005 21.22 6.37005 20.64L6.54005 18.35C6.58005 17.78 7.08005 17.35 7.66005 17.39C8.23005 17.43 8.66005 17.93 8.62005 18.5L8.45005 20.79V20.8ZM13.82 15.6L14.81 13.14C15.02 12.61 15.63 12.35 16.16 12.57C16.69 12.79 16.95 13.39 16.73 13.92L15.74 16.37C15.57 16.8 15.14 17.05 14.7 17.02C14.6 17.02 14.49 16.99 14.39 16.95C13.86 16.73 13.6 16.13 13.82 15.6ZM15.74 29.46C15.62 29.5 15.49 29.51 15.38 29.5C14.96 29.47 14.58 29.18 14.46 28.74L13.82 26.51C13.66 25.96 13.99 25.38 14.54 25.22C15.09 25.06 15.67 25.38 15.83 25.94L16.46 28.17C16.62 28.72 16.3 29.3 15.75 29.45L15.74 29.46ZM22.04 36.32C21.85 36.71 21.44 36.93 21.03 36.9C20.9 36.9 20.77 36.86 20.65 36.8C20.14 36.54 19.93 35.92 20.18 35.4C25.45 24.74 23.57 10.33 23.55 10.18C23.47 9.61 23.87 9.08 24.44 9.01C25.01 8.93 25.54 9.33 25.61 9.9C25.69 10.52 27.6 25.1 22.04 36.32ZM32.97 27.57L31.43 29.75C31.21 30.06 30.85 30.21 30.5 30.19C30.32 30.18 30.14 30.11 29.98 30C29.51 29.67 29.4 29.02 29.73 28.55L31.27 26.37C31.6 25.9 32.25 25.79 32.72 26.12C33.19 26.45 33.3 27.1 32.97 27.57ZM37.44 21.53C37.35 21.55 37.25 21.56 37.15 21.55C36.7 21.52 36.31 21.19 36.21 20.72L35.71 18.26C35.59 17.7 35.96 17.15 36.52 17.03C37.08 16.92 37.63 17.28 37.75 17.84L38.25 20.3C38.37 20.86 38 21.41 37.44 21.53Z" fill="#323232"/>
        </g>
        <defs>
        <clipPath id="clip0_2678_13942">
          <rect width="41.94" height="41.45" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default WalnutIcon;
