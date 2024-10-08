import React from 'react';
import { IconProps } from '@/types/element-prop';
import {
  useMediaQuery,
  useTheme
} from '@mui/material';

const BuckWheatIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const width = isLgUp ? '41' : isMdUp ? '38' : isSmUp ? '35' : '32.27';
  const height = isLgUp ? '39' : isMdUp ? '36' : isSmUp ? '33' : '30.54';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={
        { width: 'auto', height: '40px' }
      }
    >
      <svg width={width} height={height} viewBox="0 0 41 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2678_13956)">
          <path d="M20.0699 0.00046875C20.0699 0.00046875 -1.41009 8.70047 14.5599 17.9905C12.8599 10.2505 17.8099 3.11047 18.0299 2.79047C18.3999 2.27047 19.1199 2.15047 19.6399 2.51047C20.1599 2.88047 20.2799 3.60047 19.9199 4.11047C19.8499 4.21047 14.8099 11.5505 17.1399 18.6705C17.1399 18.7005 17.1499 18.7305 17.1599 18.7605C32.0299 20.4105 27.5799 4.65047 20.0799 -0.0195312L20.0699 0.00046875Z" fill="#323232"/>
          <path d="M2.05004 23.11C1.90004 22.49 2.27004 21.87 2.89004 21.71C3.51004 21.56 4.13004 21.93 4.28004 22.55C4.30004 22.63 6.31004 30.4 13.49 33.67C13.63 33.73 13.75 33.82 13.85 33.92C24.85 22.93 9.47004 16.71 1.10004 19.84C1.10004 19.84 -5.01996 41.87 11.62 35.31C4.17004 31.37 2.14004 23.45 2.05004 23.1V23.11Z" fill="#323232"/>
          <path d="M37.5 20.0781C37.5 20.0781 14.69 20.3981 25.58 34.4781C26.79 28.0781 34.17 22.2581 34.51 21.9981C35.01 21.6081 35.74 21.6981 36.13 22.1981C36.52 22.6981 36.43 23.4281 35.93 23.8181C35.85 23.8781 28.13 29.9781 27.74 35.7781C27.73 35.9581 27.67 36.1281 27.58 36.2681C41.22 43.7381 42.86 27.2281 37.51 20.0781H37.5Z" fill="#323232"/>
        </g>
        <defs>
          <clipPath id="clip0_2678_13956">
            <rect width="40.34" height="38.17" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default BuckWheatIcon;
