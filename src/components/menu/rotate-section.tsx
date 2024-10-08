import React from 'react';
import { Box, BoxProps } from '@mui/material';

interface RotateSectionProps extends BoxProps {
  children: React.ReactNode;
  rotationDegree?: number;
  duration?: number;
  isEnabled?: boolean;
}

const RotateSection: React.FC<RotateSectionProps> = ({ 
  children, 
  rotationDegree = 8, 
  duration = 0.3,
  isEnabled = true,
  ...boxProps 
}) => {
  return (
    <Box
      sx={{
        transition: `transform ${duration}s ease-out`,
        '&:hover': {
          transform: isEnabled ? `rotate(${rotationDegree}deg)` : 'none',
        },
        willChange: 'transform',
        ...boxProps.sx
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default RotateSection;
