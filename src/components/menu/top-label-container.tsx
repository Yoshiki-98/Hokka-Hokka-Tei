import React from 'react';
import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';

const TopLabel: React.FC<BoxProps> = ({
  ...boxProps
}) => {
  return (
    <Box
      className="top-label-container"
      {...boxProps}
      sx={{
        paddingTop: '10px',
        marginBottom: '100px'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '25px', sm: '37.5px', md: '100px' },
          maxHeight: '100px',
        }}
      >
        <Image
          src='/images/hokatei-mask.png'
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
