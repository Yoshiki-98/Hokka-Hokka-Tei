import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { Menu } from '@/types/menu';

interface NutritionInfoProps {
  menuItem: Menu;
}

const NutritionInfo: React.FC<NutritionInfoProps> = ({ menuItem }) => {
  const nutritionItems: { label: string; value: string }[] = [
    { label: 'エネルギー', value: `${menuItem.nutrition.energy} kcal` },
    { label: 'タンパク質', value: `${menuItem.nutrition.protein} g` },
    { label: '脂質', value: `${menuItem.nutrition.fat} g` },
    { label: '炭水化物', value: `${menuItem.nutrition.carbohydrate} g` },
    { label: '食塩相当量', value: `${menuItem.nutrition.salt} g` },
  ];

  return (
    <Box className="flex flex-wrap items-center justify-center">
      {nutritionItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <Divider className="h-[70px]" color="#323232" orientation="vertical" flexItem sx={{ mx: 1, color: "#323232" }} />
          )}
          <Box className="flex flex-col items-center" sx={{ flexDirection: 'column', alignItems: 'center', p: 1 }}>
            <Typography sx={{fontSize: '14px'}} className="p-[15px]">{item.label}</Typography>
            <Divider className="w-[222px]" color="#323232" flexItem />
            <Typography sx={{fontSize: '24px', fontWeight: 'bold'}} className="p-[15px]">{item.value}</Typography>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

export default NutritionInfo;
