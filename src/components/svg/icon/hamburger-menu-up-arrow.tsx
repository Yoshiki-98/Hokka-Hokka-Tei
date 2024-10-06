import React from 'react';
import { LogoProps } from '@/types/element-prop';
import { useMediaQuery, useTheme } from '@mui/material';

interface MenuArrowProps extends LogoProps {
  isHovered?: boolean;
}

const HokateiMenuUpArrow: React.FC<MenuArrowProps> = ({ onClick, disabled, className, isHovered }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const getSize = () => {
    if (isMdUp) return { width: 21, height:  12};
    if (isSmUp) return { width: 15, height: 9 };
    return { width: 14, height: 8 }; // デフォルトサイズ（xs）
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
        height: `${height}px`,
        marginTop: isHovered ? '2px' : 0
      }}
    >
        <g clipPath="url(#clip0_1494_10341)">
          <path d="M1.7733 11.6755L0.674805 10.445L2.68695 8.45926L4.74135 6.46296L6.81159 4.4825L8.63361 2.25382L10.7303 0.326172L12.7688 2.29607L14.8707 4.25012L16.7033 6.46824L18.9637 8.25857L20.6748 10.4714L19.6872 11.6702L17.543 9.24616L15.3355 6.95411L13.0857 4.70431L10.7303 2.67632L8.37483 4.69903L6.29403 7.11783L4.06007 9.38347L1.7733 11.6755Z" fill={isHovered ? "rgb(238, 0, 38)" : "#323232"}/>
        </g>
      <defs>
        <clipPath id="clip0_1494_10341">
          <rect width="20" height="11.3494" fill="white" transform="translate(0.674805 0.326172)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HokateiMenuUpArrow;
