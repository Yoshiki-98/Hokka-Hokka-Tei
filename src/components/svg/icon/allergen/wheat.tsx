import React from 'react';
import { IconProps } from '@/types/element-prop';
import {
  useMediaQuery,
  useTheme
} from '@mui/material';

const WheatIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const width = isLgUp ? '37' : isMdUp ? '34' : isSmUp ? '32' : '30';
  const height = isLgUp ? '46' : isMdUp ? 'auto' : isSmUp ? 'auto' : '36';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: 'auto', height: 'auto' }}
    >
      <svg width={width} height={height} viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_872_4413)">
          <path d="M18.41 0C17.64 4.77 13.75 9.81 13.75 15.21C13.75 17.71 15.52 20.99 18.41 22.91C21.3 20.99 23.07 17.72 23.07 15.21C23.07 9.81 19.17 4.76 18.41 0ZM18.16 20.17C18.03 20.28 17.87 20.34 17.71 20.34C17.51 20.34 17.31 20.26 17.17 20.09C15.07 17.59 14.57 14.02 15.84 10.53C15.97 10.16 16.38 9.97 16.74 10.11C17.1 10.24 17.29 10.65 17.16 11.01C16.07 14.01 16.48 17.07 18.25 19.17C18.5 19.47 18.46 19.91 18.17 20.17H18.16Z" fill="#323232"/>
          <path d="M15.9305 22.8005C12.6705 18.1405 6.27047 16.1405 2.73047 12.4805C4.95047 17.0705 4.63047 23.7905 7.88047 28.4305C9.39047 30.5905 12.8805 32.3305 16.5405 32.2305C17.8805 28.8305 17.4305 24.9505 15.9305 22.8005ZM14.7205 30.2205C14.6405 30.5405 14.3505 30.7405 14.0405 30.7405C13.9805 30.7405 13.9205 30.7405 13.8605 30.7205C10.7105 29.8905 8.26047 27.2705 7.31047 23.7205C7.21047 23.3405 7.43047 22.9605 7.81047 22.8605C8.18047 22.7605 8.57047 22.9805 8.67047 23.3605C9.85047 27.7705 12.9505 29.0305 14.2205 29.3705C14.5905 29.4705 14.8205 29.8605 14.7205 30.2305V30.2205Z" fill="#323232"/>
          <path d="M15.1 35.3491C11.1 30.9091 4.16 29.6491 0 26.2891C2.9 30.7791 3.43 37.8291 7.42 42.2591C9.27 44.3091 13.14 45.6891 16.95 45.1191C17.92 41.3991 16.95 37.3891 15.1 35.3391V35.3491ZM13.88 43.9791C13.88 43.9791 13.82 43.9791 13.78 43.9791C10.55 43.5391 7.79 41.2391 6.42 37.8291C6.27 37.4691 6.45 37.0591 6.81 36.9091C7.17 36.7591 7.58 36.9391 7.73 37.2991C9.44 41.5291 12.67 42.3991 13.98 42.5791C14.36 42.6291 14.63 42.9891 14.58 43.3691C14.53 43.7191 14.23 43.9791 13.88 43.9791Z" fill="#323232"/>
          <path d="M20.8895 22.8005C19.3895 24.9505 18.9495 28.8305 20.2795 32.2305C23.9395 32.3305 27.4295 30.5805 28.9395 28.4305C32.1895 23.7905 31.8695 17.0705 34.0895 12.4805C30.5495 16.1405 24.1495 18.1405 20.8895 22.8005ZM25.2595 21.9005C21.8695 24.9505 22.1495 28.2805 22.4295 29.5705C22.5095 29.9505 22.2695 30.3205 21.8895 30.4105C21.8395 30.4205 21.7895 30.4305 21.7395 30.4305C21.4095 30.4305 21.1195 30.2005 21.0495 29.8705C20.7195 28.3405 20.3795 24.3905 24.3095 20.8505C24.5995 20.5905 25.0395 20.6105 25.2995 20.9005C25.5595 21.1905 25.5395 21.6305 25.2495 21.8905L25.2595 21.9005Z" fill="#323232"/>
          <path d="M21.7196 35.3508C19.8796 37.4008 18.9096 41.4108 19.8796 45.1308C23.6796 45.7008 27.5596 44.3208 29.4096 42.2708C33.3996 37.8308 33.9296 30.7908 36.8296 26.3008C32.6696 29.6508 25.7196 30.9208 21.7296 35.3608L21.7196 35.3508ZM26.0496 35.0708C22.3596 37.7408 22.2896 41.0908 22.4396 42.4108C22.4796 42.8008 22.1996 43.1408 21.8096 43.1908C21.7896 43.1908 21.7596 43.1908 21.7296 43.1908C21.3796 43.1908 21.0696 42.9208 21.0296 42.5608C20.8596 41.0008 20.9296 37.0408 25.2196 33.9308C25.5296 33.7008 25.9796 33.7708 26.1996 34.0908C26.4296 34.4108 26.3596 34.8508 26.0396 35.0708H26.0496Z" fill="#323232"/>
        </g>
        <defs>
          <clipPath id="clip0_872_4413">
            <rect width="36.83" height="45.26" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default WheatIcon;
