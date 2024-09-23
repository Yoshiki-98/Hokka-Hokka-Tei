import React, { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

interface CustomShapeContainerProps {
  children?: ReactNode;
  width?: number | string;
  height?: number | string;
}

const SVGContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
});

const HexagonalBox: React.FC<CustomShapeContainerProps> = ({
  children,
  width = 630,
  height = 138,
}) => {
  return (
    <SVGContainer style={{ width, height }}>
      <svg 
        width="100%" 
        height="100%"
        viewBox="0 0 630 138" 
        preserveAspectRatio="xMidYMid meet" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="customShape">
            <path d="M14.5711 2.92893C16.4464 1.05357 18.99 0 21.6421 0H607.94C610.544 0 613.044 1.01528 614.911 2.83005L626.971 14.5549C628.907 16.4377 630 19.0239 630 21.7249V114.858C630 117.51 628.946 120.054 627.071 121.929L613.929 135.071C612.054 136.946 609.51 138 606.858 138H22.3013C19.5554 138 16.9303 136.871 15.0418 134.877L2.74048 121.893C0.980773 120.035 0 117.574 0 115.015V21.6421C0 18.99 1.05357 16.4464 2.92893 14.5711L14.5711 2.92893Z" />
          </clipPath>
        </defs>
        <rect width="100%" height="100%" fill={'white'} clipPath="url(#customShape)" />
      </svg>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: { xs: 0, sm: -80 },
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </Box>
    </SVGContainer>
  );
};

export default HexagonalBox;
