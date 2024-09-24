import React from 'react';
import {
  Chip,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';

interface CustomChipProps {
  allergen: {
    nameEn: string;
    name: string;
  };
  index: number;
  array: any[];
  menuItem?: {
    allergens: number[];
  };
  iconButton: any;
}

const AllergenChip: React.FC<CustomChipProps> = ({ allergen, index, array, menuItem, iconButton }) => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  return (
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
        mr: index === array.length - 1 ? 0 : isLgUp ? '30px' : isSmUp ? '20px' : '10px',
        backgroundColor: '#FFF',
        opacity: menuItem?.allergens?.includes(index+1) ? 1 : 0.2,
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
  );
};

export default AllergenChip;
