import React from 'react';
import Box from '@mui/material/Box';
import Loading from './loading';

const LoadingScreen = () => {

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        zIndex: 1200,
      }}
    >
      <Loading />
    </Box>
  )
};

export default LoadingScreen;
