import React from 'react';
import { Box, Typography } from '@mui/material';
import { Store } from '@/types/store';
import { formatPhoneNumber } from '@/utils/format-utils';

interface StoreInfoComponentProps {
  store: Store|undefined
};

export const StoreInfoComponent: React.FC<StoreInfoComponentProps> = ({ store }) => {
  const infoItems = [
    { label: '営業時間', value: store?.businessHours },
    { label: '住所', value: store?.address },
    { label: '電話番号', value: store?.phone && formatPhoneNumber(store?.phone) },
    { label: 'その他', value: store?.deliveryHours && `昼の宅配 ${store?.deliveryHours}` },
  ];

  return (
    <Box sx={{width: {md: '48%'}}}>
      <Typography
        sx={{fontSize: '20px', mb: 2}}
        className="text-bold text-[#EE0026]"
        variant="h5"
        fontWeight="bold"
      >
        {store?.comment}
      </Typography>
      <Box>
        <Box>
          {infoItems.map((item, index) => (
            <Box
              key={index}
              sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}
            >
              <Typography
                component="span"
                sx={{
                  minWidth: '80px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}
              >
                {item.label}
              </Typography>
              <Typography
                component="span"
                sx={{
                  pl: 2,
                  fontSize: '14px'
                }}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
};
