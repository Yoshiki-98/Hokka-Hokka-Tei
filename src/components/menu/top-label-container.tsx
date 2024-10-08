import React from 'react';
import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';

const TopLabel: React.FC<BoxProps> = ({
  ...boxProps
}) => {
  const isMobile = useMediaQuery('(max-width:690px)');

  return (
    <Box
      className="top-label-container"
      {...boxProps}
      sx={{
        paddingTop: isMobile ? '35px' : '10px',
        marginBottom: isMobile ? '50px' : '100px'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: isMobile ? '50px' : '100px',
          maxHeight: '100px',
        }}
      >
        <Image
          src='/images/hokatei-mask.webp'
          alt='ほっかほっか亭のラベル'
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>
    </Box>
  );
};

export default TopLabel;
