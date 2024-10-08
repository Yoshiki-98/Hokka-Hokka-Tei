import React from 'react';
import { ContainerProps } from '@/types/element-prop';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const MenuContainer: React.FC<ContainerProps> = ({ item }) => {
  const theme = useTheme();
  const isLgDown = useMediaQuery(theme.breakpoints.down('lg'));
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMobile = useMediaQuery('(max-width:393px)');

  const containerSizes = {
    sm: { width: isMobile ? '100%' : '353px', height: '235.33px' },
    md: { width: '420px', height: '280px' },
    lg: { width: '510px', height: '340px' },
    xl: { width: '660px', height: '440px' },
  };

  const size = isSmDown ? 'sm' : isMdDown ? 'md' : isLgDown ? 'lg' : 'xl';

  return (
    <Box
      sx={{
        ...containerSizes[size],
        overflow: 'hidden',
      }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 660 440" 
        preserveAspectRatio="xMidYMid meet" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="svgShape">
          <path d="M42.8285 2.93838C44.7046 1.05724 47.2522 0 49.909 0L608.802 0C611.407 0 613.91 1.01688 615.777 2.83418L656.975 42.9355C658.909 44.8181 660 47.4024 660 50.1014L659.999 385.847C659.999 388.495 658.948 391.034 657.079 392.909L613.039 437.062C611.163 438.943 608.616 440 605.959 440H51.452C48.6969 440 46.0638 438.863 44.1743 436.858L2.72229 392.87C0.973786 391.015 5.88707e-06 388.562 1.64577e-05 386.012L0.00140956 50.0142C0.00142053 47.3667 1.05132 44.8273 2.9209 42.9527L42.8285 2.93838Z" />
          </clipPath>
        </defs>
        <image
          href={item?.images?.[0] ?? '/images/no_image_thumbnail.webp'}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#svgShape)"
        />
      </svg>
    </Box>
  );
};

export default MenuContainer;
