import { IconProps } from '@/types/element-prop';
import React from 'react';
import {
  useMediaQuery,
  useTheme
} from '@mui/material';

const MilkIcon: React.FC<IconProps> = ({ onClick, disabled, className }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const width = isLgUp ? '25' : isMdUp ? '23' : isSmUp ? '21' : '19.66';
  const height = isLgUp ? '41' : isMdUp ? '38' : isSmUp ? '35' : '32.6';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-block ${className}`}
      style={{ width: 'auto', height: '41px' }}
    >
      <svg width={width} height={height} viewBox="0 0 25 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2678_13968)">
          <path d="M21.23 6.92C21.01 5.66 23.44 5.16 23.44 3.34V2.3C23.44 0.6 21.92 0 20.05 0H4.53001C2.66001 0 1.14001 0.6 1.14001 2.3V3.34C1.14001 5.16 3.56001 5.65 3.35001 6.92C3.35001 8.99 0.0100098 16.76 0.0100098 21.5V37.67C0.0100098 39.37 1.53001 40.75 3.40001 40.75H21.19C23.06 40.75 24.58 39.37 24.58 37.67V21.5C24.58 16.76 21.23 8.99 21.23 6.92ZM7.73001 12.27C7.16001 13.97 5.71001 18.76 5.71001 20.72C5.71001 22.98 6.00001 36.86 6.00001 36.99C6.02001 37.81 5.37001 38.49 4.55001 38.51H4.52001C3.71001 38.51 3.05001 37.86 3.04001 37.06C3.03001 36.49 2.75001 23.01 2.75001 20.72C2.75001 17.92 4.71001 11.98 4.93001 11.32C4.94001 11.28 4.97001 11.24 4.98001 11.2C5.45001 9.72 5.85001 8.34 5.85001 7.23C6.06001 7.19 18.73 7.23 18.73 7.23C18.73 8.53 19.41 10.45 20.05 12.47L7.74001 12.27H7.73001Z" fill="#323232"/>
        </g>
        <defs>
          <clipPath id="clip0_2678_13968">
            <rect width="24.58" height="40.75" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default MilkIcon;
