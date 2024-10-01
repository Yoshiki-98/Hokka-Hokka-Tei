import React from 'react';
import { LogoProps } from '@/types/element-prop';
import { useMediaQuery, useTheme } from '@mui/material';

const HokateiMenuDownArrow: React.FC<LogoProps> = ({ onClick, disabled, className }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const getSize = () => {
    if (isMdUp) return { width: 21, height:  12};
    if (isSmUp) return { width: 15, height: 9 };
    return { width: 14, height: 7.94 }; // デフォルトサイズ（xs）
  };

  const { width, height } = getSize();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        width: `${width}px`, 
        height: `${height}px`
      }}
    >
      <g clipPath="url(#clip0_3547_15192)">
        <path d="M19.5764 0.322522L20.6749 1.55305L18.6628 3.53879L16.6084 5.53509L14.5381 7.51555L12.7161 9.74423L10.6195 11.6719L8.58092 9.70198L6.47899 7.74792L4.64641 5.52981L2.38604 3.73947L0.674927 1.52664L1.66252 0.327803L3.80669 2.75189L6.01424 5.04394L8.26405 7.29374L10.6195 9.32173L12.9749 7.29902L15.0557 4.88022L17.2897 2.61457L19.5764 0.322522Z" fill="#323232"/>
      </g>
      <defs>
        <clipPath id="clip0_3547_15192">
          <rect width="20" height="11.3494" fill="white" transform="matrix(-1 0 0 -1 20.6749 11.6719)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HokateiMenuDownArrow;
