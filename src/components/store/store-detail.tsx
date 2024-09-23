'use client'

import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Box,
  useMediaQuery,
  Link,
} from '@mui/material';
import axios from 'axios';
import { Store } from '@/types/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Wrapper } from "@googlemaps/react-wrapper";
import { prefsWithCities } from '@/data/prefs-with-cities';
import { getDeliveryServiceDataById } from '@/utils/theme/delivery-service-utils';
import Header from '../header';
import Footer from '../footer';
import MobileOrderIndicator from '@/components/svg/button/indicator/mobile-order';
import UberEatsIndicator from '@/components/svg/button/indicator/uber-eats';
import DemaeKanIndicator from '@/components/svg/button/indicator/demae-kan';
import BulkOrderIndicator from '@/components/svg/button/indicator/bulk-order';
import CoinLaundryIndicator from '@/components/svg/button/indicator/coin-laundry';
import WoltIndicator from '@/components/svg/button/indicator/wolt';
import { Service } from '@/types/delivery-service';
import { MapComponent } from '../map/map-component';
import { MarkerConfig } from '@/types/map-marker';
import { chunkArray } from '@/utils/array-utils';
import { formatPhoneNumber } from '@/utils/format-utils';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY;

const theme = createTheme({
  palette: {
    background: {
      default: '#FFF1E6',
    },
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#008000',
    },
  },
})

const buttonComponents = {
  MobileOrderIndicator,
  BulkOrderIndicator,
  CoinLaundryIndicator,
  UberEatsIndicator,
  DemaeKanIndicator,
  WoltIndicator,
};

export default function StoreDetail() {
  const [store, setStore] = useState<Store|undefined>(undefined);
  const [marker, setMarker] = useState<MarkerConfig | undefined>(undefined);
  const [mapCenter, setMapCenter] = useState<any>(undefined);

  const windowPath = typeof window !== 'undefined' ? window.location.pathname : null;
  const pathSegments = windowPath ? windowPath.split('/') : null;
  const storeId = pathSegments ? pathSegments[pathSegments.length - 1] : null;

  const fetchStore = async (id: string) => {
    try {
      const res = await axios.get('/api/store', { params: { id: id } });
      const storeData = res.data;

      setStore(storeData);

      const city = prefsWithCities.flatMap(pref => pref.cities)
        .find(city => city.code === String(storeData.cityCode));

      const cityCenter = { lat: city?.lat, lng: city?.lng };
      setMapCenter(cityCenter);

      const markerData = {
        zoom: 10,
        position: storeData.location,
        title: storeData.name
      } as MarkerConfig;

      setMarker(markerData);

      return storeData;
    } catch (error) {
      console.error('店舗のフェッチに失敗しました:', error);
    }
  }

  useEffect(() => {
    fetchStore(storeId!);
  }, [storeId]);

  const infoItems = [
    { label: '営業時間', value: store?.businessHours },
    { label: '住所', value: store?.address },
    { label: '電話番号', value: store?.phone && formatPhoneNumber(store?.phone) },
    { label: 'その他', value: store?.deliveryHours && `昼の宅配 ${store?.deliveryHours}` },
  ];

  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header/>
        <Container className="w-full text-black mb-[200px]" sx={{ minWidth: '90%'}}>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: {xs: '24px', sm: '28px', lg: '36px'},
              mb: 4
            }}
          >
            {store?.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              margin: '0 auto 50px auto',
              alignItems: 'center',
              justifyContent: {xs: 'center', md: 'space-between'}
            }}
          >
            <Box
              sx={{
                width: {md: '48%'}
              }}
            >
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
            {
              isMdUp && (
                <Box
                  sx={{
                    alignItems: 'flex-end',
                    margin: {md: '0 auto'},
                    width: '52%'
                  }}
                >
                  <Typography
                    sx={{
                      marginLeft: '20%',
                      marginBottom: 2
                    }}
                    variant="h5"
                    fontWeight="bold"
                  >
                    対応サービス
                  </Typography>
                  <Box className="flex flex-col gap-2">
                    {store?.deliveryServices && store.deliveryServices.length > 0 &&
                      chunkArray(store.deliveryServices, 3).map((chunk, rowIndex) => {
                        return (
                          <Box
                            key={`row_${rowIndex}`}
                            className="flex gap-2"
                            sx={{ justifyContent: 'flex-end'}}
                          >
                            {chunk.map((deliveryServiceId: Service) => {
                              const deliveryService = getDeliveryServiceDataById(deliveryServiceId)
                              const ButtonComponent = buttonComponents[deliveryService?.indicator as keyof typeof buttonComponents];

                              return (
                                <Link
                                  key={`service_0${deliveryServiceId}`}
                                  href={deliveryService?.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ButtonComponent />
                                </Link>
                              )
                            })}
                          </Box>
                    )})}
                  </Box>
                </Box>
              )
            }
          </Box>
          {
            !isMdUp && (
              <Box>
                <Typography variant="h5" fontWeight="bold" mb={2}>
                  対応サービス
                </Typography>
                <Box className="flex flex-col">
                  {store?.deliveryServices && store.deliveryServices.length > 0 &&
                    chunkArray(store.deliveryServices, isSmUp ? 3 : 2).map((chunk, rowIndex) => {
                      return (
                        <Box
                          key={`row_${rowIndex}`}
                          className="flex gap-5"
                          sx={{margin: '0 auto'}}
                        >
                          {chunk.map((deliveryServiceId: Service) => {
                            const deliveryService = getDeliveryServiceDataById(deliveryServiceId)
                            const ButtonComponent = buttonComponents[deliveryService?.indicator as keyof typeof buttonComponents];

                            return (
                              <Box key={`service_0${deliveryServiceId}`}>
                                <ButtonComponent />
                              </Box>
                            )
                          })}
                        </Box>
                  )})}
                </Box>
              </Box>
            )
          }
          <Box className="mx-auto">
            <Box className="mt-10 mb-[20px]">
              <Typography sx={{fontWeight: 'bold', fontSize: '24px'}}>アクセス</Typography> 
            </Box>
            <Box
              sx={{
                '& > div': {  // Wrapper に直接渡す
                  minHeight: {xs: '353px !important',lg: '600px !important'},
                },
              }}
            >
              <Wrapper apiKey={apiKey!} version="beta" libraries={["marker"]}>
                {marker && mapCenter && mapCenter.lat !== undefined && mapCenter.lng !== undefined &&
                  <MapComponent marker={marker} mapCenter={mapCenter} />
                }
              </Wrapper>
            </Box>
          </Box>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
