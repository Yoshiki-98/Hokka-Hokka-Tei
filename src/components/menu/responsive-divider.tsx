import React from 'react';
import { Divider, DividerProps, useTheme } from '@mui/material';

const ResponsiveDivider: React.FC<DividerProps> = (props) => {
  const theme = useTheme();

  return (
    <Divider
      color="black"
      flexItem
      sx={{
        width: {
          xs: '134px',
          md: '195px',
        },
        [theme.breakpoints.up('lg')]: {
          transition: 'width 0.3s ease',
        },
      }}
      {...props}
    />
  );
};

export default ResponsiveDivider;