import { Box, useMediaQuery, createTheme, Divider, Typography } from '@mui/material';
import { Menu } from '@/types/menu';
import { Nutrition } from '@/types/nutrition';
import { chunkArray } from '@/utils/array-utils';
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import VerticalDivider from './vertical-divider';
import ResponsiveDivider from './responsive-divider';

interface NutritionInfoProps {
  menuItem: Menu;
}

const NutritionInfo: React.FC<NutritionInfoProps> = ({ menuItem }) => {
  const theme = useTheme();
  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  const isXsUp = useMediaQuery(theme.breakpoints.up('xs'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  const currentIsNotLg = currentBreakpoint !== 'lg';

  useEffect(() => {
    if (isLgUp) setCurrentBreakpoint('lg');
    else if (isSmUp) setCurrentBreakpoint('sm');
    else if (isXsUp) setCurrentBreakpoint('xs');
  }, [isXsUp, isSmUp, isLgUp]);

  const nutritionItems: Nutrition[] = [
    {
      label: 'エネルギー',
      value: menuItem.nutrition?.energy
        ? `${menuItem.nutrition?.energy} kcal`
        : '未設定'
    },
    {
      label: 'タンパク質',
      value: menuItem.nutrition?.protein
        ? `${menuItem.nutrition?.protein} g`
        : '未設定'
      },
    {
      label: '脂質',
      value: menuItem.nutrition?.fat
        ? `${menuItem.nutrition?.fat} g`
        : '未設定'
    },
    {
      label: '炭水化物',
      value: menuItem.nutrition?.carbohydrate
        ? `${menuItem.nutrition?.carbohydrate} g`
        : '未設定'
      },
    { label: '食塩相当量',
      value: menuItem.nutrition?.salt
        ? `${menuItem.nutrition?.salt} g`
        : '未設定'
      },
  ];

  // 折り返しのパターン [5, (3, 2), (2,2,1)]
  const itemsPerRow: { [key: string]: number } = { xs: 2, sm: 3, lg: 5 };

  return (
    <Box
      className="flex-col gap-3 items-center justify-center"
      sx={{
        marginBottom: '50px',
        flexDirection: 'column'
      }}
    >
      {chunkArray(nutritionItems, itemsPerRow[currentBreakpoint]).map((chunk, rowIndex) => {
        return (
          <Box
            key={`row_${rowIndex}`}
            className="flex gap-2"
            sx={{
              margin: '0 auto'
            }}
          >
            {currentIsNotLg && <VerticalDivider/>}
            {chunk.map((item: Nutrition, index, array) => (
              <React.Fragment key={index}>
                {index > 0 && <VerticalDivider/>}
                <Box
                  className="flex flex-col items-center"
                  sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: isSmUp? 1: 0,
                    py: 1
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      padding: '15px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.label}
                  </Typography>
                  <ResponsiveDivider 
                    color="#323232"
                    flexItem
                  />
                  <Typography
                    sx={{
                      padding: '15px',
                      fontSize: '24px',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </React.Fragment>
            ))}
            {currentIsNotLg && <VerticalDivider/>}
          </Box>
      )})}
    </Box>
  );
};

export default NutritionInfo;
