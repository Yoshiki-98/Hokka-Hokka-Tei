import React from 'react';
import {
  Chip,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExpandedChip from './expanded-chip';

interface CustomChipProps {
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
}

const AllergenChip: React.FC<CustomChipProps> = ({ allergen, index, rowIndex, array, menuItem, iconButton }) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    rowIndex === 0 && index === 4 || rowIndex === 1 && index === 0 ? (
      <ExpandedChip
        allergen={allergen}
        index={index}
        rowIndex={rowIndex}
        array={array}
        menuItem={menuItem}
        iconButton={iconButton}
        expandBy={20} // 必要に応じて調整
      />
    ) : (
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
          marginRight:
            isLgUp ? index+1 !== array.length ? '30px' : 0 :
            isMdUp ? index+1 !== array.length ? '12.5px' : 0 : 0,
          backgroundColor: '#FFF',
          opacity: menuItem?.allergens?.includes((index + 1) + (rowIndex * 4)) ? 1 : 0.2,
          borderRadius: '50%',
          height: { xs: 80, md: 90, lg: 100 },
          width: { xs: 80, md: 90, lg: 100 },
          '& .MuiChip-label': {
            padding: 0,
            width: '100%',
            height: '100%',
          },
        }}
      />
    )
  );
};

export default AllergenChip;
