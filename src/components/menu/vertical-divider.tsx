import React from 'react';
import { Divider, DividerProps, SxProps, Theme } from '@mui/material';

interface VerticalDividerProps extends Omit<DividerProps, 'orientation'> {
  height?: string | number;
  mx?: number | string;
  backgroundColor?: string;
  customSx?: SxProps<Theme>;
}

const VerticalDivider: React.FC<VerticalDividerProps> = ({
  height = '70px',
  mx = 1,
  backgroundColor = '#323232',
  customSx,
  ...props
}) => {
  return (
    <Divider
      orientation="vertical"
      flexItem
      sx={{
        mx,
        height,
        alignSelf: 'center',
        backgroundColor,
        ...customSx,
      }}
      {...props}
    />
  );
};

export default VerticalDivider;
