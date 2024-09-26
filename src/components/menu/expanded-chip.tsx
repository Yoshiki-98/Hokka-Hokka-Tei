import React from 'react';
import { Box, Chip, Typography, useMediaQuery, useTheme } from '@mui/material';

interface ExpandedChipProps {
  allergen: {
    nameEn: string;
    name: string;
  };
  index: number;
  rowIndex: number;
  array: any[];
  menuItem?: {
    allergens: number[];
  };
  iconButton: any;
  expandBy?: number;
}

const ExpandedChip: React.FC<ExpandedChipProps> =  ({ allergen, index, rowIndex, array, menuItem, iconButton, expandBy = 20 }) => {
  const chipSize = { xs: 80, md: 90, lg: 100 };

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: chipSize.xs, md: chipSize.md, lg: chipSize.lg },
        height: { xs: chipSize.xs + expandBy, md: chipSize.md + expandBy, lg: chipSize.lg + expandBy },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:
          isLgUp ? index + 1 !== array.length ? '30px' : 0 :
          isMdUp ? index + 1 !== array.length ? '12.5px' : 0 : 0,
      }}
    >
      <Chip
        color="default"
        label={
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: { xs: '15%', sm: '15%', md: '20%' },
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {iconButton}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: { xs: '14px', sm: '0.75rem', md: '0.875rem' },
                textAlign: 'center',
                width: '90%',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
              }}
            >
              {allergen.name}
            </Box>
          </Box>
        }
        sx={{
          position: 'absolute',
          top: 0,
          backgroundColor: '#FFF',
          opacity: menuItem?.allergens?.includes((index + 1) + (rowIndex * 4)) ? 1 : 0.2,
          borderRadius: '50%',
          height: { xs: chipSize.xs, md: chipSize.md, lg: chipSize.lg },
          width: { xs: chipSize.xs, md: chipSize.md, lg: chipSize.lg },
          '& .MuiChip-label': {
            padding: 0,
            width: '100%',
            height: '100%',
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: { xs: chipSize.xs, md: chipSize.md, lg: chipSize.lg },
        }}
      >
        <Typography
          sx={{
            fontSize: '10px',
            whiteSpace: 'nowrap',
            opacity: menuItem?.allergens?.includes((index + 1) + (rowIndex * 4)) ? 1 : 0.2,
          }}
        >
          ※ピーナッツも含む
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpandedChip;