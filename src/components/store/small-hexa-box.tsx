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

const SmallHexaBox: React.FC<CustomShapeContainerProps> = ({
  children,
  width = 353,
  height = 151,
}) => {
  return (
    <SVGContainer style={{ width, height }}>
      <svg
        width="353"
        height="151"
        viewBox="0 0 353 151"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="customShape">
            <path d="M14.5732 2.91642C16.4476 1.04871 18.9857 0 21.6318 0H330.95C333.548 0 336.043 1.01052 337.909 2.81773L349.958 14.4912C351.902 16.3749 353 18.9663 353 21.6735V127.915C353 130.573 351.942 133.122 350.059 134.998L336.927 148.084C335.052 149.951 332.514 151 329.868 151H22.2909C19.5511 151 16.9313 149.876 15.0435 147.89L2.75264 134.962C0.98545 133.104 0 130.637 0 128.072V21.5907C0 18.9324 1.05843 16.3835 2.94146 14.5071L14.5732 2.91642Z" fill="white"/>
          </clipPath>
        </defs>
        <rect width="100%" height="100%" fill={'white'} clipPath="url(#customShape)" />
      </svg>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: -35,
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

export default SmallHexaBox;
