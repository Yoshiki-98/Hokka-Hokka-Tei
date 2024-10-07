import React from 'react';
import { LogoProps } from '@/types/element-prop';
import { useMediaQuery, useTheme } from '@mui/material';

interface MenuArrowProps extends LogoProps {
  isHovered?: boolean;
}

const HamburgerMenuRightArrow: React.FC<MenuArrowProps> = ({ isHovered }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const getSize = () => {
    if (isMdUp) return { width: 12, height:  20};
    if (isSmUp) return { width: 9, height: 15 };
    return { width: 7.94, height: 14 }; // デフォルトサイズ（xs）
  };

  const { width, height } = getSize();

  return (
    <svg
      width={width} 
      height={height} 
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        marginTop: isHovered ? '2px' : 0
      }}
    >
      <g clipPath="url(#clip0_664_2522)">
        <path d="M0.000255537 1.09849L1.23078 -4.42308e-07L3.21652 2.01215L5.21283 4.06654L7.19328 6.13678L9.42196 7.95881L11.3496 10.0555L9.37971 12.094L7.42566 14.1959L5.20754 16.0285L3.41721 18.2889L1.20438 20L0.0055362 19.0124L2.42962 16.8682L4.72167 14.6607L6.97147 12.4109L8.99946 10.0555L6.97675 7.70003L4.55795 5.61922L2.29231 3.38526L0.000255537 1.09849Z" fill={isHovered ? "rgb(238, 0, 38)" : "#323232"}/>
      </g>
      <defs>
        <clipPath id="clip0_664_2522">
          <rect width="20" height="11.3494" fill="white" transform="translate(11.3496) rotate(90)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default HamburgerMenuRightArrow;
