import React from 'react';
import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { chunkArray } from '@/utils/array-utils';
import { getDeliveryServiceDataById } from '@/utils/theme/delivery-service-utils';

import MobileOrderIndicator from '@/components/svg/button/indicator/mobile-order';
import UberEatsIndicator from '@/components/svg/button/indicator/uber-eats';
import DemaeKanIndicator from '@/components/svg/button/indicator/demae-kan';
import BulkOrderIndicator from '@/components/svg/button/indicator/bulk-order';
import CoinLaundryIndicator from '@/components/svg/button/indicator/coin-laundry';
import WoltIndicator from '@/components/svg/button/indicator/wolt';
import { Service } from '@/types/delivery-service';
import { Store } from '@/types/store';

interface DeliveyServiceComponentProps {
  store: Store|undefined
};

const buttonComponents = {
  MobileOrderIndicator,
  BulkOrderIndicator,
  CoinLaundryIndicator,
  UberEatsIndicator,
  DemaeKanIndicator,
  WoltIndicator,
};

export const DeliveryServiceComponent: React.FC<DeliveyServiceComponentProps> = ({ store }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSubLgUp = useMediaQuery('(min-width:1024px)');

  return isSubLgUp ? (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: {md: '0 auto'},
        width: '52%'
      }}
    >
      <Box className="flex-col">
        <Box>
          <Typography
            sx={{ marginBottom: 2 }}
            variant="h5"
            fontWeight="bold"
          >
            対応サービス
          </Typography>
        </Box>
        <Box className="flex-col">
          {store?.deliveryServices && store.deliveryServices.length > 0 &&
            chunkArray(
              (store.deliveryServices as unknown as number[]).sort((a, b) => a - b), 3
            ).map((chunk, rowIndex) => {
              return (
                <Box
                  key={`row_${rowIndex}`}
                  sx={{
                    gap: {xs: 0.5, md: 0, lg: 1.5},
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '100%'
                  }}
                >
                  {chunk.map((deliveryServiceId: Service) => {
                    const deliveryService = getDeliveryServiceDataById(deliveryServiceId)
                    const ButtonComponent = buttonComponents[deliveryService?.indicator as keyof typeof buttonComponents];

                    return (
                      <IconButton
                        key={`service_0${deliveryServiceId}`}
                        href={deliveryService?.url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        onTouchStart={() => {}} // iOS Safari用のタッチイベントを追加
                      >
                        <ButtonComponent
                          key={`service_0${deliveryServiceId}`}
                        />
                      </IconButton>
                    )
                  })}
                </Box>
              )
            })
          }
        </Box>
      </Box>
    </Box>
  ) : (
    <Box>
      <Box sx={{textAlign: isSubLgUp ? 'unset' : isMdUp ? 'center' : 'unset'}}>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={2}
        >
          対応サービス
        </Typography>
        <Box className="flex flex-col">
          {store?.deliveryServices && store.deliveryServices.length > 0 &&
            chunkArray(
              (store.deliveryServices as unknown as number[]).sort((a, b) => a - b), isSmUp ? 3 : 2
            ).map((chunk, rowIndex) => {
              return (
                <Box
                  key={`row_${rowIndex}`}
                  className="flex justify-center"
                >
                  {chunk.map((deliveryServiceId: Service) => {
                    const deliveryService = getDeliveryServiceDataById(deliveryServiceId)
                    const ButtonComponent = buttonComponents[deliveryService?.indicator as keyof typeof buttonComponents];

                    return (
                      <IconButton
                        key={`service_0${deliveryServiceId}`}
                        href={deliveryService?.url!}
                        target="_blank"
                        rel="noopener noreferrer"
                        onTouchStart={() => {}} // iOS Safari用のタッチイベントを追加
                      >
                        <ButtonComponent
                          key={`service_0${deliveryServiceId}`}
                        />
                      </IconButton>
                    )
                  })}
                </Box>
          )})}
        </Box>
      </Box>
    </Box>
  )
};
